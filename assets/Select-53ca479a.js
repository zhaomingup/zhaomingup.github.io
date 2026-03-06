import{bx as zo,by as Bo,bz as k,ab as P,af as H,ag as O,ae as be,ad as te,d as Ge,r as y,ai as Qe,aj as ge,a0 as _o,ah as ce,bj as lo,j as D,al as j,bA as Ye,am as Xe,bB as Ze,aT as Je,a1 as a,bC as $o,a2 as Eo,ak as Q,bD as Ao,a3 as Me,w as ze,o as Do,aM as Vo,bE as jo,F as Wo,p as Ho,ac as Lo,bF as No,aU as Uo,Z as Ko,X as Yo,Y as qo,aP as eo,bG as Go,aQ as Qo,bH as Xo}from"./index-60d779da.js";import{u as Zo,p as Ne,f as Jo,c as en,N as on,a as nn}from"./utils-7761d1fa.js";import{u as oo}from"./get-e9b22093.js";import{u as tn}from"./use-compitable-74353762.js";import{c as ln}from"./create-b75cc1a9.js";import{u as rn}from"./use-locale-fb528dcd.js";import{N as an}from"./FormItem-cb09d3d4.js";import{V as no}from"./index-f3800b56.js";import{N as sn}from"./Popover-8d17067b.js";import{h as Ue}from"./happens-in-d88e25de.js";import{u as qe,V as cn,a as dn,b as un}from"./Follower-26782267.js";function to(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function hn(e){const{textColor2:m,primaryColorHover:u,primaryColorPressed:p,primaryColor:c,infoColor:b,successColor:w,warningColor:l,errorColor:x,baseColor:M,borderColor:F,opacityDisabled:S,tagColor:C,closeIconColor:i,closeIconColorHover:g,closeIconColorPressed:R,borderRadiusSmall:z,fontSizeMini:E,fontSizeTiny:V,fontSizeSmall:A,fontSizeMedium:_,heightMini:T,heightTiny:L,heightSmall:W,heightMedium:J,closeColorHover:ee,closeColorPressed:U,buttonColor2Hover:K,buttonColor2Pressed:Y,fontWeightStrong:I}=e;return Object.assign(Object.assign({},Bo),{closeBorderRadius:z,heightTiny:T,heightSmall:L,heightMedium:W,heightLarge:J,borderRadius:z,opacityDisabled:S,fontSizeTiny:E,fontSizeSmall:V,fontSizeMedium:A,fontSizeLarge:_,fontWeightStrong:I,textColorCheckable:m,textColorHoverCheckable:m,textColorPressedCheckable:m,textColorChecked:M,colorCheckable:"#0000",colorHoverCheckable:K,colorPressedCheckable:Y,colorChecked:c,colorCheckedHover:u,colorCheckedPressed:p,border:`1px solid ${F}`,textColor:m,color:C,colorBordered:"rgb(250, 250, 252)",closeIconColor:i,closeIconColorHover:g,closeIconColorPressed:R,closeColorHover:ee,closeColorPressed:U,borderPrimary:`1px solid ${k(c,{alpha:.3})}`,textColorPrimary:c,colorPrimary:k(c,{alpha:.12}),colorBorderedPrimary:k(c,{alpha:.1}),closeIconColorPrimary:c,closeIconColorHoverPrimary:c,closeIconColorPressedPrimary:c,closeColorHoverPrimary:k(c,{alpha:.12}),closeColorPressedPrimary:k(c,{alpha:.18}),borderInfo:`1px solid ${k(b,{alpha:.3})}`,textColorInfo:b,colorInfo:k(b,{alpha:.12}),colorBorderedInfo:k(b,{alpha:.1}),closeIconColorInfo:b,closeIconColorHoverInfo:b,closeIconColorPressedInfo:b,closeColorHoverInfo:k(b,{alpha:.12}),closeColorPressedInfo:k(b,{alpha:.18}),borderSuccess:`1px solid ${k(w,{alpha:.3})}`,textColorSuccess:w,colorSuccess:k(w,{alpha:.12}),colorBorderedSuccess:k(w,{alpha:.1}),closeIconColorSuccess:w,closeIconColorHoverSuccess:w,closeIconColorPressedSuccess:w,closeColorHoverSuccess:k(w,{alpha:.12}),closeColorPressedSuccess:k(w,{alpha:.18}),borderWarning:`1px solid ${k(l,{alpha:.35})}`,textColorWarning:l,colorWarning:k(l,{alpha:.15}),colorBorderedWarning:k(l,{alpha:.12}),closeIconColorWarning:l,closeIconColorHoverWarning:l,closeIconColorPressedWarning:l,closeColorHoverWarning:k(l,{alpha:.12}),closeColorPressedWarning:k(l,{alpha:.18}),borderError:`1px solid ${k(x,{alpha:.23})}`,textColorError:x,colorError:k(x,{alpha:.1}),colorBorderedError:k(x,{alpha:.08}),closeIconColorError:x,closeIconColorHoverError:x,closeIconColorPressedError:x,closeColorHoverError:k(x,{alpha:.12}),closeColorPressedError:k(x,{alpha:.18})})}const fn={name:"Tag",common:zo,self:hn},vn=fn,bn={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},gn=P("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[H("strong",`
 font-weight: var(--n-font-weight-strong);
 `),O("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),O("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),O("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),O("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),H("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[O("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),O("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),H("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),H("icon, avatar",[H("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),H("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),H("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[be("disabled",[te("&:hover","background-color: var(--n-color-hover-checkable);",[be("checked","color: var(--n-text-color-hover-checkable);")]),te("&:active","background-color: var(--n-color-pressed-checkable);",[be("checked","color: var(--n-text-color-pressed-checkable);")])]),H("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[be("disabled",[te("&:hover","background-color: var(--n-color-checked-hover);"),te("&:active","background-color: var(--n-color-checked-pressed);")])])])]),pn=Object.assign(Object.assign(Object.assign({},ge.props),bn),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),mn=Eo("n-tag"),Ke=Ge({name:"Tag",props:pn,slots:Object,setup(e){const m=y(null),{mergedBorderedRef:u,mergedClsPrefixRef:p,inlineThemeDisabled:c,mergedRtlRef:b}=Qe(e),w=ge("Tag","-tag",gn,vn,e,p);_o(mn,{roundRef:ce(e,"round")});function l(){if(!e.disabled&&e.checkable){const{checked:i,onCheckedChange:g,onUpdateChecked:R,"onUpdate:checked":z}=e;R&&R(!i),z&&z(!i),g&&g(!i)}}function x(i){if(e.triggerClickOnClose||i.stopPropagation(),!e.disabled){const{onClose:g}=e;g&&Q(g,i)}}const M={setTextContent(i){const{value:g}=m;g&&(g.textContent=i)}},F=lo("Tag",b,p),S=D(()=>{const{type:i,size:g,color:{color:R,textColor:z}={}}=e,{common:{cubicBezierEaseInOut:E},self:{padding:V,closeMargin:A,borderRadius:_,opacityDisabled:T,textColorCheckable:L,textColorHoverCheckable:W,textColorPressedCheckable:J,textColorChecked:ee,colorCheckable:U,colorHoverCheckable:K,colorPressedCheckable:Y,colorChecked:I,colorCheckedHover:de,colorCheckedPressed:ue,closeBorderRadius:le,fontWeightStrong:pe,[j("colorBordered",i)]:re,[j("closeSize",g)]:me,[j("closeIconSize",g)]:oe,[j("fontSize",g)]:X,[j("height",g)]:he,[j("color",i)]:ie,[j("textColor",i)]:Ce,[j("border",i)]:we,[j("closeIconColor",i)]:se,[j("closeIconColorHover",i)]:fe,[j("closeIconColorPressed",i)]:ne,[j("closeColorHover",i)]:N,[j("closeColorPressed",i)]:ve}}=w.value,q=Ye(A);return{"--n-font-weight-strong":pe,"--n-avatar-size-override":`calc(${he} - 8px)`,"--n-bezier":E,"--n-border-radius":_,"--n-border":we,"--n-close-icon-size":oe,"--n-close-color-pressed":ve,"--n-close-color-hover":N,"--n-close-border-radius":le,"--n-close-icon-color":se,"--n-close-icon-color-hover":fe,"--n-close-icon-color-pressed":ne,"--n-close-icon-color-disabled":se,"--n-close-margin-top":q.top,"--n-close-margin-right":q.right,"--n-close-margin-bottom":q.bottom,"--n-close-margin-left":q.left,"--n-close-size":me,"--n-color":R||(u.value?re:ie),"--n-color-checkable":U,"--n-color-checked":I,"--n-color-checked-hover":de,"--n-color-checked-pressed":ue,"--n-color-hover-checkable":K,"--n-color-pressed-checkable":Y,"--n-font-size":X,"--n-height":he,"--n-opacity-disabled":T,"--n-padding":V,"--n-text-color":z||Ce,"--n-text-color-checkable":L,"--n-text-color-checked":ee,"--n-text-color-hover-checkable":W,"--n-text-color-pressed-checkable":J}}),C=c?Xe("tag",D(()=>{let i="";const{type:g,size:R,color:{color:z,textColor:E}={}}=e;return i+=g[0],i+=R[0],z&&(i+=`a${Ze(z)}`),E&&(i+=`b${Ze(E)}`),u.value&&(i+="c"),i}),S,e):void 0;return Object.assign(Object.assign({},M),{rtlEnabled:F,mergedClsPrefix:p,contentRef:m,mergedBordered:u,handleClick:l,handleCloseClick:x,cssVars:c?void 0:S,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender})},render(){var e,m;const{mergedClsPrefix:u,rtlEnabled:p,closable:c,color:{borderColor:b}={},round:w,onRender:l,$slots:x}=this;l==null||l();const M=Je(x.avatar,S=>S&&a("div",{class:`${u}-tag__avatar`},S)),F=Je(x.icon,S=>S&&a("div",{class:`${u}-tag__icon`},S));return a("div",{class:[`${u}-tag`,this.themeClass,{[`${u}-tag--rtl`]:p,[`${u}-tag--strong`]:this.strong,[`${u}-tag--disabled`]:this.disabled,[`${u}-tag--checkable`]:this.checkable,[`${u}-tag--checked`]:this.checkable&&this.checked,[`${u}-tag--round`]:w,[`${u}-tag--avatar`]:M,[`${u}-tag--icon`]:F,[`${u}-tag--closable`]:c}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},F||M,a("span",{class:`${u}-tag__content`,ref:"contentRef"},(m=(e=this.$slots).default)===null||m===void 0?void 0:m.call(e)),!this.checkable&&c?a($o,{clsPrefix:u,class:`${u}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:w,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?a("div",{class:`${u}-tag__border`,style:{borderColor:b}}):null)}}),Cn=te([P("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[P("base-loading",`
 color: var(--n-loading-color);
 `),P("base-selection-tags","min-height: var(--n-height);"),O("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),O("state-border",`
 z-index: 1;
 border-color: #0000;
 `),P("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[O("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),P("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[O("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),P("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[O("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),P("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),P("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[P("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[O("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),O("render-label",`
 color: var(--n-text-color);
 `)]),be("disabled",[te("&:hover",[O("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),H("focus",[O("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),H("active",[O("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),P("base-selection-label","background-color: var(--n-color-active);"),P("base-selection-tags","background-color: var(--n-color-active);")])]),H("disabled","cursor: not-allowed;",[O("arrow",`
 color: var(--n-arrow-color-disabled);
 `),P("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[P("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),O("render-label",`
 color: var(--n-text-color-disabled);
 `)]),P("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),P("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),P("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[O("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),O("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>H(`${e}-status`,[O("state-border",`border: var(--n-border-${e});`),be("disabled",[te("&:hover",[O("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),H("active",[O("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),P("base-selection-label",`background-color: var(--n-color-active-${e});`),P("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),H("focus",[O("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),P("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),P("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[te("&:last-child","padding-right: 0;"),P("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[O("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),wn=Ge({name:"InternalSelection",props:Object.assign(Object.assign({},ge.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:m,mergedRtlRef:u}=Qe(e),p=lo("InternalSelection",u,m),c=y(null),b=y(null),w=y(null),l=y(null),x=y(null),M=y(null),F=y(null),S=y(null),C=y(null),i=y(null),g=y(!1),R=y(!1),z=y(!1),E=ge("InternalSelection","-internal-selection",Cn,Ao,e,ce(e,"clsPrefix")),V=D(()=>e.clearable&&!e.disabled&&(z.value||e.active)),A=D(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Me(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),_=D(()=>{const n=e.selectedOption;if(n)return n[e.labelField]}),T=D(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function L(){var n;const{value:r}=c;if(r){const{value:B}=b;B&&(B.style.width=`${r.offsetWidth}px`,e.maxTagCount!=="responsive"&&((n=C.value)===null||n===void 0||n.sync({showAllItemsBeforeCalculate:!1})))}}function W(){const{value:n}=i;n&&(n.style.display="none")}function J(){const{value:n}=i;n&&(n.style.display="inline-block")}ze(ce(e,"active"),n=>{n||W()}),ze(ce(e,"pattern"),()=>{e.multiple&&Ho(L)});function ee(n){const{onFocus:r}=e;r&&r(n)}function U(n){const{onBlur:r}=e;r&&r(n)}function K(n){const{onDeleteOption:r}=e;r&&r(n)}function Y(n){const{onClear:r}=e;r&&r(n)}function I(n){const{onPatternInput:r}=e;r&&r(n)}function de(n){var r;(!n.relatedTarget||!(!((r=w.value)===null||r===void 0)&&r.contains(n.relatedTarget)))&&ee(n)}function ue(n){var r;!((r=w.value)===null||r===void 0)&&r.contains(n.relatedTarget)||U(n)}function le(n){Y(n)}function pe(){z.value=!0}function re(){z.value=!1}function me(n){!e.active||!e.filterable||n.target!==b.value&&n.preventDefault()}function oe(n){K(n)}const X=y(!1);function he(n){if(n.key==="Backspace"&&!X.value&&!e.pattern.length){const{selectedOptions:r}=e;r!=null&&r.length&&oe(r[r.length-1])}}let ie=null;function Ce(n){const{value:r}=c;if(r){const B=n.target.value;r.textContent=B,L()}e.ignoreComposition&&X.value?ie=n:I(n)}function we(){X.value=!0}function se(){X.value=!1,e.ignoreComposition&&I(ie),ie=null}function fe(n){var r;R.value=!0,(r=e.onPatternFocus)===null||r===void 0||r.call(e,n)}function ne(n){var r;R.value=!1,(r=e.onPatternBlur)===null||r===void 0||r.call(e,n)}function N(){var n,r;if(e.filterable)R.value=!1,(n=M.value)===null||n===void 0||n.blur(),(r=b.value)===null||r===void 0||r.blur();else if(e.multiple){const{value:B}=l;B==null||B.blur()}else{const{value:B}=x;B==null||B.blur()}}function ve(){var n,r,B;e.filterable?(R.value=!1,(n=M.value)===null||n===void 0||n.focus()):e.multiple?(r=l.value)===null||r===void 0||r.focus():(B=x.value)===null||B===void 0||B.focus()}function q(){const{value:n}=b;n&&(J(),n.focus())}function Be(){const{value:n}=b;n&&n.blur()}function _e(n){const{value:r}=F;r&&r.setTextContent(`+${n}`)}function $e(){const{value:n}=S;return n}function Ee(){return b.value}let xe=null;function ye(){xe!==null&&window.clearTimeout(xe)}function Ae(){e.active||(ye(),xe=window.setTimeout(()=>{T.value&&(g.value=!0)},100))}function De(){ye()}function Ve(n){n||(ye(),g.value=!1)}ze(T,n=>{n||(g.value=!1)}),Do(()=>{Vo(()=>{const n=M.value;n&&(e.disabled?n.removeAttribute("tabindex"):n.tabIndex=R.value?-1:0)})}),Zo(w,e.onResize);const{inlineThemeDisabled:Oe}=e,ke=D(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:r},self:{fontWeight:B,borderRadius:je,color:We,placeholderColor:Se,textColor:Pe,paddingSingle:Fe,paddingMultiple:He,caretColor:Le,colorDisabled:Te,textColorDisabled:ae,placeholderColorDisabled:o,colorActive:t,boxShadowFocus:s,boxShadowActive:v,boxShadowHover:h,border:d,borderFocus:f,borderHover:$,borderActive:Z,arrowColor:ro,arrowColorDisabled:ao,loadingColor:io,colorActiveWarning:so,boxShadowFocusWarning:co,boxShadowActiveWarning:uo,boxShadowHoverWarning:ho,borderWarning:fo,borderFocusWarning:vo,borderHoverWarning:bo,borderActiveWarning:go,colorActiveError:po,boxShadowFocusError:mo,boxShadowActiveError:Co,boxShadowHoverError:wo,borderError:xo,borderFocusError:yo,borderHoverError:ko,borderActiveError:Oo,clearColor:So,clearColorHover:Po,clearColorPressed:Fo,clearSize:To,arrowSize:Io,[j("height",n)]:Ro,[j("fontSize",n)]:Mo}}=E.value,Ie=Ye(Fe),Re=Ye(He);return{"--n-bezier":r,"--n-border":d,"--n-border-active":Z,"--n-border-focus":f,"--n-border-hover":$,"--n-border-radius":je,"--n-box-shadow-active":v,"--n-box-shadow-focus":s,"--n-box-shadow-hover":h,"--n-caret-color":Le,"--n-color":We,"--n-color-active":t,"--n-color-disabled":Te,"--n-font-size":Mo,"--n-height":Ro,"--n-padding-single-top":Ie.top,"--n-padding-multiple-top":Re.top,"--n-padding-single-right":Ie.right,"--n-padding-multiple-right":Re.right,"--n-padding-single-left":Ie.left,"--n-padding-multiple-left":Re.left,"--n-padding-single-bottom":Ie.bottom,"--n-padding-multiple-bottom":Re.bottom,"--n-placeholder-color":Se,"--n-placeholder-color-disabled":o,"--n-text-color":Pe,"--n-text-color-disabled":ae,"--n-arrow-color":ro,"--n-arrow-color-disabled":ao,"--n-loading-color":io,"--n-color-active-warning":so,"--n-box-shadow-focus-warning":co,"--n-box-shadow-active-warning":uo,"--n-box-shadow-hover-warning":ho,"--n-border-warning":fo,"--n-border-focus-warning":vo,"--n-border-hover-warning":bo,"--n-border-active-warning":go,"--n-color-active-error":po,"--n-box-shadow-focus-error":mo,"--n-box-shadow-active-error":Co,"--n-box-shadow-hover-error":wo,"--n-border-error":xo,"--n-border-focus-error":yo,"--n-border-hover-error":ko,"--n-border-active-error":Oo,"--n-clear-size":To,"--n-clear-color":So,"--n-clear-color-hover":Po,"--n-clear-color-pressed":Fo,"--n-arrow-size":Io,"--n-font-weight":B}}),G=Oe?Xe("internal-selection",D(()=>e.size[0]),ke,e):void 0;return{mergedTheme:E,mergedClearable:V,mergedClsPrefix:m,rtlEnabled:p,patternInputFocused:R,filterablePlaceholder:A,label:_,selected:T,showTagsPanel:g,isComposing:X,counterRef:F,counterWrapperRef:S,patternInputMirrorRef:c,patternInputRef:b,selfRef:w,multipleElRef:l,singleElRef:x,patternInputWrapperRef:M,overflowRef:C,inputTagElRef:i,handleMouseDown:me,handleFocusin:de,handleClear:le,handleMouseEnter:pe,handleMouseLeave:re,handleDeleteOption:oe,handlePatternKeyDown:he,handlePatternInputInput:Ce,handlePatternInputBlur:ne,handlePatternInputFocus:fe,handleMouseEnterCounter:Ae,handleMouseLeaveCounter:De,handleFocusout:ue,handleCompositionEnd:se,handleCompositionStart:we,onPopoverUpdateShow:Ve,focus:ve,focusInput:q,blur:N,blurInput:Be,updateCounter:_e,getCounter:$e,getTail:Ee,renderLabel:e.renderLabel,cssVars:Oe?void 0:ke,themeClass:G==null?void 0:G.themeClass,onRender:G==null?void 0:G.onRender}},render(){const{status:e,multiple:m,size:u,disabled:p,filterable:c,maxTagCount:b,bordered:w,clsPrefix:l,ellipsisTagPopoverProps:x,onRender:M,renderTag:F,renderLabel:S}=this;M==null||M();const C=b==="responsive",i=typeof b=="number",g=C||i,R=a(jo,null,{default:()=>a(an,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var E,V;return(V=(E=this.$slots).arrow)===null||V===void 0?void 0:V.call(E)}})});let z;if(m){const{labelField:E}=this,V=I=>a("div",{class:`${l}-base-selection-tag-wrapper`,key:I.value},F?F({option:I,handleClose:()=>{this.handleDeleteOption(I)}}):a(Ke,{size:u,closable:!I.disabled,disabled:p,onClose:()=>{this.handleDeleteOption(I)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>S?S(I,!0):Me(I[E],I,!0)})),A=()=>(i?this.selectedOptions.slice(0,b):this.selectedOptions).map(V),_=c?a("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:p,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),a("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,T=C?()=>a("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},a(Ke,{size:u,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:p})):void 0;let L;if(i){const I=this.selectedOptions.length-b;I>0&&(L=a("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},a(Ke,{size:u,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:p},{default:()=>`+${I}`})))}const W=C?c?a(no,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:A,counter:T,tail:()=>_}):a(no,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:A,counter:T}):i&&L?A().concat(L):A(),J=g?()=>a("div",{class:`${l}-base-selection-popover`},C?A():this.selectedOptions.map(V)):void 0,ee=g?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},x):null,K=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?a("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},a("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,Y=c?a("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},W,C?null:_,R):a("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:p?void 0:0},W,R);z=a(Wo,null,g?a(sn,Object.assign({},ee,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>Y,default:J}):Y,K)}else if(c){const E=this.pattern||this.isComposing,V=this.active?!E:!this.selected,A=this.active?!1:this.selected;z=a("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`,title:this.patternInputFocused?void 0:to(this.label)},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:p,disabled:p,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),A?a("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},a("div",{class:`${l}-base-selection-overlay__wrapper`},F?F({option:this.selectedOption,handleClose:()=>{}}):S?S(this.selectedOption,!0):Me(this.label,this.selectedOption,!0))):null,V?a("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,R)}else z=a("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?a("div",{class:`${l}-base-selection-input`,title:to(this.label),key:"input"},a("div",{class:`${l}-base-selection-input__content`},F?F({option:this.selectedOption,handleClose:()=>{}}):S?S(this.selectedOption,!0):Me(this.label,this.selectedOption,!0))):a("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),R);return a("div",{ref:"selfRef",class:[`${l}-base-selection`,this.rtlEnabled&&`${l}-base-selection--rtl`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},z,w?a("div",{class:`${l}-base-selection__border`}):null,w?a("div",{class:`${l}-base-selection__state-border`}):null)}}),xn=te([P("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),P("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Lo({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),yn=Object.assign(Object.assign({},ge.props),{to:qe.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),_n=Ge({name:"Select",props:yn,slots:Object,setup(e){const{mergedClsPrefixRef:m,mergedBorderedRef:u,namespaceRef:p,inlineThemeDisabled:c}=Qe(e),b=ge("Select","-select",xn,Go,e,m),w=y(e.defaultValue),l=ce(e,"value"),x=oo(l,w),M=y(!1),F=y(""),S=tn(e,["items","options"]),C=y([]),i=y([]),g=D(()=>i.value.concat(C.value).concat(S.value)),R=D(()=>{const{filter:o}=e;if(o)return o;const{labelField:t,valueField:s}=e;return(v,h)=>{if(!h)return!1;const d=h[t];if(typeof d=="string")return Ne(v,d);const f=h[s];return typeof f=="string"?Ne(v,f):typeof f=="number"?Ne(v,String(f)):!1}}),z=D(()=>{if(e.remote)return S.value;{const{value:o}=g,{value:t}=F;return!t.length||!e.filterable?o:Jo(o,R.value,t,e.childrenField)}}),E=D(()=>{const{valueField:o,childrenField:t}=e,s=nn(o,t);return ln(z.value,s)}),V=D(()=>en(g.value,e.valueField,e.childrenField)),A=y(!1),_=oo(ce(e,"show"),A),T=y(null),L=y(null),W=y(null),{localeRef:J}=rn("Select"),ee=D(()=>{var o;return(o=e.placeholder)!==null&&o!==void 0?o:J.value.placeholder}),U=[],K=y(new Map),Y=D(()=>{const{fallbackOption:o}=e;if(o===void 0){const{labelField:t,valueField:s}=e;return v=>({[t]:String(v),[s]:v})}return o===!1?!1:t=>Object.assign(o(t),{value:t})});function I(o){const t=e.remote,{value:s}=K,{value:v}=V,{value:h}=Y,d=[];return o.forEach(f=>{if(v.has(f))d.push(v.get(f));else if(t&&s.has(f))d.push(s.get(f));else if(h){const $=h(f);$&&d.push($)}}),d}const de=D(()=>{if(e.multiple){const{value:o}=x;return Array.isArray(o)?I(o):[]}return null}),ue=D(()=>{const{value:o}=x;return!e.multiple&&!Array.isArray(o)?o===null?null:I([o])[0]||null:null}),le=No(e),{mergedSizeRef:pe,mergedDisabledRef:re,mergedStatusRef:me}=le;function oe(o,t){const{onChange:s,"onUpdate:value":v,onUpdateValue:h}=e,{nTriggerFormChange:d,nTriggerFormInput:f}=le;s&&Q(s,o,t),h&&Q(h,o,t),v&&Q(v,o,t),w.value=o,d(),f()}function X(o){const{onBlur:t}=e,{nTriggerFormBlur:s}=le;t&&Q(t,o),s()}function he(){const{onClear:o}=e;o&&Q(o)}function ie(o){const{onFocus:t,showOnFocus:s}=e,{nTriggerFormFocus:v}=le;t&&Q(t,o),v(),s&&ne()}function Ce(o){const{onSearch:t}=e;t&&Q(t,o)}function we(o){const{onScroll:t}=e;t&&Q(t,o)}function se(){var o;const{remote:t,multiple:s}=e;if(t){const{value:v}=K;if(s){const{valueField:h}=e;(o=de.value)===null||o===void 0||o.forEach(d=>{v.set(d[h],d)})}else{const h=ue.value;h&&v.set(h[e.valueField],h)}}}function fe(o){const{onUpdateShow:t,"onUpdate:show":s}=e;t&&Q(t,o),s&&Q(s,o),A.value=o}function ne(){re.value||(fe(!0),A.value=!0,e.filterable&&Fe())}function N(){fe(!1)}function ve(){F.value="",i.value=U}const q=y(!1);function Be(){e.filterable&&(q.value=!0)}function _e(){e.filterable&&(q.value=!1,_.value||ve())}function $e(){re.value||(_.value?e.filterable?Fe():N():ne())}function Ee(o){var t,s;!((s=(t=W.value)===null||t===void 0?void 0:t.selfRef)===null||s===void 0)&&s.contains(o.relatedTarget)||(M.value=!1,X(o),N())}function xe(o){ie(o),M.value=!0}function ye(){M.value=!0}function Ae(o){var t;!((t=T.value)===null||t===void 0)&&t.$el.contains(o.relatedTarget)||(M.value=!1,X(o),N())}function De(){var o;(o=T.value)===null||o===void 0||o.focus(),N()}function Ve(o){var t;_.value&&(!((t=T.value)===null||t===void 0)&&t.$el.contains(Qo(o))||N())}function Oe(o){if(!Array.isArray(o))return[];if(Y.value)return Array.from(o);{const{remote:t}=e,{value:s}=V;if(t){const{value:v}=K;return o.filter(h=>s.has(h)||v.has(h))}else return o.filter(v=>s.has(v))}}function ke(o){G(o.rawNode)}function G(o){if(re.value)return;const{tag:t,remote:s,clearFilterAfterSelect:v,valueField:h}=e;if(t&&!s){const{value:d}=i,f=d[0]||null;if(f){const $=C.value;$.length?$.push(f):C.value=[f],i.value=U}}if(s&&K.value.set(o[h],o),e.multiple){const d=Oe(x.value),f=d.findIndex($=>$===o[h]);if(~f){if(d.splice(f,1),t&&!s){const $=n(o[h]);~$&&(C.value.splice($,1),v&&(F.value=""))}}else d.push(o[h]),v&&(F.value="");oe(d,I(d))}else{if(t&&!s){const d=n(o[h]);~d?C.value=[C.value[d]]:C.value=U}Pe(),N(),oe(o[h],o)}}function n(o){return C.value.findIndex(s=>s[e.valueField]===o)}function r(o){_.value||ne();const{value:t}=o.target;F.value=t;const{tag:s,remote:v}=e;if(Ce(t),s&&!v){if(!t){i.value=U;return}const{onCreate:h}=e,d=h?h(t):{[e.labelField]:t,[e.valueField]:t},{valueField:f,labelField:$}=e;S.value.some(Z=>Z[f]===d[f]||Z[$]===d[$])||C.value.some(Z=>Z[f]===d[f]||Z[$]===d[$])?i.value=U:i.value=[d]}}function B(o){o.stopPropagation();const{multiple:t}=e;!t&&e.filterable&&N(),he(),t?oe([],[]):oe(null,null)}function je(o){!Ue(o,"action")&&!Ue(o,"empty")&&!Ue(o,"header")&&o.preventDefault()}function We(o){we(o)}function Se(o){var t,s,v,h,d;if(!e.keyboard){o.preventDefault();return}switch(o.key){case" ":if(e.filterable)break;o.preventDefault();case"Enter":if(!(!((t=T.value)===null||t===void 0)&&t.isComposing)){if(_.value){const f=(s=W.value)===null||s===void 0?void 0:s.getPendingTmNode();f?ke(f):e.filterable||(N(),Pe())}else if(ne(),e.tag&&q.value){const f=i.value[0];if(f){const $=f[e.valueField],{value:Z}=x;e.multiple&&Array.isArray(Z)&&Z.includes($)||G(f)}}}o.preventDefault();break;case"ArrowUp":if(o.preventDefault(),e.loading)return;_.value&&((v=W.value)===null||v===void 0||v.prev());break;case"ArrowDown":if(o.preventDefault(),e.loading)return;_.value?(h=W.value)===null||h===void 0||h.next():ne();break;case"Escape":_.value&&(Xo(o),N()),(d=T.value)===null||d===void 0||d.focus();break}}function Pe(){var o;(o=T.value)===null||o===void 0||o.focus()}function Fe(){var o;(o=T.value)===null||o===void 0||o.focusInput()}function He(){var o;_.value&&((o=L.value)===null||o===void 0||o.syncPosition())}se(),ze(ce(e,"options"),se);const Le={focus:()=>{var o;(o=T.value)===null||o===void 0||o.focus()},focusInput:()=>{var o;(o=T.value)===null||o===void 0||o.focusInput()},blur:()=>{var o;(o=T.value)===null||o===void 0||o.blur()},blurInput:()=>{var o;(o=T.value)===null||o===void 0||o.blurInput()}},Te=D(()=>{const{self:{menuBoxShadow:o}}=b.value;return{"--n-menu-box-shadow":o}}),ae=c?Xe("select",void 0,Te,e):void 0;return Object.assign(Object.assign({},Le),{mergedStatus:me,mergedClsPrefix:m,mergedBordered:u,namespace:p,treeMate:E,isMounted:Uo(),triggerRef:T,menuRef:W,pattern:F,uncontrolledShow:A,mergedShow:_,adjustedTo:qe(e),uncontrolledValue:w,mergedValue:x,followerRef:L,localizedPlaceholder:ee,selectedOption:ue,selectedOptions:de,mergedSize:pe,mergedDisabled:re,focused:M,activeWithoutMenuOpen:q,inlineThemeDisabled:c,onTriggerInputFocus:Be,onTriggerInputBlur:_e,handleTriggerOrMenuResize:He,handleMenuFocus:ye,handleMenuBlur:Ae,handleMenuTabOut:De,handleTriggerClick:$e,handleToggle:ke,handleDeleteOption:G,handlePatternInput:r,handleClear:B,handleTriggerBlur:Ee,handleTriggerFocus:xe,handleKeydown:Se,handleMenuAfterLeave:ve,handleMenuClickOutside:Ve,handleMenuScroll:We,handleMenuKeydown:Se,handleMenuMousedown:je,mergedTheme:b,cssVars:c?void 0:Te,themeClass:ae==null?void 0:ae.themeClass,onRender:ae==null?void 0:ae.onRender})},render(){return a("div",{class:`${this.mergedClsPrefix}-select`},a(cn,null,{default:()=>[a(dn,null,{default:()=>a(wn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,m;return[(m=(e=this.$slots).arrow)===null||m===void 0?void 0:m.call(e)]}})}),a(un,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===qe.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>a(Ko,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,m,u;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Yo(a(on,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(m=this.menuProps)===null||m===void 0?void 0:m.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(u=this.menuProps)===null||u===void 0?void 0:u.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var p,c;return[(c=(p=this.$slots).empty)===null||c===void 0?void 0:c.call(p)]},header:()=>{var p,c;return[(c=(p=this.$slots).header)===null||c===void 0?void 0:c.call(p)]},action:()=>{var p,c;return[(c=(p=this.$slots).action)===null||c===void 0?void 0:c.call(p)]}}),this.displayDirective==="show"?[[qo,this.mergedShow],[eo,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[eo,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{wn as N,_n as _,Ke as a};
