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
import { html, css, CSSResultArray } from 'lit-element';
import './layout';
import './code-example';
import ComponentDocs from '../../components';
import LayoutElement from './layout';
import * as Prism from 'prismjs';
import styles from './component.css';
import { toHtmlTemplateString, toCssTemplateString } from '../utils/templates';

declare global {
    interface Window {
        Prism: any;
    }
}

window.Prism = Prism;

class ComponentElement extends LayoutElement {
    location?: {
        baseUrl: string;
        params: {
            component: string;
        };
        pathname: string;
    };

    public static get styles(): CSSResultArray {
        return [toCssTemplateString(styles)];
    }

    renderContent() {
        if (this.location && this.location.params) {
            return toHtmlTemplateString(
                ComponentDocs[this.location.params.component]
            );
        }
        return null;
    }

    updated() {
        const codeBlocks = <NodeListOf<HTMLSpanElement>>(
            this.querySelectorAll('pre > code')
        );
        for (const codeBlock of codeBlocks) {
            Prism.highlightAllUnder(codeBlock.parentNode);

            // Actually insert the sample code into the DOM
            const exampleCode = codeBlock.innerText;
            const exampleNode = document.createElement('div');
            exampleNode.classList.add('docExample');
            exampleNode.innerHTML = exampleCode;
            if (codeBlock.parentNode && codeBlock.parentNode.parentNode) {
                codeBlock.parentNode.parentNode.insertBefore(
                    exampleNode,
                    codeBlock.parentNode
                );
            }
        }
    }
}
customElements.define('docs-component', ComponentElement);
