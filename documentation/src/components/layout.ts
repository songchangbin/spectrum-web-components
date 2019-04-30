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

import { html, CSSResultArray } from 'lit-element';
import './side-nav';
import './header';
import styles from './layout.css';
import RouteComponent from './route-component';
import { toCssTemplateString } from '../utils/templates';

export default class LayoutElement extends RouteComponent {
    public static get styles(): CSSResultArray {
        return [toCssTemplateString(styles)];
    }
    createRenderRoot() {
        return this;
    }

    renderContent() {
        return html`
            <div></div>
        `;
    }

    get contentElement() {
        return this.querySelector('.layout-content');
    }

    render() {
        return html`
            <div class=".app">
                <docs-header></docs-header>
                <div class=".body">
                    <docs-side-nav></docs-side-nav>
                    <div class="layout-content">${this.renderContent()}</div>
                </div>
            </div>
        `;
    }
}
