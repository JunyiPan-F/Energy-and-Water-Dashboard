"use strict";
exports.id = 7400;
exports.ids = [7400];
exports.modules = {

/***/ 57400:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "toBinaryGLTF": () => (/* binding */ gltfexport_s)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(78668);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Point.js + 2 modules
var Point = __webpack_require__(53446);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/glb.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class glb_e{constructor(t,r){if(!t)throw new Error("GLB requires a JSON gltf chunk");this.length=glb_e.HEADER_SIZE,this.length+=glb_e.CHUNK_HEADER_SIZE;const i=this.textToArrayBuffer(t);if(this.length+=this.alignTo(i.byteLength,4),r&&(this.length+=glb_e.CHUNK_HEADER_SIZE,this.length+=r.byteLength,r.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this.writeHeader();const n=this.writeChunk(i,12,1313821514,32);r&&this.writeChunk(r,n,5130562)}writeHeader(){this.outView.setUint32(0,glb_e.MAGIC,!0),this.outView.setUint32(4,glb_e.VERSION,!0),this.outView.setUint32(8,this.length,!0)}writeChunk(t,e,r,i=0){const n=this.alignTo(t.byteLength,4);for(this.outView.setUint32(e,n,!0),this.outView.setUint32(e+=4,r,!0),this.writeArrayBuffer(this.outView.buffer,t,e+=4,0,t.byteLength),e+=t.byteLength;e%4;)i&&this.outView.setUint8(e,i),e++;return e}writeArrayBuffer(t,e,r,i,n){new Uint8Array(t,r,n).set(new Uint8Array(e,i,n),0)}textToArrayBuffer(e){if((0,has/* default */.Z)("esri-text-encoder"))return(new TextEncoder).encode(e).buffer;const r=new Uint8Array(e.length);for(let t=0;t<r.length;++t)r[t]=e.charCodeAt(t);return r.buffer}alignTo(t,e){return e*Math.ceil(t/e)}}glb_e.HEADER_SIZE=12,glb_e.CHUNK_HEADER_SIZE=8,glb_e.MAGIC=1179937895,glb_e.VERSION=2;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MapUtils.js
var MapUtils = __webpack_require__(86114);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/quat.js
var quat = __webpack_require__(10663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/quatf64.js
var quatf64 = __webpack_require__(61044);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(6766);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(8909);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/MeshMaterialMetallicRoughness.js
var MeshMaterialMetallicRoughness = __webpack_require__(1680);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/meshUtils/georeference.js
var georeference = __webpack_require__(91780);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/types.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var types_E,A,types_R,L,o,I,N;!function(E){E[E.External=0]="External",E[E.DataURI=1]="DataURI",E[E.GLB=2]="GLB"}(types_E||(types_E={})),function(E){E[E.External=0]="External",E[E.DataURI=1]="DataURI",E[E.GLB=2]="GLB"}(A||(A={})),function(E){E[E.ARRAY_BUFFER=34962]="ARRAY_BUFFER",E[E.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(types_R||(types_R={})),function(E){E.SCALAR="SCALAR",E.VEC2="VEC2",E.VEC3="VEC3",E.VEC4="VEC4",E.MAT2="MAT2",E.MAT3="MAT3",E.MAT4="MAT4"}(L||(L={})),function(E){E[E.POINTS=0]="POINTS",E[E.LINES=1]="LINES",E[E.LINE_LOOP=2]="LINE_LOOP",E[E.LINE_STRIP=3]="LINE_STRIP",E[E.TRIANGLES=4]="TRIANGLES",E[E.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",E[E.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(o||(o={})),function(E){E.OPAQUE="OPAQUE",E.MASK="MASK",E.BLEND="BLEND"}(I||(I={})),function(E){E[E.NoColor=0]="NoColor",E[E.FaceColor=1]="FaceColor",E[E.VertexColor=2]="VertexColor"}(N||(N={}));

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/bufferview.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(e,s,i,r,n){this.buffer=e,this.componentType=i,this.dataType=r,this.data=[],this.isFinalized=!1,this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,s.bufferViews||(s.bufferViews=[]),this.index=s.bufferViews.length,this.bufferView={buffer:e.index,byteLength:-1,target:n};const a=this.getElementSize();a>=4&&n!==types_R.ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=a),s.bufferViews.push(this.bufferView),this.numComponentsForDataType=this.calculateNumComponentsForDataType()}push(e){const t=this.data.length;if(this.data.push(e),this.accessorIndex>=0){const s=t%this.numComponentsForDataType,i=this.accessorMin[s];this.accessorMin[s]="number"!=typeof i?e:Math.min(i,e);const r=this.accessorMax[s];this.accessorMax[s]="number"!=typeof r?e:Math.max(r,e)}}get dataSize(){return this.data.length*this.sizeComponentType()}get byteSize(){function e(e,t){return t*Math.ceil(e/t)}return e(this.dataSize,4)}getByteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}get byteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}createTypedArray(e,t){switch(this.componentType){case 5120:return new Int8Array(e,t);case 5126:return new Float32Array(e,t);case 5122:return new Int16Array(e,t);case 5121:return new Uint8Array(e,t);case 5125:return new Uint32Array(e,t);case 5123:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this.createTypedArray(e,t).set(this.data)}writeAsync(e){if(this.asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this.asyncWritePromise=e.then((e=>{const t=new Uint8Array(e);for(let s=0;s<t.length;++s)this.data.push(t[s]);delete this.asyncWritePromise})),this.asyncWritePromise}startAccessor(e){if(this.accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length,this.accessorAttribute=e;const t=this.numComponentsForDataType;this.accessorMin=new Array(t),this.accessorMax=new Array(t)}endAccessor(){if(this.accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this.getElementSize(),t=this.numComponentsForDataType,s=(this.data.length-this.accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let r=0;r<this.accessorMin.length;++r)"number"!=typeof this.accessorMin[r]&&(this.accessorMin[r]=0),"number"!=typeof this.accessorMax[r]&&(this.accessorMax[r]=0);const i={byteOffset:e*(this.accessorIndex/t),componentType:this.componentType,count:s,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this.componentType){case 5121:case 5123:i.normalized=!0}}return this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,i}get finalized(){return this.finalizedPromise?this.finalizedPromise:this.isFinalized?this.finalizedPromise=Promise.resolve():this.finalizedPromise=new Promise((e=>this.finalizedPromiseResolve=e))}finalize(){const t=this.bufferView;return new Promise((t=>{const s=this.buffer.getViewFinalizePromises(this);this.asyncWritePromise&&s.push(this.asyncWritePromise),t((0,promiseUtils/* eachAlways */.as)(s))})).then((()=>{this.isFinalized=!0,t.byteOffset=this.getByteOffset(),t.byteLength=this.dataSize,this.finalizedPromiseResolve&&this.finalizedPromiseResolve()}))}getElementSize(){return this.sizeComponentType()*this.numComponentsForDataType}sizeComponentType(){switch(this.componentType){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5125:case 5126:return 4}}calculateNumComponentsForDataType(){switch(this.dataType){case L.SCALAR:return 1;case L.VEC2:return 2;case L.VEC3:return 3;case L.VEC4:case L.MAT2:return 4;case L.MAT3:return 9;case L.MAT4:return 16}}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/buffer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class buffer_r{constructor(e){this.gltf=e,this.bufferViews=[],this.isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const i={byteLength:-1};e.buffers.push(i),this.buffer=i}addBufferView(e,r,t){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const f=new i(this,this.gltf,e,r,t);return this.bufferViews.push(f),f}getByteOffset(e){let i=0;for(const r of this.bufferViews){if(r===e)return i;i+=r.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const i=[];for(const r of this.bufferViews){if(e&&r===e)return i;i.push(r.finalized)}return i}getArrayBuffer(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this.getTotalSize(),i=new ArrayBuffer(e);let r=0;for(const t of this.bufferViews)t.writeOutToBuffer(i,r),r+=t.byteSize;return i}finalize(){if(this.finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this.finalizePromise=new Promise((i=>{i((0,promiseUtils/* eachAlways */.as)(this.getViewFinalizePromises()))})).then((()=>{this.isFinalized=!0;const e=this.getArrayBuffer();this.buffer.byteLength=e.byteLength,this.buffer.uri=e})),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise}getTotalSize(){let e=0;for(const i of this.bufferViews)e+=i.byteSize;return e}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(91957);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/geometry.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function geometry_c(t,e){if(t.components)for(const n of t.components)n.faces&&"smooth"===n.shading&&f(n,e)}function f(e,i){(0,maybe/* isNone */.Wi)(i.normal)&&(i.normal=new Float32Array(i.position.length));const a=e.faces,{position:c,normal:f}=i,m=a.length/3;for(let t=0;t<m;++t){const e=3*a[3*t+0],s=3*a[3*t+1],i=3*a[3*t+2],m=(0,vec3.s)(p,c[e+0],c[e+1],c[e+2]),h=(0,vec3.s)(l,c[s+0],c[s+1],c[s+2]),g=(0,vec3.s)(x,c[i+0],c[i+1],c[i+2]),u=(0,vec3.f)(h,h,m),j=(0,vec3.f)(g,g,m),y=(0,vec3.c)(u,u,j);f[e+0]+=y[0],f[e+1]+=y[1],f[e+2]+=y[2],f[s+0]+=y[0],f[s+1]+=y[1],f[s+2]+=y[2],f[i+0]+=y[0],f[i+1]+=y[1],f[i+2]+=y[2]}for(let t=0;t<f.length;t+=3)(0,vec3.s)(h,f[t],f[t+1],f[t+2]),(0,vec3.n)(h,h),f[t+0]=h[0],f[t+1]=h[1],f[t+2]=h[2]}function m(t){if((0,maybe/* isSome */.pC)(t.transform))return t.transform.getOriginPoint(t.spatialReference);const n=t.extent.xmax-t.extent.width/2,o=t.extent.ymax-t.extent.height/2,r=t.extent.zmin;return new Point/* default */.Z({x:n,y:o,z:r,spatialReference:t.extent.spatialReference})}const p=(0,vec3f64.c)(),l=(0,vec3f64.c)(),x=(0,vec3f64.c)(),h=(0,vec3f64.c)();

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(3466);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/imageutils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function imageutils_i(t){const n=imageutils_m(t);return (0,maybe/* isSome */.pC)(n)?n.toDataURL():""}async function imageutils_o(e){const r=imageutils_m(e);if((0,maybe/* isNone */.Wi)(r))throw new core_Error/* default */.Z("imageToArrayBuffer","Unsupported image type");const a=await c(e),i=await new Promise((t=>r.toBlob(t,a)));if(!i)throw new core_Error/* default */.Z("imageToArrayBuffer","Failed to encode image");return{data:await i.arrayBuffer(),type:a}}async function c(t){if(!(t instanceof HTMLImageElement))return"image/png";const e=t.src;if((0,urlUtils/* isDataProtocol */.HK)(e)){const{mediaType:t}=(0,urlUtils/* dataComponents */.sJ)(e);return"image/jpeg"===t?t:"image/png"}return/\.png$/i.test(e)?"image/png":/\.(jpg|jpeg)$/i.test(e)?"image/jpeg":"image/png"}function imageutils_m(t){if(t instanceof HTMLCanvasElement)return t;if(t instanceof HTMLVideoElement)return null;const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");return t instanceof HTMLImageElement?n.drawImage(t,0,0,t.width,t.height):t instanceof ImageData&&n.putImageData(t,t.width,t.height),e}function imageutils_g(t){const e=[],n=new Uint8Array(t);for(let r=0;r<n.length;r++)e.push(String.fromCharCode(n[r]));return"data:application/octet-stream;base64,"+btoa(e.join(""))}function s(t){if(t.byteLength<8)return!1;const e=new Uint8Array(t);return 137===e[0]&&80===e[1]&&78===e[2]&&71===e[3]&&13===e[4]&&10===e[5]&&26===e[6]&&10===e[7]}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltf.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class M{constructor(e,t,s){this.params={},this.materialMap=new Array,this.imageMap=new Map,this.textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this.addScenes(e)}addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras.options.bufferOutputType===types_E.GLB||this.gltf.extras.options.imageOutputType===A.GLB;t&&(this.gltf.extras.binChunkBuffer=new buffer_r(this.gltf)),e.forEachScene((e=>{this.addScene(e)})),t&&this.gltf.extras.binChunkBuffer.finalize()}addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode((e=>{t.nodes||(t.nodes=[]);const s=this.addNode(e);t.nodes.push(s)})),this.gltf.scenes.push(t)}addNode(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;(0,vec3.k)(s,vec3f64.Z)||(t.translation=(0,vec3f64.a)(s));const c=e.rotation;(0,quat.j)(c,quatf64.I)||(t.rotation=(0,quatf64.b)(c));const u=e.scale;(0,vec3.k)(u,vec3f64.O)||(t.scale=(0,vec3f64.a)(u)),e.mesh&&e.mesh.vertexAttributes.position?t.mesh=this.addMesh(e.mesh):e.forEachNode((e=>{t.children||(t.children=[]);const s=this.addNode(e);t.children.push(s)}));const f=this.gltf.nodes.length;return this.gltf.nodes.push(t),f}addMesh(e){this.gltf.meshes||(this.gltf.meshes=[]);const s={primitives:[]},i=this.gltf.extras.options.bufferOutputType===types_E.GLB;let r;r=i?this.gltf.extras.binChunkBuffer:new buffer_r(this.gltf),this.params.origin||(this.params.origin=m(e));const a=(0,georeference/* ungeoreferenceByTransform */.Yq)(e.vertexAttributes,e.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});geometry_c(e,a),this.flipYZAxis(a);const o=r.addBufferView(5126,L.VEC3,types_R.ARRAY_BUFFER);let n,l,h,c;a.normal&&(n=r.addBufferView(5126,L.VEC3,types_R.ARRAY_BUFFER)),e.vertexAttributes.uv&&(l=r.addBufferView(5126,L.VEC2,types_R.ARRAY_BUFFER)),a.tangent&&(h=r.addBufferView(5126,L.VEC4,types_R.ARRAY_BUFFER)),e.vertexAttributes.color&&(c=r.addBufferView(5121,L.VEC4,types_R.ARRAY_BUFFER)),o.startAccessor("POSITION"),n&&n.startAccessor("NORMAL"),l&&l.startAccessor("TEXCOORD_0"),h&&h.startAccessor("TANGENT"),c&&c.startAccessor("COLOR_0");const g=a.position.length/3,{position:b,normal:R,tangent:T}=a,{color:M,uv:O}=e.vertexAttributes;for(let u=0;u<g;++u)o.push(b[3*u+0]),o.push(b[3*u+1]),o.push(b[3*u+2]),n&&(0,maybe/* isSome */.pC)(R)&&(n.push(R[3*u+0]),n.push(R[3*u+1]),n.push(R[3*u+2])),l&&(0,maybe/* isSome */.pC)(O)&&(l.push(O[2*u+0]),l.push(O[2*u+1])),h&&(0,maybe/* isSome */.pC)(T)&&(h.push(T[4*u+0]),h.push(T[4*u+1]),h.push(T[4*u+2]),h.push(T[4*u+3])),c&&(0,maybe/* isSome */.pC)(M)&&(c.push(M[4*u+0]),c.push(M[4*u+1]),c.push(M[4*u+2]),c.push(M[4*u+3]));const B=o.endAccessor(),w=this.addAccessor(o.index,B);let C,E,y,N,S;if(n){const e=n.endAccessor();C=this.addAccessor(n.index,e)}if(l){const e=l.endAccessor();E=this.addAccessor(l.index,e)}if(h){const e=h.endAccessor();y=this.addAccessor(h.index,e)}if(c){const e=c.endAccessor();N=this.addAccessor(c.index,e)}e.components&&e.components.length>0&&e.components[0].faces?(S=r.addBufferView(5125,L.SCALAR,types_R.ELEMENT_ARRAY_BUFFER),this.addMeshVertexIndexed(S,e.components,s,w,C,E,y,N)):this.addMeshVertexNonIndexed(e.components,s,w,C,E,y,N),o.finalize(),n&&n.finalize(),l&&l.finalize(),h&&h.finalize(),S&&S.finalize(),c&&c.finalize(),i||r.finalize();const v=this.gltf.meshes.length;return this.gltf.meshes.push(s),v}flipYZAxis({position:e,normal:t,tangent:s}){this.flipYZBuffer(e,3),this.flipYZBuffer(t,3),this.flipYZBuffer(s,4)}flipYZBuffer(e,t){if(!(0,maybe/* isNone */.Wi)(e))for(let s=1,i=2;s<e.length;s+=t,i+=t){const t=e[s],r=e[i];e[s]=r,e[i]=-t}}addMaterial(e){if(null===e)return;const s=this.materialMap.indexOf(e);if(-1!==s)return s;this.gltf.materials||(this.gltf.materials=[]);const i={};switch(e.alphaMode){case"mask":i.alphaMode=I.MASK;break;case"auto":case"blend":i.alphaMode=I.BLEND}.5!==e.alphaCutoff&&(i.alphaCutoff=e.alphaCutoff),e.doubleSided&&(i.doubleSided=e.doubleSided),i.pbrMetallicRoughness={};const r=e=>e**2.1,a=e=>{const t=e.toRgba();return t[0]=r(t[0]/255),t[1]=r(t[1]/255),t[2]=r(t[2]/255),t};if((0,maybe/* isSome */.pC)(e.color)&&(i.pbrMetallicRoughness.baseColorFactor=a(e.color)),(0,maybe/* isSome */.pC)(e.colorTexture)&&(i.pbrMetallicRoughness.baseColorTexture={index:this.addTexture(e.colorTexture)}),(0,maybe/* isSome */.pC)(e.normalTexture)&&(i.normalTexture={index:this.addTexture(e.normalTexture)}),e instanceof MeshMaterialMetallicRoughness/* default */.Z){if((0,maybe/* isSome */.pC)(e.emissiveTexture)&&(i.emissiveTexture={index:this.addTexture(e.emissiveTexture)}),(0,maybe/* isSome */.pC)(e.emissiveColor)){const t=a(e.emissiveColor);i.emissiveFactor=[t[0],t[1],t[2]]}(0,maybe/* isSome */.pC)(e.occlusionTexture)&&(i.occlusionTexture={index:this.addTexture(e.occlusionTexture)}),(0,maybe/* isSome */.pC)(e.metallicRoughnessTexture)&&(i.pbrMetallicRoughness.metallicRoughnessTexture={index:this.addTexture(e.metallicRoughnessTexture)}),i.pbrMetallicRoughness.metallicFactor=e.metallic,i.pbrMetallicRoughness.roughnessFactor=e.roughness}else i.pbrMetallicRoughness.metallicFactor=1,i.pbrMetallicRoughness.roughnessFactor=1;const o=this.gltf.materials.length;return this.gltf.materials.push(i),this.materialMap.push(e),o}addTexture(t){return this.gltf.textures||(this.gltf.textures=[]),(0,MapUtils/* getOrCreateMapValue */.s1)(this.textureMap,t,(()=>{const e={sampler:this.addSampler(t),source:this.addImage(t)},s=this.gltf.textures.length;return this.gltf.textures.push(e),s}))}addImage(e){const t=this.imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{s.extras=e.data;for(let t=0;t<this.gltf.images.length;++t)if(e.data===this.gltf.images[t].extras)return t;switch(this.gltf.extras.options.imageOutputType){case A.GLB:{const t=this.gltf.extras.binChunkBuffer.addBufferView(5121,L.SCALAR),i=imageutils_o(e.data).then((({data:e,type:t})=>(s.mimeType=t,e)));t.writeAsync(i).then((()=>{t.finalize()})),s.bufferView=t.index;break}case A.DataURI:s.uri=imageutils_i(e.data);break;default:this.gltf.extras.promises.push(imageutils_o(e.data).then((({data:e,type:t})=>{s.uri=e,s.mimeType=t})))}}const i=this.gltf.images.length;return this.gltf.images.push(s),this.imageMap.set(e,i),i}addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=10497,s=10497;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=33071,s=33071;break;case"mirror":t=33648,s=33648}else{switch(e.wrap.vertical){case"clamp":s=33071;break;case"mirror":s=33648}switch(e.wrap.horizontal){case"clamp":t=33071;break;case"mirror":t=33648}}const i={wrapS:t,wrapT:s};for(let a=0;a<this.gltf.samplers.length;++a)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[a]))return a;const r=this.gltf.samplers.length;return this.gltf.samplers.push(i),r}addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const i=this.gltf.accessors.length;return this.gltf.accessors.push(s),i}addMeshVertexIndexed(e,t,s,i,r,a,o,n){for(const l of t){e.startAccessor("INDICES");for(let s=0;s<l.faces.length;++s)e.push(l.faces[s]);const t=e.endAccessor(),h={attributes:{POSITION:i},indices:this.addAccessor(e.index,t),material:this.addMaterial(l.material)};r&&"flat"!==l.shading&&(h.attributes.NORMAL=r),a&&(h.attributes.TEXCOORD_0=a),o&&"flat"!==l.shading&&(h.attributes.TANGENT=o),n&&(h.attributes.COLOR_0=n),s.primitives.push(h)}}addMeshVertexNonIndexed(e,t,s,i,r,a,o){const n={attributes:{POSITION:s}};i&&(n.attributes.NORMAL=i),r&&(n.attributes.TEXCOORD_0=r),a&&(n.attributes.TANGENT=a),o&&(n.attributes.COLOR_0=o),e&&(n.material=this.addMaterial(e[0].material)),t.primitives.push(n)}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/node.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class node_i{constructor(s){this.mesh=s,this.name="",this.translation=(0,vec3f64.c)(),this.rotation=(0,quatf64.a)(),this.scale=(0,vec3f64.a)(vec3f64.O),this.nodes=[]}addNode(s){if(this.nodes.indexOf(s)>=0)throw new Error("Node already added");this.nodes.push(s)}forEachNode(s){this.nodes.forEach(s)}set rotationAngles(t){(0,quat.k)(this.rotation,t[0],t[1],t[2])}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/index.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const gltf_f="model.gltf",gltf_p="model.glb";function a(a,m,c){const l=new M(a,m=m||{},c);let g=l.params;g?g.origin||(g.origin=new Point/* default */.Z({x:-1,y:-1,z:-1})):g={origin:new Point/* default */.Z({x:-1,y:-1,z:-1})};const y=g.origin,d=l.gltf,j=d.extras.promises;let x=1,b=1,B=null;return (0,promiseUtils/* eachAlways */.as)(j).then((()=>{const e={origin:y};delete d.extras;const t="number"==typeof m.jsonSpacing?m.jsonSpacing:4,o=JSON.stringify(d,((t,r)=>{if("extras"!==t){if(r instanceof ArrayBuffer){if(s(r))switch(m.imageOutputType){case A.DataURI:case A.GLB:break;case A.External:default:{const t=`img${b}.png`;return b++,e[t]=r,t}}switch(m.bufferOutputType){case types_E.DataURI:return imageutils_g(r);case types_E.GLB:if(B)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(B=r);case types_E.External:default:{const t=`data${x}.bin`;return x++,e[t]=r,t}}}return r}}),t);return m.bufferOutputType===types_E.GLB||m.imageOutputType===A.GLB?e[gltf_p]=new glb_e(o,B).buffer:e[gltf_f]=o,e}))}function gltf_m(e,t){return a(e,{bufferOutputType:types_E.GLB,imageOutputType:A.GLB,jsonSpacing:0},t)}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/asset.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.indexOf(e)>=0)throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){const s=this._scenes.indexOf(e);s>=0&&this._scenes.splice(s,1)}forEachScene(e){this._scenes.forEach(e)}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/scene.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class scene_d{constructor(){this.name="",this.nodes=[]}addNode(d){if(this.nodes.indexOf(d)>=0)throw new Error("Node already added");this.nodes.push(d)}forEachNode(d){this.nodes.forEach(d)}}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltfexport.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(e,o){this.file={type:"model/gltf-binary",data:e},this.origin=o}buffer(){return Promise.resolve(this.file)}download(e){return new Promise((()=>{const o=new Blob([this.file.data],{type:this.file.type});let t=e;t||(t="model.glb");if("glb"!==t.split(".").pop()&&(t+=".glb"),window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(o,t);else{const e=document.createElement("a"),n=URL.createObjectURL(o);e.href=n,e.download=t,document.body.appendChild(e),e.click(),setTimeout((function(){document.body.removeChild(e),window.URL.revokeObjectURL(n)}),0)}}))}}function gltfexport_s(s,d){const l=new e,a=new scene_d;l.addScene(a);const c=new node_i(s);return a.addNode(c),gltf_m(l,d).then((e=>new r(e[gltf_p],e.origin)))}


/***/ })

};
;
//# sourceMappingURL=7400.render-page.js.map