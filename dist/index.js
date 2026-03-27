"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=n(function(C,v){
var x=require('@stdlib/strided-base-smskmap/dist'),l=require('@stdlib/math-base-special-deg2radf/dist');function R(e,r,a,s,i,t,u){return x(e,r,a,s,i,t,u,l)}v.exports=R
});var o=n(function(D,m){
var _=require('@stdlib/strided-base-smskmap/dist').ndarray,E=require('@stdlib/math-base-special-deg2radf/dist');function O(e,r,a,s,i,t,u,k,y,j){return _(e,r,a,s,i,t,u,k,y,j,E)}m.exports=O
});var f=n(function(F,p){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),h=o();b(c,"ndarray",h);p.exports=c
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=f(),d,g=z(w(__dirname,"./native.js"));g instanceof Error?d=A:d=g;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
