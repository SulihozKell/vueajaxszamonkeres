(function(e){function t(t){for(var r,u,s=t[0],i=t[1],c=t[2],l=0,d=[];l<s.length;l++)u=s[l],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vueajaxszamonkeres/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("table",[e._m(0),n("tbody",[e._l(e.statues,(function(t){return n("tr",{key:t.id},[n("td",[e._v(e._s(t.person))]),n("td",[e._v(e._s(t.height))]),n("td",[e._v(e._s(t.price))]),n("td",[n("button",{on:{click:function(n){return e.deleteStatue(t.id)}}},[e._v("Törlés")]),n("button",{on:{click:function(n){return e.editStatue(t.id)}}},[e._v("Szerkesztés")])])])})),n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.statue.person,expression:"statue.person"}],attrs:{type:"text"},domProps:{value:e.statue.person},on:{input:function(t){t.target.composing||e.$set(e.statue,"person",t.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.statue.height,expression:"statue.height"}],attrs:{type:"number"},domProps:{value:e.statue.height},on:{input:function(t){t.target.composing||e.$set(e.statue,"height",t.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.statue.price,expression:"statue.price"}],attrs:{type:"number"},domProps:{value:e.statue.price},on:{input:function(t){t.target.composing||e.$set(e.statue,"price",t.target.value)}}})]),n("td",[n("button",{on:{click:e.newStatue}},[e._v("Mentés")]),n("button",{on:{click:e.resetForm}},[e._v("Mégse")])])])],2)])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Személy")]),n("th",[e._v("Magasság")]),n("th",[e._v("Ár")]),n("th",[e._v("Műveletek")])])])}],u=n("1da1"),s=(n("96cf"),n("d3b7"),n("e9c4"),{name:"App",components:{},data:function(){return{statue:{id:null,person:null,height:0,price:0},statues:[]}},methods:{loadData:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://127.0.0.1:8000/api/statues");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e.statues=r;case 7:case"end":return t.stop()}}),t)})))()},newStatue:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://127.0.0.1:8000/api/statues",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e.statue)});case 2:return t.next=4,e.loadData();case 4:e.resetForm();case 5:case"end":return t.stop()}}),t)})))()},deleteStatue:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://127.0.0.1:8000/api/statues/".concat(e),{method:"DELETE"});case 2:return n.next=4,t.loadData();case 4:case"end":return n.stop()}}),n)})))()},resetForm:function(){this.statue={id:null,person:"",height:0,price:0}}},mounted:function(){this.loadData()}}),i=s,c=(n("034f"),n("2877")),p=Object(c["a"])(i,a,o,!1,null,null,null),l=p.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.851c43f8.js.map