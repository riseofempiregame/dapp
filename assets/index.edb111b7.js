import{_ as b,i as k}from"./index.a79b1f65.js";/* empty css               *//* empty css              */import{d as w,e as $,r as j,o as N,b as h,aK as B,B as m,aD as d,aG as n,u as l,F as _,aH as p,aM as f,aN as g,aE as v,aX as M,aY as V,aZ as z,n as D,aR as H}from"./arco.9b030e5c.js";import{b as x,u as C}from"./walletProvider.fc3ac427.js";import"./chart.3fc0a8c8.js";import"./vue.fa72a6ed.js";const T={class:"game-box"},Z={class:"game-tools"},E=w({setup(G){const u=$(null),o=j({state:0}),y=async()=>{const a=C();if(a)try{const e=(await a.getAddress()).toLocaleLowerCase(),t=new Date().getTime(),s=await a.signMessage(`${e}_${t}`);o.state=1;const i=`https://cdn.riseofempire.io/${k.global.locale==="zh-CN"?"zh/":""}?timestamp=${t}&address=${e}&sign=${s}`;D(()=>{u.value.src=i})}catch(e){const{error:t,message:s}=e;H.warning(t?t.data.message:s)}},r=()=>{o.state=0};return N(()=>{x.on(r),C()&&r()}),h(()=>{x.off(r)}),(a,e)=>{const t=B("icon-import"),s=M,c=V,i=z;return m(),d(i,{justify:"center"},{default:n(()=>[l(o).state==1?(m(),d(c,{key:0},{default:n(()=>[_("div",T,[_("div",Z,[p(s,{status:"danger",onClick:e[0]||(e[0]=L=>l(o).state=0)},{default:n(()=>[p(t),f(" "+g(a.$t("enter.back")),1)]),_:1})]),_("iframe",{ref_key:"elifame",ref:u,class:"game-iframe"},null,512)])]),_:1})):v("",!0),l(o).state==0?(m(),d(c,{key:1,flex:"200px"},{default:n(()=>[p(s,{class:"game-enterbtn",long:"",size:"large",type:"primary",status:"success",onClick:y},{default:n(()=>[f(g(a.$t("menu.enter")),1)]),_:1})]),_:1})):v("",!0)]),_:1})}}});var U=b(E,[["__scopeId","data-v-946dd89e"]]);export{U as default};