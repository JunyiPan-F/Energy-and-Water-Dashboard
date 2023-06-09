"use strict";
exports.id = 8699;
exports.ids = [8699];
exports.modules = {

/***/ 98699:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerFunctions": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94837);
/* harmony import */ var _fieldStats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45573);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78668);
/* harmony import */ var _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3362);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(n,e,c,s,l,m){if(1===s.length){if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.a)(s[0]))return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .resolve */ .DB)((0,_fieldStats_js__WEBPACK_IMPORTED_MODULE_1__/* .calculateStat */ .t)(n,s[0],(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.E)(s[1],-1)));if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.b)(s[0]))return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .resolve */ .DB)((0,_fieldStats_js__WEBPACK_IMPORTED_MODULE_1__/* .calculateStat */ .t)(n,s[0].toArray(),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.E)(s[1],-1)))}else if(2===s.length){if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.a)(s[0]))return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .resolve */ .DB)((0,_fieldStats_js__WEBPACK_IMPORTED_MODULE_1__/* .calculateStat */ .t)(n,s[0],(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.E)(s[1],-1)));if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.b)(s[0]))return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .resolve */ .DB)((0,_fieldStats_js__WEBPACK_IMPORTED_MODULE_1__/* .calculateStat */ .t)(n,s[0].toArray(),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.E)(s[1],-1)));if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.o)(s[0]))return s[0].load().then((t=>d(_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_3__.WhereClause.create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.E)(s[2],1e3),e.abortSignal)))))}else if(3===s.length&&(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.o)(s[0]))return s[0].load().then((t=>d(_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_3__.WhereClause.create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.E)(s[2],1e3),e.abortSignal)))));return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .resolve */ .DB)((0,_fieldStats_js__WEBPACK_IMPORTED_MODULE_1__/* .calculateStat */ .t)(n,s,-1))}function d(n,t,r){try{const e=n.getVariables();if(e.length>0){const u=[];for(let n=0;n<e.length;n++){const i={name:e[n]};u.push(t.evaluateIdentifier(r,i))}return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .all */ .$6)(u).then((t=>{const r={};for(let n=0;n<e.length;n++)r[e[n]]=t[n];return n.parameters=r,n}))}return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .resolve */ .DB)(n)}catch(e){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .reject */ .d1)(e)}}function m(i){"async"===i.mode&&(i.functions.stdev=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("stdev",t,r,e,n,i)}))},i.functions.variance=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("variance",t,r,e,n,i)}))},i.functions.average=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,r,e,n,i)}))},i.functions.mean=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,r,e,n,i)}))},i.functions.sum=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("sum",t,r,e,n,i)}))},i.functions.min=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("min",t,r,e,n,i)}))},i.functions.max=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("max",t,r,e,n,i)}))},i.functions.count=function(a,o){return i.standardFunctionAsync(a,o,(function(i,a,o){if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.p)(o,1,1),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.o)(o[0]))return o[0].count(i.abortSignal);if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.a)(o[0])||(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.f)(o[0]))return o[0].length;if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.b)(o[0]))return o[0].length();throw new Error("Invalid Parameters for Count")}))})}


/***/ })

};
;
//# sourceMappingURL=8699.render-page.js.map