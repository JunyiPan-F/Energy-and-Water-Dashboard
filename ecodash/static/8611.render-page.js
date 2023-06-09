"use strict";
exports.id = 8611;
exports.ids = [8611];
exports.modules = {

/***/ 68611:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addOrUpdateResource": () => (/* binding */ u),
/* harmony export */   "contentToBlob": () => (/* binding */ h),
/* harmony export */   "fetchResources": () => (/* binding */ c),
/* harmony export */   "getSiblingOfSameType": () => (/* binding */ f),
/* harmony export */   "getSiblingOfSameTypeI": () => (/* binding */ w),
/* harmony export */   "removeAllResources": () => (/* binding */ l),
/* harmony export */   "removeResource": () => (/* binding */ i),
/* harmony export */   "splitPrefixFileNameAndExtension": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66341);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70375);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61681);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3466);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function c(e,t={},a){await e.load(a);const o=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .v_)(e.itemUrl,"resources"),{start:n=1,num:c=10,sortOrder:u="asc",sortField:i="created"}=t,l={query:{start:n,num:c,sortOrder:u,sortField:i,token:e.apiKey},signal:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)(a,"signal")},p=await e.portal._request(o,l);return{total:p.total,nextStart:p.nextStart,resources:p.resources.map((({created:t,size:r,resource:a})=>({created:new Date(t),size:r,resource:e.resourceFromPath(a)})))}}async function u(e,o,n,c){if(!e.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(`portal-item-resource-${o}:invalid-path`,"Resource does not have a valid path");const u=e.portalItem;await u.load(c);const i=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .v_)(u.userItemUrl,"add"===o?"addResources":"updateResources"),[l,d]=p(e.path),m=await h(n),f=new FormData;return l&&"."!==l&&f.append("resourcesPrefix",l),f.append("fileName",d),f.append("file",m,d),f.append("f","json"),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .isSome */ .pC)(c)&&c.access&&f.append("access",c.access),await u.portal._request(i,{method:"post",body:f,signal:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)(c,"signal")}),e}async function i(e,a,o){if(!a.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(o);const n=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .v_)(e.userItemUrl,"removeResources");await e.portal._request(n,{method:"post",query:{resource:a.path},signal:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)(o,"signal")}),a.portalItem=null}async function l(e,t){await e.load(t);const a=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .v_)(e.userItemUrl,"removeResources");return e.portal._request(a,{method:"post",query:{deleteAll:!0},signal:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .get */ .U2)(t,"signal")})}function p(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=m(e),[a,o]=p(t);return[a,o,r]}function m(e){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getPathExtension */ .Ml)(e);return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .isNone */ .Wi)(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function h(t){if(t instanceof Blob)return t;return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;const[r,,a]=d(e.path);return e.portalItem.resourceFromPath((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .v_)(r,t+a))}function w(e,t){if(!e.hasPath())return null;const[r,,a]=d(e.path);return e.portalItem.resourceFromPath((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .v_)(r,t+a))}


/***/ })

};
;
//# sourceMappingURL=8611.render-page.js.map