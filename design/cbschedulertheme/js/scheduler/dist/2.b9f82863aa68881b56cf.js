(window.webpackJsonpLHCReactAPPCBScheduler=window.webpackJsonpLHCReactAPPCBScheduler||[]).push([[2],{58:function(e,t,a){"use strict";a.r(t);var l=a(2),n=a.n(l),c=a(17),s=a.n(c),r=a(0),i=a.n(r),m=a(31),o=a.n(m),d=a(53),u=a(59);t.default=function(e){var t,a=Object(r.useState)([]),l=s()(a,2),c=l[0],m=l[1],f=Object(r.useState)([]),b=s()(f,2),h=b[0],p=b[1],v=Object(r.useState)([]),E=s()(v,2),g=E[0],N=E[1],_=Object(r.useState)([]),j=s()(_,2),O=j[0],S=j[1],y=Object(r.useState)(null),k=s()(y,2),C=k[0],w=k[1],x=Object(r.useState)(null),z=s()(x,2),T=z[0],F=z[1],V=Object(r.useState)(null),D=s()(V,2),L=D[0],M=D[1],P=Object(r.useState)(""!=e.username&&null!=e.username&&"Visitor"!=e.username&&"undefined"!=e.username?e.username:null),A=s()(P,2),B=A[0],H=A[1],J=Object(r.useState)(""!=e.subject&&null!=e.subject?e.subject:null),R=s()(J,2),Y=R[0],I=R[1],Q=Object(r.useState)(""!=e.description&&null!=e.description?e.description:null),U=s()(Q,2),Z=U[0],q=U[1],G=Object(r.useState)(""!=e.phone&&null!=e.phone?e.phone:null),K=s()(G,2),W=K[0],X=K[1],$=Object(r.useState)(""!=e.email&&null!=e.email?e.email:null),ee=s()($,2),te=ee[0],ae=ee[1],le=Object(r.useState)(null),ne=s()(le,2),ce=ne[0],se=ne[1],re=Object(r.useState)(e.dep_id),ie=s()(re,2),me=ie[0],oe=ie[1],de=Object(r.useState)(null),ue=s()(de,2),fe=ue[0],be=ue[1],he=Object(r.useState)(!1),pe=s()(he,2),ve=pe[0],Ee=(pe[1],Object(r.useState)(!1)),ge=s()(Ee,2),Ne=ge[0],_e=ge[1],je=Object(r.useState)(!1),Oe=s()(je,2),Se=Oe[0],ye=Oe[1],ke=Object(r.useState)(null),Ce=s()(ke,2),we=Ce[0],xe=Ce[1],ze=Object(r.useState)(null),Te=s()(ze,2),Fe=Te[0],Ve=Te[1],De=Object(r.useState)(null),Le=s()(De,2),Me=Le[0],Pe=Le[1],Ae=Object(r.useState)(!1),Be=s()(Ae,2),He=Be[0],Je=Be[1],Re=Object(r.useState)(!1),Ye=s()(Re,2),Ie=Ye[0],Qe=Ye[1],Ue=Object(r.useState)(0),Ze=s()(Ue,2),qe=Ze[0],Ge=Ze[1],Ke=function(){e.ee.emitEvent("endCheduler",[e])},We=Object(r.useState)(function(){try{var e=Intl.DateTimeFormat().resolvedOptions().timeZone;return"undefined"==e&&(e="UTC"),e}catch(e){Date.prototype.stdTimezoneOffset=function(){var e=new Date(this.getFullYear(),0,1),t=new Date(this.getFullYear(),6,1);return Math.max(e.getTimezoneOffset(),t.getTimezoneOffset())},Date.prototype.dst=function(){return this.getTimezoneOffset()<this.stdTimezoneOffset()};var t=new Date;return(t.dst()?t.getTimezoneOffset():t.getTimezoneOffset()-60)/60*-1}}()),Xe=s()(We,2),$e=Xe[0],et=(Xe[1],function(){return{username:B,timezone:$e,dep_id:me,chat_id:e.chat_id,parent_id:e.parent_id,hash:e.hash,subject:Y,description:Z,phone:W,email:te,day:T,time:L,attempt:qe,terms_agree:Ie}});Object(r.useEffect)((function(){null!==T&&(p([]),M(null),o.a.get(e.base_path+"cbscheduler/gettimes/"+T+"/(department)/"+me+"/(chat)/"+e.chat_id+"?tz="+$e).then((function(e){p(e.data),M(null)})))}),[T]),Object(r.useEffect)((function(){o.a.get(e.base_path+"cbscheduler/getdays/(department)/"+me+"/(chat)/"+e.chat_id+"/(hash)/"+e.hash+"/(vid)/"+e.vid+"/(theme)/"+e.theme+"?tz="+$e).then((function(t){m(t.data.days),Ve(t.data.default_country),Pe(t.data.logo),t.data.username&&(null===B||e.chat_id)&&H(t.data.username),t.data.email&&ae(t.data.email),t.data.countries&&se(t.data.countries),t.data.terms_of_service&&be(t.data.terms_of_service),null===me&&oe(t.data.department),Je(!0)})),o.a.get(e.base_path+"cbscheduler/getsubjects").then((function(e){N(e.data)}))}),[]);var tt=Object(u.a)("cbsheduler_chat"),at=tt.t;tt.i18n;if(!1===He)return i.a.createElement(i.a.Fragment,null,"...");var lt=i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"d-flex pb-1"},null!==Me&&i.a.createElement("div",null,i.a.createElement("img",{src:Me,height:"40"})),i.a.createElement("div",{className:"pl-0 pt-1 flex-grow-1"},i.a.createElement("h5",null,at("fields.schedule_title"))),"widget"==e.mode&&i.a.createElement("div",{className:"pl-2"},i.a.createElement("button",{type:"button",onClick:function(e){return Ke()},className:"close float-right","data-dismiss":"modal","aria-label":"Close"},i.a.createElement("span",{"aria-hidden":"true"},"×")))));return O.errorModal?i.a.createElement(i.a.Fragment,null,lt,i.a.createElement("p",{className:"text-danger"},O.errorModal),i.a.createElement("div",{className:"btn-group"},!O.disableTryAgain&&i.a.createElement("button",{className:"btn btn-sm btn-secondary",onClick:function(e){return S([])}},at("fields.try_again")),"widget"==e.mode&&i.a.createElement("button",{className:"btn btn-sm btn-secondary",onClick:function(t){o.a.post(e.base_path+"cbscheduler/gotoagent",et()).then((function(t){e.ee.emitEvent("cbscheduler.live_support",[{chat_id:e.chat_id,fields:{Question:at("fields.verification_failed")}}]),Ke()}))}},at("fields.live_support")),"widget"!=e.mode&&i.a.createElement("button",{className:"btn btn-sm btn-secondary",onClick:function(e){return Ke()}},at("fields.close")))):0==c.length?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"row"},lt,i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"alert alert-light",role:"alert"},at("fields.no_free_days"))))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"row"},lt,Se&&i.a.createElement("div",{className:"col-12"},at("fields.call_scheduled")," ",i.a.createElement("a",{href:we.ics},at("fields.download")),"."),!Se&&i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-6 pr-2"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{title:at("fields.username"),placeholder:at("fields.username"),type:"text",maxLength:"250",onChange:function(e){return H(e.target.value)},className:"form-control form-control-sm"+(O.username?" is-invalid":""),defaultValue:B}),O.username&&i.a.createElement("div",{className:"invalid-feedback"},O.username))),i.a.createElement("div",{className:"pl-2 col-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{title:at("fields.email"),placeholder:at("fields.email"),type:"text",maxLength:"250",defaultValue:te,onChange:function(e){return ae(e.target.value)},className:"form-control form-control-sm"+(O.email?" is-invalid":"")}),O.email&&i.a.createElement("div",{className:"invalid-feedback"},O.email)))),i.a.createElement("div",{className:"form-group"},i.a.createElement("select",{title:at("fields.subject"),className:"form-control form-control-sm"+(O.subject?" is-invalid":""),defaultValue:Y,onChange:function(e){return I(e.target.value)}},i.a.createElement("option",{value:""},at("fields.choose_subject")),g.map((function(e){return i.a.createElement("option",{value:e.id},e.name)}))),O.subject&&i.a.createElement("div",{className:"invalid-feedback"},O.subject)),i.a.createElement("div",{className:"form-group"},i.a.createElement(d.a,{countries:null!==ce?ce:void 0,international:!0,className:"form-control form-control-sm"+(O.phone?" is-invalid":""),defaultCountry:Fe,placeholder:at("fields.enter_phone"),value:W,onChange:X}),O.phone&&i.a.createElement("div",{className:"invalid-feedback"},O.phone),i.a.createElement("small",null,i.a.createElement("i",null,at("fields.include_country")))),i.a.createElement("div",{className:"form-group mb-1"},i.a.createElement("textarea",{placeholder:at("fields.problem"),maxLength:"500",name:"description",defaultValue:Z,onChange:function(e){return q(e.target.value)},className:"form-control form-control-sm"+(O.description?" is-invalid":"")}),O.description&&i.a.createElement("div",{className:"invalid-feedback"},O.description)),i.a.createElement("p",{className:"mb-2"},i.a.createElement("small",null,at("fields.choose_day_time",{timezone:$e}))),i.a.createElement("div",{className:"form-group"},i.a.createElement("select",{className:"form-control form-control-sm"+(O.day?" is-invalid":""),defaultValue:T,onChange:function(e){return F(e.target.value)}},i.a.createElement("option",{value:""},at("fields.choose_day")),c.map((function(e){return i.a.createElement("option",{value:e.id},e.name)}))),O.day&&i.a.createElement("div",{className:"invalid-feedback"},O.day)),T&&h.length>0&&i.a.createElement("div",{className:"form-group"},i.a.createElement("select",(t={className:"form-control form-control-sm",defaultValue:L},n()(t,"className","form-control form-control-sm"+(O.time?" is-invalid":"")),n()(t,"onChange",(function(e){return M(e.target.value)})),t),i.a.createElement("option",{value:""},at("fields.choose_time")),h.map((function(e){return i.a.createElement("option",{value:e.id},e.name)}))),O.time&&i.a.createElement("div",{className:"invalid-feedback"},O.time)),T&&0==h.length&&i.a.createElement("div",{className:"form-group"},i.a.createElement("i",{className:"material-icons"},"")," ",at("fields.loading")),C&&i.a.createElement("div",{className:"alert alert-danger",role:"alert"},C),fe&&i.a.createElement("div",{className:"form-check form-check-sm pb-2"},i.a.createElement("input",{type:"checkbox",id:"id-terms-of-service",className:"form-check-input"+(O.terms_of_service?" is-invalid":""),onChange:function(e){return Qe(e.target.checked)}}),i.a.createElement("label",{className:"form-check-label",for:"id-terms-of-service"}," ",i.a.createElement("small",null,fe)),O.terms_of_service&&i.a.createElement("div",{className:"invalid-feedback font-weight-bold"},O.terms_of_service)),i.a.createElement("div",{className:"form-group mb-0"},i.a.createElement("button",{type:"button",disabled:ve||Ne,className:"btn btn-sm btn-secondary",onClick:function(){return _e(!0),void o.a.post(e.base_path+"cbscheduler/schedulecb",et()).then((function(e){S([]),w(null),1==e.data.error?(_e(!1),e.data.messages&&(S(e.data.messages),e.data.messages.errorModal&&Ge(qe+1)),e.data.message&&w(e.data.message)):(xe(e.data.data),ye(!0))}))}},Ne&&i.a.createElement("i",{className:"material-icons"},"")," ",at("fields.schedule_callback"))))))}}}]);