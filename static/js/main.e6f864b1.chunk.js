(this.webpackJsonpwahnilogin=this.webpackJsonpwahnilogin||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),r=n(15),o=n.n(r),a=(n(22),n(6)),j=(n(23),n(8));var l=function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),n=t[0],i=t[1],r=Object(s.useState)(!1),o=Object(a.a)(r,2),l=o[0],u=o[1],b=l?"login-container loginresponsive":"login-container loginresponsive hide-login",d=l?"header":"header headerHover",x=l?"input-container":"input-container hide-section",h=n?"login-container loginresponsive":"login-container loginresponsive hide-login",O=n?"header":"header headerHover",p=n?"input-container":"input-container hide-section";return Object(c.jsxs)("div",{className:"body",children:[Object(c.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/2922/2922532.png",alt:""}),Object(c.jsx)("p",{className:"descriptionText"}),Object(c.jsx)("div",{className:b,children:Object(c.jsxs)("form",{className:"form",children:[Object(c.jsx)("div",{className:d,onClick:function(e){u(!0),i(!1)},children:"R E G I S T E R"}),Object(c.jsxs)("div",{className:x,children:[Object(c.jsx)("p",{children:Object(c.jsx)("input",{type:"text",placeholder:"Name",name:"name"})}),Object(c.jsx)("p",{children:Object(c.jsx)("input",{type:"number",placeholder:"Mobile Number",name:"mobile"})}),Object(c.jsx)("p",{className:"button1",children:"SIGN UP"})]})]})}),Object(c.jsx)("p",{className:"descriptionText",children:"Already have an Account ?"}),Object(c.jsx)("div",{className:h,children:Object(c.jsxs)("form",{className:"form",children:[Object(c.jsx)("div",{className:O,onClick:function(e){u(!1),i(!0)},children:"L O G I N"}),Object(c.jsxs)("div",{className:p,children:[Object(c.jsx)("p",{children:Object(c.jsx)("input",{type:"number",placeholder:"Mobile number",name:"mobile"})}),Object(c.jsx)("p",{children:Object(c.jsx)("input",{type:"password",placeholder:"Enter OTP",name:"otp"})}),Object(c.jsx)("p",{className:"button1",children:"SIGN IN"})]}),Object(c.jsx)("div",{onClick:function(){return console.log(5)},children:"Hello"}),Object(c.jsx)(j.b,{to:"/goto",className:"brand-logo left",children:"NE Plan"})]})})]})},u=n(2);n(32);var b=function(){return Object(c.jsxs)("nav",{className:"navContainer",children:[Object(c.jsx)(j.b,{to:"/myAccount",className:"navLinks",children:"My Account"}),Object(c.jsx)(j.b,{to:"/Quiz",className:"navLinks",children:"Quiz"})]})};var d=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"WahniHome"})})};n(33);var x=function(e){var t=Object(s.useState)(30),n=Object(a.a)(t,2),i=n[0],r=n[1],o=Object(s.useState)(!1),j=Object(a.a)(o,2),l=j[0],u=j[1];Object(s.useEffect)((function(){var t=setInterval((function(){l?(r("TIME OUT"),e.setShowScore(!0)):r((function(e){return e-1}))}),1e3);return setTimeout((function(){u(!0),console.log("timeout set")}),3e4),function(){return clearInterval(t)}}),[l]);var b=Object(s.useState)(!1),d=Object(a.a)(b,2);return d[0],d[1],Object(c.jsx)("div",{children:i})};var h=function(e){var t=e.currentQuestion,n=e.questions,s=e.prevQ,i=e.nextQ,r=e.handleAnswerOptionClick;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"question-section",children:[Object(c.jsxs)("div",{className:"question-count",children:[Object(c.jsxs)("span",{children:["Question ",t+1]}),"/5"]}),Object(c.jsx)("div",{className:"question-text",children:n.questionText})]}),Object(c.jsx)("div",{className:"answer-section",children:n.answerOptions.map((function(e){return Object(c.jsx)("button",{onClick:function(){return r(e.isCorrect)},children:e.answerText})}))}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{onClick:s,children:"Go back"}),Object(c.jsx)("div",{onClick:i,children:"Next"})]})]})};var O=function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),n=t[0],i=t[1],r=Object(s.useState)(0),o=Object(a.a)(r,2),j=o[0],l=o[1],u=Object(s.useState)(!1),b=Object(a.a)(u,2),d=b[0],O=b[1],p=Object(s.useState)(0),m=Object(a.a)(p,2),v=m[0],f=m[1],w=[{questionText:"What is the capital of France?",answerOptions:[{answerText:"New York",isCorrect:!1},{answerText:"London",isCorrect:!1},{answerText:"Paris",isCorrect:!0},{answerText:"Dublin",isCorrect:!1}]},{questionText:"Who is CEO of Tesla?",answerOptions:[{answerText:"Jeff Bezos",isCorrect:!1},{answerText:"Elon Musk",isCorrect:!0},{answerText:"Bill Gates",isCorrect:!1},{answerText:"Tony Stark",isCorrect:!1}]},{questionText:"The iPhone was created by which company?",answerOptions:[{answerText:"Apple",isCorrect:!0},{answerText:"Intel",isCorrect:!1},{answerText:"Amazon",isCorrect:!1},{answerText:"Microsoft",isCorrect:!1}]},{questionText:"How many Harry Potter books are there?",answerOptions:[{answerText:"1",isCorrect:!1},{answerText:"4",isCorrect:!1},{answerText:"6",isCorrect:!1},{answerText:"7",isCorrect:!0}]}];return n?Object(c.jsxs)("div",{className:"app",children:[d?Object(c.jsxs)("div",{className:"score-section",children:["You scored ",v," out of ",w.length]}):Object(c.jsx)("div",{children:Object(c.jsx)(h,{currentQuestion:j,questions:w[j],handleAnswerOptionClick:function(e){e&&f(v+1);var t=j+1;t<w.length?l(t):O(!0)},prevQ:function(){j>0&&l(j-1)},nextQ:function(){var e=j+1;e<w.length?l(e):O(!0)}})}),Object(c.jsx)(x,{setShowScore:O,showScore:d})]}):Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return i(!0)},children:"START"}),Object(c.jsx)("button",{children:"RANKINGS"})]})};var p=function(){return Object(c.jsxs)(j.a,{children:[Object(c.jsx)(b,{}),Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/",component:d}),Object(c.jsx)(u.a,{exact:!0,path:"/myAccount",component:l}),Object(c.jsx)(u.a,{exact:!0,path:"/Quiz",component:O})]})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),m()}},[[34,1,2]]]);
//# sourceMappingURL=main.e6f864b1.chunk.js.map