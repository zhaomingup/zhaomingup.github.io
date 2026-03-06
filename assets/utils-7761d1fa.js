import{o as ee,bI as E,w as A,Q as ne,d as B,a1 as d,W as oe,a3 as te,a5 as K,bJ as Le,Z as Be,ab as x,ag as N,af as z,ad as F,ae as Ie,ac as $e,aj as W,ai as je,bj as Ee,ah as m,bK as Ke,r as _,j as k,bl as He,al as T,bA as H,a0 as J,am as Ve,aT as Q,bL as Ae,bM as De,bN as Ge,p as qe}from"./index-60d779da.js";import{F as Ue}from"./FocusDetector-b98b8bc7.js";import{i as D,c as We}from"./Follower-26782267.js";import{a as Je}from"./create-b75cc1a9.js";import{V as Qe}from"./VirtualList-e88d633c.js";import{h as Z}from"./happens-in-d88e25de.js";import{_ as Ze}from"./Empty-3b5b1aaa.js";function Xe(e,i){i&&(ee(()=>{const{value:t}=e;t&&E.registerHandler(t,i)}),A(e,(t,l)=>{l&&E.unregisterHandler(l)},{deep:!1}),ne(()=>{const{value:t}=e;t&&E.unregisterHandler(t)}))}function V(e){const i=e.filter(t=>t!==void 0);if(i.length!==0)return i.length===1?i[0]:t=>{e.forEach(l=>{l&&l(t)})}}const Ye=B({name:"Checkmark",render(){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},d("g",{fill:"none"},d("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),X=B({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:i,labelFieldRef:t,nodePropsRef:l}=oe(D);return{labelField:t,nodeProps:l,renderLabel:e,renderOption:i}},render(){const{clsPrefix:e,renderLabel:i,renderOption:t,nodeProps:l,tmNode:{rawNode:a}}=this,s=l==null?void 0:l(a),r=i?i(a,!1):te(a[this.labelField],a,!1),c=d("div",Object.assign({},s,{class:[`${e}-base-select-group-header`,s==null?void 0:s.class]}),r);return a.render?a.render({node:c,option:a}):t?t({node:c,option:a,selected:!1}):c}});function en(e,i){return d(Be,{name:"fade-in-scale-up-transition"},{default:()=>e?d(Le,{clsPrefix:i,class:`${i}-base-select-option__check`},{default:()=>d(Ye)}):null})}const Y=B({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:i,pendingTmNodeRef:t,multipleRef:l,valueSetRef:a,renderLabelRef:s,renderOptionRef:r,labelFieldRef:c,valueFieldRef:b,showCheckmarkRef:w,nodePropsRef:g,handleOptionClick:C,handleOptionMouseEnter:y}=oe(D),h=K(()=>{const{value:v}=t;return v?e.tmNode.key===v.key:!1});function u(v){const{tmNode:p}=e;p.disabled||C(v,p)}function R(v){const{tmNode:p}=e;p.disabled||y(v,p)}function I(v){const{tmNode:p}=e,{value:S}=h;p.disabled||S||y(v,p)}return{multiple:l,isGrouped:K(()=>{const{tmNode:v}=e,{parent:p}=v;return p&&p.rawNode.type==="group"}),showCheckmark:w,nodeProps:g,isPending:h,isSelected:K(()=>{const{value:v}=i,{value:p}=l;if(v===null)return!1;const S=e.tmNode.rawNode[b.value];if(p){const{value:$}=a;return $.has(S)}else return v===S}),labelField:c,renderLabel:s,renderOption:r,handleMouseMove:I,handleMouseEnter:R,handleClick:u}},render(){const{clsPrefix:e,tmNode:{rawNode:i},isSelected:t,isPending:l,isGrouped:a,showCheckmark:s,nodeProps:r,renderOption:c,renderLabel:b,handleClick:w,handleMouseEnter:g,handleMouseMove:C}=this,y=en(t,e),h=b?[b(i,t),s&&y]:[te(i[this.labelField],i,t),s&&y],u=r==null?void 0:r(i),R=d("div",Object.assign({},u,{class:[`${e}-base-select-option`,i.class,u==null?void 0:u.class,{[`${e}-base-select-option--disabled`]:i.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:a,[`${e}-base-select-option--pending`]:l,[`${e}-base-select-option--show-checkmark`]:s}],style:[(u==null?void 0:u.style)||"",i.style||""],onClick:V([w,u==null?void 0:u.onClick]),onMouseenter:V([g,u==null?void 0:u.onMouseenter]),onMousemove:V([C,u==null?void 0:u.onMousemove])}),d("div",{class:`${e}-base-select-option__content`},h));return i.render?i.render({node:R,option:i,selected:t}):c?c({node:R,option:i,selected:t}):R}}),nn=x("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[x("scrollbar",`
 max-height: var(--n-height);
 `),x("virtual-list",`
 max-height: var(--n-height);
 `),x("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[N("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),x("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),x("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),N("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),N("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),N("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),N("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),x("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),x("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[z("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),F("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),F("&:active",`
 color: var(--n-option-text-color-pressed);
 `),z("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),z("pending",[F("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),z("selected",`
 color: var(--n-option-text-color-active);
 `,[F("&::before",`
 background-color: var(--n-option-color-active);
 `),z("pending",[F("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),z("disabled",`
 cursor: not-allowed;
 `,[Ie("selected",`
 color: var(--n-option-text-color-disabled);
 `),z("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),N("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[$e({enterScale:"0.5"})])])]),cn=B({name:"InternalSelectMenu",props:Object.assign(Object.assign({},W.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:i,mergedRtlRef:t}=je(e),l=Ee("InternalSelectMenu",t,i),a=W("InternalSelectMenu","-internal-select-menu",nn,Ke,e,m(e,"clsPrefix")),s=_(null),r=_(null),c=_(null),b=k(()=>e.treeMate.getFlattenedNodes()),w=k(()=>Je(b.value)),g=_(null);function C(){const{treeMate:n}=e;let o=null;const{value:f}=e;f===null?o=n.getFirstAvailableNode():(e.multiple?o=n.getNode((f||[])[(f||[]).length-1]):o=n.getNode(f),(!o||o.disabled)&&(o=n.getFirstAvailableNode())),P(o||null)}function y(){const{value:n}=g;n&&!e.treeMate.getNode(n.key)&&(g.value=null)}let h;A(()=>e.show,n=>{n?h=A(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?C():y(),qe(G)):y()},{immediate:!0}):h==null||h()},{immediate:!0}),ne(()=>{h==null||h()});const u=k(()=>He(a.value.self[T("optionHeight",e.size)])),R=k(()=>H(a.value.self[T("padding",e.size)])),I=k(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),v=k(()=>{const n=b.value;return n&&n.length===0});function p(n){const{onToggle:o}=e;o&&o(n)}function S(n){const{onScroll:o}=e;o&&o(n)}function $(n){var o;(o=c.value)===null||o===void 0||o.sync(),S(n)}function le(){var n;(n=c.value)===null||n===void 0||n.sync()}function re(){const{value:n}=g;return n||null}function ae(n,o){o.disabled||P(o,!1)}function se(n,o){o.disabled||p(o)}function de(n){var o;Z(n,"action")||(o=e.onKeyup)===null||o===void 0||o.call(e,n)}function ce(n){var o;Z(n,"action")||(o=e.onKeydown)===null||o===void 0||o.call(e,n)}function ue(n){var o;(o=e.onMousedown)===null||o===void 0||o.call(e,n),!e.focusable&&n.preventDefault()}function fe(){const{value:n}=g;n&&P(n.getNext({loop:!0}),!0)}function ve(){const{value:n}=g;n&&P(n.getPrev({loop:!0}),!0)}function P(n,o=!1){g.value=n,o&&G()}function G(){var n,o;const f=g.value;if(!f)return;const O=w.value(f.key);O!==null&&(e.virtualScroll?(n=r.value)===null||n===void 0||n.scrollTo({index:O}):(o=c.value)===null||o===void 0||o.scrollTo({index:O,elSize:u.value}))}function pe(n){var o,f;!((o=s.value)===null||o===void 0)&&o.contains(n.target)&&((f=e.onFocus)===null||f===void 0||f.call(e,n))}function ge(n){var o,f;!((o=s.value)===null||o===void 0)&&o.contains(n.relatedTarget)||(f=e.onBlur)===null||f===void 0||f.call(e,n)}J(D,{handleOptionMouseEnter:ae,handleOptionClick:se,valueSetRef:I,pendingTmNodeRef:g,nodePropsRef:m(e,"nodeProps"),showCheckmarkRef:m(e,"showCheckmark"),multipleRef:m(e,"multiple"),valueRef:m(e,"value"),renderLabelRef:m(e,"renderLabel"),renderOptionRef:m(e,"renderOption"),labelFieldRef:m(e,"labelField"),valueFieldRef:m(e,"valueField")}),J(We,s),ee(()=>{const{value:n}=c;n&&n.sync()});const q=k(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:o},self:{height:f,borderRadius:O,color:be,groupHeaderTextColor:me,actionDividerColor:ye,optionTextColorPressed:xe,optionTextColor:ke,optionTextColorDisabled:Re,optionTextColorActive:Se,optionOpacityDisabled:ze,optionCheckColor:Me,actionTextColor:Ne,optionColorPending:we,optionColorActive:Ce,loadingColor:Pe,loadingSize:Oe,optionColorActivePending:Fe,[T("optionFontSize",n)]:Te,[T("optionHeight",n)]:_e,[T("optionPadding",n)]:j}}=a.value;return{"--n-height":f,"--n-action-divider-color":ye,"--n-action-text-color":Ne,"--n-bezier":o,"--n-border-radius":O,"--n-color":be,"--n-option-font-size":Te,"--n-group-header-text-color":me,"--n-option-check-color":Me,"--n-option-color-pending":we,"--n-option-color-active":Ce,"--n-option-color-active-pending":Fe,"--n-option-height":_e,"--n-option-opacity-disabled":ze,"--n-option-text-color":ke,"--n-option-text-color-active":Se,"--n-option-text-color-disabled":Re,"--n-option-text-color-pressed":xe,"--n-option-padding":j,"--n-option-padding-left":H(j,"left"),"--n-option-padding-right":H(j,"right"),"--n-loading-color":Pe,"--n-loading-size":Oe}}),{inlineThemeDisabled:U}=e,M=U?Ve("internal-select-menu",k(()=>e.size[0]),q,e):void 0,he={selfRef:s,next:fe,prev:ve,getPendingTmNode:re};return Xe(s,e.onResize),Object.assign({mergedTheme:a,mergedClsPrefix:i,rtlEnabled:l,virtualListRef:r,scrollbarRef:c,itemSize:u,padding:R,flattenedNodes:b,empty:v,virtualListContainer(){const{value:n}=r;return n==null?void 0:n.listElRef},virtualListContent(){const{value:n}=r;return n==null?void 0:n.itemsElRef},doScroll:S,handleFocusin:pe,handleFocusout:ge,handleKeyUp:de,handleKeyDown:ce,handleMouseDown:ue,handleVirtualListResize:le,handleVirtualListScroll:$,cssVars:U?void 0:q,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender},he)},render(){const{$slots:e,virtualScroll:i,clsPrefix:t,mergedTheme:l,themeClass:a,onRender:s}=this;return s==null||s(),d("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,this.rtlEnabled&&`${t}-base-select-menu--rtl`,a,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},Q(e.header,r=>r&&d("div",{class:`${t}-base-select-menu__header`,"data-header":!0,key:"header"},r)),this.loading?d("div",{class:`${t}-base-select-menu__loading`},d(Ae,{clsPrefix:t,strokeWidth:20})):this.empty?d("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},Ge(e.empty,()=>[d(Ze,{theme:l.peers.Empty,themeOverrides:l.peerOverrides.Empty,size:this.size})])):d(De,{ref:"scrollbarRef",theme:l.peers.Scrollbar,themeOverrides:l.peerOverrides.Scrollbar,scrollable:this.scrollable,container:i?this.virtualListContainer:void 0,content:i?this.virtualListContent:void 0,onScroll:i?void 0:this.doScroll},{default:()=>i?d(Qe,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:r})=>r.isGroup?d(X,{key:r.key,clsPrefix:t,tmNode:r}):r.ignored?null:d(Y,{clsPrefix:t,key:r.key,tmNode:r})}):d("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(r=>r.isGroup?d(X,{key:r.key,clsPrefix:t,tmNode:r}):d(Y,{clsPrefix:t,key:r.key,tmNode:r})))}),Q(e.action,r=>r&&[d("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},r),d(Ue,{onFocus:this.onTabOut,key:"focus-detector"})]))}});function L(e){return e.type==="group"}function ie(e){return e.type==="ignored"}function un(e,i){try{return!!(1+i.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function fn(e,i){return{getIsGroup:L,getIgnored:ie,getKey(l){return L(l)?l.name||l.key||"key-required":l[e]},getChildren(l){return l[i]}}}function vn(e,i,t,l){if(!i)return e;function a(s){if(!Array.isArray(s))return[];const r=[];for(const c of s)if(L(c)){const b=a(c[l]);b.length&&r.push(Object.assign({},c,{[l]:b}))}else{if(ie(c))continue;i(t,c)&&r.push(c)}return r}return a(e)}function pn(e,i,t){const l=new Map;return e.forEach(a=>{L(a)?a[t].forEach(s=>{l.set(s[i],s)}):l.set(a[i],a)}),l}export{cn as N,fn as a,pn as c,vn as f,V as m,un as p,Xe as u};
