!function(e){function t(t){for(var n,a,i=t[0],s=t[1],l=t[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(c&&c(t);f.length;)f.shift()();return u.push.apply(u,l||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==o[s]&&(n=!1)}n&&(u.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={5:0},u=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=s;u.push([318,0]),r()}({318:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=u(r(0)),s=a(r(47)),l=a(r(51)),c=r(69);s.default.render(i.default.createElement(i.default.StrictMode,null,i.default.createElement(()=>{const[e,t]=(0,i.useState)(0),[r,n]=(0,i.useState)(),[o,u]=(0,i.useState)([]);(0,i.useEffect)(()=>{chrome.browserAction.setBadgeText({text:o.length.toString()})},[o]),(0,i.useEffect)(()=>{chrome.tabs.query({active:!0,currentWindow:!0},(function(e){n(e[0].url)}))},[]),(0,i.useEffect)(()=>{(0,c.getOrders)().then(e=>console.log(e)),(0,c.getOrders)().then(e=>u(e))},[]);return i.default.createElement(i.default.Fragment,null,i.default.createElement("ul",{style:{minWidth:"700px"}},i.default.createElement("li",null,"Current URL: ",r),i.default.createElement("li",null,"Current Time: ",(new Date).toLocaleTimeString())),i.default.createElement("button",{onClick:()=>t(e+1),style:{marginRight:"5px"}},"count up"),i.default.createElement("button",{onClick:()=>{chrome.tabs.query({active:!0,currentWindow:!0},(function(e){const t=e[0];t.id&&chrome.tabs.sendMessage(t.id,{color:"#555555"},e=>{console.log("result message:",e)})}))}},"change background"),i.default.createElement("button",{onClick:()=>{chrome.windows.create({url:chrome.runtime.getURL("main.html")})}},"window"),o.map(e=>i.default.createElement("div",{key:e.id},"orderDate: ",e.data().orderDate,l.default.map(e.data().orderDetails,"productName").join(","))))},null)),document.getElementById("root"))},40:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.firebaseFirestore=t.authProviders=t.firebaseAppAuth=t.firebaseApp=void 0,r(66),r(67);const o=n(r(68)),u=r(43);t.firebaseApp=o.default.initializeApp({apiKey:"AIzaSyB2IQVqUKIvy2bYOZWzgpjCoGBZ1798lJE",authDomain:"shopper-note.firebaseapp.com",projectId:"shopper-note",storageBucket:"shopper-note.appspot.com",messagingSenderId:"860271096502",appId:"1:860271096502:web:3e545e6eb5c6bbbc426c17",measurementId:"G-F5QCEEVY75"}),t.firebaseAppAuth=t.firebaseApp.auth(),t.firebaseAppAuth.setPersistence(o.default.auth.Auth.Persistence.LOCAL);const a=new o.default.auth.GoogleAuthProvider;a.addScope("https://www.googleapis.com/auth/userinfo.email"),a.addScope("https://www.googleapis.com/auth/userinfo.profile"),a.addScope("openid"),t.authProviders={googleProvider:a},t.firebaseFirestore=o.default.firestore(),t.firebaseFirestore.enablePersistence().catch(e=>{u.logger.warn(e)})},43:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logger=void 0,t.logger=console},69:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getOrders=t.putOrders=t.putOrder=void 0,r(67);const o=n(r(51)),u=r(70),a=r(40);function i(){const e=u.userStore.currentUser;return`users/${null==e?void 0:e.uid}/orders`}async function s(e){var t;const r=i(),n=a.firebaseFirestore.collection(r).doc(e.id),o=(await n.get()).exists;return e.orderDate=new Date(e.orderDate),await n.set(Object.assign({user:null===(t=u.userStore.currentUser)||void 0===t?void 0:t.uid},e)),!o}t.putOrder=s,t.putOrders=async function(e){return o.default.filter(await Promise.all(e.map(s))).length},t.getOrders=async function(){await u.userStore.refreshCurrentUser();const e=i();return(await a.firebaseFirestore.collection(e).orderBy("orderDate","desc").get()).docs}},70:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.authProviders=t.firebaseAuth=t.userStore=void 0,r(66);const o=n(r(68)),u=r(40).firebaseApp.auth();u.setPersistence(o.default.auth.Auth.Persistence.LOCAL);t.userStore=new class{async refreshCurrentUser(){return new Promise(e=>{u.onAuthStateChanged(t=>{t&&(this.currentUser=t,e(t))})})}},t.userStore.refreshCurrentUser(),t.firebaseAuth=async function(){return await async function(){return new Promise(e=>{u.onAuthStateChanged(t=>{e(null)})})}(),u};const a=new o.default.auth.GoogleAuthProvider;a.addScope("https://www.googleapis.com/auth/userinfo.email"),a.addScope("https://www.googleapis.com/auth/userinfo.profile"),a.addScope("openid"),t.authProviders={googleProvider:a}}});