import { html, css, CSSResultArray } from 'lit-element';

export function toHtmlTemplateString(code: string) {
    const stringArray = [`${code}`] as any;
    stringArray.raw = [`${code}`];
    return html(stringArray as TemplateStringsArray);
}

export function toCssTemplateString(code: string) {
    const stringArray = [`${code}`] as any;
    stringArray.raw = [`${code}`];
    return css(stringArray as TemplateStringsArray);
}
