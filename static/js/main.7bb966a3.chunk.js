(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{27:function(e,t,c){},53:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(0),i=c.n(a),l=c(8),n=c.n(l),r=(c(53),c(19)),j=c.n(r),d=c(29),b=c(23),h=(c(27),c(24)),o=c.n(h),v=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h2",{children:"Covid-19 Tracker"}),Object(s.jsx)("a",{href:"https://github.com/pranathnaik/covid-19-tracker",target:"_blank",children:Object(s.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/25/25231.svg",alt:"source",width:"40px",height:"35px"})})]})})},O=function(e){return Object(s.jsxs)("div",{className:"globalcontainer",children:[Object(s.jsx)("div",{className:"global-title",children:Object(s.jsx)("p",{children:"Global COVID-19"})}),Object(s.jsxs)("div",{className:"global-items",children:[Object(s.jsxs)("div",{className:"items",children:[Object(s.jsx)("div",{className:"title-global",children:Object(s.jsx)("h2",{children:"Active cases "})}),Object(s.jsx)("div",{className:"title-global-value",children:e.active})]}),Object(s.jsxs)("div",{className:"items",children:[Object(s.jsx)("div",{className:"title-global",children:Object(s.jsx)("h2",{children:"Cases "})}),Object(s.jsx)("div",{className:"title-global-value",children:e.cases})]}),Object(s.jsxs)("div",{className:"items",children:[Object(s.jsx)("div",{className:"title-global",children:Object(s.jsx)("h2",{children:"Deaths "})}),Object(s.jsx)("div",{className:"title-global-value",children:e.deaths})]}),Object(s.jsxs)("div",{className:"items",children:[Object(s.jsx)("div",{className:"title-global",children:Object(s.jsx)("h2",{children:"Recovered "})}),Object(s.jsx)("div",{className:"title-global-value",children:e.recovered})]})]})]})},u=c(107),x=c(106),m=function(){var e=Object(a.useState)({}),t=Object(b.a)(e,2),c=t[0],i=t[1],l=Object(a.useState)([{}]),n=Object(b.a)(l,2),r=n[0],h=n[1],v=Object(a.useState)("Afghanistan"),O=Object(b.a)(v,2),m=O[0],g=O[1];Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(t){var c,s,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://disease.sh/v3/covid-19/countries/".concat(m));case 2:return c=e.sent,s=c.data,e.next=6,o.a.get("https://disease.sh/v3/covid-19/countries");case 6:a=e.sent,h(a.data),i(s);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}()}),[m]);return Object(s.jsxs)("div",{className:"globalcontainer",children:[Object(s.jsx)("div",{className:"global-title",children:Object(s.jsx)(x.a,{className:"hi",value:m,onChange:function(e){g(e.target.value)},children:r.map((function(e){return Object(s.jsx)(u.a,{className:"bye",value:e.country,children:e.country})}))})}),Object(s.jsxs)("div",{className:"global-items",children:[Object(s.jsxs)("div",{className:"items",children:[Object(s.jsx)("div",{className:"title-global",children:Object(s.jsx)("h2",{children:"Active cases "})}),Object(s.jsx)("div",{className:"title-global-value",children:c.active})]}),Object(s.jsxs)("div",{className:"items",children:[Object(s.jsx)("div",{className:"title-global",children:Object(s.jsx)("h2",{children:"Cases "})}),Object(s.jsx)("div",{className:"title-global-value",children:c.cases})]}),Object(s.jsxs)("div",{className:"items",children:[Object(s.jsx)("div",{className:"title-global",children:Object(s.jsx)("h2",{children:"Deaths "})}),Object(s.jsx)("div",{className:"title-global-value",children:c.deaths})]}),Object(s.jsxs)("div",{className:"items",children:[Object(s.jsx)("div",{className:"title-global",children:Object(s.jsx)("h2",{children:"Recovered "})}),Object(s.jsx)("div",{className:"title-global-value",children:c.recovered})]})]})]})},g=function(){var e=Object(a.useState)({}),t=Object(b.a)(e,2),c=t[0],i=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://disease.sh/v3/covid-19/all");case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(v,{}),Object(s.jsx)(O,{active:c.active,cases:c.cases,deaths:c.deaths,recovered:c.recovered}),Object(s.jsx)(m,{})]})};n.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.7bb966a3.chunk.js.map