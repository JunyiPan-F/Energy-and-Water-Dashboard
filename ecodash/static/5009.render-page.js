"use strict";
exports.id = 5009;
exports.ids = [5009];
exports.modules = {

/***/ 35009:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "previewWebStyleSymbol": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66341);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95550);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(e,i,h){const s=e.thumbnail&&e.thumbnail.url;return s?(0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(s,{responseType:"image"}).then((t=>{const e=n(t.data,h);return h&&h.node?(h.node.appendChild(e),h.node):e})):e.fetchSymbol().then((t=>i(t,h)))}function n(t,i){const n=!/\\.svg$/i.test(t.src)&&i&&i.disableUpsampling,h=Math.max(t.width,t.height);let s=i&&null!=i.maxSize?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .pt2px */ .F2)(i.maxSize):120;n&&(s=Math.min(h,s));const o=Math.min(s,i&&null!=i.size?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .pt2px */ .F2)(i.size):h);if(o!==h){const e=0!==t.width&&0!==t.height?t.width/t.height:1;e>=1?(t.width=o,t.height=o/e):(t.width=o*e,t.height=o)}return t}


/***/ })

};
;
//# sourceMappingURL=5009.render-page.js.map