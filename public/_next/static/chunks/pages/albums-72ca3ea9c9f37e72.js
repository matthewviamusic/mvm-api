(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10],{4995:function(t,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/albums",function(){return n(4645)}])},4461:function(t,r,n){"use strict";n.d(r,{Z:function(){return a}});var e=n(5893);function a(){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",{style:{display:"flex",justifyContent:"center",width:"100vw"},children:(0,e.jsx)("h1",{className:"text-[9vw] text-slate-800",children:"LOADING..."})})})}},4645:function(t,r,n){"use strict";n.r(r),n.d(r,{default:function(){return h}});var e=n(7568),a=n(797),o=n(4051),i=n.n(o),u=n(5893),s=n(4461),c=n(7598),l=n.n(c),f=n(7294),m=n(1664),d=n.n(m),p=n(9669),v=n.n(p);function h(){var t=(0,f.useState)(!0),r=t[0],n=t[1],o=(0,f.useState)(null),c=o[0],m=o[1],p=function(){var t=(0,e.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v().get("".concat("https://matthewviamusic.com/api/tracks/"));case 2:r=t.sent,m(r.data.reverse()),n(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();(0,f.useEffect)((function(){p()}),[]);var h=null===c||void 0===c?void 0:c.map((function(t){return t})),_=null===h||void 0===h?void 0:h.filter((function(t){return t.albumName===t.albumName})),x=null===h||void 0===h?void 0:h.filter((function(t){return t.artworkUrlRotator===t.artworkUrlRotator})),b=null===_||void 0===_?void 0:_.map((function(t){return t.albumName})),w=null===x||void 0===x?void 0:x.map((function(t){return t.artworkUrlRotator})),j=(0,a.Z)(new Set(b)),N=(0,a.Z)(new Set(w)),y=j.map((function(t,r){return{albumName:j[r],artworkUrlRotator:N[r]}}));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"mt-1 centerStuff",children:(0,u.jsx)(d(),{href:"/",children:(0,u.jsx)("a",{children:(0,u.jsx)("img",{className:"h-[20px]",src:"/home.svg",alt:"Matthew Via Music"})})})}),(0,u.jsx)("div",{className:l().rotatorWrapper,children:r?(0,u.jsx)(s.Z,{}):null===y||void 0===y?void 0:y.map((function(t,r){return(0,u.jsx)("div",{className:"cursor-pointer",children:(0,u.jsx)(d(),{href:"/album/".concat(t.albumName.split(" ").join("+")),children:(0,u.jsx)("a",{children:(0,u.jsxs)("div",{className:l().disc,children:[(0,u.jsx)("img",{className:l().rotator,src:t.artworkUrlRotator,alt:t.albumName}),(0,u.jsx)("span",{className:l().hole})]})})})},r)}))})]})}},7598:function(t){t.exports={rotatorWrapper:"albums_rotatorWrapper__AEXTa",disc:"albums_disc__FkKRj",rotator:"albums_rotator__RFtvE","logo-spin":"albums_logo-spin__L9Pxx",hole:"albums_hole__ZpqyV"}},797:function(t,r,n){"use strict";function e(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function a(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(t){if("string"===typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(r,{Z:function(){return a}})}},function(t){t.O(0,[664,217,774,888,179],(function(){return r=4995,t(t.s=r);var r}));var r=t.O();_N_E=r}]);