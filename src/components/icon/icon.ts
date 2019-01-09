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

        // start listening for iconset-added and do updateIcon if we get one later
        this.iconsetListener = ((ev: CustomEvent) => {
            if (!this.icon) {
                return;
            }
            // parse the icon name to get iconset name
            const icon = this.parseIcon(this.icon);
            if (!icon) {
                return;
            }
            if (ev.detail.name === icon.iconset) {
                this.updateIcon();
            }
        }) as EventListener;
        window.addEventListener('spectrum-iconset-added', this.iconsetListener);

        this.updateIcon();
    }

    /**
     * Getter for src attribute
     */
    public get src(): string | null {
        return this.getAttribute('src');
    }

    /**
     * Setter for src attribute
     */
    public set src(value: string | null) {
        if (value) {
            this.setAttribute('src', value);
        } else {
            this.removeAttribute('src');
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

    private parseIcon(icon: string) {
        if (!icon) {
            return null;
        }
        const iconParts = icon.split(':');
        let iconsetName = 'default';
        let iconName = icon;
        if (iconParts.length > 1) {
            iconsetName = iconParts[0];
            iconName = iconParts[1];
        }
        return { iconset: iconsetName, icon: iconName };
    }
    private updateIcon() {
        if (!this.iconContainer) {
            return;
        }
        if (!this.icon && !this.src) {
            this.iconContainer.innerHTML = '';
            return;
        }
        if (this.src) {
            this.iconContainer.innerHTML = `<img src='${this.src}'/>`;
            return;
        }
        if (!this.icon) {
            return;
        }
        // parse the icon name to get iconset name
        const icon = this.parseIcon(this.icon);
        if (!icon) {
            return;
        }

        // try to retrieve the iconset
        const iconset = registry.getIconset(icon.iconset);
        // if we didn't get the iconset, register a listener to see if we get it later
        if (!iconset) {
            // we can stop here as there's nothing to be done till we get the iconset
            return;
        }
        // clean out any existing icon before applying the new one
        this.iconContainer.innerHTML = '';
        // if we got our iconset and we registered a listener previously, we should remove it
        // and now we can set the icon
        iconset.applyIconToElement(
            this.iconContainer,
            icon.icon,
            this.size ? this.size : ''
        );
    }
}

if (!customElements.get(SpectrumIcon.is)) {
    customElements.define(SpectrumIcon.is, SpectrumIcon);
}
