// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,v,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function _(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var E=String.fromCharCode,U=isNaN,x=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function N(r){var e,n,t,a,o,c,s,l,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(e=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,U(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,U(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!U(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=U(o)?String(t.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,n,t,i;for(n=[],i=0,t=S.exec(r);t;)(e=r.slice(i,S.lastIndex-t[0].length)).length&&n.push(e),n.push(F(t)),i=S.lastIndex,t=S.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function k(r){return"string"==typeof r}function T(r){var e,n;if(!k(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[j(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return N.apply(null,e)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,L=O.__lookupSetter__,W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||L.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function C(r,e,n){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r,e){var n,t;if((t=r.length)<2||0===e)return 0===t?0:r[0];for(n=r[t-=1]*e+r[t-1],t-=2;t>=0;)n=n*e+r[t],t-=1;return n}var R=Function;function M(r){var e,n,t,i;if(r.length>500)return function(e){return P(r,e)};if(e="return function evalpoly(x){",0===(n=r.length))e+="return 0.0;";else if(1===n)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],t=n-1,i=1;i<n;i++)e+="+x*",i<t&&(e+="("),e+=r[i];for(i=0;i<t-1;i++)e+=")";e+=";"}return e+="}",new R(e+="//# sourceURL=evalpoly.factory.js")()}function Z(r){return r!=r}C(P,"factory",M);var X=Math.floor;function Y(r){return X(r)===r}function q(r){return Y(r/2)}function z(r){return q(r>0?r-1:r+1)}var B=Number.POSITIVE_INFINITY,D=Number.NEGATIVE_INFINITY;function J(r){return r===B||r===D}var K=Math.sqrt;function Q(r){return Math.abs(r)}var rr,er="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),nr=Object.prototype.toString,tr=Object.prototype.hasOwnProperty,ir="function"==typeof Symbol?Symbol:void 0,ar="function"==typeof ir?ir.toStringTag:"",or=er&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return nr.call(r);n=r[ar],a=ar,e=null!=(i=r)&&tr.call(i,a);try{r[ar]=void 0}catch(e){return nr.call(r)}return t=nr.call(r),e?r[ar]=n:delete r[ar],t}:function(r){return nr.call(r)},ur="function"==typeof Uint32Array,fr="function"==typeof Uint32Array?Uint32Array:null,cr="function"==typeof Uint32Array?Uint32Array:void 0;rr=function(){var r,e,n;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(ur&&n instanceof Uint32Array||"[object Uint32Array]"===or(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var sr,lr=rr,pr="function"==typeof Float64Array,yr="function"==typeof Float64Array?Float64Array:null,gr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,e,n;if("function"!=typeof yr)return!1;try{e=new yr([1,3.14,-3.14,NaN]),n=e,r=(pr&&n instanceof Float64Array||"[object Float64Array]"===or(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr,vr=sr,hr="function"==typeof Uint8Array,wr="function"==typeof Uint8Array?Uint8Array:null,br="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,e,n;if("function"!=typeof wr)return!1;try{e=new wr(e=[1,3.14,-3.14,256,257]),n=e,r=(hr&&n instanceof Uint8Array||"[object Uint8Array]"===or(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var mr,Ar=dr,_r="function"==typeof Uint16Array,Er="function"==typeof Uint16Array?Uint16Array:null,Ur="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,e,n;if("function"!=typeof Er)return!1;try{e=new Er(e=[1,3.14,-3.14,65536,65537]),n=e,r=(_r&&n instanceof Uint16Array||"[object Uint16Array]"===or(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var xr,Ir={uint16:mr,uint8:Ar};(xr=new Ir.uint16(1))[0]=4660;var Nr,Sr,Fr=52===new Ir.uint8(xr.buffer)[0];!0===Fr?(Nr=1,Sr=0):(Nr=0,Sr=1);var jr={HIGH:Nr,LOW:Sr},kr=new vr(1),Tr=new lr(kr.buffer),Or=jr.HIGH,Vr=jr.LOW;function $r(r,e,n,t){return kr[0]=r,e[t]=Tr[Or],e[t+n]=Tr[Vr],e}function Gr(r){return $r(r,[0,0],1,0)}C(Gr,"assign",$r);var Hr=!0===Fr?0:1,Lr=new vr(1),Wr=new lr(Lr.buffer);function Cr(r,e){return Lr[0]=r,Wr[Hr]=e>>>0,Lr[0]}function Pr(r){return 0|r}var Rr,Mr,Zr=2147483647,Xr=!0===Fr?1:0,Yr=new vr(1),qr=new lr(Yr.buffer);function zr(r){return Yr[0]=r,qr[Xr]}!0===Fr?(Rr=1,Mr=0):(Rr=0,Mr=1);var Br={HIGH:Rr,LOW:Mr},Dr=new vr(1),Jr=new lr(Dr.buffer),Kr=Br.HIGH,Qr=Br.LOW;function re(r,e){return Jr[Kr]=r,Jr[Qr]=e,Dr[0]}var ee=[0,0];function ne(r,e){var n,t;return Gr.assign(r,ee,1,0),n=ee[0],n&=Zr,t=zr(e),re(n|=t&=2147483648,ee[1])}var te=!0===Fr?1:0,ie=new vr(1),ae=new lr(ie.buffer);function oe(r,e){return ie[0]=r,ae[te]=e>>>0,ie[0]}var ue=1023,fe=1048576,ce=[1,1.5],se=[0,.5849624872207642],le=[0,1.350039202129749e-8];function pe(r,e,n,t){return function(r){return r!=r}(r)||J(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Q(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}C((function(r){return pe(r,[0,0],1,0)}),"assign",pe);var ye=[0,0],ge=[0,0];function de(r,e){var n,t,i;return 0===e||0===r||(i=r)!=i||J(r)?r:(pe(r,ye,1,0),e+=ye[1],e+=function(r){var e=zr(r);return(e=(2146435072&e)>>>20)-ue|0}(r=ye[0]),e<-1074?ne(0,r):e>1023?r<0?D:B:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Gr.assign(r,ge,1,0),n=ge[0],n&=2148532223,t*re(n|=e+ue<<20,ge[1])))}var ve=1048575,he=1048576,we=1083179008,be=1e300,me=1e-300,Ae=[0,0],_e=[0,0];function Ee(r,e){var n,t,i,a,o,u,f,c,s,l,p,y,g,d;if(Z(r)||Z(e))return NaN;if(Gr.assign(e,Ae,1,0),o=Ae[0],0===Ae[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return K(r);if(-.5===e)return 1/K(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(J(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Q(r)<1==(e===B)?0:B}(r,e)}if(Gr.assign(r,Ae,1,0),a=Ae[0],0===Ae[1]){if(0===a)return function(r,e){return e===D?B:e===B?0:e>0?z(e)?r:0:z(e)?ne(B,r):B}(r,e);if(1===r)return 1;if(-1===r&&z(e))return-1;if(J(r))return r===D?Ee(-0,-e):e<0?0:B}if(r<0&&!1===Y(e))return(r-r)/(r-r);if(i=Q(r),n=a&Zr|0,t=o&Zr|0,f=o>>>31|0,u=(u=a>>>31|0)&&z(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(zr(r)&Zr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*be*be:u*me*me;if(n>1072693248)return 0===f?u*be*be:u*me*me;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Cr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(_e,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,g,d,v,h,w,b,m,A,_,E;return m=0,n<fe&&(m-=53,n=zr(e*=9007199254740992)),m+=(n>>20)-ue|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=fe),o=Cr(i=(w=(e=oe(e,n))-(c=ce[_]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=oe(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=Cr(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),d=(y=-7.028461650952758e-9*(l=Cr(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+le[_])-((g=Cr(g=(p=.9617967009544373*l)+y+(s=se[_])+(v=m),0))-v-s-p),r[0]=g,r[1]=d,r}(_e,i,n);if(y=(l=(e-(c=Cr(e,0)))*p[0]+e*p[1])+(s=c*p[0]),Gr.assign(y,Ae,1,0),g=Pr(Ae[0]),d=Pr(Ae[1]),g>=we){if(0!=(g-we|d))return u*be*be;if(l+8008566259537294e-32>y-s)return u*be*be}else if((g&Zr)>=1083231232){if(0!=(g-3230714880|d))return u*me*me;if(l<=y-s)return u*me*me}return y=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&Zr|0)>>20)-ue|0,c=0,s>1071644672&&(i=oe(0,((c=r+(he>>l+1)>>>0)&~(ve>>(l=((c&Zr)>>20)-ue|0)))>>>0),c=(c&ve|he)>>20-l>>>0,r<0&&(c=-c),e-=i),r=Pr(r=zr(f=1-((f=(a=.6931471824645996*(i=Cr(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?de(f,c):oe(f,r)}(g,s,l),u*y}function Ue(r){return r!=r}function xe(r){return r!=r}var Ie=2147483647;function Ne(r,e){var n,t,i,a,o,u,f;if(Ue(r)||Ue(e))return NaN;if(!Y(r)||!Y(e))return NaN;if(e<0)return 0;if(t=1,r<0&&(r=-r+e-1,z(e)&&(t*=-1)),e>r)return 0;if(0===e||e===r)return t;if(1===e||e===r-1)return t*r;for(f=X(9007199254740991/r),n=1,o=1;o<=e&&!(n>f);o++)n*=r,n/=o,r-=1;return o>e?t*n:(u=function(r,e){return xe(r)||xe(e)||r===B||e===B||r===D||e===D?NaN:Y(r)&&Y(e)?(r<0&&(r=-r),e<0&&(e=-e),r<=Ie&&e<=Ie?function(r,e){var n,t=0;if(0===r)return e;if(0===e)return r;for(;0==(1&r)&&0==(1&e);)r>>>=1,e>>>=1,t+=1;for(;0==(1&r);)r>>>=1;for(;e;){for(;0==(1&e);)e>>>=1;r>e&&(n=e,e=r,r=n),e-=r}return r<<t}(r,e):function(r,e){var n,t=1;if(0===r)return e;if(0===e)return r;for(;r%2==0&&e%2==0;)r/=2,e/=2,t*=2;for(;r%2==0;)r/=2;for(;e;){for(;e%2==0;)e/=2;r>e&&(n=e,e=r,r=n),e-=r}return t*r}(r,e)):NaN}(i=Ne(r,e-o+1),a=Ne(e,e-o+1)),t*(n/=a/=u)*(i/=u))}var Se=Math.ceil,Fe={};function je(r){var e,n,t,i,a,o,u,f,c;if(void 0===(e=Fe[r])){if(f=r+1,e=new Array(f),0===r)e[0]=2;else{for(c=0;c<f;c++)e[c]=0;for(t=Se(n=r/2),i=X(n),c=0;c<=i;c++)a=2*c+r%2,o=2*Ne(t+c-1,i-c-1),u=Ne(t+c-1,i-c),e[a]+=o+u}Fe[r]=e}return e}function ke(r,e){var n,t;return t=P(je(n=Q(r)),e),r>=0?t:Ee(-1,n)*t}return C(ke,"factory",(function(r){var e,n,t,i;return e=je(n=Q(r)),t=M(e),i=Ee(-1,n),r>=0||1===i?t:function(r){return-1*t(r)}})),ke},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).lucaspoly=e();
//# sourceMappingURL=browser.js.map
