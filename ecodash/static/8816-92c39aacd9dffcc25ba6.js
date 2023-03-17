"use strict";(self.webpackChunkenergy_and_water_dashboard=self.webpackChunkenergy_and_water_dashboard||[]).push([[8816],{68816:function(e,t,r){r.r(t),r.d(t,{default:function(){return T}});var i=r(15861),n=r(15671),s=r(43144),a=r(87757),o=r.n(a),u=r(33300),l=r(75571),h=r(10173),c=r(22983),f=r(97903),d=r(28168),y=r(78220),p=r(88216),v=r(56100),_=r(8250),m=l.Z.getLogger("esri.views.2d.layers.features.support.whereUtils"),w={getAttribute:function(e,t){return e.field(t)}};function b(e,t){return g.apply(this,arguments)}function g(){return g=(0,i.Z)(o().mark((function e(t,i){var n,s,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(9351).then(r.bind(r,27274));case 2:return n=e.sent,e.prev=3,(s=n.WhereClause.create(t,i)).isStandardized||(a=new u.Z("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",s),m.error(a)),e.abrupt("return",(function(e){var t=e.readArcadeFeature();return s.testFeature(t,w)}));case 9:return e.prev=9,e.t0=e.catch(3),e.abrupt("return",(m.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",t),function(e){return!0}));case 12:case"end":return e.stop()}}),e,null,[[3,9]])}))),g.apply(this,arguments)}function I(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,o=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){o=!0,s=e},f:function(){try{a||null==r.return||r.return()}finally{if(o)throw s}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var x=l.Z.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),T=function(){function e(t){(0,n.Z)(this,e),this._geometryBounds=(0,c.Ue)(),this._idToVisibility=new Map,this._serviceInfo=t}var t,r,a;return(0,s.Z)(e,[{key:"hash",get:function(){return this._hash}},{key:"check",value:function(e){return this._applyFilter(e)}},{key:"clear",value:function(){var e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}},{key:"invalidate",value:function(){var e=this;this._idToVisibility.forEach((function(t,r){e._idToVisibility.set(r,0)}))}},{key:"setKnownIds",value:function(e){var t,r=I(e);try{for(r.s();!(t=r.n()).done;){var i=t.value;this._idToVisibility.set(i,1)}}catch(n){r.e(n)}finally{r.f()}}},{key:"setTrue",value:function(e){var t=this,r=[],i=[],n=new Set(e);return this._idToVisibility.forEach((function(e,s){var a=!!(1&t._idToVisibility.get(s)),o=n.has(s);!a&&o?r.push(s):a&&!o&&i.push(s),t._idToVisibility.set(s,o?3:0)})),{show:r,hide:i}}},{key:"createQuery",value:function(){var e=this.geometry,t=this.spatialRel,r=this.where,i=this.timeExtent,n=this.objectIds;return v.Z.fromJSON({geometry:e,spatialRel:t,where:r,timeExtent:i,objectIds:n})}},{key:"update",value:(a=(0,i.Z)(o().mark((function e(t,r){var i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._hash=JSON.stringify(t),e.next=3,(0,p.j6)(t,null,r);case 3:return i=e.sent,e.next=6,Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)]);case 6:case"end":return e.stop()}}),e,this)}))),function(e,t){return a.apply(this,arguments)})},{key:"_setAttributeFilter",value:(r=(0,i.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.where){e.next=2;break}return e.abrupt("return",(this._clause=null,void(this.where=null)));case 2:return e.next=4,b(t.where,this._serviceInfo.fieldsIndex);case 4:this._clause=e.sent,this.where=t.where;case 6:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"_setIdFilter",value:function(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}},{key:"_setGeometryFilter",value:(t=(0,i.Z)(o().mark((function e(t){var r,i,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.geometry){e.next=2;break}return e.abrupt("return",(this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null)));case 2:return r=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",e.next=6,(0,d.cW)(i,r,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);case 6:n=e.sent,(0,f.$P)(this._geometryBounds,r),this._spatialQueryOperator=n,this.geometry=r,this.spatialRel=i;case 8:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"_setTimeFilter",value:function(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=(0,y.y)(this._serviceInfo.timeInfo,e.timeExtent,_.k);else{var t=new u.Z("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);x.error(t)}}},{key:"_applyFilter",value:function(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}},{key:"_filterByExpression",value:function(e){return!this.where||this._clause(e)}},{key:"_filterById",value:function(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}},{key:"_filterByGeometry",value:function(e){if(!this.geometry)return!0;var t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}},{key:"_filterByTime",value:function(e){return!(0,h.pC)(this._timeOperator)||this._timeOperator(e)}},{key:"_resetAllHiddenIds",value:function(){var e=this,t=[];return this._idToVisibility.forEach((function(r,i){1&r||(e._idToVisibility.set(i,1),t.push(i))})),t}}]),e}()}}]);
//# sourceMappingURL=8816-92c39aacd9dffcc25ba6.js.map