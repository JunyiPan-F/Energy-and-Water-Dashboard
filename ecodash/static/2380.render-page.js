"use strict";
exports.id = 2380;
exports.ids = [2380];
exports.modules = {

/***/ 10287:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0};


/***/ }),

/***/ 22380:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(36663);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91957);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80085);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66341);
/* harmony import */ var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37956);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70375);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39994);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25709);
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68309);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(61681);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86745);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78668);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3466);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81977);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7753);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40266);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(91772);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(53736);
/* harmony import */ var _support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(40400);
/* harmony import */ var _rest_query_operations_editsZScale_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(66565);
/* harmony import */ var _rest_query_operations_queryAttachments_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(57714);
/* harmony import */ var _tasks_QueryTask_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(60892);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(14685);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const I=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__/* .JSONMap */ .Xn({originalAndCurrentFeatures:"original-and-current-features",none:"none"});async function _(e){if("string"==typeof e){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .dataComponents */ .sJ)(e);return t||{data:e}}return new Promise(((t,r)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>t((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .dataComponents */ .sJ)(s.result)),s.onerror=e=>r(e)}))}const O=new Set(["Feature Layer","Table"]);let S=class extends _core_Loadable_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z{constructor(){super(...arguments),this.type="feature-layer",this.refresh=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .debounce */ .Ds)((async()=>{var e,t;await this.load();const r=null==(e=this.sourceJSON.editingInfo)?void 0:e.lastEditDate;if(null==r)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const s=r!==(null==(t=this.sourceJSON.editingInfo)?void 0:t.lastEditDate);return{dataChanged:s,updates:s?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}))}load(e){const t=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,t)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:t,dynamicDataSource:r,infoFor3D:s,gdbVersion:a,spatialReference:n,fieldsIndex:o}=this.layer,u=(0,_core_has_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)("featurelayer-pbf")&&e&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isNone */ .Wi)(s)?"pbf":"json";return new _tasks_QueryTask_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z({url:t.path,format:u,fieldsIndex:o,infoFor3D:s,dynamicDataSource:r,gdbVersion:a,sourceSpatialReference:n})}async addAttachment(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/addAttachment",i=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(t,i.query);try{const e=await (0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a,{body:n});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(s,o)}}async updateAttachment(e,t,s){await this.load();const a=e.attributes[this.layer.objectIdField],i=this.layer.parsedUrl.path+"/"+a+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:t}}),o=this._getFormDataForAttachment(s,n.query);try{const e=await (0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(i,{body:o});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(a,u)}}async applyEdits(e,t){await this.load();const s=e.addFeatures.map(this._serializeFeature,this),a=e.updateFeatures.map(this._serializeFeature,this),i=this._getFeatureIds(e.deleteFeatures,null==t?void 0:t.globalIdUsed);(0,_rest_query_operations_editsZScale_js__WEBPACK_IMPORTED_MODULE_18__/* .unapplyEditsZUnitScaling */ .P)(s,a,this.layer.spatialReference);const n=[],o=[],u=[...e.deleteAttachments];for(const r of e.addAttachments)n.push(await this._serializeAttachment(r));for(const r of e.updateAttachments)o.push(await this._serializeAttachment(r));const l=n.length||o.length||u.length?{adds:n,updates:o,deletes:u}:null,d={gdbVersion:(null==t?void 0:t.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null==t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:null==t?void 0:t.globalIdUsed,returnEditMoment:null==t?void 0:t.returnEditMoment,usePreviousEditMoment:null==t?void 0:t.usePreviousEditMoment,sessionId:null==t?void 0:t.sessionId};null!=t&&t.returnServiceEditsOption?(d.edits=JSON.stringify([{id:this.layer.layerId,adds:s,updates:a,deletes:i,attachments:l}]),d.returnServiceEditsOption=I.toJSON(null==t?void 0:t.returnServiceEditsOption),d.returnServiceEditsInSourceSR=null==t?void 0:t.returnServiceEditsInSourceSR):(d.adds=s.length?JSON.stringify(s):null,d.updates=a.length?JSON.stringify(a):null,d.deletes=i.length?null!=t&&t.globalIdUsed?JSON.stringify(i):i.join(","):null,d.attachments=l&&JSON.stringify(l));const c=this._getLayerRequestOptions({method:"post",query:d}),h=null!=t&&t.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,p=await (0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(h+"/applyEdits",c);return this._createEditsResult(p)}async deleteAttachments(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/deleteAttachments";try{return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(i){throw this._createAttachmentErrorResult(s,i)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:a,url:i}=this.layer,{data:n}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(`${i}/${a}`,t),{id:o,extent:u,fullExtent:l,timeExtent:d}=n,c=u||l;return{id:o,fullExtent:c&&_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"].fromJSON */ .Z.fromJSON(c),timeExtent:d&&_TimeExtent_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].fromJSON */ .Z.fromJSON({start:d[0],end:d[1]})}}))}async queryAttachments(e,t={}){const{parsedUrl:s}=this.layer,a=s.path;await this.load();const i=this._getLayerRequestOptions(t);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:t}=e,s=[];for(const e of t){const t=a+"/"+e+"/attachments";s.push((0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(t,i))}return Promise.all(s).then((e=>t.map(((t,r)=>({parentObjectId:t,attachmentInfos:e[r].data.attachmentInfos}))))).then((e=>(0,_rest_query_operations_queryAttachments_js__WEBPACK_IMPORTED_MODULE_19__/* .processAttachmentQueryResult */ .O)(e,a)))}return this.queryTask.executeAttachmentQuery(e,i)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...null==e?void 0:e.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const{data:s}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:(0,_core_has_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));e=s}this.sourceJSON=this._patchServiceJSON(e);const s=e.type;if(!O.has(s))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z("feature-layer-source:unsupported-type",`Source type "${s}" is not supported`)}_patchServiceJSON(e){var t;if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){const t=(0,_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_17__/* .createDrawingInfo */ .bU)(e.geometryType).renderer;(0,_core_object_js__WEBPACK_IMPORTED_MODULE_8__/* .setDeepValue */ .RB)("drawingInfo.renderer",t,e)}return"esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),e}_serializeFeature(e){const{geometry:t,attributes:r}=e;return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isNone */ .Wi)(t)?{attributes:r}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:r}}async _serializeAttachment(e){const{feature:t,attachment:r}=e,{globalId:s,name:a,contentType:i,data:n,uploadId:o}=r,u={globalId:s,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(u.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),o)u.uploadId=o;else if(n){const e=await _(n);u.contentType=e.mediaType,u.data=e.data,n instanceof File&&(u.name=n.name)}return a&&(u.name=a),i&&(u.contentType=i),u}_getFeatureIds(e,t){const r=e[0];return r?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map((e=>e.objectId))}_getGlobalIdsFromFeatureIdentifier(e){return e.map((e=>e.globalId))}_createEditsResult(e){var t;const r=e.data,{layerId:s}=this.layer,a=[];let i=null;if(Array.isArray(r))for(const u of r)a.push({id:u.id,editedFeatures:u.editedFeatures}),u.id===s&&(i={addResults:u.addResults,updateResults:u.updateResults,deleteResults:u.deleteResults,attachments:u.attachments,editMoment:u.editMoment});else i=r;const n=null==(t=i)?void 0:t.attachments,o={addFeatureResults:i.addResults?i.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:i.updateResults?i.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:i.deleteResults?i.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:n&&n.addResults?n.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:n&&n.updateResults?n.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:n&&n.deleteResults?n.deleteResults.map(this._createFeatureEditResult,this):[]};if(i.editMoment&&(o.editMoment=i.editMoment),a.length>0){o.editedFeatureResults=[];for(const e of a){const{adds:t,updates:r,deletes:s,spatialReference:a}=e.editedFeatures,i=a?new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z(a):null;o.editedFeatureResults.push({layerId:e.id,editedFeatures:{adds:(null==t?void 0:t.map((e=>this._createEditedFeature(e,i))))||[],updates:(null==r?void 0:r.map((e=>({original:this._createEditedFeature(e[0],i),current:this._createEditedFeature(e[1],i)}))))||[],deletes:(null==s?void 0:s.map((e=>this._createEditedFeature(e,i))))||[],spatialReference:i}})}}return o}_createEditedFeature(e,r){return new _Graphic_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({attributes:e.attributes,geometry:(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .fromJSON */ .im)({...e.geometry,spatialReference:r})})}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const r=t.details.messages&&t.details.messages[0]||t.message,s=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z("feature-layer-source:attachment-failure",r,{code:s})}}_getFormDataForAttachment(e,t){const r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(const s in t){const e=t[s];null!=e&&(r.set?r.set(s,e):r.append(s,e))}return r}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:r,dynamicDataSource:s}=this.layer;return{...e,query:{gdbVersion:r,layer:s?JSON.stringify({source:s}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_23__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)()],S.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_23__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)({constructOnly:!0})],S.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_23__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__/* .property */ .Cb)({readOnly:!0})],S.prototype,"queryTask",null),S=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_23__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__/* .subclass */ .j)("esri.layers.graphics.sources.FeatureLayerSource")],S);const E=S;


/***/ }),

/***/ 40400:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MS": () => (/* binding */ a),
/* harmony export */   "Dm": () => (/* binding */ n),
/* harmony export */   "Hq": () => (/* binding */ i),
/* harmony export */   "bU": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39994);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67134);
/* harmony import */ var _data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10287);
/* harmony import */ var _symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86094);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultPointSymbolJSON */ .I4:"esriGeometryPolyline"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultPolylineSymbolJSON */ .ET:_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultPolygonSymbolJSON */ .lF}}}function n(s,e){if((0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("esri-csp-restrictions"))return()=>({[e]:null,...s});try{let t=`this.${e} = null;`;for(const e in s){t+=`this${e.includes(".")?`["${e}"]`:`.${e}`} = ${JSON.stringify(s[e])};`}const r=new Function(t);return()=>new r}catch(r){return()=>({[e]:null,...s})}}function i(t={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .d9)(t)}}]}function a(t,s){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0},query:_data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_2__/* .queryCapabilities */ .g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}


/***/ })

};
;
//# sourceMappingURL=2380.render-page.js.map