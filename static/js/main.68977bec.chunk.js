(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},52:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(19),r=n.n(i),o=(n(32),n(33),n(4)),s=n.n(o),l=n(6),d=n(5),u=n(20),j=n.n(u).a.create({baseURL:"https://api.themoviedb.org/3"}),v=(n(52),n(7)),h=n(23),b=n.n(h),f=n(0);var p=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,i=Object(c.useState)([]),r=Object(d.a)(i,2),o=r[0],u=r[1],h=Object(c.useState)(""),p=Object(d.a)(h,2),g=p[0],m=p[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get(n);case 2:return t=e.sent,u(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("h2",{children:t}),Object(f.jsx)("div",{className:"row__posters",children:o.map((function(e){return Object(f.jsx)("img",{onClick:function(){return function(e){g?(m(""),console.log(g)):b()((null===e||void 0===e?void 0:e.original_name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);m(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster ".concat(a&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),g&&Object(f.jsx)(v.a,{videoId:g,opts:{height:"390",width:"95%",playerVars:{autoplay:1}}})]})},g="639a25c6016a599d45d3203b608da9cd",m={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_network=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchNeActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27")};n(75);var O=function(){var e,t,n=Object(c.useState)([]),a=Object(d.a)(n,2),i=a[0],r=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get(m.fetchNetflixOriginals);case 2:return t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(i),Object(f.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("'.concat("https://image.tmdb.org/t/p/original/").concat(null===i||void 0===i?void 0:i.poster_path,'"\n\n            )'),backgroundPosition:"center center"},children:[Object(f.jsxs)("div",{className:"banner__contents",children:[Object(f.jsx)("h1",{className:"banner__title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.original_name)}),Object(f.jsxs)("div",{className:"banner__buttons",children:[Object(f.jsx)("button",{className:"banner__button",children:"Play"}),Object(f.jsx)("button",{className:"banner__button",children:"My List edited for test"})]}),Object(f.jsx)("h1",{className:"banner__description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(f.jsx)("div",{className:"banner__fadeBottom"})]})},_=n.p+"static/media/logo.3354c3ba.jpg",x=n.p+"static/media/logo.2cdc15dd.png";n(76);var w=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>150?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(f.jsxs)("div",{className:"nav ".concat(n&&"nav__black"),children:[Object(f.jsx)("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"Netflix Logo"}),Object(f.jsx)("img",{className:"nav__avatar",src:_,alt:"Netflix avatar"}),Object(f.jsx)("img",{className:"nav__avatar__center",src:x,alt:"Netflix avatar"})]})},N=n(24),y=n(25),k=n(27),L=n(26),R=(n(77),function(e){Object(k.a)(n,e);var t=Object(L.a)(n);function n(){return Object(N.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"videoOnReady",value:function(e){e.target.pauseVideo(),console.log(e.target.pauseVideo)}},{key:"render",value:function(){var e=this.props.videoId;return Object(f.jsx)("div",{className:"movie__title",children:Object(f.jsxs)("center",{children:[Object(f.jsx)(v.a,{className:"video__screen",videoId:e,opts:{height:"450",width:"95%",playerVars:{autoplay:0}},onReady:this.videoOnReady}),Object(f.jsx)("h6",{className:"movie__name",children:"Movie Trailer"})]})})}}]),n}(c.Component));var U=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(R,{videoId:"_nBlN9yp9R8"}),Object(f.jsx)(w,{}),Object(f.jsx)(O,{}),Object(f.jsx)(p,{title:"Trending",fetchUrl:m.fetchTrending,isLargeRow:!0}),Object(f.jsx)(p,{title:" ORIGINALS ",fetchUrl:m.fetchNetflixOriginals}),Object(f.jsx)(p,{title:"Top Rated",fetchUrl:m.fetchTopRated}),Object(f.jsx)(p,{title:"Action",fetchUrl:m.fetchNeActionMovies}),Object(f.jsx)(p,{title:"Comedy",fetchUrl:m.fetchComedyMovies}),Object(f.jsx)(p,{title:"Horror",fetchUrl:m.fetchHorrorMovies})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(U,{})}),document.getElementById("root")),M()}},[[78,1,2]]]);
//# sourceMappingURL=main.68977bec.chunk.js.map