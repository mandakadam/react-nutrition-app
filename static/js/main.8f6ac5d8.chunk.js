(this["webpackJsonpreact-nutrition-app"]=this["webpackJsonpreact-nutrition-app"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),o=(a(12),a(2)),i=a.n(o),s=a(6),u=a(3),m=a(1),d=function(){var e=Object(n.useState)("10"),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("Analyze Meal Nutrition"),o=Object(m.a)(c,2),d=o[0],p=o[1],f=Object(n.useState)(["1 Orange Juice","3 tablespoons olive oil","2 Carrots"]),g=Object(m.a)(f,2),v=g[0],b=g[1],E=Object(n.useState)(""),h=Object(m.a)(E,2),j=h[0],O=h[1],N=Object(n.useState)({}),y=Object(m.a)(N,2),w=y[0],k=y[1],S=Object(n.useState)("false"),x=Object(m.a)(S,2),C=x[0],A=x[1];Object(n.useEffect)((function(){O("")}),[v]);var B=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a,n,r=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",a=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(a)});case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"form-wrap"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Title"),r.a.createElement("input",{className:"form-control",type:"text",value:d,onChange:function(e){return p(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Serving For"),r.a.createElement("input",{className:"form-control",type:"number",value:a,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Ingredients list"),r.a.createElement("div",null,r.a.createElement("input",{className:"form-control",type:"text",value:j,onChange:function(e){return O(e.target.value)}}),r.a.createElement("button",{className:"addDietBtn",disabled:""===j,onClick:function(){b([].concat(Object(u.a)(v),[j]))}},"Add diet"),v.length?r.a.createElement("ul",{className:"ingrList"},v.map((function(e,t){return r.a.createElement("li",{key:t},e," ",r.a.createElement("span",{className:"deleteBtn",onClick:function(){return function(e){var t=Object(u.a)(v),a=t[e];-1!==a&&(t.splice(a,1),b(t))}(t)}},"x"))}))):r.a.createElement("h3",null,"No Diet List added"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null),r.a.createElement("button",{className:"submitBtn",onClick:function(e){A("true"),B("https://api.edamam.com/api/nutrition-details?app_id=b66eab84&app_key=c5be16564187193ee7130c3586a5611c",{title:d,yield:"About ".concat(a," serving"),ingr:v}).then((function(e){console.log(e),k(e),A("false")}))}},"Analyze")),r.a.createElement("div",null,"true"===C?r.a.createElement("div",{className:"result"},"Loading ..."):Object.entries(w).length>0&&!w.error?r.a.createElement("div",{className:"result"},r.a.createElement("ul",null,r.a.createElement("li",null,"Total calories:  ",w.calories),r.a.createElement("li",null,"Total total weight:    ",w.totalWeight))):w.error?r.a.createElement("div",{className:"result"},r.a.createElement("div",{class:"errorMsg"}," Something went wrong, Please try adding Proper Ingredients list. For example:"),r.a.createElement("ul",null,r.a.createElement("li",null,"1 cup orange juice"),r.a.createElement("li",null,"3 tablespoons olive oil"),r.a.createElement("li",null,"2 carrots"))):void 0))};a(14);var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.8f6ac5d8.chunk.js.map