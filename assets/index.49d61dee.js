import{_ as Ce}from"./index.f71c2c63.js";import{b as q,i as H,a as A,n as J,j as $,d as y,k as je,p as Ie}from"./walletProvider.20621f46.js";/* empty css              *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{d as Se,r as V,c as Ne,o as Te,b as Ue,aK as j,B as p,C as I,aH as a,aG as t,E as K,u as s,F as k,aD as h,aE as S,bf as W,aM as b,aN as f,aJ as F,aI as X,bg as Ee,bh as Be,bi as Ve,bj as Fe,bc as Me,bb as ze,be as Ae,bk as De,bl as Ge,b4 as Le,bm as Re,bn as Oe,b2 as Pe,bo as qe,bp as He,aX as Je,b6 as Ke,bq as We,br as Xe,bs as Ye,bt as Qe,b9 as Ze,ba as et,bu as tt,aY as at,b3 as nt,aR as D}from"./arco.8464fde2.js";import{i as Y}from"./index.4bd3be9d.js";import"./chart.fc3d73b6.js";import"./vue.012b1438.js";const Q=[{amount:1e4,nft:0},{amount:2e4,nft:0},{amount:3e4,nft:0},{amount:4e4,nft:0},{amount:5e4,nft:1},{amount:7e4,nft:2},{amount:1e5,nft:4}];const G=N=>(Ee("data-v-35cea4ca"),N=N(),Be(),N),ot={style:{padding:"0.5rem"}},st={class:"nft-footer"},it=G(()=>k("br",null,null,-1)),rt=G(()=>k("div",{style:{width:"100%",height:"20vh"}},null,-1)),lt={class:"nft-footer"},dt=G(()=>k("br",null,null,-1)),ct={class:"nft-footer"},mt=b(" +1 "),ft=Se({setup(N){const Z=e=>Q[e].amount,M=e=>Q[e].nft,w=V({item:{},visible:!1,loading:!1,address:""}),c=V({item:{grade:0},nfts:[],approve:!1,visible:!1,loading:!1,balance:0}),u=V({item:{},loading:void 0}),_=V({loading:!1,total:0,items:[]}),ee=Ne(()=>_.items.filter(e=>e.grade===0)),T=async(e,o)=>{const i=await fetch(o).then(l=>l.json()),n={token:e,name:`${i.name}`,image:`${i.image}`};if(i.attributes){const l=i.attributes.find(g=>g.trait_type==="Score");l&&(n.score=Number(l.value));const m=i.attributes.find(g=>g.trait_type==="Grade");m&&(n.grade=Number(m.value))}return n},te=async()=>{const e=y();if(e){_.loading=!0;const o=$(),i=await e.getAddress();let n=[],l=0,m=0;const g=10;do{const{rows:d}=await o.tokenOfOwnerList(i,m,g),v=await o.tokenURIList(d);n=[...n,...v.map((U,x)=>({token:d[x].toNumber(),loading:!0,uri:U}))],l=d.length,m+=g}while(l>0);_.total=n.length,_.items=n,_.loading=!1,_.items.forEach(d=>{d.loading=!0,T(d.token,d.uri).then(v=>{d.name=v.name,d.grade=v.grade,d.image=v.image,d.score=v.score}).catch(()=>{d.name="..",d.grade=0,d.image="",d.score=0}).finally(()=>{d.loading=!1})})}},ae=async e=>{if(y()){const i=$();let n="",l=0;do{if(n=await i.tokenURI(e.token),n.endsWith("goldbox.json"))await new Promise(m=>{setTimeout(()=>{m()},3e3)});else{const m=await T(e.token,n);e.image=m.image,e.name=m.name,e.score=m.score}l+=1}while(n.includes("goldbox")&&l<10)}},ne=async e=>{if(y()){e.loading=!0;try{await(await $().openGoldBox(e.token)).wait(),await ae(e)}catch(i){const{error:n,message:l}=i;D.warning(n?n.data.message:l)}e.loading=!1}},oe=async e=>{if(y()){u.loading=!0;const i=$();try{const n=await i.ownerOf(e),l=await i.tokenURI(e),m={token:Number(e),uri:l,loading:!1,owner:`${n.substring(0,6)}....${n.substring(38)}`};T(m.token,m.uri).then(g=>{u.item.name=g.name,u.item.grade=g.grade,u.item.image=g.image,u.item.score=g.score,u.loading=!1}),u.item=m}catch{D.warning("NFT \u4E0D\u5B58\u5728"),u.loading=void 0}}},se=async e=>{if(y())try{const o=A(),i=await o.signer.getAddress();o.balanceOf(i).then(n=>{c.balance=Number(je(n))})}catch(o){console.log(o)}c.nfts=[],c.item=e,c.visible=!0},ie=async()=>{if(y())try{await(await A().approve(J,Ie("10000000000"))).wait()}catch(e){console.log(e)}},re=async e=>{if(y())try{const i=await $().tokenURI(e.token);e.uri=i,await T(e.token,i).then(n=>{e.name=n.name,e.grade=n.grade,e.image=n.image,e.score=n.score})}catch(o){console.error(o)}},le=async e=>{const{item:o}=c;if(y())try{await(await $().upgradeGold(o.token,c.nfts.map(l=>l.token))).wait(),await re(o),e(!0),c.nfts.forEach(l=>{_.items.splice(_.items.findIndex(m=>m.token===l.token),1)})}catch(i){const{error:n,message:l}=i;D.warning(n?n.data.message:l),e(!1)}},de=async e=>{const{item:o}=w;if(y())try{const i=$(),n=await i.signer.getAddress();await(await i.transferFrom(n,w.address,o.token)).wait(),e(!0)}catch(i){console.error(i),e(!1)}},z=async()=>{const e=A(),o=e.signer.getAddress();e.allowance(o,J).then(i=>{c.approve=!i.eq("0")}),te()},L=()=>{_.items=[],_.total=0};return Te(()=>{q.on(z),H.on(L),y()&&z()}),Ue(()=>{q.off(z),H.off(L)}),(e,o)=>{const i=Ve,n=Fe,l=Me,m=ze,g=j("icon-more"),d=Ae,v=De,U=Ge,x=Le,ce=Re,me=Oe,E=Pe,fe=qe,ue=He,pe=j("icon-thunderbolt"),B=Je,_e=j("icon-bar-chart"),ge=j("icon-share-internal"),R=Ke,be=We,he=Xe,C=Ye,ye=j("icon-arrow-rise"),ke=Qe,ve=Ze,we=et,$e=tt,O=at,xe=nt;return p(),I("div",ot,[a(R,{gutter:[10,10]},{default:t(()=>[a(E,{style:K({flex:s(Y)?"0 0 270px":""})},{default:t(()=>[a(me,{"default-active-key":["1"]},{default:t(()=>[a(ce,{key:"1",header:e.$t("nft.validata"),class:"query-nft"},{default:t(()=>[a(x,{direction:"vertical",fill:""},{default:t(()=>[a(i,{placeholder:"tokenId",loading:s(u).loading,"search-button":"",onSearch:oe},null,8,["loading"]),k("div",null,[s(u).loading===!0?(p(),h(d,{key:0,style:{"border-radius":"0.5rem"},"body-style":{padding:0},hoverable:""},{cover:t(()=>[a(l,{animation:""},{default:t(()=>[a(n,{class:"skeleton-image"})]),_:1})]),default:t(()=>[a(l,{style:{width:"80%",padding:"0.5rem"},animation:""},{default:t(()=>[a(m,{rows:2,"line-height":18})]),_:1}),k("div",st,[a(g,{style:{width:"20px",height:"20px",margin:"1px"}})])]),_:1})):S("",!0),s(u).loading===!1?(p(),h(d,{key:1,style:{"border-radius":"0.5rem"},"body-style":{padding:0},hoverable:""},{cover:t(()=>[k("div",null,[a(v,{src:s(u).item.image,width:"100%",height:"100%",class:"nft-image"},null,8,["src"])])]),default:t(()=>[a(U,{title:`${s(u).item.name}  #${s(u).item.token}`,style:{padding:"0.5rem",height:"85px"}},W({_:2},[s(u).item.score?{name:"description",fn:t(()=>[b(f(e.$t("nft.grade"))+" : "+f(s(u).item.grade)+" ",1),it,b(" "+f(e.$t("nft.score"))+" : "+f(s(u).item.score),1)])}:void 0]),1032,["title"])]),_:1})):S("",!0)])]),_:1})]),_:1},8,["header"])]),_:1})]),_:1},8,["style"]),a(E,{style:K({flex:s(Y)?"1":""})},{default:t(()=>[a(he,null,{default:t(()=>[a(be,{key:"1",title:e.$t("nft.mynft")},{default:t(()=>[a(R,{gutter:[5,10]},{default:t(()=>[s(_).loading?(p(),h(E,{key:0,style:{"text-align":"center"}},{default:t(()=>[a(fe,{loading:s(_).loading,dot:"",tip:"loading...."},{default:t(()=>[rt]),_:1},8,["loading"])]),_:1})):(p(),I(F,{key:1},[s(_).items.length==0?(p(),h(ue,{key:0})):(p(!0),I(F,{key:1},X(s(_).items,r=>(p(),h(E,{key:r.token,xs:12,lg:6,xl:4},{default:t(()=>[r.loading?(p(),h(d,{key:0,style:{"border-radius":"0.5rem"},"body-style":{padding:0},hoverable:""},{cover:t(()=>[a(l,{animation:""},{default:t(()=>[a(n,{class:"skeleton-image"})]),_:1})]),default:t(()=>[a(l,{style:{width:"80%",padding:"0.5rem"},animation:""},{default:t(()=>[a(m,{rows:2,"line-height":18})]),_:1}),k("div",lt,[a(g,{style:{width:"20px",height:"20px",margin:"1px"}})])]),_:1})):(p(),h(d,{key:1,style:{"border-radius":"0.5rem"},"body-style":{padding:0},hoverable:""},{cover:t(()=>[k("div",null,[a(v,{src:r.image,width:"100%",height:"100%",class:"nft-image"},null,8,["src"])])]),default:t(()=>[a(U,{title:`${r.name}  #${r.token}`,style:{padding:"0.5rem",height:"65px"}},W({_:2},[r.score?{name:"description",fn:t(()=>[b(f(e.$t("nft.grade"))+" : "+f(r.grade)+" ",1),dt,b(" "+f(e.$t("nft.score"))+" : "+f(r.score),1)])}:void 0]),1032,["title"]),k("div",ct,[a(x,{size:"small"},{default:t(()=>[r.name==="Gold Box"?(p(),h(B,{key:0,type:"primary",size:"mini",status:"success",loading:r.loading,onClick:P=>ne(r)},{icon:t(()=>[a(pe)]),default:t(()=>[b(" "+f(e.$t("nft.open")),1)]),_:2},1032,["loading","onClick"])):(p(),I(F,{key:1},[r.grade!==7?(p(),h(B,{key:0,size:"mini",onClick:P=>se(r)},{icon:t(()=>[a(_e)]),default:t(()=>[b(" "+f(e.$t("nft.upgrade")),1)]),_:2},1032,["onClick"])):S("",!0),a(B,{size:"mini",onClick:P=>{s(w).item=r,s(w).visible=!0}},{icon:t(()=>[a(ge)]),default:t(()=>[b(" "+f(e.$t("nft.transfer")),1)]),_:2},1032,["onClick"])],64))]),_:2},1024)])]),_:2},1024))]),_:2},1024))),128))],64))]),_:1})]),_:1},8,["title"])]),_:1})]),_:1},8,["style"])]),_:1}),a(O,{visible:s(c).visible,"onUpdate:visible":o[1]||(o[1]=r=>s(c).visible=r),"mask-closable":!1,title:e.$t("nft.upgrade"),width:"370px","modal-class":"upgrade-modal","on-before-ok":le},{default:t(()=>[a($e,{title:e.$t("nft.consume"),column:1},{default:t(()=>[a(C,{label:e.$t("recharge.balance")},{default:t(()=>[b(f(s(c).balance),1)]),_:1},8,["label"]),a(C,{label:"ID"},{default:t(()=>[b(" # "+f(s(c).item.token),1)]),_:1}),a(C,{label:e.$t("nft.grade")},{default:t(()=>[b(f(s(c).item.grade)+" ",1),a(ke,{color:"green"},{icon:t(()=>[a(ye)]),default:t(()=>[mt]),_:1})]),_:1},8,["label"]),a(C,{label:e.$t("nft.roemp")},{default:t(()=>[a(x,null,{default:t(()=>[b(f(Z(s(c).item.grade))+" ",1),s(c).approve?S("",!0):(p(),h(B,{key:0,type:"primary",size:"small",onClick:ie},{default:t(()=>[b(f(e.$t("recharge.approve")),1)]),_:1}))]),_:1})]),_:1},8,["label"]),M(s(c).item.grade)>0?(p(),h(C,{key:0,label:e.$t("nft.NFT")},{default:t(()=>[a(x,null,{default:t(()=>[a(we,{modelValue:s(c).nfts,"onUpdate:modelValue":o[0]||(o[0]=r=>s(c).nfts=r),placeholder:`select ${M(s(c).item.grade)} nfs`,style:{width:"270px"},"value-key":"token",limit:M(s(c).item.grade),multiple:""},{label:t(({data:{value:r}})=>[k("span",null,f(r.name)+" #"+f(r.token),1)]),default:t(()=>[(p(!0),I(F,null,X(s(ee),r=>(p(),h(ve,{key:r.token,value:r},{default:t(()=>[b(f(r.name)+" #"+f(r.token),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","placeholder","limit"])]),_:1})]),_:1},8,["label"])):S("",!0)]),_:1},8,["title"])]),_:1},8,["visible","title","on-before-ok"]),a(O,{visible:s(w).visible,"onUpdate:visible":o[3]||(o[3]=r=>s(w).visible=r),"align-center":!1,width:360,top:100,title:e.$t("nft.transfer"),"on-before-ok":de},{default:t(()=>[a(xe,{modelValue:s(w).address,"onUpdate:modelValue":o[2]||(o[2]=r=>s(w).address=r)},null,8,["modelValue"])]),_:1},8,["visible","title","on-before-ok"])])}}});var It=Ce(ft,[["__scopeId","data-v-35cea4ca"]]);export{It as default};
