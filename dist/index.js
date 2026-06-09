"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=c(function(L,q){
var g={};q.exports=g
});var s=c(function(M,h){
var p=require('@stdlib/math-base-special-binomcoef/dist'),A=require('@stdlib/math-base-special-floor/dist'),O=require('@stdlib/math-base-special-ceil/dist'),y=l();function R(e){var r,o,i,v,t,u,n,f,a;if(r=y[e],r===void 0){if(f=e+1,r=new Array(f),e===0)r[0]=2;else{for(a=0;a<f;a++)r[a]=0;for(o=e/2,i=O(o),v=A(o),a=0;a<=v;a++)t=2*a+e%2,u=2*p(i+a-1,v-a-1),n=p(i+a-1,v-a),r[t]+=u+n}y[e]=r}return r}h.exports=R
});var b=c(function(N,x){
var j=require('@stdlib/math-base-tools-evalpoly/dist'),k=require('@stdlib/math-base-special-pow/dist'),z=require('@stdlib/math-base-special-abs/dist'),B=s();function C(e,r){var o,i,v;return i=z(e),o=B(i),v=j(o,r),e>=0?v:k(-1,i)*v}x.exports=C
});var m=c(function(P,w){
var D=require('@stdlib/math-base-tools-evalpoly/dist').factory,E=require('@stdlib/math-base-special-pow/dist'),F=require('@stdlib/math-base-special-abs/dist'),G=s();function H(e){var r,o,i,v;if(o=F(e),r=G(o),i=D(r),v=E(-1,o),e>=0||v===1)return i;return t;function t(u){return-1*i(u)}}w.exports=H
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=b(),J=m();I(d,"factory",J);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
