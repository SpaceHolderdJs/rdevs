(this.webpackJsonprdevs=this.webpackJsonprdevs||[]).push([[0],{10:function(e,t,a){e.exports={logo:"logo_logo__3uQ33",bigLetter:"logo_bigLetter__5wiRj",devs:"logo_devs__1lGYg",yellowBox:"logo_yellowBox__346oC",letter:"logo_letter__inL6e"}},13:function(e,t,a){e.exports={wrapper:"header_wrapper__2flGm",tabsWrapper:"header_tabsWrapper__1bpVJ",tab:"header_tab__DU_Xi",circle:"header_circle__2od9_"}},25:function(e,t,a){e.exports={about:"about_about__QRv4V",wrapper:"about_wrapper__1h8nB"}},26:function(e,t,a){e.exports={home:"home_home__2RxCF",wrapper:"home_wrapper__VVWCZ"}},36:function(e,t,a){},37:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(15),o=a.n(r),s=(a(36),a(37),a(6)),i=a(13),l=a.n(i),d=a(10),u=a.n(d),p=a(1);function b(){return Object(p.jsxs)("div",{className:"row centered ".concat(u.a.logo),children:[Object(p.jsxs)("div",{className:"column centered ".concat(u.a.yellowBox," "),children:[Object(p.jsx)("span",{className:u.a.letter,children:"w"}),Object(p.jsx)("span",{className:u.a.letter,children:"e"})]}),Object(p.jsx)("span",{className:u.a.bigLetter,children:"R"}),Object(p.jsx)("span",{className:"row ".concat(u.a.devs),children:"devs"})]})}function j(){var e=Object(s.c)((function(e){return e.tab})),t=Object(s.b)();return Object(c.useEffect)((function(){console.log(e)}),[e]),Object(p.jsx)("header",{className:"row centered",children:Object(p.jsxs)("div",{className:"row centered ".concat(l.a.wrapper),children:[Object(p.jsx)(b,{}),Object(p.jsx)("div",{className:"row centered ".concat(l.a.tabsWrapper),children:["home","about us"].map((function(a){return Object(p.jsxs)("span",{className:"column centered ".concat(l.a.tab),onClick:function(){return t({type:"INIT_TAB",payload:a})},children:[a,e===a&&Object(p.jsx)("div",{className:l.a.circle})]},a)}))})]})})}var h=a(25),m=a.n(h);function O(){return Object(p.jsx)("div",{className:"row centered ".concat(m.a.about),children:Object(p.jsxs)("div",{className:"column ".concat(m.a.wrapper),children:[Object(p.jsx)("h1",{children:"Lorem ipsum creation timelines"}),Object(p.jsx)("p",{children:"So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book."}),Object(p.jsx)("p",{children:"It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries."}),Object(p.jsx)("p",{children:"And anyways, as Cecil Adams reasoned, \u201c[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?\u201d Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset."}),Object(p.jsx)("p",{children:"McClintock wrote to Before & After to explain his discovery; \u201cWhat I find remarkable is that this text has been the industry's standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional 'ing' or 'y' thrown in. It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase 'it's Greek to me' and 'greeking' have common semantic roots!\u201d (The editors published his letter in a correction headlined \u201cLorem Oopsum\u201d)."})]})})}var _=a(5),x=a(8),f=a(28),y=a.n(f),v=a(29),g=a.n(v),w=a(7),N=a.n(w);function k(){var e,t=Object(c.useState)([]),a=Object(x.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)(),i=Object(x.a)(o,2),l=i[0],d=i[1],u=Object(c.useState)([]),b=Object(x.a)(u,2),j=b[0],h=b[1],m=Object(s.b)(),O=["Sunday","Mounday","Tuesday","Wednesday","Thursday","Friday","Saturday"],f=["January","February","March","April","May","June","July","August","September","October","November","December"],v=Object(c.useCallback)((function(e,t){for(var a=new Date(e,t,1),c=[];a.getMonth()===t;)c.push(new Date(a)),a.setDate(a.getDate()+1);return c}),[]),w=Object(c.useCallback)((function(){var e=(new Date).getFullYear(),t=f.map((function(t,a){return{name:t,days:v(e,a)}}));r(t),d((new Date).getMonth())}),[]),k=Object(c.useCallback)((function(){if(n.length>0){var e=n[l].days.map((function(e){return{date:e,actual:!0}})),t=e[0].date.getDay(),a=e[e.length-1].date.getDay(),c=n[l+1>11?0:l+1].days.map((function(e){return{date:e,actual:!1}})),r=n[l-1<0?11:l-1].days.map((function(e){return{date:e,actual:!1}}));return 11===n.indexOf(e)?h([].concat(Object(_.a)(r.slice(r.length-t)),Object(_.a)(e))):0===n.indexOf(e)?h([].concat(Object(_.a)(e),Object(_.a)(c.slice(0,6-a)))):h([].concat(Object(_.a)(r.slice(r.length-t)),Object(_.a)(e),Object(_.a)(c.slice(0,6-a))))}}),[l]),C=Object(c.useCallback)((function(e){return e.toString().length>1?e:"0"+e}),[]);return Object(c.useEffect)((function(){k()}),[l,n]),Object(c.useEffect)((function(){w()}),[]),Object(p.jsxs)("div",{className:"column centered ".concat(N.a.calender),children:[Object(p.jsxs)("div",{className:"row centered ".concat(N.a.header),children:[Object(p.jsx)(y.a,{className:N.a.icon,onClick:function(){return d(l-1<0?11:l-1)}}),Object(p.jsxs)("div",{className:"row centered ".concat(N.a.monthTitle),children:[Object(p.jsx)("span",{children:n&&(null===(e=n[l])||void 0===e?void 0:e.name.toUpperCase())}),Object(p.jsx)("span",{children:(new Date).getFullYear()})]}),Object(p.jsx)(g.a,{className:N.a.icon,onClick:function(){return d(l+1>11?0:l+1)}})]}),Object(p.jsx)("div",{className:N.a.divider}),Object(p.jsx)("div",{className:"row  ".concat(N.a.datesWrapper),children:O.map((function(e,t){return Object(p.jsx)("div",{className:"column  ".concat(N.a.datesColumn),children:j.filter((function(e){return e.date.getDay()===t})).map((function(e){return Object(p.jsx)("div",{className:"row centered ".concat(N.a.dateItem," ").concat(!e.actual&&N.a.notActual),onClick:function(){return m({type:"INIT_POPUP",payload:e.date})},children:C(e.date.getDate())},e.date.getDate())}))})}))}),Object(p.jsx)("div",{className:N.a.divider}),Object(p.jsx)("div",{className:"row centered ".concat(N.a.footer),children:O.map((function(e){return Object(p.jsx)("span",{children:e[0]})}))}),Object(p.jsx)("div",{className:N.a.divider})]})}var C=a(30),D=a.n(C),T=a(9),S=a.n(T);function A(){var e=Object(s.c)((function(e){return e.popup})),t=Object(s.b)();return Object(p.jsx)("div",{className:"row centered ".concat(S.a.background),children:Object(p.jsxs)("div",{className:"column centered ".concat(S.a.popup),children:[Object(p.jsx)("div",{className:"row ".concat(S.a.header),children:Object(p.jsx)("div",{className:"row centered ".concat(S.a.yellowBox),onClick:function(){return t({type:"REMOVE_POPUP"})},children:Object(p.jsx)(D.a,{})})}),Object(p.jsxs)("div",{className:"row centered ".concat(S.a.wrapper),children:[Object(p.jsxs)("div",{className:"column centered ".concat(S.a.inputContainer),children:[Object(p.jsx)("span",{className:"row",children:"Month"}),Object(p.jsx)("input",{type:"text",defaultValue:["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]})]}),Object(p.jsxs)("div",{className:"column centered ".concat(S.a.inputContainer),children:[Object(p.jsx)("span",{className:"row",children:"Day"}),Object(p.jsx)("input",{type:"text",defaultValue:"".concat(e.getDate(),"th ").concat(["Sunday","Mounday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()])})]})]})]})})}var I=a(26),E=a.n(I);function L(){var e=Object(s.c)((function(e){return e.popup}));return Object(p.jsxs)("div",{className:"row centered ".concat(E.a.home),children:[e&&Object(p.jsx)(A,{}),Object(p.jsx)("main",{className:"column",style:{background:"url(".concat("/rdevs","/assets/background.png)")},children:Object(p.jsxs)("div",{className:"".concat(E.a.wrapper),children:[Object(p.jsxs)("h1",{children:["Choose the day ",Object(p.jsx)("br",{}),"for the meeting"]}),Object(p.jsxs)("p",{children:["We encourage you to book your",Object(p.jsx)("br",{})," appointment online.",Object(p.jsx)("br",{})," This will save you time."]})]})}),Object(p.jsx)("aside",{className:"column centered",children:Object(p.jsx)(k,{})})]})}var M=function(){var e=Object(s.c)((function(e){return e.tab}));return Object(p.jsxs)("div",{className:"App column",children:[Object(p.jsx)(j,{}),"about us"===e?Object(p.jsx)(O,{}):Object(p.jsx)(L,{})]})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,51)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),r(e),o(e)}))},B=a(17),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"about us",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_TAB":return t.payload;default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_POPUP":return t.payload;case"REMOVE_POPUP":return null;default:return e}},W=Object(B.a)({tab:F,popup:V}),U=Object(B.b)(W,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(s.a,{store:U,children:Object(p.jsx)(M,{})})}),document.getElementById("root")),P()},7:function(e,t,a){e.exports={calender:"calendar_calender__3Cxqv",divider:"calendar_divider__2SeaA",header:"calendar_header__3ylq4",icon:"calendar_icon__9UVH7",monthTitle:"calendar_monthTitle__2eULo",datesWrapper:"calendar_datesWrapper__3oZ2r",datesColumn:"calendar_datesColumn__104tn",dateItem:"calendar_dateItem__CFAdY",notActual:"calendar_notActual__BAALa",footer:"calendar_footer__22ZV4"}},9:function(e,t,a){e.exports={background:"popup_background__1v7EO",append:"popup_append__381WF",popup:"popup_popup__39MP_",header:"popup_header__1XVk-",yellowBox:"popup_yellowBox__UJ2xx",wrapper:"popup_wrapper__c2PYW",inputContainer:"popup_inputContainer__2OULp"}}},[[44,1,2]]]);
//# sourceMappingURL=main.8f8632a3.chunk.js.map