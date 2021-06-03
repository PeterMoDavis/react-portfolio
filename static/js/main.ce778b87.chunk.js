(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{32:function(e,t,s){},33:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s(19),o=s.n(i),c=(s(25),s(8)),l=s(9),r=s(11),n=s(10),b=s(13),j=s(0),d=function(e){Object(r.a)(s,e);var t=Object(n.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={reports:[],search:""},e.styles={logContainer:{border:" rgb(0, 255, 234) solid 2px",backgroundColor:"rgb(0, 255, 234)",borderRadius:"5px",boxShadow:"0 0 10px rgb(0, 255, 234)",width:"80vw",height:"30vh",overflowY:"auto"},header:{fontWeight:"800",letterSpacing:"10px",color:"rgb(0, 255, 234)"},tableHeader:{border:"none",position:"sticky",top:"0",zIndex:"1",background:"rgb(0, 255, 234)"},tableBody:{border:"1px black solid"},input:{width:"200px",borderRadius:"3px",border:"none",backgroundColor:"rgb(245, 236, 140)"}},e.getReports=function(){fetch("./reports.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){e.setState({reports:t}),console.log(e.state.reports)}))},e.filterReports=function(t){e.setState({search:t.target.value},(function(){var t=RegExp(e.state.search,"gi");fetch("./reports.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(s){e.setState({reports:s.filter((function(e){return e.tools.match(t)||e.title.match(t)||e.description.match(t)}))})}))}))},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.getReports(),console.log(this.state.reports)}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"d-flex flex-column align-items-center my-4",children:[Object(j.jsx)("h4",{style:this.styles.header,className:"mt-1 text-center",children:"PROGRESS LOG"}),Object(j.jsx)("input",{onChange:this.filterReports,type:"text",style:this.styles.input,className:"mt-2 mb-4 p-1",placeholder:"Search"}),Object(j.jsx)("div",{style:this.styles.logContainer,className:"d-flex flex-column align-items-center",children:Object(j.jsxs)("table",{className:"table",style:this.styles.table,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{style:this.styles.tableHeader,scope:"col",children:"Date"}),Object(j.jsx)("th",{style:this.styles.tableHeader,scope:"col",children:"Title"}),Object(j.jsx)("th",{style:this.styles.tableHeader,scope:"col",children:"Description"}),Object(j.jsx)("th",{style:this.styles.tableHeader,scope:"col",children:"Tools"})]})}),Object(j.jsx)("tbody",{children:this.state.reports.map((function(t){return Object(j.jsxs)("tr",{style:e.styles.table,children:[Object(j.jsx)("td",{style:e.styles.tableBody,children:t.date}),Object(j.jsx)("td",{style:e.styles.tableBody,children:t.title}),Object(j.jsx)("td",{style:e.styles.tableBody,children:t.description}),Object(j.jsx)("td",{style:e.styles.tableBody,children:t.tools})]},t.index)}))})]})})]})}}]),s}(a.Component),f={header:{fontWeight:"400",letterSpacing:"4px",textDecoration:"none",color:"white"},h5:{letterSpacing:"20px",color:"rgb(245, 236, 140)"}},h=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"text-center container mt-5",children:Object(j.jsx)("h5",{style:f.h5,children:"PETER MODAVIS"})}),Object(j.jsxs)("div",{className:"d-flex justify-content-between container mt-4",children:[Object(j.jsx)(b.b,{style:{textDecoration:"none"},to:"/",children:Object(j.jsx)("a",{className:"headerA text-center",style:f.header,href:"#",children:"HOME"})}),Object(j.jsx)(b.b,{style:{textDecoration:"none"},to:"/about",children:Object(j.jsx)("a",{className:"headerA text-center",style:f.header,href:"#",children:"ABOUT"})}),Object(j.jsx)("a",{className:"headerA text-center",target:"_blank",style:f.header,href:"https://docs.google.com/document/d/1moFOJg9zNPwFFnuYSDPCptRZ0bRQZEmRZi3yJaL18Mc/edit",children:"RESUME"})]})]})},m=(s(32),function(){var e={footer:{},container:{lineHeight:"2",position:"relative",bottom:"0",width:"100%",backgroundColor:"RGB(245, 151, 135)",fontFamily:"Playfair",color:"black"},a:{fontFamily:"Archivo",letterSpacing:"4px",color:"black",textDecoration:"none"}};return Object(j.jsxs)("div",{className:" d-flex flex-column align-items-center pt-4 pb-4",style:e.container,children:[Object(j.jsx)("div",{style:e.a,children:"CONTACT"}),Object(j.jsx)("div",{className:"border-top border-dark pt-3",children:Object(j.jsx)("a",{className:"footerA ",target:"_blank",style:e.a,href:"https://github.com/PeterMoDavis",children:"GITHUB"})}),Object(j.jsx)("div",{children:Object(j.jsx)("a",{className:"footerA",target:"_blank",style:e.a,href:"https://www.linkedin.com/in/peter-modavis-76346b204/",children:"LINKED IN"})}),Object(j.jsx)("div",{style:e.a,children:"215-758-1982"}),Object(j.jsxs)("div",{style:e.a,children:[" ",Object(j.jsx)("a",{style:e.a,href:"mailto:email",children:"pmodavis.webdev@gmail.com"})," "]}),Object(j.jsx)("small",{className:"mt-3",children:"\xa9 2021 Peter MoDavis All Rights Reserved "})]})}),p={welcome:{fontFamily:"Rubik",fontSize:"100px",fontWeight:"900",zIndex:"3",top:"40%",position:"relative",letterSpacing:"3px",transition:"all 1s",height:"100%",width:"fit-content"},img:{width:"100px"}},x=function(){return Object(j.jsx)("h1",{className:"welcome text-center    col",style:p.welcome,children:"works."})},u=function(e){var t={paragraph:{color:"rgb(245, 236, 140)",fontSize:"16px",margin:"0px 0px"},i:{color:"rgb(245, 236, 140)",margin:"0"},github:{color:"#33fff1",margin:"0"},title:{color:"RGB(255, 103, 92)",fontWeight:"700"},overlay:{position:"absolute",top:"50%"},thumbnail:{position:"relative"},a:{textDecoration:"none"},small:{position:"relative",bottom:"10px"}};return Object(j.jsxs)("div",{style:t.cardBody,className:" mt-5 main-container col-12 col-lg-6 col-xxl-4 text-center align-items-center d-flex justify-content-center container",children:[Object(j.jsxs)("div",{className:"thumbnail ",style:t.thumbnail,children:[Object(j.jsx)("h5",{className:"mb-0",children:e.status}),Object(j.jsx)("h3",{style:t.title,children:e.title}),Object(j.jsx)("a",{href:e.href,children:Object(j.jsx)("img",{style:t.img,className:"image-fluid project-image",src:e.src,alt:e.alt})})]}),Object(j.jsx)("div",{className:"overlay container",style:t.overlay,children:Object(j.jsxs)("a",{style:t.a,href:e.href,children:[Object(j.jsxs)("p",{style:t.paragraph,children:[e.description,Object(j.jsx)("span",{children:Object(j.jsx)("a",{href:e.github,children:Object(j.jsx)("i",{style:t.github,className:"ml-2 fab fa-lg fa-github"})})})]}),Object(j.jsx)("p",{style:t.i,className:"mb-0",children:e.technologies}),Object(j.jsx)("small",{className:"d-block",style:{color:"white",fontSize:"10px"},children:e.specialNote})]})})]})},g=[{title:"Boilerplate",href:"https://boilerplate-petermodavis.herokuapp.com/",src:"./images/boilerplate.png",alt:"Boilerplate App",description:"Save, find, and filter your coding boilerplate all in one convenient place.",github:"https://github.com/PeterMoDavis/boilerplate",technologies:[Object(j.jsx)("i",{class:"fab fa-html5 fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-css3-alt fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-js fa-md ml-2"}),Object(j.jsx)("i",{className:"fab fa-react fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-bootstrap fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-node-js fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-mdb fa-md ml-2"}),Object(j.jsx)("span",{className:"ml-2",children:"ex"})],specialNote:'(just click on "Boilerplate" in the header to get to the dashboard.)',tools:"react, mongodb, express, node, bootstrap"},{status:"New!",title:"Bigfoot Encounters",href:"https://petermodavis.github.io/bigfoot/",src:"./images/bigfoot.png",alt:"a map of bigfoot sightings",description:"A simple and silly app showing the current position of the user and descriptions of surrounding bigfoot sightings.",github:"https://github.com/PeterMoDavis/bigfoot",technologies:[Object(j.jsx)("i",{class:"fab fa-html5 fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-css3-alt fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-js fa-md ml-2"}),Object(j.jsx)("i",{className:"fab fa-react fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-bootstrap fa-md ml-2"})],tools:"react, bootstrap"},{title:"Portfolio 2",href:"https://petermodavis.github.io/portfolio-2/",src:"./images/portfolio-2.png",alt:"beatiful plants portfolio",description:"A beautifully green portfolio complete with light-mode and dark-mode.",github:"https://github.com/PeterMoDavis/portfolio-2",technologies:[Object(j.jsx)("i",{class:"fab fa-html5 fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-css3-alt fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-js fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-bootstrap fa-md ml-2"})],tools:"react, bootstrap"},{title:"FUNG-ID",href:"https://fung-id-final.herokuapp.com/login",src:"./images/mushroom.png",alt:"mushroom website",description:"Save a mushroom pic with title and description and it's coordinates are shown on the map.",github:"https://github.com/PeterMoDavis/fung-id-1",technologies:[Object(j.jsx)("i",{class:"fab fa-html5 fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-css3-alt fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-js fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-bootstrap fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-node-js fa-md ml-2"}),Object(j.jsx)("span",{className:"ml-2",children:"mySQL"}),Object(j.jsx)("span",{className:"ml-2",children:"ex"})],specialNote:"(Email: gary@email.com Password: garygary)",tools:"express, node, bootstrap"},{title:"Provisions",href:"https://petermodavis.github.io/provisions/",src:"./images/pervisions.png",alt:"fireplace and menu",description:"Enter your ingredients and with the help of a 3rd party API we'll give you a recipe and wine-pairing.",github:"https://github.com/PeterMoDavis/provisions",technologies:[Object(j.jsx)("i",{class:"fab fa-html5 fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-css3-alt fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-js fa-md ml-2"})],tools:"javascript"},{title:"Employee Directory",href:"https://petermodavis.github.io/employee-directory/",src:"./images/employee-dir.png",alt:"list of employees website",description:"An Employee Directory shows all employees in the 'API'. Filter by first name, last name, DOB or phone number.",github:"https://github.com/PeterMoDavis/employee-directory",technologies:[Object(j.jsx)("i",{class:"fab fa-html5 fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-css3-alt fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-js fa-md ml-2"}),Object(j.jsx)("i",{className:"fab fa-react fa-md ml-2"}),Object(j.jsx)("i",{class:"fab fa-bootstrap fa-md ml-2"})],tools:"react, bootstrap"}],O=function(e){Object(r.a)(s,e);var t=Object(n.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={projects:[]},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.setState({projects:g})}},{key:"filterReact",value:function(){var e=this;this.setState({projects:g},(function(){e.setState({projects:e.state.projects.filter((function(e){return e.tools.match(/react/gi)}))})}))}},{key:"filterMongo",value:function(){var e=this;this.setState({projects:g},(function(){e.setState({projects:e.state.projects.filter((function(e){return e.tools.match(/mongo/gi)}))})}))}},{key:"filterExpress",value:function(){var e=this;this.setState({projects:g},(function(){e.setState({projects:e.state.projects.filter((function(e){return e.tools.match(/express/gi)}))})}))}},{key:"filterNode",value:function(){var e=this;this.setState({projects:g},(function(){e.setState({projects:e.state.projects.filter((function(e){return e.tools.match(/node/gi)}))})}))}},{key:"filterBootstrap",value:function(){var e=this;this.setState({projects:g},(function(){e.setState({projects:e.state.projects.filter((function(e){return e.tools.match(/bootstrap/gi)}))})}))}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(j.jsx)(x,{})}),Object(j.jsxs)("div",{className:"d-flex justify-content-around container filter-container mt-3",children:[Object(j.jsx)("i",{onClick:function(){return e.filterReact()},className:"filterIcon fab fa-react fa-2x",style:{color:"RGB(255, 103, 92)"}}),Object(j.jsx)("i",{onClick:function(){return e.filterMongo()},className:"filterIcon fab fa-mdb fa-2x",style:{color:"RGB(252, 186, 3)"}}),Object(j.jsx)("span",{className:"filterIcon",onClick:function(){return e.filterExpress()},style:{fontSize:"24px",color:"RGB(252, 244, 3)"},children:"ex"}),Object(j.jsx)("i",{onClick:function(){return e.filterNode()},className:"filterIcon fab fa-node fa-2x",style:{color:"RGB(78, 252, 3)"}}),Object(j.jsx)("i",{onClick:function(){return e.filterBootstrap()},className:"filterIcon fab fa-bootstrap fa-2x",style:{color:"rgb(0, 255, 234)"}})]}),Object(j.jsx)("div",{className:"card-container d-flex justify-content-between align-content-baseline flex-wrap pb-5",children:this.state.projects.map((function(e,t){return Object(j.jsx)(u,{status:e.status,title:e.title,href:e.href,src:e.src,alt:e.alt,description:e.description,github:e.github,technologies:e.technologies,specialNote:e.specialNote},t)}))}),Object(j.jsx)("div",{children:Object(j.jsx)(d,{})})]})}}]),s}(a.Component),y={img:{width:"700px"},p:{color:"black"},rainbow:{height:"40px",color:"black"},i:{fontSize:"35px"},h3:{color:"black",letterSpacing:"2px"}},v=function(){return Object(j.jsxs)("div",{style:{background:"yellow"},className:"d-flex flex-md-row align-items-center flex-column-reverse mt-4",children:[Object(j.jsx)("img",{style:y.img,src:"./images/petejungle.png",alt:""}),Object(j.jsxs)("div",{className:"container mt-5 mb-0",children:[Object(j.jsx)("h3",{style:y.h3,className:"text-center d-block d-md-none",children:"PETER MODAVIS"}),Object(j.jsx)("h5",{style:y.h3,className:"text-center d-block d-md-none",children:"WEBDEV"}),Object(j.jsxs)("p",{style:y.p,children:["Former musician, stay-at-home dad and recent graduate of UPenn Full Stack Bootcamp. Proficient in HTML, CSS, Javascript, Git, Bootstrap, NodeJS, MySQL, Sequelize, Express, React, MongoDB, Logic Pro X, Pixelmator playing the banjo and much more. Self-learned front end web development for one year prior to bootcamp for a deeper understanding. Has bachelors in English from Temple University.",Object(j.jsx)("strong",{children:" Loves to learn!"}),Object(j.jsx)("span",{children:Object(j.jsx)("img",{id:"heart",className:"mx-2",src:"./images/heart.png",alt:""})}),Object(j.jsxs)("div",{className:"mt-5 d-flex justify-content-around wrap",children:[Object(j.jsx)("i",{id:"red",style:y.i,className:"fab fa-git"}),Object(j.jsx)("i",{id:"orange",style:y.i,className:"fab fa-html5"}),Object(j.jsx)("i",{id:"yellow",style:y.i,className:"fab fa-css3"}),Object(j.jsx)("i",{id:"green",style:y.i,className:"fab fa-react"}),Object(j.jsx)("i",{id:"blue",style:y.i,className:"fab fa-js"}),Object(j.jsx)("i",{id:"purple",style:y.i,className:"fab fa-bootstrap"}),Object(j.jsx)("i",{id:"indigo",style:y.i,className:"fab fa-node-js"}),Object(j.jsx)("i",{style:y.i,className:"fab fa-mdb"})]})]})]})]})},N=s(2),w=function(e){Object(r.a)(s,e);var t=Object(n.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(j.jsx)(b.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(N.c,{}),Object(j.jsx)(h,{}),Object(j.jsxs)(N.c,{children:[Object(j.jsx)(N.a,{path:"/",exact:!0,component:O}),Object(j.jsx)(N.a,{path:"/about",component:v})]}),Object(j.jsx)(m,{})]})})}}]),s}(a.Component);o.a.render(Object(j.jsx)(w,{}),document.querySelector("#root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.ce778b87.chunk.js.map