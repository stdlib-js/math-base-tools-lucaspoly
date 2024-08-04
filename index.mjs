// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e,{factory as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-evalpoly@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.3.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-binomcoef@v0.2.3-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@v0.2.2-esm/index.mjs";var d={};function a(s){var e,t,r,i,a,l,p,f,j;if(void 0===(e=d[s])){if(f=s+1,e=new Array(f),0===s)e[0]=2;else{for(j=0;j<f;j++)e[j]=0;for(r=o(t=s/2),i=m(t),j=0;j<=i;j++)a=2*j+s%2,l=2*n(r+j-1,i-j-1),p=n(r+j-1,i-j),e[a]+=l+p}d[s]=e}return e}function l(s,t){var n,m,o;return n=a(m=i(s)),o=e(n,t),s>=0?o:r(-1,m)*o}function p(s){var e,n,m,o;return e=a(n=i(s)),m=t(e),o=r(-1,n),s>=0||1===o?m:function(s){return-1*m(s)}}s(l,"factory",p);export{l as default,p as factory};
//# sourceMappingURL=index.mjs.map
