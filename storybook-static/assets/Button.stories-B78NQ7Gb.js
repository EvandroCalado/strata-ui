import{j as p}from"./jsx-runtime-CkxqCPlQ.js";import{c as G,a as H}from"./index-9O2D0Cpz.js";import{r as J}from"./index-DJO9vBfz.js";const K=H(["flex","items-center","justify-center","gap-2","rounded-md","font-semibold","focus:outline-primary-500","disabled:pointer-events-none disabled:opacity-10","transition-colors","duration-150","cursor-pointer"],{variants:{variant:{primary:"",secondary:"",destructive:"",outline:"",ghost:"",link:""},size:{sm:"text-sm px-4 py-2",md:"text-base px-4 py-2",lg:"text-lg px-6 py-3"},isLoading:{true:""}},compoundVariants:[{variant:"primary",className:"bg-primary-900 text-primary-100 hover:bg-primary-800 dark:bg-primary-100 dark:text-primary-900 dark:hover:bg-primary-200"},{variant:"secondary",className:"bg-primary-200 text-primary-900 hover:bg-primary-300 dark:bg-primary-800 dark:text-primary-100 dark:hover:bg-primary-700"},{variant:"destructive",className:"bg-destructive-500 focus:outline-destructive-500 text-white hover:bg-destructive-600"},{variant:"outline",className:"text-primary-900 border-[1px] border-primary-600 bg-transparent hover:bg-primary-200 dark:text-primary-100 dark:hover:bg-primary-800"},{variant:"ghost",className:"text-primary-800 bg-transparent hover:bg-primary-200 dark:text-primary-200 dark:hover:bg-primary-800"},{variant:"link",className:"text-primary-800 focus:outline-none focus:outline-0 focus:text-primary-600 bg-transparent hover:underline hover:underline-offset-4 dark:text-primary-200 dark:focus:text-primary-400"}],defaultVariants:{variant:"primary",size:"md"}}),C=J.forwardRef(({variant:I,size:O,isLoading:c,as:A="button",className:D,...d},F)=>p.jsxs(A,{className:G(K({variant:I,size:O,isLoading:c,className:D})),ref:F,...d,disabled:!!c||d.disabled,children:[c&&p.jsx("div",{className:"h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"}),d.children]}));C.__docgenInfo={description:"",methods:[],displayName:"Button",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"'button'",computed:!1}}}};const U={title:"Components/Button",component:C,args:{children:"Button",isLoading:!1},argTypes:{variant:{control:"select",options:["primary","secondary","destructive","outline","ghost","link"]},size:{control:"select",options:["sm","md","lg"]},isLoading:{control:"boolean"},as:{control:"select",options:["button","a"]}},parameters:{layout:"centered"},tags:["autodocs"]},r={},a={args:{variant:"secondary"}},e={args:{variant:"destructive"}},t={args:{variant:"outline"}},s={args:{variant:"ghost"}},o={args:{variant:"link",as:"a",href:"https://storybook.js.org",target:"_blank"}},n={args:{variant:"primary",isLoading:!0,disabled:!0}},i={args:{variant:"primary",disabled:!0}};var m,u,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,y,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var b,h,x;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'destructive'
  }
}`,...(x=(h=e.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,k,N;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  }
}`,...(N=(k=t.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var S,j,_;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  }
}`,...(_=(j=s.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var E,L,w;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    as: 'a',
    href: 'https://storybook.js.org',
    target: '_blank'
  }
}`,...(w=(L=o.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var B,R,T;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    isLoading: true,
    disabled: true
  }
}`,...(T=(R=n.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var z,V,q;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true
  }
}`,...(q=(V=i.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const W=["primary","secondary","destructive","outline","ghost","link","isLoading","disabled"];export{W as __namedExportsOrder,U as default,e as destructive,i as disabled,s as ghost,n as isLoading,o as link,t as outline,r as primary,a as secondary};
