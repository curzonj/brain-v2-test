(window.webpackJsonpkbase=window.webpackJsonpkbase||[]).push([[0],{100:function(t,e,n){},101:function(t,e,n){},102:function(t,e,n){},103:function(t,e,n){},118:function(t,e){},120:function(t,e){},179:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(85),u=n.n(c),i=(n(100),n(27)),s=n(14),o=(n(101),n(102),function(t){return a.a.createElement("div",null,a.a.createElement("ul",{className:"menu"},t.children),a.a.createElement("div",{style:{clear:"both"}}))}),p=(n(103),n(1)),l=n.n(p),f=n(2),h=n(9),d=n(86),b=n(87),m=n.n(b),x=n(88),v=n.n(x),k=n(93);function y(t,e){"function"===typeof t?Promise.resolve().then(t).catch((function(t){return y(t,e)})):(e||(e={}),e.err=t,console.error(e),console.error(t))}var w=n(33),g=n.n(w),E=n(49),O=n.n(E),j=n(50),_=n.n(j),N=n(89),q=n(180),S=q.a;function W(t,e){return _()(t,e,{valueEncoding:"id"})}var I={};function L(t){return I[t]||(I[t]=_()(C(),t,{valueEncoding:"id"})),I[t]}var P;new N.RdfStore(O()("rdf"),{dataFactory:S});function C(){return P||(P=g()(O()("wiki"))),P}var D;q.a.namedNode;function M(t){return L("topics").get((e=t,m()(e)));var e}function $(t){return J.apply(this,arguments)}function J(){return(J=Object(f.a)(l.a.mark((function t(e){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=W(L("notes"),e),t.next=3,pt(n);case 3:return r=t.sent,t.abrupt("return",r.map((function(t){return t.text})));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t,e){return z.apply(this,arguments)}function z(){return(z=Object(f.a)(l.a.mark((function t(e,n){var r,a,c,u;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.startsWith("/")||(e="/".concat(e)),"/index"===e&&(e="/inbox"),t.next=4,ct();case 4:return r=t.sent,a=W(L("notes"),e),c=v()(),u={_id:"$/queue/".concat(e,"/").concat(c),topic_id:e,seq:r,created_at:Date.now(),id:"/".concat(c),text:n.trim()},t.next=10,a.put(c,u);case 10:y(Object(f.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",it(u));case 1:case"end":return t.stop()}}),t)}))),{file:"db",fn:"attemptNoteUpload"});case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function U(t){return F.apply(this,arguments)}function F(){return(F=Object(f.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return JSON.parse(e),localStorage.couchdb_target=e,t.next=4,A();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function K(){return T.apply(this,arguments)}function T(){return(T=Object(f.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(navigator.onLine){t.next=2;break}return t.abrupt("return",!0);case 2:if(at()){t.next=5;break}return t.abrupt("return",!1);case 5:return e=rt(),y(Object(f.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.info());case 1:case"end":return t.stop()}}),t)}))),{at:"db.isConfigured"}),t.abrupt("return",!0);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(t){return G.apply(this,arguments)}function G(){return(G=Object(f.a)(l.a.mark((function t(e){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=L("notes"),t.next=3,pt(n);case 3:return r=t.sent,t.next=6,k.a(r,function(){var t=Object(f.a)(l.a.mark((function t(n){var r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==(r=n._id)){t.next=3;break}return t.abrupt("return",y(new Error("doc is missing _id"),{file:"db",fn:"uploadNotes",doc:n}));case 3:return t.next=5,e.get(r).catch(function(){var t=Object(f.a)(l.a.mark((function t(e){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(404===e.status){t.next=3;break}return y(e,{file:"db",fn:"uploadNotes",doc:n}),t.abrupt("return",e);case 3:if("deleted"!==e.reason){t.next=8;break}return r=W(L("notes"),n.topic_id),t.next=7,r.del(n.id);case 7:return t.abrupt("return",e);case 8:return t.abrupt("return");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 5:if(!(a=t.sent)){t.next=10;break}console.log({file:"db",fn:"uploadNotes",at:"skip",doc:n,existing:a}),t.next=12;break;case 10:return t.next=12,e.put(n).catch((function(t){return y(t,{file:"db",fn:"uploadNotes",doc:n})}));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Q(){return V.apply(this,arguments)}function V(){return(V=Object(f.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K();case 2:if(t.sent){t.next=5;break}return t.abrupt("return",!1);case 5:return y(A),t.abrupt("return",!0);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(){return H.apply(this,arguments)}function H(){return(H=Object(f.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(navigator.onLine){t.next=2;break}return t.abrupt("return");case 2:return e=rt(),t.next=5,X(e);case 5:return t.next=7,B(e);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function X(t){return Y.apply(this,arguments)}function Y(){return(Y=Object(f.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ct();case 2:if(n=t.sent){t.next=8;break}return t.next=6,Z(e);case 6:t.next=10;break;case 8:return t.next=10,et(e,n);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Z(t){return tt.apply(this,arguments)}function tt(){return(tt=Object(f.a)(l.a.mark((function t(e){var n,r,a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.allDocs({include_docs:!0,startkey:"$/topics/",endkey:"$/topics/\ufff0",update_seq:!0});case 2:return n=t.sent,r=n.rows,a=n.update_seq,(c=r.flatMap((function(t){var e=t.doc;return e?{type:"put",key:"!topics!".concat(ot(e._id)),value:lt(e)}:[]}))).push({type:"put",key:"!configs!lastSeq",value:a}),t.next=9,C().batch(c);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function et(t,e){return nt.apply(this,arguments)}function nt(){return(nt=Object(f.a)(l.a.mark((function t(e,n){var r,a,c,u;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.changes({include_docs:!0,since:n,limit:100,batch_size:100});case 2:if(r=t.sent,a=r.last_seq,0!==(c=r.results).length){t.next=7;break}return t.abrupt("return");case 7:return(u=c.flatMap((function(t){return t.id.startsWith("$/queue/")?[]:t.deleted?{type:"del",key:"!topics!".concat(ot(t.id))}:t.doc?{type:"put",key:"!topics!".concat(ot(t.id)),value:lt(t.doc)}:[]}))).push({type:"put",key:"!configs!lastSeq",value:a}),t.next=11,C().batch(u);case 11:return t.abrupt("return",et(e,a));case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function rt(){if(!D){var t=at();D=new d.a(t.url,t)}return D}function at(){if(localStorage.couchdb_target)try{var t=JSON.parse(localStorage.couchdb_target);if(!t.url||!t.auth)throw new Error("Invalid db target config");return t}catch(e){y(e),delete localStorage.couchdb_target}return null}function ct(){return ut.apply(this,arguments)}function ut(){return(ut=Object(f.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=L("configs"),t.abrupt("return",e.get("lastSeq").catch((function(t){})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function it(t){return st.apply(this,arguments)}function st(){return(st=Object(f.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(navigator.onLine){t.next=2;break}return t.abrupt("return");case 2:return n=rt(),t.next=5,n.put(e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ot(t){return(e=t,e.split("/").reverse())[0];var e}function pt(t,e){var n=[];return new Promise((function(r,a){t.createValueStream(e).on("data",(function(t){return n.push(t)})).on("error",(function(t){return a(t)})).on("end",(function(){return r(n)}))}))}function lt(t){return delete t._id,delete t._rev,t}n(3);var ft=[["next","Next"],["later","Later"],["related","Related"],["mentions","Mentions"],["links","Links"]],ht=[["related","Related"],["mentions","Mentions"],["links","Links"],["queue","Queue"]],dt=[["next","Next"],["later","Later"]];function bt(t){return mt.apply(this,arguments)}function mt(){return(mt=Object(f.a)(l.a.mark((function t(e){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.startsWith("/")||(e="/".concat(e)),t.next=3,M(e).catch(y);case 3:if(n=t.sent){t.next=6;break}return t.abrupt("return",{title:e,sections:[{text:"This page does not have any content yet."}]});case 6:return t.next=8,Promise.all([xt(n),kt(n),wt(n),St(n)]);case 8:return r=t.sent,t.t0=$t(n),t.next=12,Rt(n);case 12:return t.t1=t.sent,t.t2=r.flat(),t.abrupt("return",{title:t.t0,breadcrumbs:t.t1,sections:t.t2});case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function xt(t){return vt.apply(this,arguments)}function vt(){return(vt=Object(f.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,jt(dt,e);case 2:if(0!==(n=t.sent).length){t.next=5;break}return t.abrupt("return",[]);case 5:return t.abrupt("return",{title:"TODO",divs:n});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function kt(t){return yt.apply(this,arguments)}function yt(){return(yt=Object(f.a)(l.a.mark((function t(e){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.list,r=Jt(n),e.text||r){t.next=4;break}return t.abrupt("return",[]);case 4:return t.t0=e.text,t.next=7,It(r?void 0:e.list);case 7:return t.t1=t.sent,t.abrupt("return",{text:t.t0,list:t.t1});case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function wt(t){return gt.apply(this,arguments)}function gt(){return(gt=Object(f.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((n=e.list)&&!Jt(n)){t.next=3;break}return t.abrupt("return",[]);case 3:return t.abrupt("return",Promise.all(n.map(function(){var t=Object(f.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("string"!==typeof e||!e.startsWith("/")){t.next=5;break}return t.next=3,M(e);case 3:return n=t.sent,t.abrupt("return",Et(n));case 5:return t.abrupt("return",{text:e});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Et(t){return Ot.apply(this,arguments)}function Ot(){return(Ot=Object(f.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=$t(e),t.t1=e.text,t.next=4,It(e.list);case 4:return t.t2=t.sent,t.next=7,jt(ft,e);case 7:return t.t3=t.sent,t.abrupt("return",{title:t.t0,text:t.t1,list:t.t2,divs:t.t3});case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function jt(t,e){return _t.apply(this,arguments)}function _t(){return(_t=Object(f.a)(l.a.mark((function t(e,n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.map(function(){var t=Object(f.a)(l.a.mark((function t(e){var r,a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=Object(h.a)(e,2),a=r[0],c=r[1],n[a]){t.next=3;break}return t.abrupt("return",[]);case 3:return t.t0=c,t.next=6,It(n[a]);case 6:return t.t1=t.sent,t.t2={heading:t.t0,list:t.t1},t.abrupt("return",[t.t2]);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 2:return r=t.sent,t.abrupt("return",r.flat());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Nt(t){return qt.apply(this,arguments)}function qt(){return(qt=Object(f.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$(e.id);case 2:if(0!==(n=t.sent).length){t.next=5;break}return t.abrupt("return");case 5:n.forEach((function(t){e.queue=e.queue||[],e.queue.unshift(t)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function St(t){return Wt.apply(this,arguments)}function Wt(){return(Wt=Object(f.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Nt(e);case 2:return t.next=4,jt(ht,e);case 4:if(0!==(n=t.sent).length){t.next=7;break}return t.abrupt("return",[]);case 7:return t.abrupt("return",{divs:n});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function It(t){return Lt.apply(this,arguments)}function Lt(){return(Lt=Object(f.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&0!==e.length){t.next=2;break}return t.abrupt("return");case 2:return t.abrupt("return",Promise.all(e.map(function(){var t=Object(f.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("string"!==typeof e||!e.startsWith("/")){t.next=2;break}return t.abrupt("return",Pt(e));case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Pt(t){return Ct.apply(this,arguments)}function Ct(){return(Ct=Object(f.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(e);case 2:if(!(n=t.sent).title){t.next=7;break}return t.abrupt("return",{ref:e,label:$t(n)});case 7:if(n.text){t.next=11;break}return t.abrupt("return",{ref:e,label:$t(n)});case 11:return t.t0=e,t.t1=n.text,t.next=15,Dt(n.src);case 15:return t.t2=t.sent,t.abrupt("return",{ref:t.t0,text:t.t1,src:t.t2});case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Dt(t){return Mt.apply(this,arguments)}function Mt(){return(Mt=Object(f.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:if("string"===typeof e){t.next=6;break}return t.abrupt("return",e);case 6:if(!e.startsWith("/")){t.next=13;break}return t.next=9,M(e);case 9:return n=t.sent,t.abrupt("return",{ref:e,label:$t(n)});case 13:return t.abrupt("return",e);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $t(t){if(!t)return"Missing Page";var e,n=t.title||t.join;return!n&&t.link&&("string"===typeof t.link?n=t.link:"string"!==typeof(e=t.link)&&e.link?n=t.link.link:function(t){return"string"!==typeof t&&!!t.search}(t.link)&&(n=t.link.search)),n||"Note"}function Jt(t){return void 0!==t&&t.every((function(t){return"string"===typeof t&&!t.startsWith("/")}))}function Rt(t){return zt.apply(this,arguments)}function zt(){return(zt=Object(f.a)(l.a.mark((function t(e){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context){t.next=2;break}return t.abrupt("return",void 0);case 2:return n=e.context.split("/").slice(1),r=n.map((function(t,e){return"/".concat(n.slice(0,e+1).join("/"))})),t.abrupt("return",It(r));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Ut(t){var e=Object(r.useState)({}),n=Object(h.a)(e,2),a=n[0],c=n[1];return a.loaded!==t&&y(Object(f.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,bt(t);case 2:n=e.sent,c({page:n,loaded:t});case 4:case"end":return e.stop()}}),e)})))),a.page}function Ft(t){var e=t.page,n=t.topicId;return a.a.createElement("div",{className:"header"},e&&a.a.createElement(Bt,{breadcrumbs:e.breadcrumbs}),a.a.createElement("h1",{className:"title"},e?e.title:n))}function Kt(t){var e=t.match.params.topicId,n=Ut(e);return a.a.createElement("div",{className:"topicPage"},a.a.createElement(o,null,a.a.createElement("li",null,a.a.createElement(i.b,{to:"/index"},"index")),a.a.createElement("li",null,a.a.createElement(i.b,{to:"/add_note/".concat(e)},"add note"))),a.a.createElement(Ft,{topicId:e,page:n}),n?n.sections.map((function(t,e){return a.a.createElement("section",{key:e},t.title&&a.a.createElement("h2",{className:"title"},t.title),t.text&&a.a.createElement("p",null,t.text),t.list&&Tt(t.list),t.divs&&t.divs.map((function(t,e){return a.a.createElement("div",{key:e},t.heading&&a.a.createElement("h3",{className:"title"},t.heading),Tt(t.list))})))})):a.a.createElement("section",null,a.a.createElement("p",null,"Loading...")))}function Tt(t){return a.a.createElement("ul",null,t.map((function(t,e){return a.a.createElement("li",{key:e},function(t){return"string"===typeof t?t.startsWith("http")?Gt(t):a.a.createElement("p",null,t):t.link||t.search?Gt(t):t.label?Qt(t.ref,t.label):a.a.createElement("p",null,t.text,(e=t.src)?"string"===typeof e?a.a.createElement("span",null,"- $",e):e.ref?Qt(e.ref,e.label):a.a.createElement("pre",null,JSON.stringify(e)):void 0,"(",Qt(t.ref,"more","moreLink"),")");var e}(t))})))}function Bt(t){return a.a.createElement(a.a.Fragment,null)}function Gt(t){var e=document.documentElement.clientWidth<800;if("string"===typeof t||t.link){var n=t,r=t;return"string"!==typeof t&&(n=t.link,r=t.title||t.link),r.startsWith("https://en.wikipedia.org/wiki")?r="Wikipedia: ".concat(r.replace("https://en.wikipedia.org/wiki/","").replace(/_/g," ")):-1!==r.indexOf("pinboard.in/u:curzonj/")&&(r="Pinboard: ".concat(r.replace(/https?:\/\/pinboard.in\/u:curzonj\//,"").split("/").filter((function(t){return""!==t})).flatMap((function(t){return t.replace(/^t:/,"")})).join(", ")),n=n.replace(/^http:\/\//,"https://"),e&&(n=n.replace("pinboard.in","m.pinboard.in"))),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n},r)}if(t.search)return a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://google.com/search?q="+encodeURIComponent(t.search)},"Google: ",t.search)}function Qt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"refLink";return a.a.createElement(i.b,{className:n,to:encodeURI(t)},e||t)}var Vt=n(92),At=function(t){var e=t.handler,n=t.children,c=Object(Vt.a)(t,["handler","children"]),u=Object(r.useState)(""),i=Object(h.a)(u,2),s=i[0],p=i[1];function l(t){t.preventDefault(),y((function(){return e(s)}))}return a.a.createElement("div",c,a.a.createElement(o,null,a.a.createElement("li",null,a.a.createElement("button",{type:"button",className:"link-button",onClick:l},"done"))),n,a.a.createElement("form",null,a.a.createElement("textarea",{onKeyDown:function(t){13===t.which&&(t.metaKey||t.shiftKey)&&l(t)},autoComplete:"on",autoCapitalize:"sentences",required:!0,onChange:function(t){t&&t.target&&p(t.target.value)},value:s})))},Ht=function(t){var e=t.match.params.topicId,n=Ut(e);function r(){return(r=Object(f.a)(l.a.mark((function n(r){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""===r.trim()){n.next=3;break}return n.next=3,R(e,r);case 3:t.history.push("/".concat(e));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return a.a.createElement(At,{className:"topicPage",handler:function(t){return r.apply(this,arguments)}},a.a.createElement(Ft,{topicId:e,page:n}))},Xt=function(t){function e(){return(e=Object(f.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(n);case 2:t.history.push("/index");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return a.a.createElement(At,{handler:function(t){return e.apply(this,arguments)}},a.a.createElement("div",{className:"header"},a.a.createElement("h1",{className:"title"},"Enter the configuration")))},Yt=Object(s.g)((function(t){var e=Object(r.useState)(!1),n=Object(h.a)(e,2),c=n[0],u=n[1];return c||"/login"===t.location.pathname||y(Object(f.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:e.sent?u(!0):t.history.push("/login");case 4:case"end":return e.stop()}}),e)})))),a.a.createElement(a.a.Fragment,null)})),Zt=n(10),te=n(11),ee=n(19),ne=n(21),re=n(22),ae=function(t){function e(){return Object(Zt.a)(this,e),Object(ee.a)(this,Object(ne.a)(e).apply(this,arguments))}return Object(re.a)(e,t),Object(te.a)(e,[{key:"componentDidUpdate",value:function(t){this.props.location.pathname!==t.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),e}(a.a.Component),ce=Object(s.g)(ae);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement((function(){return a.a.createElement(i.a,{basename:"/brain-v2-test"},a.a.createElement(Yt,null),a.a.createElement(ce,null,a.a.createElement(s.d,null,a.a.createElement(s.a,{from:"/",to:"/index",exact:!0}),a.a.createElement(s.b,{path:"/login",component:Xt}),a.a.createElement(s.b,{path:"/add_note/:topicId",component:Ht}),a.a.createElement(s.b,{path:"/:topicId",component:Kt}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},95:function(t,e,n){t.exports=n(179)}},[[95,1,2]]]);
//# sourceMappingURL=main.2c0f7841.chunk.js.map