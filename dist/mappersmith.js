/*!
 * Mappersmith 2.9.0
 * https://github.com/tulios/mappersmith
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.mappersmith=t():e.mappersmith=t()}(this,function(){return function(e){function t(s){if(r[s])return r[s].exports;var n=r[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,s){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(module,exports,__webpack_require__){"use strict";function toQueryString(e){return isPlainObject(e)?validKeys(e).map(function(t){return buildRecursive(t,e[t])}).join("&").replace(R20,"+"):e}function performanceNow(){return hasProcessHrtime()?(getNanoSeconds()-loadTime)/1e6:Date.now()}function parseResponseHeaders(e){var t={};if(!e)return t;for(var r=e.split("\r\n"),s=0;s<r.length;s++){var n=r[s],o=n.indexOf(": ");if(o>0){var i=n.substring(0,o).toLowerCase(),a=n.substring(o+2).trim();t[i]=a}}return t}function lowerCaseObjectKeys(e){return Object.keys(e).reduce(function(t,r){return t[r.toLowerCase()]=e[r],t},{})}function isPlainObject(e){return"[object Object]"===toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})}var _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return void 0===e?"undefined":_typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof2(e)};exports.toQueryString=toQueryString,exports.performanceNow=performanceNow,exports.parseResponseHeaders=parseResponseHeaders,exports.lowerCaseObjectKeys=lowerCaseObjectKeys,exports.isPlainObject=isPlainObject;var _process=void 0,getNanoSeconds=void 0,loadTime=void 0;try{_process=eval('typeof __TEST_WEB__ === "undefined" && typeof process === "object" ? process : undefined')}catch(e){}var hasProcessHrtime=function(){return void 0!==_process&&null!==_process&&_process.hrtime};hasProcessHrtime()&&(getNanoSeconds=function(){var e=_process.hrtime();return 1e9*e[0]+e[1]},loadTime=getNanoSeconds());var R20=/%20/g,validKeys=function(e){return Object.keys(e).filter(function(t){return void 0!==e[t]&&null!==e[t]})},buildRecursive=function e(t,r,s){s=s||"";var n=Array.isArray(r),o="object"===(void 0===r?"undefined":_typeof(r));return n||o?n?r.map(function(r){return e(t,r,s+"[]")}).join("&"):validKeys(r).map(function(n){return e(t,r[n],s+"["+n+"]")}).join("&"):encodeURIComponent(t+s)+"="+encodeURIComponent(r)},hasOwnProperty=Object.prototype.hasOwnProperty,assign=exports.assign=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},toString=Object.prototype.toString,CHARS="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",btoa=exports.btoa=function(e){for(var t,r,s="",n=CHARS,o=String(e),i=0;o.charAt(0|i)||(n="=",i%1);s+=n.charAt(63&t>>8-i%1*8)){if((r=o.charCodeAt(i+=.75))>255)throw new Error("[Mappersmith] 'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");t=t<<8|r}return s}},function(e,t,r){"use strict";function s(e){var t=function(){return i.gateway};return new o.default(e,t,i.gatewayConfigs).build()}Object.defineProperty(t,"__esModule",{value:!0}),t.configs=void 0,t.default=s;var n=r(4),o=function(e){return e&&e.__esModule?e:{default:e}}(n),i=t.configs={Promise:"function"==typeof Promise?Promise:null,fetch:"function"==typeof fetch?fetch:null,gateway:null,gatewayConfigs:{emulateHTTP:!1,XHR:{withCredentials:!1,configure:null},HTTP:{configure:null},Fetch:{credentials:"omit"}}}},function(e,t,r){"use strict";function s(e,t,r,s){e.requestParams&&e.requestParams.auth&&(0,n.assign)(e.requestParams.auth,{password:"***"}),this.originalRequest=e,this.responseStatus=t,this.responseData=void 0!==r?r:null,this.responseHeaders=s||{},this.timeElapsed=null}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);s.prototype={request:function(){return this.originalRequest},status:function(){return 1223===this.responseStatus?204:this.responseStatus},success:function(){var e=this.status();return e>=200&&e<400},headers:function(){return(0,n.lowerCaseObjectKeys)(this.responseHeaders)},header:function(e){return this.headers()[e.toLowerCase()]},rawData:function(){return this.responseData},data:function(){var e=this.responseData;if(this.isContentTypeJSON())try{e=JSON.parse(this.responseData)}catch(e){}return e},isContentTypeJSON:function(){return/application\/json/.test(this.headers()["content-type"])},enhance:function(e){return new s(this.request(),e.status||this.status(),e.rawData||this.rawData(),(0,n.assign)({},this.headers(),e.headers))}},t.default=s},function(module,exports,__webpack_require__){"use strict";var lib=__webpack_require__(1),_process,defaultGateway;try{_process=eval('typeof process === "object" ? process : undefined')}catch(e){}"undefined"!=typeof XMLHttpRequest?defaultGateway=__webpack_require__(8).default:void 0!==_process&&(defaultGateway=__webpack_require__(10).default),lib.configs.gateway=defaultGateway,module.exports=lib},function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t,r){if(!e)throw new Error("[Mappersmith] invalid manifest ("+e+")");if(!t||!t())throw new Error("[Mappersmith] gateway class not configured (configs.gateway)");this.manifest=new a.default(e,r),this.GatewayClassFactory=t}Object.defineProperty(t,"__esModule",{value:!0});var i=r(5),a=s(i),u=r(7),c=s(u),f=r(0);o.prototype={build:function(){var e=this,t={_manifest:this.manifest};return this.manifest.eachResource(function(r,s){t[r]=e.buildResource(r,s)}),t},buildResource:function(e,t){var r=this;return t.reduce(function(t,s){return(0,f.assign)(t,n({},s.name,function(t){var n=new c.default(s.descriptor,t);return r.invokeMiddlewares(e,s.name,n)}))},{})},invokeMiddlewares:function(e,t,r){var s=this.manifest.createMiddlewares({resourceName:e,resourceMethod:t}),n=s.reduce(function(e,t){return t.request(e)},r),o=this.GatewayClassFactory(),i=this.manifest.gatewayConfigs,a=function(){return new o(n,i).call()};return s.reduce(function(e,t){return function(){return t.response(e)}},a)()}},t.default=o},function(e,t,r){"use strict";function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.host=e.host,this.gatewayConfigs=(0,i.assign)({},t,e.gatewayConfigs),this.resources=e.resources||{},this.middlewares=e.middlewares||[]}Object.defineProperty(t,"__esModule",{value:!0});var n=r(6),o=function(e){return e&&e.__esModule?e:{default:e}}(n),i=r(0);s.prototype={eachResource:function(e){var t=this;Object.keys(this.resources).forEach(function(r){var s=t.eachMethod(r,function(e){return{name:e,descriptor:t.createMethodDescriptor(r,e)}});e(r,s)})},eachMethod:function(e,t){return Object.keys(this.resources[e]).map(function(e){return t(e)})},createMethodDescriptor:function(e,t){var r=this.resources[e][t];if(!r||!r.path)throw new Error('[Mappersmith] path is undefined for resource "'+e+'" method "'+t+'"');return new o.default((0,i.assign)({host:this.host},r))},createMiddlewares:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=function(t){return(0,i.assign)({request:function(e){return e},response:function(e){return e()}},t(e))};return this.middlewares.map(function(e){return t(e)})}},t.default=s},function(e,t,r){"use strict";function s(e){this.host=e.host,this.path=e.path,this.method=e.method||"get",this.headers=e.headers,this.params=e.params,this.binary=e.binary||!1,this.bodyAttr=e.bodyAttr||"body",this.headersAttr=e.headersAttr||"headers",this.authAttr=e.authAttr||"auth",this.timeoutAttr=e.timeoutAttr||"timeout"}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s},function(e,t,r){"use strict";function s(e,t){this.methodDescriptor=e,this.requestParams=t||{}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=new RegExp("{([^}]+)}");s.prototype={params:function(){var e=this,t=(0,n.assign)({},this.methodDescriptor.params,this.requestParams),r=function(t){return t!==e.methodDescriptor.headersAttr&&t!==e.methodDescriptor.bodyAttr&&t!==e.methodDescriptor.authAttr&&t!==e.methodDescriptor.timeoutAttr};return Object.keys(t).reduce(function(e,s){return r(s)&&(e[s]=t[s]),e},{})},method:function(){return this.methodDescriptor.method.toLowerCase()},host:function(){return(this.methodDescriptor.host||"").replace(/\/$/,"")},path:function(){var e=this.methodDescriptor.path;"/"!==this.methodDescriptor.path[0]&&(e="/"+this.methodDescriptor.path);var t=this.params();Object.keys(t).forEach(function(r){var s=t[r],n="{"+r+"}";new RegExp(n).test(e)&&(e=e.replace("{"+r+"}",s),delete t[r])});var r=e.match(o);if(r)throw new Error("[Mappersmith] required parameter missing ("+r[1]+'), "'+e+'" cannot be resolved');var s=(0,n.toQueryString)(t);return 0!==s.length&&(e+="?"+s),e},url:function(){return""+this.host()+this.path()},headers:function(){return(0,n.lowerCaseObjectKeys)((0,n.assign)({},this.methodDescriptor.headers,this.requestParams[this.methodDescriptor.headersAttr]))},body:function(){return this.requestParams[this.methodDescriptor.bodyAttr]},auth:function(){return this.requestParams[this.methodDescriptor.authAttr]},timeout:function(){return this.requestParams[this.methodDescriptor.timeoutAttr]},enhance:function(e){var t=this.methodDescriptor.headersAttr,r=this.methodDescriptor.bodyAttr,o=this.methodDescriptor.authAttr,i=this.methodDescriptor.timeoutAttr,a=(0,n.assign)({},this.requestParams,e.params);return a[t]=(0,n.assign)({},this.requestParams[t],e.headers),e.body&&(a[r]=e.body),e.auth&&(a[o]=e.auth),e.timeout&&(a[i]=e.timeout),new s(this.methodDescriptor,a)},isBinary:function(){return this.methodDescriptor.binary}},t.default=s},function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function n(e){i.default.apply(this,arguments)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(9),i=s(o),a=r(2),u=s(a),c=r(0),f=window.btoa||c.btoa;n.prototype=i.default.extends({get:function(){var e=this.createXHR();e.open("get",this.request.url(),!0),this.setHeaders(e,{}),this.configureTimeout(e),e.send()},post:function(){this.performRequest("post")},put:function(){this.performRequest("put")},patch:function(){this.performRequest("patch")},delete:function(){this.performRequest("delete")},configureTimeout:function(e){var t=this;this.canceled=!1,this.timer=null;var r=this.request.timeout();r&&(e.timeout=r,e.addEventListener("timeout",function(){t.canceled=!0,clearTimeout(t.timer),t.dispatchClientError("Timeout ("+r+"ms)")}),this.timer=setTimeout(function(){t.canceled=!0,t.dispatchClientError("Timeout ("+r+"ms)")},r+1))},configureCallbacks:function(e){var t=this;e.addEventListener("load",function(){t.canceled||(clearTimeout(t.timer),t.dispatchResponse(t.createResponse(e)))}),e.addEventListener("error",function(){t.canceled||(clearTimeout(t.timer),t.dispatchClientError("Network error"))});var r=this.options().XHR;r.withCredentials&&(e.withCredentials=!0),r.configure&&r.configure(e)},performRequest:function(e){var t=this.shouldEmulateHTTP()?"post":e,r=this.createXHR();r.open(t,this.request.url(),!0);var s={},n=this.prepareBody(e,s);this.setHeaders(r,s),this.configureTimeout(r);var o=[];n&&o.push(n),r.send.apply(r,o)},createResponse:function(e){var t=e.status,r=this.request.isBinary()?e.response:e.responseText,s=(0,c.parseResponseHeaders)(e.getAllResponseHeaders());return new u.default(this.request,t,r,s)},setHeaders:function(e,t){var r=this.request.auth();if(r){var s=r.username||"",n=r.password||"";t.authorization="Basic "+f(s+":"+n)}var o=(0,c.assign)(t,this.request.headers());Object.keys(o).forEach(function(t){e.setRequestHeader(t,o[t])})},createXHR:function(){var e=new XMLHttpRequest;return this.configureCallbacks(e),this.request.isBinary()&&(e.responseType="blob"),e}}),t.default=n},function(e,t,r){"use strict";function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.request=e,this.configs=t,this.successCallback=function(){},this.failCallback=function(){}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(1),i=r(2),a=function(e){return e&&e.__esModule?e:{default:e}}(i);s.extends=function(e){return(0,n.assign)({},s.prototype,e)},s.prototype={options:function(){return this.configs},shouldEmulateHTTP:function(){return this.options().emulateHTTP&&/^(delete|put|patch)/i.test(this.request.method())},call:function(){var e=this,t=arguments,r=(0,n.performanceNow)();return new o.configs.Promise(function(s,o){e.successCallback=function(e){e.timeElapsed=(0,n.performanceNow)()-r,s(e)},e.failCallback=function(e){e.timeElapsed=(0,n.performanceNow)()-r,o(e)};try{e[e.request.method()].apply(e,t)}catch(t){e.dispatchClientError(t.message)}})},dispatchResponse:function(e){e.success()?this.successCallback(e):this.failCallback(e)},dispatchClientError:function(e){this.failCallback(new a.default(this.request,400,e))},prepareBody:function(e,t){var r=this.request.body();this.shouldEmulateHTTP()&&(r=r||{},(0,n.isPlainObject)(r)&&(r._method=e),t["x-http-method-override"]=e);var s=(0,n.toQueryString)(r);return s&&(0,n.isPlainObject)(r)&&(t["content-type"]="application/x-www-form-urlencoded;charset=utf-8"),s}},t.default=s},function(e,t){}])});
//# sourceMappingURL=mappersmith.map