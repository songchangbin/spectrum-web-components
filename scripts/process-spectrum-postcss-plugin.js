/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const postcss = require('postcss');
const { re } = require('re-template-tag');
const path = require('path');
const fs = require('fs');

class SpectrumProcessor {
    constructor(component) {
        this.component = component;
        this.mappings = [];
    }

    warn(...args) {
        this.result.warn(...args);
    }

    get selectorTransform() {
        // Compose a series of transformations for selectors.
        const transformations = [];

        // Check if this selector uses a complex combinator with the host
        const complexSelectorRegex = re`${this.hostSelector}\s*([>+~]|\|\|)\s*`;
        transformations.push((selector, rule) => {
            const match = complexSelectorRegex.exec(selector);
            if (match) {
                this.warn(
                    `:host rules cannot use complex combinator (${match[1]})`,
                    {
                        node: rule,
                        word: match[1],
                    }
                );
                return;
            }
            return selector;
        });

        // Add a mapping that strips references to the host component from
        // selectors, as the shadow DOM scoping handles that for us
        // e.g. ".spectrum-Button .spectrum-Button-label" -> ".spectrum-Button-label"
        const hostRegex = re`/^${this.hostSelector}\s+(.*)$/`;
        transformations.push((selector) => selector.replace(hostRegex, '$1'));

        // Transform component selectors into :host selectors
        const hostRegexPartial = re`^${this.hostSelector}([:.][^\s]*)?$`;
        transformations.push((selector) =>
            selector.replace(hostRegexPartial, (match, remainder) => {
                return remainder ? `:host(${remainder})` : ':host';
            })
        );

        // Map shadow DOM classes to ids
        // e.g. ".spectrum-Button-label" -> "#label"
        if (this.component.ids) {
            for (const id of this.component.ids) {
                const idName = this.stripHostFromSelector(id);
                if (idName) {
                    const idSelector = `#${idName}`;
                    transformations.push((selector) =>
                        selector.replace(
                            this.regexForClassSelector(id),
                            idSelector
                        )
                    );
                }
            }
        }

        // Map classes to attributes
        if (this.component.attributes) {
            for (const attribute of this.component.attributes) {
                if (attribute.type === 'boolean') {
                    const attrName = this.stripHostFromSelector(
                        attribute.selector
                    );
                    const selectorExpr = this.regexForHostSelector(
                        attribute.selector
                    );
                    transformations.push((selector) =>
                        selector.replace(selectorExpr, `:host([${attrName}]$1)`)
                    );
                } else if (attribute.type === 'enum') {
                    for (const selector of attribute.selectors) {
                        const attrName = this.stripHostFromSelector(selector);
                        const selectorExpr = this.regexForHostSelector(
                            selector
                        );
                        transformations.push((selector) =>
                            selector.replace(
                                selectorExpr,
                                `:host([${attribute.name}="${attrName}"]$1)`
                            )
                        );
                    }
                }
            }
        }

        return (selector, rule) => {
            let result = selector;
            for (const transformation of transformations) {
                result = transformation(result, rule);
                if (result == null) break;
            }
            return result;
        };
    }

    convertSelectors(rule) {
        const result = [];

        const startsWithHost = re`^${this.hostSelector}`;
        const selectorTransform = this.selectorTransform;

        for (let selector of rule.selectors) {
            if (!startsWithHost.test(selector)) {
                continue;
            }
            const transformed = selectorTransform(selector, rule);
            if (transformed) {
                result.push(transformed);
            }
        }

        return result;
    }

    run(root, result) {
        this.root = root;
        this.result = result;

        const comment = postcss.comment({ text: this.headerText });
        this.result.root = postcss.root({
            nodes: [
                postcss.comment({ text: 'stylelint-disable' }),
                postcss.comment({ text: this.headerText }),
            ],
        });

        root.walkRules((rule) => this.processRule(rule, result));
    }

    processRule(rule, result) {
        this.result = result;

        if (rule.selector === ':root') {
            // Make sure that there are no :root rules
            rule.walkDecls((decl) => {
                decl.warn(
                    result,
                    ':root node unsupported in extraction for web components'
                );
                return false;
            });
            return;
        }

        const convertedSelectors = this.convertSelectors(rule);
        this.appendRule(
            convertedSelectors,
            rule.nodes,
            `${rule.selectors.join(',\n   * ')}`
        );
    }

    appendRule(selectors, nodes, comment) {
        if (selectors.length === 0) return;

        const selector = selectors.join(',');
        let parentRule;
        this.result.root.walkRules(selector, (rule) => {
            parentRule = rule;
            return false;
        });

        if (!parentRule) {
            parentRule = postcss.rule({ selectors });
            this.result.root.append(parentRule);
        }

        if (comment) {
            comment = postcss.comment({ text: comment });
            parentRule.append(comment);
        }

        parentRule.append(nodes);
    }

    stripHostFromSelector(className) {
        const hostPortion = re`/${this.hostSelector}--?(.*)$/`;
        const match = hostPortion.exec(className);
        if (!match) {
            this.warn(
                `Do not know how to handle classname (${className}) that does not start with host selector (${
                    this.hostSelector
                })`
            );
            return;
        }
        return match[1];
    }

    regexForClassSelector(selector) {
        return re`/${selector}(?=$|[\s|:,.>+~\[])/`;
    }

    regexForHostSelector(selector) {
        return re`${this.regexForClassSelector(selector)}([^\s>+~,]*)`;
    }

    get hostSelector() {
        return this.component.host;
    }

    get headerText() {
        if (!this._headerText) {
            const licencePath = path.resolve(__dirname, '../config/license.js');
            let licenseText = fs.readFileSync(licencePath, {
                encoding: 'utf8',
            });
            licenseText = licenseText
                .split('\n')
                .slice(1, -2)
                .join('\n');
            this._headerText = `\n${licenseText}\n\nTHIS FILE IS MACHINE GENERATED. DO NOT EDIT`;
        }
        return this._headerText;
    }
}

module.exports = postcss.plugin('postcss-process-spectrum', (opts) => {
    const { component } = opts;
    return (root, result) => {
        const processor = new SpectrumProcessor(component);
        processor.run(root, result);
    };
});
