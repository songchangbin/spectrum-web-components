import { html } from 'lit-element';
import LayoutElement from './layout';

class HomeElement extends LayoutElement {
    createRenderRoot() {
        return this;
    }

    renderContent() {
        return html`
            <p>Home page</p>
        `;
    }
}
customElements.define('docs-home', HomeElement);
