(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{43:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a(12),c=a.n(i),l=(a(37),a(26)),o=a(27),r=a(32),n=a(30),b=a(9),d=a(0),j={header:{fontWeight:"400",letterSpacing:"4px",textDecoration:"none",color:"white"},h5:{letterSpacing:"20px",color:"rgb(245, 236, 140)"}},m=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"text-center container mt-5",children:Object(d.jsx)("h5",{style:j.h5,children:"PETER MODAVIS"})}),Object(d.jsxs)("div",{className:"d-flex justify-content-between container mt-4",children:[Object(d.jsx)(b.b,{style:{textDecoration:"none"},to:"/",children:Object(d.jsx)("a",{className:"headerA text-center",style:j.header,href:"#",children:"HOME"})}),Object(d.jsx)(b.b,{style:{textDecoration:"none"},to:"/about",children:Object(d.jsx)("a",{className:"headerA text-center",style:j.header,href:"#",children:"ABOUT"})}),Object(d.jsx)("a",{className:"headerA text-center",target:"_blank",style:j.header,href:"https://docs.google.com/document/d/1moFOJg9zNPwFFnuYSDPCptRZ0bRQZEmRZi3yJaL18Mc/edit",children:"RESUME"})]})]})},h=(a(43),function(){var e={footer:{},container:{lineHeight:"2",position:"relative",bottom:"0",width:"100%",backgroundColor:"RGB(245, 151, 135)",fontFamily:"Playfair",color:"black"},a:{fontFamily:"Archivo",letterSpacing:"4px",color:"black",textDecoration:"none"}};return Object(d.jsxs)("div",{className:" d-flex flex-column align-items-center pt-4 pb-4",style:e.container,children:[Object(d.jsx)("div",{style:e.a,children:"CONTACT"}),Object(d.jsx)("div",{className:"border-top border-dark pt-3",children:Object(d.jsx)("a",{className:"footerA ",target:"_blank",style:e.a,href:"https://github.com/PeterMoDavis",children:"GITHUB"})}),Object(d.jsx)("div",{children:Object(d.jsx)("a",{className:"footerA",target:"_blank",style:e.a,href:"https://www.linkedin.com/in/peter-modavis-76346b204/",children:"LINKED IN"})}),Object(d.jsx)("div",{style:e.a,children:"215-758-1982"}),Object(d.jsxs)("div",{style:e.a,children:[" ",Object(d.jsx)("a",{style:e.a,href:"mailto:email",children:"pmodavis.webdev@gmail.com"})," "]}),Object(d.jsx)("small",{className:"mt-3",children:"\xa9 2021 Peter MoDavis All Rights Reserved "})]})}),f={welcome:{fontFamily:"Rubik",fontSize:"100px",fontWeight:"900",zIndex:"3",top:"40%",position:"relative",letterSpacing:"3px",transition:"all 1s",height:"100%",width:"fit-content"},img:{width:"100px"}},p=function(){return Object(d.jsx)("h1",{className:"welcome text-center    col",style:f.welcome,children:"works."})},x=function(e){var t={paragraph:{color:"rgb(245, 236, 140)",fontSize:"16px",margin:"0px 0px"},i:{color:"rgb(245, 236, 140)",margin:"0"},github:{color:"#33fff1",margin:"0"},title:{color:"RGB(255, 103, 92)",fontWeight:"700"},overlay:{position:"absolute",top:"50%"},thumbnail:{position:"relative"},a:{textDecoration:"none"},small:{position:"relative",bottom:"10px"}};return Object(d.jsxs)("div",{style:t.cardBody,className:" mt-5 main-container col-12 col-lg-6 col-xxl-4 text-center align-items-center d-flex justify-content-center container",children:[Object(d.jsxs)("div",{className:"thumbnail ",style:t.thumbnail,children:[Object(d.jsx)("h3",{style:t.title,children:e.title}),Object(d.jsx)("a",{href:e.href,children:Object(d.jsx)("img",{style:t.img,className:"image-fluid project-image",src:e.src,alt:e.alt})})]}),Object(d.jsx)("div",{className:"overlay container",style:t.overlay,children:Object(d.jsxs)("a",{style:t.a,href:e.href,children:[Object(d.jsxs)("p",{style:t.paragraph,children:[e.description,Object(d.jsx)("span",{children:Object(d.jsx)("a",{href:e.github,children:Object(d.jsx)("i",{style:t.github,className:"ml-2 fab fa-lg fa-github"})})})]}),Object(d.jsx)("p",{style:t.i,className:"mb-0",children:e.technologies}),Object(d.jsx)("small",{className:"d-block",style:{color:"white",fontSize:"10px"},children:e.specialNote})]})})]})},g=a(31),O=function(){var e=Object(s.useState)([]),t=Object(g.a)(e,2),a=t[0],i=t[1],c={logContainer:{border:" rgb(0, 255, 234) solid 2px",backgroundColor:"rgb(0, 255, 234)",borderRadius:"5px",boxShadow:"0 0 10px rgb(0, 255, 234)",width:"60vw",height:"20vh",overflowY:"auto"},header:{fontWeight:"800",letterSpacing:"10px",color:"rgb(0, 255, 234)"},tableHeader:{border:"none",position:"sticky",top:"0",zIndex:"1",background:"rgb(0, 255, 234)"},tableBody:{border:"1px black solid"}};return Object(s.useEffect)((function(){fetch("./reports.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){i(e)})),console.log(a)}),[]),Object(d.jsxs)("div",{className:"d-flex flex-column align-items-center my-4",children:[Object(d.jsx)("h4",{style:c.header,className:"mt-1 text-center",children:"PROGRESS LOG"}),Object(d.jsx)("div",{style:c.logContainer,className:"d-flex flex-column align-items-center",children:Object(d.jsxs)("table",{className:"table",style:c.table,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{style:c.tableHeader,scope:"col",children:"Date"}),Object(d.jsx)("th",{style:c.tableHeader,scope:"col",children:"Title"}),Object(d.jsx)("th",{style:c.tableHeader,scope:"col",children:"Description"})]})}),Object(d.jsx)("tbody",{children:a.map((function(e){return Object(d.jsxs)("tr",{style:c.table,children:[Object(d.jsx)("td",{style:c.tableBody,children:e.date}),Object(d.jsx)("td",{style:c.tableBody,children:e.title}),Object(d.jsx)("td",{style:c.tableBody,children:e.description})]})}))})]})})]})},u=a(29),y=[{title:"Boilerplate",href:"https://boilerplate-petermodavis.herokuapp.com/",src:"./images/boilerplate.png",alt:"Boilerplate App",description:"Save, find, and filter your coding boilerplate all in one convenient place.",github:"https://github.com/PeterMoDavis/boilerplate",technologies:[Object(d.jsx)("i",{class:"fab fa-html5 fa-md ml-2"}),Object(d.jsx)("i",{class:"fab fa-css3-alt fa-md ml-2"}),Object(d.jsx)("i",{class:"fab fa-js fa-md ml-2"}),Object(d.jsx)("i",{className:"fab fa-react fa-md ml-2"}),Object(d.jsx)("i",{class:"fab fa-bootstrap fa-md ml-2"}),Object(d.jsx)("i",{class:"fab fa-node-js fa-md ml-2"}),Object(d.jsx)("i",{class:"fab fa-mdb fa-md ml-2"})],specialNote:'(just click on "Boilerplate" in the header to get to the dashboard.)'},{title:"Portfolio 2",href:"https://petermodavis.github.io/portfolio-2/",src:"./images/portfolio-2.png",alt:"beatiful plants portfolio",description:"A beautifully green portfolio complete with light-mode and dark-mode.",github:"https://github.com/PeterMoDavis/portfolio-2",technologies:[Object(d.jsx)("i",{class:"fab fa-html5 fa-md ml-2"}),Object(d.jsx)("i",{class:"fab fa-css3-alt fa-md ml-2"}),Object(d.jsx)("i",{class:"fab fa-js fa-md ml-2"}),Object(d.jsx)("i",{class:"fab fa-bootstrap fa-md ml-2"})]},{title:"FUNG-ID",href:"https://fung-id-final.herokuapp.com/login",src:"./images/mushroom.png",alt:"mushroom website",description:"Save a mushroom pic with title and description and it's coordinates are shown on the map.",github:"https://github.com/PeterMoDavis/fung-id-1",technologies:[Object(d.jsx)("i",{class:"fab fa-html5 fa-md ml-2"}),Object(d.jsx)("i",{class:"fab fa-css3-alt fa-md ml-2"}),Object(d.jsx)("i",{class:"fab fa-js fa-md ml-2"}),Object(d.jsx)("i",{class:"fab fa-bootstrap fa-md ml-2"}),Object(d.jsx)("i",{class:"fab fa-node-js fa-md ml-2"}),Object(d.jsx)("span",{className:"ml-2",children:"mySQL"})],specialNote:"(Email: gary@email.com Password: garygary)"},{title:"Provisions",href:"https://petermodavis.github.io/provisions/",src:"./images/pervisions.png",alt:"fireplace and menu",description:"Enter your ingredients and with the help of a 3rd party API we'll give you a recipe and wine-pairing.",github:"https://github.com/PeterMoDavis/provisions",technologies:[Object(d.jsx)("i",{class:"fab fa-html5 fa-md ml-2"}),Object(d.jsx)("i",{class:"fab fa-css3-alt fa-md ml-2"}),Object(d.jsx)("i",{class:"fab fa-js fa-md ml-2"})]},{title:"Employee Directory",href:"https://petermodavis.github.io/employee-directory/",src:"./images/employee-dir.png",alt:"list of employees website",description:"An Employee Directory shows all employees in the 'API'. Filter by first name, last name, DOB or phone number.",github:"https://github.com/PeterMoDavis/employee-directory",technologies:[Object(d.jsx)("i",{class:"fab fa-html5 fa-md ml-2"}),Object(d.jsx)("i",{class:"fab fa-css3-alt fa-md ml-2"}),Object(d.jsx)("i",{class:"fab fa-js fa-md ml-2"}),Object(d.jsx)("i",{className:"fab fa-react fa-md ml-2"}),Object(d.jsx)("i",{class:"fab fa-bootstrap fa-md ml-2"})]}],v=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(d.jsx)(p,{})}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{className:"card-container d-flex justify-content-between align-content-baseline flex-wrap pb-5",children:y.map((function(e,t){return Object(d.jsx)(x,{title:e.title,href:e.href,src:e.src,alt:e.alt,description:e.description,github:e.github,technologies:e.technologies,specialNote:e.specialNote},t)}))}),Object(d.jsx)("div",{children:Object(d.jsx)(u.Element,{id:"learning-log",name:"learning-log",children:Object(d.jsx)(O,{})})})]})},N={img:{width:"700px"},p:{color:"black"},rainbow:{height:"40px",color:"black"},i:{fontSize:"35px"},h3:{color:"black",letterSpacing:"2px"}},w=function(){return Object(d.jsxs)("div",{style:{background:"yellow"},className:"d-flex flex-md-row align-items-center flex-column-reverse mt-4",children:[Object(d.jsx)("img",{style:N.img,src:"./images/petejungle.png",alt:""}),Object(d.jsxs)("div",{className:"container mt-5 mb-0",children:[Object(d.jsx)("h3",{style:N.h3,className:"text-center d-block d-md-none",children:"PETER MODAVIS"}),Object(d.jsx)("h5",{style:N.h3,className:"text-center d-block d-md-none",children:"WEBDEV"}),Object(d.jsxs)("p",{style:N.p,children:["Former musician, stay-at-home dad and recent graduate of UPenn Full Stack Bootcamp. Proficient in HTML, CSS, Javascript, Git, Bootstrap, NodeJS, MySQL, Sequelize, Express, React, MongoDB, Logic Pro X, Pixelmator playing the banjo and much more. Self-learned front end web development for one year prior to bootcamp for a deeper understanding. Has bachelors in English from Temple University.",Object(d.jsx)("strong",{children:" Loves to learn!"}),Object(d.jsx)("span",{children:Object(d.jsx)("img",{id:"heart",className:"mx-2",src:"./images/heart.png",alt:""})}),Object(d.jsxs)("div",{className:"mt-5 d-flex justify-content-around wrap",children:[Object(d.jsx)("i",{id:"red",style:N.i,className:"fab fa-git"}),Object(d.jsx)("i",{id:"orange",style:N.i,className:"fab fa-html5"}),Object(d.jsx)("i",{id:"yellow",style:N.i,className:"fab fa-css3"}),Object(d.jsx)("i",{id:"green",style:N.i,className:"fab fa-react"}),Object(d.jsx)("i",{id:"blue",style:N.i,className:"fab fa-js"}),Object(d.jsx)("i",{id:"purple",style:N.i,className:"fab fa-bootstrap"}),Object(d.jsx)("i",{id:"indigo",style:N.i,className:"fab fa-node-js"}),Object(d.jsx)("i",{style:N.i,className:"fab fa-mdb"})]})]})]})]})},k=a(2),S=function(e){Object(r.a)(a,e);var t=Object(n.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsx)(b.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)(k.c,{}),Object(d.jsx)(m,{}),Object(d.jsxs)(k.c,{children:[Object(d.jsx)(k.a,{path:"/",exact:!0,component:v}),Object(d.jsx)(k.a,{path:"/about",component:w})]}),Object(d.jsx)(h,{})]})})}}]),a}(s.Component);c.a.render(Object(d.jsx)(S,{}),document.querySelector("#root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.2066719e.chunk.js.map