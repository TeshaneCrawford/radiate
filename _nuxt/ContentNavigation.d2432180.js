import{u as f}from"./asyncData.f8608443.js";import{k as v,_ as g,d,I as l,J as h,l as _,E as y,H as r}from"./entry.79269794.js";import{q as C,w as m,h as p,e as w,s as P,j as $,u as N}from"./query.7fc3576e.js";import{u as j}from"./preview.363f6a7f.js";import{_ as E}from"./nuxt-link.7f30a6ee.js";const T=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${w(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await g(()=>import("./client-db.b5ff9c76.js"),["./client-db.b5ff9c76.js","./entry.79269794.js","./entry.f094f59e.css","./query.7fc3576e.js","./preview.363f6a7f.js","./index.13aa9e49.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r(E,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),R=D;export{R as default};