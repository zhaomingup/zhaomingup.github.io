import{ap as ne,aq as re,ar as ze,as as ve,at as Ne,au as he,av as ge,aw as Y,ax as pe,ay as we,az as j,aA as He,aB as me,aC as We,aD as Te,aE as Ue,aF as Ge,aG as Ke,aH as Xe,aI as Ye,aJ as Ee,aK as ke,ad as D,ab as M,ae as te,ag as ae,af as Z,aL as Je,d as Re,ai as je,aj as ue,r as F,W as qe,aM as Pe,j as X,Y as Qe,aN as oe,am as Ze,Q as Ve,w as en,ah as q,a0 as Q,a4 as nn,a9 as rn,a8 as tn,a1 as S,Z as an,aO as on,aP as ye,aQ as be,aR as Se,aS as sn,a6 as ln,X as xe,aT as ie,F as dn,aa as un,aU as fn,a5 as Ae,aV as cn,aW as vn,aX as hn,aY as gn,an as pn,ak as k}from"./index-60d779da.js";import{c as wn,t as fe,i as Be,g as mn,b as yn,u as bn}from"./get-e9b22093.js";import{u as V,b as Sn,a as An,V as _n}from"./Follower-26782267.js";import{u as $n}from"./use-compitable-74353762.js";const H="@@mmoContext",Cn={mounted(e,{value:n}){e[H]={handler:void 0},typeof n=="function"&&(e[H].handler=n,ne("mousemoveoutside",e,n))},updated(e,{value:n}){const r=e[H];typeof n=="function"?r.handler?r.handler!==n&&(re("mousemoveoutside",e,r.handler),r.handler=n,ne("mousemoveoutside",e,n)):(e[H].handler=n,ne("mousemoveoutside",e,n)):r.handler&&(re("mousemoveoutside",e,r.handler),r.handler=void 0)},unmounted(e){const{handler:n}=e[H];n&&re("mousemoveoutside",e,n),e[H].handler=void 0}},On=Cn;let se;function Tn(){return se===void 0&&(se=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),se}var En="__lodash_hash_undefined__";function Rn(e){return this.__data__.set(e,En),this}function Pn(e){return this.__data__.has(e)}function ee(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new ze;++n<r;)this.add(e[n])}ee.prototype.add=ee.prototype.push=Rn;ee.prototype.has=Pn;function xn(e,n){for(var r=-1,t=e==null?0:e.length;++r<t;)if(n(e[r],r,e))return!0;return!1}function Bn(e,n){return e.has(n)}var Mn=1,In=2;function Me(e,n,r,t,o,a){var s=r&Mn,i=e.length,l=n.length;if(i!=l&&!(s&&l>i))return!1;var u=a.get(e),c=a.get(n);if(u&&c)return u==n&&c==e;var p=-1,v=!0,m=r&In?new ee:void 0;for(a.set(e,n),a.set(n,e);++p<i;){var y=e[p],f=n[p];if(t)var T=s?t(f,y,p,n,e,a):t(y,f,p,e,n,a);if(T!==void 0){if(T)continue;v=!1;break}if(m){if(!xn(n,function(_,$){if(!Bn(m,$)&&(y===_||o(y,_,r,t,a)))return m.push($)})){v=!1;break}}else if(!(y===f||o(y,f,r,t,a))){v=!1;break}}return a.delete(e),a.delete(n),v}function Dn(e){var n=-1,r=Array(e.size);return e.forEach(function(t,o){r[++n]=[o,t]}),r}function Fn(e){var n=-1,r=Array(e.size);return e.forEach(function(t){r[++n]=t}),r}var Ln=1,zn=2,Nn="[object Boolean]",Hn="[object Date]",Wn="[object Error]",Un="[object Map]",Gn="[object Number]",Kn="[object RegExp]",Xn="[object Set]",Yn="[object String]",kn="[object Symbol]",Jn="[object ArrayBuffer]",jn="[object DataView]",_e=ve?ve.prototype:void 0,le=_e?_e.valueOf:void 0;function qn(e,n,r,t,o,a,s){switch(r){case jn:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case Jn:return!(e.byteLength!=n.byteLength||!a(new he(e),new he(n)));case Nn:case Hn:case Gn:return Ne(+e,+n);case Wn:return e.name==n.name&&e.message==n.message;case Kn:case Yn:return e==n+"";case Un:var i=Dn;case Xn:var l=t&Ln;if(i||(i=Fn),e.size!=n.size&&!l)return!1;var u=s.get(e);if(u)return u==n;t|=zn,s.set(e,n);var c=Me(i(e),i(n),t,o,a,s);return s.delete(e),c;case kn:if(le)return le.call(e)==le.call(n)}return!1}var Qn=1,Zn=Object.prototype,Vn=Zn.hasOwnProperty;function er(e,n,r,t,o,a){var s=r&Qn,i=ge(e),l=i.length,u=ge(n),c=u.length;if(l!=c&&!s)return!1;for(var p=l;p--;){var v=i[p];if(!(s?v in n:Vn.call(n,v)))return!1}var m=a.get(e),y=a.get(n);if(m&&y)return m==n&&y==e;var f=!0;a.set(e,n),a.set(n,e);for(var T=s;++p<l;){v=i[p];var _=e[v],$=n[v];if(t)var L=s?t($,_,v,n,e,a):t(_,$,v,e,n,a);if(!(L===void 0?_===$||o(_,$,r,t,a):L)){f=!1;break}T||(T=v=="constructor")}if(f&&!T){var P=e.constructor,R=n.constructor;P!=R&&"constructor"in e&&"constructor"in n&&!(typeof P=="function"&&P instanceof P&&typeof R=="function"&&R instanceof R)&&(f=!1)}return a.delete(e),a.delete(n),f}var nr=1,$e="[object Arguments]",Ce="[object Array]",J="[object Object]",rr=Object.prototype,Oe=rr.hasOwnProperty;function tr(e,n,r,t,o,a){var s=Y(e),i=Y(n),l=s?Ce:pe(e),u=i?Ce:pe(n);l=l==$e?J:l,u=u==$e?J:u;var c=l==J,p=u==J,v=l==u;if(v&&we(e)){if(!we(n))return!1;s=!0,c=!1}if(v&&!c)return a||(a=new j),s||He(e)?Me(e,n,r,t,o,a):qn(e,n,l,r,t,o,a);if(!(r&nr)){var m=c&&Oe.call(e,"__wrapped__"),y=p&&Oe.call(n,"__wrapped__");if(m||y){var f=m?e.value():e,T=y?n.value():n;return a||(a=new j),o(f,T,r,t,a)}}return v?(a||(a=new j),er(e,n,r,t,o,a)):!1}function ce(e,n,r,t,o){return e===n?!0:e==null||n==null||!me(e)&&!me(n)?e!==e&&n!==n:tr(e,n,r,t,ce,o)}var ar=1,or=2;function ir(e,n,r,t){var o=r.length,a=o,s=!t;if(e==null)return!a;for(e=Object(e);o--;){var i=r[o];if(s&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++o<a;){i=r[o];var l=i[0],u=e[l],c=i[1];if(s&&i[2]){if(u===void 0&&!(l in e))return!1}else{var p=new j;if(t)var v=t(u,c,l,e,n,p);if(!(v===void 0?ce(c,u,ar|or,t,p):v))return!1}}return!0}function Ie(e){return e===e&&!We(e)}function sr(e){for(var n=Te(e),r=n.length;r--;){var t=n[r],o=e[t];n[r]=[t,o,Ie(o)]}return n}function De(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==void 0||e in Object(r))}}function lr(e){var n=sr(e);return n.length==1&&n[0][2]?De(n[0][0],n[0][1]):function(r){return r===e||ir(r,e,n)}}function dr(e,n){return e!=null&&n in Object(e)}function ur(e,n,r){n=wn(n,e);for(var t=-1,o=n.length,a=!1;++t<o;){var s=fe(n[t]);if(!(a=e!=null&&r(e,s)))break;e=e[s]}return a||++t!=o?a:(o=e==null?0:e.length,!!o&&Ue(o)&&Ge(s,o)&&(Y(e)||Ke(e)))}function fr(e,n){return e!=null&&ur(e,n,dr)}var cr=1,vr=2;function hr(e,n){return Be(e)&&Ie(n)?De(fe(e),n):function(r){var t=mn(r,e);return t===void 0&&t===n?fr(r,e):ce(n,t,cr|vr)}}function gr(e){return function(n){return n==null?void 0:n[e]}}function pr(e){return function(n){return yn(n,e)}}function wr(e){return Be(e)?gr(fe(e)):pr(e)}function mr(e){return typeof e=="function"?e:e==null?Xe:typeof e=="object"?Y(e)?hr(e[0],e[1]):lr(e):wr(e)}function yr(e,n){return e&&Ye(e,n,Te)}function br(e,n){return function(r,t){if(r==null)return r;if(!Ee(r))return e(r,t);for(var o=r.length,a=n?o:-1,s=Object(r);(n?a--:++a<o)&&t(s[a],a,s)!==!1;);return r}}var Sr=br(yr);const Ar=Sr;function _r(e,n){var r=-1,t=Ee(e)?Array(e.length):[];return Ar(e,function(o,a,s){t[++r]=n(o,a,s)}),t}function $r(e,n){var r=Y(e)?ke:_r;return r(e,mr(n))}const de={top:"bottom",bottom:"top",left:"right",right:"left"},w="var(--n-arrow-height) * 1.414",Cr=D([M("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[D(">",[M("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),te("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[te("scrollable",[te("show-header-or-footer","padding: var(--n-padding);")])]),ae("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),ae("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),Z("scrollable, show-header-or-footer",[ae("content",`
 padding: var(--n-padding);
 `)])]),M("popover-shared",`
 transform-origin: inherit;
 `,[M("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[M("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${w});
 height: calc(${w});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),D("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),D("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),D("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),D("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),E("top-start",`
 top: calc(${w} / -2);
 left: calc(${B("top-start")} - var(--v-offset-left));
 `),E("top",`
 top: calc(${w} / -2);
 transform: translateX(calc(${w} / -2)) rotate(45deg);
 left: 50%;
 `),E("top-end",`
 top: calc(${w} / -2);
 right: calc(${B("top-end")} + var(--v-offset-left));
 `),E("bottom-start",`
 bottom: calc(${w} / -2);
 left: calc(${B("bottom-start")} - var(--v-offset-left));
 `),E("bottom",`
 bottom: calc(${w} / -2);
 transform: translateX(calc(${w} / -2)) rotate(45deg);
 left: 50%;
 `),E("bottom-end",`
 bottom: calc(${w} / -2);
 right: calc(${B("bottom-end")} + var(--v-offset-left));
 `),E("left-start",`
 left: calc(${w} / -2);
 top: calc(${B("left-start")} - var(--v-offset-top));
 `),E("left",`
 left: calc(${w} / -2);
 transform: translateY(calc(${w} / -2)) rotate(45deg);
 top: 50%;
 `),E("left-end",`
 left: calc(${w} / -2);
 bottom: calc(${B("left-end")} + var(--v-offset-top));
 `),E("right-start",`
 right: calc(${w} / -2);
 top: calc(${B("right-start")} - var(--v-offset-top));
 `),E("right",`
 right: calc(${w} / -2);
 transform: translateY(calc(${w} / -2)) rotate(45deg);
 top: 50%;
 `),E("right-end",`
 right: calc(${w} / -2);
 bottom: calc(${B("right-end")} + var(--v-offset-top));
 `),...$r({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,n)=>{const r=["right","left"].includes(n),t=r?"width":"height";return e.map(o=>{const a=o.split("-")[1]==="end",i=`calc((${`var(--v-target-${t}, 0px)`} - ${w}) / 2)`,l=B(o);return D(`[v-placement="${o}"] >`,[M("popover-shared",[Z("center-arrow",[M("popover-arrow",`${n}: calc(max(${i}, ${l}) ${a?"+":"-"} var(--v-offset-${r?"left":"top"}));`)])])])})})]);function B(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function E(e,n){const r=e.split("-")[0],t=["top","bottom"].includes(r)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return D(`[v-placement="${e}"] >`,[M("popover-shared",`
 margin-${de[r]}: var(--n-space);
 `,[Z("show-arrow",`
 margin-${de[r]}: var(--n-space-arrow);
 `),Z("overlap",`
 margin: 0;
 `),Je("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${r}: 100%;
 ${de[r]}: auto;
 ${t}
 `,[M("popover-arrow",n)])])])}const Fe=Object.assign(Object.assign({},ue.props),{to:V.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number});function Or({arrowClass:e,arrowStyle:n,arrowWrapperClass:r,arrowWrapperStyle:t,clsPrefix:o}){return S("div",{key:"__popover-arrow__",style:t,class:[`${o}-popover-arrow-wrapper`,r]},S("div",{class:[`${o}-popover-arrow`,e],style:n}))}const Tr=Re({name:"PopoverBody",inheritAttrs:!1,props:Fe,setup(e,{slots:n,attrs:r}){const{namespaceRef:t,mergedClsPrefixRef:o,inlineThemeDisabled:a}=je(e),s=ue("Popover","-popover",Cr,on,e,o),i=F(null),l=qe("NPopover"),u=F(null),c=F(e.show),p=F(!1);Pe(()=>{const{show:h}=e;h&&!Tn()&&!e.internalDeactivateImmediately&&(p.value=!0)});const v=X(()=>{const{trigger:h,onClickoutside:A}=e,C=[],{positionManuallyRef:{value:g}}=l;return g||(h==="click"&&!A&&C.push([ye,P,void 0,{capture:!0}]),h==="hover"&&C.push([On,L])),A&&C.push([ye,P,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&p.value)&&C.push([Qe,e.show]),C}),m=X(()=>{const{common:{cubicBezierEaseInOut:h,cubicBezierEaseIn:A,cubicBezierEaseOut:C},self:{space:g,spaceArrow:U,padding:G,fontSize:I,textColor:K,dividerColor:d,color:b,boxShadow:O,borderRadius:z,arrowHeight:N,arrowOffset:x,arrowOffsetVertical:Le}}=s.value;return{"--n-box-shadow":O,"--n-bezier":h,"--n-bezier-ease-in":A,"--n-bezier-ease-out":C,"--n-font-size":I,"--n-text-color":K,"--n-color":b,"--n-divider-color":d,"--n-border-radius":z,"--n-arrow-height":N,"--n-arrow-offset":x,"--n-arrow-offset-vertical":Le,"--n-padding":G,"--n-space":g,"--n-space-arrow":U}}),y=X(()=>{const h=e.width==="trigger"?void 0:oe(e.width),A=[];h&&A.push({width:h});const{maxWidth:C,minWidth:g}=e;return C&&A.push({maxWidth:oe(C)}),g&&A.push({maxWidth:oe(g)}),a||A.push(m.value),A}),f=a?Ze("popover",void 0,m,e):void 0;l.setBodyInstance({syncPosition:T}),Ve(()=>{l.setBodyInstance(null)}),en(q(e,"show"),h=>{e.animated||(h?c.value=!0:c.value=!1)});function T(){var h;(h=i.value)===null||h===void 0||h.syncPosition()}function _(h){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&l.handleMouseEnter(h)}function $(h){e.trigger==="hover"&&e.keepAliveOnHover&&l.handleMouseLeave(h)}function L(h){e.trigger==="hover"&&!R().contains(be(h))&&l.handleMouseMoveOutside(h)}function P(h){(e.trigger==="click"&&!R().contains(be(h))||e.onClickoutside)&&l.handleClickOutside(h)}function R(){return l.getTriggerElement()}Q(nn,u),Q(rn,null),Q(tn,null);function W(){if(f==null||f.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&p.value))return null;let A;const C=l.internalRenderBodyRef.value,{value:g}=o;if(C)A=C([`${g}-popover-shared`,f==null?void 0:f.themeClass.value,e.overlap&&`${g}-popover-shared--overlap`,e.showArrow&&`${g}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${g}-popover-shared--center-arrow`],u,y.value,_,$);else{const{value:U}=l.extraClassRef,{internalTrapFocus:G}=e,I=!Se(n.header)||!Se(n.footer),K=()=>{var d,b;const O=I?S(dn,null,ie(n.header,x=>x?S("div",{class:[`${g}-popover__header`,e.headerClass],style:e.headerStyle},x):null),ie(n.default,x=>x?S("div",{class:[`${g}-popover__content`,e.contentClass],style:e.contentStyle},n):null),ie(n.footer,x=>x?S("div",{class:[`${g}-popover__footer`,e.footerClass],style:e.footerStyle},x):null)):e.scrollable?(d=n.default)===null||d===void 0?void 0:d.call(n):S("div",{class:[`${g}-popover__content`,e.contentClass],style:e.contentStyle},n),z=e.scrollable?S(un,{contentClass:I?void 0:`${g}-popover__content ${(b=e.contentClass)!==null&&b!==void 0?b:""}`,contentStyle:I?void 0:e.contentStyle},{default:()=>O}):O,N=e.showArrow?Or({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:g}):null;return[z,N]};A=S("div",ln({class:[`${g}-popover`,`${g}-popover-shared`,f==null?void 0:f.themeClass.value,U.map(d=>`${g}-${d}`),{[`${g}-popover--scrollable`]:e.scrollable,[`${g}-popover--show-header-or-footer`]:I,[`${g}-popover--raw`]:e.raw,[`${g}-popover-shared--overlap`]:e.overlap,[`${g}-popover-shared--show-arrow`]:e.showArrow,[`${g}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:u,style:y.value,onKeydown:l.handleKeydown,onMouseenter:_,onMouseleave:$},r),G?S(sn,{active:e.show,autoFocus:!0},{default:K}):K())}return xe(A,v.value)}return{displayed:p,namespace:t,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:i,adjustedTo:V(e),followerEnabled:c,renderContentNode:W}},render(){return S(Sn,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===V.tdkey},{default:()=>this.animated?S(an,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),Er=Object.keys(Fe),Rr={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function Pr(e,n,r){Rr[n].forEach(t=>{e.props?e.props=Object.assign({},e.props):e.props={};const o=e.props[t],a=r[t];o?e.props[t]=(...s)=>{o(...s),a(...s)}:e.props[t]=a})}const xr={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:V.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Br=Object.assign(Object.assign(Object.assign({},ue.props),xr),{internalOnAfterLeave:Function,internalRenderBody:Function}),Lr=Re({name:"Popover",inheritAttrs:!1,props:Br,slots:Object,__popover__:!0,setup(e){const n=fn(),r=F(null),t=X(()=>e.show),o=F(e.defaultShow),a=bn(t,o),s=Ae(()=>e.disabled?!1:a.value),i=()=>{if(e.disabled)return!0;const{getDisabled:d}=e;return!!(d!=null&&d())},l=()=>i()?!1:a.value,u=$n(e,["arrow","showArrow"]),c=X(()=>e.overlap?!1:u.value);let p=null;const v=F(null),m=F(null),y=Ae(()=>e.x!==void 0&&e.y!==void 0);function f(d){const{"onUpdate:show":b,onUpdateShow:O,onShow:z,onHide:N}=e;o.value=d,b&&k(b,d),O&&k(O,d),d&&z&&k(z,!0),d&&N&&k(N,!1)}function T(){p&&p.syncPosition()}function _(){const{value:d}=v;d&&(window.clearTimeout(d),v.value=null)}function $(){const{value:d}=m;d&&(window.clearTimeout(d),m.value=null)}function L(){const d=i();if(e.trigger==="focus"&&!d){if(l())return;f(!0)}}function P(){const d=i();if(e.trigger==="focus"&&!d){if(!l())return;f(!1)}}function R(){const d=i();if(e.trigger==="hover"&&!d){if($(),v.value!==null||l())return;const b=()=>{f(!0),v.value=null},{delay:O}=e;O===0?b():v.value=window.setTimeout(b,O)}}function W(){const d=i();if(e.trigger==="hover"&&!d){if(_(),m.value!==null||!l())return;const b=()=>{f(!1),m.value=null},{duration:O}=e;O===0?b():m.value=window.setTimeout(b,O)}}function h(){W()}function A(d){var b;l()&&(e.trigger==="click"&&(_(),$(),f(!1)),(b=e.onClickoutside)===null||b===void 0||b.call(e,d))}function C(){if(e.trigger==="click"&&!i()){_(),$();const d=!l();f(d)}}function g(d){e.internalTrapFocus&&d.key==="Escape"&&(_(),$(),f(!1))}function U(d){o.value=d}function G(){var d;return(d=r.value)===null||d===void 0?void 0:d.targetRef}function I(d){p=d}return Q("NPopover",{getTriggerElement:G,handleKeydown:g,handleMouseEnter:R,handleMouseLeave:W,handleClickOutside:A,handleMouseMoveOutside:h,setBodyInstance:I,positionManuallyRef:y,isMountedRef:n,zIndexRef:q(e,"zIndex"),extraClassRef:q(e,"internalExtraClass"),internalRenderBodyRef:q(e,"internalRenderBody")}),Pe(()=>{a.value&&i()&&f(!1)}),{binderInstRef:r,positionManually:y,mergedShowConsideringDisabledProp:s,uncontrolledShow:o,mergedShowArrow:c,getMergedShow:l,setShow:U,handleClick:C,handleMouseEnter:R,handleMouseLeave:W,handleFocus:L,handleBlur:P,syncPosition:T}},render(){var e;const{positionManually:n,$slots:r}=this;let t,o=!1;if(!n&&(t=cn(r,"trigger"),t)){t=vn(t),t=t.type===hn?S("span",[t]):t;const a={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=t.type)===null||e===void 0)&&e.__popover__)o=!0,t.props||(t.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),t.props.internalSyncTargetWithParent=!0,t.props.internalInheritedEventHandlers?t.props.internalInheritedEventHandlers=[a,...t.props.internalInheritedEventHandlers]:t.props.internalInheritedEventHandlers=[a];else{const{internalInheritedEventHandlers:s}=this,i=[a,...s],l={onBlur:u=>{i.forEach(c=>{c.onBlur(u)})},onFocus:u=>{i.forEach(c=>{c.onFocus(u)})},onClick:u=>{i.forEach(c=>{c.onClick(u)})},onMouseenter:u=>{i.forEach(c=>{c.onMouseenter(u)})},onMouseleave:u=>{i.forEach(c=>{c.onMouseleave(u)})}};Pr(t,s?"nested":n?"manual":this.trigger,l)}}return S(_n,{ref:"binderInstRef",syncTarget:!o,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const a=this.getMergedShow();return[this.internalTrapFocus&&a?xe(S("div",{style:{position:"fixed",top:0,right:0,bottom:0,left:0}}),[[gn,{enabled:a,zIndex:this.zIndex}]]):null,n?null:S(An,null,{default:()=>t}),S(Tr,pn(this.$props,Er,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:a})),{default:()=>{var s,i;return(i=(s=this.$slots).default)===null||i===void 0?void 0:i.call(s)},header:()=>{var s,i;return(i=(s=this.$slots).header)===null||i===void 0?void 0:i.call(s)},footer:()=>{var s,i;return(i=(s=this.$slots).footer)===null||i===void 0?void 0:i.call(s)}})]}})}});export{Lr as N,ce as b,xr as p,Or as r};
