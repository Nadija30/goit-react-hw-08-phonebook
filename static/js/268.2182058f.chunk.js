"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[268],{268:function(e,a,n){n.r(a),n.d(a,{default:function(){return _}});var r=n(9439),t="LoginForm_container__YDFcb",o="LoginForm_form__gPEx5",s="LoginForm_input__aQRtt",l="LoginForm_label__F7sLE",c="LoginForm_button__LodJg",i=n(5568),m=n(2007),u=n(184),d=n(2791).useState,p=n(3531).useDispatch,h=function(){var e=d(""),a=(0,r.Z)(e,2),n=a[0],h=a[1],_=d(""),b=(0,r.Z)(_,2),f=b[0],g=b[1],w=p(),x=function(e){var a=e.currentTarget,n=a.name,r=a.value;switch(n){case"email":h(r);break;case"password":g(r)}};return(0,u.jsx)("div",{className:t,children:(0,u.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault();var a={email:n,password:f};console.log("logInUser",a),w((0,m.Ib)(a)).unwrap().then((function(e){i.Am.success("".concat(e.loginUser.name," welcome back!"))})).catch((function(){i.Am.failure("Incorrect login or password")})),h(""),g("")},children:[(0,u.jsxs)("label",{className:l,children:["Email",(0,u.jsx)("input",{className:s,type:"email",name:"email",value:n,pattern:"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/.",title:"Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com",required:!0,placeholder:"Enter email ...",onChange:x})]}),(0,u.jsxs)("label",{className:l,children:["Password",(0,u.jsx)("input",{className:s,type:"password",name:"password",value:f,pattern:"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",title:"Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct.",required:!0,placeholder:"Enter password ...",onChange:x})]}),(0,u.jsx)("button",{className:c,type:"submit",children:"LogIn"})]})})},_=function(){return(0,u.jsx)(h,{})}}}]);
//# sourceMappingURL=268.2182058f.chunk.js.map