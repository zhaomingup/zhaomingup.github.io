import{r as xe,N as Se,p as le}from"./Popover-8d17067b.js";import{r as j,w as se,d as z,a1 as d,a2 as re,W as T,a3 as G,a4 as ue,j as w,a0 as H,a5 as V,Z as Ne,a6 as ce,V as Pe,a7 as Re,F as ke,a8 as Ke,a9 as Ce,aa as Ie,ab as x,ac as _e,ad as E,ae as ie,af as k,ag as $,ah as K,ai as Oe,aj as pe,ak as oe,al as F,am as $e,an as ze,ao as De}from"./index-60d779da.js";import{h as de}from"./happens-in-d88e25de.js";import{V as Ae,a as Fe,b as je}from"./Follower-26782267.js";import{u as Te}from"./get-e9b22093.js";import{c as Be}from"./create-b75cc1a9.js";import{u as Le}from"./use-keyboard-009d9860.js";function Me(e,n,l){if(!n)return e;const t=j(e.value);let r=null;return se(e,o=>{r!==null&&window.clearTimeout(r),o===!0?l&&!l.value?t.value=!0:r=window.setTimeout(()=>{t.value=!0},n):t.value=!1}),t}function Ee(e){return n=>{n?e.value=n.$el:e.value=null}}const He=z({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),te=re("n-dropdown-menu"),Z=re("n-dropdown"),ae=re("n-dropdown-option"),fe=z({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Ue=z({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=T(te),{renderLabelRef:l,labelFieldRef:t,nodePropsRef:r,renderOptionRef:o}=T(Z);return{labelField:t,showIcon:e,hasSubmenu:n,renderLabel:l,nodeProps:r,renderOption:o}},render(){var e;const{clsPrefix:n,hasSubmenu:l,showIcon:t,nodeProps:r,renderLabel:o,renderOption:p}=this,{rawNode:f}=this.tmNode,c=d("div",Object.assign({class:`${n}-dropdown-option`},r==null?void 0:r(f)),d("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,t&&`${n}-dropdown-option-body__prefix--show-icon`]},G(f.icon)),d("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},o?o(f):G((e=f.title)!==null&&e!==void 0?e:f[this.labelField])),d("div",{class:[`${n}-dropdown-option-body__suffix`,l&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return p?p({node:c,option:f}):c}});function ne(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function We(e){return e.type==="group"}function ve(e){return e.type==="divider"}function qe(e){return e.type==="render"}const he=z({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=T(Z),{hoverKeyRef:l,keyboardKeyRef:t,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:o,activeKeyPathRef:p,animatedRef:f,mergedShowRef:c,renderLabelRef:S,renderIconRef:g,labelFieldRef:N,childrenFieldRef:C,renderOptionRef:P,nodePropsRef:I,menuPropsRef:B}=n,m=T(ae,null),_=T(te),U=T(ue),X=w(()=>e.tmNode.rawNode),W=w(()=>{const{value:a}=C;return ne(e.tmNode.rawNode,a)}),J=w(()=>{const{disabled:a}=e.tmNode;return a}),Q=w(()=>{if(!W.value)return!1;const{key:a,disabled:b}=e.tmNode;if(b)return!1;const{value:R}=l,{value:D}=t,{value:ee}=r,{value:A}=o;return R!==null?A.includes(a):D!==null?A.includes(a)&&A[A.length-1]!==a:ee!==null?A.includes(a):!1}),Y=w(()=>t.value===null&&!f.value),q=Me(Q,300,Y),L=w(()=>!!(m!=null&&m.enteringSubmenuRef.value)),M=j(!1);H(ae,{enteringSubmenuRef:M});function O(){M.value=!0}function i(){M.value=!1}function h(){const{parentKey:a,tmNode:b}=e;b.disabled||c.value&&(r.value=a,t.value=null,l.value=b.key)}function u(){const{tmNode:a}=e;a.disabled||c.value&&l.value!==a.key&&h()}function s(a){if(e.tmNode.disabled||!c.value)return;const{relatedTarget:b}=a;b&&!de({target:b},"dropdownOption")&&!de({target:b},"scrollbarRail")&&(l.value=null)}function y(){const{value:a}=W,{tmNode:b}=e;c.value&&!a&&!b.disabled&&(n.doSelect(b.key,b.rawNode),n.doUpdateShow(!1))}return{labelField:N,renderLabel:S,renderIcon:g,siblingHasIcon:_.showIconRef,siblingHasSubmenu:_.hasSubmenuRef,menuProps:B,popoverBody:U,animated:f,mergedShowSubmenu:w(()=>q.value&&!L.value),rawNode:X,hasSubmenu:W,pending:V(()=>{const{value:a}=o,{key:b}=e.tmNode;return a.includes(b)}),childActive:V(()=>{const{value:a}=p,{key:b}=e.tmNode,R=a.findIndex(D=>b===D);return R===-1?!1:R<a.length-1}),active:V(()=>{const{value:a}=p,{key:b}=e.tmNode,R=a.findIndex(D=>b===D);return R===-1?!1:R===a.length-1}),mergedDisabled:J,renderOption:P,nodeProps:I,handleClick:y,handleMouseMove:u,handleMouseEnter:h,handleMouseLeave:s,handleSubmenuBeforeEnter:O,handleSubmenuAfterEnter:i}},render(){var e,n;const{animated:l,rawNode:t,mergedShowSubmenu:r,clsPrefix:o,siblingHasIcon:p,siblingHasSubmenu:f,renderLabel:c,renderIcon:S,renderOption:g,nodeProps:N,props:C,scrollable:P}=this;let I=null;if(r){const U=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,t,t.children);I=d(be,Object.assign({},U,{clsPrefix:o,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const B={class:[`${o}-dropdown-option-body`,this.pending&&`${o}-dropdown-option-body--pending`,this.active&&`${o}-dropdown-option-body--active`,this.childActive&&`${o}-dropdown-option-body--child-active`,this.mergedDisabled&&`${o}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},m=N==null?void 0:N(t),_=d("div",Object.assign({class:[`${o}-dropdown-option`,m==null?void 0:m.class],"data-dropdown-option":!0},m),d("div",ce(B,C),[d("div",{class:[`${o}-dropdown-option-body__prefix`,p&&`${o}-dropdown-option-body__prefix--show-icon`]},[S?S(t):G(t.icon)]),d("div",{"data-dropdown-option":!0,class:`${o}-dropdown-option-body__label`},c?c(t):G((n=t[this.labelField])!==null&&n!==void 0?n:t.title)),d("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__suffix`,f&&`${o}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(Pe,null,{default:()=>d(He,null)}):null)]),this.hasSubmenu?d(Ae,null,{default:()=>[d(Fe,null,{default:()=>d("div",{class:`${o}-dropdown-offset-container`},d(je,{show:this.mergedShowSubmenu,placement:this.placement,to:P&&this.popoverBody||void 0,teleportDisabled:!P},{default:()=>d("div",{class:`${o}-dropdown-menu-wrapper`},l?d(Ne,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>I}):I)}))})]}):null);return g?g({node:_,option:t}):_}}),Ve=z({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:l}=this,{children:t}=e;return d(ke,null,d(Ue,{clsPrefix:l,tmNode:e,key:e.key}),t==null?void 0:t.map(r=>{const{rawNode:o}=r;return o.show===!1?null:ve(o)?d(fe,{clsPrefix:l,key:r.key}):r.isGroup?(Re("dropdown","`group` node is not allowed to be put in `group` node."),null):d(he,{clsPrefix:l,tmNode:r,parentKey:n,key:r.key})}))}}),Ge=z({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return d("div",n,[e==null?void 0:e()])}}),be=z({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:l}=T(Z);H(te,{showIconRef:w(()=>{const r=n.value;return e.tmNodes.some(o=>{var p;if(o.isGroup)return(p=o.children)===null||p===void 0?void 0:p.some(({rawNode:c})=>r?r(c):c.icon);const{rawNode:f}=o;return r?r(f):f.icon})}),hasSubmenuRef:w(()=>{const{value:r}=l;return e.tmNodes.some(o=>{var p;if(o.isGroup)return(p=o.children)===null||p===void 0?void 0:p.some(({rawNode:c})=>ne(c,r));const{rawNode:f}=o;return ne(f,r)})})});const t=j(null);return H(Ke,null),H(Ce,null),H(ue,t),{bodyRef:t}},render(){const{parentKey:e,clsPrefix:n,scrollable:l}=this,t=this.tmNodes.map(r=>{const{rawNode:o}=r;return o.show===!1?null:qe(o)?d(Ge,{tmNode:r,key:r.key}):ve(o)?d(fe,{clsPrefix:n,key:r.key}):We(o)?d(Ve,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key}):d(he,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key,props:o.props,scrollable:l})});return d("div",{class:[`${n}-dropdown-menu`,l&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},l?d(Ie,{contentClass:`${n}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?xe({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Ze=x("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[_e(),x("dropdown-option",`
 position: relative;
 `,[E("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[E("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),x("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[E("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ie("disabled",[k("pending",`
 color: var(--n-option-text-color-hover);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),E("&::before","background-color: var(--n-option-color-hover);")]),k("active",`
 color: var(--n-option-text-color-active);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),E("&::before","background-color: var(--n-option-color-active);")]),k("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),k("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),k("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[$("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[k("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),$("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[k("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),x("icon",`
 font-size: var(--n-option-icon-size);
 `)]),$("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),$("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[k("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),x("icon",`
 font-size: var(--n-option-icon-size);
 `)]),x("dropdown-menu","pointer-events: all;")]),x("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),x("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),x("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),E(">",[x("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ie("scrollable",`
 padding: var(--n-padding);
 `),k("scrollable",[$("content",`
 padding: var(--n-padding);
 `)])]),Xe={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Je=Object.keys(le),Qe=Object.assign(Object.assign(Object.assign({},le),Xe),pe.props),ao=z({name:"Dropdown",inheritAttrs:!1,props:Qe,setup(e){const n=j(!1),l=Te(K(e,"show"),n),t=w(()=>{const{keyField:i,childrenField:h}=e;return Be(e.options,{getKey(u){return u[i]},getDisabled(u){return u.disabled===!0},getIgnored(u){return u.type==="divider"||u.type==="render"},getChildren(u){return u[h]}})}),r=w(()=>t.value.treeNodes),o=j(null),p=j(null),f=j(null),c=w(()=>{var i,h,u;return(u=(h=(i=o.value)!==null&&i!==void 0?i:p.value)!==null&&h!==void 0?h:f.value)!==null&&u!==void 0?u:null}),S=w(()=>t.value.getPath(c.value).keyPath),g=w(()=>t.value.getPath(e.value).keyPath),N=V(()=>e.keyboard&&l.value);Le({keydown:{ArrowUp:{prevent:!0,handler:J},ArrowRight:{prevent:!0,handler:W},ArrowDown:{prevent:!0,handler:Q},ArrowLeft:{prevent:!0,handler:X},Enter:{prevent:!0,handler:Y},Escape:U}},N);const{mergedClsPrefixRef:C,inlineThemeDisabled:P}=Oe(e),I=pe("Dropdown","-dropdown",Ze,De,e,C);H(Z,{labelFieldRef:K(e,"labelField"),childrenFieldRef:K(e,"childrenField"),renderLabelRef:K(e,"renderLabel"),renderIconRef:K(e,"renderIcon"),hoverKeyRef:o,keyboardKeyRef:p,lastToggledSubmenuKeyRef:f,pendingKeyPathRef:S,activeKeyPathRef:g,animatedRef:K(e,"animated"),mergedShowRef:l,nodePropsRef:K(e,"nodeProps"),renderOptionRef:K(e,"renderOption"),menuPropsRef:K(e,"menuProps"),doSelect:B,doUpdateShow:m}),se(l,i=>{!e.animated&&!i&&_()});function B(i,h){const{onSelect:u}=e;u&&oe(u,i,h)}function m(i){const{"onUpdate:show":h,onUpdateShow:u}=e;h&&oe(h,i),u&&oe(u,i),n.value=i}function _(){o.value=null,p.value=null,f.value=null}function U(){m(!1)}function X(){L("left")}function W(){L("right")}function J(){L("up")}function Q(){L("down")}function Y(){const i=q();i!=null&&i.isLeaf&&l.value&&(B(i.key,i.rawNode),m(!1))}function q(){var i;const{value:h}=t,{value:u}=c;return!h||u===null?null:(i=h.getNode(u))!==null&&i!==void 0?i:null}function L(i){const{value:h}=c,{value:{getFirstAvailableNode:u}}=t;let s=null;if(h===null){const y=u();y!==null&&(s=y.key)}else{const y=q();if(y){let a;switch(i){case"down":a=y.getNext();break;case"up":a=y.getPrev();break;case"right":a=y.getChild();break;case"left":a=y.getParent();break}a&&(s=a.key)}}s!==null&&(o.value=null,p.value=s)}const M=w(()=>{const{size:i,inverted:h}=e,{common:{cubicBezierEaseInOut:u},self:s}=I.value,{padding:y,dividerColor:a,borderRadius:b,optionOpacityDisabled:R,[F("optionIconSuffixWidth",i)]:D,[F("optionSuffixWidth",i)]:ee,[F("optionIconPrefixWidth",i)]:A,[F("optionPrefixWidth",i)]:we,[F("fontSize",i)]:me,[F("optionHeight",i)]:ye,[F("optionIconSize",i)]:ge}=s,v={"--n-bezier":u,"--n-font-size":me,"--n-padding":y,"--n-border-radius":b,"--n-option-height":ye,"--n-option-prefix-width":we,"--n-option-icon-prefix-width":A,"--n-option-suffix-width":ee,"--n-option-icon-suffix-width":D,"--n-option-icon-size":ge,"--n-divider-color":a,"--n-option-opacity-disabled":R};return h?(v["--n-color"]=s.colorInverted,v["--n-option-color-hover"]=s.optionColorHoverInverted,v["--n-option-color-active"]=s.optionColorActiveInverted,v["--n-option-text-color"]=s.optionTextColorInverted,v["--n-option-text-color-hover"]=s.optionTextColorHoverInverted,v["--n-option-text-color-active"]=s.optionTextColorActiveInverted,v["--n-option-text-color-child-active"]=s.optionTextColorChildActiveInverted,v["--n-prefix-color"]=s.prefixColorInverted,v["--n-suffix-color"]=s.suffixColorInverted,v["--n-group-header-text-color"]=s.groupHeaderTextColorInverted):(v["--n-color"]=s.color,v["--n-option-color-hover"]=s.optionColorHover,v["--n-option-color-active"]=s.optionColorActive,v["--n-option-text-color"]=s.optionTextColor,v["--n-option-text-color-hover"]=s.optionTextColorHover,v["--n-option-text-color-active"]=s.optionTextColorActive,v["--n-option-text-color-child-active"]=s.optionTextColorChildActive,v["--n-prefix-color"]=s.prefixColor,v["--n-suffix-color"]=s.suffixColor,v["--n-group-header-text-color"]=s.groupHeaderTextColor),v}),O=P?$e("dropdown",w(()=>`${e.size[0]}${e.inverted?"i":""}`),M,e):void 0;return{mergedClsPrefix:C,mergedTheme:I,tmNodes:r,mergedShow:l,handleAfterLeave:()=>{e.animated&&_()},doUpdateShow:m,cssVars:P?void 0:M,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender}},render(){const e=(t,r,o,p,f)=>{var c;const{mergedClsPrefix:S,menuProps:g}=this;(c=this.onRender)===null||c===void 0||c.call(this);const N=(g==null?void 0:g(void 0,this.tmNodes.map(P=>P.rawNode)))||{},C={ref:Ee(r),class:[t,`${S}-dropdown`,this.themeClass],clsPrefix:S,tmNodes:this.tmNodes,style:[...o,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:p,onMouseleave:f};return d(be,ce(this.$attrs,C,N))},{mergedTheme:n}=this,l={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(Se,Object.assign({},ze(this.$props,Je),l),{trigger:()=>{var t,r;return(r=(t=this.$slots).default)===null||r===void 0?void 0:r.call(t)}})}});export{He as C,ao as _,Ee as c};
