(function(t){function e(e){for(var a,s,o=e[0],i=e[1],c=e[2],u=0,d=[];u<o.length;u++)s=o[u],n[s]&&d.push(n[s][0]),n[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);f&&f(e);while(d.length)d.shift()();return l.push.apply(l,c||[]),r()}function r(){for(var t,e=0;e<l.length;e++){for(var r=l[e],a=!0,s=1;s<r.length;s++){var o=r[s];0!==n[o]&&(a=!1)}a&&(l.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},s={index:0},n={index:0},l=[];function o(t){return i.p+"js/"+({"hello-world":"hello-world"}[t]||t)+"."+{"chunk-ade3598a":"098dc917","hello-world":"80c1981a"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r={"hello-world":1};s[t]?e.push(s[t]):0!==s[t]&&r[t]&&e.push(s[t]=new Promise((function(e,r){for(var a="css/"+({"hello-world":"hello-world"}[t]||t)+"."+{"chunk-ade3598a":"31d6cfe0","hello-world":"283f9c3e"}[t]+".css",n=i.p+a,l=document.getElementsByTagName("link"),o=0;o<l.length;o++){var c=l[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===n))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===a||u===n)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||n,l=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");l.request=a,delete s[t],f.parentNode.removeChild(f),r(l)},f.href=n;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){s[t]=0})));var a=n[t];if(0!==a)if(a)e.push(a[2]);else{var l=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=l);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=o(t),c=function(e){u.onerror=u.onload=null,clearTimeout(d);var r=n[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,l=new Error("Loading chunk "+t+" failed.\n("+a+": "+s+")");l.type=a,l.request=s,r[1](l)}n[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;l.push([0,"chunk-vendors","chunk-common"]),r()})({0:function(t,e,r){t.exports=r("c6f4")},3925:function(t,e,r){"use strict";var a=r("67b5"),s=r.n(a);s.a},"67b5":function(t,e,r){},c6f4:function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t._m(0),r("body",[r("fixed-header",[r("nav",{staticClass:"bg-grey px-8 pt-2 shadow-md justify-between"},[r("div",{staticClass:"flex items-center flex-shrink-0 text-grey-dark mr-6"},[r("span",{staticStyle:{"font-size":"3em",color:"Tomato"}},[r("font-awesome-icon",{attrs:{icon:"fa-plane"}}),r("i",{staticClass:"fa fa-plane",attrs:{"aria-hidden":"true"}})],1),r("span",{staticClass:"font-semibold text-xl px-3 py-3"},[t._v(" Boba Flights")])]),r("div",{staticClass:"-mb-px flex justify-center"},[r("a",{staticClass:"no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8",attrs:{href:"index.html"}},[t._v("Home")]),r("a",{staticClass:"no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8",attrs:{href:"flights.html"}},[t._v("Explore Flights")]),r("a",{staticClass:"no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8",attrs:{href:"about.html"}},[t._v("About")]),r("a",{staticClass:"no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3",attrs:{href:"signup.html"}},[t._v("Sign Up")])])])]),t._m(1),t._m(2),r("div",{staticStyle:{position:"relative"}},[r("div",[r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1),r("div")]),r("div",{staticClass:"bg-purple text-white sm:bg-green md:bg-blue md:text-yellow lg:bg-red xl:bg-orange ..."},[t._v("Test")])],1),t._m(3)])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("head",[r("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-fixed py-20",staticStyle:{"background-image":"url('~@/assets/image.jpeg')"}},[r("div",{staticClass:"container mx-auto px-6"},[r("h2",{staticClass:"text-4xl font-bold mb-2 text-black"},[t._v("Find Flights that Work for You!")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-20",staticStyle:{background:"linear-gradient(90deg, #667eea 0%, #764ba2 100%)"}},[r("div",{staticClass:"container mx-auto px-6"},[r("h2",{staticClass:"text-4xl font-bold mb-2 text-white"},[t._v("Find Flights that Work for You!")]),r("h3",{staticClass:"text-2xl mb-8 text-gray-200"},[t._v("Set your preferred location and get deals delivered just for YOU!")]),r("button",{staticClass:"bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"},[t._v("Sign Up Today!")]),r("div",{attrs:{id:"app"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("div",{staticClass:"w-full bg-blue-900"},[r("div",{staticClass:"flex flex-wrap text-center text-white"},[r("div",{staticClass:"w-full md:w-1/3 p-5 border-r border-blue-800 md:text-left"},[r("div",{staticClass:"my-6 ml-3 text-xl font-semibold"},[t._v("ABOUT US")]),r("p",{staticClass:"p-3 text-gray-400"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est\n                    massa. Donec eget elementum sapien, tincidunt tempor nunc. Cras sodales id ipsum at convallis.")]),r("p",{staticClass:"p-3 text-gray-400"},[t._v("Morbi tristique massa nec massa auctor, at scelerisque felis consectetur.\n                    Morbi tempus et odio sit amet feugiat. Maecenas dignissim a turpis in molestie. Fusce tincidunt\n                    vestibulum iaculis.")])]),r("div",{staticClass:"w-full md:w-1/3 p-5 border-r border-blue-800"},[r("div",{staticClass:"my-6 text-xl font-semibold"},[t._v("CONTACT US")]),r("p",{staticClass:"mt-8 text-gray-400"},[t._v("\n                    A108 Adam Street "),r("br"),t._v("\n                    New York, NY 535022 "),r("br"),t._v("\n                    United States "),r("br"),r("strong",[t._v("Phone:")]),t._v(" +1 5589 55488 55 "),r("br"),r("strong",[t._v("Email:")]),t._v(" info@webcraft.com\n                ")]),r("div",{staticClass:"relative w-20 h-20 mx-auto my-12 bg-blue-300 rotate-45"},[r("div",{staticClass:"flex justify-center items-center absolute left-0 top-0 w-10 h-10 hover:-ml-1 hover:-mt-1 bg-blue-800 cursor-pointer"},[r("i",{staticClass:"fab fa-facebook-f fa-lg text-blue-500 -rotate-45"})]),r("div",{staticClass:"flex justify-center items-center absolute top-0 right-0 w-10 h-10 hover:-mt-1 hover:-mr-1 bg-blue-800 cursor-pointer"},[r("i",{staticClass:"fab fa-twitter fa-lg text-blue-500 -rotate-45"})]),r("div",{staticClass:"flex justify-center items-center absolute right-0 bottom-0 w-10 h-10 hover:-mr-1 hover:-mb-1 bg-blue-800 cursor-pointer"},[r("i",{staticClass:"fab fa-google-plus-g fa-lg text-blue-500 -rotate-45"})]),r("div",{staticClass:"flex justify-center items-center absolute bottom-0 left-0 w-10 h-10 hover:-mb-1 hover:-ml-1 bg-blue-800 cursor-pointer"},[r("i",{staticClass:"fab fa-linkedin-in fa-lg text-blue-500 -rotate-45"})])])]),r("div",{staticClass:"w-full md:w-1/3 p-5"},[r("div",{staticClass:"mt-6 text-xl font-semibold"},[t._v("SAY HELLO!")]),r("form",{staticClass:"w-4/5 mx-auto mt-2 px-6 pt-6 pb-4 rounded"},[r("div",{staticClass:"flex items-center mb-4"},[r("input",{staticClass:"w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white",attrs:{type:"text",placeholder:"Username"}})]),r("div",{staticClass:"flex items-center mb-4"},[r("input",{staticClass:"w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white",attrs:{type:"text",placeholder:"Email"}})]),r("div",{staticClass:"mb-6"},[r("textarea",{staticClass:"w-full h-24 px-2 pt-2 border-b-2 border-blue-800 bg-blue-900 text-white",attrs:{placeholder:"Message"}})]),r("div",{staticClass:"flex justify-between items-center"},[r("button",{staticClass:"w-full py-2 px-4 rounded bg-orange-600 hover:bg-orange-700 text-white font-bold",attrs:{type:"button"}},[t._v("SEND")])])])])])])])}],l={name:"Home",components:{HelloWorld:function(){return r.e("hello-world").then(r.bind(null,"fdab"))},FlightTable:function(){return r.e("hello-world").then(r.bind(null,"cab2"))},FixedHeader:function(){return r.e("chunk-ade3598a").then(r.t.bind(null,"1ea9",7))}}},o=l,i=(r("3925"),r("2877")),c=Object(i["a"])(o,s,n,!1,null,null,null),u=c.exports,d=(r("def6"),r("ecee")),f=r("c074"),b=r("ad3d");d["b"].watch(),d["d"].add(f["b"]),d["d"].add(f["a"]),a["default"].component("font-awesome-icon",b["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(u)}}).$mount("#app")}});
//# sourceMappingURL=index.6f756572.js.map