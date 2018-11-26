import SpectrumCore from '../../spectrum/spectrum-core.js';
import SpectrumLight from '../../spectrum/spectrum-light.js';
import SpectrumTabs from '../../spectrum/tabs/index.js';

import BadHackyStuff from './badhackystuff.js';

export default {
    render(items) {
        return `${this.css()}
                ${this.html(items)}`;
    },

    mapDOM(scope) {
        return {
            selectionIndicator: scope.querySelector('.spectrum-Tabs-selectionIndicator')
        }
    },

    html(items) {
        return `<div class="spectrum spectrum--light spectrum--medium">
                    <div class="spectrum-Tabs spectrum-Tabs--horizontal spectrum-Tabs--quiet">
                        <slot></slot>
                      <div class="spectrum-Tabs-selectionIndicator"></div>
                    </div>
                </div>`;
    },

    css() {
        return `<style>
                    ${SpectrumCore.css()}
                    ${SpectrumLight.css()}
                    ${SpectrumTabs.css()}
                    ${BadHackyStuff.css()}
                </style>`;
    }
}
