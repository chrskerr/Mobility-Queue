if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,c,r)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const s={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return a;case"module":return s;default:return e(i)}}))).then((e=>{const i=r(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-322fe734"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"9501b6b31f78c888b837aa586c80f4a3"},{url:"android-chrome-512x512.png",revision:"d43b8d0d78f63f4d3180044d95dd4d66"},{url:"apple-touch-icon.png",revision:"7122aec62ba6deaf35bf7a36043eacf8"},{url:"asset-manifest.json",revision:"5dee35a61588529d797bf1f35df51809"},{url:"browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"favicon-16x16.png",revision:"69113805203d0fb4c2e8d1e6a1cfce95"},{url:"favicon-32x32.png",revision:"2ff1936b96cd9ccd791ee6a4f8034008"},{url:"favicon.ico",revision:"5cb144d6c9cf8dd6a9fb00c5e753a513"},{url:"index.html",revision:"1b87aaa5646043538649d2bbe35ced0c"},{url:"manifest.json",revision:"d9d975cebe2ec20b6c652e1e4c12ccf0"},{url:"mstile-150x150.png",revision:"2725dad019609f2b7ce454a9f669fd02"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"safari-pinned-tab.svg",revision:"f7990b1a6038de5f33c63d1bda5f5010"},{url:"site.webmanifest",revision:"b9aa277fcfc34c31db6c7a7ea3469b8c"},{url:"static/css/main.8891b0a3.chunk.css",revision:"bec30f5044e53f13b7cd0203e9df2a6d"},{url:"static/js/2.fb0382c4.chunk.js",revision:"7470d58a64196d577e53beaa433f2d82"},{url:"static/js/2.fb0382c4.chunk.js.LICENSE.txt",revision:"d2faa36d5680a647822396cb712a2739"},{url:"static/js/main.1b729aa2.chunk.js",revision:"e0af579c8deb9b96b3b1beb6f38a8445"},{url:"static/js/runtime-main.d753ca58.js",revision:"998927cebea5d3bbb54179a4a8f37c82"},{url:"static/media/icomoon-fa.39445ac3.svg",revision:"4a39c2d86feeb9aef6c53541397dc446"},{url:"static/media/icomoon-fa.471b7e7d.eot",revision:"450aec1a90d0f6592321be28c31abb43"},{url:"static/media/icomoon-fa.b1db5915.woff",revision:"f1c4b47eab0593e9496c2828ad58dede"},{url:"static/media/icomoon-fa.f767d14f.ttf",revision:"405ef5e31481c1b0e02ff2813f66d6e5"},{url:"static/media/logo.62967c48.png",revision:"82113bab90b6246a106e752854ac97e8"}],{})}));
//# sourceMappingURL=service-worker.js.map
