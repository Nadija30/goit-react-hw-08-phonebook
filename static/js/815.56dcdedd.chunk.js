"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[815],{2815:function(e,a,t){t.r(a),t.d(a,{default:function(){return m}});var n=t(9439),r=t(2791),s=t(3531),o=t(5568),l=t(2007),c=t(184),i=function(){var e=(0,r.useState)(""),a=(0,n.Z)(e,2),t=a[0],i=a[1],m=(0,r.useState)(""),u=(0,n.Z)(m,2),d=u[0],p=u[1],h=(0,r.useState)(""),w=(0,n.Z)(h,2),f=w[0],b=w[1],x=(0,s.useDispatch)(),A=function(e){var a=e.currentTarget,t=a.name,n=a.value;switch(t){case"name":i(n);break;case"email":p(n);break;case"password":b(n)}};return(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a={name:t,email:d,password:f};console.log("newUser",a),x((0,l.z2)(a)).unwrap().then((function(e){o.Am.success("".concat(e.newUser.name," welcome!"))})).catch((function(){o.Am.failure("Sorry, something's wrong")})),i(""),p(""),b("")},children:[(0,c.jsxs)("label",{children:["Name",(0,c.jsx)("input",{type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name ...",onChange:A})]}),(0,c.jsxs)("label",{children:["Email",(0,c.jsx)("input",{type:"email",name:"email",value:d,pattern:"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/.",title:"Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com",required:!0,placeholder:"Enter email ...",onChange:A})]}),(0,c.jsxs)("label",{children:["Password",(0,c.jsx)("input",{type:"password",name:"password",value:f,pattern:"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",title:"Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct.",required:!0,placeholder:"Enter password ...",onChange:A})]}),(0,c.jsx)("button",{type:"submit",children:"Register"})]})},m=function(){return(0,c.jsx)(i,{})}}}]);
//# sourceMappingURL=815.56dcdedd.chunk.js.map