(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{2774:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return t(9512)}])},4461:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var n=t(5893);function s(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",width:"100vw"},children:(0,n.jsx)("h1",{className:"text-[9vw] text-slate-800",children:"LOADING..."})})})}},9512:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return N}});var n=t(5893),s=t(7294),a=t(1664),c=t.n(a),i=t(4461),l=t(7568),u=t(4051),o=t.n(u),h=t(9669),x=t.n(h)().create({baseURL:"https://matthewviamusic.com/api/tracks/"}),d=function(){var e=(0,l.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get();case 2:return r=e.sent,e.abrupt("return",r.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=t(357),p=t.n(f);function m(e){var r=e.tracks_prop,t=e.setSearchResults_prop,s=["trackName","albumName","trackNumber","genre"];return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("header",{className:"".concat(p().searchBox," flex justify-center"),children:(0,n.jsx)("input",{type:"text",id:"search",name:"search",onChange:function(e){var n=r.filter((function(r){return s.some((function(t){return r[t].toString().toLowerCase().includes(e.target.value.toLowerCase())}))}));t(n)},placeholder:"Search tracks by Matthew Via Music",onFocus:function(e){return e.target.placeholder=""},onBlur:function(e){return e.target.placeholder="Search tracks by Matthew Via Music"}})})})}function j(e){var r=e.track_prop;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"text-center flex flex-col justify-center mx-2 w-[250px]",children:[(0,n.jsx)("div",{className:"bg-[#FFFB00] w-[100%] -mb-3 ml-0",children:(0,n.jsx)(c(),{href:"/album/".concat(r.albumName.split(" ").join("+")),children:(0,n.jsx)("a",{children:(0,n.jsxs)("h2",{className:"text-lg cursor-pointer mb-3 leading-[1]",children:[r.trackName,(0,n.jsxs)("span",{className:"text-xs",children:["\xa0(",r.trackNumber,")"]})]})})})}),(0,n.jsx)(c(),{href:r.spotifyUrl,children:(0,n.jsx)("a",{target:"_blank",children:(0,n.jsx)("img",{className:"cursor-pointer mb-4 self-center block w-[250px]",src:r.artworkUrl,alt:r.albumName})})})]})})}function v(e){var r=e.searchResults_prop.map((function(e){return(0,n.jsx)(j,{track_prop:e},e.id)})),t=(null===r||void 0===r?void 0:r.length)?(0,n.jsx)("div",{className:"flex flex-wrap justify-center",children:r}):(0,n.jsx)("article",{children:(0,n.jsx)("p",{children:"No matching tracks"})});return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("main",{className:"mt-5",children:t})})}function N(){var e=(0,s.useState)(!0),r=e[0],t=e[1],a=(0,s.useState)([]),l=a[0],u=a[1],o=(0,s.useState)([]),h=o[0],x=o[1];return(0,s.useEffect)((function(){d().then((function(e){u(e),x(e),t(!1)})).catch((function(e){console.log(e),t(!0)}))}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"text-center centerStuff",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(c(),{href:"/albums",children:"\u2191 Albums"})}),(0,n.jsxs)("p",{children:[(0,n.jsx)(c(),{href:"https://matthewviamusic.com/api/tracks",children:(0,n.jsx)("a",{target:"_blank",children:"API \u2190"})}),(0,n.jsx)(c(),{href:"/datatable",children:(0,n.jsx)("a",{children:"\xa0Data Table\xa0\u2192"})}),(0,n.jsx)(c(),{href:"/docs",children:(0,n.jsx)("a",{children:"\xa0Docs\xa0"})})]})]}),r?(0,n.jsx)(i.Z,{}):(0,n.jsxs)("div",{children:[(0,n.jsx)(m,{tracks_prop:l,setSearchResults_prop:x}),(0,n.jsx)(v,{searchResults_prop:h})]})]})})}},357:function(e){e.exports={searchBox:"searchbox_searchBox__fSNHN"}}},function(e){e.O(0,[664,217,774,888,179],(function(){return r=2774,e(e.s=r);var r}));var r=e.O();_N_E=r}]);