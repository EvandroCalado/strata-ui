import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{c as m,a as O}from"./index-9O2D0Cpz.js";import{r as V}from"./index-DJO9vBfz.js";const A=O(["w-full","text-zinc-900 dark:text-zinc-100","border-[1px]","border-primary-200 dark:border-primary-800","py-2 px-4","rounded-md","bg-transparent","outline-none","focus:border-primary-500 dark:focus:border-primary-300","disabled:opacity-40 disabled:pointer-events-none","[&::-webkit-calendar-picker-indicator]:cursor-pointer dark:[&::-webkit-calendar-picker-indicator]:invert-[0.95]","transition-all duration-150"],{variants:{error:{true:"border-red-500 dark:border-red-500"}},defaultVariants:{}}),R=V.forwardRef(({errorMessage:r,error:i,label:e,className:C,...l},F)=>(r&&(i=!!r),a.jsxs("div",{children:[e&&a.jsx("label",{htmlFor:e,className:m({"pointer-events-none opacity-40":l.disabled}),children:e}),a.jsx("input",{ref:F,...l,id:e,className:m(A({error:i}),C)}),r&&a.jsx("span",{className:"w-max text-xs text-red-500",children:r})]})));R.__docgenInfo={description:"",methods:[],displayName:"Input",props:{errorMessage:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""}}};const J={title:"Components/Input",component:R,args:{placeholder:"Input"},argTypes:{type:{control:"select",options:["text","password","email","date","number"]}},parameters:{layout:"centered"},tags:["autodocs"]},s={},o={args:{placeholder:"Password",type:"password"}},t={args:{placeholder:"Email",type:"email"}},n={args:{placeholder:"Date",type:"date"}},d={args:{placeholder:"Number",type:"number"}},c={args:{placeholder:"Disabled",disabled:!0}},p={args:{placeholder:"Error",errorMessage:"Error"}};var u,g,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,h,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: 'Password',
    type: 'password'
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,E,w;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: 'Email',
    type: 'email'
  }
}`,...(w=(E=t.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var D,k,S;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    placeholder: 'Date',
    type: 'date'
  }
}`,...(S=(k=n.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var j,v,N;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    placeholder: 'Number',
    type: 'number'
  }
}`,...(N=(v=d.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var I,P,_;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled',
    disabled: true
  }
}`,...(_=(P=c.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var T,q,z;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: 'Error',
    errorMessage: 'Error'
  }
}`,...(z=(q=p.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const K=["Default","Password","Email","Date","number","Disabled","Error"];export{n as Date,s as Default,c as Disabled,t as Email,p as Error,o as Password,K as __namedExportsOrder,J as default,d as number};
