"use strict";(self.webpackChunkenergy_and_water_dashboard=self.webpackChunkenergy_and_water_dashboard||[]).push([[989],{989:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r=n(15861),a=n(15671),i=n(43144),u=n(60136),s=n(6215),o=n(61120),c=n(87757),h=n.n(c),f=n(83195),d=n(75571),p=n(37566),y=n(89636),l=(n(43079),n(33682),n(64003),n(30732)),v=n(57047),g=n(17396),m=n(99092),_=n(43798),k=n(51785);function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,o.Z)(t);if(e){var a=(0,o.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var b=d.Z.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D"),w=function(t){(0,u.Z)(s,t);var e,n=C(s);function s(){return(0,a.Z)(this,s),n.apply(this,arguments)}return(0,i.Z)(s,[{key:"update",value:function(t){this.strategy.update(t).catch((function(t){(0,p.D_)(t)||b.error(t)})),this.notifyChange("updating")}},{key:"attach",value:function(){this._bitmapContainer=new v.c,this.container.addChild(this._bitmapContainer),this.strategy=new m.Z({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}},{key:"detach",value:function(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"fetchBitmapData",value:function(t,e,n){return this.layer.fetchImage(t,e,n)}},{key:"doRefresh",value:(e=(0,r.Z)(h().mark((function t(){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.requestUpdate();case 1:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}}]),s}((0,k.y)((0,g.y)(_.Z)));(0,f._)([(0,y.Cb)()],w.prototype,"strategy",void 0),(0,f._)([(0,y.Cb)()],w.prototype,"updating",void 0);var Z=w=(0,f._)([(0,l.j)("esri.views.2d.layers.BaseDynamicLayerView2D")],w)}}]);
//# sourceMappingURL=989-135a77c1e7242aabc48c.js.map