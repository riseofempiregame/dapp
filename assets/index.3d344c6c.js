import{_ as y,i as k}from"./index.8f16f800.js";/* empty css               *//* empty css              */import{d as w,e as $,r as j,o as N,b as h,aK as B,B as m,aD as d,aG as n,u as l,F as _,aH as p,aM as f,aN as g,aE as v,aX as M,aY as V,aZ as z,n as D,aR as H}from"./arco.a48bb61d.js";import{b as x,u as b}from"./walletProvider.4ff47679.js";import"./chart.ce373ccb.js";import"./vue.382aebc7.js";const T={class:"game-box"},Z={class:"game-tools"},E=w({setup(G){const u=$(null),o=j({state:0}),C=async()=>{const s=b();if(s)try{const e=(await s.getAddress()).toLocaleLowerCase(),t=new Date().getTime(),a=await s.signMessage(`${e}_${t}`);o.state=1;const i=`https://cdn.riseofempire.io/${k.global.locale==="zh-CN"?"zh/":""}?timestamp=${t}&address=${e}&sign=${a}`;D(()=>{u.value.src=i})}catch(e){const{error:t,message:a}=e;H.warning(t?t.data.message:a)}},r=()=>{o.state=0};return N(()=>{x.on(r),b()&&r()}),h(()=>{x.off(r)}),(s,e)=>{const t=B("icon-import"),a=M,c=V,i=z;return m(),d(i,{justify:"center"},{default:n(()=>[l(o).state==1?(m(),d(c,{key:0},{default:n(()=>[_("div",T,[_("div",Z,[p(a,{status:"danger",onClick:e[0]||(e[0]=L=>l(o).state=0)},{default:n(()=>[p(t),f(" "+g(s.$t("enter.back")),1)]),_:1})]),_("iframe",{ref_key:"elifame",ref:u,class:"game-iframe"},null,512)])]),_:1})):v("",!0),l(o).state==0?(m(),d(c,{key:1,flex:"200px"},{default:n(()=>[p(a,{class:"game-enterbtn",long:"",size:"large",type:"primary",status:"success",onClick:C},{default:n(()=>[f(g(s.$t("menu.enter")),1)]),_:1})]),_:1})):v("",!0)]),_:1})}}});var U=y(E,[["__scopeId","data-v-946dd89e"]]);export{U as default};
