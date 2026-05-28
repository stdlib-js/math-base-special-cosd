"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=s(function(l,a){
var i=require('@stdlib/math-base-special-deg2rad/dist'),n=require('@stdlib/math-base-special-kernel-sin/dist'),u=require('@stdlib/math-base-special-kernel-cos/dist'),v=require('@stdlib/math-base-special-fmod/dist'),f=require('@stdlib/math-base-special-abs/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-assert-is-infinite/dist');function c(e){var r;return o(e)||q(e)?NaN:(r=f(v(e,360)),r<=45?u(i(r),0):r<135?n(i(90-r),0):r<=225?-u(i(180-r),0):r<315?n(i(r-270),0):u(i(360-r),0))}a.exports=c
});var d=t();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
