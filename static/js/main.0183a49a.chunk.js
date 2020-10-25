(this["webpackJsonpthe-contortionist"]=this["webpackJsonpthe-contortionist"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=(n(12),n(2)),i=n(4),l=n(1),s=n.n(l),u=n(6),h=n.n(u);function f(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("savedData"))),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){n||r({lastCompleted:null}),localStorage.setItem("savedData",JSON.stringify(n))}),[n]);var l=s.a.get(n,"currentKey"),u=Object(a.useState)({secondsRemaining:150,intervalRef:null,start:function(){return g((function(e){return Object(c.a)(Object(c.a)({},e),{},{intervalRef:setInterval(e.decrementSeconds,1e3)})}))},pause:function(){return g((function(e){return clearInterval(e.intervalRef),Object(c.a)(Object(c.a)({},e),{},{intervalRef:null})}))},reset:function(){return g((function(e){return clearInterval(e.intervalRef),Object(c.a)(Object(c.a)({},e),{},{intervalRef:null,secondsRemaining:150})}))},decrementSeconds:function(){return g((function(e){return Object(c.a)(Object(c.a)({},e),{},{secondsRemaining:e.secondsRemaining-1})}))}}),f=Object(i.a)(u,2),d=f[0],g=f[1],v=d.secondsRemaining,b=d.intervalRef,p=d.start,y=d.pause,R=d.reset,w=Boolean(b),S="".concat(s.a.floor(v/60),":").concat(v%60<10?"0".concat(v%60):v%60),k=s.a.findIndex(m,{key:l}),O=s.a.nth(m,k-1),j=l?s.a.find(m,{key:l}):s.a.head(m),E=s.a.nth(s.a.concat(m,m),k+1),N=function(){r(Object(c.a)(Object(c.a)({},n),{},{currentKey:s.a.get(E,"key")})),R()};return Object(a.useEffect)((function(){v<=0&&(new Notification("Mobility Queue",{body:"Times up!",icon:"".concat(window.location.href,"favicon.ico")}),N())}),[v]),Object(a.useEffect)((function(){"denied"!==Notification.permission&&Notification.requestPermission(),"granted"===Notification.permission&&new Notification("Mobility Queue",{body:"Times up!",icon:"".concat(window.location.href,"favicon.ico")})}),[Notification.permission]),o.a.createElement("div",{className:"body"},o.a.createElement("div",{className:"header"},o.a.createElement("img",{src:h.a,alt:"Site logo, woman stretching"}),o.a.createElement("p",null,"A rolling queue of ",s.a.size(m)," stretching and rolling activities with a timer and a record of where you left off last time. Try to do ",s.a.ceil(s.a.size(m)/7)," every day to get through every body part in a week.")),o.a.createElement("div",{className:"current"},o.a.createElement("p",{className:"-smaller"},"Previous activity: ",s.a.get(O,"label")),o.a.createElement("h4",null,"Current activity: ",s.a.get(j,"label")),o.a.createElement("p",{className:"-smaller"},"Next activity: ",s.a.get(E,"label"))),o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"timer"},o.a.createElement("div",{className:"time"},S),o.a.createElement("div",{className:"controls"},o.a.createElement("button",{onClick:w?R:function(){w?R():r(Object(c.a)(Object(c.a)({},n),{},{currentKey:s.a.get(O,"key")}))}},w?"Restart":"Back"),o.a.createElement("button",{onClick:w?y:p},w?"Pause":"Start"),o.a.createElement("button",{onClick:N},"Next")))))}var m=s.a.flatten(s.a.map([{name:"hamstring",hasStretch:!0,hasRolling:!0},{name:"glute",hasStretch:!0,hasRolling:!0},{name:"lat",hasStretch:!0,hasRolling:!0},{name:"pec",hasStretch:!0,hasRolling:!0},{name:"quad",hasStretch:!0,hasRolling:!0},{name:"hip-flexor",hasStretch:!0,hasRolling:!0},{name:"forearm",hasStretch:!0,hasRolling:!0},{name:"tricep",hasStretch:!0,hasRolling:!0},{name:"front-shoulder",hasStretch:!0,hasRolling:!1},{name:"groin",hasStretch:!0,hasRolling:!0},{name:"calf",hasStretch:!0,hasRolling:!0},{name:"trap",hasStretch:!1,hasRolling:!0}],(function(e){return function(e){var t=e.name,n=e.hasStretch,a=[];return e.hasRolling&&a.push({key:"".concat(t,"-roll-right"),type:"rolling",label:"Foam Roll Right ".concat(s.a.startCase(t))},{key:"".concat(t,"-roll-left"),type:"rolling",label:"Foam Roll Left ".concat(s.a.startCase(t))}),n&&a.push({key:"".concat(t,"-stretch-right"),type:"stretching",label:"Stretch Right ".concat(s.a.startCase(t))},{key:"".concat(t,"-stretch-left"),type:"stretching",label:"Stretch Left ".concat(s.a.startCase(t))}),a}(e)}))),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){return console.error("Error during service worker registration:",e)}))}var v,b=document.getElementById("root");b.hasChildNodes()?Object(r.hydrate)(o.a.createElement(f,null),b):Object(r.render)(o.a.createElement(f,null),b),"serviceWorker"in navigator&&window.addEventListener("load",(function(){var e="".concat(window.location.href,"service-worker.js");d?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){return e.unregister().then((function(){return window.location.reload()}))})):g(e,t)})).catch((function(){return console.log("No internet connection found. App is running in offline mode.")}))}(e,v),navigator.serviceWorker.ready.then((function(){return console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(e,v)}))},6:function(e,t,n){e.exports=n.p+"static/media/logo.82113bab.png"},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.0183a49a.chunk.js.map