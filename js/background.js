!function(e){function t(t){for(var s,a,u=t[0],i=t[1],c=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);for(d&&d(t);f.length;)f.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],s=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(s=!1)}s&&(n.splice(t--,1),e=a(a.s=r[0]))}return e}var s={},o={1:0},n=[];function a(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=s,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(r,s,function(t){return e[t]}.bind(null,s));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var d=i;n.push([315,0]),r()}({268:function(e,t,r){var s={"./af":87,"./af.js":87,"./ar":88,"./ar-dz":89,"./ar-dz.js":89,"./ar-kw":90,"./ar-kw.js":90,"./ar-ly":91,"./ar-ly.js":91,"./ar-ma":92,"./ar-ma.js":92,"./ar-sa":93,"./ar-sa.js":93,"./ar-tn":94,"./ar-tn.js":94,"./ar.js":88,"./az":95,"./az.js":95,"./be":96,"./be.js":96,"./bg":97,"./bg.js":97,"./bm":98,"./bm.js":98,"./bn":99,"./bn-bd":100,"./bn-bd.js":100,"./bn.js":99,"./bo":101,"./bo.js":101,"./br":102,"./br.js":102,"./bs":103,"./bs.js":103,"./ca":104,"./ca.js":104,"./cs":105,"./cs.js":105,"./cv":106,"./cv.js":106,"./cy":107,"./cy.js":107,"./da":108,"./da.js":108,"./de":109,"./de-at":110,"./de-at.js":110,"./de-ch":111,"./de-ch.js":111,"./de.js":109,"./dv":112,"./dv.js":112,"./el":113,"./el.js":113,"./en-au":114,"./en-au.js":114,"./en-ca":115,"./en-ca.js":115,"./en-gb":116,"./en-gb.js":116,"./en-ie":117,"./en-ie.js":117,"./en-il":118,"./en-il.js":118,"./en-in":119,"./en-in.js":119,"./en-nz":120,"./en-nz.js":120,"./en-sg":121,"./en-sg.js":121,"./eo":122,"./eo.js":122,"./es":123,"./es-do":124,"./es-do.js":124,"./es-mx":125,"./es-mx.js":125,"./es-us":126,"./es-us.js":126,"./es.js":123,"./et":127,"./et.js":127,"./eu":128,"./eu.js":128,"./fa":129,"./fa.js":129,"./fi":130,"./fi.js":130,"./fil":131,"./fil.js":131,"./fo":132,"./fo.js":132,"./fr":133,"./fr-ca":134,"./fr-ca.js":134,"./fr-ch":135,"./fr-ch.js":135,"./fr.js":133,"./fy":136,"./fy.js":136,"./ga":137,"./ga.js":137,"./gd":138,"./gd.js":138,"./gl":139,"./gl.js":139,"./gom-deva":140,"./gom-deva.js":140,"./gom-latn":141,"./gom-latn.js":141,"./gu":142,"./gu.js":142,"./he":143,"./he.js":143,"./hi":144,"./hi.js":144,"./hr":145,"./hr.js":145,"./hu":146,"./hu.js":146,"./hy-am":147,"./hy-am.js":147,"./id":148,"./id.js":148,"./is":149,"./is.js":149,"./it":150,"./it-ch":151,"./it-ch.js":151,"./it.js":150,"./ja":152,"./ja.js":152,"./jv":153,"./jv.js":153,"./ka":154,"./ka.js":154,"./kk":155,"./kk.js":155,"./km":156,"./km.js":156,"./kn":157,"./kn.js":157,"./ko":158,"./ko.js":158,"./ku":159,"./ku.js":159,"./ky":160,"./ky.js":160,"./lb":161,"./lb.js":161,"./lo":162,"./lo.js":162,"./lt":163,"./lt.js":163,"./lv":164,"./lv.js":164,"./me":165,"./me.js":165,"./mi":166,"./mi.js":166,"./mk":167,"./mk.js":167,"./ml":168,"./ml.js":168,"./mn":169,"./mn.js":169,"./mr":170,"./mr.js":170,"./ms":171,"./ms-my":172,"./ms-my.js":172,"./ms.js":171,"./mt":173,"./mt.js":173,"./my":174,"./my.js":174,"./nb":175,"./nb.js":175,"./ne":176,"./ne.js":176,"./nl":177,"./nl-be":178,"./nl-be.js":178,"./nl.js":177,"./nn":179,"./nn.js":179,"./oc-lnc":180,"./oc-lnc.js":180,"./pa-in":181,"./pa-in.js":181,"./pl":182,"./pl.js":182,"./pt":183,"./pt-br":184,"./pt-br.js":184,"./pt.js":183,"./ro":185,"./ro.js":185,"./ru":186,"./ru.js":186,"./sd":187,"./sd.js":187,"./se":188,"./se.js":188,"./si":189,"./si.js":189,"./sk":190,"./sk.js":190,"./sl":191,"./sl.js":191,"./sq":192,"./sq.js":192,"./sr":193,"./sr-cyrl":194,"./sr-cyrl.js":194,"./sr.js":193,"./ss":195,"./ss.js":195,"./sv":196,"./sv.js":196,"./sw":197,"./sw.js":197,"./ta":198,"./ta.js":198,"./te":199,"./te.js":199,"./tet":200,"./tet.js":200,"./tg":201,"./tg.js":201,"./th":202,"./th.js":202,"./tk":203,"./tk.js":203,"./tl-ph":204,"./tl-ph.js":204,"./tlh":205,"./tlh.js":205,"./tr":206,"./tr.js":206,"./tzl":207,"./tzl.js":207,"./tzm":208,"./tzm-latn":209,"./tzm-latn.js":209,"./tzm.js":208,"./ug-cn":210,"./ug-cn.js":210,"./uk":211,"./uk.js":211,"./ur":212,"./ur.js":212,"./uz":213,"./uz-latn":214,"./uz-latn.js":214,"./uz.js":213,"./vi":215,"./vi.js":215,"./x-pseudo":216,"./x-pseudo.js":216,"./yo":217,"./yo.js":217,"./zh-cn":218,"./zh-cn.js":218,"./zh-hk":219,"./zh-hk.js":219,"./zh-mo":220,"./zh-mo.js":220,"./zh-tw":221,"./zh-tw.js":221};function o(e){var t=n(e);return r(t)}function n(e){if(!r.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}o.keys=function(){return Object.keys(s)},o.resolve=n,e.exports=o,o.id=268},315:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(316),o=r(334),n=r(67);r(41);const a=r(66);async function u(e){const t=await(0,a.putOrders)(e);chrome.browserAction.setBadgeText({text:"+"+t})}!function e(){console.log("polling"),setTimeout(e,3e4)}();const i=new s.Auction,c=new o.St11;chrome.runtime.onMessage.addListener((async function(e,t,r){console.log("Received %o from %o, frame",e,t.tab,t.frameId);const s={};switch(s.email=n.userStore.currentUser.email,e.operation){case"runAuction":u(await i.getOrders());break;case"putOrders":u(e.orders);break;case"getProfile":s.user=n.userStore.currentUser;break;case"runSt11":u(await c.getOrders())}r(`Gotcha! ${e.operation}, ${JSON.stringify(s)}`)})),c.getOrders().then(u),chrome.browserAction.onClicked.addListener((function(e){chrome.tabs.create({url:chrome.runtime.getURL("main.html")})}))},316:function(e,t,r){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Auction=void 0;const o=s(r(259)),n=s(r(50));function a(e){const t=e.ItemPrice,r=e.RealPayAmount,s=t-r;return{productId:e.ItemNo,productName:e.ItemName,productImageUrl:e.ItemImageUrl,price:r,currency:"원",quantity:1,discount:s,total:t,trace:{},rawInfo:e}}async function u(e){const t=await o.default.get("https://mmya.auction.co.kr/MyAuction/Order/GetMyOrderDetailAndVirtualAccount",{params:{payNo:e.orderNumber}});e.orderDetails=n.default.map(n.default.get(t.data,"OrderList.PayInfoList[0].OrderList"),a)}function i(e){const t=e.PayNo,r=e.PayDateString,s=e.TotalOrderAmount;return{id:"auction-"+t,market:"auction",orderNumber:t,orderDate:new Date(r),originPrice:-1,orderedPrice:s,currency:"원",status:0,orderDetails:[],rawInfo:e}}function c(e){const t=[];for(const r of e.orderList.PayInfoList)t.push(i(r));return t}t.Auction=class{async getOrders(){const e=async e=>(await o.default.get("https://mmya.auction.co.kr/MyAuction/Order/GetMyOrderList",{params:{searchPeriod:"6M",searchStatus:"ALL",searchKeyword:"",pageIndex:e,pageSize:10}})).data,t=await e(1),r=t.orderList.TotalOrderCount;let s=c(t);for(const t of n.default.range(2,r/10))s=s.concat(c(await e(t)));for(const e of s)u(e);return s}}},334:function(e,t,r){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.St11=void 0;const o=s(r(259)),n=s(r(50)),a=s(r(7)),u=r(42);function i(e){const t=e.selPrc,r=e.ordPrdWonStl,s=t-r;return{productId:e.prdNo,productName:e.prdNm,productImageUrl:e.imgURL,price:r,currency:"원",quantity:1,discount:s,total:t,trace:{},rawInfo:e}}t.St11=class{async getOrders(){u.logger.debug("St11 getOrders.");let e=[];const t=(0,a.default)().date(1);for(const r of n.default.range(6))e=e.concat(await this.getOrdersByDate(t.clone().subtract(r,"M")));return u.logger.debug("orders",e),e}async getOrdersByDate(e){const t=await(async()=>(await o.default.get("https://m.11st.co.kr/MW/MyPage/api/V1/orderProductList.tmall",{params:{shDateFrom:e.format("YYYYMMDD"),shDateTo:e.clone().endOf("month").format("YYYYMMDD"),firstCall:!0}})).data)();return r=t.data.products,n.default.map(r,i),n.default.chain(r).groupBy("ordNo").map(e=>{const t=n.default.map(e,i),s=r[0],o=s.ordNo,a=s.ordDt,u=s.selPrc,c=s.ordPrdWonStl;return{id:"st11-"+o,market:"st11",orderNumber:o,orderDate:new Date(a),originPrice:u,orderedPrice:c,currency:"원",status:0,orderDetails:t,rawInfo:e}}).value();var r}}},41:function(e,t,r){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.firebaseFirestore=t.authProviders=t.firebaseAppAuth=t.firebaseApp=void 0,r(63),r(64);const o=s(r(65)),n=r(42);t.firebaseApp=o.default.initializeApp({apiKey:"AIzaSyB2IQVqUKIvy2bYOZWzgpjCoGBZ1798lJE",authDomain:"shopper-note.firebaseapp.com",projectId:"shopper-note",storageBucket:"shopper-note.appspot.com",messagingSenderId:"860271096502",appId:"1:860271096502:web:3e545e6eb5c6bbbc426c17",measurementId:"G-F5QCEEVY75"}),t.firebaseAppAuth=t.firebaseApp.auth(),t.firebaseAppAuth.setPersistence(o.default.auth.Auth.Persistence.LOCAL);const a=new o.default.auth.GoogleAuthProvider;a.addScope("https://www.googleapis.com/auth/userinfo.email"),a.addScope("https://www.googleapis.com/auth/userinfo.profile"),a.addScope("openid"),t.authProviders={googleProvider:a},t.firebaseFirestore=o.default.firestore(),t.firebaseFirestore.enablePersistence().catch(e=>{n.logger.warn(e)})},42:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logger=void 0,t.logger=console},66:function(e,t,r){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getOrders=t.putOrders=t.putOrder=void 0,r(64);const o=s(r(50)),n=r(67),a=r(41);function u(){const e=n.userStore.currentUser;return`users/${null==e?void 0:e.uid}/orders`}async function i(e){var t;const r=u(),s=a.firebaseFirestore.collection(r).doc(e.id),o=(await s.get()).exists;return e.orderDate=new Date(e.orderDate),await s.set(Object.assign({user:null===(t=n.userStore.currentUser)||void 0===t?void 0:t.uid},e)),!o}t.putOrder=i,t.putOrders=async function(e){return o.default.filter(await Promise.all(e.map(i))).length},t.getOrders=async function(){await n.userStore.refreshCurrentUser();const e=u();return(await a.firebaseFirestore.collection(e).orderBy("orderDate","desc").get()).docs}},67:function(e,t,r){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.authProviders=t.firebaseAuth=t.userStore=void 0,r(63);const o=s(r(65)),n=r(41).firebaseApp.auth();n.setPersistence(o.default.auth.Auth.Persistence.LOCAL);t.userStore=new class{async refreshCurrentUser(){return new Promise(e=>{n.onAuthStateChanged(t=>{t&&(this.currentUser=t,e(t))})})}},t.userStore.refreshCurrentUser(),t.firebaseAuth=async function(){return await async function(){return new Promise(e=>{n.onAuthStateChanged(t=>{e(null)})})}(),n};const a=new o.default.auth.GoogleAuthProvider;a.addScope("https://www.googleapis.com/auth/userinfo.email"),a.addScope("https://www.googleapis.com/auth/userinfo.profile"),a.addScope("openid"),t.authProviders={googleProvider:a}}});