// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,c=e.__lookupSetter__,a=t,l=function(r,n,t){var a,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||c.call(r,n)?(a=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=a):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),p&&i&&i.call(r,n,t.set),r},y=n()?a:l,p=function(r,n,t){y(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})},b=function(r,n){var t,e;if((e=r.length)<2||0===n)return 0===e?0:r[0];for(t=r[e-=1]*n+r[e-1],e-=2;e>=0;)t=t*n+r[e],e-=1;return t},v=b,s=b;p(s,"factory",(function(r){var n,t,e,o;if(r.length>500)return function(n){return v(r,n)};if(n="return function evalpoly(x){",0===(t=r.length))n+="return 0.0;";else if(1===t)n+="return "+r[0]+";";else{for(n+="if(x===0.0){return "+r[0]+";}",n+="return "+r[0],e=t-1,o=1;o<t;o++)n+="+x*",o<e&&(n+="("),n+=r[o];for(o=0;o<e-1;o++)n+=")";n+=";"}return n+="}",n+="//# sourceURL=evalpoly.factory.js",new Function(n)()}));var w,d=s,A=function(r){return r!=r},_=Math.floor,h=_,m=function(r){return h(r)===r},U=m,g=function(r){return U(r/2)},j=function(r){return g(r>0?r-1:r+1)},N=Number.POSITIVE_INFINITY,I=Number.NEGATIVE_INFINITY,O=N,S=I,F=function(r){return r===O||r===S},E=Math.sqrt,T=function(r){return Math.abs(r)},H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),G=Object.prototype.toString,x=G,P=function(r){return x.call(r)},L=Object.prototype.hasOwnProperty,M=function(r,n){return null!=r&&L.call(r,n)},V="function"==typeof Symbol?Symbol.toStringTag:"",W=M,k=V,Y=G,q=P,C=function(r){var n,t,e;if(null==r)return Y.call(r);t=r[k],n=W(r,k);try{r[k]=void 0}catch(n){return Y.call(r)}return e=Y.call(r),n?r[k]=t:delete r[k],e},R=H&&"symbol"==typeof Symbol.toStringTag?C:q,z=R,B="function"==typeof Uint32Array,D="function"==typeof Uint32Array?Uint32Array:null,J=function(r){return B&&r instanceof Uint32Array||"[object Uint32Array]"===z(r)},K=D,Q=function(){var r,n;if("function"!=typeof K)return!1;try{n=new K(n=[1,3.14,-3.14,4294967296,4294967297]),r=J(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},X="function"==typeof Uint32Array?Uint32Array:void 0,Z=function(){throw new Error("not implemented")},$=Q()?X:Z,rr=R,nr="function"==typeof Float64Array,tr="function"==typeof Float64Array?Float64Array:null,er=function(r){return nr&&r instanceof Float64Array||"[object Float64Array]"===rr(r)},or=tr,ur=function(){var r,n;if("function"!=typeof or)return!1;try{n=new or([1,3.14,-3.14,NaN]),r=er(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r},ir="function"==typeof Float64Array?Float64Array:void 0,fr=function(){throw new Error("not implemented")},cr=ur()?ir:fr,ar=R,lr="function"==typeof Uint8Array,yr="function"==typeof Uint8Array?Uint8Array:null,pr=function(r){return lr&&r instanceof Uint8Array||"[object Uint8Array]"===ar(r)},br=yr,vr=function(){var r,n;if("function"!=typeof br)return!1;try{n=new br(n=[1,3.14,-3.14,256,257]),r=pr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},sr="function"==typeof Uint8Array?Uint8Array:void 0,wr=function(){throw new Error("not implemented")},dr=vr()?sr:wr,Ar=R,_r="function"==typeof Uint16Array,hr="function"==typeof Uint16Array?Uint16Array:null,mr=function(r){return _r&&r instanceof Uint16Array||"[object Uint16Array]"===Ar(r)},Ur=hr,gr=function(){var r,n;if("function"!=typeof Ur)return!1;try{n=new Ur(n=[1,3.14,-3.14,65536,65537]),r=mr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},jr="function"==typeof Uint16Array?Uint16Array:void 0,Nr=function(){throw new Error("not implemented")},Ir={uint16:gr()?jr:Nr,uint8:dr};(w=new Ir.uint16(1))[0]=4660;var Or,Sr,Fr=52===new Ir.uint8(w.buffer)[0];!0===Fr?(Or=1,Sr=0):(Or=0,Sr=1);var Er,Tr,Hr=$,Gr={HIGH:Or,LOW:Sr},xr=new cr(1),Pr=new Hr(xr.buffer),Lr=Gr.HIGH,Mr=Gr.LOW,Vr=function(r,n){return xr[0]=n,r[0]=Pr[Lr],r[1]=Pr[Mr],r},Wr=function(r,n){return 1===arguments.length?Vr([0,0],r):Vr(r,n)},kr=Wr,Yr=$,qr=!0===Fr?0:1,Cr=new cr(1),Rr=new Yr(Cr.buffer),zr=function(r,n){return Cr[0]=r,Rr[qr]=n>>>0,Cr[0]},Br=zr,Dr=function(r){return 0|r},Jr=$,Kr=!0===Fr?1:0,Qr=new cr(1),Xr=new Jr(Qr.buffer),Zr=function(r){return Qr[0]=r,Xr[Kr]};!0===Fr?(Er=1,Tr=0):(Er=0,Tr=1);var $r=$,rn={HIGH:Er,LOW:Tr},nn=new cr(1),tn=new $r(nn.buffer),en=rn.HIGH,on=rn.LOW,un=function(r,n){return tn[en]=r,tn[on]=n,nn[0]},fn=un,cn=kr,an=Zr,ln=fn,yn=[0,0],pn=function(r,n){var t,e;return cn(yn,r),t=yn[0],t&=2147483647,e=an(n),ln(t|=e&=2147483648,yn[1])},bn=j,vn=pn,sn=I,wn=N,dn=function(r,n){return n===sn?wn:n===wn?0:n>0?bn(n)?r:0:bn(n)?vn(wn,r):wn},An=Zr,_n=function(r,n){return(2147483647&An(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},hn=T,mn=N,Un=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:hn(r)<1==(n===mn)?0:mn},gn=$,jn=!0===Fr?1:0,Nn=new cr(1),In=new gn(Nn.buffer),On=function(r,n){return Nn[0]=r,In[jn]=n>>>0,Nn[0]},Sn=Zr,Fn=Br,En=On,Tn=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Hn=1048576,Gn=[1,1.5],xn=[0,.5849624872207642],Pn=[0,1.350039202129749e-8],Ln=Br,Mn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)},Vn=F,Wn=A,kn=T,Yn=function(r,n){return Wn(n)||Vn(n)?(r[0]=n,r[1]=0,r):0!==n&&kn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)},qn=function(r,n){return 1===arguments.length?Yn([0,0],r):Yn(r,n)},Cn=Zr,Rn=function(r){var n=Cn(r);return(n=(2146435072&n)>>>20)-1023|0},zn=N,Bn=I,Dn=A,Jn=F,Kn=pn,Qn=qn,Xn=Rn,Zn=kr,$n=fn,rt=[0,0],nt=[0,0],tt=function(r,n){var t,e;return 0===n||0===r||Dn(r)||Jn(r)?r:(Qn(rt,r),n+=rt[1],(n+=Xn(r=rt[0]))<-1074?Kn(0,r):n>1023?r<0?Bn:zn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Zn(nt,r),t=nt[0],t&=2148532223,e*$n(t|=n+1023<<20,nt[1])))},et=Zr,ot=On,ut=Br,it=Dr,ft=tt,ct=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},at=2147483647,lt=1048575,yt=1048576,pt=A,bt=j,vt=F,st=m,wt=E,dt=T,At=kr,_t=Br,ht=Dr,mt=I,Ut=N,gt=dn,jt=_n,Nt=Un,It=function(r,n,t){var e,o,u,i,f,c,a,l,y,p,b,v,s,w,d,A,_,h,m,U;return h=0,t<Hn&&(h-=53,t=Sn(n*=9007199254740992)),h+=(t>>20)-1023|0,t=1072693248|(m=1048575&t|0),m<=235662?U=0:m<767610?U=1:(U=0,h+=1,t-=Hn),e=524288+(t>>1|536870912),f=(_=1/((n=En(n,t))+(a=Gn[U])))*((A=n-a)-(i=Fn(o=A*_,0))*(c=En(0,e+=U<<18))-i*(n-(c-a))),d=(u=o*o)*u*Tn(u),c=Fn(c=3+(u=i*i)+(d+=f*(i+o)),0),s=(b=-7.028461650952758e-9*(y=Fn(y=(A=i*c)+(_=f*c+(d-(c-3-u))*o),0))+.9617966939259756*(_-(y-A))+Pn[U])-((v=Fn(v=(p=.9617967009544373*y)+b+(l=xn[U])+(w=h),0))-w-l-p),r[0]=v,r[1]=s,r},Ot=function(r,n){var t,e,o,u,i;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*Mn(o)*1.4426950408889634)-((e=Ln(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r},St=function(r,n,t){var e,o,u,i,f,c,a,l,y;return y=((l=r&at|0)>>20)-1023|0,a=0,l>1071644672&&(o=ot(0,((a=r+(yt>>y+1)>>>0)&~(lt>>(y=((a&at)>>20)-1023|0)))>>>0),a=(a&lt|yt)>>20-y>>>0,r<0&&(a=-a),n-=o),f=(i=.6931471805599453*(t-((o=ut(o=t+n,0))-n))+-1.904654299957768e-9*o)-((c=(u=.6931471824645996*o)+i)-u),e=c-(o=c*c)*ct(o),r=et(c=1-(c*e/(e-2)-(f+c*f)-c)),r=it(r),c=(r+=a<<20>>>0)>>20<=0?ft(c,a):ot(c,r)},Ft=2147483647,Et=1083179008,Tt=1e300,Ht=1e-300,Gt=[0,0],xt=[0,0],Pt=function r(n,t){var e,o,u,i,f,c,a,l,y,p,b,v,s,w;if(pt(n)||pt(t))return NaN;if(At(Gt,t),f=Gt[0],0===Gt[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return wt(n);if(-.5===t)return 1/wt(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(vt(t))return Nt(n,t)}if(At(Gt,n),i=Gt[0],0===Gt[1]){if(0===i)return gt(n,t);if(1===n)return 1;if(-1===n&&bt(t))return-1;if(vt(n))return n===mt?r(-0,-t):t<0?0:Ut}if(n<0&&!1===st(t))return(n-n)/(n-n);if(u=dt(n),e=i&Ft|0,o=f&Ft|0,a=f>>>31|0,c=(c=i>>>31|0)&&bt(t)?-1:1,o>1105199104){if(o>1139802112)return jt(n,t);if(e<1072693247)return 1===a?c*Tt*Tt:c*Ht*Ht;if(e>1072693248)return 0===a?c*Tt*Tt:c*Ht*Ht;b=Ot(xt,u)}else b=It(xt,u,e);if(p=(t-(l=_t(t,0)))*b[0]+t*b[1],y=l*b[0],At(Gt,v=p+y),s=ht(Gt[0]),w=ht(Gt[1]),s>=Et){if(0!=(s-Et|w))return c*Tt*Tt;if(p+8008566259537294e-32>v-y)return c*Tt*Tt}else if((s&Ft)>=1083231232){if(0!=(s-3230714880|w))return c*Ht*Ht;if(p<=v-y)return c*Ht*Ht}return c*(v=St(s,y,p))},Lt=Pt,Mt=Math.round,Vt=m,Wt=A,kt=j,Yt=Mt,qt=function r(n,t){var e,o;if(Wt(n)||Wt(t))return NaN;if(!Vt(n)||!Vt(t))return NaN;if(t<0)return 0;if(n<0)return e=r(-n+t-1,t),kt(t)&&(e=-e),e;if(t>n)return 0;if(0===t||t===n)return 1;if(1===t||t===n-1)return n;for(n-t<t&&(t=n-t),e=n,o=2;o<=t;o++)e*=(n-o+1)/o;return Vt(e)?e:Yt(e)},Ct=qt,Rt=Math.ceil,zt={};function Bt(r){var n,t,e,o,u,i,f,c,a;if(void 0===(n=zt[r])){if(c=r+1,n=new Array(c),0===r)n[0]=2;else{for(a=0;a<c;a++)n[a]=0;for(e=Rt(t=r/2),o=_(t),a=0;a<=o;a++)u=2*a+r%2,i=2*Ct(e+a-1,o-a-1),f=Ct(e+a-1,o-a),n[u]+=i+f}zt[r]=n}return n}function Dt(r,n){var t,e,o;return t=Bt(e=T(r)),o=d(t,n),r>=0?o:Lt(-1,e)*o}return p(Dt,"factory",(function(r){var n,t,e,o;return n=Bt(t=T(r)),e=d.factory(n),o=Lt(-1,t),r>=0||1===o?e:function(r){return-1*e(r)}})),Dt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).lucaspoly=n();
//# sourceMappingURL=index.js.map
