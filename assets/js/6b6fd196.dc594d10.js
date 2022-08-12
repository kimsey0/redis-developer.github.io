"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[6946],{85162:function(e,t,i){i.d(t,{Z:function(){return a}});var r=i(67294),n=i(86010),s="tabItem_Ymn6";function a(e){var t=e.children,i=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,a),hidden:i},t)}},65488:function(e,t,i){i.d(t,{Z:function(){return v}});var r=i(87462),n=i(67294),s=i(86010),a=i(72389),l=i(67392),o=i(7094),d=i(12466),u="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,i,a=e.lazy,p=e.block,v=e.defaultValue,h=e.values,m=e.groupId,g=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),x=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===v?v:null!=(t=null!=v?v:null==(i=f.find((function(e){return e.props.default})))?void 0:i.props.value)?t:f[0].props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.U)(),R=k.tabGroupChoices,T=k.setTabGroupChoices,I=(0,n.useState)(w),E=I[0],y=I[1],N=[],_=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var Z=R[m];null!=Z&&Z!==E&&b.some((function(e){return e.value===Z}))&&y(Z)}var C=function(e){var t=e.currentTarget,i=N.indexOf(t),r=b[i].value;r!==E&&(_(t),y(r),null!=m&&T(m,String(r)))},D=function(e){var t,i=null;switch(e.key){case"ArrowRight":var r,n=N.indexOf(e.currentTarget)+1;i=null!=(r=N[n])?r:N[0];break;case"ArrowLeft":var s,a=N.indexOf(e.currentTarget)-1;i=null!=(s=N[a])?s:N[N.length-1]}null==(t=i)||t.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},g)},b.map((function(e){var t=e.value,i=e.label,a=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return N.push(e)},onKeyDown:D,onFocus:C,onClick:C},a,{className:(0,s.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":E===t})}),null!=i?i:t)}))),a?(0,n.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function v(e){var t=(0,a.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},1203:function(e,t,i){i.d(t,{Z:function(){return h}});var r=i(67294),n=i(3905),s=i(48811),a="riContainer_bco2",l="riDescriptionShort_E27B",o="riDetail_wzFs",d="riIcon_yDou",u="riTitle_x6vI",c="riDescription_RDnu",p="riMore_apRP",v=i(86010),h=function(e){var t=r.useState(!1),i=t[0],h=t[1];return r.createElement("a",{href:e.page,className:a},r.createElement("div",{className:l},r.createElement("div",{className:d},r.createElement("span",{className:"fe fe-zap"})),r.createElement("div",{className:o},r.createElement("div",{className:u},r.createElement("a",{href:e.page},e.title)),r.createElement("div",{className:c},e.description,r.Children.count(e.children)>0&&r.createElement("span",{className:(0,v.Z)(p,"fe","fe-more-horizontal"),onClick:function(){return h(!i)}})))),i&&r.createElement("div",{className:"ri-description-long"},r.createElement(n.Zo,{components:s.Z},e.children)))}},87256:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=i(87462),n=i(63366),s=(i(67294),i(3905)),a=i(1203),l=(i(65488),i(85162),i(44996),["components"]),o={id:"index-redisinsightv2",title:"RedisInsight Developer Hub for Redis Interactive Tutorials",sidebar_label:"Overview",slug:"/explore/redisinsightv2"},d=void 0,u={unversionedId:"explore/redisinsightv2/index-redisinsightv2",id:"explore/redisinsightv2/index-redisinsightv2",title:"RedisInsight Developer Hub for Redis Interactive Tutorials",description:"<RedisCard",source:"@site/docs/explore/redisinsightv2/index-redisinsightv2.mdx",sourceDirName:"explore/redisinsightv2",slug:"/explore/redisinsightv2",permalink:"/explore/redisinsightv2",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsightv2/index-redisinsightv2.mdx",tags:[],version:"current",lastUpdatedAt:1655488668,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-redisinsightv2",title:"RedisInsight Developer Hub for Redis Interactive Tutorials",sidebar_label:"Overview",slug:"/explore/redisinsightv2"},sidebar:"docs",previous:{title:"Import Data into a Redis database",permalink:"/explore/import/"},next:{title:"Getting Started with RedisInsight",permalink:"/explore/redisinsightv2/getting-started"}},c={},p=[],v={toc:p};function h(e){var t=e.components,i=(0,n.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{class:"row"},(0,s.kt)("div",{class:"col"},(0,s.kt)(a.Z,{title:"New to RedisInsight",imgPath:"redisinsight.png",description:"Getting started with RedisInsight v2.0",preview:"redisinsight.png",page:"/explore/redisinsightv2/getting-started",mdxType:"RedisCard"})),(0,s.kt)("div",{class:"col"},(0,s.kt)(a.Z,{title:"How to run RedisInsight on Windows",description:"Getting started with RedisInsight on Windows Platform",page:"/explore/redisinsightv2/windows",mdxType:"RedisCard"})),(0,s.kt)("div",{class:"col"},(0,s.kt)(a.Z,{title:"RedisInsight Browser Visualization Tutorial",imgPath:"redisinsight.png",description:"Visualize Redis database keys using the RedisInsight Browser Tool",preview:"redisinsight.png",page:"/explore/redisinsightv2/browser",mdxType:"RedisCard"}))),(0,s.kt)("div",{class:"row"},(0,s.kt)("div",{class:"col"},(0,s.kt)(a.Z,{title:"How To Use The RedisInsight Profiler Tool",description:"Analyze Your Redis Commands Using The Monitor Command",page:"/explore/redisinsightv2/profiler",mdxType:"RedisCard"})),(0,s.kt)("div",{class:"col"},(0,s.kt)(a.Z,{title:"How To Use The RediSearch Plugin in RedisInsight v2.0",description:"Perform Database Search and Analytics using the RediSearch Plugin in RedisInsight v2.0",page:"/explore/redisinsightv2/redisearch",mdxType:"RedisCard"}))))}h.isMDXComponent=!0}}]);