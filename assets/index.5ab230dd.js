import{L as m,v as O,B as l,h as E,i as T,d as v,e as P}from"./walletProvider.091697b0.js";const a=new m(O),u={},S=l.from(0),F=l.from(-1);function U(n,t,r,i){const o={fault:t,operation:r};return i!==void 0&&(o.value=i),a.throwError(n,m.errors.NUMERIC_FAULT,o)}let g="0";for(;g.length<256;)g+=g;function b(n){if(typeof n!="number")try{n=l.from(n).toNumber()}catch{}return typeof n=="number"&&n>=0&&n<=256&&!(n%1)?"1"+g.substring(0,n):a.throwArgumentError("invalid decimal size","decimals",n)}function w(n,t){t==null&&(t=0);const r=b(t);n=l.from(n);const i=n.lt(S);i&&(n=n.mul(F));let o=n.mod(r).toString();for(;o.length<r.length-1;)o="0"+o;o=o.match(/^([0-9]*[1-9]|0)(0*)/)[1];const e=n.div(r).toString();return r.length===1?n=e:n=e+"."+o,i&&(n="-"+n),n}function h(n,t){t==null&&(t=0);const r=b(t);(typeof n!="string"||!n.match(/^-?[0-9.]+$/))&&a.throwArgumentError("invalid decimal value","value",n);const i=n.substring(0,1)==="-";i&&(n=n.substring(1)),n==="."&&a.throwArgumentError("missing value","value",n);const o=n.split(".");o.length>2&&a.throwArgumentError("too many decimal points","value",n);let e=o[0],s=o[1];for(e||(e="0"),s||(s="0");s[s.length-1]==="0";)s=s.substring(0,s.length-1);for(s.length>r.length-1&&U("fractional component exceeds decimals","underflow","parseFixed"),s===""&&(s="0");s.length<r.length-1;)s+="0";const d=l.from(e),p=l.from(s);let x=d.mul(r).add(p);return i&&(x=x.mul(F)),x}class c{constructor(t,r,i,o){t!==u&&a.throwError("cannot use FixedFormat constructor; use FixedFormat.from",m.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=r,this.width=i,this.decimals=o,this.name=(r?"":"u")+"fixed"+String(i)+"x"+String(o),this._multiplier=b(o),Object.freeze(this)}static from(t){if(t instanceof c)return t;typeof t=="number"&&(t=`fixed128x${t}`);let r=!0,i=128,o=18;if(typeof t=="string"){if(t!=="fixed")if(t==="ufixed")r=!1;else{const e=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);e||a.throwArgumentError("invalid fixed format","format",t),r=e[1]!=="u",i=parseInt(e[2]),o=parseInt(e[3])}}else if(t){const e=(s,d,p)=>t[s]==null?p:(typeof t[s]!==d&&a.throwArgumentError("invalid fixed format ("+s+" not "+d+")","format."+s,t[s]),t[s]);r=e("signed","boolean",r),i=e("width","number",i),o=e("decimals","number",o)}return i%8&&a.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",i),o>80&&a.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",o),new c(u,r,i,o)}}class f{constructor(t,r,i,o){t!==u&&a.throwError("cannot use FixedNumber constructor; use FixedNumber.from",m.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=o,this._hex=r,this._value=i,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(t){this.format.name!==t.format.name&&a.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",t)}addUnsafe(t){this._checkFormat(t);const r=h(this._value,this.format.decimals),i=h(t._value,t.format.decimals);return f.fromValue(r.add(i),this.format.decimals,this.format)}subUnsafe(t){this._checkFormat(t);const r=h(this._value,this.format.decimals),i=h(t._value,t.format.decimals);return f.fromValue(r.sub(i),this.format.decimals,this.format)}mulUnsafe(t){this._checkFormat(t);const r=h(this._value,this.format.decimals),i=h(t._value,t.format.decimals);return f.fromValue(r.mul(i).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(t){this._checkFormat(t);const r=h(this._value,this.format.decimals),i=h(t._value,t.format.decimals);return f.fromValue(r.mul(this.format._multiplier).div(i),this.format.decimals,this.format)}floor(){const t=this.toString().split(".");t.length===1&&t.push("0");let r=f.from(t[0],this.format);const i=!t[1].match(/^(0*)$/);return this.isNegative()&&i&&(r=r.subUnsafe(A.toFormat(r.format))),r}ceiling(){const t=this.toString().split(".");t.length===1&&t.push("0");let r=f.from(t[0],this.format);const i=!t[1].match(/^(0*)$/);return!this.isNegative()&&i&&(r=r.addUnsafe(A.toFormat(r.format))),r}round(t){t==null&&(t=0);const r=this.toString().split(".");if(r.length===1&&r.push("0"),(t<0||t>80||t%1)&&a.throwArgumentError("invalid decimal count","decimals",t),r[1].length<=t)return this;const i=f.from("1"+g.substring(0,t),this.format),o=V.toFormat(this.format);return this.mulUnsafe(i).addUnsafe(o).floor().divUnsafe(i)}isZero(){return this._value==="0.0"||this._value==="0"}isNegative(){return this._value[0]==="-"}toString(){return this._value}toHexString(t){if(t==null)return this._hex;t%8&&a.throwArgumentError("invalid byte width","width",t);const r=l.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();return E(r,t/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return f.fromString(this._value,t)}static fromValue(t,r,i){return i==null&&r!=null&&!T(r)&&(i=r,r=null),r==null&&(r=0),i==null&&(i="fixed"),f.fromString(w(t,r),c.from(i))}static fromString(t,r){r==null&&(r="fixed");const i=c.from(r),o=h(t,i.decimals);!i.signed&&o.lt(S)&&U("unsigned value cannot be negative","overflow","value",t);let e=null;i.signed?e=o.toTwos(i.width).toHexString():(e=o.toHexString(),e=E(e,i.width/8));const s=w(o,i.decimals);return new f(u,e,s,i)}static fromBytes(t,r){r==null&&(r="fixed");const i=c.from(r);if(v(t).length>i.width/8)throw new Error("overflow");let o=l.from(t);i.signed&&(o=o.fromTwos(i.width));const e=o.toTwos((i.signed?0:1)+i.width).toHexString(),s=w(o,i.decimals);return new f(u,e,s,i)}static from(t,r){if(typeof t=="string")return f.fromString(t,r);if(P(t))return f.fromBytes(t,r);try{return f.fromValue(t,0,r)}catch(i){if(i.code!==m.errors.INVALID_ARGUMENT)throw i}return a.throwArgumentError("invalid FixedNumber value","value",t)}static isFixedNumber(t){return!!(t&&t._isFixedNumber)}}const A=f.from(1),V=f.from("0.5"),$="units/5.6.1",y=new m($),_=["wei","kwei","mwei","gwei","szabo","finney","ether"];function z(n){const t=String(n).split(".");(t.length>2||!t[0].match(/^-?[0-9]*$/)||t[1]&&!t[1].match(/^[0-9]*$/)||n==="."||n==="-.")&&y.throwArgumentError("invalid value","value",n);let r=t[0],i="";for(r.substring(0,1)==="-"&&(i="-",r=r.substring(1));r.substring(0,1)==="0";)r=r.substring(1);r===""&&(r="0");let o="";for(t.length===2&&(o="."+(t[1]||"0"));o.length>2&&o[o.length-1]==="0";)o=o.substring(0,o.length-1);const e=[];for(;r.length;)if(r.length<=3){e.unshift(r);break}else{const s=r.length-3;e.unshift(r.substring(s)),r=r.substring(0,s)}return i+e.join(",")+o}function B(n,t){if(typeof t=="string"){const r=_.indexOf(t);r!==-1&&(t=3*r)}return w(n,t!=null?t:18)}function I(n,t){if(typeof n!="string"&&y.throwArgumentError("value must be a string","value",n),typeof t=="string"){const r=_.indexOf(t);r!==-1&&(t=3*r)}return h(n,t!=null?t:18)}function H(n){return B(n,18)}function j(n){return I(n,18)}export{H as a,I as b,z as c,B as f,j as p};
