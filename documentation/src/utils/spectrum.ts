import 'spectrum-web-components/styles/all-medium-dark.css';
import * as Spectrum from 'spectrum-web-components/lib/index';

const { defineCustomElement, defineCustomElements, ...Elements } = Spectrum;
const customElements = Object.values(Elements).filter((element) => {
    return !!element.is;
});
defineCustomElements(...customElements);
