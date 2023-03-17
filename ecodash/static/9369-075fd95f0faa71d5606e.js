"use strict";(self.webpackChunkenergy_and_water_dashboard=self.webpackChunkenergy_and_water_dashboard||[]).push([[9369],{39369:function(e,t,r){r.r(t),r.d(t,{default:function(){return Ot}});var n=r(4942),i=r(15861),o=r(15671),a=r(43144),u=r(11752),s=r(60136),l=r(6215),c=r(61120),y=r(87757),p=r.n(y),f=r(83195),d=r(20410),v=r(59823),h=r(33300),b=r(82703),g=r(45452),m=r(75571),w=r(10173),_=r(80347),Z=r(37566),S=r(98840),C=r(89636),O=r(64003),R=r(9634),k=r(30732),j=r(39356),x=r(65673),B=r(60125),I=(r(33428),r(98335),r(98021),r(26014),r(61137),r(57171),r(21577),r(93505),r(38552)),F=r(51916),L=r(16924),T=r(86523),P=r(85001),A=(r(43079),r(33682),r(17418)),q=r(59007),E=r(67124),M=r(70978),N=r(44946);function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(Ze){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var i=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var U=function(e){(0,s.Z)(r,e);var t=D(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).title="",n.id=-1,n.modelName=null,n.isEmpty=null,n.visible=!0,n.opacity=1,n}return(0,a.Z)(r,[{key:"readTitle",value:function(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}},{key:"readIdOnlyOnce",value:function(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0}}]),r}((0,M.I)(_.w));(0,f._)([(0,C.Cb)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],U.prototype,"title",void 0),(0,f._)([(0,R.r)("service","title",["alias","name"])],U.prototype,"readTitle",null),(0,f._)([(0,C.Cb)()],U.prototype,"layer",void 0),(0,f._)([(0,C.Cb)({type:O.z8,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],U.prototype,"id",void 0),(0,f._)([(0,R.r)("service","id")],U.prototype,"readIdOnlyOnce",null),(0,f._)([(0,C.Cb)((0,N.Lx)(String))],U.prototype,"modelName",void 0),(0,f._)([(0,C.Cb)((0,N.Lx)(Boolean))],U.prototype,"isEmpty",void 0),(0,f._)([(0,C.Cb)({type:Boolean,json:{name:"visibility",write:!0}})],U.prototype,"visible",void 0),(0,f._)([(0,C.Cb)({type:Number,json:{write:!0}})],U.prototype,"opacity",void 0);var Q=U=(0,f._)([(0,k.j)("esri.layers.buildingSublayers.BuildingSublayer")],U),V=r(60359),K=r(15003),J=r(8747),H=r(29182),G=r(95690),W=r(56100),z=r(97879),X=r(7449);function Y(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw o}}}}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ee(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(Ze){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var i=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var te=m.Z.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),re=(0,K.v)(),ne=function(e){(0,s.Z)(u,e);var t,r,n=ee(u);function u(e){var t;return(0,o.Z)(this,u),(t=n.call(this,e)).type="building-component",t.nodePages=null,t.materialDefinitions=null,t.textureSetDefinitions=null,t.geometryDefinitions=null,t.serviceUpdateTimeStamp=null,t.fields=null,t.associatedLayer=null,t.outFields=null,t.listMode="show",t.renderer=null,t.definitionExpression=null,t.popupEnabled=!0,t.popupTemplate=null,t.layerType="3d-object",t}return(0,a.Z)(u,[{key:"parsedUrl",get:function(){return this.layer?{path:"".concat(this.layer.parsedUrl.path,"/sublayers/").concat(this.id),query:this.layer.parsedUrl.query}:null}},{key:"fieldsIndex",get:function(){return new J.Z(this.fields)}},{key:"readAssociatedLayer",value:function(e,t){var r=this.layer.associatedFeatureServiceItem,n=t.associatedLayerID;return(0,w.pC)(r)&&"number"==typeof n?new E.default({portalItem:r,layerId:n}):null}},{key:"objectIdField",get:function(){if(null!=this.fields){var e,t=Y(this.fields);try{for(t.s();!(e=t.n()).done;){var r=e.value;if("oid"===r.type)return r.name}}catch(n){t.e(n)}finally{t.f()}}return null}},{key:"displayField",get:function(){return(0,w.pC)(this.associatedLayer)?this.associatedLayer.displayField:null}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"load",value:function(e){var t=this,r=(0,w.pC)(e)?e.signal:null,n=this._fetchService(r).then((function(){t.indexInfo=(0,H.T)(t.parsedUrl.path,t.rootNode,t.nodePages,t.apiKey,te,r)}));return this.addResolvingPromise(n),Promise.resolve(this)}},{key:"createPopupTemplate",value:function(e){return(0,z.eZ)(this,e)}},{key:"_fetchService",value:(r=(0,i.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,F.default)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t});case 2:r=e.sent.data,this.read(r,{origin:"service",url:this.parsedUrl});case 4:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFieldDomain",value:function(e,t){var r,n,i,o,a=null==(r=this.getFeatureType(null==t?void 0:t.feature))||null==(n=r.domains)?void 0:n[e];return a&&"inherited"!==a.type?a:null!=(i=null==(o=this.getField(e))?void 0:o.domain)?i:null}},{key:"getFeatureType",value:function(e){return e&&(0,w.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}},{key:"types",get:function(){return(0,w.pC)(this.associatedLayer)?this.associatedLayer.types:[]}},{key:"typeIdField",get:function(){return(0,w.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}},{key:"geometryType",get:function(){return"3d-object"===this.layerType?"mesh":"point"}},{key:"profile",get:function(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}},{key:"capabilities",get:function(){var e=(0,w.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:V.C,t=e.query,r=e.data;return{query:t,data:{supportsZ:r.supportsZ,supportsM:r.supportsM,isVersioned:r.isVersioned}}}},{key:"createQuery",value:function(){var e=new W.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}},{key:"queryExtent",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(n){return n.queryExtent(e||r.createQuery(),t)}))}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(n){return n.queryFeatureCount(e||r.createQuery(),t)}))}},{key:"queryFeatures",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(n){return n.queryFeatures(e||r.createQuery(),t)})).then((function(e){if(null!=e&&e.features){var t,n=Y(e.features);try{for(n.s();!(t=n.n()).done;){var i=t.value;i.layer=r.layer,i.sourceLayer=r}}catch(o){n.e(o)}finally{n.f()}}return e}))}},{key:"queryObjectIds",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(n){return n.queryObjectIds(e||r.createQuery(),t)}))}},{key:"getFieldUsageInfo",value:function(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:(0,w.pC)(this.associatedLayer)}}},{key:"_getAssociatedLayerForQuery",value:function(){var e=this.associatedLayer;return(0,w.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}},{key:"_loadAssociatedLayerForQuery",value:(t=(0,i.Z)(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(!(0,w.Wi)(this.associatedLayer)){e.next=4;break}throw new h.Z("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});case 4:return e.prev=4,e.next=7,this.associatedLayer.load();case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(4),new h.Z("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e.t0});case 12:return e.abrupt("return",this.associatedLayer);case 13:case"end":return e.stop()}}),e,this,[[4,9]])}))),function(){return t.apply(this,arguments)})}]),u}(T.Z.LoadableMixin((0,P.v)(Q)));(0,f._)([(0,C.Cb)({readOnly:!0})],ne.prototype,"parsedUrl",null),(0,f._)([(0,C.Cb)({type:G.U4,readOnly:!0})],ne.prototype,"nodePages",void 0),(0,f._)([(0,C.Cb)({type:[G.QI],readOnly:!0})],ne.prototype,"materialDefinitions",void 0),(0,f._)([(0,C.Cb)({type:[G.Yh],readOnly:!0})],ne.prototype,"textureSetDefinitions",void 0),(0,f._)([(0,C.Cb)({type:[G.H3],readOnly:!0})],ne.prototype,"geometryDefinitions",void 0),(0,f._)([(0,C.Cb)({readOnly:!0})],ne.prototype,"serviceUpdateTimeStamp",void 0),(0,f._)([(0,C.Cb)({readOnly:!0})],ne.prototype,"store",void 0),(0,f._)([(0,C.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],ne.prototype,"rootNode",void 0),(0,f._)([(0,C.Cb)({readOnly:!0})],ne.prototype,"attributeStorageInfo",void 0),(0,f._)([(0,C.Cb)(re.fields)],ne.prototype,"fields",void 0),(0,f._)([(0,C.Cb)({readOnly:!0})],ne.prototype,"fieldsIndex",null),(0,f._)([(0,C.Cb)({readOnly:!0,type:E.default})],ne.prototype,"associatedLayer",void 0),(0,f._)([(0,R.r)("service","associatedLayer",["associatedLayerID"])],ne.prototype,"readAssociatedLayer",null),(0,f._)([(0,C.Cb)(re.outFields)],ne.prototype,"outFields",void 0),(0,f._)([(0,C.Cb)({type:String,readOnly:!0})],ne.prototype,"objectIdField",null),(0,f._)([(0,C.Cb)({readOnly:!0,type:String,json:{read:!1}})],ne.prototype,"displayField",null),(0,f._)([(0,C.Cb)({readOnly:!0,type:String,aliasOf:"layer.apiKey"})],ne.prototype,"apiKey",void 0),(0,f._)([(0,C.Cb)({readOnly:!0,type:q.Z,aliasOf:"layer.fullExtent"})],ne.prototype,"fullExtent",void 0),(0,f._)([(0,C.Cb)({readOnly:!0,type:j.Z,aliasOf:"layer.spatialReference"})],ne.prototype,"spatialReference",void 0),(0,f._)([(0,C.Cb)({readOnly:!0,aliasOf:"layer.version"})],ne.prototype,"version",void 0),(0,f._)([(0,C.Cb)({readOnly:!0,type:X.Z,aliasOf:"layer.elevationInfo"})],ne.prototype,"elevationInfo",void 0),(0,f._)([(0,C.Cb)({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],ne.prototype,"minScale",void 0),(0,f._)([(0,C.Cb)({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],ne.prototype,"maxScale",void 0),(0,f._)([(0,C.Cb)({type:["hide","show"],json:{write:!0}})],ne.prototype,"listMode",void 0),(0,f._)([(0,C.Cb)({types:I.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],ne.prototype,"renderer",void 0),(0,f._)([(0,C.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ne.prototype,"definitionExpression",void 0),(0,f._)([(0,C.Cb)(N.C_)],ne.prototype,"popupEnabled",void 0),(0,f._)([(0,C.Cb)({type:B.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],ne.prototype,"popupTemplate",void 0),(0,f._)([(0,C.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],ne.prototype,"normalReferenceFrame",void 0),(0,f._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],ne.prototype,"defaultPopupTemplate",null),(0,f._)([(0,C.Cb)()],ne.prototype,"types",null),(0,f._)([(0,C.Cb)()],ne.prototype,"typeIdField",null),(0,f._)([(0,C.Cb)({json:{write:!1}}),(0,A.J)(new L.Xn({"3DObject":"3d-object",Point:"point"}))],ne.prototype,"layerType",void 0),(0,f._)([(0,C.Cb)()],ne.prototype,"geometryType",null),(0,f._)([(0,C.Cb)()],ne.prototype,"profile",null),(0,f._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],ne.prototype,"capabilities",null);var ie,oe=ne=(0,f._)([(0,k.j)("esri.layers.buildingSublayers.BuildingComponentSublayer")],ne),ae=r(86696);function ue(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(Ze){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var i=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var se={type:d.Z,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:le}}},read:!1}};function le(e,t,r){if(e&&Array.isArray(e))return new d.Z(e.map((function(e){var t=function(e){return"group"===e.layerType?ye:oe}(e);if(t){var n=new t;return n.read(e,r),n}r&&r.messages&&e&&r.messages.push(new ae.Z("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r}))})))}var ce,ye=ie=function(e){(0,s.Z)(r,e);var t=ue(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).type="building-group",n.listMode="show",n.sublayers=null,n}return(0,a.Z)(r,[{key:"loadAll",value:function(){var e=this;return(0,g.wF)(this,(function(t){return ie.forEachSublayer(e.sublayers,(function(e){"building-group"!==e.type&&t(e)}))}))}}]),r}(Q);(0,f._)([(0,C.Cb)({type:["hide","show","hide-children"],json:{write:!0}})],ye.prototype,"listMode",void 0),(0,f._)([(0,C.Cb)(se)],ye.prototype,"sublayers",void 0),ye=ie=(0,f._)([(0,k.j)("esri.layers.buildingSublayers.BuildingGroupSublayer")],ye),(ce=ye||(ye={})).sublayersProperty=se,ce.readSublayers=le,ce.forEachSublayer=function e(t,r){t.forEach((function(t){r(t),"building-group"===t.type&&e(t.sublayers,r)}))};var pe=ye,fe=r(25258),de=r(82682),ve=r(74915),he=r(3781),be=r(29780),ge=r(54197),me=r(54279),we=r(96989);function _e(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(Ze){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var i=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var Ze=function(e){(0,s.Z)(r,e);var t=_e(r);function r(){var e;return(0,o.Z)(this,r),(e=t.apply(this,arguments)).type=null,e}return(0,a.Z)(r)}(me.wq);(0,f._)([(0,C.Cb)({type:String,readOnly:!0,json:{write:!0}})],Ze.prototype,"type",void 0);var Se,Ce=Ze=(0,f._)([(0,k.j)("esri.layers.support.BuildingFilterAuthoringInfo")],Ze);function Oe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(Ze){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var i=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var Re=Se=function(e){(0,s.Z)(r,e);var t=Oe(r);function r(){var e;return(0,o.Z)(this,r),(e=t.apply(this,arguments)).filterType=null,e.filterValues=null,e}return(0,a.Z)(r,[{key:"clone",value:function(){return new Se({filterType:this.filterType,filterValues:(0,b.d9)(this.filterValues)})}}]),r}(me.wq);(0,f._)([(0,C.Cb)({type:String,json:{write:!0}})],Re.prototype,"filterType",void 0),(0,f._)([(0,C.Cb)({type:[String],json:{write:!0}})],Re.prototype,"filterValues",void 0);var ke,je=Re=Se=(0,f._)([(0,k.j)("esri.layers.support.BuildingFilterAuthoringInfoType")],Re);function xe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(Ze){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var i=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var Be=d.Z.ofType(je),Ie=ke=function(e){(0,s.Z)(r,e);var t=xe(r);function r(){return(0,o.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"clone",value:function(){return new ke({filterTypes:(0,b.d9)(this.filterTypes)})}}]),r}(me.wq);(0,f._)([(0,C.Cb)({type:Be,json:{write:!0}})],Ie.prototype,"filterTypes",void 0);var Fe,Le=Ie=ke=(0,f._)([(0,k.j)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],Ie);function Te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(Ze){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var i=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var Pe=d.Z.ofType(Le),Ae=Fe=function(e){(0,s.Z)(r,e);var t=Te(r);function r(){var e;return(0,o.Z)(this,r),(e=t.apply(this,arguments)).type="checkbox",e}return(0,a.Z)(r,[{key:"clone",value:function(){return new Fe({filterBlocks:(0,b.d9)(this.filterBlocks)})}}]),r}(Ce);(0,f._)([(0,C.Cb)({type:["checkbox"]})],Ae.prototype,"type",void 0),(0,f._)([(0,C.Cb)({type:Pe,json:{write:!0}})],Ae.prototype,"filterBlocks",void 0);var qe=Ae=Fe=(0,f._)([(0,k.j)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],Ae);function Ee(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(Ze){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var i=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var Me=function(e){(0,s.Z)(r,e);var t=Ee(r);function r(){return(0,o.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r)}(me.wq);(0,f._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],Me.prototype,"type",void 0);var Ne,De=Me=(0,f._)([(0,k.j)("esri.layers.support.BuildingFilterMode")],Me);function Ue(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(Ze){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var i=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var Qe=Ne=function(e){(0,s.Z)(r,e);var t=Ue(r);function r(){var e;return(0,o.Z)(this,r),(e=t.apply(this,arguments)).type="solid",e}return(0,a.Z)(r,[{key:"clone",value:function(){return new Ne}}]),r}(De);(0,f._)([(0,C.Cb)({type:["solid"],readOnly:!0,json:{write:!0}})],Qe.prototype,"type",void 0);var Ve,Ke=Qe=Ne=(0,f._)([(0,k.j)("esri.layers.support.BuildingFilterModeSolid")],Qe),Je=r(72833);function He(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(Ze){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var i=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var Ge=Ve=function(e){(0,s.Z)(r,e);var t=He(r);function r(){var e;return(0,o.Z)(this,r),(e=t.apply(this,arguments)).type="wire-frame",e.edges=null,e}return(0,a.Z)(r,[{key:"clone",value:function(){return new Ve({edges:(0,b.d9)(this.edges)})}}]),r}(De);(0,f._)([(0,A.J)({wireFrame:"wire-frame"})],Ge.prototype,"type",void 0),(0,f._)([(0,C.Cb)(Je.Z)],Ge.prototype,"edges",void 0);var We,ze=Ge=Ve=(0,f._)([(0,k.j)("esri.layers.support.BuildingFilterModeWireFrame")],Ge);function Xe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(Ze){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var i=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var Ye=We=function(e){(0,s.Z)(r,e);var t=Xe(r);function r(){var e;return(0,o.Z)(this,r),(e=t.apply(this,arguments)).type="x-ray",e}return(0,a.Z)(r,[{key:"clone",value:function(){return new We}}]),r}(De);(0,f._)([(0,C.Cb)({type:["x-ray"],readOnly:!0,json:{write:!0}})],Ye.prototype,"type",void 0);var $e,et=Ye=We=(0,f._)([(0,k.j)("esri.layers.support.BuildingFilterModeXRay")],Ye);function tt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(Ze){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var i=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var rt={nonNullable:!0,types:{key:"type",base:De,typeMap:{solid:Ke,"wire-frame":ze,"x-ray":et}},json:{read:function(e){switch(e&&e.type){case"solid":return Ke.fromJSON(e);case"wireFrame":return ze.fromJSON(e);case"x-ray":return et.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}},nt=$e=function(e){(0,s.Z)(r,e);var t=tt(r);function r(){var e;return(0,o.Z)(this,r),(e=t.apply(this,arguments)).filterExpression=null,e.filterMode=new Ke,e.title="",e}return(0,a.Z)(r,[{key:"clone",value:function(){return new $e({filterExpression:this.filterExpression,filterMode:(0,b.d9)(this.filterMode),title:this.title})}}]),r}(me.wq);(0,f._)([(0,C.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],nt.prototype,"filterExpression",void 0),(0,f._)([(0,C.Cb)(rt)],nt.prototype,"filterMode",void 0),(0,f._)([(0,C.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],nt.prototype,"title",void 0);var it,ot=nt=$e=(0,f._)([(0,k.j)("esri.layers.support.BuildingFilterBlock")],nt);function at(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(Ze){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var i=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var ut=d.Z.ofType(ot),st=it=function(e){(0,s.Z)(r,e);var t=at(r);function r(){var e;return(0,o.Z)(this,r),(e=t.apply(this,arguments)).description=null,e.filterBlocks=null,e.id=(0,we.D)(),e.name=null,e}return(0,a.Z)(r,[{key:"clone",value:function(){return new it({description:this.description,filterBlocks:(0,b.d9)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,b.d9)(this.filterAuthoringInfo)})}}]),r}(me.wq);(0,f._)([(0,C.Cb)({type:String,json:{write:!0}})],st.prototype,"description",void 0),(0,f._)([(0,C.Cb)({type:ut,json:{write:{enabled:!0,isRequired:!0}}})],st.prototype,"filterBlocks",void 0),(0,f._)([(0,C.Cb)({types:{key:"type",base:Ce,typeMap:{checkbox:qe}},json:{read:function(e){return"checkbox"===(e&&e.type)?qe.fromJSON(e):null},write:!0}})],st.prototype,"filterAuthoringInfo",void 0),(0,f._)([(0,C.Cb)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],st.prototype,"id",void 0),(0,f._)([(0,C.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],st.prototype,"name",void 0);var lt=st=it=(0,f._)([(0,k.j)("esri.layers.support.BuildingFilter")],st);function ct(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(Ze){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var i=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var yt=m.Z.getLogger("esri.layers.support.BuildingSummaryStatistics"),pt=function(e){(0,s.Z)(r,e);var t=ct(r);function r(){var e;return(0,o.Z)(this,r),(e=t.apply(this,arguments)).fieldName=null,e.modelName=null,e.label=null,e.min=null,e.max=null,e.mostFrequentValues=null,e.subLayerIds=null,e}return(0,a.Z)(r)}(me.wq);(0,f._)([(0,C.Cb)({type:String})],pt.prototype,"fieldName",void 0),(0,f._)([(0,C.Cb)({type:String})],pt.prototype,"modelName",void 0),(0,f._)([(0,C.Cb)({type:String})],pt.prototype,"label",void 0),(0,f._)([(0,C.Cb)({type:Number})],pt.prototype,"min",void 0),(0,f._)([(0,C.Cb)({type:Number})],pt.prototype,"max",void 0),(0,f._)([(0,C.Cb)({json:{read:function(e){return Array.isArray(e)&&(e.every((function(e){return"string"==typeof e}))||e.every((function(e){return"number"==typeof e})))?e.slice():null}}})],pt.prototype,"mostFrequentValues",void 0),(0,f._)([(0,C.Cb)({type:[Number]})],pt.prototype,"subLayerIds",void 0),pt=(0,f._)([(0,k.j)("esri.layers.support.BuildingFieldStatistics")],pt);var ft=function(e){(0,s.Z)(n,e);var t,r=ct(n);function n(){var e;return(0,o.Z)(this,n),(e=r.apply(this,arguments)).url=null,e}return(0,a.Z)(n,[{key:"fields",get:function(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(yt.error("building summary statistics are not loaded"),null)}},{key:"load",value:function(e){var t=(0,w.pC)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}},{key:"_fetchService",value:(t=(0,i.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,F.default)(this.url,{query:{f:"json"},responseType:"json",signal:t});case 2:r=e.sent.data,this.read(r,{origin:"service"});case 4:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),n}(T.Z.LoadableMixin((0,P.v)(me.wq)));(0,f._)([(0,C.Cb)({constructOnly:!0,type:String})],ft.prototype,"url",void 0),(0,f._)([(0,C.Cb)({readOnly:!0,type:[pt],json:{read:{source:"summary"}}})],ft.prototype,"fields",null);var dt=ft=(0,f._)([(0,k.j)("esri.layers.support.BuildingSummaryStatistics")],ft),vt=r(39314);function ht(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function bt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ht(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ht(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function gt(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return mt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return mt(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw o}}}}function mt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function wt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(Ze){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var i=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var _t=m.Z.getLogger("esri.layers.BuildingSceneLayer"),Zt=d.Z.ofType(lt),St=(0,b.d9)(pe.sublayersProperty);St.json.origins["web-scene"]={type:[oe],write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}},St.json.origins["portal-item"]={type:[oe],write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}};var Ct=function(e){(0,s.Z)(y,e);var t,r,n,l=wt(y);function y(e){var t;return(0,o.Z)(this,y),(t=l.call(this,e)).operationalLayerType="BuildingSceneLayer",t.allSublayers=new v.Z({getCollections:function(){return[t.sublayers]},getChildrenFunction:function(e){return"building-group"===e.type?e.sublayers:null}}),t.sublayers=null,t.sublayerOverrides=null,t.filters=new Zt,t.activeFilterId=null,t.summaryStatistics=null,t.outFields=null,t.type="building-scene",t}return(0,a.Z)(y,[{key:"normalizeCtorArgs",value:function(e){return"string"==typeof e?{url:e}:e}},{key:"destroy",value:function(){this.allSublayers.destroy()}},{key:"readSublayers",value:function(e,t,r){var n=this,i=pe.readSublayers(e,t,r);return pe.forEachSublayer(i,(function(e){return e.layer=n})),this.sublayerOverrides&&(this.applySublayerOverrides(i,this.sublayerOverrides),this.sublayerOverrides=null),i}},{key:"applySublayerOverrides",value:function(e,t){var r=t.overrides,n=t.context;pe.forEachSublayer(e,(function(e){return e.read(r.get(e.id),n)}))}},{key:"readSublayerOverrides",value:function(e,t){var r,n=new Map,i=gt(e);try{for(i.s();!(r=i.n()).done;){var o=r.value;null!=o&&"object"==typeof o&&"number"==typeof o.id?n.set(o.id,o):t.messages.push(new h.Z("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:o}))}}catch(a){i.e(a)}finally{i.f()}return{overrides:n,context:t}}},{key:"writeSublayerOverrides",value:function(e,t,r){var n=[];pe.forEachSublayer(this.sublayers,(function(e){var t=e.write({},r);Object.keys(t).length>1&&n.push(t)})),n.length>0&&(t.sublayers=n)}},{key:"writeUnappliedOverrides",value:function(e,t){t.sublayers=[],e.overrides.forEach((function(e){t.sublayers.push((0,b.d9)(e))}))}},{key:"write",value:function(e,t){return e=(0,u.Z)((0,c.Z)(y.prototype),"write",this).call(this,e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}},{key:"read",value:function(e,t){if((0,u.Z)((0,c.Z)(y.prototype),"read",this).call(this,e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){var r=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,r):this.sublayerOverrides=r}}},{key:"readSummaryStatistics",value:function(e,t){if("string"==typeof t.statisticsHRef){var r=(0,S.v_)(this.parsedUrl.path,t.statisticsHRef);return new dt({url:r})}return null}},{key:"elevationInfo",set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()}},{key:"load",value:function(e){var t=this,r=(0,w.pC)(e)?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Z.r9).then((function(){return t._fetchService(r)})).then((function(){return t._fetchAssociatedFeatureService(r)}));return this.addResolvingPromise(n),Promise.resolve(this)}},{key:"loadAll",value:function(){var e=this;return(0,g.GZ)(this,(function(t){pe.forEachSublayer(e.sublayers,(function(e){"building-group"!==e.type&&t(e)})),e.summaryStatistics&&t(e.summaryStatistics)}))}},{key:"saveAs",value:(n=(0,i.Z)(p().mark((function e(t,r){var n=this;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(1,bt(bt({},r),{},{getTypeKeywords:function(){return n._getTypeKeywords()},portalItemLayerType:"building-scene"}),t));case 1:case"end":return e.stop()}}),e,this)}))),function(e,t){return n.apply(this,arguments)})},{key:"save",value:(r=(0,i.Z)(p().mark((function e(){var t,r=this;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={getTypeKeywords:function(){return r._getTypeKeywords()},portalItemLayerType:"building-scene"},e.abrupt("return",this._debouncedSaveOperations(0,t));case 2:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"validateLayer",value:function(e){if(!e.layerType||"Building"!==e.layerType)throw new h.Z("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}},{key:"_getTypeKeywords",value:function(){return["Building"]}},{key:"_validateElevationInfo",value:function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&_t.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&_t.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}},{key:"_fetchAssociatedFeatureService",value:(t=(0,i.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new vt.W(this.parsedUrl,this.portalItem,this.apiKey,t),e.prev=1,e.next=4,r.fetchPortalItem();case 4:this.associatedFeatureServiceItem=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),_t.warn("Associated feature service item could not be loaded",e.t0);case 10:case"end":return e.stop()}}),e,this,[[1,7]])}))),function(e){return t.apply(this,arguments)})}]),y}((0,ge.V)((0,de.Y)((0,ve.q)((0,he.I)((0,be.M)((0,_.R)((0,fe.V)(x.Z))))))));(0,f._)([(0,C.Cb)({type:["BuildingSceneLayer"]})],Ct.prototype,"operationalLayerType",void 0),(0,f._)([(0,C.Cb)({readOnly:!0})],Ct.prototype,"allSublayers",void 0),(0,f._)([(0,C.Cb)(St)],Ct.prototype,"sublayers",void 0),(0,f._)([(0,R.r)("service","sublayers")],Ct.prototype,"readSublayers",null),(0,f._)([(0,C.Cb)({type:Zt,nonNullable:!0,json:{write:!0}})],Ct.prototype,"filters",void 0),(0,f._)([(0,C.Cb)({type:String,json:{write:!0}})],Ct.prototype,"activeFilterId",void 0),(0,f._)([(0,C.Cb)({readOnly:!0,type:dt})],Ct.prototype,"summaryStatistics",void 0),(0,f._)([(0,R.r)("summaryStatistics",["statisticsHRef"])],Ct.prototype,"readSummaryStatistics",null),(0,f._)([(0,C.Cb)({type:[String],json:{read:!1}})],Ct.prototype,"outFields",void 0),(0,f._)([(0,C.Cb)(N.vg)],Ct.prototype,"fullExtent",void 0),(0,f._)([(0,C.Cb)({type:["show","hide","hide-children"]})],Ct.prototype,"listMode",void 0),(0,f._)([(0,C.Cb)((0,N.Lx)(j.Z))],Ct.prototype,"spatialReference",void 0),(0,f._)([(0,C.Cb)(N.PV)],Ct.prototype,"elevationInfo",null),(0,f._)([(0,C.Cb)({json:{read:!1},readOnly:!0})],Ct.prototype,"type",void 0),(0,f._)([(0,C.Cb)()],Ct.prototype,"associatedFeatureServiceItem",void 0);var Ot=Ct=(0,f._)([(0,k.j)("esri.layers.BuildingSceneLayer")],Ct)}}]);
//# sourceMappingURL=9369-075fd95f0faa71d5606e.js.map