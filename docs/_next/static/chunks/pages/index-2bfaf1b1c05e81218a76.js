(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,t,n){"use strict";var r=n(3038),a=n(862);t.default=void 0;var o=a(n(7294)),c=n(9414),s=n(4651),l=n(7426),i={};function d(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[t+"%"+n+(a?"%"+a:"")]=!0}}var u=function(e){var t,n=!1!==e.prefetch,a=(0,s.useRouter)(),u=o.default.useMemo((function(){var t=(0,c.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],s=n[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):s||o}}),[a,e.href,e.as]),f=u.href,p=u.as,h=e.children,m=e.replace,x=e.shallow,_=e.scroll,j=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var v=(t=o.Children.only(h))&&"object"===typeof t&&t.ref,g=(0,l.useIntersection)({rootMargin:"200px"}),y=r(g,2),N=y[0],b=y[1],L=o.default.useCallback((function(e){N(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,N]);(0,o.useEffect)((function(){var e=b&&n&&(0,c.isLocalURL)(f),t="undefined"!==typeof j?j:a&&a.locale,r=i[f+"%"+p+(t?"%"+t:"")];e&&!r&&d(a,f,p,{locale:t})}),[p,f,b,j,n,a]);var E={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:l,scroll:s}))}(e,a,f,p,m,x,_,j)},onMouseEnter:function(e){(0,c.isLocalURL)(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(a,f,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var w="undefined"!==typeof j?j:a&&a.locale,H=a&&a.isLocaleDomain&&(0,c.getDomainLocale)(p,w,a&&a.locales,a&&a.domainLocales);E.href=H||(0,c.addBasePath)((0,c.addLocale)(p,w,a&&a.defaultLocale))}return o.default.cloneElement(t,E)};t.default=u},2562:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),a=n(9008),o=n(5675),c=n(5323),s=n.n(c),l=n(1752),i=n(1664),d=(0,l.default)().publicRuntimeConfig,u=d.baseUrl,f=d.routerBase;function p(){return(0,r.jsxs)("div",{className:s().container,children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"Create Next App"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"".concat(u,"/favicon.ico")})]}),(0,r.jsxs)("main",{className:s().main,children:[(0,r.jsxs)("h1",{className:s().title,children:["Welcome to ",(0,r.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,r.jsxs)("p",{className:s().description,children:["Get started by editing"," ",(0,r.jsx)("code",{className:s().code,children:"pages/index.js"})]}),(0,r.jsxs)("div",{className:s().grid,children:[(0,r.jsx)(i.default,{href:"".concat(f,"/page1"),children:(0,r.jsxs)("div",{className:s().card,children:[(0,r.jsx)("h2",{children:"Documentation \u2192"}),(0,r.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]})}),(0,r.jsxs)("a",{href:"https://nextjs.org/learn",className:s().card,children:[(0,r.jsx)("h2",{children:"Learn \u2192"}),(0,r.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,r.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/master/examples",className:s().card,children:[(0,r.jsx)("h2",{children:"Examples \u2192"}),(0,r.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,r.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:s().card,children:[(0,r.jsx)("h2",{children:"Deploy \u2192"}),(0,r.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,r.jsx)("footer",{className:s().footer,children:(0,r.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,r.jsx)("span",{className:s().logo,children:(0,r.jsx)(o.default,{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2562)}])},5323:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[91,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);