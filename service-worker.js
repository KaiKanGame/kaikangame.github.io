if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return i[e]||(n=new Promise((async n=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},n=(n,i)=>{Promise.all(n.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(n)};self.define=(n,r,s)=>{i[n]||(i[n]=Promise.resolve().then((()=>{let i={};const o={uri:location.origin+n.slice(1)};return Promise.all(r.map((n=>{switch(n){case"exports":return i;case"module":return o;default:return e(n)}}))).then((e=>{const n=s(...e);return i.default||(i.default=n),i}))})))}}define("./service-worker.js",["./workbox-90faa4c2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"kaiiskool"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.fafef46c.css",revision:null},{url:"css/vendor.1551fab6.css",revision:null},{url:"favicon.ico",revision:"8b9eb314ff597f6f7c7bf8c7a5f717ec"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.61bf3cad.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.72dc569a.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"c9920835d2adb9f6ab6a79a27f220a3a"},{url:"icons/apple-icon-152x152.png",revision:"9df9e65a1d2c6df3bd9143666b0e8c63"},{url:"icons/apple-icon-167x167.png",revision:"4300c6c136c06abcd781aa18644dd7a3"},{url:"icons/apple-icon-180x180.png",revision:"88dbf3d9e8269f1298486d103e22a57c"},{url:"icons/favicon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/favicon-16x16.png",revision:"df5ff7f4728c4ef4b951d46b4136906f"},{url:"icons/favicon-32x32.png",revision:"64aa9e88dd6545f64226c1e2230f66cc"},{url:"icons/favicon-96x96.png",revision:"d22664397060743b24e8956a5a3fcdec"},{url:"icons/icon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/icon-192x192.png",revision:"a1b423855a450ae7adbd9d2a782e0dfb"},{url:"icons/icon-256x256.png",revision:"9f33ebc999e51d0dc2975fc573d53a0b"},{url:"icons/icon-384x384.png",revision:"a126be0d50ed682c3129e0b8b31f680a"},{url:"icons/icon-512x512.png",revision:"02abd24e7c8638e848d96a6bf78d2c27"},{url:"icons/ms-icon-144x144.png",revision:"f256ec55be616f32ae486ab7571eb936"},{url:"icons/safari-pinned-tab.svg",revision:"de8107bed7f087fb443d8e36855e7467"},{url:"img/WallpaperDog-1807.80601b8c.jpg",revision:null},{url:"index.html",revision:"378f3a44c063e3cf1601ede53a2304f9"},{url:"js/193.8c182d84.js",revision:null},{url:"js/49.b5197af2.js",revision:null},{url:"js/701.2d9bf4ca.js",revision:null},{url:"js/877.5d5bcc6c.js",revision:null},{url:"js/883.c6e09e47.js",revision:null},{url:"js/app.e8d648a5.js",revision:null},{url:"js/vendor.41f73300.js",revision:null},{url:"manifest.json",revision:"a354b9d3e83bc756a855c4d489aa7e60"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
