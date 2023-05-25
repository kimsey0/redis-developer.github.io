"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[8879],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,y=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},s=void 0,i={unversionedId:"howtos/solutions/real-time-inventory/available-to-promise/api/decrement-many-skus",id:"howtos/solutions/real-time-inventory/available-to-promise/api/decrement-many-skus",title:"decrement-many-skus",description:"The code that follows shows an example API request and response for decrementManySKUs activity.",source:"@site/docs/howtos/solutions/real-time-inventory/available-to-promise/api/decrement-many-skus.mdx",sourceDirName:"howtos/solutions/real-time-inventory/available-to-promise/api",slug:"/howtos/solutions/real-time-inventory/available-to-promise/api/decrement-many-skus",permalink:"/howtos/solutions/real-time-inventory/available-to-promise/api/decrement-many-skus",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/real-time-inventory/available-to-promise/api/decrement-many-skus.mdx",tags:[],version:"current",lastUpdatedAt:1684462271,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The code that follows shows an example API request and response for decrementManySKUs activity."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"decrementManySKUs API Request")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'POST http://localhost:3000/api/decrementManySKUs\n[{\n    "sku":1019688,\n    "quantity":4\n},{\n    "sku":1003622,\n     "quantity":2\n},{\n    "sku":1006702,\n    "quantity":2\n}]\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"decrementManySKUs API Response")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "sku": 1019688,\n      "name": "5-Year Protection Plan - Geek Squad",\n      "type": "BlackTie",\n      "totalQuantity": 28 //previous value 32\n    },\n    {\n      "sku": 1003622,\n      "name": "Aquarius - Fender Stratocaster 1,000-Piece Jigsaw Puzzle - Black/Red/White/Yellow/Green/Orange/Blue",\n      "type": "HardGood",\n      "totalQuantity": 8 //previous value 10\n    },\n    {\n      "sku": 1006702,\n      "name": "Clash of the Titans [DVD] [2010]",\n      "type": "Movie",\n      "totalQuantity": 8 //previous value 10\n    }\n  ],\n  "error": null\n}\n')),(0,o.kt)("p",null,"When you make a request, it goes through the API gateway to the inventory service. Ultimately, it ends up calling a ",(0,o.kt)("inlineCode",{parentName:"p"},"decrementManySKUs")," function which looks as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/inventory-service.ts"',title:'"src/inventory-service.ts"'}," static async decrementManySKUs(_productsFilter: IProductBodyFilter[]): Promise<IProduct[]> {\n        /**\n        decrement quantity  of specific Products.\n\n        :param _productWithIds: Product list with Id\n        :return: Product list\n        */\n        let retItems: IProduct[] = [];\n\n        if (_productsFilter && _productsFilter.length) {\n            //validation only\n            const promArr: Promise<boolean>[] = [];\n            for (let p of _productsFilter) {\n                if (p.sku) {\n                  //validating if all products in stock\n                    const promObj = InventoryServiceCls.validateQuantityOnDecrementSKU(p.sku, p.quantity);\n                    promArr.push(promObj)\n                }\n            }\n            await Promise.all(promArr);\n\n            //decrement only\n            const promArr2: Promise<IProduct>[] = [];\n            for (let p of _productsFilter) {\n                if (p.sku && p.quantity) {\n                    const isDecrement = true; //increments with negative value\n                    const isReturnProduct = false;\n                    const promObj2 = InventoryServiceCls.incrementSKU(p.sku, p.quantity, isDecrement, isReturnProduct);\n                    promArr2.push(promObj2)\n                }\n            }\n            await Promise.all(promArr2);\n\n\n            //retrieve updated products\n            retItems = await InventoryServiceCls.retrieveManySKUs(_productsFilter);\n        }\n        else {\n            throw `Input params failed !`;\n        }\n\n        return retItems;\n    }\n")))}p.isMDXComponent=!0}}]);