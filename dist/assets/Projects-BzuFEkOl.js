import{u as c,j as e,L as i,r as l,b as d}from"./index-DoL5IP5C.js";import{c as m,u as n,r as j}from"./ReposImg-BOnYzmGh.js";import{s as r}from"./pages.module-CENqDW62.js";const p=({card:s})=>{const{t:a}=c();return e.jsx(e.Fragment,{children:e.jsx("div",{className:r.projects__card,children:e.jsxs("div",{className:r.projects__card_el,children:[e.jsx("h3",{children:s.name}),e.jsx("img",{src:s.image||m,alt:`${s.name} Repo Image`}),e.jsxs("div",{children:[e.jsx(i,{to:`/projects/${s.id}`,rel:"noopener noreferrer",className:r.projects__card_link,children:a("Learn More")}),e.jsx("a",{href:s.homepage,target:"_blank",rel:"noopener noreferrer",className:r.projects__card_link,children:a("Live")})]})]})})})},x=()=>{const{error:s}=n();return e.jsx("h1",{className:r.error,children:s})},u=()=>{const{repos:s,status:a,fetchRepos:t}=n();return l.useEffect(()=>{t()},[t]),a==="loading"?e.jsx(d,{}):a==="failed"?e.jsx(x,{}):e.jsx("div",{className:r.projects,children:e.jsxs("div",{className:r.container,children:[e.jsxs("h1",{className:r.section__title,children:["My small projects","~~>"]}),e.jsx("div",{className:r.projects__wrapper,children:s.map(o=>e.jsx(p,{card:{...o,image:j[o.id]}},o.id))})]})})};export{u as default};