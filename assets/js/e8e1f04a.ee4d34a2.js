"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[5050],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(a),h=n,g=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return a?r.createElement(g,s(s({ref:t},c),{},{components:a})):r.createElement(g,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},50358:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(67294),n=a(52263);const i="authorByline_VoxI",s="authorLabel_a70t",o="authorProfileImage_URwT";const p=function(e){let{frontMatter:t}=e;const{siteConfig:a}=(0,n.Z)(),p=a.customFields.authors;return r.createElement(r.Fragment,null,t.authors&&r.createElement("div",{className:"docAuthors"},r.createElement("hr",null),t.authors.map((e=>r.createElement("div",{key:e,className:i},r.createElement("img",{className:o,src:`/img/${p[e].image?p[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${p[e].name}`}),r.createElement("div",null,r.createElement("div",{className:s},"Author:"),r.createElement("div",null,r.createElement("a",{href:p[e].link,target:"_blank"},p[e].name),", ",p[e].title))))),r.createElement("hr",null)))}},79374:(e,t,a)=>{a.d(t,{ZP:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={toc:[]};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"End-of-Life Notice",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Redis is phasing out ",(0,n.kt)("strong",{parentName:"p"},"RedisGraph"),". ",(0,n.kt)("a",{parentName:"p",href:"https://redis.com/blog/redisgraph-eol/"},(0,n.kt)("u",null,(0,n.kt)("strong",{parentName:"a"},"This blog post")))," explains the motivation behind this decision and the implications for existing Redis customers and community members."),(0,n.kt)("p",{parentName:"admonition"},"End of support is scheduled for January 31, 2025."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"Beginning with Redis Stack 7.2.x-y, Redis Stack will no longer include graph capabilities (RedisGraph)."))))}s.isMDXComponent=!0},31486:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),i=a(50358),s=a(79374);const o={id:"index-usingjavascript",title:"How to query Graph data in Redis using JavaScript",sidebar_label:"RedisGraph and JavaScript",slug:"/howtos/redisgraph/using-javascript",authors:["ajeet"]},p=void 0,l={unversionedId:"howtos/redisgraph/using-javascript/index-usingjavascript",id:"howtos/redisgraph/using-javascript/index-usingjavascript",title:"How to query Graph data in Redis using JavaScript",description:"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. Show how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon. Query graphs using the industry-standard Cypher query language and easily use graph capabilities from application code.",source:"@site/docs/howtos/redisgraph/using-javascript/index-usingjavascript.mdx",sourceDirName:"howtos/redisgraph/using-javascript",slug:"/howtos/redisgraph/using-javascript",permalink:"/howtos/redisgraph/using-javascript",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraph/using-javascript/index-usingjavascript.mdx",tags:[],version:"current",lastUpdatedAt:1688572679,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{id:"index-usingjavascript",title:"How to query Graph data in Redis using JavaScript",sidebar_label:"RedisGraph and JavaScript",slug:"/howtos/redisgraph/using-javascript",authors:["ajeet"]}},c={},d=[{value:"RedisGraph JavaScript Client",id:"redisgraph-javascript-client",level:2},{value:"Step 1. Run Redis Stack Docker container",id:"step-1-run-redis-stack-docker-container",level:3},{value:"Step 2. Verify if RedisGraph module is loaded",id:"step-2-verify-if-redisgraph-module-is-loaded",level:3},{value:"Step 3. Clone the repository",id:"step-3-clone-the-repository",level:3},{value:"Step 4. Install the packages locally",id:"step-4-install-the-packages-locally",level:3},{value:"Step 5. Write a JavaScript code",id:"step-5-write-a-javascript-code",level:3},{value:"Step 6. Execute the Script",id:"step-6-execute-the-script",level:3},{value:"Step 7. Monitor the Graph query",id:"step-7-monitor-the-graph-query",level:3},{value:"Step 8. Install RedisInsight",id:"step-8-install-redisinsight",level:3},{value:"Step 9. Accessing RedisInsight",id:"step-9-accessing-redisinsight",level:3},{value:"Step 10. Run the Graph Query",id:"step-10-run-the-graph-query",level:3},{value:"References",id:"references",level:3}],u={toc:d};function h(e){let{components:t,...p}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.ZP,{mdxType:"GraphEol"}),(0,n.kt)(i.Z,{frontMatter:o,mdxType:"Authors"}),(0,n.kt)("p",null,"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. Show how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon. Query graphs using the industry-standard Cypher query language and easily use graph capabilities from application code."),(0,n.kt)("h2",{id:"redisgraph-javascript-client"},"RedisGraph JavaScript Client"),(0,n.kt)("p",null,"Follow the steps below to get started with RedisGraph with Java:"),(0,n.kt)("h3",{id:"step-1-run-redis-stack-docker-container"},"Step 1. Run Redis Stack Docker container"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -p 6379:6379 --name redis/redis-stack\n")),(0,n.kt)("h3",{id:"step-2-verify-if-redisgraph-module-is-loaded"},"Step 2. Verify if RedisGraph module is loaded"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," info modules\n # Modules\n module:name=graph,ver=20405,api=1,filters=0,usedby=[],using=[],options=[]\n")),(0,n.kt)("h3",{id:"step-3-clone-the-repository"},"Step 3. Clone the repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/RedisGraph/redisgraph.js\n")),(0,n.kt)("h3",{id:"step-4-install-the-packages-locally"},"Step 4. Install the packages locally"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," npm install redisgraph.js\n")),(0,n.kt)("h3",{id:"step-5-write-a-javascript-code"},"Step 5. Write a JavaScript code"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const RedisGraph = require('redisgraph.js').Graph;\n\nlet graph = new RedisGraph('social');\n\n(async () => {\n  await graph.query(\"CREATE (:person{name:'roi',age:32})\");\n  await graph.query(\"CREATE (:person{name:'amit',age:30})\");\n  await graph.query(\n    \"MATCH (a:person), (b:person) WHERE (a.name = 'roi' AND b.name='amit') CREATE (a)-[:knows]->(b)\",\n  );\n\n  // Match query.\n  let res = await graph.query(\n    'MATCH (a:person)-[:knows]->(:person) RETURN a.name',\n  );\n  while (res.hasNext()) {\n    let record = res.next();\n    console.log(record.get('a.name'));\n  }\n  console.log(res.getStatistics().queryExecutionTime());\n\n  // Match with parameters.\n  let param = { age: 30 };\n  res = await graph.query('MATCH (a {age: $age}) return a.name', param);\n  while (res.hasNext()) {\n    let record = res.next();\n    console.log(record.get('a.name'));\n  }\n\n  // Named paths matching.\n  res = await graph.query('MATCH p = (a:person)-[:knows]->(:person) RETURN p');\n  while (res.hasNext()) {\n    let record = res.next();\n    // See path.js for more path API.\n    console.log(record.get('p').nodeCount);\n  }\n  graph.deleteGraph();\n  graph.close();\n})();\n")),(0,n.kt)("p",null,'Save the above file as "app.js".'),(0,n.kt)("h3",{id:"step-6-execute-the-script"},"Step 6. Execute the Script"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"}," node app.js\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," roi\n 0.1789\n amit\n 2\n")),(0,n.kt)("h3",{id:"step-7-monitor-the-graph-query"},"Step 7. Monitor the Graph query"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},' 1632898652.415702 [0 172.17.0.1:64144] "info"\n 1632898652.418225 [0 172.17.0.1:64144] "graph.query" "social" "CREATE (:person{name:\'roi\',age:32})" "--compact"\n 1632898652.420399 [0 172.17.0.1:64144] "graph.query" "social" "CREATE (:person{name:\'amit\',age:30})" "--compact"\n 1632898652.421857 [0 172.17.0.1:64144] "graph.query" "social" "MATCH (a:person), (b:person) WHERE (a.name = \'roi\' AND b.name=\'amit\') CREATE (a)-[:knows]->(b)" "--compact"\n 1632898652.424911 [0 172.17.0.1:64144] "graph.query" "social" "MATCH (a:person)-[:knows]->(:person) RETURN a.name" "--compact"\n 1632898652.429658 [0 172.17.0.1:64144] "graph.query" "social" "CYPHER age=30  MATCH (a {age: $age}) return a.name" "--compact"\n 1632898652.431221 [0 172.17.0.1:64144] "graph.query" "social" "MATCH p = (a:person)-[:knows]->(:person) RETURN p" "--compact"\n 1632898652.433146 [0 172.17.0.1:64144] "graph.query" "social" "CALL db.labels()" "--compact"\n 1632898652.434781 [0 172.17.0.1:64144] "graph.query" "social" "CALL db.propertyKeys()" "--compact"\n 1632898652.436574 [0 172.17.0.1:64144] "graph.query" "social" "CALL db.relationshipTypes()" "--compact"\n 1632898652.438559 [0 172.17.0.1:64144] "graph.delete" "social"\n')),(0,n.kt)("h3",{id:"step-8-install-redisinsight"},"Step 8. Install RedisInsight"),(0,n.kt)("p",null,"Run the RedisInsight container. The easiest way is to run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -d -v redisinsight:/db -p 8001:8001 redislabs/redisinsight:latest\n")),(0,n.kt)("h3",{id:"step-9-accessing-redisinsight"},"Step 9. Accessing RedisInsight"),(0,n.kt)("p",null,"Next, point your browser to http://localhost:8001."),(0,n.kt)("h3",{id:"step-10-run-the-graph-query"},"Step 10. Run the Graph Query"),(0,n.kt)("p",null,"You can display the number of records returned by a query:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"My Image",src:a(31680).Z,width:"3086",height:"1616"})),(0,n.kt)("h3",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/howtos/redisgraphmovies/"},"Building Movies database app using RedisGraph and NodeJS")),(0,n.kt)("li",{parentName:"ul"},"Learn more about RedisGraph in the ",(0,n.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisgraph/"},"Quickstart")," tutorial."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/explore/redisinsight/redisgraph"},"Query, Visualize and Manipulate Graphs using RedisGraph Browser Tool"))),(0,n.kt)("h2",{id:""}),(0,n.kt)("div",null,(0,n.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,n.kt)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}h.isMDXComponent=!0},31680:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/redisgraph_ioredisgraph_java-8123a72e86bbf34b975e397cd01deb1d.png"}}]);