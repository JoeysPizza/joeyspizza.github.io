(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(150);a(50);function l(e,t){var a=t.map(function(e,t){return r.a.createElement("li",{key:t,style:{minWidth:"320px"}},r.a.createElement("span",null,e[0]),r.a.createElement("span",null,"$",e[1].toFixed(2)))});return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",width:"100%"}},r.a.createElement("div",null,r.a.createElement("h3",{style:{fontSize:"22px"}},e),r.a.createElement("ul",{className:"leaders"},a)))}var c=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center",style:{marginBottom:"40px",color:"#a60512"}},"Our Menu"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md"},l("Pastas",[["Ravioli",9.5],["Gnocchi",9.5],["Tortellini",9.5],["Spaghetti",8],["Rigatoni",8]])),r.a.createElement("div",{className:"col-md"},l("Pizza",[["Small (10″)",8.95],["Medium (12″)",12],["Large (14″)",14],["Large (16″)",16.5]]))))};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c,null))}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(142),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(144),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},144:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Joeys Pizza - 1801 Wolf Road - Hillside, IL"}}}}},146:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(48),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},147:function(e,t,a){},149:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{width:150,height:36,src:"/static/joeys-pizza-logo-onblack-e281dce45684dfd8edee69280635c96e-3318a.png",srcSet:"/static/joeys-pizza-logo-onblack-e281dce45684dfd8edee69280635c96e-3318a.png 1x,\n/static/joeys-pizza-logo-onblack-e281dce45684dfd8edee69280635c96e-f101d.png 1.5x,\n/static/joeys-pizza-logo-onblack-e281dce45684dfd8edee69280635c96e-caa98.png 2x"}}}}}},150:function(e,t,a){"use strict";var n=a(145),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(151),s=a.n(o),u=a(143),d=(a(152),a(147),a(7)),m=a.n(d),p=a(142),f=a.n(p),y=a(157),h=(a(153),a(149)),g=a(154),E=a.n(g),v=function(){return i.a.createElement(u.StaticQuery,{query:"531956821",render:function(e){return i.a.createElement(E.a,{fixed:e.logo.childImageSharp.fixed,critical:!0,alt:"Joeys Pizza logo"})},data:h})},x=function(e){function t(){return e.apply(this,arguments)||this}return m()(t,e),t.prototype.render=function(){return i.a.createElement(y.c,{dark:!0,expand:"sm",className:"fixed-top",style:{backgroundColor:"#000",height:"70px"}},i.a.createElement("div",{className:"container"},i.a.createElement(f.a,{to:"/",className:"navbar-brand",onClick:this.close,style:{paddingBottom:0}},i.a.createElement(v,null)),i.a.createElement(y.a,{navbar:!0},i.a.createElement(y.b,null,i.a.createElement("span",{className:"navbar-text text-center",style:{color:"#fff",fontFamily:"Roboto, sans-serif"}},i.a.createElement("span",null,"1801 Wolf Rd, Hillside, IL"),i.a.createElement("br",null),i.a.createElement("a",{href:"tel:+17085933939"},"(708) 593-3939"))))))},t}(r.Component);a(155),a(156);var b=function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(x,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",{className:"container"},t))},data:n})};b.propTypes={children:c.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-index-js-f4e074109b518e94779b.js.map