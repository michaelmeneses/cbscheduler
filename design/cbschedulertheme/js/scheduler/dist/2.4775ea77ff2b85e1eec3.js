(window.webpackJsonpLHCReactAPPCBScheduler=window.webpackJsonpLHCReactAPPCBScheduler||[]).push([[2],{58:function(e,t,a){"use strict";a.r(t);var l=a(2),n=a.n(l),c=a(17),s=a.n(c),r=a(0),i=a.n(r),m=a(31),o=a.n(m),u=a(53),d=a(59);t.default=function(e){var t,a=Object(r.useState)([]),l=s()(a,2),c=l[0],m=l[1],f=Object(r.useState)([]),b=s()(f,2),h=b[0],p=b[1],v=Object(r.useState)([]),E=s()(v,2),g=E[0],N=E[1],O=Object(r.useState)([]),j=s()(O,2),_=j[0],y=j[1],S=Object(r.useState)(null),C=s()(S,2),w=C[0],k=C[1],z=Object(r.useState)(null),x=s()(z,2),T=x[0],F=x[1],V=Object(r.useState)(null),D=s()(V,2),L=D[0],M=D[1],P=Object(r.useState)(""!=e.username&&null!=e.username&&"Visitor"!=e.username&&"undefined"!=e.username?e.username:null),A=s()(P,2),B=A[0],H=A[1],J=Object(r.useState)(null),R=s()(J,2),Y=R[0],I=R[1],Q=Object(r.useState)(null),Z=s()(Q,2),q=Z[0],G=Z[1],K=Object(r.useState)(null),U=s()(K,2),W=U[0],X=U[1],$=Object(r.useState)(null),ee=s()($,2),te=ee[0],ae=ee[1],le=Object(r.useState)(e.dep_id),ne=s()(le,2),ce=ne[0],se=ne[1],re=Object(r.useState)(!1),ie=s()(re,2),me=ie[0],oe=ie[1],ue=Object(r.useState)(!1),de=s()(ue,2),fe=de[0],be=de[1],he=Object(r.useState)(!1),pe=s()(he,2),ve=pe[0],Ee=pe[1],ge=Object(r.useState)(null),Ne=s()(ge,2),Oe=Ne[0],je=Ne[1],_e=Object(r.useState)(null),ye=s()(_e,2),Se=ye[0],Ce=ye[1],we=Object(r.useState)(null),ke=s()(we,2),ze=ke[0],xe=ke[1],Te=Object(r.useState)(!1),Fe=s()(Te,2),Ve=Fe[0],De=Fe[1],Le=Object(r.useState)(0),Me=s()(Le,2),Pe=Me[0],Ae=Me[1],Be=function(){e.ee.emitEvent("endCheduler",[])},He=Object(r.useState)(function(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(t){Date.prototype.stdTimezoneOffset=function(){var e=new Date(this.getFullYear(),0,1),t=new Date(this.getFullYear(),6,1);return Math.max(e.getTimezoneOffset(),t.getTimezoneOffset())},Date.prototype.dst=function(){return this.getTimezoneOffset()<this.stdTimezoneOffset()};var e=new Date;return(e.dst()?e.getTimezoneOffset():e.getTimezoneOffset()-60)/60*-1}}()),Je=s()(He,2),Re=Je[0],Ye=(Je[1],function(){return{username:B,timezone:Re,dep_id:ce,chat_id:e.chat_id,hash:e.hash,subject:Y,description:q,phone:W,email:te,day:T,time:L,attempt:Pe}});Object(r.useEffect)((function(){null!==T&&o.a.get(e.base_path+"cbscheduler/gettimes/"+T+"/(department)/"+ce+"/(chat)/"+e.chat_id+"?tz="+Re).then((function(e){p(e.data),M(null)}))}),[T]),Object(r.useEffect)((function(){oe(!(B&&Re&&Y&&q&&W&&te&&T&&L))})),Object(r.useEffect)((function(){o.a.get(e.base_path+"cbscheduler/getdays/(department)/"+ce+"/(chat)/"+e.chat_id+"/(hash)/"+e.hash+"/(vid)/"+e.vid+"/(theme)/"+e.theme+"?tz="+Re).then((function(t){m(t.data.days),Ce(t.data.default_country),xe(t.data.logo),t.data.username&&(null===B||e.chat_id)&&H(t.data.username),t.data.email&&ae(t.data.email),null===ce&&se(t.data.department),De(!0)})),o.a.get(e.base_path+"cbscheduler/getsubjects").then((function(e){N(e.data)}))}),[]);var Ie=Object(d.a)("cbsheduler_chat"),Qe=Ie.t;Ie.i18n;if(!1===Ve)return i.a.createElement(i.a.Fragment,null,"...");var Ze=i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"d-flex pb-1"},null!==ze&&i.a.createElement("div",null,i.a.createElement("img",{src:ze,height:"40"})),i.a.createElement("div",{className:"pl-2 pt-1 flex-grow-1"},i.a.createElement("h5",null,Qe("fields.schedule_title"))),"widget"==e.mode&&i.a.createElement("div",{className:"pl-2"},i.a.createElement("button",{type:"button",onClick:function(e){return Be()},className:"close float-right","data-dismiss":"modal","aria-label":"Close"},i.a.createElement("span",{"aria-hidden":"true"},"×")))));return _.errorModal?i.a.createElement(i.a.Fragment,null,Ze,i.a.createElement("p",{className:"text-danger"},_.errorModal),i.a.createElement("div",{className:"btn-group"},!_.disableTryAgain&&i.a.createElement("button",{className:"btn btn-sm btn-secondary",onClick:function(e){return y([])}},Qe("fields.try_again")),"widget"==e.mode&&i.a.createElement("button",{className:"btn btn-sm btn-secondary",onClick:function(t){o.a.post(e.base_path+"cbscheduler/gotoagent",Ye()).then((function(t){e.ee.emitEvent("cbscheduler.live_support",[{fields:{Question:Qe("fields.verification_failed")}}]),Be()}))}},Qe("fields.live_support")),"widget"!=e.mode&&i.a.createElement("button",{className:"btn btn-sm btn-secondary",onClick:function(e){return Be()}},Qe("fields.close")))):0==c.length?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"row"},Ze,i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"alert alert-light",role:"alert"},Qe("fields.no_free_days"))))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"row"},Ze,ve&&i.a.createElement("div",{className:"col-12"},Qe("fields.call_scheduled")," ",i.a.createElement("a",{href:Oe.ics},Qe("fields.download")),"."),!ve&&i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-6 pr-2"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{title:Qe("fields.username"),placeholder:Qe("fields.username"),type:"text",maxLength:"250",onChange:function(e){return H(e.target.value)},className:"form-control form-control-sm"+(_.username?" is-invalid":""),defaultValue:B}),_.username&&i.a.createElement("div",{className:"invalid-feedback"},_.username))),i.a.createElement("div",{className:"pl-2 col-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{title:Qe("fields.email"),placeholder:Qe("fields.email"),type:"text",maxLength:"250",defaultValue:te,onChange:function(e){return ae(e.target.value)},className:"form-control form-control-sm"+(_.email?" is-invalid":"")}),_.email&&i.a.createElement("div",{className:"invalid-feedback"},_.email)))),i.a.createElement("div",{className:"form-group"},i.a.createElement("select",{title:Qe("fields.subject"),className:"form-control form-control-sm"+(_.subject?" is-invalid":""),defaultValue:Y,onChange:function(e){return I(e.target.value)}},i.a.createElement("option",{value:""},Qe("fields.choose_subject")),g.map((function(e){return i.a.createElement("option",{value:e.id},e.name)}))),_.subject&&i.a.createElement("div",{className:"invalid-feedback"},_.subject)),i.a.createElement("div",{className:"form-group"},i.a.createElement(u.a,{international:!0,className:"form-control form-control-sm"+(_.phone?" is-invalid":""),defaultCountry:Se,placeholder:Qe("fields.enter_phone"),value:W,onChange:X}),_.phone&&i.a.createElement("div",{className:"invalid-feedback"},_.phone),i.a.createElement("small",null,i.a.createElement("i",null,Qe("fields.include_country")))),i.a.createElement("div",{className:"form-group mb-1"},i.a.createElement("textarea",{placeholder:Qe("fields.problem"),maxLength:"500",name:"description",defaultValue:q,onChange:function(e){return G(e.target.value)},className:"form-control form-control-sm"+(_.description?" is-invalid":"")}),_.description&&i.a.createElement("div",{className:"invalid-feedback"},_.description)),i.a.createElement("p",{className:"mb-2"},i.a.createElement("small",null,Qe("fields.choose_day_time",{timezone:Re}))),i.a.createElement("div",{className:"form-group"},i.a.createElement("select",{className:"form-control form-control-sm"+(_.day?" is-invalid":""),defaultValue:T,onChange:function(e){return F(e.target.value)}},i.a.createElement("option",{value:""},Qe("fields.choose_day")),c.map((function(e){return i.a.createElement("option",{value:e.id},e.name)}))),_.day&&i.a.createElement("div",{className:"invalid-feedback"},_.day)),T&&i.a.createElement("div",{className:"form-group"},i.a.createElement("select",(t={className:"form-control form-control-sm",defaultValue:L},n()(t,"className","form-control form-control-sm"+(_.time?" is-invalid":"")),n()(t,"onChange",(function(e){return M(e.target.value)})),t),i.a.createElement("option",{value:""},Qe("fields.choose_time")),h.map((function(e){return i.a.createElement("option",{value:e.id},e.name)}))),_.time&&i.a.createElement("div",{className:"invalid-feedback"},_.time)),w&&i.a.createElement("div",{className:"alert alert-danger",role:"alert"},w),i.a.createElement("div",{className:"form-group mb-0"},i.a.createElement("button",{type:"button",disabled:me||fe,className:"btn btn-sm btn-secondary",onClick:function(){return be(!0),void o.a.post(e.base_path+"cbscheduler/schedulecb",Ye()).then((function(e){y([]),k(null),1==e.data.error?(be(!1),e.data.messages&&(y(e.data.messages),e.data.messages.errorModal&&Ae(Pe+1)),e.data.message&&k(e.data.message)):(je(e.data.data),Ee(!0))}))}},fe&&i.a.createElement("i",{className:"material-icons"},"")," ",Qe("fields.schedule_callback"))))))}}}]);