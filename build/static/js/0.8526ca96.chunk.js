(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[0],{1038:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(11),r=n(0);function c(){var e=r.useReducer((function(e){return e+1}),0);return Object(a.a)(e,2)[1]}},1041:function(e,t,n){var a=n(324);e.exports=function(e,t){return a(e,t)}},1064:function(e,t,n){"use strict";var a=n(5),r=n(4),c=n(0),o=n(11),i=n(37),l=n(38),u=n(6),s=n(9),d=n.n(s),f=n(73),b=n(441),v=n(117),m=n(23),h=n(47),p=n(109);function O(e){var t=Object(c.useRef)(),n=Object(c.useRef)(!1);return Object(c.useEffect)((function(){return function(){n.current=!0,h.a.cancel(t.current)}}),[]),function(){for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];n.current||(h.a.cancel(t.current),t.current=Object(h.a)((function(){e.apply(void 0,r)})))}}var j=n(48);function y(e,t){var n,a=e.prefixCls,o=e.id,i=e.active,l=e.rtl,u=e.tab,s=u.key,f=u.tab,b=u.disabled,v=u.closeIcon,m=e.tabBarGutter,h=e.tabPosition,p=e.closable,O=e.renderWrapper,y=e.removeAriaLabel,g=e.editable,E=e.onClick,k=e.onRemove,x=e.onFocus,w="".concat(a,"-tab");c.useEffect((function(){return k}),[]);var C={};"top"===h||"bottom"===h?C[l?"marginLeft":"marginRight"]=m:C.marginBottom=m;var N=g&&!1!==p&&!b;function T(e){b||E(e)}var P=c.createElement("div",{key:s,ref:t,className:d()(w,(n={},Object(r.a)(n,"".concat(w,"-with-remove"),N),Object(r.a)(n,"".concat(w,"-active"),i),Object(r.a)(n,"".concat(w,"-disabled"),b),n)),style:C,onClick:T},c.createElement("div",{role:"tab","aria-selected":i,id:o&&"".concat(o,"-tab-").concat(s),className:"".concat(w,"-btn"),"aria-controls":o&&"".concat(o,"-panel-").concat(s),"aria-disabled":b,tabIndex:b?null:0,onClick:function(e){e.stopPropagation(),T(e)},onKeyDown:function(e){[j.a.SPACE,j.a.ENTER].includes(e.which)&&(e.preventDefault(),T(e))},onFocus:x},f),N&&c.createElement("button",{type:"button","aria-label":y||"remove",tabIndex:0,className:"".concat(w,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),g.onEdit("remove",{key:s,event:t})}},v||g.removeIcon||"\xd7"));return O&&(P=O(P)),P}var g=c.forwardRef(y),E={width:0,height:0,left:0,top:0};var k={width:0,height:0,left:0,top:0,right:0};var x=n(130),w=n(475);function C(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,o=e.style;return a&&!1!==a.showAdd?c.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var N=c.forwardRef(C);function T(e,t){var n=e.prefixCls,a=e.id,i=e.tabs,l=e.locale,u=e.mobile,s=e.moreIcon,f=void 0===s?"More":s,b=e.moreTransitionName,v=e.style,m=e.className,h=e.editable,p=e.tabBarGutter,O=e.rtl,y=e.onTabClick,g=Object(c.useState)(!1),E=Object(o.a)(g,2),k=E[0],C=E[1],T=Object(c.useState)(null),P=Object(o.a)(T,2),S=P[0],I=P[1],R="".concat(a,"-more-popup"),M="".concat(n,"-dropdown"),B=null!==S?"".concat(R,"-").concat(S):null,L=null===l||void 0===l?void 0:l.dropdownAriaLabel,A=c.createElement(x.f,{onClick:function(e){var t=e.key,n=e.domEvent;y(t,n),C(!1)},id:R,tabIndex:-1,role:"listbox","aria-activedescendant":B,selectedKeys:[S],"aria-label":void 0!==L?L:"expanded dropdown"},i.map((function(e){return c.createElement(x.d,{key:e.key,id:"".concat(R,"-").concat(e.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(e.key),disabled:e.disabled},e.tab)})));function D(e){for(var t=i.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===S}))||0,a=t.length,r=0;r<a;r+=1){var c=t[n=(n+e+a)%a];if(!c.disabled)return void I(c.key)}}Object(c.useEffect)((function(){var e=document.getElementById(B);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[S]),Object(c.useEffect)((function(){k||I(null)}),[k]);var K=Object(r.a)({},O?"marginLeft":"marginRight",p);i.length||(K.visibility="hidden",K.order=1);var W=d()(Object(r.a)({},"".concat(M,"-rtl"),O)),q=u?null:c.createElement(w.a,{prefixCls:M,overlay:A,trigger:["hover"],visible:k,transitionName:b,onVisibleChange:C,overlayClassName:W,mouseEnterDelay:.1,mouseLeaveDelay:.1},c.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:K,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":R,id:"".concat(a,"-more"),"aria-expanded":k,onKeyDown:function(e){var t=e.which;if(k)switch(t){case j.a.UP:D(-1),e.preventDefault();break;case j.a.DOWN:D(1),e.preventDefault();break;case j.a.ESC:C(!1);break;case j.a.SPACE:case j.a.ENTER:null!==S&&y(S,e)}else[j.a.DOWN,j.a.SPACE,j.a.ENTER].includes(t)&&(C(!0),e.preventDefault())}},f));return c.createElement("div",{className:d()("".concat(n,"-nav-operations"),m),style:v,ref:t},q,c.createElement(N,{prefixCls:n,locale:l,editable:h}))}var P=c.forwardRef(T),S=Object(c.createContext)(null),I=Math.pow(.995,20);function R(e,t){var n=c.useRef(e),a=c.useState({}),r=Object(o.a)(a,2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var M=function(e){var t,n=e.position,a=e.prefixCls,r=e.extra;if(!r)return null;var o=r;return"right"===n&&(t=o.right||!o.left&&o||null),"left"===n&&(t=o.left||null),t?c.createElement("div",{className:"".concat(a,"-extra-content")},t):null};function B(e,t){var n,i=c.useContext(S),l=i.prefixCls,s=i.tabs,f=e.className,b=e.style,v=e.id,j=e.animated,y=e.activeKey,x=e.rtl,w=e.extra,C=e.editable,T=e.locale,B=e.tabPosition,L=e.tabBarGutter,A=e.children,D=e.onTabClick,K=e.onTabScroll,W=Object(c.useRef)(),q=Object(c.useRef)(),G=Object(c.useRef)(),z=Object(c.useRef)(),H=function(){var e=Object(c.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,c.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),V=Object(o.a)(H,2),Y=V[0],_=V[1],F="top"===B||"bottom"===B,X=R(0,(function(e,t){F&&K&&K({direction:e>t?"left":"right"})})),J=Object(o.a)(X,2),U=J[0],Q=J[1],Z=R(0,(function(e,t){!F&&K&&K({direction:e>t?"top":"bottom"})})),$=Object(o.a)(Z,2),ee=$[0],te=$[1],ne=Object(c.useState)(0),ae=Object(o.a)(ne,2),re=ae[0],ce=ae[1],oe=Object(c.useState)(0),ie=Object(o.a)(oe,2),le=ie[0],ue=ie[1],se=Object(c.useState)(0),de=Object(o.a)(se,2),fe=de[0],be=de[1],ve=Object(c.useState)(0),me=Object(o.a)(ve,2),he=me[0],pe=me[1],Oe=Object(c.useState)(null),je=Object(o.a)(Oe,2),ye=je[0],ge=je[1],Ee=Object(c.useState)(null),ke=Object(o.a)(Ee,2),xe=ke[0],we=ke[1],Ce=Object(c.useState)(0),Ne=Object(o.a)(Ce,2),Te=Ne[0],Pe=Ne[1],Se=Object(c.useState)(0),Ie=Object(o.a)(Se,2),Re=Ie[0],Me=Ie[1],Be=function(e){var t=Object(c.useRef)([]),n=Object(c.useState)({}),a=Object(o.a)(n,2)[1],r=Object(c.useRef)("function"===typeof e?e():e),i=O((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),i()}]}(new Map),Le=Object(o.a)(Be,2),Ae=Le[0],De=Le[1],Ke=function(e,t,n){return Object(c.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||E,c=r.left+r.width,o=0;o<e.length;o+=1){var i,l=e[o].key,s=t.get(l);s||(s=t.get(null===(i=e[o-1])||void 0===i?void 0:i.key)||E);var d=a.get(l)||Object(u.a)({},s);d.right=c-d.left-d.width,a.set(l,d)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(s,Ae,re),We="".concat(l,"-nav-operations-hidden"),qe=0,Ge=0;function ze(e){return e<qe?qe:e>Ge?Ge:e}F?x?(qe=0,Ge=Math.max(0,re-ye)):(qe=Math.min(0,ye-re),Ge=0):(qe=Math.min(0,xe-le),Ge=0);var He=Object(c.useRef)(),Ve=Object(c.useState)(),Ye=Object(o.a)(Ve,2),_e=Ye[0],Fe=Ye[1];function Xe(){Fe(Date.now())}function Je(){window.clearTimeout(He.current)}function Ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=Ke.get(e)||{width:0,height:0,left:0,right:0,top:0};if(F){var n=U;x?t.right<U?n=t.right:t.right+t.width>U+ye&&(n=t.right+t.width-ye):t.left<-U?n=-t.left:t.left+t.width>-U+ye&&(n=-(t.left+t.width-ye)),te(0),Q(ze(n))}else{var a=ee;t.top<-ee?a=-t.top:t.top+t.height>-ee+xe&&(a=-(t.top+t.height-xe)),Q(0),te(ze(a))}}!function(e,t){var n=Object(c.useState)(),a=Object(o.a)(n,2),r=a[0],i=a[1],l=Object(c.useState)(0),u=Object(o.a)(l,2),s=u[0],d=u[1],f=Object(c.useState)(0),b=Object(o.a)(f,2),v=b[0],m=b[1],h=Object(c.useState)(),p=Object(o.a)(h,2),O=p[0],j=p[1],y=Object(c.useRef)(),g=Object(c.useRef)(),E=Object(c.useRef)(null);E.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;i({x:n,y:a}),window.clearInterval(y.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,c=n.screenY;i({x:a,y:c});var o=a-r.x,l=c-r.y;t(o,l);var u=Date.now();d(u),m(u-s),j({x:o,y:l})}},onTouchEnd:function(){if(r&&(i(null),j(null),O)){var e=O.x/v,n=O.y/v,a=Math.abs(e),c=Math.abs(n);if(Math.max(a,c)<.1)return;var o=e,l=n;y.current=window.setInterval((function(){Math.abs(o)<.01&&Math.abs(l)<.01?window.clearInterval(y.current):t(20*(o*=I),20*(l*=I))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,c=Math.abs(n),o=Math.abs(a);c===o?r="x"===g.current?n:a:c>o?(r=n,g.current="x"):(r=a,g.current="y"),t(-r,-r)&&e.preventDefault()}},c.useEffect((function(){function t(e){E.current.onTouchMove(e)}function n(e){E.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){E.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){E.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(W,(function(e,t){function n(e,t){e((function(e){return ze(e+t)}))}if(F){if(ye>=re)return!1;n(Q,e)}else{if(xe>=le)return!1;n(te,t)}return Je(),Xe(),!0})),Object(c.useEffect)((function(){return Je(),_e&&(He.current=window.setTimeout((function(){Fe(0)}),100)),Je}),[_e]);var Qe=function(e,t,n,a,r){var o,i,l,u=r.tabs,s=r.tabPosition,d=r.rtl;["top","bottom"].includes(s)?(o="width",i=d?"right":"left",l=Math.abs(t.left)):(o="height",i="top",l=-t.top);var f=t[o],b=n[o],v=a[o],m=f;return b+v>f&&(m=f-v),Object(c.useMemo)((function(){if(!u.length)return[0,0];for(var t=u.length,n=t,a=0;a<t;a+=1){var r=e.get(u[a].key)||k;if(r[i]+r[o]>l+m){n=a-1;break}}for(var c=0,s=t-1;s>=0;s-=1)if((e.get(u[s].key)||k)[i]<l){c=s+1;break}return[c,n]}),[e,l,m,s,u.map((function(e){return e.key})).join("_"),d])}(Ke,{width:ye,height:xe,left:U,top:ee},{width:fe,height:he},{width:Te,height:Re},Object(u.a)(Object(u.a)({},e),{},{tabs:s})),Ze=Object(o.a)(Qe,2),$e=Ze[0],et=Ze[1],tt=s.map((function(e){var t=e.key;return c.createElement(g,{id:v,prefixCls:l,key:t,rtl:x,tab:e,closable:e.closable,editable:C,active:t===y,tabPosition:B,tabBarGutter:L,renderWrapper:A,removeAriaLabel:null===T||void 0===T?void 0:T.removeAriaLabel,ref:Y(t),onClick:function(e){D(t,e)},onRemove:function(){_(t)},onFocus:function(){Ue(t),Xe(),x||(W.current.scrollLeft=0),W.current.scrollTop=0}})})),nt=O((function(){var e,t,n,a,r,c,o,i,l,u=(null===(e=W.current)||void 0===e?void 0:e.offsetWidth)||0,d=(null===(t=W.current)||void 0===t?void 0:t.offsetHeight)||0,f=(null===(n=z.current)||void 0===n?void 0:n.offsetWidth)||0,b=(null===(a=z.current)||void 0===a?void 0:a.offsetHeight)||0,v=(null===(r=G.current)||void 0===r?void 0:r.offsetWidth)||0,m=(null===(c=G.current)||void 0===c?void 0:c.offsetHeight)||0;ge(u),we(d),Pe(f),Me(b);var h=((null===(o=q.current)||void 0===o?void 0:o.offsetWidth)||0)-f,p=((null===(i=q.current)||void 0===i?void 0:i.offsetHeight)||0)-b;ce(h),ue(p);var O=null===(l=G.current)||void 0===l?void 0:l.className.includes(We);be(h-(O?0:v)),pe(p-(O?0:m)),De((function(){var e=new Map;return s.forEach((function(t){var n=t.key,a=Y(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),at=s.slice(0,$e),rt=s.slice(et+1),ct=[].concat(Object(m.a)(at),Object(m.a)(rt)),ot=Object(c.useState)(),it=Object(o.a)(ot,2),lt=it[0],ut=it[1],st=Ke.get(y),dt=Object(c.useRef)();function ft(){h.a.cancel(dt.current)}Object(c.useEffect)((function(){var e={};return st&&(F?(x?e.right=st.right:e.left=st.left,e.width=st.width):(e.top=st.top,e.height=st.height)),ft(),dt.current=Object(h.a)((function(){ut(e)})),ft}),[st,F,x]),Object(c.useEffect)((function(){Ue()}),[y,st,Ke,F]),Object(c.useEffect)((function(){nt()}),[x,L,y,s.map((function(e){return e.key})).join("_")]);var bt,vt,mt,ht,pt=!!ct.length,Ot="".concat(l,"-nav-wrap");return F?x?(vt=U>0,bt=U+ye<re):(bt=U<0,vt=-U+ye<re):(mt=ee<0,ht=-ee+xe<le),c.createElement("div",{ref:t,role:"tablist",className:d()("".concat(l,"-nav"),f),style:b,onKeyDown:function(){Xe()}},c.createElement(M,{position:"left",extra:w,prefixCls:l}),c.createElement(p.a,{onResize:nt},c.createElement("div",{className:d()(Ot,(n={},Object(r.a)(n,"".concat(Ot,"-ping-left"),bt),Object(r.a)(n,"".concat(Ot,"-ping-right"),vt),Object(r.a)(n,"".concat(Ot,"-ping-top"),mt),Object(r.a)(n,"".concat(Ot,"-ping-bottom"),ht),n)),ref:W},c.createElement(p.a,{onResize:nt},c.createElement("div",{ref:q,className:"".concat(l,"-nav-list"),style:{transform:"translate(".concat(U,"px, ").concat(ee,"px)"),transition:_e?"none":void 0}},tt,c.createElement(N,{ref:z,prefixCls:l,locale:T,editable:C,style:{visibility:pt?"hidden":null}}),c.createElement("div",{className:d()("".concat(l,"-ink-bar"),Object(r.a)({},"".concat(l,"-ink-bar-animated"),j.inkBar)),style:lt}))))),c.createElement(P,Object(a.a)({},e,{ref:G,prefixCls:l,tabs:ct,className:!pt&&We})),c.createElement(M,{position:"right",extra:w,prefixCls:l}))}var L=c.forwardRef(B);function A(e){var t=e.id,n=e.activeKey,a=e.animated,o=e.tabPosition,i=e.rtl,l=e.destroyInactiveTabPane,u=c.useContext(S),s=u.prefixCls,f=u.tabs,b=a.tabPane,v=f.findIndex((function(e){return e.key===n}));return c.createElement("div",{className:d()("".concat(s,"-content-holder"))},c.createElement("div",{className:d()("".concat(s,"-content"),"".concat(s,"-content-").concat(o),Object(r.a)({},"".concat(s,"-content-animated"),b)),style:v&&b?Object(r.a)({},i?"marginRight":"marginLeft","-".concat(v,"00%")):null},f.map((function(e){return c.cloneElement(e.node,{key:e.key,prefixCls:s,tabKey:e.key,id:t,animated:b,active:e.key===n,destroyInactiveTabPane:l})}))))}function D(e){var t=e.prefixCls,n=e.forceRender,a=e.className,r=e.style,i=e.id,l=e.active,s=e.animated,f=e.destroyInactiveTabPane,b=e.tabKey,v=e.children,m=c.useState(n),h=Object(o.a)(m,2),p=h[0],O=h[1];c.useEffect((function(){l?O(!0):f&&O(!1)}),[l,f]);var j={};return l||(s?(j.visibility="hidden",j.height=0,j.overflowY="hidden"):j.display="none"),c.createElement("div",{id:i&&"".concat(i,"-panel-").concat(b),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(b),"aria-hidden":!l,style:Object(u.a)(Object(u.a)({},j),r),className:d()("".concat(t,"-tabpane"),l&&"".concat(t,"-tabpane-active"),a)},(l||p||n)&&v)}var K=0;function W(e,t){var n,s,m=e.id,h=e.prefixCls,p=void 0===h?"rc-tabs":h,O=e.className,j=e.children,y=e.direction,g=e.activeKey,E=e.defaultActiveKey,k=e.editable,x=e.animated,w=void 0===x?{inkBar:!0,tabPane:!1}:x,C=e.tabPosition,N=void 0===C?"top":C,T=e.tabBarGutter,P=e.tabBarStyle,I=e.tabBarExtraContent,R=e.locale,M=e.moreIcon,B=e.moreTransitionName,D=e.destroyInactiveTabPane,W=e.renderTabBar,q=e.onChange,G=e.onTabClick,z=e.onTabScroll,H=Object(l.a)(e,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),V=function(e){return Object(f.a)(e).map((function(e){if(c.isValidElement(e)){var t=void 0!==e.key?String(e.key):void 0;return Object(u.a)(Object(u.a)({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}(j),Y="rtl"===y;s=!1===w?{inkBar:!1,tabPane:!1}:!0===w?{inkBar:!0,tabPane:!0}:Object(u.a)({inkBar:!0,tabPane:!1},"object"===Object(i.a)(w)?w:{});var _=Object(c.useState)(!1),F=Object(o.a)(_,2),X=F[0],J=F[1];Object(c.useEffect)((function(){J(Object(b.a)())}),[]);var U=Object(v.a)((function(){var e;return null===(e=V[0])||void 0===e?void 0:e.key}),{value:g,defaultValue:E}),Q=Object(o.a)(U,2),Z=Q[0],$=Q[1],ee=Object(c.useState)((function(){return V.findIndex((function(e){return e.key===Z}))})),te=Object(o.a)(ee,2),ne=te[0],ae=te[1];Object(c.useEffect)((function(){var e,t=V.findIndex((function(e){return e.key===Z}));-1===t&&(t=Math.max(0,Math.min(ne,V.length-1)),$(null===(e=V[t])||void 0===e?void 0:e.key));ae(t)}),[V.map((function(e){return e.key})).join("_"),Z,ne]);var re=Object(v.a)(null,{value:m}),ce=Object(o.a)(re,2),oe=ce[0],ie=ce[1],le=N;X&&!["left","right"].includes(N)&&(le="top"),Object(c.useEffect)((function(){m||(ie("rc-tabs-".concat(K)),K+=1)}),[]);var ue,se={id:oe,activeKey:Z,animated:s,tabPosition:le,rtl:Y,mobile:X},de=Object(u.a)(Object(u.a)({},se),{},{editable:k,locale:R,moreIcon:M,moreTransitionName:B,tabBarGutter:T,onTabClick:function(e,t){null===G||void 0===G||G(e,t),$(e),null===q||void 0===q||q(e)},onTabScroll:z,extra:I,style:P,panes:j});return ue=W?W(de,L):c.createElement(L,de),c.createElement(S.Provider,{value:{tabs:V,prefixCls:p}},c.createElement("div",Object(a.a)({ref:t,id:m,className:d()(p,"".concat(p,"-").concat(le),(n={},Object(r.a)(n,"".concat(p,"-mobile"),X),Object(r.a)(n,"".concat(p,"-editable"),k),Object(r.a)(n,"".concat(p,"-rtl"),Y),n),O)},H),ue,c.createElement(A,Object(a.a)({destroyInactiveTabPane:D},se,{animated:s}))))}var q=c.forwardRef(W);q.TabPane=D;var G=q,z=n(477),H={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},V=n(20),Y=function(e,t){return c.createElement(V.a,Object.assign({},e,{ref:t,icon:H}))};Y.displayName="PlusOutlined";var _=c.forwardRef(Y),F=n(150),X=n(64),J=n(91),U=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function Q(e){var t,n,o=e.type,i=e.className,l=e.size,u=e.onEdit,s=e.hideAdd,f=e.centered,b=e.addIcon,v=U(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),m=v.prefixCls,h=c.useContext(J.b),p=h.getPrefixCls,O=h.direction,j=p("tabs",m);return"editable-card"===o&&(n={onEdit:function(e,t){var n=t.key,a=t.event;null===u||void 0===u||u("add"===e?a:n,e)},removeIcon:c.createElement(F.a,null),addIcon:b||c.createElement(_,null),showAdd:!0!==s}),Object(X.a)(!("onPrevClick"in v)&&!("onNextClick"in v),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),c.createElement(G,Object(a.a)({direction:O},v,{moreTransitionName:"slide-up",className:d()((t={},Object(r.a)(t,"".concat(j,"-").concat(l),l),Object(r.a)(t,"".concat(j,"-card"),["card","editable-card"].includes(o)),Object(r.a)(t,"".concat(j,"-editable-card"),"editable-card"===o),Object(r.a)(t,"".concat(j,"-centered"),f),t),i),editable:n,moreIcon:c.createElement(z.a,null),prefixCls:j}))}Q.TabPane=D;t.a=Q}}]);
//# sourceMappingURL=0.8526ca96.chunk.js.map