(this.webpackJsonphangman=this.webpackJsonphangman||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),c=n(6),s=n.n(c),a=(n(12),n(7)),r=n(5),l=(n(13),n(14),n(0)),d="#282c34";function h(e){var t=e.misses;return Object(o.useEffect)((function(){var e=document.getElementById("hangman_canvas"),t=e.getContext("2d");t.fillStyle="#465269",t.fillRect(0,0,e.width,e.height),t.strokeStyle=d,t.lineWidth=5,t.moveTo(200,150),t.lineTo(200,80),t.lineTo(500,80),t.lineTo(500,550),t.moveTo(560,550),t.lineTo(440,550),t.stroke(),t.moveTo(200,200)}),[]),Object(o.useEffect)((function(){var e=document.getElementById("hangman_canvas").getContext("2d");1===t&&(e.beginPath(),e.strokeStyle=d,e.lineWidth=5,e.arc(200,200,40,0,2*Math.PI),e.stroke()),2===t&&(e.strokeStyle=d,e.lineWidth=5,e.moveTo(200,240),e.lineTo(200,370),e.stroke()),3===t&&(e.strokeStyle=d,e.lineWidth=5,e.moveTo(200,370),e.lineTo(230,460),e.stroke()),4===t&&(e.strokeStyle=d,e.lineWidth=5,e.moveTo(200,370),e.lineTo(170,460),e.stroke()),5===t&&(e.strokeStyle=d,e.lineWidth=5,e.moveTo(200,290),e.lineTo(260,270),e.stroke()),6===t&&(e.strokeStyle=d,e.lineWidth=5,e.moveTo(200,290),e.lineTo(140,270),e.stroke())}),[t]),Object(l.jsx)("canvas",{id:"hangman_canvas",width:"600",height:"600",children:"Your browser does not support the canvas element."})}var u=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1],c=Object(o.useState)(0),s=Object(r.a)(c,2),d=s[0],u=s[1],j="stackoverflow and stuff",v=d>6,b=new RegExp("[^".concat(n.join("")," ]"),"gi"),m=j.replace(b,"_");return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{misses:d}),Object(l.jsx)("div",{className:"phrase",children:m}),Object(l.jsx)("div",{className:"alphabet",children:"abcdefghijklmnopqrstuvwxyz".split("").map((function(e){return Object(l.jsx)("input",{className:"character_buttons",type:"button",disabled:v||n.indexOf(e)>-1,value:e,onClick:function(){return function(e){-1==j.indexOf(e)&&u(d+1),i([].concat(Object(a.a)(n),[e]))}(e)}})}))}),v&&Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"You Lose"}),Object(l.jsxs)("div",{children:['Phrase: "',j,'"']})]})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),o(e),i(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.fe2a8321.chunk.js.map