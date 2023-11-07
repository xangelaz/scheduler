(this.webpackJsonpscheduler=this.webpackJsonpscheduler||[]).push([[0],{18:function(e,t,n){e.exports=n(48)},23:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(17),c=n.n(i),s=(n(23),n(1));function o(e,t){return t&&Object(s.a)(Object(s.a)({},t),{},{interviewer:e.interviewers[t.interviewer]})}var m=n(3),l=n(4),u=n.n(l),d=n(8);function p(e,t){switch(t.type){case"SET_DAY":return Object(s.a)(Object(s.a)({},e),{},{day:t.day});case"SET_APPLICATION_DATA":return Object(s.a)(Object(s.a)({},e),{},{days:t.days,appointments:t.appointments,interviewers:t.interviewers});case"SET_INTERVIEW":var n=Object(s.a)(Object(s.a)({},e.appointments[t.id]),{},{interview:t.interview&&Object(s.a)({},t.interview)}),a=Object(s.a)(Object(s.a)({},e.appointments),{},Object(d.a)({},t.id,n)),r=function(e){return e.appointments.length-e.appointments.reduce((function(e,t){return a[t].interview?e+1:e}),0)},i=e.days.map((function(e){return e.appointments.includes(t.id)?Object(s.a)(Object(s.a)({},e),{},{spots:r(e)}):e}));return Object(s.a)(Object(s.a)({},e),{},{appointments:a,days:i});default:throw new Error("Tried to reduce with unsupported action type: ".concat(t.type))}}function E(){var e=Object(a.useReducer)(p,{day:"Monday",days:[],appointments:{},interviewers:{}}),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){Promise.all([u.a.get("/api/days"),u.a.get("/api/appointments"),u.a.get("/api/interviewers")]).then((function(e){var t=Object(m.a)(e,3),n=t[0].data,a=t[1].data,i=t[2].data;return r({type:"SET_APPLICATION_DATA",days:n,appointments:a,interviewers:i})}))}),[]),function(e){Object(a.useEffect)((function(){var t=new WebSocket("ws://localhost:8001");return t.onmessage=function(t){var n=JSON.parse(t.data);"object"===typeof n&&"SET_INTERVIEW"===n.type&&e(n)},function(){t.close()}}),[e])}(r),{state:n,setDay:function(e){return r({type:"SET_DAY",day:e})},bookInterview:function(e,t){return u.a.put("/api/appointments/".concat(e),{interview:t}).then((function(){r({type:"SET_INTERVIEW",id:e,interview:t})}))},cancelInterview:function(e){return u.a.delete("/api/appointments/".concat(e)).then((function(){r({type:"SET_INTERVIEW",id:e,interview:null})}))}}}n(42);var _=n(5),v=n.n(_);n(43);function f(e){var t,n=v()("day-list__item",{"day-list__item--selected":e.selected,"day-list__item--full":0===e.spots});return r.a.createElement("li",{className:n,onClick:function(){return e.setDay(e.name)},"data-testid":"day"},r.a.createElement("h2",{className:"text--regular"},e.name),r.a.createElement("h3",{className:"text--light"},0===(t=e.spots)?"no spots remaining":1===t?"1 spot remaining":"".concat(t," spots remaining")))}function b(e){var t=e.days.map((function(t){return r.a.createElement(f,{key:t.id,name:t.name,spots:t.spots,selected:t.name===e.day,setDay:e.setDay})}));return r.a.createElement("ul",null,t)}n(44);function g(e){return r.a.createElement("header",{className:"appointment__time"},r.a.createElement("h4",{className:"text--semi-bold"},e.time),r.a.createElement("hr",{className:"appointment__separator"}))}function w(e){return r.a.createElement("main",{className:"appointment__add"},r.a.createElement("img",{className:"appointment__add-button",src:"images/add.png",alt:"Add",onClick:e.onAdd}))}function N(e){return r.a.createElement("main",{className:"appointment__card appointment__card--show"},r.a.createElement("section",{className:"appointment__card-left"},r.a.createElement("h2",{className:"text--regular"},e.student),r.a.createElement("section",{className:"interviewer"},r.a.createElement("h4",{className:"text--light"},"Interviewer"),r.a.createElement("h3",{className:"text--regular"},e.interviewer&&e.interviewer.name))),r.a.createElement("section",{className:"appointment__card-right"},r.a.createElement("section",{className:"appointment__actions"},r.a.createElement("img",{className:"appointment__actions-button",src:"images/edit.png",alt:"Edit",onClick:e.onEdit}),r.a.createElement("img",{className:"appointment__actions-button",src:"images/trash.png",alt:"Delete",onClick:e.onDelete}))))}var O=n(7);n(45),n(46);function h(e){var t=v()("interviewers__item",{"interviewers__item--selected":e.selected});return r.a.createElement("li",{className:t,onClick:e.setInterviewer},r.a.createElement("img",{className:"interviewers__item-image",src:e.avatar,alt:e.name}),e.selected&&e.name)}var y=function(e){var t=e.interviewers.map((function(t){return r.a.createElement(h,{key:t.id,id:t.id,name:t.name,avatar:t.avatar,selected:t.id===e.value,setInterviewer:function(n){return e.onChange(t.id)}})}));return r.a.createElement("section",{className:"interviewers"},r.a.createElement("h4",{className:"interviewers__header text--light"},"Interviewer"),r.a.createElement("ul",{className:"interviewers__list"},t))};n(47);function C(e){var t=v()("button",{"button--danger":e.danger,"button--confirm":e.confirm});return r.a.createElement("button",{className:t,onClick:e.onClick,disabled:e.disabled},e.children)}function S(e){var t=Object(a.useState)(e.name||""),n=Object(m.a)(t,2),i=n[0],c=n[1],s=Object(a.useState)(e.interviewer||null),o=Object(m.a)(s,2),l=o[0],u=o[1],d=Object(a.useState)(""),p=Object(m.a)(d,2),E=p[0],_=p[1];return r.a.createElement("main",{className:"appointment__card appointment__card--create"},r.a.createElement("section",{className:"appointment__card-left"},r.a.createElement("form",{autoComplete:"off",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("input",{className:"appointment__create-input text--semi-bold",name:"name",type:"text",placeholder:"Enter Student Name",value:i,onChange:function(e){c(e.target.value)},"data-testid":"student-name-input"})),r.a.createElement("section",{className:"appointment__validation"},E),r.a.createElement(y,{interviewers:e.interviewers,value:l,onChange:u})),r.a.createElement("section",{className:"appointment__card-right"},r.a.createElement("section",{className:"appointment__actions"},r.a.createElement(C,{danger:!0,onClick:function(){c(""),_(""),u(null),e.onCancel()}},"Cancel"),r.a.createElement(C,{confirm:!0,onClick:function(){""!==i?null!==l?(_(""),e.onSave(i,l)):_("Please select an interviewer"):_("Student name cannot be blank")}},"Save"))))}function T(e){return r.a.createElement("main",{className:"appointment__card appointment__card--confirm"},r.a.createElement("h1",{className:"text--semi-bold"},e.message),r.a.createElement("section",{className:"appointment__actions"},r.a.createElement(C,{danger:!0,onClick:e.onCancel},"Cancel"),r.a.createElement(C,{danger:!0,onClick:e.onConfirm},"Confirm")))}function I(e){return r.a.createElement("main",{className:"appointment__card appointment__card--error"},r.a.createElement("section",{className:"appointment__error-message"},r.a.createElement("h1",{className:"text--semi-bold"},"Error"),r.a.createElement("h3",{className:"text--light"},e.message)),r.a.createElement("img",{className:"appointment__error-close",src:"images/close.png",alt:"Close",onClick:e.onClose}))}function j(e){return r.a.createElement("main",{className:"appointment__card appointment__card--status"},r.a.createElement("img",{className:"appointment__status-image",src:"images/status.png",alt:"Loading"}),r.a.createElement("h1",{className:"text--semi-bold"},e.message))}function A(e){var t=function(e){var t=Object(a.useState)([e]),n=Object(m.a)(t,2),r=n[0],i=n[1];return{mode:r[r.length-1],transition:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i((function(n){return[].concat(t?Object(O.a)(n.slice(0,n.length-1)):Object(O.a)(n),[e])}))},back:function(){i((function(e){return e.length>1?Object(O.a)(e.slice(0,e.length-1)):Object(O.a)(e)}))}}}(e.interview?"SHOW":"EMPTY"),n=t.mode,i=t.transition,c=t.back;function s(t,n){var a={student:t,interviewer:n};i("SAVING"),e.bookInterview(e.id,a).then((function(){return i("SHOW")})).catch((function(e){return i("ERROR_SAVE",!0)}))}return r.a.createElement("article",{className:"appointment","data-testid":"appointment"},r.a.createElement(g,{time:e.time}),"EMPTY"===n&&r.a.createElement(w,{onAdd:function(){return i("CREATE")}}),"SHOW"===n&&r.a.createElement(N,{student:e.interview.student,interviewer:e.interview.interviewer,onDelete:function(){return i("CONFIRM")},onEdit:function(){return i("EDIT")}}),"CREATE"===n&&r.a.createElement(S,{interviewers:e.interviewers,onCancel:c,onSave:s}),"EDIT"===n&&r.a.createElement(S,{name:e.interview.student,interviewers:e.interviewers,onCancel:c,onSave:s}),"SAVING"===n&&r.a.createElement(j,{message:"Saving"}),"DELETING"===n&&r.a.createElement(j,{message:"Deleting"}),"CONFIRM"===n&&r.a.createElement(T,{message:"Are you sure you would like to delete?",onCancel:c,onConfirm:function(){i("DELETING",!0),e.cancelInterview(e.id).then((function(){return i("EMPTY")})).catch((function(e){return i("ERROR_DELETE",!0)}))}}),"ERROR_SAVE"===n&&r.a.createElement(I,{message:"Could not book appointment.",onClose:c}),"ERROR_DELETE"===n&&r.a.createElement(I,{message:"Could not cancel appointment.",onClose:c}))}function R(e){var t=E(),n=t.state,a=t.setDay,i=t.bookInterview,c=t.cancelInterview,s=function(e,t){var n=e.days.find((function(e){return t===e.name}));return 0===e.days.length||void 0===n?[]:n.interviewers.map((function(t){return e.interviewers[t]}))}(n,n.day),m=function(e,t){var n=e.days.find((function(e){return t===e.name}));return 0===e.days.length||void 0===n?[]:n.appointments.map((function(t){return e.appointments[t]}))}(n,n.day).map((function(e){return r.a.createElement(A,Object.assign({key:e.id},e,{interview:o(n,e.interview),interviewers:s,bookInterview:i,cancelInterview:c}))}));return r.a.createElement("main",{className:"layout"},r.a.createElement("section",{className:"sidebar"},r.a.createElement("img",{className:"sidebar--centered",src:"images/logo.png",alt:"Interview Scheduler"}),r.a.createElement("hr",{className:"sidebar__separator sidebar--centered"}),r.a.createElement("nav",{className:"sidebar__menu"},r.a.createElement(b,{days:n.days,day:n.day,setDay:a})),r.a.createElement("img",{className:"sidebar__lhl sidebar--centered",src:"images/lhl.png",alt:"Lighthouse Labs"})),r.a.createElement("section",{className:"schedule"},m,r.a.createElement(A,{key:"last",time:"5pm"})))}Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_WEBSOCKET_URL:"ws://localhost:8001"}).REACT_APP_API_BASE_URL&&(u.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_WEBSOCKET_URL:"ws://localhost:8001"}).REACT_APP_API_BASE_URL),c.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9b2780c9.chunk.js.map