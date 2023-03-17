"use strict";
exports.id = 5670;
exports.ids = [5670];
exports.modules = {

/***/ 94672:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QM": () => (/* binding */ r),
/* harmony export */   "hy": () => (/* binding */ o),
/* harmony export */   "uI": () => (/* binding */ e)
/* harmony export */ });
/* unused harmony exports calculateHeatmapIntensityInfo, createHeatmapImageData, createKernel, createValueFunction, createValueFunctionCursor */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19431);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=(()=>{if(!("document"in globalThis))return()=>null;const t=document.createElement("canvas"),e=t.getContext("2d"),n=512;return t.height=n,t.width=1,n=>{e.clearRect(0,0,1,t.height);const r=e.createLinearGradient(0,0,0,t.height);for(const{ratio:t,color:e}of n.colorStops)r.addColorStop(Math.max(t,.001),`rgba(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`);return e.fillStyle=r,e.fillRect(0,0,1,t.height),e.getImageData(0,0,1,t.height).data}})();function n(t,e,n,r){const{blurRadius:o,fieldOffset:a,field:c}=e,u=new Float64Array(n*r),l=i(o),h=Math.round(3*o);let s,d=Number.NEGATIVE_INFINITY;const m=f(c,a);for(const{geometry:i,attributes:f}of t){const t=i.x-h,e=i.y-h,o=Math.max(0,t),a=Math.max(0,e),c=Math.min(r,i.y+h),g=Math.min(n,i.x+h),y=+m(f);for(let r=a;r<c;r++){const a=l[r-e];for(let e=o;e<g;e++){const o=l[e-t];s=u[r*n+e]+=a*o*y,s>d&&(d=s)}}}return{matrix:u.buffer,max:d}}function r(t,e,n,r){const{blurRadius:o,fieldOffset:a,field:f}=e,u=new Float64Array(n*r),l=i(o),h=Math.round(3*o);let s,d=Number.NEGATIVE_INFINITY;const m=c(f,a),g=new Set;for(const i of t){const t=i.getCursor();for(;t.next();){const e=t.getObjectId();if(g.has(e))continue;g.add(e);const o=t.readLegacyPointGeometry(),a=128;if(o.x<-a||o.x>=n+a||o.y<-a||o.y>r+a)continue;const i=+m(t),f=Math.round(o.x)-h,c=Math.round(o.y)-h,y=Math.max(0,f),M=Math.max(0,c),x=Math.min(r,Math.round(o.y)+h),b=Math.min(n,Math.round(o.x)+h);for(let t=M;t<x;t++){const e=l[t-c];for(let r=y;r<b;r++){const o=l[r-f];s=u[t*n+r]+=e*o*i,s>d&&(d=s)}}}}return{matrix:u.buffer,max:d}}function o(t,e,n,r,o,i){t.canvas.width=t.canvas.height=e,t.clearRect(0,0,e,e);const f=t.getImageData(0,0,e,e);n&&r&&f.data.set(new Uint8ClampedArray(a(e,n,r,o,i))),t.putImageData(f,0,0)}function a(e,n,r,o,a){const i=new Uint32Array(e*e),f="buffer"in n?n:new Float64Array(n),c="buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer),u=c.length/(a-o);for(let l=0;l<f.length;l++){const e=f[l],n=Math.floor((e-o)*u);i[l]=c[(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .uZ)(n,0,c.length-1)]}return i.buffer}function i(t){const e=Math.round(3*t),n=2*t*t,r=new Float64Array(2*e+1);for(let o=0;o<=r.length;o++)r[o]=Math.exp(-((o-e)**2)/n)/Math.sqrt(2*Math.PI)*(t/2);return r}function f(t,e){return"function"==typeof t?t:t?"string"==typeof e?e=>-1*+e[t]:n=>+n[t]+e:()=>1}function c(t,e){return null!=t?"string"==typeof e?e=>-1*+e.readAttribute(t):n=>+n.readAttribute(t)+e:t=>1}


/***/ }),

/***/ 67766:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36663);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53280);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7753);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39994);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40266);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_0__/* .HandleOwner */ .r{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({readOnly:!0})],s.prototype,"supportsTileUpdates",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({constructOnly:!0})],s.prototype,"remoteClient",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({constructOnly:!0})],s.prototype,"service",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)()],s.prototype,"spatialReference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({constructOnly:!0})],s.prototype,"tileInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({constructOnly:!0})],s.prototype,"tileStore",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_6__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .j)("esri.views.2d.layers.features.processors.BaseProcessor")],s);const p=s;


/***/ }),

/***/ 5670:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36663);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39994);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61681);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13802);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7283);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7753);
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33156);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40266);
/* harmony import */ var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27281);
/* harmony import */ var _renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94672);
/* harmony import */ var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14266);
/* harmony import */ var _BaseProcessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67766);
/* harmony import */ var _support_tileUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6413);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class p{constructor(e,t){this.offset=e,this.extent=t}}function c(e){const t=e.key,s=new Map,r=256,i=_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_8__/* .TILE_SIZE */ .I_,o=e.tileInfoView.tileInfo.isWrappable;return s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .getPow2NeighborKey */ .M)(t,-1,-1,o).id,new p([-i,-i],[i-r,i-r,i,i])),s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .getPow2NeighborKey */ .M)(t,0,-1,o).id,new p([0,-i],[0,i-r,i,i])),s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .getPow2NeighborKey */ .M)(t,1,-1,o).id,new p([i,-i],[0,i-r,r,i])),s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .getPow2NeighborKey */ .M)(t,-1,0,o).id,new p([-i,0],[i-r,0,i,i])),s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .getPow2NeighborKey */ .M)(t,1,0,o).id,new p([i,0],[0,0,r,i])),s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .getPow2NeighborKey */ .M)(t,-1,1,o).id,new p([-i,i],[i-r,0,i,r])),s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .getPow2NeighborKey */ .M)(t,0,1,o).id,new p([0,i],[0,0,i,r])),s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .getPow2NeighborKey */ .M)(t,1,1,o).id,new p([i,i],[0,0,r,r])),s}let l=class extends _BaseProcessor_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const s=t.schema.processors[0];if("heatmap"!==s.type)return;(0,_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .diff */ .Hg)(this._schema,s)&&(e.mesh=!0,this._schema=s)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){const t={clear:!0};return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}async onTileMessage(e,r,i){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const a=this._tileKeyToFeatureSets.get(e.key.id);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__/* .isSome */ .pC)(r.addOrUpdate)&&r.addOrUpdate.hasFeatures&&a.set(r.addOrUpdate.instance,r),r.end){const t=[],r=c(e);this._tileKeyToFeatureSets.forEach(((i,o)=>{if(o===e.key.id)i.forEach((e=>(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__/* .andThen */ .Po)(e.addOrUpdate,(e=>t.push(e)))));else if(r.has(o)){const e=r.get(o),[a,n]=e.offset;i.forEach((e=>(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__/* .andThen */ .Po)(e.addOrUpdate,(e=>{const s=e.transform(a,n,1,1);t.push(s)}))))}}));const a=(0,_renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .calculateHeatmapIntensityInfoReaders */ .QM)(t,this._schema.mesh,512,512),n={tileKey:e.key.id,intensityInfo:a},d=[a.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",n,{...i,transferList:d})}}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .j)("esri.views.2d.layers.features.processors.HeatmapProcessor")],l);const h=l;


/***/ }),

/***/ 6413:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ l)
/* harmony export */ });
/* unused harmony export getPow2NeighborTile */
/* harmony import */ var _Tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2290);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,n,r){const t=e.tileInfoView.tileInfo.isWrappable,i=l(e.key,n,r,t);return new o(e.tileInfoView,i)}function l(o,e,l,n){const r=o.clone(),t=1<<r.level,i=r.col+e,c=r.row+l;return n&&i<0?(r.col=i+t,r.world-=1):i>=t?(r.col=i-t,r.world+=1):r.col=i,r.row=c,r}


/***/ })

};
;
//# sourceMappingURL=5670.render-page.js.map