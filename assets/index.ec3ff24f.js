import{_ as I,i as M}from"./index.19de93d7.js";/* empty css               *//* empty css              */import{b,u as x}from"./walletProvider.81b87b9e.js";/* empty css              */import{d as N,e as C,r as V,o as E,b as F,aK as p,aY as z,B as n,aD as r,aG as s,u as _,F as y,aH as c,aZ as T,C as A,D as H,aE as k,aM as L,aN as Z,a_ as G,a$ as R,b0 as U,b1 as K,b2 as P,aX as S,b3 as X,n as Y,aR as q}from"./arco.1070c694.js";/* empty css               */import{f as J}from"./vue.cb3a4e20.js";import"./chart.ba7f08d0.js";const O={class:"game-box"},Q=N({setup(W){const d=C(null),a=V({state:0}),l=C(!1);J("message",({data:{action:t,status:e}})=>{if(t){switch(t){case"game_status":a.state=0,G.warning({content:"\u60A8\u7684\u6E38\u620F\u5DF2\u6389\u7EBF,\u8BF7\u91CD\u65B0\u8FDB\u5165!",title:"\u63D0\u793A"});break}console.log(t,e)}});const w=async()=>{const t=x();if(t)try{const e=(await t.getAddress()).toLocaleLowerCase(),o=new Date().getTime(),i=await t.signMessage(`${e}_${o}`);a.state=1;const m=`https://cdn.riseofempire.io/${M.global.locale==="zh-CN"?"zh/":""}?timestamp=${o}&address=${e}&sign=${i}`;Y(()=>{d.value.src=m})}catch(e){const{error:o,message:i}=e;q.warning(o?o.data.message:i)}},u=()=>{a.state=0};return E(()=>{b.on(u),x()&&u()}),F(()=>{b.off(u)}),(t,e)=>{const o=p("IconClose"),i=p("icon-home"),g=p("IconImport"),m=R,B=U,h=K,f=P,j=S,D=X,$=z("drag");return n(),r(D,{justify:"center"},{default:s(()=>[_(a).state==1?(n(),r(f,{key:0},{default:s(()=>[y("div",O,[y("iframe",{ref_key:"elifame",ref:d,class:"game-iframe"},null,512)]),c(h,{popupVisible:l.value,"onUpdate:popupVisible":e[1]||(e[1]=v=>l.value=v),style:{"z-index":"99999999"},trigger:["click","hover"],"click-to-close":"",position:"top"},{content:s(()=>[c(B,{style:{marginBottom:"-4px"},mode:"popButton","tooltip-props":{position:"left"},"show-collapse-button":"",onMenuItemClick:e[0]||(e[0]=v=>_(a).state=0)},{default:s(()=>[c(m,{key:"1"},{icon:s(()=>[c(g)]),_:1})]),_:1})]),default:s(()=>[T((n(),A("div",{class:H(`button-trigger ${l.value?"button-trigger-active":""}`)},[l.value?(n(),r(o,{key:0})):(n(),r(i,{key:1}))],2)),[[$]])]),_:1},8,["popupVisible"])]),_:1})):k("",!0),_(a).state==0?(n(),r(f,{key:1,flex:"200px"},{default:s(()=>[c(j,{class:"game-enterbtn",long:"",size:"large",type:"primary",status:"success",onClick:w},{default:s(()=>[L(Z(t.$t("menu.enter")),1)]),_:1})]),_:1})):k("",!0)]),_:1})}}});var le=I(Q,[["__scopeId","data-v-76a933e7"]]);export{le as default};
