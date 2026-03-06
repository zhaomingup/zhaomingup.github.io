import{d as _,a1 as v,a2 as U,ad as x,ab as g,af as z,ag as f,ae as k,hI as He,W as T,j as C,a3 as E,bJ as _e,be as ee,a5 as Q,a0 as j,F as Oe,an as J,r as M,hK as Fe,ai as Me,aj as oe,iD as Te,aM as se,ah as ue,ak as O,am as Ee,bW as Ke,bg as ke,a6 as je,bM as Be}from"./index-60d779da.js";import{_ as Le}from"./Tooltip-556cc8c2.js";import{_ as $e}from"./Dropdown-6cb4c22d.js";import{c as Z}from"./create-b75cc1a9.js";import{u as ve}from"./get-e9b22093.js";import{u as Ve}from"./use-compitable-74353762.js";import{V as De}from"./index-f3800b56.js";const Ue=_({name:"ChevronDownFilled",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Ge=U("n-layout-sider"),B=U("n-menu"),te=U("n-submenu"),ne=U("n-menu-item-group"),me=[x("&::before","background-color: var(--n-item-color-hover);"),f("arrow",`
 color: var(--n-arrow-color-hover);
 `),f("icon",`
 color: var(--n-item-icon-color-hover);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[x("a",`
 color: var(--n-item-text-color-hover);
 `),f("extra",`
 color: var(--n-item-text-color-hover);
 `)])],he=[f("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],qe=x([g("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[z("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[g("submenu","margin: 0;"),g("menu-item","margin: 0;"),g("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[x("&::before","display: none;"),z("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),g("menu-item-content",[z("selected",[f("icon","color: var(--n-item-icon-color-active-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-horizontal);"),f("extra","color: var(--n-item-text-color-active-horizontal);")])]),z("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),f("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),k("disabled",[k("selected, child-active",[x("&:focus-within",he)]),z("selected",[F(null,[f("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),z("child-active",[F(null,[f("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),F("border-bottom: 2px solid var(--n-border-color-horizontal);",he)]),g("menu-item-content-header",[x("a","color: var(--n-item-text-color-horizontal);")])])]),k("responsive",[g("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),z("collapsed",[g("menu-item-content",[z("selected",[x("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),g("menu-item-content-header","opacity: 0;"),f("arrow","opacity: 0;"),f("icon","color: var(--n-item-icon-color-collapsed);")])]),g("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),g("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("> *","z-index: 1;"),x("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),z("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),z("collapsed",[f("arrow","transform: rotate(0);")]),z("selected",[x("&::before","background-color: var(--n-item-color-active);"),f("arrow","color: var(--n-arrow-color-active);"),f("icon","color: var(--n-item-icon-color-active);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[x("a","color: var(--n-item-text-color-active);"),f("extra","color: var(--n-item-text-color-active);")])]),z("child-active",[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[x("a",`
 color: var(--n-item-text-color-child-active);
 `),f("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),f("arrow",`
 color: var(--n-arrow-color-child-active);
 `),f("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),k("disabled",[k("selected, child-active",[x("&:focus-within",me)]),z("selected",[F(null,[f("arrow","color: var(--n-arrow-color-active-hover);"),f("icon","color: var(--n-item-icon-color-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[x("a","color: var(--n-item-text-color-active-hover);"),f("extra","color: var(--n-item-text-color-active-hover);")])])]),z("child-active",[F(null,[f("arrow","color: var(--n-arrow-color-child-active-hover);"),f("icon","color: var(--n-item-icon-color-child-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[x("a","color: var(--n-item-text-color-child-active-hover);"),f("extra","color: var(--n-item-text-color-child-active-hover);")])])]),z("selected",[F(null,[x("&::before","background-color: var(--n-item-color-active-hover);")])]),F(null,me)]),f("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),f("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),g("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[x("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[x("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),f("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),g("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[g("menu-item-content",`
 height: var(--n-item-height);
 `),g("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[He({duration:".2s"})])]),g("menu-item-group",[g("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),g("menu-tooltip",[x("a",`
 color: inherit;
 text-decoration: none;
 `)]),g("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function F(e,r){return[z("hover",e,r),x("&:hover",e,r)]}const pe=_({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:r}=T(B);return{menuProps:r,style:C(()=>{const{paddingLeft:n}=e;return{paddingLeft:n&&`${n}px`}}),iconStyle:C(()=>{const{maxIconSize:n,activeIconSize:l,iconMarginRight:c}=e;return{width:`${n}px`,height:`${n}px`,fontSize:`${l}px`,marginRight:`${c}px`}})}},render(){const{clsPrefix:e,tmNode:r,menuProps:{renderIcon:n,renderLabel:l,renderExtra:c,expandIcon:d}}=this,s=n?n(r.rawNode):E(this.icon);return v("div",{onClick:p=>{var u;(u=this.onClick)===null||u===void 0||u.call(this,p)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&v("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),v("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:l?l(r.rawNode):E(this.title),this.extra||c?v("span",{class:`${e}-menu-item-content-header__extra`}," ",c?c(r.rawNode):E(this.extra)):null),this.showArrow?v(_e,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>d?d(r.rawNode):v(Ue,null)}):null)}}),D=8;function re(e){const r=T(B),{props:n,mergedCollapsedRef:l}=r,c=T(te,null),d=T(ne,null),s=C(()=>n.mode==="horizontal"),p=C(()=>s.value?n.dropdownPlacement:"tmNodes"in e?"right-start":"right"),u=C(()=>{var m;return Math.max((m=n.collapsedIconSize)!==null&&m!==void 0?m:n.iconSize,n.iconSize)}),I=C(()=>{var m;return!s.value&&e.root&&l.value&&(m=n.collapsedIconSize)!==null&&m!==void 0?m:n.iconSize}),P=C(()=>{if(s.value)return;const{collapsedWidth:m,indent:w,rootIndent:A}=n,{root:S,isGroup:N}=e,H=A===void 0?w:A;return S?l.value?m/2-u.value/2:H:d&&typeof d.paddingLeftRef.value=="number"?w/2+d.paddingLeftRef.value:c&&typeof c.paddingLeftRef.value=="number"?(N?w/2:w)+c.paddingLeftRef.value:0}),y=C(()=>{const{collapsedWidth:m,indent:w,rootIndent:A}=n,{value:S}=u,{root:N}=e;return s.value||!N||!l.value?D:(A===void 0?w:A)+S+D-(m+S)/2});return{dropdownPlacement:p,activeIconSize:I,maxIconSize:u,paddingLeft:P,iconMarginRight:y,NMenu:r,NSubmenu:c}}const ie={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},We=_({name:"MenuDivider",setup(){const e=T(B),{mergedClsPrefixRef:r,isHorizontalRef:n}=e;return()=>n.value?null:v("div",{class:`${r.value}-menu-divider`})}}),fe=Object.assign(Object.assign({},ie),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Je=ee(fe),Ze=_({name:"MenuOption",props:fe,setup(e){const r=re(e),{NSubmenu:n,NMenu:l}=r,{props:c,mergedClsPrefixRef:d,mergedCollapsedRef:s}=l,p=n?n.mergedDisabledRef:{value:!1},u=C(()=>p.value||e.disabled);function I(y){const{onClick:m}=e;m&&m(y)}function P(y){u.value||(l.doSelect(e.internalKey,e.tmNode.rawNode),I(y))}return{mergedClsPrefix:d,dropdownPlacement:r.dropdownPlacement,paddingLeft:r.paddingLeft,iconMarginRight:r.iconMarginRight,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,mergedTheme:l.mergedThemeRef,menuProps:c,dropdownEnabled:Q(()=>e.root&&s.value&&c.mode!=="horizontal"&&!u.value),selected:Q(()=>l.mergedValueRef.value===e.internalKey),mergedDisabled:u,handleClick:P}},render(){const{mergedClsPrefix:e,mergedTheme:r,tmNode:n,menuProps:{renderLabel:l,nodeProps:c}}=this,d=c==null?void 0:c(n.rawNode);return v("div",Object.assign({},d,{role:"menuitem",class:[`${e}-menu-item`,d==null?void 0:d.class]}),v(Le,{theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>l?l(n.rawNode):E(this.title),trigger:()=>v(pe,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),ge=Object.assign(Object.assign({},ie),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Qe=ee(ge),Xe=_({name:"MenuOptionGroup",props:ge,setup(e){j(te,null);const r=re(e);j(ne,{paddingLeftRef:r.paddingLeft});const{mergedClsPrefixRef:n,props:l}=T(B);return function(){const{value:c}=n,d=r.paddingLeft.value,{nodeProps:s}=l,p=s==null?void 0:s(e.tmNode.rawNode);return v("div",{class:`${c}-menu-item-group`,role:"group"},v("div",Object.assign({},p,{class:[`${c}-menu-item-group-title`,p==null?void 0:p.class],style:[(p==null?void 0:p.style)||"",d!==void 0?`padding-left: ${d}px;`:""]}),E(e.title),e.extra?v(Oe,null," ",E(e.extra)):null),v("div",null,e.tmNodes.map(u=>le(u,l))))}}});function X(e){return e.type==="divider"||e.type==="render"}function Ye(e){return e.type==="divider"}function le(e,r){const{rawNode:n}=e,{show:l}=n;if(l===!1)return null;if(X(n))return Ye(n)?v(We,Object.assign({key:e.key},n.props)):null;const{labelField:c}=r,{key:d,level:s,isGroup:p}=e,u=Object.assign(Object.assign({},n),{title:n.title||n[c],extra:n.titleExtra||n.extra,key:d,internalKey:d,level:s,root:s===0,isGroup:p});return e.children?e.isGroup?v(Xe,J(u,Qe,{tmNode:e,tmNodes:e.children,key:d})):v(Y,J(u,eo,{key:d,rawNodes:n[r.childrenField],tmNodes:e.children,tmNode:e})):v(Ze,J(u,Je,{key:d,tmNode:e}))}const xe=Object.assign(Object.assign({},ie),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),eo=ee(xe),Y=_({name:"Submenu",props:xe,setup(e){const r=re(e),{NMenu:n,NSubmenu:l}=r,{props:c,mergedCollapsedRef:d,mergedThemeRef:s}=n,p=C(()=>{const{disabled:m}=e;return l!=null&&l.mergedDisabledRef.value||c.disabled?!0:m}),u=M(!1);j(te,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:p}),j(ne,null);function I(){const{onClick:m}=e;m&&m()}function P(){p.value||(d.value||n.toggleExpand(e.internalKey),I())}function y(m){u.value=m}return{menuProps:c,mergedTheme:s,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,iconMarginRight:r.iconMarginRight,dropdownPlacement:r.dropdownPlacement,dropdownShow:u,paddingLeft:r.paddingLeft,mergedDisabled:p,mergedValue:n.mergedValueRef,childActive:Q(()=>{var m;return(m=e.virtualChildActive)!==null&&m!==void 0?m:n.activePathRef.value.includes(e.internalKey)}),collapsed:C(()=>c.mode==="horizontal"?!1:d.value?!0:!n.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:C(()=>!p.value&&(c.mode==="horizontal"||d.value)),handlePopoverShowChange:y,handleClick:P}},render(){var e;const{mergedClsPrefix:r,menuProps:{renderIcon:n,renderLabel:l}}=this,c=()=>{const{isHorizontal:s,paddingLeft:p,collapsed:u,mergedDisabled:I,maxIconSize:P,activeIconSize:y,title:m,childActive:w,icon:A,handleClick:S,menuProps:{nodeProps:N},dropdownShow:H,iconMarginRight:G,tmNode:K,mergedClsPrefix:L,isEllipsisPlaceholder:q,extra:$}=this,R=N==null?void 0:N(K.rawNode);return v("div",Object.assign({},R,{class:[`${L}-menu-item`,R==null?void 0:R.class],role:"menuitem"}),v(pe,{tmNode:K,paddingLeft:p,collapsed:u,disabled:I,iconMarginRight:G,maxIconSize:P,activeIconSize:y,title:m,extra:$,showArrow:!s,childActive:w,clsPrefix:L,icon:A,hover:H,onClick:S,isEllipsisPlaceholder:q}))},d=()=>v(Fe,null,{default:()=>{const{tmNodes:s,collapsed:p}=this;return p?null:v("div",{class:`${r}-submenu-children`,role:"menu"},s.map(u=>le(u,this.menuProps)))}});return this.root?v($e,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:n,renderLabel:l}),{default:()=>v("div",{class:`${r}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},c(),this.isHorizontal?null:d())}):v("div",{class:`${r}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},c(),d())}}),oo=Object.assign(Object.assign({},oe.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),vo=_({name:"Menu",inheritAttrs:!1,props:oo,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=Me(e),l=oe("Menu","-menu",qe,Te,e,r),c=T(Ge,null),d=C(()=>{var i;const{collapsed:h}=e;if(h!==void 0)return h;if(c){const{collapseModeRef:o,collapsedRef:a}=c;if(o.value==="width")return(i=a.value)!==null&&i!==void 0?i:!1}return!1}),s=C(()=>{const{keyField:i,childrenField:h,disabledField:o}=e;return Z(e.items||e.options,{getIgnored(a){return X(a)},getChildren(a){return a[h]},getDisabled(a){return a[o]},getKey(a){var b;return(b=a[i])!==null&&b!==void 0?b:a.name}})}),p=C(()=>new Set(s.value.treeNodes.map(i=>i.key))),{watchProps:u}=e,I=M(null);u!=null&&u.includes("defaultValue")?se(()=>{I.value=e.defaultValue}):I.value=e.defaultValue;const P=ue(e,"value"),y=ve(P,I),m=M([]),w=()=>{m.value=e.defaultExpandAll?s.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||s.value.getPath(y.value,{includeSelf:!1}).keyPath};u!=null&&u.includes("defaultExpandedKeys")?se(w):w();const A=Ve(e,["expandedNames","expandedKeys"]),S=ve(A,m),N=C(()=>s.value.treeNodes),H=C(()=>s.value.getPath(y.value).keyPath);j(B,{props:e,mergedCollapsedRef:d,mergedThemeRef:l,mergedValueRef:y,mergedExpandedKeysRef:S,activePathRef:H,mergedClsPrefixRef:r,isHorizontalRef:C(()=>e.mode==="horizontal"),invertedRef:ue(e,"inverted"),doSelect:G,toggleExpand:L});function G(i,h){const{"onUpdate:value":o,onUpdateValue:a,onSelect:b}=e;a&&O(a,i,h),o&&O(o,i,h),b&&O(b,i,h),I.value=i}function K(i){const{"onUpdate:expandedKeys":h,onUpdateExpandedKeys:o,onExpandedNamesChange:a,onOpenNamesChange:b}=e;h&&O(h,i),o&&O(o,i),a&&O(a,i),b&&O(b,i),m.value=i}function L(i){const h=Array.from(S.value),o=h.findIndex(a=>a===i);if(~o)h.splice(o,1);else{if(e.accordion&&p.value.has(i)){const a=h.findIndex(b=>p.value.has(b));a>-1&&h.splice(a,1)}h.push(i)}K(h)}const q=i=>{const h=s.value.getPath(i??y.value,{includeSelf:!1}).keyPath;if(!h.length)return;const o=Array.from(S.value),a=new Set([...o,...h]);e.accordion&&p.value.forEach(b=>{a.has(b)&&!h.includes(b)&&a.delete(b)}),K(Array.from(a))},$=C(()=>{const{inverted:i}=e,{common:{cubicBezierEaseInOut:h},self:o}=l.value,{borderRadius:a,borderColorHorizontal:b,fontSize:Ae,itemHeight:Pe,dividerColor:Ne}=o,t={"--n-divider-color":Ne,"--n-bezier":h,"--n-font-size":Ae,"--n-border-color-horizontal":b,"--n-border-radius":a,"--n-item-height":Pe};return i?(t["--n-group-text-color"]=o.groupTextColorInverted,t["--n-color"]=o.colorInverted,t["--n-item-text-color"]=o.itemTextColorInverted,t["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,t["--n-item-text-color-active"]=o.itemTextColorActiveInverted,t["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,t["--n-item-icon-color"]=o.itemIconColorInverted,t["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,t["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,t["--n-arrow-color"]=o.arrowColorInverted,t["--n-arrow-color-hover"]=o.arrowColorHoverInverted,t["--n-arrow-color-active"]=o.arrowColorActiveInverted,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,t["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,t["--n-item-color-hover"]=o.itemColorHoverInverted,t["--n-item-color-active"]=o.itemColorActiveInverted,t["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(t["--n-group-text-color"]=o.groupTextColor,t["--n-color"]=o.color,t["--n-item-text-color"]=o.itemTextColor,t["--n-item-text-color-hover"]=o.itemTextColorHover,t["--n-item-text-color-active"]=o.itemTextColorActive,t["--n-item-text-color-child-active"]=o.itemTextColorChildActive,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,t["--n-item-icon-color"]=o.itemIconColor,t["--n-item-icon-color-hover"]=o.itemIconColorHover,t["--n-item-icon-color-active"]=o.itemIconColorActive,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,t["--n-arrow-color"]=o.arrowColor,t["--n-arrow-color-hover"]=o.arrowColorHover,t["--n-arrow-color-active"]=o.arrowColorActive,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,t["--n-arrow-color-child-active"]=o.arrowColorChildActive,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,t["--n-item-color-hover"]=o.itemColorHover,t["--n-item-color-active"]=o.itemColorActive,t["--n-item-color-active-hover"]=o.itemColorActiveHover,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),t}),R=n?Ee("menu",C(()=>e.inverted?"a":"b"),$,e):void 0,W=Ke(),ae=M(null),be=M(null);let ce=!0;const de=()=>{var i;ce?ce=!1:(i=ae.value)===null||i===void 0||i.sync({showAllItemsBeforeCalculate:!0})};function Ce(){return document.getElementById(W)}const V=M(-1);function ze(i){V.value=e.options.length-i}function ye(i){i||(V.value=-1)}const Ie=C(()=>{const i=V.value;return{children:i===-1?[]:e.options.slice(i)}}),we=C(()=>{const{childrenField:i,disabledField:h,keyField:o}=e;return Z([Ie.value],{getIgnored(a){return X(a)},getChildren(a){return a[i]},getDisabled(a){return a[h]},getKey(a){var b;return(b=a[o])!==null&&b!==void 0?b:a.name}})}),Se=C(()=>Z([{}]).treeNodes[0]);function Re(){var i;if(V.value===-1)return v(Y,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:Se.value,domId:W,isEllipsisPlaceholder:!0});const h=we.value.treeNodes[0],o=H.value,a=!!(!((i=h.children)===null||i===void 0)&&i.some(b=>o.includes(b.key)));return v(Y,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:a,tmNode:h,domId:W,rawNodes:h.rawNode.children||[],tmNodes:h.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:r,controlledExpandedKeys:A,uncontrolledExpanededKeys:m,mergedExpandedKeys:S,uncontrolledValue:I,mergedValue:y,activePath:H,tmNodes:N,mergedTheme:l,mergedCollapsed:d,cssVars:n?void 0:$,themeClass:R==null?void 0:R.themeClass,overflowRef:ae,counterRef:be,updateCounter:()=>{},onResize:de,onUpdateOverflow:ye,onUpdateCount:ze,renderCounter:Re,getCounter:Ce,onRender:R==null?void 0:R.onRender,showOption:q,deriveResponsiveState:de}},render(){const{mergedClsPrefix:e,mode:r,themeClass:n,onRender:l}=this;l==null||l();const c=()=>this.tmNodes.map(u=>le(u,this.$props)),s=r==="horizontal"&&this.responsive,p=()=>v("div",je(this.$attrs,{role:r==="horizontal"?"menubar":"menu",class:[`${e}-menu`,n,`${e}-menu--${r}`,s&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),s?v(De,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:c,counter:this.renderCounter}):c());return s?v(ke,{onResize:this.onResize},{default:p}):p()}}),to=Object.assign(Object.assign({},oe.props),{trigger:String,xScrollable:Boolean,onScroll:Function,contentClass:String,contentStyle:[Object,String],size:Number,yPlacement:{type:String,default:"right"},xPlacement:{type:String,default:"bottom"}}),no=_({name:"Scrollbar",props:to,setup(){const e=M(null);return Object.assign(Object.assign({},{scrollTo:(...n)=>{var l;(l=e.value)===null||l===void 0||l.scrollTo(n[0],n[1])},scrollBy:(...n)=>{var l;(l=e.value)===null||l===void 0||l.scrollBy(n[0],n[1])}}),{scrollbarInstRef:e})},render(){return v(Be,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),mo=no;export{vo as _,mo as a};
