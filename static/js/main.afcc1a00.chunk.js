(this.webpackJsonpwahnilogin=this.webpackJsonpwahnilogin||[]).push([[0],{18:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),r=n(19),a=n.n(r),o=(n(26),n(3)),j=i.a.createContext({}),b=j.Provider;j.Consumer;function l(e){var t=Object(s.useState)({loggedIn:!1}),n=Object(o.a)(t,2),i=n[0],r=(n[1],Object(s.useState)("")),a=Object(o.a)(r,2);a[0],a[1];return Object(c.jsx)(b,{value:i,children:e.children})}n(27);var u=function(){Object(s.useContext)(j);var e=Object(s.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(s.useState)(!1),a=Object(o.a)(r,2),b=a[0],l=a[1],u=b?"login-container loginresponsive":"login-container loginresponsive hide-login",O=b?"header":"header headerHover",d=b?"input-container":"input-container hide-section",x=n?"login-container loginresponsive":"login-container loginresponsive hide-login",h=n?"header":"header headerHover",m=n?"input-container":"input-container hide-section";return Object(c.jsxs)("div",{className:"body",children:[Object(c.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/2922/2922532.png",alt:""}),Object(c.jsx)("p",{className:"descriptionText"}),Object(c.jsx)("div",{className:u,children:Object(c.jsxs)("form",{className:"form",children:[Object(c.jsx)("div",{className:O,onClick:function(e){l(!0),i(!1)},children:"R E G I S T E R"}),Object(c.jsxs)("div",{className:d,children:[Object(c.jsx)("p",{children:Object(c.jsx)("input",{type:"text",placeholder:"Name",name:"name"})}),Object(c.jsx)("p",{children:Object(c.jsx)("input",{type:"number",placeholder:"Mobile Number",name:"mobile"})}),Object(c.jsx)("p",{className:"button1",children:"SIGN UP"})]})]})}),Object(c.jsx)("p",{className:"descriptionText",children:"Already have an Account ?"}),Object(c.jsx)("div",{className:x,children:Object(c.jsxs)("form",{className:"form",children:[Object(c.jsx)("div",{className:h,onClick:function(e){l(!1),i(!0)},children:"L O G I N"}),Object(c.jsxs)("div",{className:m,children:[Object(c.jsx)("p",{children:Object(c.jsx)("input",{type:"number",placeholder:"Mobile number",name:"mobile"})}),Object(c.jsx)("p",{children:Object(c.jsx)("input",{type:"password",placeholder:"Enter OTP",name:"otp"})}),Object(c.jsx)("p",{className:"button1",children:"SIGN IN"})]})]})})]})},O=n(8),d=n(2);n(28);var x=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("nav",{className:"navContainer",children:[Object(c.jsx)(O.b,{to:"/myAccount",className:"navLinks",children:"My Account"}),Object(c.jsx)(O.b,{to:"/Quiz",className:"navLinks",children:"Quiz"})]})})};var h=function(){var e=Object(s.useContext)(j);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"WahniHome"}),Object(c.jsx)("h1",{children:e.mobile})]})},m=(n(18),n(17));var v=function(e){var t=Object(s.useState)(30),n=Object(o.a)(t,2),i=n[0],r=n[1],a=e.timeOver,j=e.setTimeOver;Object(s.useEffect)((function(){var e=setInterval((function(){a||r((function(e){return e-1}))}),1e3);return setTimeout((function(){j(!0),r("TIME OUT")}),3e4),function(){return clearInterval(e)}}),[a]);var b=Object(s.useState)(!1),l=Object(o.a)(b,2);return l[0],l[1],Object(c.jsx)("div",{children:i})};var p=function(e){var t=e.currentQuestion,n=e.questions,i=e.prevQ,r=e.nextQ,a=e.submitQ,j=e.numberOfQ,b=Object(s.useState)([]),l=Object(o.a)(b,2),u=l[0],O=l[1],d=Object(s.useState)([]),x=Object(o.a)(d,2),h=x[0],p=x[1],f=Object(s.useState)(!1),T=Object(o.a)(f,2),N=T[0],C=T[1];function w(e,t){if(e===u[t])return"button-selected"}return N?Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:"TIMEOUT"}),Object(c.jsx)("div",{onClick:function(){return a(h.filter((function(e){return!0===e})).length,"TIMEOUT")},children:"Click to see Score"})]}):Object(c.jsxs)("div",{className:"question-container",children:[Object(c.jsxs)("div",{className:"question-section",children:[Object(c.jsxs)("div",{className:"question-count-timer",children:[Object(c.jsxs)("div",{className:"question-count",children:[Object(c.jsxs)("span",{children:["Question ",t+1]}),"/ ",j]}),Object(c.jsx)("div",{className:"timer",children:Object(c.jsx)(v,{timeOver:N,setTimeOver:C})})]}),Object(c.jsx)("div",{className:"question-text",children:n.questionText})]}),Object(c.jsx)("div",{className:"answer-section",children:n.answerOptions.map((function(e){return Object(c.jsx)("button",{className:w(e.answerText,t),id:"answerButton",onClick:function(){!function(e,t,n){var c=Object(m.a)(u);c[t]=e,O(c);var s=Object(m.a)(h);s[t]=n,p(s)}(e.answerText,t,e.isCorrect)},children:e.answerText})}))}),Object(c.jsx)("div",{className:"submitButtonContainer",children:Object(c.jsx)("div",{className:"submitButton",onClick:function(){return a(h.filter((function(e){return!0===e})).length,"Congatulations")},children:"Submit"})}),Object(c.jsxs)("div",{className:"buttonsContainer",children:[Object(c.jsx)("div",{className:"button1",onClick:i,children:"Go back"}),Object(c.jsx)("div",{className:"button1",onClick:r,children:"Next"})]})]})};var f=function(){var e=Object(s.useContext)(j),t=Object(s.useState)(!1),n=Object(o.a)(t,2),i=(n[0],n[1],Object(s.useState)(0)),r=Object(o.a)(i,2),a=r[0],b=r[1],l=Object(s.useState)(!1),u=Object(o.a)(l,2),x=u[0],h=u[1],m=Object(s.useState)(0),v=Object(o.a)(m,2),f=v[0],T=v[1],N=Object(s.useState)(""),C=Object(o.a)(N,2),w=C[0],g=C[1],S=Object(s.useState)([!1,!1,!1,!1,!1]),k=Object(o.a)(S,2),y=(k[0],k[1],[{questionText:"What is the capital of France?",answerOptions:[{answerText:"New York",isCorrect:!1},{answerText:"London",isCorrect:!1},{answerText:"Paris",isCorrect:!0},{answerText:"Dublin",isCorrect:!1}]},{questionText:"Who is CEO of Tesla?",answerOptions:[{answerText:"Jeff Bezos",isCorrect:!1},{answerText:"Elon Musk",isCorrect:!0},{answerText:"Bill Gates",isCorrect:!1},{answerText:"Tony Stark",isCorrect:!1}]},{questionText:"The iPhone was created by which company?",answerOptions:[{answerText:"Apple",isCorrect:!0},{answerText:"Intel",isCorrect:!1},{answerText:"Amazon",isCorrect:!1},{answerText:"Microsoft",isCorrect:!1}]},{questionText:"How many Harry Potter books are there?",answerOptions:[{answerText:"1",isCorrect:!1},{answerText:"4",isCorrect:!1},{answerText:"6",isCorrect:!1},{answerText:"7",isCorrect:!0}]}]);return e?e?Object(c.jsx)("div",{className:"appContainer",children:x?Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)("div",{className:"score-section",children:[Object(c.jsx)("div",{children:w}),"You scored ",f," out of ",y.length,Object(c.jsx)(O.b,{to:"/Quiz",children:"Retry"})]})}):Object(c.jsx)("div",{className:"app",children:Object(c.jsx)(p,{currentQuestion:a,questions:y[a],prevQ:function(){a>0&&b(a-1)},nextQ:function(){var e=a+1;e<y.length&&b(e)},submitQ:function(e,t){h(!0),T(e),g(t)},numberOfQ:y.length})})}):void 0:Object(c.jsx)(d.a,{to:"/myAccount"})};var T=function(){return Object(s.useContext)(j)?Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{children:Object(c.jsx)(O.b,{to:"/Quiz/play",children:"START"})}),Object(c.jsx)("button",{children:Object(c.jsx)(O.b,{to:"/Quiz/ranking",children:"Ranking"})})]}):Object(c.jsx)(d.a,{to:"/myAccount"})};var N=function(){return Object(c.jsx)("div",{children:"Ranking"})};var C=function(){return Object(c.jsxs)(O.a,{children:[Object(c.jsx)(x,{}),Object(c.jsx)(d.d,{children:Object(c.jsxs)(l,{children:[Object(c.jsx)(d.b,{exact:!0,path:"/",component:h}),Object(c.jsx)(d.b,{exact:!0,path:"/myAccount",component:u}),Object(c.jsx)(d.b,{exact:!0,path:"/Quiz",component:T}),Object(c.jsx)(d.b,{exact:!0,path:"/Quiz/play",component:f}),Object(c.jsx)(d.b,{exact:!0,path:"/Quiz/ranking",component:N})]})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),w()}},[[37,1,2]]]);
//# sourceMappingURL=main.afcc1a00.chunk.js.map