(this["webpackJsonpcaeser-cipher"]=this["webpackJsonpcaeser-cipher"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(3),l=a.n(c),o=a(1),s=(a(9),function(e){return n.a.createElement("input",Object.assign({},e,{className:"Input"}))}),i=function(e){var t=e.onChange,a=e.numOfShifts,r=Array(a+1).fill(0).map((function(e,t){return n.a.createElement("option",{value:t,key:t,className:"Option Option-".concat(t)},t)}));return n.a.createElement("select",{onChange:t,className:"Shift"},n.a.createElement("option",{value:0},"--Please choose a shift value--"),r)};i.defaultProps={numOfShifts:25};var u=i,m=/[a-zA-Z]/;l.a.render(n.a.createElement((function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(r.useState)(0),i=Object(o.a)(l,2),f=i[0],p=i[1],h=Object(r.useState)(a),E=Object(o.a)(h,2),v=E[0],C=E[1],d=function(e,t){var a="",r=!0,n=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done);r=!0){var s=l.value;a+=b(s,t)}}catch(i){n=!0,c=i}finally{try{r||null==o.return||o.return()}finally{if(n)throw c}}return a},b=function(e,t){var a=e.charCodeAt(0);if(m.test(e)){var r;a>=65&&a<=90&&(r=65),a>=97&&a<=122&&(r=97);var n=(a-r+t)%26+r;return String.fromCharCode(n)}return e};return n.a.createElement("main",{className:"App"},n.a.createElement("a",{className:"gh-link",href:"https://github.com/carlosdlroca/caeser-cipher"},"Link to Code"),n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},n.a.createElement("defs",null,n.a.createElement("linearGradient",{id:"myGradient"},n.a.createElement("stop",{offset:"0%","stop-color":"#eb3349"}),n.a.createElement("stop",{offset:"100%","stop-color":"#f45c43"}))),n.a.createElement("path",{fill:"url(#myGradient)","fill-opacity":"1",d:"M0,32L40,64C80,96,160,160,240,160C320,160,400,96,480,74.7C560,53,640,75,720,90.7C800,107,880,117,960,133.3C1040,149,1120,171,1200,181.3C1280,192,1360,192,1400,192L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"})),n.a.createElement("header",{className:"HeaderTitle"},"Caeser Cipher"),n.a.createElement("section",{className:"Cipher"},n.a.createElement(s,{value:a,placeholder:"Enter your text",onChange:function(e){var t=e.target.value;c(t),C(d(t,f))}}),n.a.createElement(u,{onChange:function(e){var t=e.target.value;p(Number(t)),C(d(a,Number(t)))}}),n.a.createElement("h3",{className:"EncryptedText"},n.a.createElement("span",{class:"EncryptedLabel"},"Encrypted:")," ",n.a.createElement("br",null)," ",v)))}),null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.1120eef2.chunk.js.map