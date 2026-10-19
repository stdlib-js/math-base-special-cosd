"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var t=v(function(m,a){
var i=require('@stdlib/math-base-special-deg2rad/dist'),n=require('@stdlib/math-base-special-kernel-sin/dist'),u=require('@stdlib/math-base-special-kernel-cos/dist'),f=require('@stdlib/math-base-special-fmod/dist'),q=require('@stdlib/math-base-special-abs/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-assert-is-infinite/dist');function d(e){var r;return c(e)||o(e)?NaN:(r=q(f(e,360)),r<=45?u(i(r),0):r<135?n(i(90-r),0):r<=225?-u(i(180-r),0):r<315?n(i(r-270),0):u(i(360-r),0))}a.exports=d
});var k=t();module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
