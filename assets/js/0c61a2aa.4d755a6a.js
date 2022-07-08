"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[1084],{85162:function(e,t,a){a.d(t,{Z:function(){return r}});var i=a(67294),n=a(86010),s="tabItem_Ymn6";function r(e){var t=e.children,a=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,r),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return h}});var i=a(87462),n=a(67294),s=a(86010),r=a(72389),l=a(67392),o=a(7094),d=a(12466),u="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,a,r=e.lazy,c=e.block,h=e.defaultValue,m=e.values,g=e.groupId,k=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===h?h:null!=(t=null!=h?h:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),N=w.tabGroupChoices,x=w.setTabGroupChoices,R=(0,n.useState)(v),I=R[0],_=R[1],Z=[],C=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var S=N[g];null!=S&&S!==I&&b.some((function(e){return e.value===S}))&&_(S)}var E=function(e){var t=e.currentTarget,a=Z.indexOf(t),i=b[a].value;i!==I&&(C(t),_(i),null!=g&&x(g,String(i)))},T=function(e){var t,a=null;switch(e.key){case"ArrowRight":var i,n=Z.indexOf(e.currentTarget)+1;a=null!=(i=Z[n])?i:Z[0];break;case"ArrowLeft":var s,r=Z.indexOf(e.currentTarget)-1;a=null!=(s=Z[r])?s:Z[Z.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},k)},b.map((function(e){var t=e.value,a=e.label,r=e.attributes;return n.createElement("li",(0,i.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:T,onFocus:E,onClick:E},r,{className:(0,s.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":I===t})}),null!=a?a:t)}))),r?(0,n.cloneElement)(f.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function h(e){var t=(0,r.Z)();return n.createElement(c,(0,i.Z)({key:String(t)},e))}},1203:function(e,t,a){a.d(t,{Z:function(){return m}});var i=a(67294),n=a(3905),s=a(48811),r="riContainer_bco2",l="riDescriptionShort_E27B",o="riDetail_wzFs",d="riIcon_yDou",u="riTitle_x6vI",p="riDescription_RDnu",c="riMore_apRP",h=a(86010),m=function(e){var t=i.useState(!1),a=t[0],m=t[1];return i.createElement("a",{href:e.page,className:r},i.createElement("div",{className:l},i.createElement("div",{className:d},i.createElement("span",{className:"fe fe-zap"})),i.createElement("div",{className:o},i.createElement("div",{className:u},i.createElement("a",{href:e.page},e.title)),i.createElement("div",{className:p},e.description,i.Children.count(e.children)>0&&i.createElement("span",{className:(0,h.Z)(c,"fe","fe-more-horizontal"),onClick:function(){return m(!a)}})))),a&&i.createElement("div",{className:"ri-description-long"},i.createElement(n.Zo,{components:s.Z},e.children)))}},58107:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var i=a(87462),n=a(63366),s=(a(67294),a(3905)),r=(a(65488),a(85162),a(44996),a(1203),["components"]),l={id:"index-browser",title:"Visualize Redis database keys using RedisInsight Browser Tool",sidebar_label:"Visualize Redis database keys using RedisInsight Browser Tool",slug:"/explore/redisinsight/browser",authors:["ajeet"]},o=void 0,d={unversionedId:"explore/redisinsight/browser/index-browser",id:"explore/redisinsight/browser/index-browser",title:"Visualize Redis database keys using RedisInsight Browser Tool",description:"RedisInsight is a 100% free Redis GUI that allows you to visualise, monitor, and optimize while developing your applications with Redis. It provides an intuitive and efficient GUI for Redis allowing developers like you to interact with your databases and manage your data.",source:"@site/docs/explore/redisinsight/browser/index-browser.mdx",sourceDirName:"explore/redisinsight/browser",slug:"/explore/redisinsight/browser",permalink:"/explore/redisinsight/browser",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/browser/index-browser.mdx",tags:[],version:"current",lastUpdatedAt:1655488379,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-browser",title:"Visualize Redis database keys using RedisInsight Browser Tool",sidebar_label:"Visualize Redis database keys using RedisInsight Browser Tool",slug:"/explore/redisinsight/browser",authors:["ajeet"]},sidebar:"docs",previous:{title:"Getting Started with RedisInsight",permalink:"/explore/redisinsight/getting-started"},next:{title:"Debug Redis using RedisInsight Slowlog Debugging Tool",permalink:"/explore/redisinsight/slowlog"}},u={},p=[{value:"Step 1: Create a Redis Database",id:"step-1-create-a-redis-database",level:2},{value:"Step 2: Download RedisInsight",id:"step-2-download-redisinsight",level:2},{value:"Step 3: Open &quot;Browser Tool&quot;",id:"step-3-open-browser-tool",level:2},{value:"Step 4: Importing keys",id:"step-4-importing-keys",level:2},{value:"Step 5: Cloning the repository",id:"step-5-cloning-the-repository",level:2},{value:"Step 6. Adding a new key",id:"step-6-adding-a-new-key",level:2},{value:"Step 7. Searching the hash key",id:"step-7-searching-the-hash-key",level:2},{value:"Step 8: Filter keys by Data Type",id:"step-8-filter-keys-by-data-type",level:2},{value:"Step 9: Setting up the Expiry value",id:"step-9-setting-up-the-expiry-value",level:2},{value:"Step 10: Using CLI",id:"step-10-using-cli",level:2},{value:"Further References",id:"further-references",level:2}],c={toc:p};function h(e){var t=e.components,l=(0,n.Z)(e,r);return(0,s.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"RedisInsight is a 100% free Redis GUI that allows you to visualise, monitor, and optimize while developing your applications with Redis. It provides an intuitive and efficient GUI for Redis allowing developers like you to interact with your databases and manage your data."),(0,s.kt)("p",null,"RedisInsight Browser lets you explore keys in your redis server. You can add, edit and delete a key. You can even update the key expiry and copy the key name to be used in different places of the application."),(0,s.kt)("p",null,"In order to understand the capabilities of the browser tool, let us take a simple example and demonstrate capabilities of each of browse tool options:"),(0,s.kt)("h2",{id:"step-1-create-a-redis-database"},"Step 1: Create a Redis Database"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://developer.redis.com/create"},"Follow this link "),"to create Redis database"),(0,s.kt)("h2",{id:"step-2-download-redisinsight"},"Step 2: Download RedisInsight"),(0,s.kt)("p",null,"To install RedisInsight on your local system, you need to first download the software from the Redis website."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"},"Click this link ")," to access a form that allows you to select the operating system of your choice."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:a(94073).Z,width:"1464",height:"1256"})),(0,s.kt)("p",null,"Run the installer. After the web server starts, open http://YOUR_HOST_IP:8001 and add a Redis database connection."),(0,s.kt)("p",null,'Select "Connect to a Redis database"\n',(0,s.kt)("img",{alt:"My Image",src:a(66033).Z,width:"1790",height:"838"})),(0,s.kt)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password. Then click \u201cADD REDIS DATABASE\u201d."),(0,s.kt)("h2",{id:"step-3-open-browser-tool"},'Step 3: Open "Browser Tool"'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(7006).Z,width:"1540",height:"1494"})),(0,s.kt)("h2",{id:"step-4-importing-keys"},"Step 4: Importing keys"),(0,s.kt)("p",null,"Let us import a user database( 6k keys). This dataset contains users stored as Redis Hash."),(0,s.kt)("h3",{id:""}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Users")),(0,s.kt)("p",null,"The user hashes contain the following fields:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"user:id")," : The key of the hash."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"first_name")," : First Name."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"last_name")," : Last name."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"email")," : email address."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"gender")," : Gender (male/female)."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"ip_address")," : IP address."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"country")," : Country Name."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"country_code")," : Country Code."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"city")," : City of the user."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"longitude")," : Longitude of the user."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"latitude")," : Latitude of the user."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"last_login")," : EPOC time of the last login.")),(0,s.kt)("h2",{id:"step-5-cloning-the-repository"},"Step 5: Cloning the repository"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/redis-developer/redis-datasets\n cd redis-datasets/user-database\n")),(0,s.kt)("p",null,"Importing the user database:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," redis-cli -h localhost -p 6379 < ./import_users.redis\n")),(0,s.kt)("p",null,"Refresh the keys database by clicking as shown below:"),(0,s.kt)("p",null,"Click on \u201cScan More\u201d to scan all 6k keys"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(62233).Z,width:"942",height:"1600"})),(0,s.kt)("p",null,"You can get a real-time view of the data in your Redis database as shown below:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(31532).Z,width:"1434",height:"1600"})),(0,s.kt)("p",null,"Select any key in the key database and the results gets displayed in the right hand side that includes Fields and values."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(83649).Z,width:"1600",height:"1344"})),(0,s.kt)("h2",{id:"step-6-adding-a-new-key"},"Step 6. Adding a new key"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(20095).Z,width:"1406",height:"1366"})),(0,s.kt)("p",null,"Enter key name, field and value."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(19495).Z,width:"866",height:"870"})),(0,s.kt)("h2",{id:"step-7-searching-the-hash-key"},"Step 7. Searching the hash key"),(0,s.kt)("p",null,"You can search the key by \u201cuser:9999\u201d and you will see the result."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(24667).Z,width:"1600",height:"664"})),(0,s.kt)("p",null,"Let us add fields for user:9999 as shown below:"),(0,s.kt)("p",null,"You can even search by adding \u201c","*","\u201d and typing the first few letters."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(68868).Z,width:"1600",height:"715"})),(0,s.kt)("h2",{id:"step-8-filter-keys-by-data-type"},"Step 8: Filter keys by Data Type"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(69763).Z,width:"1600",height:"1555"})),(0,s.kt)("h2",{id:"step-9-setting-up-the-expiry-value"},"Step 9: Setting up the Expiry value"),(0,s.kt)("p",null,"Let us set it to 2 seconds and you won\u2019t be able to search for the same key as it gets expired."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(7174).Z,width:"1600",height:"1399"})),(0,s.kt)("h2",{id:"step-10-using-cli"},"Step 10: Using CLI"),(0,s.kt)("p",null,"RedisInsight CLI lets you run commands against a redis server. You don\u2019t need to remember the syntax - the integrated help shows you all the arguments and validates your command as you type."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'> HMGET user:3333 first_name last_name city\n\n1) "Myrlene"\n2) "McGrane"\n3) "Qinghu"\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(81823).Z,width:"1600",height:"871"})),(0,s.kt)("h2",{id:"further-references"},"Further References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/explore/redisinsight/slowlog"},"Slowlog Configuration using RedisInsight")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/explore/redisinsight/browser"},"Explore Redis keys using RedisInsight browser tool")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/explore/redisinsight/memoryanalyzer"},"Memory Analysis using RedisInsight"))),(0,s.kt)("h2",{id:"-1"}),(0,s.kt)("div",null,(0,s.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}h.isMDXComponent=!0},7006:function(e,t,a){t.Z=a.p+"assets/images/image1-48adc1ba36d743f772f90d928bda7f8c.png"},68868:function(e,t,a){t.Z=a.p+"assets/images/image10-da3bed0881c02d2e8c74dc6e81c61b5e.png"},69763:function(e,t,a){t.Z=a.p+"assets/images/image12-897a40ac2cfb18d5f2a9a6bb210d3984.png"},7174:function(e,t,a){t.Z=a.p+"assets/images/image13-46436ba9fb14ed6ad9888e7bc837b7f4.png"},81823:function(e,t,a){t.Z=a.p+"assets/images/image14-9bb714dfb103bf2c0c775a37101bbe82.png"},62233:function(e,t,a){t.Z=a.p+"assets/images/image3-8b9cf781b056b669f511fa133819dd5f.png"},31532:function(e,t,a){t.Z=a.p+"assets/images/image4-d482a018ff250b158ba4385f7c979e18.png"},83649:function(e,t,a){t.Z=a.p+"assets/images/image5-3ebe399cf1398a602712822c03d4a788.png"},20095:function(e,t,a){t.Z=a.p+"assets/images/image6-7058106958b5a24914c05103bc7d88fd.png"},19495:function(e,t,a){t.Z=a.p+"assets/images/image7-79c4c4d9546dd80ebd8062b70ef500a2.png"},24667:function(e,t,a){t.Z=a.p+"assets/images/image8-255c00d6b6fb56a2bd754802235fb960.png"},66033:function(e,t,a){t.Z=a.p+"assets/images/redisinsight4-c10ff2035f21df96053f824b1eefd790.png"},94073:function(e,t,a){t.Z=a.p+"assets/images/redisinsightinstall-b920e816c541305ea0ea2dd2593f5a0f.png"}}]);