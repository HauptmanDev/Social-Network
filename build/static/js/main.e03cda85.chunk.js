(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{11:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i});var r=n(85),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9ae69435-2b9a-40bc-b874-7a6c240dae36"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},136:function(e,t,n){e.exports=n(225)},141:function(e,t,n){},142:function(e,t,n){},18:function(e,t,n){e.exports={nav:"Nav_nav__2gOsI",item:"Nav_item__2zvPs",activeLink:"Nav_activeLink__HMj9-"}},225:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(45),c=n.n(o);n(141),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(32),u=n(33),s=n(35),l=n(34),f=n(36),p=(n(142),n(18)),d=n.n(p),O=n(19),b=function(){return a.a.createElement("nav",{className:d.a.nav},a.a.createElement("div",{className:d.a.item},a.a.createElement(O.b,{to:"/profile",activeClassName:d.a.activeLink},"Profile ")),a.a.createElement("div",{className:d.a.item},a.a.createElement(O.b,{to:"/dialogs",activeClassName:d.a.activeLink}," Messages ")),a.a.createElement("div",{className:d.a.item},a.a.createElement(O.b,{to:"/users",activeClassName:d.a.activeLink}," Users ")),a.a.createElement("br",null),a.a.createElement("div",{className:d.a.item},a.a.createElement("br",null)))},g=n(82),m=n.n(g),v=function(){return a.a.createElement("footer",{className:m.a.footer},a.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lkBooeDsvoU379MxTGzpch8TEMndQiO9sjdxSqsbFqKgmkibag"}))},h=n(83),y=n.n(h),E=function(){return a.a.createElement("div",{className:y.a.tools},"Tools")},w=n(22),j=n(55),P=n.n(j),S=function(e){return a.a.createElement("header",{className:P.a.header},a.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lkBooeDsvoU379MxTGzpch8TEMndQiO9sjdxSqsbFqKgmkibag"}),a.a.createElement("div",{className:P.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Log out")):a.a.createElement(O.b,{to:"/login"},"Login")))},_=n(25),T=n(27),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(S,this.props)}}]),t}(a.a.Component),D=Object(_.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:T.d})(k),I=n(16),N=n(10);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var x={initialized:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZE_SUCCESS":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach(function(t){Object(N.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{initialized:!0});default:return e}},A=n(38),U=n(59),G=n(60),R={},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;arguments.length>1&&arguments[1];return e},z=n(80),M=n(87),B=n(79),W=Object(I.c)({profilePage:U.b,dialogsPage:G.a,sidebar:F,usersPage:z.a,auth:T.a,form:B.a,app:C}),H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.d,q=Object(I.e)(W,H(Object(I.a)(M.a)));window._store_=q;var K=q,Q=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(A.a,null)},a.a.createElement(e,t))}},J=a.a.lazy(function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,299))}),V=a.a.lazy(function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,301))}),X=a.a.lazy(function(){return n.e(5).then(n.bind(null,300))}),Y=a.a.lazy(function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,298))}),Z=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(D,null),a.a.createElement(b,null),a.a.createElement(E,null),a.a.createElement(v,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(w.b,{path:"/dialogs",render:Q(V)}),a.a.createElement(w.b,{path:"/profile/:userId?",render:Q(J)}),a.a.createElement(w.b,{path:"/users",render:Q(X)}),a.a.createElement(w.b,{path:"/login",render:Q(Y)}))):a.a.createElement(A.a,null)}}]),t}(a.a.Component),$=Object(I.d)(w.f,Object(_.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(Object(T.b)());Promise.all([t]).then(function(){e({type:"INITIALIZE_SUCCESS"})})}}}))(Z),ee=function(e){return a.a.createElement(O.a,null,a.a.createElement(_.a,{store:K},a.a.createElement($,null)))};c.a.render(a.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},27:function(e,t,n){"use strict";n.d(t,"b",function(){return p}),n.d(t,"c",function(){return d}),n.d(t,"d",function(){return O});var r=n(4),a=n.n(r),o=n(8),c=n(10),i=n(11),u=n(46);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var l={userID:null,email:null,login:null,isAuth:!1},f=function(e,t,n,r){return{type:"auth/SET-USER-DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},p=function(){return function(){var e=Object(o.a)(a.a.mark(function e(t){var n,r,o,c,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,o=r.id,c=r.email,u=r.login,t(f(o,c,u,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n){return function(){var r=Object(o.a)(a.a.mark(function r(o){var c,s;return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?o(p()):(s=c.data.messages.length>0?c.data.messages[0]:"Some error",o(Object(u.a)("login",{_error:s})));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()},O=function(){return function(){var e=Object(o.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.data.resultCode&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-USER-DATA":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{},t.payload);default:return e}}},38:function(e,t,n){"use strict";var r=n(86),a=n.n(r),o=n(0),c=n.n(o);t.a=function(e){return c.a.createElement("div",null,c.a.createElement("img",{src:a.a}))}},55:function(e,t,n){e.exports={header:"Header_header__1lL9N",loginBlock:"Header_loginBlock__1jgYl"}},59:function(e,t,n){"use strict";n.d(t,"a",function(){return p}),n.d(t,"d",function(){return O}),n.d(t,"c",function(){return b}),n.d(t,"e",function(){return g});var r=n(4),a=n.n(r),o=n(8),c=n(24),i=n(10),u=n(11);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f={posts:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442, \u0432\u0441\u0435\u043c!",likesCount:0},{id:2,message:"\u041f\u043e\u043a\u0430, \u0432\u0441\u0435\u043c!",likesCount:1}],profile:null,status:""},p=function(e){return{type:"ADD-POST",newPostText:e}},d=function(e){return{type:"SET-STATUS",status:e}},O=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:r=t.sent,n({type:"SET_USER-PROFILE",profile:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(d(r.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:3,message:t.newPostText,likesCount:0};return l({},e,{posts:[].concat(Object(c.a)(e.posts),[n])});case"SET_USER-PROFILE":return l({},e,{profile:t.profile});case"SET-STATUS":return l({},e,{status:t.status});case"DELETE-POST":return l({},e,{posts:e.posts.filter(function(e){})});default:return e}}},60:function(e,t,n){"use strict";n.d(t,"b",function(){return i});var r=n(24),a=n(10);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var c={dialogs:[{id:1,name:"Kirill"},{id:2,name:"Igor"},{id:3,name:"Victor"},{id:4,name:"Python"}],messages:[{id:1,message:"Give me my money"},{id:2,message:"How are you?"},{id:3,message:"May be Borba"},{id:4,message:"Guuusss???"}]},i=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){Object(a.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:5,message:n}])});default:return e}}},80:function(e,t,n){"use strict";var r=n(4),a=n.n(r),o=n(8),c=n(24),i=n(10),u=n(11);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var l=function(e,t,n,r){return e.map(function(e){return e[n]===t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{},r):e})};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}n.d(t,"d",function(){return g}),n.d(t,"e",function(){return v}),n.d(t,"c",function(){return h}),n.d(t,"b",function(){return E}),n.d(t,"f",function(){return w});var d={users:[],pageSize:15,totalUserCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},O=function(e){return{type:"FOLLOW",userId:e}},b=function(e){return{type:"UNFOLLOW",userId:e}},g=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},m=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},v=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},h=function(e,t){return function(){var n=Object(o.a)(a.a.mark(function n(r){var o;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(m(!0)),r(g(e)),n.next=4,u.c.getUsers(e,t);case 4:o=n.sent,r({type:"SET_USERS",users:o.items}),r({type:"SET_TOTAL_USERS_COUNT",count:o.totalCount}),r(m(!1));case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},y=function(){var e=Object(o.a)(a.a.mark(function e(t,n,r,o){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(v(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(O(n)),t(v(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),E=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=u.c.follow.bind(e),y(n,e,r,O);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=u.c.unfollow.bind(e),y(n,e,r,b);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":case"UNFOLLOW":return p({},e,{users:l(e.users,t.userId,"id",{followed:!0})});case"SET_USERS":return p({},e,{users:t.users});case"SET_CURRENT_PAGE":return p({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return p({},e,{totalUserCount:t.count});case"TOGGLE_IS_FETCHING":return p({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return p({},e,{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):Object(c.a)(e.followingInProgress.filter(function(e){return e!=t.userid}))});default:return e}}},82:function(e,t,n){e.exports={footer:"Footer_footer__1GiH6"}},83:function(e,t,n){e.exports={tools:"Tools_tools__1_BWd"}},86:function(e,t,n){e.exports=n.p+"static/media/preloader.e7f5b6f4.svg"}},[[136,2,3]]]);
//# sourceMappingURL=main.e03cda85.chunk.js.map