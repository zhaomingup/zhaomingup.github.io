import{d as B,r as n,w as K,p as oe,o as se,a as le,f as T,v as j,c as A,b as v,k as N,F as ie,t as re,x as z,y as F,I as ue,z as E,m as de,l as ce,T as ve,n as q,A as pe,B as me,C as fe,D as he,E as be,j as G,G as $,_ as we,H as ye,J as O,K as ge}from"./index-60d779da.js";import{M as xe}from"./index-c039d168.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import"./Dropdown-6cb4c22d.js";import"./Popover-8d17067b.js";import"./get-e9b22093.js";import"./Follower-26782267.js";import"./next-frame-once-7035a838.js";import"./use-compitable-74353762.js";import"./happens-in-d88e25de.js";import"./create-b75cc1a9.js";import"./use-keyboard-009d9860.js";/* empty css                                                              */const _e={class:"title-text"},ke={class:"close-icon"},Me={class:"modal-body"},ze=B({__name:"index",props:{visible:{type:Boolean},title:{default:""},maskClosable:{type:Boolean,default:!0},minWidth:{default:200},minHeight:{default:150},initialWidth:{default:400},initialHeight:{default:300},initialTop:{default:200},initialLeft:{default:300},bgColor:{default:"#fff"}},emits:["update:visible"],setup(S,{emit:g}){const i=S,u=n(i.visible),d=n(i.initialWidth),p=n(i.initialHeight),a=n(i.initialTop),r=n(i.initialLeft),w=n(!1),x=n(null),V=n(0),C=n(0),m=n(0),b=n(0),f=n(0),l=n(0),y=n(!1),L=n(0),_=n(0),R=n(0),P=n(0),Q=n(null),H=(e,t,o,c)=>{const s=window.innerWidth,h=window.innerHeight;let M=Math.min(Math.max(o,i.minWidth),s),k=Math.min(Math.max(c,i.minHeight),h),ne=Math.max(0,Math.min(e,h-k)),ae=Math.max(0,Math.min(t,s-M));return{top:ne,left:ae,width:M,height:k}},D=(e,t)=>{e.stopPropagation(),e.preventDefault(),w.value=!0,x.value=t,V.value=e.clientX,C.value=e.clientY,m.value=d.value,b.value=p.value,f.value=a.value,l.value=r.value,window.addEventListener("mousemove",X),window.addEventListener("mouseup",I),document.body.style.userSelect="none"},X=e=>{if(!w.value||!x.value)return;const t=e.clientX-V.value,o=e.clientY-C.value;let c=m.value,s=b.value,h=f.value,M=l.value;switch(x.value){case"br":c=m.value+t,s=b.value+o;break;case"bl":c=m.value-t,s=b.value+o,M=l.value+(m.value-c);break;case"tr":c=m.value+t,s=b.value-o,h=f.value+(b.value-s);break;case"tl":c=m.value-t,s=b.value-o,h=f.value+(b.value-s),M=l.value+(m.value-c);break}const k=H(h,M,c,s);requestAnimationFrame(()=>{d.value=k.width,p.value=k.height,a.value=k.top,r.value=k.left})},I=()=>{w.value&&(w.value=!1,x.value=null,window.removeEventListener("mousemove",X),window.removeEventListener("mouseup",I),document.body.style.userSelect="")},Z=e=>{e.button===0&&(e.preventDefault(),e.stopPropagation(),y.value=!0,L.value=e.clientX,_.value=e.clientY,R.value=a.value,P.value=r.value,window.addEventListener("mousemove",Y),window.addEventListener("mouseup",W),document.body.style.userSelect="none")},Y=e=>{if(!y.value)return;const t=e.clientX-L.value,o=e.clientY-_.value;let c=R.value+o,s=P.value+t;const h=H(c,s,d.value,p.value);requestAnimationFrame(()=>{a.value=h.top,r.value=h.left,d.value=h.width,p.value=h.height})},W=()=>{y.value&&(y.value=!1,window.removeEventListener("mousemove",Y),window.removeEventListener("mouseup",W),document.body.style.userSelect="")},U=()=>{const e=window.innerWidth,t=window.innerHeight;let o=(e-d.value)/2,c=(t-p.value)/2;const s=H(c,o,d.value,p.value);a.value=s.top,r.value=s.left,d.value=s.width,p.value=s.height},ee=()=>{u.value=!1,g("update:visible",!1)},te=e=>{i.maskClosable&&(e.target,e.currentTarget)};return K(()=>i.visible,e=>{u.value=e,e&&oe(()=>{U()})}),se(()=>{u.value&&U()}),le(()=>{I(),W()}),K(u,e=>{g("update:visible",e)}),(e,t)=>(T(),j(ve,{to:"body"},[u.value?(T(),A("div",{key:0,class:"modal-mask",onMousedown:te},[v("div",{ref_key:"modalContentRef",ref:Q,class:"resizable-modal",style:de({width:d.value+"px",height:p.value+"px",top:a.value+"px",left:r.value+"px",backgroundColor:e.bgColor}),onMousedown:t[4]||(t[4]=E(()=>{},["stop"]))},[v("div",{class:"modal-header",onMousedown:Z},[e.$slots.header?N(e.$slots,"header",{key:0},void 0,!0):(T(),A(ie,{key:1},[v("span",_e,re(e.title),1),v("button",{onClick:ee},[v("span",ke,[z(F(ue),{icon:"heroicons:x-mark-16-solid",style:{"font-size":"22px",cursor:"pointer"}})])])],64))],32),v("div",Me,[N(e.$slots,"default",{},void 0,!0)]),v("div",{class:"resize-handle resize-handle-tl",onMousedown:t[0]||(t[0]=E(o=>D(o,"tl"),["stop"]))},null,32),v("div",{class:"resize-handle resize-handle-tr",onMousedown:t[1]||(t[1]=E(o=>D(o,"tr"),["stop"]))},null,32),v("div",{class:"resize-handle resize-handle-bl",onMousedown:t[2]||(t[2]=E(o=>D(o,"bl"),["stop"]))},null,32),v("div",{class:"resize-handle resize-handle-br",onMousedown:t[3]||(t[3]=E(o=>D(o,"br"),["stop"]))},null,32)],36)],32)):ce("",!0)]))}});const Ee=J(ze,[["__scopeId","data-v-4c8901d9"]]),Te=["value","placeholder","disabled","readonly","rows"],Se=B({__name:"index",props:{modelValue:{},placeholder:{default:"请输入内容，Shift+Enter换行"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rows:{default:3}},emits:["update:modelValue","submit"],setup(S,{emit:g}){const i=S,u=n(!1),d=a=>{const r=a.target;g("update:modelValue",r.value)},p=a=>{a.key==="Enter"&&(a.shiftKey||(a.preventDefault(),g("submit",i.modelValue)))};return(a,r)=>(T(),A("div",{class:q(["textarea-wrapper",{"is-focused":F(u),"is-disabled":a.disabled}])},[v("textarea",{value:a.modelValue,onInput:d,onKeydown:p,onFocus:r[0]||(r[0]=w=>u.value=!0),onBlur:r[1]||(r[1]=w=>u.value=!1),placeholder:a.placeholder,disabled:a.disabled,readonly:a.readonly,rows:a.rows,class:q(["textarea-container",{"is-disabled":a.disabled}])},null,42,Te)],2))}});const Ve=J(Se,[["__scopeId","data-v-e364adb2"]]),Ce=`<template>
  <div
		class="textarea-wrapper"
		:class="{
			'is-focused': isFocused,
			'is-disabled': disabled
		}"
	>
    <textarea
      :value="modelValue"
      @input="handleInput"
      @keydown="handleKeydown"
      @focus="isFocused = true"
      @blur="isFocused = false"
      :placeholder="placeholder"
      :disabled="disabled"
			:readonly="readonly"
      :rows="rows"
      class="textarea-container"
			:class="{
				'is-disabled': disabled
			}"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  placeholder?: string
  disabled?: boolean
	readonly?: boolean
  rows?: number
}

interface Emits {
  (e: 'update:modelValue', value: string): void
  (e: 'submit', value: string): void
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '请输入内容，Shift+Enter换行',
  disabled: false,
	readonly: false,
  rows: 3,
})

const emit = defineEmits<Emits>()
const isFocused = ref(false)
const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key !== 'Enter') return
  if (!event.shiftKey) {
    // 单独按 Enter：触发提交，阻止换行
    event.preventDefault()
    emit('submit', props.modelValue)
  }
}
<\/script>

<style scoped>
.textarea-wrapper {
  padding: 6px 6px 0;
  border: 1px solid #dcdfe6;
  border-radius: 8px;
  background-color: #fff;
  transition: border-color 0.2s ease, box-shadow 0.3s ease-out;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 0 0 0 rgba(64, 158, 255, 0.2);
}

.textarea-wrapper.is-focused {
  border-color: #409eff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 0 8px 4px rgba(64, 158, 255, 0.2);
}
.textarea-wrapper.is-focused {
  cursor: not-allowed;
}

.textarea-container {
  width: 100%;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.5;
  resize: none;
  outline: none;
  padding: 0;
}
.is-disabled {
	cursor: not-allowed;
	background-color: #eee;
}
</style>
`,Le={style:{height:"300px"}},De={class:"copy-code"},Ne=B({__name:"index",setup(S){const g=[{label:"主页",key:"dashboard",icon:"menu-home",iconActive:"menu-home-active"},{label:"数据分析",key:"settings",icon:"menu-analysis",iconActive:"menu-analysis-active",children:[{label:"舆情监测",key:"analysis",icon:""}]},{label:"系统管理",key:"user",icon:"menu-system",iconActive:"menu-system-active",children:[{label:"用户管理",key:"user-list",icon:""},{label:"预警管理",key:"previse-list",icon:""},{label:"监测管理",key:"permission",icon:"",children:[{label:"方案组管理",key:"role-list",icon:""},{label:"方案管理",key:"permission-assign",icon:""}]}]},{label:"数据采集",key:"menu-data",icon:"menu-data",iconActive:"menu-data-active",children:[{label:"cookies管理",key:"data",icon:""}]}],i=n(""),u=pe();me(),fe();const d=he(),{routerPush:p}=be(),a=()=>{i.value=""},r=async f=>{var l;await navigator.clipboard.writeText(f),(l=window.$message)==null||l.success("复制成功")},w=G(()=>(console.log("routeStore.menus as GlobalMenuOption[]",d.menus),d.menus)),x=G(()=>{var f;return(f=u.meta)!=null&&f.activeMenu?u.meta.activeMenu:u.name}),V=n([]);function C(f,l){p(l.routePath)}const m=n(!1),b=()=>{m.value=!0};return K(()=>u.name,()=>{V.value=ye(x.value,w.value)},{immediate:!0}),(f,l)=>{const y=ge,L=we;return T(),j(L,{size:"small",bordered:!1,class:"wh-full shadow-sm rounded-16px"},{default:$(()=>[z(y,{onClick:b},{default:$(()=>[O("打开弹框")]),_:1}),z(Ee,{visible:m.value,"onUpdate:visible":l[0]||(l[0]=_=>m.value=_),title:"标题区域"},null,8,["visible"]),v("div",Le,[z(xe,{value:x.value,options:g,"onUpdate:value":C},null,8,["value"])]),v("div",De,[z(y,{onClick:l[1]||(l[1]=_=>r(F(Ce)))},{default:$(()=>[O("复制代码")]),_:1})]),z(Ve,{modelValue:i.value,"onUpdate:modelValue":l[2]||(l[2]=_=>i.value=_),rows:3,onSubmit:a},null,8,["modelValue"])]),_:1})}}});export{Ne as default};
