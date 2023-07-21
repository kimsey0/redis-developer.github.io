"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7599,3901,1966,2124],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},16839:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(92148),s=a(56391),i=a(80880);const l={id:"index-mb-account-dashboard",title:"Mobile Banking Account Dashboard Using Redis",sidebar_label:"Mobile Banking Account Dashboard Using Redis",slug:"/howtos/solutions/mobile-banking/account-dashboard",authors:["prasan","will"]},d=void 0,c={unversionedId:"howtos/solutions/mobile-banking/account-dashboard/index-mb-account-dashboard",id:"howtos/solutions/mobile-banking/account-dashboard/index-mb-account-dashboard",title:"Mobile Banking Account Dashboard Using Redis",description:"What is a mobile banking account dashboard?",source:"@site/docs/howtos/solutions/mobile-banking/account-dashboard/index-account-dashboard.mdx",sourceDirName:"howtos/solutions/mobile-banking/account-dashboard",slug:"/howtos/solutions/mobile-banking/account-dashboard",permalink:"/howtos/solutions/mobile-banking/account-dashboard",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/mobile-banking/account-dashboard/index-account-dashboard.mdx",tags:[],version:"current",lastUpdatedAt:1689881481,formattedLastUpdatedAt:"Jul 20, 2023",frontMatter:{id:"index-mb-account-dashboard",title:"Mobile Banking Account Dashboard Using Redis",sidebar_label:"Mobile Banking Account Dashboard Using Redis",slug:"/howtos/solutions/mobile-banking/account-dashboard",authors:["prasan","will"]},sidebar:"docs",previous:{title:"Mobile Banking Authentication and Session Storage Using Redis",permalink:"/howtos/solutions/mobile-banking/session-management"},next:{title:"Redis Search and Query Tutorial",permalink:"/howtos/redisearch"}},p={},m=[{value:"What is a mobile banking account dashboard?",id:"what-is-a-mobile-banking-account-dashboard",level:2},{value:"Why you should use Redis for account dashboards in mobile banking",id:"why-you-should-use-redis-for-account-dashboards-in-mobile-banking",level:2},{value:"Building an account dashboard with Redis",id:"building-an-account-dashboard-with-redis",level:2},{value:"Data seeding",id:"data-seeding",level:3},{value:"Balance over time",id:"balance-over-time",level:3},{value:"Biggest spenders",id:"biggest-spenders",level:3},{value:"Search existing transactions",id:"search-existing-transactions",level:3},{value:"Get recent transactions",id:"get-recent-transactions",level:3},{value:"Ready to use Redis in account dashboard?",id:"ready-to-use-redis-in-account-dashboard",level:2},{value:"Additional resources",id:"additional-resources",level:3}],u={toc:m};function h(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.default,{mdxType:"MobileBankingSourceCode"}),(0,r.kt)("h2",{id:"what-is-a-mobile-banking-account-dashboard"},"What is a mobile banking account dashboard?"),(0,r.kt)("p",null,"An account dashboard is a page in a mobile banking app that instantly renders account highlights to users. A customer can click on any of the accounts on the dashboard to see the real-time account details, such as latest transactions, mortgage amount they have left to pay, checking and savings, etc."),(0,r.kt)("p",null,"An account dashboard makes a customer's finances easily visible in one place. It reduces financial complexity for the customer and fosters customer loyalty."),(0,r.kt)("p",null,"The following diagram is an example data architecture for an account dashboard:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dashboard",src:a(54251).Z,width:"1432",height:"950"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Banks store information in a number of separate databases that support individual banking products"),(0,r.kt)("li",{parentName:"ol"},"Key customer account details (balances, recent transactions) across the banks product portfolio are prefetched into Redis Enterprise using Redis Data Integration (RDI)"),(0,r.kt)("li",{parentName:"ol"},"Redis Enterprise powers customer's account dashboards, enabling mobile banking users to view balances and other high-priority information immediately upon login")),(0,r.kt)("h2",{id:"why-you-should-use-redis-for-account-dashboards-in-mobile-banking"},"Why you should use Redis for account dashboards in mobile banking"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Resilience"),": Redis Enterprise provides resilience with 99.999% uptime and Active-Active Geo Distribution to prevent loss of critical user profile data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Scalability"),": Redis Enterprise provides < 1ms performance at incredibly high scale to ensure apps perform under peak loads")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"JSON Support"),": Provides the ability to create and store account information as JSON documents with the < 1ms speed of Redis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Querying and Indexing"),": Redis Enterprise can quickly identify and store data from multiple different databases and index data to make it readily searchable"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Redis Stack supports the ",(0,r.kt)("a",{parentName:"p",href:"/howtos/redisjson/"},(0,r.kt)("u",null,(0,r.kt)("strong",{parentName:"a"},"JSON")))," data type and allows you to index and querying JSON and ",(0,r.kt)("a",{parentName:"p",href:"https://redis.io/docs/stack/"},(0,r.kt)("u",null,(0,r.kt)("strong",{parentName:"a"},"more"))),". So your Redis data is not limited to simple key-value stringified data.")),(0,r.kt)("h2",{id:"building-an-account-dashboard-with-redis"},"Building an account dashboard with Redis"),(0,r.kt)(s.default,{mdxType:"MobileBankingSourceCode"}),(0,r.kt)("p",null,"Download the above source code and run following command to start the demo application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose up -d\n")),(0,r.kt)("p",null,"After docker up & running, open ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/")," url in browser to view application"),(0,r.kt)("h3",{id:"data-seeding"},"Data seeding"),(0,r.kt)(i.default,{mdxType:"MobileBankingDataSeeding"}),(0,r.kt)("h3",{id:"balance-over-time"},"Balance over time"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dashboard widget")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chart",src:a(55294).Z,width:"908",height:"482"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API endpoint")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/transaction/balance"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Code Location"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/routers/transaction-router.js"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Return value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[{x: timestamp, y: value}, ...]"))))),(0,r.kt)("p",null,"The balance endpoint leverages ",(0,r.kt)("a",{parentName:"p",href:"https://redis.io/docs/stack/timeseries/"},(0,r.kt)("strong",{parentName:"a"},"Time Series")),", It returns the range of all values from the time series object ",(0,r.kt)("inlineCode",{parentName:"p"},"balance_ts"),". The resulting range is converted to an array of objects with each object containing an ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," property containing the timestamp and a ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," property containing the associated value. This endpoint supplies the time series chart with coordinates to plot a visualization of the balance over time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app/routers/transaction-router.js"',title:'"app/routers/transaction-router.js"'},"const BALANCE_TS = 'balance_ts';\n\n/* fetch transactions up to sometime ago */\ntransactionRouter.get('/balance', async (req, res) => {\n  //time series range\n  const balance = await redis.ts.range(\n    BALANCE_TS,\n    Date.now() - 1000 * 60 * 5, //from\n    Date.now(), //to\n  );\n\n  let balancePayload = balance.map((entry) => {\n    return {\n      x: entry.timestamp,\n      y: entry.value,\n    };\n  });\n\n  res.send(balancePayload);\n});\n")),(0,r.kt)("h3",{id:"biggest-spenders"},"Biggest spenders"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dashboard widget")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chart",src:a(9872).Z,width:"868",height:"480"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API end point")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/transaction//biggestspenders"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Code Location"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/routers/transaction-router.js"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Return value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{labels:[...], series:[...] }"))))),(0,r.kt)("p",null,"The biggest spenders endpoint leverages ",(0,r.kt)("a",{parentName:"p",href:"https://redis.io/docs/manual/patterns/indexes/"},(0,r.kt)("strong",{parentName:"a"},"sorted sets"))," as a secondary index, It retrieves all members of the sorted set ",(0,r.kt)("inlineCode",{parentName:"p"},"bigspenders")," that have scores greater than zero. The top five or fewer are returned to provide the UI pie chart with data. The labels array contains the names of the biggest spenders and the series array contains the numeric values associated with each member name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app/routers/transaction-router.js"',title:'"app/routers/transaction-router.js"'},"const SORTED_SET_KEY = 'bigspenders';\n\n/* fetch top 5 biggest spenders */\ntransactionRouter.get('/biggestspenders', async (req, res) => {\n  const range = await redis.zRangeByScoreWithScores(\n    SORTED_SET_KEY,\n    0,\n    Infinity,\n  );\n  let series = [];\n  let labels = [];\n\n  range.slice(0, 5).forEach((spender) => {\n    series.push(parseFloat(spender.score.toFixed(2)));\n    labels.push(spender.value);\n  });\n\n  res.send({ series, labels });\n});\n")),(0,r.kt)("h3",{id:"search-existing-transactions"},"Search existing transactions"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dashboard widget")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Search transactions",src:a(77989).Z,width:"1942",height:"1100"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API end point")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/transaction/search"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Code Location"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/routers/transaction-router.js"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Query Parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"term")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Return value"),(0,r.kt)("td",{parentName:"tr",align:null},"array of results matching term")))),(0,r.kt)("p",null,"The search endpoint leverages ",(0,r.kt)("a",{parentName:"p",href:"https://redis.io/docs/stack/search/"},(0,r.kt)("strong",{parentName:"a"},"Search and Query")),", It receives a ",(0,r.kt)("inlineCode",{parentName:"p"},"term")," query parameter from the UI. A ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis/redis-om-node"},"Redis om Node")," query for the fields ",(0,r.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fromAccountName"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"accountType")," will trigger and return results."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app/routers/transaction-router.js"',title:'"app/routers/transaction-router.js"'},"transactionRouter.get('/search', async (req, res) => {\n  const term = req.query.term;\n\n  let results;\n\n  if (term.length >= 3) {\n    results = await bankRepo\n      .search()\n      .where('description')\n      .matches(term)\n      .or('fromAccountName')\n      .matches(term)\n      .or('transactionType')\n      .equals(term)\n      .return.all({ pageSize: 1000 });\n  }\n  res.send(results);\n});\n")),(0,r.kt)("h3",{id:"get-recent-transactions"},"Get recent transactions"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dashboard widget")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"View recent transactions",src:a(20337).Z,width:"1948",height:"1184"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API end point")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/transaction/transactions"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Code Location"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/routers/transaction-router.js"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Return value"),(0,r.kt)("td",{parentName:"tr",align:null},"array of results")))),(0,r.kt)("p",null,"Even the transactions endpoint leverages ",(0,r.kt)("a",{parentName:"p",href:"https://redis.io/docs/stack/search/"},(0,r.kt)("strong",{parentName:"a"},"Search and Query")),". A ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis/redis-om-node"},"Redis om Node")," query will trigger and return ten most recent transactions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app/routers/transaction-router.js"',title:'"app/routers/transaction-router.js"'},"/* return ten most recent transactions */\ntransactionRouter.get('/transactions', async (req, res) => {\n  const transactions = await bankRepo\n    .search()\n    .sortBy('transactionDate', 'DESC')\n    .return.all({ pageSize: 10 });\n\n  res.send(transactions.slice(0, 10));\n});\n")),(0,r.kt)("h2",{id:"ready-to-use-redis-in-account-dashboard"},"Ready to use Redis in account dashboard?"),(0,r.kt)("p",null,"Hopefully, this tutorial has helped you visualize how to use Redis for account dashboard, specifically in the context of mobile banking. For additional resources related to this topic, check out the links below:"),(0,r.kt)("h3",{id:"additional-resources"},"Additional resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/howtos/solutions/mobile-banking/session-management"},"Mobile Banking Session Management"))),(0,r.kt)(o.default,{mdxType:"GeneralAdditionalResources"}))}h.isMDXComponent=!0},92148:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={},s=void 0,i={unversionedId:"howtos/solutions/mobile-banking/common-mb/additional-resources",id:"howtos/solutions/mobile-banking/common-mb/additional-resources",title:"additional-resources",description:"- Redis YouTube channel",source:"@site/docs/howtos/solutions/mobile-banking/common-mb/additional-resources.mdx",sourceDirName:"howtos/solutions/mobile-banking/common-mb",slug:"/howtos/solutions/mobile-banking/common-mb/additional-resources",permalink:"/howtos/solutions/mobile-banking/common-mb/additional-resources",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/mobile-banking/common-mb/additional-resources.mdx",tags:[],version:"current",lastUpdatedAt:1688152068,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{}},l={},d=[],c={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/c/Redisinc"},"Redis YouTube channel")),(0,r.kt)("li",{parentName:"ul"},"Clients like ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/redis/node-redis"},"Node Redis")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/redis/redis-om-node"},"Redis OM Node")," help you to use Redis in Node.js applications."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redis.com/redis-enterprise/redis-insight/"},"RedisInsight"),": To view your Redis data or to play with raw Redis commands in the workbench"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redis.com/try-free/"},"Try Redis Enterprise for free"))))}p.isMDXComponent=!0},80880:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={},s=void 0,i={unversionedId:"howtos/solutions/mobile-banking/common-mb/data-seeding",id:"howtos/solutions/mobile-banking/common-mb/data-seeding",title:"data-seeding",description:"This application leverages Redis core data structures, JSON, TimeSeries, Search and Query features. The data seeded is later used to show a searchable transaction overview with realtime updates as well as a personal finance management overview with realtime balance and biggest spenders updates.",source:"@site/docs/howtos/solutions/mobile-banking/common-mb/data-seeding.mdx",sourceDirName:"howtos/solutions/mobile-banking/common-mb",slug:"/howtos/solutions/mobile-banking/common-mb/data-seeding",permalink:"/howtos/solutions/mobile-banking/common-mb/data-seeding",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/mobile-banking/common-mb/data-seeding.mdx",tags:[],version:"current",lastUpdatedAt:1689795051,formattedLastUpdatedAt:"Jul 19, 2023",frontMatter:{}},l={},d=[],c={toc:d};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This application leverages ",(0,r.kt)("strong",{parentName:"p"},"Redis core data structures, JSON, TimeSeries, Search and Query features"),". The data seeded is later used to show a searchable transaction overview with realtime updates as well as a personal finance management overview with realtime balance and biggest spenders updates."),(0,r.kt)("p",null,"On application startup in ",(0,r.kt)("inlineCode",{parentName:"p"},"app/server.js"),", a cron is scheduled to create random bank transactions at regular intervals and seed those transactions in to Redis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app/server.js"',title:'"app/server.js"'},"//cron job to trigger createBankTransaction() at regular intervals\n\ncron.schedule('*/10 * * * * *', async () => {\n  const userName = process.env.REDIS_USERNAME;\n\n  createBankTransaction(userName);\n\n  //...\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The transaction generator creates a randomized banking debit or credit which will reflect on a (default) starting user balance of $100,000.00"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"transaction data")," is saved as a JSON document within Redis."),(0,r.kt)("li",{parentName:"ul"},"To capture ",(0,r.kt)("strong",{parentName:"li"},"balance over time"),", the ",(0,r.kt)("inlineCode",{parentName:"li"},"balanceAfter")," value is recorded in a TimeSeries with the key ",(0,r.kt)("inlineCode",{parentName:"li"},"balance_ts")," for every transaction."),(0,r.kt)("li",{parentName:"ul"},"To track ",(0,r.kt)("strong",{parentName:"li"},"biggest spenders"),", an associated ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"fromAccountName"))," member within the sorted set ",(0,r.kt)("inlineCode",{parentName:"li"},"bigspenders")," is incremented by the transaction amount. Note that this amount can be positive or negative.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app/transactions/transactionsGenerator.js"',title:'"app/transactions/transactionsGenerator.js"'},"let balance = 100000.0;\nconst BALANCE_TS = 'balance_ts';\nconst SORTED_SET_KEY = 'bigspenders';\n\nexport const createBankTransaction = async () => {\n  //to create random bank transaction\n  let vendorsList = source.source; //app/transactions/transaction_sources.js\n  const random = Math.floor(Math.random() * 9999999999);\n\n  const vendor = vendorsList[random % vendorsList.length]; //random vendor from the list\n\n  const amount = createTransactionAmount(vendor.fromAccountName, random);\n  const transaction = {\n    id: random * random,\n    fromAccount: Math.floor((random / 2) * 3).toString(),\n    fromAccountName: vendor.fromAccountName,\n    toAccount: '1580783161',\n    toAccountName: 'bob',\n    amount: amount,\n    description: vendor.description,\n    transactionDate: new Date(),\n    transactionType: vendor.type,\n    balanceAfter: balance,\n  };\n\n  //redis json feature\n  const bankTransaction = await bankTransactionRepository.save(transaction);\n  console.log('Created bankTransaction!');\n  // ...\n};\n\nconst createTransactionAmount = (vendor, random) => {\n  let amount = createAmount(); //random amount\n  balance += amount;\n  balance = parseFloat(balance.toFixed(2));\n\n  //redis time series feature\n  redis.ts.add(BALANCE_TS, '*', balance, { DUPLICATE_POLICY: 'first' });\n  //redis sorted set as secondary index\n  redis.zIncrBy(SORTED_SET_KEY, amount * -1, vendor);\n\n  return amount;\n};\n")),(0,r.kt)("p",null,"Sample ",(0,r.kt)("inlineCode",{parentName:"p"},"bankTransaction")," data view using ",(0,r.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/"},"RedisInsight")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"bank transaction data",src:a(65089).Z,width:"900",height:"355"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"bank transaction json",src:a(91622).Z,width:"1336",height:"858"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Download ",(0,r.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/"},(0,r.kt)("u",null,(0,r.kt)("strong",{parentName:"a"},"RedisInsight")))," to view your Redis data or to play with raw Redis commands in the workbench. Learn more by reading the ",(0,r.kt)("a",{parentName:"p",href:"/explore/redisinsight/"},(0,r.kt)("u",null,(0,r.kt)("strong",{parentName:"a"},"RedisInsight tutorial"))))))}p.isMDXComponent=!0},56391:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={},s=void 0,i={unversionedId:"howtos/solutions/mobile-banking/common-mb/source-code-tip",id:"howtos/solutions/mobile-banking/common-mb/source-code-tip",title:"source-code-tip",description:"Below is a command to the clone the source code for the application used in this tutorial",source:"@site/docs/howtos/solutions/mobile-banking/common-mb/source-code-tip.mdx",sourceDirName:"howtos/solutions/mobile-banking/common-mb",slug:"/howtos/solutions/mobile-banking/common-mb/source-code-tip",permalink:"/howtos/solutions/mobile-banking/common-mb/source-code-tip",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/mobile-banking/common-mb/source-code-tip.mdx",tags:[],version:"current",lastUpdatedAt:1687456395,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{}},l={},d=[],c={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"GITHUB CODE",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Below is a command to the clone the source code for the application used in this tutorial"),(0,r.kt)("p",{parentName:"admonition"},"git clone --branch v1.2.0 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/mobile-banking-solutions"},"https://github.com/redis-developer/mobile-banking-solutions"))))}p.isMDXComponent=!0},55294:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/01-ui-balance-over-time-07ce1d984737d7d72ce3b9b8db8bd8e6.png"},9872:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/02-ui-biggest-spenders-b9275995357dda9cafd31da5f62dcebd.png"},77989:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/03-ui-search-transactions-bed71aac9b494e85cda1e72842484040.png"},20337:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/04-ui-recent-transactions-f5dc5e0c9559f763ec97769890baf8b4.png"},54251:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard-65ec89262c7e247b654a9a32ac0bd2c9.png"},65089:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bank-transaction-data-1b37f7f9cb0f5b2c97754ab3b51d11c5.png"},91622:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bank-transaction-json-37fcad9b0904e7cc5c148e6fd1e450e1.png"}}]);