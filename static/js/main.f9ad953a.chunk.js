(this.webpackJsonporders=this.webpackJsonporders||[]).push([[0],{132:function(e,t,r){},133:function(e,t,r){"use strict";r.r(t);var n,a=r(0),s=r(33),c=r.n(s),i=r(56),o=r(109),d=r(30),u=r(20),l=Object(d.c)({name:"app",initialState:{isModal:!1,openedOrder:{},draggedOrder:{}},reducers:{setIsModal:function(e,t){var r=t.payload;return Object(u.a)(Object(u.a)({},e),{},{isModal:r})},setOpenedOrder:function(e,t){var r=t.payload;return Object(u.a)(Object(u.a)({},e),{},{openedOrder:r,isModal:!0})},setDraggedOrder:function(e,t){var r=t.payload;return Object(u.a)(Object(u.a)({},e),{},{draggedOrder:r})}}}),O=l.actions,j=O.setIsModal,b=O.setOpenedOrder,x=O.setDraggedOrder,p=function(e){return e.app},m=l.reducer,f=Object(d.c)({name:"order",initialState:{orders:[]},reducers:{setOrders:function(e,t){var r=t.payload;return Object(u.a)(Object(u.a)({},e),{},{orders:r})}}}),E=f.actions.setOrders,h=function(e){return e.order},v=f.reducer,R=r(29),N=r.n(R),D=r(81),g=r(18),A=r(21);!function(e){e.CREATE_NEW_ORDER="CREATE_NEW_ORDER",e.MAKE_IN_PREPARATION_ORDER="MAKE_IN_PREPARATION_ORDER",e.MAKE_DONE_ORDER="MAKE_DONE_ORDER",e.DELETE_ORDER="DELETE_ORDER",e.CHANGE_ORDER="CHANGE_ORDER",e.DRAG_ORDER="DRAG_ORDER"}(n||(n={}));var _,I=Object(d.b)(n.CREATE_NEW_ORDER),P=Object(d.b)(n.MAKE_IN_PREPARATION_ORDER),k=Object(d.b)(n.MAKE_DONE_ORDER),y=Object(d.b)(n.DELETE_ORDER),w=Object(d.b)(n.CHANGE_ORDER),M=Object(d.b)(n.DRAG_ORDER);!function(e){e.NEW="Nov\xe1",e.IN_PREPARATION="P\u0159ipravov\xe1no",e.DONE="Hotovo"}(_||(_={}));var C,S,T=r(72),W=r(73),B=function(){function e(){Object(T.a)(this,e)}return Object(W.a)(e,null,[{key:"setOrderStatus",value:function(e,t,r){return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},e),{},{status:r}):t}))}},{key:"getValidationErrors",value:function(e){var t={name:!1,description:!1,city:!1,address:!1,status:!1};for(var r in e)""===e[r]&&(t[r]=!0);return t}}]),e}(),z=r(5),K=r(197),G=r(194),L=r(190),H=r(182),F=r(178),J=i.c,V=function(){return Object(i.b)()},q=r(195),Z=r(196),Q=r(185),U=r(175),X=r(193),Y=r(176),$=r(189),ee=r(75),te=r.n(ee),re=r(64),ne=r.n(re),ae=r(76),se=r.n(ae),ce=r(48),ie=r(174),oe=r(49),de=r(2),ue=function(e){var t=e.status;return t===_.NEW?Object(de.jsx)($.a,{variant:"rounded",sx:{bgcolor:ce.a[100]},children:Object(de.jsx)(te.a,{})}):t===_.IN_PREPARATION?Object(de.jsx)($.a,{variant:"rounded",sx:{bgcolor:ie.a[100]},children:Object(de.jsx)(ne.a,{})}):Object(de.jsx)($.a,{variant:"rounded",sx:{bgcolor:oe.a[100]},children:Object(de.jsx)(se.a,{})})},le=r(192),Oe=r(107),je=r.n(Oe),be={listItem:{pr:"16px",zIndex:10,".MuiListItemButton-root":{width:"100%",pr:0},".MuiListItemText-secondary":{fontSize:"12px","@media (min-width: 360px)":{fontSize:"13px"},"@media (min-width: 411px)":{fontSize:"14px"}},".MuiListItemSecondaryAction-root":{display:"flex",justifyContent:"end",flex:"1 0",transform:"none",WebkitTransform:"none",position:"static"}},iconButton:{mr:"0px"}},xe=function(e){var t=e.order,r=V();return t.status===_.NEW?Object(de.jsx)(le.a,{edge:"end",onClick:function(){return r(P(t))},children:Object(de.jsx)(ne.a,{})}):t.status===_.IN_PREPARATION?Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(le.a,{edge:"end",onClick:function(){return r(I(t))},sx:be.iconButton,children:Object(de.jsx)(te.a,{})}),Object(de.jsx)(le.a,{edge:"end",onClick:function(){return r(k(t))},children:Object(de.jsx)(se.a,{})})]}):Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(le.a,{edge:"end",onClick:function(){return r(P(t))},sx:be.iconButton,children:Object(de.jsx)(ne.a,{})}),Object(de.jsx)(le.a,{edge:"end",onClick:function(){return r(y(t))},children:Object(de.jsx)(je.a,{})})]})},pe=function(e){var t=e.order,r=e.isMedium,n=V();return Object(de.jsx)(Q.a,{disablePadding:!0,secondaryAction:Object(de.jsx)(xe,{order:t}),draggable:r,onDragStart:function(e){n(x(t))},onDragOver:function(e){e.preventDefault()},onDrag:function(e){e.preventDefault()},sx:be.listItem,children:Object(de.jsxs)(U.a,{onClick:function(){return n(b(t))},children:[Object(de.jsx)(X.a,{children:Object(de.jsx)(ue,{status:t.status})}),Object(de.jsx)(Y.a,{primary:t.name,secondary:t.date})]})})},me={listSubheader:{fontSize:"18px","@media (min-width: 411px)":{fontSize:"20px"}},listPaper:{width:"100%"},listGridItem:{flex:"1 0",borderRight:"solid 1px rgb(0, 0, 0, 0.35)","&:last-child":{borderRight:"none"}}},fe=function(e){var t=e.name,r=e.items,n=e.isMedium;return Object(de.jsx)(G.a,{square:!0,elevation:n?0:3,children:Object(de.jsxs)(q.a,{children:[Object(de.jsx)(Z.a,{sx:me.listSubheader,children:t}),r.map((function(e){return Object(de.jsx)(pe,{order:e,isMedium:n},e.id)}))]})})};!function(e){e.NEW="Nov\xe9",e.IN_PREPARATION="P\u0159ipravov\xe1no",e.DONE="Hotovo"}(S||(S={}));var Ee=(C={},Object(z.a)(C,S.NEW,_.NEW),Object(z.a)(C,S.IN_PREPARATION,_.IN_PREPARATION),Object(z.a)(C,S.DONE,_.DONE),C),he=function(e){var t=e.isMedium,r=J(h).orders,n=J(p).draggedOrder,a=V(),s=function(e){e.preventDefault()},c=function(e,t){Ee[t]!==n.status&&a(M(t))};return t?Object(de.jsx)(K.a,{p:2,children:Object(de.jsx)(G.a,{sx:me.listPaprt,children:Object(de.jsxs)(L.a,{container:!0,children:[Object(de.jsx)(L.a,{item:!0,sx:me.listGridItem,onDragOver:s,onDrop:function(e){return c(0,S.NEW)},children:Object(de.jsx)(fe,{name:S.NEW,items:r.filter((function(e){return e.status===_.NEW})),isMedium:t})}),Object(de.jsx)(L.a,{item:!0,sx:me.listGridItem,onDragOver:s,onDrop:function(e){return c(0,S.IN_PREPARATION)},children:Object(de.jsx)(fe,{name:S.IN_PREPARATION,items:r.filter((function(e){return e.status===_.IN_PREPARATION})),isMedium:t})}),Object(de.jsx)(L.a,{item:!0,sx:me.listGridItem,onDragOver:s,onDrop:function(e){return c(0,S.DONE)},children:Object(de.jsx)(fe,{name:S.DONE,items:r.filter((function(e){return e.status===_.DONE})),isMedium:t})})]})})}):Object(de.jsxs)(H.a,{className:"swiper",spaceBetween:10,children:[Object(de.jsx)(F.a,{className:"swiperSlide",children:Object(de.jsx)(fe,{name:S.NEW,items:r.filter((function(e){return e.status===_.NEW})),isMedium:t})}),Object(de.jsx)(F.a,{className:"swiperSlide",children:Object(de.jsx)(fe,{name:S.IN_PREPARATION,items:r.filter((function(e){return e.status===_.IN_PREPARATION})),isMedium:t})}),Object(de.jsx)(F.a,{className:"swiperSlide",children:Object(de.jsx)(fe,{name:S.DONE,items:r.filter((function(e){return e.status===_.DONE})),isMedium:t})})]})},ve=N.a.mark(ge),Re=N.a.mark(Ae),Ne=N.a.mark(_e),De=N.a.mark(Ie);function ge(e){var t,r,n;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.next=3,Object(A.d)(p);case 3:r=a.sent,n=r.draggedOrder,a.t0=t,a.next=a.t0===S.NEW?8:a.t0===S.IN_PREPARATION?11:a.t0===S.DONE?14:17;break;case 8:return a.next=10,Object(A.c)(I(n));case 10:return a.abrupt("break",17);case 11:return a.next=13,Object(A.c)(P(n));case 13:return a.abrupt("break",17);case 14:return a.next=16,Object(A.c)(k(n));case 16:return a.abrupt("break",17);case 17:case"end":return a.stop()}}),ve)}function Ae(e){var t,r,n,a;return N.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,s.next=3,Object(A.d)(p);case 3:r=s.sent,n=r.openedOrder,a=Object(u.a)(Object(u.a)({},t),{},{id:n.id,date:n.date}),s.t0=t.status,s.next=s.t0===_.NEW?9:s.t0===_.IN_PREPARATION?12:s.t0===_.DONE?15:18;break;case 9:return s.next=11,Object(A.c)(I(a));case 11:return s.abrupt("break",18);case 12:return s.next=14,Object(A.c)(P(a));case 14:return s.abrupt("break",18);case 15:return s.next=17,Object(A.c)(k(a));case 17:return s.abrupt("break",18);case 18:case"end":return s.stop()}}),Re)}function _e(e){var t,r,a,s;return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.type,r=e.payload,c.next=3,Object(A.d)(h);case 3:if(a=c.sent,s=a.orders,!("id"in r)||!("date"in r)){c.next=22;break}c.t0=t,c.next=c.t0===n.CREATE_NEW_ORDER?9:c.t0===n.MAKE_IN_PREPARATION_ORDER?12:c.t0===n.MAKE_DONE_ORDER?15:c.t0===n.DELETE_ORDER?18:20;break;case 9:return c.next=11,Object(A.c)(E(B.setOrderStatus(r,s,_.NEW)));case 11:return c.abrupt("break",20);case 12:return c.next=14,Object(A.c)(E(B.setOrderStatus(r,s,_.IN_PREPARATION)));case 14:return c.abrupt("break",20);case 15:return c.next=17,Object(A.c)(E(B.setOrderStatus(r,s,_.DONE)));case 17:return c.abrupt("break",20);case 18:return c.next=20,Object(A.c)(E(s.filter((function(e){return e.id!==r.id}))));case 20:c.next=24;break;case 22:return c.next=24,Object(A.c)(E([].concat(Object(g.a)(s),[Object(u.a)(Object(u.a)({},r),{},{id:(new Date).getTime().toString(),date:(new Date).toLocaleString()})])));case 24:case"end":return c.stop()}}),Ne)}function Ie(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.f)([I,P,k,y],_e);case 2:return e.next=4,Object(A.f)(w,Ae);case 4:return e.next=6,Object(A.f)(M,ge);case 6:case"end":return e.stop()}}),De)}var Pe=N.a.mark(ke);function ke(){var e;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[Ie],t.next=3,Object(D.a)(e.map((function(e){return Object(D.c)(N.a.mark((function t(){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,Object(D.b)(e);case 4:return t.abrupt("break",12);case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:t.next=0;break;case 12:case"end":return t.stop()}}),t,null,[[1,7]])})))})));case 3:case"end":return t.stop()}}),Pe)}var ye=Object(o.a)(),we=Object(d.a)({reducer:{app:m,order:v},middleware:[ye]});ye.run(ke);var Me=we,Ce=r(181),Se=r(201),Te=r(15),We=r(184),Be=r(85),ze=r(186),Ke=r(200),Ge=r(187),Le=r(183),He=r(188),Fe=["Praha","Brno\t","Ostrava\t","Plze\u0148\t","Liberec\t","Olomouc\t","\u010cesk\xe9 Bud\u011bjovice","Hradec Kr\xe1lov\xe9","\xdast\xed nad Labem","Pardubice\t","Zl\xedn\t","Hav\xed\u0159ov\t","Kladno","Most\t","Opava\t","Fr\xfddek-M\xedstek\t","Jihlava\t","Karvin\xe1\t","Teplice\t","Chomutov\t","Karlovy Vary\t","D\u011b\u010d\xedn\t","Jablonec nad Nisou\t","Mlad\xe1 Boleslav\t","Prost\u011bjov\t","P\u0159erov"],Je={modalBox:{bgcolor:"background.paper",border:"1px solid black",boxShadow:24,transform:"translate(-50%, -50%)",width:"86%",maxWidth:1e3,p:4,position:"absolute",top:"50%",left:"50%"},header:{fontSize:"22px",textAlign:"center",mb:"10px"},form:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},input:{flexBasis:"100%","@media (min-width: 768px)":{flexBasis:"49%"}},select:{flexBasis:"100%","@media (min-width: 768px)":{flexBasis:"49%"}},statusSelect:{flexBasis:"100%"},button:{flexBasis:"100%","&:first-of-type":{my:1,"@media (min-width: 768px)":{mt:"20px"}}},deleteButton:{flexBasis:"100%",mb:1}};var Ve=function(){var e,t,r,n,s,c,i=J(p),o=i.isModal,d=i.openedOrder,l=V(),O=Object(a.useState)({name:null!==(e=d.name)&&void 0!==e?e:"",description:null!==(t=d.description)&&void 0!==t?t:"",city:null!==(r=d.city)&&void 0!==r?r:"",address:null!==(n=d.address)&&void 0!==n?n:"",status:null!==(s=d.status)&&void 0!==s?s:_.NEW}),x=Object(Te.a)(O,2),m=x[0],f=x[1],E=Object(a.useState)({name:!1,description:!1,city:!1,address:!1,status:!1}),h=Object(Te.a)(E,2),v=h[0],R=h[1],N=function(e){R({name:!1,description:!1,city:!1,address:!1,status:!1}),f(Object(u.a)(Object(u.a)({},m),{},Object(z.a)({},e.target.name,e.target.value)))},D=function(){d&&l(b({})),l(j(!1))};return Object(de.jsx)(We.a,{open:o,onClose:D,children:Object(de.jsxs)(K.a,{sx:Je.modalBox,children:[Object(de.jsx)(Be.a,{variant:"h3",sx:Je.header,children:null!==(c=d.name)&&void 0!==c?c:"Nov\xe1 objedn\xe1vka"}),Object(de.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),function(e){for(var t in e)if(!e[t])return!0;return!1}(m))return R(B.getValidationErrors(m));d.id?l(w(m)):l(I(m)),D()},style:Je.form,children:[Object(de.jsx)(ze.a,{error:v.name,name:"name",label:"Name",margin:"dense",value:m.name,onChange:N,sx:Je.input}),Object(de.jsx)(ze.a,{error:v.description,name:"description",label:"Description",multiline:!0,maxRows:4,margin:"dense",value:m.description,onChange:N,sx:Je.input}),Object(de.jsxs)(Ke.a,{margin:"dense",sx:Je.select,children:[Object(de.jsx)(Ge.a,{htmlFor:"city",children:"City"}),Object(de.jsxs)(Le.a,{error:v.city,id:"city",name:"city",label:"City",value:m.city,onChange:N,children:[Object(de.jsx)(He.a,{value:"",children:Object(de.jsx)("em",{children:"None"})}),Fe.map((function(e){return Object(de.jsx)(He.a,{value:e,children:e},e)}))]})]}),Object(de.jsx)(ze.a,{error:v.address,name:"address",label:"Address",multiline:!0,maxRows:2,margin:"dense",value:m.address,onChange:N,sx:Je.input}),d.id&&Object(de.jsxs)(Ke.a,{margin:"dense",sx:Je.statusSelect,children:[Object(de.jsx)(Ge.a,{htmlFor:"status",children:"Status"}),Object(de.jsxs)(Le.a,{error:v.status,id:"status",name:"status",label:"Status",value:m.status,onChange:N,children:[Object(de.jsx)(He.a,{value:"",children:Object(de.jsx)("em",{children:d.status})}),Object.values(_).map((function(e){return Object(de.jsx)(He.a,{value:e,children:e},e)}))]})]}),Object(de.jsx)(Se.a,{variant:"contained",type:"submit",size:"large",sx:Je.button,children:d.id?"Change":"Create"}),d.id&&Object(de.jsx)(Se.a,{color:"error",variant:"contained",type:"submit",size:"large",onClick:function(){return l(y(d))},sx:Je.deleteButton,children:"Delete"}),Object(de.jsx)(Se.a,{variant:"outlined",size:"large",onClick:D,sx:Je.button,children:"Cancel"})]})]})})},qe=function(){var e=J(p).isModal,t=V(),r=Object(Ce.a)("(min-width: 360px)"),n=Object(Ce.a)("(min-width: 500px)");return Object(de.jsxs)(L.a,{container:!0,direction:"column",maxWidth:1300,children:[Object(de.jsx)(K.a,{p:2,children:Object(de.jsx)(Se.a,{fullWidth:!0,variant:"contained",size:r?"large":"medium",onClick:function(){return t(j(!0))},sx:{"@media (min-width: 411px)":{fontSize:"18px",height:"60px"}},children:"Vytvo\u0159it novou objedn\xe1vku"})}),e&&Object(de.jsx)(Ve,{}),Object(de.jsx)(he,{isMedium:n})]})};r(132);c.a.render(Object(de.jsx)(i.a,{store:Me,children:Object(de.jsx)(qe,{})}),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.f9ad953a.chunk.js.map