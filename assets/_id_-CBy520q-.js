import{aB as w,r as n,aa as x,aD as y,aE as s,aJ as V,aK as B,aL as z,aC as C,f as a,R as _,aF as r,aG as j,aP as k}from"./index-CedxoyFW.js";import{o as d,q as A}from"./VAppBar-CzwGws_2.js";import{V as R,d as b,e as c,f as D}from"./VRow-D7iBPqL7.js";const L=r("svg",{viewBox:"0 0 128 36",xmlns:"http://www.w3.org/2000/svg",class:"sc-1f039a7e-0 cArwE"},[r("g",null,[r("g",null,[r("path",{fill:"#fff",d:"m22.6,12c-2,-1.9 -4.4,-2.4 -6.2,-2.4c-4.4,0 -7.3,2.6 -7.3,8c0,3.5 1.8,7.8 7.3,7.8c1.4,0 3.7,-0.3 5.2,-1.4l0,-3.5l-6.9,0l0,-6l13.3,0l0,12.1c-1.7,3.5 -6.4,5.3 -11.7,5.3c-10.7,0 -14.8,-7.2 -14.8,-14.3c0,-7.1 4.7,-14.4 14.9,-14.4c3.8,0 7.1,0.8 10.7,4.4l-4.5,4.4zm9.1,19.2l0,-27.2l7.6,0l0,27.2l-7.6,0zm20.1,-7.4l0,7.3l-7.7,0l0,-27.1l13.2,0c7.3,0 10.9,4.6 10.9,9.9c0,5.6 -3.6,9.9 -10.9,9.9l-5.5,0zm0,-6.5l5.5,0c2.1,0 3.2,-1.6 3.2,-3.3c0,-1.8 -1.1,-3.4 -3.2,-3.4l-5.5,0l0,6.7zm36.7,13.9l0,-10.3l-9.8,0l0,10.3l-7.7,0l0,-27.2l7.7,0l0,10.3l9.8,0l0,-10.3l7.6,0l0,27.2l-7.6,0zm24.2,-17.9l5.9,-9.3l8.7,0l0,0.3l-10.8,16l0,10.8l-7.7,0l0,-10.8l-10.3,-16l0,-0.3l8.7,0l5.5,9.3z",id:"svg_2"})])])],-1),P={class:"text-white cursor-pointer text-h4"},T=["href"],q=w({__name:"[id]",setup(E){const u=B(),i=z(),f=n(null),o=n({}),h=n(null);x(async()=>{console.log(u.params),await v(u.params.id)});async function v(p){const t=new URL(`https://api.giphy.com/v1/gifs/${p}`);t.searchParams.append("api_key","T8bTqT96o9S5wW05OrDLyBa9jHBfWiaL"),t.searchParams.append("rating","g");try{await fetch(t).then(l=>{l.json().then(async e=>{var m,g;((m=e==null?void 0:e.meta)==null?void 0:m.status)===200?(f.value=e,o.value=e.data):h.value=(g=e==null?void 0:e.meta)==null?void 0:g.msg,console.log(f.value)})})}catch(l){console.error(l)}}return(p,t)=>(C(),y(V,{id:"inspire"},{default:s(()=>[a(A,{height:"80"},{default:s(()=>[a(d,{rounded:"0",size:"150",class:"ml-4",onClick:t[0]||(t[0]=l=>_(i).go(-1))},{default:s(()=>[L]),_:1})]),_:1}),a(k,null,{default:s(()=>[a(R,null,{default:s(()=>[a(b,{class:"pa-4"},{default:s(()=>[a(c,{cols:"12",class:"d-flex align-center justify-center"},{default:s(()=>[a(d,{size:"300",class:"ml-4",onClick:t[1]||(t[1]=l=>_(i).go(-1))},{default:s(()=>{var l,e;return[a(D,{width:"100%",height:"auto",cover:"",src:(e=(l=o.value)==null?void 0:l.user)==null?void 0:e.avatar_url},null,8,["src"])]}),_:1})]),_:1}),a(c,{cols:"12",md:"4",class:"d-flex align-center justify-center mx-auto"},{default:s(()=>{var l,e;return[r("span",P,j((e=(l=o.value)==null?void 0:l.user)==null?void 0:e.username),1)]}),_:1}),a(c,{cols:"12",class:"d-flex align-center justify-center pa-10"},{default:s(()=>{var l,e;return[r("a",{class:"text-blue text-decoration-underline cursor-pointer text-h4",href:(e=(l=o.value)==null?void 0:l.user)==null?void 0:e.profile_url,target:"__blank"},"GIT PAGE",8,T)]}),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{q as default};
