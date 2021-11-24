(function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"092f":function(e,t,n){"use strict";n("72e6")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("BedwettingTracker")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bedwetting-tracker"},[n("h1",[e._v(" ABDL Bedwetting Tracker (WIP) "),n("button",{attrs:{type:"button"},on:{click:e.exportData}},[e._v(" Export ")])]),n("Calendar",{attrs:{"wetting-events":e.flattenedWettingEvents},on:{"day-selected":e.onDaySelected}}),n("EventEditor",{attrs:{"wetting-event":e.selectedEvent},on:{change:function(t){return e.addWettingEvent(t)},delete:e.deleteSelectedEvent}})],1)},c=[],u=(n("07ac"),n("d3b7"),n("159b"),n("e9c4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"foo"},[n("VCalendar",{attrs:{"is-dark":"","first-day-of-week":2,attributes:e.calendarAttributes},on:{dayclick:function(t){return e.onDayClick(t.date)}}})],1)}),s=[],l=n("ade3"),d=(n("d81d"),n("5887")),p=n("d4ec"),f=n("bee2"),v=(n("bf19"),n("3835"));n("4fad"),n("c1f9");function g(e){var t=Object.entries(e),n=t.map((function(e){var t=Object(v["a"])(e,2),n=t[0],r=t[1];return[r,n]}));return Object.fromEntries(n)}var y={DRY:"dry",WOKE_UP_WET:"woke up wet, with no memory of wetting",WOKE_UP_AND_WET:"woke up to wet during night"},h=g(y),m=function(){function e(t){var n=t.date,r=t.type,o=t.note,a=void 0===o?null:o;Object(p["a"])(this,e),Object(l["a"])(this,"date",void 0),Object(l["a"])(this,"type",void 0),Object(l["a"])(this,"note",null),this.date=n,this.type=r,this.note=a}return Object(f["a"])(e,[{key:"toJSON",value:function(){return{date:this.date.toJSON(),type:h[this.type],note:this.note}}}],[{key:"fromJSON",value:function(t){return new e({date:new Date(t.date),type:y[t.type],note:t.note})}},{key:"fromJSONString",value:function(t){var n=JSON.parse(t);return e.fromJSON(n)}},{key:"listFromJSONString",value:function(t){var n=JSON.parse(t);return n.map((function(t){return e.fromJSON(t)}))}}]),e}(),b=r["default"].extend({name:"Calendar",components:{VCalendar:d["Calendar"]},props:{wettingEvents:{default:function(){return[]},type:Array,required:!0,validator:function(e){return e.every((function(e){return e instanceof m}))}}},data:function(){return{date:new Date}},computed:{calendarAttributes:function(){return this.wettingEvents.map((function(e){var t,n=(t={},Object(l["a"])(t,y.DRY,"gray"),Object(l["a"])(t,y.WOKE_UP_AND_WET,"green"),Object(l["a"])(t,y.WOKE_UP_WET,"blue"),t);return{dates:e.date,highlight:n[e.type],popover:{label:e.note}}}))}},methods:{onDayClick:function(e){this.$emit("day-selected",e)}}}),E=b,w=(n("092f"),n("2877")),_=Object(w["a"])(E,u,s,!1,null,"ce7d7882",null),O=_.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"event-editor",on:{submit:function(t){return t.preventDefault(),e.onSave.apply(null,arguments)}}},[n("h2",{staticClass:"header"},[e._v(" Edit wetting event ")]),n("label",{staticClass:"date"},[e._v(" Date "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.dateString,expression:"dateString"}],attrs:{type:"date",readonly:""},domProps:{value:e.dateString},on:{input:function(t){t.target.composing||(e.dateString=t.target.value)}}})]),n("label",{staticClass:"note"},[e._v(" Note "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.note,expression:"note"}],domProps:{value:e.note},on:{input:function(t){t.target.composing||(e.note=t.target.value)}}})]),n("fieldset",{staticClass:"type"},[n("legend",[e._v("Type")]),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio"},domProps:{value:e.WettingType.WOKE_UP_WET,checked:e._q(e.type,e.WettingType.WOKE_UP_WET)},on:{change:function(t){e.type=e.WettingType.WOKE_UP_WET}}}),e._v(" Woke up wet ")]),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio"},domProps:{value:e.WettingType.WOKE_UP_AND_WET,checked:e._q(e.type,e.WettingType.WOKE_UP_AND_WET)},on:{change:function(t){e.type=e.WettingType.WOKE_UP_AND_WET}}}),e._v(" Woke up, wet, then went back to sleep ")]),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio"},domProps:{value:e.WettingType.DRY,checked:e._q(e.type,e.WettingType.DRY)},on:{change:function(t){e.type=e.WettingType.DRY}}}),e._v(" Woke up dry ")])]),n("button",{staticClass:"delete-button",attrs:{type:"button"},on:{click:function(t){return e.$emit("delete")}}},[e._v(" Delete ")]),n("button",{staticClass:"save-button",attrs:{type:"submit"}},[e._v(" Save ")])])},S=[],k=(n("ac1f"),n("1276"),r["default"].extend({name:"EventEditor",props:{wettingEvent:{default:null,type:m,required:!1}},data:function(){return{date:null,note:"",type:y.WOKE_UP_WET}},computed:{WettingType:function(){return y},dateString:function(){var e;return null===(e=this.date)||void 0===e?void 0:e.toISOString().split("T")[0]}},watch:{wettingEvent:function(e){this.date=e.date,this.note=e.note,this.type=e.type}},methods:{onSave:function(){var e=new m({date:this.date,note:this.note,type:this.type});this.$emit("change",e)}}})),T=k,j=(n("b8a3"),Object(w["a"])(T,W,S,!1,null,"75412ff0",null)),D=j.exports,N="bt-events",P=r["default"].extend({name:"BedwettingTracker",components:{Calendar:O,EventEditor:D},data:function(){return{selectedEvent:null,wettingEvents:{}}},computed:{flattenedWettingEvents:{get:function(){return Object.values(this.wettingEvents)},set:function(e){var t=this;this.wettingEvents={},e.forEach((function(e){t.addWettingEvent(e)}))}}},watch:{flattenedWettingEvents:function(e){localStorage.setItem(N,JSON.stringify(e))}},created:function(){var e=localStorage.getItem(N);if(e){var t=m.listFromJSONString(e);this.flattenedWettingEvents=t}},methods:{addWettingEvent:function(e){var t=e.date.toDateString();this.$set(this.wettingEvents,t,e)},deleteSelectedEvent:function(){var e,t=null===(e=this.selectedEvent)||void 0===e?void 0:e.date.toDateString();this.wettingEvents[t]&&this.$delete(this.wettingEvents,t)},exportData:function(){var e;navigator.clipboard.writeText(null!==(e=localStorage.getItem(N))&&void 0!==e?e:"")},onDaySelected:function(e){var t;this.selectedEvent=null!==(t=this.wettingEvents[e.toDateString()])&&void 0!==t?t:new m({date:e,type:y.WOKE_UP_WET,note:""})}}}),x=P,C=(n("f39c"),Object(w["a"])(x,i,c,!1,null,"f7cac3f8",null)),A=C.exports,J=r["default"].extend({name:"App",components:{BedwettingTracker:A}}),K=J,U=(n("5c0b"),Object(w["a"])(K,o,a,!1,null,null,null)),$=U.exports,q=n("9483");Object(q["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e($)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"72e6":function(e,t,n){},"92d2":function(e,t,n){},"9c0c":function(e,t,n){},"9cb9":function(e,t,n){},b8a3:function(e,t,n){"use strict";n("92d2")},f39c:function(e,t,n){"use strict";n("9cb9")}});
//# sourceMappingURL=app.d05fc0ed.js.map