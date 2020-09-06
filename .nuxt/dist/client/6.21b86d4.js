(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{188:function(t,e,r){"use strict";r.d(e,"g",(function(){return c})),r.d(e,"i",(function(){return o})),r.d(e,"j",(function(){return l})),r.d(e,"e",(function(){return d})),r.d(e,"f",(function(){return v})),r.d(e,"b",(function(){return f})),r.d(e,"k",(function(){return m})),r.d(e,"c",(function(){return _})),r.d(e,"h",(function(){return h})),r.d(e,"a",(function(){return O})),r.d(e,"d",(function(){return C}));var n=r(61),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},f=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},m=function(data,t){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(t),data:data})},_=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})},h=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},O=function(t,data){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})},C=function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e)})}},257:function(t,e,r){"use strict";r.r(e);r(78),r(30),r(62);var n=r(43),c=(r(31),r(13),r(44),r(41)),o=(r(184),r(185),r(29),r(4)),l=r(188),d=r(61),v=r(63);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={name:"HomeIndex",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,v,f,m,_,h,O,C,j,k,y,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=Number.parseInt(r.page||1),o=10,v=r.tab||"global_feed",f=r.tag,m="your_feed"!==v?l.g:l.i,e.next=8,Promise.all([m({limit:o,offset:(n-1)*o,tag:f}),Object(d.b)({method:"GET",url:"/api/tags"})]);case 8:return _=e.sent,h=Object(c.a)(_,2),O=h[0],C=h[1],j=O.data,k=j.articles,y=j.articlesCount,x=C.data.tags,k.forEach((function(article){return article.onFavoritedDisabled=!1})),e.abrupt("return",{articles:k,articlesCount:y,tags:x,limit:o,page:n,tab:v,tag:f});case 16:case"end":return e.stop()}}),e)})))()},watchQuery:["page","tag","tab"],computed:m(m({},Object(v.b)(["user"])),{},{totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}}),methods:{onFavorited:function(article){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.user){e.next=16;break}if(article.onFavoritedDisabled=!0,!article.favorited){e.next=9;break}return e.next=5,Object(l.e)(article.slug);case 5:article.favorited=!1,article.favoritesCount+=-1,e.next=13;break;case 9:return e.next=11,Object(l.j)(article.slug);case 11:article.favorited=!0,article.favoritesCount+=1;case 13:article.onFavoritedDisabled=!1,e.next=17;break;case 16:t.$router.push("/login");case 17:case"end":return e.stop()}}),e)})))()}}},h=r(22),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[t.user?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"your_feed"}}}},[t._v("Your Feed")])],1):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===t.tab},attrs:{exact:"",to:{name:"home"}}},[t._v("Global Feed")])],1),t._v(" "),t.tag?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"tag"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"tag",tag:t.tag}}}},[t._v("# "+t._s(t.tag))])],1):t._e()])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:article.author.username}}}},[t._v(t._s(article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt)))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.onFavoritedDisabled},on:{click:function(e){return t.onFavorited(article)}}},[r("i",{staticClass:"ion-heart"}),t._v("\n              "+t._s(article.favoritesCount)+"\n            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)})),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page},attrs:{"data-test":"page-link-1"}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"home",query:{page:e,tag:t.$route.query.tag,tab:t.tab}}}},[t._v(t._s(e))])],1)})),0)])],2),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.tags,(function(e){return r("nuxt-link",{key:e,staticClass:"tag-pill tag-default",attrs:{to:{name:"home",query:{tag:e,tab:"tag"}}}},[t._v(t._s(e))])})),1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"logo-font"},[this._v("conduit")]),this._v(" "),e("p",[this._v("A place to share your knowledge.")])])])}],!1,null,null,null);e.default=component.exports}}]);