import{_ as t,s as e,n as r,a as n,b as o,c as a,d as i,i as s,e as u,S as c,f as l,g as f,h,j as p,k as v,l as d,m,o as g,p as y,t as w,q as x,r as b,u as $,v as E,w as L,x as S,y as k,z as _,A as P,B as O,C as j,D as R,E as N,F as A}from"./index.f5880261.js";function q(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var U,C=(function(e){var r=function(e){var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=S(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?v:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=c;var f="suspendedStart",h="suspendedYield",p="executing",v="completed",d={};function m(){}function g(){}function y(){}var w={};w[i]=function(){return this};var x=Object.getPrototypeOf,b=x&&x(x(O([])));b&&b!==n&&o.call(b,i)&&(w=b);var $=y.prototype=m.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(e){var r;this._invoke=function(n,a){function i(){return new Promise(function(r,i){!function r(n,a,i,s){var u=l(e[n],e,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"===t(f)&&o.call(f,"__await")?Promise.resolve(f.__await).then(function(t){r("next",t,i,s)},function(t){r("throw",t,i,s)}):Promise.resolve(f).then(function(t){c.value=t,i(c)},function(t){return r("throw",t,i,s)})}s(u.arg)}(n,a,r,i)})}return r=r?r.then(i,i):i()}}function S(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,S(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:r,done:!0}}return g.prototype=$.constructor=y,y.constructor=g,y[u]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create($),t},e.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[s]=function(){return this},e.AsyncIterator=L,e.async=function(t,r,n,o){var a=new L(c(t,r,n,o));return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E($),$[u]="Generator",$[i]=function(){return this},$.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}},e}(e.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}(U={exports:{}},U.exports),U.exports);function G(t,e,r,n,o,a,i){try{var s=t[a](i),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}function I(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function i(t){G(a,n,o,i,s,"next",t)}function s(t){G(a,n,o,i,s,"throw",t)}i(void 0)})}}var T=[];function F(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,a=[];function i(r){if(e(t,r)&&(t=r,n)){for(var o=!T.length,i=0;i<a.length;i+=1){var s=a[i];s[1](),T.push(s,t)}if(o){for(var u=0;u<T.length;u+=2)T[u][0](T[u+1]);T.length=0}}}return{set:i,update:function(e){i(e(t))},subscribe:function(e){var s=[e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:r];return a.push(s),1===a.length&&(n=o(i)||r),e(t),function(){var t=a.indexOf(s);-1!==t&&a.splice(t,1),0===a.length&&(n(),n=null)}}}}var D={},B=function(){return{}};function J(t){var e,r,n=t.$$slots.default,o=l(n,t,null);return{c:function(){e=f("div"),o&&o.c(),this.h()},l:function(t){e=h(t,"DIV",{class:!0},!1);var r=p(e);o&&o.l(r),r.forEach(v),this.h()},h:function(){d(e,"class","centered svelte-1sjhgv1")},m:function(t,n){m(t,e,n),o&&o.m(e,null),r=!0},p:function(t,e){o&&o.p&&t.$$scope&&o.p(g(n,e,t,null),y(n,e,null))},i:function(t){r||(w(o,t),r=!0)},o:function(t){x(o,t),r=!1},d:function(t){t&&v(e),o&&o.d(t)}}}function V(t,e,r){var n=e.$$slots,o=void 0===n?{}:n,a=e.$$scope;return t.$set=function(t){"$$scope"in t&&r("$$scope",a=t.$$scope)},{$$slots:o,$$scope:a}}var K=function(t){function r(t){var n;return o(this,r),n=a(this,i(r).call(this)),s(u(n),t,V,J,e,[]),n}return n(r,c),r}();function W(t){var e,n,o,a,i,s,u,c=t.error.message+"";return document.title=e="dotversum - "+t.status,{c:function(){n=b(),o=f("h1"),a=$("We've encountered an error: "),i=$(t.status),s=$(" - "),u=$(c),this.h()},l:function(e){n=E(e,"\r\n"),o=h(e,"H1",{class:!0},!1);var r=p(o);a=E(r,"We've encountered an error: "),i=E(r,t.status),s=E(r," - "),u=E(r,c),r.forEach(v),this.h()},h:function(){d(o,"class","svelte-1rlcde3")},m:function(t,e){m(t,n,e),m(t,o,e),L(o,a),L(o,i),L(o,s),L(o,u)},p:function(t,r){t.status&&e!==(e="dotversum - "+r.status)&&(document.title=e),t.status&&S(i,r.status),t.error&&c!==(c=r.error.message+"")&&S(u,c)},i:r,o:r,d:function(t){t&&(v(n),v(o))}}}function Y(t,e,r){var n=e.status,o=e.error;return t.$set=function(t){"status"in t&&r("status",n=t.status),"error"in t&&r("error",o=t.error)},{status:n,error:o}}var H=function(t){function r(t){var n;return o(this,r),n=a(this,i(r).call(this)),s(u(n),t,Y,W,e,["status","error"]),n}return n(r,c),r}();function z(t){var e,r,n=[t.level1.props],o=t.level1.component;function a(t){for(var e={},r=0;r<n.length;r+=1)e=k(e,n[r]);return{props:e}}if(o)var i=new o(a());return{c:function(){i&&i.$$.fragment.c(),e=R()},l:function(t){i&&i.$$.fragment.l(t),e=R()},m:function(t,n){i&&_(i,t,n),m(t,e,n),r=!0},p:function(t,r){var s=t.level1?P(n,[r.level1.props]):{};if(o!==(o=r.level1.component)){if(i){N();var u=i;x(u.$$.fragment,1,0,function(){O(u,1)}),A()}o?((i=new o(a())).$$.fragment.c(),w(i.$$.fragment,1),_(i,e.parentNode,e)):i=null}else o&&i.$set(s)},i:function(t){r||(i&&w(i.$$.fragment,t),r=!0)},o:function(t){i&&x(i.$$.fragment,t),r=!1},d:function(t){t&&v(e),i&&O(i,t)}}}function X(t){var e,r=new H({props:{error:t.error,status:t.status}});return{c:function(){r.$$.fragment.c()},l:function(t){r.$$.fragment.l(t)},m:function(t,n){_(r,t,n),e=!0},p:function(t,e){var n={};t.error&&(n.error=e.error),t.status&&(n.status=e.status),r.$set(n)},i:function(t){e||(w(r.$$.fragment,t),e=!0)},o:function(t){x(r.$$.fragment,t),e=!1},d:function(t){O(r,t)}}}function M(t){var e,r,n,o,a=[X,z],i=[];function s(t){return t.error?0:1}return e=s(t),r=i[e]=a[e](t),{c:function(){r.c(),n=R()},l:function(t){r.l(t),n=R()},m:function(t,r){i[e].m(t,r),m(t,n,r),o=!0},p:function(t,o){var u=e;(e=s(o))===u?i[e].p(t,o):(N(),x(i[u],1,1,function(){i[u]=null}),A(),(r=i[e])||(r=i[e]=a[e](o)).c(),w(r,1),r.m(n.parentNode,n))},i:function(t){o||(w(r),o=!0)},o:function(t){x(r),o=!1},d:function(t){i[e].d(t),t&&v(n)}}}function Q(t){for(var e,r=[{segment:t.segments[0]},t.level0.props],n={$$slots:{default:[M]},$$scope:{ctx:t}},o=0;o<r.length;o+=1)n=k(n,r[o]);var a=new K({props:n});return{c:function(){a.$$.fragment.c()},l:function(t){a.$$.fragment.l(t)},m:function(t,r){_(a,t,r),e=!0},p:function(t,e){var n=t.segments||t.level0?P(r,[t.segments&&{segment:e.segments[0]},t.level0&&e.level0.props]):{};(t.$$scope||t.error||t.status||t.level1)&&(n.$$scope={changed:t,ctx:e}),a.$set(n)},i:function(t){e||(w(a.$$.fragment,t),e=!0)},o:function(t){x(a.$$.fragment,t),e=!1},d:function(t){O(a,t)}}}function Z(t,e,r){var n=e.stores,o=e.error,a=e.status,i=e.segments,s=e.level0,u=e.level1,c=void 0===u?null:u;return j(D,n),t.$set=function(t){"stores"in t&&r("stores",n=t.stores),"error"in t&&r("error",o=t.error),"status"in t&&r("status",a=t.status),"segments"in t&&r("segments",i=t.segments),"level0"in t&&r("level0",s=t.level0),"level1"in t&&r("level1",c=t.level1)},{stores:n,error:o,status:a,segments:i,level0:s,level1:c}}var tt=function(t){function r(t){var n;return o(this,r),n=a(this,i(r).call(this)),s(u(n),t,Z,Q,e,["stores","error","status","segments","level0","level1"]),n}return n(r,c),r}(),et=[],rt=[{js:function(){return import("./index.c1240626.js")},css:["legacy/index.c1240626.css"]}],nt=[{pattern:/^\/$/,parts:[{i:0}]}];function ot(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},r=Et(new URL(t,document.baseURI));return r?(xt[e.replaceState?"replaceState":"pushState"]({id:gt},"",t),St(r,null).then(function(){})):(location.href=t,new Promise(function(t){}))}var at,it,st,ut,ct,lt="undefined"!=typeof __SAPPER__&&__SAPPER__,ft=!1,ht=[],pt="{}",vt={page:F({}),preloading:F(null),session:F(lt&&lt.session)};vt.session.subscribe(function(){var t=I(C.mark(function t(e){var r,n,o,a,i,s;return C.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(ut=e,ft){t.next=3;break}return t.abrupt("return");case 3:return ct=!0,r=Et(new URL(location.href)),n=it={},t.next=8,jt(r);case 8:if(o=t.sent,a=o.redirect,i=o.props,s=o.branch,n===it){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,_t(a,s,i,r.page);case 16:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());var dt,mt=null;var gt,yt=1;var wt,xt="undefined"!=typeof history?history:{pushState:function(t,e,r){},replaceState:function(t,e,r){},scrollRestoration:""},bt={};function $t(e){var r=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(function(e){var n=q(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),o=n[1],a=n[2],i=void 0===a?"":a;"string"==typeof r[o]&&(r[o]=[r[o]]),"object"===t(r[o])?r[o].push(i):r[o]=i}),r}function Et(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(lt.baseUrl))return null;var e=t.pathname.slice(lt.baseUrl.length);if(""===e&&(e="/"),!et.some(function(t){return t.test(e)}))for(var r=0;r<nt.length;r+=1){var n=nt[r],o=n.pattern.exec(e);if(o){var a=$t(t.search),i=n.parts[n.parts.length-1],s=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:s};return{href:t.href,route:n,match:o,page:u}}}}function Lt(){return{x:pageXOffset,y:pageYOffset}}function St(t,e,r,n){return kt.apply(this,arguments)}function kt(){return(kt=I(C.mark(function t(e,r,n,o){var a,i,s,u,c,l,f,h,p;return C.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r?gt=r:(a=Lt(),bt[gt]=a,r=gt=++yt,bt[gt]=n?a:{x:0,y:0}),gt=r,at&&vt.preloading.set(!0),i=mt&&mt.href===e.href?mt.promise:jt(e),mt=null,s=it={},t.next=8,i;case 8:if(u=t.sent,c=u.redirect,l=u.props,f=u.branch,s===it){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,_t(c,f,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),n||(h=bt[r],o&&(p=document.getElementById(o.slice(1)))&&(h={x:0,y:p.getBoundingClientRect().top}),bt[gt]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}},t)}))).apply(this,arguments)}function _t(t,e,r,n){return Pt.apply(this,arguments)}function Pt(){return(Pt=I(C.mark(function t(e,r,n,o){var a,i;return C.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",ot(e.location,{replaceState:!0}));case 2:if(vt.page.set(o),vt.preloading.set(!1),!at){t.next=8;break}at.$set(n),t.next=17;break;case 8:return n.stores={page:{subscribe:vt.page.subscribe},preloading:{subscribe:vt.preloading.subscribe},session:vt.session},t.next=11,st;case 11:if(t.t0=t.sent,n.level0={props:t.t0},a=document.querySelector("#sapper-head-start"),i=document.querySelector("#sapper-head-end"),a&&i){for(;a.nextSibling!==i;)qt(a.nextSibling);qt(a),qt(i)}at=new tt({target:dt,props:n,hydrate:!0});case 17:ht=r,pt=JSON.stringify(o.query),ft=!0,ct=!1;case 21:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Ot(t,e,r,n){if(n!==pt)return!0;var o=ht[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0))}function jt(t){return Rt.apply(this,arguments)}function Rt(){return(Rt=I(C.mark(function t(e){var r,n,o,a,i,s,u,c,l,f,h;return C.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.route,n=e.page,o=n.path.split("/").filter(Boolean),a=null,i={error:null,status:200,segments:[o[0]]},s={fetch:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t,e){return fetch(t,e)}),redirect:function(t,e){if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:function(t,e){i.error="string"==typeof e?new Error(e):e,i.status=t}},st||(st=lt.preloaded[0]||B.call(s,{host:n.host,path:n.path,query:n.query,params:{}},ut)),c=1,t.prev=7,l=JSON.stringify(n.query),f=r.pattern.exec(n.path),h=!1,t.next=13,Promise.all(r.parts.map(function(){var t=I(C.mark(function t(r,a){var u,p,v,d,m,g;return C.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(u=o[a],Ot(a,u,f,l)&&(h=!0),i.segments[c]=o[a+1],r){t.next=5;break}return t.abrupt("return",{segment:u});case 5:if(p=c++,ct||h||!ht[a]||ht[a].part!==r.i){t.next=8;break}return t.abrupt("return",ht[a]);case 8:return h=!1,t.next=11,At(rt[r.i]);case 11:if(v=t.sent,d=v.default,m=v.preload,!ft&&lt.preloaded[a+1]){t.next=25;break}if(!m){t.next=21;break}return t.next=18,m.call(s,{host:n.host,path:n.path,query:n.query,params:r.params?r.params(e.match):{}},ut);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=lt.preloaded[a+1];case 26:return t.abrupt("return",i["level".concat(p)]={component:d,props:g,segment:u,match:f,part:r.i});case 27:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()));case 13:u=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),i.error=t.t0,i.status=500,u=[];case 21:return t.abrupt("return",{redirect:a,props:i,branch:u});case 22:case"end":return t.stop()}},t,null,[[7,16]])}))).apply(this,arguments)}function Nt(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise(function(t,r){var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onload=function(){return t()},n.onerror=r,document.head.appendChild(n)})}function At(t){var e="string"==typeof t.css?[]:t.css.map(Nt);return e.unshift(t.js()),Promise.all(e).then(function(t){return t[0]})}function qt(t){t.parentNode.removeChild(t)}function Ut(t){var e=Et(new URL(t,document.baseURI));if(e)return mt&&t===mt.href||function(t,e){mt={href:t,promise:e}}(t,jt(e)),mt.promise}function Ct(t){clearTimeout(wt),wt=setTimeout(function(){Gt(t)},20)}function Gt(t){var e=Tt(t.target);e&&"prefetch"===e.rel&&Ut(e.href)}function It(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var r=Tt(e.target);if(r&&r.href){var n="object"===t(r.href)&&"SVGAnimatedString"===r.href.constructor.name,o=String(n?r.href.baseVal:r.href);if(o!==location.href){if(!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")&&(n?!r.target.baseVal:!r.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=Et(a);if(i)St(i,null,r.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),xt.pushState({id:gt},"",a.href)}}}else location.hash||e.preventDefault()}}}function Tt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Ft(t){if(bt[gt]=Lt(),t.state){var e=Et(new URL(location.href));e?St(e,t.state.id):location.href=location.href}else(function(t){gt=t})(yt=yt+1),xt.replaceState({id:gt},"",location.href)}!function(t){var e;"scrollRestoration"in xt&&(xt.scrollRestoration="manual"),e=t.target,dt=e,addEventListener("click",It),addEventListener("popstate",Ft),addEventListener("touchstart",Gt),addEventListener("mousemove",Ct),Promise.resolve().then(function(){var t=location,e=t.hash,r=t.href;xt.replaceState({id:yt},"",r);var n,o,a,i,s,u,c,l,f=new URL(location.href);if(lt.error)return n=location,o=n.host,a=n.pathname,i=n.search,s=lt.session,u=lt.preloaded,c=lt.status,l=lt.error,st||(st=u&&u[0]),void _t(null,[],{error:l,status:c,session:s,level0:{props:st},level1:{props:{status:c,error:l},component:H},segments:u},{host:o,path:a,query:$t(i),params:{}});var h=Et(f);return h?St(h,yt,!0,e):void 0})}({target:document.querySelector("#app")});