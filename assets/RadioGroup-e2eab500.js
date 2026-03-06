import{a2 as ee,W as oe,bF as j,r as k,ah as V,a5 as T,ai as D,ak as B,ab as F,ag as m,af as C,ad as I,ae as _,d as te,aj as P,bZ as re,a0 as ne,bj as ae,j as U,al as E,am as ie,bh as de,a1 as $}from"./index-60d779da.js";import{u as A}from"./get-e9b22093.js";import{g as se}from"./Space-f6db8265.js";const ve={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},G=ee("n-radio-group");function ge(e){const o=oe(G,null),r=j(e,{mergedSize(t){const{size:a}=e;if(a!==void 0)return a;if(o){const{mergedSizeRef:{value:d}}=o;if(d!==void 0)return d}return t?t.mergedSize.value:"medium"},mergedDisabled(t){return!!(e.disabled||o!=null&&o.disabledRef.value||t!=null&&t.disabled.value)}}),{mergedSizeRef:b,mergedDisabledRef:n}=r,s=k(null),u=k(null),l=k(e.defaultChecked),f=V(e,"checked"),g=A(f,l),v=T(()=>o?o.valueRef.value===e.value:g.value),R=T(()=>{const{name:t}=e;if(t!==void 0)return t;if(o)return o.nameRef.value}),h=k(!1);function x(){if(o){const{doUpdateValue:t}=o,{value:a}=e;B(t,a)}else{const{onUpdateChecked:t,"onUpdate:checked":a}=e,{nTriggerFormInput:d,nTriggerFormChange:i}=r;t&&B(t,!0),a&&B(a,!0),d(),i(),l.value=!0}}function p(){n.value||v.value||x()}function y(){p(),s.value&&(s.value.checked=v.value)}function z(){h.value=!1}function S(){h.value=!0}return{mergedClsPrefix:o?o.mergedClsPrefixRef:D(e).mergedClsPrefixRef,inputRef:s,labelRef:u,mergedName:R,mergedDisabled:n,renderSafeChecked:v,focus:h,mergedSize:b,handleRadioInputChange:y,handleRadioInputBlur:z,handleRadioInputFocus:S}}const ue=F("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[m("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[C("checked",{backgroundColor:"var(--n-button-border-color-active)"}),C("disabled",{opacity:"var(--n-opacity-disabled)"})]),C("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[F("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),m("splitor",{height:"var(--n-height)"})]),F("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[F("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),m("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),I("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[m("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),I("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[m("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),_("disabled",`
 cursor: pointer;
 `,[I("&:hover",[m("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),_("checked",{color:"var(--n-button-text-color-hover)"})]),C("focus",[I("&:not(:active)",[m("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),C("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),C("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function le(e,o,r){var b;const n=[];let s=!1;for(let u=0;u<e.length;++u){const l=e[u],f=(b=l.type)===null||b===void 0?void 0:b.name;f==="RadioButton"&&(s=!0);const g=l.props;if(f!=="RadioButton"){n.push(l);continue}if(u===0)n.push(l);else{const v=n[n.length-1].props,R=o===v.value,h=v.disabled,x=o===g.value,p=g.disabled,y=(R?2:0)+(h?0:1),z=(x?2:0)+(p?0:1),S={[`${r}-radio-group__splitor--disabled`]:h,[`${r}-radio-group__splitor--checked`]:R},t={[`${r}-radio-group__splitor--disabled`]:p,[`${r}-radio-group__splitor--checked`]:x},a=y<z?t:S;n.push($("div",{class:[`${r}-radio-group__splitor`,a]}),l)}}return{children:n,isButtonGroup:s}}const ce=Object.assign(Object.assign({},P.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),pe=te({name:"RadioGroup",props:ce,setup(e){const o=k(null),{mergedSizeRef:r,mergedDisabledRef:b,nTriggerFormChange:n,nTriggerFormInput:s,nTriggerFormBlur:u,nTriggerFormFocus:l}=j(e),{mergedClsPrefixRef:f,inlineThemeDisabled:g,mergedRtlRef:v}=D(e),R=P("Radio","-radio-group",ue,re,e,f),h=k(e.defaultValue),x=V(e,"value"),p=A(x,h);function y(i){const{onUpdateValue:c,"onUpdate:value":w}=e;c&&B(c,i),w&&B(w,i),h.value=i,n(),s()}function z(i){const{value:c}=o;c&&(c.contains(i.relatedTarget)||l())}function S(i){const{value:c}=o;c&&(c.contains(i.relatedTarget)||u())}ne(G,{mergedClsPrefixRef:f,nameRef:V(e,"name"),valueRef:p,disabledRef:b,mergedSizeRef:r,doUpdateValue:y});const t=ae("Radio",v,f),a=U(()=>{const{value:i}=r,{common:{cubicBezierEaseInOut:c},self:{buttonBorderColor:w,buttonBorderColorActive:N,buttonBorderRadius:H,buttonBoxShadow:M,buttonBoxShadowFocus:K,buttonBoxShadowHover:O,buttonColor:L,buttonColorActive:W,buttonTextColor:Z,buttonTextColorActive:q,buttonTextColorHover:J,opacityDisabled:Q,[E("buttonHeight",i)]:X,[E("fontSize",i)]:Y}}=R.value;return{"--n-font-size":Y,"--n-bezier":c,"--n-button-border-color":w,"--n-button-border-color-active":N,"--n-button-border-radius":H,"--n-button-box-shadow":M,"--n-button-box-shadow-focus":K,"--n-button-box-shadow-hover":O,"--n-button-color":L,"--n-button-color-active":W,"--n-button-text-color":Z,"--n-button-text-color-hover":J,"--n-button-text-color-active":q,"--n-height":X,"--n-opacity-disabled":Q}}),d=g?ie("radio-group",U(()=>r.value[0]),a,e):void 0;return{selfElRef:o,rtlEnabled:t,mergedClsPrefix:f,mergedValue:p,handleFocusout:S,handleFocusin:z,cssVars:g?void 0:a,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var e;const{mergedValue:o,mergedClsPrefix:r,handleFocusin:b,handleFocusout:n}=this,{children:s,isButtonGroup:u}=le(de(se(this)),o,r);return(e=this.onRender)===null||e===void 0||e.call(this),$("div",{onFocusin:b,onFocusout:n,ref:"selfElRef",class:[`${r}-radio-group`,this.rtlEnabled&&`${r}-radio-group--rtl`,this.themeClass,u&&`${r}-radio-group--button-group`],style:this.cssVars},s)}});export{pe as N,ve as r,ge as s};
