(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{J4bc:function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return q}));var a=n("q1tI"),o=n.n(a),r=n("Zttt"),i=n("Wbzz"),s=(n("f3/d"),n("7Qib")),l=n("d+ly"),u=n.n(l),c=n("gGy4"),m=function(){var t=Object(c.b)().author;return o.a.createElement("div",{className:u.a.author},o.a.createElement("p",{className:u.a.author__bio},t.bio,o.a.createElement("a",{className:u.a["author__bio-twitter"],href:Object(s.a)("twitter",t.contacts.twitter),rel:"noopener noreferrer",target:"_blank"},o.a.createElement("strong",null,t.name)," on Twitter")))},d=n("RPjP"),f=n.n(d),p=function(t){var e=t.postTitle,n=t.postSlug,a=Object(c.b)(),r=a.url,i=a.disqusShortname;return i?o.a.createElement(f.a,{shortname:i,identifier:e,title:e,url:r+n}):null},_=n("Mvws"),g=n.n(_),h=function(t){var e=t.body,n=t.title;return o.a.createElement("div",{className:g.a.content},o.a.createElement("h1",{className:g.a.content__title},n),o.a.createElement("div",{className:g.a.content__body,dangerouslySetInnerHTML:{__html:e}}))},b=n("wd/R"),y=n.n(b),v=n("myfg"),w=n.n(v),E=function(t){var e=t.date;return o.a.createElement("div",{className:w.a.meta},o.a.createElement("p",{className:w.a.meta__date},"Published ",y()(e).format("D MMM YYYY")))},N=n("WXWR"),k=n.n(N),O=function(t){var e=t.tags,n=t.tagSlugs;return o.a.createElement("div",{className:k.a.tags},o.a.createElement("ul",{className:k.a.tags__list},n&&n.map((function(t,n){return o.a.createElement("li",{className:k.a["tags__list-item"],key:e[n]},o.a.createElement(i.Link,{to:t,className:k.a["tags__list-item-link"]},e[n]))}))))},j=n("gt/k"),P=n.n(j),S=function(t){var e=t.post,n=e.html,a=e.fields,r=a.tagSlugs,s=a.slug,l=e.frontmatter,u=l.tags,c=l.title,d=l.date;return o.a.createElement("div",{className:P.a.post},o.a.createElement(i.Link,{className:P.a["post__home-button"],to:"/"},"All Articles"),o.a.createElement("div",{className:P.a.post__content},o.a.createElement(h,{body:n,title:c})),o.a.createElement("div",{className:P.a.post__footer},o.a.createElement(E,{date:d}),u&&r&&o.a.createElement(O,{tags:u,tagSlugs:r}),o.a.createElement(m,null)),o.a.createElement("div",{className:P.a.post__comments},o.a.createElement(p,{postSlug:s,postTitle:e.frontmatter.title})))},q="1228609577";e.default=function(t){var e=t.data,n=Object(c.b)(),a=n.title,i=n.subtitle,s=e.markdownRemark.frontmatter,l=s.title,u=s.description,m=s.socialImage,d=null!==u?u:i;return o.a.createElement(r.a,{title:l+" - "+a,description:d,socialImage:m},o.a.createElement(S,{post:e.markdownRemark}))}},Mvws:function(t,e,n){t.exports={content:"Content-module--content--1tfQQ",content__title:"Content-module--content__title--1qFLI",content__body:"Content-module--content__body--2bfha"}},RPjP:function(t,e,n){"use strict";t.exports=n("SLms")},SLms:function(t,e,n){"use strict";n("pIFo"),n("8+KV"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("DNiP"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),r=s(n("q1tI")),i=s(n("17x9"));function s(t){return t&&t.__esModule?t:{default:t}}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var c=["shortname","identifier","title","url","category_id","onNewComment","language"],m=!1;function d(t,e){var n=e.onNewComment,a=e.language,o=function(t,e){var n={};for(var a in t)e.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n}(e,["onNewComment","language"]);for(var r in o)t.page[r]=o[r];t.language=a,n&&(t.callbacks={onNewComment:[n]})}var f=function(t){function e(){return l(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(t,e){return t.identifier!==this.props.identifier}},{key:"render",value:function(){var t=this,e=Object.keys(this.props).reduce((function(e,n){return c.some((function(t){return t===n}))?e:a({},e,function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},n,t.props[n]))}),{});return r.default.createElement("div",e,r.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!m){var t=this.disqus=document.createElement("script"),e=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];t.async=!0,t.type="text/javascript",t.src="//"+this.props.shortname+".disqus.com/embed.js",e.appendChild(t),m=!0}}},{key:"loadDisqus",value:function(){var t=this,e={};c.forEach((function(n){"shortname"!==n&&t.props[n]&&(e[n]=t.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){d(this,e),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){d(this,e)},this.addDisqusScript())}}]),e}(r.default.Component);f.displayName="DisqusThread",f.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},f.defaultProps={url:"undefined"==typeof window?null:window.location.href},e.default=f},WXWR:function(t,e,n){t.exports={tags:"Tags-module--tags--1oNz4",tags__list:"Tags-module--tags__list--2UTD-","tags__list-item":"Tags-module--tags__list-item--b7tap","tags__list-item-link":"Tags-module--tags__list-item-link--1hQL0"}},"d+ly":function(t,e,n){t.exports={author:"Author-module--author--2kf8a","author__bio-twitter":"Author-module--author__bio-twitter--MufFK"}},"gt/k":function(t,e,n){t.exports={post__footer:"Post-module--post__footer--1BvmJ",post__comments:"Post-module--post__comments--2T8dL","post__home-button":"Post-module--post__home-button--3zx_9"}},myfg:function(t,e,n){t.exports={meta__date:"Meta-module--meta__date--3FNDv"}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-dc1a67bee8eb8a94aac2.js.map