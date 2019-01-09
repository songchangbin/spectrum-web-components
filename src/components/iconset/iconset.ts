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

// @ts-ignore - css generated at build time
import styles from './iconset.css.js';

import { registry } from './iconset-registry';

export class SpectrumIconset extends HTMLElement {
    public static readonly is: string = 'spectrum-iconset';

    public static get observedAttributes() {
        return ['name'];
    }
    public attributeChangedCallback(
        attrName: string,
        oldVal: string,
        newVal: string
    ) {
        if (attrName === 'name') {
            this.updateName(newVal, false);
        }
    }
    /**
     * Getter for name attribute
     */
    public get name(): string | null {
        return this.getAttribute('name');
    }
    /**
     * Setter for name attribute
     */
    public set name(value: string | null) {
        this.updateName(value);
    }
    /**
     * Applies an icon to the given element
     */
    public applyIconToElement(
        el: HTMLElement,
        icon: string,
        size: string = ''
    ) {
        // inject the requested icon from the iconset into the element
        // add into the elements shadow dom if it has one
        throw new Error('Not implemented!');
    }
    /**
     * On connected we register the iconset
     */
    protected connectedCallback() {
        if (!this.name) {
            return;
        }
        registry.addIconset(this.name, this);
    }
    /**
     * On disconnected we remove the iconset
     */
    protected disconnectedCallback() {
        if (!this.name) {
            return;
        }
        registry.removeIconset(this.name);
    }
    /**
     * Updates the name attribute
     * @param value
     * @param reflect
     */
    private updateName(value: string | null, reflect: boolean = true) {
        if (this.name) {
            // remove from the iconset map using the old name
            registry.removeIconset(this.name);
        }

        if (value) {
            if (reflect) {
                this.setAttribute('name', value);
            }
            // set in the map using the new name
            registry.addIconset(value, this);
        } else if (reflect) {
            this.removeAttribute('name');
        }
    }
}

if (!customElements.get(SpectrumIconset.is)) {
    customElements.define(SpectrumIconset.is, SpectrumIconset);
}
