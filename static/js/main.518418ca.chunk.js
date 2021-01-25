(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{43:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(2),a=c(13),s=c.n(a),o=c(4),i=c(14),l=c(15),j=c(18),h=c(17),d=c(16),b=c.n(d),u=function(){return b.a.get("https://randomuser.me/api/?results=50&nat=us")},p=function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e.handleInputChange=function(t){var c,n=t.target.value,r=t.target.value,a=e.state.data.filter((function(e){return e.phone.includes(r)}));e.setState((c={},Object(o.a)(c,n,r),Object(o.a)(c,"data",a),c))},e}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;u().then((function(t){return e.setState({data:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"jumbotron",children:[Object(n.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(n.jsx)("p",{className:"lead",children:"Welcome to the employee directory! Here you'll see a result of all available employees along with their non-sensitive information."}),Object(n.jsx)("hr",{className:"my-4"}),Object(n.jsx)("p",{children:"Use the below text area to filter for a specifc employee by their phone number."}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"searchBox",onChange:this.handleInputChange})]}),Object(n.jsxs)("table",{className:"table table-dark",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Picture"}),Object(n.jsx)("th",{scope:"col",children:"First Name"}),Object(n.jsx)("th",{scope:"col",children:"Last Name"}),Object(n.jsx)("th",{scope:"col",children:"Phone"}),Object(n.jsx)("th",{scope:"col",children:"Email"}),Object(n.jsx)("th",{scope:"col",children:"City"}),Object(n.jsx)("th",{scope:"col",children:"State/Territory"}),Object(n.jsx)("th",{scope:"col",children:"Country"})]})}),Object(n.jsx)("tbody",{children:this.state.data.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:Object(n.jsx)("img",{src:e.picture.thumbnail})}),Object(n.jsx)("td",{children:e.name.first}),Object(n.jsx)("td",{children:e.name.last}),Object(n.jsx)("td",{children:e.phone}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:e.location.city}),Object(n.jsx)("td",{children:e.location.state}),Object(n.jsx)("td",{children:e.location.country})]},e.login.username)}))})]})]})}}]),c}(r.Component);var O=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(p,{})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};c(42);s.a.render(Object(n.jsx)(O,{}),document.getElementById("root")),m()}},[[43,1,2]]]);
//# sourceMappingURL=main.518418ca.chunk.js.map