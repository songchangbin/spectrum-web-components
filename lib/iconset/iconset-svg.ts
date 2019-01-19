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

import { SpectrumIconset } from './iconset';

export class SpectrumIconsetSVG extends SpectrumIconset {
    public static readonly is: string = 'spectrum-iconset-svg';
    private iconMap: Map<string, SVGSymbolElement> = new Map();
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        if (!this.shadowRoot) {
            throw new Error('Failed to attach ShadowRoot!');
        }
        this.shadowRoot.innerHTML = this.render();
        const slot = this.shadowRoot.querySelector('slot');
        if (!slot) {
            throw new Error('Failed to find slot element!');
        }

        slot.addEventListener('slotchange', (evt) => {
            const slotTarget = evt.target as HTMLSlotElement;
            const svgNodes = this.getSVGNodes(slotTarget);
            this.updateSVG(svgNodes);
        });
        const currentSVGNodes = this.getSVGNodes(slot);
        this.updateSVG(currentSVGNodes);
    }
    /**
     * Applies the requested icon from this iconset instance to the given element.
     *
     * @param el - the element to apply the icon to
     * @param icon - the name of the icon within this set to apply.
     */
    public applyIconToElement(el: HTMLElement, icon: string, size: string) {
        const iconName = this.createIconName(icon, size);
        const iconSymbol = this.iconMap.get(iconName);
        if (!iconSymbol) {
            throw new Error(`Unable to find icon ${icon}`);
        }
        // we cannot share a single SVG globally across shadowroot boundaries
        // so copy the template node so we can inject it where we need it
        const clonedNode = this.prepareSvgClone(iconSymbol);
        // append the svg to the node either in its shadowroot or directly into its dom
        if (el.shadowRoot) {
            el.shadowRoot.appendChild(clonedNode);
        } else {
            el.appendChild(clonedNode);
        }
    }
    protected prepareSvgClone(sourceSvg: SVGSymbolElement) {
        const content = sourceSvg.cloneNode(true) as SVGSymbolElement;
        // we're going to create a new svg element that will have our symbol geometry inside
        const svg = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'svg'
        );
        const viewBox = content.getAttribute('viewBox') || '';
        // inline style isn't ideal but will work in all cases and means our icons don't need to know
        // if they are svg or spritesheet provided
        const cssText =
            'pointer-events: none; display: block; width: 100%; height: 100%;';
        svg.style.cssText = cssText;
        // copy the viewbox and other properties into the svg
        svg.setAttribute('viewBox', viewBox);
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.setAttribute('focusable', 'false');
        // move all the child nodes over to the svg
        while (content.childNodes.length > 0) {
            svg.appendChild(content.childNodes[0]);
        }
        return svg;
    }
    protected createIconName(icon: string, size: string) {
        return `${icon}`;
    }
    protected getDefaultContent() {
        return '';
    }
    protected render() {
        return /* html */ `
            <style>
                :host {
                    display: none;
                }
            </style>
            <slot>${this.getDefaultContent()}</slot>
        `;
    }
    protected updateSVG(nodes: SVGElement[]) {
        // iterate over the nodes that were passed in, and find all the top level symbols
        const symbols = nodes.reduce(
            (prev, svgNode) => {
                const containedSymbols = svgNode.querySelectorAll('symbol');
                prev.push(...containedSymbols);
                return prev;
            },
            [] as SVGSymbolElement[]
        );
        symbols.forEach((symbol) => {
            this.iconMap.set(symbol.id, symbol);
        });
    }
    protected getSVGNodes(slotTarget: HTMLSlotElement) {
        const nodes = slotTarget.assignedNodes({ flatten: true });
        // find all the svg nodes
        const svgNodes = nodes.filter((node) => {
            return node.nodeName === 'svg';
        }) as SVGElement[];
        return svgNodes;
    }
}

if (!customElements.get(SpectrumIconsetSVG.is)) {
    customElements.define(SpectrumIconsetSVG.is, SpectrumIconsetSVG);
}
