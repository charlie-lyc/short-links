(this["webpackJsonpshort-links-client"]=this["webpackJsonpshort-links-client"]||[]).push([[0],{42:function(t,e,n){"use strict";n.r(e);var c=n(3),r=n.n(c),a=n(14),s=n.n(a),i=n(5),l=n.n(i),o=n(15),b=n(2),u=n(17),d=n(16),j=n.n(d),p=n(0);var h=function(){var t=Object(c.useState)({isActive:!1,origin:"",url:"",link:""}),e=Object(u.a)(t,2),n=e[0],r=e[1],a=function(){var t=Object(o.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!new RegExp("^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\xa1-\uffff](?:-)*)*(?:[a-z0-9\xa1-\uffff])+)(?:\\.(?:[a-z0-9\xa1-\uffff](?:-)*)*(?:[a-z0-9\xa1-\uffff])+)*(?:\\.(?:[a-z0-9\xa1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$").test(n.url)){t.next=8;break}return t.next=4,j.a.post("https://shortlinks-app.herokuapp.com/short-links",{url:n.url});case 4:(e=t.sent).data.data&&!n.isActive&&r((function(){return Object(b.a)(Object(b.a)({},n),{},{isActive:!0,link:"https://shortlinks-app.herokuapp.com/r/"+e.data.data.shortId,url:""})})),t.next=9;break;case 8:alert("Invalid URL!");case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"container py-4",children:[Object(p.jsx)("header",{className:"pb-3 mb-4 border-bottom",children:Object(p.jsx)("a",{href:"/",className:"d-flex align-items-center text-dark text-decoration-none",children:Object(p.jsx)("span",{className:"fs-3",children:"Short Link App"})})}),Object(p.jsx)("div",{className:"p-5 mb-4 bg-light rounded-3",children:Object(p.jsxs)("div",{className:"container-fluid py-5",children:[Object(p.jsxs)("h1",{className:"display-6 fw-bold",children:["Simple is better than complex,",Object(p.jsx)("br",{}),"Complex is better than complicated."]}),Object(p.jsx)("br",{}),n.isActive?Object(p.jsx)("label",{for:"url",className:"form-label",children:"Short Link"}):Object(p.jsx)("label",{for:"url",className:"form-label",children:"Original Link"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"url",value:n.isActive?n.link:n.url,onChange:function(t){n.isActive||r((function(){return Object(b.a)(Object(b.a)({},n),{},{url:t.target.value})}))}}),Object(p.jsx)("br",{}),n.isActive?Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{className:"btn btn-secondary",type:"button",onClick:function(){r((function(){return Object(b.a)(Object(b.a)({},n),{},{isActive:!1,link:""})}))},children:"<< URL"}),"\xa0",Object(p.jsx)("button",{className:"btn btn-outline-primary",type:"button",onClick:function(){document.getElementById("url").select(),document.execCommand("copy")},children:"Copy Link"})]}):Object(p.jsx)("button",{className:"btn btn-primary",type:"button",onClick:a,children:"Shorten"})]})})]})})};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(h,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.adc5978b.chunk.js.map