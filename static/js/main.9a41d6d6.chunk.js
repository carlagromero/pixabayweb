(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),s=a(6),l=a.n(s),i=a(9),m=a(1),u=a(2),p=a(4),g=a(3),h=a(5),f=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).searchRef=r.a.createRef(),a.handleSubmit=function(e){e.preventDefault(),a.props.search(a.searchRef.current.value)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-8"},r.a.createElement("input",{ref:this.searchRef,type:"text",className:"form-control form-control-lg",placeholder:"Type your search. Eg: Movies"})),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("input",{type:"submit",className:"btn btn-lg btn-danger btn-block",value:"Search"}))))}}]),t}(n.Component),b=function(e){var t=e.image,a=t.largeImageURL,n=t.likes,c=t.previewURL,o=t.tags,s=t.views;return r.a.createElement("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3 mb-4"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top",src:c,alt:o}),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},n," likes"),r.a.createElement("p",{className:"card-text"},s," views"),r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary btn-block"},"Open"))))},v=function(e){return r.a.createElement("div",{className:"row py-5"},e.showPrevPage&&r.a.createElement("button",{onClick:e.previousPage,type:"button",className:"btn btn-info mr-1"},"\u2190 Previous"),e.showNextPage&&r.a.createElement("button",{onClick:e.nextPage,type:"button",className:"btn btn-info mr-1"},"Next \u2192"))},d=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).showImages=function(){var e=a.props.images;return 0===e.length?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-12 p5 row"},e.map(function(e){return r.a.createElement(b,{key:e.id,image:e})})),a.props.showPagination&&r.a.createElement(v,{page:a.props.page,nextPage:a.props.nextPage,showPrevPage:a.props.showPrevPage,showNextPage:a.props.showNextPage,previousPage:a.props.previousPage}))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.showImages())}}]),t}(n.Component),w=(a(17),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).scrollRef=r.a.createRef(),a.state={term:"",images:[],page:"",perPage:5,total:0,totalPage:"",loading:!1,showPagination:!0},a.requestPixabayApi=Object(i.a)(l.a.mark(function e(){var t,n,r,c,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),t=a.state,n=t.term,r=t.page,c=t.perPage,o="https://pixabay.com/api/?key=12342145-f3a4e917d6400a0088e553083&q=".concat(n,"&per_page=").concat(c,"&page=").concat(r),e.prev=3,e.next=6,fetch(o).then(function(e){return e.json()}).then(function(e){return a.setState({images:e.hits,loading:!1,showPagination:e.totalHits>c,total:e.totalHits,totalPage:Math.ceil(e.totalHits/c)})});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),a.setState({loading:!1});case 11:case"end":return e.stop()}},e,null,[[3,8]])})),a.search=function(e){a.setState({term:e,page:1},function(){a.requestPixabayApi()})},a.nextPage=function(){a.setState(function(e){return{page:e.page+1}},function(){a.requestPixabayApi(),a.scroll()})},a.previousPage=function(){a.setState(function(e){return 1===e.page?null:{page:e.page-1}},function(){a.requestPixabayApi(),a.scroll()})},a.scroll=function(){a.scrollRef.current.scrollIntoView("smooth","start")},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.images,a=e.page,n=e.loading,c=e.showPagination,o=e.totalPage,s=r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"double-bounce1"}),r.a.createElement("div",{className:"double-bounce2"}));return r.a.createElement("div",{className:"app container"},r.a.createElement("div",{ref:this.scrollRef,className:"jumbotron"},r.a.createElement("p",{className:"lead text-center"},"Image Search"),r.a.createElement(f,{search:this.search})),r.a.createElement("div",{className:"row justify-content-center"},n?s:r.a.createElement(d,{images:t,page:a,nextPage:this.nextPage,previousPage:this.previousPage,showPrevPage:1!==a,showNextPage:o!==a,showPagination:c})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.9a41d6d6.chunk.js.map