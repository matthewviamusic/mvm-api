(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[889],{1877:function(t,e,n){"use strict";var r=n(3328);r.kL.register(...r.zX)},3940:function(t,e,n){"use strict";n.d(e,{$:function(){return we},A:function(){return Te},B:function(){return ie},C:function(){return tt},D:function(){return me},E:function(){return w},F:function(){return an},G:function(){return tn},H:function(){return B},I:function(){return ln},J:function(){return o},K:function(){return fn},L:function(){return Ge},M:function(){return $},N:function(){return q},O:function(){return p},P:function(){return Y},Q:function(){return m},R:function(){return Oe},S:function(){return J},T:function(){return F},U:function(){return te},V:function(){return ct},W:function(){return ne},X:function(){return ce},Y:function(){return fe},Z:function(){return ue},_:function(){return Ie},a:function(){return ve},a0:function(){return c},a1:function(){return u},a2:function(){return Kt},a3:function(){return k},a4:function(){return R},a5:function(){return Vt},a6:function(){return C},a7:function(){return Ee},a8:function(){return Ce},a9:function(){return Ae},aA:function(){return a},aB:function(){return mn},aC:function(){return s},aD:function(){return et},aE:function(){return V},aF:function(){return z},aG:function(){return K},aH:function(){return Q},aI:function(){return G},aJ:function(){return ee},aK:function(){return Pe},aL:function(){return _e},aa:function(){return T},ab:function(){return f},ac:function(){return i},ad:function(){return sn},ae:function(){return re},af:function(){return E},ag:function(){return v},ah:function(){return A},ai:function(){return ut},aj:function(){return be},ak:function(){return Je},al:function(){return _n},am:function(){return Mn},an:function(){return dn},ao:function(){return gn},ap:function(){return hn},aq:function(){return ae},ar:function(){return se},as:function(){return oe},at:function(){return he},au:function(){return ye},av:function(){return xe},aw:function(){return On},ax:function(){return rt},ay:function(){return yn},az:function(){return xn},b:function(){return h},c:function(){return Zt},d:function(){return Gt},e:function(){return lt},f:function(){return S},g:function(){return g},h:function(){return Me},i:function(){return d},j:function(){return I},k:function(){return l},l:function(){return Se},m:function(){return y},n:function(){return x},o:function(){return bn},p:function(){return ot},q:function(){return Z},r:function(){return r},s:function(){return X},t:function(){return U},u:function(){return Re},v:function(){return b},w:function(){return it},x:function(){return ke},y:function(){return ze},z:function(){return cn}});const r="undefined"===typeof window?function(t){return t()}:window.requestAnimationFrame;function o(t,e,n){const o=n||(t=>Array.prototype.slice.call(t));let i=!1,c=[];return function(...n){c=o(n),i||(i=!0,r.call(window,(()=>{i=!1,t.apply(e,c)})))}}function i(t,e){let n;return function(...r){return e?(clearTimeout(n),n=setTimeout(t,e,r)):t.apply(this,r),e}}const c=t=>"start"===t?"left":"end"===t?"right":"center",u=(t,e,n)=>"start"===t?e:"end"===t?n:(e+n)/2,a=(t,e,n,r)=>t===(r?"left":"right")?n:"center"===t?(e+n)/2:e;function s(){}const f=function(){let t=0;return function(){return t++}}();function l(t){return null===t||"undefined"===typeof t}function h(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.slice(0,7)&&"Array]"===e.slice(-6)}function d(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}const g=t=>("number"===typeof t||t instanceof Number)&&isFinite(+t);function p(t,e){return g(t)?t:e}function b(t,e){return"undefined"===typeof t?e:t}const y=(t,e)=>"string"===typeof t&&t.endsWith("%")?parseFloat(t)/100:t/e,x=(t,e)=>"string"===typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function m(t,e,n){if(t&&"function"===typeof t.call)return t.apply(n,e)}function w(t,e,n,r){let o,i,c;if(h(t))if(i=t.length,r)for(o=i-1;o>=0;o--)e.call(n,t[o],o);else for(o=0;o<i;o++)e.call(n,t[o],o);else if(d(t))for(c=Object.keys(t),i=c.length,o=0;o<i;o++)e.call(n,t[c[o]],c[o])}function v(t,e){let n,r,o,i;if(!t||!e||t.length!==e.length)return!1;for(n=0,r=t.length;n<r;++n)if(o=t[n],i=e[n],o.datasetIndex!==i.datasetIndex||o.index!==i.index)return!1;return!0}function O(t){if(h(t))return t.map(O);if(d(t)){const e=Object.create(null),n=Object.keys(t),r=n.length;let o=0;for(;o<r;++o)e[n[o]]=O(t[n[o]]);return e}return t}function M(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function _(t,e,n,r){if(!M(t))return;const o=e[t],i=n[t];d(o)&&d(i)?k(o,i,r):e[t]=O(i)}function k(t,e,n){const r=h(e)?e:[e],o=r.length;if(!d(t))return t;const i=(n=n||{}).merger||_;for(let c=0;c<o;++c){if(!d(e=r[c]))continue;const o=Object.keys(e);for(let r=0,c=o.length;r<c;++r)i(o[r],t,e,n)}return t}function T(t,e){return k(t,e,{merger:P})}function P(t,e,n){if(!M(t))return;const r=e[t],o=n[t];d(r)&&d(o)?T(r,o):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=O(o))}function j(t,e){const n=t.indexOf(".",e);return-1===n?t.length:n}function S(t,e){if(""===e)return t;let n=0,r=j(e,n);for(;t&&r>n;)t=t[e.slice(n,r)],n=r+1,r=j(e,n);return t}function R(t){return t.charAt(0).toUpperCase()+t.slice(1)}const I=t=>"undefined"!==typeof t,C=t=>"function"===typeof t,E=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function A(t){return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}const Y=Math.PI,F=2*Y,N=F+Y,W=Number.POSITIVE_INFINITY,L=Y/180,B=Y/2,D=Y/4,H=2*Y/3,$=Math.log10,X=Math.sign;function z(t){const e=Math.round(t);t=Q(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor($(t))),r=t/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function q(t){const e=[],n=Math.sqrt(t);let r;for(r=1;r<n;r++)t%r===0&&(e.push(r),e.push(t/r));return n===(0|n)&&e.push(n),e.sort(((t,e)=>t-e)).pop(),e}function Z(t){return!isNaN(parseFloat(t))&&isFinite(t)}function Q(t,e,n){return Math.abs(t-e)<n}function K(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function V(t,e,n){let r,o,i;for(r=0,o=t.length;r<o;r++)i=t[r][n],isNaN(i)||(e.min=Math.min(e.min,i),e.max=Math.max(e.max,i))}function U(t){return t*(Y/180)}function J(t){return t*(180/Y)}function G(t){if(!g(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function tt(t,e){const n=e.x-t.x,r=e.y-t.y,o=Math.sqrt(n*n+r*r);let i=Math.atan2(r,n);return i<-.5*Y&&(i+=F),{angle:i,distance:o}}function et(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function nt(t,e){return(t-e+N)%F-Y}function rt(t){return(t%F+F)%F}function ot(t,e,n,r){const o=rt(t),i=rt(e),c=rt(n),u=rt(i-o),a=rt(c-o),s=rt(o-i),f=rt(o-c);return o===i||o===c||r&&i===c||u>a&&s<f}function it(t,e,n){return Math.max(e,Math.min(n,t))}function ct(t){return it(t,-32768,32767)}function ut(t,e,n,r=1e-6){return t>=Math.min(e,n)-r&&t<=Math.max(e,n)+r}const at=t=>0===t||1===t,st=(t,e,n)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*F/n),ft=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*F/n)+1,lt={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*B),easeOutSine:t=>Math.sin(t*B),easeInOutSine:t=>-.5*(Math.cos(Y*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>at(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>at(t)?t:st(t,.075,.3),easeOutElastic:t=>at(t)?t:ft(t,.075,.3),easeInOutElastic(t){const e=.1125;return at(t)?t:t<.5?.5*st(2*t,e,.45):.5+.5*ft(2*t-1,e,.45)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-lt.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,n=2.75;return t<1/n?e*t*t:t<2/n?e*(t-=1.5/n)*t+.75:t<2.5/n?e*(t-=2.25/n)*t+.9375:e*(t-=2.625/n)*t+.984375},easeInOutBounce:t=>t<.5?.5*lt.easeInBounce(2*t):.5*lt.easeOutBounce(2*t-1)+.5};function ht(t){return t+.5|0}const dt=(t,e,n)=>Math.max(Math.min(t,n),e);function gt(t){return dt(ht(2.55*t),0,255)}function pt(t){return dt(ht(255*t),0,255)}function bt(t){return dt(ht(t/2.55)/100,0,1)}function yt(t){return dt(ht(100*t),0,100)}const xt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},mt=[..."0123456789ABCDEF"],wt=t=>mt[15&t],vt=t=>mt[(240&t)>>4]+mt[15&t],Ot=t=>(240&t)>>4===(15&t);function Mt(t){var e=(t=>Ot(t.r)&&Ot(t.g)&&Ot(t.b)&&Ot(t.a))(t)?wt:vt;return t?"#"+e(t.r)+e(t.g)+e(t.b)+((t,e)=>t<255?e(t):"")(t.a,e):void 0}const _t=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function kt(t,e,n){const r=e*Math.min(n,1-n),o=(e,o=(e+t/30)%12)=>n-r*Math.max(Math.min(o-3,9-o,1),-1);return[o(0),o(8),o(4)]}function Tt(t,e,n){const r=(r,o=(r+t/60)%6)=>n-n*e*Math.max(Math.min(o,4-o,1),0);return[r(5),r(3),r(1)]}function Pt(t,e,n){const r=kt(t,1,.5);let o;for(e+n>1&&(o=1/(e+n),e*=o,n*=o),o=0;o<3;o++)r[o]*=1-e-n,r[o]+=e;return r}function jt(t){const e=t.r/255,n=t.g/255,r=t.b/255,o=Math.max(e,n,r),i=Math.min(e,n,r),c=(o+i)/2;let u,a,s;return o!==i&&(s=o-i,a=c>.5?s/(2-o-i):s/(o+i),u=function(t,e,n,r,o){return t===o?(e-n)/r+(e<n?6:0):e===o?(n-t)/r+2:(t-e)/r+4}(e,n,r,s,o),u=60*u+.5),[0|u,a||0,c]}function St(t,e,n,r){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,r)).map(pt)}function Rt(t,e,n){return St(kt,t,e,n)}function It(t){return(t%360+360)%360}function Ct(t){const e=_t.exec(t);let n,r=255;if(!e)return;e[5]!==n&&(r=e[6]?gt(+e[5]):pt(+e[5]));const o=It(+e[2]),i=+e[3]/100,c=+e[4]/100;return n="hwb"===e[1]?function(t,e,n){return St(Pt,t,e,n)}(o,i,c):"hsv"===e[1]?function(t,e,n){return St(Tt,t,e,n)}(o,i,c):Rt(o,i,c),{r:n[0],g:n[1],b:n[2],a:r}}const Et={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},At={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};let Yt;function Ft(t){Yt||(Yt=function(){const t={},e=Object.keys(At),n=Object.keys(Et);let r,o,i,c,u;for(r=0;r<e.length;r++){for(c=u=e[r],o=0;o<n.length;o++)i=n[o],u=u.replace(i,Et[i]);i=parseInt(At[c],16),t[u]=[i>>16&255,i>>8&255,255&i]}return t}(),Yt.transparent=[0,0,0,0]);const e=Yt[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}const Nt=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;const Wt=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,Lt=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function Bt(t,e,n){if(t){let r=jt(t);r[e]=Math.max(0,Math.min(r[e]+r[e]*n,0===e?360:1)),r=Rt(r),t.r=r[0],t.g=r[1],t.b=r[2]}}function Dt(t,e){return t?Object.assign(e||{},t):t}function Ht(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=pt(t[3]))):(e=Dt(t,{r:0,g:0,b:0,a:1})).a=pt(e.a),e}function $t(t){return"r"===t.charAt(0)?function(t){const e=Nt.exec(t);let n,r,o,i=255;if(e){if(e[7]!==n){const t=+e[7];i=e[8]?gt(t):dt(255*t,0,255)}return n=+e[1],r=+e[3],o=+e[5],n=255&(e[2]?gt(n):dt(n,0,255)),r=255&(e[4]?gt(r):dt(r,0,255)),o=255&(e[6]?gt(o):dt(o,0,255)),{r:n,g:r,b:o,a:i}}}(t):Ct(t)}class Xt{constructor(t){if(t instanceof Xt)return t;const e=typeof t;let n;"object"===e?n=Ht(t):"string"===e&&(n=function(t){var e,n=t.length;return"#"===t[0]&&(4===n||5===n?e={r:255&17*xt[t[1]],g:255&17*xt[t[2]],b:255&17*xt[t[3]],a:5===n?17*xt[t[4]]:255}:7!==n&&9!==n||(e={r:xt[t[1]]<<4|xt[t[2]],g:xt[t[3]]<<4|xt[t[4]],b:xt[t[5]]<<4|xt[t[6]],a:9===n?xt[t[7]]<<4|xt[t[8]]:255})),e}(t)||Ft(t)||$t(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=Dt(this._rgb);return t&&(t.a=bt(t.a)),t}set rgb(t){this._rgb=Ht(t)}rgbString(){return this._valid?(t=this._rgb)&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${bt(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`):void 0;var t}hexString(){return this._valid?Mt(this._rgb):void 0}hslString(){return this._valid?function(t){if(!t)return;const e=jt(t),n=e[0],r=yt(e[1]),o=yt(e[2]);return t.a<255?`hsla(${n}, ${r}%, ${o}%, ${bt(t.a)})`:`hsl(${n}, ${r}%, ${o}%)`}(this._rgb):void 0}mix(t,e){if(t){const n=this.rgb,r=t.rgb;let o;const i=e===o?.5:e,c=2*i-1,u=n.a-r.a,a=((c*u===-1?c:(c+u)/(1+c*u))+1)/2;o=1-a,n.r=255&a*n.r+o*r.r+.5,n.g=255&a*n.g+o*r.g+.5,n.b=255&a*n.b+o*r.b+.5,n.a=i*n.a+(1-i)*r.a,this.rgb=n}return this}interpolate(t,e){return t&&(this._rgb=function(t,e,n){const r=Lt(bt(t.r)),o=Lt(bt(t.g)),i=Lt(bt(t.b));return{r:pt(Wt(r+n*(Lt(bt(e.r))-r))),g:pt(Wt(o+n*(Lt(bt(e.g))-o))),b:pt(Wt(i+n*(Lt(bt(e.b))-i))),a:t.a+n*(e.a-t.a)}}(this._rgb,t._rgb,e)),this}clone(){return new Xt(this.rgb)}alpha(t){return this._rgb.a=pt(t),this}clearer(t){return this._rgb.a*=1-t,this}greyscale(){const t=this._rgb,e=ht(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){return this._rgb.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Bt(this._rgb,2,t),this}darken(t){return Bt(this._rgb,2,-t),this}saturate(t){return Bt(this._rgb,1,t),this}desaturate(t){return Bt(this._rgb,1,-t),this}rotate(t){return function(t,e){var n=jt(t);n[0]=It(n[0]+e),n=Rt(n),t.r=n[0],t.g=n[1],t.b=n[2]}(this._rgb,t),this}}function zt(t){return new Xt(t)}function qt(t){if(t&&"object"===typeof t){const e=t.toString();return"[object CanvasPattern]"===e||"[object CanvasGradient]"===e}return!1}function Zt(t){return qt(t)?t:zt(t)}function Qt(t){return qt(t)?t:zt(t).saturate(.5).darken(.1).hexString()}const Kt=Object.create(null),Vt=Object.create(null);function Ut(t,e){if(!e)return t;const n=e.split(".");for(let r=0,o=n.length;r<o;++r){const e=n[r];t=t[e]||(t[e]=Object.create(null))}return t}function Jt(t,e,n){return"string"===typeof e?k(Ut(t,e),n):k(Ut(t,""),e)}var Gt=new class{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>Qt(e.backgroundColor),this.hoverBorderColor=(t,e)=>Qt(e.borderColor),this.hoverColor=(t,e)=>Qt(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,e){return Jt(this,t,e)}get(t){return Ut(this,t)}describe(t,e){return Jt(Vt,t,e)}override(t,e){return Jt(Kt,t,e)}route(t,e,n,r){const o=Ut(this,t),i=Ut(this,n),c="_"+e;Object.defineProperties(o,{[c]:{value:o[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[c],e=i[r];return d(t)?Object.assign({},e,t):b(t,e)},set(t){this[c]=t}}})}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function te(t,e,n,r,o){let i=e[o];return i||(i=e[o]=t.measureText(o).width,n.push(o)),i>r&&(r=i),r}function ee(t,e,n,r){let o=(r=r||{}).data=r.data||{},i=r.garbageCollect=r.garbageCollect||[];r.font!==e&&(o=r.data={},i=r.garbageCollect=[],r.font=e),t.save(),t.font=e;let c=0;const u=n.length;let a,s,f,l,d;for(a=0;a<u;a++)if(l=n[a],void 0!==l&&null!==l&&!0!==h(l))c=te(t,o,i,c,l);else if(h(l))for(s=0,f=l.length;s<f;s++)d=l[s],void 0===d||null===d||h(d)||(c=te(t,o,i,c,d));t.restore();const g=i.length/2;if(g>n.length){for(a=0;a<g;a++)delete o[i[a]];i.splice(0,g)}return c}function ne(t,e,n){const r=t.currentDevicePixelRatio,o=0!==n?Math.max(n/2,.5):0;return Math.round((e-o)*r)/r+o}function re(t,e){(e=e||t.getContext("2d")).save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function oe(t,e,n,r){let o,i,c,u,a;const s=e.pointStyle,f=e.rotation,l=e.radius;let h=(f||0)*L;if(s&&"object"===typeof s&&(o=s.toString(),"[object HTMLImageElement]"===o||"[object HTMLCanvasElement]"===o))return t.save(),t.translate(n,r),t.rotate(h),t.drawImage(s,-s.width/2,-s.height/2,s.width,s.height),void t.restore();if(!(isNaN(l)||l<=0)){switch(t.beginPath(),s){default:t.arc(n,r,l,0,F),t.closePath();break;case"triangle":t.moveTo(n+Math.sin(h)*l,r-Math.cos(h)*l),h+=H,t.lineTo(n+Math.sin(h)*l,r-Math.cos(h)*l),h+=H,t.lineTo(n+Math.sin(h)*l,r-Math.cos(h)*l),t.closePath();break;case"rectRounded":a=.516*l,u=l-a,i=Math.cos(h+D)*u,c=Math.sin(h+D)*u,t.arc(n-i,r-c,a,h-Y,h-B),t.arc(n+c,r-i,a,h-B,h),t.arc(n+i,r+c,a,h,h+B),t.arc(n-c,r+i,a,h+B,h+Y),t.closePath();break;case"rect":if(!f){u=Math.SQRT1_2*l,t.rect(n-u,r-u,2*u,2*u);break}h+=D;case"rectRot":i=Math.cos(h)*l,c=Math.sin(h)*l,t.moveTo(n-i,r-c),t.lineTo(n+c,r-i),t.lineTo(n+i,r+c),t.lineTo(n-c,r+i),t.closePath();break;case"crossRot":h+=D;case"cross":i=Math.cos(h)*l,c=Math.sin(h)*l,t.moveTo(n-i,r-c),t.lineTo(n+i,r+c),t.moveTo(n+c,r-i),t.lineTo(n-c,r+i);break;case"star":i=Math.cos(h)*l,c=Math.sin(h)*l,t.moveTo(n-i,r-c),t.lineTo(n+i,r+c),t.moveTo(n+c,r-i),t.lineTo(n-c,r+i),h+=D,i=Math.cos(h)*l,c=Math.sin(h)*l,t.moveTo(n-i,r-c),t.lineTo(n+i,r+c),t.moveTo(n+c,r-i),t.lineTo(n-c,r+i);break;case"line":i=Math.cos(h)*l,c=Math.sin(h)*l,t.moveTo(n-i,r-c),t.lineTo(n+i,r+c);break;case"dash":t.moveTo(n,r),t.lineTo(n+Math.cos(h)*l,r+Math.sin(h)*l)}t.fill(),e.borderWidth>0&&t.stroke()}}function ie(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function ce(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function ue(t){t.restore()}function ae(t,e,n,r,o){if(!e)return t.lineTo(n.x,n.y);if("middle"===o){const r=(e.x+n.x)/2;t.lineTo(r,e.y),t.lineTo(r,n.y)}else"after"===o!==!!r?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function se(t,e,n,r){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(r?e.cp1x:e.cp2x,r?e.cp1y:e.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function fe(t,e,n,r,o,i={}){const c=h(e)?e:[e],u=i.strokeWidth>0&&""!==i.strokeColor;let a,s;for(t.save(),t.font=o.string,function(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]);l(e.rotation)||t.rotate(e.rotation);e.color&&(t.fillStyle=e.color);e.textAlign&&(t.textAlign=e.textAlign);e.textBaseline&&(t.textBaseline=e.textBaseline)}(t,i),a=0;a<c.length;++a)s=c[a],u&&(i.strokeColor&&(t.strokeStyle=i.strokeColor),l(i.strokeWidth)||(t.lineWidth=i.strokeWidth),t.strokeText(s,n,r,i.maxWidth)),t.fillText(s,n,r,i.maxWidth),le(t,n,r,s,i),r+=o.lineHeight;t.restore()}function le(t,e,n,r,o){if(o.strikethrough||o.underline){const i=t.measureText(r),c=e-i.actualBoundingBoxLeft,u=e+i.actualBoundingBoxRight,a=n-i.actualBoundingBoxAscent,s=n+i.actualBoundingBoxDescent,f=o.strikethrough?(a+s)/2:s;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=o.decorationWidth||2,t.moveTo(c,f),t.lineTo(u,f),t.stroke()}}function he(t,e){const{x:n,y:r,w:o,h:i,radius:c}=e;t.arc(n+c.topLeft,r+c.topLeft,c.topLeft,-B,Y,!0),t.lineTo(n,r+i-c.bottomLeft),t.arc(n+c.bottomLeft,r+i-c.bottomLeft,c.bottomLeft,Y,B,!0),t.lineTo(n+o-c.bottomRight,r+i),t.arc(n+o-c.bottomRight,r+i-c.bottomRight,c.bottomRight,B,0,!0),t.lineTo(n+o,r+c.topRight),t.arc(n+o-c.topRight,r+c.topRight,c.topRight,0,-B,!0),t.lineTo(n+c.topLeft,r)}const de=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),ge=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function pe(t,e){const n=(""+t).match(de);if(!n||"normal"===n[1])return 1.2*e;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100}return e*t}function be(t,e){const n={},r=d(e),o=r?Object.keys(e):e,i=d(t)?r?n=>b(t[n],t[e[n]]):e=>t[e]:()=>t;for(const c of o)n[c]=+i(c)||0;return n}function ye(t){return be(t,{top:"y",right:"x",bottom:"y",left:"x"})}function xe(t){return be(t,["topLeft","topRight","bottomLeft","bottomRight"])}function me(t){const e=ye(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function we(t,e){t=t||{},e=e||Gt.font;let n=b(t.size,e.size);"string"===typeof n&&(n=parseInt(n,10));let r=b(t.style,e.style);r&&!(""+r).match(ge)&&(console.warn('Invalid font style specified: "'+r+'"'),r="");const o={family:b(t.family,e.family),lineHeight:pe(b(t.lineHeight,e.lineHeight),n),size:n,style:r,weight:b(t.weight,e.weight),string:""};return o.string=function(t){return!t||l(t.size)||l(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(o),o}function ve(t,e,n,r){let o,i,c,u=!0;for(o=0,i=t.length;o<i;++o)if(c=t[o],void 0!==c&&(void 0!==e&&"function"===typeof c&&(c=c(e),u=!1),void 0!==n&&h(c)&&(c=c[n%c.length],u=!1),void 0!==c))return r&&!u&&(r.cacheable=!1),c}function Oe(t,e,n){const{min:r,max:o}=t,i=x(e,(o-r)/2),c=(t,e)=>n&&0===t?0:t+e;return{min:c(r,-Math.abs(i)),max:c(o,i)}}function Me(t,e){return Object.assign(Object.create(t),e)}function _e(t,e,n){n=n||(n=>t[n]<e);let r,o=t.length-1,i=0;for(;o-i>1;)r=i+o>>1,n(r)?i=r:o=r;return{lo:i,hi:o}}const ke=(t,e,n)=>_e(t,n,(r=>t[r][e]<n)),Te=(t,e,n)=>_e(t,n,(r=>t[r][e]>=n));function Pe(t,e,n){let r=0,o=t.length;for(;r<o&&t[r]<e;)r++;for(;o>r&&t[o-1]>n;)o--;return r>0||o<t.length?t.slice(r,o):t}const je=["push","pop","shift","splice","unshift"];function Se(t,e){t._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),je.forEach((e=>{const n="_onData"+R(e),r=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(...e){const o=r.apply(this,e);return t._chartjs.listeners.forEach((t=>{"function"===typeof t[n]&&t[n](...e)})),o}})})))}function Re(t,e){const n=t._chartjs;if(!n)return;const r=n.listeners,o=r.indexOf(e);-1!==o&&r.splice(o,1),r.length>0||(je.forEach((e=>{delete t[e]})),delete t._chartjs)}function Ie(t){const e=new Set;let n,r;for(n=0,r=t.length;n<r;++n)e.add(t[n]);return e.size===r?t:Array.from(e)}function Ce(t,e=[""],n=t,r,o=(()=>t[0])){I(r)||(r=$e("_fallback",t));const i={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:n,_fallback:r,_getTarget:o,override:o=>Ce([o,...t],e,n,r)};return new Proxy(i,{deleteProperty:(e,n)=>(delete e[n],delete e._keys,delete t[0][n],!0),get:(n,r)=>Ne(n,r,(()=>function(t,e,n,r){let o;for(const i of e)if(o=$e(Ye(i,t),n),I(o))return Fe(t,o)?De(n,r,t,o):o}(r,e,t,n))),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),has:(t,e)=>Xe(t).includes(e),ownKeys:t=>Xe(t),set(t,e,n){const r=t._storage||(t._storage=o());return t[e]=r[e]=n,delete t._keys,!0}})}function Ee(t,e,n,r){const o={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:Ae(t,r),setContext:e=>Ee(t,e,n,r),override:o=>Ee(t.override(o),e,n,r)};return new Proxy(o,{deleteProperty:(e,n)=>(delete e[n],delete t[n],!0),get:(t,e,n)=>Ne(t,e,(()=>function(t,e,n){const{_proxy:r,_context:o,_subProxy:i,_descriptors:c}=t;let u=r[e];C(u)&&c.isScriptable(e)&&(u=function(t,e,n,r){const{_proxy:o,_context:i,_subProxy:c,_stack:u}=n;if(u.has(t))throw new Error("Recursion detected: "+Array.from(u).join("->")+"->"+t);u.add(t),e=e(i,c||r),u.delete(t),Fe(t,e)&&(e=De(o._scopes,o,t,e));return e}(e,u,t,n));h(u)&&u.length&&(u=function(t,e,n,r){const{_proxy:o,_context:i,_subProxy:c,_descriptors:u}=n;if(I(i.index)&&r(t))e=e[i.index%e.length];else if(d(e[0])){const n=e,r=o._scopes.filter((t=>t!==n));e=[];for(const a of n){const n=De(r,o,t,a);e.push(Ee(n,i,c&&c[t],u))}}return e}(e,u,t,c.isIndexable));Fe(e,u)&&(u=Ee(u,o,i&&i[e],c));return u}(t,e,n))),getOwnPropertyDescriptor:(e,n)=>e._descriptors.allKeys?Reflect.has(t,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,n),getPrototypeOf:()=>Reflect.getPrototypeOf(t),has:(e,n)=>Reflect.has(t,n),ownKeys:()=>Reflect.ownKeys(t),set:(e,n,r)=>(t[n]=r,delete e[n],!0)})}function Ae(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:r=e.indexable,_allKeys:o=e.allKeys}=t;return{allKeys:o,scriptable:n,indexable:r,isScriptable:C(n)?n:()=>n,isIndexable:C(r)?r:()=>r}}const Ye=(t,e)=>t?t+R(e):e,Fe=(t,e)=>d(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function Ne(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const r=n();return t[e]=r,r}function We(t,e,n){return C(t)?t(e,n):t}const Le=(t,e)=>!0===t?e:"string"===typeof t?S(e,t):void 0;function Be(t,e,n,r,o){for(const i of e){const e=Le(n,i);if(e){t.add(e);const i=We(e._fallback,n,o);if(I(i)&&i!==n&&i!==r)return i}else if(!1===e&&I(r)&&n!==r)return null}return!1}function De(t,e,n,r){const o=e._rootScopes,i=We(e._fallback,n,r),c=[...t,...o],u=new Set;u.add(r);let a=He(u,c,n,i||n,r);return null!==a&&((!I(i)||i===n||(a=He(u,c,i,a,r),null!==a))&&Ce(Array.from(u),[""],o,i,(()=>function(t,e,n){const r=t._getTarget();e in r||(r[e]={});const o=r[e];if(h(o)&&d(n))return n;return o}(e,n,r))))}function He(t,e,n,r,o){for(;n;)n=Be(t,e,n,r,o);return n}function $e(t,e){for(const n of e){if(!n)continue;const e=n[t];if(I(e))return e}}function Xe(t){let e=t._keys;return e||(e=t._keys=function(t){const e=new Set;for(const n of t)for(const t of Object.keys(n).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}(t._scopes)),e}function ze(t,e,n,r){const{iScale:o}=t,{key:i="r"}=this._parsing,c=new Array(r);let u,a,s,f;for(u=0,a=r;u<a;++u)s=u+n,f=e[s],c[u]={r:o.parse(S(f,i),s)};return c}const qe=Number.EPSILON||1e-14,Ze=(t,e)=>e<t.length&&!t[e].skip&&t[e],Qe=t=>"x"===t?"y":"x";function Ke(t,e,n,r){const o=t.skip?e:t,i=e,c=n.skip?e:n,u=et(i,o),a=et(c,i);let s=u/(u+a),f=a/(u+a);s=isNaN(s)?0:s,f=isNaN(f)?0:f;const l=r*s,h=r*f;return{previous:{x:i.x-l*(c.x-o.x),y:i.y-l*(c.y-o.y)},next:{x:i.x+h*(c.x-o.x),y:i.y+h*(c.y-o.y)}}}function Ve(t,e="x"){const n=Qe(e),r=t.length,o=Array(r).fill(0),i=Array(r);let c,u,a,s=Ze(t,0);for(c=0;c<r;++c)if(u=a,a=s,s=Ze(t,c+1),a){if(s){const t=s[e]-a[e];o[c]=0!==t?(s[n]-a[n])/t:0}i[c]=u?s?X(o[c-1])!==X(o[c])?0:(o[c-1]+o[c])/2:o[c-1]:o[c]}!function(t,e,n){const r=t.length;let o,i,c,u,a,s=Ze(t,0);for(let f=0;f<r-1;++f)a=s,s=Ze(t,f+1),a&&s&&(Q(e[f],0,qe)?n[f]=n[f+1]=0:(o=n[f]/e[f],i=n[f+1]/e[f],u=Math.pow(o,2)+Math.pow(i,2),u<=9||(c=3/Math.sqrt(u),n[f]=o*c*e[f],n[f+1]=i*c*e[f])))}(t,o,i),function(t,e,n="x"){const r=Qe(n),o=t.length;let i,c,u,a=Ze(t,0);for(let s=0;s<o;++s){if(c=u,u=a,a=Ze(t,s+1),!u)continue;const o=u[n],f=u[r];c&&(i=(o-c[n])/3,u[`cp1${n}`]=o-i,u[`cp1${r}`]=f-i*e[s]),a&&(i=(a[n]-o)/3,u[`cp2${n}`]=o+i,u[`cp2${r}`]=f+i*e[s])}}(t,i,e)}function Ue(t,e,n){return Math.max(Math.min(t,n),e)}function Je(t,e,n,r,o){let i,c,u,a;if(e.spanGaps&&(t=t.filter((t=>!t.skip))),"monotone"===e.cubicInterpolationMode)Ve(t,o);else{let n=r?t[t.length-1]:t[0];for(i=0,c=t.length;i<c;++i)u=t[i],a=Ke(n,u,t[Math.min(i+1,c-(r?0:1))%c],e.tension),u.cp1x=a.previous.x,u.cp1y=a.previous.y,u.cp2x=a.next.x,u.cp2y=a.next.y,n=u}e.capBezierPoints&&function(t,e){let n,r,o,i,c,u=ie(t[0],e);for(n=0,r=t.length;n<r;++n)c=i,i=u,u=n<r-1&&ie(t[n+1],e),i&&(o=t[n],c&&(o.cp1x=Ue(o.cp1x,e.left,e.right),o.cp1y=Ue(o.cp1y,e.top,e.bottom)),u&&(o.cp2x=Ue(o.cp2x,e.left,e.right),o.cp2y=Ue(o.cp2y,e.top,e.bottom)))}(t,n)}function Ge(){return"undefined"!==typeof window&&"undefined"!==typeof document}function tn(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function en(t,e,n){let r;return"string"===typeof t?(r=parseInt(t,10),-1!==t.indexOf("%")&&(r=r/100*e.parentNode[n])):r=t,r}const nn=t=>window.getComputedStyle(t,null);const rn=["top","right","bottom","left"];function on(t,e,n){const r={};n=n?"-"+n:"";for(let o=0;o<4;o++){const i=rn[o];r[i]=parseFloat(t[e+"-"+i+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}function cn(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:r}=e,o=nn(n),i="border-box"===o.boxSizing,c=on(o,"padding"),u=on(o,"border","width"),{x:a,y:s,box:f}=function(t,e){const n=t.touches,r=n&&n.length?n[0]:t,{offsetX:o,offsetY:i}=r;let c,u,a=!1;if(((t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot))(o,i,t.target))c=o,u=i;else{const t=e.getBoundingClientRect();c=r.clientX-t.left,u=r.clientY-t.top,a=!0}return{x:c,y:u,box:a}}(t,n),l=c.left+(f&&u.left),h=c.top+(f&&u.top);let{width:d,height:g}=e;return i&&(d-=c.width+u.width,g-=c.height+u.height),{x:Math.round((a-l)/d*n.width/r),y:Math.round((s-h)/g*n.height/r)}}const un=t=>Math.round(10*t)/10;function an(t,e,n,r){const o=nn(t),i=on(o,"margin"),c=en(o.maxWidth,t,"clientWidth")||W,u=en(o.maxHeight,t,"clientHeight")||W,a=function(t,e,n){let r,o;if(void 0===e||void 0===n){const i=tn(t);if(i){const t=i.getBoundingClientRect(),c=nn(i),u=on(c,"border","width"),a=on(c,"padding");e=t.width-a.width-u.width,n=t.height-a.height-u.height,r=en(c.maxWidth,i,"clientWidth"),o=en(c.maxHeight,i,"clientHeight")}else e=t.clientWidth,n=t.clientHeight}return{width:e,height:n,maxWidth:r||W,maxHeight:o||W}}(t,e,n);let{width:s,height:f}=a;if("content-box"===o.boxSizing){const t=on(o,"border","width"),e=on(o,"padding");s-=e.width+t.width,f-=e.height+t.height}return s=Math.max(0,s-i.width),f=Math.max(0,r?Math.floor(s/r):f-i.height),s=un(Math.min(s,c,a.maxWidth)),f=un(Math.min(f,u,a.maxHeight)),s&&!f&&(f=un(s/2)),{width:s,height:f}}function sn(t,e,n){const r=e||1,o=Math.floor(t.height*r),i=Math.floor(t.width*r);t.height=o/r,t.width=i/r;const c=t.canvas;return c.style&&(n||!c.style.height&&!c.style.width)&&(c.style.height=`${t.height}px`,c.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==r||c.height!==o||c.width!==i)&&(t.currentDevicePixelRatio=r,c.height=o,c.width=i,t.ctx.setTransform(r,0,0,r,0,0),!0)}const fn=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}return t}();function ln(t,e){const n=function(t,e){return nn(t).getPropertyValue(e)}(t,e),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function hn(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function dn(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:"middle"===r?n<.5?t.y:e.y:"after"===r?n<1?t.y:e.y:n>0?e.y:t.y}}function gn(t,e,n,r){const o={x:t.cp2x,y:t.cp2y},i={x:e.cp1x,y:e.cp1y},c=hn(t,o,n),u=hn(o,i,n),a=hn(i,e,n),s=hn(c,u,n),f=hn(u,a,n);return hn(s,f,n)}const pn=new Map;function bn(t,e,n){return function(t,e){e=e||{};const n=t+JSON.stringify(e);let r=pn.get(n);return r||(r=new Intl.NumberFormat(t,e),pn.set(n,r)),r}(e,n).format(t)}function yn(t,e,n){return t?function(t,e){return{x:n=>t+t+e-n,setWidth(t){e=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}}(e,n):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function xn(t,e){let n,r;"ltr"!==e&&"rtl"!==e||(n=t.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=r)}function mn(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function wn(t){return"angle"===t?{between:ot,compare:nt,normalize:rt}:{between:ut,compare:(t,e)=>t-e,normalize:t=>t}}function vn({start:t,end:e,count:n,loop:r,style:o}){return{start:t%n,end:e%n,loop:r&&(e-t+1)%n===0,style:o}}function On(t,e,n){if(!n)return[t];const{property:r,start:o,end:i}=n,c=e.length,{compare:u,between:a,normalize:s}=wn(r),{start:f,end:l,loop:h,style:d}=function(t,e,n){const{property:r,start:o,end:i}=n,{between:c,normalize:u}=wn(r),a=e.length;let s,f,{start:l,end:h,loop:d}=t;if(d){for(l+=a,h+=a,s=0,f=a;s<f&&c(u(e[l%a][r]),o,i);++s)l--,h--;l%=a,h%=a}return h<l&&(h+=a),{start:l,end:h,loop:d,style:t.style}}(t,e,n),g=[];let p,b,y,x=!1,m=null;const w=()=>x||a(o,y,p)&&0!==u(o,y),v=()=>!x||0===u(i,p)||a(i,y,p);for(let O=f,M=f;O<=l;++O)b=e[O%c],b.skip||(p=s(b[r]),p!==y&&(x=a(p,o,i),null===m&&w()&&(m=0===u(p,o)?O:M),null!==m&&v()&&(g.push(vn({start:m,end:O,loop:h,count:c,style:d})),m=null),M=O,y=p));return null!==m&&g.push(vn({start:m,end:l,loop:h,count:c,style:d})),g}function Mn(t,e){const n=[],r=t.segments;for(let o=0;o<r.length;o++){const i=On(r[o],t.points,e);i.length&&n.push(...i)}return n}function _n(t,e){const n=t.points,r=t.options.spanGaps,o=n.length;if(!o)return[];const i=!!t._loop,{start:c,end:u}=function(t,e,n,r){let o=0,i=e-1;if(n&&!r)for(;o<e&&!t[o].skip;)o++;for(;o<e&&t[o].skip;)o++;for(o%=e,n&&(i+=o);i>o&&t[i%e].skip;)i--;return i%=e,{start:o,end:i}}(n,o,i,r);if(!0===r)return kn(t,[{start:c,end:u,loop:i}],n,e);return kn(t,function(t,e,n,r){const o=t.length,i=[];let c,u=e,a=t[e];for(c=e+1;c<=n;++c){const n=t[c%o];n.skip||n.stop?a.skip||(r=!1,i.push({start:e%o,end:(c-1)%o,loop:r}),e=u=n.stop?c:null):(u=c,a.skip&&(e=c)),a=n}return null!==u&&i.push({start:e%o,end:u%o,loop:r}),i}(n,c,u<c?u+o:u,!!t._fullLoop&&0===c&&u===o-1),n,e)}function kn(t,e,n,r){return r&&r.setContext&&n?function(t,e,n,r){const o=t._chart.getContext(),i=Tn(t.options),{_datasetIndex:c,options:{spanGaps:u}}=t,a=n.length,s=[];let f=i,l=e[0].start,h=l;function d(t,e,r,o){const i=u?-1:1;if(t!==e){for(t+=a;n[t%a].skip;)t-=i;for(;n[e%a].skip;)e+=i;t%a!==e%a&&(s.push({start:t%a,end:e%a,loop:r,style:o}),f=o,l=e%a)}}for(const g of e){l=u?l:g.start;let t,e=n[l%a];for(h=l+1;h<=g.end;h++){const i=n[h%a];t=Tn(r.setContext(Me(o,{type:"segment",p0:e,p1:i,p0DataIndex:(h-1)%a,p1DataIndex:h%a,datasetIndex:c}))),Pn(t,f)&&d(l,h-1,g.loop,f),e=i,f=t}l<h-1&&d(l,h-1,g.loop,f)}return s}(t,e,n,r):e}function Tn(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function Pn(t,e){return e&&JSON.stringify(t)!==JSON.stringify(e)}},1163:function(t,e,n){t.exports=n(387)},5376:function(t,e,n){"use strict";n.d(e,{$Q:function(){return g},x1:function(){return d},xj:function(){return p}});var r=n(7294),o=n(3328);const i="label";function c(t,e){"function"===typeof t?t(e):t&&(t.current=e)}function u(t,e){t.labels=e}function a(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;const r=[];t.datasets=e.map((e=>{const o=t.datasets.find((t=>t[n]===e[n]));return o&&e.data&&!r.includes(o)?(r.push(o),Object.assign(o,e),o):{...e}}))}function s(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;const n={labels:[],datasets:[]};return u(n,t.labels),a(n,t.datasets,e),n}function f(t,e){let{height:n=150,width:i=300,redraw:f=!1,datasetIdKey:l,type:h,data:d,options:g,plugins:p=[],fallbackContent:b,updateMode:y,...x}=t;const m=(0,r.useRef)(null),w=(0,r.useRef)(),v=()=>{m.current&&(w.current=new o.kL(m.current,{type:h,data:s(d,l),options:g,plugins:p}),c(e,w.current))},O=()=>{c(e,null),w.current&&(w.current.destroy(),w.current=null)};return(0,r.useEffect)((()=>{var t,e;!f&&w.current&&g&&(t=w.current,e=g,t.options={...e})}),[f,g]),(0,r.useEffect)((()=>{!f&&w.current&&u(w.current.config.data,d.labels)}),[f,d.labels]),(0,r.useEffect)((()=>{!f&&w.current&&d.datasets&&a(w.current.config.data,d.datasets,l)}),[f,d.datasets]),(0,r.useEffect)((()=>{w.current&&(f?(O(),setTimeout(v)):w.current.update(y))}),[f,g,d.labels,d.datasets,y]),(0,r.useEffect)((()=>(v(),()=>O())),[]),r.createElement("canvas",Object.assign({ref:m,role:"img",height:n,width:i},x),b)}const l=(0,r.forwardRef)(f);function h(t,e){return o.kL.register(e),(0,r.forwardRef)(((e,n)=>r.createElement(l,Object.assign({},e,{ref:n,type:t}))))}const d=h("line",o.ST),g=h("bar",o.vn),p=h("bubble",o.N0)},9396:function(t,e,n){"use strict";function r(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}n.d(e,{Z:function(){return r}})}}]);