import{s as e,n as t,S as r,i as s,c as n,e as o,a,b as l,d as c,f as i,g as u,h as p,j as f,t as h,k as m,l as d,m as g,o as v,p as $,q as y,r as b,u as S,v as w,w as x,x as E,y as R,z as _,A as q}from"./index.074b0cf4.js";const P=[];function L(r,s=t){let n;const o=[];function a(t){if(e(r,t)&&(r=t,n)){const e=!P.length;for(let e=0;e<o.length;e+=1){const t=o[e];t[1](),P.push(t,r)}if(e){for(let e=0;e<P.length;e+=2)P[e][0](P[e+1]);P.length=0}}}return{set:a,update:function(e){a(e(r))},subscribe:function(e,l=t){const c=[e,l];return o.push(c),1===o.length&&(n=s(a)||t),e(r),()=>{const e=o.indexOf(c);-1!==e&&o.splice(e,1),0===o.length&&(n(),n=null)}}}}const U={},A=()=>({});function C(e){var t,r;const s=e.$$slots.default,d=n(s,e,null);return{c(){t=o("div"),d&&d.c(),this.h()},l(e){t=a(e,"DIV",{class:!0},!1);var r=l(t);d&&d.l(r),r.forEach(c),this.h()},h(){i(t,"class","centered svelte-1sjhgv1")},m(e,s){u(e,t,s),d&&d.m(t,null),r=!0},p(e,t){d&&d.p&&e.$$scope&&d.p(p(s,t,e,null),f(s,t,null))},i(e){r||(h(d,e),r=!0)},o(e){m(d,e),r=!1},d(e){e&&c(t),d&&d.d(e)}}}function j(e,t,r){let{$$slots:s={},$$scope:n}=t;return e.$set=(e=>{"$$scope"in e&&r("$$scope",n=e.$$scope)}),{$$slots:s,$$scope:n}}class N extends r{constructor(t){super(),s(this,t,j,C,e,[])}}function O(e){var r,s,n,p,f,h,m,b=e.error.message+"";return document.title=r="dotversum - "+e.status,{c(){s=d(),n=o("h1"),p=g("We've encountered an error: "),f=g(e.status),h=g(" - "),m=g(b),this.h()},l(t){s=v(t,"\r\n"),n=a(t,"H1",{class:!0},!1);var r=l(n);p=v(r,"We've encountered an error: "),f=v(r,e.status),h=v(r," - "),m=v(r,b),r.forEach(c),this.h()},h(){i(n,"class","svelte-1rlcde3")},m(e,t){u(e,s,t),u(e,n,t),$(n,p),$(n,f),$(n,h),$(n,m)},p(e,t){e.status&&r!==(r="dotversum - "+t.status)&&(document.title=r),e.status&&y(f,t.status),e.error&&b!==(b=t.error.message+"")&&y(m,b)},i:t,o:t,d(e){e&&(c(s),c(n))}}}function I(e,t,r){let{status:s,error:n}=t;return e.$set=(e=>{"status"in e&&r("status",s=e.status),"error"in e&&r("error",n=e.error)}),{status:s,error:n}}class k extends r{constructor(t){super(),s(this,t,I,O,e,["status","error"])}}function D(e){var t,r,s=[e.level1.props],n=e.level1.component;function o(e){let t={};for(var r=0;r<s.length;r+=1)t=b(t,s[r]);return{props:t}}if(n)var a=new n(o());return{c(){a&&a.$$.fragment.c(),t=R()},l(e){a&&a.$$.fragment.l(e),t=R()},m(e,s){a&&S(a,e,s),u(e,t,s),r=!0},p(e,r){var l=e.level1?w(s,[r.level1.props]):{};if(n!==(n=r.level1.component)){if(a){_();const e=a;m(e.$$.fragment,1,0,()=>{x(e,1)}),q()}n?((a=new n(o())).$$.fragment.c(),h(a.$$.fragment,1),S(a,t.parentNode,t)):a=null}else n&&a.$set(l)},i(e){r||(a&&h(a.$$.fragment,e),r=!0)},o(e){a&&m(a.$$.fragment,e),r=!1},d(e){e&&c(t),a&&x(a,e)}}}function J(e){var t,r=new k({props:{error:e.error,status:e.status}});return{c(){r.$$.fragment.c()},l(e){r.$$.fragment.l(e)},m(e,s){S(r,e,s),t=!0},p(e,t){var s={};e.error&&(s.error=t.error),e.status&&(s.status=t.status),r.$set(s)},i(e){t||(h(r.$$.fragment,e),t=!0)},o(e){m(r.$$.fragment,e),t=!1},d(e){x(r,e)}}}function V(e){var t,r,s,n,o=[J,D],a=[];function l(e){return e.error?0:1}return t=l(e),r=a[t]=o[t](e),{c(){r.c(),s=R()},l(e){r.l(e),s=R()},m(e,r){a[t].m(e,r),u(e,s,r),n=!0},p(e,n){var c=t;(t=l(n))===c?a[t].p(e,n):(_(),m(a[c],1,1,()=>{a[c]=null}),q(),(r=a[t])||(r=a[t]=o[t](n)).c(),h(r,1),r.m(s.parentNode,s))},i(e){n||(h(r),n=!0)},o(e){m(r),n=!1},d(e){a[t].d(e),e&&c(s)}}}function B(e){var t,r=[{segment:e.segments[0]},e.level0.props];let s={$$slots:{default:[V]},$$scope:{ctx:e}};for(var n=0;n<r.length;n+=1)s=b(s,r[n]);var o=new N({props:s});return{c(){o.$$.fragment.c()},l(e){o.$$.fragment.l(e)},m(e,r){S(o,e,r),t=!0},p(e,t){var s=e.segments||e.level0?w(r,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(s.$$scope={changed:e,ctx:t}),o.$set(s)},i(e){t||(h(o.$$.fragment,e),t=!0)},o(e){m(o.$$.fragment,e),t=!1},d(e){x(o,e)}}}function K(e,t,r){let{stores:s,error:n,status:o,segments:a,level0:l,level1:c=null}=t;return E(U,s),e.$set=(e=>{"stores"in e&&r("stores",s=e.stores),"error"in e&&r("error",n=e.error),"status"in e&&r("status",o=e.status),"segments"in e&&r("segments",a=e.segments),"level0"in e&&r("level0",l=e.level0),"level1"in e&&r("level1",c=e.level1)}),{stores:s,error:n,status:o,segments:a,level0:l,level1:c}}class T extends r{constructor(t){super(),s(this,t,K,B,e,["stores","error","status","segments","level0","level1"])}}const W=[],H=[{js:()=>import("./index.5408e6ad.js"),css:["index.5408e6ad.css"]}],z=[{pattern:/^\/$/,parts:[{i:0}]}];const G="undefined"!=typeof __SAPPER__&&__SAPPER__;let X,Y,F,M=!1,Q=[],Z="{}";const ee={page:L({}),preloading:L(null),session:L(G&&G.session)};let te,re;ee.session.subscribe(async e=>{if(te=e,!M)return;re=!0;const t=ue(new URL(location.href)),r=Y={},{redirect:s,props:n,branch:o}=await me(t);r===Y&&await he(s,o,n,t.page)});let se,ne=null;let oe,ae=1;const le="undefined"!=typeof history?history:{pushState:(e,t,r)=>{},replaceState:(e,t,r)=>{},scrollRestoration:""},ce={};function ie(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,r,s=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[r]&&(t[r]=[t[r]]),"object"==typeof t[r]?t[r].push(s):t[r]=s}),t}function ue(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(G.baseUrl))return null;let t=e.pathname.slice(G.baseUrl.length);if(""===t&&(t="/"),!W.some(e=>e.test(t)))for(let r=0;r<z.length;r+=1){const s=z[r],n=s.pattern.exec(t);if(n){const r=ie(e.search),o=s.parts[s.parts.length-1],a=o.params?o.params(n):{},l={host:location.host,path:t,query:r,params:a};return{href:e.href,route:s,match:n,page:l}}}}function pe(){return{x:pageXOffset,y:pageYOffset}}async function fe(e,t,r,s){if(t)oe=t;else{const e=pe();ce[oe]=e,t=oe=++ae,ce[oe]=r?e:{x:0,y:0}}oe=t,X&&ee.preloading.set(!0);const n=ne&&ne.href===e.href?ne.promise:me(e);ne=null;const o=Y={},{redirect:a,props:l,branch:c}=await n;if(o===Y&&(await he(a,c,l,e.page),document.activeElement&&document.activeElement.blur(),!r)){let e=ce[t];if(s){const t=document.getElementById(s.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}ce[oe]=e,e&&scrollTo(e.x,e.y)}}async function he(e,t,r,s){if(e)return function(e,t={replaceState:!1}){const r=ue(new URL(e,document.baseURI));return r?(le[t.replaceState?"replaceState":"pushState"]({id:oe},"",e),fe(r,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(ee.page.set(s),ee.preloading.set(!1),X)X.$set(r);else{r.stores={page:{subscribe:ee.page.subscribe},preloading:{subscribe:ee.preloading.subscribe},session:ee.session},r.level0={props:await F};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)ge(e.nextSibling);ge(e),ge(t)}X=new T({target:se,props:r,hydrate:!0})}Q=t,Z=JSON.stringify(s.query),M=!0,re=!1}async function me(e){const{route:t,page:r}=e,s=r.path.split("/").filter(Boolean);let n=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};let l;F||(F=G.preloaded[0]||A.call(a,{host:r.host,path:r.path,query:r.query,params:{}},te));let c=1;try{const n=JSON.stringify(r.query),i=t.pattern.exec(r.path);let u=!1;l=await Promise.all(t.parts.map(async(t,l)=>{const p=s[l];if(function(e,t,r,s){if(s!==Z)return!0;const n=Q[e];return!!n&&(t!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(r.slice(1,e+2)))||void 0)}(l,p,i,n)&&(u=!0),o.segments[c]=s[l+1],!t)return{segment:p};const f=c++;if(!re&&!u&&Q[l]&&Q[l].part===t.i)return Q[l];u=!1;const{default:h,preload:m}=await function(e){const t="string"==typeof e.css?[]:e.css.map(de);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(H[t.i]);let d;return d=M||!G.preloaded[l+1]?m?await m.call(a,{host:r.host,path:r.path,query:r.query,params:t.params?t.params(e.match):{}},te):{}:G.preloaded[l+1],o[`level${f}`]={component:h,props:d,segment:p,match:i,part:t.i}}))}catch(e){o.error=e,o.status=500,l=[]}return{redirect:n,props:o,branch:l}}function de(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,r)=>{const s=document.createElement("link");s.rel="stylesheet",s.href=t,s.onload=(()=>e()),s.onerror=r,document.head.appendChild(s)})}function ge(e){e.parentNode.removeChild(e)}function ve(e){const t=ue(new URL(e,document.baseURI));if(t)return ne&&e===ne.href||function(e,t){ne={href:e,promise:t}}(e,me(t)),ne.promise}let $e;function ye(e){clearTimeout($e),$e=setTimeout(()=>{be(e)},20)}function be(e){const t=we(e.target);t&&"prefetch"===t.rel&&ve(t.href)}function Se(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=we(e.target);if(!t)return;if(!t.href)return;const r="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(r?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(r?t.target.baseVal:t.target)return;const n=new URL(s);if(n.pathname===location.pathname&&n.search===location.search)return;const o=ue(n);if(o){fe(o,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),le.pushState({id:oe},"",n.href)}}function we(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function xe(e){if(ce[oe]=pe(),e.state){const t=ue(new URL(location.href));t?fe(t,e.state.id):location.href=location.href}else(function(e){oe=e})(ae=ae+1),le.replaceState({id:oe},"",location.href)}!function(e){var t;"scrollRestoration"in le&&(le.scrollRestoration="manual"),t=e.target,se=t,addEventListener("click",Se),addEventListener("popstate",xe),addEventListener("touchstart",be),addEventListener("mousemove",ye),Promise.resolve().then(()=>{const{hash:e,href:t}=location;le.replaceState({id:ae},"",t);const r=new URL(location.href);if(G.error)return function(e){const{host:t,pathname:r,search:s}=location,{session:n,preloaded:o,status:a,error:l}=G;F||(F=o&&o[0]),he(null,[],{error:l,status:a,session:n,level0:{props:F},level1:{props:{status:a,error:l},component:k},segments:o},{host:t,path:r,query:ie(s),params:{}})}();const s=ue(r);return s?fe(s,ae,!0,e):void 0})}({target:document.querySelector("#app")});