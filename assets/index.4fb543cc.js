var f=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var i=(t,s)=>{var e={};for(var a in t)h.call(t,a)&&s.indexOf(a)<0&&(e[a]=t[a]);if(t!=null&&f)for(var a of f(t))s.indexOf(a)<0&&m.call(t,a)&&(e[a]=t[a]);return e};import{i as $,j as D}from"./vue.cb3a4e20.js";const w=$(D),b=(t,s)=>{const o=s||{},{target:e="_blank"}=o,a=i(o,["target"]);window.open(t,e,Object.entries(a).reduce((r,n)=>{const[d,c]=n;return[...r,`${d}=${c}`]},[]).join(","))},k=new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),M=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,z=(t,s)=>{let e;typeof t=="number"?e=`${t}`.length===10?new Date(t*1e3):new Date(t):typeof t=="string"?e=new Date(t):e=t;const a=e.getFullYear(),o=e.getMonth(),r=e.getDate(),n=e.getHours(),d=e.getMinutes(),c=e.getSeconds(),S=e.getMilliseconds(),g=e.getDay(),l={YY:String(a).slice(-2),YYYY:a,M:o+1,MM:`${o+1}`.padStart(2,"0"),D:String(r),DD:`${r}`.padStart(2,"0"),H:String(n),HH:`${n}`.padStart(2,"0"),h:`${n%12||12}`.padStart(1,"0"),hh:`${n%12||12}`.padStart(2,"0"),m:String(d),mm:`${d}`.padStart(2,"0"),s:String(c),ss:`${c}`.padStart(2,"0"),SSS:`${S}`.padStart(3,"0"),d:g};return s.replace(M,(p,u)=>u||l[p])},H=w.lg;export{z as f,H as i,b as o,k as r};
