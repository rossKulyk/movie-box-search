(this["webpackJsonpmovie-box-search"]=this["webpackJsonpmovie-box-search"]||[]).push([[0],{29:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(20),n=s.n(c),r=s(9),i=(s(29),s(2)),o=s(4),d=s(0),l=[{to:"/",text:"Home"},{to:"/start",text:"Start"}];function j(){return Object(d.jsx)("div",{children:Object(d.jsx)("ul",{className:"navs--list",children:l.map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:e.to,className:"navs--links",children:e.text})},t)}))})})}function u(e){var t=e.title,s=e.subtitle;return Object(d.jsxs)("div",{className:"title-wrapper",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)("p",{children:s})]})}function h(e){var t=e.children;return Object(d.jsxs)("div",{children:[Object(d.jsx)(u,{title:"Movie Box Search",subtitle:"Are you looking for a movie or an actor?"}),Object(d.jsx)(j,{}),t]})}var b=s(14),m=s.n(b);function O(e){var t=e.id,s=e.name,a=e.image,c=e.summary,n=e.onStarClick,i=e.isStarred,o=c?"".concat(c.split(" ").slice(0,10).join(" ").replace(/<.+?>/g,""),"..."):"No description";return Object(d.jsxs)("div",{className:"show-card--div",children:[Object(d.jsx)("div",{className:"show-card--img-wrapper",children:Object(d.jsx)("img",{src:a,alt:"show"})}),Object(d.jsx)("h1",{children:s}),Object(d.jsx)("p",{children:o}),Object(d.jsxs)("div",{className:"showcard-btns--div",children:[Object(d.jsx)(r.b,{to:"/show/".concat(t),children:"Read more"}),Object(d.jsx)("button",{type:"button",onClick:n,children:Object(d.jsx)("div",{className:i?"star-active":"star"})})]})]})}var v="data:image/png;base64,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",p=s(10),g=s(24),A=s(22),x=s(19),w=s.n(x),f="https://api.tvmaze.com";function C(e){return N.apply(this,arguments)}function N(){return(N=Object(A.a)(w.a.mark((function e(t){var s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f).concat(t)).then((function(e){return e.json()}));case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B="FETCH_SUCCESS",R="FETCH_FAIL";function D(e,t){switch(t.type){case"ADD":return[].concat(Object(g.a)(e),[t.showId]);case"REMOVE":return e.filter((function(e){return e!==t.showId}));default:return e}}function S(e,t,s){console.log("usePersistedReducer HOOK, passed key > ",s);var c=Object(a.useReducer)(e,t,(function(e){var t=localStorage.getItem(s);return console.log("usePersistedReducer HOOK, persisted > ",t),t?JSON.parse(t):e})),n=Object(o.a)(c,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){localStorage.setItem(s,JSON.stringify(r))}),[r,s]),console.log("usePersistedReducer HOOK, state > ",r),[r,i]}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"shows";return S(D,[],e)}var y=function(e,t){switch(t.type){case B:return{isLoading:!1,errorMsg:null,show:t.show};case R:return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1,errorMsg:t.errorMsg,show:null});default:return e}};function V(e){var t=e.data,s=E(),a=Object(o.a)(s,2),c=a[0],n=a[1];return console.log("ShowGrid data > ",t),Object(d.jsx)(m.a,{delay:"100",className:"show-grid--flex",children:t.map((function(e){var t=e.show,s=c.includes(t.id);return Object(d.jsx)(O,{id:t.id,name:t.name,image:t.image?t.image.medium:v,summary:t.summary,onStarClick:function(){n(s?{type:"REMOVE",showId:t.id}:{type:"ADD",showId:t.id})},isStarred:s},t.id)}))})}function Q(e){var t=e.name,s=e.image,a=e.country,c=e.birthday,n=e.deathday,r=e.gender;return Object(d.jsxs)("div",{className:"show-card--div",children:[Object(d.jsx)("div",{className:"show-card--img-wrapper",children:Object(d.jsx)("img",{src:s,alt:"actor"})}),Object(d.jsxs)("h1",{children:[t," ",r?"(".concat(r,")"):null]}),Object(d.jsx)("p",{children:a?"Comes from ".concat(a.name):"No country known"}),c?Object(d.jsxs)("p",{children:["Born ",c]}):null,Object(d.jsx)("p",{children:n?"Died ".concat(n):"Alive"})]})}function F(e){var t=e.data;return Object(d.jsx)(m.a,{delay:"100",className:"show-grid--flex",children:t.map((function(e){var t=e.person;return Object(d.jsx)(Q,{name:t.name,image:t.image?t.image.medium:v,country:t.country?t.country:null,birthday:t.birthday,deathday:t.deathday,gender:t.gender},t.id)}))})}var I=s(23),P=["label"];function W(e){var t=e.label,s=Object(I.a)(e,P);return console.log("CustomRadioBtn label > ",t),console.log("CustomRadioBtn restProps > ",s),Object(d.jsxs)("label",{htmlFor:s.id,className:"custom-radio-btn",children:[t," ",Object(d.jsx)("input",Object(p.a)(Object(p.a)({},s),{},{type:"radio",className:"custom-radio-btn--input"}))]})}function H(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lastQuery",t=Object(a.useState)((function(){var t=sessionStorage.getItem(e);return console.log("useLastQuery persistedData > ",t),t?JSON.parse(t):""})),s=Object(o.a)(t,2),c=s[0],n=s[1];function r(t){n(t),console.log("useLastQuery, setPersistedInput() newState > ",t),sessionStorage.setItem(e,JSON.stringify(t))}return[c,r]}(),t=Object(o.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(null),r=Object(o.a)(n,2),i=r[0],l=r[1],j=Object(a.useState)("shows"),u=Object(o.a)(j,2),b=u[0],m=u[1],O="shows"===b;function v(){C("/search/".concat(b,"?q=").concat(s)).then((function(e){l(e)}))}function p(e){m(e.target.value)}return Object(d.jsxs)(h,{children:[Object(d.jsx)("input",{className:"search-input",type:"text",placeholder:"Search",onChange:function(e){c(e.target.value)},onKeyDown:function(e){13===e.keyCode&&v()},value:s}),Object(d.jsxs)("div",{className:"radio-input-wrapper",children:[Object(d.jsx)("div",{children:Object(d.jsx)(W,{label:"Shows",id:"shows-search",value:"shows",onChange:p,checked:O})}),Object(d.jsx)("div",{children:Object(d.jsx)(W,{label:"Actors",id:"actors-search",value:"people",onChange:p,checked:!O})})]}),Object(d.jsx)("div",{className:"search-button-wrapper",children:Object(d.jsx)("button",{type:"button",onClick:v,children:"search"})}),i&&0===i.length?Object(d.jsx)("div",{children:"No results"}):i&&i.length>0?i[0].show?Object(d.jsx)(V,{data:i}):Object(d.jsx)(F,{data:i}):null]})}function U(){var e=E(),t=Object(o.a)(e,1)[0],s=Object(a.useState)(null),c=Object(o.a)(s,2),n=c[0],r=c[1],i=Object(a.useState)(!0),l=Object(o.a)(i,2),j=l[0],u=l[1],b=Object(a.useState)(null),m=Object(o.a)(b,2),O=m[0],v=m[1];return Object(a.useEffect)((function(){if(t&&t.length>0){var e=t.map((function(e){return C("/shows/".concat(e))}));Promise.all(e).then((function(e){return e.map((function(e){return{show:e}}))})).then((function(e){r(e),u(!1)})).catch((function(e){v(e.message),u(!1)}))}else u(!1)}),[t]),Object(d.jsxs)(h,{children:["Star Page: ",j&&Object(d.jsx)("div",{children:"Shows are still loading..."}),O&&Object(d.jsxs)("div",{children:["Error occured: ",O]}),!j&&!n&&Object(d.jsx)("div",{children:"Noshows to dislay!"}),!j&&!O&&n&&Object(d.jsx)(V,{data:n})]})}function z(e){var t=e.name,s=e.rating,a=e.summary,c=e.tags,n=e.image;return Object(d.jsxs)("div",{className:"show-main-data--wrapper",children:[Object(d.jsx)("img",{src:n?n.original:v,alt:"show-cover"}),Object(d.jsxs)("div",{className:"show-main-data--text",children:[Object(d.jsxs)("div",{className:"show-main-data--head",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"star-active"}),Object(d.jsx)("span",{children:s.average||"N/A"})]})]}),Object(d.jsx)("div",{className:"show-main-data--summary",dangerouslySetInnerHTML:{__html:a}}),Object(d.jsxs)("div",{children:["Tags:"," ",Object(d.jsx)("div",{className:"show-main-data--tag-list",children:c.map((function(e,t){return Object(d.jsx)("span",{children:e},t)}))})]})]})]})}function M(e){var t=e.status,s=e.premiered,a=e.network;return Object(d.jsxs)("div",{className:"detail-data--wrapper",children:[Object(d.jsxs)("p",{className:"detail-data--wrapper-p",children:["Status: ",Object(d.jsx)("span",{className:"detail-data--wrapper-s",children:t})]}),Object(d.jsxs)("p",{className:"detail-data--wrapper",children:["Premiered ",s," ",a?"on ".concat(a.name):null]})]})}function q(e){var t=e.seasons;return Object(d.jsxs)("div",{className:"seasons-data--wrapper",children:[Object(d.jsxs)("p",{children:["Seasons in total: ",Object(d.jsx)("span",{children:t.length})]}),Object(d.jsxs)("p",{children:["Episodes in total:"," ",Object(d.jsx)("span",{children:t.reduce((function(e,t){return e+t.episodeOrder}),0)})]}),Object(d.jsx)("div",{className:"seasons-data--list",children:t.map((function(e){return Object(d.jsxs)("div",{className:"seasons-data--item",children:[Object(d.jsxs)("div",{className:"seasons-data--left",children:[Object(d.jsxs)("p",{children:["Season ",e.number]}),Object(d.jsxs)("p",{children:["Episodes: ",Object(d.jsx)("span",{children:e.episodeOrder})]})]}),Object(d.jsxs)("div",{className:"seasons-data--right",children:["Aired:"," ",Object(d.jsxs)("span",{children:[e.premiereDate," - ",e.endDate]})]})]},e.id)}))})]})}function L(e){var t=e.cast;return Object(d.jsx)("div",{className:"cast-data--wrapper",children:t.length?t.map((function(e,t){var s=e.person,a=e.character,c=e.voice;return Object(d.jsxs)("div",{className:"cast-data--item",children:[Object(d.jsx)("div",{className:"cast-data--img-wrapper",children:Object(d.jsx)("img",{src:s.image?s.image.medium:v,alt:"cast-person",className:"cast-data--img"})}),Object(d.jsx)("div",{className:"cast-data--actor",children:Object(d.jsxs)("span",{children:[Object(d.jsx)("span",{style:{fontWeight:"bold"},children:s.name}),"| ",a.name," ",c?"| Voice":""]})})]},t)})):"N/A"})}function J(){var e=function(e){var t=Object(a.useReducer)(y,{show:null,isLoading:!0,errorMsg:null}),s=Object(o.a)(t,2),c=s[0],n=s[1];return Object(a.useEffect)((function(){var t=!0;return C("/shows/".concat(e,"?embed[]=seasons&embed[]=cast")).then((function(e){t&&n({type:B,show:e})})).catch((function(e){t&&n({type:R,errorMsg:e.message})})),function(){t=!1}}),[e]),c}(Object(i.f)().id),t=e.show,s=e.isLoading,c=e.errorMsg;return s?Object(d.jsx)("div",{children:"Data is loading"}):c?Object(d.jsxs)("div",{children:["Error is occured: ",c]}):Object(d.jsxs)("div",{className:"show-page--wrapper",children:["Single Show Page:",Object(d.jsx)(z,{image:t.image,name:t.name,rating:t.rating,tags:t.genres,summary:t.summary}),Object(d.jsxs)("div",{className:"show-page--info",children:[Object(d.jsx)("h2",{children:"Details"}),Object(d.jsx)(M,{network:t.network,status:t.status,premiered:t.premiered})]}),Object(d.jsxs)("div",{className:"show-page--info",children:[Object(d.jsx)("h2",{children:"Seasons"}),Object(d.jsx)(q,{seasons:t._embedded.seasons})]}),Object(d.jsxs)("div",{className:"show-page--info",children:[Object(d.jsx)("h2",{children:"Cast"}),Object(d.jsx)(L,{cast:t._embedded.cast})]})]})}var X=function(){return Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",children:Object(d.jsx)(H,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/start",children:Object(d.jsx)(U,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/show/:id",children:Object(d.jsx)(J,{})}),Object(d.jsx)(i.a,{children:Object(d.jsx)("div",{children:"Not found"})})]})};n.a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(X,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.0993fd19.chunk.js.map