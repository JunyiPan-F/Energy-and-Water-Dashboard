"use strict";(self.webpackChunkenergy_and_water_dashboard=self.webpackChunkenergy_and_water_dashboard||[]).push([[4422],{64422:function(e,t,r){r.r(t),r.d(t,{default:function(){return ye}});var n=r(15861),i=r(15671),o=r(43144),a=r(97326),s=r(60136),u=r(6215),l=r(61120),p=r(87757),c=r.n(p),f=r(83195),y=(r(58168),r(60125)),d=(r(33428),r(98335),r(98021),r(26014),r(61137),r(57171),r(21577),r(93505),r(38552)),v=r(10173),m=r(80347),h=r(34582),b=r(98840),g=r(89636),w=(r(43079),r(33682)),_=r(64003),O=r(30732),C=r(61979),x=r(88326),k=r(65673),F=r(29439),S=r(4942),j=r(33300),I=r(80896),R=r(86523),Z=r(37566),P=r(16602),q=r(47e3),T=r(36171),N=r(79228),U=r(59007);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,S.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,u.Z)(this,r)}}var Y=function(e){(0,s.Z)(h,e);var t,r,a,u,l,p,f,y,d,m=D(h);function h(){var e;return(0,i.Z)(this,h),(e=m.apply(this,arguments)).capabilities=(0,q.MS)(!1,!1),e.type="wfs",e.refresh=(0,Z.Ds)(function(){var t=(0,n.Z)(c().mark((function t(r){var n,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.load();case 2:return t.next=4,e._connection.invoke("refresh",r);case 4:return n=t.sent,i=n.extent,t.abrupt("return",(e.sourceJSON.extent=i,{dataChanged:!0,updates:{extent:e.sourceJSON.extent}}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e}return(0,o.Z)(h,[{key:"load",value:function(e){var t,r=null!=(t=(0,v.pC)(e)&&e.signal)?t:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}},{key:"destroy",value:function(){var e;null==(e=this._connection)||e.close(),this._connection=null}},{key:"openPorts",value:(d=(0,n.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this._connection.openPorts());case 3:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)})},{key:"queryFeatures",value:(y=(0,n.Z)(c().mark((function e(t){var r,n,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.next=3,this.load(r);case 3:return e.next=5,this._connection.invoke("queryFeatures",t?t.toJSON():null,r);case 5:return n=e.sent,e.abrupt("return",N.default.fromJSON(n));case 7:case"end":return e.stop()}}),e,this)}))),function(e){return y.apply(this,arguments)})},{key:"queryFeaturesJSON",value:(f=(0,n.Z)(c().mark((function e(t){var r,n=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryFeatures",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)}))),function(e){return f.apply(this,arguments)})},{key:"queryFeatureCount",value:(p=(0,n.Z)(c().mark((function e(t){var r,n=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryFeatureCount",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)}))),function(e){return p.apply(this,arguments)})},{key:"queryObjectIds",value:(l=(0,n.Z)(c().mark((function e(t){var r,n=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryObjectIds",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"queryExtent",value:(u=(0,n.Z)(c().mark((function e(t){var r,n,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.next=3,this.load(r);case 3:return e.next=5,this._connection.invoke("queryExtent",t?t.toJSON():null,r);case 5:return n=e.sent,e.abrupt("return",{count:n.count,extent:U.Z.fromJSON(n.extent)});case 7:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"querySnapping",value:(a=(0,n.Z)(c().mark((function e(t){var r,n=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("querySnapping",t,r));case 4:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"_createLoadOptions",value:(r=(0,n.Z)(c().mark((function e(t){var r,n,i,o,a,s,u,l,p,f,y,d,m,h=this;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.layer,n=r.url,i=r.customParameters,o=r.name,a=r.namespaceUri,s=r.spatialReference,u=r.fields,l=r.geometryType,p=r.swapXY,n){e.next=3;break}throw new j.Z("wfs-layer:missing-url","WFSLayer must be created with a url");case 3:if(e.t0=this.wfsCapabilities,e.t0){e.next=8;break}return e.next=7,(0,T.FU)(n,J({customParameters:i},t));case 7:this.wfsCapabilities=e.sent;case 8:if(f=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some((function(e){return null==h.layer[e]})),!f){e.next=15;break}return e.next=12,(0,T.be)(this.wfsCapabilities,o,a,{spatialReference:s,customParameters:i,signal:null==t?void 0:t.signal});case 12:e.t1=e.sent,e.next=16;break;case 15:e.t1=J(J({},(0,T.eB)(u)),{},{geometryType:l,name:o,namespaceUri:a,spatialReference:s,swapXY:p});case 16:return y=e.t1,d=(0,v.Wg)((0,T.ft)(this.wfsCapabilities.readFeatureTypes(),y.name,y.namespaceUri)),m=x.Mk.toJSON(y.geometryType),e.abrupt("return",{customParameters:i,featureType:d,fields:y.fields.map((function(e){return e.toJSON()})),geometryField:y.geometryField,geometryType:m,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:y.objectIdField,spatialReference:y.spatialReference.toJSON(),swapXY:y.swapXY});case 20:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"_startWorker",value:(t=(0,n.Z)(c().mark((function e(t){var r,n,i,o,a,s,u,l,p;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Z.as)([this._createLoadOptions(t),(0,P.bA)("WFSSourceWorker",J(J({},t),{},{strategy:(0,w.Z)("feature-layers-workers")?"dedicated":"local"}))]);case 2:if(r=e.sent,n=(0,F.Z)(r,2),i=n[0],o=n[1],a=i.error||o.error||null,s=o.value||null,!a){e.next=10;break}throw s&&s.close(),a;case 10:return u=i.value,this._connection=o.value,e.next=14,this._connection.invoke("load",u,t);case 14:l=e.sent,p=l.extent,this.sourceJSON={extent:p,fields:u.fields,geometryType:u.geometryType,objectIdField:u.objectIdField,geometryField:u.geometryField,drawingInfo:(0,q.bU)(u.geometryType),name:u.featureType.title,wfsInfo:{name:u.featureType.name,featureUrl:u.getFeatureUrl,maxFeatures:3e3,swapXY:u.swapXY,supportedSpatialReferences:u.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:u.featureType.namespaceUri}};case 17:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),h}((0,I.p)(R.Z));(0,f._)([(0,g.Cb)()],Y.prototype,"capabilities",void 0),(0,f._)([(0,g.Cb)({constructOnly:!0})],Y.prototype,"layer",void 0),(0,f._)([(0,g.Cb)()],Y.prototype,"sourceJSON",void 0),(0,f._)([(0,g.Cb)()],Y.prototype,"type",void 0),(0,f._)([(0,g.Cb)()],Y.prototype,"wfsCapabilities",void 0);var W,X=Y=(0,f._)([(0,O.j)("esri.layers.graphics.sources.WFSSource")],Y),Q=r(83350),M=r(39987),A=r(53797),L=r(74915),B=r(92894),V=r(3781),z=r(15665),G=r(29780),H=r(38313),$=r(44946),K=r(20631),ee=r(35166),te=r(15003),re=r(43749),ne=r(22462),ie=r(27909),oe=r(56100),ae=r(97879),se=r(39356);function ue(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return le(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return le(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function pe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,u.Z)(this,r)}}var ce=(0,te.v)(),fe=W=function(e){(0,s.Z)(u,e);var t,r=pe(u);function u(e){var t;return(0,i.Z)(this,u),(t=r.call(this,e)).capabilities=null,t.copyright=null,t.customParameters=null,t.definitionExpression=null,t.displayField=null,t.elevationInfo=null,t.featureReduction=null,t.featureUrl=void 0,t.fields=null,t.fieldsIndex=null,t.fullExtent=null,t.geometryType=null,t.labelsVisible=!0,t.labelingInfo=null,t.legendEnabled=!0,t.objectIdField=null,t.operationalLayerType="WFS",t.maxFeatures=3e3,t.mode=0,t.name=null,t.namespaceUri=null,t.outFields=null,t.popupEnabled=!0,t.popupTemplate=null,t.screenSizePerspectiveEnabled=!0,t.source=new X({layer:(0,a.Z)(t)}),t.spatialReference=se.Z.WGS84,t.spatialReferences=[4326],t.swapXY=void 0,t.title="WFS",t.type="wfs",t.url=null,t.version=void 0,t}return(0,o.Z)(u,[{key:"destroy",value:function(){var e;null==(e=this.source)||e.destroy()}},{key:"load",value:function(e){var t=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((function(){return t.source.load(e)})).then((function(){t.read(t.source.sourceJSON,{origin:"service",url:t.parsedUrl}),t.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),(0,re.YN)(t.renderer,t.fieldsIndex),(0,re.UF)(t.timeInfo,t.fieldsIndex)}))),Promise.resolve(this)}},{key:"createQueryVersion",get:function(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"writeFields",value:function(e,t,r){var n=e.filter((function(e){return e.name!==T.M8}));this.geometryField&&n.unshift(new ee.Z({name:this.geometryField,alias:this.geometryField,type:"geometry"})),(0,h.RB)(r,n.map((function(e){return e.toJSON()})),t)}},{key:"parsedUrl",get:function(){return this.url?(0,b.mN)(this.url):null}},{key:"renderer",set:function(e){(0,re.YN)(e,this.fieldsIndex),this._set("renderer",e)}},{key:"createPopupTemplate",value:function(e){return(0,ae.eZ)(this,e)}},{key:"createQuery",value:function(){var e=new oe.Z;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";var t=this.timeOffset,r=this.timeExtent;return e.timeExtent=null!=t&&null!=r?r.offset(-t.value,t.unit):r||null,e}},{key:"getFieldDomain",value:function(e,t){var r;return null==(r=this.getField(e))?void 0:r.domain}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"queryFeatures",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatures(oe.Z.from(e)||r.createQuery(),t)})).then((function(e){if(null!=e&&e.features){var t,n=ue(e.features);try{for(n.s();!(t=n.n()).done;){var i=t.value;i.layer=i.sourceLayer=r}}catch(o){n.e(o)}finally{n.f()}}return e}))}},{key:"queryObjectIds",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryObjectIds(oe.Z.from(e)||r.createQuery(),t)}))}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatureCount(oe.Z.from(e)||r.createQuery(),t)}))}},{key:"queryExtent",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryExtent(oe.Z.from(e)||r.createQuery(),t)}))}},{key:"hasDataChanged",value:(t=(0,n.Z)(c().mark((function e(){var t,r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.source.refresh(this.customParameters);case 3:return t=e.sent,r=t.dataChanged,n=t.updates,e.abrupt("return",((0,v.pC)(n)&&this.read(n,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),r));case 9:e.prev=9,e.t0=e.catch(0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,this,[[0,9]])}))),function(){return t.apply(this,arguments)})}],[{key:"fromWFSLayerInfo",value:function(e){var t=e.customParameters,r=e.fields,n=e.geometryField,i=e.geometryType,o=e.name,a=e.namespaceUri,s=e.objectIdField,u=e.spatialReference,l=e.swapXY,p=e.url,c=e.wfsCapabilities;return new W({customParameters:t,fields:r,geometryField:n,geometryType:i,name:o,namespaceUri:a,objectIdField:s,spatialReference:u,swapXY:l,url:p,wfsCapabilities:c})}}]),u}((0,B.c)((0,M.N)((0,A.b)((0,Q.h)((0,H.n)((0,z.Q)((0,G.M)((0,L.q)((0,V.I)((0,m.R)(k.Z)))))))))));(0,f._)([(0,g.Cb)({readOnly:!0,aliasOf:"source.capabilities"})],fe.prototype,"capabilities",void 0),(0,f._)([(0,g.Cb)({type:String})],fe.prototype,"copyright",void 0),(0,f._)([(0,g.Cb)({readOnly:!0})],fe.prototype,"createQueryVersion",null),(0,f._)([(0,g.Cb)({json:{name:"wfsInfo.customParameters",write:{ignoreOrigin:!0}}})],fe.prototype,"customParameters",void 0),(0,f._)([(0,g.Cb)({readOnly:!0})],fe.prototype,"defaultPopupTemplate",null),(0,f._)([(0,g.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],fe.prototype,"definitionExpression",void 0),(0,f._)([(0,g.Cb)({type:String})],fe.prototype,"displayField",void 0),(0,f._)([(0,g.Cb)($.PV)],fe.prototype,"elevationInfo",void 0),(0,f._)([(0,g.Cb)(K.d)],fe.prototype,"featureReduction",void 0),(0,f._)([(0,g.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],fe.prototype,"featureUrl",void 0),(0,f._)([(0,g.Cb)({type:[ee.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],fe.prototype,"fields",void 0),(0,f._)([(0,C.c)("fields")],fe.prototype,"writeFields",null),(0,f._)([(0,g.Cb)(ce.fieldsIndex)],fe.prototype,"fieldsIndex",void 0),(0,f._)([(0,g.Cb)({type:U.Z,json:{name:"extent"}})],fe.prototype,"fullExtent",void 0),(0,f._)([(0,g.Cb)()],fe.prototype,"geometryField",void 0),(0,f._)([(0,g.Cb)({type:String,json:{read:{source:"layerDefinition.geometryType",reader:x.Mk.read},write:{target:"layerDefinition.geometryType",writer:x.Mk.write,ignoreOrigin:!0},origins:{service:{read:x.Mk.read}}}})],fe.prototype,"geometryType",void 0),(0,f._)([(0,g.Cb)({type:String})],fe.prototype,"id",void 0),(0,f._)([(0,g.Cb)($.iR)],fe.prototype,"labelsVisible",void 0),(0,f._)([(0,g.Cb)({type:[ne.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ie.r},write:!0}})],fe.prototype,"labelingInfo",void 0),(0,f._)([(0,g.Cb)($.rn)],fe.prototype,"legendEnabled",void 0),(0,f._)([(0,g.Cb)({type:["show","hide"]})],fe.prototype,"listMode",void 0),(0,f._)([(0,g.Cb)({type:String})],fe.prototype,"objectIdField",void 0),(0,f._)([(0,g.Cb)({type:["WFS"]})],fe.prototype,"operationalLayerType",void 0),(0,f._)([(0,g.Cb)({type:_.z8,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],fe.prototype,"maxFeatures",void 0),(0,f._)([(0,g.Cb)({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],fe.prototype,"mode",void 0),(0,f._)([(0,g.Cb)({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],fe.prototype,"name",void 0),(0,f._)([(0,g.Cb)({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],fe.prototype,"namespaceUri",void 0),(0,f._)([(0,g.Cb)($.bT)],fe.prototype,"opacity",void 0),(0,f._)([(0,g.Cb)(ce.outFields)],fe.prototype,"outFields",void 0),(0,f._)([(0,g.Cb)({readOnly:!0})],fe.prototype,"parsedUrl",null),(0,f._)([(0,g.Cb)($.C_)],fe.prototype,"popupEnabled",void 0),(0,f._)([(0,g.Cb)({type:y.Z,json:{name:"popupInfo",write:!0}})],fe.prototype,"popupTemplate",void 0),(0,f._)([(0,g.Cb)({types:d.A,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:d.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],fe.prototype,"renderer",null),(0,f._)([(0,g.Cb)($.YI)],fe.prototype,"screenSizePerspectiveEnabled",void 0),(0,f._)([(0,g.Cb)({readOnly:!0})],fe.prototype,"source",void 0),(0,f._)([(0,g.Cb)({type:se.Z,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],fe.prototype,"spatialReference",void 0),(0,f._)([(0,g.Cb)({readOnly:!0,type:[_.z8],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],fe.prototype,"spatialReferences",void 0),(0,f._)([(0,g.Cb)({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],fe.prototype,"swapXY",void 0),(0,f._)([(0,g.Cb)({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],fe.prototype,"title",void 0),(0,f._)([(0,g.Cb)({json:{read:!1},readOnly:!0})],fe.prototype,"type",void 0),(0,f._)([(0,g.Cb)($.HQ)],fe.prototype,"url",void 0),(0,f._)([(0,g.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],fe.prototype,"version",void 0),(0,f._)([(0,g.Cb)({aliasOf:"source.wfsCapabilities"})],fe.prototype,"wfsCapabilities",void 0);var ye=fe=W=(0,f._)([(0,O.j)("esri.layers.WFSLayer")],fe)}}]);
//# sourceMappingURL=4422-aa0954fbe9b56eb3dd21.js.map