(this["webpackJsonpjhonatan-drag-drop"]=this["webpackJsonpjhonatan-drag-drop"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(23),i=n.n(r),s=(n(33),n(7)),o=n(5),u=n(43),j=n(27),b=(n(34),n(6)),m=n(44),f=n(2),O="ApplicationImages";var g,l=function(e){var t=e.image,n=Object(m.a)((function(){return{type:O,item:Object(b.a)({},t),collect:function(e){return{opacity:e.isDragging()?.5:1}}}}),[]),c=Object(o.a)(n,2),a=c[0].opacity,r=c[1];return Object(f.jsx)("div",{className:"image",ref:r,style:{opacity:a},children:Object(f.jsx)("img",{src:t.medium,alt:t.original})},t.medium)},p=n(45);!function(e){e.keep="keep",e.reject="reject"}(g||(g={}));var h=function(e){var t=e.images,n=e.dropImage,c=e.photosLength,a=e.action,r=e.className,i=Object(p.a)((function(){return{accept:O,drop:function(e){return n(a,e)},collect:function(e){return{isOver:!!e.isOver()}}}}),[c]),s=Object(o.a)(i,2),u=(s[0].isOver,s[1]);return Object(f.jsx)("div",{className:r,ref:u,children:t.map((function(e){return Object(f.jsx)(l,{image:e})}))})},d=function(e){return Object(f.jsx)(h,Object(b.a)(Object(b.a)({},e),{},{action:g.keep,className:"right__up"}))},x=function(e){return Object(f.jsx)(h,Object(b.a)(Object(b.a)({},e),{},{action:g.reject,className:"right__bottom"}))},v=n(19),k=n.n(v),w=n(25),y=function(){Object(c.useDebugValue)("useGetPhotos");var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=function(){var e=Object(w.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://api.tvmaze.com/shows");case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:n=e.sent,a(n.slice(0,12).map((function(e){return e.image}))),e.next=13;break;case 11:console.warn("\n          the response was not ok for getting images: ".concat(t.status," - ").concat(t.statusText,"\n        ")),a([]);case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.warn("there was an erro trying to get the images: ".concat(e.t0)),a([]);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()}),[]),[n,function(e){if(e>-1){var t=Object(b.a)({},n[e]);return a([].concat(Object(s.a)(n.slice(0,e)),Object(s.a)(n.slice(e+1)))),t}return null}]};function N(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),i=Object(o.a)(r,2),u=i[0],j=i[1],b=y(),m=Object(o.a)(b,2),O=m[0],p=m[1],h=function(e,t){var n=O.findIndex((function(e){return e.medium===t.medium})),c=p(n);c&&(e===g.keep?a((function(e){return[].concat(Object(s.a)(e),[c])})):e===g.reject&&j((function(e){return[].concat(Object(s.a)(e),[c])})))};return Object(f.jsxs)("main",{className:"main",children:[Object(f.jsx)("section",{className:"main__left",children:O.map((function(e){return Object(f.jsx)(l,{image:e},e.medium)}))}),Object(f.jsxs)("section",{className:"main__right",children:[Object(f.jsx)(d,{images:n,dropImage:h,photosLength:O.length}),Object(f.jsx)(x,{images:u,dropImage:h,photosLength:O.length})]})]})}var _=function(){return Object(f.jsx)(u.a,{backend:j.a,children:Object(f.jsx)(N,{})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(_,{})}),document.getElementById("root")),I()}},[[38,1,2]]]);
//# sourceMappingURL=main.07d08037.chunk.js.map