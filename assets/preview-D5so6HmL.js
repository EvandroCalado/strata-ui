import"./index-DJO9vBfz.js";/* empty css              */import{b}from"./index-CZLSbxvl.js";const{useParameter:g,addons:f,useEffect:S,useMemo:N}=__STORYBOOK_MODULE_PREVIEW_API__;var R=Object.defineProperty,v=(e,t)=>{for(var r in t)R(e,r,{get:t[r],enumerable:!0})},B={};v(B,{initializeThemeState:()=>T,pluckThemeFromContext:()=>c,useThemeParameters:()=>p});var E="themes",O=`storybook/${E}`,k="theme",C={},M={REGISTER_THEMES:`${O}/REGISTER_THEMES`};function c({globals:e}){return e[k]||""}function p(){return g(E,C)}function T(e,t){f.getChannel().emit(M.REGISTER_THEMES,{defaultTheme:t,themes:e})}var P="html",d=e=>e.split(" ").filter(Boolean),A=({themes:e,defaultTheme:t,parentSelector:r=P})=>(T(Object.keys(e),t),(u,h)=>{let{themeOverride:o}=p(),s=c(h);return S(()=>{let n=o||s||t,a=document.querySelector(r);if(!a)return;Object.entries(e).filter(([l])=>l!==n).forEach(([l,_])=>{let m=d(_);m.length>0&&a.classList.remove(...m)});let i=d(e[n]);i.length>0&&a.classList.add(...i)},[o,s]),u()});const I=b({base:"dark",brandTitle:"Strata UI",brandUrl:"https://github.com/EvandroCalado",brandImage:"./logo-dark.png",brandTarget:"_blank",fontBase:'"Open Sans", sans-serif',fontCode:"monospace",colorPrimary:"#d4d4d8",colorSecondary:"#4b5563",appBg:"#121212",appContentBg:"#121212",appPreviewBg:"#121212",appBorderRadius:8,textMutedColor:"#4b5563",barHoverColor:"#4b5563",barBg:"#121212",inputBg:"#121212",inputBorderRadius:4}),x={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},docs:{theme:I}},decorators:[A({themes:{light:"",dark:"dark"},defaultTheme:"dark"})],tags:["autodocs"]};export{x as default};