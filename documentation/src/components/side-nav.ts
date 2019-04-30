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
import { LitElement, html } from 'lit-element';
import ComponentDocs from '../../components';
import { Router } from '@vaadin/router';
import AppRouter from '../router';

class SideNav extends LitElement {
    createRenderRoot() {
        return this;
    }

    get components() {
        return Object.keys(ComponentDocs);
    }

    handleSelect(event) {
        const path = AppRouter.urlForPath(`/components/${event.detail.value}`);
        Router.go(path);
    }

    render() {
        return html`
            <sp-sidenav>
                <sp-sidenav-heading label="Components">
                    ${this.components.map(
                        (name) =>
                            html`
                                <sp-sidenav-item value="${name}">
                                    ${name}
                                </sp-sidenav-item>
                            `
                    )}
                </sp-sidenav-heading>
            </sp-sidenav-jeading>
        `;
    }
}
customElements.define('docs-side-nav', SideNav);
