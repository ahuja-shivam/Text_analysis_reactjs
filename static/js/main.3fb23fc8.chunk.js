(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),c=a(6),r=a.n(c),o=(a(16),a(3)),m=(a(18),0);function i(e){var t=Object(l.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(l.useState)(!1),s=Object(o.a)(i,2),d=s[0],u=s[1],h=function(e,t){var a=document.createElement("a"),l=new Blob([t],{type:"plain/text"}),n=URL.createObjectURL(l);a.setAttribute("href",n),a.setAttribute("download",e),a.style.display="none",document.body.appendChild(a),0===m&&a.click(),document.body.removeChild(a),console.log("downloaded"),m=1};window.onload=function(){document.getElementById("download").addEventListener("click",function(e){var t=document.getElementById("name_id").value;t+=".txt";var a=document.getElementById("title_id").value;a+="\n \n \n",a+=document.getElementById("para_id").value,t&&a&&(m=0,h(t,a)),console.log(t,a)})};var E=function(){r(c)};return n.a.createElement("div",{className:"forms"},n.a.createElement("div",{className:"mb-3 my-5"},n.a.createElement("h2",null,"Enter the title Here"),n.a.createElement("input",{className:"form-control bg-".concat(e.mode," text-").concat("dark"===e.mode?"light":"dark"),id:"title_id",type:"text",placeholder:"Title here...."}),n.a.createElement("br",null),n.a.createElement("h3",null,e.heading),n.a.createElement("textarea",{className:"form-control bg-".concat(e.mode," text-").concat("dark"===e.mode?"light":"dark"),placeholder:"".concat("Enter text here..."),spellCheck:d,onChange:function(e){r(e.target.value),c.length>499&&("deleteContentBackward"===e.nativeEvent.inputType?r(e.target.value):E())},id:"para_id",rows:"10"})),n.a.createElement("h5",null,"Enter the File name here")," ",n.a.createElement("h6",null,"(The file will be saved in .txt format)"),n.a.createElement("input",{className:"form-control bg-".concat(e.mode," text-").concat("dark"===e.mode?"light":"dark"," w-25"),id:"name_id",type:"text",placeholder:" ex. abc"}),n.a.createElement("br",null),n.a.createElement("div",null,"(This box only recieves input of less than 500 chrancters)"),n.a.createElement("button",{className:"btn btn-success button-custom",type:"submit",onClick:function(){u(!d),console.log("spell clicked",d)}},"Spell Check"),n.a.createElement("button",{className:"btn btn-danger button-custom",type:"submit",onClick:function(){r("")}},"Clear"),n.a.createElement("button",{className:"btn btn-primary button-custom",id:"download",type:"submit",onClick:h},"Download"),n.a.createElement("div",null,n.a.createElement("h1",null,"The text summary"),n.a.createElement("ul",null,n.a.createElement("li",null,"The number of paragraphs are: ",0===c.length?0:c.split("\n").length," "),n.a.createElement("li",null,"The number of words are: ",0===c.length?0:c.split(" ").length),n.a.createElement("li",null,"Estimated time to read this paragraph is ",function(e){e=e/50*3;for(var t=0,a=0;e>0;)++a>=60&&(t++,a=0),e--;return t>0?t+" mins "+a+" sec":a+" sec"}(c.length),"."))))}var s=a(4);function d(e){return n.a.createElement("div",null,n.a.createElement("div",{className:"bg-".concat(e.mode," collapse"),id:"navbarHeader"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-8 col-md-7 py-4"},n.a.createElement("h4",{className:"text-".concat("light"===e.mode?"black":"white")},"About"),n.a.createElement("p",{className:"text-muted"},"Word Analysis is an app which will let you analysis your text.")),n.a.createElement("div",{className:"col-sm-4 offset-md-1 py-4"},n.a.createElement("h4",{className:"text-".concat("light"===e.mode?"black":"white")},"Contact"),n.a.createElement("ul",{className:"list-unstyled"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.linkedin.com/in/shivamahujax/",className:"text-".concat("dark"===e.mode?"white":"black"," follow")},"Connect on LinkedIn")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.instagram.com/ahujaxshivam/",className:"text-".concat("dark"===e.mode?"white":"black"," follow")},"Like on Instagram")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/ahuja-shivam",className:"text-".concat("dark"===e.mode?"white":"black"," follow")},"GitHub Profile")),n.a.createElement("li",null,n.a.createElement("div",{className:"form-check form-switch"},n.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckChecked",onClick:e.toggleMode}),n.a.createElement("label",{className:"form-check-label text-".concat("dark"===e.mode?"light":"dark"),htmlFor:"flexSwitchCheckDefault"},"Dark Mode")))))))),n.a.createElement("div",{className:"navbar navbar-".concat(e.mode," bg-").concat(e.mode," shadow-sm")},n.a.createElement("div",{className:"container"},n.a.createElement(s.b,{to:"/",className:"navbar-brand d-flex align-items-center"},n.a.createElement("strong",null,"IELTS Writing Practice")),n.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarHeader","aria-controls":"navbarHeader","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})))))}function u(){return n.a.createElement("div",{className:"my-5 bg-light px-5 py-5 text-dark"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("svg",{className:"bd-placeholder-img rounded-circle",width:"140",height:"140",xmlns:"https://content.fortune.com/wp-content/uploads/2022/05/GettyImages-1395062611.jpg",role:"img","aria-label":"Placeholder: 140x140",preserveAspectRatio:"xMidYMid slice",focusable:"false"},n.a.createElement("title",null,"Placeholder"),n.a.createElement("rect",{width:"100%",height:"100%",fill:"#777"}),n.a.createElement("text",{x:"50%",y:"50%",fill:"#777",dy:".3em"},"140x140")),n.a.createElement("h2",{className:"fw-normal"},"CEO"),n.a.createElement("p",null,"Mr. ABX+C"),n.a.createElement("p",null,n.a.createElement("a",{className:"btn btn-secondary",href:"/"},"View details \xbb"))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("svg",{className:"bd-placeholder-img rounded-circle",width:"140",height:"140",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 140x140",preserveAspectRatio:"xMidYMid slice",focusable:"false"},n.a.createElement("title",null,"Placeholder"),n.a.createElement("rect",{width:"100%",height:"100%",fill:"#777"}),n.a.createElement("text",{x:"50%",y:"50%",fill:"#777",dy:".3em"},"140x140")),n.a.createElement("h2",{className:"fw-normal"},"CTO"),n.a.createElement("p",null,"Mr. KMK-A"),n.a.createElement("p",null,n.a.createElement("a",{className:"btn btn-secondary",href:"/"},"View details \xbb"))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("svg",{className:"bd-placeholder-img rounded-circle",width:"140",height:"140",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 140x140",preserveAspectRatio:"xMidYMid slice",focusable:"false"},n.a.createElement("title",null,"Placeholder"),n.a.createElement("rect",{width:"100%",height:"100%",fill:"#777"}),n.a.createElement("text",{x:"50%",y:"50%",fill:"#777",dy:".3em"},"140x140")),n.a.createElement("h2",{className:"fw-normal"},"CMO"),n.a.createElement("p",null,"Mr. IIM+MBA"),n.a.createElement("p",null,n.a.createElement("a",{className:"btn btn-secondary",href:"/"},"View details \xbb"))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("svg",{className:"bd-placeholder-img rounded-circle",width:"140",height:"140",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 140x140",preserveAspectRatio:"xMidYMid slice",focusable:"false"},n.a.createElement("title",null,"Placeholder"),n.a.createElement("rect",{width:"100%",height:"100%",fill:"#777"}),n.a.createElement("text",{x:"50%",y:"50%",fill:"#777",dy:".3em"},"140x140")),n.a.createElement("h2",{className:"fw-normal"},"CFO"),n.a.createElement("p",null,"Mr. IOS-AP"),n.a.createElement("p",null,n.a.createElement("a",{className:"btn btn-secondary",href:"/"},"View details \xbb")))))}function h(e){return e.alert&&n.a.createElement("div",null,n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,e.alert.type,"!:    "),e.alert.msg))}var E=a(0);var b=function(){var e=Object(l.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(l.useState)(null),m=Object(o.a)(r,2),b=m[0],g=m[1],p=function(e,t){g({msg:e,type:t}),setTimeout(function(){g(null)},1500)};return n.a.createElement("div",null,n.a.createElement(s.a,null,n.a.createElement(d,{home:"Home",about:"About",mode:a,toggleMode:function(){"dark"===a?(c("light"),document.body.style.backgroundColor="white",document.body.style.color="rgb(38, 38, 38)",p("Light Mode is unabled","success")):(c("dark"),document.body.style.backgroundColor="rgb(50, 50, 50)",document.body.style.color="white",p("Dark Mode is unabled","success"))}}),n.a.createElement(h,{alert:b}),n.a.createElement("div",{className:"container"},n.a.createElement(E.c,null,n.a.createElement(E.a,{exact:!0,path:"/",element:n.a.createElement(i,{heading:"Enter the text here",mode:a})}),n.a.createElement(E.a,{exact:!0,path:"/teams",element:n.a.createElement(u,null)})))))},g=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,21)).then(function(t){var a=t.getCLS,l=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),l(e),n(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null))),g()},7:function(e,t,a){e.exports=a(20)}},[[7,3,2]]]);
//# sourceMappingURL=main.3fb23fc8.chunk.js.map