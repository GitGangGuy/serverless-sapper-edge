import{S as e,i as t,s as o,l as n,e as s,m as r,o as a,a as i,b as c,d as u,f as l,g as m,p as d,n as h,B as v,C as f}from"./index.074b0cf4.js";const{document:y}=f;function g(e){var t,o,v,f,g,p,S,b;return{c(){t=n(),o=s("h1"),v=r("Dotversum"),f=n(),g=s("h3"),p=r("Coming Soon"),S=n(),b=s("div"),this.h()},l(e){t=a(e,"\r\n"),o=i(e,"H1",{class:!0},!1);var n=c(o);v=a(n,"Dotversum"),n.forEach(u),f=a(e,"\r\n"),g=i(e,"H3",{class:!0},!1);var s=c(g);p=a(s,"Coming Soon"),s.forEach(u),S=a(e,"\r\n"),b=i(e,"DIV",{id:!0,class:!0},!1),c(b).forEach(u),this.h()},h(){y.title="Dotversum",l(o,"class","animate svelte-7nivej"),l(g,"class","animate svelte-7nivej"),l(b,"id","logo"),l(b,"class","svelte-7nivej")},m(e,n){m(e,t,n),m(e,o,n),d(o,v),m(e,f,n),m(e,g,n),d(g,p),m(e,S,n),m(e,b,n)},p:h,i:h,o:h,d(e){e&&(u(t),u(o),u(f),u(g),u(S),u(b))}}}function p(e){return v(function(){var e=50,t=50,o=0,n=30;window.teasers=["expanding the boundaries","striving new innovation","uncompromising services","refining the technological horizon","revolutionizing milestones","profound to your startup","reinvent business at its core","more accessible, beautiful and responsive than ever before","powerful","unique"],setInterval(function(){((n+=30*(Math.random()-.5))>40||n<20)&&(n=30),document.querySelector("#logo").style.filter="brightness("+n+"%) contrast(150%) blur(3px) opacity(70%)"},4e3),setInterval(function(){e+=50*(Math.random()-.5),t+=50*(Math.random()-.5),(e>90||e<10)&&(e=50),(t>90||t<10)&&(t=50),document.querySelectorAll(".animate").forEach(function(o){o.style.backgroundPosition=e.toString()+"% "+t.toString()+"%"})},1e3),setInterval(function(){(o+=1)==teasers.length&&(o=0),document.querySelector("h1").style.opacity="0",document.querySelector("#logo").style.opacity="0",setTimeout(function(){document.querySelector("h1").innerHTML=0==o?"Dotversum":teasers[o],setTimeout(function(){document.querySelector("h1").style.opacity="1",document.querySelector("#logo").style.opacity="1"},200)},1500)},1e4)}),{}}export default class extends e{constructor(e){super(),t(this,e,p,g,o,[])}}