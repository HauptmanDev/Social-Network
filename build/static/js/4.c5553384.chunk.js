(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{226:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return a});var r=function(t){if(!t)return"Field is required"},a=function(t){return function(e){if(e.length>t)return"Max length is ".concat(t," symbols")}}},227:function(t,e,n){t.exports={formControl:"FormsControls_formControl__2LJCa",error:"FormsControls_error__2DZj0",formSummaryError:"FormsControls_formSummaryError__1xWbY"}},228:function(t,e,n){"use strict";n.d(e,"b",function(){return l}),n.d(e,"a",function(){return p}),n.d(e,"c",function(){return m});var r=n(229),a=n(0),o=n.n(a),u=n(227),s=n.n(u),i=n(109),c=(n(226),function(t){t.input;var e=t.meta,n=e.touched,a=e.error,u=t.children,i=(Object(r.a)(t,["input","meta","children"]),n&&a);return o.a.createElement("div",{className:s.a.formControl+" "+(i?s.a.error:"")},o.a.createElement("div",null,u),i&&o.a.createElement("span",null,a))}),l=function(t){var e=t.input,n=(t.meta,t.child,Object(r.a)(t,["input","meta","child"]));return o.a.createElement(c,t,o.a.createElement("textarea",Object.assign({},e,n)))},p=function(t){var e=t.input,n=(t.meta,t.child,Object(r.a)(t,["input","meta","child"]));return o.a.createElement(c,t,o.a.createElement("input",Object.assign({},e,n)))},m=function(t,e,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:t,name:e,component:n,validate:r},a)),u)}},235:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var r=n(32),a=n(33),o=n(35),u=n(34),s=n(36),i=n(0),c=n.n(i),l=n(22),p=n(25),m=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var e=function(e){function n(){return Object(r.a)(this,n),Object(o.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(t,this.props):c.a.createElement(l.a,{to:"/login"})}}]),n}(c.a.Component);return Object(p.b)(m)(e)}},237:function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var u,s=t[Symbol.iterator]();!(r=(u=s.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(e,"a",function(){return r})},251:function(t,e,n){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1rbtZ"}},252:function(t,e,n){t.exports={postsBlock:"MyPosts_postsBlock__2Xoou",posts:"MyPosts_posts__3Xc0w"}},253:function(t,e,n){t.exports={item:"Post_item__1eevD"}},299:function(t,e,n){"use strict";n.r(e);var r=n(32),a=n(33),o=n(35),u=n(34),s=n(36),i=n(0),c=n.n(i),l=n(251),p=n.n(l),m=n(38),f=(c.a.Component,n(237)),d=function(t){var e=Object(i.useState)(!0),n=Object(f.a)(e,2),r=n[0],a=n[1],o=Object(i.useState)(t.status),u=Object(f.a)(o,2),s=u[0],l=u[1];Object(i.useEffect)(function(){l(t.status)},[t.status]);return c.a.createElement(c.a.Fragment,null,!r&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){a(!0)}},t.status||"No status")),r&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),t.updateStatus(s)},value:s})))},b=function(t){var e=t.profile,n=t.status,r=t.updateStatus;return e?c.a.createElement("div",null,c.a.createElement("div",{className:p.a.descriptionBlock},c.a.createElement("img",{src:e.photos.large}),c.a.createElement(d,{status:n,updateStatus:r}))):c.a.createElement(m.a,null)},h=n(59),v=n(24),E=n(252),g=n.n(E),j=n(253),O=n.n(j),y=function(t){return c.a.createElement("div",{className:O.a.item},c.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYdBq_hOb9UcY1YVQXA1gI5c9TyLF997iZKhGZuSupRitkTwRoQ"}),t.message,c.a.createElement("br",null),c.a.createElement("span",null,"Like")," ",t.likesCount)},_=n(109),S=n(110),P=n(226),k=n(228),w=c.a.memo(function(t){var e=Object(v.a)(t.posts).reverse().map(function(t){return c.a.createElement(y,{message:t.message,likesCount:t.likesCount})});return c.a.createElement("div",{className:g.a.postsBlock},"My Posts",c.a.createElement(x,{onSubmit:function(e){t.addPost(e.newPostText)}}),c.a.createElement("div",{className:g.a.posts},e))}),C=Object(P.a)(10),x=Object(S.a)({form:"ProfileAddNewPostForm"})(function(t){return c.a.createElement("form",{onSubmit:t.handleSubmit},c.a.createElement("div",null,c.a.createElement(_.a,{component:k.b,name:"newPostText",validate:[P.b,C],placeholder:"Post message"})),c.a.createElement("div",null,c.a.createElement("button",null,"App post")))}),A=w,B=n(25),F=(n(60),Object(B.b)(function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}},function(t){return{addPost:function(e){t(Object(h.a)(e))}}})(A)),N=function(t){return c.a.createElement("div",null,c.a.createElement(b,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),c.a.createElement(F,null))},T=n(22),I=n(16),M=n(235),U=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(N,Object.assign({},this.props,{profile:this.props.profile,updateStatus:this.props.updateStatus,status:this.props.status})))}}]),e}(c.a.Component);e.default=Object(I.d)(Object(B.b)(function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}},{getUserProfile:h.d,getStatus:h.c,updateStatus:h.e}),T.f,M.a)(U)}}]);
//# sourceMappingURL=4.c5553384.chunk.js.map