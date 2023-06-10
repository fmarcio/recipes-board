(this["webpackJsonpcooking-ninja"]=this["webpackJsonpcooking-ninja"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),a=c(30),s=c.n(a),i=(c(39),c(13)),o=c(14),j=c(10),l=c(4),u=(c(40),c(1)),b=Object(n.createContext)(),d=function(e,t){switch(t.type){case"CHANGE_COLOR":return Object(j.a)(Object(j.a)({},e),{},{color:t.payload});case"CHANGE_MODE":return Object(j.a)(Object(j.a)({},e),{},{mode:t.payload});default:return e}},O=function(e){var t=e.children,c=Object(n.useReducer)(d,{color:"#58249c",mode:"dark"}),r=Object(l.a)(c,2),a=r[0],s=r[1];return Object(u.jsx)(b.Provider,{value:Object(j.a)(Object(j.a)({},a),{},{changeColor:function(e){s({type:"CHANGE_COLOR",payload:e})},changeMode:function(e){s({type:"CHANGE_MODE",payload:e})}}),children:t})},h=function(){var e=Object(n.useContext)(b);if(void 0===e)throw Error("useTheme() must be used with a provider");return e},p=c.p+"static/media/delete-icon.eac1a29b.svg",x=c(27);c(56);x.a.initializeApp({apiKey:"AIzaSyCk2ZLIefjJJtTeVfZf0bs9S-osl8vP0jM",authDomain:"cooking-ninja-site-67a96.firebaseapp.com",projectId:"cooking-ninja-site-67a96",storageBucket:"cooking-ninja-site-67a96.appspot.com",messagingSenderId:"254676090196",appId:"1:254676090196:web:cda2fc4e316ab815891cc1"});var f=x.a.firestore();function m(e){var t=e.recipes,c=h().mode;if(!t.length)return Object(u.jsx)("div",{className:"error",children:"No recipes found"});return Object(u.jsx)("div",{className:"recipe-list ".concat(c),children:t.map((function(e){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("h3",{children:e.title}),Object(u.jsxs)("p",{children:[e.cookingTime," to make"]}),Object(u.jsxs)("div",{children:[e.method.substring(0,100),"..."]}),Object(u.jsx)(i.b,{to:"/recipes/".concat(e.id),children:"Cook this"}),Object(u.jsx)("img",{alt:"delete icon",className:"delete",src:p,onClick:function(){return t=e.id,void f.collection("recipes").doc(t).delete();var t}})]},e.id)}))})}c(47);var v=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(l.a)(a,2),i=s[0],o=s[1],b=Object(n.useState)(!1),d=Object(l.a)(b,2),O=d[0],h=d[1];return Object(n.useEffect)((function(){h(!0);var e=f.collection("recipes").onSnapshot((function(e){if(e.empty)h(!1),o("No recipes to load");else{var t=[];e.docs.forEach((function(e){t.push(Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id}))})),r(t),h(!1)}}),(function(e){o(e.message),h(!1)}));return function(){return e()}}),[]),Object(u.jsxs)("div",{className:"home",children:[i&&Object(u.jsx)("p",{className:"error",children:i}),O&&Object(u.jsx)("p",{className:"loading",children:"Loading..."}),c&&Object(u.jsx)(m,{recipes:c})]})},g=c(34),k=c(20),N=c(24);c(48);var S=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(l.a)(a,2),i=s[0],j=s[1],b=Object(n.useState)(""),d=Object(l.a)(b,2),O=d[0],h=d[1],p=Object(n.useState)(""),x=Object(l.a)(p,2),m=x[0],v=x[1],S=Object(n.useState)([]),C=Object(l.a)(S,2),y=C[0],w=C[1],E=Object(o.useHistory)(),R=Object(n.useRef)(null),A=function(){var e=Object(N.a)(Object(k.a)().mark((function e(t){var n;return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={title:c,method:i,cookingTime:O+" minutes",ingredients:y},e.prev=2,e.next=5,f.collection("recipes").add(n);case 5:E.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"create",children:[Object(u.jsx)("h2",{children:"Add a rew recipe:"}),Object(u.jsxs)("form",{onSubmit:A,children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Recipe title"}),Object(u.jsx)("input",{type:"text",onChange:function(e){return r(e.target.value)},value:c,required:!0})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Recipe ingredients"}),Object(u.jsxs)("div",{className:"ingredients",children:[Object(u.jsx)("input",{type:"text",onChange:function(e){return v(e.target.value)},value:m,ref:R}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault();var t=m.trim();t&&!y.includes(t)&&w((function(e){return[].concat(Object(g.a)(e),[t])})),v(""),R.current.focus()},children:"Add"})]})]}),Object(u.jsxs)("p",{children:["Current ingredients:"," ",y.map((function(e){return Object(u.jsx)("em",{children:e+", "},e)}))]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Recipe Method:"}),Object(u.jsx)("textarea",{onChange:function(e){return j(e.target.value)},value:i,required:!0})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Cooking time:"}),Object(u.jsx)("input",{type:"number",onChange:function(e){return h(e.target.value)},value:O,required:!0})]}),Object(u.jsx)("button",{className:"btn",children:"Submit"})]})]})};c(49);var C=function(){var e=Object(o.useLocation)().search,t=new URLSearchParams(e).get("q"),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=Object(n.useState)(null),r=Object(l.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(!1),o=Object(l.a)(i,2),u=o[0],b=o[1],d=Object(n.useState)(null),O=Object(l.a)(d,2),h=O[0],p=O[1],x=Object(n.useState)(null),f=Object(l.a)(x,2),m=f[0],v=f[1];return Object(n.useEffect)((function(){var c=new AbortController,n=function(){var t=Object(N.a)(Object(k.a)().mark((function t(n){var r,a;return Object(k.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!0),t.prev=1,t.next=4,fetch(e,Object(j.a)(Object(j.a)({},n),{},{signal:c.signal}));case 4:if((r=t.sent).ok){t.next=7;break}throw new Error(r.statusText);case 7:return t.next=9,r.json();case 9:a=t.sent,b(!1),s(a),p(null),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),"AbortError"===t.t0.name?console.log("the fetch was aborted"):(b(!1),p("Could not fetch the data"));case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}();return"GET"===t&&n(),"POST"===t&&m&&n(m),function(){c.abort()}}),[e,t,m]),{data:a,isPending:u,error:h,postData:function(e){v({method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})}}}("http://localhost:3000/recipes?q="+t),r=c.data,a=c.error,s=c.isPending;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h2",{className:"page-title",children:['Recipes including "',t,'"']}),a&&Object(u.jsxs)("p",{className:"error",children:["Error:",a]}),s&&Object(u.jsx)("p",{className:"loading",children:"Loading..."}),r&&Object(u.jsx)(m,{recipes:r})]})},y=(c(50),c(33)),w=c.p+"static/media/clock-icon.31bea82c.svg";var E=function(){var e=Object(o.useParams)().id,t=h().mode,c=Object(n.useState)(null),r=Object(l.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(!1),j=Object(l.a)(i,2),b=j[0],d=j[1],O=Object(n.useState)(!1),p=Object(l.a)(O,2),x=p[0],m=p[1];return Object(n.useEffect)((function(){m(!0);var t=f.collection("recipes").doc(e).onSnapshot((function(e){e.exists?(m(!1),s(e.data())):d("This recipe no exists")}));return function(){return t()}}),[e]),Object(u.jsxs)("div",{className:"recipe ".concat(t),children:[x&&Object(u.jsx)("p",{className:"loading",children:"Loading..."}),b&&Object(u.jsx)("p",{className:"error",children:b}),a&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"page-title",children:a.title}),Object(u.jsxs)("p",{children:[Object(u.jsx)("img",{className:"clock",alt:"clock-icon",src:w}),a.cookingTime," to cook"]}),Object(u.jsx)("p",{className:"ingredients",children:"Ingredients:"}),Object(u.jsx)("ul",{children:a.ingredients.map((function(e){return Object(u.jsx)("li",{children:e},e)}))}),Object(u.jsx)("p",{className:"method",children:a.method})]}),Object(u.jsx)(y.Link,{className:"go-to-home",to:"/",children:"Back to home"})]})};c(51),c(52);function R(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(o.useHistory)();return Object(u.jsx)("div",{className:"searchbar",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("/search?q=".concat(c))},children:[Object(u.jsx)("label",{htmlFor:"search",children:"Search"}),Object(u.jsx)("input",{id:"search",type:"text",onChange:function(e){return r(e.target.value)},required:!0})]})})}c(53);var A=function(){var e=h().color;return Object(u.jsx)("div",{className:"navbar",style:{backgroundColor:e},children:Object(u.jsxs)("nav",{children:[Object(u.jsx)(i.b,{to:"/",className:"brand",children:Object(u.jsx)("h1",{children:"Recipes Board"})}),Object(u.jsx)(R,{}),Object(u.jsx)(i.b,{to:"/create",children:"Create Recipe"})]})})},T=(c(54),c.p+"static/media/brightness_icon.f1b3900c.svg");function L(){var e=h(),t=e.changeColor,c=e.changeMode,n=e.mode;return Object(u.jsxs)("div",{className:"theme-selector",children:[Object(u.jsx)("div",{className:"mode-toggle",onClick:function(){c("dark"===n?"light":"dark")},children:Object(u.jsx)("img",{src:T,alt:"dark/light toggle icon",style:{filter:"dark"===n?"invert(100%)":"invert(20%)"}})}),Object(u.jsx)("div",{className:"theme-buttons",children:["#58249c","#249c6b","#b70233"].map((function(e){return Object(u.jsx)("div",{onClick:function(){return t(e)},style:{background:e}},e)}))})]})}var P=function(){var e=h().mode;return Object(u.jsx)("div",{className:"App ".concat(e),children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(A,{}),Object(u.jsx)(L,{}),Object(u.jsxs)(o.Switch,{children:[Object(u.jsx)(o.Route,{exact:!0,path:"/",children:Object(u.jsx)(v,{})}),Object(u.jsx)(o.Route,{path:"/create",children:Object(u.jsx)(S,{})}),Object(u.jsx)(o.Route,{path:"/search",children:Object(u.jsx)(C,{})}),Object(u.jsx)(o.Route,{path:"/recipes/:id",children:Object(u.jsx)(E,{})})]})]})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(O,{children:Object(u.jsx)(P,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.8c14ae87.chunk.js.map