// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=.017453292519943295;function r(r){return r*n}var t=-.16666666666666632,u=.00833333333332249,e=-.0001984126982985795,a=27557313707070068e-22,f=-2.5050760253406863e-8,o=1.58969099521155e-10;function c(n,r){var c,i,I;return c=u+(I=n*n)*(e+I*a)+I*(I*I)*(f+I*o),i=I*n,0===r?n+i*(t+I*c):n-(I*(.5*r-i*c)-r-i*t)}function i(n,r){var t,u,e,a;return e=(a=n*n)*a,u=a*function(n){return 0===n?.0416666666666666:.0416666666666666+n*(2480158728947673e-20*n-.001388888888887411)}(a),u+=e*e*function(n){return 0===n?-2.7557314351390663e-7:n*(2.087572321298175e-9+-11359647557788195e-27*n)-2.7557314351390663e-7}(a),(e=1-(t=.5*a))+(1-e-t+(a*u-n*r))}var I=Number.POSITIVE_INFINITY,N=Number.NEGATIVE_INFINITY;function v(n){var t;return function(n){return n===I||n===N}(n)||function(n){return n!=n}(n)?NaN:(t=function(n){return Math.abs(n)}(function(n,r){return n%r}(n,360)),t<=45?i(r(t),0):t<135?c(r(90-t),0):t<=225?-i(r(180-t),0):t<315?c(r(t-270),0):i(r(360-t),0))}export{v as default};
//# sourceMappingURL=mod.js.map
