"use strict";(self.webpackChunkenergy_and_water_dashboard=self.webpackChunkenergy_and_water_dashboard||[]).push([[6004],{56004:function(e,t,r){r.r(t),r.d(t,{default:function(){return W}});var n=r(15861),i=r(4942),o=r(15671),a=r(43144),c=r(60136),s=r(6215),u=r(61120),l=r(87757),h=r.n(l),f=r(83195),p=r(51916),d=r(33300),y=r(75571),v=r(10173),m=r(80347),b=r(37566),g=r(98840),_=r(89636),w=r(43079),k=(r(33682),r(64003),r(9634)),O=r(30732),j=r(30387),S=r(65673),P=r(18414),C=r(82682),Z=r(74915),T=r(3781),x=r(44946),D=r(70420),I=r(16602);function L(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw o}}}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V=y.Z.getLogger("esri.core.workers.WorkerHandle"),M=function(){function e(t,r,n){var i=this,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(0,o.Z)(this,e),this._mainMethod=r,this._listeners=[],this._promise=(0,I.bA)(t,R(R({},a),{},{schedule:n})).then((function(e){if(void 0===i._thread){i._thread=e,i._promise=null,a.hasInitialize&&i.broadcast({},"initialize");var t,r=L(i._listeners);try{for(r.s();!(t=r.n()).done;){var n=t.value;i._connectListener(n)}}catch(o){r.e(o)}finally{r.f()}}else e.close()})),this._promise.catch((function(e){return V.error("Failed to initialize ".concat(t," worker: ").concat(e))}))}return(0,a.Z)(e,[{key:"on",value:function(e,t){var r=this,n={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(n),this._connectListener(n),(0,D.kB)((function(){n.removed=!0,(0,w.Od)(r._listeners,n),r._thread&&(0,v.pC)(n.threadHandle)&&n.threadHandle.remove()}))}},{key:"destroy",value:function(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}},{key:"invoke",value:function(e,t){return this.invokeMethod(this._mainMethod,e,t)}},{key:"invokeMethod",value:function(e,t,r){var n=this;if(this._thread){var i=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:i,signal:r})}return this._promise?this._promise.then((function(){return(0,b.k_)(r),n.invokeMethod(e,t,r)})):Promise.reject(null)}},{key:"broadcast",value:function(e,t){var r=this;return this._thread?Promise.all(this._thread.broadcast(t,e)).then((function(){})):this._promise?this._promise.then((function(){return r.broadcast(e,t)})):Promise.reject()}},{key:"promise",get:function(){return this._promise}},{key:"_connectListener",value:function(e){this._thread&&this._thread.on(e.eventName,e.callback).then((function(t){e.removed||(e.threadHandle=t)}))}}]),e}();function U(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var i=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var B=function(e){(0,c.Z)(r,e);var t=U(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return(0,o.Z)(this,r),(e=t.call(this,"LercWorker","_decode",n,{strategy:"dedicated"})).schedule=n,e.ref=0,e}return(0,a.Z)(r,[{key:"decode",value:function(e,t,r){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},r):Promise.resolve(null)}},{key:"getTransferList",value:function(e){return[e.buffer]}},{key:"release",value:function(){var e=this;--this.ref<=0&&(N.forEach((function(t,r){t===e&&N.delete(r)})),this.destroy())}}]),r}(M),N=new Map;function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=N.get((0,v.Wg)(e));return t||((0,v.pC)(e)?(t=new B((function(t){return e.schedule(t)})),N.set(e,t)):(t=new B,N.set(null,t))),++t.ref,t}function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var i=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var F=y.Z.getLogger("esri.layers.ElevationLayer"),Q=function(e){(0,c.Z)(l,e);var t,i,s,u=z(l);function l(){var e;(0,o.Z)(this,l);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=u.call.apply(u,[this].concat(r))).copyright=null,e.heightModelInfo=null,e.path=null,e.opacity=1,e.operationalLayerType="ArcGISTiledElevationServiceLayer",e.sourceJSON=null,e.type="elevation",e.url=null,e.version=null,e._lercDecoder=q(),e}return(0,a.Z)(l,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?J({url:e},t):e}},{key:"destroy",value:function(){this._lercDecoder=(0,v.RY)(this._lercDecoder)}},{key:"minScale",get:function(){},set:function(e){this.constructed&&F.warn("".concat(this.declaredClass,".minScale support has been removed (since 4.5)"))}},{key:"maxScale",get:function(){},set:function(e){this.constructed&&F.warn("".concat(this.declaredClass,".maxScale support has been removed (since 4.5)"))}},{key:"readVersion",value:function(e,t){var r=t.currentVersion;return r||(r=9.3),r}},{key:"load",value:function(e){var t=this,r=(0,v.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(e){for(var t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new d.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(b.r9).then((function(){return t._fetchImageService(r)}))),Promise.resolve(this)}},{key:"fetchTile",value:function(e,t,r,n){var i=this,o=(0,v.pC)((n=n||{signal:null}).signal)?n.signal:n.signal=(new AbortController).signal,a={responseType:"array-buffer",signal:o},c={noDataValue:n.noDataValue,returnFileInfo:!0};return this.load().then((function(){return i._fetchTileAvailability(e,t,r,n)})).then((function(){return(0,p.default)(i.getTileUrl(e,t,r),a)})).then((function(e){return i._lercDecoder.decode(e.data,c,o)})).then((function(e){return{values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue}}))}},{key:"getTileUrl",value:function(e,t,r){var n=!this.tilemapCache&&this.supportsBlankTile,i=(0,g.B7)(J(J({},this.parsedUrl.query),{},{blankTile:!n&&null}));return"".concat(this.parsedUrl.path,"/tile/").concat(e,"/").concat(t,"/").concat(r).concat(i?"?"+i:"")}},{key:"queryElevation",value:(s=(0,n.Z)(h().mark((function e(t,n){var i,o;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(9351),r.e(317)]).then(r.bind(r,36273));case 2:return i=e.sent,o=i.ElevationQuery,(0,b.k_)(n),e.abrupt("return",(new o).query(this,t,n));case 6:case"end":return e.stop()}}),e,this)}))),function(e,t){return s.apply(this,arguments)})},{key:"createElevationSampler",value:(i=(0,n.Z)(h().mark((function e(t,n){var i,o;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(9351),r.e(317)]).then(r.bind(r,36273));case 2:return i=e.sent,o=i.ElevationQuery,(0,b.k_)(n),e.abrupt("return",(new o).createSampler(this,t,n));case 6:case"end":return e.stop()}}),e,this)}))),function(e,t){return i.apply(this,arguments)})},{key:"_fetchTileAvailability",value:function(e,t,r,n){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,r,n):Promise.resolve("unknown")}},{key:"_fetchImageService",value:(t=(0,n.Z)(h().mark((function e(t){var r,n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.sourceJSON){e.next=2;break}return e.abrupt("return",this.sourceJSON);case 2:return r={query:J({f:"json"},this.parsedUrl.query),responseType:"json",signal:t},e.next=5,(0,p.default)(this.parsedUrl.path,r);case 5:(n=e.sent).ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=n.data,this.read(n.data,{origin:"service",url:this.parsedUrl});case 7:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"hasOverriddenFetchTile",get:function(){return!this.fetchTile.__isDefault__}}]),l}((0,P.Z)((0,C.Y)((0,Z.q)((0,T.I)((0,m.R)(S.Z))))));(0,f._)([(0,_.Cb)({json:{read:{source:"copyrightText"}}})],Q.prototype,"copyright",void 0),(0,f._)([(0,_.Cb)({readOnly:!0,type:j.Z})],Q.prototype,"heightModelInfo",void 0),(0,f._)([(0,_.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],Q.prototype,"path",void 0),(0,f._)([(0,_.Cb)({type:["show","hide"]})],Q.prototype,"listMode",void 0),(0,f._)([(0,_.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],Q.prototype,"minScale",null),(0,f._)([(0,_.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],Q.prototype,"maxScale",null),(0,f._)([(0,_.Cb)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],Q.prototype,"opacity",void 0),(0,f._)([(0,_.Cb)({type:["ArcGISTiledElevationServiceLayer"]})],Q.prototype,"operationalLayerType",void 0),(0,f._)([(0,_.Cb)()],Q.prototype,"sourceJSON",void 0),(0,f._)([(0,_.Cb)({json:{read:!1},value:"elevation",readOnly:!0})],Q.prototype,"type",void 0),(0,f._)([(0,_.Cb)(x.HQ)],Q.prototype,"url",void 0),(0,f._)([(0,_.Cb)()],Q.prototype,"version",void 0),(0,f._)([(0,k.r)("version",["currentVersion"])],Q.prototype,"readVersion",null),(Q=(0,f._)([(0,O.j)("esri.layers.ElevationLayer")],Q)).prototype.fetchTile.__isDefault__=!0;var W=Q}}]);
//# sourceMappingURL=6004-435b5a9d7f5da2e326dd.js.map