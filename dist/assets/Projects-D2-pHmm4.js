import{j as s,L as c,r as l,b as p}from"./index-xtYucHSO.js";import{p as i,u as n}from"./porfolio-BILcQpHB.js";import{s as o}from"./pages.module-Dey223hS.js";const d=({card:e})=>s.jsx(s.Fragment,{children:s.jsx("div",{className:o.projects__card,children:s.jsxs("div",{className:o.projects__card_el,children:[s.jsx("h3",{children:e.name}),s.jsx("img",{src:e.image||i,alt:`${e.name} Repo Image`}),s.jsxs("div",{children:[s.jsx(c,{to:`/projects/${e.id}`,rel:"noopener noreferrer",className:o.projects__card_link,children:"Learn More"}),s.jsx("a",{href:e.homepage,target:"_blank",rel:"noopener noreferrer",className:o.projects__card_link,children:"Live"})]})]})})}),j="/fluid_portfolio/assets/bank-Cd3UEa-D.jpg",m="/fluid_portfolio/assets/airpods-DHz0RrJJ.jpg",f="/fluid_portfolio/assets/burningman-DCHFvYYN.jpg",_="/fluid_portfolio/assets/cosmetics-M3zbp4BO.jpg",u="/fluid_portfolio/assets/dudeshape-DDCZZLYk.jpg",g="/fluid_portfolio/assets/glasses-5X_sod4M.jpg",h="/fluid_portfolio/assets/kinocinema-B0QhkThL.jpg",x="/fluid_portfolio/assets/noke-BSU1EYqL.jpg",k="/fluid_portfolio/assets/shopM-CG1rqs9C.jpg",N="/fluid_portfolio/assets/tourism-C9M_zGkW.jpg",L={733475646:j,745054036:m,727831188:f,728649921:_,728714928:u,748223178:g,749691046:h,743914722:x,742344823:i,726118928:k,742058720:N},v=()=>{const{error:e}=n();return s.jsx("h1",{className:o.error,children:e})},R=()=>{const{repos:e,status:t,fetchRepos:a}=n();return l.useEffect(()=>{a()},[a]),t==="loading"?s.jsx(p,{}):t==="failed"?s.jsx(v,{}):s.jsx("div",{className:o.projects,children:s.jsxs("div",{className:o.container,children:[s.jsxs("h1",{className:o.section__title,children:["My small projects","~~>"]}),s.jsx("div",{className:o.projects__wrapper,children:e.map(r=>s.jsx(d,{card:{...r,image:L[r.id]}},r.id))})]})})};export{R as default};
