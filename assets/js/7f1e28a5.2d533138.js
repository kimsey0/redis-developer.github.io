"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[1727],{1203:function(e,t,o){o.d(t,{Z:function(){return k}});var a=o(67294),n=o(3905),r=o(48811),i="riContainer_bco2",s="riDescriptionShort_E27B",l="riDetail_wzFs",p="riIcon_yDou",u="riTitle_x6vI",d="riDescription_RDnu",c="riMore_apRP",h=o(86010),k=function(e){var t=a.useState(!1),o=t[0],k=t[1];return a.createElement("a",{href:e.page,className:i},a.createElement("div",{className:s},a.createElement("div",{className:p},a.createElement("span",{className:"fe fe-zap"})),a.createElement("div",{className:l},a.createElement("div",{className:u},a.createElement("a",{href:e.page},e.title)),a.createElement("div",{className:d},e.description,a.Children.count(e.children)>0&&a.createElement("span",{className:(0,h.Z)(c,"fe","fe-more-horizontal"),onClick:function(){return k(!o)}})))),o&&a.createElement("div",{className:"ri-description-long"},a.createElement(n.Zo,{components:r.Z},e.children)))}},62872:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),i=(o(1203),["components"]),s={id:"index-herokujava",title:"How to build a Java based application on Heroku using Redis",sidebar_label:"How to build a Java based application on Heroku using Redis",slug:"/howtos/herokujava",authors:["ajeet"]},l=void 0,p={unversionedId:"howtos/herokujava/index-herokujava",id:"howtos/herokujava/index-herokujava",title:"How to build a Java based application on Heroku using Redis",description:"Step 1. Create Redis Enterprise Cloud",source:"@site/docs/howtos/herokujava/index-herokujava.mdx",sourceDirName:"howtos/herokujava",slug:"/howtos/herokujava",permalink:"/howtos/herokujava",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/herokujava/index-herokujava.mdx",tags:[],version:"current",lastUpdatedAt:1655485898,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-herokujava",title:"How to build a Java based application on Heroku using Redis",sidebar_label:"How to build a Java based application on Heroku using Redis",slug:"/howtos/herokujava",authors:["ajeet"]},sidebar:"docs",previous:{title:"How to build a Python based application on Heroku using Redis",permalink:"/howtos/herokupython"}},u={},d=[{value:"Step 1. Create Redis Enterprise Cloud",id:"step-1-create-redis-enterprise-cloud",level:3},{value:"Step 2. Create a Heroku account",id:"step-2-create-a-heroku-account",level:3},{value:"Step 3. Install Heroku CLI on your system",id:"step-3-install-heroku-cli-on-your-system",level:3},{value:"Step 4. Login to Heroku",id:"step-4-login-to-heroku",level:3},{value:"Step 5. Connect your application to Redis Enterprise Cloud",id:"step-5-connect-your-application-to-redis-enterprise-cloud",level:3},{value:"Clone the repository",id:"clone-the-repository",level:4},{value:"Step 6. Setting up environment variables",id:"step-6-setting-up-environment-variables",level:3},{value:"Step 7. Deploy your code",id:"step-7-deploy-your-code",level:3},{value:"Step 8. Accessing the application",id:"step-8-accessing-the-application",level:3},{value:"Next Steps",id:"next-steps",level:3}],c={toc:d};function h(e){var t=e.components,s=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"step-1-create-redis-enterprise-cloud"},"Step 1. Create Redis Enterprise Cloud"),(0,r.kt)("p",null,"Create your free Redis Enterprise Cloud account. ",(0,r.kt)("a",{parentName:"p",href:"/create/rediscloud"},"Follow this link to create Redis Enterprise Cloud")," subscription and database as shown below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"heroku",src:o(49379).Z,width:"1286",height:"988"})),(0,r.kt)("p",null,"Save the database endpoint URL and password for future reference."),(0,r.kt)("h3",{id:"step-2-create-a-heroku-account"},"Step 2. Create a Heroku account"),(0,r.kt)("p",null,"If you are using Heroku for the first time, create your new Heroku account ",(0,r.kt)("a",{parentName:"p",href:"https://signup.heroku.com/login"},"through this link")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"heroku",src:o(72599).Z,width:"900",height:"1156"})),(0,r.kt)("h3",{id:"step-3-install-heroku-cli-on-your-system"},"Step 3. Install Heroku CLI on your system"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-macos"}," brew install heroku\n")),(0,r.kt)("h3",{id:"step-4-login-to-heroku"},"Step 4. Login to Heroku"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," heroku login\n heroku: Press any key to open up the browser to login or q to exit:\n Opening browser to https://cli-auth.heroku.com/auth/cli/browser/XXXXXXXXXXA\n Logging in... done\n Logged in as your_email_address\n")),(0,r.kt)("h3",{id:"step-5-connect-your-application-to-redis-enterprise-cloud"},"Step 5. Connect your application to Redis Enterprise Cloud"),(0,r.kt)("p",null,"For this demonstration, we will be using a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/basic-rate-limiting-demo-java"},"Sample Rate Limiting application")),(0,r.kt)("h4",{id:"clone-the-repository"},"Clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/redis-developer/basic-rate-limiting-demo-java\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"heroku create\nCreating app... done, \u2b22 hidden-woodland-03996\nhttps://hidden-woodland-03996.herokuapp.com/ | https://git.heroku.com/hidden-woodland-03996.git\n")),(0,r.kt)("h3",{id:"step-6-setting-up-environment-variables"},"Step 6. Setting up environment variables"),(0,r.kt)("p",null,'Go to Heroku dashboard, click "Settings" and set ',(0,r.kt)("inlineCode",{parentName:"p"},"REDIS_ENDPOINT_URI")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"REDIS_PASSWORD")," under the Config Vars.\nRefer to Step 1 for reference."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"heroku",src:o(38538).Z,width:"1452",height:"318"})),(0,r.kt)("p",null,"You now have a functioning Git repository that contains a simple application as well as a package.json file, which is used by Node\u2019s dependency manager."),(0,r.kt)("h3",{id:"step-7-deploy-your-code"},"Step 7. Deploy your code"),(0,r.kt)("p",null,"Heroku generates a random name (in this case hidden-woodland-03996) for your app, or you can pass a parameter to specify your own app name.\nNow deploy your code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git push heroku\nremote:        BUILD SUCCESSFUL in 1m 5s\nremote:        12 actionable tasks: 12 executed\nremote: -----\x3e Discovering process types\nremote:        Procfile declares types -> web\nremote:\nremote: -----\x3e Compressing...\nremote:        Done: 298.9M\nremote: -----\x3e Launching...\nremote:        Released v3\nremote:        https://hidden-woodland-03996.herokuapp.com/ deployed to Heroku\nremote:\nremote: Verifying deploy... done.\nTo https://git.heroku.com/hidden-woodland-03996.git\n * [new branch]      master -> master\n")),(0,r.kt)("h3",{id:"step-8-accessing-the-application"},"Step 8. Accessing the application"),(0,r.kt)("p",null,"Open ",(0,r.kt)("a",{parentName:"p",href:"https://hidden-woodland-03996.herokuapp.com/"},"https://hidden-woodland-03996.herokuapp.com/")," to see your application"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"heroku",src:o(96038).Z,width:"3164",height:"1110"})),(0,r.kt)("h3",{id:"next-steps"},"Next Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/explore/redisinsight/"},"Connecting to the database using RedisInsight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/howtos/moviesdatabase/getting-started/"},"How to list & search Movies database using Redisearch"))))}h.isMDXComponent=!0},72599:function(e,t,o){t.Z=o.p+"assets/images/create_heroku-adefbcbc7fe61ec48d1a65a3172f9f58.png"},38538:function(e,t,o){t.Z=o.p+"assets/images/heroku_app1_env-8d491cfd2c8859db457a5821eb59f94a.png"},96038:function(e,t,o){t.Z=o.p+"assets/images/heroku_ratelimiter-536e63f33448af8ad5c84987300831e4.png"},49379:function(e,t,o){t.Z=o.p+"assets/images/rediscloud-d61184b5afea31c7297d7eeba25a71ec.png"}}]);