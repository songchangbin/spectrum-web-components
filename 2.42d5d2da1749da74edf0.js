(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{22:function(e,t,o){"use strict";var i=o(2),n=o(1),r=n.b`:host([disabled]) #trigger{pointer-events:none}#overlay-content{display:none}`,s=o(29),a=o(98),l=o(99),c=o(100),h=o(45),v=o(46);var d={name:"computeArrowRotateStyles",enabled:!0,phase:"beforeWrite",requiresIfExists:["arrow"],fn:function(e){if(e.state.styles&&e.state.styles.arrow){var t;switch(e.state.placement){case"bottom":case"bottom-start":case"bottom-end":t=180;break;case"top":case"top-start":case"top-end":return;case"left":case"left-start":case"left-end":t=270;break;case"right":case"right-start":case"right-end":t=90;break;default:return}e.state.styles.arrow.transform+=` rotate(${t}deg)`,e.state.styles.arrow.marginLeft="0"}},data:{}},p=Object(s.popperGenerator)({defaultModifiers:[...a.a,l.a,c.a,h.a,v.a,d]}),m=n.b`@keyframes spOverlayFadeIn{0%{opacity:0;transform:var(--sp-overlay-from)}to{opacity:1;transform:translate(0)}}@keyframes spOverlayFadeOut{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:var(--sp-overlay-from)}}:host{z-index:1000;position:absolute}#contents,:host{display:inline-block;pointer-events:none}#contents{animation-duration:var(--spectrum-global-animation-duration-200);animation-timing-function:var(--spectrum-global-animation-ease-out);opacity:1;visibility:visible}:host([data-popper-placement*=top]) #contents{--sp-overlay-from:translateY(var(--spectrum-global-dimension-size-75))}:host([data-popper-placement*=right]) #contents{--sp-overlay-from:translateX(calc(-1*var(--spectrum-global-dimension-size-75)))}:host([data-popper-placement*=bottom]) #contents{--sp-overlay-from:translateY(calc(-1*var(--spectrum-global-dimension-size-75)))}:host([data-popper-placement*=left]) #contents{--sp-overlay-from:translateX(var(--spectrum-global-dimension-size-75))}::slotted(*){position:relative}:host([animating]) ::slotted(*){pointer-events:none}`;function u(e,t,o,i,n,r,s){try{var a=e[r](s),l=a.value}catch(e){return void o(e)}a.done?t(l):Promise.resolve(l).then(i,n)}function y(e){return function(){var t=this,o=arguments;return new Promise((function(i,n){var r=e.apply(t,o);function s(e){u(r,i,n,s,a,"next",e)}function a(e){u(r,i,n,s,a,"throw",e)}s(void 0)}))}}var f={initial:"idle",states:{idle:{on:{active:"active"}},active:{on:{visible:"visible",hiding:"hiding",idle:"idle"}},visible:{on:{hiding:"hiding",idle:"idle"}},hiding:{on:{idle:"idle"}}}},g=(e,t)=>e?t&&f.states[e].on[t]||e:f.initial;class C extends n.a{constructor(){super(...arguments),this.originalSlot=null,this._state=g(),this.animating=!1,this.offset=6,this.interaction="hover",this.positionAnimationFrame=0}get state(){return this._state}set state(e){var t=g(this.state,e);t!==this.state&&(this._state=t,"idle"===this.state?this.removeAttribute("state"):this.setAttribute("state",this.state))}get hasTheme(){return!!this.color||!!this.scale}static get styles(){return[m]}firstUpdated(e){super.firstUpdated(e),this.overlayContent&&(this.stealOverlayContent(this.overlayContent),this.overlayContent&&this.trigger&&this.shadowRoot&&(this.placement&&"none"!==this.placement&&(this.popper=p(this.trigger,this,{placement:this.placement,modifiers:[{name:"arrow",options:{element:this.overlayContentTip}},{name:"offset",options:{offset:[0,this.offset]}}]})),this.state="active",document.addEventListener("sp-update-overlays",()=>{this.updateOverlayPosition(),this.state="visible"}),this.updateOverlayPosition().then(()=>this.applyContentAnimation("spOverlayFadeIn"))))}updateOverlayPopperPlacement(){this.overlayContent&&(this.dataPopperPlacement?this.overlayContent.setAttribute("placement",this.dataPopperPlacement):this.originalPlacement?this.overlayContent.setAttribute("placement",this.originalPlacement):this.overlayContent.removeAttribute("placement"))}updated(e){e.has("dataPopperPlacement")&&this.updateOverlayPopperPlacement()}open(e){this.extractDetail(e)}extractDetail(e){this.overlayContent=e.content,this.overlayContentTip=e.contentTip,this.trigger=e.trigger,this.placement=e.placement,this.offset=e.offset,this.interaction=e.interaction,this.color=e.theme.color,this.scale=e.theme.scale}dispose(){this.state="idle",this.timeout&&(clearTimeout(this.timeout),delete this.timeout),this.popper&&(this.popper.destroy(),this.popper=void 0),this.returnOverlayContent()}stealOverlayContent(e){if(!this.placeholder&&e){this.placeholder||(this.placeholder=document.createComment("placeholder for "+e.nodeName));var t=e.parentElement||e.getRootNode();t&&t.replaceChild(this.placeholder,e),this.overlayContent=e,this.originalSlot=this.overlayContent.getAttribute("slot"),this.overlayContent.setAttribute("slot","overlay"),this.appendChild(this.overlayContent),this.originalPlacement=this.overlayContent.getAttribute("placement")}}returnOverlayContent(){if(this.overlayContent){if(this.originalSlot?(this.overlayContent.setAttribute("slot",this.originalSlot),delete this.originalSlot):this.overlayContent.removeAttribute("slot"),this.placeholder){var e=this.placeholder.parentElement||this.placeholder.getRootNode();e&&(e.replaceChild(this.overlayContent,this.placeholder),this.overlayContent.dispatchEvent(new Event("sp-overlay-closed")))}this.originalPlacement&&(this.overlayContent.setAttribute("placement",this.originalPlacement),delete this.originalPlacement),delete this.placeholder}}updateOverlayPosition(){var e=this;return y((function*(){e.popper&&(yield e.popper.update())}))()}hide(e=!0){var t=this;return y((function*(){e&&(t.state="hiding",yield t.applyContentAnimation("spOverlayFadeOut")),t.state="idle"}))()}schedulePositionUpdate(){cancelAnimationFrame(this.positionAnimationFrame),this.positionAnimationFrame=requestAnimationFrame(()=>this.updateOverlayPosition())}onSlotChange(){this.schedulePositionUpdate()}connectedCallback(){super.connectedCallback(),this.schedulePositionUpdate()}applyContentAnimation(e){return new Promise((t,o)=>{if(this.shadowRoot){var i=this.shadowRoot.querySelector("#contents"),n=o=>{e===o.animationName&&(i.removeEventListener("animationend",n),i.removeEventListener("animationcancel",n),this.animating=!1,t("animationcancel"===o.type))};i.addEventListener("animationend",n),i.addEventListener("animationcancel",n),i.style.animationName=e,this.animating=!0}else o()})}renderTheme(e){o.e(3).then(o.bind(null,39));var t=this.color,i=this.scale;return n.d` <sp-theme .color="${t}" .scale="${i}"> ${e} </sp-theme> `}render(){var e=n.d` <div id="contents"> <slot @slotchange="${this.onSlotChange}" name="overlay"></slot> </div> `;return this.hasTheme?this.renderTheme(e):e}static create(e){var t=new C;return e.content&&t.open(e),t}}function b(e,t,o,i,n,r,s){try{var a=e[r](s),l=a.value}catch(e){return void o(e)}a.done?t(l):Promise.resolve(l).then(i,n)}Object(i.a)([Object(n.e)()],C.prototype,"_state",void 0),Object(i.a)([Object(n.e)({reflect:!0,type:Boolean})],C.prototype,"animating",void 0),Object(i.a)([Object(n.e)({reflect:!0})],C.prototype,"placement",void 0),Object(i.a)([Object(n.e)({attribute:!1})],C.prototype,"color",void 0),Object(i.a)([Object(n.e)({attribute:!1})],C.prototype,"scale",void 0),Object(i.a)([Object(n.e)({attribute:"data-popper-placement"})],C.prototype,"dataPopperPlacement",void 0);var O=1e3,w=1e3;class T{constructor(e={}){this.warmUpDelay=O,this.coolDownDelay=w,this.isWarm=!1,this.cooldownTimeout=0,this.timeout=0,Object.assign(this,e)}openTimer(e){var t,o=this;return(t=function*(){if(o.cancelCooldownTimer(),o.component&&e.isSameNode(o.component)){if(o.promise)return o.promise;throw new Error("Inconsistent state")}return o.component&&(o.close(o.component),o.cancelCooldownTimer()),o.component=e,!o.isWarm&&(o.promise=new Promise(e=>{o.resolve=e,o.timeout=window.setTimeout(()=>{o.resolve&&(o.resolve(!1),o.isWarm=!0)},o.warmUpDelay)}),o.promise)},function(){var e=this,o=arguments;return new Promise((function(i,n){var r=t.apply(e,o);function s(e){b(r,i,n,s,a,"next",e)}function a(e){b(r,i,n,s,a,"throw",e)}s(void 0)}))})()}close(e){this.component&&this.component.isSameNode(e)&&(this.resetCooldownTimer(),this.timeout>0&&(clearTimeout(this.timeout),this.timeout=0),this.resolve&&(this.resolve(!0),delete this.resolve),delete this.promise,delete this.component)}resetCooldownTimer(){this.isWarm&&(this.cooldownTimeout&&window.clearTimeout(this.cooldownTimeout),this.cooldownTimeout=window.setTimeout(()=>{this.isWarm=!1,delete this.cooldownTimeout},this.coolDownDelay))}cancelCooldownTimer(){this.cooldownTimeout&&window.clearTimeout(this.cooldownTimeout),delete this.cooldownTimeout}}function E(e,t,o,i,n,r,s){try{var a=e[r](s),l=a.value}catch(e){return void o(e)}a.done?t(l):Promise.resolve(l).then(i,n)}function P(e){return function(){var t=this,o=arguments;return new Promise((function(i,n){var r=e.apply(t,o);function s(e){E(r,i,n,s,a,"next",e)}function a(e){E(r,i,n,s,a,"throw",e)}s(void 0)}))}}function k(e,t,o,i,n,r,s){try{var a=e[r](s),l=a.value}catch(e){return void o(e)}a.done?t(l):Promise.resolve(l).then(i,n)}class A{constructor(e,t,o){this.isOpen=!1,this.owner=e,this.overlayElement=o,this.interaction=t}static open(e,t,o,i){var n=new A(e,t,o);return n.open(i),()=>n.close()}static update(){var e=new CustomEvent("sp-update-overlays",{bubbles:!0,composed:!0,cancelable:!0});document.dispatchEvent(e)}open({delayed:e,offset:t=0,placement:o="top"}){var i,n=this;return(i=function*(){if(n.isOpen)return!0;void 0===e&&(e=n.overlayElement.hasAttribute("delayed"));var i={color:void 0,scale:void 0},r=new CustomEvent("sp-query-theme",{bubbles:!0,composed:!0,detail:i,cancelable:!0});n.owner.dispatchEvent(r);var s={},a=new CustomEvent("sp-overlay-query",{bubbles:!0,composed:!0,detail:s,cancelable:!0});return n.overlayElement.dispatchEvent(a),A.overlayStack.openOverlay(Object.assign({content:n.overlayElement,contentTip:s.overlayContentTipElement,delayed:e,offset:t,placement:o,trigger:n.owner,interaction:n.interaction,theme:i},s)),n.isOpen=!0,!0},function(){var e=this,t=arguments;return new Promise((function(o,n){var r=i.apply(e,t);function s(e){k(r,o,n,s,a,"next",e)}function a(e){k(r,o,n,s,a,"throw",e)}s(void 0)}))})()}close(){A.overlayStack.closeOverlay(this.overlayElement)}}A.overlayStack=new class{constructor(){var e=this;this.overlays=[],this.preventMouseRootClose=!1,this.root=document.body,this.handlingResize=!1,this.overlayTimer=new T,this.handleMouseCapture=e=>{var t=this.topOverlay;if(e.target&&t&&t.overlayContent&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)&&function(e){return 0===e.button}(e)){if(e.target instanceof Node){if(e.composedPath().indexOf(t.overlayContent)>=0)return void(this.preventMouseRootClose=!0);this.preventMouseRootClose=!1}}else this.preventMouseRootClose=!0},this.handleMouse=()=>{this.preventMouseRootClose||this.closeTopOverlay()},this.handleKeyUp=e=>{"Escape"===e.key&&this.closeTopOverlay()},this.handleResize=()=>{this.handlingResize||(this.handlingResize=!0,requestAnimationFrame(P((function*(){var t=e.overlays.map(e=>e.updateOverlayPosition());yield Promise.all(t),e.handlingResize=!1}))))},this.addEventListeners()}get document(){return this.root.ownerDocument||document}get topOverlay(){return this.overlays.slice(-1)[0]}findOverlayForContent(e){for(var t of this.overlays)if(e.isSameNode(t.overlayContent))return t}addEventListeners(){this.document.addEventListener("click",this.handleMouseCapture,!0),this.document.addEventListener("click",this.handleMouse),this.document.addEventListener("keyup",this.handleKeyUp),window.addEventListener("resize",this.handleResize)}isOverlayActive(e){return!!this.overlays.find(t=>e.isSameNode(t.overlayContent))}isClickOverlayActiveForTrigger(e){return this.overlays.some(t=>e.isSameNode(t.trigger)&&"click"===t.interaction)}openOverlay(e){var t=this;return P((function*(){if(t.isOverlayActive(e.content))return!1;if(e.delayed){var o=t.overlayTimer.openTimer(e.content);if(yield o)return o}return new Promise(o=>{requestAnimationFrame(()=>{if("click"===e.interaction)t.closeAllHoverOverlays();else if("hover"===e.interaction&&t.isClickOverlayActiveForTrigger(e.trigger))return void o(!0);var i=C.create(e);t.overlays.push(i),document.body.appendChild(i),o(!1)})})}))()}closeOverlay(e){this.overlayTimer.close(e),requestAnimationFrame(()=>{var t=this.findOverlayForContent(e);this.hideAndCloseOverlay(t)})}closeAllHoverOverlays(){for(var e of this.overlays)"hover"===e.interaction&&this.hideAndCloseOverlay(e,!1)}hideAndCloseOverlay(e,t=!0){var o=this;return P((function*(){if(e){yield e.hide(t),e.remove(),e.dispose();var i=o.overlays.indexOf(e);i>=0&&o.overlays.splice(i,1)}}))()}closeTopOverlay(){return this.hideAndCloseOverlay(this.topOverlay)}};class S extends n.a{constructor(){super(...arguments),this.placement="bottom",this.offset=6,this.disabled=!1}static get styles(){return[r]}render(){return n.d` <div id="trigger" @click="${this.onTriggerClick}" @mouseenter="${this.onTriggerMouseEnter}" @mouseleave="${this.onTriggerMouseLeave}"> <slot @slotchange="${this.onTargetSlotChange}" name="trigger"></slot> </div> <div id="overlay-content"> <slot @slotchange="${this.onClickSlotChange}" name="click-content"></slot> <slot @slotchange="${this.onHoverSlotChange}" name="hover-content"></slot> </div> `}onTriggerClick(){this.targetContent&&this.clickContent&&(this.closeClickOverlay=A.open(this.targetContent,"click",this.clickContent,{offset:this.offset,placement:this.placement}))}onTriggerMouseEnter(){this.targetContent&&this.hoverContent&&(this.closeHoverOverlay=A.open(this.targetContent,"hover",this.hoverContent,{offset:this.offset,placement:this.placement}))}onTriggerMouseLeave(){this.closeHoverOverlay&&(this.closeHoverOverlay(),delete this.closeHoverOverlay)}onClickSlotChange(e){var t=this.extractSlotContentFromEvent(e);this.clickContent=t}onHoverSlotChange(e){var t=this.extractSlotContentFromEvent(e);this.hoverContent=t}onTargetSlotChange(e){var t=this.extractSlotContentFromEvent(e);this.targetContent=t}extractSlotContentFromEvent(e){if(e.target)return e.target.assignedNodes().find(e=>e instanceof HTMLElement)}disconnectedCallback(){this.closeClickOverlay&&(this.closeClickOverlay(),delete this.closeClickOverlay),this.closeHoverOverlay&&(this.closeHoverOverlay(),delete this.closeHoverOverlay),super.disconnectedCallback()}}Object(i.a)([Object(n.e)({reflect:!0})],S.prototype,"placement",void 0),Object(i.a)([Object(n.e)({type:Number,reflect:!0})],S.prototype,"offset",void 0),Object(i.a)([Object(n.e)({type:Boolean,reflect:!0})],S.prototype,"disabled",void 0),o.d(t,"a",(function(){return A})),customElements.get("overlay-trigger")||customElements.define("overlay-trigger",S),customElements.get("active-overlay")||customElements.define("active-overlay",C)}}]);
//# sourceMappingURL=2.42d5d2da1749da74edf0.js.map