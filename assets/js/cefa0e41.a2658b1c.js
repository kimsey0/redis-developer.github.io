"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[1067],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return c}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),m=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),u=m(a),c=n,k=u["".concat(o,".").concat(c)]||u[c]||s[c]||i;return a?r.createElement(k,l(l({ref:e},p),{},{components:a})):r.createElement(k,l({ref:e},p))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=u;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:n,l[1]=d;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85162:function(t,e,a){a.d(e,{Z:function(){return l}});var r=a(67294),n=a(86010),i="tabItem_Ymn6";function l(t){var e=t.children,a=t.hidden,l=t.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,l),hidden:a},e)}},65488:function(t,e,a){a.d(e,{Z:function(){return c}});var r=a(87462),n=a(67294),i=a(86010),l=a(72389),d=a(67392),o=a(7094),m=a(12466),p="tabList__CuJ",s="tabItem_LNqP";function u(t){var e,a,l=t.lazy,u=t.block,c=t.defaultValue,k=t.values,N=t.groupId,h=t.className,f=n.Children.map(t.children,(function(t){if((0,n.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:f.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),y=(0,d.l)(g,(function(t,e){return t.value===e.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(e=null!=c?c:null==(a=f.find((function(t){return t.props.default})))?void 0:a.props.value)?e:f[0].props.value;if(null!==v&&!g.some((function(t){return t.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),b=w.tabGroupChoices,T=w.setTabGroupChoices,S=(0,n.useState)(v),P=S[0],C=S[1],U=[],R=(0,m.o5)().blockElementScrollPositionUntilNextRender;if(null!=N){var _=b[N];null!=_&&_!==P&&g.some((function(t){return t.value===_}))&&C(_)}var M=function(t){var e=t.currentTarget,a=U.indexOf(e),r=g[a].value;r!==P&&(R(e),C(r),null!=N&&T(N,String(r)))},E=function(t){var e,a=null;switch(t.key){case"ArrowRight":var r,n=U.indexOf(t.currentTarget)+1;a=null!=(r=U[n])?r:U[0];break;case"ArrowLeft":var i,l=U.indexOf(t.currentTarget)-1;a=null!=(i=U[l])?i:U[U.length-1]}null==(e=a)||e.focus()};return n.createElement("div",{className:(0,i.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},h)},g.map((function(t){var e=t.value,a=t.label,l=t.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:function(t){return U.push(t)},onKeyDown:E,onFocus:M,onClick:M},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":P===e})}),null!=a?a:e)}))),l?(0,n.cloneElement)(f.filter((function(t){return t.props.value===P}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==P})}))))}function c(t){var e=(0,l.Z)();return n.createElement(u,(0,r.Z)({key:String(e)},t))}},8138:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return c}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=a(65488),d=a(85162),o=["components"],m={id:"index-redis-live",title:"Redis Live",sidebar_label:"Redis Live",slug:"/redis-live/",custom_edit_url:null},p=void 0,s={unversionedId:"get-involved/redis-live/index-redis-live",id:"get-involved/redis-live/index-redis-live",title:"Redis Live",description:"Redis Live hosts a variety of live-streamed content on Twitch and YouTube. Follow us to get notified when we go live. And, you know, like and subscribe.",source:"@site/docs/get-involved/redis-live/index-redis-live.mdx",sourceDirName:"get-involved/redis-live",slug:"/redis-live/",permalink:"/redis-live/",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1662046161,formattedLastUpdatedAt:"9/1/2022",frontMatter:{id:"index-redis-live",title:"Redis Live",sidebar_label:"Redis Live",slug:"/redis-live/",custom_edit_url:null},sidebar:"docs",previous:{title:"Discord",permalink:"/community/discord/"},next:{title:"Redis Insiders",permalink:"/redis-insiders/"}},u={},c=[],k={toc:c};function N(t){var e=t.components,a=(0,n.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Redis Live hosts a variety of live-streamed content on ",(0,i.kt)("a",{parentName:"p",href:"https://twitch.tv/redisinc"},"Twitch")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/redisinc"},"YouTube"),". Follow us to get notified when we go live. And, you know, like and subscribe."),(0,i.kt)(l.Z,{defaultValue:"upcoming",values:[{label:"Upcoming Events",value:"upcoming"},{label:"Recurring Events",value:"recurring"},{label:"Past Events",value:"past"}],mdxType:"Tabs"},(0,i.kt)(d.Z,{value:"upcoming",mdxType:"TabItem"},(0,i.kt)("p",null,"Check out our upcoming events:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Time"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Streamers"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Show"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Friday, September 2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/guyroyse"},"Guy Royse")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Web, Whimsy, and Redis Stack: Redis MUD - Episode 3"))))),(0,i.kt)(d.Z,{value:"recurring",mdxType:"TabItem"},(0,i.kt)("p",null,"Sometimes we're on the road speaking at in-person events or enjoying a well deserved vacation. But when we're not, here's our weekly streaming schedule:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Day"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Time"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Streamers"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Show"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Tuesday"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2:00 PM ET"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/sav_norem"},"Savannah Norem")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitch.tv/redisinc"},"savannah_streams_in_snake_case"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Wednesday"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2:00 PM ET"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/slorello"},"Steve Lorello")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitch.tv/redisinc"},"Coding with Steve"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Thursday"),(0,i.kt)("td",{parentName:"tr",align:"center"},"9:30 AM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://simonprickett.dev"},"Simon Prickett")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitch.tv/redisinc"},"Simon's Things on Thursdays"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Friday"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2:00 PM ET"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/guyroyse"},"Guy Royse")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitch.tv/redisinc"},"Web, Whimsy, and Redis Stack: Random Projects with Guy")))))),(0,i.kt)(d.Z,{value:"past",mdxType:"TabItem"},(0,i.kt)("p",null,"Past events:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Time"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Streamers"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Show"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Thursday, September 1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"9:30 AM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://simonprickett.dev"},"Simon Prickett")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=Ym4g5iti3bo"},"Simon's Things on Thursdays - Hardware Bloom Filter"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Wednesday, August 31"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/slorello"},"Steve Lorello")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=_KqvqXLDaNA"},"Coding with Steve: Redis OM .NET - Episode 6"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Tuesday, August 30"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/sav_norem"},"Savannah Norem")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=7yTGbTaoWnA"},"savannah_streams_in_snake_case: Stream a Little Stream - Episode 2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Friday, August 26"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/guyroyse"},"Guy Royse")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=9br25zr9jv0"},"Web, Whimsy, and Redis Stack: Redis MUD - Episode 2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Wednesday, August 24"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/slorello"},"Steve Lorello")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=922nnTcThLA"},"Coding with Steve: Redis OM .NET - Episode 5"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Tuesday, August 23"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/sav_norem"},"Savannah Norem")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=QDfGI6jpwqA"},"savannah_streams_in_snake_case: Stream a Little Stream - Episode 1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Thursday, August 18"),(0,i.kt)("td",{parentName:"tr",align:"center"},"9:30 AM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://simonprickett.dev"},"Simon Prickett")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=uyjAFP73ttI"},"Simon's Things on Thursdays"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Tuesday, August 16"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/sav_norem"},"Savannah Norem")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=cFnBfsbyhvU"},"savannah_streams_in_snake_case"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Friday, August 12"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/guyroyse"},"Guy Royse")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=FfD2nmCrocI"},"Web, Whimsy, and Redis Stack: Random Projects with Guy"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Wednesday, August 10"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/slorello"},"Steve Lorello")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=eSnmtf3zcNc"},"Coding with Steve"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Tuesday, August 9"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/sav_norem"},"Savannah Norem")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=w1S-ZuCJc2Y"},"savannah_streams_in_snake_case"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Friday, August 5"),(0,i.kt)("td",{parentName:"tr",align:"center"},"9:30 AM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://simonprickett.dev"},"Simon Prickett")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=1F2nmm2jBjA"},"IoT with Redis: Introduction"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Wednesday, August 3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/slorello"},"Steve Lorello")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=_HyV2OkMUCw"},"Steve Works on Redis OM .NET"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Tuesday, August 2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/sav_norem"},"Savannah Norem")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=y5VXze8xtEA"},"savannah_streams_in_snake_case"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Friday, July 29"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/sav_norem"},"Savannah Norem"),", ",(0,i.kt)("a",{parentName:"td",href:"https://simonprickett.dev"},"Simon Prickett")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=SnKeNYJ_qsQ"},"First Steps to Open Source Contribution"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Thursday, July 28"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://simonprickett.dev"},"Simon Prickett")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Up and Running with RU203: Querying, Indexing and Full-Text Search")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Wednesday, July 27"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/slorello"},"Steve Lorello")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=68FDI5GlMIU"},"Steve Works on cli.redis.io"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Tuesday, July 26"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/sav_norem"},"Savannah Norem")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=_TGJSXZvLT8"},"savannah_streams_in_snake_case - Probabilistic Data Structures"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Wednesday, July 20"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/slorello"},"Steve Lorello")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=LV2Ax0Y8Kxk"},"Steve Works on cli.redis.io"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Friday, July 15"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/guyroyse"},"Guy Royse")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=aWJ9mfmHqfw"},"Exploring Bun and Node Redis"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Thursday, July 14"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://simonprickett.dev"},"Simon Prickett")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=q2UOkQmIo9Q"},"Introduction to Redis Streams with RedisInsight, Node and Python"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Wednesday, July 13"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/slorello"},"Steve Lorello")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Steve Works on Redis OM .NET")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Friday, July 8"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/guyroyse"},"Guy Royse")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Graph, Graph, and Graph")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Thursday, July 7"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://simonprickett.dev"},"Simon Prickett")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Up and Running with the RU202 Redis Streams Course")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Wednesday, July 6"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/slorello"},"Steve Lorello")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Steve Works on Redis OM .NET")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Thursday, June 30"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/sav_norem"},"Savannah Norem"),", ",(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/guyroyse"},"Guy Royse")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Comparing Sets, Bloom Filters, and Cuckoo Filters")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Wednesday, June 29"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/slorello"},"Steve Lorello")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Steve Works on Redis OM .NET!")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Tuesday, June 28"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://simonprickett.dev"},"Simon Prickett")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Up and Running with the RU102J Redis University Course")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Friday, June 24"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/guyroyse"},"Guy Royse")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Graph, Graph, and Graph")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Thursday, June 23"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/JustCastilla"},"Justin Castilla"),", ",(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/sav_norem"},"Savannah Norem")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=ZP2j7bmWfmU"},"Redis OM: Python + JSON + Search"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Thursday, June 16"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://simonprickett.dev"},"Simon Prickett"),", ",(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/JustCastilla"},"Justin Castilla")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=FAJXq5Qqc0Y"},"Counting Things At Scale with Redis"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Wednesday, June 15"),(0,i.kt)("td",{parentName:"tr",align:"center"},"5:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://simonprickett.dev"},"Simon Prickett")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Up and Running with the RU102JS Redis University Course")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Wednesday, June 15"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://simonprickett.dev"},"Simon Prickett")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Up and Running with the RU102PY Redis University Course")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Friday, June 10"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/guyroyse"},"Guy Royse")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Working on Redis OM for Node.js")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Friday, June 10"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/JustCastilla"},"Justin Castilla"),", ",(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/SuzeShardlow"},"Suze Shardlow")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Working with Redis Data Structures")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Friday, June 3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6:00 PM UTC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/guyroyse"},"Guy Royse")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Tracking Aircraft with Redis + Software-Defined Radio")))))))}N.isMDXComponent=!0}}]);