import{aB as R,aJ as V,aa as y,aD as p,aE as a,aK as C,aQ as N,aL as B,aC as _,f as t,aF as u,aG as c,R as s,aO as E,aP as k}from"./index-B2wI9Zbb.js";import{d as m,V as w,e as G,f as n,g as I}from"./VRow--RN2tD44.js";const j={class:"text-center text-h3"},D={class:"text-error"},v=R({__name:"giph",setup(M){const{ERROR_MESSAGE:i,GIPHY_CURRENT:r}=V(m()),{fetchDataFromId:h}=m(),x=B(),g=N();return y(async()=>{await h(g.query.id)}),(S,d)=>(_(),p(C,{id:"inspire"},{default:a(()=>[t(k,null,{default:a(()=>[t(w,null,{default:a(()=>[t(G,{class:"pa-4"},{default:a(()=>[t(n,{cols:"12"},{default:a(()=>{var e;return[u("h2",j,c(((e=s(r))==null?void 0:e.title)||"No Title"),1)]}),_:1}),t(n,{cols:"12",md:"4",class:"d-flex align-center justify-center mx-auto"},{default:a(()=>{var e,o,l;return[t(I,{width:"100%",height:"auto",cover:"",src:(l=(o=(e=s(r))==null?void 0:e.images)==null?void 0:o.original)==null?void 0:l.url},null,8,["src"])]}),_:1}),s(i)?(_(),p(n,{key:0,cols:"12",class:"d-flex align-center justify-center pa-10"},{default:a(()=>[u("span",D,c(s(i)),1)]),_:1})):E("",!0),t(n,{cols:"12",class:"d-flex align-center justify-center pa-10"},{default:a(()=>{var e,o;return[u("span",{class:"text-blue text-decoration-underline cursor-pointer text-h4",onClick:d[0]||(d[0]=l=>{var f;return s(x).push({path:"/user",query:{userId:(f=s(r))==null?void 0:f.id}})})},c(((o=(e=s(r))==null?void 0:e.user)==null?void 0:o.username)||"No username"),1)]}),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{v as default};
