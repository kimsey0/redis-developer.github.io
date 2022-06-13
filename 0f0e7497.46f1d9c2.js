(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{393:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},394:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(20),a=n(401);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,s=void 0!==o&&o,c=i.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(s)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+b:b}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},401:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(393)),o=(n(394),["components"]),s={id:"index-exercise-1",title:"5.2 Getting Redis Statistics",sidebar_label:"5.2 Getting Redis Statistics",slug:"/operate/redis-at-scale/observability/exercise-1",isEditable:!1},c={unversionedId:"operate/redis-at-scale/observability/exercise-1/index-exercise-1",id:"operate/redis-at-scale/observability/exercise-1/index-exercise-1",isDocsHomePage:!1,title:"5.2 Getting Redis Statistics",description:"Clone this repo if you have not already//github.com/redislabs-training/ru301",source:"@site/docs/operate/redis-at-scale/observability/exercise-1/index-exercise-1.mdx",slug:"/operate/redis-at-scale/observability/exercise-1",permalink:"/operate/redis-at-scale/observability/exercise-1",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/operate/redis-at-scale/observability/exercise-1/index-exercise-1.mdx",version:"current",lastUpdatedAt:1652821384,sidebar_label:"5.2 Getting Redis Statistics",sidebar:"docs",previous:{title:"5.1 Data points in Redis",permalink:"/operate/redis-at-scale/observability/data-points-in-redis"},next:{title:"5.3 Identifying Issues",permalink:"/operate/redis-at-scale/observability/identifying-issues"}},l=[],b={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Clone this repo if you have not already: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/redislabs-training/ru301"},"https://github.com/redislabs-training/ru301")),Object(i.b)("p",null,"Change into the ",Object(i.b)("inlineCode",{parentName:"p"},"observability-stats")," directory."),Object(i.b)("strong",null,"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"docker"),Object(i.b)("li",{parentName:"ul"},"docker-compose"),Object(i.b)("li",{parentName:"ul"},"internet connection")),Object(i.b)("strong",null,"Starting Environment"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose up -d\n")),Object(i.b)("strong",null,"Connect to the Environment"),Object(i.b)("p",null,"In a terminal run this command to get a shell prompt inside the running Docker container:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose exec redis_stats bash\n")),Object(i.b)("strong",null,"Generate load"),Object(i.b)("p",null,"A simple way to to generate some load is to open another terminal and run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose exec redis_stats redis-benchmark\n")),Object(i.b)("strong",null,"Info"),Object(i.b)("p",null,"Since most of the stats data comes from the ",Object(i.b)("inlineCode",{parentName:"p"},"INFO")," command you should first run this to view that there."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli INFO\n")),Object(i.b)("p",null,"Try piping this output to a file."),Object(i.b)("strong",null,"Memory usage"),Object(i.b)("p",null,"Since we generally recommend setting the ",Object(i.b)("inlineCode",{parentName:"p"},"maxmemory")," size, it is possible to calculate the percentage of memory in use and alert based on results of the ",Object(i.b)("inlineCode",{parentName:"p"},"maxmemory")," configuration value and the ",Object(i.b)("inlineCode",{parentName:"p"},"used_memory")," stat."),Object(i.b)("p",null,"First set the ",Object(i.b)("inlineCode",{parentName:"p"},"maxmemory"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli config set maxmemory 100000\n")),Object(i.b)("p",null,"Then you can pull the two data points to see how that could be used to calculate memory usage."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli INFO | grep used_memory:\n$ redis-cli CONFIG GET maxmemory\n")),Object(i.b)("strong",null,"Client data"),Object(i.b)("p",null,"You can pull the ",Object(i.b)("inlineCode",{parentName:"p"},"clients")," section of the ",Object(i.b)("inlineCode",{parentName:"p"},"INFO")," command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli info clients\n")),Object(i.b)("p",null,"or maybe a particular metric you would want to track:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli info clients | grep connected_clients\n")),Object(i.b)("strong",null,"Stats section"),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"redis-cli")," to list the full 'stats' section."),Object(i.b)("strong",null,"Hit ratio"),Object(i.b)("p",null,"A cache hit/miss ratio could be generated using two data points in the stats section."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli INFO stats | grep keyspace \n")),Object(i.b)("strong",null,"Evicted keys"),Object(i.b)("p",null,"Eviction occurs when Redis has reached its maximum memory and ",Object(i.b)("inlineCode",{parentName:"p"},"maxmemory-policy")," in ",Object(i.b)("inlineCode",{parentName:"p"},"redis.conf")," is set to something other than ",Object(i.b)("inlineCode",{parentName:"p"},"volatile-lru"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli INFO stats | grep evicted_keys\n")),Object(i.b)("strong",null,"Expired keys"),Object(i.b)("p",null,"It is a good idea to keep an eye on the expirations to make sure Redis is performing as expected."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli INFO stats | grep expired_keys\n")),Object(i.b)("strong",null,"Keyspace"),Object(i.b)("p",null,"The following data could be used for graphing the size of the keyspace as a quick drop or spike in the number of keys is a good indicator of issues."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli INFO keyspace\n")),Object(i.b)("strong",null,"Workload (connections received, commands processed)"),Object(i.b)("p",null,"The following stats are a good indicator of workload on the Redis server."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'$ redis-cli INFO stats | egrep "^total_"\n')))}u.isMDXComponent=!0}}]);