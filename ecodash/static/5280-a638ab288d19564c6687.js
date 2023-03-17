"use strict";(self.webpackChunkenergy_and_water_dashboard=self.webpackChunkenergy_and_water_dashboard||[]).push([[5280],{45280:function(e,t,r){r.r(t),r.d(t,{default:function(){return z}});var n=r(15861),o=r(4942),i=r(15671),l=r(43144),s=r(60136),a=r(6215),u=r(61120),c=r(87757),y=r.n(c),p=r(83195),f=r(59965),d=r(51916),h=(r(80240),r(10173)),v=r(80347),b=r(37566),g=r(98840),m=r(89636),S=(r(43079),r(33682),r(64003),r(9634)),C=r(30732),_=r(59007),k=r(50810),w=r(65673),O=r(83350),Z=r(74915),j=r(3781),P=r(15665),R=r(29780),x=r(44946),G=r(24291),E=r(47696),D=r(60471),F=r(12245),M=r(81672);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var A=["atom","xml"],q={base:G.Z,key:"type",typeMap:{"simple-line":E.Z},errorContext:"symbol"},B={base:G.Z,key:"type",typeMap:{"picture-marker":D.Z,"simple-marker":F.Z},errorContext:"symbol"},I={base:G.Z,key:"type",typeMap:{"simple-fill":M.Z},errorContext:"symbol"},Q=function(e){(0,s.Z)(u,e);var t,r,a=T(u);function u(){var e;(0,i.Z)(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=a.call.apply(a,[this].concat(r))).description=null,e.fullExtent=null,e.legendEnabled=!0,e.lineSymbol=null,e.pointSymbol=null,e.polygonSymbol=null,e.operationalLayerType="GeoRSS",e.url=null,e.type="geo-rss",e}return(0,l.Z)(u,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({url:e},t):e}},{key:"readFeatureCollections",value:function(e,t){return t.featureCollection.layers.forEach((function(e){var t,r=e.layerDefinition.drawingInfo.renderer.symbol;r&&"esriSFS"===r.type&&null!=(t=r.outline)&&t.style.includes("esriSFS")&&(r.outline.style="esriSLSSolid")})),t.featureCollection.layers}},{key:"hasPoints",get:function(){return this._hasGeometry("esriGeometryPoint")}},{key:"hasPolylines",get:function(){return this._hasGeometry("esriGeometryPolyline")}},{key:"hasPolygons",get:function(){return this._hasGeometry("esriGeometryPolygon")}},{key:"title",get:function(){var e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,g.vt)(this.url,A)||"GeoRSS":e||""},set:function(e){this._set("title",e)}},{key:"load",value:function(e){var t=this,r=(0,h.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(b.r9).then((function(){return t._fetchService(r)})).then((function(e){t.read(e,{origin:"service"})}))),Promise.resolve(this)}},{key:"hasDataChanged",value:(r=(0,n.Z)(y().mark((function e(){var t;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._fetchService();case 2:return t=e.sent,e.abrupt("return",(this.read(t,{origin:"service",ignoreDefaults:!0}),!0));case 4:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"_fetchService",value:(t=(0,n.Z)(y().mark((function e(t){var r,n,o,i;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.spatialReference,e.next=3,(0,d.default)(f.Z.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:(0,k.oR)(n)?void 0:null!=(r=n.wkid)?r:JSON.stringify(n)},signal:t});case 3:return o=e.sent,i=o.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"_hasGeometry",value:function(e){var t,r;return null!=(t=null==(r=this.featureCollections)?void 0:r.some((function(t){var r,n;return(null==(r=t.featureSet)?void 0:r.geometryType)===e&&(null==(n=t.featureSet.features)?void 0:n.length)>0})))&&t}}]),u}((0,O.h)((0,P.Q)((0,Z.q)((0,j.I)((0,R.M)((0,v.R)(w.Z)))))));(0,p._)([(0,m.Cb)()],Q.prototype,"description",void 0),(0,p._)([(0,m.Cb)()],Q.prototype,"featureCollections",void 0),(0,p._)([(0,S.r)("service","featureCollections",["featureCollection.layers"])],Q.prototype,"readFeatureCollections",null),(0,p._)([(0,m.Cb)({type:_.Z,json:{name:"lookAtExtent"}})],Q.prototype,"fullExtent",void 0),(0,p._)([(0,m.Cb)(x.id)],Q.prototype,"id",void 0),(0,p._)([(0,m.Cb)(x.rn)],Q.prototype,"legendEnabled",void 0),(0,p._)([(0,m.Cb)({types:q,json:{write:!0}})],Q.prototype,"lineSymbol",void 0),(0,p._)([(0,m.Cb)({type:["show","hide"]})],Q.prototype,"listMode",void 0),(0,p._)([(0,m.Cb)({types:B,json:{write:!0}})],Q.prototype,"pointSymbol",void 0),(0,p._)([(0,m.Cb)({types:I,json:{write:!0}})],Q.prototype,"polygonSymbol",void 0),(0,p._)([(0,m.Cb)({type:["GeoRSS"]})],Q.prototype,"operationalLayerType",void 0),(0,p._)([(0,m.Cb)(x.HQ)],Q.prototype,"url",void 0),(0,p._)([(0,m.Cb)({json:{origins:{service:{read:{source:"name",reader:function(e){return e||void 0}}}}}})],Q.prototype,"title",null),(0,p._)([(0,m.Cb)({readOnly:!0,json:{read:!1},value:"geo-rss"})],Q.prototype,"type",void 0);var z=Q=(0,p._)([(0,C.j)("esri.layers.GeoRSSLayer")],Q)}}]);
//# sourceMappingURL=5280-a638ab288d19564c6687.js.map