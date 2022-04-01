// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).lucaspoly=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;var c=t,l=function(r,n,t){var c,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),v="get"in t,y="set"in t,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&o&&o.call(r,n,t.get),y&&i&&i.call(r,n,t.set),r},v=n()?c:l;var y=function(r,n,t){v(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r,n){var t,e;if((e=r.length)<2||0===n)return 0===e?0:r[0];for(t=r[e-=1]*n+r[e-1],e-=2;e>=0;)t=t*n+r[e],e-=1;return t},b=p;var s=p;y(s,"factory",(function(r){var n,t,e,u;if(r.length>500)return function(n){return b(r,n)};if(n="return function evalpoly(x){",0===(t=r.length))n+="return 0.0;";else if(1===t)n+="return "+r[0]+";";else{for(n+="if(x===0.0){return "+r[0]+";}",n+="return "+r[0],e=t-1,u=1;u<t;u++)n+="+x*",u<e&&(n+="("),n+=r[u];for(u=0;u<e-1;u++)n+=")";n+=";"}return n+="}",n+="//# sourceURL=evalpoly.factory.js",new Function(n)()}));var w=s;var d=function(r){return r!=r},A=Math.floor,_=A;var h=function(r){return _(r)===r},m=h;var U=function(r){return m(r/2)};var g=function(r){return U(r>0?r-1:r+1)},j=Number.POSITIVE_INFINITY,N=Number.NEGATIVE_INFINITY,I=j,O=N;var S=function(r){return r===I||r===O},F=Math.sqrt;var E=function(r){return Math.abs(r)};var T=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var H=function(){return T&&"symbol"==typeof Symbol.toStringTag},G=Object.prototype.toString,x=G;var P=function(r){return x.call(r)},L=Object.prototype.hasOwnProperty;var M=function(r,n){return null!=r&&L.call(r,n)},V="function"==typeof Symbol?Symbol.toStringTag:"",W=M,k=V,Y=G;var q=P,C=function(r){var n,t,e;if(null==r)return Y.call(r);t=r[k],n=W(r,k);try{r[k]=void 0}catch(n){return Y.call(r)}return e=Y.call(r),n?r[k]=t:delete r[k],e},R=H()?C:q,z=R,B="function"==typeof Uint32Array;var D="function"==typeof Uint32Array?Uint32Array:null,J=function(r){return B&&r instanceof Uint32Array||"[object Uint32Array]"===z(r)},K=D;var Q=function(){var r,n;if("function"!=typeof K)return!1;try{n=new K(n=[1,3.14,-3.14,4294967296,4294967297]),r=J(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var X="function"==typeof Uint32Array?Uint32Array:void 0,Z=function(){throw new Error("not implemented")},$=Q()?X:Z,rr=R,nr="function"==typeof Float64Array;var tr="function"==typeof Float64Array?Float64Array:null,er=function(r){return nr&&r instanceof Float64Array||"[object Float64Array]"===rr(r)},ur=tr;var or=function(){var r,n;if("function"!=typeof ur)return!1;try{n=new ur([1,3.14,-3.14,NaN]),r=er(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var ir="function"==typeof Float64Array?Float64Array:void 0,fr=function(){throw new Error("not implemented")},ar=or()?ir:fr,cr=R,lr="function"==typeof Uint8Array;var vr="function"==typeof Uint8Array?Uint8Array:null,yr=function(r){return lr&&r instanceof Uint8Array||"[object Uint8Array]"===cr(r)},pr=vr;var br=function(){var r,n;if("function"!=typeof pr)return!1;try{n=new pr(n=[1,3.14,-3.14,256,257]),r=yr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var sr="function"==typeof Uint8Array?Uint8Array:void 0,wr=function(){throw new Error("not implemented")},dr=br()?sr:wr,Ar=R,_r="function"==typeof Uint16Array;var hr="function"==typeof Uint16Array?Uint16Array:null,mr=function(r){return _r&&r instanceof Uint16Array||"[object Uint16Array]"===Ar(r)},Ur=hr;var gr=function(){var r,n;if("function"!=typeof Ur)return!1;try{n=new Ur(n=[1,3.14,-3.14,65536,65537]),r=mr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var jr,Nr="function"==typeof Uint16Array?Uint16Array:void 0,Ir=function(){throw new Error("not implemented")},Or={uint16:gr()?Nr:Ir,uint8:dr};(jr=new Or.uint16(1))[0]=4660;var Sr,Fr,Er=52===new Or.uint8(jr.buffer)[0];!0===Er?(Sr=1,Fr=0):(Sr=0,Fr=1);var Tr=$,Hr={HIGH:Sr,LOW:Fr},Gr=new ar(1),xr=new Tr(Gr.buffer),Pr=Hr.HIGH,Lr=Hr.LOW;var Mr=function(r,n){return Gr[0]=n,r[0]=xr[Pr],r[1]=xr[Lr],r};var Vr=function(r,n){return 1===arguments.length?Mr([0,0],r):Mr(r,n)},Wr=Vr,kr=$,Yr=!0===Er?0:1,qr=new ar(1),Cr=new kr(qr.buffer);var Rr=function(r,n){return qr[0]=r,Cr[Yr]=n>>>0,qr[0]},zr=Rr;var Br=function(r){return 0|r},Dr=$,Jr=!0===Er?1:0,Kr=new ar(1),Qr=new Dr(Kr.buffer);var Xr,Zr,$r=function(r){return Kr[0]=r,Qr[Jr]};!0===Er?(Xr=1,Zr=0):(Xr=0,Zr=1);var rn=$,nn={HIGH:Xr,LOW:Zr},tn=new ar(1),en=new rn(tn.buffer),un=nn.HIGH,on=nn.LOW;var fn=function(r,n){return en[un]=r,en[on]=n,tn[0]},an=fn,cn=Wr,ln=$r,vn=an,yn=[0,0];var pn=function(r,n){var t,e;return cn(yn,r),t=yn[0],t&=2147483647,e=ln(n),vn(t|=e&=2147483648,yn[1])},bn=g,sn=pn,wn=N,dn=j;var An=function(r,n){return n===wn?dn:n===dn?0:n>0?bn(n)?r:0:bn(n)?sn(dn,r):dn},_n=$r;var hn=function(r,n){return(2147483647&_n(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},mn=E,Un=j;var gn=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:mn(r)<1==(n===Un)?0:Un},jn=$,Nn=!0===Er?1:0,In=new ar(1),On=new jn(In.buffer);var Sn=function(r,n){return In[0]=r,On[Nn]=n>>>0,In[0]};var Fn=$r,En=zr,Tn=Sn,Hn=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Gn=1048576,xn=[1,1.5],Pn=[0,.5849624872207642],Ln=[0,1.350039202129749e-8];var Mn=zr,Vn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Wn=S,kn=d,Yn=E;var qn=function(r,n){return kn(n)||Wn(n)?(r[0]=n,r[1]=0,r):0!==n&&Yn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Cn=function(r,n){return 1===arguments.length?qn([0,0],r):qn(r,n)},Rn=$r;var zn=function(r){var n=Rn(r);return(n=(2146435072&n)>>>20)-1023|0},Bn=j,Dn=N,Jn=d,Kn=S,Qn=pn,Xn=Cn,Zn=zn,$n=Wr,rt=an,nt=[0,0],tt=[0,0];var et=function(r,n){var t,e;return 0===n||0===r||Jn(r)||Kn(r)?r:(Xn(nt,r),n+=nt[1],(n+=Zn(r=nt[0]))<-1074?Qn(0,r):n>1023?r<0?Dn:Bn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,$n(tt,r),t=tt[0],t&=2148532223,e*rt(t|=n+1023<<20,tt[1])))};var ut=$r,ot=Sn,it=zr,ft=Br,at=et,ct=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},lt=2147483647,vt=1048575,yt=1048576;var pt=d,bt=g,st=S,wt=h,dt=F,At=E,_t=Wr,ht=zr,mt=Br,Ut=N,gt=j,jt=An,Nt=hn,It=gn,Ot=function(r,n,t){var e,u,o,i,f,a,c,l,v,y,p,b,s,w,d,A,_,h,m,U;return h=0,t<Gn&&(h-=53,t=Fn(n*=9007199254740992)),h+=(t>>20)-1023|0,t=1072693248|(m=1048575&t|0),m<=235662?U=0:m<767610?U=1:(U=0,h+=1,t-=Gn),e=524288+(t>>1|536870912),f=(_=1/((n=Tn(n,t))+(c=xn[U])))*((A=n-c)-(i=En(u=A*_,0))*(a=Tn(0,e+=U<<18))-i*(n-(a-c))),d=(o=u*u)*o*Hn(o),a=En(a=3+(o=i*i)+(d+=f*(i+u)),0),s=(p=-7.028461650952758e-9*(v=En(v=(A=i*a)+(_=f*a+(d-(a-3-o))*u),0))+.9617966939259756*(_-(v-A))+Ln[U])-((b=En(b=(y=.9617967009544373*v)+p+(l=Pn[U])+(w=h),0))-w-l-y),r[0]=b,r[1]=s,r},St=function(r,n){var t,e,u,o,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*Vn(u)))-((e=Mn(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r},Ft=function(r,n,t){var e,u,o,i,f,a,c,l,v;return v=((l=r&lt|0)>>20)-1023|0,c=0,l>1071644672&&(u=ot(0,((c=r+(yt>>v+1)>>>0)&~(vt>>(v=((c&lt)>>20)-1023|0)))>>>0),c=(c&vt|yt)>>20-v>>>0,r<0&&(c=-c),n-=u),f=(i=.6931471805599453*(t-((u=it(u=t+n,0))-n))+-1.904654299957768e-9*u)-((a=(o=.6931471824645996*u)+i)-o),e=a-(u=a*a)*ct(u),r=ut(a=1-(a*e/(e-2)-(f+a*f)-a)),r=ft(r),a=(r+=c<<20>>>0)>>20<=0?at(a,c):ot(a,r)},Et=2147483647,Tt=1083179008,Ht=1e300,Gt=1e-300,xt=[0,0],Pt=[0,0];var Lt=function r(n,t){var e,u,o,i,f,a,c,l,v,y,p,b,s,w;if(pt(n)||pt(t))return NaN;if(_t(xt,t),f=xt[0],0===xt[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return dt(n);if(-.5===t)return 1/dt(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(st(t))return It(n,t)}if(_t(xt,n),i=xt[0],0===xt[1]){if(0===i)return jt(n,t);if(1===n)return 1;if(-1===n&&bt(t))return-1;if(st(n))return n===Ut?r(-0,-t):t<0?0:gt}if(n<0&&!1===wt(t))return(n-n)/(n-n);if(o=At(n),e=i&Et|0,u=f&Et|0,c=f>>>31|0,a=(a=i>>>31|0)&&bt(t)?-1:1,u>1105199104){if(u>1139802112)return Nt(n,t);if(e<1072693247)return 1===c?a*Ht*Ht:a*Gt*Gt;if(e>1072693248)return 0===c?a*Ht*Ht:a*Gt*Gt;p=St(Pt,o)}else p=Ot(Pt,o,e);if(y=(t-(l=ht(t,0)))*p[0]+t*p[1],v=l*p[0],_t(xt,b=y+v),s=mt(xt[0]),w=mt(xt[1]),s>=Tt){if(0!=(s-Tt|w))return a*Ht*Ht;if(y+8008566259537294e-32>b-v)return a*Ht*Ht}else if((s&Et)>=1083231232){if(0!=(s-3230714880|w))return a*Gt*Gt;if(y<=b-v)return a*Gt*Gt}return a*(b=Ft(s,v,y))},Mt=Lt,Vt=Math.round,Wt=h,kt=d,Yt=g,qt=Vt;var Ct=function r(n,t){var e,u;if(kt(n)||kt(t))return NaN;if(!Wt(n)||!Wt(t))return NaN;if(t<0)return 0;if(n<0)return e=r(-n+t-1,t),Yt(t)&&(e=-e),e;if(t>n)return 0;if(0===t||t===n)return 1;if(1===t||t===n-1)return n;for(n-t<t&&(t=n-t),e=n,u=2;u<=t;u++)e*=(n-u+1)/u;return Wt(e)?e:qt(e)},Rt=Ct,zt=Math.ceil,Bt=Rt,Dt=A,Jt=zt,Kt={};var Qt=function(r){var n,t,e,u,o,i,f,a,c;if(void 0===(n=Kt[r])){if(a=r+1,n=new Array(a),0===r)n[0]=2;else{for(c=0;c<a;c++)n[c]=0;for(e=Jt(t=r/2),u=Dt(t),c=0;c<=u;c++)o=2*c+r%2,i=2*Bt(e+c-1,u-c-1),f=Bt(e+c-1,u-c),n[o]+=i+f}Kt[r]=n}return n},Xt=w,Zt=Mt,$t=E,re=Qt;var ne=w.factory,te=Mt,ee=E,ue=Qt;var oe=function(r,n){var t,e,u;return e=$t(r),t=re(e),u=Xt(t,n),r>=0?u:Zt(-1,e)*u};return y(oe,"factory",(function(r){var n,t,e,u;return t=ee(r),n=ue(t),e=ne(n),u=te(-1,t),r>=0||1===u?e:function(r){return-1*e(r)}})),oe}));
//# sourceMappingURL=bundle.js.map
