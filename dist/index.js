"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var l=c(function(L,q){
var g={};q.exports=g
});var s=c(function(M,h){
var p=require('@stdlib/math-base-special-binomcoef/dist'),A=require('@stdlib/math-base-special-floor/dist'),O=require('@stdlib/math-base-special-ceil/dist'),y=l();function R(e){var r,a,v,o,t,u,n,f,i;if(r=y[e],r===void 0){if(f=e+1,r=new Array(f),e===0)r[0]=2;else{for(i=0;i<f;i++)r[i]=0;for(a=e/2,v=O(a),o=A(a),i=0;i<=o;i++)t=2*i+e%2,u=2*p(v+i-1,o-i-1),n=p(v+i-1,o-i),r[t]+=u+n}y[e]=r}return r}h.exports=R
});var b=c(function(N,x){
var j=require('@stdlib/math-base-tools-evalpoly/dist'),k=require('@stdlib/math-base-special-pow/dist'),z=require('@stdlib/math-base-special-abs/dist'),B=s();function C(e,r){var a,v,o;return v=z(e),a=B(v),o=j(a,r),e>=0?o:k(-1,v)*o}x.exports=C
});var m=c(function(P,w){
var D=require('@stdlib/math-base-tools-evalpoly/dist').factory,E=require('@stdlib/math-base-special-pow/dist'),F=require('@stdlib/math-base-special-abs/dist'),G=s();function H(e){var r,a,v,o;if(a=F(e),r=G(a),v=D(r),o=E(-1,a),e>=0||o===1)return v;return t;function t(u){return-1*v(u)}}w.exports=H
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=b(),J=m();I(d,"factory",J);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
