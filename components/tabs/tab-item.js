import Template from './template.js';

export default class SpectrumTabItem extends HTMLElement {
    static get TAB_ITEM_CLICK() { return 'onTabItemClick'; }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `${Template.css()}

                                 
                                     <div class="spectrum spectrum--light spectrum--medium">
                                         <div class="spectrum-Tabs-item" tabindex="0">   
                                            <label class="spectrum-Tabs-itemLabel"><slot name="label"></slot></label>
                                         </div>
                                     </div>`;

        this.shadowRoot.addEventListener('click', e => {
            this.dispatchEvent(
                new CustomEvent(SpectrumTabItem.TAB_ITEM_CLICK, {
                    composed: true,
                    bubbles: true,
                    detail: { item: this }}));
        });
    }
}

if (!customElements.get('spectrum-tab-item')) {
    customElements.define('spectrum-tab-item', SpectrumTabItem);
}
