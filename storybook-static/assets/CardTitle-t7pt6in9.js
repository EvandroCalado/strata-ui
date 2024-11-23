import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import{c as u}from"./index-nCncktCR.js";import{r as s}from"./index-DJO9vBfz.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:a="",children:n,iconNode:d,...l},m)=>s.createElement("svg",{ref:m,...w,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:c("lucide",a),...l},[...d.map(([p,f])=>s.createElement(p,f)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(r,e)=>{const t=s.forwardRef(({className:o,...a},n)=>s.createElement(x,{ref:n,iconNode:e,className:c(`lucide-${h(r)}`,o),...a}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=g("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),y=s.forwardRef(({icon:r,className:e,...t},o)=>i.jsxs("h1",{ref:o,...t,className:u("my-4 flex items-center justify-between text-xl font-semibold",e),children:[i.jsx("span",{children:"Card Title"}),r&&i.jsx(C,{})]}));y.__docgenInfo={description:"",methods:[],displayName:"CardTitle",props:{icon:{required:!1,tsType:{name:"boolean"},description:""}}};export{y as C};
