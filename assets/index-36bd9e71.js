import"./index-4c875a95.js";import{d as D,r as E,w,o as R,Q as W,c as M,m as O,S as F,p as P,f as H}from"./index-60d779da.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const j=D({__name:"index",props:{width:{default:"100%"},height:{default:"92%"},title:{default:"饼图"},data:{default:()=>[]},type:{default:"pie"},radius:{default:"50%"},center:{default:()=>["50%","50%"]},colorList:{default:()=>["#5123fc","#ee6666","#fed130","#27e9cb","#fe9601","#1d570f","#7693fc","#3ba272","#fc8452","#9a60b4","#11f4fc","#60acfc","#ff0898"]},useCustomColors:{type:Boolean,default:!1},showLabel:{type:Boolean,default:!0},labelPosition:{default:"outside"},labelFormatter:{type:[String,Function],default:"{b}: {c} ({d}%)"},showLegend:{type:Boolean,default:!0},legendPosition:{default:"bottom"},showTooltip:{type:Boolean,default:!0},tooltipFormatter:{},centerTooltip:{type:Boolean,default:!0},showSeriesName:{type:Boolean,default:!0},roseType:{default:"radius"},donutWidth:{default:30},nestedSeries:{default:()=>[]},nestedRadius:{default:()=>[["40%","70%"],["15%","30%"]]},animation:{type:Boolean,default:!0},animationDuration:{default:1e3},animationEasing:{default:"cubicInOut"},selectedMode:{default:"single"},selectedOffset:{default:10},showLabelLine:{type:Boolean,default:!0},theme:{default:""},sort:{default:"descending"},autoTooltip:{type:Boolean,default:!0},tooltipInterval:{default:5e3},highlightAnimation:{type:Boolean,default:!0},highlightAnimationDuration:{default:500}},setup(B,{expose:C}){const e=B,x=E();let o=null,h=null,l=0,r=!1,d=null;const T=i=>e.sort==="none"?i:[...i].sort((t,n)=>e.sort==="descending"?n.value-t.value:t.value-n.value),L=()=>e.type==="donut"?[`${50-e.donutWidth/2}%`,"50%"]:e.type==="nested"?e.nestedRadius:(typeof e.radius=="string",e.radius),z=()=>{const i=T(e.data),t={type:"pie",name:e.title,data:i,color:e.colorList,radius:L(),center:e.center,avoidLabelOverlap:!0,label:{show:!1,color:"#fff"},emphasis:{scale:!0,scaleSize:14,itemStyle:{shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}},labelLine:{lineStyle:{color:"rgba(255, 255, 255, 0.3)"},smooth:.2,length:2,length2:4},animation:e.animation,animationDuration:e.animationDuration,animationEasing:e.animationEasing,selectedMode:e.selectedMode,selectedOffset:e.selectedOffset,itemStyle:{borderColor:"transparent",borderWidth:0}};if(e.type==="rose"&&(t.roseType=e.roseType,t.radius=["0","70%"]),e.type==="donut"&&(t.labelLine={show:!0,length:20,length2:15,smooth:.2}),e.type==="nested"&&e.nestedSeries.length>0){const n=[],s={...t,data:i,radius:e.nestedRadius[0],itemStyle:{borderWidth:1,borderColor:"#fff"},emphasis:{...t.emphasis,label:{show:!0,fontSize:14,fontWeight:"bold"}}},a={...t,data:e.nestedSeries[0]||[],radius:e.nestedRadius[1],label:{show:!1},emphasis:{...t.emphasis,scale:!1}};return n.push(s,a),n}return[t]},A=()=>{x.value&&(o&&(o.dispose(),u()),o=F(x.value,e.theme),v(),e.autoTooltip&&setTimeout(()=>{p()},1e3))},$=i=>{if(!i||Array.isArray(i)&&i.length===0)return"";const t=Array.isArray(i)?i[0]:i,{name:n,value:s,percent:a,color:c}=t,f=e.data.reduce((g,y)=>g+y.value,0),b=a||(s/f*100).toFixed(1);return`
    <div class="center-tooltip">
      <div class="tooltip-header">
        <span class="color-dot" style="background-color: ${c}"></span>
        <span class="item-name">${n} </span>
				<span class="value" style="color: ${c}">${b}%</span>
				<span class="value">(${s.toLocaleString()}条)</span>
      </div>
    </div>
  `},v=()=>{if(!o||!e.data.length)return;const i={color:e.colorList,tooltip:{trigger:"item",backgroundColor:"transparent",borderColor:"transparent",borderWidth:0,padding:0,extraCssText:"z-index: 9999;",position:e.centerTooltip?"inside":void 0,formatter:e.centerTooltip?$:t=>{var n,s;if(Array.isArray(t))return t.map(a=>{var g,y;const c=a.name||((g=a.data)==null?void 0:g.name)||"",f=a.value||((y=a.data)==null?void 0:y.value)||0,b=a.percent||"";return`${c}: ${f} (${b}%)`}).join("<br/>");{const a=t.name||((n=t.data)==null?void 0:n.name)||"",c=t.value||((s=t.data)==null?void 0:s.value)||0,f=t.percent||"";return`${a}: ${c} (${f}%)`}}},legend:{show:e.showLegend,type:"scroll",orient:"vertical",textStyle:{fontSize:12,color:"#ffffff"},top:0,right:6,height:"150px",itemWidth:14,itemHeight:14,itemStyle:{borderWidth:0},pageTextStyle:{color:"#ffffff",fontSize:12}},series:z(),grid:{left:"6px",right:"80px",bottom:"6px"}};o.setOption(i),e.centerTooltip&&k()},k=()=>{const i="pie-chart-center-tooltip-styles",t=document.getElementById(i);t&&t.remove();const n=document.createElement("style");n.id=i,n.textContent=`
    .center-tooltip {
      position: fixed !important;
      top: -60px !important;
      left: -120px !important;
      // transform: translate(-50%, -50%) !important;
      background: rgba(255, 255, 255, 0.95) !important;
      border: 1px solid #e5e6eb !important;
      border-radius: 4px !important;
      padding: 6px !important;
      // width: 140px !important;
      max-width: 220px !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
      z-index: 9999 !important;
      pointer-events: none !important;
      backdrop-filter: blur(4px) !important;
    }

    .tooltip-header {
      display: flex;
      align-items: center;
    }

    .color-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-right: 6px;
      flex-shrink: 0;
    }

    .item-name {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .tooltip-content {
      font-size: 13px;
    }

		.value {
			margin-left: 2px;
		}
  `,document.head.appendChild(n)},p=()=>{!o||!e.autoTooltip||r||(u(),l=0,d=null,h=window.setInterval(()=>{if(!o||!e.data.length)return;l>=e.data.length&&(l=0);const t=T(e.data)[l];t&&(m(),setTimeout(()=>{o&&(o.dispatchAction({type:"highlight",seriesIndex:0,name:t.name}),o.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:l,position:e.centerTooltip?"inside":void 0}),d=t.name,l++)},e.highlightAnimation?100:0))},e.tooltipInterval))},m=()=>{o&&(d&&o.dispatchAction({type:"downplay",seriesIndex:0,name:d}),d=null)},u=()=>{h&&(clearInterval(h),h=null),m(),o&&o.dispatchAction({type:"hideTip"})},S=()=>{r=!0,u()},_=()=>{r=!1,setTimeout(()=>{r||p()},300)},I=()=>{o==null||o.resize()};return w(()=>[e.data,e.type,e.showLabel,e.showLegend,e.centerTooltip],()=>{v(),e.autoTooltip&&!r&&P(()=>{setTimeout(()=>{p()},1e3)})},{deep:!0}),w(()=>e.autoTooltip,i=>{i&&!r?p():u()}),w(()=>e.tooltipInterval,()=>{e.autoTooltip&&!r&&p()}),R(()=>{A(),window.addEventListener("resize",I)}),W(()=>{u();const i="pie-chart-center-tooltip-styles",t=document.getElementById(i);t&&t.remove(),o&&(o.dispose(),o=null),window.removeEventListener("resize",I)}),C({getInstance:()=>o,resize:()=>o==null?void 0:o.resize(),refresh:()=>v(),highlight:i=>{o&&(m(),setTimeout(()=>{o&&(o.dispatchAction({type:"highlight",seriesIndex:0,name:i}),d=i)},100))},showDataView:()=>{o&&o.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:0})},startTooltip:p,stopTooltip:u,pauseTooltip:S,resumeTooltip:_,clearHighlight:m}),(i,t)=>(H(),M("div",{ref_key:"chartRef",ref:x,style:O({width:i.width,height:i.height}),onMouseenter:S,onMouseleave:_},null,36))}});const q=N(j,[["__scopeId","data-v-1144994e"]]);export{q as default};
