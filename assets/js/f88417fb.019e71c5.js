"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7131],{1667:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var a=i(5893),r=i(1151),s=i(7294),n=i(7460),d=i.n(n),o=i(1829);const l=()=>{const[e,t]=(0,s.useState)([]);return(0,s.useEffect)((()=>{fetch("../../../db/books_to_read.csv").then((e=>e.text())).then((e=>{const i=d().parse(e,{header:!0,dynamicTyping:!0}).data.map((e=>({title:e.Title,author:e.Author,image:e.Image?e.Image:"../../../img/book-cover.jpg"})));t(i)}))}),[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.Z,{books:e})})},c={title:"To Read",sidebar_position:1,hide_table_of_contents:!0},m=void 0,u={id:"reading-list/to-read",title:"To Read",description:"Currently reading Selling to the Affluent by Dr Thomas Stanley.",source:"@site/content/reading-list/to-read.md",sourceDirName:"reading-list",slug:"/reading-list/to-read",permalink:"/reading-list/to-read",draft:!1,unlisted:!1,editUrl:"https://github.com/lukafilipxvic/lukafilipxvic.github.io/tree/main/content/reading-list/to-read.md",tags:[],version:"current",lastUpdatedAt:1712642727e3,sidebarPosition:1,frontMatter:{title:"To Read",sidebar_position:1,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"R\xe9sum\xe9",permalink:"/resume"},next:{title:"Already Read",permalink:"/reading-list/already-read"}},h={},p=[];function x(e){const t={em:"em",p:"p",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Currently reading ",(0,a.jsx)(t.em,{children:"Selling to the Affluent"})," by Dr Thomas Stanley."]}),"\n",(0,a.jsx)(l,{})]})}function g(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},1829:(e,t,i)=>{i.d(t,{Z:()=>r});i(7294);var a=i(5893);function r(e){let{books:t}=e;return(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"mx-auto mt-8 grid grid-cols-1 md:grid-cols-2",children:t.map((e=>(0,a.jsxs)("div",{className:"my-2 mx-2 p-2 flex flex-col items-center gap-2 rounded border-[#a5a5a5] max-w-70",children:[(0,a.jsx)("div",{className:"border-[1px]",children:(0,a.jsx)("img",{src:e.image,alt:e.title,className:"object-cover hover:drop-shadow-md"})}),(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("div",{className:"font-bold underline md:text-base",style:{maxWidth:"250px",wordWrap:"break-word",lineHeight:"1"},children:e.title}),(0,a.jsxs)("div",{className:"text-xs mt-1 italic",children:["by ",e.author,"1"]})]})]})))})})}}}]);