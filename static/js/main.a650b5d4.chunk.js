(this.webpackJsonpwahnilogin=this.webpackJsonpwahnilogin||[]).push([[0],{105:function(e,t,n){},231:function(e,t,n){},232:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(2),i=n.n(c),a=n(93),r=n.n(a),o=(n(105),n(4)),l=n(46);n(106),n(108),n(234);l.a.apps.length||l.a.initializeApp({apiKey:"AIzaSyBSjXNfUFdgJn3qCJPG3qWd5WEBTBKCICU",authDomain:"wahnilogin.firebaseapp.com",projectId:"wahnilogin",storageBucket:"wahnilogin.appspot.com",messagingSenderId:"571694906479",appId:"1:571694906479:web:908412aa21b16453d7619a"});var u=l.a,j=n(45),d=n(18);n(56);var b=function(e){var t=e.user,n=e.logout,i=e.completeProfile,a=Object(c.useState)(),r=Object(o.a)(a,2),l=r[0],b=r[1],h=Object(c.useState)(!0),x=Object(o.a)(h,2),p=x[0],m=x[1];function O(e){m(!0),u.storage().ref("users/"+t.id+".jpg").put(e).then((function(e){u.storage().ref().child("users/"+t.id+".jpg").getDownloadURL().then((function(e){console.log(e),b(e),m(!1),u.auth().currentUser.updateProfile({photoURL:e})})).catch((function(e){alert(e),m(!1)}))})).catch((function(e){alert(e),m(!1)}))}return Object(c.useEffect)((function(){m(!0),null!==t.photoURL?b(t.photoURL):b("https://image.flaticon.com/icons/png/512/2922/2922532.png"),m(!1)}),[]),null===t.name||""===t.name?Object(s.jsx)("div",{className:"body",children:Object(s.jsx)("div",{className:"login-container loginresponsive profileContainer",children:Object(s.jsxs)("div",{className:"form",children:[Object(s.jsxs)("div",{className:"profileImageContainer",children:[p?Object(s.jsx)("img",{src:"https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",alt:""}):Object(s.jsx)("img",{src:l,alt:""}),Object(s.jsx)("input",{type:"file",title:"hello",id:"files",onChange:function(e){return O(e.target.files[0])}}),Object(s.jsx)("label",{for:"files",className:"labelForFile",children:"Edit Avatar"})]}),Object(s.jsxs)("div",{className:"profileDetailsContainer",children:[Object(s.jsx)("h2",{style:{alignSelf:"center"},children:"Complete Your Profile"}),Object(s.jsx)(j.a,{initialValues:{nameInput:""},onSubmit:function(e){return i(e.nameInput)},validationSchema:d.a().shape({nameInput:d.b().required("*this is a required field")}),children:function(e){var t=e.values,n=e.touched,c=e.errors,i=(e.dirty,e.isSubmitting,e.handleChange),a=e.handleBlur,r=e.handleSubmit;e.handleReset;return Object(s.jsxs)("form",{onSubmit:r,children:[Object(s.jsx)("div",{className:"labelClass",children:"Enter Name"}),Object(s.jsx)("input",{id:"nameInput",placeholder:"e.g. John",type:"text",value:t.nameInput,onChange:i,onBlur:a,className:c.nameInput&&n.nameInput?"text-input error":"text-input"}),Object(s.jsx)("div",{style:{marginLeft:"8%"},children:c.nameInput&&n.nameInput&&Object(s.jsx)("div",{className:"input-feedback",children:c.nameInput})}),Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"20px"},children:Object(s.jsx)("button",{type:"submit",className:"submitButton1",children:"SAVE PROFILE"})})]})}})]})]})})}):Object(s.jsx)("div",{className:"body",children:Object(s.jsx)("div",{className:"login-container loginresponsive profileContainer",children:Object(s.jsxs)("div",{className:"form",children:[Object(s.jsxs)("div",{className:"profileImageContainer",children:[p?Object(s.jsx)("img",{src:"https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",alt:""}):Object(s.jsx)("img",{src:l,alt:""}),Object(s.jsx)("input",{type:"file",title:"hello",id:"files",onChange:function(e){return O(e.target.files[0])}}),Object(s.jsx)("label",{for:"files",className:"labelForFile",children:"Edit Avatar"})]}),Object(s.jsx)("div",{className:"profileDetailsContainer",children:Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{className:"profileText",children:["Name: ",t.name]}),Object(s.jsxs)("p",{className:"profileText",children:["Phone No.: ",t.number]}),Object(s.jsx)("p",{className:"profileText",children:"No. of Attempts: "}),Object(s.jsx)("p",{className:"profileText",children:"Highest Score: "}),Object(s.jsx)("p",{className:"button1",type:"button",onClick:function(){return n()},children:"LOGOUT"})]})})]})})})},h=i.a.createContext({}),x=h.Provider;h.Consumer;function p(e){var t=Object(c.useState)({loggedIn:!1}),n=Object(o.a)(t,2),i=n[0],a=n[1];return Object(c.useEffect)((function(){var e=u.auth().onAuthStateChanged((function(e){a(e?{loggedIn:!0,email:e.email,name:e.displayName,id:e.uid,number:e.phoneNumber,photoURL:e.photoURL}:{loggedIn:!1})}));return function(){e()}}),[]),Object(s.jsx)(x,{value:i,children:e.children})}var m=n(6),O=n(99),v=n.n(O);n(91);var f=function(){Object(c.useEffect)((function(){v.a.get("https://ipapi.co/json/").then((function(e){var t=e.data;console.log("countryName: ".concat(t.country_name))})).catch((function(e){console.log(e)}))}),[]);var e=Object(c.useContext)(h),t=Object(c.useState)(""),n=Object(o.a)(t,2),i=(n[0],n[1]),a=Object(c.useState)(""),r=Object(o.a)(a,2),l=r[0],j=r[1],d=Object(m.g)(),x=function(){window.recaptchaVerifier=new u.auth.RecaptchaVerifier("recaptcha-container",{size:"normal",callback:function(e){console.log("recaptcha solved"),p()}})},p=function(e,t){x(),console.log(e);var n="+"+e,s=window.recaptchaVerifier;u.auth().signInWithPhoneNumber(n,s).then((function(e){console.log("get OTP initiated"),window.confirmationResult=e;var t=window.prompt("Enter OTP");e.confirm(t).then((function(e){alert("You are successfully signed In");var t=u.auth().currentUser;null===t.displayName&&""!==t.displayName||d.push("/Quiz"),i(""),j("")})).catch((function(e){alert(e),window.location.reload()}))})).catch((function(e){alert(e),window.location.reload()}))};return e.loggedIn?Object(s.jsx)("div",{children:Object(s.jsx)(b,{completeProfile:function(e){u.auth().currentUser.updateProfile({displayName:e}).then((function(){d.push("/Quiz"),window.location.reload()}))},user:e,logout:function(){u.auth().signOut(),console.log("loggedout")}})}):Object(s.jsxs)("div",{className:"body",children:[Object(s.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/2922/2922532.png",alt:""}),Object(s.jsx)("p",{className:"descriptionText"}),Object(s.jsx)("div",{className:"login-container loginresponsive",children:Object(s.jsxs)("form",{className:"form",onSubmit:function(e){return e.preventDefault()},children:[Object(s.jsx)("div",{className:"header",children:"L O G I N"}),Object(s.jsxs)("div",{className:"input-container",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("p",{className:"inputDescription",children:"Mobile Number"}),Object(s.jsx)("input",{value:l,onChange:function(e){return j(e.target.value)},type:"number",placeholder:"Country code + Number (e.g. 918456154658)",name:"mobile"})]}),Object(s.jsx)("p",{className:"button1",type:"button",onClick:function(){return p(l)},children:"SIGN IN"})]}),Object(s.jsx)("div",{id:"recaptcha-container"})]})})]})},g=n(12);n(231);var N=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("nav",{className:"navContainer",children:[Object(s.jsx)(g.b,{to:"/myAccount",className:"navLinks",children:"My Account"}),Object(s.jsx)(g.b,{to:"/Quiz",className:"navLinks",children:"Quiz"})]})})};var C=function(){return Object(c.useContext)(h),Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"WahniHome"})})},T=i.a.createContext({}),w=T.Provider;T.Consumer;function I(e){Object(c.useEffect)((function(){console.log("rendered")}),[]);var t=Object(c.useState)([{questionText:"What is the capital of France?",answerOptions:[{answerText:"New York",isCorrect:!1},{answerText:"London",isCorrect:!1},{answerText:"Paris",isCorrect:!0},{answerText:"Dublin",isCorrect:!1}]},{questionText:"Who is CEO of Tesla?",answerOptions:[{answerText:"Jeff Bezos",isCorrect:!1},{answerText:"Elon Musk",isCorrect:!0},{answerText:"Bill Gates",isCorrect:!1},{answerText:"Tony Stark",isCorrect:!1}]},{questionText:"The iPhone was created by which company?",answerOptions:[{answerText:"Apple",isCorrect:!0},{answerText:"Intel",isCorrect:!1},{answerText:"Amazon",isCorrect:!1},{answerText:"Microsoft",isCorrect:!1}]},{questionText:"How many Harry Potter books are there?",answerOptions:[{answerText:"1",isCorrect:!1},{answerText:"4",isCorrect:!1},{answerText:"6",isCorrect:!1},{answerText:"7",isCorrect:!0}]},{questionText:"How many Harry Potter books are there?",answerOptions:[{answerText:"1",isCorrect:!1},{answerText:"4",isCorrect:!1},{answerText:"6",isCorrect:!1},{answerText:"7",isCorrect:!0}]},{questionText:"What is the capital of France?",answerOptions:[{answerText:"New York",isCorrect:!1},{answerText:"London",isCorrect:!1},{answerText:"Paris",isCorrect:!0},{answerText:"Dublin",isCorrect:!1}]},{questionText:"Who is CEO of Tesla?",answerOptions:[{answerText:"Jeff Bezos",isCorrect:!1},{answerText:"Elon Musk",isCorrect:!0},{answerText:"Bill Gates",isCorrect:!1},{answerText:"Tony Stark",isCorrect:!1}]},{questionText:"The iPhone was created by which company?",answerOptions:[{answerText:"Apple",isCorrect:!0},{answerText:"Intel",isCorrect:!1},{answerText:"Amazon",isCorrect:!1},{answerText:"Microsoft",isCorrect:!1}]},{questionText:"How many Harry Potter books are there?",answerOptions:[{answerText:"1",isCorrect:!1},{answerText:"4",isCorrect:!1},{answerText:"6",isCorrect:!1},{answerText:"7",isCorrect:!0}]}]),n=Object(o.a)(t,2),i=n[0],a=n[1];return Object(s.jsx)(w,{value:[i,a],children:e.children})}n(92);var S=n(9);var y=function(e){var t=Object(c.useState)(30),n=Object(o.a)(t,2),i=n[0],a=n[1],r=e.timeOver,l=e.setTimeOver;Object(c.useEffect)((function(){var e=setInterval((function(){r||a((function(e){return e-1}))}),1e3);return setTimeout((function(){l(!0),a("TIME OUT")}),3e4),function(){return clearInterval(e)}}),[r]);var u=Object(c.useState)(!1),j=Object(o.a)(u,2);return j[0],j[1],Object(s.jsx)("div",{children:i})};var k=function(e){var t=e.currentQuestion,n=e.questions,i=e.prevQ,a=e.nextQ,r=e.submitQ,l=e.numberOfQ,u=Object(c.useState)([]),j=Object(o.a)(u,2),d=j[0],b=j[1],h=Object(c.useState)([]),x=Object(o.a)(h,2),p=x[0],m=x[1],O=Object(c.useState)(!1),v=Object(o.a)(O,2),f=v[0],g=v[1];function N(e,t){if(e===d[t])return"button-selected"}return f?Object(s.jsxs)("div",{className:"timeout",children:[Object(s.jsx)("div",{className:"score-header",children:"TIMEOUT !!!"}),Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"button1",onClick:function(){return r(p.filter((function(e){return!0===e})).length)},children:"Click to see Score"})})]}):Object(s.jsxs)("div",{className:"question-container",children:[Object(s.jsxs)("div",{className:"question-section",children:[Object(s.jsxs)("div",{className:"question-count-timer",children:[Object(s.jsxs)("div",{className:"question-count",children:[Object(s.jsxs)("span",{children:["Question ",t+1]}),"/ ",l]}),Object(s.jsx)("div",{className:"timer",children:Object(s.jsx)(y,{timeOver:f,setTimeOver:g})})]}),Object(s.jsx)("div",{className:"question-text",children:n.questionText})]}),Object(s.jsx)("div",{className:"answer-section",children:n.answerOptions.map((function(e){return Object(s.jsx)("button",{className:N(e.answerText,t),id:"answerButton",onClick:function(){!function(e,t,n){var s=Object(S.a)(d);s[t]=e,b(s);var c=Object(S.a)(p);c[t]=n,m(c)}(e.answerText,t,e.isCorrect),a()},children:e.answerText})}))}),Object(s.jsxs)("div",{className:"next-and-prev-buttonsContainer",children:[Object(s.jsx)("div",{className:"button1",onClick:i,children:"PREV"}),Object(s.jsx)("div",{className:"button1",onClick:a,children:"Pass"})]}),Object(s.jsx)("div",{className:"submitButtonContainer",children:Object(s.jsx)("div",{className:"submitButton",onClick:function(){return r(p.filter((function(e){return!0===e})).length)},children:"Submit"})})]})};var q=function(){var e=Object(c.useContext)(h),t=Object(c.useContext)(T),n=Object(o.a)(t,2),i=n[0],a=(n[1],Object(c.useState)(0)),r=Object(o.a)(a,2),l=r[0],u=r[1],j=Object(c.useState)(!1),d=Object(o.a)(j,2),b=d[0],x=d[1],p=Object(c.useState)(!0),O=Object(o.a)(p,2),v=O[0],f=O[1],N=(Math.floor(Math.random()*i.length),Object(c.useState)(0)),C=Object(o.a)(N,2),w=C[0],I=C[1],S=Object(c.useState)(""),y=Object(o.a)(S,2),q=y[0],A=y[1];return Object(c.useEffect)((function(){var e=i.sort((function(){return.5-Math.random()})).slice(0,5);A(e),f(!1)}),[]),e?e&&!v?Object(s.jsx)("div",{className:"appContainer",children:b?Object(s.jsxs)("div",{className:"app score",children:[Object(s.jsx)("div",{className:"score-header",children:"Congratulations !!!"}),Object(s.jsxs)("div",{className:"score-message",children:["You scored ",w," out of ",q.length]}),Object(s.jsx)("div",{children:Object(s.jsx)(g.b,{className:"link button1",to:"/Quiz",children:"Retry"})})]}):Object(s.jsx)("div",{className:"app",children:Object(s.jsx)(k,{currentQuestion:l,questions:q[l],prevQ:function(){l>0&&u(l-1)},nextQ:function(){var e=l+1;e<q.length&&u(e)},submitQ:function(e){x(!0),I(e)},numberOfQ:q.length})})}):e&&v?Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Loading........."})}):void 0:Object(s.jsx)(m.a,{to:"/myAccount"})};var A=function(){var e=Object(c.useContext)(h);return Object(s.jsx)("div",{className:"appContainer",children:Object(s.jsxs)("div",{className:"quizScreenContainer",children:[Object(s.jsxs)(g.b,{className:"quizNavContainer link",to:"/Quiz/play",children:[Object(s.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/27/27223.png",alt:""}),Object(s.jsx)("div",{className:"quizScreenText",children:"PLAY"})]}),"zOOj1gwSb7WQA7dwMBgW2EYJOk52"===e.id?Object(s.jsxs)(g.b,{className:"quizNavContainer link",to:"/Quiz/add",children:[Object(s.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/57/57108.png",alt:""}),Object(s.jsx)("div",{className:"quizScreenText",children:"QUESTIONS"})]}):Object(s.jsx)("div",{}),Object(s.jsxs)(g.b,{className:"quizNavContainer link",to:"/Quiz/ranking",children:[Object(s.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/13/13815.png",alt:""}),Object(s.jsx)("div",{className:"quizScreenText",children:"RANKINGS"})]})]})})};n(232);var B=function(){var e=[{userid:"11111",username:"AAAAA",scores:[{submittedAt:1,score:"5",percentageIncrease:"25"},{submittedAt:2,score:"10",percentageIncrease:"50"}]},{userid:"22222",username:"BBBBB",scores:[{submittedAt:1,score:"45",percentageIncrease:"56"},{submittedAt:2,score:"5",percentageIncrease:"45"}]},{userid:"33333",username:"CCCCC",scores:[{submittedAt:1,score:"23",percentageIncrease:"45"},{submittedAt:2,score:"56",percentageIncrease:"13"}]},{userid:"44444",username:"DDDDD",scores:[{submittedAt:1,score:"55",percentageIncrease:"12"},{submittedAt:2,score:"8",percentageIncrease:"16"}]},{userid:"55555",username:"EEEEE",scores:[{submittedAt:1,score:"63",percentageIncrease:"32"},{submittedAt:2,score:"80",percentageIncrease:"60"}]}],t=Object(c.useState)(!1),n=Object(o.a)(t,2),i=n[0],a=n[1],r=Object(c.useState)(!1),l=Object(o.a)(r,2),u=l[0],j=l[1],d=Object(c.useState)(!1),b=Object(o.a)(d,2),h=b[0],x=b[1],p=Object(c.useState)([]),m=Object(o.a)(p,2),O=m[0],v=m[1],f=Object(c.useState)([]),g=Object(o.a)(f,2),N=g[0],C=g[1],T=Object(c.useState)([]),w=Object(o.a)(T,2),I=w[0],S=w[1],y=u?"login-container loginresponsive":"login-container loginresponsive hide-login",k=u?"header":"header headerHover",q=u?"rankTable":"rankTable hide-section",A=i?"login-container loginresponsive":"login-container loginresponsive hide-login",B=i?"header":"header headerHover",E=i?"rankTable":"rankTable hide-section",D=h?"login-container loginresponsive":"login-container loginresponsive hide-login",Q=h?"header":"header headerHover",P=h?"rankTable":"rankTable hide-section";return Object(s.jsxs)("div",{className:"body",children:[Object(s.jsx)("div",{className:y,children:Object(s.jsxs)("div",{className:"form",children:[Object(s.jsx)("div",{className:k,onClick:function(t){j(!0),a(!1),x(!1),function(){var t=[];e.map((function(e){e.scores.map((function(n){t.push({name:e.username,score:n.score})}))})),v(t.sort((function(e,t){return parseInt(t.score)>parseInt(e.score)?1:-1})))}()},children:"TOP SCORES"}),Object(s.jsxs)("div",{className:q,children:[Object(s.jsxs)("div",{className:"singleInputContainer headContainer",children:[Object(s.jsx)("div",{className:"rankText text",children:"Rank"}),Object(s.jsx)("div",{className:"nameText text",children:"Name"}),Object(s.jsx)("div",{className:"scoreText text",children:"Score"})]}),O.slice(0,5).map((function(e,t){return Object(s.jsxs)("div",{className:"singleInputContainer",children:[Object(s.jsx)("div",{className:"rankText text",children:t+1}),Object(s.jsx)("div",{className:"nameText text",children:e.name}),Object(s.jsx)("div",{className:"scoreText text",children:e.score})]})}))]})]})}),Object(s.jsx)("div",{className:A,children:Object(s.jsxs)("div",{className:"form",children:[Object(s.jsx)("div",{className:B,onClick:function(t){j(!1),x(!1),a(!0),function(){var t=[];e.map((function(e){return t.push({name:e.username,attempts:e.scores.length})})),C(t.sort((function(e,t){return parseInt(t.attempts)>parseInt(e.attempts)?1:-1})))}()},children:"MOST ATTEMPTS"}),Object(s.jsxs)("div",{className:E,children:[Object(s.jsxs)("div",{className:"singleInputContainer headContainer",children:[Object(s.jsx)("div",{className:"rankText text",children:"Rank"}),Object(s.jsx)("div",{className:"nameText text",children:"Name"}),Object(s.jsx)("div",{className:"scoreText text",children:"Attempts"})]}),N.slice(0,5).map((function(e,t){return Object(s.jsxs)("div",{className:"singleInputContainer",children:[Object(s.jsx)("div",{className:"rankText text",children:t+1}),Object(s.jsx)("div",{className:"nameText text",children:e.name}),Object(s.jsx)("div",{className:"scoreText text",children:e.attempts})]})}))]})]})}),Object(s.jsx)("div",{className:D,children:Object(s.jsxs)("div",{className:"form",children:[Object(s.jsx)("div",{className:Q,onClick:function(t){j(!1),x(!0),a(!1),function(){var t=[];e.map((function(e){e.scores.map((function(n){t.push({name:e.username,percentage:n.percentageIncrease})}))})),S(t.sort((function(e,t){return parseInt(t.percentage)>parseInt(e.percentage)?1:-1})))}()},children:"TOP PERFORMERS"}),Object(s.jsxs)("div",{className:P,children:[Object(s.jsxs)("div",{className:"singleInputContainer headContainer",children:[Object(s.jsx)("div",{className:"rankText text",children:"Rank"}),Object(s.jsx)("div",{className:"nameText text",children:"Name"}),Object(s.jsx)("div",{className:"scoreText text",children:"Improvement"})]}),I.slice(0,5).map((function(e,t){return Object(s.jsxs)("div",{className:"singleInputContainer",children:[Object(s.jsx)("div",{className:"rankText text",children:t+1}),Object(s.jsx)("div",{className:"nameText text",children:e.name}),Object(s.jsx)("div",{className:"scoreText text",children:e.percentage})]})}))]})]})})]})};var E=function(e){var t=e.questions,n=function(e){return e?"bold":"normal"};function c(e){var t=e.answers;return Object(s.jsx)("div",{children:t?t.map((function(e,t){return Object(s.jsx)("span",{children:Object(s.jsx)("p",{style:{color:(c=e.isCorrect,c?"green":"black"),fontWeight:n(e.isCorrect)},children:e.answerText})});var c})):Object(s.jsx)("div",{})})}function i(){return Object(s.jsx)("div",{className:"questonsSubMainDiv",children:t?t.map((function(e,t){return Object(s.jsxs)("div",{className:"insideQuestionsView",children:[Object(s.jsxs)("p",{style:{fontWeight:"bold"},children:["Q : ",e.questionText]}),Object(s.jsx)(c,{answers:e.answerOptions})]})})):Object(s.jsx)("div",{})})}return Object(s.jsxs)("div",{className:"questionsView",children:[Object(s.jsx)(i,{}),Object(s.jsx)("hr",{})]})};var D=function(){var e=Object(c.useContext)(h),t=Object(c.useContext)(T),n=Object(o.a)(t,2),i=n[0],a=n[1];return e?"zOOj1gwSb7WQA7dwMBgW2EYJOk52"!==e.id?Object(s.jsx)("h1",{children:"You are not AUTHORIZED"}):Object(s.jsxs)("div",{className:"AdminAppContainer",children:[Object(s.jsx)("div",{className:"questionsMainDiv",children:Object(s.jsx)(E,{questions:i})}),Object(s.jsxs)("div",{className:"formDiv",children:[Object(s.jsx)("p",{className:"formHeader",children:"ADD QUESTIONS"}),Object(s.jsx)(j.a,{initialValues:{questionInput:"",optionA:"",optionB:"",optionC:"",optionD:"",correct:""},onSubmit:function(e){return function(e){var t=function(t){return e.correct===t},n={questionText:"".concat(e.questionInput),answerOptions:[{answerText:"".concat(e.optionA),isCorrect:t("A")},{answerText:"".concat(e.optionB),isCorrect:t("B")},{answerText:"".concat(e.optionC),isCorrect:t("C")},{answerText:"".concat(e.optionD),isCorrect:t("D")}]},s=[].concat(Object(S.a)(i),[n]);console.log(s),a(s)}(e)},validationSchema:d.a().shape({questionInput:d.b().required("*this is a required field"),optionA:d.b().required("*this is a required field"),optionB:d.b().required("*this is a required field"),optionC:d.b().required("*this is a required field"),optionD:d.b().required("*this is a required field"),correct:d.b().required("*choose one option").min(1)}),children:function(e){var t=e.values,n=e.touched,c=e.errors,i=(e.dirty,e.isSubmitting,e.handleChange),a=e.handleBlur,r=e.handleSubmit;e.handleReset;return Object(s.jsxs)("form",{onSubmit:r,children:[Object(s.jsx)("input",{id:"questionInput",placeholder:"Enter the Question",type:"text",value:t.questionInput,onChange:i,onBlur:a,className:c.questionInput&&n.questionInput?"text-input error":"text-input"}),c.questionInput&&n.questionInput&&Object(s.jsx)("div",{className:"input-feedback",children:c.questionInput}),Object(s.jsx)("label",{htmlFor:"optionA",className:"labelHeader",children:"Option A"}),Object(s.jsx)("input",{id:"optionA",placeholder:"Enter option",type:"text",value:t.optionA,onChange:i,onBlur:a}),c.optionA&&n.optionA&&Object(s.jsx)("div",{className:"input-feedback",children:c.optionA}),Object(s.jsx)("label",{htmlFor:"optionB",className:"labelHeader",children:"Option B"}),Object(s.jsx)("input",{id:"optionB",placeholder:"Enter Option",type:"text",value:t.optionB,onChange:i,onBlur:a}),c.optionB&&n.optionB&&Object(s.jsx)("div",{className:"input-feedback",children:c.optionB}),Object(s.jsx)("label",{htmlFor:"optionC",className:"labelHeader",children:"Option C"}),Object(s.jsx)("input",{id:"optionC",placeholder:"Enter option",type:"text",value:t.optionC,onChange:i,onBlur:a}),c.optionC&&n.optionC&&Object(s.jsx)("div",{className:"input-feedback",children:c.optionC}),Object(s.jsx)("label",{htmlFor:"optionD",className:"labelHeader",children:"Option D"}),Object(s.jsx)("input",{id:"optionD",placeholder:"Enter Option",type:"text",value:t.optionD,onChange:i,onBlur:a}),c.optionD&&n.optionD&&Object(s.jsx)("div",{className:"input-feedback",children:c.optionD}),Object(s.jsxs)("select",{name:"correct",value:t.correct,onChange:i,onBlur:a,style:{display:"block"},className:"selector",children:[Object(s.jsx)("option",{value:"",label:"Choose the Right option"}),Object(s.jsx)("option",{value:"A",label:"A"}),Object(s.jsx)("option",{value:"B",label:"B"}),Object(s.jsx)("option",{value:"C",label:"C"}),Object(s.jsx)("option",{value:"D",label:"D"})]}),c.correct&&n.correct&&Object(s.jsx)("div",{className:"input-feedback",children:c.correct}),Object(s.jsx)("button",{type:"submit",className:"submitButton1",children:"Submit"})]})}})]})]}):Object(s.jsx)(m.a,{to:"/myAccount"})};var Q=function(){return Object(s.jsxs)(g.a,{children:[Object(s.jsx)(N,{}),Object(s.jsx)(m.d,{children:Object(s.jsxs)(p,{children:[Object(s.jsx)(m.b,{exact:!0,path:"/",component:C}),Object(s.jsx)(m.b,{exact:!0,path:"/myAccount",component:f}),Object(s.jsx)(m.b,{exact:!0,path:"/Quiz",component:A}),Object(s.jsxs)(I,{children:[Object(s.jsx)(m.b,{exact:!0,path:"/Quiz/play",component:q}),Object(s.jsx)(m.b,{exact:!0,path:"/Quiz/add",component:D})]}),Object(s.jsx)(m.b,{exact:!0,path:"/Quiz/ranking",component:B})]})})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,235)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),i(e),a(e)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(Q,{})}),document.getElementById("root")),P()},56:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){}},[[233,1,2]]]);
//# sourceMappingURL=main.a650b5d4.chunk.js.map