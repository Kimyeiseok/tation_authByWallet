(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[10],{1032:function(e,t,a){"use strict";var c=a(3),n=a(19),r=(a(0),a(1013)),l=function(e){return Object(c.jsx)(r.a,Object(n.a)(Object(n.a)({},e),{},{className:"ant-avatar-".concat(e.type),children:e.text}))};t.a=function(e){var t=e.name,a=e.suffix,n=e.subTitle,r=e.id,o=e.type,s=e.src,i=e.icon,d=e.size,u=e.shape,b=e.gap,m=e.text,f=e.onNameClick;return Object(c.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[l({icon:i,src:s,type:o,size:d,shape:u,gap:b,text:m}),Object(c.jsxs)("div",{className:"ml-2",children:[Object(c.jsxs)("div",{children:[f?Object(c.jsx)("div",{onClick:function(){return f({name:t,subTitle:n,src:s,id:r})},className:"avatar-status-name clickable",children:t}):Object(c.jsx)("div",{className:"avatar-status-name",children:t}),Object(c.jsx)("span",{children:a})]}),Object(c.jsx)("div",{className:"text-muted avatar-status-subtitle",children:n})]})]})}},1034:function(e,t,a){"use strict";var c=a(0),n=Object(c.createContext)({});t.a=n},1042:function(e,t,a){"use strict";var c=a(520);t.a=c.a},1043:function(e,t,a){"use strict";var c=a(519);t.a=c.a},1087:function(e,t,a){"use strict";var c=a(4),n=a(5),r=a(0),l=a(9),o=a.n(l),s=a(60),i=a(91),d=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},u=function(e){var t=e.prefixCls,a=e.className,l=e.hoverable,s=void 0===l||l,u=d(e,["prefixCls","className","hoverable"]);return r.createElement(i.a,null,(function(e){var l=(0,e.getPrefixCls)("card",t),i=o()("".concat(l,"-grid"),a,Object(c.a)({},"".concat(l,"-grid-hoverable"),s));return r.createElement("div",Object(n.a)({},u,{className:i}))}))},b=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},m=function(e){return r.createElement(i.a,null,(function(t){var a=t.getPrefixCls,c=e.prefixCls,l=e.className,s=e.avatar,i=e.title,d=e.description,u=b(e,["prefixCls","className","avatar","title","description"]),m=a("card",c),f=o()("".concat(m,"-meta"),l),p=s?r.createElement("div",{className:"".concat(m,"-meta-avatar")},s):null,j=i?r.createElement("div",{className:"".concat(m,"-meta-title")},i):null,O=d?r.createElement("div",{className:"".concat(m,"-meta-description")},d):null,v=j||O?r.createElement("div",{className:"".concat(m,"-meta-detail")},j,O):null;return r.createElement("div",Object(n.a)({},u,{className:f}),p,v)}))},f=a(1064),p=a(1042),j=a(1043),O=a(83),v=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a};var y=function(e){var t,a,l,d=r.useContext(i.b),b=d.getPrefixCls,m=d.direction,y=r.useContext(O.b),h=e.prefixCls,x=e.className,g=e.extra,E=e.headStyle,N=void 0===E?{}:E,C=e.bodyStyle,w=void 0===C?{}:C,P=e.title,k=e.loading,S=e.bordered,A=void 0===S||S,I=e.size,T=e.type,L=e.cover,K=e.actions,R=e.tabList,_=e.children,B=e.activeTabKey,z=e.defaultActiveTabKey,G=e.tabBarExtraContent,W=e.hoverable,D=e.tabProps,J=void 0===D?{}:D,M=v(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),F=b("card",h),H=0===w.padding||"0px"===w.padding?{padding:24}:void 0,X=r.createElement("div",{className:"".concat(F,"-loading-block")}),Y=r.createElement("div",{className:"".concat(F,"-loading-content"),style:H},r.createElement(p.a,{gutter:8},r.createElement(j.a,{span:22},X)),r.createElement(p.a,{gutter:8},r.createElement(j.a,{span:8},X),r.createElement(j.a,{span:15},X)),r.createElement(p.a,{gutter:8},r.createElement(j.a,{span:6},X),r.createElement(j.a,{span:18},X)),r.createElement(p.a,{gutter:8},r.createElement(j.a,{span:13},X),r.createElement(j.a,{span:9},X)),r.createElement(p.a,{gutter:8},r.createElement(j.a,{span:4},X),r.createElement(j.a,{span:3},X),r.createElement(j.a,{span:16},X))),$=void 0!==B,q=Object(n.a)(Object(n.a)({},J),(t={},Object(c.a)(t,$?"activeKey":"defaultActiveKey",$?B:z),Object(c.a)(t,"tabBarExtraContent",G),t)),Q=R&&R.length?r.createElement(f.a,Object(n.a)({size:"large"},q,{className:"".concat(F,"-head-tabs"),onChange:function(t){e.onTabChange&&e.onTabChange(t)}}),R.map((function(e){return r.createElement(f.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(P||g||Q)&&(l=r.createElement("div",{className:"".concat(F,"-head"),style:N},r.createElement("div",{className:"".concat(F,"-head-wrapper")},P&&r.createElement("div",{className:"".concat(F,"-head-title")},P),g&&r.createElement("div",{className:"".concat(F,"-extra")},g)),Q));var U=L?r.createElement("div",{className:"".concat(F,"-cover")},L):null,V=r.createElement("div",{className:"".concat(F,"-body"),style:w},k?Y:_),Z=K&&K.length?r.createElement("ul",{className:"".concat(F,"-actions")},function(e){return e.map((function(t,a){return r.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},r.createElement("span",null,t))}))}(K)):null,ee=Object(s.a)(M,["onTabChange"]),te=I||y,ae=o()(F,(a={},Object(c.a)(a,"".concat(F,"-loading"),k),Object(c.a)(a,"".concat(F,"-bordered"),A),Object(c.a)(a,"".concat(F,"-hoverable"),W),Object(c.a)(a,"".concat(F,"-contain-grid"),function(){var t;return r.Children.forEach(e.children,(function(e){e&&e.type&&e.type===u&&(t=!0)})),t}()),Object(c.a)(a,"".concat(F,"-contain-tabs"),R&&R.length),Object(c.a)(a,"".concat(F,"-").concat(te),te),Object(c.a)(a,"".concat(F,"-type-").concat(T),!!T),Object(c.a)(a,"".concat(F,"-rtl"),"rtl"===m),a),x);return r.createElement("div",Object(n.a)({},ee,{className:ae}),l,U,V,Z)};y.Grid=u,y.Meta=m;t.a=y},1088:function(e,t,a){"use strict";a.r(t),a.d(t,"ALGOLIA_ID",(function(){return N})),a.d(t,"ALGOLIA_SEACRCH_KEY",(function(){return C})),a.d(t,"ALGOLIA_INDEX_NAME",(function(){return w}));var c=a(3),n=a(0),r=(a(70),a(1042)),l=a(1043),o=a(1056),s=a.n(o),i=a(1109),d=a(55),u=a(256),b=a(81),m=a(1012),f=a(1103),p=Object(f.a)((function(e){var t=e.currentRefinement,a=(e.isSearchStalled,e.refine),n=Object(d.d)((function(e){return e.theme.headerNavColor})),r=b.a.getColorContrast(n);return Object(c.jsx)("div",{className:"nav-search-active ".concat(r," mb-1"),style:{backgroundColor:n},children:Object(c.jsx)("div",{className:"d-flex align-items-center w-100",children:Object(c.jsx)(m.a,{allowClear:!0,placeholder:"Search player by name, address, email...",prefix:Object(c.jsx)(u.a,{className:"mr-0"}),type:"search",value:t,onChange:function(e){return a(e.currentTarget.value)}})})})})),j=a(114),O=a(1107),v=a(1087),y=a(1105),h=a(1104),x=a(1032),g=[{title:"Name",dataIndex:"name",key:"name",render:function(e,t){return Object(c.jsx)("div",{className:"d-flex",children:Object(c.jsx)(x.a,{src:t.profileImage,name:t.name})})}},{title:"Points",dataIndex:"rankingPoint",key:"rankingPoint",responsive:["md"]},{title:"Address",dataIndex:"walletAddress",key:"walletAddress",render:function(e){return Object(c.jsx)(O.a.Text,{ellipsis:!0,style:{width:200},children:Object(c.jsx)("a",{href:"https://rinkeby.etherscan.io/address/".concat(e),target:"_blank",children:e})})}},{title:"Country",dataIndex:"country",key:"country",responsive:["md"]},{title:"division",dataIndex:"division",key:"division",responsive:["md"]},{title:"Role",dataIndex:"role",key:"role",responsive:["md"]},{title:"Team",dataIndex:"team",key:"team",responsive:["md"]}],E=Object(h.a)((function(e){var t=e.hits,a=(e.refine,e.item,Object(n.useState)(!0)),r=Object(j.a)(a,2),l=r[0],o=r[1];return Object(n.useEffect)((function(){0!=t.length&&o(!1)}),[t]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(v.a,{bodyStyle:{padding:"0px"},children:Object(c.jsx)(y.a,{columns:g,dataSource:t,loading:l,rowKey:"walletAddress"})})})})),N="7P2K0172OW",C="e9c3c49c82c79a7df0c47e98f702c368",w="taction_authByWallet",P=s()(N,C);t.default=function(){return Object(c.jsx)(r.a,{justify:"center",gutter:16,children:Object(c.jsx)(l.a,{xs:24,sm:24,md:24,lg:24,children:Object(c.jsxs)(i.a,{indexName:w,searchClient:P,children:[Object(c.jsx)(p,{}),Object(c.jsx)(E,{})]})})})}},519:function(e,t,a){"use strict";var c=a(4),n=a(5),r=a(37),l=a(0),o=a(9),s=a.n(o),i=a(1034),d=a(91),u=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a};var b=["xs","sm","md","lg","xl","xxl"],m=l.forwardRef((function(e,t){var a,o=l.useContext(d.b),m=o.getPrefixCls,f=o.direction,p=l.useContext(i.a),j=p.gutter,O=p.wrap,v=e.prefixCls,y=e.span,h=e.order,x=e.offset,g=e.push,E=e.pull,N=e.className,C=e.children,w=e.flex,P=e.style,k=u(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),S=m("col",v),A={};b.forEach((function(t){var a,l={},o=e[t];"number"===typeof o?l.span=o:"object"===Object(r.a)(o)&&(l=o||{}),delete k[t],A=Object(n.a)(Object(n.a)({},A),(a={},Object(c.a)(a,"".concat(S,"-").concat(t,"-").concat(l.span),void 0!==l.span),Object(c.a)(a,"".concat(S,"-").concat(t,"-order-").concat(l.order),l.order||0===l.order),Object(c.a)(a,"".concat(S,"-").concat(t,"-offset-").concat(l.offset),l.offset||0===l.offset),Object(c.a)(a,"".concat(S,"-").concat(t,"-push-").concat(l.push),l.push||0===l.push),Object(c.a)(a,"".concat(S,"-").concat(t,"-pull-").concat(l.pull),l.pull||0===l.pull),Object(c.a)(a,"".concat(S,"-rtl"),"rtl"===f),a))}));var I=s()(S,(a={},Object(c.a)(a,"".concat(S,"-").concat(y),void 0!==y),Object(c.a)(a,"".concat(S,"-order-").concat(h),h),Object(c.a)(a,"".concat(S,"-offset-").concat(x),x),Object(c.a)(a,"".concat(S,"-push-").concat(g),g),Object(c.a)(a,"".concat(S,"-pull-").concat(E),E),a),N,A),T=Object(n.a)({},P);return j&&(T=Object(n.a)(Object(n.a)(Object(n.a)({},j[0]>0?{paddingLeft:j[0]/2,paddingRight:j[0]/2}:{}),j[1]>0?{paddingTop:j[1]/2,paddingBottom:j[1]/2}:{}),T)),w&&(T.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(w),"auto"!==w||!1!==O||T.minWidth||(T.minWidth=0)),l.createElement("div",Object(n.a)({},k,{style:T,className:I,ref:t}),C)}));m.displayName="Col",t.a=m},520:function(e,t,a){"use strict";var c=a(5),n=a(4),r=a(37),l=a(11),o=a(0),s=a(9),i=a.n(s),d=a(91),u=a(1034),b=a(86),m=a(195),f=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},p=(Object(b.a)("top","middle","bottom","stretch"),Object(b.a)("start","end","center","space-around","space-between"),o.forwardRef((function(e,t){var a,s=e.prefixCls,b=e.justify,p=e.align,j=e.className,O=e.style,v=e.children,y=e.gutter,h=void 0===y?0:y,x=e.wrap,g=f(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),E=o.useContext(d.b),N=E.getPrefixCls,C=E.direction,w=o.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),P=Object(l.a)(w,2),k=P[0],S=P[1],A=o.useRef(h);o.useEffect((function(){var e=m.a.subscribe((function(e){var t=A.current||0;(!Array.isArray(t)&&"object"===Object(r.a)(t)||Array.isArray(t)&&("object"===Object(r.a)(t[0])||"object"===Object(r.a)(t[1])))&&S(e)}));return function(){return m.a.unsubscribe(e)}}),[]);var I=N("row",s),T=function(){var e=[0,0];return(Array.isArray(h)?h:[h,0]).forEach((function(t,a){if("object"===Object(r.a)(t))for(var c=0;c<m.b.length;c++){var n=m.b[c];if(k[n]&&void 0!==t[n]){e[a]=t[n];break}}else e[a]=t||0})),e}(),L=i()(I,(a={},Object(n.a)(a,"".concat(I,"-no-wrap"),!1===x),Object(n.a)(a,"".concat(I,"-").concat(b),b),Object(n.a)(a,"".concat(I,"-").concat(p),p),Object(n.a)(a,"".concat(I,"-rtl"),"rtl"===C),a),j),K=Object(c.a)(Object(c.a)(Object(c.a)({},T[0]>0?{marginLeft:T[0]/-2,marginRight:T[0]/-2}:{}),T[1]>0?{marginTop:T[1]/-2,marginBottom:T[1]/2}:{}),O);return o.createElement(u.a.Provider,{value:{gutter:T,wrap:x}},o.createElement("div",Object(c.a)({},g,{className:L,style:K,ref:t}),v))})));p.displayName="Row",t.a=p}}]);
//# sourceMappingURL=10.7d2c1832.chunk.js.map