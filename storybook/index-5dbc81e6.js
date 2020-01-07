import{h as e}from"./lit-html-6898710b.js";import{c as r,p as o,q as t,L as i}from"./lit-element-81619d09.js";import{_ as l}from"./tslib.es6-d9c764b6.js";import{F as a}from"./focusable-5c74bfe6.js";var c=r`#root{display:inline-flex;align-items:flex-start;position:relative;min-height:var(--spectrum-radio-height,var(--spectrum-global-dimension-size-400));max-width:100%;margin-right:calc(var(--spectrum-radio-cursor-hit-x,
var(--spectrum-global-dimension-size-100))*2);vertical-align:top}#input{font-family:inherit;font-size:100%;line-height:1.15;margin:0;overflow:visible;box-sizing:border-box;padding:0;position:absolute;top:0;left:calc(var(--spectrum-radio-cursor-hit-x,
var(--spectrum-global-dimension-size-100))*-1);width:calc(100% + var(--spectrum-radio-cursor-hit-x,var(--spectrum-global-dimension-size-100))*2);height:100%;opacity:.0001;z-index:1;cursor:pointer}:host([disabled]) #input{cursor:default}:host([checked]) #input+#button{border-width:calc(var(--spectrum-radio-circle-diameter,var(--spectrum-global-dimension-size-175))/ 2 - var(--spectrum-radio-circle-dot-size,var(--spectrum-global-dimension-static-size-50))/ 2);border-color:var(--spectrum-radio-emphasized-circle-border-color-selected,var(--spectrum-global-color-blue-500))}#label{margin-left:var(--spectrum-radio-text-gap,var(--spectrum-global-dimension-size-125));margin-top:var(--spectrum-global-dimension-size-85);font-size:var(--spectrum-radio-text-size,var(--spectrum-alias-font-size-default));line-height:1.49;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out;color:var(--spectrum-radio-emphasized-text-color,var(--spectrum-alias-text-color))}#button{position:relative;box-sizing:border-box;width:var(--spectrum-radio-circle-diameter,var(--spectrum-global-dimension-size-175));height:var(--spectrum-radio-circle-diameter,var(--spectrum-global-dimension-size-175));margin:calc((var(--spectrum-radio-height,var(--spectrum-global-dimension-size-400)) - var(--spectrum-radio-circle-diameter,var(--spectrum-global-dimension-size-175)))/ 2) 0;flex-grow:0;flex-shrink:0;border-radius:calc(var(--spectrum-radio-circle-diameter,
var(--spectrum-global-dimension-size-175))/2);transition:border var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;background-color:var(--spectrum-radio-emphasized-circle-background-color,var(--spectrum-global-color-gray-75));border:var(--spectrum-radio-circle-border-size,var(--spectrum-alias-border-size-thick)) solid var(--spectrum-radio-emphasized-circle-border-color,var(--spectrum-global-color-gray-600))}:host([label-below]) #root{display:inline-flex;flex-direction:column;align-items:center;height:auto}:host([label-below]) #button{flex-shrink:0;margin:0}:host([label-below]) #label{margin:var(--spectrum-global-dimension-size-40) 0 0 0}#root:hover #button{border-color:var(--spectrum-radio-emphasized-circle-border-color-hover,var(--spectrum-global-color-gray-700));box-shadow:none}:host([checked]) #root:hover #input+#button{border-color:var(--spectrum-radio-emphasized-circle-border-color-selected-hover,var(--spectrum-global-color-blue-600))}#root:hover #label{color:var(--spectrum-radio-emphasized-text-color-hover,var(--spectrum-alias-text-color-hover))}#root:active #button{border-color:var(--spectrum-radio-emphasized-circle-border-color-down,var(--spectrum-global-color-gray-800))}:host([checked]) #root:active #input+#button{border-color:var(--spectrum-radio-emphasized-circle-border-color-selected-down,var(--spectrum-global-color-blue-700))}#root:active #label{color:var(--spectrum-radio-emphasized-text-color-down,var(--spectrum-alias-text-color-down))}:host([quiet][checked]) #input+#button{border-color:var(--spectrum-radio-quiet-circle-border-color-selected,var(--spectrum-global-color-gray-700))}:host([quiet][checked]) #root:hover #input+#button{border-color:var(--spectrum-radio-quiet-circle-border-color-selected-hover,var(--spectrum-global-color-gray-800))}:host([quiet][checked]) #root:active #input+#button{border-color:var(--spectrum-radio-quiet-circle-border-color-selected-down,var(--spectrum-global-color-gray-900))}:host([invalid]) #root:hover #input+#button,:host([quiet][invalid]) #root:hover #input+#button{border-color:var(--spectrum-radio-emphasized-circle-border-color-error-hover,var(--spectrum-global-color-red-600))}:host([invalid]) #root:hover #label,:host([quiet][invalid]) #root:hover #label{color:var(--spectrum-radio-emphasized-circle-border-color-error-hover,var(--spectrum-global-color-red-600))}:host([invalid]) #root:active #input+#button,:host([quiet][invalid]) #root:active #input+#button{border-color:var(--spectrum-radio-emphasized-circle-border-color-error-down,var(--spectrum-global-color-red-700))}:host([invalid]) #root:active #label,:host([quiet][invalid]) #root:active #label{color:var(--spectrum-radio-emphasized-circle-border-color-error-down,var(--spectrum-global-color-red-700))}:host([invalid]) #root #button,:host([invalid][checked]) #root #input+#button,:host([quiet][invalid]) #root #button,:host([quiet][invalid][checked]) #root #input+#button{border-color:var(--spectrum-radio-emphasized-circle-border-color-error,var(--spectrum-global-color-red-500))}:host([invalid]) #root #label,:host([quiet][invalid]) #root #label{color:var(--spectrum-radio-emphasized-circle-border-color-error,var(--spectrum-global-color-red-500))}:host([disabled]) #input+#button{border-color:var(--spectrum-radio-emphasized-circle-border-color-disabled,var(--spectrum-global-color-gray-400))!important}:host([disabled]) #input~#label{color:var(--spectrum-radio-emphasized-text-color-disabled,var(--spectrum-alias-text-color-disabled))!important}#input.focus-visible+#button,#root:hover #input.focus-visible+#button,:host([quiet]) #input.focus-visible+#button,:host([quiet]) #root:hover #input.focus-visible+#button{border-color:var(--spectrum-radio-emphasized-circle-border-color-key-focus,var(--spectrum-global-color-blue-400));box-shadow:0 0 0 1px var(--spectrum-radio-emphasized-circle-border-color-key-focus,var(--spectrum-global-color-blue-400))}#input.focus-visible~#label,#root:hover #input.focus-visible~#label,:host([quiet]) #input.focus-visible~#label,:host([quiet]) #root:hover #input.focus-visible~#label{color:var(--spectrum-radio-emphasized-text-color-key-focus,var(--spectrum-alias-text-color-key-focus))}:host([invalid][checked]) #root #input.focus-visible+#button,:host([quiet][invalid][checked]) #root #input.focus-visible+#button{border-color:var(--spectrum-radio-emphasized-circle-border-color-key-focus,var(--spectrum-global-color-blue-400));box-shadow:0 0 0 1px var(--spectrum-radio-emphasized-circle-border-color-key-focus,var(--spectrum-global-color-blue-400))}`;class s extends a{constructor(){super(...arguments),this.name="",this.value="",this.checked=!1}static get styles(){return[...super.styles,c]}get focusElement(){return this.inputElement}handleChange(){this.checked=this.inputElement.checked,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){return e` <label id="root"> <input id="input" type="radio" name="${this.name}" value="${this.value}" .checked="${this.checked}" @change="${this.handleChange}"> <span id="button"></span> <span id="label"><slot></slot></span> </label> `}}l([o({type:String,reflect:!0})],s.prototype,"name",void 0),l([o({type:String,reflect:!0})],s.prototype,"value",void 0),l([o({type:Boolean,reflect:!0})],s.prototype,"checked",void 0),l([t("#input")],s.prototype,"inputElement",void 0),customElements.get("sp-radio")||customElements.define("sp-radio",s);var d=r`:host{display:flex;flex-direction:row}:host([column]){flex-direction:column}`;class u extends i{constructor(){super(...arguments),this.name="",this._selected=""}static get styles(){return[d]}get selected(){return this._selected}set selected(e){var r=e?this.querySelector(`sp-radio[value="${e}"]`):void 0;this.deselectChecked(),r?(this._selected=e,r.checked=!0):this._selected=""}render(){return e` <slot></slot> `}firstUpdated(){var e=this.querySelector("sp-radio[checked]"),r=e?e.value:"";this.selected=this.selected||r,this.addEventListener("change",e=>{var r=e.target;this.selected=r.value})}deselectChecked(){this.querySelectorAll("sp-radio[checked]").forEach(e=>{e.checked=!1})}}l([o({type:String,reflect:!0})],u.prototype,"name",void 0),l([o({reflect:!0})],u.prototype,"selected",null),customElements.get("sp-radio-group")||customElements.define("sp-radio-group",u);
//# sourceMappingURL=index-5dbc81e6.js.map