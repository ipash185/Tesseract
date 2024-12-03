(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();var vl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gy={exports:{}},Zf={},Wy={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var du=Symbol.for("react.element"),LP=Symbol.for("react.portal"),DP=Symbol.for("react.fragment"),IP=Symbol.for("react.strict_mode"),UP=Symbol.for("react.profiler"),NP=Symbol.for("react.provider"),FP=Symbol.for("react.context"),OP=Symbol.for("react.forward_ref"),BP=Symbol.for("react.suspense"),zP=Symbol.for("react.memo"),kP=Symbol.for("react.lazy"),Pv=Symbol.iterator;function HP(t){return t===null||typeof t!="object"?null:(t=Pv&&t[Pv]||t["@@iterator"],typeof t=="function"?t:null)}var Xy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yy=Object.assign,jy={};function Za(t,e,n){this.props=t,this.context=e,this.refs=jy,this.updater=n||Xy}Za.prototype.isReactComponent={};Za.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Za.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qy(){}qy.prototype=Za.prototype;function ug(t,e,n){this.props=t,this.context=e,this.refs=jy,this.updater=n||Xy}var cg=ug.prototype=new qy;cg.constructor=ug;Yy(cg,Za.prototype);cg.isPureReactComponent=!0;var bv=Array.isArray,$y=Object.prototype.hasOwnProperty,fg={current:null},Ky={key:!0,ref:!0,__self:!0,__source:!0};function Zy(t,e,n){var i,s={},o=null,l=null;if(e!=null)for(i in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)$y.call(e,i)&&!Ky.hasOwnProperty(i)&&(s[i]=e[i]);var u=arguments.length-2;if(u===1)s.children=n;else if(1<u){for(var f=Array(u),h=0;h<u;h++)f[h]=arguments[h+2];s.children=f}if(t&&t.defaultProps)for(i in u=t.defaultProps,u)s[i]===void 0&&(s[i]=u[i]);return{$$typeof:du,type:t,key:o,ref:l,props:s,_owner:fg.current}}function VP(t,e){return{$$typeof:du,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hg(t){return typeof t=="object"&&t!==null&&t.$$typeof===du}function GP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lv=/\/+/g;function Rd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?GP(""+t.key):e.toString(36)}function nf(t,e,n,i,s){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case du:case LP:l=!0}}if(l)return l=t,s=s(l),t=i===""?"."+Rd(l,0):i,bv(s)?(n="",t!=null&&(n=t.replace(Lv,"$&/")+"/"),nf(s,e,n,"",function(h){return h})):s!=null&&(hg(s)&&(s=VP(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Lv,"$&/")+"/")+t)),e.push(s)),1;if(l=0,i=i===""?".":i+":",bv(t))for(var u=0;u<t.length;u++){o=t[u];var f=i+Rd(o,u);l+=nf(o,e,n,f,s)}else if(f=HP(t),typeof f=="function")for(t=f.call(t),u=0;!(o=t.next()).done;)o=o.value,f=i+Rd(o,u++),l+=nf(o,e,n,f,s);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function pc(t,e,n){if(t==null)return t;var i=[],s=0;return nf(t,i,"","",function(o){return e.call(n,o,s++)}),i}function WP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qn={current:null},rf={transition:null},XP={ReactCurrentDispatcher:Qn,ReactCurrentBatchConfig:rf,ReactCurrentOwner:fg};function Qy(){throw Error("act(...) is not supported in production builds of React.")}xt.Children={map:pc,forEach:function(t,e,n){pc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pc(t,function(){e++}),e},toArray:function(t){return pc(t,function(e){return e})||[]},only:function(t){if(!hg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};xt.Component=Za;xt.Fragment=DP;xt.Profiler=UP;xt.PureComponent=ug;xt.StrictMode=IP;xt.Suspense=BP;xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XP;xt.act=Qy;xt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Yy({},t.props),s=t.key,o=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=fg.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(f in e)$y.call(e,f)&&!Ky.hasOwnProperty(f)&&(i[f]=e[f]===void 0&&u!==void 0?u[f]:e[f])}var f=arguments.length-2;if(f===1)i.children=n;else if(1<f){u=Array(f);for(var h=0;h<f;h++)u[h]=arguments[h+2];i.children=u}return{$$typeof:du,type:t.type,key:s,ref:o,props:i,_owner:l}};xt.createContext=function(t){return t={$$typeof:FP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:NP,_context:t},t.Consumer=t};xt.createElement=Zy;xt.createFactory=function(t){var e=Zy.bind(null,t);return e.type=t,e};xt.createRef=function(){return{current:null}};xt.forwardRef=function(t){return{$$typeof:OP,render:t}};xt.isValidElement=hg;xt.lazy=function(t){return{$$typeof:kP,_payload:{_status:-1,_result:t},_init:WP}};xt.memo=function(t,e){return{$$typeof:zP,type:t,compare:e===void 0?null:e}};xt.startTransition=function(t){var e=rf.transition;rf.transition={};try{t()}finally{rf.transition=e}};xt.unstable_act=Qy;xt.useCallback=function(t,e){return Qn.current.useCallback(t,e)};xt.useContext=function(t){return Qn.current.useContext(t)};xt.useDebugValue=function(){};xt.useDeferredValue=function(t){return Qn.current.useDeferredValue(t)};xt.useEffect=function(t,e){return Qn.current.useEffect(t,e)};xt.useId=function(){return Qn.current.useId()};xt.useImperativeHandle=function(t,e,n){return Qn.current.useImperativeHandle(t,e,n)};xt.useInsertionEffect=function(t,e){return Qn.current.useInsertionEffect(t,e)};xt.useLayoutEffect=function(t,e){return Qn.current.useLayoutEffect(t,e)};xt.useMemo=function(t,e){return Qn.current.useMemo(t,e)};xt.useReducer=function(t,e,n){return Qn.current.useReducer(t,e,n)};xt.useRef=function(t){return Qn.current.useRef(t)};xt.useState=function(t){return Qn.current.useState(t)};xt.useSyncExternalStore=function(t,e,n){return Qn.current.useSyncExternalStore(t,e,n)};xt.useTransition=function(){return Qn.current.useTransition()};xt.version="18.3.1";Wy.exports=xt;var Tn=Wy.exports;const YP=Vy(Tn);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jP=Tn,qP=Symbol.for("react.element"),$P=Symbol.for("react.fragment"),KP=Object.prototype.hasOwnProperty,ZP=jP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QP={key:!0,ref:!0,__self:!0,__source:!0};function Jy(t,e,n){var i,s={},o=null,l=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(i in e)KP.call(e,i)&&!QP.hasOwnProperty(i)&&(s[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)s[i]===void 0&&(s[i]=e[i]);return{$$typeof:qP,type:t,key:o,ref:l,props:s,_owner:ZP.current}}Zf.Fragment=$P;Zf.jsx=Jy;Zf.jsxs=Jy;Gy.exports=Zf;var ne=Gy.exports,Pp={},eS={exports:{}},Ci={},tS={exports:{}},nS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,ie){var de=H.length;H.push(ie);e:for(;0<de;){var Ae=de-1>>>1,Ee=H[Ae];if(0<s(Ee,ie))H[Ae]=ie,H[de]=Ee,de=Ae;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var ie=H[0],de=H.pop();if(de!==ie){H[0]=de;e:for(var Ae=0,Ee=H.length,Se=Ee>>>1;Ae<Se;){var V=2*(Ae+1)-1,Z=H[V],se=V+1,q=H[se];if(0>s(Z,de))se<Ee&&0>s(q,Z)?(H[Ae]=q,H[se]=de,Ae=se):(H[Ae]=Z,H[V]=de,Ae=V);else if(se<Ee&&0>s(q,de))H[Ae]=q,H[se]=de,Ae=se;else break e}}return ie}function s(H,ie){var de=H.sortIndex-ie.sortIndex;return de!==0?de:H.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}var f=[],h=[],p=1,_=null,g=3,v=!1,S=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(H){for(var ie=n(h);ie!==null;){if(ie.callback===null)i(h);else if(ie.startTime<=H)i(h),ie.sortIndex=ie.expirationTime,e(f,ie);else break;ie=n(h)}}function w(H){if(T=!1,M(H),!S)if(n(f)!==null)S=!0,le(F);else{var ie=n(h);ie!==null&&pe(w,ie.startTime-H)}}function F(H,ie){S=!1,T&&(T=!1,d(O),O=-1),v=!0;var de=g;try{for(M(ie),_=n(f);_!==null&&(!(_.expirationTime>ie)||H&&!k());){var Ae=_.callback;if(typeof Ae=="function"){_.callback=null,g=_.priorityLevel;var Ee=Ae(_.expirationTime<=ie);ie=t.unstable_now(),typeof Ee=="function"?_.callback=Ee:_===n(f)&&i(f),M(ie)}else i(f);_=n(f)}if(_!==null)var Se=!0;else{var V=n(h);V!==null&&pe(w,V.startTime-ie),Se=!1}return Se}finally{_=null,g=de,v=!1}}var U=!1,I=null,O=-1,L=5,C=-1;function k(){return!(t.unstable_now()-C<L)}function ae(){if(I!==null){var H=t.unstable_now();C=H;var ie=!0;try{ie=I(!0,H)}finally{ie?ee():(U=!1,I=null)}}else U=!1}var ee;if(typeof E=="function")ee=function(){E(ae)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,ve=he.port2;he.port1.onmessage=ae,ee=function(){ve.postMessage(null)}}else ee=function(){x(ae,0)};function le(H){I=H,U||(U=!0,ee())}function pe(H,ie){O=x(function(){H(t.unstable_now())},ie)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){S||v||(S=!0,le(F))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(H){switch(g){case 1:case 2:case 3:var ie=3;break;default:ie=g}var de=g;g=ie;try{return H()}finally{g=de}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,ie){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var de=g;g=H;try{return ie()}finally{g=de}},t.unstable_scheduleCallback=function(H,ie,de){var Ae=t.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?Ae+de:Ae):de=Ae,H){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=de+Ee,H={id:p++,callback:ie,priorityLevel:H,startTime:de,expirationTime:Ee,sortIndex:-1},de>Ae?(H.sortIndex=de,e(h,H),n(f)===null&&H===n(h)&&(T?(d(O),O=-1):T=!0,pe(w,de-Ae))):(H.sortIndex=Ee,e(f,H),S||v||(S=!0,le(F))),H},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(H){var ie=g;return function(){var de=g;g=ie;try{return H.apply(this,arguments)}finally{g=de}}}})(nS);tS.exports=nS;var JP=tS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eb=Tn,Ri=JP;function Te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iS=new Set,ql={};function bo(t,e){Oa(t,e),Oa(t+"Capture",e)}function Oa(t,e){for(ql[t]=e,t=0;t<e.length;t++)iS.add(e[t])}var Zr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bp=Object.prototype.hasOwnProperty,tb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dv={},Iv={};function nb(t){return bp.call(Iv,t)?!0:bp.call(Dv,t)?!1:tb.test(t)?Iv[t]=!0:(Dv[t]=!0,!1)}function ib(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rb(t,e,n,i){if(e===null||typeof e>"u"||ib(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jn(t,e,n,i,s,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var In={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){In[t]=new Jn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];In[e]=new Jn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){In[t]=new Jn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){In[t]=new Jn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){In[t]=new Jn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){In[t]=new Jn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){In[t]=new Jn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){In[t]=new Jn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){In[t]=new Jn(t,5,!1,t.toLowerCase(),null,!1,!1)});var dg=/[\-:]([a-z])/g;function pg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dg,pg);In[e]=new Jn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dg,pg);In[e]=new Jn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dg,pg);In[e]=new Jn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){In[t]=new Jn(t,1,!1,t.toLowerCase(),null,!1,!1)});In.xlinkHref=new Jn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){In[t]=new Jn(t,1,!1,t.toLowerCase(),null,!0,!0)});function mg(t,e,n,i){var s=In.hasOwnProperty(e)?In[e]:null;(s!==null?s.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rb(e,n,s,i)&&(n=null),i||s===null?nb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,i=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var is=eb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mc=Symbol.for("react.element"),da=Symbol.for("react.portal"),pa=Symbol.for("react.fragment"),gg=Symbol.for("react.strict_mode"),Lp=Symbol.for("react.profiler"),rS=Symbol.for("react.provider"),sS=Symbol.for("react.context"),_g=Symbol.for("react.forward_ref"),Dp=Symbol.for("react.suspense"),Ip=Symbol.for("react.suspense_list"),vg=Symbol.for("react.memo"),ys=Symbol.for("react.lazy"),oS=Symbol.for("react.offscreen"),Uv=Symbol.iterator;function xl(t){return t===null||typeof t!="object"?null:(t=Uv&&t[Uv]||t["@@iterator"],typeof t=="function"?t:null)}var en=Object.assign,Cd;function Dl(t){if(Cd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cd=e&&e[1]||""}return`
`+Cd+t}var Pd=!1;function bd(t,e){if(!t||Pd)return"";Pd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var i=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){i=h}t.call(e.prototype)}else{try{throw Error()}catch(h){i=h}t()}}catch(h){if(h&&i&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),o=i.stack.split(`
`),l=s.length-1,u=o.length-1;1<=l&&0<=u&&s[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(s[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||s[l]!==o[u]){var f=`
`+s[l].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=l&&0<=u);break}}}finally{Pd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Dl(t):""}function sb(t){switch(t.tag){case 5:return Dl(t.type);case 16:return Dl("Lazy");case 13:return Dl("Suspense");case 19:return Dl("SuspenseList");case 0:case 2:case 15:return t=bd(t.type,!1),t;case 11:return t=bd(t.type.render,!1),t;case 1:return t=bd(t.type,!0),t;default:return""}}function Up(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case pa:return"Fragment";case da:return"Portal";case Lp:return"Profiler";case gg:return"StrictMode";case Dp:return"Suspense";case Ip:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sS:return(t.displayName||"Context")+".Consumer";case rS:return(t._context.displayName||"Context")+".Provider";case _g:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vg:return e=t.displayName||null,e!==null?e:Up(t.type)||"Memo";case ys:e=t._payload,t=t._init;try{return Up(t(e))}catch{}}return null}function ob(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Up(e);case 8:return e===gg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Bs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function aS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ab(t){var e=aS(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gc(t){t._valueTracker||(t._valueTracker=ab(t))}function lS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=aS(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Sf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Np(t,e){var n=e.checked;return en({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Nv(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Bs(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uS(t,e){e=e.checked,e!=null&&mg(t,"checked",e,!1)}function Fp(t,e){uS(t,e);var n=Bs(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Op(t,e.type,n):e.hasOwnProperty("defaultValue")&&Op(t,e.type,Bs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Op(t,e,n){(e!=="number"||Sf(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Il=Array.isArray;function Ra(t,e,n,i){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Bs(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Bp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Te(91));return en({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ov(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Te(92));if(Il(n)){if(1<n.length)throw Error(Te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Bs(n)}}function cS(t,e){var n=Bs(e.value),i=Bs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Bv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fS(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _c,hS=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_c=_c||document.createElement("div"),_c.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_c.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $l(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ol={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lb=["Webkit","ms","Moz","O"];Object.keys(Ol).forEach(function(t){lb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ol[e]=Ol[t]})});function dS(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ol.hasOwnProperty(t)&&Ol[t]?(""+e).trim():e+"px"}function pS(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=dS(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,s):t[n]=s}}var ub=en({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kp(t,e){if(e){if(ub[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Te(62))}}function Hp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vp=null;function xg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gp=null,Ca=null,Pa=null;function zv(t){if(t=gu(t)){if(typeof Gp!="function")throw Error(Te(280));var e=t.stateNode;e&&(e=nh(e),Gp(t.stateNode,t.type,e))}}function mS(t){Ca?Pa?Pa.push(t):Pa=[t]:Ca=t}function gS(){if(Ca){var t=Ca,e=Pa;if(Pa=Ca=null,zv(t),e)for(t=0;t<e.length;t++)zv(e[t])}}function _S(t,e){return t(e)}function vS(){}var Ld=!1;function xS(t,e,n){if(Ld)return t(e,n);Ld=!0;try{return _S(t,e,n)}finally{Ld=!1,(Ca!==null||Pa!==null)&&(vS(),gS())}}function Kl(t,e){var n=t.stateNode;if(n===null)return null;var i=nh(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Te(231,e,typeof n));return n}var Wp=!1;if(Zr)try{var yl={};Object.defineProperty(yl,"passive",{get:function(){Wp=!0}}),window.addEventListener("test",yl,yl),window.removeEventListener("test",yl,yl)}catch{Wp=!1}function cb(t,e,n,i,s,o,l,u,f){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var Bl=!1,Ef=null,Mf=!1,Xp=null,fb={onError:function(t){Bl=!0,Ef=t}};function hb(t,e,n,i,s,o,l,u,f){Bl=!1,Ef=null,cb.apply(fb,arguments)}function db(t,e,n,i,s,o,l,u,f){if(hb.apply(this,arguments),Bl){if(Bl){var h=Ef;Bl=!1,Ef=null}else throw Error(Te(198));Mf||(Mf=!0,Xp=h)}}function Lo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function kv(t){if(Lo(t)!==t)throw Error(Te(188))}function pb(t){var e=t.alternate;if(!e){if(e=Lo(t),e===null)throw Error(Te(188));return e!==t?null:t}for(var n=t,i=e;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return kv(s),t;if(o===i)return kv(s),e;o=o.sibling}throw Error(Te(188))}if(n.return!==i.return)n=s,i=o;else{for(var l=!1,u=s.child;u;){if(u===n){l=!0,n=s,i=o;break}if(u===i){l=!0,i=s,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,i=s;break}if(u===i){l=!0,i=o,n=s;break}u=u.sibling}if(!l)throw Error(Te(189))}}if(n.alternate!==i)throw Error(Te(190))}if(n.tag!==3)throw Error(Te(188));return n.stateNode.current===n?t:e}function SS(t){return t=pb(t),t!==null?ES(t):null}function ES(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ES(t);if(e!==null)return e;t=t.sibling}return null}var MS=Ri.unstable_scheduleCallback,Hv=Ri.unstable_cancelCallback,mb=Ri.unstable_shouldYield,gb=Ri.unstable_requestPaint,un=Ri.unstable_now,_b=Ri.unstable_getCurrentPriorityLevel,yg=Ri.unstable_ImmediatePriority,TS=Ri.unstable_UserBlockingPriority,Tf=Ri.unstable_NormalPriority,vb=Ri.unstable_LowPriority,wS=Ri.unstable_IdlePriority,Qf=null,wr=null;function xb(t){if(wr&&typeof wr.onCommitFiberRoot=="function")try{wr.onCommitFiberRoot(Qf,t,void 0,(t.current.flags&128)===128)}catch{}}var cr=Math.clz32?Math.clz32:Eb,yb=Math.log,Sb=Math.LN2;function Eb(t){return t>>>=0,t===0?32:31-(yb(t)/Sb|0)|0}var vc=64,xc=4194304;function Ul(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wf(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,o=t.pingedLanes,l=n&268435455;if(l!==0){var u=l&~s;u!==0?i=Ul(u):(o&=l,o!==0&&(i=Ul(o)))}else l=n&~s,l!==0?i=Ul(l):o!==0&&(i=Ul(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&s)&&(s=i&-i,o=e&-e,s>=o||s===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-cr(e),s=1<<n,i|=t[n],e&=~s;return i}function Mb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tb(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-cr(o),u=1<<l,f=s[l];f===-1?(!(u&n)||u&i)&&(s[l]=Mb(u,e)):f<=e&&(t.expiredLanes|=u),o&=~u}}function Yp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function AS(){var t=vc;return vc<<=1,!(vc&4194240)&&(vc=64),t}function Dd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-cr(e),t[e]=n}function wb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-cr(n),o=1<<s;e[s]=0,i[s]=-1,t[s]=-1,n&=~o}}function Sg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-cr(n),s=1<<i;s&e|t[i]&e&&(t[i]|=e),n&=~s}}var Ut=0;function RS(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var CS,Eg,PS,bS,LS,jp=!1,yc=[],Cs=null,Ps=null,bs=null,Zl=new Map,Ql=new Map,Ms=[],Ab="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vv(t,e){switch(t){case"focusin":case"focusout":Cs=null;break;case"dragenter":case"dragleave":Ps=null;break;case"mouseover":case"mouseout":bs=null;break;case"pointerover":case"pointerout":Zl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ql.delete(e.pointerId)}}function Sl(t,e,n,i,s,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[s]},e!==null&&(e=gu(e),e!==null&&Eg(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Rb(t,e,n,i,s){switch(e){case"focusin":return Cs=Sl(Cs,t,e,n,i,s),!0;case"dragenter":return Ps=Sl(Ps,t,e,n,i,s),!0;case"mouseover":return bs=Sl(bs,t,e,n,i,s),!0;case"pointerover":var o=s.pointerId;return Zl.set(o,Sl(Zl.get(o)||null,t,e,n,i,s)),!0;case"gotpointercapture":return o=s.pointerId,Ql.set(o,Sl(Ql.get(o)||null,t,e,n,i,s)),!0}return!1}function DS(t){var e=mo(t.target);if(e!==null){var n=Lo(e);if(n!==null){if(e=n.tag,e===13){if(e=yS(n),e!==null){t.blockedOn=e,LS(t.priority,function(){PS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sf(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Vp=i,n.target.dispatchEvent(i),Vp=null}else return e=gu(n),e!==null&&Eg(e),t.blockedOn=n,!1;e.shift()}return!0}function Gv(t,e,n){sf(t)&&n.delete(e)}function Cb(){jp=!1,Cs!==null&&sf(Cs)&&(Cs=null),Ps!==null&&sf(Ps)&&(Ps=null),bs!==null&&sf(bs)&&(bs=null),Zl.forEach(Gv),Ql.forEach(Gv)}function El(t,e){t.blockedOn===e&&(t.blockedOn=null,jp||(jp=!0,Ri.unstable_scheduleCallback(Ri.unstable_NormalPriority,Cb)))}function Jl(t){function e(s){return El(s,t)}if(0<yc.length){El(yc[0],t);for(var n=1;n<yc.length;n++){var i=yc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Cs!==null&&El(Cs,t),Ps!==null&&El(Ps,t),bs!==null&&El(bs,t),Zl.forEach(e),Ql.forEach(e),n=0;n<Ms.length;n++)i=Ms[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ms.length&&(n=Ms[0],n.blockedOn===null);)DS(n),n.blockedOn===null&&Ms.shift()}var ba=is.ReactCurrentBatchConfig,Af=!0;function Pb(t,e,n,i){var s=Ut,o=ba.transition;ba.transition=null;try{Ut=1,Mg(t,e,n,i)}finally{Ut=s,ba.transition=o}}function bb(t,e,n,i){var s=Ut,o=ba.transition;ba.transition=null;try{Ut=4,Mg(t,e,n,i)}finally{Ut=s,ba.transition=o}}function Mg(t,e,n,i){if(Af){var s=qp(t,e,n,i);if(s===null)Vd(t,e,i,Rf,n),Vv(t,i);else if(Rb(s,t,e,n,i))i.stopPropagation();else if(Vv(t,i),e&4&&-1<Ab.indexOf(t)){for(;s!==null;){var o=gu(s);if(o!==null&&CS(o),o=qp(t,e,n,i),o===null&&Vd(t,e,i,Rf,n),o===s)break;s=o}s!==null&&i.stopPropagation()}else Vd(t,e,i,null,n)}}var Rf=null;function qp(t,e,n,i){if(Rf=null,t=xg(i),t=mo(t),t!==null)if(e=Lo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Rf=t,null}function IS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_b()){case yg:return 1;case TS:return 4;case Tf:case vb:return 16;case wS:return 536870912;default:return 16}default:return 16}}var As=null,Tg=null,of=null;function US(){if(of)return of;var t,e=Tg,n=e.length,i,s="value"in As?As.value:As.textContent,o=s.length;for(t=0;t<n&&e[t]===s[t];t++);var l=n-t;for(i=1;i<=l&&e[n-i]===s[o-i];i++);return of=s.slice(t,1<i?1-i:void 0)}function af(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sc(){return!0}function Wv(){return!1}function Pi(t){function e(n,i,s,o,l){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Sc:Wv,this.isPropagationStopped=Wv,this}return en(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sc)},persist:function(){},isPersistent:Sc}),e}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wg=Pi(Qa),mu=en({},Qa,{view:0,detail:0}),Lb=Pi(mu),Id,Ud,Ml,Jf=en({},mu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ag,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ml&&(Ml&&t.type==="mousemove"?(Id=t.screenX-Ml.screenX,Ud=t.screenY-Ml.screenY):Ud=Id=0,Ml=t),Id)},movementY:function(t){return"movementY"in t?t.movementY:Ud}}),Xv=Pi(Jf),Db=en({},Jf,{dataTransfer:0}),Ib=Pi(Db),Ub=en({},mu,{relatedTarget:0}),Nd=Pi(Ub),Nb=en({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Fb=Pi(Nb),Ob=en({},Qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bb=Pi(Ob),zb=en({},Qa,{data:0}),Yv=Pi(zb),kb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Vb[t])?!!e[t]:!1}function Ag(){return Gb}var Wb=en({},mu,{key:function(t){if(t.key){var e=kb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=af(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ag,charCode:function(t){return t.type==="keypress"?af(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?af(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xb=Pi(Wb),Yb=en({},Jf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jv=Pi(Yb),jb=en({},mu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ag}),qb=Pi(jb),$b=en({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kb=Pi($b),Zb=en({},Jf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qb=Pi(Zb),Jb=[9,13,27,32],Rg=Zr&&"CompositionEvent"in window,zl=null;Zr&&"documentMode"in document&&(zl=document.documentMode);var e2=Zr&&"TextEvent"in window&&!zl,NS=Zr&&(!Rg||zl&&8<zl&&11>=zl),qv=" ",$v=!1;function FS(t,e){switch(t){case"keyup":return Jb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function OS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ma=!1;function t2(t,e){switch(t){case"compositionend":return OS(e);case"keypress":return e.which!==32?null:($v=!0,qv);case"textInput":return t=e.data,t===qv&&$v?null:t;default:return null}}function n2(t,e){if(ma)return t==="compositionend"||!Rg&&FS(t,e)?(t=US(),of=Tg=As=null,ma=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return NS&&e.locale!=="ko"?null:e.data;default:return null}}var i2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!i2[t.type]:e==="textarea"}function BS(t,e,n,i){mS(i),e=Cf(e,"onChange"),0<e.length&&(n=new wg("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var kl=null,eu=null;function r2(t){$S(t,0)}function eh(t){var e=va(t);if(lS(e))return t}function s2(t,e){if(t==="change")return e}var zS=!1;if(Zr){var Fd;if(Zr){var Od="oninput"in document;if(!Od){var Zv=document.createElement("div");Zv.setAttribute("oninput","return;"),Od=typeof Zv.oninput=="function"}Fd=Od}else Fd=!1;zS=Fd&&(!document.documentMode||9<document.documentMode)}function Qv(){kl&&(kl.detachEvent("onpropertychange",kS),eu=kl=null)}function kS(t){if(t.propertyName==="value"&&eh(eu)){var e=[];BS(e,eu,t,xg(t)),xS(r2,e)}}function o2(t,e,n){t==="focusin"?(Qv(),kl=e,eu=n,kl.attachEvent("onpropertychange",kS)):t==="focusout"&&Qv()}function a2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eh(eu)}function l2(t,e){if(t==="click")return eh(e)}function u2(t,e){if(t==="input"||t==="change")return eh(e)}function c2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pr=typeof Object.is=="function"?Object.is:c2;function tu(t,e){if(pr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!bp.call(e,s)||!pr(t[s],e[s]))return!1}return!0}function Jv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ex(t,e){var n=Jv(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jv(n)}}function HS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?HS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function VS(){for(var t=window,e=Sf();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sf(t.document)}return e}function Cg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function f2(t){var e=VS(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&HS(n.ownerDocument.documentElement,n)){if(i!==null&&Cg(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,o=Math.min(i.start,s);i=i.end===void 0?o:Math.min(i.end,s),!t.extend&&o>i&&(s=i,i=o,o=s),s=ex(n,o);var l=ex(n,i);s&&l&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var h2=Zr&&"documentMode"in document&&11>=document.documentMode,ga=null,$p=null,Hl=null,Kp=!1;function tx(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kp||ga==null||ga!==Sf(i)||(i=ga,"selectionStart"in i&&Cg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Hl&&tu(Hl,i)||(Hl=i,i=Cf($p,"onSelect"),0<i.length&&(e=new wg("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ga)))}function Ec(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _a={animationend:Ec("Animation","AnimationEnd"),animationiteration:Ec("Animation","AnimationIteration"),animationstart:Ec("Animation","AnimationStart"),transitionend:Ec("Transition","TransitionEnd")},Bd={},GS={};Zr&&(GS=document.createElement("div").style,"AnimationEvent"in window||(delete _a.animationend.animation,delete _a.animationiteration.animation,delete _a.animationstart.animation),"TransitionEvent"in window||delete _a.transitionend.transition);function th(t){if(Bd[t])return Bd[t];if(!_a[t])return t;var e=_a[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in GS)return Bd[t]=e[n];return t}var WS=th("animationend"),XS=th("animationiteration"),YS=th("animationstart"),jS=th("transitionend"),qS=new Map,nx="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vs(t,e){qS.set(t,e),bo(e,[t])}for(var zd=0;zd<nx.length;zd++){var kd=nx[zd],d2=kd.toLowerCase(),p2=kd[0].toUpperCase()+kd.slice(1);Vs(d2,"on"+p2)}Vs(WS,"onAnimationEnd");Vs(XS,"onAnimationIteration");Vs(YS,"onAnimationStart");Vs("dblclick","onDoubleClick");Vs("focusin","onFocus");Vs("focusout","onBlur");Vs(jS,"onTransitionEnd");Oa("onMouseEnter",["mouseout","mouseover"]);Oa("onMouseLeave",["mouseout","mouseover"]);Oa("onPointerEnter",["pointerout","pointerover"]);Oa("onPointerLeave",["pointerout","pointerover"]);bo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bo("onBeforeInput",["compositionend","keypress","textInput","paste"]);bo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nl));function ix(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,db(i,e,void 0,t),t.currentTarget=null}function $S(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],s=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var l=i.length-1;0<=l;l--){var u=i[l],f=u.instance,h=u.currentTarget;if(u=u.listener,f!==o&&s.isPropagationStopped())break e;ix(s,u,h),o=f}else for(l=0;l<i.length;l++){if(u=i[l],f=u.instance,h=u.currentTarget,u=u.listener,f!==o&&s.isPropagationStopped())break e;ix(s,u,h),o=f}}}if(Mf)throw t=Xp,Mf=!1,Xp=null,t}function Yt(t,e){var n=e[tm];n===void 0&&(n=e[tm]=new Set);var i=t+"__bubble";n.has(i)||(KS(e,t,2,!1),n.add(i))}function Hd(t,e,n){var i=0;e&&(i|=4),KS(n,t,i,e)}var Mc="_reactListening"+Math.random().toString(36).slice(2);function nu(t){if(!t[Mc]){t[Mc]=!0,iS.forEach(function(n){n!=="selectionchange"&&(m2.has(n)||Hd(n,!1,t),Hd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mc]||(e[Mc]=!0,Hd("selectionchange",!1,e))}}function KS(t,e,n,i){switch(IS(e)){case 1:var s=Pb;break;case 4:s=bb;break;default:s=Mg}n=s.bind(null,e,n,t),s=void 0,!Wp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Vd(t,e,n,i,s){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var u=i.stateNode.containerInfo;if(u===s||u.nodeType===8&&u.parentNode===s)break;if(l===4)for(l=i.return;l!==null;){var f=l.tag;if((f===3||f===4)&&(f=l.stateNode.containerInfo,f===s||f.nodeType===8&&f.parentNode===s))return;l=l.return}for(;u!==null;){if(l=mo(u),l===null)return;if(f=l.tag,f===5||f===6){i=o=l;continue e}u=u.parentNode}}i=i.return}xS(function(){var h=o,p=xg(n),_=[];e:{var g=qS.get(t);if(g!==void 0){var v=wg,S=t;switch(t){case"keypress":if(af(n)===0)break e;case"keydown":case"keyup":v=Xb;break;case"focusin":S="focus",v=Nd;break;case"focusout":S="blur",v=Nd;break;case"beforeblur":case"afterblur":v=Nd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Xv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Ib;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=qb;break;case WS:case XS:case YS:v=Fb;break;case jS:v=Kb;break;case"scroll":v=Lb;break;case"wheel":v=Qb;break;case"copy":case"cut":case"paste":v=Bb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=jv}var T=(e&4)!==0,x=!T&&t==="scroll",d=T?g!==null?g+"Capture":null:g;T=[];for(var E=h,M;E!==null;){M=E;var w=M.stateNode;if(M.tag===5&&w!==null&&(M=w,d!==null&&(w=Kl(E,d),w!=null&&T.push(iu(E,w,M)))),x)break;E=E.return}0<T.length&&(g=new v(g,S,null,n,p),_.push({event:g,listeners:T}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",g&&n!==Vp&&(S=n.relatedTarget||n.fromElement)&&(mo(S)||S[Qr]))break e;if((v||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,v?(S=n.relatedTarget||n.toElement,v=h,S=S?mo(S):null,S!==null&&(x=Lo(S),S!==x||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=h),v!==S)){if(T=Xv,w="onMouseLeave",d="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(T=jv,w="onPointerLeave",d="onPointerEnter",E="pointer"),x=v==null?g:va(v),M=S==null?g:va(S),g=new T(w,E+"leave",v,n,p),g.target=x,g.relatedTarget=M,w=null,mo(p)===h&&(T=new T(d,E+"enter",S,n,p),T.target=M,T.relatedTarget=x,w=T),x=w,v&&S)t:{for(T=v,d=S,E=0,M=T;M;M=Ko(M))E++;for(M=0,w=d;w;w=Ko(w))M++;for(;0<E-M;)T=Ko(T),E--;for(;0<M-E;)d=Ko(d),M--;for(;E--;){if(T===d||d!==null&&T===d.alternate)break t;T=Ko(T),d=Ko(d)}T=null}else T=null;v!==null&&rx(_,g,v,T,!1),S!==null&&x!==null&&rx(_,x,S,T,!0)}}e:{if(g=h?va(h):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var F=s2;else if(Kv(g))if(zS)F=u2;else{F=a2;var U=o2}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=l2);if(F&&(F=F(t,h))){BS(_,F,n,p);break e}U&&U(t,g,h),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Op(g,"number",g.value)}switch(U=h?va(h):window,t){case"focusin":(Kv(U)||U.contentEditable==="true")&&(ga=U,$p=h,Hl=null);break;case"focusout":Hl=$p=ga=null;break;case"mousedown":Kp=!0;break;case"contextmenu":case"mouseup":case"dragend":Kp=!1,tx(_,n,p);break;case"selectionchange":if(h2)break;case"keydown":case"keyup":tx(_,n,p)}var I;if(Rg)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ma?FS(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(NS&&n.locale!=="ko"&&(ma||O!=="onCompositionStart"?O==="onCompositionEnd"&&ma&&(I=US()):(As=p,Tg="value"in As?As.value:As.textContent,ma=!0)),U=Cf(h,O),0<U.length&&(O=new Yv(O,t,null,n,p),_.push({event:O,listeners:U}),I?O.data=I:(I=OS(n),I!==null&&(O.data=I)))),(I=e2?t2(t,n):n2(t,n))&&(h=Cf(h,"onBeforeInput"),0<h.length&&(p=new Yv("onBeforeInput","beforeinput",null,n,p),_.push({event:p,listeners:h}),p.data=I))}$S(_,e)})}function iu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cf(t,e){for(var n=e+"Capture",i=[];t!==null;){var s=t,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=Kl(t,n),o!=null&&i.unshift(iu(t,o,s)),o=Kl(t,e),o!=null&&i.push(iu(t,o,s))),t=t.return}return i}function Ko(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rx(t,e,n,i,s){for(var o=e._reactName,l=[];n!==null&&n!==i;){var u=n,f=u.alternate,h=u.stateNode;if(f!==null&&f===i)break;u.tag===5&&h!==null&&(u=h,s?(f=Kl(n,o),f!=null&&l.unshift(iu(n,f,u))):s||(f=Kl(n,o),f!=null&&l.push(iu(n,f,u)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var g2=/\r\n?/g,_2=/\u0000|\uFFFD/g;function sx(t){return(typeof t=="string"?t:""+t).replace(g2,`
`).replace(_2,"")}function Tc(t,e,n){if(e=sx(e),sx(t)!==e&&n)throw Error(Te(425))}function Pf(){}var Zp=null,Qp=null;function Jp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var em=typeof setTimeout=="function"?setTimeout:void 0,v2=typeof clearTimeout=="function"?clearTimeout:void 0,ox=typeof Promise=="function"?Promise:void 0,x2=typeof queueMicrotask=="function"?queueMicrotask:typeof ox<"u"?function(t){return ox.resolve(null).then(t).catch(y2)}:em;function y2(t){setTimeout(function(){throw t})}function Gd(t,e){var n=e,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){t.removeChild(s),Jl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);Jl(e)}function Ls(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ax(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ja=Math.random().toString(36).slice(2),Sr="__reactFiber$"+Ja,ru="__reactProps$"+Ja,Qr="__reactContainer$"+Ja,tm="__reactEvents$"+Ja,S2="__reactListeners$"+Ja,E2="__reactHandles$"+Ja;function mo(t){var e=t[Sr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qr]||n[Sr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ax(t);t!==null;){if(n=t[Sr])return n;t=ax(t)}return e}t=n,n=t.parentNode}return null}function gu(t){return t=t[Sr]||t[Qr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function va(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Te(33))}function nh(t){return t[ru]||null}var nm=[],xa=-1;function Gs(t){return{current:t}}function jt(t){0>xa||(t.current=nm[xa],nm[xa]=null,xa--)}function Gt(t,e){xa++,nm[xa]=t.current,t.current=e}var zs={},Gn=Gs(zs),li=Gs(!1),Eo=zs;function Ba(t,e){var n=t.type.contextTypes;if(!n)return zs;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in n)s[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function ui(t){return t=t.childContextTypes,t!=null}function bf(){jt(li),jt(Gn)}function lx(t,e,n){if(Gn.current!==zs)throw Error(Te(168));Gt(Gn,e),Gt(li,n)}function ZS(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in e))throw Error(Te(108,ob(t)||"Unknown",s));return en({},n,i)}function Lf(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zs,Eo=Gn.current,Gt(Gn,t),Gt(li,li.current),!0}function ux(t,e,n){var i=t.stateNode;if(!i)throw Error(Te(169));n?(t=ZS(t,e,Eo),i.__reactInternalMemoizedMergedChildContext=t,jt(li),jt(Gn),Gt(Gn,t)):jt(li),Gt(li,n)}var Gr=null,ih=!1,Wd=!1;function QS(t){Gr===null?Gr=[t]:Gr.push(t)}function M2(t){ih=!0,QS(t)}function Ws(){if(!Wd&&Gr!==null){Wd=!0;var t=0,e=Ut;try{var n=Gr;for(Ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Gr=null,ih=!1}catch(s){throw Gr!==null&&(Gr=Gr.slice(t+1)),MS(yg,Ws),s}finally{Ut=e,Wd=!1}}return null}var ya=[],Sa=0,Df=null,If=0,ki=[],Hi=0,Mo=null,Wr=1,Xr="";function uo(t,e){ya[Sa++]=If,ya[Sa++]=Df,Df=t,If=e}function JS(t,e,n){ki[Hi++]=Wr,ki[Hi++]=Xr,ki[Hi++]=Mo,Mo=t;var i=Wr;t=Xr;var s=32-cr(i)-1;i&=~(1<<s),n+=1;var o=32-cr(e)+s;if(30<o){var l=s-s%5;o=(i&(1<<l)-1).toString(32),i>>=l,s-=l,Wr=1<<32-cr(e)+s|n<<s|i,Xr=o+t}else Wr=1<<o|n<<s|i,Xr=t}function Pg(t){t.return!==null&&(uo(t,1),JS(t,1,0))}function bg(t){for(;t===Df;)Df=ya[--Sa],ya[Sa]=null,If=ya[--Sa],ya[Sa]=null;for(;t===Mo;)Mo=ki[--Hi],ki[Hi]=null,Xr=ki[--Hi],ki[Hi]=null,Wr=ki[--Hi],ki[Hi]=null}var wi=null,Ti=null,Kt=!1,ar=null;function eE(t,e){var n=Gi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cx(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wi=t,Ti=Ls(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wi=t,Ti=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mo!==null?{id:Wr,overflow:Xr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wi=t,Ti=null,!0):!1;default:return!1}}function im(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rm(t){if(Kt){var e=Ti;if(e){var n=e;if(!cx(t,e)){if(im(t))throw Error(Te(418));e=Ls(n.nextSibling);var i=wi;e&&cx(t,e)?eE(i,n):(t.flags=t.flags&-4097|2,Kt=!1,wi=t)}}else{if(im(t))throw Error(Te(418));t.flags=t.flags&-4097|2,Kt=!1,wi=t}}}function fx(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wi=t}function wc(t){if(t!==wi)return!1;if(!Kt)return fx(t),Kt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jp(t.type,t.memoizedProps)),e&&(e=Ti)){if(im(t))throw tE(),Error(Te(418));for(;e;)eE(t,e),e=Ls(e.nextSibling)}if(fx(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ti=Ls(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ti=null}}else Ti=wi?Ls(t.stateNode.nextSibling):null;return!0}function tE(){for(var t=Ti;t;)t=Ls(t.nextSibling)}function za(){Ti=wi=null,Kt=!1}function Lg(t){ar===null?ar=[t]:ar.push(t)}var T2=is.ReactCurrentBatchConfig;function Tl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Te(309));var i=n.stateNode}if(!i)throw Error(Te(147,t));var s=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var u=s.refs;l===null?delete u[o]:u[o]=l},e._stringRef=o,e)}if(typeof t!="string")throw Error(Te(284));if(!n._owner)throw Error(Te(290,t))}return t}function Ac(t,e){throw t=Object.prototype.toString.call(e),Error(Te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hx(t){var e=t._init;return e(t._payload)}function nE(t){function e(d,E){if(t){var M=d.deletions;M===null?(d.deletions=[E],d.flags|=16):M.push(E)}}function n(d,E){if(!t)return null;for(;E!==null;)e(d,E),E=E.sibling;return null}function i(d,E){for(d=new Map;E!==null;)E.key!==null?d.set(E.key,E):d.set(E.index,E),E=E.sibling;return d}function s(d,E){return d=Ns(d,E),d.index=0,d.sibling=null,d}function o(d,E,M){return d.index=M,t?(M=d.alternate,M!==null?(M=M.index,M<E?(d.flags|=2,E):M):(d.flags|=2,E)):(d.flags|=1048576,E)}function l(d){return t&&d.alternate===null&&(d.flags|=2),d}function u(d,E,M,w){return E===null||E.tag!==6?(E=Zd(M,d.mode,w),E.return=d,E):(E=s(E,M),E.return=d,E)}function f(d,E,M,w){var F=M.type;return F===pa?p(d,E,M.props.children,w,M.key):E!==null&&(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ys&&hx(F)===E.type)?(w=s(E,M.props),w.ref=Tl(d,E,M),w.return=d,w):(w=pf(M.type,M.key,M.props,null,d.mode,w),w.ref=Tl(d,E,M),w.return=d,w)}function h(d,E,M,w){return E===null||E.tag!==4||E.stateNode.containerInfo!==M.containerInfo||E.stateNode.implementation!==M.implementation?(E=Qd(M,d.mode,w),E.return=d,E):(E=s(E,M.children||[]),E.return=d,E)}function p(d,E,M,w,F){return E===null||E.tag!==7?(E=So(M,d.mode,w,F),E.return=d,E):(E=s(E,M),E.return=d,E)}function _(d,E,M){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Zd(""+E,d.mode,M),E.return=d,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case mc:return M=pf(E.type,E.key,E.props,null,d.mode,M),M.ref=Tl(d,null,E),M.return=d,M;case da:return E=Qd(E,d.mode,M),E.return=d,E;case ys:var w=E._init;return _(d,w(E._payload),M)}if(Il(E)||xl(E))return E=So(E,d.mode,M,null),E.return=d,E;Ac(d,E)}return null}function g(d,E,M,w){var F=E!==null?E.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return F!==null?null:u(d,E,""+M,w);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case mc:return M.key===F?f(d,E,M,w):null;case da:return M.key===F?h(d,E,M,w):null;case ys:return F=M._init,g(d,E,F(M._payload),w)}if(Il(M)||xl(M))return F!==null?null:p(d,E,M,w,null);Ac(d,M)}return null}function v(d,E,M,w,F){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(M)||null,u(E,d,""+w,F);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case mc:return d=d.get(w.key===null?M:w.key)||null,f(E,d,w,F);case da:return d=d.get(w.key===null?M:w.key)||null,h(E,d,w,F);case ys:var U=w._init;return v(d,E,M,U(w._payload),F)}if(Il(w)||xl(w))return d=d.get(M)||null,p(E,d,w,F,null);Ac(E,w)}return null}function S(d,E,M,w){for(var F=null,U=null,I=E,O=E=0,L=null;I!==null&&O<M.length;O++){I.index>O?(L=I,I=null):L=I.sibling;var C=g(d,I,M[O],w);if(C===null){I===null&&(I=L);break}t&&I&&C.alternate===null&&e(d,I),E=o(C,E,O),U===null?F=C:U.sibling=C,U=C,I=L}if(O===M.length)return n(d,I),Kt&&uo(d,O),F;if(I===null){for(;O<M.length;O++)I=_(d,M[O],w),I!==null&&(E=o(I,E,O),U===null?F=I:U.sibling=I,U=I);return Kt&&uo(d,O),F}for(I=i(d,I);O<M.length;O++)L=v(I,d,O,M[O],w),L!==null&&(t&&L.alternate!==null&&I.delete(L.key===null?O:L.key),E=o(L,E,O),U===null?F=L:U.sibling=L,U=L);return t&&I.forEach(function(k){return e(d,k)}),Kt&&uo(d,O),F}function T(d,E,M,w){var F=xl(M);if(typeof F!="function")throw Error(Te(150));if(M=F.call(M),M==null)throw Error(Te(151));for(var U=F=null,I=E,O=E=0,L=null,C=M.next();I!==null&&!C.done;O++,C=M.next()){I.index>O?(L=I,I=null):L=I.sibling;var k=g(d,I,C.value,w);if(k===null){I===null&&(I=L);break}t&&I&&k.alternate===null&&e(d,I),E=o(k,E,O),U===null?F=k:U.sibling=k,U=k,I=L}if(C.done)return n(d,I),Kt&&uo(d,O),F;if(I===null){for(;!C.done;O++,C=M.next())C=_(d,C.value,w),C!==null&&(E=o(C,E,O),U===null?F=C:U.sibling=C,U=C);return Kt&&uo(d,O),F}for(I=i(d,I);!C.done;O++,C=M.next())C=v(I,d,O,C.value,w),C!==null&&(t&&C.alternate!==null&&I.delete(C.key===null?O:C.key),E=o(C,E,O),U===null?F=C:U.sibling=C,U=C);return t&&I.forEach(function(ae){return e(d,ae)}),Kt&&uo(d,O),F}function x(d,E,M,w){if(typeof M=="object"&&M!==null&&M.type===pa&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case mc:e:{for(var F=M.key,U=E;U!==null;){if(U.key===F){if(F=M.type,F===pa){if(U.tag===7){n(d,U.sibling),E=s(U,M.props.children),E.return=d,d=E;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ys&&hx(F)===U.type){n(d,U.sibling),E=s(U,M.props),E.ref=Tl(d,U,M),E.return=d,d=E;break e}n(d,U);break}else e(d,U);U=U.sibling}M.type===pa?(E=So(M.props.children,d.mode,w,M.key),E.return=d,d=E):(w=pf(M.type,M.key,M.props,null,d.mode,w),w.ref=Tl(d,E,M),w.return=d,d=w)}return l(d);case da:e:{for(U=M.key;E!==null;){if(E.key===U)if(E.tag===4&&E.stateNode.containerInfo===M.containerInfo&&E.stateNode.implementation===M.implementation){n(d,E.sibling),E=s(E,M.children||[]),E.return=d,d=E;break e}else{n(d,E);break}else e(d,E);E=E.sibling}E=Qd(M,d.mode,w),E.return=d,d=E}return l(d);case ys:return U=M._init,x(d,E,U(M._payload),w)}if(Il(M))return S(d,E,M,w);if(xl(M))return T(d,E,M,w);Ac(d,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,E!==null&&E.tag===6?(n(d,E.sibling),E=s(E,M),E.return=d,d=E):(n(d,E),E=Zd(M,d.mode,w),E.return=d,d=E),l(d)):n(d,E)}return x}var ka=nE(!0),iE=nE(!1),Uf=Gs(null),Nf=null,Ea=null,Dg=null;function Ig(){Dg=Ea=Nf=null}function Ug(t){var e=Uf.current;jt(Uf),t._currentValue=e}function sm(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function La(t,e){Nf=t,Dg=Ea=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ai=!0),t.firstContext=null)}function Xi(t){var e=t._currentValue;if(Dg!==t)if(t={context:t,memoizedValue:e,next:null},Ea===null){if(Nf===null)throw Error(Te(308));Ea=t,Nf.dependencies={lanes:0,firstContext:t}}else Ea=Ea.next=t;return e}var go=null;function Ng(t){go===null?go=[t]:go.push(t)}function rE(t,e,n,i){var s=e.interleaved;return s===null?(n.next=n,Ng(e)):(n.next=s.next,s.next=n),e.interleaved=n,Jr(t,i)}function Jr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ss=!1;function Fg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ds(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Tt&2){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,Jr(t,n)}return s=i.interleaved,s===null?(e.next=e,Ng(i)):(e.next=s.next,s.next=e),i.interleaved=e,Jr(t,n)}function lf(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sg(t,n)}}function dx(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?s=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?s=o=e:o=o.next=e}else s=o=e;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ff(t,e,n,i){var s=t.updateQueue;Ss=!1;var o=s.firstBaseUpdate,l=s.lastBaseUpdate,u=s.shared.pending;if(u!==null){s.shared.pending=null;var f=u,h=f.next;f.next=null,l===null?o=h:l.next=h,l=f;var p=t.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==l&&(u===null?p.firstBaseUpdate=h:u.next=h,p.lastBaseUpdate=f))}if(o!==null){var _=s.baseState;l=0,p=h=f=null,u=o;do{var g=u.lane,v=u.eventTime;if((i&g)===g){p!==null&&(p=p.next={eventTime:v,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var S=t,T=u;switch(g=e,v=n,T.tag){case 1:if(S=T.payload,typeof S=="function"){_=S.call(v,_,g);break e}_=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=T.payload,g=typeof S=="function"?S.call(v,_,g):S,g==null)break e;_=en({},_,g);break e;case 2:Ss=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[u]:g.push(u))}else v={eventTime:v,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(h=p=v,f=_):p=p.next=v,l|=g;if(u=u.next,u===null){if(u=s.shared.pending,u===null)break;g=u,u=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(p===null&&(f=_),s.baseState=f,s.firstBaseUpdate=h,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do l|=s.lane,s=s.next;while(s!==e)}else o===null&&(s.shared.lanes=0);wo|=l,t.lanes=l,t.memoizedState=_}}function px(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(Te(191,s));s.call(i)}}}var _u={},Ar=Gs(_u),su=Gs(_u),ou=Gs(_u);function _o(t){if(t===_u)throw Error(Te(174));return t}function Og(t,e){switch(Gt(ou,e),Gt(su,t),Gt(Ar,_u),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zp(e,t)}jt(Ar),Gt(Ar,e)}function Ha(){jt(Ar),jt(su),jt(ou)}function oE(t){_o(ou.current);var e=_o(Ar.current),n=zp(e,t.type);e!==n&&(Gt(su,t),Gt(Ar,n))}function Bg(t){su.current===t&&(jt(Ar),jt(su))}var Qt=Gs(0);function Of(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xd=[];function zg(){for(var t=0;t<Xd.length;t++)Xd[t]._workInProgressVersionPrimary=null;Xd.length=0}var uf=is.ReactCurrentDispatcher,Yd=is.ReactCurrentBatchConfig,To=0,Jt=null,vn=null,wn=null,Bf=!1,Vl=!1,au=0,w2=0;function Bn(){throw Error(Te(321))}function kg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pr(t[n],e[n]))return!1;return!0}function Hg(t,e,n,i,s,o){if(To=o,Jt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,uf.current=t===null||t.memoizedState===null?P2:b2,t=n(i,s),Vl){o=0;do{if(Vl=!1,au=0,25<=o)throw Error(Te(301));o+=1,wn=vn=null,e.updateQueue=null,uf.current=L2,t=n(i,s)}while(Vl)}if(uf.current=zf,e=vn!==null&&vn.next!==null,To=0,wn=vn=Jt=null,Bf=!1,e)throw Error(Te(300));return t}function Vg(){var t=au!==0;return au=0,t}function xr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?Jt.memoizedState=wn=t:wn=wn.next=t,wn}function Yi(){if(vn===null){var t=Jt.alternate;t=t!==null?t.memoizedState:null}else t=vn.next;var e=wn===null?Jt.memoizedState:wn.next;if(e!==null)wn=e,vn=t;else{if(t===null)throw Error(Te(310));vn=t,t={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},wn===null?Jt.memoizedState=wn=t:wn=wn.next=t}return wn}function lu(t,e){return typeof e=="function"?e(t):e}function jd(t){var e=Yi(),n=e.queue;if(n===null)throw Error(Te(311));n.lastRenderedReducer=t;var i=vn,s=i.baseQueue,o=n.pending;if(o!==null){if(s!==null){var l=s.next;s.next=o.next,o.next=l}i.baseQueue=s=o,n.pending=null}if(s!==null){o=s.next,i=i.baseState;var u=l=null,f=null,h=o;do{var p=h.lane;if((To&p)===p)f!==null&&(f=f.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),i=h.hasEagerState?h.eagerState:t(i,h.action);else{var _={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};f===null?(u=f=_,l=i):f=f.next=_,Jt.lanes|=p,wo|=p}h=h.next}while(h!==null&&h!==o);f===null?l=i:f.next=u,pr(i,e.memoizedState)||(ai=!0),e.memoizedState=i,e.baseState=l,e.baseQueue=f,n.lastRenderedState=i}if(t=n.interleaved,t!==null){s=t;do o=s.lane,Jt.lanes|=o,wo|=o,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qd(t){var e=Yi(),n=e.queue;if(n===null)throw Error(Te(311));n.lastRenderedReducer=t;var i=n.dispatch,s=n.pending,o=e.memoizedState;if(s!==null){n.pending=null;var l=s=s.next;do o=t(o,l.action),l=l.next;while(l!==s);pr(o,e.memoizedState)||(ai=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function aE(){}function lE(t,e){var n=Jt,i=Yi(),s=e(),o=!pr(i.memoizedState,s);if(o&&(i.memoizedState=s,ai=!0),i=i.queue,Gg(fE.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||wn!==null&&wn.memoizedState.tag&1){if(n.flags|=2048,uu(9,cE.bind(null,n,i,s,e),void 0,null),An===null)throw Error(Te(349));To&30||uE(n,e,s)}return s}function uE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Jt.updateQueue,e===null?(e={lastEffect:null,stores:null},Jt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cE(t,e,n,i){e.value=n,e.getSnapshot=i,hE(e)&&dE(t)}function fE(t,e,n){return n(function(){hE(e)&&dE(t)})}function hE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pr(t,n)}catch{return!0}}function dE(t){var e=Jr(t,1);e!==null&&fr(e,t,1,-1)}function mx(t){var e=xr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lu,lastRenderedState:t},e.queue=t,t=t.dispatch=C2.bind(null,Jt,t),[e.memoizedState,t]}function uu(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Jt.updateQueue,e===null?(e={lastEffect:null,stores:null},Jt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function pE(){return Yi().memoizedState}function cf(t,e,n,i){var s=xr();Jt.flags|=t,s.memoizedState=uu(1|e,n,void 0,i===void 0?null:i)}function rh(t,e,n,i){var s=Yi();i=i===void 0?null:i;var o=void 0;if(vn!==null){var l=vn.memoizedState;if(o=l.destroy,i!==null&&kg(i,l.deps)){s.memoizedState=uu(e,n,o,i);return}}Jt.flags|=t,s.memoizedState=uu(1|e,n,o,i)}function gx(t,e){return cf(8390656,8,t,e)}function Gg(t,e){return rh(2048,8,t,e)}function mE(t,e){return rh(4,2,t,e)}function gE(t,e){return rh(4,4,t,e)}function _E(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vE(t,e,n){return n=n!=null?n.concat([t]):null,rh(4,4,_E.bind(null,e,t),n)}function Wg(){}function xE(t,e){var n=Yi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kg(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function yE(t,e){var n=Yi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kg(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function SE(t,e,n){return To&21?(pr(n,e)||(n=AS(),Jt.lanes|=n,wo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ai=!0),t.memoizedState=n)}function A2(t,e){var n=Ut;Ut=n!==0&&4>n?n:4,t(!0);var i=Yd.transition;Yd.transition={};try{t(!1),e()}finally{Ut=n,Yd.transition=i}}function EE(){return Yi().memoizedState}function R2(t,e,n){var i=Us(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ME(t))TE(e,n);else if(n=rE(t,e,n,i),n!==null){var s=Zn();fr(n,t,i,s),wE(n,e,i)}}function C2(t,e,n){var i=Us(t),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ME(t))TE(e,s);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,u=o(l,n);if(s.hasEagerState=!0,s.eagerState=u,pr(u,l)){var f=e.interleaved;f===null?(s.next=s,Ng(e)):(s.next=f.next,f.next=s),e.interleaved=s;return}}catch{}finally{}n=rE(t,e,s,i),n!==null&&(s=Zn(),fr(n,t,i,s),wE(n,e,i))}}function ME(t){var e=t.alternate;return t===Jt||e!==null&&e===Jt}function TE(t,e){Vl=Bf=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wE(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sg(t,n)}}var zf={readContext:Xi,useCallback:Bn,useContext:Bn,useEffect:Bn,useImperativeHandle:Bn,useInsertionEffect:Bn,useLayoutEffect:Bn,useMemo:Bn,useReducer:Bn,useRef:Bn,useState:Bn,useDebugValue:Bn,useDeferredValue:Bn,useTransition:Bn,useMutableSource:Bn,useSyncExternalStore:Bn,useId:Bn,unstable_isNewReconciler:!1},P2={readContext:Xi,useCallback:function(t,e){return xr().memoizedState=[t,e===void 0?null:e],t},useContext:Xi,useEffect:gx,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cf(4194308,4,_E.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cf(4194308,4,t,e)},useInsertionEffect:function(t,e){return cf(4,2,t,e)},useMemo:function(t,e){var n=xr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=xr();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=R2.bind(null,Jt,t),[i.memoizedState,t]},useRef:function(t){var e=xr();return t={current:t},e.memoizedState=t},useState:mx,useDebugValue:Wg,useDeferredValue:function(t){return xr().memoizedState=t},useTransition:function(){var t=mx(!1),e=t[0];return t=A2.bind(null,t[1]),xr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Jt,s=xr();if(Kt){if(n===void 0)throw Error(Te(407));n=n()}else{if(n=e(),An===null)throw Error(Te(349));To&30||uE(i,e,n)}s.memoizedState=n;var o={value:n,getSnapshot:e};return s.queue=o,gx(fE.bind(null,i,o,t),[t]),i.flags|=2048,uu(9,cE.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=xr(),e=An.identifierPrefix;if(Kt){var n=Xr,i=Wr;n=(i&~(1<<32-cr(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=au++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=w2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},b2={readContext:Xi,useCallback:xE,useContext:Xi,useEffect:Gg,useImperativeHandle:vE,useInsertionEffect:mE,useLayoutEffect:gE,useMemo:yE,useReducer:jd,useRef:pE,useState:function(){return jd(lu)},useDebugValue:Wg,useDeferredValue:function(t){var e=Yi();return SE(e,vn.memoizedState,t)},useTransition:function(){var t=jd(lu)[0],e=Yi().memoizedState;return[t,e]},useMutableSource:aE,useSyncExternalStore:lE,useId:EE,unstable_isNewReconciler:!1},L2={readContext:Xi,useCallback:xE,useContext:Xi,useEffect:Gg,useImperativeHandle:vE,useInsertionEffect:mE,useLayoutEffect:gE,useMemo:yE,useReducer:qd,useRef:pE,useState:function(){return qd(lu)},useDebugValue:Wg,useDeferredValue:function(t){var e=Yi();return vn===null?e.memoizedState=t:SE(e,vn.memoizedState,t)},useTransition:function(){var t=qd(lu)[0],e=Yi().memoizedState;return[t,e]},useMutableSource:aE,useSyncExternalStore:lE,useId:EE,unstable_isNewReconciler:!1};function sr(t,e){if(t&&t.defaultProps){e=en({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function om(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:en({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var sh={isMounted:function(t){return(t=t._reactInternals)?Lo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zn(),s=Us(t),o=qr(i,s);o.payload=e,n!=null&&(o.callback=n),e=Ds(t,o,s),e!==null&&(fr(e,t,s,i),lf(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zn(),s=Us(t),o=qr(i,s);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ds(t,o,s),e!==null&&(fr(e,t,s,i),lf(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zn(),i=Us(t),s=qr(n,i);s.tag=2,e!=null&&(s.callback=e),e=Ds(t,s,i),e!==null&&(fr(e,t,i,n),lf(e,t,i))}};function _x(t,e,n,i,s,o,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,l):e.prototype&&e.prototype.isPureReactComponent?!tu(n,i)||!tu(s,o):!0}function AE(t,e,n){var i=!1,s=zs,o=e.contextType;return typeof o=="object"&&o!==null?o=Xi(o):(s=ui(e)?Eo:Gn.current,i=e.contextTypes,o=(i=i!=null)?Ba(t,s):zs),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sh,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=o),e}function vx(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&sh.enqueueReplaceState(e,e.state,null)}function am(t,e,n,i){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Fg(t);var o=e.contextType;typeof o=="object"&&o!==null?s.context=Xi(o):(o=ui(e)?Eo:Gn.current,s.context=Ba(t,o)),s.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(om(t,e,o,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&sh.enqueueReplaceState(s,s.state,null),Ff(t,n,s,i),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Va(t,e){try{var n="",i=e;do n+=sb(i),i=i.return;while(i);var s=n}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:s,digest:null}}function $d(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var D2=typeof WeakMap=="function"?WeakMap:Map;function RE(t,e,n){n=qr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Hf||(Hf=!0,vm=i),lm(t,e)},n}function CE(t,e,n){n=qr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var s=e.value;n.payload=function(){return i(s)},n.callback=function(){lm(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){lm(t,e),typeof i!="function"&&(Is===null?Is=new Set([this]):Is.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function xx(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new D2;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(n)||(s.add(n),t=Y2.bind(null,t,e,n),e.then(t,t))}function yx(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sx(t,e,n,i,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qr(-1,1),e.tag=2,Ds(n,e,1))),n.lanes|=1),t)}var I2=is.ReactCurrentOwner,ai=!1;function Kn(t,e,n,i){e.child=t===null?iE(e,null,n,i):ka(e,t.child,n,i)}function Ex(t,e,n,i,s){n=n.render;var o=e.ref;return La(e,s),i=Hg(t,e,n,i,o,s),n=Vg(),t!==null&&!ai?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,es(t,e,s)):(Kt&&n&&Pg(e),e.flags|=1,Kn(t,e,i,s),e.child)}function Mx(t,e,n,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!Qg(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,PE(t,e,o,i,s)):(t=pf(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&s)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:tu,n(l,i)&&t.ref===e.ref)return es(t,e,s)}return e.flags|=1,t=Ns(o,i),t.ref=e.ref,t.return=e,e.child=t}function PE(t,e,n,i,s){if(t!==null){var o=t.memoizedProps;if(tu(o,i)&&t.ref===e.ref)if(ai=!1,e.pendingProps=i=o,(t.lanes&s)!==0)t.flags&131072&&(ai=!0);else return e.lanes=t.lanes,es(t,e,s)}return um(t,e,n,i,s)}function bE(t,e,n){var i=e.pendingProps,s=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Ta,Mi),Mi|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Gt(Ta,Mi),Mi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Gt(Ta,Mi),Mi|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Gt(Ta,Mi),Mi|=i;return Kn(t,e,s,n),e.child}function LE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function um(t,e,n,i,s){var o=ui(n)?Eo:Gn.current;return o=Ba(e,o),La(e,s),n=Hg(t,e,n,i,o,s),i=Vg(),t!==null&&!ai?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,es(t,e,s)):(Kt&&i&&Pg(e),e.flags|=1,Kn(t,e,n,s),e.child)}function Tx(t,e,n,i,s){if(ui(n)){var o=!0;Lf(e)}else o=!1;if(La(e,s),e.stateNode===null)ff(t,e),AE(e,n,i),am(e,n,i,s),i=!0;else if(t===null){var l=e.stateNode,u=e.memoizedProps;l.props=u;var f=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=Xi(h):(h=ui(n)?Eo:Gn.current,h=Ba(e,h));var p=n.getDerivedStateFromProps,_=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";_||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==i||f!==h)&&vx(e,l,i,h),Ss=!1;var g=e.memoizedState;l.state=g,Ff(e,i,l,s),f=e.memoizedState,u!==i||g!==f||li.current||Ss?(typeof p=="function"&&(om(e,n,p,i),f=e.memoizedState),(u=Ss||_x(e,n,u,i,g,f,h))?(_||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=f),l.props=i,l.state=f,l.context=h,i=u):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,sE(t,e),u=e.memoizedProps,h=e.type===e.elementType?u:sr(e.type,u),l.props=h,_=e.pendingProps,g=l.context,f=n.contextType,typeof f=="object"&&f!==null?f=Xi(f):(f=ui(n)?Eo:Gn.current,f=Ba(e,f));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==_||g!==f)&&vx(e,l,i,f),Ss=!1,g=e.memoizedState,l.state=g,Ff(e,i,l,s);var S=e.memoizedState;u!==_||g!==S||li.current||Ss?(typeof v=="function"&&(om(e,n,v,i),S=e.memoizedState),(h=Ss||_x(e,n,h,i,g,S,f)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,S,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,S,f)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=S),l.props=i,l.state=S,l.context=f,i=h):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),i=!1)}return cm(t,e,n,i,o,s)}function cm(t,e,n,i,s,o){LE(t,e);var l=(e.flags&128)!==0;if(!i&&!l)return s&&ux(e,n,!1),es(t,e,o);i=e.stateNode,I2.current=e;var u=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&l?(e.child=ka(e,t.child,null,o),e.child=ka(e,null,u,o)):Kn(t,e,u,o),e.memoizedState=i.state,s&&ux(e,n,!0),e.child}function DE(t){var e=t.stateNode;e.pendingContext?lx(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lx(t,e.context,!1),Og(t,e.containerInfo)}function wx(t,e,n,i,s){return za(),Lg(s),e.flags|=256,Kn(t,e,n,i),e.child}var fm={dehydrated:null,treeContext:null,retryLane:0};function hm(t){return{baseLanes:t,cachePool:null,transitions:null}}function IE(t,e,n){var i=e.pendingProps,s=Qt.current,o=!1,l=(e.flags&128)!==0,u;if((u=l)||(u=t!==null&&t.memoizedState===null?!1:(s&2)!==0),u?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Gt(Qt,s&1),t===null)return rm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=i.children,t=i.fallback,o?(i=e.mode,o=e.child,l={mode:"hidden",children:l},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=lh(l,i,0,null),t=So(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=hm(n),e.memoizedState=fm,t):Xg(e,l));if(s=t.memoizedState,s!==null&&(u=s.dehydrated,u!==null))return U2(t,e,l,i,u,s,n);if(o){o=i.fallback,l=e.mode,s=t.child,u=s.sibling;var f={mode:"hidden",children:i.children};return!(l&1)&&e.child!==s?(i=e.child,i.childLanes=0,i.pendingProps=f,e.deletions=null):(i=Ns(s,f),i.subtreeFlags=s.subtreeFlags&14680064),u!==null?o=Ns(u,o):(o=So(o,l,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,l=t.child.memoizedState,l=l===null?hm(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=t.childLanes&~n,e.memoizedState=fm,i}return o=t.child,t=o.sibling,i=Ns(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Xg(t,e){return e=lh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Rc(t,e,n,i){return i!==null&&Lg(i),ka(e,t.child,null,n),t=Xg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function U2(t,e,n,i,s,o,l){if(n)return e.flags&256?(e.flags&=-257,i=$d(Error(Te(422))),Rc(t,e,l,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,s=e.mode,i=lh({mode:"visible",children:i.children},s,0,null),o=So(o,s,l,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&ka(e,t.child,null,l),e.child.memoizedState=hm(l),e.memoizedState=fm,o);if(!(e.mode&1))return Rc(t,e,l,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var u=i.dgst;return i=u,o=Error(Te(419)),i=$d(o,i,void 0),Rc(t,e,l,i)}if(u=(l&t.childLanes)!==0,ai||u){if(i=An,i!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|l)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,Jr(t,s),fr(i,t,s,-1))}return Zg(),i=$d(Error(Te(421))),Rc(t,e,l,i)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=j2.bind(null,t),s._reactRetry=e,null):(t=o.treeContext,Ti=Ls(s.nextSibling),wi=e,Kt=!0,ar=null,t!==null&&(ki[Hi++]=Wr,ki[Hi++]=Xr,ki[Hi++]=Mo,Wr=t.id,Xr=t.overflow,Mo=e),e=Xg(e,i.children),e.flags|=4096,e)}function Ax(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),sm(t.return,e,n)}function Kd(t,e,n,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=s)}function UE(t,e,n){var i=e.pendingProps,s=i.revealOrder,o=i.tail;if(Kn(t,e,i.children,n),i=Qt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ax(t,n,e);else if(t.tag===19)Ax(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Gt(Qt,i),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Of(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Kd(e,!1,s,n,o);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Of(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Kd(e,!0,n,null,o);break;case"together":Kd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ff(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function es(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Te(153));if(e.child!==null){for(t=e.child,n=Ns(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ns(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function N2(t,e,n){switch(e.tag){case 3:DE(e),za();break;case 5:oE(e);break;case 1:ui(e.type)&&Lf(e);break;case 4:Og(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,s=e.memoizedProps.value;Gt(Uf,i._currentValue),i._currentValue=s;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Gt(Qt,Qt.current&1),e.flags|=128,null):n&e.child.childLanes?IE(t,e,n):(Gt(Qt,Qt.current&1),t=es(t,e,n),t!==null?t.sibling:null);Gt(Qt,Qt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return UE(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Gt(Qt,Qt.current),i)break;return null;case 22:case 23:return e.lanes=0,bE(t,e,n)}return es(t,e,n)}var NE,dm,FE,OE;NE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dm=function(){};FE=function(t,e,n,i){var s=t.memoizedProps;if(s!==i){t=e.stateNode,_o(Ar.current);var o=null;switch(n){case"input":s=Np(t,s),i=Np(t,i),o=[];break;case"select":s=en({},s,{value:void 0}),i=en({},i,{value:void 0}),o=[];break;case"textarea":s=Bp(t,s),i=Bp(t,i),o=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Pf)}kp(n,i);var l;n=null;for(h in s)if(!i.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var u=s[h];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ql.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in i){var f=i[h];if(u=s!=null?s[h]:void 0,i.hasOwnProperty(h)&&f!==u&&(f!=null||u!=null))if(h==="style")if(u){for(l in u)!u.hasOwnProperty(l)||f&&f.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in f)f.hasOwnProperty(l)&&u[l]!==f[l]&&(n||(n={}),n[l]=f[l])}else n||(o||(o=[]),o.push(h,n)),n=f;else h==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,u=u?u.__html:void 0,f!=null&&u!==f&&(o=o||[]).push(h,f)):h==="children"?typeof f!="string"&&typeof f!="number"||(o=o||[]).push(h,""+f):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ql.hasOwnProperty(h)?(f!=null&&h==="onScroll"&&Yt("scroll",t),o||u===f||(o=[])):(o=o||[]).push(h,f))}n&&(o=o||[]).push("style",n);var h=o;(e.updateQueue=h)&&(e.flags|=4)}};OE=function(t,e,n,i){n!==i&&(e.flags|=4)};function wl(t,e){if(!Kt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function F2(t,e,n){var i=e.pendingProps;switch(bg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zn(e),null;case 1:return ui(e.type)&&bf(),zn(e),null;case 3:return i=e.stateNode,Ha(),jt(li),jt(Gn),zg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(wc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ar!==null&&(Sm(ar),ar=null))),dm(t,e),zn(e),null;case 5:Bg(e);var s=_o(ou.current);if(n=e.type,t!==null&&e.stateNode!=null)FE(t,e,n,i,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Te(166));return zn(e),null}if(t=_o(Ar.current),wc(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[Sr]=e,i[ru]=o,t=(e.mode&1)!==0,n){case"dialog":Yt("cancel",i),Yt("close",i);break;case"iframe":case"object":case"embed":Yt("load",i);break;case"video":case"audio":for(s=0;s<Nl.length;s++)Yt(Nl[s],i);break;case"source":Yt("error",i);break;case"img":case"image":case"link":Yt("error",i),Yt("load",i);break;case"details":Yt("toggle",i);break;case"input":Nv(i,o),Yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Yt("invalid",i);break;case"textarea":Ov(i,o),Yt("invalid",i)}kp(n,o),s=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?i.textContent!==u&&(o.suppressHydrationWarning!==!0&&Tc(i.textContent,u,t),s=["children",u]):typeof u=="number"&&i.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Tc(i.textContent,u,t),s=["children",""+u]):ql.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&Yt("scroll",i)}switch(n){case"input":gc(i),Fv(i,o,!0);break;case"textarea":gc(i),Bv(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Pf)}i=s,e.updateQueue=i,i!==null&&(e.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fS(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=l.createElement(n,{is:i.is}):(t=l.createElement(n),n==="select"&&(l=t,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):t=l.createElementNS(t,n),t[Sr]=e,t[ru]=i,NE(t,e,!1,!1),e.stateNode=t;e:{switch(l=Hp(n,i),n){case"dialog":Yt("cancel",t),Yt("close",t),s=i;break;case"iframe":case"object":case"embed":Yt("load",t),s=i;break;case"video":case"audio":for(s=0;s<Nl.length;s++)Yt(Nl[s],t);s=i;break;case"source":Yt("error",t),s=i;break;case"img":case"image":case"link":Yt("error",t),Yt("load",t),s=i;break;case"details":Yt("toggle",t),s=i;break;case"input":Nv(t,i),s=Np(t,i),Yt("invalid",t);break;case"option":s=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},s=en({},i,{value:void 0}),Yt("invalid",t);break;case"textarea":Ov(t,i),s=Bp(t,i),Yt("invalid",t);break;default:s=i}kp(n,s),u=s;for(o in u)if(u.hasOwnProperty(o)){var f=u[o];o==="style"?pS(t,f):o==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&hS(t,f)):o==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&$l(t,f):typeof f=="number"&&$l(t,""+f):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ql.hasOwnProperty(o)?f!=null&&o==="onScroll"&&Yt("scroll",t):f!=null&&mg(t,o,f,l))}switch(n){case"input":gc(t),Fv(t,i,!1);break;case"textarea":gc(t),Bv(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Bs(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Ra(t,!!i.multiple,o,!1):i.defaultValue!=null&&Ra(t,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Pf)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zn(e),null;case 6:if(t&&e.stateNode!=null)OE(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Te(166));if(n=_o(ou.current),_o(Ar.current),wc(e)){if(i=e.stateNode,n=e.memoizedProps,i[Sr]=e,(o=i.nodeValue!==n)&&(t=wi,t!==null))switch(t.tag){case 3:Tc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Tc(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Sr]=e,e.stateNode=i}return zn(e),null;case 13:if(jt(Qt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Kt&&Ti!==null&&e.mode&1&&!(e.flags&128))tE(),za(),e.flags|=98560,o=!1;else if(o=wc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(Te(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Te(317));o[Sr]=e}else za(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zn(e),o=!1}else ar!==null&&(Sm(ar),ar=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Qt.current&1?xn===0&&(xn=3):Zg())),e.updateQueue!==null&&(e.flags|=4),zn(e),null);case 4:return Ha(),dm(t,e),t===null&&nu(e.stateNode.containerInfo),zn(e),null;case 10:return Ug(e.type._context),zn(e),null;case 17:return ui(e.type)&&bf(),zn(e),null;case 19:if(jt(Qt),o=e.memoizedState,o===null)return zn(e),null;if(i=(e.flags&128)!==0,l=o.rendering,l===null)if(i)wl(o,!1);else{if(xn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Of(t),l!==null){for(e.flags|=128,wl(o,!1),i=l.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,t=l.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Gt(Qt,Qt.current&1|2),e.child}t=t.sibling}o.tail!==null&&un()>Ga&&(e.flags|=128,i=!0,wl(o,!1),e.lanes=4194304)}else{if(!i)if(t=Of(l),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Kt)return zn(e),null}else 2*un()-o.renderingStartTime>Ga&&n!==1073741824&&(e.flags|=128,i=!0,wl(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(n=o.last,n!==null?n.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=un(),e.sibling=null,n=Qt.current,Gt(Qt,i?n&1|2:n&1),e):(zn(e),null);case 22:case 23:return Kg(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mi&1073741824&&(zn(e),e.subtreeFlags&6&&(e.flags|=8192)):zn(e),null;case 24:return null;case 25:return null}throw Error(Te(156,e.tag))}function O2(t,e){switch(bg(e),e.tag){case 1:return ui(e.type)&&bf(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ha(),jt(li),jt(Gn),zg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bg(e),null;case 13:if(jt(Qt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Te(340));za()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return jt(Qt),null;case 4:return Ha(),null;case 10:return Ug(e.type._context),null;case 22:case 23:return Kg(),null;case 24:return null;default:return null}}var Cc=!1,Vn=!1,B2=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Ma(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){rn(t,e,i)}else n.current=null}function pm(t,e,n){try{n()}catch(i){rn(t,e,i)}}var Rx=!1;function z2(t,e){if(Zp=Af,t=VS(),Cg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,f=-1,h=0,p=0,_=t,g=null;t:for(;;){for(var v;_!==n||s!==0&&_.nodeType!==3||(u=l+s),_!==o||i!==0&&_.nodeType!==3||(f=l+i),_.nodeType===3&&(l+=_.nodeValue.length),(v=_.firstChild)!==null;)g=_,_=v;for(;;){if(_===t)break t;if(g===n&&++h===s&&(u=l),g===o&&++p===i&&(f=l),(v=_.nextSibling)!==null)break;_=g,g=_.parentNode}_=v}n=u===-1||f===-1?null:{start:u,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qp={focusedElem:t,selectionRange:n},Af=!1,ze=e;ze!==null;)if(e=ze,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ze=t;else for(;ze!==null;){e=ze;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var T=S.memoizedProps,x=S.memoizedState,d=e.stateNode,E=d.getSnapshotBeforeUpdate(e.elementType===e.type?T:sr(e.type,T),x);d.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Te(163))}}catch(w){rn(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,ze=t;break}ze=e.return}return S=Rx,Rx=!1,S}function Gl(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var o=s.destroy;s.destroy=void 0,o!==void 0&&pm(e,n,o)}s=s.next}while(s!==i)}}function oh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function mm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function BE(t){var e=t.alternate;e!==null&&(t.alternate=null,BE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Sr],delete e[ru],delete e[tm],delete e[S2],delete e[E2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zE(t){return t.tag===5||t.tag===3||t.tag===4}function Cx(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gm(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pf));else if(i!==4&&(t=t.child,t!==null))for(gm(t,e,n),t=t.sibling;t!==null;)gm(t,e,n),t=t.sibling}function _m(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(_m(t,e,n),t=t.sibling;t!==null;)_m(t,e,n),t=t.sibling}var Ln=null,or=!1;function ds(t,e,n){for(n=n.child;n!==null;)kE(t,e,n),n=n.sibling}function kE(t,e,n){if(wr&&typeof wr.onCommitFiberUnmount=="function")try{wr.onCommitFiberUnmount(Qf,n)}catch{}switch(n.tag){case 5:Vn||Ma(n,e);case 6:var i=Ln,s=or;Ln=null,ds(t,e,n),Ln=i,or=s,Ln!==null&&(or?(t=Ln,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ln.removeChild(n.stateNode));break;case 18:Ln!==null&&(or?(t=Ln,n=n.stateNode,t.nodeType===8?Gd(t.parentNode,n):t.nodeType===1&&Gd(t,n),Jl(t)):Gd(Ln,n.stateNode));break;case 4:i=Ln,s=or,Ln=n.stateNode.containerInfo,or=!0,ds(t,e,n),Ln=i,or=s;break;case 0:case 11:case 14:case 15:if(!Vn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var o=s,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&pm(n,e,l),s=s.next}while(s!==i)}ds(t,e,n);break;case 1:if(!Vn&&(Ma(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(u){rn(n,e,u)}ds(t,e,n);break;case 21:ds(t,e,n);break;case 22:n.mode&1?(Vn=(i=Vn)||n.memoizedState!==null,ds(t,e,n),Vn=i):ds(t,e,n);break;default:ds(t,e,n)}}function Px(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new B2),e.forEach(function(i){var s=q2.bind(null,t,i);n.has(i)||(n.add(i),i.then(s,s))})}}function tr(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var o=t,l=e,u=l;e:for(;u!==null;){switch(u.tag){case 5:Ln=u.stateNode,or=!1;break e;case 3:Ln=u.stateNode.containerInfo,or=!0;break e;case 4:Ln=u.stateNode.containerInfo,or=!0;break e}u=u.return}if(Ln===null)throw Error(Te(160));kE(o,l,s),Ln=null,or=!1;var f=s.alternate;f!==null&&(f.return=null),s.return=null}catch(h){rn(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)HE(e,t),e=e.sibling}function HE(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tr(e,t),vr(t),i&4){try{Gl(3,t,t.return),oh(3,t)}catch(T){rn(t,t.return,T)}try{Gl(5,t,t.return)}catch(T){rn(t,t.return,T)}}break;case 1:tr(e,t),vr(t),i&512&&n!==null&&Ma(n,n.return);break;case 5:if(tr(e,t),vr(t),i&512&&n!==null&&Ma(n,n.return),t.flags&32){var s=t.stateNode;try{$l(s,"")}catch(T){rn(t,t.return,T)}}if(i&4&&(s=t.stateNode,s!=null)){var o=t.memoizedProps,l=n!==null?n.memoizedProps:o,u=t.type,f=t.updateQueue;if(t.updateQueue=null,f!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&uS(s,o),Hp(u,l);var h=Hp(u,o);for(l=0;l<f.length;l+=2){var p=f[l],_=f[l+1];p==="style"?pS(s,_):p==="dangerouslySetInnerHTML"?hS(s,_):p==="children"?$l(s,_):mg(s,p,_,h)}switch(u){case"input":Fp(s,o);break;case"textarea":cS(s,o);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Ra(s,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?Ra(s,!!o.multiple,o.defaultValue,!0):Ra(s,!!o.multiple,o.multiple?[]:"",!1))}s[ru]=o}catch(T){rn(t,t.return,T)}}break;case 6:if(tr(e,t),vr(t),i&4){if(t.stateNode===null)throw Error(Te(162));s=t.stateNode,o=t.memoizedProps;try{s.nodeValue=o}catch(T){rn(t,t.return,T)}}break;case 3:if(tr(e,t),vr(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Jl(e.containerInfo)}catch(T){rn(t,t.return,T)}break;case 4:tr(e,t),vr(t);break;case 13:tr(e,t),vr(t),s=t.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(qg=un())),i&4&&Px(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Vn=(h=Vn)||p,tr(e,t),Vn=h):tr(e,t),vr(t),i&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for(ze=t,p=t.child;p!==null;){for(_=ze=p;ze!==null;){switch(g=ze,v=g.child,g.tag){case 0:case 11:case 14:case 15:Gl(4,g,g.return);break;case 1:Ma(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){i=g,n=g.return;try{e=i,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(T){rn(i,n,T)}}break;case 5:Ma(g,g.return);break;case 22:if(g.memoizedState!==null){Lx(_);continue}}v!==null?(v.return=g,ze=v):Lx(_)}p=p.sibling}e:for(p=null,_=t;;){if(_.tag===5){if(p===null){p=_;try{s=_.stateNode,h?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=_.stateNode,f=_.memoizedProps.style,l=f!=null&&f.hasOwnProperty("display")?f.display:null,u.style.display=dS("display",l))}catch(T){rn(t,t.return,T)}}}else if(_.tag===6){if(p===null)try{_.stateNode.nodeValue=h?"":_.memoizedProps}catch(T){rn(t,t.return,T)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===t)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===t)break e;for(;_.sibling===null;){if(_.return===null||_.return===t)break e;p===_&&(p=null),_=_.return}p===_&&(p=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:tr(e,t),vr(t),i&4&&Px(t);break;case 21:break;default:tr(e,t),vr(t)}}function vr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(zE(n)){var i=n;break e}n=n.return}throw Error(Te(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&($l(s,""),i.flags&=-33);var o=Cx(t);_m(t,o,s);break;case 3:case 4:var l=i.stateNode.containerInfo,u=Cx(t);gm(t,u,l);break;default:throw Error(Te(161))}}catch(f){rn(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function k2(t,e,n){ze=t,VE(t)}function VE(t,e,n){for(var i=(t.mode&1)!==0;ze!==null;){var s=ze,o=s.child;if(s.tag===22&&i){var l=s.memoizedState!==null||Cc;if(!l){var u=s.alternate,f=u!==null&&u.memoizedState!==null||Vn;u=Cc;var h=Vn;if(Cc=l,(Vn=f)&&!h)for(ze=s;ze!==null;)l=ze,f=l.child,l.tag===22&&l.memoizedState!==null?Dx(s):f!==null?(f.return=l,ze=f):Dx(s);for(;o!==null;)ze=o,VE(o),o=o.sibling;ze=s,Cc=u,Vn=h}bx(t)}else s.subtreeFlags&8772&&o!==null?(o.return=s,ze=o):bx(t)}}function bx(t){for(;ze!==null;){var e=ze;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vn||oh(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vn)if(n===null)i.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:sr(e.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&px(e,o,i);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}px(e,l,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var f=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var _=p.dehydrated;_!==null&&Jl(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Te(163))}Vn||e.flags&512&&mm(e)}catch(g){rn(e,e.return,g)}}if(e===t){ze=null;break}if(n=e.sibling,n!==null){n.return=e.return,ze=n;break}ze=e.return}}function Lx(t){for(;ze!==null;){var e=ze;if(e===t){ze=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ze=n;break}ze=e.return}}function Dx(t){for(;ze!==null;){var e=ze;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{oh(4,e)}catch(f){rn(e,n,f)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var s=e.return;try{i.componentDidMount()}catch(f){rn(e,s,f)}}var o=e.return;try{mm(e)}catch(f){rn(e,o,f)}break;case 5:var l=e.return;try{mm(e)}catch(f){rn(e,l,f)}}}catch(f){rn(e,e.return,f)}if(e===t){ze=null;break}var u=e.sibling;if(u!==null){u.return=e.return,ze=u;break}ze=e.return}}var H2=Math.ceil,kf=is.ReactCurrentDispatcher,Yg=is.ReactCurrentOwner,Wi=is.ReactCurrentBatchConfig,Tt=0,An=null,dn=null,Dn=0,Mi=0,Ta=Gs(0),xn=0,cu=null,wo=0,ah=0,jg=0,Wl=null,oi=null,qg=0,Ga=1/0,Vr=null,Hf=!1,vm=null,Is=null,Pc=!1,Rs=null,Vf=0,Xl=0,xm=null,hf=-1,df=0;function Zn(){return Tt&6?un():hf!==-1?hf:hf=un()}function Us(t){return t.mode&1?Tt&2&&Dn!==0?Dn&-Dn:T2.transition!==null?(df===0&&(df=AS()),df):(t=Ut,t!==0||(t=window.event,t=t===void 0?16:IS(t.type)),t):1}function fr(t,e,n,i){if(50<Xl)throw Xl=0,xm=null,Error(Te(185));pu(t,n,i),(!(Tt&2)||t!==An)&&(t===An&&(!(Tt&2)&&(ah|=n),xn===4&&Ts(t,Dn)),ci(t,i),n===1&&Tt===0&&!(e.mode&1)&&(Ga=un()+500,ih&&Ws()))}function ci(t,e){var n=t.callbackNode;Tb(t,e);var i=wf(t,t===An?Dn:0);if(i===0)n!==null&&Hv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hv(n),e===1)t.tag===0?M2(Ix.bind(null,t)):QS(Ix.bind(null,t)),x2(function(){!(Tt&6)&&Ws()}),n=null;else{switch(RS(i)){case 1:n=yg;break;case 4:n=TS;break;case 16:n=Tf;break;case 536870912:n=wS;break;default:n=Tf}n=KE(n,GE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function GE(t,e){if(hf=-1,df=0,Tt&6)throw Error(Te(327));var n=t.callbackNode;if(Da()&&t.callbackNode!==n)return null;var i=wf(t,t===An?Dn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Gf(t,i);else{e=i;var s=Tt;Tt|=2;var o=XE();(An!==t||Dn!==e)&&(Vr=null,Ga=un()+500,yo(t,e));do try{W2();break}catch(u){WE(t,u)}while(!0);Ig(),kf.current=o,Tt=s,dn!==null?e=0:(An=null,Dn=0,e=xn)}if(e!==0){if(e===2&&(s=Yp(t),s!==0&&(i=s,e=ym(t,s))),e===1)throw n=cu,yo(t,0),Ts(t,i),ci(t,un()),n;if(e===6)Ts(t,i);else{if(s=t.current.alternate,!(i&30)&&!V2(s)&&(e=Gf(t,i),e===2&&(o=Yp(t),o!==0&&(i=o,e=ym(t,o))),e===1))throw n=cu,yo(t,0),Ts(t,i),ci(t,un()),n;switch(t.finishedWork=s,t.finishedLanes=i,e){case 0:case 1:throw Error(Te(345));case 2:co(t,oi,Vr);break;case 3:if(Ts(t,i),(i&130023424)===i&&(e=qg+500-un(),10<e)){if(wf(t,0)!==0)break;if(s=t.suspendedLanes,(s&i)!==i){Zn(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=em(co.bind(null,t,oi,Vr),e);break}co(t,oi,Vr);break;case 4:if(Ts(t,i),(i&4194240)===i)break;for(e=t.eventTimes,s=-1;0<i;){var l=31-cr(i);o=1<<l,l=e[l],l>s&&(s=l),i&=~o}if(i=s,i=un()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*H2(i/1960))-i,10<i){t.timeoutHandle=em(co.bind(null,t,oi,Vr),i);break}co(t,oi,Vr);break;case 5:co(t,oi,Vr);break;default:throw Error(Te(329))}}}return ci(t,un()),t.callbackNode===n?GE.bind(null,t):null}function ym(t,e){var n=Wl;return t.current.memoizedState.isDehydrated&&(yo(t,e).flags|=256),t=Gf(t,e),t!==2&&(e=oi,oi=n,e!==null&&Sm(e)),t}function Sm(t){oi===null?oi=t:oi.push.apply(oi,t)}function V2(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],o=s.getSnapshot;s=s.value;try{if(!pr(o(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ts(t,e){for(e&=~jg,e&=~ah,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-cr(e),i=1<<n;t[n]=-1,e&=~i}}function Ix(t){if(Tt&6)throw Error(Te(327));Da();var e=wf(t,0);if(!(e&1))return ci(t,un()),null;var n=Gf(t,e);if(t.tag!==0&&n===2){var i=Yp(t);i!==0&&(e=i,n=ym(t,i))}if(n===1)throw n=cu,yo(t,0),Ts(t,e),ci(t,un()),n;if(n===6)throw Error(Te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,co(t,oi,Vr),ci(t,un()),null}function $g(t,e){var n=Tt;Tt|=1;try{return t(e)}finally{Tt=n,Tt===0&&(Ga=un()+500,ih&&Ws())}}function Ao(t){Rs!==null&&Rs.tag===0&&!(Tt&6)&&Da();var e=Tt;Tt|=1;var n=Wi.transition,i=Ut;try{if(Wi.transition=null,Ut=1,t)return t()}finally{Ut=i,Wi.transition=n,Tt=e,!(Tt&6)&&Ws()}}function Kg(){Mi=Ta.current,jt(Ta)}function yo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,v2(n)),dn!==null)for(n=dn.return;n!==null;){var i=n;switch(bg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bf();break;case 3:Ha(),jt(li),jt(Gn),zg();break;case 5:Bg(i);break;case 4:Ha();break;case 13:jt(Qt);break;case 19:jt(Qt);break;case 10:Ug(i.type._context);break;case 22:case 23:Kg()}n=n.return}if(An=t,dn=t=Ns(t.current,null),Dn=Mi=e,xn=0,cu=null,jg=ah=wo=0,oi=Wl=null,go!==null){for(e=0;e<go.length;e++)if(n=go[e],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,o=n.pending;if(o!==null){var l=o.next;o.next=s,i.next=l}n.pending=i}go=null}return t}function WE(t,e){do{var n=dn;try{if(Ig(),uf.current=zf,Bf){for(var i=Jt.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Bf=!1}if(To=0,wn=vn=Jt=null,Vl=!1,au=0,Yg.current=null,n===null||n.return===null){xn=1,cu=e,dn=null;break}e:{var o=t,l=n.return,u=n,f=e;if(e=Dn,u.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var h=f,p=u,_=p.tag;if(!(p.mode&1)&&(_===0||_===11||_===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=yx(l);if(v!==null){v.flags&=-257,Sx(v,l,u,o,e),v.mode&1&&xx(o,h,e),e=v,f=h;var S=e.updateQueue;if(S===null){var T=new Set;T.add(f),e.updateQueue=T}else S.add(f);break e}else{if(!(e&1)){xx(o,h,e),Zg();break e}f=Error(Te(426))}}else if(Kt&&u.mode&1){var x=yx(l);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Sx(x,l,u,o,e),Lg(Va(f,u));break e}}o=f=Va(f,u),xn!==4&&(xn=2),Wl===null?Wl=[o]:Wl.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var d=RE(o,f,e);dx(o,d);break e;case 1:u=f;var E=o.type,M=o.stateNode;if(!(o.flags&128)&&(typeof E.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Is===null||!Is.has(M)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=CE(o,u,e);dx(o,w);break e}}o=o.return}while(o!==null)}jE(n)}catch(F){e=F,dn===n&&n!==null&&(dn=n=n.return);continue}break}while(!0)}function XE(){var t=kf.current;return kf.current=zf,t===null?zf:t}function Zg(){(xn===0||xn===3||xn===2)&&(xn=4),An===null||!(wo&268435455)&&!(ah&268435455)||Ts(An,Dn)}function Gf(t,e){var n=Tt;Tt|=2;var i=XE();(An!==t||Dn!==e)&&(Vr=null,yo(t,e));do try{G2();break}catch(s){WE(t,s)}while(!0);if(Ig(),Tt=n,kf.current=i,dn!==null)throw Error(Te(261));return An=null,Dn=0,xn}function G2(){for(;dn!==null;)YE(dn)}function W2(){for(;dn!==null&&!mb();)YE(dn)}function YE(t){var e=$E(t.alternate,t,Mi);t.memoizedProps=t.pendingProps,e===null?jE(t):dn=e,Yg.current=null}function jE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=O2(n,e),n!==null){n.flags&=32767,dn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xn=6,dn=null;return}}else if(n=F2(n,e,Mi),n!==null){dn=n;return}if(e=e.sibling,e!==null){dn=e;return}dn=e=t}while(e!==null);xn===0&&(xn=5)}function co(t,e,n){var i=Ut,s=Wi.transition;try{Wi.transition=null,Ut=1,X2(t,e,n,i)}finally{Wi.transition=s,Ut=i}return null}function X2(t,e,n,i){do Da();while(Rs!==null);if(Tt&6)throw Error(Te(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Te(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(wb(t,o),t===An&&(dn=An=null,Dn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pc||(Pc=!0,KE(Tf,function(){return Da(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Wi.transition,Wi.transition=null;var l=Ut;Ut=1;var u=Tt;Tt|=4,Yg.current=null,z2(t,n),HE(n,t),f2(Qp),Af=!!Zp,Qp=Zp=null,t.current=n,k2(n),gb(),Tt=u,Ut=l,Wi.transition=o}else t.current=n;if(Pc&&(Pc=!1,Rs=t,Vf=s),o=t.pendingLanes,o===0&&(Is=null),xb(n.stateNode),ci(t,un()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(Hf)throw Hf=!1,t=vm,vm=null,t;return Vf&1&&t.tag!==0&&Da(),o=t.pendingLanes,o&1?t===xm?Xl++:(Xl=0,xm=t):Xl=0,Ws(),null}function Da(){if(Rs!==null){var t=RS(Vf),e=Wi.transition,n=Ut;try{if(Wi.transition=null,Ut=16>t?16:t,Rs===null)var i=!1;else{if(t=Rs,Rs=null,Vf=0,Tt&6)throw Error(Te(331));var s=Tt;for(Tt|=4,ze=t.current;ze!==null;){var o=ze,l=o.child;if(ze.flags&16){var u=o.deletions;if(u!==null){for(var f=0;f<u.length;f++){var h=u[f];for(ze=h;ze!==null;){var p=ze;switch(p.tag){case 0:case 11:case 15:Gl(8,p,o)}var _=p.child;if(_!==null)_.return=p,ze=_;else for(;ze!==null;){p=ze;var g=p.sibling,v=p.return;if(BE(p),p===h){ze=null;break}if(g!==null){g.return=v,ze=g;break}ze=v}}}var S=o.alternate;if(S!==null){var T=S.child;if(T!==null){S.child=null;do{var x=T.sibling;T.sibling=null,T=x}while(T!==null)}}ze=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,ze=l;else e:for(;ze!==null;){if(o=ze,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Gl(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,ze=d;break e}ze=o.return}}var E=t.current;for(ze=E;ze!==null;){l=ze;var M=l.child;if(l.subtreeFlags&2064&&M!==null)M.return=l,ze=M;else e:for(l=E;ze!==null;){if(u=ze,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:oh(9,u)}}catch(F){rn(u,u.return,F)}if(u===l){ze=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,ze=w;break e}ze=u.return}}if(Tt=s,Ws(),wr&&typeof wr.onPostCommitFiberRoot=="function")try{wr.onPostCommitFiberRoot(Qf,t)}catch{}i=!0}return i}finally{Ut=n,Wi.transition=e}}return!1}function Ux(t,e,n){e=Va(n,e),e=RE(t,e,1),t=Ds(t,e,1),e=Zn(),t!==null&&(pu(t,1,e),ci(t,e))}function rn(t,e,n){if(t.tag===3)Ux(t,t,n);else for(;e!==null;){if(e.tag===3){Ux(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Is===null||!Is.has(i))){t=Va(n,t),t=CE(e,t,1),e=Ds(e,t,1),t=Zn(),e!==null&&(pu(e,1,t),ci(e,t));break}}e=e.return}}function Y2(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zn(),t.pingedLanes|=t.suspendedLanes&n,An===t&&(Dn&n)===n&&(xn===4||xn===3&&(Dn&130023424)===Dn&&500>un()-qg?yo(t,0):jg|=n),ci(t,e)}function qE(t,e){e===0&&(t.mode&1?(e=xc,xc<<=1,!(xc&130023424)&&(xc=4194304)):e=1);var n=Zn();t=Jr(t,e),t!==null&&(pu(t,e,n),ci(t,n))}function j2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qE(t,n)}function q2(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Te(314))}i!==null&&i.delete(e),qE(t,n)}var $E;$E=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||li.current)ai=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ai=!1,N2(t,e,n);ai=!!(t.flags&131072)}else ai=!1,Kt&&e.flags&1048576&&JS(e,If,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ff(t,e),t=e.pendingProps;var s=Ba(e,Gn.current);La(e,n),s=Hg(null,e,i,t,s,n);var o=Vg();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ui(i)?(o=!0,Lf(e)):o=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Fg(e),s.updater=sh,e.stateNode=s,s._reactInternals=e,am(e,i,t,n),e=cm(null,e,i,!0,o,n)):(e.tag=0,Kt&&o&&Pg(e),Kn(null,e,s,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ff(t,e),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=K2(i),t=sr(i,t),s){case 0:e=um(null,e,i,t,n);break e;case 1:e=Tx(null,e,i,t,n);break e;case 11:e=Ex(null,e,i,t,n);break e;case 14:e=Mx(null,e,i,sr(i.type,t),n);break e}throw Error(Te(306,i,""))}return e;case 0:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:sr(i,s),um(t,e,i,s,n);case 1:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:sr(i,s),Tx(t,e,i,s,n);case 3:e:{if(DE(e),t===null)throw Error(Te(387));i=e.pendingProps,o=e.memoizedState,s=o.element,sE(t,e),Ff(e,i,null,n);var l=e.memoizedState;if(i=l.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){s=Va(Error(Te(423)),e),e=wx(t,e,i,n,s);break e}else if(i!==s){s=Va(Error(Te(424)),e),e=wx(t,e,i,n,s);break e}else for(Ti=Ls(e.stateNode.containerInfo.firstChild),wi=e,Kt=!0,ar=null,n=iE(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(za(),i===s){e=es(t,e,n);break e}Kn(t,e,i,n)}e=e.child}return e;case 5:return oE(e),t===null&&rm(e),i=e.type,s=e.pendingProps,o=t!==null?t.memoizedProps:null,l=s.children,Jp(i,s)?l=null:o!==null&&Jp(i,o)&&(e.flags|=32),LE(t,e),Kn(t,e,l,n),e.child;case 6:return t===null&&rm(e),null;case 13:return IE(t,e,n);case 4:return Og(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ka(e,null,i,n):Kn(t,e,i,n),e.child;case 11:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:sr(i,s),Ex(t,e,i,s,n);case 7:return Kn(t,e,e.pendingProps,n),e.child;case 8:return Kn(t,e,e.pendingProps.children,n),e.child;case 12:return Kn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,s=e.pendingProps,o=e.memoizedProps,l=s.value,Gt(Uf,i._currentValue),i._currentValue=l,o!==null)if(pr(o.value,l)){if(o.children===s.children&&!li.current){e=es(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var f=u.firstContext;f!==null;){if(f.context===i){if(o.tag===1){f=qr(-1,n&-n),f.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?f.next=f:(f.next=p.next,p.next=f),h.pending=f}}o.lanes|=n,f=o.alternate,f!==null&&(f.lanes|=n),sm(o.return,n,e),u.lanes|=n;break}f=f.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(Te(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),sm(l,n,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Kn(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,i=e.pendingProps.children,La(e,n),s=Xi(s),i=i(s),e.flags|=1,Kn(t,e,i,n),e.child;case 14:return i=e.type,s=sr(i,e.pendingProps),s=sr(i.type,s),Mx(t,e,i,s,n);case 15:return PE(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:sr(i,s),ff(t,e),e.tag=1,ui(i)?(t=!0,Lf(e)):t=!1,La(e,n),AE(e,i,s),am(e,i,s,n),cm(null,e,i,!0,t,n);case 19:return UE(t,e,n);case 22:return bE(t,e,n)}throw Error(Te(156,e.tag))};function KE(t,e){return MS(t,e)}function $2(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gi(t,e,n,i){return new $2(t,e,n,i)}function Qg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function K2(t){if(typeof t=="function")return Qg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_g)return 11;if(t===vg)return 14}return 2}function Ns(t,e){var n=t.alternate;return n===null?(n=Gi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function pf(t,e,n,i,s,o){var l=2;if(i=t,typeof t=="function")Qg(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case pa:return So(n.children,s,o,e);case gg:l=8,s|=8;break;case Lp:return t=Gi(12,n,e,s|2),t.elementType=Lp,t.lanes=o,t;case Dp:return t=Gi(13,n,e,s),t.elementType=Dp,t.lanes=o,t;case Ip:return t=Gi(19,n,e,s),t.elementType=Ip,t.lanes=o,t;case oS:return lh(n,s,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rS:l=10;break e;case sS:l=9;break e;case _g:l=11;break e;case vg:l=14;break e;case ys:l=16,i=null;break e}throw Error(Te(130,t==null?t:typeof t,""))}return e=Gi(l,n,e,s),e.elementType=t,e.type=i,e.lanes=o,e}function So(t,e,n,i){return t=Gi(7,t,i,e),t.lanes=n,t}function lh(t,e,n,i){return t=Gi(22,t,i,e),t.elementType=oS,t.lanes=n,t.stateNode={isHidden:!1},t}function Zd(t,e,n){return t=Gi(6,t,null,e),t.lanes=n,t}function Qd(t,e,n){return e=Gi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Z2(t,e,n,i,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dd(0),this.expirationTimes=Dd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dd(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Jg(t,e,n,i,s,o,l,u,f){return t=new Z2(t,e,n,u,f),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Gi(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fg(o),t}function Q2(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:da,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ZE(t){if(!t)return zs;t=t._reactInternals;e:{if(Lo(t)!==t||t.tag!==1)throw Error(Te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ui(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Te(171))}if(t.tag===1){var n=t.type;if(ui(n))return ZS(t,n,e)}return e}function QE(t,e,n,i,s,o,l,u,f){return t=Jg(n,i,!0,t,s,o,l,u,f),t.context=ZE(null),n=t.current,i=Zn(),s=Us(n),o=qr(i,s),o.callback=e??null,Ds(n,o,s),t.current.lanes=s,pu(t,s,i),ci(t,i),t}function uh(t,e,n,i){var s=e.current,o=Zn(),l=Us(s);return n=ZE(n),e.context===null?e.context=n:e.pendingContext=n,e=qr(o,l),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ds(s,e,l),t!==null&&(fr(t,s,l,o),lf(t,s,l)),l}function Wf(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Nx(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function e_(t,e){Nx(t,e),(t=t.alternate)&&Nx(t,e)}function J2(){return null}var JE=typeof reportError=="function"?reportError:function(t){console.error(t)};function t_(t){this._internalRoot=t}ch.prototype.render=t_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Te(409));uh(t,e,null,null)};ch.prototype.unmount=t_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ao(function(){uh(null,t,null,null)}),e[Qr]=null}};function ch(t){this._internalRoot=t}ch.prototype.unstable_scheduleHydration=function(t){if(t){var e=bS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ms.length&&e!==0&&e<Ms[n].priority;n++);Ms.splice(n,0,t),n===0&&DS(t)}};function n_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fx(){}function eL(t,e,n,i,s){if(s){if(typeof i=="function"){var o=i;i=function(){var h=Wf(l);o.call(h)}}var l=QE(e,i,t,0,null,!1,!1,"",Fx);return t._reactRootContainer=l,t[Qr]=l.current,nu(t.nodeType===8?t.parentNode:t),Ao(),l}for(;s=t.lastChild;)t.removeChild(s);if(typeof i=="function"){var u=i;i=function(){var h=Wf(f);u.call(h)}}var f=Jg(t,0,!1,null,null,!1,!1,"",Fx);return t._reactRootContainer=f,t[Qr]=f.current,nu(t.nodeType===8?t.parentNode:t),Ao(function(){uh(e,f,n,i)}),f}function hh(t,e,n,i,s){var o=n._reactRootContainer;if(o){var l=o;if(typeof s=="function"){var u=s;s=function(){var f=Wf(l);u.call(f)}}uh(e,l,t,s)}else l=eL(n,e,t,s,i);return Wf(l)}CS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ul(e.pendingLanes);n!==0&&(Sg(e,n|1),ci(e,un()),!(Tt&6)&&(Ga=un()+500,Ws()))}break;case 13:Ao(function(){var i=Jr(t,1);if(i!==null){var s=Zn();fr(i,t,1,s)}}),e_(t,1)}};Eg=function(t){if(t.tag===13){var e=Jr(t,134217728);if(e!==null){var n=Zn();fr(e,t,134217728,n)}e_(t,134217728)}};PS=function(t){if(t.tag===13){var e=Us(t),n=Jr(t,e);if(n!==null){var i=Zn();fr(n,t,e,i)}e_(t,e)}};bS=function(){return Ut};LS=function(t,e){var n=Ut;try{return Ut=t,e()}finally{Ut=n}};Gp=function(t,e,n){switch(e){case"input":if(Fp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var s=nh(i);if(!s)throw Error(Te(90));lS(i),Fp(i,s)}}}break;case"textarea":cS(t,n);break;case"select":e=n.value,e!=null&&Ra(t,!!n.multiple,e,!1)}};_S=$g;vS=Ao;var tL={usingClientEntryPoint:!1,Events:[gu,va,nh,mS,gS,$g]},Al={findFiberByHostInstance:mo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nL={bundleType:Al.bundleType,version:Al.version,rendererPackageName:Al.rendererPackageName,rendererConfig:Al.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:is.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=SS(t),t===null?null:t.stateNode},findFiberByHostInstance:Al.findFiberByHostInstance||J2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{Qf=bc.inject(nL),wr=bc}catch{}}Ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tL;Ci.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!n_(e))throw Error(Te(200));return Q2(t,e,null,n)};Ci.createRoot=function(t,e){if(!n_(t))throw Error(Te(299));var n=!1,i="",s=JE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Jg(t,1,!1,null,null,n,!1,i,s),t[Qr]=e.current,nu(t.nodeType===8?t.parentNode:t),new t_(e)};Ci.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Te(188)):(t=Object.keys(t).join(","),Error(Te(268,t)));return t=SS(e),t=t===null?null:t.stateNode,t};Ci.flushSync=function(t){return Ao(t)};Ci.hydrate=function(t,e,n){if(!fh(e))throw Error(Te(200));return hh(null,t,e,!0,n)};Ci.hydrateRoot=function(t,e,n){if(!n_(t))throw Error(Te(405));var i=n!=null&&n.hydratedSources||null,s=!1,o="",l=JE;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=QE(e,null,t,1,n??null,s,!1,o,l),t[Qr]=e.current,nu(t),i)for(t=0;t<i.length;t++)n=i[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new ch(e)};Ci.render=function(t,e,n){if(!fh(e))throw Error(Te(200));return hh(null,t,e,!1,n)};Ci.unmountComponentAtNode=function(t){if(!fh(t))throw Error(Te(40));return t._reactRootContainer?(Ao(function(){hh(null,null,t,!1,function(){t._reactRootContainer=null,t[Qr]=null})}),!0):!1};Ci.unstable_batchedUpdates=$g;Ci.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!fh(n))throw Error(Te(200));if(t==null||t._reactInternals===void 0)throw Error(Te(38));return hh(t,e,n,!1,i)};Ci.version="18.3.1-next-f1338f8080-20240426";function e1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e1)}catch(t){console.error(t)}}e1(),eS.exports=Ci;var iL=eS.exports,Ox=iL;Pp.createRoot=Ox.createRoot,Pp.hydrateRoot=Ox.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const i_="171",Ia={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rL=0,Bx=1,sL=2,t1=1,oL=2,Hr=3,ks=0,fi=1,Er=2,Fs=0,Ua=1,zx=2,kx=3,Hx=4,aL=5,ho=100,lL=101,uL=102,cL=103,fL=104,hL=200,dL=201,pL=202,mL=203,Em=204,Mm=205,gL=206,_L=207,vL=208,xL=209,yL=210,SL=211,EL=212,ML=213,TL=214,Tm=0,wm=1,Am=2,Wa=3,Rm=4,Cm=5,Pm=6,bm=7,n1=0,wL=1,AL=2,Os=0,RL=1,CL=2,PL=3,bL=4,LL=5,DL=6,IL=7,i1=300,Xa=301,Ya=302,Lm=303,Dm=304,dh=306,Im=1e3,vo=1001,Um=1002,hr=1003,UL=1004,Lc=1005,Mr=1006,Jd=1007,xo=1008,ts=1009,r1=1010,s1=1011,fu=1012,r_=1013,Ro=1014,Yr=1015,vu=1016,s_=1017,o_=1018,ja=1020,o1=35902,a1=1021,l1=1022,ur=1023,u1=1024,c1=1025,Na=1026,qa=1027,f1=1028,a_=1029,h1=1030,l_=1031,u_=1033,mf=33776,gf=33777,_f=33778,vf=33779,Nm=35840,Fm=35841,Om=35842,Bm=35843,zm=36196,km=37492,Hm=37496,Vm=37808,Gm=37809,Wm=37810,Xm=37811,Ym=37812,jm=37813,qm=37814,$m=37815,Km=37816,Zm=37817,Qm=37818,Jm=37819,eg=37820,tg=37821,xf=36492,ng=36494,ig=36495,d1=36283,rg=36284,sg=36285,og=36286,NL=3200,FL=3201,OL=0,BL=1,ws="",zi="srgb",$a="srgb-linear",Xf="linear",Ft="srgb",Zo=7680,Vx=519,zL=512,kL=513,HL=514,p1=515,VL=516,GL=517,WL=518,XL=519,Gx=35044,Wx="300 es",jr=2e3,Yf=2001;class Do{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,l=s.length;o<l;o++)s[o].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xx=1234567;const Yl=Math.PI/180,hu=180/Math.PI;function el(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kn[t&255]+kn[t>>8&255]+kn[t>>16&255]+kn[t>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[n&63|128]+kn[n>>8&255]+"-"+kn[n>>16&255]+kn[n>>24&255]+kn[i&255]+kn[i>>8&255]+kn[i>>16&255]+kn[i>>24&255]).toLowerCase()}function gt(t,e,n){return Math.max(e,Math.min(n,t))}function c_(t,e){return(t%e+e)%e}function YL(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function jL(t,e,n){return t!==e?(n-t)/(e-t):0}function jl(t,e,n){return(1-n)*t+n*e}function qL(t,e,n,i){return jl(t,e,1-Math.exp(-n*i))}function $L(t,e=1){return e-Math.abs(c_(t,e*2)-e)}function KL(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function ZL(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function QL(t,e){return t+Math.floor(Math.random()*(e-t+1))}function JL(t,e){return t+Math.random()*(e-t)}function eD(t){return t*(.5-Math.random())}function tD(t){t!==void 0&&(Xx=t);let e=Xx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nD(t){return t*Yl}function iD(t){return t*hu}function rD(t){return(t&t-1)===0&&t!==0}function sD(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function oD(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function aD(t,e,n,i,s){const o=Math.cos,l=Math.sin,u=o(n/2),f=l(n/2),h=o((e+i)/2),p=l((e+i)/2),_=o((e-i)/2),g=l((e-i)/2),v=o((i-e)/2),S=l((i-e)/2);switch(s){case"XYX":t.set(u*p,f*_,f*g,u*h);break;case"YZY":t.set(f*g,u*p,f*_,u*h);break;case"ZXZ":t.set(f*_,f*g,u*p,u*h);break;case"XZX":t.set(u*p,f*S,f*v,u*h);break;case"YXY":t.set(f*v,u*p,f*S,u*h);break;case"ZYZ":t.set(f*S,f*v,u*p,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const lD={DEG2RAD:Yl,RAD2DEG:hu,generateUUID:el,clamp:gt,euclideanModulo:c_,mapLinear:YL,inverseLerp:jL,lerp:jl,damp:qL,pingpong:$L,smoothstep:KL,smootherstep:ZL,randInt:QL,randFloat:JL,randFloatSpread:eD,seededRandom:tD,degToRad:nD,radToDeg:iD,isPowerOfTwo:rD,ceilPowerOfTwo:sD,floorPowerOfTwo:oD,setQuaternionFromProperEuler:aD,normalize:qn,denormalize:fa};class mt{constructor(e=0,n=0){mt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),o=this.x-e.x,l=this.y-e.y;return this.x=o*i-l*s+e.x,this.y=o*s+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,n,i,s,o,l,u,f,h){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,o,l,u,f,h)}set(e,n,i,s,o,l,u,f,h){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=n,p[4]=o,p[5]=f,p[6]=i,p[7]=l,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,o=this.elements,l=i[0],u=i[3],f=i[6],h=i[1],p=i[4],_=i[7],g=i[2],v=i[5],S=i[8],T=s[0],x=s[3],d=s[6],E=s[1],M=s[4],w=s[7],F=s[2],U=s[5],I=s[8];return o[0]=l*T+u*E+f*F,o[3]=l*x+u*M+f*U,o[6]=l*d+u*w+f*I,o[1]=h*T+p*E+_*F,o[4]=h*x+p*M+_*U,o[7]=h*d+p*w+_*I,o[2]=g*T+v*E+S*F,o[5]=g*x+v*M+S*U,o[8]=g*d+v*w+S*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],o=e[3],l=e[4],u=e[5],f=e[6],h=e[7],p=e[8];return n*l*p-n*u*h-i*o*p+i*u*f+s*o*h-s*l*f}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],o=e[3],l=e[4],u=e[5],f=e[6],h=e[7],p=e[8],_=p*l-u*h,g=u*f-p*o,v=h*o-l*f,S=n*_+i*g+s*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=_*T,e[1]=(s*h-p*i)*T,e[2]=(u*i-s*l)*T,e[3]=g*T,e[4]=(p*n-s*f)*T,e[5]=(s*o-u*n)*T,e[6]=v*T,e[7]=(i*f-h*n)*T,e[8]=(l*n-i*o)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,o,l,u){const f=Math.cos(o),h=Math.sin(o);return this.set(i*f,i*h,-i*(f*l+h*u)+l+e,-s*h,s*f,-s*(-h*l+f*u)+u+n,0,0,1),this}scale(e,n){return this.premultiply(ep.makeScale(e,n)),this}rotate(e){return this.premultiply(ep.makeRotation(-e)),this}translate(e,n){return this.premultiply(ep.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ep=new ut;function m1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function jf(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function uD(){const t=jf("canvas");return t.style.display="block",t}const Yx={};function ha(t){t in Yx||(Yx[t]=!0,console.warn(t))}function cD(t,e,n){return new Promise(function(i,s){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function fD(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function hD(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const jx=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qx=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dD(){const t={enabled:!0,workingColorSpace:$a,spaces:{},convert:function(s,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Ft&&(s.r=$r(s.r),s.g=$r(s.g),s.b=$r(s.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ft&&(s.r=Fa(s.r),s.g=Fa(s.g),s.b=Fa(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ws?Xf:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,l){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[$a]:{primaries:e,whitePoint:i,transfer:Xf,toXYZ:jx,fromXYZ:qx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:zi},outputColorSpaceConfig:{drawingBufferColorSpace:zi}},[zi]:{primaries:e,whitePoint:i,transfer:Ft,toXYZ:jx,fromXYZ:qx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:zi}}}),t}const Ct=dD();function $r(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Fa(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Qo;class pD{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qo===void 0&&(Qo=jf("canvas")),Qo.width=e.width,Qo.height=e.height;const i=Qo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Qo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=jf("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let l=0;l<o.length;l++)o[l]=$r(o[l]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($r(n[i]/255)*255):n[i]=$r(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mD=0;class g1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mD++}),this.uuid=el(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?o.push(tp(s[l].image)):o.push(tp(s[l]))}else o=tp(s);i.url=o}return n||(e.images[this.uuid]=i),i}}function tp(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?pD.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gD=0;class hi extends Do{constructor(e=hi.DEFAULT_IMAGE,n=hi.DEFAULT_MAPPING,i=vo,s=vo,o=Mr,l=xo,u=ur,f=ts,h=hi.DEFAULT_ANISOTROPY,p=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gD++}),this.uuid=el(),this.name="",this.source=new g1(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==i1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Im:e.x=e.x-Math.floor(e.x);break;case vo:e.x=e.x<0?0:1;break;case Um:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Im:e.y=e.y-Math.floor(e.y);break;case vo:e.y=e.y<0?0:1;break;case Um:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=i1;hi.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,n=0,i=0,s=1){cn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,o=this.w,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*s+l[12]*o,this.y=l[1]*n+l[5]*i+l[9]*s+l[13]*o,this.z=l[2]*n+l[6]*i+l[10]*s+l[14]*o,this.w=l[3]*n+l[7]*i+l[11]*s+l[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,o;const f=e.elements,h=f[0],p=f[4],_=f[8],g=f[1],v=f[5],S=f[9],T=f[2],x=f[6],d=f[10];if(Math.abs(p-g)<.01&&Math.abs(_-T)<.01&&Math.abs(S-x)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+T)<.1&&Math.abs(S+x)<.1&&Math.abs(h+v+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(h+1)/2,w=(v+1)/2,F=(d+1)/2,U=(p+g)/4,I=(_+T)/4,O=(S+x)/4;return M>w&&M>F?M<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(M),s=U/i,o=I/i):w>F?w<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(w),i=U/s,o=O/s):F<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(F),i=I/o,s=O/o),this.set(i,s,o,n),this}let E=Math.sqrt((x-S)*(x-S)+(_-T)*(_-T)+(g-p)*(g-p));return Math.abs(E)<.001&&(E=1),this.x=(x-S)/E,this.y=(_-T)/E,this.z=(g-p)/E,this.w=Math.acos((h+v+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _D extends Do{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new cn(0,0,e,n),this.scissorTest=!1,this.viewport=new cn(0,0,e,n);const s={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new hi(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const l=i.count;for(let u=0;u<l;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new g1(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Co extends _D{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class _1 extends hi{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=hr,this.minFilter=hr,this.wrapR=vo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vD extends hi{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=hr,this.minFilter=hr,this.wrapR=vo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,o,l,u){let f=i[s+0],h=i[s+1],p=i[s+2],_=i[s+3];const g=o[l+0],v=o[l+1],S=o[l+2],T=o[l+3];if(u===0){e[n+0]=f,e[n+1]=h,e[n+2]=p,e[n+3]=_;return}if(u===1){e[n+0]=g,e[n+1]=v,e[n+2]=S,e[n+3]=T;return}if(_!==T||f!==g||h!==v||p!==S){let x=1-u;const d=f*g+h*v+p*S+_*T,E=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const F=Math.sqrt(M),U=Math.atan2(F,d*E);x=Math.sin(x*U)/F,u=Math.sin(u*U)/F}const w=u*E;if(f=f*x+g*w,h=h*x+v*w,p=p*x+S*w,_=_*x+T*w,x===1-u){const F=1/Math.sqrt(f*f+h*h+p*p+_*_);f*=F,h*=F,p*=F,_*=F}}e[n]=f,e[n+1]=h,e[n+2]=p,e[n+3]=_}static multiplyQuaternionsFlat(e,n,i,s,o,l){const u=i[s],f=i[s+1],h=i[s+2],p=i[s+3],_=o[l],g=o[l+1],v=o[l+2],S=o[l+3];return e[n]=u*S+p*_+f*v-h*g,e[n+1]=f*S+p*g+h*_-u*v,e[n+2]=h*S+p*v+u*g-f*_,e[n+3]=p*S-u*_-f*g-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,o=e._z,l=e._order,u=Math.cos,f=Math.sin,h=u(i/2),p=u(s/2),_=u(o/2),g=f(i/2),v=f(s/2),S=f(o/2);switch(l){case"XYZ":this._x=g*p*_+h*v*S,this._y=h*v*_-g*p*S,this._z=h*p*S+g*v*_,this._w=h*p*_-g*v*S;break;case"YXZ":this._x=g*p*_+h*v*S,this._y=h*v*_-g*p*S,this._z=h*p*S-g*v*_,this._w=h*p*_+g*v*S;break;case"ZXY":this._x=g*p*_-h*v*S,this._y=h*v*_+g*p*S,this._z=h*p*S+g*v*_,this._w=h*p*_-g*v*S;break;case"ZYX":this._x=g*p*_-h*v*S,this._y=h*v*_+g*p*S,this._z=h*p*S-g*v*_,this._w=h*p*_+g*v*S;break;case"YZX":this._x=g*p*_+h*v*S,this._y=h*v*_+g*p*S,this._z=h*p*S-g*v*_,this._w=h*p*_-g*v*S;break;case"XZY":this._x=g*p*_-h*v*S,this._y=h*v*_-g*p*S,this._z=h*p*S+g*v*_,this._w=h*p*_+g*v*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],o=n[8],l=n[1],u=n[5],f=n[9],h=n[2],p=n[6],_=n[10],g=i+u+_;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(p-f)*v,this._y=(o-h)*v,this._z=(l-s)*v}else if(i>u&&i>_){const v=2*Math.sqrt(1+i-u-_);this._w=(p-f)/v,this._x=.25*v,this._y=(s+l)/v,this._z=(o+h)/v}else if(u>_){const v=2*Math.sqrt(1+u-i-_);this._w=(o-h)/v,this._x=(s+l)/v,this._y=.25*v,this._z=(f+p)/v}else{const v=2*Math.sqrt(1+_-i-u);this._w=(l-s)/v,this._x=(o+h)/v,this._y=(f+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,o=e._z,l=e._w,u=n._x,f=n._y,h=n._z,p=n._w;return this._x=i*p+l*u+s*h-o*f,this._y=s*p+l*f+o*u-i*h,this._z=o*p+l*h+i*f-s*u,this._w=l*p-i*u-s*f-o*h,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,l=this._w;let u=l*e._w+i*e._x+s*e._y+o*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=i,this._y=s,this._z=o,this;const f=1-u*u;if(f<=Number.EPSILON){const v=1-n;return this._w=v*l+n*this._w,this._x=v*i+n*this._x,this._y=v*s+n*this._y,this._z=v*o+n*this._z,this.normalize(),this}const h=Math.sqrt(f),p=Math.atan2(h,u),_=Math.sin((1-n)*p)/h,g=Math.sin(n*p)/h;return this._w=l*_+this._w*g,this._x=i*_+this._x*g,this._y=s*_+this._y*g,this._z=o*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($x.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($x.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*s,this.y=o[1]*n+o[4]*i+o[7]*s,this.z=o[2]*n+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,o=e.elements,l=1/(o[3]*n+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*s+o[12])*l,this.y=(o[1]*n+o[5]*i+o[9]*s+o[13])*l,this.z=(o[2]*n+o[6]*i+o[10]*s+o[14])*l,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,o=e.x,l=e.y,u=e.z,f=e.w,h=2*(l*s-u*i),p=2*(u*n-o*s),_=2*(o*i-l*n);return this.x=n+f*h+l*_-u*p,this.y=i+f*p+u*h-o*_,this.z=s+f*_+o*p-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s,this.y=o[1]*n+o[5]*i+o[9]*s,this.z=o[2]*n+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,o=e.z,l=n.x,u=n.y,f=n.z;return this.x=s*f-o*u,this.y=o*l-i*f,this.z=i*u-s*l,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return np.copy(this).projectOnVector(e),this.sub(np)}reflect(e){return this.sub(np.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const np=new $,$x=new Po;class xu{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(nr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(nr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=nr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,nr):nr.fromBufferAttribute(o,l),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dc.copy(i.boundingBox)),Dc.applyMatrix4(e.matrixWorld),this.union(Dc)}const s=e.children;for(let o=0,l=s.length;o<l;o++)this.expandByObject(s[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rl),Ic.subVectors(this.max,Rl),Jo.subVectors(e.a,Rl),ea.subVectors(e.b,Rl),ta.subVectors(e.c,Rl),ps.subVectors(ea,Jo),ms.subVectors(ta,ea),no.subVectors(Jo,ta);let n=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-no.z,no.y,ps.z,0,-ps.x,ms.z,0,-ms.x,no.z,0,-no.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-no.y,no.x,0];return!ip(n,Jo,ea,ta,Ic)||(n=[1,0,0,0,1,0,0,0,1],!ip(n,Jo,ea,ta,Ic))?!1:(Uc.crossVectors(ps,ms),n=[Uc.x,Uc.y,Uc.z],ip(n,Jo,ea,ta,Ic))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fr=[new $,new $,new $,new $,new $,new $,new $,new $],nr=new $,Dc=new xu,Jo=new $,ea=new $,ta=new $,ps=new $,ms=new $,no=new $,Rl=new $,Ic=new $,Uc=new $,io=new $;function ip(t,e,n,i,s){for(let o=0,l=t.length-3;o<=l;o+=3){io.fromArray(t,o);const u=s.x*Math.abs(io.x)+s.y*Math.abs(io.y)+s.z*Math.abs(io.z),f=e.dot(io),h=n.dot(io),p=i.dot(io);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>u)return!1}return!0}const xD=new xu,Cl=new $,rp=new $;class ph{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):xD.setFromPoints(e).getCenter(i);let s=0;for(let o=0,l=e.length;o<l;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cl.subVectors(e,this.center);const n=Cl.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Cl,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cl.copy(e.center).add(rp)),this.expandByPoint(Cl.copy(e.center).sub(rp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Or=new $,sp=new $,Nc=new $,gs=new $,op=new $,Fc=new $,ap=new $;class f_{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Or)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Or.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Or.copy(this.origin).addScaledVector(this.direction,n),Or.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){sp.copy(e).add(n).multiplyScalar(.5),Nc.copy(n).sub(e).normalize(),gs.copy(this.origin).sub(sp);const o=e.distanceTo(n)*.5,l=-this.direction.dot(Nc),u=gs.dot(this.direction),f=-gs.dot(Nc),h=gs.lengthSq(),p=Math.abs(1-l*l);let _,g,v,S;if(p>0)if(_=l*f-u,g=l*u-f,S=o*p,_>=0)if(g>=-S)if(g<=S){const T=1/p;_*=T,g*=T,v=_*(_+l*g+2*u)+g*(l*_+g+2*f)+h}else g=o,_=Math.max(0,-(l*g+u)),v=-_*_+g*(g+2*f)+h;else g=-o,_=Math.max(0,-(l*g+u)),v=-_*_+g*(g+2*f)+h;else g<=-S?(_=Math.max(0,-(-l*o+u)),g=_>0?-o:Math.min(Math.max(-o,-f),o),v=-_*_+g*(g+2*f)+h):g<=S?(_=0,g=Math.min(Math.max(-o,-f),o),v=g*(g+2*f)+h):(_=Math.max(0,-(l*o+u)),g=_>0?o:Math.min(Math.max(-o,-f),o),v=-_*_+g*(g+2*f)+h);else g=l>0?-o:o,_=Math.max(0,-(l*g+u)),v=-_*_+g*(g+2*f)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(sp).addScaledVector(Nc,g),v}intersectSphere(e,n){Or.subVectors(e.center,this.origin);const i=Or.dot(this.direction),s=Or.dot(Or)-i*i,o=e.radius*e.radius;if(s>o)return null;const l=Math.sqrt(o-s),u=i-l,f=i+l;return f<0?null:u<0?this.at(f,n):this.at(u,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,o,l,u,f;const h=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(i=(e.min.x-g.x)*h,s=(e.max.x-g.x)*h):(i=(e.max.x-g.x)*h,s=(e.min.x-g.x)*h),p>=0?(o=(e.min.y-g.y)*p,l=(e.max.y-g.y)*p):(o=(e.max.y-g.y)*p,l=(e.min.y-g.y)*p),i>l||o>s||((o>i||isNaN(i))&&(i=o),(l<s||isNaN(s))&&(s=l),_>=0?(u=(e.min.z-g.z)*_,f=(e.max.z-g.z)*_):(u=(e.max.z-g.z)*_,f=(e.min.z-g.z)*_),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Or)!==null}intersectTriangle(e,n,i,s,o){op.subVectors(n,e),Fc.subVectors(i,e),ap.crossVectors(op,Fc);let l=this.direction.dot(ap),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;gs.subVectors(this.origin,e);const f=u*this.direction.dot(Fc.crossVectors(gs,Fc));if(f<0)return null;const h=u*this.direction.dot(op.cross(gs));if(h<0||f+h>l)return null;const p=-u*gs.dot(ap);return p<0?null:this.at(p/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn{constructor(e,n,i,s,o,l,u,f,h,p,_,g,v,S,T,x){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,o,l,u,f,h,p,_,g,v,S,T,x)}set(e,n,i,s,o,l,u,f,h,p,_,g,v,S,T,x){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=s,d[1]=o,d[5]=l,d[9]=u,d[13]=f,d[2]=h,d[6]=p,d[10]=_,d[14]=g,d[3]=v,d[7]=S,d[11]=T,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/na.setFromMatrixColumn(e,0).length(),o=1/na.setFromMatrixColumn(e,1).length(),l=1/na.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*l,n[9]=i[9]*l,n[10]=i[10]*l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,o=e.z,l=Math.cos(i),u=Math.sin(i),f=Math.cos(s),h=Math.sin(s),p=Math.cos(o),_=Math.sin(o);if(e.order==="XYZ"){const g=l*p,v=l*_,S=u*p,T=u*_;n[0]=f*p,n[4]=-f*_,n[8]=h,n[1]=v+S*h,n[5]=g-T*h,n[9]=-u*f,n[2]=T-g*h,n[6]=S+v*h,n[10]=l*f}else if(e.order==="YXZ"){const g=f*p,v=f*_,S=h*p,T=h*_;n[0]=g+T*u,n[4]=S*u-v,n[8]=l*h,n[1]=l*_,n[5]=l*p,n[9]=-u,n[2]=v*u-S,n[6]=T+g*u,n[10]=l*f}else if(e.order==="ZXY"){const g=f*p,v=f*_,S=h*p,T=h*_;n[0]=g-T*u,n[4]=-l*_,n[8]=S+v*u,n[1]=v+S*u,n[5]=l*p,n[9]=T-g*u,n[2]=-l*h,n[6]=u,n[10]=l*f}else if(e.order==="ZYX"){const g=l*p,v=l*_,S=u*p,T=u*_;n[0]=f*p,n[4]=S*h-v,n[8]=g*h+T,n[1]=f*_,n[5]=T*h+g,n[9]=v*h-S,n[2]=-h,n[6]=u*f,n[10]=l*f}else if(e.order==="YZX"){const g=l*f,v=l*h,S=u*f,T=u*h;n[0]=f*p,n[4]=T-g*_,n[8]=S*_+v,n[1]=_,n[5]=l*p,n[9]=-u*p,n[2]=-h*p,n[6]=v*_+S,n[10]=g-T*_}else if(e.order==="XZY"){const g=l*f,v=l*h,S=u*f,T=u*h;n[0]=f*p,n[4]=-_,n[8]=h*p,n[1]=g*_+T,n[5]=l*p,n[9]=v*_-S,n[2]=S*_-v,n[6]=u*p,n[10]=T*_+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yD,e,SD)}lookAt(e,n,i){const s=this.elements;return Si.subVectors(e,n),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),_s.crossVectors(i,Si),_s.lengthSq()===0&&(Math.abs(i.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),_s.crossVectors(i,Si)),_s.normalize(),Oc.crossVectors(Si,_s),s[0]=_s.x,s[4]=Oc.x,s[8]=Si.x,s[1]=_s.y,s[5]=Oc.y,s[9]=Si.y,s[2]=_s.z,s[6]=Oc.z,s[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,o=this.elements,l=i[0],u=i[4],f=i[8],h=i[12],p=i[1],_=i[5],g=i[9],v=i[13],S=i[2],T=i[6],x=i[10],d=i[14],E=i[3],M=i[7],w=i[11],F=i[15],U=s[0],I=s[4],O=s[8],L=s[12],C=s[1],k=s[5],ae=s[9],ee=s[13],he=s[2],ve=s[6],le=s[10],pe=s[14],H=s[3],ie=s[7],de=s[11],Ae=s[15];return o[0]=l*U+u*C+f*he+h*H,o[4]=l*I+u*k+f*ve+h*ie,o[8]=l*O+u*ae+f*le+h*de,o[12]=l*L+u*ee+f*pe+h*Ae,o[1]=p*U+_*C+g*he+v*H,o[5]=p*I+_*k+g*ve+v*ie,o[9]=p*O+_*ae+g*le+v*de,o[13]=p*L+_*ee+g*pe+v*Ae,o[2]=S*U+T*C+x*he+d*H,o[6]=S*I+T*k+x*ve+d*ie,o[10]=S*O+T*ae+x*le+d*de,o[14]=S*L+T*ee+x*pe+d*Ae,o[3]=E*U+M*C+w*he+F*H,o[7]=E*I+M*k+w*ve+F*ie,o[11]=E*O+M*ae+w*le+F*de,o[15]=E*L+M*ee+w*pe+F*Ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],o=e[12],l=e[1],u=e[5],f=e[9],h=e[13],p=e[2],_=e[6],g=e[10],v=e[14],S=e[3],T=e[7],x=e[11],d=e[15];return S*(+o*f*_-s*h*_-o*u*g+i*h*g+s*u*v-i*f*v)+T*(+n*f*v-n*h*g+o*l*g-s*l*v+s*h*p-o*f*p)+x*(+n*h*_-n*u*v-o*l*_+i*l*v+o*u*p-i*h*p)+d*(-s*u*p-n*f*_+n*u*g+s*l*_-i*l*g+i*f*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],o=e[3],l=e[4],u=e[5],f=e[6],h=e[7],p=e[8],_=e[9],g=e[10],v=e[11],S=e[12],T=e[13],x=e[14],d=e[15],E=_*x*h-T*g*h+T*f*v-u*x*v-_*f*d+u*g*d,M=S*g*h-p*x*h-S*f*v+l*x*v+p*f*d-l*g*d,w=p*T*h-S*_*h+S*u*v-l*T*v-p*u*d+l*_*d,F=S*_*f-p*T*f-S*u*g+l*T*g+p*u*x-l*_*x,U=n*E+i*M+s*w+o*F;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/U;return e[0]=E*I,e[1]=(T*g*o-_*x*o-T*s*v+i*x*v+_*s*d-i*g*d)*I,e[2]=(u*x*o-T*f*o+T*s*h-i*x*h-u*s*d+i*f*d)*I,e[3]=(_*f*o-u*g*o-_*s*h+i*g*h+u*s*v-i*f*v)*I,e[4]=M*I,e[5]=(p*x*o-S*g*o+S*s*v-n*x*v-p*s*d+n*g*d)*I,e[6]=(S*f*o-l*x*o-S*s*h+n*x*h+l*s*d-n*f*d)*I,e[7]=(l*g*o-p*f*o+p*s*h-n*g*h-l*s*v+n*f*v)*I,e[8]=w*I,e[9]=(S*_*o-p*T*o-S*i*v+n*T*v+p*i*d-n*_*d)*I,e[10]=(l*T*o-S*u*o+S*i*h-n*T*h-l*i*d+n*u*d)*I,e[11]=(p*u*o-l*_*o-p*i*h+n*_*h+l*i*v-n*u*v)*I,e[12]=F*I,e[13]=(p*T*s-S*_*s+S*i*g-n*T*g-p*i*x+n*_*x)*I,e[14]=(S*u*s-l*T*s-S*i*f+n*T*f+l*i*x-n*u*x)*I,e[15]=(l*_*s-p*u*s+p*i*f-n*_*f-l*i*g+n*u*g)*I,this}scale(e){const n=this.elements,i=e.x,s=e.y,o=e.z;return n[0]*=i,n[4]*=s,n[8]*=o,n[1]*=i,n[5]*=s,n[9]*=o,n[2]*=i,n[6]*=s,n[10]*=o,n[3]*=i,n[7]*=s,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),o=1-i,l=e.x,u=e.y,f=e.z,h=o*l,p=o*u;return this.set(h*l+i,h*u-s*f,h*f+s*u,0,h*u+s*f,p*u+i,p*f-s*l,0,h*f-s*u,p*f+s*l,o*f*f+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,o,l){return this.set(1,i,o,0,e,1,l,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,o=n._x,l=n._y,u=n._z,f=n._w,h=o+o,p=l+l,_=u+u,g=o*h,v=o*p,S=o*_,T=l*p,x=l*_,d=u*_,E=f*h,M=f*p,w=f*_,F=i.x,U=i.y,I=i.z;return s[0]=(1-(T+d))*F,s[1]=(v+w)*F,s[2]=(S-M)*F,s[3]=0,s[4]=(v-w)*U,s[5]=(1-(g+d))*U,s[6]=(x+E)*U,s[7]=0,s[8]=(S+M)*I,s[9]=(x-E)*I,s[10]=(1-(g+T))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let o=na.set(s[0],s[1],s[2]).length();const l=na.set(s[4],s[5],s[6]).length(),u=na.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],ir.copy(this);const h=1/o,p=1/l,_=1/u;return ir.elements[0]*=h,ir.elements[1]*=h,ir.elements[2]*=h,ir.elements[4]*=p,ir.elements[5]*=p,ir.elements[6]*=p,ir.elements[8]*=_,ir.elements[9]*=_,ir.elements[10]*=_,n.setFromRotationMatrix(ir),i.x=o,i.y=l,i.z=u,this}makePerspective(e,n,i,s,o,l,u=jr){const f=this.elements,h=2*o/(n-e),p=2*o/(i-s),_=(n+e)/(n-e),g=(i+s)/(i-s);let v,S;if(u===jr)v=-(l+o)/(l-o),S=-2*l*o/(l-o);else if(u===Yf)v=-l/(l-o),S=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=h,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=p,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=v,f[14]=S,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,n,i,s,o,l,u=jr){const f=this.elements,h=1/(n-e),p=1/(i-s),_=1/(l-o),g=(n+e)*h,v=(i+s)*p;let S,T;if(u===jr)S=(l+o)*_,T=-2*_;else if(u===Yf)S=o*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-g,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-v,f[2]=0,f[6]=0,f[10]=T,f[14]=-S,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const na=new $,ir=new fn,yD=new $(0,0,0),SD=new $(1,1,1),_s=new $,Oc=new $,Si=new $,Kx=new fn,Zx=new Po;class ns{constructor(e=0,n=0,i=0,s=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,o=s[0],l=s[4],u=s[8],f=s[1],h=s[5],p=s[9],_=s[2],g=s[6],v=s[10];switch(n){case"XYZ":this._y=Math.asin(gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,v),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(u,v));break;case"XZY":this._z=Math.asin(-gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kx,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zx.setFromEuler(this),this.setFromQuaternion(Zx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class v1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ED=0;const Qx=new $,ia=new Po,Br=new fn,Bc=new $,Pl=new $,MD=new $,TD=new Po,Jx=new $(1,0,0),ey=new $(0,1,0),ty=new $(0,0,1),ny={type:"added"},wD={type:"removed"},ra={type:"childadded",child:null},lp={type:"childremoved",child:null};class di extends Do{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ED++}),this.uuid=el(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=di.DEFAULT_UP.clone();const e=new $,n=new ns,i=new Po,s=new $(1,1,1);function o(){i.setFromEuler(n,!1)}function l(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fn},normalMatrix:{value:new ut}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=di.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ia.setFromAxisAngle(e,n),this.quaternion.multiply(ia),this}rotateOnWorldAxis(e,n){return ia.setFromAxisAngle(e,n),this.quaternion.premultiply(ia),this}rotateX(e){return this.rotateOnAxis(Jx,e)}rotateY(e){return this.rotateOnAxis(ey,e)}rotateZ(e){return this.rotateOnAxis(ty,e)}translateOnAxis(e,n){return Qx.copy(e).applyQuaternion(this.quaternion),this.position.add(Qx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jx,e)}translateY(e){return this.translateOnAxis(ey,e)}translateZ(e){return this.translateOnAxis(ty,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Br.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Bc.copy(e):Bc.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Pl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Br.lookAt(Pl,Bc,this.up):Br.lookAt(Bc,Pl,this.up),this.quaternion.setFromRotationMatrix(Br),s&&(Br.extractRotation(s.matrixWorld),ia.setFromRotationMatrix(Br),this.quaternion.premultiply(ia.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ny),ra.child=e,this.dispatchEvent(ra),ra.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wD),lp.child=e,this.dispatchEvent(lp),lp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Br.multiply(e.parent.matrixWorld)),e.applyMatrix4(Br),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ny),ra.child=e,this.dispatchEvent(ra),ra.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const l=this.children[i].getObjectByProperty(e,n);if(l!==void 0)return l}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,e,MD),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,TD,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const _=f[h];o(e.shapes,_)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(o(e.materials,this.material[f]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(o(e.animations,f))}}if(n){const u=l(e.geometries),f=l(e.materials),h=l(e.textures),p=l(e.images),_=l(e.shapes),g=l(e.skeletons),v=l(e.animations),S=l(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),v.length>0&&(i.animations=v),S.length>0&&(i.nodes=S)}return i.object=s,i;function l(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}di.DEFAULT_UP=new $(0,1,0);di.DEFAULT_MATRIX_AUTO_UPDATE=!0;di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rr=new $,zr=new $,up=new $,kr=new $,sa=new $,oa=new $,iy=new $,cp=new $,fp=new $,hp=new $,dp=new cn,pp=new cn,mp=new cn;class lr{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),rr.subVectors(e,n),s.cross(rr);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,n,i,s,o){rr.subVectors(s,n),zr.subVectors(i,n),up.subVectors(e,n);const l=rr.dot(rr),u=rr.dot(zr),f=rr.dot(up),h=zr.dot(zr),p=zr.dot(up),_=l*h-u*u;if(_===0)return o.set(0,0,0),null;const g=1/_,v=(h*f-u*p)*g,S=(l*p-u*f)*g;return o.set(1-v-S,S,v)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,kr)===null?!1:kr.x>=0&&kr.y>=0&&kr.x+kr.y<=1}static getInterpolation(e,n,i,s,o,l,u,f){return this.getBarycoord(e,n,i,s,kr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,kr.x),f.addScaledVector(l,kr.y),f.addScaledVector(u,kr.z),f)}static getInterpolatedAttribute(e,n,i,s,o,l){return dp.setScalar(0),pp.setScalar(0),mp.setScalar(0),dp.fromBufferAttribute(e,n),pp.fromBufferAttribute(e,i),mp.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(dp,o.x),l.addScaledVector(pp,o.y),l.addScaledVector(mp,o.z),l}static isFrontFacing(e,n,i,s){return rr.subVectors(i,n),zr.subVectors(e,n),rr.cross(zr).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rr.subVectors(this.c,this.b),zr.subVectors(this.a,this.b),rr.cross(zr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return lr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return lr.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,o){return lr.getInterpolation(e,this.a,this.b,this.c,n,i,s,o)}containsPoint(e){return lr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return lr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,o=this.c;let l,u;sa.subVectors(s,i),oa.subVectors(o,i),cp.subVectors(e,i);const f=sa.dot(cp),h=oa.dot(cp);if(f<=0&&h<=0)return n.copy(i);fp.subVectors(e,s);const p=sa.dot(fp),_=oa.dot(fp);if(p>=0&&_<=p)return n.copy(s);const g=f*_-p*h;if(g<=0&&f>=0&&p<=0)return l=f/(f-p),n.copy(i).addScaledVector(sa,l);hp.subVectors(e,o);const v=sa.dot(hp),S=oa.dot(hp);if(S>=0&&v<=S)return n.copy(o);const T=v*h-f*S;if(T<=0&&h>=0&&S<=0)return u=h/(h-S),n.copy(i).addScaledVector(oa,u);const x=p*S-v*_;if(x<=0&&_-p>=0&&v-S>=0)return iy.subVectors(o,s),u=(_-p)/(_-p+(v-S)),n.copy(s).addScaledVector(iy,u);const d=1/(x+T+g);return l=T*d,u=g*d,n.copy(i).addScaledVector(sa,l).addScaledVector(oa,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const x1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},zc={h:0,s:0,l:0};function gp(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Dt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=Ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ct.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=Ct.workingColorSpace){if(e=c_(e,1),n=gt(n,0,1),i=gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,l=2*i-o;this.r=gp(l,o,e+1/3),this.g=gp(l,o,e),this.b=gp(l,o,e-1/3)}return Ct.toWorkingColorSpace(this,s),this}setStyle(e,n=zi){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=s[1],u=s[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(l===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zi){const i=x1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}copyLinearToSRGB(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zi){return Ct.fromWorkingColorSpace(Hn.copy(this),e),Math.round(gt(Hn.r*255,0,255))*65536+Math.round(gt(Hn.g*255,0,255))*256+Math.round(gt(Hn.b*255,0,255))}getHexString(e=zi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ct.workingColorSpace){Ct.fromWorkingColorSpace(Hn.copy(this),n);const i=Hn.r,s=Hn.g,o=Hn.b,l=Math.max(i,s,o),u=Math.min(i,s,o);let f,h;const p=(u+l)/2;if(u===l)f=0,h=0;else{const _=l-u;switch(h=p<=.5?_/(l+u):_/(2-l-u),l){case i:f=(s-o)/_+(s<o?6:0);break;case s:f=(o-i)/_+2;break;case o:f=(i-s)/_+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,n=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(Hn.copy(this),n),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=zi){Ct.fromWorkingColorSpace(Hn.copy(this),e);const n=Hn.r,i=Hn.g,s=Hn.b;return e!==zi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(vs),this.setHSL(vs.h+e,vs.s+n,vs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(vs),e.getHSL(zc);const i=jl(vs.h,zc.h,n),s=jl(vs.s,zc.s,n),o=jl(vs.l,zc.l,n);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*s,this.g=o[1]*n+o[4]*i+o[7]*s,this.b=o[2]*n+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Dt;Dt.NAMES=x1;let AD=0;class yu extends Do{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AD++}),this.uuid=el(),this.name="",this.type="Material",this.blending=Ua,this.side=ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Em,this.blendDst=Mm,this.blendEquation=ho,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ua&&(i.blending=this.blending),this.side!==ks&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Em&&(i.blendSrc=this.blendSrc),this.blendDst!==Mm&&(i.blendDst=this.blendDst),this.blendEquation!==ho&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}if(n){const o=s(e.textures),l=s(e.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class h_ extends yu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=n1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new $,kc=new mt;class Ai{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Gx,this.updateRanges=[],this.gpuType=Yr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)kc.fromBufferAttribute(this,n),kc.applyMatrix3(e),this.setXY(n,kc.x,kc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=fa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fa(n,this.array)),n}setX(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fa(n,this.array)),n}setY(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fa(n,this.array)),n}setW(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),i=qn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),i=qn(i,this.array),s=qn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,o){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),i=qn(i,this.array),s=qn(s,this.array),o=qn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gx&&(e.usage=this.usage),e}}class y1 extends Ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class S1 extends Ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Kr extends Ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}let RD=0;const Bi=new fn,_p=new di,aa=new $,Ei=new xu,bl=new xu,Mn=new $;class dr extends Do{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RD++}),this.uuid=el(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(m1(e)?S1:y1)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ut().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bi.makeRotationFromQuaternion(e),this.applyMatrix4(Bi),this}rotateX(e){return Bi.makeRotationX(e),this.applyMatrix4(Bi),this}rotateY(e){return Bi.makeRotationY(e),this.applyMatrix4(Bi),this}rotateZ(e){return Bi.makeRotationZ(e),this.applyMatrix4(Bi),this}translate(e,n,i){return Bi.makeTranslation(e,n,i),this.applyMatrix4(Bi),this}scale(e,n,i){return Bi.makeScale(e,n,i),this.applyMatrix4(Bi),this}lookAt(e){return _p.lookAt(e),_p.updateMatrix(),this.applyMatrix4(_p.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Kr(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const o=e[s];n.setXYZ(s,o.x,o.y,o.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const o=n[i];Ei.setFromBufferAttribute(o),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ph);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Ei.setFromBufferAttribute(e),n)for(let o=0,l=n.length;o<l;o++){const u=n[o];bl.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(Ei.min,bl.min),Ei.expandByPoint(Mn),Mn.addVectors(Ei.max,bl.max),Ei.expandByPoint(Mn)):(Ei.expandByPoint(bl.min),Ei.expandByPoint(bl.max))}Ei.getCenter(i);let s=0;for(let o=0,l=e.count;o<l;o++)Mn.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Mn));if(n)for(let o=0,l=n.length;o<l;o++){const u=n[o],f=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)Mn.fromBufferAttribute(u,h),f&&(aa.fromBufferAttribute(e,h),Mn.add(aa)),s=Math.max(s,i.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*i.count),4));const l=this.getAttribute("tangent"),u=[],f=[];for(let O=0;O<i.count;O++)u[O]=new $,f[O]=new $;const h=new $,p=new $,_=new $,g=new mt,v=new mt,S=new mt,T=new $,x=new $;function d(O,L,C){h.fromBufferAttribute(i,O),p.fromBufferAttribute(i,L),_.fromBufferAttribute(i,C),g.fromBufferAttribute(o,O),v.fromBufferAttribute(o,L),S.fromBufferAttribute(o,C),p.sub(h),_.sub(h),v.sub(g),S.sub(g);const k=1/(v.x*S.y-S.x*v.y);isFinite(k)&&(T.copy(p).multiplyScalar(S.y).addScaledVector(_,-v.y).multiplyScalar(k),x.copy(_).multiplyScalar(v.x).addScaledVector(p,-S.x).multiplyScalar(k),u[O].add(T),u[L].add(T),u[C].add(T),f[O].add(x),f[L].add(x),f[C].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let O=0,L=E.length;O<L;++O){const C=E[O],k=C.start,ae=C.count;for(let ee=k,he=k+ae;ee<he;ee+=3)d(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const M=new $,w=new $,F=new $,U=new $;function I(O){F.fromBufferAttribute(s,O),U.copy(F);const L=u[O];M.copy(L),M.sub(F.multiplyScalar(F.dot(L))).normalize(),w.crossVectors(U,L);const k=w.dot(f[O])<0?-1:1;l.setXYZW(O,M.x,M.y,M.z,k)}for(let O=0,L=E.length;O<L;++O){const C=E[O],k=C.start,ae=C.count;for(let ee=k,he=k+ae;ee<he;ee+=3)I(e.getX(ee+0)),I(e.getX(ee+1)),I(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let g=0,v=i.count;g<v;g++)i.setXYZ(g,0,0,0);const s=new $,o=new $,l=new $,u=new $,f=new $,h=new $,p=new $,_=new $;if(e)for(let g=0,v=e.count;g<v;g+=3){const S=e.getX(g+0),T=e.getX(g+1),x=e.getX(g+2);s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,T),l.fromBufferAttribute(n,x),p.subVectors(l,o),_.subVectors(s,o),p.cross(_),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,T),h.fromBufferAttribute(i,x),u.add(p),f.add(p),h.add(p),i.setXYZ(S,u.x,u.y,u.z),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,v=n.count;g<v;g+=3)s.fromBufferAttribute(n,g+0),o.fromBufferAttribute(n,g+1),l.fromBufferAttribute(n,g+2),p.subVectors(l,o),_.subVectors(s,o),p.cross(_),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Mn.fromBufferAttribute(e,n),Mn.normalize(),e.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(u,f){const h=u.array,p=u.itemSize,_=u.normalized,g=new h.constructor(f.length*p);let v=0,S=0;for(let T=0,x=f.length;T<x;T++){u.isInterleavedBufferAttribute?v=f[T]*u.data.stride+u.offset:v=f[T]*p;for(let d=0;d<p;d++)g[S++]=h[v++]}return new Ai(g,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new dr,i=this.index.array,s=this.attributes;for(const u in s){const f=s[u],h=e(f,i);n.setAttribute(u,h)}const o=this.morphAttributes;for(const u in o){const f=[],h=o[u];for(let p=0,_=h.length;p<_;p++){const g=h[p],v=e(g,i);f.push(v)}n.morphAttributes[u]=f}n.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,f=l.length;u<f;u++){const h=l[u];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const f in i){const h=i[f];e.data.attributes[f]=h.toJSON(e.data)}const s={};let o=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let _=0,g=h.length;_<g;_++){const v=h[_];p.push(v.toJSON(e.data))}p.length>0&&(s[f]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(n))}const o=e.morphAttributes;for(const h in o){const p=[],_=o[h];for(let g=0,v=_.length;g<v;g++)p.push(_[g].clone(n));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,p=l.length;h<p;h++){const _=l[h];this.addGroup(_.start,_.count,_.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ry=new fn,ro=new f_,Hc=new ph,sy=new $,Vc=new $,Gc=new $,Wc=new $,vp=new $,Xc=new $,oy=new $,Yc=new $;class Tr extends di{constructor(e=new dr,n=new h_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){Xc.set(0,0,0);for(let f=0,h=o.length;f<h;f++){const p=u[f],_=o[f];p!==0&&(vp.fromBufferAttribute(_,e),l?Xc.addScaledVector(vp,p):Xc.addScaledVector(vp.sub(n),p))}n.add(Xc)}return n}raycast(e,n){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hc.copy(i.boundingSphere),Hc.applyMatrix4(o),ro.copy(e.ray).recast(e.near),!(Hc.containsPoint(ro.origin)===!1&&(ro.intersectSphere(Hc,sy)===null||ro.origin.distanceToSquared(sy)>(e.far-e.near)**2))&&(ry.copy(o).invert(),ro.copy(e.ray).applyMatrix4(ry),!(i.boundingBox!==null&&ro.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ro)))}_computeIntersections(e,n,i){let s;const o=this.geometry,l=this.material,u=o.index,f=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,_=o.attributes.normal,g=o.groups,v=o.drawRange;if(u!==null)if(Array.isArray(l))for(let S=0,T=g.length;S<T;S++){const x=g[S],d=l[x.materialIndex],E=Math.max(x.start,v.start),M=Math.min(u.count,Math.min(x.start+x.count,v.start+v.count));for(let w=E,F=M;w<F;w+=3){const U=u.getX(w),I=u.getX(w+1),O=u.getX(w+2);s=jc(this,d,e,i,h,p,_,U,I,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,n.push(s))}}else{const S=Math.max(0,v.start),T=Math.min(u.count,v.start+v.count);for(let x=S,d=T;x<d;x+=3){const E=u.getX(x),M=u.getX(x+1),w=u.getX(x+2);s=jc(this,l,e,i,h,p,_,E,M,w),s&&(s.faceIndex=Math.floor(x/3),n.push(s))}}else if(f!==void 0)if(Array.isArray(l))for(let S=0,T=g.length;S<T;S++){const x=g[S],d=l[x.materialIndex],E=Math.max(x.start,v.start),M=Math.min(f.count,Math.min(x.start+x.count,v.start+v.count));for(let w=E,F=M;w<F;w+=3){const U=w,I=w+1,O=w+2;s=jc(this,d,e,i,h,p,_,U,I,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,n.push(s))}}else{const S=Math.max(0,v.start),T=Math.min(f.count,v.start+v.count);for(let x=S,d=T;x<d;x+=3){const E=x,M=x+1,w=x+2;s=jc(this,l,e,i,h,p,_,E,M,w),s&&(s.faceIndex=Math.floor(x/3),n.push(s))}}}}function CD(t,e,n,i,s,o,l,u){let f;if(e.side===fi?f=i.intersectTriangle(l,o,s,!0,u):f=i.intersectTriangle(s,o,l,e.side===ks,u),f===null)return null;Yc.copy(u),Yc.applyMatrix4(t.matrixWorld);const h=n.ray.origin.distanceTo(Yc);return h<n.near||h>n.far?null:{distance:h,point:Yc.clone(),object:t}}function jc(t,e,n,i,s,o,l,u,f,h){t.getVertexPosition(u,Vc),t.getVertexPosition(f,Gc),t.getVertexPosition(h,Wc);const p=CD(t,e,n,i,Vc,Gc,Wc,oy);if(p){const _=new $;lr.getBarycoord(oy,Vc,Gc,Wc,_),s&&(p.uv=lr.getInterpolatedAttribute(s,u,f,h,_,new mt)),o&&(p.uv1=lr.getInterpolatedAttribute(o,u,f,h,_,new mt)),l&&(p.normal=lr.getInterpolatedAttribute(l,u,f,h,_,new $),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:f,c:h,normal:new $,materialIndex:0};lr.getNormal(Vc,Gc,Wc,g.normal),p.face=g,p.barycoord=_}return p}class Su extends dr{constructor(e=1,n=1,i=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:o,depthSegments:l};const u=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);const f=[],h=[],p=[],_=[];let g=0,v=0;S("z","y","x",-1,-1,i,n,e,l,o,0),S("z","y","x",1,-1,i,n,-e,l,o,1),S("x","z","y",1,1,e,i,n,s,l,2),S("x","z","y",1,-1,e,i,-n,s,l,3),S("x","y","z",1,-1,e,n,i,s,o,4),S("x","y","z",-1,-1,e,n,-i,s,o,5),this.setIndex(f),this.setAttribute("position",new Kr(h,3)),this.setAttribute("normal",new Kr(p,3)),this.setAttribute("uv",new Kr(_,2));function S(T,x,d,E,M,w,F,U,I,O,L){const C=w/I,k=F/O,ae=w/2,ee=F/2,he=U/2,ve=I+1,le=O+1;let pe=0,H=0;const ie=new $;for(let de=0;de<le;de++){const Ae=de*k-ee;for(let Ee=0;Ee<ve;Ee++){const Se=Ee*C-ae;ie[T]=Se*E,ie[x]=Ae*M,ie[d]=he,h.push(ie.x,ie.y,ie.z),ie[T]=0,ie[x]=0,ie[d]=U>0?1:-1,p.push(ie.x,ie.y,ie.z),_.push(Ee/I),_.push(1-de/O),pe+=1}}for(let de=0;de<O;de++)for(let Ae=0;Ae<I;Ae++){const Ee=g+Ae+ve*de,Se=g+Ae+ve*(de+1),V=g+(Ae+1)+ve*(de+1),Z=g+(Ae+1)+ve*de;f.push(Ee,Se,Z),f.push(Se,V,Z),H+=6}u.addGroup(v,H,L),v+=H,g+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Su(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ka(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function $n(t){const e={};for(let n=0;n<t.length;n++){const i=Ka(t[n]);for(const s in i)e[s]=i[s]}return e}function PD(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function E1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const bD={clone:Ka,merge:$n};var LD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hs extends yu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LD,this.fragmentShader=DD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ka(e.uniforms),this.uniformsGroups=PD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?n.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?n.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?n.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?n.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?n.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?n.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?n.uniforms[s]={type:"m4",value:l.toArray()}:n.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class M1 extends di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=jr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xs=new $,ay=new mt,ly=new mt;class Vi extends M1{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hu*2*Math.atan(Math.tan(Yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,n){return this.getViewBounds(e,ay,ly),n.subVectors(ly,ay)}setViewOffset(e,n,i,s,o,l){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Yl*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,o=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,h=l.fullHeight;o+=l.offsetX*s/f,n-=l.offsetY*i/h,s*=l.width/f,i*=l.height/h}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const la=-90,ua=1;class ID extends di{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vi(la,ua,e,n);s.layers=this.layers,this.add(s);const o=new Vi(la,ua,e,n);o.layers=this.layers,this.add(o);const l=new Vi(la,ua,e,n);l.layers=this.layers,this.add(l);const u=new Vi(la,ua,e,n);u.layers=this.layers,this.add(u);const f=new Vi(la,ua,e,n);f.layers=this.layers,this.add(f);const h=new Vi(la,ua,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,o,l,u,f]=n;for(const h of n)this.remove(h);if(e===jr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Yf)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,u,f,h,p]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,o),e.setRenderTarget(i,1,s),e.render(n,l),e.setRenderTarget(i,2,s),e.render(n,u),e.setRenderTarget(i,3,s),e.render(n,f),e.setRenderTarget(i,4,s),e.render(n,h),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,s),e.render(n,p),e.setRenderTarget(_,g,v),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class T1 extends hi{constructor(e,n,i,s,o,l,u,f,h,p){e=e!==void 0?e:[],n=n!==void 0?n:Xa,super(e,n,i,s,o,l,u,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class UD extends Co{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new T1(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mr}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Su(5,5,5),o=new Hs({name:"CubemapFromEquirect",uniforms:Ka(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fi,blending:Fs});o.uniforms.tEquirect.value=n;const l=new Tr(s,o),u=n.minFilter;return n.minFilter===xo&&(n.minFilter=Mr),new ID(1,10,this).update(e,l),n.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,n,i,s){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(n,i,s);e.setRenderTarget(o)}}class ND extends di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const xp=new $,FD=new $,OD=new ut;class Es{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=xp.subVectors(i,n).cross(FD.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(xp),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||OD.getNormalMatrix(e),s=this.coplanarPoint(xp).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const so=new ph,qc=new $;class w1{constructor(e=new Es,n=new Es,i=new Es,s=new Es,o=new Es,l=new Es){this.planes=[e,n,i,s,o,l]}set(e,n,i,s,o,l){const u=this.planes;return u[0].copy(e),u[1].copy(n),u[2].copy(i),u[3].copy(s),u[4].copy(o),u[5].copy(l),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=jr){const i=this.planes,s=e.elements,o=s[0],l=s[1],u=s[2],f=s[3],h=s[4],p=s[5],_=s[6],g=s[7],v=s[8],S=s[9],T=s[10],x=s[11],d=s[12],E=s[13],M=s[14],w=s[15];if(i[0].setComponents(f-o,g-h,x-v,w-d).normalize(),i[1].setComponents(f+o,g+h,x+v,w+d).normalize(),i[2].setComponents(f+l,g+p,x+S,w+E).normalize(),i[3].setComponents(f-l,g-p,x-S,w-E).normalize(),i[4].setComponents(f-u,g-_,x-T,w-M).normalize(),n===jr)i[5].setComponents(f+u,g+_,x+T,w+M).normalize();else if(n===Yf)i[5].setComponents(u,_,T,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),so.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(so)}intersectsSprite(e){return so.center.set(0,0,0),so.radius=.7071067811865476,so.applyMatrix4(e.matrixWorld),this.intersectsSphere(so)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(qc.x=s.normal.x>0?e.max.x:e.min.x,qc.y=s.normal.y>0?e.max.y:e.min.y,qc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ag extends yu{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qf=new $,$f=new $,uy=new fn,Ll=new f_,$c=new ph,yp=new $,cy=new $;class A1 extends di{constructor(e=new dr,n=new ag){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,o=n.count;s<o;s++)qf.fromBufferAttribute(n,s-1),$f.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=qf.distanceTo($f);e.setAttribute("lineDistance",new Kr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$c.copy(i.boundingSphere),$c.applyMatrix4(s),$c.radius+=o,e.ray.intersectsSphere($c)===!1)return;uy.copy(s).invert(),Ll.copy(e.ray).applyMatrix4(uy);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=this.isLineSegments?2:1,p=i.index,g=i.attributes.position;if(p!==null){const v=Math.max(0,l.start),S=Math.min(p.count,l.start+l.count);for(let T=v,x=S-1;T<x;T+=h){const d=p.getX(T),E=p.getX(T+1),M=Kc(this,e,Ll,f,d,E);M&&n.push(M)}if(this.isLineLoop){const T=p.getX(S-1),x=p.getX(v),d=Kc(this,e,Ll,f,T,x);d&&n.push(d)}}else{const v=Math.max(0,l.start),S=Math.min(g.count,l.start+l.count);for(let T=v,x=S-1;T<x;T+=h){const d=Kc(this,e,Ll,f,T,T+1);d&&n.push(d)}if(this.isLineLoop){const T=Kc(this,e,Ll,f,S-1,v);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Kc(t,e,n,i,s,o){const l=t.geometry.attributes.position;if(qf.fromBufferAttribute(l,s),$f.fromBufferAttribute(l,o),n.distanceSqToSegment(qf,$f,yp,cy)>i)return;yp.applyMatrix4(t.matrixWorld);const f=e.ray.origin.distanceTo(yp);if(!(f<e.near||f>e.far))return{distance:f,point:cy.clone().applyMatrix4(t.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:t}}const fy=new $,hy=new $;class BD extends A1{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,o=n.count;s<o;s+=2)fy.fromBufferAttribute(n,s),hy.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+fy.distanceTo(hy);e.setAttribute("lineDistance",new Kr(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zc extends di{constructor(){super(),this.isGroup=!0,this.type="Group"}}class R1 extends hi{constructor(e,n,i,s,o,l,u,f,h,p=Na){if(p!==Na&&p!==qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Na&&(i=Ro),i===void 0&&p===qa&&(i=ja),super(null,s,o,l,u,f,p,i,h),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=u!==void 0?u:hr,this.minFilter=f!==void 0?f:hr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class mh extends dr{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const o=e/2,l=n/2,u=Math.floor(i),f=Math.floor(s),h=u+1,p=f+1,_=e/u,g=n/f,v=[],S=[],T=[],x=[];for(let d=0;d<p;d++){const E=d*g-l;for(let M=0;M<h;M++){const w=M*_-o;S.push(w,-E,0),T.push(0,0,1),x.push(M/u),x.push(1-d/f)}}for(let d=0;d<f;d++)for(let E=0;E<u;E++){const M=E+h*d,w=E+h*(d+1),F=E+1+h*(d+1),U=E+1+h*d;v.push(M,w,U),v.push(w,F,U)}this.setIndex(v),this.setAttribute("position",new Kr(S,3)),this.setAttribute("normal",new Kr(T,3)),this.setAttribute("uv",new Kr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mh(e.width,e.height,e.widthSegments,e.heightSegments)}}class zD extends yu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NL,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kD extends yu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class HD extends M1{constructor(e=-1,n=1,i=1,s=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,l=i+e,u=s+n,f=s-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,l=o+h*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class VD extends Vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dy{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class GD extends Do{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function py(t,e,n,i){const s=WD(i);switch(n){case a1:return t*e;case u1:return t*e;case c1:return t*e*2;case f1:return t*e/s.components*s.byteLength;case a_:return t*e/s.components*s.byteLength;case h1:return t*e*2/s.components*s.byteLength;case l_:return t*e*2/s.components*s.byteLength;case l1:return t*e*3/s.components*s.byteLength;case ur:return t*e*4/s.components*s.byteLength;case u_:return t*e*4/s.components*s.byteLength;case mf:case gf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case _f:case vf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fm:case Bm:return Math.max(t,16)*Math.max(e,8)/4;case Nm:case Om:return Math.max(t,8)*Math.max(e,8)/2;case zm:case km:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gm:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Wm:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Xm:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ym:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case jm:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case qm:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $m:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Km:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Zm:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Qm:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Jm:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case eg:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case tg:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case xf:case ng:case ig:return Math.ceil(t/4)*Math.ceil(e/4)*16;case d1:case rg:return Math.ceil(t/4)*Math.ceil(e/4)*8;case sg:case og:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function WD(t){switch(t){case ts:case r1:return{byteLength:1,components:1};case fu:case s1:case vu:return{byteLength:2,components:1};case s_:case o_:return{byteLength:2,components:4};case Ro:case r_:case Yr:return{byteLength:4,components:1};case o1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:i_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=i_);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function C1(){let t=null,e=!1,n=null,i=null;function s(o,l){n(o,l),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function XD(t){const e=new WeakMap;function n(u,f){const h=u.array,p=u.usage,_=h.byteLength,g=t.createBuffer();t.bindBuffer(f,g),t.bufferData(f,h,p),u.onUploadCallback();let v;if(h instanceof Float32Array)v=t.FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?v=t.HALF_FLOAT:v=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=t.SHORT;else if(h instanceof Uint32Array)v=t.UNSIGNED_INT;else if(h instanceof Int32Array)v=t.INT;else if(h instanceof Int8Array)v=t.BYTE;else if(h instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:_}}function i(u,f,h){const p=f.array,_=f.updateRanges;if(t.bindBuffer(h,u),_.length===0)t.bufferSubData(h,0,p);else{_.sort((v,S)=>v.start-S.start);let g=0;for(let v=1;v<_.length;v++){const S=_[g],T=_[v];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++g,_[g]=T)}_.length=g+1;for(let v=0,S=_.length;v<S;v++){const T=_[v];t.bufferSubData(h,T.start*p.BYTES_PER_ELEMENT,p,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(t.deleteBuffer(f.buffer),e.delete(u))}function l(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,n(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,f),h.version=u.version}}return{get:s,remove:o,update:l}}var YD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jD=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$D=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KD=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QD=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,t3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,s3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,o3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,a3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,l3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,p3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,m3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,g3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,v3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E3="gl_FragColor = linearToOutputTexel( gl_FragColor );",M3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,w3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,A3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,R3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,P3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,U3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,B3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,z3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,W3=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,X3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Y3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q3=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$3=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K3=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z3=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eI=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tI=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rI=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sI=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oI=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aI=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lI=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cI=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dI=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pI=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_I=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xI=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yI=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,SI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EI=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TI=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AI=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RI=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,CI=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bI=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DI=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,II=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UI=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BI=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zI=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kI=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XI=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YI=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qI=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$I=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KI=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QI=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JI=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eU=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iU=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rU=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oU=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aU=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lU=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uU=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cU=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fU=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hU=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dU=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pU=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mU=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gU=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_U=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vU=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xU=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SU=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EU=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MU=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:YD,alphahash_pars_fragment:jD,alphamap_fragment:qD,alphamap_pars_fragment:$D,alphatest_fragment:KD,alphatest_pars_fragment:ZD,aomap_fragment:QD,aomap_pars_fragment:JD,batching_pars_vertex:e3,batching_vertex:t3,begin_vertex:n3,beginnormal_vertex:i3,bsdfs:r3,iridescence_fragment:s3,bumpmap_pars_fragment:o3,clipping_planes_fragment:a3,clipping_planes_pars_fragment:l3,clipping_planes_pars_vertex:u3,clipping_planes_vertex:c3,color_fragment:f3,color_pars_fragment:h3,color_pars_vertex:d3,color_vertex:p3,common:m3,cube_uv_reflection_fragment:g3,defaultnormal_vertex:_3,displacementmap_pars_vertex:v3,displacementmap_vertex:x3,emissivemap_fragment:y3,emissivemap_pars_fragment:S3,colorspace_fragment:E3,colorspace_pars_fragment:M3,envmap_fragment:T3,envmap_common_pars_fragment:w3,envmap_pars_fragment:A3,envmap_pars_vertex:R3,envmap_physical_pars_fragment:B3,envmap_vertex:C3,fog_vertex:P3,fog_pars_vertex:b3,fog_fragment:L3,fog_pars_fragment:D3,gradientmap_pars_fragment:I3,lightmap_pars_fragment:U3,lights_lambert_fragment:N3,lights_lambert_pars_fragment:F3,lights_pars_begin:O3,lights_toon_fragment:z3,lights_toon_pars_fragment:k3,lights_phong_fragment:H3,lights_phong_pars_fragment:V3,lights_physical_fragment:G3,lights_physical_pars_fragment:W3,lights_fragment_begin:X3,lights_fragment_maps:Y3,lights_fragment_end:j3,logdepthbuf_fragment:q3,logdepthbuf_pars_fragment:$3,logdepthbuf_pars_vertex:K3,logdepthbuf_vertex:Z3,map_fragment:Q3,map_pars_fragment:J3,map_particle_fragment:eI,map_particle_pars_fragment:tI,metalnessmap_fragment:nI,metalnessmap_pars_fragment:iI,morphinstance_vertex:rI,morphcolor_vertex:sI,morphnormal_vertex:oI,morphtarget_pars_vertex:aI,morphtarget_vertex:lI,normal_fragment_begin:uI,normal_fragment_maps:cI,normal_pars_fragment:fI,normal_pars_vertex:hI,normal_vertex:dI,normalmap_pars_fragment:pI,clearcoat_normal_fragment_begin:mI,clearcoat_normal_fragment_maps:gI,clearcoat_pars_fragment:_I,iridescence_pars_fragment:vI,opaque_fragment:xI,packing:yI,premultiplied_alpha_fragment:SI,project_vertex:EI,dithering_fragment:MI,dithering_pars_fragment:TI,roughnessmap_fragment:wI,roughnessmap_pars_fragment:AI,shadowmap_pars_fragment:RI,shadowmap_pars_vertex:CI,shadowmap_vertex:PI,shadowmask_pars_fragment:bI,skinbase_vertex:LI,skinning_pars_vertex:DI,skinning_vertex:II,skinnormal_vertex:UI,specularmap_fragment:NI,specularmap_pars_fragment:FI,tonemapping_fragment:OI,tonemapping_pars_fragment:BI,transmission_fragment:zI,transmission_pars_fragment:kI,uv_pars_fragment:HI,uv_pars_vertex:VI,uv_vertex:GI,worldpos_vertex:WI,background_vert:XI,background_frag:YI,backgroundCube_vert:jI,backgroundCube_frag:qI,cube_vert:$I,cube_frag:KI,depth_vert:ZI,depth_frag:QI,distanceRGBA_vert:JI,distanceRGBA_frag:eU,equirect_vert:tU,equirect_frag:nU,linedashed_vert:iU,linedashed_frag:rU,meshbasic_vert:sU,meshbasic_frag:oU,meshlambert_vert:aU,meshlambert_frag:lU,meshmatcap_vert:uU,meshmatcap_frag:cU,meshnormal_vert:fU,meshnormal_frag:hU,meshphong_vert:dU,meshphong_frag:pU,meshphysical_vert:mU,meshphysical_frag:gU,meshtoon_vert:_U,meshtoon_frag:vU,points_vert:xU,points_frag:yU,shadow_vert:SU,shadow_frag:EU,sprite_vert:MU,sprite_frag:TU},Pe={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},yr={basic:{uniforms:$n([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:$n([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Dt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:$n([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:$n([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:$n([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Dt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:$n([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:$n([Pe.points,Pe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:$n([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:$n([Pe.common,Pe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:$n([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:$n([Pe.sprite,Pe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:$n([Pe.common,Pe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:$n([Pe.lights,Pe.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};yr.physical={uniforms:$n([yr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Qc={r:0,b:0,g:0},oo=new ns,wU=new fn;function AU(t,e,n,i,s,o,l){const u=new Dt(0);let f=o===!0?0:1,h,p,_=null,g=0,v=null;function S(M){let w=M.isScene===!0?M.background:null;return w&&w.isTexture&&(w=(M.backgroundBlurriness>0?n:e).get(w)),w}function T(M){let w=!1;const F=S(M);F===null?d(u,f):F&&F.isColor&&(d(F,1),w=!0);const U=t.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(t.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(M,w){const F=S(w);F&&(F.isCubeTexture||F.mapping===dh)?(p===void 0&&(p=new Tr(new Su(1,1,1),new Hs({name:"BackgroundCubeMaterial",uniforms:Ka(yr.backgroundCube.uniforms),vertexShader:yr.backgroundCube.vertexShader,fragmentShader:yr.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),oo.copy(w.backgroundRotation),oo.x*=-1,oo.y*=-1,oo.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(oo.y*=-1,oo.z*=-1),p.material.uniforms.envMap.value=F,p.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(wU.makeRotationFromEuler(oo)),p.material.toneMapped=Ct.getTransfer(F.colorSpace)!==Ft,(_!==F||g!==F.version||v!==t.toneMapping)&&(p.material.needsUpdate=!0,_=F,g=F.version,v=t.toneMapping),p.layers.enableAll(),M.unshift(p,p.geometry,p.material,0,0,null)):F&&F.isTexture&&(h===void 0&&(h=new Tr(new mh(2,2),new Hs({name:"BackgroundMaterial",uniforms:Ka(yr.background.uniforms),vertexShader:yr.background.vertexShader,fragmentShader:yr.background.fragmentShader,side:ks,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=F,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(F.colorSpace)!==Ft,F.matrixAutoUpdate===!0&&F.updateMatrix(),h.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||g!==F.version||v!==t.toneMapping)&&(h.material.needsUpdate=!0,_=F,g=F.version,v=t.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function d(M,w){M.getRGB(Qc,E1(t)),i.buffers.color.setClear(Qc.r,Qc.g,Qc.b,w,l)}function E(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(M,w=1){u.set(M),f=w,d(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(M){f=M,d(u,f)},render:T,addToRenderList:x,dispose:E}}function RU(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=g(null);let o=s,l=!1;function u(C,k,ae,ee,he){let ve=!1;const le=_(ee,ae,k);o!==le&&(o=le,h(o.object)),ve=v(C,ee,ae,he),ve&&S(C,ee,ae,he),he!==null&&e.update(he,t.ELEMENT_ARRAY_BUFFER),(ve||l)&&(l=!1,w(C,k,ae,ee),he!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function f(){return t.createVertexArray()}function h(C){return t.bindVertexArray(C)}function p(C){return t.deleteVertexArray(C)}function _(C,k,ae){const ee=ae.wireframe===!0;let he=i[C.id];he===void 0&&(he={},i[C.id]=he);let ve=he[k.id];ve===void 0&&(ve={},he[k.id]=ve);let le=ve[ee];return le===void 0&&(le=g(f()),ve[ee]=le),le}function g(C){const k=[],ae=[],ee=[];for(let he=0;he<n;he++)k[he]=0,ae[he]=0,ee[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ae,attributeDivisors:ee,object:C,attributes:{},index:null}}function v(C,k,ae,ee){const he=o.attributes,ve=k.attributes;let le=0;const pe=ae.getAttributes();for(const H in pe)if(pe[H].location>=0){const de=he[H];let Ae=ve[H];if(Ae===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(Ae=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(Ae=C.instanceColor)),de===void 0||de.attribute!==Ae||Ae&&de.data!==Ae.data)return!0;le++}return o.attributesNum!==le||o.index!==ee}function S(C,k,ae,ee){const he={},ve=k.attributes;let le=0;const pe=ae.getAttributes();for(const H in pe)if(pe[H].location>=0){let de=ve[H];de===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(de=C.instanceColor));const Ae={};Ae.attribute=de,de&&de.data&&(Ae.data=de.data),he[H]=Ae,le++}o.attributes=he,o.attributesNum=le,o.index=ee}function T(){const C=o.newAttributes;for(let k=0,ae=C.length;k<ae;k++)C[k]=0}function x(C){d(C,0)}function d(C,k){const ae=o.newAttributes,ee=o.enabledAttributes,he=o.attributeDivisors;ae[C]=1,ee[C]===0&&(t.enableVertexAttribArray(C),ee[C]=1),he[C]!==k&&(t.vertexAttribDivisor(C,k),he[C]=k)}function E(){const C=o.newAttributes,k=o.enabledAttributes;for(let ae=0,ee=k.length;ae<ee;ae++)k[ae]!==C[ae]&&(t.disableVertexAttribArray(ae),k[ae]=0)}function M(C,k,ae,ee,he,ve,le){le===!0?t.vertexAttribIPointer(C,k,ae,he,ve):t.vertexAttribPointer(C,k,ae,ee,he,ve)}function w(C,k,ae,ee){T();const he=ee.attributes,ve=ae.getAttributes(),le=k.defaultAttributeValues;for(const pe in ve){const H=ve[pe];if(H.location>=0){let ie=he[pe];if(ie===void 0&&(pe==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),pe==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor)),ie!==void 0){const de=ie.normalized,Ae=ie.itemSize,Ee=e.get(ie);if(Ee===void 0)continue;const Se=Ee.buffer,V=Ee.type,Z=Ee.bytesPerElement,se=V===t.INT||V===t.UNSIGNED_INT||ie.gpuType===r_;if(ie.isInterleavedBufferAttribute){const q=ie.data,ge=q.stride,qe=ie.offset;if(q.isInstancedInterleavedBuffer){for(let Ke=0;Ke<H.locationSize;Ke++)d(H.location+Ke,q.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ke=0;Ke<H.locationSize;Ke++)x(H.location+Ke);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let Ke=0;Ke<H.locationSize;Ke++)M(H.location+Ke,Ae/H.locationSize,V,de,ge*Z,(qe+Ae/H.locationSize*Ke)*Z,se)}else{if(ie.isInstancedBufferAttribute){for(let q=0;q<H.locationSize;q++)d(H.location+q,ie.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let q=0;q<H.locationSize;q++)x(H.location+q);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let q=0;q<H.locationSize;q++)M(H.location+q,Ae/H.locationSize,V,de,Ae*Z,Ae/H.locationSize*q*Z,se)}}else if(le!==void 0){const de=le[pe];if(de!==void 0)switch(de.length){case 2:t.vertexAttrib2fv(H.location,de);break;case 3:t.vertexAttrib3fv(H.location,de);break;case 4:t.vertexAttrib4fv(H.location,de);break;default:t.vertexAttrib1fv(H.location,de)}}}}E()}function F(){O();for(const C in i){const k=i[C];for(const ae in k){const ee=k[ae];for(const he in ee)p(ee[he].object),delete ee[he];delete k[ae]}delete i[C]}}function U(C){if(i[C.id]===void 0)return;const k=i[C.id];for(const ae in k){const ee=k[ae];for(const he in ee)p(ee[he].object),delete ee[he];delete k[ae]}delete i[C.id]}function I(C){for(const k in i){const ae=i[k];if(ae[C.id]===void 0)continue;const ee=ae[C.id];for(const he in ee)p(ee[he].object),delete ee[he];delete ae[C.id]}}function O(){L(),l=!0,o!==s&&(o=s,h(o.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:O,resetDefaultState:L,dispose:F,releaseStatesOfGeometry:U,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:x,disableUnusedAttributes:E}}function CU(t,e,n){let i;function s(h){i=h}function o(h,p){t.drawArrays(i,h,p),n.update(p,i,1)}function l(h,p,_){_!==0&&(t.drawArraysInstanced(i,h,p,_),n.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,_);let v=0;for(let S=0;S<_;S++)v+=p[S];n.update(v,i,1)}function f(h,p,_,g){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<h.length;S++)l(h[S],p[S],g[S]);else{v.multiDrawArraysInstancedWEBGL(i,h,0,p,0,g,0,_);let S=0;for(let T=0;T<_;T++)S+=p[T]*g[T];n.update(S,i,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function PU(t,e,n,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(I){return!(I!==ur&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(I){const O=I===vu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ts&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Yr&&!O)}function f(I){if(I==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const p=f(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const _=n.logarithmicDepthBuffer===!0,g=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),v=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),F=S>0,U=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:_,reverseDepthBuffer:g,maxTextures:v,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:F,maxSamples:U}}function bU(t){const e=this;let n=null,i=0,s=!1,o=!1;const l=new Es,u=new ut,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const v=_.length!==0||g||i!==0||s;return s=g,i=_.length,v},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,g){n=p(_,g,0)},this.setState=function(_,g,v){const S=_.clippingPlanes,T=_.clipIntersection,x=_.clipShadows,d=t.get(_);if(!s||S===null||S.length===0||o&&!x)o?p(null):h();else{const E=o?0:i,M=E*4;let w=d.clippingState||null;f.value=w,w=p(S,g,M,v);for(let F=0;F!==M;++F)w[F]=n[F];d.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=E}};function h(){f.value!==n&&(f.value=n,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,g,v,S){const T=_!==null?_.length:0;let x=null;if(T!==0){if(x=f.value,S!==!0||x===null){const d=v+T*4,E=g.matrixWorldInverse;u.getNormalMatrix(E),(x===null||x.length<d)&&(x=new Float32Array(d));for(let M=0,w=v;M!==T;++M,w+=4)l.copy(_[M]).applyMatrix4(E,u),l.normal.toArray(x,w),x[w+3]=l.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function LU(t){let e=new WeakMap;function n(l,u){return u===Lm?l.mapping=Xa:u===Dm&&(l.mapping=Ya),l}function i(l){if(l&&l.isTexture){const u=l.mapping;if(u===Lm||u===Dm)if(e.has(l)){const f=e.get(l).texture;return n(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const h=new UD(f.height);return h.fromEquirectangularTexture(t,l),e.set(l,h),l.addEventListener("dispose",s),n(h.texture,l.mapping)}else return null}}return l}function s(l){const u=l.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const Aa=4,my=[.125,.215,.35,.446,.526,.582],po=20,Sp=new HD,gy=new Dt;let Ep=null,Mp=0,Tp=0,wp=!1;const fo=(1+Math.sqrt(5))/2,ca=1/fo,_y=[new $(-fo,ca,0),new $(fo,ca,0),new $(-ca,0,fo),new $(ca,0,fo),new $(0,fo,-ca),new $(0,fo,ca),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class vy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){Ep=this._renderer.getRenderTarget(),Mp=this._renderer.getActiveCubeFace(),Tp=this._renderer.getActiveMipmapLevel(),wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ep,Mp,Tp),this._renderer.xr.enabled=wp,e.scissorTest=!1,Jc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xa||e.mapping===Ya?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ep=this._renderer.getRenderTarget(),Mp=this._renderer.getActiveCubeFace(),Tp=this._renderer.getActiveMipmapLevel(),wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Mr,minFilter:Mr,generateMipmaps:!1,type:vu,format:ur,colorSpace:$a,depthBuffer:!1},s=xy(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xy(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DU(o)),this._blurMaterial=IU(o,e,n)}return s}_compileMaterial(e){const n=new Tr(this._lodPlanes[0],e);this._renderer.compile(n,Sp)}_sceneToCubeUV(e,n,i,s){const u=new Vi(90,1,n,i),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,g=p.toneMapping;p.getClearColor(gy),p.toneMapping=Os,p.autoClear=!1;const v=new h_({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1}),S=new Tr(new Su,v);let T=!1;const x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,T=!0):(v.color.copy(gy),T=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(u.up.set(0,f[d],0),u.lookAt(h[d],0,0)):E===1?(u.up.set(0,0,f[d]),u.lookAt(0,h[d],0)):(u.up.set(0,f[d],0),u.lookAt(0,0,h[d]));const M=this._cubeSize;Jc(s,E*M,d>2?M:0,M,M),p.setRenderTarget(s),T&&p.render(S,u),p.render(e,u)}S.geometry.dispose(),S.material.dispose(),p.toneMapping=g,p.autoClear=_,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Xa||e.mapping===Ya;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yy());const o=s?this._cubemapMaterial:this._equirectMaterial,l=new Tr(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=e;const f=this._cubeSize;Jc(n,0,0,3*f,2*f),i.setRenderTarget(n),i.render(l,Sp)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=_y[(s-o-1)%_y.length];this._blur(e,o-1,o,l,u)}n.autoClear=i}_blur(e,n,i,s,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,n,i,s,"latitudinal",o),this._halfBlur(l,e,i,i,s,"longitudinal",o)}_halfBlur(e,n,i,s,o,l,u){const f=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new Tr(this._lodPlanes[s],h),g=h.uniforms,v=this._sizeLods[i]-1,S=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*po-1),T=o/S,x=isFinite(o)?1+Math.floor(p*T):po;x>po&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${po}`);const d=[];let E=0;for(let I=0;I<po;++I){const O=I/T,L=Math.exp(-O*O/2);d.push(L),I===0?E+=L:I<x&&(E+=2*L)}for(let I=0;I<d.length;I++)d[I]=d[I]/E;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=d,g.latitudinal.value=l==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:M}=this;g.dTheta.value=S,g.mipInt.value=M-i;const w=this._sizeLods[s],F=3*w*(s>M-Aa?s-M+Aa:0),U=4*(this._cubeSize-w);Jc(n,F,U,3*w,2*w),f.setRenderTarget(n),f.render(_,Sp)}}function DU(t){const e=[],n=[],i=[];let s=t;const o=t-Aa+1+my.length;for(let l=0;l<o;l++){const u=Math.pow(2,s);n.push(u);let f=1/u;l>t-Aa?f=my[l-t+Aa-1]:l===0&&(f=0),i.push(f);const h=1/(u-2),p=-h,_=1+h,g=[p,p,_,p,_,_,p,p,_,_,p,_],v=6,S=6,T=3,x=2,d=1,E=new Float32Array(T*S*v),M=new Float32Array(x*S*v),w=new Float32Array(d*S*v);for(let U=0;U<v;U++){const I=U%3*2/3-1,O=U>2?0:-1,L=[I,O,0,I+2/3,O,0,I+2/3,O+1,0,I,O,0,I+2/3,O+1,0,I,O+1,0];E.set(L,T*S*U),M.set(g,x*S*U);const C=[U,U,U,U,U,U];w.set(C,d*S*U)}const F=new dr;F.setAttribute("position",new Ai(E,T)),F.setAttribute("uv",new Ai(M,x)),F.setAttribute("faceIndex",new Ai(w,d)),e.push(F),s>Aa&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function xy(t,e,n){const i=new Co(t,e,n);return i.texture.mapping=dh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jc(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function IU(t,e,n){const i=new Float32Array(po),s=new $(0,1,0);return new Hs({name:"SphericalGaussianBlur",defines:{n:po,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:d_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function yy(){return new Hs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:d_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function Sy(){return new Hs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:d_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function d_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function UU(t){let e=new WeakMap,n=null;function i(u){if(u&&u.isTexture){const f=u.mapping,h=f===Lm||f===Dm,p=f===Xa||f===Ya;if(h||p){let _=e.get(u);const g=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new vy(t)),_=h?n.fromEquirectangular(u,_):n.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),_.texture;if(_!==void 0)return _.texture;{const v=u.image;return h&&v&&v.height>0||p&&v&&s(v)?(n===null&&(n=new vy(t)),_=h?n.fromEquirectangular(u):n.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),u.addEventListener("dispose",o),_.texture):null}}}return u}function s(u){let f=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&f++;return f===h}function o(u){const f=u.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:l}}function NU(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&ha("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function FU(t,e,n,i){const s={},o=new WeakMap;function l(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const S in g.attributes)e.remove(g.attributes[S]);g.removeEventListener("dispose",l),delete s[g.id];const v=o.get(g);v&&(e.remove(v),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function u(_,g){return s[g.id]===!0||(g.addEventListener("dispose",l),s[g.id]=!0,n.memory.geometries++),g}function f(_){const g=_.attributes;for(const v in g)e.update(g[v],t.ARRAY_BUFFER)}function h(_){const g=[],v=_.index,S=_.attributes.position;let T=0;if(v!==null){const E=v.array;T=v.version;for(let M=0,w=E.length;M<w;M+=3){const F=E[M+0],U=E[M+1],I=E[M+2];g.push(F,U,U,I,I,F)}}else if(S!==void 0){const E=S.array;T=S.version;for(let M=0,w=E.length/3-1;M<w;M+=3){const F=M+0,U=M+1,I=M+2;g.push(F,U,U,I,I,F)}}else return;const x=new(m1(g)?S1:y1)(g,1);x.version=T;const d=o.get(_);d&&e.remove(d),o.set(_,x)}function p(_){const g=o.get(_);if(g){const v=_.index;v!==null&&g.version<v.version&&h(_)}else h(_);return o.get(_)}return{get:u,update:f,getWireframeAttribute:p}}function OU(t,e,n){let i;function s(g){i=g}let o,l;function u(g){o=g.type,l=g.bytesPerElement}function f(g,v){t.drawElements(i,v,o,g*l),n.update(v,i,1)}function h(g,v,S){S!==0&&(t.drawElementsInstanced(i,v,o,g*l,S),n.update(v,i,S))}function p(g,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,o,g,0,S);let x=0;for(let d=0;d<S;d++)x+=v[d];n.update(x,i,1)}function _(g,v,S,T){if(S===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let d=0;d<g.length;d++)h(g[d]/l,v[d],T[d]);else{x.multiDrawElementsInstancedWEBGL(i,v,0,o,g,0,T,0,S);let d=0;for(let E=0;E<S;E++)d+=v[E]*T[E];n.update(d,i,1)}}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function BU(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,u){switch(n.calls++,l){case t.TRIANGLES:n.triangles+=u*(o/3);break;case t.LINES:n.lines+=u*(o/2);break;case t.LINE_STRIP:n.lines+=u*(o-1);break;case t.LINE_LOOP:n.lines+=u*o;break;case t.POINTS:n.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function zU(t,e,n){const i=new WeakMap,s=new cn;function o(l,u,f){const h=l.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let g=i.get(u);if(g===void 0||g.count!==_){let C=function(){O.dispose(),i.delete(u),u.removeEventListener("dispose",C)};var v=C;g!==void 0&&g.texture.dispose();const S=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,d=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let w=0;S===!0&&(w=1),T===!0&&(w=2),x===!0&&(w=3);let F=u.attributes.position.count*w,U=1;F>e.maxTextureSize&&(U=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const I=new Float32Array(F*U*4*_),O=new _1(I,F,U,_);O.type=Yr,O.needsUpdate=!0;const L=w*4;for(let k=0;k<_;k++){const ae=d[k],ee=E[k],he=M[k],ve=F*U*4*k;for(let le=0;le<ae.count;le++){const pe=le*L;S===!0&&(s.fromBufferAttribute(ae,le),I[ve+pe+0]=s.x,I[ve+pe+1]=s.y,I[ve+pe+2]=s.z,I[ve+pe+3]=0),T===!0&&(s.fromBufferAttribute(ee,le),I[ve+pe+4]=s.x,I[ve+pe+5]=s.y,I[ve+pe+6]=s.z,I[ve+pe+7]=0),x===!0&&(s.fromBufferAttribute(he,le),I[ve+pe+8]=s.x,I[ve+pe+9]=s.y,I[ve+pe+10]=s.z,I[ve+pe+11]=he.itemSize===4?s.w:1)}}g={count:_,texture:O,size:new mt(F,U)},i.set(u,g),u.addEventListener("dispose",C)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(t,"morphTexture",l.morphTexture,n);else{let S=0;for(let x=0;x<h.length;x++)S+=h[x];const T=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(t,"morphTargetBaseInfluence",T),f.getUniforms().setValue(t,"morphTargetInfluences",h)}f.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}return{update:o}}function kU(t,e,n,i){let s=new WeakMap;function o(f){const h=i.render.frame,p=f.geometry,_=e.get(f,p);if(s.get(_)!==h&&(e.update(_),s.set(_,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),s.get(f)!==h&&(n.update(f.instanceMatrix,t.ARRAY_BUFFER),f.instanceColor!==null&&n.update(f.instanceColor,t.ARRAY_BUFFER),s.set(f,h))),f.isSkinnedMesh){const g=f.skeleton;s.get(g)!==h&&(g.update(),s.set(g,h))}return _}function l(){s=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:l}}const P1=new hi,Ey=new R1(1,1),b1=new _1,L1=new vD,D1=new T1,My=[],Ty=[],wy=new Float32Array(16),Ay=new Float32Array(9),Ry=new Float32Array(4);function tl(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let o=My[s];if(o===void 0&&(o=new Float32Array(s),My[s]=o),e!==0){i.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=n,t[l].toArray(o,u)}return o}function yn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Sn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function gh(t,e){let n=Ty[e];n===void 0&&(n=new Int32Array(e),Ty[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function HU(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function VU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yn(n,e))return;t.uniform2fv(this.addr,e),Sn(n,e)}}function GU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(yn(n,e))return;t.uniform3fv(this.addr,e),Sn(n,e)}}function WU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yn(n,e))return;t.uniform4fv(this.addr,e),Sn(n,e)}}function XU(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Sn(n,e)}else{if(yn(n,i))return;Ry.set(i),t.uniformMatrix2fv(this.addr,!1,Ry),Sn(n,i)}}function YU(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Sn(n,e)}else{if(yn(n,i))return;Ay.set(i),t.uniformMatrix3fv(this.addr,!1,Ay),Sn(n,i)}}function jU(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Sn(n,e)}else{if(yn(n,i))return;wy.set(i),t.uniformMatrix4fv(this.addr,!1,wy),Sn(n,i)}}function qU(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $U(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yn(n,e))return;t.uniform2iv(this.addr,e),Sn(n,e)}}function KU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yn(n,e))return;t.uniform3iv(this.addr,e),Sn(n,e)}}function ZU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yn(n,e))return;t.uniform4iv(this.addr,e),Sn(n,e)}}function QU(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function JU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yn(n,e))return;t.uniform2uiv(this.addr,e),Sn(n,e)}}function eN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yn(n,e))return;t.uniform3uiv(this.addr,e),Sn(n,e)}}function tN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yn(n,e))return;t.uniform4uiv(this.addr,e),Sn(n,e)}}function nN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let o;this.type===t.SAMPLER_2D_SHADOW?(Ey.compareFunction=p1,o=Ey):o=P1,n.setTexture2D(e||o,s)}function iN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||L1,s)}function rN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||D1,s)}function sN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||b1,s)}function oN(t){switch(t){case 5126:return HU;case 35664:return VU;case 35665:return GU;case 35666:return WU;case 35674:return XU;case 35675:return YU;case 35676:return jU;case 5124:case 35670:return qU;case 35667:case 35671:return $U;case 35668:case 35672:return KU;case 35669:case 35673:return ZU;case 5125:return QU;case 36294:return JU;case 36295:return eN;case 36296:return tN;case 35678:case 36198:case 36298:case 36306:case 35682:return nN;case 35679:case 36299:case 36307:return iN;case 35680:case 36300:case 36308:case 36293:return rN;case 36289:case 36303:case 36311:case 36292:return sN}}function aN(t,e){t.uniform1fv(this.addr,e)}function lN(t,e){const n=tl(e,this.size,2);t.uniform2fv(this.addr,n)}function uN(t,e){const n=tl(e,this.size,3);t.uniform3fv(this.addr,n)}function cN(t,e){const n=tl(e,this.size,4);t.uniform4fv(this.addr,n)}function fN(t,e){const n=tl(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function hN(t,e){const n=tl(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function dN(t,e){const n=tl(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function pN(t,e){t.uniform1iv(this.addr,e)}function mN(t,e){t.uniform2iv(this.addr,e)}function gN(t,e){t.uniform3iv(this.addr,e)}function _N(t,e){t.uniform4iv(this.addr,e)}function vN(t,e){t.uniform1uiv(this.addr,e)}function xN(t,e){t.uniform2uiv(this.addr,e)}function yN(t,e){t.uniform3uiv(this.addr,e)}function SN(t,e){t.uniform4uiv(this.addr,e)}function EN(t,e,n){const i=this.cache,s=e.length,o=gh(n,s);yn(i,o)||(t.uniform1iv(this.addr,o),Sn(i,o));for(let l=0;l!==s;++l)n.setTexture2D(e[l]||P1,o[l])}function MN(t,e,n){const i=this.cache,s=e.length,o=gh(n,s);yn(i,o)||(t.uniform1iv(this.addr,o),Sn(i,o));for(let l=0;l!==s;++l)n.setTexture3D(e[l]||L1,o[l])}function TN(t,e,n){const i=this.cache,s=e.length,o=gh(n,s);yn(i,o)||(t.uniform1iv(this.addr,o),Sn(i,o));for(let l=0;l!==s;++l)n.setTextureCube(e[l]||D1,o[l])}function wN(t,e,n){const i=this.cache,s=e.length,o=gh(n,s);yn(i,o)||(t.uniform1iv(this.addr,o),Sn(i,o));for(let l=0;l!==s;++l)n.setTexture2DArray(e[l]||b1,o[l])}function AN(t){switch(t){case 5126:return aN;case 35664:return lN;case 35665:return uN;case 35666:return cN;case 35674:return fN;case 35675:return hN;case 35676:return dN;case 5124:case 35670:return pN;case 35667:case 35671:return mN;case 35668:case 35672:return gN;case 35669:case 35673:return _N;case 5125:return vN;case 36294:return xN;case 36295:return yN;case 36296:return SN;case 35678:case 36198:case 36298:case 36306:case 35682:return EN;case 35679:case 36299:case 36307:return MN;case 35680:case 36300:case 36308:case 36293:return TN;case 36289:case 36303:case 36311:case 36292:return wN}}class RN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=oN(n.type)}}class CN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AN(n.type)}}class PN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let o=0,l=s.length;o!==l;++o){const u=s[o];u.setValue(e,n[u.id],i)}}}const Ap=/(\w+)(\])?(\[|\.)?/g;function Cy(t,e){t.seq.push(e),t.map[e.id]=e}function bN(t,e,n){const i=t.name,s=i.length;for(Ap.lastIndex=0;;){const o=Ap.exec(i),l=Ap.lastIndex;let u=o[1];const f=o[2]==="]",h=o[3];if(f&&(u=u|0),h===void 0||h==="["&&l+2===s){Cy(n,h===void 0?new RN(u,t,e):new CN(u,t,e));break}else{let _=n.map[u];_===void 0&&(_=new PN(u),Cy(n,_)),n=_}}}class yf{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(n,s),l=e.getUniformLocation(n,o.name);bN(o,l,this)}}setValue(e,n,i,s){const o=this.map[n];o!==void 0&&o.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let o=0,l=n.length;o!==l;++o){const u=n[o],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,o=e.length;s!==o;++s){const l=e[s];l.id in n&&i.push(l)}return i}}function Py(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const LN=37297;let DN=0;function IN(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let l=s;l<o;l++){const u=l+1;i.push(`${u===e?">":" "} ${u}: ${n[l]}`)}return i.join(`
`)}const by=new ut;function UN(t){Ct._getMatrix(by,Ct.workingColorSpace,t);const e=`mat3( ${by.elements.map(n=>n.toFixed(4))} )`;switch(Ct.getTransfer(t)){case Xf:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ly(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const l=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+IN(t.getShaderSource(e),l)}else return s}function NN(t,e){const n=UN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function FN(t,e){let n;switch(e){case RL:n="Linear";break;case CL:n="Reinhard";break;case PL:n="Cineon";break;case bL:n="ACESFilmic";break;case DL:n="AgX";break;case IL:n="Neutral";break;case LL:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ef=new $;function ON(){Ct.getLuminanceCoefficients(ef);const t=ef.x.toFixed(4),e=ef.y.toFixed(4),n=ef.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fl).join(`
`)}function zN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function kN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=t.getActiveAttrib(e,s),l=o.name;let u=1;o.type===t.FLOAT_MAT2&&(u=2),o.type===t.FLOAT_MAT3&&(u=3),o.type===t.FLOAT_MAT4&&(u=4),n[l]={type:o.type,location:t.getAttribLocation(e,l),locationSize:u}}return n}function Fl(t){return t!==""}function Dy(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iy(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HN=/^[ \t]*#include +<([\w\d./]+)>/gm;function lg(t){return t.replace(HN,GN)}const VN=new Map;function GN(t,e){let n=ft[e];if(n===void 0){const i=VN.get(e);if(i!==void 0)n=ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lg(n)}const WN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uy(t){return t.replace(WN,XN)}function XN(t,e,n,i){let s="";for(let o=parseInt(e);o<parseInt(n);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Ny(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function YN(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===t1?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===oL?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Hr&&(e="SHADOWMAP_TYPE_VSM"),e}function jN(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xa:case Ya:e="ENVMAP_TYPE_CUBE";break;case dh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qN(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ya:e="ENVMAP_MODE_REFRACTION";break}return e}function $N(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case n1:e="ENVMAP_BLENDING_MULTIPLY";break;case wL:e="ENVMAP_BLENDING_MIX";break;case AL:e="ENVMAP_BLENDING_ADD";break}return e}function KN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ZN(t,e,n,i){const s=t.getContext(),o=n.defines;let l=n.vertexShader,u=n.fragmentShader;const f=YN(n),h=jN(n),p=qN(n),_=$N(n),g=KN(n),v=BN(n),S=zN(o),T=s.createProgram();let x,d,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Fl).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Fl).join(`
`),d.length>0&&(d+=`
`)):(x=[Ny(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fl).join(`
`),d=[Ny(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Os?"#define TONE_MAPPING":"",n.toneMapping!==Os?ft.tonemapping_pars_fragment:"",n.toneMapping!==Os?FN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,NN("linearToOutputTexel",n.outputColorSpace),ON(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fl).join(`
`)),l=lg(l),l=Dy(l,n),l=Iy(l,n),u=lg(u),u=Dy(u,n),u=Iy(u,n),l=Uy(l),u=Uy(u),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",n.glslVersion===Wx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=E+x+l,w=E+d+u,F=Py(s,s.VERTEX_SHADER,M),U=Py(s,s.FRAGMENT_SHADER,w);s.attachShader(T,F),s.attachShader(T,U),n.index0AttributeName!==void 0?s.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function I(k){if(t.debug.checkShaderErrors){const ae=s.getProgramInfoLog(T).trim(),ee=s.getShaderInfoLog(F).trim(),he=s.getShaderInfoLog(U).trim();let ve=!0,le=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(ve=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,T,F,U);else{const pe=Ly(s,F,"vertex"),H=Ly(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ae+`
`+pe+`
`+H)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(ee===""||he==="")&&(le=!1);le&&(k.diagnostics={runnable:ve,programLog:ae,vertexShader:{log:ee,prefix:x},fragmentShader:{log:he,prefix:d}})}s.deleteShader(F),s.deleteShader(U),O=new yf(s,T),L=kN(s,T)}let O;this.getUniforms=function(){return O===void 0&&I(this),O};let L;this.getAttributes=function(){return L===void 0&&I(this),L};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(T,LN)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=DN++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=F,this.fragmentShader=U,this}let QN=0;class JN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),o=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new eF(e),n.set(e,i)),i}}class eF{constructor(e){this.id=QN++,this.code=e,this.usedTimes=0}}function tF(t,e,n,i,s,o,l){const u=new v1,f=new JN,h=new Set,p=[],_=s.logarithmicDepthBuffer,g=s.vertexTextures;let v=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return h.add(L),L===0?"uv":`uv${L}`}function x(L,C,k,ae,ee){const he=ae.fog,ve=ee.geometry,le=L.isMeshStandardMaterial?ae.environment:null,pe=(L.isMeshStandardMaterial?n:e).get(L.envMap||le),H=pe&&pe.mapping===dh?pe.image.height:null,ie=S[L.type];L.precision!==null&&(v=s.getMaxPrecision(L.precision),v!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",v,"instead."));const de=ve.morphAttributes.position||ve.morphAttributes.normal||ve.morphAttributes.color,Ae=de!==void 0?de.length:0;let Ee=0;ve.morphAttributes.position!==void 0&&(Ee=1),ve.morphAttributes.normal!==void 0&&(Ee=2),ve.morphAttributes.color!==void 0&&(Ee=3);let Se,V,Z,se;if(ie){const Pt=yr[ie];Se=Pt.vertexShader,V=Pt.fragmentShader}else Se=L.vertexShader,V=L.fragmentShader,f.update(L),Z=f.getVertexShaderID(L),se=f.getFragmentShaderID(L);const q=t.getRenderTarget(),ge=t.state.buffers.depth.getReversed(),qe=ee.isInstancedMesh===!0,Ke=ee.isBatchedMesh===!0,wt=!!L.map,Je=!!L.matcap,Ht=!!pe,B=!!L.aoMap,sn=!!L.lightMap,dt=!!L.bumpMap,it=!!L.normalMap,We=!!L.displacementMap,Bt=!!L.emissiveMap,Ge=!!L.metalnessMap,D=!!L.roughnessMap,A=L.anisotropy>0,K=L.clearcoat>0,_e=L.dispersion>0,xe=L.iridescence>0,ce=L.sheen>0,He=L.transmission>0,Re=A&&!!L.anisotropyMap,Ue=K&&!!L.clearcoatMap,_t=K&&!!L.clearcoatNormalMap,we=K&&!!L.clearcoatRoughnessMap,Ne=xe&&!!L.iridescenceMap,je=xe&&!!L.iridescenceThicknessMap,et=ce&&!!L.sheenColorMap,Fe=ce&&!!L.sheenRoughnessMap,pt=!!L.specularMap,rt=!!L.specularColorMap,Nt=!!L.specularIntensityMap,G=He&&!!L.transmissionMap,be=He&&!!L.thicknessMap,re=!!L.gradientMap,me=!!L.alphaMap,Ie=L.alphaTest>0,De=!!L.alphaHash,ot=!!L.extensions;let qt=Os;L.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(qt=t.toneMapping);const pn={shaderID:ie,shaderType:L.type,shaderName:L.name,vertexShader:Se,fragmentShader:V,defines:L.defines,customVertexShaderID:Z,customFragmentShaderID:se,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:v,batching:Ke,batchingColor:Ke&&ee._colorsTexture!==null,instancing:qe,instancingColor:qe&&ee.instanceColor!==null,instancingMorph:qe&&ee.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:q===null?t.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:$a,alphaToCoverage:!!L.alphaToCoverage,map:wt,matcap:Je,envMap:Ht,envMapMode:Ht&&pe.mapping,envMapCubeUVHeight:H,aoMap:B,lightMap:sn,bumpMap:dt,normalMap:it,displacementMap:g&&We,emissiveMap:Bt,normalMapObjectSpace:it&&L.normalMapType===BL,normalMapTangentSpace:it&&L.normalMapType===OL,metalnessMap:Ge,roughnessMap:D,anisotropy:A,anisotropyMap:Re,clearcoat:K,clearcoatMap:Ue,clearcoatNormalMap:_t,clearcoatRoughnessMap:we,dispersion:_e,iridescence:xe,iridescenceMap:Ne,iridescenceThicknessMap:je,sheen:ce,sheenColorMap:et,sheenRoughnessMap:Fe,specularMap:pt,specularColorMap:rt,specularIntensityMap:Nt,transmission:He,transmissionMap:G,thicknessMap:be,gradientMap:re,opaque:L.transparent===!1&&L.blending===Ua&&L.alphaToCoverage===!1,alphaMap:me,alphaTest:Ie,alphaHash:De,combine:L.combine,mapUv:wt&&T(L.map.channel),aoMapUv:B&&T(L.aoMap.channel),lightMapUv:sn&&T(L.lightMap.channel),bumpMapUv:dt&&T(L.bumpMap.channel),normalMapUv:it&&T(L.normalMap.channel),displacementMapUv:We&&T(L.displacementMap.channel),emissiveMapUv:Bt&&T(L.emissiveMap.channel),metalnessMapUv:Ge&&T(L.metalnessMap.channel),roughnessMapUv:D&&T(L.roughnessMap.channel),anisotropyMapUv:Re&&T(L.anisotropyMap.channel),clearcoatMapUv:Ue&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:_t&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:je&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:et&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&T(L.sheenRoughnessMap.channel),specularMapUv:pt&&T(L.specularMap.channel),specularColorMapUv:rt&&T(L.specularColorMap.channel),specularIntensityMapUv:Nt&&T(L.specularIntensityMap.channel),transmissionMapUv:G&&T(L.transmissionMap.channel),thicknessMapUv:be&&T(L.thicknessMap.channel),alphaMapUv:me&&T(L.alphaMap.channel),vertexTangents:!!ve.attributes.tangent&&(it||A),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!ve.attributes.color&&ve.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ve.attributes.uv&&(wt||me),fog:!!he,useFog:L.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:ge,skinning:ee.isSkinnedMesh===!0,morphTargets:ve.morphAttributes.position!==void 0,morphNormals:ve.morphAttributes.normal!==void 0,morphColors:ve.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ee,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:L.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:qt,decodeVideoTexture:wt&&L.map.isVideoTexture===!0&&Ct.getTransfer(L.map.colorSpace)===Ft,decodeVideoTextureEmissive:Bt&&L.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(L.emissiveMap.colorSpace)===Ft,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Er,flipSided:L.side===fi,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:ot&&L.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&L.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return pn.vertexUv1s=h.has(1),pn.vertexUv2s=h.has(2),pn.vertexUv3s=h.has(3),h.clear(),pn}function d(L){const C=[];if(L.shaderID?C.push(L.shaderID):(C.push(L.customVertexShaderID),C.push(L.customFragmentShaderID)),L.defines!==void 0)for(const k in L.defines)C.push(k),C.push(L.defines[k]);return L.isRawShaderMaterial===!1&&(E(C,L),M(C,L),C.push(t.outputColorSpace)),C.push(L.customProgramCacheKey),C.join()}function E(L,C){L.push(C.precision),L.push(C.outputColorSpace),L.push(C.envMapMode),L.push(C.envMapCubeUVHeight),L.push(C.mapUv),L.push(C.alphaMapUv),L.push(C.lightMapUv),L.push(C.aoMapUv),L.push(C.bumpMapUv),L.push(C.normalMapUv),L.push(C.displacementMapUv),L.push(C.emissiveMapUv),L.push(C.metalnessMapUv),L.push(C.roughnessMapUv),L.push(C.anisotropyMapUv),L.push(C.clearcoatMapUv),L.push(C.clearcoatNormalMapUv),L.push(C.clearcoatRoughnessMapUv),L.push(C.iridescenceMapUv),L.push(C.iridescenceThicknessMapUv),L.push(C.sheenColorMapUv),L.push(C.sheenRoughnessMapUv),L.push(C.specularMapUv),L.push(C.specularColorMapUv),L.push(C.specularIntensityMapUv),L.push(C.transmissionMapUv),L.push(C.thicknessMapUv),L.push(C.combine),L.push(C.fogExp2),L.push(C.sizeAttenuation),L.push(C.morphTargetsCount),L.push(C.morphAttributeCount),L.push(C.numDirLights),L.push(C.numPointLights),L.push(C.numSpotLights),L.push(C.numSpotLightMaps),L.push(C.numHemiLights),L.push(C.numRectAreaLights),L.push(C.numDirLightShadows),L.push(C.numPointLightShadows),L.push(C.numSpotLightShadows),L.push(C.numSpotLightShadowsWithMaps),L.push(C.numLightProbes),L.push(C.shadowMapType),L.push(C.toneMapping),L.push(C.numClippingPlanes),L.push(C.numClipIntersection),L.push(C.depthPacking)}function M(L,C){u.disableAll(),C.supportsVertexTextures&&u.enable(0),C.instancing&&u.enable(1),C.instancingColor&&u.enable(2),C.instancingMorph&&u.enable(3),C.matcap&&u.enable(4),C.envMap&&u.enable(5),C.normalMapObjectSpace&&u.enable(6),C.normalMapTangentSpace&&u.enable(7),C.clearcoat&&u.enable(8),C.iridescence&&u.enable(9),C.alphaTest&&u.enable(10),C.vertexColors&&u.enable(11),C.vertexAlphas&&u.enable(12),C.vertexUv1s&&u.enable(13),C.vertexUv2s&&u.enable(14),C.vertexUv3s&&u.enable(15),C.vertexTangents&&u.enable(16),C.anisotropy&&u.enable(17),C.alphaHash&&u.enable(18),C.batching&&u.enable(19),C.dispersion&&u.enable(20),C.batchingColor&&u.enable(21),L.push(u.mask),u.disableAll(),C.fog&&u.enable(0),C.useFog&&u.enable(1),C.flatShading&&u.enable(2),C.logarithmicDepthBuffer&&u.enable(3),C.reverseDepthBuffer&&u.enable(4),C.skinning&&u.enable(5),C.morphTargets&&u.enable(6),C.morphNormals&&u.enable(7),C.morphColors&&u.enable(8),C.premultipliedAlpha&&u.enable(9),C.shadowMapEnabled&&u.enable(10),C.doubleSided&&u.enable(11),C.flipSided&&u.enable(12),C.useDepthPacking&&u.enable(13),C.dithering&&u.enable(14),C.transmission&&u.enable(15),C.sheen&&u.enable(16),C.opaque&&u.enable(17),C.pointsUvs&&u.enable(18),C.decodeVideoTexture&&u.enable(19),C.decodeVideoTextureEmissive&&u.enable(20),C.alphaToCoverage&&u.enable(21),L.push(u.mask)}function w(L){const C=S[L.type];let k;if(C){const ae=yr[C];k=bD.clone(ae.uniforms)}else k=L.uniforms;return k}function F(L,C){let k;for(let ae=0,ee=p.length;ae<ee;ae++){const he=p[ae];if(he.cacheKey===C){k=he,++k.usedTimes;break}}return k===void 0&&(k=new ZN(t,C,L,o),p.push(k)),k}function U(L){if(--L.usedTimes===0){const C=p.indexOf(L);p[C]=p[p.length-1],p.pop(),L.destroy()}}function I(L){f.remove(L)}function O(){f.dispose()}return{getParameters:x,getProgramCacheKey:d,getUniforms:w,acquireProgram:F,releaseProgram:U,releaseShaderCache:I,programs:p,dispose:O}}function nF(){let t=new WeakMap;function e(l){return t.has(l)}function n(l){let u=t.get(l);return u===void 0&&(u={},t.set(l,u)),u}function i(l){t.delete(l)}function s(l,u,f){t.get(l)[u]=f}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:o}}function iF(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Fy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Oy(){const t=[];let e=0;const n=[],i=[],s=[];function o(){e=0,n.length=0,i.length=0,s.length=0}function l(_,g,v,S,T,x){let d=t[e];return d===void 0?(d={id:_.id,object:_,geometry:g,material:v,groupOrder:S,renderOrder:_.renderOrder,z:T,group:x},t[e]=d):(d.id=_.id,d.object=_,d.geometry=g,d.material=v,d.groupOrder=S,d.renderOrder=_.renderOrder,d.z=T,d.group=x),e++,d}function u(_,g,v,S,T,x){const d=l(_,g,v,S,T,x);v.transmission>0?i.push(d):v.transparent===!0?s.push(d):n.push(d)}function f(_,g,v,S,T,x){const d=l(_,g,v,S,T,x);v.transmission>0?i.unshift(d):v.transparent===!0?s.unshift(d):n.unshift(d)}function h(_,g){n.length>1&&n.sort(_||iF),i.length>1&&i.sort(g||Fy),s.length>1&&s.sort(g||Fy)}function p(){for(let _=e,g=t.length;_<g;_++){const v=t[_];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:o,push:u,unshift:f,finish:p,sort:h}}function rF(){let t=new WeakMap;function e(i,s){const o=t.get(i);let l;return o===void 0?(l=new Oy,t.set(i,[l])):s>=o.length?(l=new Oy,o.push(l)):l=o[s],l}function n(){t=new WeakMap}return{get:e,dispose:n}}function sF(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new Dt};break;case"SpotLight":n={position:new $,direction:new $,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":n={color:new Dt,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function oF(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let aF=0;function lF(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function uF(t){const e=new sF,n=oF(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new $);const s=new $,o=new fn,l=new fn;function u(h){let p=0,_=0,g=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let v=0,S=0,T=0,x=0,d=0,E=0,M=0,w=0,F=0,U=0,I=0;h.sort(lF);for(let L=0,C=h.length;L<C;L++){const k=h[L],ae=k.color,ee=k.intensity,he=k.distance,ve=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)p+=ae.r*ee,_+=ae.g*ee,g+=ae.b*ee;else if(k.isLightProbe){for(let le=0;le<9;le++)i.probe[le].addScaledVector(k.sh.coefficients[le],ee);I++}else if(k.isDirectionalLight){const le=e.get(k);if(le.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const pe=k.shadow,H=n.get(k);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,i.directionalShadow[v]=H,i.directionalShadowMap[v]=ve,i.directionalShadowMatrix[v]=k.shadow.matrix,E++}i.directional[v]=le,v++}else if(k.isSpotLight){const le=e.get(k);le.position.setFromMatrixPosition(k.matrixWorld),le.color.copy(ae).multiplyScalar(ee),le.distance=he,le.coneCos=Math.cos(k.angle),le.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),le.decay=k.decay,i.spot[T]=le;const pe=k.shadow;if(k.map&&(i.spotLightMap[F]=k.map,F++,pe.updateMatrices(k),k.castShadow&&U++),i.spotLightMatrix[T]=pe.matrix,k.castShadow){const H=n.get(k);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,i.spotShadow[T]=H,i.spotShadowMap[T]=ve,w++}T++}else if(k.isRectAreaLight){const le=e.get(k);le.color.copy(ae).multiplyScalar(ee),le.halfWidth.set(k.width*.5,0,0),le.halfHeight.set(0,k.height*.5,0),i.rectArea[x]=le,x++}else if(k.isPointLight){const le=e.get(k);if(le.color.copy(k.color).multiplyScalar(k.intensity),le.distance=k.distance,le.decay=k.decay,k.castShadow){const pe=k.shadow,H=n.get(k);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,H.shadowCameraNear=pe.camera.near,H.shadowCameraFar=pe.camera.far,i.pointShadow[S]=H,i.pointShadowMap[S]=ve,i.pointShadowMatrix[S]=k.shadow.matrix,M++}i.point[S]=le,S++}else if(k.isHemisphereLight){const le=e.get(k);le.skyColor.copy(k.color).multiplyScalar(ee),le.groundColor.copy(k.groundColor).multiplyScalar(ee),i.hemi[d]=le,d++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=_,i.ambient[2]=g;const O=i.hash;(O.directionalLength!==v||O.pointLength!==S||O.spotLength!==T||O.rectAreaLength!==x||O.hemiLength!==d||O.numDirectionalShadows!==E||O.numPointShadows!==M||O.numSpotShadows!==w||O.numSpotMaps!==F||O.numLightProbes!==I)&&(i.directional.length=v,i.spot.length=T,i.rectArea.length=x,i.point.length=S,i.hemi.length=d,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+F-U,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=I,O.directionalLength=v,O.pointLength=S,O.spotLength=T,O.rectAreaLength=x,O.hemiLength=d,O.numDirectionalShadows=E,O.numPointShadows=M,O.numSpotShadows=w,O.numSpotMaps=F,O.numLightProbes=I,i.version=aF++)}function f(h,p){let _=0,g=0,v=0,S=0,T=0;const x=p.matrixWorldInverse;for(let d=0,E=h.length;d<E;d++){const M=h[d];if(M.isDirectionalLight){const w=i.directional[_];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),_++}else if(M.isSpotLight){const w=i.spot[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),v++}else if(M.isRectAreaLight){const w=i.rectArea[S];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(x),l.identity(),o.copy(M.matrixWorld),o.premultiply(x),l.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(l),w.halfHeight.applyMatrix4(l),S++}else if(M.isPointLight){const w=i.point[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(x),g++}else if(M.isHemisphereLight){const w=i.hemi[T];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(x),T++}}}return{setup:u,setupView:f,state:i}}function By(t){const e=new uF(t),n=[],i=[];function s(p){h.camera=p,n.length=0,i.length=0}function o(p){n.push(p)}function l(p){i.push(p)}function u(){e.setup(n)}function f(p){e.setupView(n,p)}const h={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:u,setupLightsView:f,pushLight:o,pushShadow:l}}function cF(t){let e=new WeakMap;function n(s,o=0){const l=e.get(s);let u;return l===void 0?(u=new By(t),e.set(s,[u])):o>=l.length?(u=new By(t),l.push(u)):u=l[o],u}function i(){e=new WeakMap}return{get:n,dispose:i}}const fF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hF=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dF(t,e,n){let i=new w1;const s=new mt,o=new mt,l=new cn,u=new zD({depthPacking:FL}),f=new kD,h={},p=n.maxTextureSize,_={[ks]:fi,[fi]:ks,[Er]:Er},g=new Hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:fF,fragmentShader:hF}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const S=new dr;S.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Tr(S,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=t1;let d=this.type;this.render=function(U,I,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||U.length===0)return;const L=t.getRenderTarget(),C=t.getActiveCubeFace(),k=t.getActiveMipmapLevel(),ae=t.state;ae.setBlending(Fs),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ee=d!==Hr&&this.type===Hr,he=d===Hr&&this.type!==Hr;for(let ve=0,le=U.length;ve<le;ve++){const pe=U[ve],H=pe.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ie=H.getFrameExtents();if(s.multiply(ie),o.copy(H.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/ie.x),s.x=o.x*ie.x,H.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/ie.y),s.y=o.y*ie.y,H.mapSize.y=o.y)),H.map===null||ee===!0||he===!0){const Ae=this.type!==Hr?{minFilter:hr,magFilter:hr}:{};H.map!==null&&H.map.dispose(),H.map=new Co(s.x,s.y,Ae),H.map.texture.name=pe.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const de=H.getViewportCount();for(let Ae=0;Ae<de;Ae++){const Ee=H.getViewport(Ae);l.set(o.x*Ee.x,o.y*Ee.y,o.x*Ee.z,o.y*Ee.w),ae.viewport(l),H.updateMatrices(pe,Ae),i=H.getFrustum(),w(I,O,H.camera,pe,this.type)}H.isPointLightShadow!==!0&&this.type===Hr&&E(H,O),H.needsUpdate=!1}d=this.type,x.needsUpdate=!1,t.setRenderTarget(L,C,k)};function E(U,I){const O=e.update(T);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,v.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Co(s.x,s.y)),g.uniforms.shadow_pass.value=U.map.texture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,t.setRenderTarget(U.mapPass),t.clear(),t.renderBufferDirect(I,null,O,g,T,null),v.uniforms.shadow_pass.value=U.mapPass.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,t.setRenderTarget(U.map),t.clear(),t.renderBufferDirect(I,null,O,v,T,null)}function M(U,I,O,L){let C=null;const k=O.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(k!==void 0)C=k;else if(C=O.isPointLight===!0?f:u,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ae=C.uuid,ee=I.uuid;let he=h[ae];he===void 0&&(he={},h[ae]=he);let ve=he[ee];ve===void 0&&(ve=C.clone(),he[ee]=ve,I.addEventListener("dispose",F)),C=ve}if(C.visible=I.visible,C.wireframe=I.wireframe,L===Hr?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:_[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,O.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ae=t.properties.get(C);ae.light=O}return C}function w(U,I,O,L,C){if(U.visible===!1)return;if(U.layers.test(I.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&C===Hr)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,U.matrixWorld);const ee=e.update(U),he=U.material;if(Array.isArray(he)){const ve=ee.groups;for(let le=0,pe=ve.length;le<pe;le++){const H=ve[le],ie=he[H.materialIndex];if(ie&&ie.visible){const de=M(U,ie,L,C);U.onBeforeShadow(t,U,I,O,ee,de,H),t.renderBufferDirect(O,null,ee,de,U,H),U.onAfterShadow(t,U,I,O,ee,de,H)}}}else if(he.visible){const ve=M(U,he,L,C);U.onBeforeShadow(t,U,I,O,ee,ve,null),t.renderBufferDirect(O,null,ee,ve,U,null),U.onAfterShadow(t,U,I,O,ee,ve,null)}}const ae=U.children;for(let ee=0,he=ae.length;ee<he;ee++)w(ae[ee],I,O,L,C)}function F(U){U.target.removeEventListener("dispose",F);for(const O in h){const L=h[O],C=U.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}const pF={[Tm]:wm,[Am]:Pm,[Rm]:bm,[Wa]:Cm,[wm]:Tm,[Pm]:Am,[bm]:Rm,[Cm]:Wa};function mF(t,e){function n(){let G=!1;const be=new cn;let re=null;const me=new cn(0,0,0,0);return{setMask:function(Ie){re!==Ie&&!G&&(t.colorMask(Ie,Ie,Ie,Ie),re=Ie)},setLocked:function(Ie){G=Ie},setClear:function(Ie,De,ot,qt,pn){pn===!0&&(Ie*=qt,De*=qt,ot*=qt),be.set(Ie,De,ot,qt),me.equals(be)===!1&&(t.clearColor(Ie,De,ot,qt),me.copy(be))},reset:function(){G=!1,re=null,me.set(-1,0,0,0)}}}function i(){let G=!1,be=!1,re=null,me=null,Ie=null;return{setReversed:function(De){if(be!==De){const ot=e.get("EXT_clip_control");be?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const qt=Ie;Ie=null,this.setClear(qt)}be=De},getReversed:function(){return be},setTest:function(De){De?q(t.DEPTH_TEST):ge(t.DEPTH_TEST)},setMask:function(De){re!==De&&!G&&(t.depthMask(De),re=De)},setFunc:function(De){if(be&&(De=pF[De]),me!==De){switch(De){case Tm:t.depthFunc(t.NEVER);break;case wm:t.depthFunc(t.ALWAYS);break;case Am:t.depthFunc(t.LESS);break;case Wa:t.depthFunc(t.LEQUAL);break;case Rm:t.depthFunc(t.EQUAL);break;case Cm:t.depthFunc(t.GEQUAL);break;case Pm:t.depthFunc(t.GREATER);break;case bm:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=De}},setLocked:function(De){G=De},setClear:function(De){Ie!==De&&(be&&(De=1-De),t.clearDepth(De),Ie=De)},reset:function(){G=!1,re=null,me=null,Ie=null,be=!1}}}function s(){let G=!1,be=null,re=null,me=null,Ie=null,De=null,ot=null,qt=null,pn=null;return{setTest:function(Pt){G||(Pt?q(t.STENCIL_TEST):ge(t.STENCIL_TEST))},setMask:function(Pt){be!==Pt&&!G&&(t.stencilMask(Pt),be=Pt)},setFunc:function(Pt,pi,ji){(re!==Pt||me!==pi||Ie!==ji)&&(t.stencilFunc(Pt,pi,ji),re=Pt,me=pi,Ie=ji)},setOp:function(Pt,pi,ji){(De!==Pt||ot!==pi||qt!==ji)&&(t.stencilOp(Pt,pi,ji),De=Pt,ot=pi,qt=ji)},setLocked:function(Pt){G=Pt},setClear:function(Pt){pn!==Pt&&(t.clearStencil(Pt),pn=Pt)},reset:function(){G=!1,be=null,re=null,me=null,Ie=null,De=null,ot=null,qt=null,pn=null}}}const o=new n,l=new i,u=new s,f=new WeakMap,h=new WeakMap;let p={},_={},g=new WeakMap,v=[],S=null,T=!1,x=null,d=null,E=null,M=null,w=null,F=null,U=null,I=new Dt(0,0,0),O=0,L=!1,C=null,k=null,ae=null,ee=null,he=null;const ve=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,pe=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(H)[1]),le=pe>=1):H.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),le=pe>=2);let ie=null,de={};const Ae=t.getParameter(t.SCISSOR_BOX),Ee=t.getParameter(t.VIEWPORT),Se=new cn().fromArray(Ae),V=new cn().fromArray(Ee);function Z(G,be,re,me){const Ie=new Uint8Array(4),De=t.createTexture();t.bindTexture(G,De),t.texParameteri(G,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(G,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ot=0;ot<re;ot++)G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY?t.texImage3D(be,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,Ie):t.texImage2D(be+ot,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ie);return De}const se={};se[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),q(t.DEPTH_TEST),l.setFunc(Wa),dt(!1),it(Bx),q(t.CULL_FACE),B(Fs);function q(G){p[G]!==!0&&(t.enable(G),p[G]=!0)}function ge(G){p[G]!==!1&&(t.disable(G),p[G]=!1)}function qe(G,be){return _[G]!==be?(t.bindFramebuffer(G,be),_[G]=be,G===t.DRAW_FRAMEBUFFER&&(_[t.FRAMEBUFFER]=be),G===t.FRAMEBUFFER&&(_[t.DRAW_FRAMEBUFFER]=be),!0):!1}function Ke(G,be){let re=v,me=!1;if(G){re=g.get(be),re===void 0&&(re=[],g.set(be,re));const Ie=G.textures;if(re.length!==Ie.length||re[0]!==t.COLOR_ATTACHMENT0){for(let De=0,ot=Ie.length;De<ot;De++)re[De]=t.COLOR_ATTACHMENT0+De;re.length=Ie.length,me=!0}}else re[0]!==t.BACK&&(re[0]=t.BACK,me=!0);me&&t.drawBuffers(re)}function wt(G){return S!==G?(t.useProgram(G),S=G,!0):!1}const Je={[ho]:t.FUNC_ADD,[lL]:t.FUNC_SUBTRACT,[uL]:t.FUNC_REVERSE_SUBTRACT};Je[cL]=t.MIN,Je[fL]=t.MAX;const Ht={[hL]:t.ZERO,[dL]:t.ONE,[pL]:t.SRC_COLOR,[Em]:t.SRC_ALPHA,[yL]:t.SRC_ALPHA_SATURATE,[vL]:t.DST_COLOR,[gL]:t.DST_ALPHA,[mL]:t.ONE_MINUS_SRC_COLOR,[Mm]:t.ONE_MINUS_SRC_ALPHA,[xL]:t.ONE_MINUS_DST_COLOR,[_L]:t.ONE_MINUS_DST_ALPHA,[SL]:t.CONSTANT_COLOR,[EL]:t.ONE_MINUS_CONSTANT_COLOR,[ML]:t.CONSTANT_ALPHA,[TL]:t.ONE_MINUS_CONSTANT_ALPHA};function B(G,be,re,me,Ie,De,ot,qt,pn,Pt){if(G===Fs){T===!0&&(ge(t.BLEND),T=!1);return}if(T===!1&&(q(t.BLEND),T=!0),G!==aL){if(G!==x||Pt!==L){if((d!==ho||w!==ho)&&(t.blendEquation(t.FUNC_ADD),d=ho,w=ho),Pt)switch(G){case Ua:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zx:t.blendFunc(t.ONE,t.ONE);break;case kx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hx:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ua:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zx:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case kx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hx:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}E=null,M=null,F=null,U=null,I.set(0,0,0),O=0,x=G,L=Pt}return}Ie=Ie||be,De=De||re,ot=ot||me,(be!==d||Ie!==w)&&(t.blendEquationSeparate(Je[be],Je[Ie]),d=be,w=Ie),(re!==E||me!==M||De!==F||ot!==U)&&(t.blendFuncSeparate(Ht[re],Ht[me],Ht[De],Ht[ot]),E=re,M=me,F=De,U=ot),(qt.equals(I)===!1||pn!==O)&&(t.blendColor(qt.r,qt.g,qt.b,pn),I.copy(qt),O=pn),x=G,L=!1}function sn(G,be){G.side===Er?ge(t.CULL_FACE):q(t.CULL_FACE);let re=G.side===fi;be&&(re=!re),dt(re),G.blending===Ua&&G.transparent===!1?B(Fs):B(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),o.setMask(G.colorWrite);const me=G.stencilWrite;u.setTest(me),me&&(u.setMask(G.stencilWriteMask),u.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),u.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Bt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?q(t.SAMPLE_ALPHA_TO_COVERAGE):ge(t.SAMPLE_ALPHA_TO_COVERAGE)}function dt(G){C!==G&&(G?t.frontFace(t.CW):t.frontFace(t.CCW),C=G)}function it(G){G!==rL?(q(t.CULL_FACE),G!==k&&(G===Bx?t.cullFace(t.BACK):G===sL?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ge(t.CULL_FACE),k=G}function We(G){G!==ae&&(le&&t.lineWidth(G),ae=G)}function Bt(G,be,re){G?(q(t.POLYGON_OFFSET_FILL),(ee!==be||he!==re)&&(t.polygonOffset(be,re),ee=be,he=re)):ge(t.POLYGON_OFFSET_FILL)}function Ge(G){G?q(t.SCISSOR_TEST):ge(t.SCISSOR_TEST)}function D(G){G===void 0&&(G=t.TEXTURE0+ve-1),ie!==G&&(t.activeTexture(G),ie=G)}function A(G,be,re){re===void 0&&(ie===null?re=t.TEXTURE0+ve-1:re=ie);let me=de[re];me===void 0&&(me={type:void 0,texture:void 0},de[re]=me),(me.type!==G||me.texture!==be)&&(ie!==re&&(t.activeTexture(re),ie=re),t.bindTexture(G,be||se[G]),me.type=G,me.texture=be)}function K(){const G=de[ie];G!==void 0&&G.type!==void 0&&(t.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function _e(){try{t.compressedTexImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{t.texSubImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{t.texSubImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _t(){try{t.texStorage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{t.texStorage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{t.texImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function je(){try{t.texImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(G){Se.equals(G)===!1&&(t.scissor(G.x,G.y,G.z,G.w),Se.copy(G))}function Fe(G){V.equals(G)===!1&&(t.viewport(G.x,G.y,G.z,G.w),V.copy(G))}function pt(G,be){let re=h.get(be);re===void 0&&(re=new WeakMap,h.set(be,re));let me=re.get(G);me===void 0&&(me=t.getUniformBlockIndex(be,G.name),re.set(G,me))}function rt(G,be){const me=h.get(be).get(G);f.get(be)!==me&&(t.uniformBlockBinding(be,me,G.__bindingPointIndex),f.set(be,me))}function Nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),l.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},ie=null,de={},_={},g=new WeakMap,v=[],S=null,T=!1,x=null,d=null,E=null,M=null,w=null,F=null,U=null,I=new Dt(0,0,0),O=0,L=!1,C=null,k=null,ae=null,ee=null,he=null,Se.set(0,0,t.canvas.width,t.canvas.height),V.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:q,disable:ge,bindFramebuffer:qe,drawBuffers:Ke,useProgram:wt,setBlending:B,setMaterial:sn,setFlipSided:dt,setCullFace:it,setLineWidth:We,setPolygonOffset:Bt,setScissorTest:Ge,activeTexture:D,bindTexture:A,unbindTexture:K,compressedTexImage2D:_e,compressedTexImage3D:xe,texImage2D:Ne,texImage3D:je,updateUBOMapping:pt,uniformBlockBinding:rt,texStorage2D:_t,texStorage3D:we,texSubImage2D:ce,texSubImage3D:He,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ue,scissor:et,viewport:Fe,reset:Nt}}function gF(t,e,n,i,s,o,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new mt,p=new WeakMap;let _;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(D,A){return v?new OffscreenCanvas(D,A):jf("canvas")}function T(D,A,K){let _e=1;const xe=Ge(D);if((xe.width>K||xe.height>K)&&(_e=K/Math.max(xe.width,xe.height)),_e<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(_e*xe.width),He=Math.floor(_e*xe.height);_===void 0&&(_=S(ce,He));const Re=A?S(ce,He):_;return Re.width=ce,Re.height=He,Re.getContext("2d").drawImage(D,0,0,ce,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ce+"x"+He+")."),Re}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function x(D){return D.generateMipmaps}function d(D){t.generateMipmap(D)}function E(D){return D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?t.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(D,A,K,_e,xe=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=A;if(A===t.RED&&(K===t.FLOAT&&(ce=t.R32F),K===t.HALF_FLOAT&&(ce=t.R16F),K===t.UNSIGNED_BYTE&&(ce=t.R8)),A===t.RED_INTEGER&&(K===t.UNSIGNED_BYTE&&(ce=t.R8UI),K===t.UNSIGNED_SHORT&&(ce=t.R16UI),K===t.UNSIGNED_INT&&(ce=t.R32UI),K===t.BYTE&&(ce=t.R8I),K===t.SHORT&&(ce=t.R16I),K===t.INT&&(ce=t.R32I)),A===t.RG&&(K===t.FLOAT&&(ce=t.RG32F),K===t.HALF_FLOAT&&(ce=t.RG16F),K===t.UNSIGNED_BYTE&&(ce=t.RG8)),A===t.RG_INTEGER&&(K===t.UNSIGNED_BYTE&&(ce=t.RG8UI),K===t.UNSIGNED_SHORT&&(ce=t.RG16UI),K===t.UNSIGNED_INT&&(ce=t.RG32UI),K===t.BYTE&&(ce=t.RG8I),K===t.SHORT&&(ce=t.RG16I),K===t.INT&&(ce=t.RG32I)),A===t.RGB_INTEGER&&(K===t.UNSIGNED_BYTE&&(ce=t.RGB8UI),K===t.UNSIGNED_SHORT&&(ce=t.RGB16UI),K===t.UNSIGNED_INT&&(ce=t.RGB32UI),K===t.BYTE&&(ce=t.RGB8I),K===t.SHORT&&(ce=t.RGB16I),K===t.INT&&(ce=t.RGB32I)),A===t.RGBA_INTEGER&&(K===t.UNSIGNED_BYTE&&(ce=t.RGBA8UI),K===t.UNSIGNED_SHORT&&(ce=t.RGBA16UI),K===t.UNSIGNED_INT&&(ce=t.RGBA32UI),K===t.BYTE&&(ce=t.RGBA8I),K===t.SHORT&&(ce=t.RGBA16I),K===t.INT&&(ce=t.RGBA32I)),A===t.RGB&&K===t.UNSIGNED_INT_5_9_9_9_REV&&(ce=t.RGB9_E5),A===t.RGBA){const He=xe?Xf:Ct.getTransfer(_e);K===t.FLOAT&&(ce=t.RGBA32F),K===t.HALF_FLOAT&&(ce=t.RGBA16F),K===t.UNSIGNED_BYTE&&(ce=He===Ft?t.SRGB8_ALPHA8:t.RGBA8),K===t.UNSIGNED_SHORT_4_4_4_4&&(ce=t.RGBA4),K===t.UNSIGNED_SHORT_5_5_5_1&&(ce=t.RGB5_A1)}return(ce===t.R16F||ce===t.R32F||ce===t.RG16F||ce===t.RG32F||ce===t.RGBA16F||ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function w(D,A){let K;return D?A===null||A===Ro||A===ja?K=t.DEPTH24_STENCIL8:A===Yr?K=t.DEPTH32F_STENCIL8:A===fu&&(K=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ro||A===ja?K=t.DEPTH_COMPONENT24:A===Yr?K=t.DEPTH_COMPONENT32F:A===fu&&(K=t.DEPTH_COMPONENT16),K}function F(D,A){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==hr&&D.minFilter!==Mr?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function U(D){const A=D.target;A.removeEventListener("dispose",U),O(A),A.isVideoTexture&&p.delete(A)}function I(D){const A=D.target;A.removeEventListener("dispose",I),C(A)}function O(D){const A=i.get(D);if(A.__webglInit===void 0)return;const K=D.source,_e=g.get(K);if(_e){const xe=_e[A.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&L(D),Object.keys(_e).length===0&&g.delete(K)}i.remove(D)}function L(D){const A=i.get(D);t.deleteTexture(A.__webglTexture);const K=D.source,_e=g.get(K);delete _e[A.__cacheKey],l.memory.textures--}function C(D){const A=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(A.__webglFramebuffer[_e]))for(let xe=0;xe<A.__webglFramebuffer[_e].length;xe++)t.deleteFramebuffer(A.__webglFramebuffer[_e][xe]);else t.deleteFramebuffer(A.__webglFramebuffer[_e]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[_e])}else{if(Array.isArray(A.__webglFramebuffer))for(let _e=0;_e<A.__webglFramebuffer.length;_e++)t.deleteFramebuffer(A.__webglFramebuffer[_e]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _e=0;_e<A.__webglColorRenderbuffer.length;_e++)A.__webglColorRenderbuffer[_e]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[_e]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const K=D.textures;for(let _e=0,xe=K.length;_e<xe;_e++){const ce=i.get(K[_e]);ce.__webglTexture&&(t.deleteTexture(ce.__webglTexture),l.memory.textures--),i.remove(K[_e])}i.remove(D)}let k=0;function ae(){k=0}function ee(){const D=k;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),k+=1,D}function he(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function ve(D,A){const K=i.get(D);if(D.isVideoTexture&&We(D),D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){const _e=D.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(K,D,A);return}}n.bindTexture(t.TEXTURE_2D,K.__webglTexture,t.TEXTURE0+A)}function le(D,A){const K=i.get(D);if(D.version>0&&K.__version!==D.version){V(K,D,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,K.__webglTexture,t.TEXTURE0+A)}function pe(D,A){const K=i.get(D);if(D.version>0&&K.__version!==D.version){V(K,D,A);return}n.bindTexture(t.TEXTURE_3D,K.__webglTexture,t.TEXTURE0+A)}function H(D,A){const K=i.get(D);if(D.version>0&&K.__version!==D.version){Z(K,D,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture,t.TEXTURE0+A)}const ie={[Im]:t.REPEAT,[vo]:t.CLAMP_TO_EDGE,[Um]:t.MIRRORED_REPEAT},de={[hr]:t.NEAREST,[UL]:t.NEAREST_MIPMAP_NEAREST,[Lc]:t.NEAREST_MIPMAP_LINEAR,[Mr]:t.LINEAR,[Jd]:t.LINEAR_MIPMAP_NEAREST,[xo]:t.LINEAR_MIPMAP_LINEAR},Ae={[zL]:t.NEVER,[XL]:t.ALWAYS,[kL]:t.LESS,[p1]:t.LEQUAL,[HL]:t.EQUAL,[WL]:t.GEQUAL,[VL]:t.GREATER,[GL]:t.NOTEQUAL};function Ee(D,A){if(A.type===Yr&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Mr||A.magFilter===Jd||A.magFilter===Lc||A.magFilter===xo||A.minFilter===Mr||A.minFilter===Jd||A.minFilter===Lc||A.minFilter===xo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,ie[A.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,ie[A.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,ie[A.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,de[A.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,de[A.minFilter]),A.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,Ae[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===hr||A.minFilter!==Lc&&A.minFilter!==xo||A.type===Yr&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Se(D,A){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",U));const _e=A.source;let xe=g.get(_e);xe===void 0&&(xe={},g.set(_e,xe));const ce=he(A);if(ce!==D.__cacheKey){xe[ce]===void 0&&(xe[ce]={texture:t.createTexture(),usedTimes:0},l.memory.textures++,K=!0),xe[ce].usedTimes++;const He=xe[D.__cacheKey];He!==void 0&&(xe[D.__cacheKey].usedTimes--,He.usedTimes===0&&L(A)),D.__cacheKey=ce,D.__webglTexture=xe[ce].texture}return K}function V(D,A,K){let _e=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_e=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_e=t.TEXTURE_3D);const xe=Se(D,A),ce=A.source;n.bindTexture(_e,D.__webglTexture,t.TEXTURE0+K);const He=i.get(ce);if(ce.version!==He.__version||xe===!0){n.activeTexture(t.TEXTURE0+K);const Re=Ct.getPrimaries(Ct.workingColorSpace),Ue=A.colorSpace===ws?null:Ct.getPrimaries(A.colorSpace),_t=A.colorSpace===ws||Re===Ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let we=T(A.image,!1,s.maxTextureSize);we=Bt(A,we);const Ne=o.convert(A.format,A.colorSpace),je=o.convert(A.type);let et=M(A.internalFormat,Ne,je,A.colorSpace,A.isVideoTexture);Ee(_e,A);let Fe;const pt=A.mipmaps,rt=A.isVideoTexture!==!0,Nt=He.__version===void 0||xe===!0,G=ce.dataReady,be=F(A,we);if(A.isDepthTexture)et=w(A.format===qa,A.type),Nt&&(rt?n.texStorage2D(t.TEXTURE_2D,1,et,we.width,we.height):n.texImage2D(t.TEXTURE_2D,0,et,we.width,we.height,0,Ne,je,null));else if(A.isDataTexture)if(pt.length>0){rt&&Nt&&n.texStorage2D(t.TEXTURE_2D,be,et,pt[0].width,pt[0].height);for(let re=0,me=pt.length;re<me;re++)Fe=pt[re],rt?G&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,Fe.width,Fe.height,Ne,je,Fe.data):n.texImage2D(t.TEXTURE_2D,re,et,Fe.width,Fe.height,0,Ne,je,Fe.data);A.generateMipmaps=!1}else rt?(Nt&&n.texStorage2D(t.TEXTURE_2D,be,et,we.width,we.height),G&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,we.width,we.height,Ne,je,we.data)):n.texImage2D(t.TEXTURE_2D,0,et,we.width,we.height,0,Ne,je,we.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){rt&&Nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,et,pt[0].width,pt[0].height,we.depth);for(let re=0,me=pt.length;re<me;re++)if(Fe=pt[re],A.format!==ur)if(Ne!==null)if(rt){if(G)if(A.layerUpdates.size>0){const Ie=py(Fe.width,Fe.height,A.format,A.type);for(const De of A.layerUpdates){const ot=Fe.data.subarray(De*Ie/Fe.data.BYTES_PER_ELEMENT,(De+1)*Ie/Fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,De,Fe.width,Fe.height,1,Ne,ot)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,Fe.width,Fe.height,we.depth,Ne,Fe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,et,Fe.width,Fe.height,we.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?G&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,Fe.width,Fe.height,we.depth,Ne,je,Fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,et,Fe.width,Fe.height,we.depth,0,Ne,je,Fe.data)}else{rt&&Nt&&n.texStorage2D(t.TEXTURE_2D,be,et,pt[0].width,pt[0].height);for(let re=0,me=pt.length;re<me;re++)Fe=pt[re],A.format!==ur?Ne!==null?rt?G&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,Fe.width,Fe.height,Ne,Fe.data):n.compressedTexImage2D(t.TEXTURE_2D,re,et,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?G&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,Fe.width,Fe.height,Ne,je,Fe.data):n.texImage2D(t.TEXTURE_2D,re,et,Fe.width,Fe.height,0,Ne,je,Fe.data)}else if(A.isDataArrayTexture)if(rt){if(Nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,et,we.width,we.height,we.depth),G)if(A.layerUpdates.size>0){const re=py(we.width,we.height,A.format,A.type);for(const me of A.layerUpdates){const Ie=we.data.subarray(me*re/we.data.BYTES_PER_ELEMENT,(me+1)*re/we.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,we.width,we.height,1,Ne,je,Ie)}A.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ne,je,we.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,et,we.width,we.height,we.depth,0,Ne,je,we.data);else if(A.isData3DTexture)rt?(Nt&&n.texStorage3D(t.TEXTURE_3D,be,et,we.width,we.height,we.depth),G&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ne,je,we.data)):n.texImage3D(t.TEXTURE_3D,0,et,we.width,we.height,we.depth,0,Ne,je,we.data);else if(A.isFramebufferTexture){if(Nt)if(rt)n.texStorage2D(t.TEXTURE_2D,be,et,we.width,we.height);else{let re=we.width,me=we.height;for(let Ie=0;Ie<be;Ie++)n.texImage2D(t.TEXTURE_2D,Ie,et,re,me,0,Ne,je,null),re>>=1,me>>=1}}else if(pt.length>0){if(rt&&Nt){const re=Ge(pt[0]);n.texStorage2D(t.TEXTURE_2D,be,et,re.width,re.height)}for(let re=0,me=pt.length;re<me;re++)Fe=pt[re],rt?G&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,Ne,je,Fe):n.texImage2D(t.TEXTURE_2D,re,et,Ne,je,Fe);A.generateMipmaps=!1}else if(rt){if(Nt){const re=Ge(we);n.texStorage2D(t.TEXTURE_2D,be,et,re.width,re.height)}G&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ne,je,we)}else n.texImage2D(t.TEXTURE_2D,0,et,Ne,je,we);x(A)&&d(_e),He.__version=ce.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Z(D,A,K){if(A.image.length!==6)return;const _e=Se(D,A),xe=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+K);const ce=i.get(xe);if(xe.version!==ce.__version||_e===!0){n.activeTexture(t.TEXTURE0+K);const He=Ct.getPrimaries(Ct.workingColorSpace),Re=A.colorSpace===ws?null:Ct.getPrimaries(A.colorSpace),Ue=A.colorSpace===ws||He===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const _t=A.isCompressedTexture||A.image[0].isCompressedTexture,we=A.image[0]&&A.image[0].isDataTexture,Ne=[];for(let me=0;me<6;me++)!_t&&!we?Ne[me]=T(A.image[me],!0,s.maxCubemapSize):Ne[me]=we?A.image[me].image:A.image[me],Ne[me]=Bt(A,Ne[me]);const je=Ne[0],et=o.convert(A.format,A.colorSpace),Fe=o.convert(A.type),pt=M(A.internalFormat,et,Fe,A.colorSpace),rt=A.isVideoTexture!==!0,Nt=ce.__version===void 0||_e===!0,G=xe.dataReady;let be=F(A,je);Ee(t.TEXTURE_CUBE_MAP,A);let re;if(_t){rt&&Nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,be,pt,je.width,je.height);for(let me=0;me<6;me++){re=Ne[me].mipmaps;for(let Ie=0;Ie<re.length;Ie++){const De=re[Ie];A.format!==ur?et!==null?rt?G&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,De.width,De.height,et,De.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,pt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,De.width,De.height,et,Fe,De.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,pt,De.width,De.height,0,et,Fe,De.data)}}}else{if(re=A.mipmaps,rt&&Nt){re.length>0&&be++;const me=Ge(Ne[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,be,pt,me.width,me.height)}for(let me=0;me<6;me++)if(we){rt?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ne[me].width,Ne[me].height,et,Fe,Ne[me].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,pt,Ne[me].width,Ne[me].height,0,et,Fe,Ne[me].data);for(let Ie=0;Ie<re.length;Ie++){const ot=re[Ie].image[me].image;rt?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,ot.width,ot.height,et,Fe,ot.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,pt,ot.width,ot.height,0,et,Fe,ot.data)}}else{rt?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,et,Fe,Ne[me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,pt,et,Fe,Ne[me]);for(let Ie=0;Ie<re.length;Ie++){const De=re[Ie];rt?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,et,Fe,De.image[me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,pt,et,Fe,De.image[me])}}}x(A)&&d(t.TEXTURE_CUBE_MAP),ce.__version=xe.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function se(D,A,K,_e,xe,ce){const He=o.convert(K.format,K.colorSpace),Re=o.convert(K.type),Ue=M(K.internalFormat,He,Re,K.colorSpace),_t=i.get(A),we=i.get(K);if(we.__renderTarget=A,!_t.__hasExternalTextures){const Ne=Math.max(1,A.width>>ce),je=Math.max(1,A.height>>ce);xe===t.TEXTURE_3D||xe===t.TEXTURE_2D_ARRAY?n.texImage3D(xe,ce,Ue,Ne,je,A.depth,0,He,Re,null):n.texImage2D(xe,ce,Ue,Ne,je,0,He,Re,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),it(A)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,_e,xe,we.__webglTexture,0,dt(A)):(xe===t.TEXTURE_2D||xe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,_e,xe,we.__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function q(D,A,K){if(t.bindRenderbuffer(t.RENDERBUFFER,D),A.depthBuffer){const _e=A.depthTexture,xe=_e&&_e.isDepthTexture?_e.type:null,ce=w(A.stencilBuffer,xe),He=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=dt(A);it(A)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Re,ce,A.width,A.height):K?t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,ce,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,ce,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,He,t.RENDERBUFFER,D)}else{const _e=A.textures;for(let xe=0;xe<_e.length;xe++){const ce=_e[xe],He=o.convert(ce.format,ce.colorSpace),Re=o.convert(ce.type),Ue=M(ce.internalFormat,He,Re,ce.colorSpace),_t=dt(A);K&&it(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,_t,Ue,A.width,A.height):it(A)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_t,Ue,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,Ue,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ge(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=i.get(A.depthTexture);_e.__renderTarget=A,(!_e.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ve(A.depthTexture,0);const xe=_e.__webglTexture,ce=dt(A);if(A.depthTexture.format===Na)it(A)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,xe,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,xe,0);else if(A.depthTexture.format===qa)it(A)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,xe,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function qe(D){const A=i.get(D),K=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const _e=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),_e){const xe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,_e.removeEventListener("dispose",xe)};_e.addEventListener("dispose",xe),A.__depthDisposeCallback=xe}A.__boundDepthTexture=_e}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ge(A.__webglFramebuffer,D)}else if(K){A.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[_e]),A.__webglDepthbuffer[_e]===void 0)A.__webglDepthbuffer[_e]=t.createRenderbuffer(),q(A.__webglDepthbuffer[_e],D,!1);else{const xe=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=A.__webglDepthbuffer[_e];t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,ce)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=t.createRenderbuffer(),q(A.__webglDepthbuffer,D,!1);else{const _e=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=A.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,xe),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,xe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ke(D,A,K){const _e=i.get(D);A!==void 0&&se(_e.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),K!==void 0&&qe(D)}function wt(D){const A=D.texture,K=i.get(D),_e=i.get(A);D.addEventListener("dispose",I);const xe=D.textures,ce=D.isWebGLCubeRenderTarget===!0,He=xe.length>1;if(He||(_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture()),_e.__version=A.version,l.memory.textures++),ce){K.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer[Re]=[];for(let Ue=0;Ue<A.mipmaps.length;Ue++)K.__webglFramebuffer[Re][Ue]=t.createFramebuffer()}else K.__webglFramebuffer[Re]=t.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer=[];for(let Re=0;Re<A.mipmaps.length;Re++)K.__webglFramebuffer[Re]=t.createFramebuffer()}else K.__webglFramebuffer=t.createFramebuffer();if(He)for(let Re=0,Ue=xe.length;Re<Ue;Re++){const _t=i.get(xe[Re]);_t.__webglTexture===void 0&&(_t.__webglTexture=t.createTexture(),l.memory.textures++)}if(D.samples>0&&it(D)===!1){K.__webglMultisampledFramebuffer=t.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Re=0;Re<xe.length;Re++){const Ue=xe[Re];K.__webglColorRenderbuffer[Re]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,K.__webglColorRenderbuffer[Re]);const _t=o.convert(Ue.format,Ue.colorSpace),we=o.convert(Ue.type),Ne=M(Ue.internalFormat,_t,we,Ue.colorSpace,D.isXRRenderTarget===!0),je=dt(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,Ne,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,K.__webglColorRenderbuffer[Re])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=t.createRenderbuffer(),q(K.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ce){n.bindTexture(t.TEXTURE_CUBE_MAP,_e.__webglTexture),Ee(t.TEXTURE_CUBE_MAP,A);for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)se(K.__webglFramebuffer[Re][Ue],D,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ue);else se(K.__webglFramebuffer[Re],D,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);x(A)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(He){for(let Re=0,Ue=xe.length;Re<Ue;Re++){const _t=xe[Re],we=i.get(_t);n.bindTexture(t.TEXTURE_2D,we.__webglTexture),Ee(t.TEXTURE_2D,_t),se(K.__webglFramebuffer,D,_t,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,0),x(_t)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let Re=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Re=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Re,_e.__webglTexture),Ee(Re,A),A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)se(K.__webglFramebuffer[Ue],D,A,t.COLOR_ATTACHMENT0,Re,Ue);else se(K.__webglFramebuffer,D,A,t.COLOR_ATTACHMENT0,Re,0);x(A)&&d(Re),n.unbindTexture()}D.depthBuffer&&qe(D)}function Je(D){const A=D.textures;for(let K=0,_e=A.length;K<_e;K++){const xe=A[K];if(x(xe)){const ce=E(D),He=i.get(xe).__webglTexture;n.bindTexture(ce,He),d(ce),n.unbindTexture()}}}const Ht=[],B=[];function sn(D){if(D.samples>0){if(it(D)===!1){const A=D.textures,K=D.width,_e=D.height;let xe=t.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,He=i.get(D),Re=A.length>1;if(Re)for(let Ue=0;Ue<A.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,He.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ue=0;Ue<A.length;Ue++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=t.STENCIL_BUFFER_BIT)),Re){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,He.__webglColorRenderbuffer[Ue]);const _t=i.get(A[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,_t,0)}t.blitFramebuffer(0,0,K,_e,0,0,K,_e,xe,t.NEAREST),f===!0&&(Ht.length=0,B.length=0,Ht.push(t.COLOR_ATTACHMENT0+Ue),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ht.push(ce),B.push(ce),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,B)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ht))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Re)for(let Ue=0;Ue<A.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,He.__webglColorRenderbuffer[Ue]);const _t=i.get(A[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,He.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,_t,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const A=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function dt(D){return Math.min(s.maxSamples,D.samples)}function it(D){const A=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function We(D){const A=l.render.frame;p.get(D)!==A&&(p.set(D,A),D.update())}function Bt(D,A){const K=D.colorSpace,_e=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==$a&&K!==ws&&(Ct.getTransfer(K)===Ft?(_e!==ur||xe!==ts)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),A}function Ge(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=ee,this.resetTextureUnits=ae,this.setTexture2D=ve,this.setTexture2DArray=le,this.setTexture3D=pe,this.setTextureCube=H,this.rebindTextures=Ke,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=se,this.useMultisampledRTT=it}function _F(t,e){function n(i,s=ws){let o;const l=Ct.getTransfer(s);if(i===ts)return t.UNSIGNED_BYTE;if(i===s_)return t.UNSIGNED_SHORT_4_4_4_4;if(i===o_)return t.UNSIGNED_SHORT_5_5_5_1;if(i===o1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===r1)return t.BYTE;if(i===s1)return t.SHORT;if(i===fu)return t.UNSIGNED_SHORT;if(i===r_)return t.INT;if(i===Ro)return t.UNSIGNED_INT;if(i===Yr)return t.FLOAT;if(i===vu)return t.HALF_FLOAT;if(i===a1)return t.ALPHA;if(i===l1)return t.RGB;if(i===ur)return t.RGBA;if(i===u1)return t.LUMINANCE;if(i===c1)return t.LUMINANCE_ALPHA;if(i===Na)return t.DEPTH_COMPONENT;if(i===qa)return t.DEPTH_STENCIL;if(i===f1)return t.RED;if(i===a_)return t.RED_INTEGER;if(i===h1)return t.RG;if(i===l_)return t.RG_INTEGER;if(i===u_)return t.RGBA_INTEGER;if(i===mf||i===gf||i===_f||i===vf)if(l===Ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===mf)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gf)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_f)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vf)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===mf)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gf)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_f)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vf)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nm||i===Fm||i===Om||i===Bm)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Nm)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fm)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Om)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bm)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zm||i===km||i===Hm)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===zm||i===km)return l===Ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Hm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vm||i===Gm||i===Wm||i===Xm||i===Ym||i===jm||i===qm||i===$m||i===Km||i===Zm||i===Qm||i===Jm||i===eg||i===tg)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Vm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ym)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$m)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Km)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eg)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tg)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xf||i===ng||i===ig)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===xf)return l===Ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ng)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ig)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===d1||i===rg||i===sg||i===og)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===xf)return o.COMPRESSED_RED_RGTC1_EXT;if(i===rg)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sg)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===og)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ja?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const vF={type:"move"};class Rp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,o=null,l=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const T of e.hand.values()){const x=n.getJointPose(T,i),d=this._getHandJoint(h,T);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}const p=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=p.position.distanceTo(_.position),v=.02,S=.005;h.inputState.pinching&&g>v+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=v-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(vF)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Zc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const xF=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yF=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class SF{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const s=new hi,o=e.properties.get(s);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Hs({vertexShader:xF,fragmentShader:yF,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Tr(new mh(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EF extends Do{constructor(e,n){super();const i=this;let s=null,o=1,l=null,u="local-floor",f=1,h=null,p=null,_=null,g=null,v=null,S=null;const T=new SF,x=n.getContextAttributes();let d=null,E=null;const M=[],w=[],F=new mt;let U=null;const I=new Vi;I.viewport=new cn;const O=new Vi;O.viewport=new cn;const L=[I,O],C=new VD;let k=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=M[V];return Z===void 0&&(Z=new Rp,M[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=M[V];return Z===void 0&&(Z=new Rp,M[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=M[V];return Z===void 0&&(Z=new Rp,M[V]=Z),Z.getHandSpace()};function ee(V){const Z=w.indexOf(V.inputSource);if(Z===-1)return;const se=M[Z];se!==void 0&&(se.update(V.inputSource,V.frame,h||l),se.dispatchEvent({type:V.type,data:V.inputSource}))}function he(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",he),s.removeEventListener("inputsourceschange",ve);for(let V=0;V<M.length;V++){const Z=w[V];Z!==null&&(w[V]=null,M[V].disconnect(Z))}k=null,ae=null,T.reset(),e.setRenderTarget(d),v=null,g=null,_=null,s=null,E=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){u=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(V){h=V},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return _},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",he),s.addEventListener("inputsourceschange",ve),x.xrCompatible!==!0&&await n.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(F),s.renderState.layers===void 0){const Z={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(s,n,Z),s.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),E=new Co(v.framebufferWidth,v.framebufferHeight,{format:ur,type:ts,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Z=null,se=null,q=null;x.depth&&(q=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=x.stencil?qa:Na,se=x.stencil?ja:Ro);const ge={colorFormat:n.RGBA8,depthFormat:q,scaleFactor:o};_=new XRWebGLBinding(s,n),g=_.createProjectionLayer(ge),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),E=new Co(g.textureWidth,g.textureHeight,{format:ur,type:ts,depthTexture:new R1(g.textureWidth,g.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(f),h=null,l=await s.requestReferenceSpace(u),Se.setContext(s),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ve(V){for(let Z=0;Z<V.removed.length;Z++){const se=V.removed[Z],q=w.indexOf(se);q>=0&&(w[q]=null,M[q].disconnect(se))}for(let Z=0;Z<V.added.length;Z++){const se=V.added[Z];let q=w.indexOf(se);if(q===-1){for(let qe=0;qe<M.length;qe++)if(qe>=w.length){w.push(se),q=qe;break}else if(w[qe]===null){w[qe]=se,q=qe;break}if(q===-1)break}const ge=M[q];ge&&ge.connect(se)}}const le=new $,pe=new $;function H(V,Z,se){le.setFromMatrixPosition(Z.matrixWorld),pe.setFromMatrixPosition(se.matrixWorld);const q=le.distanceTo(pe),ge=Z.projectionMatrix.elements,qe=se.projectionMatrix.elements,Ke=ge[14]/(ge[10]-1),wt=ge[14]/(ge[10]+1),Je=(ge[9]+1)/ge[5],Ht=(ge[9]-1)/ge[5],B=(ge[8]-1)/ge[0],sn=(qe[8]+1)/qe[0],dt=Ke*B,it=Ke*sn,We=q/(-B+sn),Bt=We*-B;if(Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Bt),V.translateZ(We),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),ge[10]===-1)V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Ge=Ke+We,D=wt+We,A=dt-Bt,K=it+(q-Bt),_e=Je*wt/D*Ge,xe=Ht*wt/D*Ge;V.projectionMatrix.makePerspective(A,K,_e,xe,Ge,D),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ie(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let Z=V.near,se=V.far;T.texture!==null&&(T.depthNear>0&&(Z=T.depthNear),T.depthFar>0&&(se=T.depthFar)),C.near=O.near=I.near=Z,C.far=O.far=I.far=se,(k!==C.near||ae!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,ae=C.far),I.layers.mask=V.layers.mask|2,O.layers.mask=V.layers.mask|4,C.layers.mask=I.layers.mask|O.layers.mask;const q=V.parent,ge=C.cameras;ie(C,q);for(let qe=0;qe<ge.length;qe++)ie(ge[qe],q);ge.length===2?H(C,I,O):C.projectionMatrix.copy(I.projectionMatrix),de(V,C,q)};function de(V,Z,se){se===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(se.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=hu*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(g===null&&v===null))return f},this.setFoveation=function(V){f=V,g!==null&&(g.fixedFoveation=V),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=V)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let Ae=null;function Ee(V,Z){if(p=Z.getViewerPose(h||l),S=Z,p!==null){const se=p.views;v!==null&&(e.setRenderTargetFramebuffer(E,v.framebuffer),e.setRenderTarget(E));let q=!1;se.length!==C.cameras.length&&(C.cameras.length=0,q=!0);for(let qe=0;qe<se.length;qe++){const Ke=se[qe];let wt=null;if(v!==null)wt=v.getViewport(Ke);else{const Ht=_.getViewSubImage(g,Ke);wt=Ht.viewport,qe===0&&(e.setRenderTargetTextures(E,Ht.colorTexture,g.ignoreDepthValues?void 0:Ht.depthStencilTexture),e.setRenderTarget(E))}let Je=L[qe];Je===void 0&&(Je=new Vi,Je.layers.enable(qe),Je.viewport=new cn,L[qe]=Je),Je.matrix.fromArray(Ke.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(Ke.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(wt.x,wt.y,wt.width,wt.height),qe===0&&(C.matrix.copy(Je.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),q===!0&&C.cameras.push(Je)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const qe=_.getDepthInformation(se[0]);qe&&qe.isValid&&qe.texture&&T.init(e,qe,s.renderState)}}for(let se=0;se<M.length;se++){const q=w[se],ge=M[se];q!==null&&ge!==void 0&&ge.update(q,Z,h||l)}Ae&&Ae(V,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),S=null}const Se=new C1;Se.setAnimationLoop(Ee),this.setAnimationLoop=function(V){Ae=V},this.dispose=function(){}}}const ao=new ns,MF=new fn;function TF(t,e){function n(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function i(x,d){d.color.getRGB(x.fogColor.value,E1(t)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function s(x,d,E,M,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(x,d):d.isMeshToonMaterial?(o(x,d),_(x,d)):d.isMeshPhongMaterial?(o(x,d),p(x,d)):d.isMeshStandardMaterial?(o(x,d),g(x,d),d.isMeshPhysicalMaterial&&v(x,d,w)):d.isMeshMatcapMaterial?(o(x,d),S(x,d)):d.isMeshDepthMaterial?o(x,d):d.isMeshDistanceMaterial?(o(x,d),T(x,d)):d.isMeshNormalMaterial?o(x,d):d.isLineBasicMaterial?(l(x,d),d.isLineDashedMaterial&&u(x,d)):d.isPointsMaterial?f(x,d,E,M):d.isSpriteMaterial?h(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,n(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===fi&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,n(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===fi&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,n(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,n(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);const E=e.get(d),M=E.envMap,w=E.envMapRotation;M&&(x.envMap.value=M,ao.copy(w),ao.x*=-1,ao.y*=-1,ao.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ao.y*=-1,ao.z*=-1),x.envMapRotation.value.setFromMatrix4(MF.makeRotationFromEuler(ao)),x.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,x.aoMapTransform))}function l(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform))}function u(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function f(x,d,E,M){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*E,x.scale.value=M*.5,d.map&&(x.map.value=d.map,n(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function h(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function p(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function _(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function g(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function v(x,d,E){x.ior.value=d.ior,d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===fi&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,d){d.matcap&&(x.matcap.value=d.matcap)}function T(x,d){const E=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wF(t,e,n,i){let s={},o={},l=[];const u=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function f(E,M){const w=M.program;i.uniformBlockBinding(E,w)}function h(E,M){let w=s[E.id];w===void 0&&(S(E),w=p(E),s[E.id]=w,E.addEventListener("dispose",x));const F=M.program;i.updateUBOMapping(E,F);const U=e.render.frame;o[E.id]!==U&&(g(E),o[E.id]=U)}function p(E){const M=_();E.__bindingPointIndex=M;const w=t.createBuffer(),F=E.__size,U=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,F,U),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,w),w}function _(){for(let E=0;E<u;E++)if(l.indexOf(E)===-1)return l.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(E){const M=s[E.id],w=E.uniforms,F=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let U=0,I=w.length;U<I;U++){const O=Array.isArray(w[U])?w[U]:[w[U]];for(let L=0,C=O.length;L<C;L++){const k=O[L];if(v(k,U,L,F)===!0){const ae=k.__offset,ee=Array.isArray(k.value)?k.value:[k.value];let he=0;for(let ve=0;ve<ee.length;ve++){const le=ee[ve],pe=T(le);typeof le=="number"||typeof le=="boolean"?(k.__data[0]=le,t.bufferSubData(t.UNIFORM_BUFFER,ae+he,k.__data)):le.isMatrix3?(k.__data[0]=le.elements[0],k.__data[1]=le.elements[1],k.__data[2]=le.elements[2],k.__data[3]=0,k.__data[4]=le.elements[3],k.__data[5]=le.elements[4],k.__data[6]=le.elements[5],k.__data[7]=0,k.__data[8]=le.elements[6],k.__data[9]=le.elements[7],k.__data[10]=le.elements[8],k.__data[11]=0):(le.toArray(k.__data,he),he+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ae,k.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function v(E,M,w,F){const U=E.value,I=M+"_"+w;if(F[I]===void 0)return typeof U=="number"||typeof U=="boolean"?F[I]=U:F[I]=U.clone(),!0;{const O=F[I];if(typeof U=="number"||typeof U=="boolean"){if(O!==U)return F[I]=U,!0}else if(O.equals(U)===!1)return O.copy(U),!0}return!1}function S(E){const M=E.uniforms;let w=0;const F=16;for(let I=0,O=M.length;I<O;I++){const L=Array.isArray(M[I])?M[I]:[M[I]];for(let C=0,k=L.length;C<k;C++){const ae=L[C],ee=Array.isArray(ae.value)?ae.value:[ae.value];for(let he=0,ve=ee.length;he<ve;he++){const le=ee[he],pe=T(le),H=w%F,ie=H%pe.boundary,de=H+ie;w+=ie,de!==0&&F-de<pe.storage&&(w+=F-de),ae.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=w,w+=pe.storage}}}const U=w%F;return U>0&&(w+=F-U),E.__size=w,E.__cache={},this}function T(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function x(E){const M=E.target;M.removeEventListener("dispose",x);const w=l.indexOf(M.__bindingPointIndex);l.splice(w,1),t.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function d(){for(const E in s)t.deleteBuffer(s[E]);l=[],s={},o={}}return{bind:f,update:h,dispose:d}}class AF{constructor(e={}){const{canvas:n=uD(),context:i=null,depth:s=!0,stencil:o=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=l;const S=new Uint32Array(4),T=new Int32Array(4);let x=null,d=null;const E=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zi,this.toneMapping=Os,this.toneMappingExposure=1;const w=this;let F=!1,U=0,I=0,O=null,L=-1,C=null;const k=new cn,ae=new cn;let ee=null;const he=new Dt(0);let ve=0,le=n.width,pe=n.height,H=1,ie=null,de=null;const Ae=new cn(0,0,le,pe),Ee=new cn(0,0,le,pe);let Se=!1;const V=new w1;let Z=!1,se=!1;const q=new fn,ge=new fn,qe=new $,Ke=new cn,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Ht(){return O===null?H:1}let B=i;function sn(P,X){return n.getContext(P,X)}try{const P={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${i_}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",De,!1),B===null){const X="webgl2";if(B=sn(X,P),B===null)throw sn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let dt,it,We,Bt,Ge,D,A,K,_e,xe,ce,He,Re,Ue,_t,we,Ne,je,et,Fe,pt,rt,Nt,G;function be(){dt=new NU(B),dt.init(),rt=new _F(B,dt),it=new PU(B,dt,e,rt),We=new mF(B,dt),it.reverseDepthBuffer&&g&&We.buffers.depth.setReversed(!0),Bt=new BU(B),Ge=new nF,D=new gF(B,dt,We,Ge,it,rt,Bt),A=new LU(w),K=new UU(w),_e=new XD(B),Nt=new RU(B,_e),xe=new FU(B,_e,Bt,Nt),ce=new kU(B,xe,_e,Bt),et=new zU(B,it,D),we=new bU(Ge),He=new tF(w,A,K,dt,it,Nt,we),Re=new TF(w,Ge),Ue=new rF,_t=new cF(dt),je=new AU(w,A,K,We,ce,v,f),Ne=new dF(w,ce,it),G=new wF(B,Bt,it,We),Fe=new CU(B,dt,Bt),pt=new OU(B,dt,Bt),Bt.programs=He.programs,w.capabilities=it,w.extensions=dt,w.properties=Ge,w.renderLists=Ue,w.shadowMap=Ne,w.state=We,w.info=Bt}be();const re=new EF(w,B);this.xr=re,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const P=dt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=dt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(P){P!==void 0&&(H=P,this.setSize(le,pe,!1))},this.getSize=function(P){return P.set(le,pe)},this.setSize=function(P,X,Q=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=P,pe=X,n.width=Math.floor(P*H),n.height=Math.floor(X*H),Q===!0&&(n.style.width=P+"px",n.style.height=X+"px"),this.setViewport(0,0,P,X)},this.getDrawingBufferSize=function(P){return P.set(le*H,pe*H).floor()},this.setDrawingBufferSize=function(P,X,Q){le=P,pe=X,H=Q,n.width=Math.floor(P*Q),n.height=Math.floor(X*Q),this.setViewport(0,0,P,X)},this.getCurrentViewport=function(P){return P.copy(k)},this.getViewport=function(P){return P.copy(Ae)},this.setViewport=function(P,X,Q,J){P.isVector4?Ae.set(P.x,P.y,P.z,P.w):Ae.set(P,X,Q,J),We.viewport(k.copy(Ae).multiplyScalar(H).round())},this.getScissor=function(P){return P.copy(Ee)},this.setScissor=function(P,X,Q,J){P.isVector4?Ee.set(P.x,P.y,P.z,P.w):Ee.set(P,X,Q,J),We.scissor(ae.copy(Ee).multiplyScalar(H).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(P){We.setScissorTest(Se=P)},this.setOpaqueSort=function(P){ie=P},this.setTransparentSort=function(P){de=P},this.getClearColor=function(P){return P.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(P=!0,X=!0,Q=!0){let J=0;if(P){let Y=!1;if(O!==null){const Me=O.texture.format;Y=Me===u_||Me===l_||Me===a_}if(Y){const Me=O.texture.type,Le=Me===ts||Me===Ro||Me===fu||Me===ja||Me===s_||Me===o_,Oe=je.getClearColor(),ke=je.getClearAlpha(),tt=Oe.r,nt=Oe.g,Xe=Oe.b;Le?(S[0]=tt,S[1]=nt,S[2]=Xe,S[3]=ke,B.clearBufferuiv(B.COLOR,0,S)):(T[0]=tt,T[1]=nt,T[2]=Xe,T[3]=ke,B.clearBufferiv(B.COLOR,0,T))}else J|=B.COLOR_BUFFER_BIT}X&&(J|=B.DEPTH_BUFFER_BIT),Q&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",De,!1),je.dispose(),Ue.dispose(),_t.dispose(),Ge.dispose(),A.dispose(),K.dispose(),ce.dispose(),Nt.dispose(),G.dispose(),He.dispose(),re.dispose(),re.removeEventListener("sessionstart",Io),re.removeEventListener("sessionend",Eu),qi.stop()};function me(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const P=Bt.autoReset,X=Ne.enabled,Q=Ne.autoUpdate,J=Ne.needsUpdate,Y=Ne.type;be(),Bt.autoReset=P,Ne.enabled=X,Ne.autoUpdate=Q,Ne.needsUpdate=J,Ne.type=Y}function De(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ot(P){const X=P.target;X.removeEventListener("dispose",ot),qt(X)}function qt(P){pn(P),Ge.remove(P)}function pn(P){const X=Ge.get(P).programs;X!==void 0&&(X.forEach(function(Q){He.releaseProgram(Q)}),P.isShaderMaterial&&He.releaseShaderCache(P))}this.renderBufferDirect=function(P,X,Q,J,Y,Me){X===null&&(X=wt);const Le=Y.isMesh&&Y.matrixWorld.determinant()<0,Oe=Cu(P,X,Q,J,Y);We.setMaterial(J,Le);let ke=Q.index,tt=1;if(J.wireframe===!0){if(ke=xe.getWireframeAttribute(Q),ke===void 0)return;tt=2}const nt=Q.drawRange,Xe=Q.attributes.position;let St=nt.start*tt,At=(nt.start+nt.count)*tt;Me!==null&&(St=Math.max(St,Me.start*tt),At=Math.min(At,(Me.start+Me.count)*tt)),ke!==null?(St=Math.max(St,0),At=Math.min(At,ke.count)):Xe!=null&&(St=Math.max(St,0),At=Math.min(At,Xe.count));const tn=At-St;if(tn<0||tn===1/0)return;Nt.setup(Y,J,Oe,Q,ke);let Wt,Et=Fe;if(ke!==null&&(Wt=_e.get(ke),Et=pt,Et.setIndex(Wt)),Y.isMesh)J.wireframe===!0?(We.setLineWidth(J.wireframeLinewidth*Ht()),Et.setMode(B.LINES)):Et.setMode(B.TRIANGLES);else if(Y.isLine){let Ye=J.linewidth;Ye===void 0&&(Ye=1),We.setLineWidth(Ye*Ht()),Y.isLineSegments?Et.setMode(B.LINES):Y.isLineLoop?Et.setMode(B.LINE_LOOP):Et.setMode(B.LINE_STRIP)}else Y.isPoints?Et.setMode(B.POINTS):Y.isSprite&&Et.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Et.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))Et.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ye=Y._multiDrawStarts,on=Y._multiDrawCounts,Rt=Y._multiDrawCount,ei=ke?_e.get(ke).bytesPerElement:1,$i=Ge.get(J).currentProgram.getUniforms();for(let Un=0;Un<Rt;Un++)$i.setValue(B,"_gl_DrawID",Un),Et.render(Ye[Un]/ei,on[Un])}else if(Y.isInstancedMesh)Et.renderInstances(St,tn,Y.count);else if(Q.isInstancedBufferGeometry){const Ye=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,on=Math.min(Q.instanceCount,Ye);Et.renderInstances(St,tn,on)}else Et.render(St,tn)};function Pt(P,X,Q){P.transparent===!0&&P.side===Er&&P.forceSinglePass===!1?(P.side=fi,P.needsUpdate=!0,No(P,X,Q),P.side=ks,P.needsUpdate=!0,No(P,X,Q),P.side=Er):No(P,X,Q)}this.compile=function(P,X,Q=null){Q===null&&(Q=P),d=_t.get(Q),d.init(X),M.push(d),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),P!==Q&&P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),d.setupLights();const J=new Set;return P.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Me=Y.material;if(Me)if(Array.isArray(Me))for(let Le=0;Le<Me.length;Le++){const Oe=Me[Le];Pt(Oe,Q,Y),J.add(Oe)}else Pt(Me,Q,Y),J.add(Me)}),M.pop(),d=null,J},this.compileAsync=function(P,X,Q=null){const J=this.compile(P,X,Q);return new Promise(Y=>{function Me(){if(J.forEach(function(Le){Ge.get(Le).currentProgram.isReady()&&J.delete(Le)}),J.size===0){Y(P);return}setTimeout(Me,10)}dt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let pi=null;function ji(P){pi&&pi(P)}function Io(){qi.stop()}function Eu(){qi.start()}const qi=new C1;qi.setAnimationLoop(ji),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(P){pi=P,re.setAnimationLoop(P),P===null?qi.stop():qi.start()},re.addEventListener("sessionstart",Io),re.addEventListener("sessionend",Eu),this.render=function(P,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(X),X=re.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,X,O),d=_t.get(P,M.length),d.init(X),M.push(d),ge.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),V.setFromProjectionMatrix(ge),se=this.localClippingEnabled,Z=we.init(this.clippingPlanes,se),x=Ue.get(P,E.length),x.init(),E.push(x),re.enabled===!0&&re.isPresenting===!0){const Me=w.xr.getDepthSensingMesh();Me!==null&&nl(Me,X,-1/0,w.sortObjects)}nl(P,X,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(ie,de),Je=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Je&&je.addToRenderList(x,P),this.info.render.frame++,Z===!0&&we.beginShadows();const Q=d.state.shadowsArray;Ne.render(Q,P,X),Z===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=x.opaque,Y=x.transmissive;if(d.setupLights(),X.isArrayCamera){const Me=X.cameras;if(Y.length>0)for(let Le=0,Oe=Me.length;Le<Oe;Le++){const ke=Me[Le];Tu(J,Y,P,ke)}Je&&je.render(P);for(let Le=0,Oe=Me.length;Le<Oe;Le++){const ke=Me[Le];Mu(x,P,ke,ke.viewport)}}else Y.length>0&&Tu(J,Y,P,X),Je&&je.render(P),Mu(x,P,X);O!==null&&(D.updateMultisampleRenderTarget(O),D.updateRenderTargetMipmap(O)),P.isScene===!0&&P.onAfterRender(w,P,X),Nt.resetDefaultState(),L=-1,C=null,M.pop(),M.length>0?(d=M[M.length-1],Z===!0&&we.setGlobalState(w.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?x=E[E.length-1]:x=null};function nl(P,X,Q,J){if(P.visible===!1)return;if(P.layers.test(X.layers)){if(P.isGroup)Q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(X);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||V.intersectsSprite(P)){J&&Ke.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ge);const Le=ce.update(P),Oe=P.material;Oe.visible&&x.push(P,Le,Oe,Q,Ke.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||V.intersectsObject(P))){const Le=ce.update(P),Oe=P.material;if(J&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ke.copy(P.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ke.copy(Le.boundingSphere.center)),Ke.applyMatrix4(P.matrixWorld).applyMatrix4(ge)),Array.isArray(Oe)){const ke=Le.groups;for(let tt=0,nt=ke.length;tt<nt;tt++){const Xe=ke[tt],St=Oe[Xe.materialIndex];St&&St.visible&&x.push(P,Le,St,Q,Ke.z,Xe)}}else Oe.visible&&x.push(P,Le,Oe,Q,Ke.z,null)}}const Me=P.children;for(let Le=0,Oe=Me.length;Le<Oe;Le++)nl(Me[Le],X,Q,J)}function Mu(P,X,Q,J){const Y=P.opaque,Me=P.transmissive,Le=P.transparent;d.setupLightsView(Q),Z===!0&&we.setGlobalState(w.clippingPlanes,Q),J&&We.viewport(k.copy(J)),Y.length>0&&Uo(Y,X,Q),Me.length>0&&Uo(Me,X,Q),Le.length>0&&Uo(Le,X,Q),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Tu(P,X,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[J.id]===void 0&&(d.state.transmissionRenderTarget[J.id]=new Co(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?vu:ts,minFilter:xo,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Me=d.state.transmissionRenderTarget[J.id],Le=J.viewport||k;Me.setSize(Le.z,Le.w);const Oe=w.getRenderTarget();w.setRenderTarget(Me),w.getClearColor(he),ve=w.getClearAlpha(),ve<1&&w.setClearColor(16777215,.5),w.clear(),Je&&je.render(Q);const ke=w.toneMapping;w.toneMapping=Os;const tt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),d.setupLightsView(J),Z===!0&&we.setGlobalState(w.clippingPlanes,J),Uo(P,Q,J),D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me),dt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Xe=0,St=X.length;Xe<St;Xe++){const At=X[Xe],tn=At.object,Wt=At.geometry,Et=At.material,Ye=At.group;if(Et.side===Er&&tn.layers.test(J.layers)){const on=Et.side;Et.side=fi,Et.needsUpdate=!0,wu(tn,Q,J,Wt,Et,Ye),Et.side=on,Et.needsUpdate=!0,nt=!0}}nt===!0&&(D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me))}w.setRenderTarget(Oe),w.setClearColor(he,ve),tt!==void 0&&(J.viewport=tt),w.toneMapping=ke}function Uo(P,X,Q){const J=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Me=P.length;Y<Me;Y++){const Le=P[Y],Oe=Le.object,ke=Le.geometry,tt=J===null?Le.material:J,nt=Le.group;Oe.layers.test(Q.layers)&&wu(Oe,X,Q,ke,tt,nt)}}function wu(P,X,Q,J,Y,Me){P.onBeforeRender(w,X,Q,J,Y,Me),P.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Y.onBeforeRender(w,X,Q,J,P,Me),Y.transparent===!0&&Y.side===Er&&Y.forceSinglePass===!1?(Y.side=fi,Y.needsUpdate=!0,w.renderBufferDirect(Q,X,J,Y,P,Me),Y.side=ks,Y.needsUpdate=!0,w.renderBufferDirect(Q,X,J,Y,P,Me),Y.side=Er):w.renderBufferDirect(Q,X,J,Y,P,Me),P.onAfterRender(w,X,Q,J,Y,Me)}function No(P,X,Q){X.isScene!==!0&&(X=wt);const J=Ge.get(P),Y=d.state.lights,Me=d.state.shadowsArray,Le=Y.state.version,Oe=He.getParameters(P,Y.state,Me,X,Q),ke=He.getProgramCacheKey(Oe);let tt=J.programs;J.environment=P.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(P.isMeshStandardMaterial?K:A).get(P.envMap||J.environment),J.envMapRotation=J.environment!==null&&P.envMap===null?X.environmentRotation:P.envMapRotation,tt===void 0&&(P.addEventListener("dispose",ot),tt=new Map,J.programs=tt);let nt=tt.get(ke);if(nt!==void 0){if(J.currentProgram===nt&&J.lightsStateVersion===Le)return Ru(P,Oe),nt}else Oe.uniforms=He.getUniforms(P),P.onBeforeCompile(Oe,w),nt=He.acquireProgram(Oe,ke),tt.set(ke,nt),J.uniforms=Oe.uniforms;const Xe=J.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=we.uniform),Ru(P,Oe),J.needsLights=vh(P),J.lightsStateVersion=Le,J.needsLights&&(Xe.ambientLightColor.value=Y.state.ambient,Xe.lightProbe.value=Y.state.probe,Xe.directionalLights.value=Y.state.directional,Xe.directionalLightShadows.value=Y.state.directionalShadow,Xe.spotLights.value=Y.state.spot,Xe.spotLightShadows.value=Y.state.spotShadow,Xe.rectAreaLights.value=Y.state.rectArea,Xe.ltc_1.value=Y.state.rectAreaLTC1,Xe.ltc_2.value=Y.state.rectAreaLTC2,Xe.pointLights.value=Y.state.point,Xe.pointLightShadows.value=Y.state.pointShadow,Xe.hemisphereLights.value=Y.state.hemi,Xe.directionalShadowMap.value=Y.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xe.spotShadowMap.value=Y.state.spotShadowMap,Xe.spotLightMatrix.value=Y.state.spotLightMatrix,Xe.spotLightMap.value=Y.state.spotLightMap,Xe.pointShadowMap.value=Y.state.pointShadowMap,Xe.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=nt,J.uniformsList=null,nt}function Au(P){if(P.uniformsList===null){const X=P.currentProgram.getUniforms();P.uniformsList=yf.seqWithValue(X.seq,P.uniforms)}return P.uniformsList}function Ru(P,X){const Q=Ge.get(P);Q.outputColorSpace=X.outputColorSpace,Q.batching=X.batching,Q.batchingColor=X.batchingColor,Q.instancing=X.instancing,Q.instancingColor=X.instancingColor,Q.instancingMorph=X.instancingMorph,Q.skinning=X.skinning,Q.morphTargets=X.morphTargets,Q.morphNormals=X.morphNormals,Q.morphColors=X.morphColors,Q.morphTargetsCount=X.morphTargetsCount,Q.numClippingPlanes=X.numClippingPlanes,Q.numIntersection=X.numClipIntersection,Q.vertexAlphas=X.vertexAlphas,Q.vertexTangents=X.vertexTangents,Q.toneMapping=X.toneMapping}function Cu(P,X,Q,J,Y){X.isScene!==!0&&(X=wt),D.resetTextureUnits();const Me=X.fog,Le=J.isMeshStandardMaterial?X.environment:null,Oe=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:$a,ke=(J.isMeshStandardMaterial?K:A).get(J.envMap||Le),tt=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,nt=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Xe=!!Q.morphAttributes.position,St=!!Q.morphAttributes.normal,At=!!Q.morphAttributes.color;let tn=Os;J.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(tn=w.toneMapping);const Wt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Et=Wt!==void 0?Wt.length:0,Ye=Ge.get(J),on=d.state.lights;if(Z===!0&&(se===!0||P!==C)){const Rn=P===C&&J.id===L;we.setState(J,P,Rn)}let Rt=!1;J.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==on.state.version||Ye.outputColorSpace!==Oe||Y.isBatchedMesh&&Ye.batching===!1||!Y.isBatchedMesh&&Ye.batching===!0||Y.isBatchedMesh&&Ye.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ye.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ye.instancing===!1||!Y.isInstancedMesh&&Ye.instancing===!0||Y.isSkinnedMesh&&Ye.skinning===!1||!Y.isSkinnedMesh&&Ye.skinning===!0||Y.isInstancedMesh&&Ye.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ye.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ye.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ye.instancingMorph===!1&&Y.morphTexture!==null||Ye.envMap!==ke||J.fog===!0&&Ye.fog!==Me||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==we.numPlanes||Ye.numIntersection!==we.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==nt||Ye.morphTargets!==Xe||Ye.morphNormals!==St||Ye.morphColors!==At||Ye.toneMapping!==tn||Ye.morphTargetsCount!==Et)&&(Rt=!0):(Rt=!0,Ye.__version=J.version);let ei=Ye.currentProgram;Rt===!0&&(ei=No(J,X,Y));let $i=!1,Un=!1,Xs=!1;const zt=ei.getUniforms(),Wn=Ye.uniforms;if(We.useProgram(ei.program)&&($i=!0,Un=!0,Xs=!0),J.id!==L&&(L=J.id,Un=!0),$i||C!==P){We.buffers.depth.getReversed()?(q.copy(P.projectionMatrix),fD(q),hD(q),zt.setValue(B,"projectionMatrix",q)):zt.setValue(B,"projectionMatrix",P.projectionMatrix),zt.setValue(B,"viewMatrix",P.matrixWorldInverse);const Cn=zt.map.cameraPosition;Cn!==void 0&&Cn.setValue(B,qe.setFromMatrixPosition(P.matrixWorld)),it.logarithmicDepthBuffer&&zt.setValue(B,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&zt.setValue(B,"isOrthographic",P.isOrthographicCamera===!0),C!==P&&(C=P,Un=!0,Xs=!0)}if(Y.isSkinnedMesh){zt.setOptional(B,Y,"bindMatrix"),zt.setOptional(B,Y,"bindMatrixInverse");const Rn=Y.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),zt.setValue(B,"boneTexture",Rn.boneTexture,D))}Y.isBatchedMesh&&(zt.setOptional(B,Y,"batchingTexture"),zt.setValue(B,"batchingTexture",Y._matricesTexture,D),zt.setOptional(B,Y,"batchingIdTexture"),zt.setValue(B,"batchingIdTexture",Y._indirectTexture,D),zt.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&zt.setValue(B,"batchingColorTexture",Y._colorsTexture,D));const Nn=Q.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&et.update(Y,Q,ei),(Un||Ye.receiveShadow!==Y.receiveShadow)&&(Ye.receiveShadow=Y.receiveShadow,zt.setValue(B,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Wn.envMap.value=ke,Wn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&X.environment!==null&&(Wn.envMapIntensity.value=X.environmentIntensity),Un&&(zt.setValue(B,"toneMappingExposure",w.toneMappingExposure),Ye.needsLights&&_h(Wn,Xs),Me&&J.fog===!0&&Re.refreshFogUniforms(Wn,Me),Re.refreshMaterialUniforms(Wn,J,H,pe,d.state.transmissionRenderTarget[P.id]),yf.upload(B,Au(Ye),Wn,D)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(yf.upload(B,Au(Ye),Wn,D),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&zt.setValue(B,"center",Y.center),zt.setValue(B,"modelViewMatrix",Y.modelViewMatrix),zt.setValue(B,"normalMatrix",Y.normalMatrix),zt.setValue(B,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Rn=J.uniformsGroups;for(let Cn=0,Ys=Rn.length;Cn<Ys;Cn++){const Ki=Rn[Cn];G.update(Ki,ei),G.bind(Ki,ei)}}return ei}function _h(P,X){P.ambientLightColor.needsUpdate=X,P.lightProbe.needsUpdate=X,P.directionalLights.needsUpdate=X,P.directionalLightShadows.needsUpdate=X,P.pointLights.needsUpdate=X,P.pointLightShadows.needsUpdate=X,P.spotLights.needsUpdate=X,P.spotLightShadows.needsUpdate=X,P.rectAreaLights.needsUpdate=X,P.hemisphereLights.needsUpdate=X}function vh(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(P,X,Q){Ge.get(P.texture).__webglTexture=X,Ge.get(P.depthTexture).__webglTexture=Q;const J=Ge.get(P);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Q===void 0,J.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,X){const Q=Ge.get(P);Q.__webglFramebuffer=X,Q.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(P,X=0,Q=0){O=P,U=X,I=Q;let J=!0,Y=null,Me=!1,Le=!1;if(P){const ke=Ge.get(P);if(ke.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(B.FRAMEBUFFER,null),J=!1;else if(ke.__webglFramebuffer===void 0)D.setupRenderTarget(P);else if(ke.__hasExternalTextures)D.rebindTextures(P,Ge.get(P.texture).__webglTexture,Ge.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Xe=P.depthTexture;if(ke.__boundDepthTexture!==Xe){if(Xe!==null&&Ge.has(Xe)&&(P.width!==Xe.image.width||P.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(P)}}const tt=P.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Le=!0);const nt=Ge.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(nt[X])?Y=nt[X][Q]:Y=nt[X],Me=!0):P.samples>0&&D.useMultisampledRTT(P)===!1?Y=Ge.get(P).__webglMultisampledFramebuffer:Array.isArray(nt)?Y=nt[Q]:Y=nt,k.copy(P.viewport),ae.copy(P.scissor),ee=P.scissorTest}else k.copy(Ae).multiplyScalar(H).floor(),ae.copy(Ee).multiplyScalar(H).floor(),ee=Se;if(We.bindFramebuffer(B.FRAMEBUFFER,Y)&&J&&We.drawBuffers(P,Y),We.viewport(k),We.scissor(ae),We.setScissorTest(ee),Me){const ke=Ge.get(P.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,ke.__webglTexture,Q)}else if(Le){const ke=Ge.get(P.texture),tt=X||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.__webglTexture,Q||0,tt)}L=-1},this.readRenderTargetPixels=function(P,X,Q,J,Y,Me,Le){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ge.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){We.bindFramebuffer(B.FRAMEBUFFER,Oe);try{const ke=P.texture,tt=ke.format,nt=ke.type;if(!it.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=P.width-J&&Q>=0&&Q<=P.height-Y&&B.readPixels(X,Q,J,Y,rt.convert(tt),rt.convert(nt),Me)}finally{const ke=O!==null?Ge.get(O).__webglFramebuffer:null;We.bindFramebuffer(B.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(P,X,Q,J,Y,Me,Le){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Ge.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){const ke=P.texture,tt=ke.format,nt=ke.type;if(!it.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=P.width-J&&Q>=0&&Q<=P.height-Y){We.bindFramebuffer(B.FRAMEBUFFER,Oe);const Xe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Xe),B.bufferData(B.PIXEL_PACK_BUFFER,Me.byteLength,B.STREAM_READ),B.readPixels(X,Q,J,Y,rt.convert(tt),rt.convert(nt),0);const St=O!==null?Ge.get(O).__webglFramebuffer:null;We.bindFramebuffer(B.FRAMEBUFFER,St);const At=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await cD(B,At,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Xe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Me),B.deleteBuffer(Xe),B.deleteSync(At),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,X=null,Q=0){P.isTexture!==!0&&(ha("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,P=arguments[1]);const J=Math.pow(2,-Q),Y=Math.floor(P.image.width*J),Me=Math.floor(P.image.height*J),Le=X!==null?X.x:0,Oe=X!==null?X.y:0;D.setTexture2D(P,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,Le,Oe,Y,Me),We.unbindTexture()};const xh=B.createFramebuffer(),yh=B.createFramebuffer();this.copyTextureToTexture=function(P,X,Q=null,J=null,Y=0,Me=null){P.isTexture!==!0&&(ha("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,P=arguments[1],X=arguments[2],Me=arguments[3]||0,Q=null),Me===null&&(Y!==0?(ha("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=Y,Y=0):Me=0);let Le,Oe,ke,tt,nt,Xe,St,At,tn;const Wt=P.isCompressedTexture?P.mipmaps[Me]:P.image;if(Q!==null)Le=Q.max.x-Q.min.x,Oe=Q.max.y-Q.min.y,ke=Q.isBox3?Q.max.z-Q.min.z:1,tt=Q.min.x,nt=Q.min.y,Xe=Q.isBox3?Q.min.z:0;else{const Nn=Math.pow(2,-Y);Le=Math.floor(Wt.width*Nn),Oe=Math.floor(Wt.height*Nn),P.isDataArrayTexture?ke=Wt.depth:P.isData3DTexture?ke=Math.floor(Wt.depth*Nn):ke=1,tt=0,nt=0,Xe=0}J!==null?(St=J.x,At=J.y,tn=J.z):(St=0,At=0,tn=0);const Et=rt.convert(X.format),Ye=rt.convert(X.type);let on;X.isData3DTexture?(D.setTexture3D(X,0),on=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),on=B.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),on=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const Rt=B.getParameter(B.UNPACK_ROW_LENGTH),ei=B.getParameter(B.UNPACK_IMAGE_HEIGHT),$i=B.getParameter(B.UNPACK_SKIP_PIXELS),Un=B.getParameter(B.UNPACK_SKIP_ROWS),Xs=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Wt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Wt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,tt),B.pixelStorei(B.UNPACK_SKIP_ROWS,nt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xe);const zt=P.isDataArrayTexture||P.isData3DTexture,Wn=X.isDataArrayTexture||X.isData3DTexture;if(P.isDepthTexture){const Nn=Ge.get(P),Rn=Ge.get(X),Cn=Ge.get(Nn.__renderTarget),Ys=Ge.get(Rn.__renderTarget);We.bindFramebuffer(B.READ_FRAMEBUFFER,Cn.__webglFramebuffer),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ys.__webglFramebuffer);for(let Ki=0;Ki<ke;Ki++)zt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.get(P).__webglTexture,Y,Xe+Ki),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.get(X).__webglTexture,Me,tn+Ki)),B.blitFramebuffer(tt,nt,Le,Oe,St,At,Le,Oe,B.DEPTH_BUFFER_BIT,B.NEAREST);We.bindFramebuffer(B.READ_FRAMEBUFFER,null),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||P.isRenderTargetTexture||Ge.has(P)){const Nn=Ge.get(P),Rn=Ge.get(X);We.bindFramebuffer(B.READ_FRAMEBUFFER,xh),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,yh);for(let Cn=0;Cn<ke;Cn++)zt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Nn.__webglTexture,Y,Xe+Cn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Nn.__webglTexture,Y),Wn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rn.__webglTexture,Me,tn+Cn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Rn.__webglTexture,Me),Y!==0?B.blitFramebuffer(tt,nt,Le,Oe,St,At,Le,Oe,B.COLOR_BUFFER_BIT,B.NEAREST):Wn?B.copyTexSubImage3D(on,Me,St,At,tn+Cn,tt,nt,Le,Oe):B.copyTexSubImage2D(on,Me,St,At,tt,nt,Le,Oe);We.bindFramebuffer(B.READ_FRAMEBUFFER,null),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Wn?P.isDataTexture||P.isData3DTexture?B.texSubImage3D(on,Me,St,At,tn,Le,Oe,ke,Et,Ye,Wt.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(on,Me,St,At,tn,Le,Oe,ke,Et,Wt.data):B.texSubImage3D(on,Me,St,At,tn,Le,Oe,ke,Et,Ye,Wt):P.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Me,St,At,Le,Oe,Et,Ye,Wt.data):P.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Me,St,At,Wt.width,Wt.height,Et,Wt.data):B.texSubImage2D(B.TEXTURE_2D,Me,St,At,Le,Oe,Et,Ye,Wt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Rt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ei),B.pixelStorei(B.UNPACK_SKIP_PIXELS,$i),B.pixelStorei(B.UNPACK_SKIP_ROWS,Un),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xs),Me===0&&X.generateMipmaps&&B.generateMipmap(on),We.unbindTexture()},this.copyTextureToTexture3D=function(P,X,Q=null,J=null,Y=0){return P.isTexture!==!0&&(ha("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,J=arguments[1]||null,P=arguments[2],X=arguments[3],Y=arguments[4]||0),ha('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,X,Q,J,Y)},this.initRenderTarget=function(P){Ge.get(P).__webglFramebuffer===void 0&&D.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?D.setTextureCube(P,0):P.isData3DTexture?D.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?D.setTexture2DArray(P,0):D.setTexture2D(P,0),We.unbindTexture()},this.resetState=function(){U=0,I=0,O=null,We.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ct._getUnpackColorSpace()}}const zy={type:"change"},p_={type:"start"},I1={type:"end"},tf=new f_,ky=new Es,RF=Math.cos(70*lD.DEG2RAD),_n=new $,si=2*Math.PI,Ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cp=1e-6;class CF extends GD{constructor(e,n=null){super(e,n),this.state=Ot.NONE,this.enabled=!0,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ia.ROTATE,MIDDLE:Ia.DOLLY,RIGHT:Ia.PAN},this.touches={ONE:wa.ROTATE,TWO:wa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Po,this._lastTargetPosition=new $,this._quat=new Po().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dy,this._sphericalDelta=new dy,this._scale=1,this._panOffset=new $,this._rotateStart=new mt,this._rotateEnd=new mt,this._rotateDelta=new mt,this._panStart=new mt,this._panEnd=new mt,this._panDelta=new mt,this._dollyStart=new mt,this._dollyEnd=new mt,this._dollyDelta=new mt,this._dollyDirection=new $,this._mouse=new mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bF.bind(this),this._onPointerDown=PF.bind(this),this._onPointerUp=LF.bind(this),this._onContextMenu=BF.bind(this),this._onMouseWheel=UF.bind(this),this._onKeyDown=NF.bind(this),this._onTouchStart=FF.bind(this),this._onTouchMove=OF.bind(this),this._onMouseDown=DF.bind(this),this._onMouseMove=IF.bind(this),this._interceptControlDown=zF.bind(this),this._interceptControlUp=kF.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zy),this.update(),this.state=Ot.NONE}update(e=null){const n=this.object.position;_n.copy(n).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===Ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=si:i>Math.PI&&(i-=si),s<-Math.PI?s+=si:s>Math.PI&&(s-=si),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),n.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const u=_n.length();l=this._clampDistance(u*this._scale);const f=u-l;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),o=!!f}else if(this.object.isOrthographicCamera){const u=new $(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=f!==this.object.zoom;const h=new $(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(u),this.object.updateMatrixWorld(),l=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(tf.origin.copy(this.object.position),tf.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tf.direction))<RF?this.object.lookAt(this.target):(ky.setFromNormalAndCoplanarPoint(this.object.up,this.target),tf.intersectPlane(ky,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Cp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cp||this._lastTargetPosition.distanceToSquared(this.target)>Cp?(this.dispatchEvent(zy),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?si/60*this.autoRotateSpeed*e:si/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){_n.setFromMatrixColumn(n,0),_n.multiplyScalar(-e),this._panOffset.add(_n)}_panUp(e,n){this.screenSpacePanning===!0?_n.setFromMatrixColumn(n,1):(_n.setFromMatrixColumn(n,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(e),this._panOffset.add(_n)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;_n.copy(s).sub(this.target);let o=_n.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*n*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,o=n-i.top,l=i.width,u=i.height;this._mouse.x=s/l*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(si*this._rotateDelta.x/n.clientHeight),this._rotateUp(si*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(si*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-si*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(si*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-si*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(si*this._rotateDelta.x/n.clientHeight),this._rotateUp(si*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+n.x)*.5,u=(e.pageY+n.y)*.5;this._updateZoomParameters(l,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new mt,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function PF(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function bF(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function LF(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(I1),this.state=Ot.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function DF(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ia.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Ot.DOLLY;break;case Ia.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Ot.ROTATE}break;case Ia.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Ot.PAN}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(p_)}function IF(t){switch(this.state){case Ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function UF(t){this.enabled===!1||this.enableZoom===!1||this.state!==Ot.NONE||(t.preventDefault(),this.dispatchEvent(p_),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(I1))}function NF(t){this.enabled!==!1&&this._handleKeyDown(t)}function FF(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case wa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Ot.TOUCH_ROTATE;break;case wa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Ot.TOUCH_PAN;break;default:this.state=Ot.NONE}break;case 2:switch(this.touches.TWO){case wa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Ot.TOUCH_DOLLY_PAN;break;case wa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Ot.TOUCH_DOLLY_ROTATE;break;default:this.state=Ot.NONE}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(p_)}function OF(t){switch(this._trackPointer(t),this.state){case Ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Ot.NONE}}function BF(t){this.enabled!==!1&&t.preventDefault()}function zF(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kF(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Kf={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Kf.exports;(function(t,e){(function(){var n,i="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",h=500,p="__lodash_placeholder__",_=1,g=2,v=4,S=1,T=2,x=1,d=2,E=4,M=8,w=16,F=32,U=64,I=128,O=256,L=512,C=30,k="...",ae=800,ee=16,he=1,ve=2,le=3,pe=1/0,H=9007199254740991,ie=17976931348623157e292,de=NaN,Ae=4294967295,Ee=Ae-1,Se=Ae>>>1,V=[["ary",I],["bind",x],["bindKey",d],["curry",M],["curryRight",w],["flip",L],["partial",F],["partialRight",U],["rearg",O]],Z="[object Arguments]",se="[object Array]",q="[object AsyncFunction]",ge="[object Boolean]",qe="[object Date]",Ke="[object DOMException]",wt="[object Error]",Je="[object Function]",Ht="[object GeneratorFunction]",B="[object Map]",sn="[object Number]",dt="[object Null]",it="[object Object]",We="[object Promise]",Bt="[object Proxy]",Ge="[object RegExp]",D="[object Set]",A="[object String]",K="[object Symbol]",_e="[object Undefined]",xe="[object WeakMap]",ce="[object WeakSet]",He="[object ArrayBuffer]",Re="[object DataView]",Ue="[object Float32Array]",_t="[object Float64Array]",we="[object Int8Array]",Ne="[object Int16Array]",je="[object Int32Array]",et="[object Uint8Array]",Fe="[object Uint8ClampedArray]",pt="[object Uint16Array]",rt="[object Uint32Array]",Nt=/\b__p \+= '';/g,G=/\b(__p \+=) '' \+/g,be=/(__e\(.*?\)|\b__t\)) \+\n'';/g,re=/&(?:amp|lt|gt|quot|#39);/g,me=/[&<>"']/g,Ie=RegExp(re.source),De=RegExp(me.source),ot=/<%-([\s\S]+?)%>/g,qt=/<%([\s\S]+?)%>/g,pn=/<%=([\s\S]+?)%>/g,Pt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pi=/^\w*$/,ji=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Io=/[\\^$.*+?()[\]{}|]/g,Eu=RegExp(Io.source),qi=/^\s+/,nl=/\s/,Mu=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Tu=/\{\n\/\* \[wrapped with (.+)\] \*/,Uo=/,? & /,wu=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,No=/[()=,{}\[\]\/\s]/,Au=/\\(\\)?/g,Ru=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Cu=/\w*$/,_h=/^[-+]0x[0-9a-f]+$/i,vh=/^0b[01]+$/i,xh=/^\[object .+?Constructor\]$/,yh=/^0o[0-7]+$/i,P=/^(?:0|[1-9]\d*)$/,X=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Q=/($^)/,J=/['\n\r\u2028\u2029\\]/g,Y="\\ud800-\\udfff",Me="\\u0300-\\u036f",Le="\\ufe20-\\ufe2f",Oe="\\u20d0-\\u20ff",ke=Me+Le+Oe,tt="\\u2700-\\u27bf",nt="a-z\\xdf-\\xf6\\xf8-\\xff",Xe="\\xac\\xb1\\xd7\\xf7",St="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",At="\\u2000-\\u206f",tn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Wt="A-Z\\xc0-\\xd6\\xd8-\\xde",Et="\\ufe0e\\ufe0f",Ye=Xe+St+At+tn,on="['’]",Rt="["+Y+"]",ei="["+Ye+"]",$i="["+ke+"]",Un="\\d+",Xs="["+tt+"]",zt="["+nt+"]",Wn="[^"+Y+Ye+Un+tt+nt+Wt+"]",Nn="\\ud83c[\\udffb-\\udfff]",Rn="(?:"+$i+"|"+Nn+")",Cn="[^"+Y+"]",Ys="(?:\\ud83c[\\udde6-\\uddff]){2}",Ki="[\\ud800-\\udbff][\\udc00-\\udfff]",Fo="["+Wt+"]",m_="\\u200d",g_="(?:"+zt+"|"+Wn+")",U1="(?:"+Fo+"|"+Wn+")",__="(?:"+on+"(?:d|ll|m|re|s|t|ve))?",v_="(?:"+on+"(?:D|LL|M|RE|S|T|VE))?",x_=Rn+"?",y_="["+Et+"]?",N1="(?:"+m_+"(?:"+[Cn,Ys,Ki].join("|")+")"+y_+x_+")*",F1="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",O1="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",S_=y_+x_+N1,B1="(?:"+[Xs,Ys,Ki].join("|")+")"+S_,z1="(?:"+[Cn+$i+"?",$i,Ys,Ki,Rt].join("|")+")",k1=RegExp(on,"g"),H1=RegExp($i,"g"),Sh=RegExp(Nn+"(?="+Nn+")|"+z1+S_,"g"),V1=RegExp([Fo+"?"+zt+"+"+__+"(?="+[ei,Fo,"$"].join("|")+")",U1+"+"+v_+"(?="+[ei,Fo+g_,"$"].join("|")+")",Fo+"?"+g_+"+"+__,Fo+"+"+v_,O1,F1,Un,B1].join("|"),"g"),G1=RegExp("["+m_+Y+ke+Et+"]"),W1=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,X1=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Y1=-1,Xt={};Xt[Ue]=Xt[_t]=Xt[we]=Xt[Ne]=Xt[je]=Xt[et]=Xt[Fe]=Xt[pt]=Xt[rt]=!0,Xt[Z]=Xt[se]=Xt[He]=Xt[ge]=Xt[Re]=Xt[qe]=Xt[wt]=Xt[Je]=Xt[B]=Xt[sn]=Xt[it]=Xt[Ge]=Xt[D]=Xt[A]=Xt[xe]=!1;var Vt={};Vt[Z]=Vt[se]=Vt[He]=Vt[Re]=Vt[ge]=Vt[qe]=Vt[Ue]=Vt[_t]=Vt[we]=Vt[Ne]=Vt[je]=Vt[B]=Vt[sn]=Vt[it]=Vt[Ge]=Vt[D]=Vt[A]=Vt[K]=Vt[et]=Vt[Fe]=Vt[pt]=Vt[rt]=!0,Vt[wt]=Vt[Je]=Vt[xe]=!1;var j1={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},q1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$1={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},K1={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Z1=parseFloat,Q1=parseInt,E_=typeof vl=="object"&&vl&&vl.Object===Object&&vl,J1=typeof self=="object"&&self&&self.Object===Object&&self,Pn=E_||J1||Function("return this")(),Eh=e&&!e.nodeType&&e,js=Eh&&!0&&t&&!t.nodeType&&t,M_=js&&js.exports===Eh,Mh=M_&&E_.process,bi=function(){try{var W=js&&js.require&&js.require("util").types;return W||Mh&&Mh.binding&&Mh.binding("util")}catch{}}(),T_=bi&&bi.isArrayBuffer,w_=bi&&bi.isDate,A_=bi&&bi.isMap,R_=bi&&bi.isRegExp,C_=bi&&bi.isSet,P_=bi&&bi.isTypedArray;function mi(W,oe,te){switch(te.length){case 0:return W.call(oe);case 1:return W.call(oe,te[0]);case 2:return W.call(oe,te[0],te[1]);case 3:return W.call(oe,te[0],te[1],te[2])}return W.apply(oe,te)}function eM(W,oe,te,Be){for(var st=-1,bt=W==null?0:W.length;++st<bt;){var mn=W[st];oe(Be,mn,te(mn),W)}return Be}function Li(W,oe){for(var te=-1,Be=W==null?0:W.length;++te<Be&&oe(W[te],te,W)!==!1;);return W}function tM(W,oe){for(var te=W==null?0:W.length;te--&&oe(W[te],te,W)!==!1;);return W}function b_(W,oe){for(var te=-1,Be=W==null?0:W.length;++te<Be;)if(!oe(W[te],te,W))return!1;return!0}function rs(W,oe){for(var te=-1,Be=W==null?0:W.length,st=0,bt=[];++te<Be;){var mn=W[te];oe(mn,te,W)&&(bt[st++]=mn)}return bt}function Pu(W,oe){var te=W==null?0:W.length;return!!te&&Oo(W,oe,0)>-1}function Th(W,oe,te){for(var Be=-1,st=W==null?0:W.length;++Be<st;)if(te(oe,W[Be]))return!0;return!1}function $t(W,oe){for(var te=-1,Be=W==null?0:W.length,st=Array(Be);++te<Be;)st[te]=oe(W[te],te,W);return st}function ss(W,oe){for(var te=-1,Be=oe.length,st=W.length;++te<Be;)W[st+te]=oe[te];return W}function wh(W,oe,te,Be){var st=-1,bt=W==null?0:W.length;for(Be&&bt&&(te=W[++st]);++st<bt;)te=oe(te,W[st],st,W);return te}function nM(W,oe,te,Be){var st=W==null?0:W.length;for(Be&&st&&(te=W[--st]);st--;)te=oe(te,W[st],st,W);return te}function Ah(W,oe){for(var te=-1,Be=W==null?0:W.length;++te<Be;)if(oe(W[te],te,W))return!0;return!1}var iM=Rh("length");function rM(W){return W.split("")}function sM(W){return W.match(wu)||[]}function L_(W,oe,te){var Be;return te(W,function(st,bt,mn){if(oe(st,bt,mn))return Be=bt,!1}),Be}function bu(W,oe,te,Be){for(var st=W.length,bt=te+(Be?1:-1);Be?bt--:++bt<st;)if(oe(W[bt],bt,W))return bt;return-1}function Oo(W,oe,te){return oe===oe?_M(W,oe,te):bu(W,D_,te)}function oM(W,oe,te,Be){for(var st=te-1,bt=W.length;++st<bt;)if(Be(W[st],oe))return st;return-1}function D_(W){return W!==W}function I_(W,oe){var te=W==null?0:W.length;return te?Ph(W,oe)/te:de}function Rh(W){return function(oe){return oe==null?n:oe[W]}}function Ch(W){return function(oe){return W==null?n:W[oe]}}function U_(W,oe,te,Be,st){return st(W,function(bt,mn,kt){te=Be?(Be=!1,bt):oe(te,bt,mn,kt)}),te}function aM(W,oe){var te=W.length;for(W.sort(oe);te--;)W[te]=W[te].value;return W}function Ph(W,oe){for(var te,Be=-1,st=W.length;++Be<st;){var bt=oe(W[Be]);bt!==n&&(te=te===n?bt:te+bt)}return te}function bh(W,oe){for(var te=-1,Be=Array(W);++te<W;)Be[te]=oe(te);return Be}function lM(W,oe){return $t(oe,function(te){return[te,W[te]]})}function N_(W){return W&&W.slice(0,z_(W)+1).replace(qi,"")}function gi(W){return function(oe){return W(oe)}}function Lh(W,oe){return $t(oe,function(te){return W[te]})}function il(W,oe){return W.has(oe)}function F_(W,oe){for(var te=-1,Be=W.length;++te<Be&&Oo(oe,W[te],0)>-1;);return te}function O_(W,oe){for(var te=W.length;te--&&Oo(oe,W[te],0)>-1;);return te}function uM(W,oe){for(var te=W.length,Be=0;te--;)W[te]===oe&&++Be;return Be}var cM=Ch(j1),fM=Ch(q1);function hM(W){return"\\"+K1[W]}function dM(W,oe){return W==null?n:W[oe]}function Bo(W){return G1.test(W)}function pM(W){return W1.test(W)}function mM(W){for(var oe,te=[];!(oe=W.next()).done;)te.push(oe.value);return te}function Dh(W){var oe=-1,te=Array(W.size);return W.forEach(function(Be,st){te[++oe]=[st,Be]}),te}function B_(W,oe){return function(te){return W(oe(te))}}function os(W,oe){for(var te=-1,Be=W.length,st=0,bt=[];++te<Be;){var mn=W[te];(mn===oe||mn===p)&&(W[te]=p,bt[st++]=te)}return bt}function Lu(W){var oe=-1,te=Array(W.size);return W.forEach(function(Be){te[++oe]=Be}),te}function gM(W){var oe=-1,te=Array(W.size);return W.forEach(function(Be){te[++oe]=[Be,Be]}),te}function _M(W,oe,te){for(var Be=te-1,st=W.length;++Be<st;)if(W[Be]===oe)return Be;return-1}function vM(W,oe,te){for(var Be=te+1;Be--;)if(W[Be]===oe)return Be;return Be}function zo(W){return Bo(W)?yM(W):iM(W)}function Zi(W){return Bo(W)?SM(W):rM(W)}function z_(W){for(var oe=W.length;oe--&&nl.test(W.charAt(oe)););return oe}var xM=Ch($1);function yM(W){for(var oe=Sh.lastIndex=0;Sh.test(W);)++oe;return oe}function SM(W){return W.match(Sh)||[]}function EM(W){return W.match(V1)||[]}var MM=function W(oe){oe=oe==null?Pn:ko.defaults(Pn.Object(),oe,ko.pick(Pn,X1));var te=oe.Array,Be=oe.Date,st=oe.Error,bt=oe.Function,mn=oe.Math,kt=oe.Object,Ih=oe.RegExp,TM=oe.String,Di=oe.TypeError,Du=te.prototype,wM=bt.prototype,Ho=kt.prototype,Iu=oe["__core-js_shared__"],Uu=wM.toString,It=Ho.hasOwnProperty,AM=0,k_=function(){var r=/[^.]+$/.exec(Iu&&Iu.keys&&Iu.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Nu=Ho.toString,RM=Uu.call(kt),CM=Pn._,PM=Ih("^"+Uu.call(It).replace(Io,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Fu=M_?oe.Buffer:n,as=oe.Symbol,Ou=oe.Uint8Array,H_=Fu?Fu.allocUnsafe:n,Bu=B_(kt.getPrototypeOf,kt),V_=kt.create,G_=Ho.propertyIsEnumerable,zu=Du.splice,W_=as?as.isConcatSpreadable:n,rl=as?as.iterator:n,qs=as?as.toStringTag:n,ku=function(){try{var r=Js(kt,"defineProperty");return r({},"",{}),r}catch{}}(),bM=oe.clearTimeout!==Pn.clearTimeout&&oe.clearTimeout,LM=Be&&Be.now!==Pn.Date.now&&Be.now,DM=oe.setTimeout!==Pn.setTimeout&&oe.setTimeout,Hu=mn.ceil,Vu=mn.floor,Uh=kt.getOwnPropertySymbols,IM=Fu?Fu.isBuffer:n,X_=oe.isFinite,UM=Du.join,NM=B_(kt.keys,kt),gn=mn.max,Fn=mn.min,FM=Be.now,OM=oe.parseInt,Y_=mn.random,BM=Du.reverse,Nh=Js(oe,"DataView"),sl=Js(oe,"Map"),Fh=Js(oe,"Promise"),Vo=Js(oe,"Set"),ol=Js(oe,"WeakMap"),al=Js(kt,"create"),Gu=ol&&new ol,Go={},zM=eo(Nh),kM=eo(sl),HM=eo(Fh),VM=eo(Vo),GM=eo(ol),Wu=as?as.prototype:n,ll=Wu?Wu.valueOf:n,j_=Wu?Wu.toString:n;function R(r){if(nn(r)&&!at(r)&&!(r instanceof yt)){if(r instanceof Ii)return r;if(It.call(r,"__wrapped__"))return q0(r)}return new Ii(r)}var Wo=function(){function r(){}return function(a){if(!Zt(a))return{};if(V_)return V_(a);r.prototype=a;var c=new r;return r.prototype=n,c}}();function Xu(){}function Ii(r,a){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=n}R.templateSettings={escape:ot,evaluate:qt,interpolate:pn,variable:"",imports:{_:R}},R.prototype=Xu.prototype,R.prototype.constructor=R,Ii.prototype=Wo(Xu.prototype),Ii.prototype.constructor=Ii;function yt(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ae,this.__views__=[]}function WM(){var r=new yt(this.__wrapped__);return r.__actions__=ti(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=ti(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=ti(this.__views__),r}function XM(){if(this.__filtered__){var r=new yt(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function YM(){var r=this.__wrapped__.value(),a=this.__dir__,c=at(r),m=a<0,y=c?r.length:0,b=rw(0,y,this.__views__),N=b.start,z=b.end,j=z-N,ue=m?z:N-1,fe=this.__iteratees__,ye=fe.length,Ce=0,Ve=Fn(j,this.__takeCount__);if(!c||!m&&y==j&&Ve==j)return _0(r,this.__actions__);var Ze=[];e:for(;j--&&Ce<Ve;){ue+=a;for(var ct=-1,Qe=r[ue];++ct<ye;){var vt=fe[ct],Mt=vt.iteratee,xi=vt.type,jn=Mt(Qe);if(xi==ve)Qe=jn;else if(!jn){if(xi==he)continue e;break e}}Ze[Ce++]=Qe}return Ze}yt.prototype=Wo(Xu.prototype),yt.prototype.constructor=yt;function $s(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var m=r[a];this.set(m[0],m[1])}}function jM(){this.__data__=al?al(null):{},this.size=0}function qM(r){var a=this.has(r)&&delete this.__data__[r];return this.size-=a?1:0,a}function $M(r){var a=this.__data__;if(al){var c=a[r];return c===f?n:c}return It.call(a,r)?a[r]:n}function KM(r){var a=this.__data__;return al?a[r]!==n:It.call(a,r)}function ZM(r,a){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=al&&a===n?f:a,this}$s.prototype.clear=jM,$s.prototype.delete=qM,$s.prototype.get=$M,$s.prototype.has=KM,$s.prototype.set=ZM;function Rr(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var m=r[a];this.set(m[0],m[1])}}function QM(){this.__data__=[],this.size=0}function JM(r){var a=this.__data__,c=Yu(a,r);if(c<0)return!1;var m=a.length-1;return c==m?a.pop():zu.call(a,c,1),--this.size,!0}function eT(r){var a=this.__data__,c=Yu(a,r);return c<0?n:a[c][1]}function tT(r){return Yu(this.__data__,r)>-1}function nT(r,a){var c=this.__data__,m=Yu(c,r);return m<0?(++this.size,c.push([r,a])):c[m][1]=a,this}Rr.prototype.clear=QM,Rr.prototype.delete=JM,Rr.prototype.get=eT,Rr.prototype.has=tT,Rr.prototype.set=nT;function Cr(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var m=r[a];this.set(m[0],m[1])}}function iT(){this.size=0,this.__data__={hash:new $s,map:new(sl||Rr),string:new $s}}function rT(r){var a=rc(this,r).delete(r);return this.size-=a?1:0,a}function sT(r){return rc(this,r).get(r)}function oT(r){return rc(this,r).has(r)}function aT(r,a){var c=rc(this,r),m=c.size;return c.set(r,a),this.size+=c.size==m?0:1,this}Cr.prototype.clear=iT,Cr.prototype.delete=rT,Cr.prototype.get=sT,Cr.prototype.has=oT,Cr.prototype.set=aT;function Ks(r){var a=-1,c=r==null?0:r.length;for(this.__data__=new Cr;++a<c;)this.add(r[a])}function lT(r){return this.__data__.set(r,f),this}function uT(r){return this.__data__.has(r)}Ks.prototype.add=Ks.prototype.push=lT,Ks.prototype.has=uT;function Qi(r){var a=this.__data__=new Rr(r);this.size=a.size}function cT(){this.__data__=new Rr,this.size=0}function fT(r){var a=this.__data__,c=a.delete(r);return this.size=a.size,c}function hT(r){return this.__data__.get(r)}function dT(r){return this.__data__.has(r)}function pT(r,a){var c=this.__data__;if(c instanceof Rr){var m=c.__data__;if(!sl||m.length<s-1)return m.push([r,a]),this.size=++c.size,this;c=this.__data__=new Cr(m)}return c.set(r,a),this.size=c.size,this}Qi.prototype.clear=cT,Qi.prototype.delete=fT,Qi.prototype.get=hT,Qi.prototype.has=dT,Qi.prototype.set=pT;function q_(r,a){var c=at(r),m=!c&&to(r),y=!c&&!m&&hs(r),b=!c&&!m&&!y&&qo(r),N=c||m||y||b,z=N?bh(r.length,TM):[],j=z.length;for(var ue in r)(a||It.call(r,ue))&&!(N&&(ue=="length"||y&&(ue=="offset"||ue=="parent")||b&&(ue=="buffer"||ue=="byteLength"||ue=="byteOffset")||Dr(ue,j)))&&z.push(ue);return z}function $_(r){var a=r.length;return a?r[jh(0,a-1)]:n}function mT(r,a){return sc(ti(r),Zs(a,0,r.length))}function gT(r){return sc(ti(r))}function Oh(r,a,c){(c!==n&&!Ji(r[a],c)||c===n&&!(a in r))&&Pr(r,a,c)}function ul(r,a,c){var m=r[a];(!(It.call(r,a)&&Ji(m,c))||c===n&&!(a in r))&&Pr(r,a,c)}function Yu(r,a){for(var c=r.length;c--;)if(Ji(r[c][0],a))return c;return-1}function _T(r,a,c,m){return ls(r,function(y,b,N){a(m,y,c(y),N)}),m}function K_(r,a){return r&&gr(a,En(a),r)}function vT(r,a){return r&&gr(a,ii(a),r)}function Pr(r,a,c){a=="__proto__"&&ku?ku(r,a,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[a]=c}function Bh(r,a){for(var c=-1,m=a.length,y=te(m),b=r==null;++c<m;)y[c]=b?n:vd(r,a[c]);return y}function Zs(r,a,c){return r===r&&(c!==n&&(r=r<=c?r:c),a!==n&&(r=r>=a?r:a)),r}function Ui(r,a,c,m,y,b){var N,z=a&_,j=a&g,ue=a&v;if(c&&(N=y?c(r,m,y,b):c(r)),N!==n)return N;if(!Zt(r))return r;var fe=at(r);if(fe){if(N=ow(r),!z)return ti(r,N)}else{var ye=On(r),Ce=ye==Je||ye==Ht;if(hs(r))return y0(r,z);if(ye==it||ye==Z||Ce&&!y){if(N=j||Ce?{}:z0(r),!z)return j?$T(r,vT(N,r)):qT(r,K_(N,r))}else{if(!Vt[ye])return y?r:{};N=aw(r,ye,z)}}b||(b=new Qi);var Ve=b.get(r);if(Ve)return Ve;b.set(r,N),pv(r)?r.forEach(function(Qe){N.add(Ui(Qe,a,c,Qe,r,b))}):hv(r)&&r.forEach(function(Qe,vt){N.set(vt,Ui(Qe,a,c,vt,r,b))});var Ze=ue?j?rd:id:j?ii:En,ct=fe?n:Ze(r);return Li(ct||r,function(Qe,vt){ct&&(vt=Qe,Qe=r[vt]),ul(N,vt,Ui(Qe,a,c,vt,r,b))}),N}function xT(r){var a=En(r);return function(c){return Z_(c,r,a)}}function Z_(r,a,c){var m=c.length;if(r==null)return!m;for(r=kt(r);m--;){var y=c[m],b=a[y],N=r[y];if(N===n&&!(y in r)||!b(N))return!1}return!0}function Q_(r,a,c){if(typeof r!="function")throw new Di(l);return gl(function(){r.apply(n,c)},a)}function cl(r,a,c,m){var y=-1,b=Pu,N=!0,z=r.length,j=[],ue=a.length;if(!z)return j;c&&(a=$t(a,gi(c))),m?(b=Th,N=!1):a.length>=s&&(b=il,N=!1,a=new Ks(a));e:for(;++y<z;){var fe=r[y],ye=c==null?fe:c(fe);if(fe=m||fe!==0?fe:0,N&&ye===ye){for(var Ce=ue;Ce--;)if(a[Ce]===ye)continue e;j.push(fe)}else b(a,ye,m)||j.push(fe)}return j}var ls=w0(mr),J_=w0(kh,!0);function yT(r,a){var c=!0;return ls(r,function(m,y,b){return c=!!a(m,y,b),c}),c}function ju(r,a,c){for(var m=-1,y=r.length;++m<y;){var b=r[m],N=a(b);if(N!=null&&(z===n?N===N&&!vi(N):c(N,z)))var z=N,j=b}return j}function ST(r,a,c,m){var y=r.length;for(c=lt(c),c<0&&(c=-c>y?0:y+c),m=m===n||m>y?y:lt(m),m<0&&(m+=y),m=c>m?0:gv(m);c<m;)r[c++]=a;return r}function e0(r,a){var c=[];return ls(r,function(m,y,b){a(m,y,b)&&c.push(m)}),c}function bn(r,a,c,m,y){var b=-1,N=r.length;for(c||(c=uw),y||(y=[]);++b<N;){var z=r[b];a>0&&c(z)?a>1?bn(z,a-1,c,m,y):ss(y,z):m||(y[y.length]=z)}return y}var zh=A0(),t0=A0(!0);function mr(r,a){return r&&zh(r,a,En)}function kh(r,a){return r&&t0(r,a,En)}function qu(r,a){return rs(a,function(c){return Ir(r[c])})}function Qs(r,a){a=cs(a,r);for(var c=0,m=a.length;r!=null&&c<m;)r=r[_r(a[c++])];return c&&c==m?r:n}function n0(r,a,c){var m=a(r);return at(r)?m:ss(m,c(r))}function Xn(r){return r==null?r===n?_e:dt:qs&&qs in kt(r)?iw(r):gw(r)}function Hh(r,a){return r>a}function ET(r,a){return r!=null&&It.call(r,a)}function MT(r,a){return r!=null&&a in kt(r)}function TT(r,a,c){return r>=Fn(a,c)&&r<gn(a,c)}function Vh(r,a,c){for(var m=c?Th:Pu,y=r[0].length,b=r.length,N=b,z=te(b),j=1/0,ue=[];N--;){var fe=r[N];N&&a&&(fe=$t(fe,gi(a))),j=Fn(fe.length,j),z[N]=!c&&(a||y>=120&&fe.length>=120)?new Ks(N&&fe):n}fe=r[0];var ye=-1,Ce=z[0];e:for(;++ye<y&&ue.length<j;){var Ve=fe[ye],Ze=a?a(Ve):Ve;if(Ve=c||Ve!==0?Ve:0,!(Ce?il(Ce,Ze):m(ue,Ze,c))){for(N=b;--N;){var ct=z[N];if(!(ct?il(ct,Ze):m(r[N],Ze,c)))continue e}Ce&&Ce.push(Ze),ue.push(Ve)}}return ue}function wT(r,a,c,m){return mr(r,function(y,b,N){a(m,c(y),b,N)}),m}function fl(r,a,c){a=cs(a,r),r=G0(r,a);var m=r==null?r:r[_r(Fi(a))];return m==null?n:mi(m,r,c)}function i0(r){return nn(r)&&Xn(r)==Z}function AT(r){return nn(r)&&Xn(r)==He}function RT(r){return nn(r)&&Xn(r)==qe}function hl(r,a,c,m,y){return r===a?!0:r==null||a==null||!nn(r)&&!nn(a)?r!==r&&a!==a:CT(r,a,c,m,hl,y)}function CT(r,a,c,m,y,b){var N=at(r),z=at(a),j=N?se:On(r),ue=z?se:On(a);j=j==Z?it:j,ue=ue==Z?it:ue;var fe=j==it,ye=ue==it,Ce=j==ue;if(Ce&&hs(r)){if(!hs(a))return!1;N=!0,fe=!1}if(Ce&&!fe)return b||(b=new Qi),N||qo(r)?F0(r,a,c,m,y,b):tw(r,a,j,c,m,y,b);if(!(c&S)){var Ve=fe&&It.call(r,"__wrapped__"),Ze=ye&&It.call(a,"__wrapped__");if(Ve||Ze){var ct=Ve?r.value():r,Qe=Ze?a.value():a;return b||(b=new Qi),y(ct,Qe,c,m,b)}}return Ce?(b||(b=new Qi),nw(r,a,c,m,y,b)):!1}function PT(r){return nn(r)&&On(r)==B}function Gh(r,a,c,m){var y=c.length,b=y,N=!m;if(r==null)return!b;for(r=kt(r);y--;){var z=c[y];if(N&&z[2]?z[1]!==r[z[0]]:!(z[0]in r))return!1}for(;++y<b;){z=c[y];var j=z[0],ue=r[j],fe=z[1];if(N&&z[2]){if(ue===n&&!(j in r))return!1}else{var ye=new Qi;if(m)var Ce=m(ue,fe,j,r,a,ye);if(!(Ce===n?hl(fe,ue,S|T,m,ye):Ce))return!1}}return!0}function r0(r){if(!Zt(r)||fw(r))return!1;var a=Ir(r)?PM:xh;return a.test(eo(r))}function bT(r){return nn(r)&&Xn(r)==Ge}function LT(r){return nn(r)&&On(r)==D}function DT(r){return nn(r)&&fc(r.length)&&!!Xt[Xn(r)]}function s0(r){return typeof r=="function"?r:r==null?ri:typeof r=="object"?at(r)?l0(r[0],r[1]):a0(r):Rv(r)}function Wh(r){if(!ml(r))return NM(r);var a=[];for(var c in kt(r))It.call(r,c)&&c!="constructor"&&a.push(c);return a}function IT(r){if(!Zt(r))return mw(r);var a=ml(r),c=[];for(var m in r)m=="constructor"&&(a||!It.call(r,m))||c.push(m);return c}function Xh(r,a){return r<a}function o0(r,a){var c=-1,m=ni(r)?te(r.length):[];return ls(r,function(y,b,N){m[++c]=a(y,b,N)}),m}function a0(r){var a=od(r);return a.length==1&&a[0][2]?H0(a[0][0],a[0][1]):function(c){return c===r||Gh(c,r,a)}}function l0(r,a){return ld(r)&&k0(a)?H0(_r(r),a):function(c){var m=vd(c,r);return m===n&&m===a?xd(c,r):hl(a,m,S|T)}}function $u(r,a,c,m,y){r!==a&&zh(a,function(b,N){if(y||(y=new Qi),Zt(b))UT(r,a,N,c,$u,m,y);else{var z=m?m(cd(r,N),b,N+"",r,a,y):n;z===n&&(z=b),Oh(r,N,z)}},ii)}function UT(r,a,c,m,y,b,N){var z=cd(r,c),j=cd(a,c),ue=N.get(j);if(ue){Oh(r,c,ue);return}var fe=b?b(z,j,c+"",r,a,N):n,ye=fe===n;if(ye){var Ce=at(j),Ve=!Ce&&hs(j),Ze=!Ce&&!Ve&&qo(j);fe=j,Ce||Ve||Ze?at(z)?fe=z:an(z)?fe=ti(z):Ve?(ye=!1,fe=y0(j,!0)):Ze?(ye=!1,fe=S0(j,!0)):fe=[]:_l(j)||to(j)?(fe=z,to(z)?fe=_v(z):(!Zt(z)||Ir(z))&&(fe=z0(j))):ye=!1}ye&&(N.set(j,fe),y(fe,j,m,b,N),N.delete(j)),Oh(r,c,fe)}function u0(r,a){var c=r.length;if(c)return a+=a<0?c:0,Dr(a,c)?r[a]:n}function c0(r,a,c){a.length?a=$t(a,function(b){return at(b)?function(N){return Qs(N,b.length===1?b[0]:b)}:b}):a=[ri];var m=-1;a=$t(a,gi($e()));var y=o0(r,function(b,N,z){var j=$t(a,function(ue){return ue(b)});return{criteria:j,index:++m,value:b}});return aM(y,function(b,N){return jT(b,N,c)})}function NT(r,a){return f0(r,a,function(c,m){return xd(r,m)})}function f0(r,a,c){for(var m=-1,y=a.length,b={};++m<y;){var N=a[m],z=Qs(r,N);c(z,N)&&dl(b,cs(N,r),z)}return b}function FT(r){return function(a){return Qs(a,r)}}function Yh(r,a,c,m){var y=m?oM:Oo,b=-1,N=a.length,z=r;for(r===a&&(a=ti(a)),c&&(z=$t(r,gi(c)));++b<N;)for(var j=0,ue=a[b],fe=c?c(ue):ue;(j=y(z,fe,j,m))>-1;)z!==r&&zu.call(z,j,1),zu.call(r,j,1);return r}function h0(r,a){for(var c=r?a.length:0,m=c-1;c--;){var y=a[c];if(c==m||y!==b){var b=y;Dr(y)?zu.call(r,y,1):Kh(r,y)}}return r}function jh(r,a){return r+Vu(Y_()*(a-r+1))}function OT(r,a,c,m){for(var y=-1,b=gn(Hu((a-r)/(c||1)),0),N=te(b);b--;)N[m?b:++y]=r,r+=c;return N}function qh(r,a){var c="";if(!r||a<1||a>H)return c;do a%2&&(c+=r),a=Vu(a/2),a&&(r+=r);while(a);return c}function ht(r,a){return fd(V0(r,a,ri),r+"")}function BT(r){return $_($o(r))}function zT(r,a){var c=$o(r);return sc(c,Zs(a,0,c.length))}function dl(r,a,c,m){if(!Zt(r))return r;a=cs(a,r);for(var y=-1,b=a.length,N=b-1,z=r;z!=null&&++y<b;){var j=_r(a[y]),ue=c;if(j==="__proto__"||j==="constructor"||j==="prototype")return r;if(y!=N){var fe=z[j];ue=m?m(fe,j,z):n,ue===n&&(ue=Zt(fe)?fe:Dr(a[y+1])?[]:{})}ul(z,j,ue),z=z[j]}return r}var d0=Gu?function(r,a){return Gu.set(r,a),r}:ri,kT=ku?function(r,a){return ku(r,"toString",{configurable:!0,enumerable:!1,value:Sd(a),writable:!0})}:ri;function HT(r){return sc($o(r))}function Ni(r,a,c){var m=-1,y=r.length;a<0&&(a=-a>y?0:y+a),c=c>y?y:c,c<0&&(c+=y),y=a>c?0:c-a>>>0,a>>>=0;for(var b=te(y);++m<y;)b[m]=r[m+a];return b}function VT(r,a){var c;return ls(r,function(m,y,b){return c=a(m,y,b),!c}),!!c}function Ku(r,a,c){var m=0,y=r==null?m:r.length;if(typeof a=="number"&&a===a&&y<=Se){for(;m<y;){var b=m+y>>>1,N=r[b];N!==null&&!vi(N)&&(c?N<=a:N<a)?m=b+1:y=b}return y}return $h(r,a,ri,c)}function $h(r,a,c,m){var y=0,b=r==null?0:r.length;if(b===0)return 0;a=c(a);for(var N=a!==a,z=a===null,j=vi(a),ue=a===n;y<b;){var fe=Vu((y+b)/2),ye=c(r[fe]),Ce=ye!==n,Ve=ye===null,Ze=ye===ye,ct=vi(ye);if(N)var Qe=m||Ze;else ue?Qe=Ze&&(m||Ce):z?Qe=Ze&&Ce&&(m||!Ve):j?Qe=Ze&&Ce&&!Ve&&(m||!ct):Ve||ct?Qe=!1:Qe=m?ye<=a:ye<a;Qe?y=fe+1:b=fe}return Fn(b,Ee)}function p0(r,a){for(var c=-1,m=r.length,y=0,b=[];++c<m;){var N=r[c],z=a?a(N):N;if(!c||!Ji(z,j)){var j=z;b[y++]=N===0?0:N}}return b}function m0(r){return typeof r=="number"?r:vi(r)?de:+r}function _i(r){if(typeof r=="string")return r;if(at(r))return $t(r,_i)+"";if(vi(r))return j_?j_.call(r):"";var a=r+"";return a=="0"&&1/r==-pe?"-0":a}function us(r,a,c){var m=-1,y=Pu,b=r.length,N=!0,z=[],j=z;if(c)N=!1,y=Th;else if(b>=s){var ue=a?null:JT(r);if(ue)return Lu(ue);N=!1,y=il,j=new Ks}else j=a?[]:z;e:for(;++m<b;){var fe=r[m],ye=a?a(fe):fe;if(fe=c||fe!==0?fe:0,N&&ye===ye){for(var Ce=j.length;Ce--;)if(j[Ce]===ye)continue e;a&&j.push(ye),z.push(fe)}else y(j,ye,c)||(j!==z&&j.push(ye),z.push(fe))}return z}function Kh(r,a){return a=cs(a,r),r=G0(r,a),r==null||delete r[_r(Fi(a))]}function g0(r,a,c,m){return dl(r,a,c(Qs(r,a)),m)}function Zu(r,a,c,m){for(var y=r.length,b=m?y:-1;(m?b--:++b<y)&&a(r[b],b,r););return c?Ni(r,m?0:b,m?b+1:y):Ni(r,m?b+1:0,m?y:b)}function _0(r,a){var c=r;return c instanceof yt&&(c=c.value()),wh(a,function(m,y){return y.func.apply(y.thisArg,ss([m],y.args))},c)}function Zh(r,a,c){var m=r.length;if(m<2)return m?us(r[0]):[];for(var y=-1,b=te(m);++y<m;)for(var N=r[y],z=-1;++z<m;)z!=y&&(b[y]=cl(b[y]||N,r[z],a,c));return us(bn(b,1),a,c)}function v0(r,a,c){for(var m=-1,y=r.length,b=a.length,N={};++m<y;){var z=m<b?a[m]:n;c(N,r[m],z)}return N}function Qh(r){return an(r)?r:[]}function Jh(r){return typeof r=="function"?r:ri}function cs(r,a){return at(r)?r:ld(r,a)?[r]:j0(Lt(r))}var GT=ht;function fs(r,a,c){var m=r.length;return c=c===n?m:c,!a&&c>=m?r:Ni(r,a,c)}var x0=bM||function(r){return Pn.clearTimeout(r)};function y0(r,a){if(a)return r.slice();var c=r.length,m=H_?H_(c):new r.constructor(c);return r.copy(m),m}function ed(r){var a=new r.constructor(r.byteLength);return new Ou(a).set(new Ou(r)),a}function WT(r,a){var c=a?ed(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function XT(r){var a=new r.constructor(r.source,Cu.exec(r));return a.lastIndex=r.lastIndex,a}function YT(r){return ll?kt(ll.call(r)):{}}function S0(r,a){var c=a?ed(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function E0(r,a){if(r!==a){var c=r!==n,m=r===null,y=r===r,b=vi(r),N=a!==n,z=a===null,j=a===a,ue=vi(a);if(!z&&!ue&&!b&&r>a||b&&N&&j&&!z&&!ue||m&&N&&j||!c&&j||!y)return 1;if(!m&&!b&&!ue&&r<a||ue&&c&&y&&!m&&!b||z&&c&&y||!N&&y||!j)return-1}return 0}function jT(r,a,c){for(var m=-1,y=r.criteria,b=a.criteria,N=y.length,z=c.length;++m<N;){var j=E0(y[m],b[m]);if(j){if(m>=z)return j;var ue=c[m];return j*(ue=="desc"?-1:1)}}return r.index-a.index}function M0(r,a,c,m){for(var y=-1,b=r.length,N=c.length,z=-1,j=a.length,ue=gn(b-N,0),fe=te(j+ue),ye=!m;++z<j;)fe[z]=a[z];for(;++y<N;)(ye||y<b)&&(fe[c[y]]=r[y]);for(;ue--;)fe[z++]=r[y++];return fe}function T0(r,a,c,m){for(var y=-1,b=r.length,N=-1,z=c.length,j=-1,ue=a.length,fe=gn(b-z,0),ye=te(fe+ue),Ce=!m;++y<fe;)ye[y]=r[y];for(var Ve=y;++j<ue;)ye[Ve+j]=a[j];for(;++N<z;)(Ce||y<b)&&(ye[Ve+c[N]]=r[y++]);return ye}function ti(r,a){var c=-1,m=r.length;for(a||(a=te(m));++c<m;)a[c]=r[c];return a}function gr(r,a,c,m){var y=!c;c||(c={});for(var b=-1,N=a.length;++b<N;){var z=a[b],j=m?m(c[z],r[z],z,c,r):n;j===n&&(j=r[z]),y?Pr(c,z,j):ul(c,z,j)}return c}function qT(r,a){return gr(r,ad(r),a)}function $T(r,a){return gr(r,O0(r),a)}function Qu(r,a){return function(c,m){var y=at(c)?eM:_T,b=a?a():{};return y(c,r,$e(m,2),b)}}function Xo(r){return ht(function(a,c){var m=-1,y=c.length,b=y>1?c[y-1]:n,N=y>2?c[2]:n;for(b=r.length>3&&typeof b=="function"?(y--,b):n,N&&Yn(c[0],c[1],N)&&(b=y<3?n:b,y=1),a=kt(a);++m<y;){var z=c[m];z&&r(a,z,m,b)}return a})}function w0(r,a){return function(c,m){if(c==null)return c;if(!ni(c))return r(c,m);for(var y=c.length,b=a?y:-1,N=kt(c);(a?b--:++b<y)&&m(N[b],b,N)!==!1;);return c}}function A0(r){return function(a,c,m){for(var y=-1,b=kt(a),N=m(a),z=N.length;z--;){var j=N[r?z:++y];if(c(b[j],j,b)===!1)break}return a}}function KT(r,a,c){var m=a&x,y=pl(r);function b(){var N=this&&this!==Pn&&this instanceof b?y:r;return N.apply(m?c:this,arguments)}return b}function R0(r){return function(a){a=Lt(a);var c=Bo(a)?Zi(a):n,m=c?c[0]:a.charAt(0),y=c?fs(c,1).join(""):a.slice(1);return m[r]()+y}}function Yo(r){return function(a){return wh(wv(Tv(a).replace(k1,"")),r,"")}}function pl(r){return function(){var a=arguments;switch(a.length){case 0:return new r;case 1:return new r(a[0]);case 2:return new r(a[0],a[1]);case 3:return new r(a[0],a[1],a[2]);case 4:return new r(a[0],a[1],a[2],a[3]);case 5:return new r(a[0],a[1],a[2],a[3],a[4]);case 6:return new r(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new r(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var c=Wo(r.prototype),m=r.apply(c,a);return Zt(m)?m:c}}function ZT(r,a,c){var m=pl(r);function y(){for(var b=arguments.length,N=te(b),z=b,j=jo(y);z--;)N[z]=arguments[z];var ue=b<3&&N[0]!==j&&N[b-1]!==j?[]:os(N,j);if(b-=ue.length,b<c)return D0(r,a,Ju,y.placeholder,n,N,ue,n,n,c-b);var fe=this&&this!==Pn&&this instanceof y?m:r;return mi(fe,this,N)}return y}function C0(r){return function(a,c,m){var y=kt(a);if(!ni(a)){var b=$e(c,3);a=En(a),c=function(z){return b(y[z],z,y)}}var N=r(a,c,m);return N>-1?y[b?a[N]:N]:n}}function P0(r){return Lr(function(a){var c=a.length,m=c,y=Ii.prototype.thru;for(r&&a.reverse();m--;){var b=a[m];if(typeof b!="function")throw new Di(l);if(y&&!N&&ic(b)=="wrapper")var N=new Ii([],!0)}for(m=N?m:c;++m<c;){b=a[m];var z=ic(b),j=z=="wrapper"?sd(b):n;j&&ud(j[0])&&j[1]==(I|M|F|O)&&!j[4].length&&j[9]==1?N=N[ic(j[0])].apply(N,j[3]):N=b.length==1&&ud(b)?N[z]():N.thru(b)}return function(){var ue=arguments,fe=ue[0];if(N&&ue.length==1&&at(fe))return N.plant(fe).value();for(var ye=0,Ce=c?a[ye].apply(this,ue):fe;++ye<c;)Ce=a[ye].call(this,Ce);return Ce}})}function Ju(r,a,c,m,y,b,N,z,j,ue){var fe=a&I,ye=a&x,Ce=a&d,Ve=a&(M|w),Ze=a&L,ct=Ce?n:pl(r);function Qe(){for(var vt=arguments.length,Mt=te(vt),xi=vt;xi--;)Mt[xi]=arguments[xi];if(Ve)var jn=jo(Qe),yi=uM(Mt,jn);if(m&&(Mt=M0(Mt,m,y,Ve)),b&&(Mt=T0(Mt,b,N,Ve)),vt-=yi,Ve&&vt<ue){var ln=os(Mt,jn);return D0(r,a,Ju,Qe.placeholder,c,Mt,ln,z,j,ue-vt)}var er=ye?c:this,Nr=Ce?er[r]:r;return vt=Mt.length,z?Mt=_w(Mt,z):Ze&&vt>1&&Mt.reverse(),fe&&j<vt&&(Mt.length=j),this&&this!==Pn&&this instanceof Qe&&(Nr=ct||pl(Nr)),Nr.apply(er,Mt)}return Qe}function b0(r,a){return function(c,m){return wT(c,r,a(m),{})}}function ec(r,a){return function(c,m){var y;if(c===n&&m===n)return a;if(c!==n&&(y=c),m!==n){if(y===n)return m;typeof c=="string"||typeof m=="string"?(c=_i(c),m=_i(m)):(c=m0(c),m=m0(m)),y=r(c,m)}return y}}function td(r){return Lr(function(a){return a=$t(a,gi($e())),ht(function(c){var m=this;return r(a,function(y){return mi(y,m,c)})})})}function tc(r,a){a=a===n?" ":_i(a);var c=a.length;if(c<2)return c?qh(a,r):a;var m=qh(a,Hu(r/zo(a)));return Bo(a)?fs(Zi(m),0,r).join(""):m.slice(0,r)}function QT(r,a,c,m){var y=a&x,b=pl(r);function N(){for(var z=-1,j=arguments.length,ue=-1,fe=m.length,ye=te(fe+j),Ce=this&&this!==Pn&&this instanceof N?b:r;++ue<fe;)ye[ue]=m[ue];for(;j--;)ye[ue++]=arguments[++z];return mi(Ce,y?c:this,ye)}return N}function L0(r){return function(a,c,m){return m&&typeof m!="number"&&Yn(a,c,m)&&(c=m=n),a=Ur(a),c===n?(c=a,a=0):c=Ur(c),m=m===n?a<c?1:-1:Ur(m),OT(a,c,m,r)}}function nc(r){return function(a,c){return typeof a=="string"&&typeof c=="string"||(a=Oi(a),c=Oi(c)),r(a,c)}}function D0(r,a,c,m,y,b,N,z,j,ue){var fe=a&M,ye=fe?N:n,Ce=fe?n:N,Ve=fe?b:n,Ze=fe?n:b;a|=fe?F:U,a&=~(fe?U:F),a&E||(a&=~(x|d));var ct=[r,a,y,Ve,ye,Ze,Ce,z,j,ue],Qe=c.apply(n,ct);return ud(r)&&W0(Qe,ct),Qe.placeholder=m,X0(Qe,r,a)}function nd(r){var a=mn[r];return function(c,m){if(c=Oi(c),m=m==null?0:Fn(lt(m),292),m&&X_(c)){var y=(Lt(c)+"e").split("e"),b=a(y[0]+"e"+(+y[1]+m));return y=(Lt(b)+"e").split("e"),+(y[0]+"e"+(+y[1]-m))}return a(c)}}var JT=Vo&&1/Lu(new Vo([,-0]))[1]==pe?function(r){return new Vo(r)}:Td;function I0(r){return function(a){var c=On(a);return c==B?Dh(a):c==D?gM(a):lM(a,r(a))}}function br(r,a,c,m,y,b,N,z){var j=a&d;if(!j&&typeof r!="function")throw new Di(l);var ue=m?m.length:0;if(ue||(a&=~(F|U),m=y=n),N=N===n?N:gn(lt(N),0),z=z===n?z:lt(z),ue-=y?y.length:0,a&U){var fe=m,ye=y;m=y=n}var Ce=j?n:sd(r),Ve=[r,a,c,m,y,fe,ye,b,N,z];if(Ce&&pw(Ve,Ce),r=Ve[0],a=Ve[1],c=Ve[2],m=Ve[3],y=Ve[4],z=Ve[9]=Ve[9]===n?j?0:r.length:gn(Ve[9]-ue,0),!z&&a&(M|w)&&(a&=~(M|w)),!a||a==x)var Ze=KT(r,a,c);else a==M||a==w?Ze=ZT(r,a,z):(a==F||a==(x|F))&&!y.length?Ze=QT(r,a,c,m):Ze=Ju.apply(n,Ve);var ct=Ce?d0:W0;return X0(ct(Ze,Ve),r,a)}function U0(r,a,c,m){return r===n||Ji(r,Ho[c])&&!It.call(m,c)?a:r}function N0(r,a,c,m,y,b){return Zt(r)&&Zt(a)&&(b.set(a,r),$u(r,a,n,N0,b),b.delete(a)),r}function ew(r){return _l(r)?n:r}function F0(r,a,c,m,y,b){var N=c&S,z=r.length,j=a.length;if(z!=j&&!(N&&j>z))return!1;var ue=b.get(r),fe=b.get(a);if(ue&&fe)return ue==a&&fe==r;var ye=-1,Ce=!0,Ve=c&T?new Ks:n;for(b.set(r,a),b.set(a,r);++ye<z;){var Ze=r[ye],ct=a[ye];if(m)var Qe=N?m(ct,Ze,ye,a,r,b):m(Ze,ct,ye,r,a,b);if(Qe!==n){if(Qe)continue;Ce=!1;break}if(Ve){if(!Ah(a,function(vt,Mt){if(!il(Ve,Mt)&&(Ze===vt||y(Ze,vt,c,m,b)))return Ve.push(Mt)})){Ce=!1;break}}else if(!(Ze===ct||y(Ze,ct,c,m,b))){Ce=!1;break}}return b.delete(r),b.delete(a),Ce}function tw(r,a,c,m,y,b,N){switch(c){case Re:if(r.byteLength!=a.byteLength||r.byteOffset!=a.byteOffset)return!1;r=r.buffer,a=a.buffer;case He:return!(r.byteLength!=a.byteLength||!b(new Ou(r),new Ou(a)));case ge:case qe:case sn:return Ji(+r,+a);case wt:return r.name==a.name&&r.message==a.message;case Ge:case A:return r==a+"";case B:var z=Dh;case D:var j=m&S;if(z||(z=Lu),r.size!=a.size&&!j)return!1;var ue=N.get(r);if(ue)return ue==a;m|=T,N.set(r,a);var fe=F0(z(r),z(a),m,y,b,N);return N.delete(r),fe;case K:if(ll)return ll.call(r)==ll.call(a)}return!1}function nw(r,a,c,m,y,b){var N=c&S,z=id(r),j=z.length,ue=id(a),fe=ue.length;if(j!=fe&&!N)return!1;for(var ye=j;ye--;){var Ce=z[ye];if(!(N?Ce in a:It.call(a,Ce)))return!1}var Ve=b.get(r),Ze=b.get(a);if(Ve&&Ze)return Ve==a&&Ze==r;var ct=!0;b.set(r,a),b.set(a,r);for(var Qe=N;++ye<j;){Ce=z[ye];var vt=r[Ce],Mt=a[Ce];if(m)var xi=N?m(Mt,vt,Ce,a,r,b):m(vt,Mt,Ce,r,a,b);if(!(xi===n?vt===Mt||y(vt,Mt,c,m,b):xi)){ct=!1;break}Qe||(Qe=Ce=="constructor")}if(ct&&!Qe){var jn=r.constructor,yi=a.constructor;jn!=yi&&"constructor"in r&&"constructor"in a&&!(typeof jn=="function"&&jn instanceof jn&&typeof yi=="function"&&yi instanceof yi)&&(ct=!1)}return b.delete(r),b.delete(a),ct}function Lr(r){return fd(V0(r,n,Z0),r+"")}function id(r){return n0(r,En,ad)}function rd(r){return n0(r,ii,O0)}var sd=Gu?function(r){return Gu.get(r)}:Td;function ic(r){for(var a=r.name+"",c=Go[a],m=It.call(Go,a)?c.length:0;m--;){var y=c[m],b=y.func;if(b==null||b==r)return y.name}return a}function jo(r){var a=It.call(R,"placeholder")?R:r;return a.placeholder}function $e(){var r=R.iteratee||Ed;return r=r===Ed?s0:r,arguments.length?r(arguments[0],arguments[1]):r}function rc(r,a){var c=r.__data__;return cw(a)?c[typeof a=="string"?"string":"hash"]:c.map}function od(r){for(var a=En(r),c=a.length;c--;){var m=a[c],y=r[m];a[c]=[m,y,k0(y)]}return a}function Js(r,a){var c=dM(r,a);return r0(c)?c:n}function iw(r){var a=It.call(r,qs),c=r[qs];try{r[qs]=n;var m=!0}catch{}var y=Nu.call(r);return m&&(a?r[qs]=c:delete r[qs]),y}var ad=Uh?function(r){return r==null?[]:(r=kt(r),rs(Uh(r),function(a){return G_.call(r,a)}))}:wd,O0=Uh?function(r){for(var a=[];r;)ss(a,ad(r)),r=Bu(r);return a}:wd,On=Xn;(Nh&&On(new Nh(new ArrayBuffer(1)))!=Re||sl&&On(new sl)!=B||Fh&&On(Fh.resolve())!=We||Vo&&On(new Vo)!=D||ol&&On(new ol)!=xe)&&(On=function(r){var a=Xn(r),c=a==it?r.constructor:n,m=c?eo(c):"";if(m)switch(m){case zM:return Re;case kM:return B;case HM:return We;case VM:return D;case GM:return xe}return a});function rw(r,a,c){for(var m=-1,y=c.length;++m<y;){var b=c[m],N=b.size;switch(b.type){case"drop":r+=N;break;case"dropRight":a-=N;break;case"take":a=Fn(a,r+N);break;case"takeRight":r=gn(r,a-N);break}}return{start:r,end:a}}function sw(r){var a=r.match(Tu);return a?a[1].split(Uo):[]}function B0(r,a,c){a=cs(a,r);for(var m=-1,y=a.length,b=!1;++m<y;){var N=_r(a[m]);if(!(b=r!=null&&c(r,N)))break;r=r[N]}return b||++m!=y?b:(y=r==null?0:r.length,!!y&&fc(y)&&Dr(N,y)&&(at(r)||to(r)))}function ow(r){var a=r.length,c=new r.constructor(a);return a&&typeof r[0]=="string"&&It.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function z0(r){return typeof r.constructor=="function"&&!ml(r)?Wo(Bu(r)):{}}function aw(r,a,c){var m=r.constructor;switch(a){case He:return ed(r);case ge:case qe:return new m(+r);case Re:return WT(r,c);case Ue:case _t:case we:case Ne:case je:case et:case Fe:case pt:case rt:return S0(r,c);case B:return new m;case sn:case A:return new m(r);case Ge:return XT(r);case D:return new m;case K:return YT(r)}}function lw(r,a){var c=a.length;if(!c)return r;var m=c-1;return a[m]=(c>1?"& ":"")+a[m],a=a.join(c>2?", ":" "),r.replace(Mu,`{
/* [wrapped with `+a+`] */
`)}function uw(r){return at(r)||to(r)||!!(W_&&r&&r[W_])}function Dr(r,a){var c=typeof r;return a=a??H,!!a&&(c=="number"||c!="symbol"&&P.test(r))&&r>-1&&r%1==0&&r<a}function Yn(r,a,c){if(!Zt(c))return!1;var m=typeof a;return(m=="number"?ni(c)&&Dr(a,c.length):m=="string"&&a in c)?Ji(c[a],r):!1}function ld(r,a){if(at(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||vi(r)?!0:pi.test(r)||!Pt.test(r)||a!=null&&r in kt(a)}function cw(r){var a=typeof r;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?r!=="__proto__":r===null}function ud(r){var a=ic(r),c=R[a];if(typeof c!="function"||!(a in yt.prototype))return!1;if(r===c)return!0;var m=sd(c);return!!m&&r===m[0]}function fw(r){return!!k_&&k_ in r}var hw=Iu?Ir:Ad;function ml(r){var a=r&&r.constructor,c=typeof a=="function"&&a.prototype||Ho;return r===c}function k0(r){return r===r&&!Zt(r)}function H0(r,a){return function(c){return c==null?!1:c[r]===a&&(a!==n||r in kt(c))}}function dw(r){var a=uc(r,function(m){return c.size===h&&c.clear(),m}),c=a.cache;return a}function pw(r,a){var c=r[1],m=a[1],y=c|m,b=y<(x|d|I),N=m==I&&c==M||m==I&&c==O&&r[7].length<=a[8]||m==(I|O)&&a[7].length<=a[8]&&c==M;if(!(b||N))return r;m&x&&(r[2]=a[2],y|=c&x?0:E);var z=a[3];if(z){var j=r[3];r[3]=j?M0(j,z,a[4]):z,r[4]=j?os(r[3],p):a[4]}return z=a[5],z&&(j=r[5],r[5]=j?T0(j,z,a[6]):z,r[6]=j?os(r[5],p):a[6]),z=a[7],z&&(r[7]=z),m&I&&(r[8]=r[8]==null?a[8]:Fn(r[8],a[8])),r[9]==null&&(r[9]=a[9]),r[0]=a[0],r[1]=y,r}function mw(r){var a=[];if(r!=null)for(var c in kt(r))a.push(c);return a}function gw(r){return Nu.call(r)}function V0(r,a,c){return a=gn(a===n?r.length-1:a,0),function(){for(var m=arguments,y=-1,b=gn(m.length-a,0),N=te(b);++y<b;)N[y]=m[a+y];y=-1;for(var z=te(a+1);++y<a;)z[y]=m[y];return z[a]=c(N),mi(r,this,z)}}function G0(r,a){return a.length<2?r:Qs(r,Ni(a,0,-1))}function _w(r,a){for(var c=r.length,m=Fn(a.length,c),y=ti(r);m--;){var b=a[m];r[m]=Dr(b,c)?y[b]:n}return r}function cd(r,a){if(!(a==="constructor"&&typeof r[a]=="function")&&a!="__proto__")return r[a]}var W0=Y0(d0),gl=DM||function(r,a){return Pn.setTimeout(r,a)},fd=Y0(kT);function X0(r,a,c){var m=a+"";return fd(r,lw(m,vw(sw(m),c)))}function Y0(r){var a=0,c=0;return function(){var m=FM(),y=ee-(m-c);if(c=m,y>0){if(++a>=ae)return arguments[0]}else a=0;return r.apply(n,arguments)}}function sc(r,a){var c=-1,m=r.length,y=m-1;for(a=a===n?m:a;++c<a;){var b=jh(c,y),N=r[b];r[b]=r[c],r[c]=N}return r.length=a,r}var j0=dw(function(r){var a=[];return r.charCodeAt(0)===46&&a.push(""),r.replace(ji,function(c,m,y,b){a.push(y?b.replace(Au,"$1"):m||c)}),a});function _r(r){if(typeof r=="string"||vi(r))return r;var a=r+"";return a=="0"&&1/r==-pe?"-0":a}function eo(r){if(r!=null){try{return Uu.call(r)}catch{}try{return r+""}catch{}}return""}function vw(r,a){return Li(V,function(c){var m="_."+c[0];a&c[1]&&!Pu(r,m)&&r.push(m)}),r.sort()}function q0(r){if(r instanceof yt)return r.clone();var a=new Ii(r.__wrapped__,r.__chain__);return a.__actions__=ti(r.__actions__),a.__index__=r.__index__,a.__values__=r.__values__,a}function xw(r,a,c){(c?Yn(r,a,c):a===n)?a=1:a=gn(lt(a),0);var m=r==null?0:r.length;if(!m||a<1)return[];for(var y=0,b=0,N=te(Hu(m/a));y<m;)N[b++]=Ni(r,y,y+=a);return N}function yw(r){for(var a=-1,c=r==null?0:r.length,m=0,y=[];++a<c;){var b=r[a];b&&(y[m++]=b)}return y}function Sw(){var r=arguments.length;if(!r)return[];for(var a=te(r-1),c=arguments[0],m=r;m--;)a[m-1]=arguments[m];return ss(at(c)?ti(c):[c],bn(a,1))}var Ew=ht(function(r,a){return an(r)?cl(r,bn(a,1,an,!0)):[]}),Mw=ht(function(r,a){var c=Fi(a);return an(c)&&(c=n),an(r)?cl(r,bn(a,1,an,!0),$e(c,2)):[]}),Tw=ht(function(r,a){var c=Fi(a);return an(c)&&(c=n),an(r)?cl(r,bn(a,1,an,!0),n,c):[]});function ww(r,a,c){var m=r==null?0:r.length;return m?(a=c||a===n?1:lt(a),Ni(r,a<0?0:a,m)):[]}function Aw(r,a,c){var m=r==null?0:r.length;return m?(a=c||a===n?1:lt(a),a=m-a,Ni(r,0,a<0?0:a)):[]}function Rw(r,a){return r&&r.length?Zu(r,$e(a,3),!0,!0):[]}function Cw(r,a){return r&&r.length?Zu(r,$e(a,3),!0):[]}function Pw(r,a,c,m){var y=r==null?0:r.length;return y?(c&&typeof c!="number"&&Yn(r,a,c)&&(c=0,m=y),ST(r,a,c,m)):[]}function $0(r,a,c){var m=r==null?0:r.length;if(!m)return-1;var y=c==null?0:lt(c);return y<0&&(y=gn(m+y,0)),bu(r,$e(a,3),y)}function K0(r,a,c){var m=r==null?0:r.length;if(!m)return-1;var y=m-1;return c!==n&&(y=lt(c),y=c<0?gn(m+y,0):Fn(y,m-1)),bu(r,$e(a,3),y,!0)}function Z0(r){var a=r==null?0:r.length;return a?bn(r,1):[]}function bw(r){var a=r==null?0:r.length;return a?bn(r,pe):[]}function Lw(r,a){var c=r==null?0:r.length;return c?(a=a===n?1:lt(a),bn(r,a)):[]}function Dw(r){for(var a=-1,c=r==null?0:r.length,m={};++a<c;){var y=r[a];m[y[0]]=y[1]}return m}function Q0(r){return r&&r.length?r[0]:n}function Iw(r,a,c){var m=r==null?0:r.length;if(!m)return-1;var y=c==null?0:lt(c);return y<0&&(y=gn(m+y,0)),Oo(r,a,y)}function Uw(r){var a=r==null?0:r.length;return a?Ni(r,0,-1):[]}var Nw=ht(function(r){var a=$t(r,Qh);return a.length&&a[0]===r[0]?Vh(a):[]}),Fw=ht(function(r){var a=Fi(r),c=$t(r,Qh);return a===Fi(c)?a=n:c.pop(),c.length&&c[0]===r[0]?Vh(c,$e(a,2)):[]}),Ow=ht(function(r){var a=Fi(r),c=$t(r,Qh);return a=typeof a=="function"?a:n,a&&c.pop(),c.length&&c[0]===r[0]?Vh(c,n,a):[]});function Bw(r,a){return r==null?"":UM.call(r,a)}function Fi(r){var a=r==null?0:r.length;return a?r[a-1]:n}function zw(r,a,c){var m=r==null?0:r.length;if(!m)return-1;var y=m;return c!==n&&(y=lt(c),y=y<0?gn(m+y,0):Fn(y,m-1)),a===a?vM(r,a,y):bu(r,D_,y,!0)}function kw(r,a){return r&&r.length?u0(r,lt(a)):n}var Hw=ht(J0);function J0(r,a){return r&&r.length&&a&&a.length?Yh(r,a):r}function Vw(r,a,c){return r&&r.length&&a&&a.length?Yh(r,a,$e(c,2)):r}function Gw(r,a,c){return r&&r.length&&a&&a.length?Yh(r,a,n,c):r}var Ww=Lr(function(r,a){var c=r==null?0:r.length,m=Bh(r,a);return h0(r,$t(a,function(y){return Dr(y,c)?+y:y}).sort(E0)),m});function Xw(r,a){var c=[];if(!(r&&r.length))return c;var m=-1,y=[],b=r.length;for(a=$e(a,3);++m<b;){var N=r[m];a(N,m,r)&&(c.push(N),y.push(m))}return h0(r,y),c}function hd(r){return r==null?r:BM.call(r)}function Yw(r,a,c){var m=r==null?0:r.length;return m?(c&&typeof c!="number"&&Yn(r,a,c)?(a=0,c=m):(a=a==null?0:lt(a),c=c===n?m:lt(c)),Ni(r,a,c)):[]}function jw(r,a){return Ku(r,a)}function qw(r,a,c){return $h(r,a,$e(c,2))}function $w(r,a){var c=r==null?0:r.length;if(c){var m=Ku(r,a);if(m<c&&Ji(r[m],a))return m}return-1}function Kw(r,a){return Ku(r,a,!0)}function Zw(r,a,c){return $h(r,a,$e(c,2),!0)}function Qw(r,a){var c=r==null?0:r.length;if(c){var m=Ku(r,a,!0)-1;if(Ji(r[m],a))return m}return-1}function Jw(r){return r&&r.length?p0(r):[]}function eA(r,a){return r&&r.length?p0(r,$e(a,2)):[]}function tA(r){var a=r==null?0:r.length;return a?Ni(r,1,a):[]}function nA(r,a,c){return r&&r.length?(a=c||a===n?1:lt(a),Ni(r,0,a<0?0:a)):[]}function iA(r,a,c){var m=r==null?0:r.length;return m?(a=c||a===n?1:lt(a),a=m-a,Ni(r,a<0?0:a,m)):[]}function rA(r,a){return r&&r.length?Zu(r,$e(a,3),!1,!0):[]}function sA(r,a){return r&&r.length?Zu(r,$e(a,3)):[]}var oA=ht(function(r){return us(bn(r,1,an,!0))}),aA=ht(function(r){var a=Fi(r);return an(a)&&(a=n),us(bn(r,1,an,!0),$e(a,2))}),lA=ht(function(r){var a=Fi(r);return a=typeof a=="function"?a:n,us(bn(r,1,an,!0),n,a)});function uA(r){return r&&r.length?us(r):[]}function cA(r,a){return r&&r.length?us(r,$e(a,2)):[]}function fA(r,a){return a=typeof a=="function"?a:n,r&&r.length?us(r,n,a):[]}function dd(r){if(!(r&&r.length))return[];var a=0;return r=rs(r,function(c){if(an(c))return a=gn(c.length,a),!0}),bh(a,function(c){return $t(r,Rh(c))})}function ev(r,a){if(!(r&&r.length))return[];var c=dd(r);return a==null?c:$t(c,function(m){return mi(a,n,m)})}var hA=ht(function(r,a){return an(r)?cl(r,a):[]}),dA=ht(function(r){return Zh(rs(r,an))}),pA=ht(function(r){var a=Fi(r);return an(a)&&(a=n),Zh(rs(r,an),$e(a,2))}),mA=ht(function(r){var a=Fi(r);return a=typeof a=="function"?a:n,Zh(rs(r,an),n,a)}),gA=ht(dd);function _A(r,a){return v0(r||[],a||[],ul)}function vA(r,a){return v0(r||[],a||[],dl)}var xA=ht(function(r){var a=r.length,c=a>1?r[a-1]:n;return c=typeof c=="function"?(r.pop(),c):n,ev(r,c)});function tv(r){var a=R(r);return a.__chain__=!0,a}function yA(r,a){return a(r),r}function oc(r,a){return a(r)}var SA=Lr(function(r){var a=r.length,c=a?r[0]:0,m=this.__wrapped__,y=function(b){return Bh(b,r)};return a>1||this.__actions__.length||!(m instanceof yt)||!Dr(c)?this.thru(y):(m=m.slice(c,+c+(a?1:0)),m.__actions__.push({func:oc,args:[y],thisArg:n}),new Ii(m,this.__chain__).thru(function(b){return a&&!b.length&&b.push(n),b}))});function EA(){return tv(this)}function MA(){return new Ii(this.value(),this.__chain__)}function TA(){this.__values__===n&&(this.__values__=mv(this.value()));var r=this.__index__>=this.__values__.length,a=r?n:this.__values__[this.__index__++];return{done:r,value:a}}function wA(){return this}function AA(r){for(var a,c=this;c instanceof Xu;){var m=q0(c);m.__index__=0,m.__values__=n,a?y.__wrapped__=m:a=m;var y=m;c=c.__wrapped__}return y.__wrapped__=r,a}function RA(){var r=this.__wrapped__;if(r instanceof yt){var a=r;return this.__actions__.length&&(a=new yt(this)),a=a.reverse(),a.__actions__.push({func:oc,args:[hd],thisArg:n}),new Ii(a,this.__chain__)}return this.thru(hd)}function CA(){return _0(this.__wrapped__,this.__actions__)}var PA=Qu(function(r,a,c){It.call(r,c)?++r[c]:Pr(r,c,1)});function bA(r,a,c){var m=at(r)?b_:yT;return c&&Yn(r,a,c)&&(a=n),m(r,$e(a,3))}function LA(r,a){var c=at(r)?rs:e0;return c(r,$e(a,3))}var DA=C0($0),IA=C0(K0);function UA(r,a){return bn(ac(r,a),1)}function NA(r,a){return bn(ac(r,a),pe)}function FA(r,a,c){return c=c===n?1:lt(c),bn(ac(r,a),c)}function nv(r,a){var c=at(r)?Li:ls;return c(r,$e(a,3))}function iv(r,a){var c=at(r)?tM:J_;return c(r,$e(a,3))}var OA=Qu(function(r,a,c){It.call(r,c)?r[c].push(a):Pr(r,c,[a])});function BA(r,a,c,m){r=ni(r)?r:$o(r),c=c&&!m?lt(c):0;var y=r.length;return c<0&&(c=gn(y+c,0)),hc(r)?c<=y&&r.indexOf(a,c)>-1:!!y&&Oo(r,a,c)>-1}var zA=ht(function(r,a,c){var m=-1,y=typeof a=="function",b=ni(r)?te(r.length):[];return ls(r,function(N){b[++m]=y?mi(a,N,c):fl(N,a,c)}),b}),kA=Qu(function(r,a,c){Pr(r,c,a)});function ac(r,a){var c=at(r)?$t:o0;return c(r,$e(a,3))}function HA(r,a,c,m){return r==null?[]:(at(a)||(a=a==null?[]:[a]),c=m?n:c,at(c)||(c=c==null?[]:[c]),c0(r,a,c))}var VA=Qu(function(r,a,c){r[c?0:1].push(a)},function(){return[[],[]]});function GA(r,a,c){var m=at(r)?wh:U_,y=arguments.length<3;return m(r,$e(a,4),c,y,ls)}function WA(r,a,c){var m=at(r)?nM:U_,y=arguments.length<3;return m(r,$e(a,4),c,y,J_)}function XA(r,a){var c=at(r)?rs:e0;return c(r,cc($e(a,3)))}function YA(r){var a=at(r)?$_:BT;return a(r)}function jA(r,a,c){(c?Yn(r,a,c):a===n)?a=1:a=lt(a);var m=at(r)?mT:zT;return m(r,a)}function qA(r){var a=at(r)?gT:HT;return a(r)}function $A(r){if(r==null)return 0;if(ni(r))return hc(r)?zo(r):r.length;var a=On(r);return a==B||a==D?r.size:Wh(r).length}function KA(r,a,c){var m=at(r)?Ah:VT;return c&&Yn(r,a,c)&&(a=n),m(r,$e(a,3))}var ZA=ht(function(r,a){if(r==null)return[];var c=a.length;return c>1&&Yn(r,a[0],a[1])?a=[]:c>2&&Yn(a[0],a[1],a[2])&&(a=[a[0]]),c0(r,bn(a,1),[])}),lc=LM||function(){return Pn.Date.now()};function QA(r,a){if(typeof a!="function")throw new Di(l);return r=lt(r),function(){if(--r<1)return a.apply(this,arguments)}}function rv(r,a,c){return a=c?n:a,a=r&&a==null?r.length:a,br(r,I,n,n,n,n,a)}function sv(r,a){var c;if(typeof a!="function")throw new Di(l);return r=lt(r),function(){return--r>0&&(c=a.apply(this,arguments)),r<=1&&(a=n),c}}var pd=ht(function(r,a,c){var m=x;if(c.length){var y=os(c,jo(pd));m|=F}return br(r,m,a,c,y)}),ov=ht(function(r,a,c){var m=x|d;if(c.length){var y=os(c,jo(ov));m|=F}return br(a,m,r,c,y)});function av(r,a,c){a=c?n:a;var m=br(r,M,n,n,n,n,n,a);return m.placeholder=av.placeholder,m}function lv(r,a,c){a=c?n:a;var m=br(r,w,n,n,n,n,n,a);return m.placeholder=lv.placeholder,m}function uv(r,a,c){var m,y,b,N,z,j,ue=0,fe=!1,ye=!1,Ce=!0;if(typeof r!="function")throw new Di(l);a=Oi(a)||0,Zt(c)&&(fe=!!c.leading,ye="maxWait"in c,b=ye?gn(Oi(c.maxWait)||0,a):b,Ce="trailing"in c?!!c.trailing:Ce);function Ve(ln){var er=m,Nr=y;return m=y=n,ue=ln,N=r.apply(Nr,er),N}function Ze(ln){return ue=ln,z=gl(vt,a),fe?Ve(ln):N}function ct(ln){var er=ln-j,Nr=ln-ue,Cv=a-er;return ye?Fn(Cv,b-Nr):Cv}function Qe(ln){var er=ln-j,Nr=ln-ue;return j===n||er>=a||er<0||ye&&Nr>=b}function vt(){var ln=lc();if(Qe(ln))return Mt(ln);z=gl(vt,ct(ln))}function Mt(ln){return z=n,Ce&&m?Ve(ln):(m=y=n,N)}function xi(){z!==n&&x0(z),ue=0,m=j=y=z=n}function jn(){return z===n?N:Mt(lc())}function yi(){var ln=lc(),er=Qe(ln);if(m=arguments,y=this,j=ln,er){if(z===n)return Ze(j);if(ye)return x0(z),z=gl(vt,a),Ve(j)}return z===n&&(z=gl(vt,a)),N}return yi.cancel=xi,yi.flush=jn,yi}var JA=ht(function(r,a){return Q_(r,1,a)}),eR=ht(function(r,a,c){return Q_(r,Oi(a)||0,c)});function tR(r){return br(r,L)}function uc(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new Di(l);var c=function(){var m=arguments,y=a?a.apply(this,m):m[0],b=c.cache;if(b.has(y))return b.get(y);var N=r.apply(this,m);return c.cache=b.set(y,N)||b,N};return c.cache=new(uc.Cache||Cr),c}uc.Cache=Cr;function cc(r){if(typeof r!="function")throw new Di(l);return function(){var a=arguments;switch(a.length){case 0:return!r.call(this);case 1:return!r.call(this,a[0]);case 2:return!r.call(this,a[0],a[1]);case 3:return!r.call(this,a[0],a[1],a[2])}return!r.apply(this,a)}}function nR(r){return sv(2,r)}var iR=GT(function(r,a){a=a.length==1&&at(a[0])?$t(a[0],gi($e())):$t(bn(a,1),gi($e()));var c=a.length;return ht(function(m){for(var y=-1,b=Fn(m.length,c);++y<b;)m[y]=a[y].call(this,m[y]);return mi(r,this,m)})}),md=ht(function(r,a){var c=os(a,jo(md));return br(r,F,n,a,c)}),cv=ht(function(r,a){var c=os(a,jo(cv));return br(r,U,n,a,c)}),rR=Lr(function(r,a){return br(r,O,n,n,n,a)});function sR(r,a){if(typeof r!="function")throw new Di(l);return a=a===n?a:lt(a),ht(r,a)}function oR(r,a){if(typeof r!="function")throw new Di(l);return a=a==null?0:gn(lt(a),0),ht(function(c){var m=c[a],y=fs(c,0,a);return m&&ss(y,m),mi(r,this,y)})}function aR(r,a,c){var m=!0,y=!0;if(typeof r!="function")throw new Di(l);return Zt(c)&&(m="leading"in c?!!c.leading:m,y="trailing"in c?!!c.trailing:y),uv(r,a,{leading:m,maxWait:a,trailing:y})}function lR(r){return rv(r,1)}function uR(r,a){return md(Jh(a),r)}function cR(){if(!arguments.length)return[];var r=arguments[0];return at(r)?r:[r]}function fR(r){return Ui(r,v)}function hR(r,a){return a=typeof a=="function"?a:n,Ui(r,v,a)}function dR(r){return Ui(r,_|v)}function pR(r,a){return a=typeof a=="function"?a:n,Ui(r,_|v,a)}function mR(r,a){return a==null||Z_(r,a,En(a))}function Ji(r,a){return r===a||r!==r&&a!==a}var gR=nc(Hh),_R=nc(function(r,a){return r>=a}),to=i0(function(){return arguments}())?i0:function(r){return nn(r)&&It.call(r,"callee")&&!G_.call(r,"callee")},at=te.isArray,vR=T_?gi(T_):AT;function ni(r){return r!=null&&fc(r.length)&&!Ir(r)}function an(r){return nn(r)&&ni(r)}function xR(r){return r===!0||r===!1||nn(r)&&Xn(r)==ge}var hs=IM||Ad,yR=w_?gi(w_):RT;function SR(r){return nn(r)&&r.nodeType===1&&!_l(r)}function ER(r){if(r==null)return!0;if(ni(r)&&(at(r)||typeof r=="string"||typeof r.splice=="function"||hs(r)||qo(r)||to(r)))return!r.length;var a=On(r);if(a==B||a==D)return!r.size;if(ml(r))return!Wh(r).length;for(var c in r)if(It.call(r,c))return!1;return!0}function MR(r,a){return hl(r,a)}function TR(r,a,c){c=typeof c=="function"?c:n;var m=c?c(r,a):n;return m===n?hl(r,a,n,c):!!m}function gd(r){if(!nn(r))return!1;var a=Xn(r);return a==wt||a==Ke||typeof r.message=="string"&&typeof r.name=="string"&&!_l(r)}function wR(r){return typeof r=="number"&&X_(r)}function Ir(r){if(!Zt(r))return!1;var a=Xn(r);return a==Je||a==Ht||a==q||a==Bt}function fv(r){return typeof r=="number"&&r==lt(r)}function fc(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=H}function Zt(r){var a=typeof r;return r!=null&&(a=="object"||a=="function")}function nn(r){return r!=null&&typeof r=="object"}var hv=A_?gi(A_):PT;function AR(r,a){return r===a||Gh(r,a,od(a))}function RR(r,a,c){return c=typeof c=="function"?c:n,Gh(r,a,od(a),c)}function CR(r){return dv(r)&&r!=+r}function PR(r){if(hw(r))throw new st(o);return r0(r)}function bR(r){return r===null}function LR(r){return r==null}function dv(r){return typeof r=="number"||nn(r)&&Xn(r)==sn}function _l(r){if(!nn(r)||Xn(r)!=it)return!1;var a=Bu(r);if(a===null)return!0;var c=It.call(a,"constructor")&&a.constructor;return typeof c=="function"&&c instanceof c&&Uu.call(c)==RM}var _d=R_?gi(R_):bT;function DR(r){return fv(r)&&r>=-H&&r<=H}var pv=C_?gi(C_):LT;function hc(r){return typeof r=="string"||!at(r)&&nn(r)&&Xn(r)==A}function vi(r){return typeof r=="symbol"||nn(r)&&Xn(r)==K}var qo=P_?gi(P_):DT;function IR(r){return r===n}function UR(r){return nn(r)&&On(r)==xe}function NR(r){return nn(r)&&Xn(r)==ce}var FR=nc(Xh),OR=nc(function(r,a){return r<=a});function mv(r){if(!r)return[];if(ni(r))return hc(r)?Zi(r):ti(r);if(rl&&r[rl])return mM(r[rl]());var a=On(r),c=a==B?Dh:a==D?Lu:$o;return c(r)}function Ur(r){if(!r)return r===0?r:0;if(r=Oi(r),r===pe||r===-pe){var a=r<0?-1:1;return a*ie}return r===r?r:0}function lt(r){var a=Ur(r),c=a%1;return a===a?c?a-c:a:0}function gv(r){return r?Zs(lt(r),0,Ae):0}function Oi(r){if(typeof r=="number")return r;if(vi(r))return de;if(Zt(r)){var a=typeof r.valueOf=="function"?r.valueOf():r;r=Zt(a)?a+"":a}if(typeof r!="string")return r===0?r:+r;r=N_(r);var c=vh.test(r);return c||yh.test(r)?Q1(r.slice(2),c?2:8):_h.test(r)?de:+r}function _v(r){return gr(r,ii(r))}function BR(r){return r?Zs(lt(r),-H,H):r===0?r:0}function Lt(r){return r==null?"":_i(r)}var zR=Xo(function(r,a){if(ml(a)||ni(a)){gr(a,En(a),r);return}for(var c in a)It.call(a,c)&&ul(r,c,a[c])}),vv=Xo(function(r,a){gr(a,ii(a),r)}),dc=Xo(function(r,a,c,m){gr(a,ii(a),r,m)}),kR=Xo(function(r,a,c,m){gr(a,En(a),r,m)}),HR=Lr(Bh);function VR(r,a){var c=Wo(r);return a==null?c:K_(c,a)}var GR=ht(function(r,a){r=kt(r);var c=-1,m=a.length,y=m>2?a[2]:n;for(y&&Yn(a[0],a[1],y)&&(m=1);++c<m;)for(var b=a[c],N=ii(b),z=-1,j=N.length;++z<j;){var ue=N[z],fe=r[ue];(fe===n||Ji(fe,Ho[ue])&&!It.call(r,ue))&&(r[ue]=b[ue])}return r}),WR=ht(function(r){return r.push(n,N0),mi(xv,n,r)});function XR(r,a){return L_(r,$e(a,3),mr)}function YR(r,a){return L_(r,$e(a,3),kh)}function jR(r,a){return r==null?r:zh(r,$e(a,3),ii)}function qR(r,a){return r==null?r:t0(r,$e(a,3),ii)}function $R(r,a){return r&&mr(r,$e(a,3))}function KR(r,a){return r&&kh(r,$e(a,3))}function ZR(r){return r==null?[]:qu(r,En(r))}function QR(r){return r==null?[]:qu(r,ii(r))}function vd(r,a,c){var m=r==null?n:Qs(r,a);return m===n?c:m}function JR(r,a){return r!=null&&B0(r,a,ET)}function xd(r,a){return r!=null&&B0(r,a,MT)}var eC=b0(function(r,a,c){a!=null&&typeof a.toString!="function"&&(a=Nu.call(a)),r[a]=c},Sd(ri)),tC=b0(function(r,a,c){a!=null&&typeof a.toString!="function"&&(a=Nu.call(a)),It.call(r,a)?r[a].push(c):r[a]=[c]},$e),nC=ht(fl);function En(r){return ni(r)?q_(r):Wh(r)}function ii(r){return ni(r)?q_(r,!0):IT(r)}function iC(r,a){var c={};return a=$e(a,3),mr(r,function(m,y,b){Pr(c,a(m,y,b),m)}),c}function rC(r,a){var c={};return a=$e(a,3),mr(r,function(m,y,b){Pr(c,y,a(m,y,b))}),c}var sC=Xo(function(r,a,c){$u(r,a,c)}),xv=Xo(function(r,a,c,m){$u(r,a,c,m)}),oC=Lr(function(r,a){var c={};if(r==null)return c;var m=!1;a=$t(a,function(b){return b=cs(b,r),m||(m=b.length>1),b}),gr(r,rd(r),c),m&&(c=Ui(c,_|g|v,ew));for(var y=a.length;y--;)Kh(c,a[y]);return c});function aC(r,a){return yv(r,cc($e(a)))}var lC=Lr(function(r,a){return r==null?{}:NT(r,a)});function yv(r,a){if(r==null)return{};var c=$t(rd(r),function(m){return[m]});return a=$e(a),f0(r,c,function(m,y){return a(m,y[0])})}function uC(r,a,c){a=cs(a,r);var m=-1,y=a.length;for(y||(y=1,r=n);++m<y;){var b=r==null?n:r[_r(a[m])];b===n&&(m=y,b=c),r=Ir(b)?b.call(r):b}return r}function cC(r,a,c){return r==null?r:dl(r,a,c)}function fC(r,a,c,m){return m=typeof m=="function"?m:n,r==null?r:dl(r,a,c,m)}var Sv=I0(En),Ev=I0(ii);function hC(r,a,c){var m=at(r),y=m||hs(r)||qo(r);if(a=$e(a,4),c==null){var b=r&&r.constructor;y?c=m?new b:[]:Zt(r)?c=Ir(b)?Wo(Bu(r)):{}:c={}}return(y?Li:mr)(r,function(N,z,j){return a(c,N,z,j)}),c}function dC(r,a){return r==null?!0:Kh(r,a)}function pC(r,a,c){return r==null?r:g0(r,a,Jh(c))}function mC(r,a,c,m){return m=typeof m=="function"?m:n,r==null?r:g0(r,a,Jh(c),m)}function $o(r){return r==null?[]:Lh(r,En(r))}function gC(r){return r==null?[]:Lh(r,ii(r))}function _C(r,a,c){return c===n&&(c=a,a=n),c!==n&&(c=Oi(c),c=c===c?c:0),a!==n&&(a=Oi(a),a=a===a?a:0),Zs(Oi(r),a,c)}function vC(r,a,c){return a=Ur(a),c===n?(c=a,a=0):c=Ur(c),r=Oi(r),TT(r,a,c)}function xC(r,a,c){if(c&&typeof c!="boolean"&&Yn(r,a,c)&&(a=c=n),c===n&&(typeof a=="boolean"?(c=a,a=n):typeof r=="boolean"&&(c=r,r=n)),r===n&&a===n?(r=0,a=1):(r=Ur(r),a===n?(a=r,r=0):a=Ur(a)),r>a){var m=r;r=a,a=m}if(c||r%1||a%1){var y=Y_();return Fn(r+y*(a-r+Z1("1e-"+((y+"").length-1))),a)}return jh(r,a)}var yC=Yo(function(r,a,c){return a=a.toLowerCase(),r+(c?Mv(a):a)});function Mv(r){return yd(Lt(r).toLowerCase())}function Tv(r){return r=Lt(r),r&&r.replace(X,cM).replace(H1,"")}function SC(r,a,c){r=Lt(r),a=_i(a);var m=r.length;c=c===n?m:Zs(lt(c),0,m);var y=c;return c-=a.length,c>=0&&r.slice(c,y)==a}function EC(r){return r=Lt(r),r&&De.test(r)?r.replace(me,fM):r}function MC(r){return r=Lt(r),r&&Eu.test(r)?r.replace(Io,"\\$&"):r}var TC=Yo(function(r,a,c){return r+(c?"-":"")+a.toLowerCase()}),wC=Yo(function(r,a,c){return r+(c?" ":"")+a.toLowerCase()}),AC=R0("toLowerCase");function RC(r,a,c){r=Lt(r),a=lt(a);var m=a?zo(r):0;if(!a||m>=a)return r;var y=(a-m)/2;return tc(Vu(y),c)+r+tc(Hu(y),c)}function CC(r,a,c){r=Lt(r),a=lt(a);var m=a?zo(r):0;return a&&m<a?r+tc(a-m,c):r}function PC(r,a,c){r=Lt(r),a=lt(a);var m=a?zo(r):0;return a&&m<a?tc(a-m,c)+r:r}function bC(r,a,c){return c||a==null?a=0:a&&(a=+a),OM(Lt(r).replace(qi,""),a||0)}function LC(r,a,c){return(c?Yn(r,a,c):a===n)?a=1:a=lt(a),qh(Lt(r),a)}function DC(){var r=arguments,a=Lt(r[0]);return r.length<3?a:a.replace(r[1],r[2])}var IC=Yo(function(r,a,c){return r+(c?"_":"")+a.toLowerCase()});function UC(r,a,c){return c&&typeof c!="number"&&Yn(r,a,c)&&(a=c=n),c=c===n?Ae:c>>>0,c?(r=Lt(r),r&&(typeof a=="string"||a!=null&&!_d(a))&&(a=_i(a),!a&&Bo(r))?fs(Zi(r),0,c):r.split(a,c)):[]}var NC=Yo(function(r,a,c){return r+(c?" ":"")+yd(a)});function FC(r,a,c){return r=Lt(r),c=c==null?0:Zs(lt(c),0,r.length),a=_i(a),r.slice(c,c+a.length)==a}function OC(r,a,c){var m=R.templateSettings;c&&Yn(r,a,c)&&(a=n),r=Lt(r),a=dc({},a,m,U0);var y=dc({},a.imports,m.imports,U0),b=En(y),N=Lh(y,b),z,j,ue=0,fe=a.interpolate||Q,ye="__p += '",Ce=Ih((a.escape||Q).source+"|"+fe.source+"|"+(fe===pn?Ru:Q).source+"|"+(a.evaluate||Q).source+"|$","g"),Ve="//# sourceURL="+(It.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Y1+"]")+`
`;r.replace(Ce,function(Qe,vt,Mt,xi,jn,yi){return Mt||(Mt=xi),ye+=r.slice(ue,yi).replace(J,hM),vt&&(z=!0,ye+=`' +
__e(`+vt+`) +
'`),jn&&(j=!0,ye+=`';
`+jn+`;
__p += '`),Mt&&(ye+=`' +
((__t = (`+Mt+`)) == null ? '' : __t) +
'`),ue=yi+Qe.length,Qe}),ye+=`';
`;var Ze=It.call(a,"variable")&&a.variable;if(!Ze)ye=`with (obj) {
`+ye+`
}
`;else if(No.test(Ze))throw new st(u);ye=(j?ye.replace(Nt,""):ye).replace(G,"$1").replace(be,"$1;"),ye="function("+(Ze||"obj")+`) {
`+(Ze?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(z?", __e = _.escape":"")+(j?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ye+`return __p
}`;var ct=Av(function(){return bt(b,Ve+"return "+ye).apply(n,N)});if(ct.source=ye,gd(ct))throw ct;return ct}function BC(r){return Lt(r).toLowerCase()}function zC(r){return Lt(r).toUpperCase()}function kC(r,a,c){if(r=Lt(r),r&&(c||a===n))return N_(r);if(!r||!(a=_i(a)))return r;var m=Zi(r),y=Zi(a),b=F_(m,y),N=O_(m,y)+1;return fs(m,b,N).join("")}function HC(r,a,c){if(r=Lt(r),r&&(c||a===n))return r.slice(0,z_(r)+1);if(!r||!(a=_i(a)))return r;var m=Zi(r),y=O_(m,Zi(a))+1;return fs(m,0,y).join("")}function VC(r,a,c){if(r=Lt(r),r&&(c||a===n))return r.replace(qi,"");if(!r||!(a=_i(a)))return r;var m=Zi(r),y=F_(m,Zi(a));return fs(m,y).join("")}function GC(r,a){var c=C,m=k;if(Zt(a)){var y="separator"in a?a.separator:y;c="length"in a?lt(a.length):c,m="omission"in a?_i(a.omission):m}r=Lt(r);var b=r.length;if(Bo(r)){var N=Zi(r);b=N.length}if(c>=b)return r;var z=c-zo(m);if(z<1)return m;var j=N?fs(N,0,z).join(""):r.slice(0,z);if(y===n)return j+m;if(N&&(z+=j.length-z),_d(y)){if(r.slice(z).search(y)){var ue,fe=j;for(y.global||(y=Ih(y.source,Lt(Cu.exec(y))+"g")),y.lastIndex=0;ue=y.exec(fe);)var ye=ue.index;j=j.slice(0,ye===n?z:ye)}}else if(r.indexOf(_i(y),z)!=z){var Ce=j.lastIndexOf(y);Ce>-1&&(j=j.slice(0,Ce))}return j+m}function WC(r){return r=Lt(r),r&&Ie.test(r)?r.replace(re,xM):r}var XC=Yo(function(r,a,c){return r+(c?" ":"")+a.toUpperCase()}),yd=R0("toUpperCase");function wv(r,a,c){return r=Lt(r),a=c?n:a,a===n?pM(r)?EM(r):sM(r):r.match(a)||[]}var Av=ht(function(r,a){try{return mi(r,n,a)}catch(c){return gd(c)?c:new st(c)}}),YC=Lr(function(r,a){return Li(a,function(c){c=_r(c),Pr(r,c,pd(r[c],r))}),r});function jC(r){var a=r==null?0:r.length,c=$e();return r=a?$t(r,function(m){if(typeof m[1]!="function")throw new Di(l);return[c(m[0]),m[1]]}):[],ht(function(m){for(var y=-1;++y<a;){var b=r[y];if(mi(b[0],this,m))return mi(b[1],this,m)}})}function qC(r){return xT(Ui(r,_))}function Sd(r){return function(){return r}}function $C(r,a){return r==null||r!==r?a:r}var KC=P0(),ZC=P0(!0);function ri(r){return r}function Ed(r){return s0(typeof r=="function"?r:Ui(r,_))}function QC(r){return a0(Ui(r,_))}function JC(r,a){return l0(r,Ui(a,_))}var eP=ht(function(r,a){return function(c){return fl(c,r,a)}}),tP=ht(function(r,a){return function(c){return fl(r,c,a)}});function Md(r,a,c){var m=En(a),y=qu(a,m);c==null&&!(Zt(a)&&(y.length||!m.length))&&(c=a,a=r,r=this,y=qu(a,En(a)));var b=!(Zt(c)&&"chain"in c)||!!c.chain,N=Ir(r);return Li(y,function(z){var j=a[z];r[z]=j,N&&(r.prototype[z]=function(){var ue=this.__chain__;if(b||ue){var fe=r(this.__wrapped__),ye=fe.__actions__=ti(this.__actions__);return ye.push({func:j,args:arguments,thisArg:r}),fe.__chain__=ue,fe}return j.apply(r,ss([this.value()],arguments))})}),r}function nP(){return Pn._===this&&(Pn._=CM),this}function Td(){}function iP(r){return r=lt(r),ht(function(a){return u0(a,r)})}var rP=td($t),sP=td(b_),oP=td(Ah);function Rv(r){return ld(r)?Rh(_r(r)):FT(r)}function aP(r){return function(a){return r==null?n:Qs(r,a)}}var lP=L0(),uP=L0(!0);function wd(){return[]}function Ad(){return!1}function cP(){return{}}function fP(){return""}function hP(){return!0}function dP(r,a){if(r=lt(r),r<1||r>H)return[];var c=Ae,m=Fn(r,Ae);a=$e(a),r-=Ae;for(var y=bh(m,a);++c<r;)a(c);return y}function pP(r){return at(r)?$t(r,_r):vi(r)?[r]:ti(j0(Lt(r)))}function mP(r){var a=++AM;return Lt(r)+a}var gP=ec(function(r,a){return r+a},0),_P=nd("ceil"),vP=ec(function(r,a){return r/a},1),xP=nd("floor");function yP(r){return r&&r.length?ju(r,ri,Hh):n}function SP(r,a){return r&&r.length?ju(r,$e(a,2),Hh):n}function EP(r){return I_(r,ri)}function MP(r,a){return I_(r,$e(a,2))}function TP(r){return r&&r.length?ju(r,ri,Xh):n}function wP(r,a){return r&&r.length?ju(r,$e(a,2),Xh):n}var AP=ec(function(r,a){return r*a},1),RP=nd("round"),CP=ec(function(r,a){return r-a},0);function PP(r){return r&&r.length?Ph(r,ri):0}function bP(r,a){return r&&r.length?Ph(r,$e(a,2)):0}return R.after=QA,R.ary=rv,R.assign=zR,R.assignIn=vv,R.assignInWith=dc,R.assignWith=kR,R.at=HR,R.before=sv,R.bind=pd,R.bindAll=YC,R.bindKey=ov,R.castArray=cR,R.chain=tv,R.chunk=xw,R.compact=yw,R.concat=Sw,R.cond=jC,R.conforms=qC,R.constant=Sd,R.countBy=PA,R.create=VR,R.curry=av,R.curryRight=lv,R.debounce=uv,R.defaults=GR,R.defaultsDeep=WR,R.defer=JA,R.delay=eR,R.difference=Ew,R.differenceBy=Mw,R.differenceWith=Tw,R.drop=ww,R.dropRight=Aw,R.dropRightWhile=Rw,R.dropWhile=Cw,R.fill=Pw,R.filter=LA,R.flatMap=UA,R.flatMapDeep=NA,R.flatMapDepth=FA,R.flatten=Z0,R.flattenDeep=bw,R.flattenDepth=Lw,R.flip=tR,R.flow=KC,R.flowRight=ZC,R.fromPairs=Dw,R.functions=ZR,R.functionsIn=QR,R.groupBy=OA,R.initial=Uw,R.intersection=Nw,R.intersectionBy=Fw,R.intersectionWith=Ow,R.invert=eC,R.invertBy=tC,R.invokeMap=zA,R.iteratee=Ed,R.keyBy=kA,R.keys=En,R.keysIn=ii,R.map=ac,R.mapKeys=iC,R.mapValues=rC,R.matches=QC,R.matchesProperty=JC,R.memoize=uc,R.merge=sC,R.mergeWith=xv,R.method=eP,R.methodOf=tP,R.mixin=Md,R.negate=cc,R.nthArg=iP,R.omit=oC,R.omitBy=aC,R.once=nR,R.orderBy=HA,R.over=rP,R.overArgs=iR,R.overEvery=sP,R.overSome=oP,R.partial=md,R.partialRight=cv,R.partition=VA,R.pick=lC,R.pickBy=yv,R.property=Rv,R.propertyOf=aP,R.pull=Hw,R.pullAll=J0,R.pullAllBy=Vw,R.pullAllWith=Gw,R.pullAt=Ww,R.range=lP,R.rangeRight=uP,R.rearg=rR,R.reject=XA,R.remove=Xw,R.rest=sR,R.reverse=hd,R.sampleSize=jA,R.set=cC,R.setWith=fC,R.shuffle=qA,R.slice=Yw,R.sortBy=ZA,R.sortedUniq=Jw,R.sortedUniqBy=eA,R.split=UC,R.spread=oR,R.tail=tA,R.take=nA,R.takeRight=iA,R.takeRightWhile=rA,R.takeWhile=sA,R.tap=yA,R.throttle=aR,R.thru=oc,R.toArray=mv,R.toPairs=Sv,R.toPairsIn=Ev,R.toPath=pP,R.toPlainObject=_v,R.transform=hC,R.unary=lR,R.union=oA,R.unionBy=aA,R.unionWith=lA,R.uniq=uA,R.uniqBy=cA,R.uniqWith=fA,R.unset=dC,R.unzip=dd,R.unzipWith=ev,R.update=pC,R.updateWith=mC,R.values=$o,R.valuesIn=gC,R.without=hA,R.words=wv,R.wrap=uR,R.xor=dA,R.xorBy=pA,R.xorWith=mA,R.zip=gA,R.zipObject=_A,R.zipObjectDeep=vA,R.zipWith=xA,R.entries=Sv,R.entriesIn=Ev,R.extend=vv,R.extendWith=dc,Md(R,R),R.add=gP,R.attempt=Av,R.camelCase=yC,R.capitalize=Mv,R.ceil=_P,R.clamp=_C,R.clone=fR,R.cloneDeep=dR,R.cloneDeepWith=pR,R.cloneWith=hR,R.conformsTo=mR,R.deburr=Tv,R.defaultTo=$C,R.divide=vP,R.endsWith=SC,R.eq=Ji,R.escape=EC,R.escapeRegExp=MC,R.every=bA,R.find=DA,R.findIndex=$0,R.findKey=XR,R.findLast=IA,R.findLastIndex=K0,R.findLastKey=YR,R.floor=xP,R.forEach=nv,R.forEachRight=iv,R.forIn=jR,R.forInRight=qR,R.forOwn=$R,R.forOwnRight=KR,R.get=vd,R.gt=gR,R.gte=_R,R.has=JR,R.hasIn=xd,R.head=Q0,R.identity=ri,R.includes=BA,R.indexOf=Iw,R.inRange=vC,R.invoke=nC,R.isArguments=to,R.isArray=at,R.isArrayBuffer=vR,R.isArrayLike=ni,R.isArrayLikeObject=an,R.isBoolean=xR,R.isBuffer=hs,R.isDate=yR,R.isElement=SR,R.isEmpty=ER,R.isEqual=MR,R.isEqualWith=TR,R.isError=gd,R.isFinite=wR,R.isFunction=Ir,R.isInteger=fv,R.isLength=fc,R.isMap=hv,R.isMatch=AR,R.isMatchWith=RR,R.isNaN=CR,R.isNative=PR,R.isNil=LR,R.isNull=bR,R.isNumber=dv,R.isObject=Zt,R.isObjectLike=nn,R.isPlainObject=_l,R.isRegExp=_d,R.isSafeInteger=DR,R.isSet=pv,R.isString=hc,R.isSymbol=vi,R.isTypedArray=qo,R.isUndefined=IR,R.isWeakMap=UR,R.isWeakSet=NR,R.join=Bw,R.kebabCase=TC,R.last=Fi,R.lastIndexOf=zw,R.lowerCase=wC,R.lowerFirst=AC,R.lt=FR,R.lte=OR,R.max=yP,R.maxBy=SP,R.mean=EP,R.meanBy=MP,R.min=TP,R.minBy=wP,R.stubArray=wd,R.stubFalse=Ad,R.stubObject=cP,R.stubString=fP,R.stubTrue=hP,R.multiply=AP,R.nth=kw,R.noConflict=nP,R.noop=Td,R.now=lc,R.pad=RC,R.padEnd=CC,R.padStart=PC,R.parseInt=bC,R.random=xC,R.reduce=GA,R.reduceRight=WA,R.repeat=LC,R.replace=DC,R.result=uC,R.round=RP,R.runInContext=W,R.sample=YA,R.size=$A,R.snakeCase=IC,R.some=KA,R.sortedIndex=jw,R.sortedIndexBy=qw,R.sortedIndexOf=$w,R.sortedLastIndex=Kw,R.sortedLastIndexBy=Zw,R.sortedLastIndexOf=Qw,R.startCase=NC,R.startsWith=FC,R.subtract=CP,R.sum=PP,R.sumBy=bP,R.template=OC,R.times=dP,R.toFinite=Ur,R.toInteger=lt,R.toLength=gv,R.toLower=BC,R.toNumber=Oi,R.toSafeInteger=BR,R.toString=Lt,R.toUpper=zC,R.trim=kC,R.trimEnd=HC,R.trimStart=VC,R.truncate=GC,R.unescape=WC,R.uniqueId=mP,R.upperCase=XC,R.upperFirst=yd,R.each=nv,R.eachRight=iv,R.first=Q0,Md(R,function(){var r={};return mr(R,function(a,c){It.call(R.prototype,c)||(r[c]=a)}),r}(),{chain:!1}),R.VERSION=i,Li(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){R[r].placeholder=R}),Li(["drop","take"],function(r,a){yt.prototype[r]=function(c){c=c===n?1:gn(lt(c),0);var m=this.__filtered__&&!a?new yt(this):this.clone();return m.__filtered__?m.__takeCount__=Fn(c,m.__takeCount__):m.__views__.push({size:Fn(c,Ae),type:r+(m.__dir__<0?"Right":"")}),m},yt.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),Li(["filter","map","takeWhile"],function(r,a){var c=a+1,m=c==he||c==le;yt.prototype[r]=function(y){var b=this.clone();return b.__iteratees__.push({iteratee:$e(y,3),type:c}),b.__filtered__=b.__filtered__||m,b}}),Li(["head","last"],function(r,a){var c="take"+(a?"Right":"");yt.prototype[r]=function(){return this[c](1).value()[0]}}),Li(["initial","tail"],function(r,a){var c="drop"+(a?"":"Right");yt.prototype[r]=function(){return this.__filtered__?new yt(this):this[c](1)}}),yt.prototype.compact=function(){return this.filter(ri)},yt.prototype.find=function(r){return this.filter(r).head()},yt.prototype.findLast=function(r){return this.reverse().find(r)},yt.prototype.invokeMap=ht(function(r,a){return typeof r=="function"?new yt(this):this.map(function(c){return fl(c,r,a)})}),yt.prototype.reject=function(r){return this.filter(cc($e(r)))},yt.prototype.slice=function(r,a){r=lt(r);var c=this;return c.__filtered__&&(r>0||a<0)?new yt(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),a!==n&&(a=lt(a),c=a<0?c.dropRight(-a):c.take(a-r)),c)},yt.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},yt.prototype.toArray=function(){return this.take(Ae)},mr(yt.prototype,function(r,a){var c=/^(?:filter|find|map|reject)|While$/.test(a),m=/^(?:head|last)$/.test(a),y=R[m?"take"+(a=="last"?"Right":""):a],b=m||/^find/.test(a);y&&(R.prototype[a]=function(){var N=this.__wrapped__,z=m?[1]:arguments,j=N instanceof yt,ue=z[0],fe=j||at(N),ye=function(vt){var Mt=y.apply(R,ss([vt],z));return m&&Ce?Mt[0]:Mt};fe&&c&&typeof ue=="function"&&ue.length!=1&&(j=fe=!1);var Ce=this.__chain__,Ve=!!this.__actions__.length,Ze=b&&!Ce,ct=j&&!Ve;if(!b&&fe){N=ct?N:new yt(this);var Qe=r.apply(N,z);return Qe.__actions__.push({func:oc,args:[ye],thisArg:n}),new Ii(Qe,Ce)}return Ze&&ct?r.apply(this,z):(Qe=this.thru(ye),Ze?m?Qe.value()[0]:Qe.value():Qe)})}),Li(["pop","push","shift","sort","splice","unshift"],function(r){var a=Du[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",m=/^(?:pop|shift)$/.test(r);R.prototype[r]=function(){var y=arguments;if(m&&!this.__chain__){var b=this.value();return a.apply(at(b)?b:[],y)}return this[c](function(N){return a.apply(at(N)?N:[],y)})}}),mr(yt.prototype,function(r,a){var c=R[a];if(c){var m=c.name+"";It.call(Go,m)||(Go[m]=[]),Go[m].push({name:a,func:c})}}),Go[Ju(n,d).name]=[{name:"wrapper",func:n}],yt.prototype.clone=WM,yt.prototype.reverse=XM,yt.prototype.value=YM,R.prototype.at=SA,R.prototype.chain=EA,R.prototype.commit=MA,R.prototype.next=TA,R.prototype.plant=AA,R.prototype.reverse=RA,R.prototype.toJSON=R.prototype.valueOf=R.prototype.value=CA,R.prototype.first=R.prototype.head,rl&&(R.prototype[rl]=wA),R},ko=MM();js?((js.exports=ko)._=ko,Eh._=ko):Pn._=ko}).call(vl)})(Kf,Kf.exports);var HF=Kf.exports;const lo=Vy(HF),VF=()=>{const[t,e]=Tn.useState(!1);return ne.jsxs("div",{style:{position:"relative",color:"white"},children:[ne.jsx("div",{onClick:()=>e(!t),style:{position:"absolute",top:"10px",left:"20px",cursor:"pointer",fontSize:"24px",background:"white",color:"black",padding:"5px 10px",borderRadius:"5px",zIndex:1e3},children:t?"✖":"☰"}),t&&ne.jsxs("div",{style:{position:"absolute",top:"50px",left:"20px",backgroundColor:"rgba(0, 0, 0, 0.9)",color:"white",padding:"20px",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.5)",zIndex:999,maxWidth:"90%",overflowY:"auto",height:"80vh",scrollbarWidth:"thin"},children:[ne.jsx("h3",{style:{marginBottom:"10px",borderBottom:"1px solid white"},children:"Controls"}),ne.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",fontSize:"14px",color:"white"},children:[ne.jsx("thead",{children:ne.jsxs("tr",{children:[ne.jsx("th",{style:{border:"1px solid white",padding:"8px",textAlign:"left"},children:"Action"}),ne.jsx("th",{style:{border:"1px solid white",padding:"8px",textAlign:"left"},children:"Keys"})]})}),ne.jsxs("tbody",{children:[ne.jsxs("tr",{children:[ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Change X coordinate"}),ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"ArrowUp / ArrowDown"})]}),ne.jsxs("tr",{children:[ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Change Y coordinate"}),ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"ArrowLeft / ArrowRight"})]}),ne.jsxs("tr",{children:[ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Change Z coordinate"}),ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"W / S"})]}),ne.jsxs("tr",{children:[ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Change W coordinate"}),ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"A / D"})]}),ne.jsxs("tr",{children:[ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate YZ"}),ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + ArrowUp / ArrowDown"})]}),ne.jsxs("tr",{children:[ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate XZ"}),ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + ArrowLeft / ArrowRight"})]}),ne.jsxs("tr",{children:[ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate XY"}),ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + M / N"})]}),ne.jsxs("tr",{children:[ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate WX"}),ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + Q / A"})]}),ne.jsxs("tr",{children:[ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate WY"}),ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + W / S"})]}),ne.jsxs("tr",{children:[ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate WZ"}),ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + E / D"})]}),ne.jsxs("tr",{children:[ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate axes YZ"}),ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + R / F"})]}),ne.jsxs("tr",{children:[ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate axes XZ"}),ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + T / G"})]}),ne.jsxs("tr",{children:[ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate axes XY"}),ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + Y / H"})]}),ne.jsxs("tr",{children:[ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate axes WX"}),ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + U / J"})]}),ne.jsxs("tr",{children:[ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate axes WY"}),ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + I / K"})]}),ne.jsxs("tr",{children:[ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate axes WZ"}),ne.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + O / L"})]})]})]})]})]})};function GF(){const t=Tn.useRef(null),[e,n]=Tn.useState([0,0,0,0]),i=Tn.useRef(e),s=Tn.useRef([]),o=Tn.useRef([]),l=Tn.useRef([0,0,0,0,0,0]),[u,f]=Tn.useState([0,0,0,0,0,0]),h=Tn.useRef(!1),p=Tn.useRef([!1,!1,!1,!1,!1,!1,!1,!1]),_=2;return Tn.useEffect(()=>{i.current=e},[e]),Tn.useEffect(()=>{const g=new ND,v=new Vi(75,window.innerWidth/window.innerHeight,.1,1e3),S=new AF;S.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(S.domElement);const T=()=>{const Ee=document.querySelector("canvas"),Se=window.innerWidth,V=window.innerHeight;Ee.width=Se,Ee.height=V,S.setSize(Se,V),v.aspect=Se/V,v.updateProjectionMatrix()};window.addEventListener("resize",T);const x=new CF(v,S.domElement);v.position.z=5;const d=[[0,1],[0,2],[0,4],[0,8],[1,3],[1,5],[1,9],[2,3],[2,6],[2,10],[3,7],[3,11],[4,5],[4,6],[4,12],[5,7],[5,13],[6,7],[6,14],[7,15],[8,9],[8,10],[8,12],[9,11],[9,13],[10,11],[10,14],[11,15],[12,13],[12,14],[13,15],[14,15]],E=[[-1,-1,-1,-1],[1,-1,-1,-1],[-1,1,-1,-1],[1,1,-1,-1],[-1,-1,1,-1],[1,-1,1,-1],[-1,1,1,-1],[1,1,1,-1],[-1,-1,-1,1],[1,-1,-1,1],[-1,1,-1,1],[1,1,-1,1],[-1,-1,1,1],[1,-1,1,1],[-1,1,1,1],[1,1,1,1]],M=[[0,1,3,2],[0,2,6,4],[0,4,5,1],[1,5,7,3],[2,3,7,6],[4,6,7,5],[8,9,11,10],[8,10,14,12],[8,12,13,9],[9,13,15,11],[10,11,15,14],[12,14,15,13],[0,1,9,8],[2,3,11,10],[4,5,13,12],[6,7,15,14],[0,2,10,8],[1,3,11,9],[4,6,14,12],[5,7,15,13],[0,4,12,8],[1,5,13,9],[2,6,14,10],[3,7,15,11]],w=[[[0,1,3,2],[0,2,6,4],[0,4,5,1],[1,5,7,3],[2,3,7,6],[4,6,7,5]],[[8,9,11,10],[8,10,14,12],[8,12,13,9],[9,13,15,11],[10,11,15,14],[12,14,15,13]],[[0,1,9,8],[4,5,13,12],[0,4,12,8],[1,5,13,9],[0,4,5,1],[8,12,13,9]],[[2,3,11,10],[6,7,15,14],[2,6,14,10],[3,7,15,11],[2,3,7,6],[10,11,15,14]],[[0,2,10,8],[4,6,14,12],[0,4,12,8],[2,6,14,10],[0,2,6,4],[8,10,14,12]],[[1,3,11,9],[5,7,15,13],[1,5,13,9],[3,7,15,11],[1,5,7,3],[9,13,15,11]],[[0,2,10,8],[1,3,11,9],[0,1,9,8],[2,3,11,10],[0,1,3,2],[8,9,11,10]],[[5,7,15,13],[6,7,15,14],[4,5,13,12],[4,6,14,12],[4,6,7,5],[12,14,15,13]]],F=[],U=[];for(let Ee=0;Ee<8;Ee++)U.push([]);const I=(Ee,Se,V)=>{V.forEach(se=>g.remove(se)),V.length=0;const Z=Se.map((se,q)=>new Dt().setHSL(q/Se.length,.7,.5));Se.forEach((se,q)=>{const[ge,qe,Ke,wt]=se.map(dt=>Ee[dt]),Je=new dr,Ht=new Float32Array([...ge,...qe,...Ke,...ge,...Ke,...wt]);Je.setAttribute("position",new Ai(Ht,3));const B=new h_({color:Z[q],side:Er,transparent:!0,opacity:.3}),sn=new Tr(Je,B);g.add(sn),V.push(sn)})},O=Ee=>{const[Se,V,Z,se]=Ee,q=1/(_-se);return[Se*q,V*q,Z*q]},L=new dr,C=new ag({color:16777215}),k=new BD(L,C);g.add(k);const ae=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];o.current=ae;const ee=(Ee,Se,V)=>{const Z=new dr().setFromPoints([new $(...Ee),new $(...Se)]),se=new ag({color:V});return new A1(Z,se)},he=ae.map(Ee=>O(Ee)),ve=[ee([0,0,0],he[0],16711680),ee([0,0,0],he[1],16776960),ee([0,0,0],he[2],65280),ee([0,0,0],he[3],5592575)];ve.forEach(Ee=>g.add(Ee));const le=Ee=>{let Se=lo.cloneDeep(Ee),V=lo.cloneDeep(Ee),Z=lo.cloneDeep(Ee),se=lo.cloneDeep(Ee),q=lo.cloneDeep(Ee),ge=lo.cloneDeep(Ee);ie(Se,"yz",l.current[0]),ie(V,"xz",l.current[1]),ie(Z,"xy",l.current[2]),ie(se,"wx",l.current[3]),ie(q,"wy",l.current[4]),ie(ge,"wz",l.current[5]),Ee.forEach((qe,Ke)=>{qe.forEach((wt,Je)=>{Ee[Ke][Je]=Se[Ke][Je]+V[Ke][Je]+Z[Ke][Je]+se[Ke][Je]+q[Ke][Je]+ge[Ke][Je]-5*wt})})},pe=()=>{const Ee=lo.cloneDeep(o.current);le(Ee);const Se=Ee.map(V=>O(V));ve.forEach((V,Z)=>{const se=[0,0,0],q=Se[Z],ge=new Float32Array([...se,...q]);V.geometry.setAttribute("position",new Ai(ge,3)),V.geometry.attributes.position.needsUpdate=!0})},H=()=>{let Ee=s.current.map(V=>V.map((Z,se)=>Z+i.current[se]));le(Ee);const Se=Ee.map(O);if(h.current){g.remove(k);for(let V=0;V<8;V++)U[V].forEach(Z=>g.remove(Z));I(Se,M,F)}else{F.forEach(Z=>g.remove(Z)),g.add(k);const V=new Float32Array(d.flatMap(([Z,se])=>[...Se[Z],...Se[se]]));L.setAttribute("position",new Ai(V,3)),p.current[0]===!0?I(Se,w[0],U[0]):U[0].forEach(Z=>g.remove(Z)),p.current[1]===!0?I(Se,w[1],U[1]):U[1].forEach(Z=>g.remove(Z)),p.current[2]===!0?I(Se,w[2],U[2]):U[2].forEach(Z=>g.remove(Z)),p.current[3]===!0?I(Se,w[3],U[3]):U[3].forEach(Z=>g.remove(Z)),p.current[4]===!0?I(Se,w[4],U[4]):U[4].forEach(Z=>g.remove(Z)),p.current[5]===!0?I(Se,w[5],U[5]):U[5].forEach(Z=>g.remove(Z)),p.current[6]===!0?I(Se,w[6],U[6]):U[6].forEach(Z=>g.remove(Z)),p.current[7]===!0?I(Se,w[7],U[7]):U[7].forEach(Z=>g.remove(Z))}},ie=(Ee,Se,V)=>{const Z=Math.cos(V),se=Math.sin(V),q={yz:ge=>[ge[0],Z*ge[1]-se*ge[2],se*ge[1]+Z*ge[2],ge[3]],xz:ge=>[Z*ge[0]-se*ge[2],ge[1],se*ge[0]+Z*ge[2],ge[3]],xy:ge=>[Z*ge[0]-se*ge[1],se*ge[0]+Z*ge[1],ge[2],ge[3]],wx:ge=>[Z*ge[0]-se*ge[3],ge[1],ge[2],se*ge[0]+Z*ge[3]],wy:ge=>[ge[0],Z*ge[1]-se*ge[3],ge[2],se*ge[1]+Z*ge[3]],wz:ge=>[ge[0],ge[1],Z*ge[2]-se*ge[3],se*ge[2]+Z*ge[3]]};for(let ge=0;ge<Ee.length;ge++)Ee[ge]=q[Se](Ee[ge])},de=Ee=>{const Se=Ee.key.toLowerCase(),V=.1,Z=.1;Ee.shiftKey?Se==="arrowup"?(ie(s.current,"yz",-V),f(se=>{let q=[...se];return q[0]-=V,q[0]=(q[0]-Math.PI)%Math.PI,q})):Se==="arrowdown"?(ie(s.current,"yz",V),f(se=>{let q=[...se];return q[0]+=V,q[0]=(q[0]-Math.PI)%Math.PI,q})):Se==="arrowleft"?(ie(s.current,"xz",V),f(se=>{let q=[...se];return q[1]+=V,q[1]=(q[1]-Math.PI)%Math.PI,q})):Se==="arrowright"?(ie(s.current,"xz",-V),f(se=>{let q=[...se];return q[1]-=V,q[1]=(q[1]-Math.PI)%Math.PI,q})):Se==="m"?(ie(s.current,"xy",V),f(se=>{let q=[...se];return q[2]+=V,q[2]=(q[2]+Math.PI)%Math.PI,q})):Se==="n"?(ie(s.current,"xy",-V),f(se=>{let q=[...se];return q[2]-=V,q[2]=(q[2]+Math.PI)%Math.PI,q})):Se==="q"?(ie(s.current,"wx",V),f(se=>{let q=[...se];return q[3]+=V,q[3]=(q[3]+Math.PI)%Math.PI,q})):Se==="a"?(ie(s.current,"wx",-V),f(se=>{let q=[...se];return q[3]-=V,q[3]=(q[3]+Math.PI)%Math.PI,q})):Se==="w"?(ie(s.current,"wy",-V),f(se=>{let q=[...se];return q[4]-=V,q[4]=(q[4]-Math.PI)%Math.PI,q})):Se==="s"?(ie(s.current,"wy",V),f(se=>{let q=[...se];return q[4]+=V,q[4]=(q[4]-Math.PI)%Math.PI,q})):Se==="e"?(ie(s.current,"wz",V),f(se=>{let q=[...se];return q[5]+=V,q[5]=(q[5]+Math.PI)%Math.PI,q})):Se==="d"?(ie(s.current,"wz",-V),f(se=>{let q=[...se];return q[5]-=V,q[5]=(q[5]+Math.PI)%Math.PI,q})):Se==="r"?l.current[0]-=V:Se==="f"?l.current[0]+=V:Se==="t"?l.current[1]+=V:Se==="g"?l.current[1]-=V:Se==="y"?l.current[2]+=V:Se==="h"?l.current[2]-=V:Se==="u"?l.current[3]+=V:Se==="j"?l.current[3]-=V:Se==="i"?l.current[4]-=V:Se==="k"?l.current[4]+=V:Se==="o"?l.current[5]+=V:Se==="l"&&(l.current[5]-=V):n(se=>{const q=[...se];return Se==="arrowup"?q[1]+=Z:Se==="arrowdown"?q[1]-=Z:Se==="arrowleft"?q[0]-=Z:Se==="arrowright"?q[0]+=Z:Se==="w"?q[2]-=Z:Se==="s"?q[2]+=Z:Se==="a"?q[3]-=Z:Se==="d"&&(q[3]+=Z),q})};document.addEventListener("keydown",de),x.update();function Ae(){requestAnimationFrame(Ae),pe(),H(),x.update(),S.render(g,v)}return s.current=E,Ae(),()=>{document.removeEventListener("keydown",de),document.removeEventListener("resize",T),t.current.removeChild(S.domElement)}},[]),ne.jsxs("div",{tabIndex:0,style:{outline:"none",position:"relative"},children:[ne.jsxs("div",{style:{position:"absolute",top:"10px",right:"20px",color:"white"},children:[ne.jsx("table",{style:{borderCollapse:"collapse",borderSpacing:0,border:"1px solid #ccc"},children:ne.jsxs("tbody",{children:[ne.jsxs("tr",{children:[ne.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ne.jsxs("p",{children:["X: ",e[0].toFixed(2)]})}),ne.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ne.jsxs("p",{children:["Z: ",e[2].toFixed(2)]})})]}),ne.jsxs("tr",{children:[ne.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ne.jsxs("p",{children:["Y: ",e[1].toFixed(2)]})}),ne.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ne.jsxs("p",{children:["W: ",(e[3]-_).toFixed(2)]})})]}),ne.jsxs("tr",{children:[ne.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ne.jsxs("p",{children:["YZ: ",(-u[0]%Math.PI).toFixed(2)]})}),ne.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ne.jsxs("p",{children:["XY: ",(u[2]%Math.PI).toFixed(2)]})})]}),ne.jsxs("tr",{children:[ne.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ne.jsxs("p",{children:["XZ: ",(-u[1]%Math.PI).toFixed(2)]})}),ne.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ne.jsxs("p",{children:["WX: ",(u[3]%Math.PI).toFixed(2)]})})]}),ne.jsxs("tr",{children:[ne.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ne.jsxs("p",{children:["WY: ",(-u[4]%Math.PI).toFixed(2)]})}),ne.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ne.jsxs("p",{children:["WZ: ",(u[5]%Math.PI).toFixed(2)]})})]})]})}),ne.jsxs("div",{children:[ne.jsx("input",{type:"checkbox",id:"planar-view",onChange:()=>h.current=!h.current}),ne.jsx("label",{htmlFor:"planar-view",children:"Planar View"})]}),ne.jsx("div",{children:ne.jsx("table",{children:ne.jsxs("tbody",{children:[ne.jsxs("tr",{children:[ne.jsxs("td",{children:[ne.jsx("input",{type:"checkbox",id:"visCube1",onChange:()=>p.current[0]=!p.current[0]}),ne.jsx("label",{htmlFor:"visCube1",children:"Cube 1"})]}),ne.jsxs("td",{children:[ne.jsx("input",{type:"checkbox",id:"visCube2",onChange:()=>p.current[1]=!p.current[1]}),ne.jsx("label",{htmlFor:"visCube2",children:"Cube 2"})]})]}),ne.jsxs("tr",{children:[ne.jsxs("td",{children:[ne.jsx("input",{type:"checkbox",id:"visCube3",onChange:()=>p.current[2]=!p.current[2]}),ne.jsx("label",{htmlFor:"visCube3",children:"Cube 3"})]}),ne.jsxs("td",{children:[ne.jsx("input",{type:"checkbox",id:"visCube4",onChange:()=>p.current[3]=!p.current[3]}),ne.jsx("label",{htmlFor:"visCube4",children:"Cube 4"})]})]}),ne.jsxs("tr",{children:[ne.jsxs("td",{children:[ne.jsx("input",{type:"checkbox",id:"visCube5",onChange:()=>p.current[4]=!p.current[4]}),ne.jsx("label",{htmlFor:"visCube5",children:"Cube 5"})]}),ne.jsxs("td",{children:[ne.jsx("input",{type:"checkbox",id:"visCube6",onChange:()=>p.current[5]=!p.current[5]}),ne.jsx("label",{htmlFor:"visCube6",children:"Cube 6"})]})]}),ne.jsxs("tr",{children:[ne.jsxs("td",{children:[ne.jsx("input",{type:"checkbox",id:"visCube7",onChange:()=>p.current[6]=!p.current[6]}),ne.jsx("label",{htmlFor:"visCube7",children:"Cube 7"})]}),ne.jsxs("td",{children:[ne.jsx("input",{type:"checkbox",id:"visCube8",onChange:()=>p.current[7]=!p.current[7]}),ne.jsx("label",{htmlFor:"visCube8",children:"Cube 8"})]})]})]})})})]}),ne.jsx(VF,{}),ne.jsx("div",{ref:t})]})}const WF="modulepreload",XF=function(t){return"/Tesseract/"+t},Hy={},YF=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=Promise.allSettled(n.map(f=>{if(f=XF(f),f in Hy)return;Hy[f]=!0;const h=f.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${p}`))return;const _=document.createElement("link");if(_.rel=h?"stylesheet":WF,h||(_.as="script"),_.crossOrigin="",_.href=f,u&&_.setAttribute("nonce",u),document.head.appendChild(_),h)return new Promise((g,v)=>{_.addEventListener("load",g),_.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return s.then(l=>{for(const u of l||[])u.status==="rejected"&&o(u.reason);return e().catch(o)})};function jF(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:i,onRegistered:s,onRegisteredSW:o,onRegisterError:l}=t;let u,f,h;const p=async(g=!0)=>{await f,await(h==null?void 0:h())};async function _(){if("serviceWorker"in navigator){if(u=await YF(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:g}},[]).then(({Workbox:g})=>new g("/Tesseract/sw.js",{scope:"/Tesseract/",type:"classic"})).catch(g=>{l==null||l(g)}),!u)return;h=async()=>{await(u==null?void 0:u.messageSkipWaiting())};{let g=!1;const v=()=>{g=!0,u==null||u.addEventListener("controlling",S=>{S.isUpdate&&window.location.reload()}),n==null||n()};u.addEventListener("installed",S=>{typeof S.isUpdate>"u"?typeof S.isExternal<"u"?S.isExternal?v():!g&&(i==null||i()):S.isExternal?window.location.reload():!g&&(i==null||i()):S.isUpdate||i==null||i()}),u.addEventListener("waiting",v),u.addEventListener("externalwaiting",v)}u.register({immediate:e}).then(g=>{o?o("/Tesseract/sw.js",g):s==null||s(g)}).catch(g=>{l==null||l(g)})}}return f=_(),p}function qF(t={}){const{immediate:e=!0,onNeedRefresh:n,onOfflineReady:i,onRegistered:s,onRegisteredSW:o,onRegisterError:l}=t,[u,f]=Tn.useState(!1),[h,p]=Tn.useState(!1),[_]=Tn.useState(()=>jF({immediate:e,onOfflineReady(){p(!0),i==null||i()},onNeedRefresh(){f(!0),n==null||n()},onRegistered:s,onRegisteredSW:o,onRegisterError:l}));return{needRefresh:[u,f],offlineReady:[h,p],updateServiceWorker:_}}function $F(){const{offlineReady:[t,e],needRefresh:[n,i],updateServiceWorker:s}=qF({onRegisteredSW(l,u){}});function o(){e(!1),i(!1)}return ne.jsx("div",{className:"PWABadge",role:"alert","aria-labelledby":"toast-message",children:(t||n)&&ne.jsxs("div",{className:"PWABadge-toast",children:[ne.jsx("div",{className:"PWABadge-message",children:t?ne.jsx("span",{id:"toast-message",children:"App ready to work offline"}):ne.jsx("span",{id:"toast-message",children:"New content available, click on reload button to update."})}),ne.jsxs("div",{className:"PWABadge-buttons",children:[n&&ne.jsx("button",{className:"PWABadge-toast-button",onClick:()=>s(!0),children:"Reload"}),ne.jsx("button",{className:"PWABadge-toast-button",onClick:()=>o(),children:"Close"})]})]})})}function KF(){return ne.jsxs(ne.Fragment,{children:[ne.jsx(GF,{}),ne.jsx($F,{})]})}Pp.createRoot(document.getElementById("root")).render(ne.jsx(YP.StrictMode,{children:ne.jsx(KF,{})}));
