(this["webpackJsonpthe-contortionist"]=this["webpackJsonpthe-contortionist"]||[]).push([[0],{27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(13),c=n(20),i=(n(27),n(22)),s=n(14),o=n.n(s),l=n(4),u=n(21),d=n(6),f=n(3),b=n.n(f);var j=n(15),m=n.n(j),h=n(11),p=n(41),g=n.p+"static/media/logo.62967c48.png",O=n.p+"static/media/single-ding-sound-effect.ab26721d.mp3",y=n(2),v=new Audio(O),x=Object(p.a)({root:{flexGrow:1,padding:"2rem 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"},header:{marginBottom:"1em",textAlign:"center","& img ":{width:"min(95%, 25em)",filter:function(e){return e.darkMode?"invert(1) brightness(10)":""}},"& p":{textAlign:"justify"}},timer:{textAlign:"center",width:"100%"},time:{textAlign:"center",fontSize:"min(25vw, 7em)",color:"var(--highlight)"},controls:{width:"90%",margin:"0 auto",marginTop:"2em",display:"flex",justifyContent:"space-between"},buttonContainer:{width:"min(25%, 8em)",height:"3em","&  button":{textAlign:"center",borderRadius:"8px",border:"none",height:"100%",width:"100%",background:"var(--secondary)",overflow:"hidden",padding:0,cursor:"pointer"}}});function k(e){var t=e.state,n=e.dispatch,r=e.activitiesList,c=e.darkMode,i=x({darkMode:c}),s=t.duration,o=t.currentKey,u=Object(a.useState)({secondsRemaining:s,intervalRef:null,start:function(){return m((function(e){return Object(l.a)(Object(l.a)({},e),{},{intervalRef:setInterval(e.decrementSeconds,1e3)})}))},pause:function(){return m((function(e){return clearInterval(e.intervalRef),Object(l.a)(Object(l.a)({},e),{},{intervalRef:null})}))},reset:function(e){return m((function(t){return clearInterval(t.intervalRef),Object(l.a)(Object(l.a)({},t),{},{intervalRef:null,secondsRemaining:e})}))},decrementSeconds:function(){return m((function(e){return Object(l.a)(Object(l.a)({},e),{},{secondsRemaining:e.secondsRemaining-1})}))}}),f=Object(d.a)(u,2),j=f[0],m=f[1],h=j.secondsRemaining,p=j.intervalRef,O=j.start,k=j.pause,w=j.reset,C=Boolean(p),N="".concat(b.a.floor(h/60),":").concat(h%60<10?"0".concat(h%60):h%60),S=b.a.findIndex(r,{key:o})||0,M=0===S,q=S===b.a.size(r)-1,R=M?b.a.last(r):b.a.nth(r,S-1),I=b.a.nth(r,S),D=q?b.a.head(r):b.a.nth(r,S+1),E=function(){n({type:"setCurrentKey",key:b.a.get(D,"key")}),w(s)};return Object(a.useEffect)((function(){h<=0&&(v.play(),E())}),[h]),Object(a.useEffect)((function(){w(s)}),[s]),b.a.isUndefined(o)?null:Object(y.jsxs)("div",{className:i.root,children:[Object(y.jsxs)("div",{className:i.header,children:[Object(y.jsx)("img",{src:g,alt:"Site logo, woman stretching"}),Object(y.jsxs)("p",{children:["A rolling queue of ",b.a.size(r)," stretches (based on my weaknesses) with a timer and a record of where you left off last time. Try to do ",b.a.ceil(b.a.size(r)/7)," every day to get through them all in a week."]})]}),Object(y.jsxs)("div",{children:[Object(y.jsxs)("h4",{children:["Current activity: ",b.a.get(I,"label")]}),Object(y.jsxs)("p",{className:"-smaller",children:["Next activity: ",b.a.get(D,"label")]})]}),Object(y.jsxs)("div",{className:i.timer,children:[Object(y.jsx)("div",{className:i.time,children:N}),Object(y.jsxs)("div",{className:i.controls,children:[Object(y.jsx)("div",{className:i.buttonContainer,children:Object(y.jsx)("button",{onClick:C?function(){return w(s)}:function(){C?w(s):n({type:"setCurrentKey",key:b.a.get(R,"key")})},children:C?"Restart":"Back"})}),Object(y.jsx)("div",{className:i.buttonContainer,children:Object(y.jsx)("button",{onClick:C?k:function(){O(),v.play(),v.pause()},children:C?"Pause":"Start"})}),Object(y.jsx)("div",{className:i.buttonContainer,children:Object(y.jsx)("button",{onClick:E,children:"Next"})})]})]})]})}var w=Object(p.a)({root:{flexGrow:1,padding:"2rem 0",display:"flex",flexDirection:"column","& *":{animation:"$fadein 150ms",willChange:"opacity"}},input:{display:"flex",alignItems:"center",marginBottom:"1rem",flexWrap:"wrap","& > *":{margin:"0 0.5rem",padding:0,maxWidth:"50vw"}},"@keyframes fadein":{from:{opacity:0},to:{opacity:1}}});function C(e){var t=e.state,n=e.dispatch,r=t.duration,c=t.useDefaultStretches,i=t.stretchesMap,s=w(),o=Object(a.useState)({}),u=Object(d.a)(o,2),f=u[0],j=u[1];return Object(y.jsxs)("div",{className:s.root,children:[Object(y.jsx)("h4",{children:"Settings:"}),Object(y.jsxs)("div",{className:s.input,children:[Object(y.jsx)("h5",{children:"Duration:"}),Object(y.jsx)(q,{value:r,onChange:function(e){return n({type:"setDuration",value:Number(e)})}}),Object(y.jsxs)("p",{children:["seconds \u2248 ",b.a.round(r/60,1)," mins"]})]}),Object(y.jsxs)("div",{className:s.input,children:[Object(y.jsx)("h5",{children:"Use Default Stretches?:"}),Object(y.jsx)(S,{checked:c,onChange:function(){return n({type:"setUseDefaultStretches",value:!c})}})]}),!c&&Object(y.jsxs)(y.Fragment,{children:[!b.a.isEmpty(i)&&b.a.map(b.a.concat(i),(function(e,t){return Object(y.jsxs)("div",{className:s.input,children:[Object(y.jsx)(q,{label:"Name",value:b.a.get(e,"name"),onChange:function(e){return n({type:"updateStretchesMap",stretchesMap:b.a.map(i,(function(n,a){return t!=a?n:Object(l.a)(Object(l.a)({},n),{},{name:e})}))})}}),Object(y.jsx)(q,{label:"Frequency",value:b.a.get(e,"frequency"),onChange:function(e){return n({type:"updateStretchesMap",stretchesMap:b.a.map(i,(function(n,a){return t!=a?n:Object(l.a)(Object(l.a)({},n),{},{frequency:e})}))})}}),Object(y.jsx)(S,{label:"Custom?",value:b.a.get(e,"custom"),onChange:function(){return n({type:"updateStretchesMap",stretchesMap:b.a.map(i,(function(n,a){return t!=a?n:Object(l.a)(Object(l.a)({},n),{},{custom:!b.a.get(e,"custom")})}))})}})]})})),Object(y.jsx)("div",{className:s.input,children:Object(y.jsx)(q,{value:b.a.get(f,"name"),onChange:function(e){return j((function(t){return Object(l.a)(Object(l.a)({},t),{},{name:e})}))}})})]})]})}var N=Object(p.a)({root:{display:"flex",alignItems:"center"},label:{fontSize:"85%",padding:"0 1rem 0 0",margin:0},toggle:{borderStyle:"solid",borderColor:"var(--tertiary)",borderWidth:"1px",padding:"3px","& span":{opacity:function(e){return e.checked?1:0},fontWeight:"bold"}}}),S=function(e){var t=e.checked,n=e.onChange,a=e.label,r=N({checked:t});return Object(y.jsxs)("div",{className:r.root,children:[a&&Object(y.jsx)("p",{className:r.label,children:a}),Object(y.jsx)("span",{className:r.toggle,onClick:n,children:Object(y.jsx)("span",{className:"fa-check"})})]})},M=Object(p.a)({root:{display:"flex",alignItems:"center"},label:{fontSize:"85%",padding:"0 1rem 0 0",margin:0},input:{borderStyle:"solid",borderColor:"var(--tertiary)",borderWidth:"1px",padding:"2px",width:function(e){return e.isTypeNumber?"3rem":"8rem"},"& :active, :hover, :focus":{backgroundColor:"var(--secondary)"},"& input":{border:"none"}}}),q=function(e){var t=e.value,n=e.onChange,a=e.label,r="number"===typeof t,c=M({isTypeNumber:r});return Object(y.jsxs)("span",{className:c.root,children:[a&&Object(y.jsxs)("label",{className:c.label,children:[a,":"]}),Object(y.jsx)("input",{className:c.input,type:r?"number":"text",value:t,onChange:function(e){return n(e.target.value)}})]})},R=n(16),I=Object(p.a)({root:{width:"min(70vw, 30em)",flexGrow:1,display:"flex"},viewPort:{flexGrow:1,width:"min(70vw, 30em)",position:"relative"},animated:{willChange:"transform, opacity",display:"flex",flexDirection:"column",position:"absolute",top:0,right:0,left:0,bottom:0},toggle:{position:"fixed",top:"1rem",zIndex:15,"& button":{width:"1.5rem",height:"1.5rem",backgroundColor:"var(--alt-background)",padding:0,border:"none",cursor:"pointer",borderRadius:"4px","& span::before":{color:"var(--alt-paragraph)"}}},darkModeToggle:{right:"1rem"},settingsToggle:{right:"calc( 1rem + 1.5rem + 1rem )"}});function D(){var e=I(),t=Object(a.useReducer)(z,A),n=Object(d.a)(t,2),r=n[0],c=n[1],i=r.loaded,s=r.stretchesMap;Object(a.useEffect)((function(){Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.getItem("state");case 2:t=e.sent,c({type:"loadLocalStorage",state:Object(l.a)(Object(l.a)({},t),{},{loaded:!0})});case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(a.useEffect)((function(){m.a.setItem("state",r)}),[r]);var f=Object(a.useState)(function(e,t,n){var r=e.map((function(e){return window.matchMedia(e)})),c=function(){var e=r.findIndex((function(e){return e.matches}));return"undefined"!==typeof t[e]?t[e]:n},i=Object(a.useState)(c),s=Object(d.a)(i,2),o=s[0],l=s[1];return Object(a.useEffect)((function(){var e=function(){return l(c)};return r.forEach((function(t){return t.addListener(e)})),function(){return r.forEach((function(t){return t.removeListener(e)}))}}),[]),o}(["(prefers-color-scheme: dark)"],[!0],!1)),b=Object(d.a)(f,2),j=b[0],p=b[1];Object(a.useEffect)((function(){document.getElementById("apple-mobile-web-app-status-bar-style").setAttribute("content",j?"black-translucent":"default")}),[j]);var g=Object(a.useState)(!1),O=Object(d.a)(g,2),v=O[0],x=O[1],w=Object(h.b)({opacity:v?1:0,transform:"perspective(600px) rotateY(".concat(v?180:0,"deg)"),config:{mass:5,tension:500,friction:80}}),N=w.transform,S=w.opacity;if(!i)return null;var M=L(s);return Object(y.jsxs)("div",{className:e.root,children:[Object(y.jsxs)("div",{className:e.viewPort,children:[Object(y.jsx)(h.a.div,{className:e.animated,style:{zIndex:v?1:10,opacity:S.interpolate((function(e){return 1-e})),transform:N},children:Object(y.jsx)(k,{state:r,dispatch:c,activitiesList:M,darkMode:j})}),Object(y.jsx)(h.a.div,{className:e.animated,style:{zIndex:v?10:1,opacity:S,transform:N.interpolate((function(e){return"".concat(e," rotateY(180deg)")}))},children:Object(y.jsx)(C,{state:r,dispatch:c})})]}),Object(y.jsx)("div",{className:Object(R.a)(e.toggle,e.settingsToggle),children:Object(y.jsx)("button",{onClick:function(){return x((function(e){return!e}))},children:Object(y.jsx)("span",{className:v?"fa-x":"fa-settings"})})}),Object(y.jsx)("div",{className:Object(R.a)(e.toggle,e.darkModeToggle),children:Object(y.jsx)("button",{onClick:function(){return p((function(e){return!e}))},children:Object(y.jsx)("span",{className:j?"fa-sun":"fa-moon"})})}),Object(y.jsx)("style",{children:"\n\t\t\t\thtml {\n\t\t\t\t\t--background: ".concat(j?"#000":"#ffffff",";\n\t\t\t\t\t--alt-background: ").concat(j?"#ffffff":"#000",";\n\t\t\t\t\t\n\t\t\t\t\t--stroke: ").concat(j?"#121629":"#272343",";\n\t\t\t\t\t--highlight: ").concat(j?"#eebbc3":"#ffd803",";\n\t\t\t\t\t--secondary: ").concat(j?"#fffffe":"#e3f6f5",";\n\t\t\t\t\t--tertiary: ").concat(j?"#eebbc3":"#bae8e8",";\n\t\t\t\t\t--heading: ").concat(j?"#fffffe":"#272343",";\n\t\t\t\t\t\n\t\t\t\t\t--paragraph: ").concat(j?"#b8c1ec":"#2d334a",";\n\t\t\t\t\t--alt-paragraph: ").concat(j?"#2d334a":"#b8c1ec",";\n\t\t\t\t}\n\t\t\t")})]})}var E=[{name:"Glute",frequency:3},{name:"Hamstring",frequency:3},{name:"Quad",frequency:3},{name:"Half Lotus",frequency:2},{name:"Forearm",frequency:2},{name:"Front Shoulder",frequency:2},{name:"Standing Pike Stretch",custom:!0,frequency:1},{name:"Lat",frequency:1},{name:"Pec",frequency:1},{name:"Frog Stretch",frequency:1,custom:!0},{name:"Calf",frequency:1,hasRolling:!1}],L=function(e){var t=b.a.max(b.a.map(e,"frequency")),n=b.a.uniqBy(e,"name"),a=b.a.reduce(b.a.range(0,t),(function(e,t){var a=b.a.map(b.a.filter(n,(function(e){return e.frequency>=t+1})),(function(e){return Object(l.a)(Object(l.a)({},e),{},{key:"".concat(t,"-").concat(b.a.kebabCase(e.name))})}));return b.a.concat(e,a)}),[]);return b.a.reduce(a,(function(e,t){var n=t.key,a=t.name,r=t.custom;return void 0!==r&&r?b.a.concat(e,{key:"".concat(n),type:"stretching",label:"".concat(b.a.startCase(a))}):b.a.concat(e,{key:"".concat(n,"-stretch-right"),type:"stretching",label:"Stretch Right ".concat(b.a.startCase(a))},{key:"".concat(n,"-stretch-left"),type:"stretching",label:"Stretch Left ".concat(b.a.startCase(a))})}),[])},z=function(e,t){var n=t.type,a=Object(i.a)(t,["type"]);switch(n){case"loadLocalStorage":return Object(l.a)(Object(l.a)({},e),b.a.get(a,"state"));case"setCurrentKey":return Object(l.a)(Object(l.a)({},e),{},{currentKey:b.a.get(a,"key")});case"setUseDefaultStretches":return Object(l.a)(Object(l.a)({},e),{},{useDefaultStretches:b.a.get(a,"value"),stretchesMap:E});case"updateStretchesMap":return console.log(b.a.get(a,"stretchesMap")),Object(l.a)(Object(l.a)({},e),{},{stretchesMap:b.a.get(a,"stretchesMap")});case"setDuration":return Object(l.a)(Object(l.a)({},e),{},{duration:b.a.get(a,"value")});default:return e}},A={loaded:!1,duration:150,useDefaultStretches:!0,stretchesMap:E,currentKey:null},T=document.getElementById("root");if(T.hasChildNodes()?Object(r.hydrate)(Object(y.jsx)(D,{}),T):Object(r.render)(Object(y.jsx)(D,{}),T),"serviceWorker"in navigator){var B=new c.a("service-worker.js");B.addEventListener("installed",(function(e){e.isUpdate&&window.location.reload()})),B.register()}}},[[34,1,2]]]);
//# sourceMappingURL=main.c67505f5.chunk.js.map