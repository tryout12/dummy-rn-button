(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,n,t){"use strict";var r=t(3038),o=t(862);n.default=void 0;var a=o(t(7294)),l=t(9414),c=t(4651),f=t(7426),u={};function i(e,n,t,r){if(e&&(0,l.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=(0,c.useRouter)(),s=a.default.useMemo((function(){var n=(0,l.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],c=t[1];return{href:a,as:e.as?(0,l.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),d=s.href,p=s.as,h=e.children,v=e.replace,y=e.shallow,_=e.scroll,E=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var L=(n=a.Children.only(h))&&"object"===typeof n&&n.ref,m=(0,f.useIntersection)({rootMargin:"200px"}),g=r(m,2),w=g[0],k=g[1],x=a.default.useCallback((function(e){w(e),L&&("function"===typeof L?L(e):"object"===typeof L&&(L.current=e))}),[L,w]);(0,a.useEffect)((function(){var e=k&&t&&(0,l.isLocalURL)(d),n="undefined"!==typeof E?E:o&&o.locale,r=u[d+"%"+p+(n?"%"+n:"")];e&&!r&&i(o,d,p,{locale:n})}),[p,d,k,E,t,o]);var N={ref:x,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,c,f){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:f,scroll:c}))}(e,o,d,p,v,y,_,E)},onMouseEnter:function(e){(0,l.isLocalURL)(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var j="undefined"!==typeof E?E:o&&o.locale,C=o&&o.isLocaleDomain&&(0,l.getDomainLocale)(p,j,o&&o.locales,o&&o.domainLocales);N.href=C||(0,l.addBasePath)((0,l.addLocale)(p,j,o&&o.defaultLocale))}return a.default.cloneElement(n,N)};n.default=s},2562:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return i},default:function(){return s}});var r=t(5893),o=t(3391),a=t(5323),l=t.n(a),c=t(1664),f=t(5650),u=t(1834),i=!0;function s(e){var n=e.tiles,t=(0,u.F)(),a=(0,o.Z)(t,1)[0];return(0,r.jsx)(r.Fragment,{children:n.map((function(e,n){return(0,r.jsx)(c.default,{href:f._.PAGE_1,children:(0,r.jsxs)("div",{className:l().card,style:{backgroundColor:"light"===a?"yellow":"green"},children:[(0,r.jsxs)("h2",{children:[e," \u2192"]}),(0,r.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]})},n)}))})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2562)}])},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);