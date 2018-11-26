import Template from './template.js';
import TabItem from './tab-item.js';

export default class SpectrumTabs extends HTMLElement {
    static get observedAttributes() {
        return ['selectedindex'];
    }

    set selectedindex(val) {
        if (parseInt(val) !== val) { return; }
        this.setAttribute('selectedindex', val);
    }

    get selectedindex() {
        return this.getAttribute('selectedindex');
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);
        this.shadowRoot.addEventListener(TabItem.TAB_ITEM_CLICK, e => {
            e.stopPropagation();
            this.dom.selectionIndicator.style.left = e.detail.item.offsetLeft + 24 +'px';
            this.dom.selectionIndicator.style.width = (e.detail.item.offsetWidth -24) + 'px';
        });
    }
}

if (!customElements.get('spectrum-tabs')) {
    customElements.define('spectrum-tabs', SpectrumTabs);
}
