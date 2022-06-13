(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return d}));var n=r(3),i=r(7),a=(r(0),r(393)),o=(r(394),["components"]),c={id:"index-persistence-and-durability",title:"Ensuring Persistence & Durability in Redis",sidebar_label:"Persistence & Durability",slug:"/operate/redis-at-scale/persistence-and-durability",authors:["justin"],isEditable:!1},s={unversionedId:"operate/redis-at-scale/persistence-and-durability/index-persistence-and-durability",id:"operate/redis-at-scale/persistence-and-durability/index-persistence-and-durability",isDocsHomePage:!1,title:"Ensuring Persistence & Durability in Redis",description:"Hello World! Persistence & Durability",source:"@site/docs/operate/redis-at-scale/persistence-and-durability/index-persistence-and-durability.mdx",slug:"/operate/redis-at-scale/persistence-and-durability",permalink:"/operate/redis-at-scale/persistence-and-durability",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/operate/redis-at-scale/persistence-and-durability/index-persistence-and-durability.mdx",version:"current",lastUpdatedAt:1652821384,sidebar_label:"Persistence & Durability"},u=[],l={toc:u};function d(e){var t=e.components,r=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hello World! Persistence & Durability"))}d.isMDXComponent=!0},393:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,b=d["".concat(o,".").concat(f)]||d[f]||p[f]||a;return r?i.a.createElement(b,c(c({ref:t},u),{},{components:r})):i.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},394:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return o}));var n=r(20),i=r(401);function a(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,c=void 0!==o&&o,s=a.absolute,u=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(c)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+l:l}(a,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},401:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}))}}]);