import{j as e,L as n,r as i,b as l}from"./index-BrRV2HMp.js";import{c as d,u as c,r as m}from"./ReposImg-CPZpcEQp.js";import{s}from"./pages.module-CENqDW62.js";const j=({card:r})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:s.projects__card,children:e.jsxs("div",{className:s.projects__card_el,children:[e.jsx("h3",{children:r.name}),e.jsx("img",{src:r.image||d,alt:`${r.name} Repo Image`}),e.jsxs("div",{children:[e.jsx(n,{to:`/projects/${r.id}`,rel:"noopener noreferrer",className:s.projects__card_link,children:"Learn More"}),e.jsx("a",{href:r.homepage,target:"_blank",rel:"noopener noreferrer",className:s.projects__card_link,children:"Live"})]})]})})}),p=()=>{const{error:r}=c();return e.jsx("h1",{className:s.error,children:r})},f=()=>{const{repos:r,status:o,fetchRepos:t}=c();return i.useEffect(()=>{t()},[t]),o==="loading"?e.jsx(l,{}):o==="failed"?e.jsx(p,{}):e.jsx("div",{className:s.projects,children:e.jsxs("div",{className:s.container,children:[e.jsxs("h1",{className:s.section__title,children:["My small projects","~~>"]}),e.jsx("div",{className:s.projects__wrapper,children:r.map(a=>e.jsx(j,{card:{...a,image:m[a.id]}},a.id))})]})})};export{f as default};
