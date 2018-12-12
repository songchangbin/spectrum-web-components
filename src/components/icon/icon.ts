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
import styles from './icon.css.js';

import { registry } from '../iconset/iconset-registry';

export class SpectrumIcon extends HTMLElement {
    public static readonly is: string = 'spectrum-icon';

    private iconContainer: HTMLElement | null = null;
    private iconsetListener: EventListener | null = null;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        if (!this.shadowRoot) {
            throw new Error('Failed to attach ShadowRoot!');
        }
        // render then retrieve the container to drop icons into
        this.shadowRoot.innerHTML = this.render();
        this.iconContainer = this.shadowRoot.querySelector('#container');

        // if we have an icon name and the container we can update the icon immediately
        if (this.icon && this.iconContainer) {
            this.updateIcon();
        }
    }

    /**
     * Getter for icon attribute
     */
    public get icon(): string | null {
        return this.getAttribute('icon');
    }

    /**
     * Setter for icon attribute
     */
    public set icon(value: string | null) {
        if (value) {
            this.setAttribute('icon', value);
        } else {
            this.removeAttribute('icon');
        }
    }

    /**
     * Getter for size attribute
     */
    public get size(): string | null {
        return this.getAttribute('size');
    }

    /**
     * Setter for size attribute
     */
    public set size(value: string | null) {
        if (value) {
            this.setAttribute('size', value);
        } else {
            this.removeAttribute('size');
        }
    }

    protected render() {
        return /* html */ `
            <style>
                ${styles}
            </style>
            <div id="container">
            </div>
        `;
    }

    private updateIcon() {
        if (!this.iconContainer) {
            return;
        }
        if (!this.icon) {
            this.iconContainer.innerHTML = '';
            return;
        }
        // parse the icon name to get iconset name
        const iconParts = this.icon.split(':');
        let iconsetName = 'default';
        let iconName = this.icon;
        if (iconParts.length > 1) {
            iconsetName = iconParts[0];
            iconName = iconParts[1];
        }
        // try to retrieve the iconset
        const iconset = registry.getIconset(iconsetName);
        // if we didn't get the iconset, register a listener to see if we get it later
        if (!iconset && !this.iconsetListener) {
            // start listening for iconset-added and do updateIcon if we get one later
            this.iconsetListener = this.updateIcon.bind(this);
            window.addEventListener(
                'spectrum-iconset-added',
                this.iconsetListener
            );
            // we can stop here as there's nothing to be done till we get the iconset
            return;
        }
        // if we got our iconset and we registered a listener previously, we should remove it
        if (iconset) {
            if (this.iconsetListener) {
                window.removeEventListener(
                    'spectrum-iconset-added',
                    this.iconsetListener
                );
                this.iconsetListener = null;
            }
            // and now we can set the icon
            iconset.applyIconToElement(
                this.iconContainer,
                iconName,
                this.size ? this.size : ''
            );
        }
    }
}

if (!customElements.get(SpectrumIcon.is)) {
    customElements.define(SpectrumIcon.is, SpectrumIcon);
}
