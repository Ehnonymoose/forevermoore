(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(t,n,e){"use strict";var o=e(0),r=e(186),l=e.n(r);o.a.component("VGallery",l.a)},171:function(t,n,e){},173:function(t,n,e){},180:function(t,n,e){},189:function(t,n,e){"use strict";var o={data:function(){return{links:[{label:"Home",to:"/"},{label:"Our Story",to:"/story"},{label:"Wedding Party",to:"/fellowship-of-the-ring"},{label:"Logistics",to:"/logistics"},{label:"RSVP",to:"/rsvp"},{label:"Registry",to:"/registry"}]}}},r=(e(225),e(50)),l=e(67),c=e.n(l),v=e(269),f=e(265),_=e(270),d=e(142),m=e(143),h=e(89),y=e(109),V=e(268),k=e(266),C=e(70),w=e(267),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-sheet",{staticClass:"navbar",attrs:{tag:"header",elevation:"1"}},[e("v-container",{staticClass:"py-0",attrs:{fluid:""}},[e("v-row",{attrs:{align:"center","no-gutters":""}},[e("v-col",{staticClass:"d-sm-none",attrs:{cols:"1"}},[e("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("v-btn",t._g({attrs:{icon:""}},o),[e("v-icon",[t._v("mdi-menu")])],1)]}}])},[t._v(" "),e("v-list",t._l(t.links,(function(link){return e("v-list-item",{key:link.label,attrs:{to:link.to,disabled:link.soon}},[e("v-list-item-title",[t._v(t._s(link.label))])],1)})),1)],1)],1),t._v(" "),e("v-col",{staticClass:"app-title text-center",attrs:{cols:"10","offset-sm":"1"}},[t._v("\n        Daniel "),e("span",{staticStyle:{"font-size":"0.7em"}},[t._v("&")]),t._v(" Christine\n      ")])],1),t._v(" "),e("v-row",{staticClass:"hidden-xs-only pb-0 justify-center nav-item-row"},[t._l(t.links,(function(link){return[e("div",{key:link.label,staticClass:"pb-0"},[link.soon?e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("v-btn",t._g({key:link.label,staticClass:"nav-item coming-soon",attrs:{text:"",tile:"",block:""}},o),[t._v("\n              "+t._s(link.label)+" \n              ")])]}}],null,!0)},[t._v(" "),e("span",[t._v("Coming soon!")])]):e("v-btn",{key:link.label,staticClass:"nav-item",attrs:{text:"",tile:"",block:"",nuxt:"",href:link.to}},[t._v("\n          "+t._s(link.label)+" \n          ")])],1)]}))],2)],1)],1)}),[],!1,null,null,null),x=component.exports;c()(component,{VBtn:v.a,VCol:f.a,VContainer:_.a,VIcon:d.a,VList:m.a,VListItem:h.a,VListItemTitle:y.a,VMenu:V.a,VRow:k.a,VSheet:C.a,VTooltip:w.a});var N={components:{Navbar:x}},E=(e(252),e(264)),S=e(271),j=Object(r.a)(N,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{light:""}},[e("Navbar"),t._v(" "),e("v-main",[e("v-container",[e("nuxt")],1)],1)],1)}),[],!1,null,null,null);n.a=j.exports;c()(j,{VApp:E.a,VContainer:_.a,VMain:S.a})},194:function(t,n,e){t.exports=e(195)},222:function(t,n,e){"use strict";e(171)},225:function(t,n,e){"use strict";e(173)},252:function(t,n,e){"use strict";e(180)},59:function(t,n,e){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}}},r=(e(222),e(50)),l=e(67),c=e.n(l),v=e(264),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"fe76af36",null);n.a=component.exports;c()(component,{VApp:v.a})}},[[194,8,1,9]]]);