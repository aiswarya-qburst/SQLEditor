(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),u=n.n(c),o=n(1),l=(n(17),n(11)),s=n.n(l),i=function(e){var t=e.handleChange;return r.a.createElement("div",null,r.a.createElement(s.a,{onValueChange:function(e){return t(e)},highlight:function(){},padding:10,placeholder:"Type query here...",style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,height:"200px",border:"1px dashed black"}}))},m=function(e){var t=e.handleClick;return r.a.createElement("button",{type:"button",className:"btn",onClick:t},"Run Query")},f=n(6),h=n(12),d=function(e){var t=e.result,n=r.a.useMemo((function(){return t||[]}),[t]),a=r.a.useMemo((function(){var e=[];return t.length>0&&Object.keys(t[0]).forEach((function(t){e=[].concat(Object(f.a)(e),[{Header:t.toUpperCase(),accessor:t}])})),e}),[t]),c=Object(h.useTable)({columns:a,data:n}),u=c.getTableProps,o=c.getTableBodyProps,l=c.headerGroups,s=c.rows,i=c.prepareRow;return r.a.createElement("table",u(),r.a.createElement("thead",null,l.map((function(e){return r.a.createElement("tr",Object.assign({className:"header"},e.getHeaderGroupProps()),e.headers.map((function(e){return r.a.createElement("th",e.getHeaderProps(),e.render("Header"))})))}))),r.a.createElement("tbody",o(),s.map((function(e){return i(e),r.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return r.a.createElement("td",e.getCellProps(),e.render("Cell"))})))}))))},E=n(5),b=n(7),p=n(2),O=(n(21),function(e){var t=e.handleMenuClick,n=Object(a.useState)({}),c=Object(o.a)(n,2),u=c[0],l=c[1];return Object(a.useEffect)((function(){fetch("/users?sqlquery='".concat('SELECT * FROM information_schema.columns WHERE table_schema="testdb" ORDER BY table_name,ordinal_position',"'")).then((function(e){return e.json()})).then((function(e){return l(function(e){var t={};return e.map((function(e){return Object.keys(t).includes(e.TABLE_NAME)?t[e.TABLE_NAME]=[].concat(Object(f.a)(t[e.TABLE_NAME]),[e]):t=Object(b.a)(Object(b.a)({},t),{},Object(E.a)({},e.TABLE_NAME,[e])),!0})),t}(e))})).catch((function(e){return console.warn(e)}))}),[]),r.a.createElement(p.c,null,r.a.createElement(p.d,null,"testdb"),u&&r.a.createElement(p.a,{iconShape:"square"},Object.entries(u).map((function(e){var n=Object(o.a)(e,2),a=n[0],c=n[1];return r.a.createElement(p.e,{title:a,onOpenChange:function(e){return function(e,n){var a="select * from ".concat(n);e&&fetch("/users?sqlquery='".concat(a,"'")).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return console.warn(e)}))}(e,a)}},c.map((function(e){return r.a.createElement(p.e,{title:e.COLUMN_NAME},r.a.createElement(p.b,null,e.COLUMN_TYPE))})))}))))});var j=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)([]),l=Object(o.a)(u,2),s=l[0],f=l[1],h=Object(a.useState)(!1),E=Object(o.a)(h,2),b=E[0],p=E[1];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"sidenav"},r.a.createElement(O,{handleMenuClick:f})),r.a.createElement("div",{className:"main"},r.a.createElement(i,{handleChange:function(e){return c(e)}}),r.a.createElement(m,{handleClick:function(){fetch("/users?sqlquery='".concat(n,"'")).then((function(e){return e.json()})).then((function(e){f(e),p(!0)})).catch((function(e){return console.warn(e)}))}}),r.a.createElement(d,{result:s,fetched:b})))};u.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ba9be30a.chunk.js.map