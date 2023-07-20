"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[1629],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),d=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,b=c["".concat(o,".").concat(m)]||c[m]||p[m]||i;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),i=r(86010),l=r(72389),s=r(67392),o=r(7094),d=r(12466);const u="tabList__CuJ",p="tabItem_LNqP";function c(e){var t;const{lazy:r,block:l,defaultValue:c,values:m,groupId:b,className:h}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??y.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,s.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:R}=(0,o.U)(),[w,N]=(0,a.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,d.o5)();if(null!=b){const e=k[b];null!=e&&e!==w&&f.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,r=x.indexOf(t),n=f[r].value;n!==w&&(O(t),N(n),null!=b&&R(b,String(n)))},T=e=>{var t;let r=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;r=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=x[t]??x[x.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},h)},f.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:T,onClick:S},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),r??t)}))),r?(0,a.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return a.createElement(c,(0,n.Z)({key:String(t)},e))}},80024:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),i=r(65488),l=r(85162);const s={id:"index-ruby",title:"Ruby and Redis",sidebar_label:"Ruby",slug:"/develop/ruby/"},o=void 0,d={unversionedId:"develop/ruby/index-ruby",id:"develop/ruby/index-ruby",title:"Ruby and Redis",description:"Find tutorials, examples and technical articles that will help you to develop with Redis and Ruby.",source:"@site/docs/develop/ruby/index-ruby.mdx",sourceDirName:"develop/ruby",slug:"/develop/ruby/",permalink:"/develop/ruby/",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/ruby/index-ruby.mdx",tags:[],version:"current",lastUpdatedAt:1688164724,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{id:"index-ruby",title:"Ruby and Redis",sidebar_label:"Ruby",slug:"/develop/ruby/"},sidebar:"docs",previous:{title:"Go",permalink:"/develop/golang/"},next:{title:"PHP",permalink:"/develop/php/"}},u={},p=[{value:"Getting Started",id:"getting-started",level:3},{value:"Step 1. Run a Redis server",id:"step-1-run-a-redis-server",level:4},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository",level:3},{value:"Step 3. Install redis-rb:",id:"step-3-install-redis-rb",level:3},{value:"Step 4. Use Gemfile",id:"step-4-use-gemfile",level:3},{value:"Step 5. Execute",id:"step-5-execute",level:3},{value:"Step 6. Verifying",id:"step-6-verifying",level:3},{value:"Step 7. Opening a Connection to Redis Using redis-rb",id:"step-7-opening-a-connection-to-redis-using-redis-rb",level:3},{value:"Step 8. Verifying",id:"step-8-verifying",level:3},{value:"Redis Launchpad",id:"redis-launchpad",level:3},{value:"Rate-Limiting app in Ruby on Rails",id:"rate-limiting-app-in-ruby-on-rails",level:4},{value:"Leaderboard app in Ruby on Rails",id:"leaderboard-app-in-ruby-on-rails",level:4},{value:"Further References",id:"further-references",level:3}],c={toc:p};function m(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Find tutorials, examples and technical articles that will help you to develop with Redis and Ruby."),(0,a.kt)("h3",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"In order to use Redis with Ruby you will need a Ruby Redis client. In the following sections, we will demonstrate the use of redis-rb, a Ruby client library for Redis.\nAdditional Ruby clients for Redis can be found under the Ruby section of the Redis Clients page."),(0,a.kt)(i.Z,{defaultValue:"redis-rb",values:[{label:"Redis-rb",value:"redis-rb"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"redis-rb",mdxType:"TabItem"},(0,a.kt)("p",null,"Redis is an open source, in-memory, key-value data store most commonly used as a primary database, cache, message broker, and queue. Redis cache delivers sub-millisecond response times, enabling fast and powerful real-time applications in industries such as gaming, fintech, ad-tech, social media, healthcare, and IoT."),(0,a.kt)("h4",{id:"step-1-run-a-redis-server"},"Step 1. Run a Redis server"),(0,a.kt)("p",null,"You can either run Redis in a Docker container or directly on your machine.\nFollow the below commands to setup a Redis server on Mac OS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," brew tap redis-stack/redis-stack\n brew install --cask redis-stack\n")),(0,a.kt)("admonition",{title:"INFO",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Redis Stack unifies and simplifies the developer experience of the leading Redis modules and the capabilities they provide.\n",(0,a.kt)("a",{parentName:"p",href:"/create/redis-stack"},"Learn more"))),(0,a.kt)("p",null,"Ensure that you are able to use the following Redis command to connect to the Redis instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," redis-cli\n 127.0.0.1:6379>\n")),(0,a.kt)("p",null,"Now you should be able to perform CRUD operations with Redis commands. For example, you can insert data to Redis with the ",(0,a.kt)("inlineCode",{parentName:"p"},"SET")," command and the fetch it with the ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," command. The above Redis client command might require a password if you have setup authentication in your Redis configuration file. By default, Redis listens on port 6379. This can be modified in the Redis configuration file."),(0,a.kt)("h3",{id:"step-2-clone-the-repository"},"Step 2. Clone the repository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/redis-developer/redis-ruby-getting-started\n")),(0,a.kt)("h3",{id:"step-3-install-redis-rb"},"Step 3. Install redis-rb:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ gem install redis\n")),(0,a.kt)("p",null,"OR"),(0,a.kt)("h3",{id:"step-4-use-gemfile"},"Step 4. Use Gemfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$cat Gemfile\ngem 'redis'\n")),(0,a.kt)("h3",{id:"step-5-execute"},"Step 5. Execute"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ bundle install\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Resolving dependencies...\nUsing bundler 2.2.6\nUsing redis 4.2.5\nFollowing files may not be writable, so sudo is needed:\n  /Library/Ruby/Gems/2.6.0\n  /Library/Ruby/Gems/2.6.0/build_info\n  /Library/Ruby/Gems/2.6.0/cache\n  /Library/Ruby/Gems/2.6.0/doc\n  /Library/Ruby/Gems/2.6.0/extensions\n  /Library/Ruby/Gems/2.6.0/gems\n  /Library/Ruby/Gems/2.6.0/specifications\nBundle complete! 1 Gemfile dependency, 2 gems now installed.\nUse `bundle info [gemname]` to see where a bundled gem is installed.\n")),(0,a.kt)("h3",{id:"step-6-verifying"},"Step 6. Verifying"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bundle info redis\n  * redis (4.2.5)\n    Summary: A Ruby client library for Redis\n    Homepage: https://github.com/redis/redis-rb\n    Documentation: https://www.rubydoc.info/gems/redis/4.2.5\n    Source Code: https://github.com/redis/redis-rb/tree/v4.2.5\n    Changelog: https://github.com/redis/redis-rb/blob/master/CHANGELOG.md\n    Bug Tracker: https://github.com/redis/redis-rb/issues\n    Path: /Library/Ruby/Gems/2.6.0/gems/redis-4.2.5\n")),(0,a.kt)("h3",{id:"step-7-opening-a-connection-to-redis-using-redis-rb"},"Step 7. Opening a Connection to Redis Using redis-rb"),(0,a.kt)("p",null,"The following code creates a connection to Redis using redis-rb:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'require \'redis\'\nredis = Redis.new(host: "localhost", port: 6379, db: 11)\nredis.set("mykey", "hello world")\nredis.get("mykey")\n')),(0,a.kt)("p",null,"To adapt this example to your code, make sure that you replace the following values with those of your database:"),(0,a.kt)("p",null,"You can find connect.rb under this directory which you can directly use to test it."),(0,a.kt)("p",null,"Just execute the below command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ruby connect.rb\n")),(0,a.kt)("h3",{id:"step-8-verifying"},"Step 8. Verifying"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'127.0.0.1:6379> monitor\nOK\n1614684665.728109 [0 [::1]:50918] "select" "11"\n1614684665.728294 [11 [::1]:50918] "set" "mykey" "hello world"\n1614684665.728435 [11 [::1]:50918] "get" "mykey"\n\n')),(0,a.kt)("h3",{id:"redis-launchpad"},"Redis Launchpad"),(0,a.kt)("p",null,"Redis Launchpad is like an \u201cApp Store\u201d for Redis sample apps. You can easily find apps for your preferred frameworks and languages.\nCheck out a few of these apps below, or ",(0,a.kt)("a",{parentName:"p",href:"https://launchpad.redis.com"},"click here to access the complete list"),"."),(0,a.kt)("div",{class:"row text--center"},(0,a.kt)("div",{class:"col "},(0,a.kt)("div",{className:"ri-container"},(0,a.kt)("h4",{id:"rate-limiting-app-in-ruby-on-rails"},"Rate-Limiting app in Ruby on Rails"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Launchpad",src:r(84647).Z,width:"1228",height:"1102"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://Launchpad.redis.com/?id=project%3Abasic-redis-rate-limiting-demo-ruby"},"Rate Limiting app")," built in Ruby on Rails"))),(0,a.kt)("div",{class:"col"},(0,a.kt)("div",{className:"ri-container"},(0,a.kt)("h4",{id:"leaderboard-app-in-ruby-on-rails"},"Leaderboard app in Ruby on Rails"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Launchpad",src:r(822).Z,width:"1280",height:"1106"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://Launchpad.redis.com/?id=project%3Abasic-redis-leaderboard-demo-ruby"},"How to implement leaderboard app")," in Ruby on Rails")))),(0,a.kt)("h3",{id:"further-references"},"Further References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/redis/redis-rb/"},"A Ruby client library for Redis")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/socketry/async-redis"},"Async::Redis - An asynchronous client for Redis including TLS"))))))}m.isMDXComponent=!0},822:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/leaderboardruby-070cf1e75c2970af026644beffa5e353.png"},84647:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ratelimitingruby-2d37889fc2a422cd656d35ed477138df.png"}}]);