(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{287:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return n})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return d})),t.d(a,"default",(function(){return c}));var i=t(3),s=t(7),r=(t(0),t(316)),n={id:"index-what-is-redis",title:"Redis:In-memory database. How it works and Why you should use it",description:"Redis is an open source, in-memory data store that delivers sub-millisecond response times and is used as a database, cache, message broker, and queue.",sidebar_label:"What is Redis?",slug:"/explore/what-is-redis",authors:["will"],keywords:["Redis","in-memory database","caching","session store","leaderboard","pub/sub","real-time apps","gaming"]},o={unversionedId:"explore/what-is-redis/index-what-is-redis",id:"explore/what-is-redis/index-what-is-redis",isDocsHomePage:!1,title:"Redis:In-memory database. How it works and Why you should use it",description:"Redis is an open source, in-memory data store that delivers sub-millisecond response times and is used as a database, cache, message broker, and queue.",source:"@site/docs/explore/what-is-redis/index-what-is-redis.mdx",slug:"/explore/what-is-redis",permalink:"/explore/what-is-redis",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/what-is-redis/index-what-is-redis.mdx",version:"current",sidebar_label:"What is Redis?",sidebar:"docs",previous:{title:"Explore Your Data",permalink:"/explore"},next:{title:"RedisInsight Developer Hub for Redis Interactive Tutorials",permalink:"/explore/redisinsightv2"}},d=[{value:"Redis Anywhere",id:"redis-anywhere",children:[]},{value:"Redis on AWS",id:"redis-on-aws",children:[]},{value:"Redis on Other Cloud Providers",id:"redis-on-other-cloud-providers",children:[]},{value:"Benefits of Redis",id:"benefits-of-redis",children:[{value:"Performance",id:"performance",children:[]},{value:"Flexible Data Structures",id:"flexible-data-structures",children:[]},{value:"Simplicity and ease-of-use",id:"simplicity-and-ease-of-use",children:[]},{value:"Replication and persistence",id:"replication-and-persistence",children:[]},{value:"High availability and scalability",id:"high-availability-and-scalability",children:[]},{value:"Open Source",id:"open-source",children:[]}]},{value:"Popular Redis Use Cases",id:"popular-redis-use-cases",children:[{value:"Caching",id:"caching",children:[]},{value:"Session storage",id:"session-storage",children:[]},{value:"Fraud Detection",id:"fraud-detection",children:[]},{value:"Real-time Inventory",id:"real-time-inventory",children:[]},{value:"Claims processing",id:"claims-processing",children:[]},{value:"Gaming Leaderboards",id:"gaming-leaderboards",children:[]},{value:"Messaging",id:"messaging",children:[]},{value:"Fast data ingest",id:"fast-data-ingest",children:[]}]},{value:"Redis Language Support",id:"redis-language-support",children:[]},{value:"Redis vs. Memcached",id:"redis-vs-memcached",children:[]},{value:"How to Host Redis",id:"how-to-host-redis",children:[]},{value:"Getting Started with Redis",id:"getting-started-with-redis",children:[]}],l={toc:d};function c(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"what-is-redis"},"What is Redis?"),Object(r.b)("p",null,"Redis is an open source, in-memory, key-value data store most commonly used as a database, cache, message broker, and queue. Redis delivers sub-millisecond response times, enabling fast and powerful real-time applications in industries such as gaming, fintech, ad-tech, social media, healthcare, and IoT. Redis is the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://insights.stackoverflow.com/survey/2021"}),"most-loved database")," by developers for five years running. Developers love Redis because of its ease of use, performance, and scalability. There is a Redis client available for use in every popular modern programming language. This coupled with the performance benefits makes Redis the most popular choice for caching, session management, gaming, fraud detection, leaderboards, real-time analytics, geospacial indexing, ride-sharing, social media, and streaming applications."),Object(r.b)("h3",{id:"redis-anywhere"},"Redis Anywhere"),Object(r.b)("p",null,"Redis Enterprise is the only true datastore built for hybrid and multi-cloud applications. ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/create/rediscloud"}),"Get started with Redis Enterprise Cloud"),"."),Object(r.b)("h3",{id:"redis-on-aws"},"Redis on AWS"),Object(r.b)("p",null,"You might be familiar with Amazon ElastiCache for Redis. It is a Redis-compatible cache service that is available on AWS. Redis Enterprise Cloud on AWS is a fully-managed Redis Enterprise as a service and supports Redis as a cache and a database. Learn more about ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/create/aws/redis-on-aws"}),"Redis on AWS"),"."),Object(r.b)("h3",{id:"redis-on-other-cloud-providers"},"Redis on Other Cloud Providers"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/create/gcp"}),"Redis on Google Cloud")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/create/azure"}),"Redis on Azure")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/create/heroku"}),"Redis on Heroku"))),Object(r.b)("h2",{id:"benefits-of-redis"},"Benefits of Redis"),Object(r.b)("h3",{id:"performance"},"Performance"),Object(r.b)("p",null,"The primary benefit of Redis is its sub-millisecond queries. Redis runs in-memory, which enables low-latency and high throughput. Running in-memory means requests for data do not require a trip to disk. This leads to an order of magnitude more operations and faster response times. Redis is one of the only databases that supports millions of operations per second."),Object(r.b)("h3",{id:"flexible-data-structures"},"Flexible Data Structures"),Object(r.b)("p",null,"Redis is a multi-model database, and provides several built-in data structures such as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Strings - any text or binary data (512MB max)"),Object(r.b)("li",{parentName:"ul"},"Hashes - field-value pairs that most commonly represent objects"),Object(r.b)("li",{parentName:"ul"},'Lists - a collection of Strings ordered by when they were added as a linked list. Useful for queues and "latest updates" for social media posts'),Object(r.b)("li",{parentName:"ul"},"Sets - an unordered collection of Strings with the ability to intersect, union, and diff against other Sets"),Object(r.b)("li",{parentName:"ul"},"Sorted Sets - similar to a Redis Set, the Sorted Set is a collection of unique string members. In a Sorted Set, each member is associated with a score that can be used to sort the collection."),Object(r.b)("li",{parentName:"ul"},"Bitmaps - not necessarily a data type, but a set of bit-oriented operations on the String type"),Object(r.b)("li",{parentName:"ul"},"Hyperloglogs - a probabilistic data structure used in order to count unique things (cardinality of a set)"),Object(r.b)("li",{parentName:"ul"},'Geospatial - a Sorted Set of longitude/latitude/name key-value pairs useful for maps, geosearching, and "nearby" features'),Object(r.b)("li",{parentName:"ul"},"Streams - a data type that models an append only log and which can be used as a durable message queue")),Object(r.b)("h4",{id:"redis-modules"},"Redis Modules"),Object(r.b)("p",null,"Redis also supports custom data structures called modules that run natively alongside core Redis. These modules can be used to create custom data structures that are not available in the built-in data structures. Examples of custom modules include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://redis.com/redis-enterprise/redis-search/"}),"RediSearch")," - a real-time search and secondary indexing engine that runs on your Redis dataset and allows you to query data that has just been indexed"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://redis.com/redis-enterprise/redis-json/"}),"RedisJSON")," - a native JSON data type tailored for fast, efficient, in-memory storage and retrieval or JSON documents at high speed and volume"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://redis.com/redis-enterprise/redis-gears/"}),"RedisGears")," - a programmable engine for Redis that runs inside Redis, closer to where your data lives and allows cluster-wide operations across shards, nodes, data structures, and data models at a sub-millisecond speed"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://redis.com/redis-enterprise/redis-ai/"}),"RedisAI")," - a machine learning data type that runs inside Redis and allows you to train and predict on your data. Additionally provides a common layer among different formats and platforms, including PyTorch, TensorFlow/TensoRT, and ONNXRuntime"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://redis.com/redis-enterprise/redis-graph/"}),"RedisGraph")," - a graph data structure that can be used to store and query data in a graph-oriented way. Supports the industry-standard Cypher as a query language and incorporates the state-of-the-art SuiteSparse GraphBLAS engine for matrix operations on sparse matrices"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://redis.com/redis-enterprise/redis-time-series/"}),"RedisTimeSeries")," - a time series data type with capabilities like automatic downsampling, aggregations, labeling and search, compression, and enhanced multi-range queries as well as built-in connectors to popular monitoring tools like Prometheus and Grafana enable the extraction of data into useful formats for visualization and monitoring"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://redis.com/redis-enterprise/redis-bloom/"}),"RedisBloom")," - provides Redis with support for additional probabilistic data structures and allows for constant memory space and extremely fast processing while still maintaining a low error rate. Supports Bloom and Cuckoo filters to determine whether an item is present or absent from a collection with a given degree of certainty, Count-min sketch to count the frequency of the different items in sub-linear space, and Top-K to count top k events in a near deterministic manner")),Object(r.b)("h3",{id:"simplicity-and-ease-of-use"},"Simplicity and ease-of-use"),Object(r.b)("p",null,"Redis makes complex applications easier to write and maintain. Redis presents a simple command and query structure for working with data versus query languages of traditional databases. When building applications you typically are using object-oriented languages like Java, Python, PHP, C, C++, C#, JavaScript, TypeScript, Node.js, Ruby, Go, and many others. The built-in data structures of Redis present a natural way of storing data exactly as you use it in object-oriented languages, minimizing ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/blog/the-impedance-mismatch-test/"}),"impedance mismatch"),". Redis also provides clients for almost every popular language, making it easy to build applications that can run on any platform."),Object(r.b)("h3",{id:"replication-and-persistence"},"Replication and persistence"),Object(r.b)("p",null,"Redis offers asynchronous replication where data can be replicated to multiple servers. This allows for improved read performance and faster recovery. Redis Enterprise additionally provides ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/redis-enterprise/technology/active-active-geo-distribution/"}),"Active-Active Geo-Distribution")," to ensure that data is distributed across multiple servers in a highly-available manner for both reads and writes. Redis supports point-in-time backups (known as RDB) that lets you copy Redis data to disk or cloud storage."),Object(r.b)("p",null,"While Redis open source was not built to be a durable and consistent database, ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/redis-enterprise/technology/durable-redis/"}),"Redis Enterprise provies a durability and consistency")," for Redis and allows you to use Redis as both a cache and a database."),Object(r.b)("h3",{id:"high-availability-and-scalability"},"High availability and scalability"),Object(r.b)("p",null,"Redis provides a primary-replica architecture as a single node or cluster. This allows you to build highly available, scalable, and reliable applications on top of Redis. You can easily scale Redis up, down, in, and out to meet application demands."),Object(r.b)("h3",{id:"open-source"},"Open Source"),Object(r.b)("p",null,"Redis is open source and available for free, and offers open source clients in many languages. The ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"#redis-modules"}),"Redis Modules listed above")," are also available for download or use in Redis Enterprise Cloud."),Object(r.b)("h2",{id:"popular-redis-use-cases"},"Popular Redis Use Cases"),Object(r.b)("h3",{id:"caching"},"Caching"),Object(r.b)("p",null,"Redis is the de-facto solution for caching. Because Redis can handle millions of queries per second and offers high availability and scalability, it is used as a cache to reduce the load on a relational or NoSQL database. This includes database query caching, session caching, page caching, and caching of frequently used objects such as images, files, and application data. Learn more about ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/solutions/use-cases/caching/"}),"Redis caching"),"."),Object(r.b)("h3",{id:"session-storage"},"Session storage"),Object(r.b)("p",null,"Redis provices sub-millisecond latency at scale, making it a natural choice to store session data. This includes user profile information, oauth tokens, credentials, session state, and more. Learn more about ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/solutions/use-cases/session-management/"}),"Redis session storage"),"."),Object(r.b)("h3",{id:"fraud-detection"},"Fraud Detection"),Object(r.b)("p",null,"Redis is built to handle real-time AI and machine learning workloads because of its scalability and high write throughput at low latency. Redis is often used as a primary database, enabling deep learning models directly where the data lives. Bloom filters, time series, and other data structures that work natively with Redis enable cost reduction with high-speed statistical analysis. Learn more about ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/solutions/use-cases/fraud-detection/"}),"Redis fraud detection"),"."),Object(r.b)("h3",{id:"real-time-inventory"},"Real-time Inventory"),Object(r.b)("p",null,"Retailers need to ensure that their real-time inventory systems can survive seasonal peaks, maintain data consistency, and deliver instant results. Redis is a great choice for this use case. It is a highly-available and highly-scalable database that can handle millions of queries per second. Redis clusters can be configured to replicate across multiple servers in a highly-available manner, enabling data consistency between stores. Learn more about ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/solutions/use-cases/real-time-inventory/"}),"Redis for real-time inventory management"),"."),Object(r.b)("h3",{id:"claims-processing"},"Claims processing"),Object(r.b)("p",null,"Insurance companies need to process claims in real-time, and receive millions of claims daily. Redis provides sub-millisecond latency and can process millions of requests per second. Redis has built-in data types for building scalable event-driven architectures. Redis Streams can enable injesting and analyzing large amounts of data in real-time. Learn more about ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/solutions/use-cases/claims-processing/"}),"Redis claims processing"),"."),Object(r.b)("h3",{id:"gaming-leaderboards"},"Gaming Leaderboards"),Object(r.b)("p",null,"Leaderboards require constant updates and scalability across millions of users. They also require complex mathematical computation, and must be distributed globally. Redis has built-in data types such as sorted sets that are useful for manipulating leaderboards. Redis also supports clustering and can be distributed globally. Learn more about ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/solutions/use-cases/leaderboards/"}),"Redis gaming leaderboards"),"."),Object(r.b)("h3",{id:"messaging"},"Messaging"),Object(r.b)("p",null,"Microservices and distributed systems need to be able to communicate with each other. Redis provides a simple, fast, and reliable messaging system that can be used for real-time communication between microservices. Redis Streams can be used to enable real-time analytics and data ingestion. Redis Pub/Sub is a lightweight messaging protocol designed for broadcasting and receiving notifications. Redis Lists and Redis Sorted Sets are two native data structures that are great for implementing message queues. Redis also has client libraries in most programming languages that enable you to use your programming language of choice. Learn more about ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/solutions/use-cases/messaging/"}),"Redis messaging"),"."),Object(r.b)("h3",{id:"fast-data-ingest"},"Fast data ingest"),Object(r.b)("p",null,"Redis can handle millions of read/write operations per second at sub-millisecond latencies, and it runs on AWS, GCP, Azure, and other cloud platforms. This makes Redis a great choice for processing large volumes of data that arrive in bursts, data from multiple sources/formats, data that needs to be filtered and analyzed, and data that is distributed geographically. Learn more about ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/solutions/use-cases/fast-data-ingest/"}),"Redis data ingestion"),"."),Object(r.b)("h2",{id:"redis-language-support"},"Redis Language Support"),Object(r.b)("p",null,"Redis supports most high-level popular programming languages and has SDKs built to make it easy to get started. Redis sclients are available the following languages (and more):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Python"),Object(r.b)("li",{parentName:"ul"},"JavaScript"),Object(r.b)("li",{parentName:"ul"},"Node.js"),Object(r.b)("li",{parentName:"ul"},"Java"),Object(r.b)("li",{parentName:"ul"},"Go"),Object(r.b)("li",{parentName:"ul"},"C/C++"),Object(r.b)("li",{parentName:"ul"},"C#"),Object(r.b)("li",{parentName:"ul"},"PHP"),Object(r.b)("li",{parentName:"ul"},"Ruby"),Object(r.b)("li",{parentName:"ul"},"Perl"),Object(r.b)("li",{parentName:"ul"},"Rust")),Object(r.b)("h2",{id:"redis-vs-memcached"},"Redis vs. Memcached"),Object(r.b)("p",null,"Both Redis and Memcached are open source, powerful, in-memory data stores. The main difference between the two is that Redis is a more full-featured database that is built to fit a number of different use-cases. Memcached is primarily used for key/value caching. Redis is used for both caching and as a database."),Object(r.b)("h2",{id:"how-to-host-redis"},"How to Host Redis"),Object(r.b)("p",null,"You can ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/try-free/"}),"sign up for Redis Enterprise Cloud")," for free, and when you create your subscription you can specify that you want to use AWS, GCP, or Azure. You can also configure the geographic region where you want to host Redis. Redis Enterprise Cloud is a great option when choosing Redis because:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"It is a fully-managed service that provides a single point of contact for all your Redis clusters."),Object(r.b)("li",{parentName:"ol"},"It is the only managed service that provides ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://redis.com/modules/get-started/"}),"Redis Modules")," that turn Redis into a multi-model database."),Object(r.b)("li",{parentName:"ol"},"It is built to scale with enterprise clustering, Redis-on-Flash, and Active-Active geo-distribution using CRDTs.")),Object(r.b)("h2",{id:"getting-started-with-redis"},"Getting Started with Redis"),Object(r.b)("p",null,"If you are ready to start building applications using Redis check out our ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/develop"}),"tutorials for Redis")," that let you use your programming language of choice!"))}c.isMDXComponent=!0},316:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return m}));var i=t(0),s=t.n(i);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,i,s=function(e,a){if(null==e)return{};var t,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=s.a.createContext({}),c=function(e){var a=s.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=c(e.components);return s.a.createElement(l.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return s.a.createElement(s.a.Fragment,{},a)}},p=s.a.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,n=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=c(t),p=i,m=u["".concat(n,".").concat(p)]||u[p]||b[p]||r;return t?s.a.createElement(m,o(o({ref:a},l),{},{components:t})):s.a.createElement(m,o({ref:a},l))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,n=new Array(r);n[0]=p;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,n[1]=o;for(var l=2;l<r;l++)n[l]=t[l];return s.a.createElement.apply(null,n)}return s.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);