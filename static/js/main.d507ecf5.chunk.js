(this["webpackJsonpthe-contortionist"]=this["webpackJsonpthe-contortionist"]||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(6),r=(n(15),n(3)),i=n(7),o=n.n(i),s=n(10),l=n(4),u=n(0),d=n.n(u),f=n(8),h=n.n(f);var m=n.p+"static/media/logo.62967c48.png",b=n.p+"static/media/single-ding-sound-effect.ab26721d.mp3",j=n(1),g=new Audio(b);function v(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(function(e,t,n){var c=e.map((function(e){return window.matchMedia(e)})),r=function(){var e=c.findIndex((function(e){return e.matches}));return"undefined"!==typeof t[e]?t[e]:n},i=Object(a.useState)(r),o=Object(l.a)(i,2),s=o[0],u=o[1];return Object(a.useEffect)((function(){var e=function(){return u(r)};return c.forEach((function(t){return t.addListener(e)})),function(){return c.forEach((function(t){return t.removeListener(e)}))}}),[]),s}(["(prefers-color-scheme: dark)"],[!0],!1)),u=Object(l.a)(i,2),f=u[0],b=u[1];Object(a.useEffect)((function(){Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,h.a.getItem("currentKey");case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(a.useEffect)((function(){h.a.setItem("currentKey",n)}),[n]);var v=d.a.debounce((function(){var e=d.a.get(window,"innerHeight");document.getElementById("root").setAttribute("style","height: ".concat(e,"; max-height: ").concat(e,";"))}),100);Object(a.useEffect)((function(){return v(),window.addEventListener("resize",v),function(){return window.removeEventListener("resize")}}),[]);var O=Object(a.useState)({secondsRemaining:150,intervalRef:null,start:function(){return x((function(e){return Object(r.a)(Object(r.a)({},e),{},{intervalRef:setInterval(e.decrementSeconds,1e3)})}))},pause:function(){return x((function(e){return clearInterval(e.intervalRef),Object(r.a)(Object(r.a)({},e),{},{intervalRef:null})}))},reset:function(){return x((function(e){return clearInterval(e.intervalRef),Object(r.a)(Object(r.a)({},e),{},{intervalRef:null,secondsRemaining:150})}))},decrementSeconds:function(){return x((function(e){return Object(r.a)(Object(r.a)({},e),{},{secondsRemaining:e.secondsRemaining-1})}))}}),y=Object(l.a)(O,2),R=y[0],x=y[1],k=R.secondsRemaining,w=R.intervalRef,N=R.start,S=R.pause,C=R.reset,E=Boolean(w),I="".concat(d.a.floor(k/60),":").concat(k%60<10?"0".concat(k%60):k%60),L=p({includeRolling:!1}),z=d.a.findIndex(L,{key:n})||0,q=0===z,B=z===d.a.size(L)-1,A=q?d.a.last(L):d.a.nth(L,z-1),F=n?d.a.find(L,{key:n}):d.a.head(L),J=B?d.a.head(L):d.a.nth(L,z+1),K=function(){c(d.a.get(J,"key")),C()};return Object(a.useEffect)((function(){k<=0&&(g.play(),K())}),[k]),d.a.isUndefined(n)?null:Object(j.jsxs)("div",{className:f?"body -dark-mode":"body",id:"body",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("img",{src:m,alt:"Site logo, woman stretching"}),Object(j.jsxs)("p",{children:["A rolling queue of ",d.a.size(L)," stretching activities with a timer and a record of where you left off last time. Try to do ",d.a.ceil(d.a.size(L)/7)," every day to get through every body part in a week."]})]}),Object(j.jsxs)("div",{className:"current",children:[Object(j.jsxs)("h4",{children:["Current activity: ",d.a.get(F,"label")]}),Object(j.jsxs)("p",{className:"-smaller",children:["Next activity: ",d.a.get(J,"label")]})]}),Object(j.jsx)("div",{className:"main",children:Object(j.jsxs)("div",{className:"timer",children:[Object(j.jsx)("div",{className:"time",children:I}),Object(j.jsxs)("div",{className:"controls",children:[Object(j.jsx)("button",{onClick:E?C:function(){E?C():c(d.a.get(A,"key"))},children:E?"Restart":"Back"}),Object(j.jsx)("button",{onClick:E?S:function(){N(),g.play(),g.pause()},children:E?"Pause":"Start"}),Object(j.jsx)("button",{onClick:K,children:"Next"})]})]})}),Object(j.jsx)("div",{className:"dark-mode-toggle",children:Object(j.jsx)("button",{onClick:function(){return b((function(e){return!e}))},children:Object(j.jsx)("span",{className:f?"fa-sun":"fa-moon"})})})]})}var O=[{name:"standing-pike-stretch",unilateral:!1,hasRolling:!1},{name:"glute"},{name:"lat"},{name:"pec"},{name:"quad"},{name:"hamstring",hasRolling:!1},{name:"frog-stretch",unilateral:!1,hasRolling:!1},{name:"calf",hasRolling:!1},{name:"quad"},{name:"forearm"},{name:"tricep"},{name:"lotus",hasRolling:!1},{name:"front-shoulder",hasRolling:!1},{name:"quad"},{name:"groin",hasStretch:!1},{name:"frog-stretch",unilateral:!1,hasRolling:!1},{name:"calf"},{name:"trap",hasStretch:!1}],p=function(e){var t=e.includeRolling,n=void 0!==t&&t;return d.a.flatten(d.a.map(O,(function(e,t){return function(e,t,n){var a=e.name,c=e.hasStretch,r=void 0===c||c,i=e.hasRolling,o=void 0===i||i,s=e.unilateral,l=[];return void 0===s||s?(o&&t&&l.push({key:"".concat(a,"-roll-right-").concat(n),type:"rolling",label:"Foam Roll Right ".concat(d.a.startCase(a))},{key:"".concat(a,"-roll-left-").concat(n),type:"rolling",label:"Foam Roll Left ".concat(d.a.startCase(a))}),r&&l.push({key:"".concat(a,"-stretch-right-").concat(n),type:"stretching",label:"Stretch Right ".concat(d.a.startCase(a))},{key:"".concat(a,"-stretch-left-").concat(n),type:"stretching",label:"Stretch Left ".concat(d.a.startCase(a))})):(o&&t&&l.push({key:"".concat(a,"-").concat(n),type:"rolling",label:"".concat(d.a.startCase(a))}),r&&l.push({key:"".concat(a,"-").concat(n),type:"stretching",label:"".concat(d.a.startCase(a))})),l}(e,n,t)})))},y=document.getElementById("root");y.hasChildNodes()?Object(c.hydrate)(Object(j.jsx)(v,{}),y):Object(c.render)(Object(j.jsx)(v,{}),y)}},[[19,1,2]]]);
//# sourceMappingURL=main.d507ecf5.chunk.js.map