(this.webpackJsonpkurotwi_web=this.webpackJsonpkurotwi_web||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(7),s=n.n(r),i=(n(14),n(6)),o=n(2),l=n(3),u=n(5),d=n(4),h=(n(15),n(16),n(0)),j=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"Logo",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:"images/icon128.png",alt:""})}),Object(h.jsx)("div",{children:"KuroTwi"})]})}}]),n}(a.Component),b=(n(18),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={current:a.props.checkHash()},a}return Object(l.a)(n,[{key:"changeCurrent",value:function(t){this.setState({current:t}),this.props.changePage(t)}},{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"Menu",children:[Object(h.jsx)("div",{className:"MenuItem ".concat("top"===this.state.current?"current":""),onClick:function(e){return t.changeCurrent("top")},children:"Top"}),Object(h.jsx)("div",{className:"MenuItem ".concat("feature"===this.state.current?"current":""),onClick:function(e){return t.changeCurrent("feature")},children:"Feature"}),Object(h.jsx)("div",{className:"MenuItem ".concat("manual"===this.state.current?"current":""),onClick:function(e){return t.changeCurrent("manual")},children:"Manual"}),Object(h.jsx)("div",{className:"MenuItem ".concat("update"===this.state.current?"current":""),onClick:function(e){return t.changeCurrent("update")},children:"Update"})]})}}]),n}(a.Component)),f=(n(19),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.twttr&&window.twttr.widgets.load()}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"Social",children:[Object(h.jsx)("a",{href:"https://twitter.com/kurotwi_support",className:"twitter-follow-button","data-link-color":"#ffffff","data-show-count":"false","data-lang":"ja",children:"Follow @kurotwi_support"}),Object(h.jsx)("a",{href:"https://twitter.com/share",className:"twitter-share-button","data-text":"\u30bf\u30a4\u30e0\u30e9\u30a4\u30f3\u3092\u81ea\u7531\u306b\u914d\u7f6e\u3067\u304d\u308bTwitter\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067\u3059\u3002","data-count":"horizontal","data-via":"kurotwi_support","data-lang":"ja",children:"Tweet"})]})}}]),n}(a.Component)),p=(n(20),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"Copyright",children:["\xa92011 ",Object(h.jsx)("a",{href:"https://twitter.com/k_e_n1",rel:"nofollow noopener noreferrer",target:"_blank",children:"KEN1"})]})}}]),n}(a.Component)),v=(n(21),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={dataload:!1},a.data=null,a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=s.a.findDOMNode(this.refs.youtube_iframe);e.setAttribute("src",e.getAttribute("data-src")),null===this.props.getData("lastmod")?fetch("./data/lastmod.json").then((function(t){return t.json()})).then((function(e){t.props.setData("lastmod",e),t.data=e,t.setState({dataload:!0})}),(function(t){console.log(t)})):(this.data=this.props.getData("lastmod"),this.setState({dataload:!0}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"Top",children:[Object(h.jsx)("div",{className:"lastmod",children:this.state.dataload&&Object(h.jsx)("div",{children:this.data.lastmod})}),Object(h.jsxs)("div",{className:"description",children:["\u30bf\u30a4\u30e0\u30e9\u30a4\u30f3\u3092\u81ea\u7531\u306b\u914d\u7f6e\u3067\u304d\u308bTwitter\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067\u3059\u3002",Object(h.jsx)("br",{}),"\u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u5bfe\u5fdc\u3001\u5404\u7a2e\u30a4\u30d9\u30f3\u30c8\u306e\u901a\u77e5\u3001",Object(h.jsx)("br",{}),"Youtube\u7b49\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u9023\u643a\u3001RSS\u30ea\u30fc\u30c0\u30fc\u6a5f\u80fd\u304c\u7279\u5fb4\u3067\u3059\u3002",Object(h.jsx)("br",{})]}),Object(h.jsxs)("div",{className:"links",children:[Object(h.jsx)("a",{href:"https://chrome.google.com/webstore/detail/kcijnjkpackkklmkicldmkbhpdeilbgf?hl=ja",rel:"nofollow noopener noreferrer",target:"_blank",children:"Download from Chrome Web Store"}),"(Ver1.9.7.3)",Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"https://github.com/oken1/kurotwi",rel:"nofollow noopener noreferrer",target:"_blank",children:"GitHub"}),"(Ver1.9.7.4\uff5e)",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"https://twitter.com/kurotwi_support",rel:"nofollow noopener noreferrer",target:"_blank",children:"\u30b5\u30dd\u30fc\u30c8\u7528Twitter\u30a2\u30ab\u30a6\u30f3\u30c8"}),Object(h.jsx)("br",{})]}),Object(h.jsx)("div",{className:"youtube",children:Object(h.jsx)("iframe",{title:"youtube",src:"","data-src":"https://www.youtube.com/embed/A1esJrdGFgk",ref:"youtube_iframe"})}),Object(h.jsx)("div",{className:"githubsponsor",children:Object(h.jsx)("iframe",{src:"https://github.com/sponsors/oken1/card",title:"Sponsor oken1"})})]})}}]),n}(a.Component)),O=(n(22),n(8)),m=(n(23),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={visible_button:!1},a._listenerfunc=a.visibleScrollButton.bind(Object(O.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this._listenerfunc),this.visibleScrollButton()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._listenerfunc)}},{key:"componentDidUpdate",value:function(){this.visibleScrollButton()}},{key:"scrollTop",value:function(){window.scrollTo(0,0)}},{key:"scrollBottom",value:function(){window.scrollTo(0,document.body.scrollHeight)}},{key:"visibleScrollButton",value:function(){var t=window.innerHeight<document.body.scrollHeight;t!==this.state.visible_button&&this.setState({visible_button:t})}},{key:"render",value:function(){var t=this;return Object(h.jsx)("div",{className:"ScrollArrow",children:this.state.visible_button&&Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)("div",{className:"fas fa-arrow-up",onClick:function(e){return t.scrollTop()}}),Object(h.jsx)("div",{className:"fas fa-arrow-down",onClick:function(e){return t.scrollBottom()}})]})})}}]),n}(a.Component)),g=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={dataload:!1},a.data=[],a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;null===this.props.getData("feature")?fetch("./data/feature.json").then((function(t){return t.json()})).then((function(e){t.props.setData("feature",e),t.data=e,t.setState({dataload:!0})}),(function(t){console.log(t)})):(this.data=this.props.getData("feature"),this.setState({dataload:!0}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"Feature",children:[this.state.dataload&&Object(h.jsx)(c.a.Fragment,{children:this.data.map((function(t,e){return Object(h.jsxs)("div",{className:"item ".concat(t.size),children:[Object(h.jsx)("div",{children:t.title}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:"images/feature/".concat(t.image,".png"),alt:""})})]},e)}))}),Object(h.jsx)(m,{})]})}}]),n}(a.Component),x=(n(24),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={dataload:!1},a.data=[],a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;null===this.props.getData("manual")?fetch("./data/manual.json").then((function(t){return t.json()})).then((function(e){t.props.setData("manual",e),t.data=e,t.setState({dataload:!0})}),(function(t){console.log(t)})):(this.data=this.props.getData("manual"),this.setState({dataload:!0}))}},{key:"render",value:function(){var t=[],e=0,n=[];return this.data.map((function(a,c){switch(a.type){case"content":t.push(Object(h.jsxs)("div",{children:["\u30fb",Object(h.jsx)("a",{href:"#".concat(e),children:a.text})]},"content-".concat(e))),n.push(Object(h.jsx)("div",{className:"c",id:"".concat(e),children:a.text},c)),e++;break;case"section":n.push(Object(h.jsxs)("div",{className:"s",children:["\u25a0",a.text]},c));break;case"line":n.push(Object(h.jsx)("div",{className:"l"},c));break;case"image":n.push(Object(h.jsxs)("div",{className:"i",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:"images/manual/".concat(a.image,".png"),alt:""})},"".concat(c,"-1")),Object(h.jsx)("div",{children:a.text.split("\n").map((function(t,e){return Object(h.jsx)("p",{children:t},"".concat(c,"-p-").concat(e))}))},"".concat(c,"-2"))]},c))}return""})),Object(h.jsxs)("div",{className:"Manual",children:[this.state.dataload&&Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)("div",{className:"content",children:t}),Object(h.jsx)("div",{className:"list",children:n})]}),Object(h.jsx)(m,{})]})}}]),n}(a.Component)),w=(n(25),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={dataload:!1,current_year:""},a.data=[],a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;null===this.props.getData("update")?fetch("./data/update.json").then((function(t){return t.json()})).then((function(e){t.props.setData("update",e),t.data=e,t.setState({current_year:t.data[0].d.y,dataload:!0})}),(function(t){console.log(t)})):(this.data=this.props.getData("update"),this.setState({current_year:this.data[0].d.y,dataload:!0}))}},{key:"yearChange",value:function(t){this.setState({current_year:t})}},{key:"render",value:function(){var t=this,e=[],n=[];return this.data.map((function(a,c){return 0!==e.length&&e[e.length-1]===a.d.y||e.push(a.d.y),t.state.current_year===a.d.y&&n.push(Object(h.jsxs)("div",{className:"update_item",children:[Object(h.jsxs)("div",{children:[a.d.y,"/",a.d.md," Ver",a.v,"\u3092\u30a2\u30c3\u30d7"]}),a.i.map((function(t,e){return Object(h.jsx)("div",{children:t},"item-".concat(c,"-").concat(e))}))]},"item-".concat(c))),!0})),Object(h.jsxs)("div",{className:"Update",children:[this.state.dataload&&Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)("div",{className:"content",children:e.map((function(e,n){return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)("div",{className:"year_link",onClick:function(n){return t.yearChange(e)},children:e}),Object(h.jsx)("div",{children:"/"})]},n)}))}),Object(h.jsx)("div",{className:"list",children:n})]}),Object(h.jsx)(m,{})]})}}]),n}(a.Component)),k=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={current_page:a.checkHash()},console.log("App"),a.data={lastmod:null,feature:null,manual:null,update:null},a}return Object(l.a)(n,[{key:"checkHash",value:function(){var t=window.location.hash.replace(/^#/,"");return"feature"===t||"manual"===t||"update"===t?t:"top"}},{key:"changePage",value:function(t){var e=window.location.href.replace(/#.+/,"")+"#".concat(t);window.history.replaceState(null,null,e),this.setState({current_page:t})}},{key:"getData",value:function(t){return this.data[t]}},{key:"setData",value:function(t,e){this.data[t]=e}},{key:"render",value:function(){var t,e={checkHash:this.checkHash.bind(this),changePage:this.changePage.bind(this),getData:this.getData.bind(this),setData:this.setData.bind(this)};switch(this.state.current_page){case"top":t=Object(h.jsx)(v,Object(i.a)({},e));break;case"feature":t=Object(h.jsx)(g,Object(i.a)({},e));break;case"manual":t=Object(h.jsx)(x,Object(i.a)({},e));break;case"update":t=Object(h.jsx)(w,Object(i.a)({},e));break;default:t=Object(h.jsx)(v,Object(i.a)({},e))}return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"Header",children:[Object(h.jsx)(j,{}),Object(h.jsx)(b,Object(i.a)({},e))]}),Object(h.jsx)("div",{className:"Main",children:t}),Object(h.jsx)(f,{}),Object(h.jsx)(p,{})]})}}]),n}(a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(t){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(t){console.error("Error during service worker registration:",t)}))}s.a.render(Object(h.jsx)(k,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");y?(!function(t){fetch(t).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):N(t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):N(t)}))}}()}],[[26,1,2]]]);
//# sourceMappingURL=main.8463ec65.chunk.js.map