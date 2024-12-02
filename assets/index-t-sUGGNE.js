(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();var vl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vy={exports:{}},Zf={},Gy={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hu=Symbol.for("react.element"),LP=Symbol.for("react.portal"),DP=Symbol.for("react.fragment"),IP=Symbol.for("react.strict_mode"),UP=Symbol.for("react.profiler"),NP=Symbol.for("react.provider"),FP=Symbol.for("react.context"),OP=Symbol.for("react.forward_ref"),BP=Symbol.for("react.suspense"),zP=Symbol.for("react.memo"),kP=Symbol.for("react.lazy"),Cv=Symbol.iterator;function HP(t){return t===null||typeof t!="object"?null:(t=Cv&&t[Cv]||t["@@iterator"],typeof t=="function"?t:null)}var Wy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xy=Object.assign,Yy={};function Za(t,e,n){this.props=t,this.context=e,this.refs=Yy,this.updater=n||Wy}Za.prototype.isReactComponent={};Za.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Za.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qy(){}qy.prototype=Za.prototype;function ug(t,e,n){this.props=t,this.context=e,this.refs=Yy,this.updater=n||Wy}var cg=ug.prototype=new qy;cg.constructor=ug;Xy(cg,Za.prototype);cg.isPureReactComponent=!0;var Pv=Array.isArray,jy=Object.prototype.hasOwnProperty,fg={current:null},$y={key:!0,ref:!0,__self:!0,__source:!0};function Ky(t,e,n){var i,s={},o=null,l=null;if(e!=null)for(i in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)jy.call(e,i)&&!$y.hasOwnProperty(i)&&(s[i]=e[i]);var u=arguments.length-2;if(u===1)s.children=n;else if(1<u){for(var f=Array(u),d=0;d<u;d++)f[d]=arguments[d+2];s.children=f}if(t&&t.defaultProps)for(i in u=t.defaultProps,u)s[i]===void 0&&(s[i]=u[i]);return{$$typeof:hu,type:t,key:o,ref:l,props:s,_owner:fg.current}}function VP(t,e){return{$$typeof:hu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dg(t){return typeof t=="object"&&t!==null&&t.$$typeof===hu}function GP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bv=/\/+/g;function Rh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?GP(""+t.key):e.toString(36)}function nf(t,e,n,i,s){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case hu:case LP:l=!0}}if(l)return l=t,s=s(l),t=i===""?"."+Rh(l,0):i,Pv(s)?(n="",t!=null&&(n=t.replace(bv,"$&/")+"/"),nf(s,e,n,"",function(d){return d})):s!=null&&(dg(s)&&(s=VP(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(bv,"$&/")+"/")+t)),e.push(s)),1;if(l=0,i=i===""?".":i+":",Pv(t))for(var u=0;u<t.length;u++){o=t[u];var f=i+Rh(o,u);l+=nf(o,e,n,f,s)}else if(f=HP(t),typeof f=="function")for(t=f.call(t),u=0;!(o=t.next()).done;)o=o.value,f=i+Rh(o,u++),l+=nf(o,e,n,f,s);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function pc(t,e,n){if(t==null)return t;var i=[],s=0;return nf(t,i,"","",function(o){return e.call(n,o,s++)}),i}function WP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qn={current:null},rf={transition:null},XP={ReactCurrentDispatcher:Qn,ReactCurrentBatchConfig:rf,ReactCurrentOwner:fg};function Zy(){throw Error("act(...) is not supported in production builds of React.")}_t.Children={map:pc,forEach:function(t,e,n){pc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pc(t,function(){e++}),e},toArray:function(t){return pc(t,function(e){return e})||[]},only:function(t){if(!dg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};_t.Component=Za;_t.Fragment=DP;_t.Profiler=UP;_t.PureComponent=ug;_t.StrictMode=IP;_t.Suspense=BP;_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XP;_t.act=Zy;_t.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Xy({},t.props),s=t.key,o=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=fg.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(f in e)jy.call(e,f)&&!$y.hasOwnProperty(f)&&(i[f]=e[f]===void 0&&u!==void 0?u[f]:e[f])}var f=arguments.length-2;if(f===1)i.children=n;else if(1<f){u=Array(f);for(var d=0;d<f;d++)u[d]=arguments[d+2];i.children=u}return{$$typeof:hu,type:t.type,key:s,ref:o,props:i,_owner:l}};_t.createContext=function(t){return t={$$typeof:FP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:NP,_context:t},t.Consumer=t};_t.createElement=Ky;_t.createFactory=function(t){var e=Ky.bind(null,t);return e.type=t,e};_t.createRef=function(){return{current:null}};_t.forwardRef=function(t){return{$$typeof:OP,render:t}};_t.isValidElement=dg;_t.lazy=function(t){return{$$typeof:kP,_payload:{_status:-1,_result:t},_init:WP}};_t.memo=function(t,e){return{$$typeof:zP,type:t,compare:e===void 0?null:e}};_t.startTransition=function(t){var e=rf.transition;rf.transition={};try{t()}finally{rf.transition=e}};_t.unstable_act=Zy;_t.useCallback=function(t,e){return Qn.current.useCallback(t,e)};_t.useContext=function(t){return Qn.current.useContext(t)};_t.useDebugValue=function(){};_t.useDeferredValue=function(t){return Qn.current.useDeferredValue(t)};_t.useEffect=function(t,e){return Qn.current.useEffect(t,e)};_t.useId=function(){return Qn.current.useId()};_t.useImperativeHandle=function(t,e,n){return Qn.current.useImperativeHandle(t,e,n)};_t.useInsertionEffect=function(t,e){return Qn.current.useInsertionEffect(t,e)};_t.useLayoutEffect=function(t,e){return Qn.current.useLayoutEffect(t,e)};_t.useMemo=function(t,e){return Qn.current.useMemo(t,e)};_t.useReducer=function(t,e,n){return Qn.current.useReducer(t,e,n)};_t.useRef=function(t){return Qn.current.useRef(t)};_t.useState=function(t){return Qn.current.useState(t)};_t.useSyncExternalStore=function(t,e,n){return Qn.current.useSyncExternalStore(t,e,n)};_t.useTransition=function(){return Qn.current.useTransition()};_t.version="18.3.1";Gy.exports=_t;var Ln=Gy.exports;const YP=Hy(Ln);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qP=Ln,jP=Symbol.for("react.element"),$P=Symbol.for("react.fragment"),KP=Object.prototype.hasOwnProperty,ZP=qP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QP={key:!0,ref:!0,__self:!0,__source:!0};function Qy(t,e,n){var i,s={},o=null,l=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(i in e)KP.call(e,i)&&!QP.hasOwnProperty(i)&&(s[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)s[i]===void 0&&(s[i]=e[i]);return{$$typeof:jP,type:t,key:o,ref:l,props:s,_owner:ZP.current}}Zf.Fragment=$P;Zf.jsx=Qy;Zf.jsxs=Qy;Vy.exports=Zf;var ve=Vy.exports,Pp={},Jy={exports:{}},Ri={},eS={exports:{}},tS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,Q){var V=U.length;U.push(Q);e:for(;0<V;){var te=V-1>>>1,de=U[te];if(0<s(de,Q))U[te]=Q,U[V]=de,V=te;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var Q=U[0],V=U.pop();if(V!==Q){U[0]=V;e:for(var te=0,de=U.length,vt=de>>>1;te<vt;){var re=2*(te+1)-1,xe=U[re],Me=re+1,Te=U[Me];if(0>s(xe,V))Me<de&&0>s(Te,xe)?(U[te]=Te,U[Me]=V,te=Me):(U[te]=xe,U[re]=V,te=re);else if(Me<de&&0>s(Te,V))U[te]=Te,U[Me]=V,te=Me;else break e}}return Q}function s(U,Q){var V=U.sortIndex-Q.sortIndex;return V!==0?V:U.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}var f=[],d=[],m=1,_=null,g=3,v=!1,S=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(U){for(var Q=n(d);Q!==null;){if(Q.callback===null)i(d);else if(Q.startTime<=U)i(d),Q.sortIndex=Q.expirationTime,e(f,Q);else break;Q=n(d)}}function w(U){if(T=!1,M(U),!S)if(n(f)!==null)S=!0,J(O);else{var Q=n(d);Q!==null&&j(w,Q.startTime-U)}}function O(U,Q){S=!1,T&&(T=!1,h(B),B=-1),v=!0;var V=g;try{for(M(Q),_=n(f);_!==null&&(!(_.expirationTime>Q)||U&&!H());){var te=_.callback;if(typeof te=="function"){_.callback=null,g=_.priorityLevel;var de=te(_.expirationTime<=Q);Q=t.unstable_now(),typeof de=="function"?_.callback=de:_===n(f)&&i(f),M(Q)}else i(f);_=n(f)}if(_!==null)var vt=!0;else{var re=n(d);re!==null&&j(w,re.startTime-Q),vt=!1}return vt}finally{_=null,g=V,v=!1}}var N=!1,I=null,B=-1,L=5,C=-1;function H(){return!(t.unstable_now()-C<L)}function ae(){if(I!==null){var U=t.unstable_now();C=U;var Q=!0;try{Q=I(!0,U)}finally{Q?$():(N=!1,I=null)}}else N=!1}var $;if(typeof E=="function")$=function(){E(ae)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,me=fe.port2;fe.port1.onmessage=ae,$=function(){me.postMessage(null)}}else $=function(){x(ae,0)};function J(U){I=U,N||(N=!0,$())}function j(U,Q){B=x(function(){U(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){S||v||(S=!0,J(O))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(U){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var V=g;g=Q;try{return U()}finally{g=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,Q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var V=g;g=U;try{return Q()}finally{g=V}},t.unstable_scheduleCallback=function(U,Q,V){var te=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?te+V:te):V=te,U){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=V+de,U={id:m++,callback:Q,priorityLevel:U,startTime:V,expirationTime:de,sortIndex:-1},V>te?(U.sortIndex=V,e(d,U),n(f)===null&&U===n(d)&&(T?(h(B),B=-1):T=!0,j(w,V-te))):(U.sortIndex=de,e(f,U),S||v||(S=!0,J(O))),U},t.unstable_shouldYield=H,t.unstable_wrapCallback=function(U){var Q=g;return function(){var V=g;g=Q;try{return U.apply(this,arguments)}finally{g=V}}}})(tS);eS.exports=tS;var JP=eS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eb=Ln,Ai=JP;function Se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nS=new Set,jl={};function bo(t,e){Oa(t,e),Oa(t+"Capture",e)}function Oa(t,e){for(jl[t]=e,t=0;t<e.length;t++)nS.add(e[t])}var Zr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bp=Object.prototype.hasOwnProperty,tb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lv={},Dv={};function nb(t){return bp.call(Dv,t)?!0:bp.call(Lv,t)?!1:tb.test(t)?Dv[t]=!0:(Lv[t]=!0,!1)}function ib(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rb(t,e,n,i){if(e===null||typeof e>"u"||ib(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jn(t,e,n,i,s,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var In={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){In[t]=new Jn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];In[e]=new Jn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){In[t]=new Jn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){In[t]=new Jn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){In[t]=new Jn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){In[t]=new Jn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){In[t]=new Jn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){In[t]=new Jn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){In[t]=new Jn(t,5,!1,t.toLowerCase(),null,!1,!1)});var hg=/[\-:]([a-z])/g;function pg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hg,pg);In[e]=new Jn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hg,pg);In[e]=new Jn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hg,pg);In[e]=new Jn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){In[t]=new Jn(t,1,!1,t.toLowerCase(),null,!1,!1)});In.xlinkHref=new Jn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){In[t]=new Jn(t,1,!1,t.toLowerCase(),null,!0,!0)});function mg(t,e,n,i){var s=In.hasOwnProperty(e)?In[e]:null;(s!==null?s.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rb(e,n,s,i)&&(n=null),i||s===null?nb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,i=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var is=eb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mc=Symbol.for("react.element"),ha=Symbol.for("react.portal"),pa=Symbol.for("react.fragment"),gg=Symbol.for("react.strict_mode"),Lp=Symbol.for("react.profiler"),iS=Symbol.for("react.provider"),rS=Symbol.for("react.context"),_g=Symbol.for("react.forward_ref"),Dp=Symbol.for("react.suspense"),Ip=Symbol.for("react.suspense_list"),vg=Symbol.for("react.memo"),ys=Symbol.for("react.lazy"),sS=Symbol.for("react.offscreen"),Iv=Symbol.iterator;function xl(t){return t===null||typeof t!="object"?null:(t=Iv&&t[Iv]||t["@@iterator"],typeof t=="function"?t:null)}var en=Object.assign,Ch;function Dl(t){if(Ch===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ch=e&&e[1]||""}return`
`+Ch+t}var Ph=!1;function bh(t,e){if(!t||Ph)return"";Ph=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var i=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){i=d}t.call(e.prototype)}else{try{throw Error()}catch(d){i=d}t()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),o=i.stack.split(`
`),l=s.length-1,u=o.length-1;1<=l&&0<=u&&s[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(s[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||s[l]!==o[u]){var f=`
`+s[l].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=l&&0<=u);break}}}finally{Ph=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Dl(t):""}function sb(t){switch(t.tag){case 5:return Dl(t.type);case 16:return Dl("Lazy");case 13:return Dl("Suspense");case 19:return Dl("SuspenseList");case 0:case 2:case 15:return t=bh(t.type,!1),t;case 11:return t=bh(t.type.render,!1),t;case 1:return t=bh(t.type,!0),t;default:return""}}function Up(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case pa:return"Fragment";case ha:return"Portal";case Lp:return"Profiler";case gg:return"StrictMode";case Dp:return"Suspense";case Ip:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case rS:return(t.displayName||"Context")+".Consumer";case iS:return(t._context.displayName||"Context")+".Provider";case _g:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vg:return e=t.displayName||null,e!==null?e:Up(t.type)||"Memo";case ys:e=t._payload,t=t._init;try{return Up(t(e))}catch{}}return null}function ob(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Up(e);case 8:return e===gg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Bs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function oS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ab(t){var e=oS(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gc(t){t._valueTracker||(t._valueTracker=ab(t))}function aS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=oS(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Sf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Np(t,e){var n=e.checked;return en({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Uv(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Bs(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lS(t,e){e=e.checked,e!=null&&mg(t,"checked",e,!1)}function Fp(t,e){lS(t,e);var n=Bs(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Op(t,e.type,n):e.hasOwnProperty("defaultValue")&&Op(t,e.type,Bs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Op(t,e,n){(e!=="number"||Sf(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Il=Array.isArray;function Ra(t,e,n,i){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Bs(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Bp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Se(91));return en({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Se(92));if(Il(n)){if(1<n.length)throw Error(Se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Bs(n)}}function uS(t,e){var n=Bs(e.value),i=Bs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ov(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cS(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _c,fS=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_c=_c||document.createElement("div"),_c.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_c.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $l(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ol={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lb=["Webkit","ms","Moz","O"];Object.keys(Ol).forEach(function(t){lb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ol[e]=Ol[t]})});function dS(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ol.hasOwnProperty(t)&&Ol[t]?(""+e).trim():e+"px"}function hS(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=dS(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,s):t[n]=s}}var ub=en({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kp(t,e){if(e){if(ub[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Se(62))}}function Hp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vp=null;function xg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gp=null,Ca=null,Pa=null;function Bv(t){if(t=gu(t)){if(typeof Gp!="function")throw Error(Se(280));var e=t.stateNode;e&&(e=nd(e),Gp(t.stateNode,t.type,e))}}function pS(t){Ca?Pa?Pa.push(t):Pa=[t]:Ca=t}function mS(){if(Ca){var t=Ca,e=Pa;if(Pa=Ca=null,Bv(t),e)for(t=0;t<e.length;t++)Bv(e[t])}}function gS(t,e){return t(e)}function _S(){}var Lh=!1;function vS(t,e,n){if(Lh)return t(e,n);Lh=!0;try{return gS(t,e,n)}finally{Lh=!1,(Ca!==null||Pa!==null)&&(_S(),mS())}}function Kl(t,e){var n=t.stateNode;if(n===null)return null;var i=nd(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Se(231,e,typeof n));return n}var Wp=!1;if(Zr)try{var yl={};Object.defineProperty(yl,"passive",{get:function(){Wp=!0}}),window.addEventListener("test",yl,yl),window.removeEventListener("test",yl,yl)}catch{Wp=!1}function cb(t,e,n,i,s,o,l,u,f){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(m){this.onError(m)}}var Bl=!1,Ef=null,Mf=!1,Xp=null,fb={onError:function(t){Bl=!0,Ef=t}};function db(t,e,n,i,s,o,l,u,f){Bl=!1,Ef=null,cb.apply(fb,arguments)}function hb(t,e,n,i,s,o,l,u,f){if(db.apply(this,arguments),Bl){if(Bl){var d=Ef;Bl=!1,Ef=null}else throw Error(Se(198));Mf||(Mf=!0,Xp=d)}}function Lo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zv(t){if(Lo(t)!==t)throw Error(Se(188))}function pb(t){var e=t.alternate;if(!e){if(e=Lo(t),e===null)throw Error(Se(188));return e!==t?null:t}for(var n=t,i=e;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return zv(s),t;if(o===i)return zv(s),e;o=o.sibling}throw Error(Se(188))}if(n.return!==i.return)n=s,i=o;else{for(var l=!1,u=s.child;u;){if(u===n){l=!0,n=s,i=o;break}if(u===i){l=!0,i=s,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,i=s;break}if(u===i){l=!0,i=o,n=s;break}u=u.sibling}if(!l)throw Error(Se(189))}}if(n.alternate!==i)throw Error(Se(190))}if(n.tag!==3)throw Error(Se(188));return n.stateNode.current===n?t:e}function yS(t){return t=pb(t),t!==null?SS(t):null}function SS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=SS(t);if(e!==null)return e;t=t.sibling}return null}var ES=Ai.unstable_scheduleCallback,kv=Ai.unstable_cancelCallback,mb=Ai.unstable_shouldYield,gb=Ai.unstable_requestPaint,ln=Ai.unstable_now,_b=Ai.unstable_getCurrentPriorityLevel,yg=Ai.unstable_ImmediatePriority,MS=Ai.unstable_UserBlockingPriority,Tf=Ai.unstable_NormalPriority,vb=Ai.unstable_LowPriority,TS=Ai.unstable_IdlePriority,Qf=null,Er=null;function xb(t){if(Er&&typeof Er.onCommitFiberRoot=="function")try{Er.onCommitFiberRoot(Qf,t,void 0,(t.current.flags&128)===128)}catch{}}var cr=Math.clz32?Math.clz32:Eb,yb=Math.log,Sb=Math.LN2;function Eb(t){return t>>>=0,t===0?32:31-(yb(t)/Sb|0)|0}var vc=64,xc=4194304;function Ul(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wf(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,o=t.pingedLanes,l=n&268435455;if(l!==0){var u=l&~s;u!==0?i=Ul(u):(o&=l,o!==0&&(i=Ul(o)))}else l=n&~s,l!==0?i=Ul(l):o!==0&&(i=Ul(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&s)&&(s=i&-i,o=e&-e,s>=o||s===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-cr(e),s=1<<n,i|=t[n],e&=~s;return i}function Mb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tb(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-cr(o),u=1<<l,f=s[l];f===-1?(!(u&n)||u&i)&&(s[l]=Mb(u,e)):f<=e&&(t.expiredLanes|=u),o&=~u}}function Yp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wS(){var t=vc;return vc<<=1,!(vc&4194240)&&(vc=64),t}function Dh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-cr(e),t[e]=n}function wb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-cr(n),o=1<<s;e[s]=0,i[s]=-1,t[s]=-1,n&=~o}}function Sg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-cr(n),s=1<<i;s&e|t[i]&e&&(t[i]|=e),n&=~s}}var It=0;function AS(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var RS,Eg,CS,PS,bS,qp=!1,yc=[],Cs=null,Ps=null,bs=null,Zl=new Map,Ql=new Map,Ms=[],Ab="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hv(t,e){switch(t){case"focusin":case"focusout":Cs=null;break;case"dragenter":case"dragleave":Ps=null;break;case"mouseover":case"mouseout":bs=null;break;case"pointerover":case"pointerout":Zl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ql.delete(e.pointerId)}}function Sl(t,e,n,i,s,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[s]},e!==null&&(e=gu(e),e!==null&&Eg(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Rb(t,e,n,i,s){switch(e){case"focusin":return Cs=Sl(Cs,t,e,n,i,s),!0;case"dragenter":return Ps=Sl(Ps,t,e,n,i,s),!0;case"mouseover":return bs=Sl(bs,t,e,n,i,s),!0;case"pointerover":var o=s.pointerId;return Zl.set(o,Sl(Zl.get(o)||null,t,e,n,i,s)),!0;case"gotpointercapture":return o=s.pointerId,Ql.set(o,Sl(Ql.get(o)||null,t,e,n,i,s)),!0}return!1}function LS(t){var e=mo(t.target);if(e!==null){var n=Lo(e);if(n!==null){if(e=n.tag,e===13){if(e=xS(n),e!==null){t.blockedOn=e,bS(t.priority,function(){CS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sf(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Vp=i,n.target.dispatchEvent(i),Vp=null}else return e=gu(n),e!==null&&Eg(e),t.blockedOn=n,!1;e.shift()}return!0}function Vv(t,e,n){sf(t)&&n.delete(e)}function Cb(){qp=!1,Cs!==null&&sf(Cs)&&(Cs=null),Ps!==null&&sf(Ps)&&(Ps=null),bs!==null&&sf(bs)&&(bs=null),Zl.forEach(Vv),Ql.forEach(Vv)}function El(t,e){t.blockedOn===e&&(t.blockedOn=null,qp||(qp=!0,Ai.unstable_scheduleCallback(Ai.unstable_NormalPriority,Cb)))}function Jl(t){function e(s){return El(s,t)}if(0<yc.length){El(yc[0],t);for(var n=1;n<yc.length;n++){var i=yc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Cs!==null&&El(Cs,t),Ps!==null&&El(Ps,t),bs!==null&&El(bs,t),Zl.forEach(e),Ql.forEach(e),n=0;n<Ms.length;n++)i=Ms[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ms.length&&(n=Ms[0],n.blockedOn===null);)LS(n),n.blockedOn===null&&Ms.shift()}var ba=is.ReactCurrentBatchConfig,Af=!0;function Pb(t,e,n,i){var s=It,o=ba.transition;ba.transition=null;try{It=1,Mg(t,e,n,i)}finally{It=s,ba.transition=o}}function bb(t,e,n,i){var s=It,o=ba.transition;ba.transition=null;try{It=4,Mg(t,e,n,i)}finally{It=s,ba.transition=o}}function Mg(t,e,n,i){if(Af){var s=jp(t,e,n,i);if(s===null)Vh(t,e,i,Rf,n),Hv(t,i);else if(Rb(s,t,e,n,i))i.stopPropagation();else if(Hv(t,i),e&4&&-1<Ab.indexOf(t)){for(;s!==null;){var o=gu(s);if(o!==null&&RS(o),o=jp(t,e,n,i),o===null&&Vh(t,e,i,Rf,n),o===s)break;s=o}s!==null&&i.stopPropagation()}else Vh(t,e,i,null,n)}}var Rf=null;function jp(t,e,n,i){if(Rf=null,t=xg(i),t=mo(t),t!==null)if(e=Lo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Rf=t,null}function DS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_b()){case yg:return 1;case MS:return 4;case Tf:case vb:return 16;case TS:return 536870912;default:return 16}default:return 16}}var As=null,Tg=null,of=null;function IS(){if(of)return of;var t,e=Tg,n=e.length,i,s="value"in As?As.value:As.textContent,o=s.length;for(t=0;t<n&&e[t]===s[t];t++);var l=n-t;for(i=1;i<=l&&e[n-i]===s[o-i];i++);return of=s.slice(t,1<i?1-i:void 0)}function af(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sc(){return!0}function Gv(){return!1}function Ci(t){function e(n,i,s,o,l){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Sc:Gv,this.isPropagationStopped=Gv,this}return en(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sc)},persist:function(){},isPersistent:Sc}),e}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wg=Ci(Qa),mu=en({},Qa,{view:0,detail:0}),Lb=Ci(mu),Ih,Uh,Ml,Jf=en({},mu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ag,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ml&&(Ml&&t.type==="mousemove"?(Ih=t.screenX-Ml.screenX,Uh=t.screenY-Ml.screenY):Uh=Ih=0,Ml=t),Ih)},movementY:function(t){return"movementY"in t?t.movementY:Uh}}),Wv=Ci(Jf),Db=en({},Jf,{dataTransfer:0}),Ib=Ci(Db),Ub=en({},mu,{relatedTarget:0}),Nh=Ci(Ub),Nb=en({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Fb=Ci(Nb),Ob=en({},Qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bb=Ci(Ob),zb=en({},Qa,{data:0}),Xv=Ci(zb),kb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Vb[t])?!!e[t]:!1}function Ag(){return Gb}var Wb=en({},mu,{key:function(t){if(t.key){var e=kb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=af(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ag,charCode:function(t){return t.type==="keypress"?af(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?af(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xb=Ci(Wb),Yb=en({},Jf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yv=Ci(Yb),qb=en({},mu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ag}),jb=Ci(qb),$b=en({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kb=Ci($b),Zb=en({},Jf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qb=Ci(Zb),Jb=[9,13,27,32],Rg=Zr&&"CompositionEvent"in window,zl=null;Zr&&"documentMode"in document&&(zl=document.documentMode);var e2=Zr&&"TextEvent"in window&&!zl,US=Zr&&(!Rg||zl&&8<zl&&11>=zl),qv=" ",jv=!1;function NS(t,e){switch(t){case"keyup":return Jb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function FS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ma=!1;function t2(t,e){switch(t){case"compositionend":return FS(e);case"keypress":return e.which!==32?null:(jv=!0,qv);case"textInput":return t=e.data,t===qv&&jv?null:t;default:return null}}function n2(t,e){if(ma)return t==="compositionend"||!Rg&&NS(t,e)?(t=IS(),of=Tg=As=null,ma=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return US&&e.locale!=="ko"?null:e.data;default:return null}}var i2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $v(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!i2[t.type]:e==="textarea"}function OS(t,e,n,i){pS(i),e=Cf(e,"onChange"),0<e.length&&(n=new wg("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var kl=null,eu=null;function r2(t){jS(t,0)}function ed(t){var e=va(t);if(aS(e))return t}function s2(t,e){if(t==="change")return e}var BS=!1;if(Zr){var Fh;if(Zr){var Oh="oninput"in document;if(!Oh){var Kv=document.createElement("div");Kv.setAttribute("oninput","return;"),Oh=typeof Kv.oninput=="function"}Fh=Oh}else Fh=!1;BS=Fh&&(!document.documentMode||9<document.documentMode)}function Zv(){kl&&(kl.detachEvent("onpropertychange",zS),eu=kl=null)}function zS(t){if(t.propertyName==="value"&&ed(eu)){var e=[];OS(e,eu,t,xg(t)),vS(r2,e)}}function o2(t,e,n){t==="focusin"?(Zv(),kl=e,eu=n,kl.attachEvent("onpropertychange",zS)):t==="focusout"&&Zv()}function a2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ed(eu)}function l2(t,e){if(t==="click")return ed(e)}function u2(t,e){if(t==="input"||t==="change")return ed(e)}function c2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hr=typeof Object.is=="function"?Object.is:c2;function tu(t,e){if(hr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!bp.call(e,s)||!hr(t[s],e[s]))return!1}return!0}function Qv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jv(t,e){var n=Qv(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qv(n)}}function kS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?kS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function HS(){for(var t=window,e=Sf();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sf(t.document)}return e}function Cg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function f2(t){var e=HS(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&kS(n.ownerDocument.documentElement,n)){if(i!==null&&Cg(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,o=Math.min(i.start,s);i=i.end===void 0?o:Math.min(i.end,s),!t.extend&&o>i&&(s=i,i=o,o=s),s=Jv(n,o);var l=Jv(n,i);s&&l&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var d2=Zr&&"documentMode"in document&&11>=document.documentMode,ga=null,$p=null,Hl=null,Kp=!1;function ex(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kp||ga==null||ga!==Sf(i)||(i=ga,"selectionStart"in i&&Cg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Hl&&tu(Hl,i)||(Hl=i,i=Cf($p,"onSelect"),0<i.length&&(e=new wg("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ga)))}function Ec(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _a={animationend:Ec("Animation","AnimationEnd"),animationiteration:Ec("Animation","AnimationIteration"),animationstart:Ec("Animation","AnimationStart"),transitionend:Ec("Transition","TransitionEnd")},Bh={},VS={};Zr&&(VS=document.createElement("div").style,"AnimationEvent"in window||(delete _a.animationend.animation,delete _a.animationiteration.animation,delete _a.animationstart.animation),"TransitionEvent"in window||delete _a.transitionend.transition);function td(t){if(Bh[t])return Bh[t];if(!_a[t])return t;var e=_a[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in VS)return Bh[t]=e[n];return t}var GS=td("animationend"),WS=td("animationiteration"),XS=td("animationstart"),YS=td("transitionend"),qS=new Map,tx="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vs(t,e){qS.set(t,e),bo(e,[t])}for(var zh=0;zh<tx.length;zh++){var kh=tx[zh],h2=kh.toLowerCase(),p2=kh[0].toUpperCase()+kh.slice(1);Vs(h2,"on"+p2)}Vs(GS,"onAnimationEnd");Vs(WS,"onAnimationIteration");Vs(XS,"onAnimationStart");Vs("dblclick","onDoubleClick");Vs("focusin","onFocus");Vs("focusout","onBlur");Vs(YS,"onTransitionEnd");Oa("onMouseEnter",["mouseout","mouseover"]);Oa("onMouseLeave",["mouseout","mouseover"]);Oa("onPointerEnter",["pointerout","pointerover"]);Oa("onPointerLeave",["pointerout","pointerover"]);bo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bo("onBeforeInput",["compositionend","keypress","textInput","paste"]);bo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nl));function nx(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,hb(i,e,void 0,t),t.currentTarget=null}function jS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],s=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var l=i.length-1;0<=l;l--){var u=i[l],f=u.instance,d=u.currentTarget;if(u=u.listener,f!==o&&s.isPropagationStopped())break e;nx(s,u,d),o=f}else for(l=0;l<i.length;l++){if(u=i[l],f=u.instance,d=u.currentTarget,u=u.listener,f!==o&&s.isPropagationStopped())break e;nx(s,u,d),o=f}}}if(Mf)throw t=Xp,Mf=!1,Xp=null,t}function Xt(t,e){var n=e[tm];n===void 0&&(n=e[tm]=new Set);var i=t+"__bubble";n.has(i)||($S(e,t,2,!1),n.add(i))}function Hh(t,e,n){var i=0;e&&(i|=4),$S(n,t,i,e)}var Mc="_reactListening"+Math.random().toString(36).slice(2);function nu(t){if(!t[Mc]){t[Mc]=!0,nS.forEach(function(n){n!=="selectionchange"&&(m2.has(n)||Hh(n,!1,t),Hh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mc]||(e[Mc]=!0,Hh("selectionchange",!1,e))}}function $S(t,e,n,i){switch(DS(e)){case 1:var s=Pb;break;case 4:s=bb;break;default:s=Mg}n=s.bind(null,e,n,t),s=void 0,!Wp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Vh(t,e,n,i,s){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var u=i.stateNode.containerInfo;if(u===s||u.nodeType===8&&u.parentNode===s)break;if(l===4)for(l=i.return;l!==null;){var f=l.tag;if((f===3||f===4)&&(f=l.stateNode.containerInfo,f===s||f.nodeType===8&&f.parentNode===s))return;l=l.return}for(;u!==null;){if(l=mo(u),l===null)return;if(f=l.tag,f===5||f===6){i=o=l;continue e}u=u.parentNode}}i=i.return}vS(function(){var d=o,m=xg(n),_=[];e:{var g=qS.get(t);if(g!==void 0){var v=wg,S=t;switch(t){case"keypress":if(af(n)===0)break e;case"keydown":case"keyup":v=Xb;break;case"focusin":S="focus",v=Nh;break;case"focusout":S="blur",v=Nh;break;case"beforeblur":case"afterblur":v=Nh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Wv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Ib;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=jb;break;case GS:case WS:case XS:v=Fb;break;case YS:v=Kb;break;case"scroll":v=Lb;break;case"wheel":v=Qb;break;case"copy":case"cut":case"paste":v=Bb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Yv}var T=(e&4)!==0,x=!T&&t==="scroll",h=T?g!==null?g+"Capture":null:g;T=[];for(var E=d,M;E!==null;){M=E;var w=M.stateNode;if(M.tag===5&&w!==null&&(M=w,h!==null&&(w=Kl(E,h),w!=null&&T.push(iu(E,w,M)))),x)break;E=E.return}0<T.length&&(g=new v(g,S,null,n,m),_.push({event:g,listeners:T}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",g&&n!==Vp&&(S=n.relatedTarget||n.fromElement)&&(mo(S)||S[Qr]))break e;if((v||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,v?(S=n.relatedTarget||n.toElement,v=d,S=S?mo(S):null,S!==null&&(x=Lo(S),S!==x||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=d),v!==S)){if(T=Wv,w="onMouseLeave",h="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(T=Yv,w="onPointerLeave",h="onPointerEnter",E="pointer"),x=v==null?g:va(v),M=S==null?g:va(S),g=new T(w,E+"leave",v,n,m),g.target=x,g.relatedTarget=M,w=null,mo(m)===d&&(T=new T(h,E+"enter",S,n,m),T.target=M,T.relatedTarget=x,w=T),x=w,v&&S)t:{for(T=v,h=S,E=0,M=T;M;M=Ko(M))E++;for(M=0,w=h;w;w=Ko(w))M++;for(;0<E-M;)T=Ko(T),E--;for(;0<M-E;)h=Ko(h),M--;for(;E--;){if(T===h||h!==null&&T===h.alternate)break t;T=Ko(T),h=Ko(h)}T=null}else T=null;v!==null&&ix(_,g,v,T,!1),S!==null&&x!==null&&ix(_,x,S,T,!0)}}e:{if(g=d?va(d):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var O=s2;else if($v(g))if(BS)O=u2;else{O=a2;var N=o2}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(O=l2);if(O&&(O=O(t,d))){OS(_,O,n,m);break e}N&&N(t,g,d),t==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&Op(g,"number",g.value)}switch(N=d?va(d):window,t){case"focusin":($v(N)||N.contentEditable==="true")&&(ga=N,$p=d,Hl=null);break;case"focusout":Hl=$p=ga=null;break;case"mousedown":Kp=!0;break;case"contextmenu":case"mouseup":case"dragend":Kp=!1,ex(_,n,m);break;case"selectionchange":if(d2)break;case"keydown":case"keyup":ex(_,n,m)}var I;if(Rg)e:{switch(t){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else ma?NS(t,n)&&(B="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(US&&n.locale!=="ko"&&(ma||B!=="onCompositionStart"?B==="onCompositionEnd"&&ma&&(I=IS()):(As=m,Tg="value"in As?As.value:As.textContent,ma=!0)),N=Cf(d,B),0<N.length&&(B=new Xv(B,t,null,n,m),_.push({event:B,listeners:N}),I?B.data=I:(I=FS(n),I!==null&&(B.data=I)))),(I=e2?t2(t,n):n2(t,n))&&(d=Cf(d,"onBeforeInput"),0<d.length&&(m=new Xv("onBeforeInput","beforeinput",null,n,m),_.push({event:m,listeners:d}),m.data=I))}jS(_,e)})}function iu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cf(t,e){for(var n=e+"Capture",i=[];t!==null;){var s=t,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=Kl(t,n),o!=null&&i.unshift(iu(t,o,s)),o=Kl(t,e),o!=null&&i.push(iu(t,o,s))),t=t.return}return i}function Ko(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ix(t,e,n,i,s){for(var o=e._reactName,l=[];n!==null&&n!==i;){var u=n,f=u.alternate,d=u.stateNode;if(f!==null&&f===i)break;u.tag===5&&d!==null&&(u=d,s?(f=Kl(n,o),f!=null&&l.unshift(iu(n,f,u))):s||(f=Kl(n,o),f!=null&&l.push(iu(n,f,u)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var g2=/\r\n?/g,_2=/\u0000|\uFFFD/g;function rx(t){return(typeof t=="string"?t:""+t).replace(g2,`
`).replace(_2,"")}function Tc(t,e,n){if(e=rx(e),rx(t)!==e&&n)throw Error(Se(425))}function Pf(){}var Zp=null,Qp=null;function Jp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var em=typeof setTimeout=="function"?setTimeout:void 0,v2=typeof clearTimeout=="function"?clearTimeout:void 0,sx=typeof Promise=="function"?Promise:void 0,x2=typeof queueMicrotask=="function"?queueMicrotask:typeof sx<"u"?function(t){return sx.resolve(null).then(t).catch(y2)}:em;function y2(t){setTimeout(function(){throw t})}function Gh(t,e){var n=e,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){t.removeChild(s),Jl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);Jl(e)}function Ls(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ox(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ja=Math.random().toString(36).slice(2),yr="__reactFiber$"+Ja,ru="__reactProps$"+Ja,Qr="__reactContainer$"+Ja,tm="__reactEvents$"+Ja,S2="__reactListeners$"+Ja,E2="__reactHandles$"+Ja;function mo(t){var e=t[yr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qr]||n[yr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ox(t);t!==null;){if(n=t[yr])return n;t=ox(t)}return e}t=n,n=t.parentNode}return null}function gu(t){return t=t[yr]||t[Qr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function va(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Se(33))}function nd(t){return t[ru]||null}var nm=[],xa=-1;function Gs(t){return{current:t}}function Yt(t){0>xa||(t.current=nm[xa],nm[xa]=null,xa--)}function Vt(t,e){xa++,nm[xa]=t.current,t.current=e}var zs={},Gn=Gs(zs),li=Gs(!1),Eo=zs;function Ba(t,e){var n=t.type.contextTypes;if(!n)return zs;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in n)s[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function ui(t){return t=t.childContextTypes,t!=null}function bf(){Yt(li),Yt(Gn)}function ax(t,e,n){if(Gn.current!==zs)throw Error(Se(168));Vt(Gn,e),Vt(li,n)}function KS(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in e))throw Error(Se(108,ob(t)||"Unknown",s));return en({},n,i)}function Lf(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zs,Eo=Gn.current,Vt(Gn,t),Vt(li,li.current),!0}function lx(t,e,n){var i=t.stateNode;if(!i)throw Error(Se(169));n?(t=KS(t,e,Eo),i.__reactInternalMemoizedMergedChildContext=t,Yt(li),Yt(Gn),Vt(Gn,t)):Yt(li),Vt(li,n)}var Hr=null,id=!1,Wh=!1;function ZS(t){Hr===null?Hr=[t]:Hr.push(t)}function M2(t){id=!0,ZS(t)}function Ws(){if(!Wh&&Hr!==null){Wh=!0;var t=0,e=It;try{var n=Hr;for(It=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Hr=null,id=!1}catch(s){throw Hr!==null&&(Hr=Hr.slice(t+1)),ES(yg,Ws),s}finally{It=e,Wh=!1}}return null}var ya=[],Sa=0,Df=null,If=0,zi=[],ki=0,Mo=null,Gr=1,Wr="";function uo(t,e){ya[Sa++]=If,ya[Sa++]=Df,Df=t,If=e}function QS(t,e,n){zi[ki++]=Gr,zi[ki++]=Wr,zi[ki++]=Mo,Mo=t;var i=Gr;t=Wr;var s=32-cr(i)-1;i&=~(1<<s),n+=1;var o=32-cr(e)+s;if(30<o){var l=s-s%5;o=(i&(1<<l)-1).toString(32),i>>=l,s-=l,Gr=1<<32-cr(e)+s|n<<s|i,Wr=o+t}else Gr=1<<o|n<<s|i,Wr=t}function Pg(t){t.return!==null&&(uo(t,1),QS(t,1,0))}function bg(t){for(;t===Df;)Df=ya[--Sa],ya[Sa]=null,If=ya[--Sa],ya[Sa]=null;for(;t===Mo;)Mo=zi[--ki],zi[ki]=null,Wr=zi[--ki],zi[ki]=null,Gr=zi[--ki],zi[ki]=null}var wi=null,Ti=null,Kt=!1,ar=null;function JS(t,e){var n=Vi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ux(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wi=t,Ti=Ls(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wi=t,Ti=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mo!==null?{id:Gr,overflow:Wr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wi=t,Ti=null,!0):!1;default:return!1}}function im(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rm(t){if(Kt){var e=Ti;if(e){var n=e;if(!ux(t,e)){if(im(t))throw Error(Se(418));e=Ls(n.nextSibling);var i=wi;e&&ux(t,e)?JS(i,n):(t.flags=t.flags&-4097|2,Kt=!1,wi=t)}}else{if(im(t))throw Error(Se(418));t.flags=t.flags&-4097|2,Kt=!1,wi=t}}}function cx(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wi=t}function wc(t){if(t!==wi)return!1;if(!Kt)return cx(t),Kt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jp(t.type,t.memoizedProps)),e&&(e=Ti)){if(im(t))throw eE(),Error(Se(418));for(;e;)JS(t,e),e=Ls(e.nextSibling)}if(cx(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ti=Ls(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ti=null}}else Ti=wi?Ls(t.stateNode.nextSibling):null;return!0}function eE(){for(var t=Ti;t;)t=Ls(t.nextSibling)}function za(){Ti=wi=null,Kt=!1}function Lg(t){ar===null?ar=[t]:ar.push(t)}var T2=is.ReactCurrentBatchConfig;function Tl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Se(309));var i=n.stateNode}if(!i)throw Error(Se(147,t));var s=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var u=s.refs;l===null?delete u[o]:u[o]=l},e._stringRef=o,e)}if(typeof t!="string")throw Error(Se(284));if(!n._owner)throw Error(Se(290,t))}return t}function Ac(t,e){throw t=Object.prototype.toString.call(e),Error(Se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fx(t){var e=t._init;return e(t._payload)}function tE(t){function e(h,E){if(t){var M=h.deletions;M===null?(h.deletions=[E],h.flags|=16):M.push(E)}}function n(h,E){if(!t)return null;for(;E!==null;)e(h,E),E=E.sibling;return null}function i(h,E){for(h=new Map;E!==null;)E.key!==null?h.set(E.key,E):h.set(E.index,E),E=E.sibling;return h}function s(h,E){return h=Ns(h,E),h.index=0,h.sibling=null,h}function o(h,E,M){return h.index=M,t?(M=h.alternate,M!==null?(M=M.index,M<E?(h.flags|=2,E):M):(h.flags|=2,E)):(h.flags|=1048576,E)}function l(h){return t&&h.alternate===null&&(h.flags|=2),h}function u(h,E,M,w){return E===null||E.tag!==6?(E=Zh(M,h.mode,w),E.return=h,E):(E=s(E,M),E.return=h,E)}function f(h,E,M,w){var O=M.type;return O===pa?m(h,E,M.props.children,w,M.key):E!==null&&(E.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===ys&&fx(O)===E.type)?(w=s(E,M.props),w.ref=Tl(h,E,M),w.return=h,w):(w=pf(M.type,M.key,M.props,null,h.mode,w),w.ref=Tl(h,E,M),w.return=h,w)}function d(h,E,M,w){return E===null||E.tag!==4||E.stateNode.containerInfo!==M.containerInfo||E.stateNode.implementation!==M.implementation?(E=Qh(M,h.mode,w),E.return=h,E):(E=s(E,M.children||[]),E.return=h,E)}function m(h,E,M,w,O){return E===null||E.tag!==7?(E=So(M,h.mode,w,O),E.return=h,E):(E=s(E,M),E.return=h,E)}function _(h,E,M){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Zh(""+E,h.mode,M),E.return=h,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case mc:return M=pf(E.type,E.key,E.props,null,h.mode,M),M.ref=Tl(h,null,E),M.return=h,M;case ha:return E=Qh(E,h.mode,M),E.return=h,E;case ys:var w=E._init;return _(h,w(E._payload),M)}if(Il(E)||xl(E))return E=So(E,h.mode,M,null),E.return=h,E;Ac(h,E)}return null}function g(h,E,M,w){var O=E!==null?E.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return O!==null?null:u(h,E,""+M,w);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case mc:return M.key===O?f(h,E,M,w):null;case ha:return M.key===O?d(h,E,M,w):null;case ys:return O=M._init,g(h,E,O(M._payload),w)}if(Il(M)||xl(M))return O!==null?null:m(h,E,M,w,null);Ac(h,M)}return null}function v(h,E,M,w,O){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(M)||null,u(E,h,""+w,O);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case mc:return h=h.get(w.key===null?M:w.key)||null,f(E,h,w,O);case ha:return h=h.get(w.key===null?M:w.key)||null,d(E,h,w,O);case ys:var N=w._init;return v(h,E,M,N(w._payload),O)}if(Il(w)||xl(w))return h=h.get(M)||null,m(E,h,w,O,null);Ac(E,w)}return null}function S(h,E,M,w){for(var O=null,N=null,I=E,B=E=0,L=null;I!==null&&B<M.length;B++){I.index>B?(L=I,I=null):L=I.sibling;var C=g(h,I,M[B],w);if(C===null){I===null&&(I=L);break}t&&I&&C.alternate===null&&e(h,I),E=o(C,E,B),N===null?O=C:N.sibling=C,N=C,I=L}if(B===M.length)return n(h,I),Kt&&uo(h,B),O;if(I===null){for(;B<M.length;B++)I=_(h,M[B],w),I!==null&&(E=o(I,E,B),N===null?O=I:N.sibling=I,N=I);return Kt&&uo(h,B),O}for(I=i(h,I);B<M.length;B++)L=v(I,h,B,M[B],w),L!==null&&(t&&L.alternate!==null&&I.delete(L.key===null?B:L.key),E=o(L,E,B),N===null?O=L:N.sibling=L,N=L);return t&&I.forEach(function(H){return e(h,H)}),Kt&&uo(h,B),O}function T(h,E,M,w){var O=xl(M);if(typeof O!="function")throw Error(Se(150));if(M=O.call(M),M==null)throw Error(Se(151));for(var N=O=null,I=E,B=E=0,L=null,C=M.next();I!==null&&!C.done;B++,C=M.next()){I.index>B?(L=I,I=null):L=I.sibling;var H=g(h,I,C.value,w);if(H===null){I===null&&(I=L);break}t&&I&&H.alternate===null&&e(h,I),E=o(H,E,B),N===null?O=H:N.sibling=H,N=H,I=L}if(C.done)return n(h,I),Kt&&uo(h,B),O;if(I===null){for(;!C.done;B++,C=M.next())C=_(h,C.value,w),C!==null&&(E=o(C,E,B),N===null?O=C:N.sibling=C,N=C);return Kt&&uo(h,B),O}for(I=i(h,I);!C.done;B++,C=M.next())C=v(I,h,B,C.value,w),C!==null&&(t&&C.alternate!==null&&I.delete(C.key===null?B:C.key),E=o(C,E,B),N===null?O=C:N.sibling=C,N=C);return t&&I.forEach(function(ae){return e(h,ae)}),Kt&&uo(h,B),O}function x(h,E,M,w){if(typeof M=="object"&&M!==null&&M.type===pa&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case mc:e:{for(var O=M.key,N=E;N!==null;){if(N.key===O){if(O=M.type,O===pa){if(N.tag===7){n(h,N.sibling),E=s(N,M.props.children),E.return=h,h=E;break e}}else if(N.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===ys&&fx(O)===N.type){n(h,N.sibling),E=s(N,M.props),E.ref=Tl(h,N,M),E.return=h,h=E;break e}n(h,N);break}else e(h,N);N=N.sibling}M.type===pa?(E=So(M.props.children,h.mode,w,M.key),E.return=h,h=E):(w=pf(M.type,M.key,M.props,null,h.mode,w),w.ref=Tl(h,E,M),w.return=h,h=w)}return l(h);case ha:e:{for(N=M.key;E!==null;){if(E.key===N)if(E.tag===4&&E.stateNode.containerInfo===M.containerInfo&&E.stateNode.implementation===M.implementation){n(h,E.sibling),E=s(E,M.children||[]),E.return=h,h=E;break e}else{n(h,E);break}else e(h,E);E=E.sibling}E=Qh(M,h.mode,w),E.return=h,h=E}return l(h);case ys:return N=M._init,x(h,E,N(M._payload),w)}if(Il(M))return S(h,E,M,w);if(xl(M))return T(h,E,M,w);Ac(h,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,E!==null&&E.tag===6?(n(h,E.sibling),E=s(E,M),E.return=h,h=E):(n(h,E),E=Zh(M,h.mode,w),E.return=h,h=E),l(h)):n(h,E)}return x}var ka=tE(!0),nE=tE(!1),Uf=Gs(null),Nf=null,Ea=null,Dg=null;function Ig(){Dg=Ea=Nf=null}function Ug(t){var e=Uf.current;Yt(Uf),t._currentValue=e}function sm(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function La(t,e){Nf=t,Dg=Ea=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ai=!0),t.firstContext=null)}function Xi(t){var e=t._currentValue;if(Dg!==t)if(t={context:t,memoizedValue:e,next:null},Ea===null){if(Nf===null)throw Error(Se(308));Ea=t,Nf.dependencies={lanes:0,firstContext:t}}else Ea=Ea.next=t;return e}var go=null;function Ng(t){go===null?go=[t]:go.push(t)}function iE(t,e,n,i){var s=e.interleaved;return s===null?(n.next=n,Ng(e)):(n.next=s.next,s.next=n),e.interleaved=n,Jr(t,i)}function Jr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ss=!1;function Fg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ds(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Tt&2){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,Jr(t,n)}return s=i.interleaved,s===null?(e.next=e,Ng(i)):(e.next=s.next,s.next=e),i.interleaved=e,Jr(t,n)}function lf(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sg(t,n)}}function dx(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?s=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?s=o=e:o=o.next=e}else s=o=e;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ff(t,e,n,i){var s=t.updateQueue;Ss=!1;var o=s.firstBaseUpdate,l=s.lastBaseUpdate,u=s.shared.pending;if(u!==null){s.shared.pending=null;var f=u,d=f.next;f.next=null,l===null?o=d:l.next=d,l=f;var m=t.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==l&&(u===null?m.firstBaseUpdate=d:u.next=d,m.lastBaseUpdate=f))}if(o!==null){var _=s.baseState;l=0,m=d=f=null,u=o;do{var g=u.lane,v=u.eventTime;if((i&g)===g){m!==null&&(m=m.next={eventTime:v,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var S=t,T=u;switch(g=e,v=n,T.tag){case 1:if(S=T.payload,typeof S=="function"){_=S.call(v,_,g);break e}_=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=T.payload,g=typeof S=="function"?S.call(v,_,g):S,g==null)break e;_=en({},_,g);break e;case 2:Ss=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[u]:g.push(u))}else v={eventTime:v,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(d=m=v,f=_):m=m.next=v,l|=g;if(u=u.next,u===null){if(u=s.shared.pending,u===null)break;g=u,u=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(m===null&&(f=_),s.baseState=f,s.firstBaseUpdate=d,s.lastBaseUpdate=m,e=s.shared.interleaved,e!==null){s=e;do l|=s.lane,s=s.next;while(s!==e)}else o===null&&(s.shared.lanes=0);wo|=l,t.lanes=l,t.memoizedState=_}}function hx(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(Se(191,s));s.call(i)}}}var _u={},Mr=Gs(_u),su=Gs(_u),ou=Gs(_u);function _o(t){if(t===_u)throw Error(Se(174));return t}function Og(t,e){switch(Vt(ou,e),Vt(su,t),Vt(Mr,_u),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zp(e,t)}Yt(Mr),Vt(Mr,e)}function Ha(){Yt(Mr),Yt(su),Yt(ou)}function sE(t){_o(ou.current);var e=_o(Mr.current),n=zp(e,t.type);e!==n&&(Vt(su,t),Vt(Mr,n))}function Bg(t){su.current===t&&(Yt(Mr),Yt(su))}var Qt=Gs(0);function Of(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xh=[];function zg(){for(var t=0;t<Xh.length;t++)Xh[t]._workInProgressVersionPrimary=null;Xh.length=0}var uf=is.ReactCurrentDispatcher,Yh=is.ReactCurrentBatchConfig,To=0,Jt=null,_n=null,Tn=null,Bf=!1,Vl=!1,au=0,w2=0;function Bn(){throw Error(Se(321))}function kg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hr(t[n],e[n]))return!1;return!0}function Hg(t,e,n,i,s,o){if(To=o,Jt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,uf.current=t===null||t.memoizedState===null?P2:b2,t=n(i,s),Vl){o=0;do{if(Vl=!1,au=0,25<=o)throw Error(Se(301));o+=1,Tn=_n=null,e.updateQueue=null,uf.current=L2,t=n(i,s)}while(Vl)}if(uf.current=zf,e=_n!==null&&_n.next!==null,To=0,Tn=_n=Jt=null,Bf=!1,e)throw Error(Se(300));return t}function Vg(){var t=au!==0;return au=0,t}function vr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?Jt.memoizedState=Tn=t:Tn=Tn.next=t,Tn}function Yi(){if(_n===null){var t=Jt.alternate;t=t!==null?t.memoizedState:null}else t=_n.next;var e=Tn===null?Jt.memoizedState:Tn.next;if(e!==null)Tn=e,_n=t;else{if(t===null)throw Error(Se(310));_n=t,t={memoizedState:_n.memoizedState,baseState:_n.baseState,baseQueue:_n.baseQueue,queue:_n.queue,next:null},Tn===null?Jt.memoizedState=Tn=t:Tn=Tn.next=t}return Tn}function lu(t,e){return typeof e=="function"?e(t):e}function qh(t){var e=Yi(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=_n,s=i.baseQueue,o=n.pending;if(o!==null){if(s!==null){var l=s.next;s.next=o.next,o.next=l}i.baseQueue=s=o,n.pending=null}if(s!==null){o=s.next,i=i.baseState;var u=l=null,f=null,d=o;do{var m=d.lane;if((To&m)===m)f!==null&&(f=f.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:t(i,d.action);else{var _={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};f===null?(u=f=_,l=i):f=f.next=_,Jt.lanes|=m,wo|=m}d=d.next}while(d!==null&&d!==o);f===null?l=i:f.next=u,hr(i,e.memoizedState)||(ai=!0),e.memoizedState=i,e.baseState=l,e.baseQueue=f,n.lastRenderedState=i}if(t=n.interleaved,t!==null){s=t;do o=s.lane,Jt.lanes|=o,wo|=o,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function jh(t){var e=Yi(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=n.dispatch,s=n.pending,o=e.memoizedState;if(s!==null){n.pending=null;var l=s=s.next;do o=t(o,l.action),l=l.next;while(l!==s);hr(o,e.memoizedState)||(ai=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function oE(){}function aE(t,e){var n=Jt,i=Yi(),s=e(),o=!hr(i.memoizedState,s);if(o&&(i.memoizedState=s,ai=!0),i=i.queue,Gg(cE.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Tn!==null&&Tn.memoizedState.tag&1){if(n.flags|=2048,uu(9,uE.bind(null,n,i,s,e),void 0,null),wn===null)throw Error(Se(349));To&30||lE(n,e,s)}return s}function lE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Jt.updateQueue,e===null?(e={lastEffect:null,stores:null},Jt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function uE(t,e,n,i){e.value=n,e.getSnapshot=i,fE(e)&&dE(t)}function cE(t,e,n){return n(function(){fE(e)&&dE(t)})}function fE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hr(t,n)}catch{return!0}}function dE(t){var e=Jr(t,1);e!==null&&fr(e,t,1,-1)}function px(t){var e=vr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lu,lastRenderedState:t},e.queue=t,t=t.dispatch=C2.bind(null,Jt,t),[e.memoizedState,t]}function uu(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Jt.updateQueue,e===null?(e={lastEffect:null,stores:null},Jt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function hE(){return Yi().memoizedState}function cf(t,e,n,i){var s=vr();Jt.flags|=t,s.memoizedState=uu(1|e,n,void 0,i===void 0?null:i)}function rd(t,e,n,i){var s=Yi();i=i===void 0?null:i;var o=void 0;if(_n!==null){var l=_n.memoizedState;if(o=l.destroy,i!==null&&kg(i,l.deps)){s.memoizedState=uu(e,n,o,i);return}}Jt.flags|=t,s.memoizedState=uu(1|e,n,o,i)}function mx(t,e){return cf(8390656,8,t,e)}function Gg(t,e){return rd(2048,8,t,e)}function pE(t,e){return rd(4,2,t,e)}function mE(t,e){return rd(4,4,t,e)}function gE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _E(t,e,n){return n=n!=null?n.concat([t]):null,rd(4,4,gE.bind(null,e,t),n)}function Wg(){}function vE(t,e){var n=Yi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kg(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function xE(t,e){var n=Yi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kg(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function yE(t,e,n){return To&21?(hr(n,e)||(n=wS(),Jt.lanes|=n,wo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ai=!0),t.memoizedState=n)}function A2(t,e){var n=It;It=n!==0&&4>n?n:4,t(!0);var i=Yh.transition;Yh.transition={};try{t(!1),e()}finally{It=n,Yh.transition=i}}function SE(){return Yi().memoizedState}function R2(t,e,n){var i=Us(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},EE(t))ME(e,n);else if(n=iE(t,e,n,i),n!==null){var s=Zn();fr(n,t,i,s),TE(n,e,i)}}function C2(t,e,n){var i=Us(t),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(EE(t))ME(e,s);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,u=o(l,n);if(s.hasEagerState=!0,s.eagerState=u,hr(u,l)){var f=e.interleaved;f===null?(s.next=s,Ng(e)):(s.next=f.next,f.next=s),e.interleaved=s;return}}catch{}finally{}n=iE(t,e,s,i),n!==null&&(s=Zn(),fr(n,t,i,s),TE(n,e,i))}}function EE(t){var e=t.alternate;return t===Jt||e!==null&&e===Jt}function ME(t,e){Vl=Bf=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function TE(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sg(t,n)}}var zf={readContext:Xi,useCallback:Bn,useContext:Bn,useEffect:Bn,useImperativeHandle:Bn,useInsertionEffect:Bn,useLayoutEffect:Bn,useMemo:Bn,useReducer:Bn,useRef:Bn,useState:Bn,useDebugValue:Bn,useDeferredValue:Bn,useTransition:Bn,useMutableSource:Bn,useSyncExternalStore:Bn,useId:Bn,unstable_isNewReconciler:!1},P2={readContext:Xi,useCallback:function(t,e){return vr().memoizedState=[t,e===void 0?null:e],t},useContext:Xi,useEffect:mx,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cf(4194308,4,gE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cf(4194308,4,t,e)},useInsertionEffect:function(t,e){return cf(4,2,t,e)},useMemo:function(t,e){var n=vr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=vr();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=R2.bind(null,Jt,t),[i.memoizedState,t]},useRef:function(t){var e=vr();return t={current:t},e.memoizedState=t},useState:px,useDebugValue:Wg,useDeferredValue:function(t){return vr().memoizedState=t},useTransition:function(){var t=px(!1),e=t[0];return t=A2.bind(null,t[1]),vr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Jt,s=vr();if(Kt){if(n===void 0)throw Error(Se(407));n=n()}else{if(n=e(),wn===null)throw Error(Se(349));To&30||lE(i,e,n)}s.memoizedState=n;var o={value:n,getSnapshot:e};return s.queue=o,mx(cE.bind(null,i,o,t),[t]),i.flags|=2048,uu(9,uE.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=vr(),e=wn.identifierPrefix;if(Kt){var n=Wr,i=Gr;n=(i&~(1<<32-cr(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=au++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=w2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},b2={readContext:Xi,useCallback:vE,useContext:Xi,useEffect:Gg,useImperativeHandle:_E,useInsertionEffect:pE,useLayoutEffect:mE,useMemo:xE,useReducer:qh,useRef:hE,useState:function(){return qh(lu)},useDebugValue:Wg,useDeferredValue:function(t){var e=Yi();return yE(e,_n.memoizedState,t)},useTransition:function(){var t=qh(lu)[0],e=Yi().memoizedState;return[t,e]},useMutableSource:oE,useSyncExternalStore:aE,useId:SE,unstable_isNewReconciler:!1},L2={readContext:Xi,useCallback:vE,useContext:Xi,useEffect:Gg,useImperativeHandle:_E,useInsertionEffect:pE,useLayoutEffect:mE,useMemo:xE,useReducer:jh,useRef:hE,useState:function(){return jh(lu)},useDebugValue:Wg,useDeferredValue:function(t){var e=Yi();return _n===null?e.memoizedState=t:yE(e,_n.memoizedState,t)},useTransition:function(){var t=jh(lu)[0],e=Yi().memoizedState;return[t,e]},useMutableSource:oE,useSyncExternalStore:aE,useId:SE,unstable_isNewReconciler:!1};function sr(t,e){if(t&&t.defaultProps){e=en({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function om(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:en({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var sd={isMounted:function(t){return(t=t._reactInternals)?Lo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zn(),s=Us(t),o=jr(i,s);o.payload=e,n!=null&&(o.callback=n),e=Ds(t,o,s),e!==null&&(fr(e,t,s,i),lf(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zn(),s=Us(t),o=jr(i,s);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ds(t,o,s),e!==null&&(fr(e,t,s,i),lf(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zn(),i=Us(t),s=jr(n,i);s.tag=2,e!=null&&(s.callback=e),e=Ds(t,s,i),e!==null&&(fr(e,t,i,n),lf(e,t,i))}};function gx(t,e,n,i,s,o,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,l):e.prototype&&e.prototype.isPureReactComponent?!tu(n,i)||!tu(s,o):!0}function wE(t,e,n){var i=!1,s=zs,o=e.contextType;return typeof o=="object"&&o!==null?o=Xi(o):(s=ui(e)?Eo:Gn.current,i=e.contextTypes,o=(i=i!=null)?Ba(t,s):zs),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sd,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=o),e}function _x(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&sd.enqueueReplaceState(e,e.state,null)}function am(t,e,n,i){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Fg(t);var o=e.contextType;typeof o=="object"&&o!==null?s.context=Xi(o):(o=ui(e)?Eo:Gn.current,s.context=Ba(t,o)),s.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(om(t,e,o,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&sd.enqueueReplaceState(s,s.state,null),Ff(t,n,s,i),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Va(t,e){try{var n="",i=e;do n+=sb(i),i=i.return;while(i);var s=n}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:s,digest:null}}function $h(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var D2=typeof WeakMap=="function"?WeakMap:Map;function AE(t,e,n){n=jr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Hf||(Hf=!0,vm=i),lm(t,e)},n}function RE(t,e,n){n=jr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var s=e.value;n.payload=function(){return i(s)},n.callback=function(){lm(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){lm(t,e),typeof i!="function"&&(Is===null?Is=new Set([this]):Is.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function vx(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new D2;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(n)||(s.add(n),t=Y2.bind(null,t,e,n),e.then(t,t))}function xx(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yx(t,e,n,i,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=jr(-1,1),e.tag=2,Ds(n,e,1))),n.lanes|=1),t)}var I2=is.ReactCurrentOwner,ai=!1;function Kn(t,e,n,i){e.child=t===null?nE(e,null,n,i):ka(e,t.child,n,i)}function Sx(t,e,n,i,s){n=n.render;var o=e.ref;return La(e,s),i=Hg(t,e,n,i,o,s),n=Vg(),t!==null&&!ai?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,es(t,e,s)):(Kt&&n&&Pg(e),e.flags|=1,Kn(t,e,i,s),e.child)}function Ex(t,e,n,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!Qg(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,CE(t,e,o,i,s)):(t=pf(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&s)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:tu,n(l,i)&&t.ref===e.ref)return es(t,e,s)}return e.flags|=1,t=Ns(o,i),t.ref=e.ref,t.return=e,e.child=t}function CE(t,e,n,i,s){if(t!==null){var o=t.memoizedProps;if(tu(o,i)&&t.ref===e.ref)if(ai=!1,e.pendingProps=i=o,(t.lanes&s)!==0)t.flags&131072&&(ai=!0);else return e.lanes=t.lanes,es(t,e,s)}return um(t,e,n,i,s)}function PE(t,e,n){var i=e.pendingProps,s=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(Ta,Mi),Mi|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Vt(Ta,Mi),Mi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Vt(Ta,Mi),Mi|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Vt(Ta,Mi),Mi|=i;return Kn(t,e,s,n),e.child}function bE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function um(t,e,n,i,s){var o=ui(n)?Eo:Gn.current;return o=Ba(e,o),La(e,s),n=Hg(t,e,n,i,o,s),i=Vg(),t!==null&&!ai?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,es(t,e,s)):(Kt&&i&&Pg(e),e.flags|=1,Kn(t,e,n,s),e.child)}function Mx(t,e,n,i,s){if(ui(n)){var o=!0;Lf(e)}else o=!1;if(La(e,s),e.stateNode===null)ff(t,e),wE(e,n,i),am(e,n,i,s),i=!0;else if(t===null){var l=e.stateNode,u=e.memoizedProps;l.props=u;var f=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Xi(d):(d=ui(n)?Eo:Gn.current,d=Ba(e,d));var m=n.getDerivedStateFromProps,_=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";_||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==i||f!==d)&&_x(e,l,i,d),Ss=!1;var g=e.memoizedState;l.state=g,Ff(e,i,l,s),f=e.memoizedState,u!==i||g!==f||li.current||Ss?(typeof m=="function"&&(om(e,n,m,i),f=e.memoizedState),(u=Ss||gx(e,n,u,i,g,f,d))?(_||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=f),l.props=i,l.state=f,l.context=d,i=u):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,rE(t,e),u=e.memoizedProps,d=e.type===e.elementType?u:sr(e.type,u),l.props=d,_=e.pendingProps,g=l.context,f=n.contextType,typeof f=="object"&&f!==null?f=Xi(f):(f=ui(n)?Eo:Gn.current,f=Ba(e,f));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==_||g!==f)&&_x(e,l,i,f),Ss=!1,g=e.memoizedState,l.state=g,Ff(e,i,l,s);var S=e.memoizedState;u!==_||g!==S||li.current||Ss?(typeof v=="function"&&(om(e,n,v,i),S=e.memoizedState),(d=Ss||gx(e,n,d,i,g,S,f)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,S,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,S,f)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=S),l.props=i,l.state=S,l.context=f,i=d):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),i=!1)}return cm(t,e,n,i,o,s)}function cm(t,e,n,i,s,o){bE(t,e);var l=(e.flags&128)!==0;if(!i&&!l)return s&&lx(e,n,!1),es(t,e,o);i=e.stateNode,I2.current=e;var u=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&l?(e.child=ka(e,t.child,null,o),e.child=ka(e,null,u,o)):Kn(t,e,u,o),e.memoizedState=i.state,s&&lx(e,n,!0),e.child}function LE(t){var e=t.stateNode;e.pendingContext?ax(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ax(t,e.context,!1),Og(t,e.containerInfo)}function Tx(t,e,n,i,s){return za(),Lg(s),e.flags|=256,Kn(t,e,n,i),e.child}var fm={dehydrated:null,treeContext:null,retryLane:0};function dm(t){return{baseLanes:t,cachePool:null,transitions:null}}function DE(t,e,n){var i=e.pendingProps,s=Qt.current,o=!1,l=(e.flags&128)!==0,u;if((u=l)||(u=t!==null&&t.memoizedState===null?!1:(s&2)!==0),u?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Vt(Qt,s&1),t===null)return rm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=i.children,t=i.fallback,o?(i=e.mode,o=e.child,l={mode:"hidden",children:l},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ld(l,i,0,null),t=So(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=dm(n),e.memoizedState=fm,t):Xg(e,l));if(s=t.memoizedState,s!==null&&(u=s.dehydrated,u!==null))return U2(t,e,l,i,u,s,n);if(o){o=i.fallback,l=e.mode,s=t.child,u=s.sibling;var f={mode:"hidden",children:i.children};return!(l&1)&&e.child!==s?(i=e.child,i.childLanes=0,i.pendingProps=f,e.deletions=null):(i=Ns(s,f),i.subtreeFlags=s.subtreeFlags&14680064),u!==null?o=Ns(u,o):(o=So(o,l,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,l=t.child.memoizedState,l=l===null?dm(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=t.childLanes&~n,e.memoizedState=fm,i}return o=t.child,t=o.sibling,i=Ns(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Xg(t,e){return e=ld({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Rc(t,e,n,i){return i!==null&&Lg(i),ka(e,t.child,null,n),t=Xg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function U2(t,e,n,i,s,o,l){if(n)return e.flags&256?(e.flags&=-257,i=$h(Error(Se(422))),Rc(t,e,l,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,s=e.mode,i=ld({mode:"visible",children:i.children},s,0,null),o=So(o,s,l,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&ka(e,t.child,null,l),e.child.memoizedState=dm(l),e.memoizedState=fm,o);if(!(e.mode&1))return Rc(t,e,l,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var u=i.dgst;return i=u,o=Error(Se(419)),i=$h(o,i,void 0),Rc(t,e,l,i)}if(u=(l&t.childLanes)!==0,ai||u){if(i=wn,i!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|l)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,Jr(t,s),fr(i,t,s,-1))}return Zg(),i=$h(Error(Se(421))),Rc(t,e,l,i)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=q2.bind(null,t),s._reactRetry=e,null):(t=o.treeContext,Ti=Ls(s.nextSibling),wi=e,Kt=!0,ar=null,t!==null&&(zi[ki++]=Gr,zi[ki++]=Wr,zi[ki++]=Mo,Gr=t.id,Wr=t.overflow,Mo=e),e=Xg(e,i.children),e.flags|=4096,e)}function wx(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),sm(t.return,e,n)}function Kh(t,e,n,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=s)}function IE(t,e,n){var i=e.pendingProps,s=i.revealOrder,o=i.tail;if(Kn(t,e,i.children,n),i=Qt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wx(t,n,e);else if(t.tag===19)wx(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Vt(Qt,i),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Of(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Kh(e,!1,s,n,o);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Of(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Kh(e,!0,n,null,o);break;case"together":Kh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ff(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function es(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Se(153));if(e.child!==null){for(t=e.child,n=Ns(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ns(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function N2(t,e,n){switch(e.tag){case 3:LE(e),za();break;case 5:sE(e);break;case 1:ui(e.type)&&Lf(e);break;case 4:Og(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,s=e.memoizedProps.value;Vt(Uf,i._currentValue),i._currentValue=s;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Vt(Qt,Qt.current&1),e.flags|=128,null):n&e.child.childLanes?DE(t,e,n):(Vt(Qt,Qt.current&1),t=es(t,e,n),t!==null?t.sibling:null);Vt(Qt,Qt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return IE(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Vt(Qt,Qt.current),i)break;return null;case 22:case 23:return e.lanes=0,PE(t,e,n)}return es(t,e,n)}var UE,hm,NE,FE;UE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hm=function(){};NE=function(t,e,n,i){var s=t.memoizedProps;if(s!==i){t=e.stateNode,_o(Mr.current);var o=null;switch(n){case"input":s=Np(t,s),i=Np(t,i),o=[];break;case"select":s=en({},s,{value:void 0}),i=en({},i,{value:void 0}),o=[];break;case"textarea":s=Bp(t,s),i=Bp(t,i),o=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Pf)}kp(n,i);var l;n=null;for(d in s)if(!i.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var u=s[d];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(jl.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in i){var f=i[d];if(u=s!=null?s[d]:void 0,i.hasOwnProperty(d)&&f!==u&&(f!=null||u!=null))if(d==="style")if(u){for(l in u)!u.hasOwnProperty(l)||f&&f.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in f)f.hasOwnProperty(l)&&u[l]!==f[l]&&(n||(n={}),n[l]=f[l])}else n||(o||(o=[]),o.push(d,n)),n=f;else d==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,u=u?u.__html:void 0,f!=null&&u!==f&&(o=o||[]).push(d,f)):d==="children"?typeof f!="string"&&typeof f!="number"||(o=o||[]).push(d,""+f):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(jl.hasOwnProperty(d)?(f!=null&&d==="onScroll"&&Xt("scroll",t),o||u===f||(o=[])):(o=o||[]).push(d,f))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};FE=function(t,e,n,i){n!==i&&(e.flags|=4)};function wl(t,e){if(!Kt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function F2(t,e,n){var i=e.pendingProps;switch(bg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zn(e),null;case 1:return ui(e.type)&&bf(),zn(e),null;case 3:return i=e.stateNode,Ha(),Yt(li),Yt(Gn),zg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(wc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ar!==null&&(Sm(ar),ar=null))),hm(t,e),zn(e),null;case 5:Bg(e);var s=_o(ou.current);if(n=e.type,t!==null&&e.stateNode!=null)NE(t,e,n,i,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Se(166));return zn(e),null}if(t=_o(Mr.current),wc(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[yr]=e,i[ru]=o,t=(e.mode&1)!==0,n){case"dialog":Xt("cancel",i),Xt("close",i);break;case"iframe":case"object":case"embed":Xt("load",i);break;case"video":case"audio":for(s=0;s<Nl.length;s++)Xt(Nl[s],i);break;case"source":Xt("error",i);break;case"img":case"image":case"link":Xt("error",i),Xt("load",i);break;case"details":Xt("toggle",i);break;case"input":Uv(i,o),Xt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Xt("invalid",i);break;case"textarea":Fv(i,o),Xt("invalid",i)}kp(n,o),s=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?i.textContent!==u&&(o.suppressHydrationWarning!==!0&&Tc(i.textContent,u,t),s=["children",u]):typeof u=="number"&&i.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Tc(i.textContent,u,t),s=["children",""+u]):jl.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&Xt("scroll",i)}switch(n){case"input":gc(i),Nv(i,o,!0);break;case"textarea":gc(i),Ov(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Pf)}i=s,e.updateQueue=i,i!==null&&(e.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cS(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=l.createElement(n,{is:i.is}):(t=l.createElement(n),n==="select"&&(l=t,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):t=l.createElementNS(t,n),t[yr]=e,t[ru]=i,UE(t,e,!1,!1),e.stateNode=t;e:{switch(l=Hp(n,i),n){case"dialog":Xt("cancel",t),Xt("close",t),s=i;break;case"iframe":case"object":case"embed":Xt("load",t),s=i;break;case"video":case"audio":for(s=0;s<Nl.length;s++)Xt(Nl[s],t);s=i;break;case"source":Xt("error",t),s=i;break;case"img":case"image":case"link":Xt("error",t),Xt("load",t),s=i;break;case"details":Xt("toggle",t),s=i;break;case"input":Uv(t,i),s=Np(t,i),Xt("invalid",t);break;case"option":s=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},s=en({},i,{value:void 0}),Xt("invalid",t);break;case"textarea":Fv(t,i),s=Bp(t,i),Xt("invalid",t);break;default:s=i}kp(n,s),u=s;for(o in u)if(u.hasOwnProperty(o)){var f=u[o];o==="style"?hS(t,f):o==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&fS(t,f)):o==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&$l(t,f):typeof f=="number"&&$l(t,""+f):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(jl.hasOwnProperty(o)?f!=null&&o==="onScroll"&&Xt("scroll",t):f!=null&&mg(t,o,f,l))}switch(n){case"input":gc(t),Nv(t,i,!1);break;case"textarea":gc(t),Ov(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Bs(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Ra(t,!!i.multiple,o,!1):i.defaultValue!=null&&Ra(t,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Pf)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zn(e),null;case 6:if(t&&e.stateNode!=null)FE(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Se(166));if(n=_o(ou.current),_o(Mr.current),wc(e)){if(i=e.stateNode,n=e.memoizedProps,i[yr]=e,(o=i.nodeValue!==n)&&(t=wi,t!==null))switch(t.tag){case 3:Tc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Tc(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[yr]=e,e.stateNode=i}return zn(e),null;case 13:if(Yt(Qt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Kt&&Ti!==null&&e.mode&1&&!(e.flags&128))eE(),za(),e.flags|=98560,o=!1;else if(o=wc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(Se(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Se(317));o[yr]=e}else za(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zn(e),o=!1}else ar!==null&&(Sm(ar),ar=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Qt.current&1?vn===0&&(vn=3):Zg())),e.updateQueue!==null&&(e.flags|=4),zn(e),null);case 4:return Ha(),hm(t,e),t===null&&nu(e.stateNode.containerInfo),zn(e),null;case 10:return Ug(e.type._context),zn(e),null;case 17:return ui(e.type)&&bf(),zn(e),null;case 19:if(Yt(Qt),o=e.memoizedState,o===null)return zn(e),null;if(i=(e.flags&128)!==0,l=o.rendering,l===null)if(i)wl(o,!1);else{if(vn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Of(t),l!==null){for(e.flags|=128,wl(o,!1),i=l.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,t=l.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Vt(Qt,Qt.current&1|2),e.child}t=t.sibling}o.tail!==null&&ln()>Ga&&(e.flags|=128,i=!0,wl(o,!1),e.lanes=4194304)}else{if(!i)if(t=Of(l),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Kt)return zn(e),null}else 2*ln()-o.renderingStartTime>Ga&&n!==1073741824&&(e.flags|=128,i=!0,wl(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(n=o.last,n!==null?n.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ln(),e.sibling=null,n=Qt.current,Vt(Qt,i?n&1|2:n&1),e):(zn(e),null);case 22:case 23:return Kg(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mi&1073741824&&(zn(e),e.subtreeFlags&6&&(e.flags|=8192)):zn(e),null;case 24:return null;case 25:return null}throw Error(Se(156,e.tag))}function O2(t,e){switch(bg(e),e.tag){case 1:return ui(e.type)&&bf(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ha(),Yt(li),Yt(Gn),zg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bg(e),null;case 13:if(Yt(Qt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Se(340));za()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Yt(Qt),null;case 4:return Ha(),null;case 10:return Ug(e.type._context),null;case 22:case 23:return Kg(),null;case 24:return null;default:return null}}var Cc=!1,Vn=!1,B2=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ma(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){rn(t,e,i)}else n.current=null}function pm(t,e,n){try{n()}catch(i){rn(t,e,i)}}var Ax=!1;function z2(t,e){if(Zp=Af,t=HS(),Cg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,f=-1,d=0,m=0,_=t,g=null;t:for(;;){for(var v;_!==n||s!==0&&_.nodeType!==3||(u=l+s),_!==o||i!==0&&_.nodeType!==3||(f=l+i),_.nodeType===3&&(l+=_.nodeValue.length),(v=_.firstChild)!==null;)g=_,_=v;for(;;){if(_===t)break t;if(g===n&&++d===s&&(u=l),g===o&&++m===i&&(f=l),(v=_.nextSibling)!==null)break;_=g,g=_.parentNode}_=v}n=u===-1||f===-1?null:{start:u,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qp={focusedElem:t,selectionRange:n},Af=!1,Oe=e;Oe!==null;)if(e=Oe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Oe=t;else for(;Oe!==null;){e=Oe;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var T=S.memoizedProps,x=S.memoizedState,h=e.stateNode,E=h.getSnapshotBeforeUpdate(e.elementType===e.type?T:sr(e.type,T),x);h.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Se(163))}}catch(w){rn(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,Oe=t;break}Oe=e.return}return S=Ax,Ax=!1,S}function Gl(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var o=s.destroy;s.destroy=void 0,o!==void 0&&pm(e,n,o)}s=s.next}while(s!==i)}}function od(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function mm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function OE(t){var e=t.alternate;e!==null&&(t.alternate=null,OE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yr],delete e[ru],delete e[tm],delete e[S2],delete e[E2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function BE(t){return t.tag===5||t.tag===3||t.tag===4}function Rx(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||BE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gm(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pf));else if(i!==4&&(t=t.child,t!==null))for(gm(t,e,n),t=t.sibling;t!==null;)gm(t,e,n),t=t.sibling}function _m(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(_m(t,e,n),t=t.sibling;t!==null;)_m(t,e,n),t=t.sibling}var bn=null,or=!1;function hs(t,e,n){for(n=n.child;n!==null;)zE(t,e,n),n=n.sibling}function zE(t,e,n){if(Er&&typeof Er.onCommitFiberUnmount=="function")try{Er.onCommitFiberUnmount(Qf,n)}catch{}switch(n.tag){case 5:Vn||Ma(n,e);case 6:var i=bn,s=or;bn=null,hs(t,e,n),bn=i,or=s,bn!==null&&(or?(t=bn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):bn.removeChild(n.stateNode));break;case 18:bn!==null&&(or?(t=bn,n=n.stateNode,t.nodeType===8?Gh(t.parentNode,n):t.nodeType===1&&Gh(t,n),Jl(t)):Gh(bn,n.stateNode));break;case 4:i=bn,s=or,bn=n.stateNode.containerInfo,or=!0,hs(t,e,n),bn=i,or=s;break;case 0:case 11:case 14:case 15:if(!Vn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var o=s,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&pm(n,e,l),s=s.next}while(s!==i)}hs(t,e,n);break;case 1:if(!Vn&&(Ma(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(u){rn(n,e,u)}hs(t,e,n);break;case 21:hs(t,e,n);break;case 22:n.mode&1?(Vn=(i=Vn)||n.memoizedState!==null,hs(t,e,n),Vn=i):hs(t,e,n);break;default:hs(t,e,n)}}function Cx(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new B2),e.forEach(function(i){var s=j2.bind(null,t,i);n.has(i)||(n.add(i),i.then(s,s))})}}function tr(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var o=t,l=e,u=l;e:for(;u!==null;){switch(u.tag){case 5:bn=u.stateNode,or=!1;break e;case 3:bn=u.stateNode.containerInfo,or=!0;break e;case 4:bn=u.stateNode.containerInfo,or=!0;break e}u=u.return}if(bn===null)throw Error(Se(160));zE(o,l,s),bn=null,or=!1;var f=s.alternate;f!==null&&(f.return=null),s.return=null}catch(d){rn(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kE(e,t),e=e.sibling}function kE(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tr(e,t),_r(t),i&4){try{Gl(3,t,t.return),od(3,t)}catch(T){rn(t,t.return,T)}try{Gl(5,t,t.return)}catch(T){rn(t,t.return,T)}}break;case 1:tr(e,t),_r(t),i&512&&n!==null&&Ma(n,n.return);break;case 5:if(tr(e,t),_r(t),i&512&&n!==null&&Ma(n,n.return),t.flags&32){var s=t.stateNode;try{$l(s,"")}catch(T){rn(t,t.return,T)}}if(i&4&&(s=t.stateNode,s!=null)){var o=t.memoizedProps,l=n!==null?n.memoizedProps:o,u=t.type,f=t.updateQueue;if(t.updateQueue=null,f!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&lS(s,o),Hp(u,l);var d=Hp(u,o);for(l=0;l<f.length;l+=2){var m=f[l],_=f[l+1];m==="style"?hS(s,_):m==="dangerouslySetInnerHTML"?fS(s,_):m==="children"?$l(s,_):mg(s,m,_,d)}switch(u){case"input":Fp(s,o);break;case"textarea":uS(s,o);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Ra(s,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?Ra(s,!!o.multiple,o.defaultValue,!0):Ra(s,!!o.multiple,o.multiple?[]:"",!1))}s[ru]=o}catch(T){rn(t,t.return,T)}}break;case 6:if(tr(e,t),_r(t),i&4){if(t.stateNode===null)throw Error(Se(162));s=t.stateNode,o=t.memoizedProps;try{s.nodeValue=o}catch(T){rn(t,t.return,T)}}break;case 3:if(tr(e,t),_r(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Jl(e.containerInfo)}catch(T){rn(t,t.return,T)}break;case 4:tr(e,t),_r(t);break;case 13:tr(e,t),_r(t),s=t.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(jg=ln())),i&4&&Cx(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(Vn=(d=Vn)||m,tr(e,t),Vn=d):tr(e,t),_r(t),i&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!m&&t.mode&1)for(Oe=t,m=t.child;m!==null;){for(_=Oe=m;Oe!==null;){switch(g=Oe,v=g.child,g.tag){case 0:case 11:case 14:case 15:Gl(4,g,g.return);break;case 1:Ma(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){i=g,n=g.return;try{e=i,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(T){rn(i,n,T)}}break;case 5:Ma(g,g.return);break;case 22:if(g.memoizedState!==null){bx(_);continue}}v!==null?(v.return=g,Oe=v):bx(_)}m=m.sibling}e:for(m=null,_=t;;){if(_.tag===5){if(m===null){m=_;try{s=_.stateNode,d?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=_.stateNode,f=_.memoizedProps.style,l=f!=null&&f.hasOwnProperty("display")?f.display:null,u.style.display=dS("display",l))}catch(T){rn(t,t.return,T)}}}else if(_.tag===6){if(m===null)try{_.stateNode.nodeValue=d?"":_.memoizedProps}catch(T){rn(t,t.return,T)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===t)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===t)break e;for(;_.sibling===null;){if(_.return===null||_.return===t)break e;m===_&&(m=null),_=_.return}m===_&&(m=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:tr(e,t),_r(t),i&4&&Cx(t);break;case 21:break;default:tr(e,t),_r(t)}}function _r(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(BE(n)){var i=n;break e}n=n.return}throw Error(Se(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&($l(s,""),i.flags&=-33);var o=Rx(t);_m(t,o,s);break;case 3:case 4:var l=i.stateNode.containerInfo,u=Rx(t);gm(t,u,l);break;default:throw Error(Se(161))}}catch(f){rn(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function k2(t,e,n){Oe=t,HE(t)}function HE(t,e,n){for(var i=(t.mode&1)!==0;Oe!==null;){var s=Oe,o=s.child;if(s.tag===22&&i){var l=s.memoizedState!==null||Cc;if(!l){var u=s.alternate,f=u!==null&&u.memoizedState!==null||Vn;u=Cc;var d=Vn;if(Cc=l,(Vn=f)&&!d)for(Oe=s;Oe!==null;)l=Oe,f=l.child,l.tag===22&&l.memoizedState!==null?Lx(s):f!==null?(f.return=l,Oe=f):Lx(s);for(;o!==null;)Oe=o,HE(o),o=o.sibling;Oe=s,Cc=u,Vn=d}Px(t)}else s.subtreeFlags&8772&&o!==null?(o.return=s,Oe=o):Px(t)}}function Px(t){for(;Oe!==null;){var e=Oe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vn||od(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vn)if(n===null)i.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:sr(e.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&hx(e,o,i);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hx(e,l,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var f=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var _=m.dehydrated;_!==null&&Jl(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Se(163))}Vn||e.flags&512&&mm(e)}catch(g){rn(e,e.return,g)}}if(e===t){Oe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Oe=n;break}Oe=e.return}}function bx(t){for(;Oe!==null;){var e=Oe;if(e===t){Oe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Oe=n;break}Oe=e.return}}function Lx(t){for(;Oe!==null;){var e=Oe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{od(4,e)}catch(f){rn(e,n,f)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var s=e.return;try{i.componentDidMount()}catch(f){rn(e,s,f)}}var o=e.return;try{mm(e)}catch(f){rn(e,o,f)}break;case 5:var l=e.return;try{mm(e)}catch(f){rn(e,l,f)}}}catch(f){rn(e,e.return,f)}if(e===t){Oe=null;break}var u=e.sibling;if(u!==null){u.return=e.return,Oe=u;break}Oe=e.return}}var H2=Math.ceil,kf=is.ReactCurrentDispatcher,Yg=is.ReactCurrentOwner,Gi=is.ReactCurrentBatchConfig,Tt=0,wn=null,dn=null,Dn=0,Mi=0,Ta=Gs(0),vn=0,cu=null,wo=0,ad=0,qg=0,Wl=null,oi=null,jg=0,Ga=1/0,kr=null,Hf=!1,vm=null,Is=null,Pc=!1,Rs=null,Vf=0,Xl=0,xm=null,df=-1,hf=0;function Zn(){return Tt&6?ln():df!==-1?df:df=ln()}function Us(t){return t.mode&1?Tt&2&&Dn!==0?Dn&-Dn:T2.transition!==null?(hf===0&&(hf=wS()),hf):(t=It,t!==0||(t=window.event,t=t===void 0?16:DS(t.type)),t):1}function fr(t,e,n,i){if(50<Xl)throw Xl=0,xm=null,Error(Se(185));pu(t,n,i),(!(Tt&2)||t!==wn)&&(t===wn&&(!(Tt&2)&&(ad|=n),vn===4&&Ts(t,Dn)),ci(t,i),n===1&&Tt===0&&!(e.mode&1)&&(Ga=ln()+500,id&&Ws()))}function ci(t,e){var n=t.callbackNode;Tb(t,e);var i=wf(t,t===wn?Dn:0);if(i===0)n!==null&&kv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&kv(n),e===1)t.tag===0?M2(Dx.bind(null,t)):ZS(Dx.bind(null,t)),x2(function(){!(Tt&6)&&Ws()}),n=null;else{switch(AS(i)){case 1:n=yg;break;case 4:n=MS;break;case 16:n=Tf;break;case 536870912:n=TS;break;default:n=Tf}n=$E(n,VE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function VE(t,e){if(df=-1,hf=0,Tt&6)throw Error(Se(327));var n=t.callbackNode;if(Da()&&t.callbackNode!==n)return null;var i=wf(t,t===wn?Dn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Gf(t,i);else{e=i;var s=Tt;Tt|=2;var o=WE();(wn!==t||Dn!==e)&&(kr=null,Ga=ln()+500,yo(t,e));do try{W2();break}catch(u){GE(t,u)}while(!0);Ig(),kf.current=o,Tt=s,dn!==null?e=0:(wn=null,Dn=0,e=vn)}if(e!==0){if(e===2&&(s=Yp(t),s!==0&&(i=s,e=ym(t,s))),e===1)throw n=cu,yo(t,0),Ts(t,i),ci(t,ln()),n;if(e===6)Ts(t,i);else{if(s=t.current.alternate,!(i&30)&&!V2(s)&&(e=Gf(t,i),e===2&&(o=Yp(t),o!==0&&(i=o,e=ym(t,o))),e===1))throw n=cu,yo(t,0),Ts(t,i),ci(t,ln()),n;switch(t.finishedWork=s,t.finishedLanes=i,e){case 0:case 1:throw Error(Se(345));case 2:co(t,oi,kr);break;case 3:if(Ts(t,i),(i&130023424)===i&&(e=jg+500-ln(),10<e)){if(wf(t,0)!==0)break;if(s=t.suspendedLanes,(s&i)!==i){Zn(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=em(co.bind(null,t,oi,kr),e);break}co(t,oi,kr);break;case 4:if(Ts(t,i),(i&4194240)===i)break;for(e=t.eventTimes,s=-1;0<i;){var l=31-cr(i);o=1<<l,l=e[l],l>s&&(s=l),i&=~o}if(i=s,i=ln()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*H2(i/1960))-i,10<i){t.timeoutHandle=em(co.bind(null,t,oi,kr),i);break}co(t,oi,kr);break;case 5:co(t,oi,kr);break;default:throw Error(Se(329))}}}return ci(t,ln()),t.callbackNode===n?VE.bind(null,t):null}function ym(t,e){var n=Wl;return t.current.memoizedState.isDehydrated&&(yo(t,e).flags|=256),t=Gf(t,e),t!==2&&(e=oi,oi=n,e!==null&&Sm(e)),t}function Sm(t){oi===null?oi=t:oi.push.apply(oi,t)}function V2(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],o=s.getSnapshot;s=s.value;try{if(!hr(o(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ts(t,e){for(e&=~qg,e&=~ad,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-cr(e),i=1<<n;t[n]=-1,e&=~i}}function Dx(t){if(Tt&6)throw Error(Se(327));Da();var e=wf(t,0);if(!(e&1))return ci(t,ln()),null;var n=Gf(t,e);if(t.tag!==0&&n===2){var i=Yp(t);i!==0&&(e=i,n=ym(t,i))}if(n===1)throw n=cu,yo(t,0),Ts(t,e),ci(t,ln()),n;if(n===6)throw Error(Se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,co(t,oi,kr),ci(t,ln()),null}function $g(t,e){var n=Tt;Tt|=1;try{return t(e)}finally{Tt=n,Tt===0&&(Ga=ln()+500,id&&Ws())}}function Ao(t){Rs!==null&&Rs.tag===0&&!(Tt&6)&&Da();var e=Tt;Tt|=1;var n=Gi.transition,i=It;try{if(Gi.transition=null,It=1,t)return t()}finally{It=i,Gi.transition=n,Tt=e,!(Tt&6)&&Ws()}}function Kg(){Mi=Ta.current,Yt(Ta)}function yo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,v2(n)),dn!==null)for(n=dn.return;n!==null;){var i=n;switch(bg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bf();break;case 3:Ha(),Yt(li),Yt(Gn),zg();break;case 5:Bg(i);break;case 4:Ha();break;case 13:Yt(Qt);break;case 19:Yt(Qt);break;case 10:Ug(i.type._context);break;case 22:case 23:Kg()}n=n.return}if(wn=t,dn=t=Ns(t.current,null),Dn=Mi=e,vn=0,cu=null,qg=ad=wo=0,oi=Wl=null,go!==null){for(e=0;e<go.length;e++)if(n=go[e],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,o=n.pending;if(o!==null){var l=o.next;o.next=s,i.next=l}n.pending=i}go=null}return t}function GE(t,e){do{var n=dn;try{if(Ig(),uf.current=zf,Bf){for(var i=Jt.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Bf=!1}if(To=0,Tn=_n=Jt=null,Vl=!1,au=0,Yg.current=null,n===null||n.return===null){vn=1,cu=e,dn=null;break}e:{var o=t,l=n.return,u=n,f=e;if(e=Dn,u.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var d=f,m=u,_=m.tag;if(!(m.mode&1)&&(_===0||_===11||_===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=xx(l);if(v!==null){v.flags&=-257,yx(v,l,u,o,e),v.mode&1&&vx(o,d,e),e=v,f=d;var S=e.updateQueue;if(S===null){var T=new Set;T.add(f),e.updateQueue=T}else S.add(f);break e}else{if(!(e&1)){vx(o,d,e),Zg();break e}f=Error(Se(426))}}else if(Kt&&u.mode&1){var x=xx(l);if(x!==null){!(x.flags&65536)&&(x.flags|=256),yx(x,l,u,o,e),Lg(Va(f,u));break e}}o=f=Va(f,u),vn!==4&&(vn=2),Wl===null?Wl=[o]:Wl.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=AE(o,f,e);dx(o,h);break e;case 1:u=f;var E=o.type,M=o.stateNode;if(!(o.flags&128)&&(typeof E.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Is===null||!Is.has(M)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=RE(o,u,e);dx(o,w);break e}}o=o.return}while(o!==null)}YE(n)}catch(O){e=O,dn===n&&n!==null&&(dn=n=n.return);continue}break}while(!0)}function WE(){var t=kf.current;return kf.current=zf,t===null?zf:t}function Zg(){(vn===0||vn===3||vn===2)&&(vn=4),wn===null||!(wo&268435455)&&!(ad&268435455)||Ts(wn,Dn)}function Gf(t,e){var n=Tt;Tt|=2;var i=WE();(wn!==t||Dn!==e)&&(kr=null,yo(t,e));do try{G2();break}catch(s){GE(t,s)}while(!0);if(Ig(),Tt=n,kf.current=i,dn!==null)throw Error(Se(261));return wn=null,Dn=0,vn}function G2(){for(;dn!==null;)XE(dn)}function W2(){for(;dn!==null&&!mb();)XE(dn)}function XE(t){var e=jE(t.alternate,t,Mi);t.memoizedProps=t.pendingProps,e===null?YE(t):dn=e,Yg.current=null}function YE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=O2(n,e),n!==null){n.flags&=32767,dn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{vn=6,dn=null;return}}else if(n=F2(n,e,Mi),n!==null){dn=n;return}if(e=e.sibling,e!==null){dn=e;return}dn=e=t}while(e!==null);vn===0&&(vn=5)}function co(t,e,n){var i=It,s=Gi.transition;try{Gi.transition=null,It=1,X2(t,e,n,i)}finally{Gi.transition=s,It=i}return null}function X2(t,e,n,i){do Da();while(Rs!==null);if(Tt&6)throw Error(Se(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Se(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(wb(t,o),t===wn&&(dn=wn=null,Dn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pc||(Pc=!0,$E(Tf,function(){return Da(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Gi.transition,Gi.transition=null;var l=It;It=1;var u=Tt;Tt|=4,Yg.current=null,z2(t,n),kE(n,t),f2(Qp),Af=!!Zp,Qp=Zp=null,t.current=n,k2(n),gb(),Tt=u,It=l,Gi.transition=o}else t.current=n;if(Pc&&(Pc=!1,Rs=t,Vf=s),o=t.pendingLanes,o===0&&(Is=null),xb(n.stateNode),ci(t,ln()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(Hf)throw Hf=!1,t=vm,vm=null,t;return Vf&1&&t.tag!==0&&Da(),o=t.pendingLanes,o&1?t===xm?Xl++:(Xl=0,xm=t):Xl=0,Ws(),null}function Da(){if(Rs!==null){var t=AS(Vf),e=Gi.transition,n=It;try{if(Gi.transition=null,It=16>t?16:t,Rs===null)var i=!1;else{if(t=Rs,Rs=null,Vf=0,Tt&6)throw Error(Se(331));var s=Tt;for(Tt|=4,Oe=t.current;Oe!==null;){var o=Oe,l=o.child;if(Oe.flags&16){var u=o.deletions;if(u!==null){for(var f=0;f<u.length;f++){var d=u[f];for(Oe=d;Oe!==null;){var m=Oe;switch(m.tag){case 0:case 11:case 15:Gl(8,m,o)}var _=m.child;if(_!==null)_.return=m,Oe=_;else for(;Oe!==null;){m=Oe;var g=m.sibling,v=m.return;if(OE(m),m===d){Oe=null;break}if(g!==null){g.return=v,Oe=g;break}Oe=v}}}var S=o.alternate;if(S!==null){var T=S.child;if(T!==null){S.child=null;do{var x=T.sibling;T.sibling=null,T=x}while(T!==null)}}Oe=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,Oe=l;else e:for(;Oe!==null;){if(o=Oe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Gl(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,Oe=h;break e}Oe=o.return}}var E=t.current;for(Oe=E;Oe!==null;){l=Oe;var M=l.child;if(l.subtreeFlags&2064&&M!==null)M.return=l,Oe=M;else e:for(l=E;Oe!==null;){if(u=Oe,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:od(9,u)}}catch(O){rn(u,u.return,O)}if(u===l){Oe=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,Oe=w;break e}Oe=u.return}}if(Tt=s,Ws(),Er&&typeof Er.onPostCommitFiberRoot=="function")try{Er.onPostCommitFiberRoot(Qf,t)}catch{}i=!0}return i}finally{It=n,Gi.transition=e}}return!1}function Ix(t,e,n){e=Va(n,e),e=AE(t,e,1),t=Ds(t,e,1),e=Zn(),t!==null&&(pu(t,1,e),ci(t,e))}function rn(t,e,n){if(t.tag===3)Ix(t,t,n);else for(;e!==null;){if(e.tag===3){Ix(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Is===null||!Is.has(i))){t=Va(n,t),t=RE(e,t,1),e=Ds(e,t,1),t=Zn(),e!==null&&(pu(e,1,t),ci(e,t));break}}e=e.return}}function Y2(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zn(),t.pingedLanes|=t.suspendedLanes&n,wn===t&&(Dn&n)===n&&(vn===4||vn===3&&(Dn&130023424)===Dn&&500>ln()-jg?yo(t,0):qg|=n),ci(t,e)}function qE(t,e){e===0&&(t.mode&1?(e=xc,xc<<=1,!(xc&130023424)&&(xc=4194304)):e=1);var n=Zn();t=Jr(t,e),t!==null&&(pu(t,e,n),ci(t,n))}function q2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qE(t,n)}function j2(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Se(314))}i!==null&&i.delete(e),qE(t,n)}var jE;jE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||li.current)ai=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ai=!1,N2(t,e,n);ai=!!(t.flags&131072)}else ai=!1,Kt&&e.flags&1048576&&QS(e,If,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ff(t,e),t=e.pendingProps;var s=Ba(e,Gn.current);La(e,n),s=Hg(null,e,i,t,s,n);var o=Vg();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ui(i)?(o=!0,Lf(e)):o=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Fg(e),s.updater=sd,e.stateNode=s,s._reactInternals=e,am(e,i,t,n),e=cm(null,e,i,!0,o,n)):(e.tag=0,Kt&&o&&Pg(e),Kn(null,e,s,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ff(t,e),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=K2(i),t=sr(i,t),s){case 0:e=um(null,e,i,t,n);break e;case 1:e=Mx(null,e,i,t,n);break e;case 11:e=Sx(null,e,i,t,n);break e;case 14:e=Ex(null,e,i,sr(i.type,t),n);break e}throw Error(Se(306,i,""))}return e;case 0:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:sr(i,s),um(t,e,i,s,n);case 1:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:sr(i,s),Mx(t,e,i,s,n);case 3:e:{if(LE(e),t===null)throw Error(Se(387));i=e.pendingProps,o=e.memoizedState,s=o.element,rE(t,e),Ff(e,i,null,n);var l=e.memoizedState;if(i=l.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){s=Va(Error(Se(423)),e),e=Tx(t,e,i,n,s);break e}else if(i!==s){s=Va(Error(Se(424)),e),e=Tx(t,e,i,n,s);break e}else for(Ti=Ls(e.stateNode.containerInfo.firstChild),wi=e,Kt=!0,ar=null,n=nE(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(za(),i===s){e=es(t,e,n);break e}Kn(t,e,i,n)}e=e.child}return e;case 5:return sE(e),t===null&&rm(e),i=e.type,s=e.pendingProps,o=t!==null?t.memoizedProps:null,l=s.children,Jp(i,s)?l=null:o!==null&&Jp(i,o)&&(e.flags|=32),bE(t,e),Kn(t,e,l,n),e.child;case 6:return t===null&&rm(e),null;case 13:return DE(t,e,n);case 4:return Og(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ka(e,null,i,n):Kn(t,e,i,n),e.child;case 11:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:sr(i,s),Sx(t,e,i,s,n);case 7:return Kn(t,e,e.pendingProps,n),e.child;case 8:return Kn(t,e,e.pendingProps.children,n),e.child;case 12:return Kn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,s=e.pendingProps,o=e.memoizedProps,l=s.value,Vt(Uf,i._currentValue),i._currentValue=l,o!==null)if(hr(o.value,l)){if(o.children===s.children&&!li.current){e=es(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var f=u.firstContext;f!==null;){if(f.context===i){if(o.tag===1){f=jr(-1,n&-n),f.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?f.next=f:(f.next=m.next,m.next=f),d.pending=f}}o.lanes|=n,f=o.alternate,f!==null&&(f.lanes|=n),sm(o.return,n,e),u.lanes|=n;break}f=f.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(Se(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),sm(l,n,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Kn(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,i=e.pendingProps.children,La(e,n),s=Xi(s),i=i(s),e.flags|=1,Kn(t,e,i,n),e.child;case 14:return i=e.type,s=sr(i,e.pendingProps),s=sr(i.type,s),Ex(t,e,i,s,n);case 15:return CE(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:sr(i,s),ff(t,e),e.tag=1,ui(i)?(t=!0,Lf(e)):t=!1,La(e,n),wE(e,i,s),am(e,i,s,n),cm(null,e,i,!0,t,n);case 19:return IE(t,e,n);case 22:return PE(t,e,n)}throw Error(Se(156,e.tag))};function $E(t,e){return ES(t,e)}function $2(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vi(t,e,n,i){return new $2(t,e,n,i)}function Qg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function K2(t){if(typeof t=="function")return Qg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_g)return 11;if(t===vg)return 14}return 2}function Ns(t,e){var n=t.alternate;return n===null?(n=Vi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function pf(t,e,n,i,s,o){var l=2;if(i=t,typeof t=="function")Qg(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case pa:return So(n.children,s,o,e);case gg:l=8,s|=8;break;case Lp:return t=Vi(12,n,e,s|2),t.elementType=Lp,t.lanes=o,t;case Dp:return t=Vi(13,n,e,s),t.elementType=Dp,t.lanes=o,t;case Ip:return t=Vi(19,n,e,s),t.elementType=Ip,t.lanes=o,t;case sS:return ld(n,s,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case iS:l=10;break e;case rS:l=9;break e;case _g:l=11;break e;case vg:l=14;break e;case ys:l=16,i=null;break e}throw Error(Se(130,t==null?t:typeof t,""))}return e=Vi(l,n,e,s),e.elementType=t,e.type=i,e.lanes=o,e}function So(t,e,n,i){return t=Vi(7,t,i,e),t.lanes=n,t}function ld(t,e,n,i){return t=Vi(22,t,i,e),t.elementType=sS,t.lanes=n,t.stateNode={isHidden:!1},t}function Zh(t,e,n){return t=Vi(6,t,null,e),t.lanes=n,t}function Qh(t,e,n){return e=Vi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Z2(t,e,n,i,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dh(0),this.expirationTimes=Dh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dh(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Jg(t,e,n,i,s,o,l,u,f){return t=new Z2(t,e,n,u,f),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Vi(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fg(o),t}function Q2(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ha,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function KE(t){if(!t)return zs;t=t._reactInternals;e:{if(Lo(t)!==t||t.tag!==1)throw Error(Se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ui(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Se(171))}if(t.tag===1){var n=t.type;if(ui(n))return KS(t,n,e)}return e}function ZE(t,e,n,i,s,o,l,u,f){return t=Jg(n,i,!0,t,s,o,l,u,f),t.context=KE(null),n=t.current,i=Zn(),s=Us(n),o=jr(i,s),o.callback=e??null,Ds(n,o,s),t.current.lanes=s,pu(t,s,i),ci(t,i),t}function ud(t,e,n,i){var s=e.current,o=Zn(),l=Us(s);return n=KE(n),e.context===null?e.context=n:e.pendingContext=n,e=jr(o,l),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ds(s,e,l),t!==null&&(fr(t,s,l,o),lf(t,s,l)),l}function Wf(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ux(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function e_(t,e){Ux(t,e),(t=t.alternate)&&Ux(t,e)}function J2(){return null}var QE=typeof reportError=="function"?reportError:function(t){console.error(t)};function t_(t){this._internalRoot=t}cd.prototype.render=t_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Se(409));ud(t,e,null,null)};cd.prototype.unmount=t_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ao(function(){ud(null,t,null,null)}),e[Qr]=null}};function cd(t){this._internalRoot=t}cd.prototype.unstable_scheduleHydration=function(t){if(t){var e=PS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ms.length&&e!==0&&e<Ms[n].priority;n++);Ms.splice(n,0,t),n===0&&LS(t)}};function n_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Nx(){}function eL(t,e,n,i,s){if(s){if(typeof i=="function"){var o=i;i=function(){var d=Wf(l);o.call(d)}}var l=ZE(e,i,t,0,null,!1,!1,"",Nx);return t._reactRootContainer=l,t[Qr]=l.current,nu(t.nodeType===8?t.parentNode:t),Ao(),l}for(;s=t.lastChild;)t.removeChild(s);if(typeof i=="function"){var u=i;i=function(){var d=Wf(f);u.call(d)}}var f=Jg(t,0,!1,null,null,!1,!1,"",Nx);return t._reactRootContainer=f,t[Qr]=f.current,nu(t.nodeType===8?t.parentNode:t),Ao(function(){ud(e,f,n,i)}),f}function dd(t,e,n,i,s){var o=n._reactRootContainer;if(o){var l=o;if(typeof s=="function"){var u=s;s=function(){var f=Wf(l);u.call(f)}}ud(e,l,t,s)}else l=eL(n,e,t,s,i);return Wf(l)}RS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ul(e.pendingLanes);n!==0&&(Sg(e,n|1),ci(e,ln()),!(Tt&6)&&(Ga=ln()+500,Ws()))}break;case 13:Ao(function(){var i=Jr(t,1);if(i!==null){var s=Zn();fr(i,t,1,s)}}),e_(t,1)}};Eg=function(t){if(t.tag===13){var e=Jr(t,134217728);if(e!==null){var n=Zn();fr(e,t,134217728,n)}e_(t,134217728)}};CS=function(t){if(t.tag===13){var e=Us(t),n=Jr(t,e);if(n!==null){var i=Zn();fr(n,t,e,i)}e_(t,e)}};PS=function(){return It};bS=function(t,e){var n=It;try{return It=t,e()}finally{It=n}};Gp=function(t,e,n){switch(e){case"input":if(Fp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var s=nd(i);if(!s)throw Error(Se(90));aS(i),Fp(i,s)}}}break;case"textarea":uS(t,n);break;case"select":e=n.value,e!=null&&Ra(t,!!n.multiple,e,!1)}};gS=$g;_S=Ao;var tL={usingClientEntryPoint:!1,Events:[gu,va,nd,pS,mS,$g]},Al={findFiberByHostInstance:mo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nL={bundleType:Al.bundleType,version:Al.version,rendererPackageName:Al.rendererPackageName,rendererConfig:Al.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:is.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yS(t),t===null?null:t.stateNode},findFiberByHostInstance:Al.findFiberByHostInstance||J2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{Qf=bc.inject(nL),Er=bc}catch{}}Ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tL;Ri.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!n_(e))throw Error(Se(200));return Q2(t,e,null,n)};Ri.createRoot=function(t,e){if(!n_(t))throw Error(Se(299));var n=!1,i="",s=QE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Jg(t,1,!1,null,null,n,!1,i,s),t[Qr]=e.current,nu(t.nodeType===8?t.parentNode:t),new t_(e)};Ri.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Se(188)):(t=Object.keys(t).join(","),Error(Se(268,t)));return t=yS(e),t=t===null?null:t.stateNode,t};Ri.flushSync=function(t){return Ao(t)};Ri.hydrate=function(t,e,n){if(!fd(e))throw Error(Se(200));return dd(null,t,e,!0,n)};Ri.hydrateRoot=function(t,e,n){if(!n_(t))throw Error(Se(405));var i=n!=null&&n.hydratedSources||null,s=!1,o="",l=QE;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=ZE(e,null,t,1,n??null,s,!1,o,l),t[Qr]=e.current,nu(t),i)for(t=0;t<i.length;t++)n=i[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new cd(e)};Ri.render=function(t,e,n){if(!fd(e))throw Error(Se(200));return dd(null,t,e,!1,n)};Ri.unmountComponentAtNode=function(t){if(!fd(t))throw Error(Se(40));return t._reactRootContainer?(Ao(function(){dd(null,null,t,!1,function(){t._reactRootContainer=null,t[Qr]=null})}),!0):!1};Ri.unstable_batchedUpdates=$g;Ri.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!fd(n))throw Error(Se(200));if(t==null||t._reactInternals===void 0)throw Error(Se(38));return dd(t,e,n,!1,i)};Ri.version="18.3.1-next-f1338f8080-20240426";function JE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(JE)}catch(t){console.error(t)}}JE(),Jy.exports=Ri;var iL=Jy.exports,Fx=iL;Pp.createRoot=Fx.createRoot,Pp.hydrateRoot=Fx.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const i_="171",Ia={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rL=0,Ox=1,sL=2,eM=1,oL=2,zr=3,ks=0,fi=1,Vr=2,Fs=0,Ua=1,Bx=2,zx=3,kx=4,aL=5,ho=100,lL=101,uL=102,cL=103,fL=104,dL=200,hL=201,pL=202,mL=203,Em=204,Mm=205,gL=206,_L=207,vL=208,xL=209,yL=210,SL=211,EL=212,ML=213,TL=214,Tm=0,wm=1,Am=2,Wa=3,Rm=4,Cm=5,Pm=6,bm=7,tM=0,wL=1,AL=2,Os=0,RL=1,CL=2,PL=3,bL=4,LL=5,DL=6,IL=7,nM=300,Xa=301,Ya=302,Lm=303,Dm=304,hd=306,Im=1e3,vo=1001,Um=1002,dr=1003,UL=1004,Lc=1005,Sr=1006,Jh=1007,xo=1008,ts=1009,iM=1010,rM=1011,fu=1012,r_=1013,Ro=1014,Xr=1015,vu=1016,s_=1017,o_=1018,qa=1020,sM=35902,oM=1021,aM=1022,ur=1023,lM=1024,uM=1025,Na=1026,ja=1027,cM=1028,a_=1029,fM=1030,l_=1031,u_=1033,mf=33776,gf=33777,_f=33778,vf=33779,Nm=35840,Fm=35841,Om=35842,Bm=35843,zm=36196,km=37492,Hm=37496,Vm=37808,Gm=37809,Wm=37810,Xm=37811,Ym=37812,qm=37813,jm=37814,$m=37815,Km=37816,Zm=37817,Qm=37818,Jm=37819,eg=37820,tg=37821,xf=36492,ng=36494,ig=36495,dM=36283,rg=36284,sg=36285,og=36286,NL=3200,FL=3201,OL=0,BL=1,ws="",Bi="srgb",$a="srgb-linear",Xf="linear",Ft="srgb",Zo=7680,Hx=519,zL=512,kL=513,HL=514,hM=515,VL=516,GL=517,WL=518,XL=519,Vx=35044,Gx="300 es",Yr=2e3,Yf=2001;class Do{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,l=s.length;o<l;o++)s[o].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wx=1234567;const Yl=Math.PI/180,du=180/Math.PI;function el(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kn[t&255]+kn[t>>8&255]+kn[t>>16&255]+kn[t>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[n&63|128]+kn[n>>8&255]+"-"+kn[n>>16&255]+kn[n>>24&255]+kn[i&255]+kn[i>>8&255]+kn[i>>16&255]+kn[i>>24&255]).toLowerCase()}function pt(t,e,n){return Math.max(e,Math.min(n,t))}function c_(t,e){return(t%e+e)%e}function YL(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function qL(t,e,n){return t!==e?(n-t)/(e-t):0}function ql(t,e,n){return(1-n)*t+n*e}function jL(t,e,n,i){return ql(t,e,1-Math.exp(-n*i))}function $L(t,e=1){return e-Math.abs(c_(t,e*2)-e)}function KL(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function ZL(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function QL(t,e){return t+Math.floor(Math.random()*(e-t+1))}function JL(t,e){return t+Math.random()*(e-t)}function eD(t){return t*(.5-Math.random())}function tD(t){t!==void 0&&(Wx=t);let e=Wx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nD(t){return t*Yl}function iD(t){return t*du}function rD(t){return(t&t-1)===0&&t!==0}function sD(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function oD(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function aD(t,e,n,i,s){const o=Math.cos,l=Math.sin,u=o(n/2),f=l(n/2),d=o((e+i)/2),m=l((e+i)/2),_=o((e-i)/2),g=l((e-i)/2),v=o((i-e)/2),S=l((i-e)/2);switch(s){case"XYX":t.set(u*m,f*_,f*g,u*d);break;case"YZY":t.set(f*g,u*m,f*_,u*d);break;case"ZXZ":t.set(f*_,f*g,u*m,u*d);break;case"XZX":t.set(u*m,f*S,f*v,u*d);break;case"YXY":t.set(f*v,u*m,f*S,u*d);break;case"ZYZ":t.set(f*S,f*v,u*m,u*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function jn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const lD={DEG2RAD:Yl,RAD2DEG:du,generateUUID:el,clamp:pt,euclideanModulo:c_,mapLinear:YL,inverseLerp:qL,lerp:ql,damp:jL,pingpong:$L,smoothstep:KL,smootherstep:ZL,randInt:QL,randFloat:JL,randFloatSpread:eD,seededRandom:tD,degToRad:nD,radToDeg:iD,isPowerOfTwo:rD,ceilPowerOfTwo:sD,floorPowerOfTwo:oD,setQuaternionFromProperEuler:aD,normalize:jn,denormalize:fa};class ht{constructor(e=0,n=0){ht.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),o=this.x-e.x,l=this.y-e.y;return this.x=o*i-l*s+e.x,this.y=o*s+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,i,s,o,l,u,f,d){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,o,l,u,f,d)}set(e,n,i,s,o,l,u,f,d){const m=this.elements;return m[0]=e,m[1]=s,m[2]=u,m[3]=n,m[4]=o,m[5]=f,m[6]=i,m[7]=l,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,o=this.elements,l=i[0],u=i[3],f=i[6],d=i[1],m=i[4],_=i[7],g=i[2],v=i[5],S=i[8],T=s[0],x=s[3],h=s[6],E=s[1],M=s[4],w=s[7],O=s[2],N=s[5],I=s[8];return o[0]=l*T+u*E+f*O,o[3]=l*x+u*M+f*N,o[6]=l*h+u*w+f*I,o[1]=d*T+m*E+_*O,o[4]=d*x+m*M+_*N,o[7]=d*h+m*w+_*I,o[2]=g*T+v*E+S*O,o[5]=g*x+v*M+S*N,o[8]=g*h+v*w+S*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],o=e[3],l=e[4],u=e[5],f=e[6],d=e[7],m=e[8];return n*l*m-n*u*d-i*o*m+i*u*f+s*o*d-s*l*f}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],o=e[3],l=e[4],u=e[5],f=e[6],d=e[7],m=e[8],_=m*l-u*d,g=u*f-m*o,v=d*o-l*f,S=n*_+i*g+s*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=_*T,e[1]=(s*d-m*i)*T,e[2]=(u*i-s*l)*T,e[3]=g*T,e[4]=(m*n-s*f)*T,e[5]=(s*o-u*n)*T,e[6]=v*T,e[7]=(i*f-d*n)*T,e[8]=(l*n-i*o)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,o,l,u){const f=Math.cos(o),d=Math.sin(o);return this.set(i*f,i*d,-i*(f*l+d*u)+l+e,-s*d,s*f,-s*(-d*l+f*u)+u+n,0,0,1),this}scale(e,n){return this.premultiply(ep.makeScale(e,n)),this}rotate(e){return this.premultiply(ep.makeRotation(-e)),this}translate(e,n){return this.premultiply(ep.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ep=new ot;function pM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function qf(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function uD(){const t=qf("canvas");return t.style.display="block",t}const Xx={};function da(t){t in Xx||(Xx[t]=!0,console.warn(t))}function cD(t,e,n){return new Promise(function(i,s){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function fD(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dD(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Yx=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qx=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hD(){const t={enabled:!0,workingColorSpace:$a,spaces:{},convert:function(s,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Ft&&(s.r=$r(s.r),s.g=$r(s.g),s.b=$r(s.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ft&&(s.r=Fa(s.r),s.g=Fa(s.g),s.b=Fa(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ws?Xf:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,l){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[$a]:{primaries:e,whitePoint:i,transfer:Xf,toXYZ:Yx,fromXYZ:qx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Bi},outputColorSpaceConfig:{drawingBufferColorSpace:Bi}},[Bi]:{primaries:e,whitePoint:i,transfer:Ft,toXYZ:Yx,fromXYZ:qx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Bi}}}),t}const Rt=hD();function $r(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Fa(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Qo;class pD{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qo===void 0&&(Qo=qf("canvas")),Qo.width=e.width,Qo.height=e.height;const i=Qo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Qo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=qf("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let l=0;l<o.length;l++)o[l]=$r(o[l]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($r(n[i]/255)*255):n[i]=$r(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mD=0;class mM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mD++}),this.uuid=el(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?o.push(tp(s[l].image)):o.push(tp(s[l]))}else o=tp(s);i.url=o}return n||(e.images[this.uuid]=i),i}}function tp(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?pD.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gD=0;class di extends Do{constructor(e=di.DEFAULT_IMAGE,n=di.DEFAULT_MAPPING,i=vo,s=vo,o=Sr,l=xo,u=ur,f=ts,d=di.DEFAULT_ANISOTROPY,m=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gD++}),this.uuid=el(),this.name="",this.source=new mM(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Im:e.x=e.x-Math.floor(e.x);break;case vo:e.x=e.x<0?0:1;break;case Um:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Im:e.y=e.y-Math.floor(e.y);break;case vo:e.y=e.y<0?0:1;break;case Um:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}di.DEFAULT_IMAGE=null;di.DEFAULT_MAPPING=nM;di.DEFAULT_ANISOTROPY=1;class un{constructor(e=0,n=0,i=0,s=1){un.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,o=this.w,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*s+l[12]*o,this.y=l[1]*n+l[5]*i+l[9]*s+l[13]*o,this.z=l[2]*n+l[6]*i+l[10]*s+l[14]*o,this.w=l[3]*n+l[7]*i+l[11]*s+l[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,o;const f=e.elements,d=f[0],m=f[4],_=f[8],g=f[1],v=f[5],S=f[9],T=f[2],x=f[6],h=f[10];if(Math.abs(m-g)<.01&&Math.abs(_-T)<.01&&Math.abs(S-x)<.01){if(Math.abs(m+g)<.1&&Math.abs(_+T)<.1&&Math.abs(S+x)<.1&&Math.abs(d+v+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(d+1)/2,w=(v+1)/2,O=(h+1)/2,N=(m+g)/4,I=(_+T)/4,B=(S+x)/4;return M>w&&M>O?M<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(M),s=N/i,o=I/i):w>O?w<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(w),i=N/s,o=B/s):O<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(O),i=I/o,s=B/o),this.set(i,s,o,n),this}let E=Math.sqrt((x-S)*(x-S)+(_-T)*(_-T)+(g-m)*(g-m));return Math.abs(E)<.001&&(E=1),this.x=(x-S)/E,this.y=(_-T)/E,this.z=(g-m)/E,this.w=Math.acos((d+v+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this.z=pt(this.z,e.z,n.z),this.w=pt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this.z=pt(this.z,e,n),this.w=pt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _D extends Do{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new un(0,0,e,n),this.scissorTest=!1,this.viewport=new un(0,0,e,n);const s={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new di(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const l=i.count;for(let u=0;u<l;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new mM(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Co extends _D{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class gM extends di{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=dr,this.minFilter=dr,this.wrapR=vo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vD extends di{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=dr,this.minFilter=dr,this.wrapR=vo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,o,l,u){let f=i[s+0],d=i[s+1],m=i[s+2],_=i[s+3];const g=o[l+0],v=o[l+1],S=o[l+2],T=o[l+3];if(u===0){e[n+0]=f,e[n+1]=d,e[n+2]=m,e[n+3]=_;return}if(u===1){e[n+0]=g,e[n+1]=v,e[n+2]=S,e[n+3]=T;return}if(_!==T||f!==g||d!==v||m!==S){let x=1-u;const h=f*g+d*v+m*S+_*T,E=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const O=Math.sqrt(M),N=Math.atan2(O,h*E);x=Math.sin(x*N)/O,u=Math.sin(u*N)/O}const w=u*E;if(f=f*x+g*w,d=d*x+v*w,m=m*x+S*w,_=_*x+T*w,x===1-u){const O=1/Math.sqrt(f*f+d*d+m*m+_*_);f*=O,d*=O,m*=O,_*=O}}e[n]=f,e[n+1]=d,e[n+2]=m,e[n+3]=_}static multiplyQuaternionsFlat(e,n,i,s,o,l){const u=i[s],f=i[s+1],d=i[s+2],m=i[s+3],_=o[l],g=o[l+1],v=o[l+2],S=o[l+3];return e[n]=u*S+m*_+f*v-d*g,e[n+1]=f*S+m*g+d*_-u*v,e[n+2]=d*S+m*v+u*g-f*_,e[n+3]=m*S-u*_-f*g-d*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,o=e._z,l=e._order,u=Math.cos,f=Math.sin,d=u(i/2),m=u(s/2),_=u(o/2),g=f(i/2),v=f(s/2),S=f(o/2);switch(l){case"XYZ":this._x=g*m*_+d*v*S,this._y=d*v*_-g*m*S,this._z=d*m*S+g*v*_,this._w=d*m*_-g*v*S;break;case"YXZ":this._x=g*m*_+d*v*S,this._y=d*v*_-g*m*S,this._z=d*m*S-g*v*_,this._w=d*m*_+g*v*S;break;case"ZXY":this._x=g*m*_-d*v*S,this._y=d*v*_+g*m*S,this._z=d*m*S+g*v*_,this._w=d*m*_-g*v*S;break;case"ZYX":this._x=g*m*_-d*v*S,this._y=d*v*_+g*m*S,this._z=d*m*S-g*v*_,this._w=d*m*_+g*v*S;break;case"YZX":this._x=g*m*_+d*v*S,this._y=d*v*_+g*m*S,this._z=d*m*S-g*v*_,this._w=d*m*_-g*v*S;break;case"XZY":this._x=g*m*_-d*v*S,this._y=d*v*_-g*m*S,this._z=d*m*S+g*v*_,this._w=d*m*_+g*v*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],o=n[8],l=n[1],u=n[5],f=n[9],d=n[2],m=n[6],_=n[10],g=i+u+_;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(m-f)*v,this._y=(o-d)*v,this._z=(l-s)*v}else if(i>u&&i>_){const v=2*Math.sqrt(1+i-u-_);this._w=(m-f)/v,this._x=.25*v,this._y=(s+l)/v,this._z=(o+d)/v}else if(u>_){const v=2*Math.sqrt(1+u-i-_);this._w=(o-d)/v,this._x=(s+l)/v,this._y=.25*v,this._z=(f+m)/v}else{const v=2*Math.sqrt(1+_-i-u);this._w=(l-s)/v,this._x=(o+d)/v,this._y=(f+m)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,o=e._z,l=e._w,u=n._x,f=n._y,d=n._z,m=n._w;return this._x=i*m+l*u+s*d-o*f,this._y=s*m+l*f+o*u-i*d,this._z=o*m+l*d+i*f-s*u,this._w=l*m-i*u-s*f-o*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,l=this._w;let u=l*e._w+i*e._x+s*e._y+o*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=i,this._y=s,this._z=o,this;const f=1-u*u;if(f<=Number.EPSILON){const v=1-n;return this._w=v*l+n*this._w,this._x=v*i+n*this._x,this._y=v*s+n*this._y,this._z=v*o+n*this._z,this.normalize(),this}const d=Math.sqrt(f),m=Math.atan2(d,u),_=Math.sin((1-n)*m)/d,g=Math.sin(n*m)/d;return this._w=l*_+this._w*g,this._x=i*_+this._x*g,this._y=s*_+this._y*g,this._z=o*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(jx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(jx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*s,this.y=o[1]*n+o[4]*i+o[7]*s,this.z=o[2]*n+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,o=e.elements,l=1/(o[3]*n+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*s+o[12])*l,this.y=(o[1]*n+o[5]*i+o[9]*s+o[13])*l,this.z=(o[2]*n+o[6]*i+o[10]*s+o[14])*l,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,o=e.x,l=e.y,u=e.z,f=e.w,d=2*(l*s-u*i),m=2*(u*n-o*s),_=2*(o*i-l*n);return this.x=n+f*d+l*_-u*m,this.y=i+f*m+u*d-o*_,this.z=s+f*_+o*m-l*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s,this.y=o[1]*n+o[5]*i+o[9]*s,this.z=o[2]*n+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this.z=pt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this.z=pt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,o=e.z,l=n.x,u=n.y,f=n.z;return this.x=s*f-o*u,this.y=o*l-i*f,this.z=i*u-s*l,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return np.copy(this).projectOnVector(e),this.sub(np)}reflect(e){return this.sub(np.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const np=new K,jx=new Po;class xu{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(nr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(nr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=nr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,nr):nr.fromBufferAttribute(o,l),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dc.copy(i.boundingBox)),Dc.applyMatrix4(e.matrixWorld),this.union(Dc)}const s=e.children;for(let o=0,l=s.length;o<l;o++)this.expandByObject(s[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rl),Ic.subVectors(this.max,Rl),Jo.subVectors(e.a,Rl),ea.subVectors(e.b,Rl),ta.subVectors(e.c,Rl),ps.subVectors(ea,Jo),ms.subVectors(ta,ea),no.subVectors(Jo,ta);let n=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-no.z,no.y,ps.z,0,-ps.x,ms.z,0,-ms.x,no.z,0,-no.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-no.y,no.x,0];return!ip(n,Jo,ea,ta,Ic)||(n=[1,0,0,0,1,0,0,0,1],!ip(n,Jo,ea,ta,Ic))?!1:(Uc.crossVectors(ps,ms),n=[Uc.x,Uc.y,Uc.z],ip(n,Jo,ea,ta,Ic))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ur=[new K,new K,new K,new K,new K,new K,new K,new K],nr=new K,Dc=new xu,Jo=new K,ea=new K,ta=new K,ps=new K,ms=new K,no=new K,Rl=new K,Ic=new K,Uc=new K,io=new K;function ip(t,e,n,i,s){for(let o=0,l=t.length-3;o<=l;o+=3){io.fromArray(t,o);const u=s.x*Math.abs(io.x)+s.y*Math.abs(io.y)+s.z*Math.abs(io.z),f=e.dot(io),d=n.dot(io),m=i.dot(io);if(Math.max(-Math.max(f,d,m),Math.min(f,d,m))>u)return!1}return!0}const xD=new xu,Cl=new K,rp=new K;class pd{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):xD.setFromPoints(e).getCenter(i);let s=0;for(let o=0,l=e.length;o<l;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cl.subVectors(e,this.center);const n=Cl.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Cl,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cl.copy(e.center).add(rp)),this.expandByPoint(Cl.copy(e.center).sub(rp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nr=new K,sp=new K,Nc=new K,gs=new K,op=new K,Fc=new K,ap=new K;class f_{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Nr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Nr.copy(this.origin).addScaledVector(this.direction,n),Nr.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){sp.copy(e).add(n).multiplyScalar(.5),Nc.copy(n).sub(e).normalize(),gs.copy(this.origin).sub(sp);const o=e.distanceTo(n)*.5,l=-this.direction.dot(Nc),u=gs.dot(this.direction),f=-gs.dot(Nc),d=gs.lengthSq(),m=Math.abs(1-l*l);let _,g,v,S;if(m>0)if(_=l*f-u,g=l*u-f,S=o*m,_>=0)if(g>=-S)if(g<=S){const T=1/m;_*=T,g*=T,v=_*(_+l*g+2*u)+g*(l*_+g+2*f)+d}else g=o,_=Math.max(0,-(l*g+u)),v=-_*_+g*(g+2*f)+d;else g=-o,_=Math.max(0,-(l*g+u)),v=-_*_+g*(g+2*f)+d;else g<=-S?(_=Math.max(0,-(-l*o+u)),g=_>0?-o:Math.min(Math.max(-o,-f),o),v=-_*_+g*(g+2*f)+d):g<=S?(_=0,g=Math.min(Math.max(-o,-f),o),v=g*(g+2*f)+d):(_=Math.max(0,-(l*o+u)),g=_>0?o:Math.min(Math.max(-o,-f),o),v=-_*_+g*(g+2*f)+d);else g=l>0?-o:o,_=Math.max(0,-(l*g+u)),v=-_*_+g*(g+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(sp).addScaledVector(Nc,g),v}intersectSphere(e,n){Nr.subVectors(e.center,this.origin);const i=Nr.dot(this.direction),s=Nr.dot(Nr)-i*i,o=e.radius*e.radius;if(s>o)return null;const l=Math.sqrt(o-s),u=i-l,f=i+l;return f<0?null:u<0?this.at(f,n):this.at(u,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,o,l,u,f;const d=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,g=this.origin;return d>=0?(i=(e.min.x-g.x)*d,s=(e.max.x-g.x)*d):(i=(e.max.x-g.x)*d,s=(e.min.x-g.x)*d),m>=0?(o=(e.min.y-g.y)*m,l=(e.max.y-g.y)*m):(o=(e.max.y-g.y)*m,l=(e.min.y-g.y)*m),i>l||o>s||((o>i||isNaN(i))&&(i=o),(l<s||isNaN(s))&&(s=l),_>=0?(u=(e.min.z-g.z)*_,f=(e.max.z-g.z)*_):(u=(e.max.z-g.z)*_,f=(e.min.z-g.z)*_),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Nr)!==null}intersectTriangle(e,n,i,s,o){op.subVectors(n,e),Fc.subVectors(i,e),ap.crossVectors(op,Fc);let l=this.direction.dot(ap),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;gs.subVectors(this.origin,e);const f=u*this.direction.dot(Fc.crossVectors(gs,Fc));if(f<0)return null;const d=u*this.direction.dot(op.cross(gs));if(d<0||f+d>l)return null;const m=-u*gs.dot(ap);return m<0?null:this.at(m/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(e,n,i,s,o,l,u,f,d,m,_,g,v,S,T,x){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,o,l,u,f,d,m,_,g,v,S,T,x)}set(e,n,i,s,o,l,u,f,d,m,_,g,v,S,T,x){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=s,h[1]=o,h[5]=l,h[9]=u,h[13]=f,h[2]=d,h[6]=m,h[10]=_,h[14]=g,h[3]=v,h[7]=S,h[11]=T,h[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/na.setFromMatrixColumn(e,0).length(),o=1/na.setFromMatrixColumn(e,1).length(),l=1/na.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*l,n[9]=i[9]*l,n[10]=i[10]*l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,o=e.z,l=Math.cos(i),u=Math.sin(i),f=Math.cos(s),d=Math.sin(s),m=Math.cos(o),_=Math.sin(o);if(e.order==="XYZ"){const g=l*m,v=l*_,S=u*m,T=u*_;n[0]=f*m,n[4]=-f*_,n[8]=d,n[1]=v+S*d,n[5]=g-T*d,n[9]=-u*f,n[2]=T-g*d,n[6]=S+v*d,n[10]=l*f}else if(e.order==="YXZ"){const g=f*m,v=f*_,S=d*m,T=d*_;n[0]=g+T*u,n[4]=S*u-v,n[8]=l*d,n[1]=l*_,n[5]=l*m,n[9]=-u,n[2]=v*u-S,n[6]=T+g*u,n[10]=l*f}else if(e.order==="ZXY"){const g=f*m,v=f*_,S=d*m,T=d*_;n[0]=g-T*u,n[4]=-l*_,n[8]=S+v*u,n[1]=v+S*u,n[5]=l*m,n[9]=T-g*u,n[2]=-l*d,n[6]=u,n[10]=l*f}else if(e.order==="ZYX"){const g=l*m,v=l*_,S=u*m,T=u*_;n[0]=f*m,n[4]=S*d-v,n[8]=g*d+T,n[1]=f*_,n[5]=T*d+g,n[9]=v*d-S,n[2]=-d,n[6]=u*f,n[10]=l*f}else if(e.order==="YZX"){const g=l*f,v=l*d,S=u*f,T=u*d;n[0]=f*m,n[4]=T-g*_,n[8]=S*_+v,n[1]=_,n[5]=l*m,n[9]=-u*m,n[2]=-d*m,n[6]=v*_+S,n[10]=g-T*_}else if(e.order==="XZY"){const g=l*f,v=l*d,S=u*f,T=u*d;n[0]=f*m,n[4]=-_,n[8]=d*m,n[1]=g*_+T,n[5]=l*m,n[9]=v*_-S,n[2]=S*_-v,n[6]=u*m,n[10]=T*_+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yD,e,SD)}lookAt(e,n,i){const s=this.elements;return Si.subVectors(e,n),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),_s.crossVectors(i,Si),_s.lengthSq()===0&&(Math.abs(i.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),_s.crossVectors(i,Si)),_s.normalize(),Oc.crossVectors(Si,_s),s[0]=_s.x,s[4]=Oc.x,s[8]=Si.x,s[1]=_s.y,s[5]=Oc.y,s[9]=Si.y,s[2]=_s.z,s[6]=Oc.z,s[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,o=this.elements,l=i[0],u=i[4],f=i[8],d=i[12],m=i[1],_=i[5],g=i[9],v=i[13],S=i[2],T=i[6],x=i[10],h=i[14],E=i[3],M=i[7],w=i[11],O=i[15],N=s[0],I=s[4],B=s[8],L=s[12],C=s[1],H=s[5],ae=s[9],$=s[13],fe=s[2],me=s[6],J=s[10],j=s[14],U=s[3],Q=s[7],V=s[11],te=s[15];return o[0]=l*N+u*C+f*fe+d*U,o[4]=l*I+u*H+f*me+d*Q,o[8]=l*B+u*ae+f*J+d*V,o[12]=l*L+u*$+f*j+d*te,o[1]=m*N+_*C+g*fe+v*U,o[5]=m*I+_*H+g*me+v*Q,o[9]=m*B+_*ae+g*J+v*V,o[13]=m*L+_*$+g*j+v*te,o[2]=S*N+T*C+x*fe+h*U,o[6]=S*I+T*H+x*me+h*Q,o[10]=S*B+T*ae+x*J+h*V,o[14]=S*L+T*$+x*j+h*te,o[3]=E*N+M*C+w*fe+O*U,o[7]=E*I+M*H+w*me+O*Q,o[11]=E*B+M*ae+w*J+O*V,o[15]=E*L+M*$+w*j+O*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],o=e[12],l=e[1],u=e[5],f=e[9],d=e[13],m=e[2],_=e[6],g=e[10],v=e[14],S=e[3],T=e[7],x=e[11],h=e[15];return S*(+o*f*_-s*d*_-o*u*g+i*d*g+s*u*v-i*f*v)+T*(+n*f*v-n*d*g+o*l*g-s*l*v+s*d*m-o*f*m)+x*(+n*d*_-n*u*v-o*l*_+i*l*v+o*u*m-i*d*m)+h*(-s*u*m-n*f*_+n*u*g+s*l*_-i*l*g+i*f*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],o=e[3],l=e[4],u=e[5],f=e[6],d=e[7],m=e[8],_=e[9],g=e[10],v=e[11],S=e[12],T=e[13],x=e[14],h=e[15],E=_*x*d-T*g*d+T*f*v-u*x*v-_*f*h+u*g*h,M=S*g*d-m*x*d-S*f*v+l*x*v+m*f*h-l*g*h,w=m*T*d-S*_*d+S*u*v-l*T*v-m*u*h+l*_*h,O=S*_*f-m*T*f-S*u*g+l*T*g+m*u*x-l*_*x,N=n*E+i*M+s*w+o*O;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/N;return e[0]=E*I,e[1]=(T*g*o-_*x*o-T*s*v+i*x*v+_*s*h-i*g*h)*I,e[2]=(u*x*o-T*f*o+T*s*d-i*x*d-u*s*h+i*f*h)*I,e[3]=(_*f*o-u*g*o-_*s*d+i*g*d+u*s*v-i*f*v)*I,e[4]=M*I,e[5]=(m*x*o-S*g*o+S*s*v-n*x*v-m*s*h+n*g*h)*I,e[6]=(S*f*o-l*x*o-S*s*d+n*x*d+l*s*h-n*f*h)*I,e[7]=(l*g*o-m*f*o+m*s*d-n*g*d-l*s*v+n*f*v)*I,e[8]=w*I,e[9]=(S*_*o-m*T*o-S*i*v+n*T*v+m*i*h-n*_*h)*I,e[10]=(l*T*o-S*u*o+S*i*d-n*T*d-l*i*h+n*u*h)*I,e[11]=(m*u*o-l*_*o-m*i*d+n*_*d+l*i*v-n*u*v)*I,e[12]=O*I,e[13]=(m*T*s-S*_*s+S*i*g-n*T*g-m*i*x+n*_*x)*I,e[14]=(S*u*s-l*T*s-S*i*f+n*T*f+l*i*x-n*u*x)*I,e[15]=(l*_*s-m*u*s+m*i*f-n*_*f-l*i*g+n*u*g)*I,this}scale(e){const n=this.elements,i=e.x,s=e.y,o=e.z;return n[0]*=i,n[4]*=s,n[8]*=o,n[1]*=i,n[5]*=s,n[9]*=o,n[2]*=i,n[6]*=s,n[10]*=o,n[3]*=i,n[7]*=s,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),o=1-i,l=e.x,u=e.y,f=e.z,d=o*l,m=o*u;return this.set(d*l+i,d*u-s*f,d*f+s*u,0,d*u+s*f,m*u+i,m*f-s*l,0,d*f-s*u,m*f+s*l,o*f*f+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,o,l){return this.set(1,i,o,0,e,1,l,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,o=n._x,l=n._y,u=n._z,f=n._w,d=o+o,m=l+l,_=u+u,g=o*d,v=o*m,S=o*_,T=l*m,x=l*_,h=u*_,E=f*d,M=f*m,w=f*_,O=i.x,N=i.y,I=i.z;return s[0]=(1-(T+h))*O,s[1]=(v+w)*O,s[2]=(S-M)*O,s[3]=0,s[4]=(v-w)*N,s[5]=(1-(g+h))*N,s[6]=(x+E)*N,s[7]=0,s[8]=(S+M)*I,s[9]=(x-E)*I,s[10]=(1-(g+T))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let o=na.set(s[0],s[1],s[2]).length();const l=na.set(s[4],s[5],s[6]).length(),u=na.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],ir.copy(this);const d=1/o,m=1/l,_=1/u;return ir.elements[0]*=d,ir.elements[1]*=d,ir.elements[2]*=d,ir.elements[4]*=m,ir.elements[5]*=m,ir.elements[6]*=m,ir.elements[8]*=_,ir.elements[9]*=_,ir.elements[10]*=_,n.setFromRotationMatrix(ir),i.x=o,i.y=l,i.z=u,this}makePerspective(e,n,i,s,o,l,u=Yr){const f=this.elements,d=2*o/(n-e),m=2*o/(i-s),_=(n+e)/(n-e),g=(i+s)/(i-s);let v,S;if(u===Yr)v=-(l+o)/(l-o),S=-2*l*o/(l-o);else if(u===Yf)v=-l/(l-o),S=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=d,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=m,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=v,f[14]=S,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,n,i,s,o,l,u=Yr){const f=this.elements,d=1/(n-e),m=1/(i-s),_=1/(l-o),g=(n+e)*d,v=(i+s)*m;let S,T;if(u===Yr)S=(l+o)*_,T=-2*_;else if(u===Yf)S=o*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-g,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-v,f[2]=0,f[6]=0,f[10]=T,f[14]=-S,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const na=new K,ir=new cn,yD=new K(0,0,0),SD=new K(1,1,1),_s=new K,Oc=new K,Si=new K,$x=new cn,Kx=new Po;class ns{constructor(e=0,n=0,i=0,s=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,o=s[0],l=s[4],u=s[8],f=s[1],d=s[5],m=s[9],_=s[2],g=s[6],v=s[10];switch(n){case"XYZ":this._y=Math.asin(pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,v),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,v),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(pt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-pt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(u,v));break;case"XZY":this._z=Math.asin(-pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-m,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return $x.makeRotationFromQuaternion(e),this.setFromRotationMatrix($x,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Kx.setFromEuler(this),this.setFromQuaternion(Kx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class _M{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ED=0;const Zx=new K,ia=new Po,Fr=new cn,Bc=new K,Pl=new K,MD=new K,TD=new Po,Qx=new K(1,0,0),Jx=new K(0,1,0),ey=new K(0,0,1),ty={type:"added"},wD={type:"removed"},ra={type:"childadded",child:null},lp={type:"childremoved",child:null};class hi extends Do{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ED++}),this.uuid=el(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hi.DEFAULT_UP.clone();const e=new K,n=new ns,i=new Po,s=new K(1,1,1);function o(){i.setFromEuler(n,!1)}function l(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new cn},normalMatrix:{value:new ot}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=hi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _M,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ia.setFromAxisAngle(e,n),this.quaternion.multiply(ia),this}rotateOnWorldAxis(e,n){return ia.setFromAxisAngle(e,n),this.quaternion.premultiply(ia),this}rotateX(e){return this.rotateOnAxis(Qx,e)}rotateY(e){return this.rotateOnAxis(Jx,e)}rotateZ(e){return this.rotateOnAxis(ey,e)}translateOnAxis(e,n){return Zx.copy(e).applyQuaternion(this.quaternion),this.position.add(Zx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qx,e)}translateY(e){return this.translateOnAxis(Jx,e)}translateZ(e){return this.translateOnAxis(ey,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Bc.copy(e):Bc.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Pl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fr.lookAt(Pl,Bc,this.up):Fr.lookAt(Bc,Pl,this.up),this.quaternion.setFromRotationMatrix(Fr),s&&(Fr.extractRotation(s.matrixWorld),ia.setFromRotationMatrix(Fr),this.quaternion.premultiply(ia.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ty),ra.child=e,this.dispatchEvent(ra),ra.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wD),lp.child=e,this.dispatchEvent(lp),lp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ty),ra.child=e,this.dispatchEvent(ra),ra.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const l=this.children[i].getObjectByProperty(e,n);if(l!==void 0)return l}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,e,MD),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,TD,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,m=f.length;d<m;d++){const _=f[d];o(e.shapes,_)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(o(e.materials,this.material[f]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(o(e.animations,f))}}if(n){const u=l(e.geometries),f=l(e.materials),d=l(e.textures),m=l(e.images),_=l(e.shapes),g=l(e.skeletons),v=l(e.animations),S=l(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),v.length>0&&(i.animations=v),S.length>0&&(i.nodes=S)}return i.object=s,i;function l(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}hi.DEFAULT_UP=new K(0,1,0);hi.DEFAULT_MATRIX_AUTO_UPDATE=!0;hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rr=new K,Or=new K,up=new K,Br=new K,sa=new K,oa=new K,ny=new K,cp=new K,fp=new K,dp=new K,hp=new un,pp=new un,mp=new un;class lr{constructor(e=new K,n=new K,i=new K){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),rr.subVectors(e,n),s.cross(rr);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,n,i,s,o){rr.subVectors(s,n),Or.subVectors(i,n),up.subVectors(e,n);const l=rr.dot(rr),u=rr.dot(Or),f=rr.dot(up),d=Or.dot(Or),m=Or.dot(up),_=l*d-u*u;if(_===0)return o.set(0,0,0),null;const g=1/_,v=(d*f-u*m)*g,S=(l*m-u*f)*g;return o.set(1-v-S,S,v)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Br)===null?!1:Br.x>=0&&Br.y>=0&&Br.x+Br.y<=1}static getInterpolation(e,n,i,s,o,l,u,f){return this.getBarycoord(e,n,i,s,Br)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Br.x),f.addScaledVector(l,Br.y),f.addScaledVector(u,Br.z),f)}static getInterpolatedAttribute(e,n,i,s,o,l){return hp.setScalar(0),pp.setScalar(0),mp.setScalar(0),hp.fromBufferAttribute(e,n),pp.fromBufferAttribute(e,i),mp.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(hp,o.x),l.addScaledVector(pp,o.y),l.addScaledVector(mp,o.z),l}static isFrontFacing(e,n,i,s){return rr.subVectors(i,n),Or.subVectors(e,n),rr.cross(Or).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rr.subVectors(this.c,this.b),Or.subVectors(this.a,this.b),rr.cross(Or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return lr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return lr.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,o){return lr.getInterpolation(e,this.a,this.b,this.c,n,i,s,o)}containsPoint(e){return lr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return lr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,o=this.c;let l,u;sa.subVectors(s,i),oa.subVectors(o,i),cp.subVectors(e,i);const f=sa.dot(cp),d=oa.dot(cp);if(f<=0&&d<=0)return n.copy(i);fp.subVectors(e,s);const m=sa.dot(fp),_=oa.dot(fp);if(m>=0&&_<=m)return n.copy(s);const g=f*_-m*d;if(g<=0&&f>=0&&m<=0)return l=f/(f-m),n.copy(i).addScaledVector(sa,l);dp.subVectors(e,o);const v=sa.dot(dp),S=oa.dot(dp);if(S>=0&&v<=S)return n.copy(o);const T=v*d-f*S;if(T<=0&&d>=0&&S<=0)return u=d/(d-S),n.copy(i).addScaledVector(oa,u);const x=m*S-v*_;if(x<=0&&_-m>=0&&v-S>=0)return ny.subVectors(o,s),u=(_-m)/(_-m+(v-S)),n.copy(s).addScaledVector(ny,u);const h=1/(x+T+g);return l=T*h,u=g*h,n.copy(i).addScaledVector(sa,l).addScaledVector(oa,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},zc={h:0,s:0,l:0};function gp(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Dt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Rt.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=Rt.workingColorSpace){if(e=c_(e,1),n=pt(n,0,1),i=pt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,l=2*i-o;this.r=gp(l,o,e+1/3),this.g=gp(l,o,e),this.b=gp(l,o,e-1/3)}return Rt.toWorkingColorSpace(this,s),this}setStyle(e,n=Bi){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=s[1],u=s[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(l===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bi){const i=vM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}copyLinearToSRGB(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bi){return Rt.fromWorkingColorSpace(Hn.copy(this),e),Math.round(pt(Hn.r*255,0,255))*65536+Math.round(pt(Hn.g*255,0,255))*256+Math.round(pt(Hn.b*255,0,255))}getHexString(e=Bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.fromWorkingColorSpace(Hn.copy(this),n);const i=Hn.r,s=Hn.g,o=Hn.b,l=Math.max(i,s,o),u=Math.min(i,s,o);let f,d;const m=(u+l)/2;if(u===l)f=0,d=0;else{const _=l-u;switch(d=m<=.5?_/(l+u):_/(2-l-u),l){case i:f=(s-o)/_+(s<o?6:0);break;case s:f=(o-i)/_+2;break;case o:f=(i-s)/_+4;break}f/=6}return e.h=f,e.s=d,e.l=m,e}getRGB(e,n=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(Hn.copy(this),n),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Bi){Rt.fromWorkingColorSpace(Hn.copy(this),e);const n=Hn.r,i=Hn.g,s=Hn.b;return e!==Bi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(vs),this.setHSL(vs.h+e,vs.s+n,vs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(vs),e.getHSL(zc);const i=ql(vs.h,zc.h,n),s=ql(vs.s,zc.s,n),o=ql(vs.l,zc.l,n);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*s,this.g=o[1]*n+o[4]*i+o[7]*s,this.b=o[2]*n+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Dt;Dt.NAMES=vM;let AD=0;class yu extends Do{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AD++}),this.uuid=el(),this.name="",this.type="Material",this.blending=Ua,this.side=ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Em,this.blendDst=Mm,this.blendEquation=ho,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ua&&(i.blending=this.blending),this.side!==ks&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Em&&(i.blendSrc=this.blendSrc),this.blendDst!==Mm&&(i.blendDst=this.blendDst),this.blendEquation!==ho&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}if(n){const o=s(e.textures),l=s(e.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xM extends yu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=tM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new K,kc=new ht;class Wi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Vx,this.updateRanges=[],this.gpuType=Xr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)kc.fromBufferAttribute(this,n),kc.applyMatrix3(e),this.setXY(n,kc.x,kc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=fa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fa(n,this.array)),n}setX(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fa(n,this.array)),n}setY(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fa(n,this.array)),n}setW(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),i=jn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),i=jn(i,this.array),s=jn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,o){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),i=jn(i,this.array),s=jn(s,this.array),o=jn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vx&&(e.usage=this.usage),e}}class yM extends Wi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class SM extends Wi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Kr extends Wi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let RD=0;const Oi=new cn,_p=new hi,aa=new K,Ei=new xu,bl=new xu,Mn=new K;class Tr extends Do{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RD++}),this.uuid=el(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pM(e)?SM:yM)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ot().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,n,i){return Oi.makeTranslation(e,n,i),this.applyMatrix4(Oi),this}scale(e,n,i){return Oi.makeScale(e,n,i),this.applyMatrix4(Oi),this}lookAt(e){return _p.lookAt(e),_p.updateMatrix(),this.applyMatrix4(_p.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Kr(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const o=e[s];n.setXYZ(s,o.x,o.y,o.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const o=n[i];Ei.setFromBufferAttribute(o),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Ei.setFromBufferAttribute(e),n)for(let o=0,l=n.length;o<l;o++){const u=n[o];bl.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(Ei.min,bl.min),Ei.expandByPoint(Mn),Mn.addVectors(Ei.max,bl.max),Ei.expandByPoint(Mn)):(Ei.expandByPoint(bl.min),Ei.expandByPoint(bl.max))}Ei.getCenter(i);let s=0;for(let o=0,l=e.count;o<l;o++)Mn.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Mn));if(n)for(let o=0,l=n.length;o<l;o++){const u=n[o],f=this.morphTargetsRelative;for(let d=0,m=u.count;d<m;d++)Mn.fromBufferAttribute(u,d),f&&(aa.fromBufferAttribute(e,d),Mn.add(aa)),s=Math.max(s,i.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*i.count),4));const l=this.getAttribute("tangent"),u=[],f=[];for(let B=0;B<i.count;B++)u[B]=new K,f[B]=new K;const d=new K,m=new K,_=new K,g=new ht,v=new ht,S=new ht,T=new K,x=new K;function h(B,L,C){d.fromBufferAttribute(i,B),m.fromBufferAttribute(i,L),_.fromBufferAttribute(i,C),g.fromBufferAttribute(o,B),v.fromBufferAttribute(o,L),S.fromBufferAttribute(o,C),m.sub(d),_.sub(d),v.sub(g),S.sub(g);const H=1/(v.x*S.y-S.x*v.y);isFinite(H)&&(T.copy(m).multiplyScalar(S.y).addScaledVector(_,-v.y).multiplyScalar(H),x.copy(_).multiplyScalar(v.x).addScaledVector(m,-S.x).multiplyScalar(H),u[B].add(T),u[L].add(T),u[C].add(T),f[B].add(x),f[L].add(x),f[C].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let B=0,L=E.length;B<L;++B){const C=E[B],H=C.start,ae=C.count;for(let $=H,fe=H+ae;$<fe;$+=3)h(e.getX($+0),e.getX($+1),e.getX($+2))}const M=new K,w=new K,O=new K,N=new K;function I(B){O.fromBufferAttribute(s,B),N.copy(O);const L=u[B];M.copy(L),M.sub(O.multiplyScalar(O.dot(L))).normalize(),w.crossVectors(N,L);const H=w.dot(f[B])<0?-1:1;l.setXYZW(B,M.x,M.y,M.z,H)}for(let B=0,L=E.length;B<L;++B){const C=E[B],H=C.start,ae=C.count;for(let $=H,fe=H+ae;$<fe;$+=3)I(e.getX($+0)),I(e.getX($+1)),I(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let g=0,v=i.count;g<v;g++)i.setXYZ(g,0,0,0);const s=new K,o=new K,l=new K,u=new K,f=new K,d=new K,m=new K,_=new K;if(e)for(let g=0,v=e.count;g<v;g+=3){const S=e.getX(g+0),T=e.getX(g+1),x=e.getX(g+2);s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,T),l.fromBufferAttribute(n,x),m.subVectors(l,o),_.subVectors(s,o),m.cross(_),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,x),u.add(m),f.add(m),d.add(m),i.setXYZ(S,u.x,u.y,u.z),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(x,d.x,d.y,d.z)}else for(let g=0,v=n.count;g<v;g+=3)s.fromBufferAttribute(n,g+0),o.fromBufferAttribute(n,g+1),l.fromBufferAttribute(n,g+2),m.subVectors(l,o),_.subVectors(s,o),m.cross(_),i.setXYZ(g+0,m.x,m.y,m.z),i.setXYZ(g+1,m.x,m.y,m.z),i.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Mn.fromBufferAttribute(e,n),Mn.normalize(),e.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(u,f){const d=u.array,m=u.itemSize,_=u.normalized,g=new d.constructor(f.length*m);let v=0,S=0;for(let T=0,x=f.length;T<x;T++){u.isInterleavedBufferAttribute?v=f[T]*u.data.stride+u.offset:v=f[T]*m;for(let h=0;h<m;h++)g[S++]=d[v++]}return new Wi(g,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Tr,i=this.index.array,s=this.attributes;for(const u in s){const f=s[u],d=e(f,i);n.setAttribute(u,d)}const o=this.morphAttributes;for(const u in o){const f=[],d=o[u];for(let m=0,_=d.length;m<_;m++){const g=d[m],v=e(g,i);f.push(v)}n.morphAttributes[u]=f}n.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,f=l.length;u<f;u++){const d=l[u];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const s={};let o=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],m=[];for(let _=0,g=d.length;_<g;_++){const v=d[_];m.push(v.toJSON(e.data))}m.length>0&&(s[f]=m,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const d in s){const m=s[d];this.setAttribute(d,m.clone(n))}const o=e.morphAttributes;for(const d in o){const m=[],_=o[d];for(let g=0,v=_.length;g<v;g++)m.push(_[g].clone(n));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,m=l.length;d<m;d++){const _=l[d];this.addGroup(_.start,_.count,_.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const iy=new cn,ro=new f_,Hc=new pd,ry=new K,Vc=new K,Gc=new K,Wc=new K,vp=new K,Xc=new K,sy=new K,Yc=new K;class qr extends hi{constructor(e=new Tr,n=new xM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){Xc.set(0,0,0);for(let f=0,d=o.length;f<d;f++){const m=u[f],_=o[f];m!==0&&(vp.fromBufferAttribute(_,e),l?Xc.addScaledVector(vp,m):Xc.addScaledVector(vp.sub(n),m))}n.add(Xc)}return n}raycast(e,n){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hc.copy(i.boundingSphere),Hc.applyMatrix4(o),ro.copy(e.ray).recast(e.near),!(Hc.containsPoint(ro.origin)===!1&&(ro.intersectSphere(Hc,ry)===null||ro.origin.distanceToSquared(ry)>(e.far-e.near)**2))&&(iy.copy(o).invert(),ro.copy(e.ray).applyMatrix4(iy),!(i.boundingBox!==null&&ro.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ro)))}_computeIntersections(e,n,i){let s;const o=this.geometry,l=this.material,u=o.index,f=o.attributes.position,d=o.attributes.uv,m=o.attributes.uv1,_=o.attributes.normal,g=o.groups,v=o.drawRange;if(u!==null)if(Array.isArray(l))for(let S=0,T=g.length;S<T;S++){const x=g[S],h=l[x.materialIndex],E=Math.max(x.start,v.start),M=Math.min(u.count,Math.min(x.start+x.count,v.start+v.count));for(let w=E,O=M;w<O;w+=3){const N=u.getX(w),I=u.getX(w+1),B=u.getX(w+2);s=qc(this,h,e,i,d,m,_,N,I,B),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,n.push(s))}}else{const S=Math.max(0,v.start),T=Math.min(u.count,v.start+v.count);for(let x=S,h=T;x<h;x+=3){const E=u.getX(x),M=u.getX(x+1),w=u.getX(x+2);s=qc(this,l,e,i,d,m,_,E,M,w),s&&(s.faceIndex=Math.floor(x/3),n.push(s))}}else if(f!==void 0)if(Array.isArray(l))for(let S=0,T=g.length;S<T;S++){const x=g[S],h=l[x.materialIndex],E=Math.max(x.start,v.start),M=Math.min(f.count,Math.min(x.start+x.count,v.start+v.count));for(let w=E,O=M;w<O;w+=3){const N=w,I=w+1,B=w+2;s=qc(this,h,e,i,d,m,_,N,I,B),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,n.push(s))}}else{const S=Math.max(0,v.start),T=Math.min(f.count,v.start+v.count);for(let x=S,h=T;x<h;x+=3){const E=x,M=x+1,w=x+2;s=qc(this,l,e,i,d,m,_,E,M,w),s&&(s.faceIndex=Math.floor(x/3),n.push(s))}}}}function CD(t,e,n,i,s,o,l,u){let f;if(e.side===fi?f=i.intersectTriangle(l,o,s,!0,u):f=i.intersectTriangle(s,o,l,e.side===ks,u),f===null)return null;Yc.copy(u),Yc.applyMatrix4(t.matrixWorld);const d=n.ray.origin.distanceTo(Yc);return d<n.near||d>n.far?null:{distance:d,point:Yc.clone(),object:t}}function qc(t,e,n,i,s,o,l,u,f,d){t.getVertexPosition(u,Vc),t.getVertexPosition(f,Gc),t.getVertexPosition(d,Wc);const m=CD(t,e,n,i,Vc,Gc,Wc,sy);if(m){const _=new K;lr.getBarycoord(sy,Vc,Gc,Wc,_),s&&(m.uv=lr.getInterpolatedAttribute(s,u,f,d,_,new ht)),o&&(m.uv1=lr.getInterpolatedAttribute(o,u,f,d,_,new ht)),l&&(m.normal=lr.getInterpolatedAttribute(l,u,f,d,_,new K),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const g={a:u,b:f,c:d,normal:new K,materialIndex:0};lr.getNormal(Vc,Gc,Wc,g.normal),m.face=g,m.barycoord=_}return m}class Su extends Tr{constructor(e=1,n=1,i=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:o,depthSegments:l};const u=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);const f=[],d=[],m=[],_=[];let g=0,v=0;S("z","y","x",-1,-1,i,n,e,l,o,0),S("z","y","x",1,-1,i,n,-e,l,o,1),S("x","z","y",1,1,e,i,n,s,l,2),S("x","z","y",1,-1,e,i,-n,s,l,3),S("x","y","z",1,-1,e,n,i,s,o,4),S("x","y","z",-1,-1,e,n,-i,s,o,5),this.setIndex(f),this.setAttribute("position",new Kr(d,3)),this.setAttribute("normal",new Kr(m,3)),this.setAttribute("uv",new Kr(_,2));function S(T,x,h,E,M,w,O,N,I,B,L){const C=w/I,H=O/B,ae=w/2,$=O/2,fe=N/2,me=I+1,J=B+1;let j=0,U=0;const Q=new K;for(let V=0;V<J;V++){const te=V*H-$;for(let de=0;de<me;de++){const vt=de*C-ae;Q[T]=vt*E,Q[x]=te*M,Q[h]=fe,d.push(Q.x,Q.y,Q.z),Q[T]=0,Q[x]=0,Q[h]=N>0?1:-1,m.push(Q.x,Q.y,Q.z),_.push(de/I),_.push(1-V/B),j+=1}}for(let V=0;V<B;V++)for(let te=0;te<I;te++){const de=g+te+me*V,vt=g+te+me*(V+1),re=g+(te+1)+me*(V+1),xe=g+(te+1)+me*V;f.push(de,vt,xe),f.push(vt,re,xe),U+=6}u.addGroup(v,U,L),v+=U,g+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Su(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ka(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function $n(t){const e={};for(let n=0;n<t.length;n++){const i=Ka(t[n]);for(const s in i)e[s]=i[s]}return e}function PD(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function EM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const bD={clone:Ka,merge:$n};var LD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hs extends yu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LD,this.fragmentShader=DD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ka(e.uniforms),this.uniformsGroups=PD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?n.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?n.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?n.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?n.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?n.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?n.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?n.uniforms[s]={type:"m4",value:l.toArray()}:n.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class MM extends hi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Yr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xs=new K,oy=new ht,ay=new ht;class Hi extends MM{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=du*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return du*2*Math.atan(Math.tan(Yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,n){return this.getViewBounds(e,oy,ay),n.subVectors(ay,oy)}setViewOffset(e,n,i,s,o,l){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Yl*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,o=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,d=l.fullHeight;o+=l.offsetX*s/f,n-=l.offsetY*i/d,s*=l.width/f,i*=l.height/d}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const la=-90,ua=1;class ID extends hi{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Hi(la,ua,e,n);s.layers=this.layers,this.add(s);const o=new Hi(la,ua,e,n);o.layers=this.layers,this.add(o);const l=new Hi(la,ua,e,n);l.layers=this.layers,this.add(l);const u=new Hi(la,ua,e,n);u.layers=this.layers,this.add(u);const f=new Hi(la,ua,e,n);f.layers=this.layers,this.add(f);const d=new Hi(la,ua,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,o,l,u,f]=n;for(const d of n)this.remove(d);if(e===Yr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Yf)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,u,f,d,m]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,o),e.setRenderTarget(i,1,s),e.render(n,l),e.setRenderTarget(i,2,s),e.render(n,u),e.setRenderTarget(i,3,s),e.render(n,f),e.setRenderTarget(i,4,s),e.render(n,d),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,s),e.render(n,m),e.setRenderTarget(_,g,v),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class TM extends di{constructor(e,n,i,s,o,l,u,f,d,m){e=e!==void 0?e:[],n=n!==void 0?n:Xa,super(e,n,i,s,o,l,u,f,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class UD extends Co{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new TM(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Sr}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Su(5,5,5),o=new Hs({name:"CubemapFromEquirect",uniforms:Ka(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fi,blending:Fs});o.uniforms.tEquirect.value=n;const l=new qr(s,o),u=n.minFilter;return n.minFilter===xo&&(n.minFilter=Sr),new ID(1,10,this).update(e,l),n.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,n,i,s){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(n,i,s);e.setRenderTarget(o)}}class ND extends hi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const xp=new K,FD=new K,OD=new ot;class Es{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=xp.subVectors(i,n).cross(FD.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(xp),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||OD.getNormalMatrix(e),s=this.coplanarPoint(xp).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const so=new pd,jc=new K;class wM{constructor(e=new Es,n=new Es,i=new Es,s=new Es,o=new Es,l=new Es){this.planes=[e,n,i,s,o,l]}set(e,n,i,s,o,l){const u=this.planes;return u[0].copy(e),u[1].copy(n),u[2].copy(i),u[3].copy(s),u[4].copy(o),u[5].copy(l),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Yr){const i=this.planes,s=e.elements,o=s[0],l=s[1],u=s[2],f=s[3],d=s[4],m=s[5],_=s[6],g=s[7],v=s[8],S=s[9],T=s[10],x=s[11],h=s[12],E=s[13],M=s[14],w=s[15];if(i[0].setComponents(f-o,g-d,x-v,w-h).normalize(),i[1].setComponents(f+o,g+d,x+v,w+h).normalize(),i[2].setComponents(f+l,g+m,x+S,w+E).normalize(),i[3].setComponents(f-l,g-m,x-S,w-E).normalize(),i[4].setComponents(f-u,g-_,x-T,w-M).normalize(),n===Yr)i[5].setComponents(f+u,g+_,x+T,w+M).normalize();else if(n===Yf)i[5].setComponents(u,_,T,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),so.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(so)}intersectsSprite(e){return so.center.set(0,0,0),so.radius=.7071067811865476,so.applyMatrix4(e.matrixWorld),this.intersectsSphere(so)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(jc.x=s.normal.x>0?e.max.x:e.min.x,jc.y=s.normal.y>0?e.max.y:e.min.y,jc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ag extends yu{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jf=new K,$f=new K,ly=new cn,Ll=new f_,$c=new pd,yp=new K,uy=new K;class AM extends hi{constructor(e=new Tr,n=new ag){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,o=n.count;s<o;s++)jf.fromBufferAttribute(n,s-1),$f.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=jf.distanceTo($f);e.setAttribute("lineDistance",new Kr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$c.copy(i.boundingSphere),$c.applyMatrix4(s),$c.radius+=o,e.ray.intersectsSphere($c)===!1)return;ly.copy(s).invert(),Ll.copy(e.ray).applyMatrix4(ly);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=this.isLineSegments?2:1,m=i.index,g=i.attributes.position;if(m!==null){const v=Math.max(0,l.start),S=Math.min(m.count,l.start+l.count);for(let T=v,x=S-1;T<x;T+=d){const h=m.getX(T),E=m.getX(T+1),M=Kc(this,e,Ll,f,h,E);M&&n.push(M)}if(this.isLineLoop){const T=m.getX(S-1),x=m.getX(v),h=Kc(this,e,Ll,f,T,x);h&&n.push(h)}}else{const v=Math.max(0,l.start),S=Math.min(g.count,l.start+l.count);for(let T=v,x=S-1;T<x;T+=d){const h=Kc(this,e,Ll,f,T,T+1);h&&n.push(h)}if(this.isLineLoop){const T=Kc(this,e,Ll,f,S-1,v);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Kc(t,e,n,i,s,o){const l=t.geometry.attributes.position;if(jf.fromBufferAttribute(l,s),$f.fromBufferAttribute(l,o),n.distanceSqToSegment(jf,$f,yp,uy)>i)return;yp.applyMatrix4(t.matrixWorld);const f=e.ray.origin.distanceTo(yp);if(!(f<e.near||f>e.far))return{distance:f,point:uy.clone().applyMatrix4(t.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:t}}const cy=new K,fy=new K;class BD extends AM{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,o=n.count;s<o;s+=2)cy.fromBufferAttribute(n,s),fy.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+cy.distanceTo(fy);e.setAttribute("lineDistance",new Kr(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zc extends hi{constructor(){super(),this.isGroup=!0,this.type="Group"}}class RM extends di{constructor(e,n,i,s,o,l,u,f,d,m=Na){if(m!==Na&&m!==ja)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===Na&&(i=Ro),i===void 0&&m===ja&&(i=qa),super(null,s,o,l,u,f,m,i,d),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=u!==void 0?u:dr,this.minFilter=f!==void 0?f:dr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class md extends Tr{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const o=e/2,l=n/2,u=Math.floor(i),f=Math.floor(s),d=u+1,m=f+1,_=e/u,g=n/f,v=[],S=[],T=[],x=[];for(let h=0;h<m;h++){const E=h*g-l;for(let M=0;M<d;M++){const w=M*_-o;S.push(w,-E,0),T.push(0,0,1),x.push(M/u),x.push(1-h/f)}}for(let h=0;h<f;h++)for(let E=0;E<u;E++){const M=E+d*h,w=E+d*(h+1),O=E+1+d*(h+1),N=E+1+d*h;v.push(M,w,N),v.push(w,O,N)}this.setIndex(v),this.setAttribute("position",new Kr(S,3)),this.setAttribute("normal",new Kr(T,3)),this.setAttribute("uv",new Kr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new md(e.width,e.height,e.widthSegments,e.heightSegments)}}class zD extends yu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NL,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kD extends yu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class HD extends MM{constructor(e=-1,n=1,i=1,s=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,l=i+e,u=s+n,f=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,l=o+d*this.view.width,u-=m*this.view.offsetY,f=u-m*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class VD extends Hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dy{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(pt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class GD extends Do{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function hy(t,e,n,i){const s=WD(i);switch(n){case oM:return t*e;case lM:return t*e;case uM:return t*e*2;case cM:return t*e/s.components*s.byteLength;case a_:return t*e/s.components*s.byteLength;case fM:return t*e*2/s.components*s.byteLength;case l_:return t*e*2/s.components*s.byteLength;case aM:return t*e*3/s.components*s.byteLength;case ur:return t*e*4/s.components*s.byteLength;case u_:return t*e*4/s.components*s.byteLength;case mf:case gf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case _f:case vf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fm:case Bm:return Math.max(t,16)*Math.max(e,8)/4;case Nm:case Om:return Math.max(t,8)*Math.max(e,8)/2;case zm:case km:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gm:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Wm:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Xm:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ym:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case qm:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case jm:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $m:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Km:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Zm:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Qm:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Jm:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case eg:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case tg:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case xf:case ng:case ig:return Math.ceil(t/4)*Math.ceil(e/4)*16;case dM:case rg:return Math.ceil(t/4)*Math.ceil(e/4)*8;case sg:case og:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function WD(t){switch(t){case ts:case iM:return{byteLength:1,components:1};case fu:case rM:case vu:return{byteLength:2,components:1};case s_:case o_:return{byteLength:2,components:4};case Ro:case r_:case Xr:return{byteLength:4,components:1};case sM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:i_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=i_);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function CM(){let t=null,e=!1,n=null,i=null;function s(o,l){n(o,l),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function XD(t){const e=new WeakMap;function n(u,f){const d=u.array,m=u.usage,_=d.byteLength,g=t.createBuffer();t.bindBuffer(f,g),t.bufferData(f,d,m),u.onUploadCallback();let v;if(d instanceof Float32Array)v=t.FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?v=t.HALF_FLOAT:v=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=t.SHORT;else if(d instanceof Uint32Array)v=t.UNSIGNED_INT;else if(d instanceof Int32Array)v=t.INT;else if(d instanceof Int8Array)v=t.BYTE;else if(d instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:_}}function i(u,f,d){const m=f.array,_=f.updateRanges;if(t.bindBuffer(d,u),_.length===0)t.bufferSubData(d,0,m);else{_.sort((v,S)=>v.start-S.start);let g=0;for(let v=1;v<_.length;v++){const S=_[g],T=_[v];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++g,_[g]=T)}_.length=g+1;for(let v=0,S=_.length;v<S;v++){const T=_[v];t.bufferSubData(d,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(t.deleteBuffer(f.buffer),e.delete(u))}function l(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,n(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,f),d.version=u.version}}return{get:s,remove:o,update:l}}var YD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qD=`#ifdef USE_ALPHAHASH
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
#endif`,jD=`#ifdef USE_ALPHAMAP
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
#endif`,eI=`#ifdef USE_BATCHING
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
#endif`,tI=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nI=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iI=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rI=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sI=`#ifdef USE_IRIDESCENCE
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
#endif`,oI=`#ifdef USE_BUMPMAP
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
#endif`,aI=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cI=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fI=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pI=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mI=`#define PI 3.141592653589793
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
} // validated`,gI=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_I=`vec3 transformedNormal = objectNormal;
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
#endif`,vI=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xI=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yI=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SI=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EI="gl_FragColor = linearToOutputTexel( gl_FragColor );",MI=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TI=`#ifdef USE_ENVMAP
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
#endif`,wI=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AI=`#ifdef USE_ENVMAP
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
#endif`,RI=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CI=`#ifdef USE_ENVMAP
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
#endif`,PI=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bI=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LI=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DI=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,II=`#ifdef USE_GRADIENTMAP
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
}`,UI=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NI=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OI=`uniform bool receiveShadow;
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
#endif`,BI=`#ifdef USE_ENVMAP
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
#endif`,zI=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HI=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GI=`PhysicalMaterial material;
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
#endif`,WI=`struct PhysicalMaterial {
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
}`,XI=`
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
#endif`,YI=`#if defined( RE_IndirectDiffuse )
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
#endif`,qI=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jI=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$I=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KI=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZI=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t3=`#if defined( USE_POINTS_UV )
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
#endif`,n3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a3=`#ifdef USE_MORPHTARGETS
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
#endif`,l3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p3=`#ifdef USE_NORMALMAP
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
#endif`,m3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,S3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b3=`float getShadowMask() {
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
}`,L3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D3=`#ifdef USE_SKINNING
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
#endif`,I3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U3=`#ifdef USE_SKINNING
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
#endif`,N3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z3=`#ifdef USE_TRANSMISSION
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
#endif`,k3=`#ifdef USE_TRANSMISSION
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
#endif`,H3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y3=`uniform sampler2D t2D;
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
}`,q3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z3=`#include <common>
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
}`,Q3=`#if DEPTH_PACKING == 3200
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
}`,J3=`#define DISTANCE
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
}`,dU=`#define NORMAL
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
}`,hU=`#define PHONG
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
}`,lt={alphahash_fragment:YD,alphahash_pars_fragment:qD,alphamap_fragment:jD,alphamap_pars_fragment:$D,alphatest_fragment:KD,alphatest_pars_fragment:ZD,aomap_fragment:QD,aomap_pars_fragment:JD,batching_pars_vertex:eI,batching_vertex:tI,begin_vertex:nI,beginnormal_vertex:iI,bsdfs:rI,iridescence_fragment:sI,bumpmap_pars_fragment:oI,clipping_planes_fragment:aI,clipping_planes_pars_fragment:lI,clipping_planes_pars_vertex:uI,clipping_planes_vertex:cI,color_fragment:fI,color_pars_fragment:dI,color_pars_vertex:hI,color_vertex:pI,common:mI,cube_uv_reflection_fragment:gI,defaultnormal_vertex:_I,displacementmap_pars_vertex:vI,displacementmap_vertex:xI,emissivemap_fragment:yI,emissivemap_pars_fragment:SI,colorspace_fragment:EI,colorspace_pars_fragment:MI,envmap_fragment:TI,envmap_common_pars_fragment:wI,envmap_pars_fragment:AI,envmap_pars_vertex:RI,envmap_physical_pars_fragment:BI,envmap_vertex:CI,fog_vertex:PI,fog_pars_vertex:bI,fog_fragment:LI,fog_pars_fragment:DI,gradientmap_pars_fragment:II,lightmap_pars_fragment:UI,lights_lambert_fragment:NI,lights_lambert_pars_fragment:FI,lights_pars_begin:OI,lights_toon_fragment:zI,lights_toon_pars_fragment:kI,lights_phong_fragment:HI,lights_phong_pars_fragment:VI,lights_physical_fragment:GI,lights_physical_pars_fragment:WI,lights_fragment_begin:XI,lights_fragment_maps:YI,lights_fragment_end:qI,logdepthbuf_fragment:jI,logdepthbuf_pars_fragment:$I,logdepthbuf_pars_vertex:KI,logdepthbuf_vertex:ZI,map_fragment:QI,map_pars_fragment:JI,map_particle_fragment:e3,map_particle_pars_fragment:t3,metalnessmap_fragment:n3,metalnessmap_pars_fragment:i3,morphinstance_vertex:r3,morphcolor_vertex:s3,morphnormal_vertex:o3,morphtarget_pars_vertex:a3,morphtarget_vertex:l3,normal_fragment_begin:u3,normal_fragment_maps:c3,normal_pars_fragment:f3,normal_pars_vertex:d3,normal_vertex:h3,normalmap_pars_fragment:p3,clearcoat_normal_fragment_begin:m3,clearcoat_normal_fragment_maps:g3,clearcoat_pars_fragment:_3,iridescence_pars_fragment:v3,opaque_fragment:x3,packing:y3,premultiplied_alpha_fragment:S3,project_vertex:E3,dithering_fragment:M3,dithering_pars_fragment:T3,roughnessmap_fragment:w3,roughnessmap_pars_fragment:A3,shadowmap_pars_fragment:R3,shadowmap_pars_vertex:C3,shadowmap_vertex:P3,shadowmask_pars_fragment:b3,skinbase_vertex:L3,skinning_pars_vertex:D3,skinning_vertex:I3,skinnormal_vertex:U3,specularmap_fragment:N3,specularmap_pars_fragment:F3,tonemapping_fragment:O3,tonemapping_pars_fragment:B3,transmission_fragment:z3,transmission_pars_fragment:k3,uv_pars_fragment:H3,uv_pars_vertex:V3,uv_vertex:G3,worldpos_vertex:W3,background_vert:X3,background_frag:Y3,backgroundCube_vert:q3,backgroundCube_frag:j3,cube_vert:$3,cube_frag:K3,depth_vert:Z3,depth_frag:Q3,distanceRGBA_vert:J3,distanceRGBA_frag:eU,equirect_vert:tU,equirect_frag:nU,linedashed_vert:iU,linedashed_frag:rU,meshbasic_vert:sU,meshbasic_frag:oU,meshlambert_vert:aU,meshlambert_frag:lU,meshmatcap_vert:uU,meshmatcap_frag:cU,meshnormal_vert:fU,meshnormal_frag:dU,meshphong_vert:hU,meshphong_frag:pU,meshphysical_vert:mU,meshphysical_frag:gU,meshtoon_vert:_U,meshtoon_frag:vU,points_vert:xU,points_frag:yU,shadow_vert:SU,shadow_frag:EU,sprite_vert:MU,sprite_frag:TU},Re={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},xr={basic:{uniforms:$n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:$n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Dt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:$n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:$n([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:$n([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Dt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:$n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:$n([Re.points,Re.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:$n([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:$n([Re.common,Re.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:$n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:$n([Re.sprite,Re.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:$n([Re.common,Re.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:$n([Re.lights,Re.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};xr.physical={uniforms:$n([xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Qc={r:0,b:0,g:0},oo=new ns,wU=new cn;function AU(t,e,n,i,s,o,l){const u=new Dt(0);let f=o===!0?0:1,d,m,_=null,g=0,v=null;function S(M){let w=M.isScene===!0?M.background:null;return w&&w.isTexture&&(w=(M.backgroundBlurriness>0?n:e).get(w)),w}function T(M){let w=!1;const O=S(M);O===null?h(u,f):O&&O.isColor&&(h(O,1),w=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(t.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(M,w){const O=S(w);O&&(O.isCubeTexture||O.mapping===hd)?(m===void 0&&(m=new qr(new Su(1,1,1),new Hs({name:"BackgroundCubeMaterial",uniforms:Ka(xr.backgroundCube.uniforms),vertexShader:xr.backgroundCube.vertexShader,fragmentShader:xr.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),oo.copy(w.backgroundRotation),oo.x*=-1,oo.y*=-1,oo.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(oo.y*=-1,oo.z*=-1),m.material.uniforms.envMap.value=O,m.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(wU.makeRotationFromEuler(oo)),m.material.toneMapped=Rt.getTransfer(O.colorSpace)!==Ft,(_!==O||g!==O.version||v!==t.toneMapping)&&(m.material.needsUpdate=!0,_=O,g=O.version,v=t.toneMapping),m.layers.enableAll(),M.unshift(m,m.geometry,m.material,0,0,null)):O&&O.isTexture&&(d===void 0&&(d=new qr(new md(2,2),new Hs({name:"BackgroundMaterial",uniforms:Ka(xr.background.uniforms),vertexShader:xr.background.vertexShader,fragmentShader:xr.background.fragmentShader,side:ks,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=O,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=Rt.getTransfer(O.colorSpace)!==Ft,O.matrixAutoUpdate===!0&&O.updateMatrix(),d.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||g!==O.version||v!==t.toneMapping)&&(d.material.needsUpdate=!0,_=O,g=O.version,v=t.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null))}function h(M,w){M.getRGB(Qc,EM(t)),i.buffers.color.setClear(Qc.r,Qc.g,Qc.b,w,l)}function E(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),d!==void 0&&(d.geometry.dispose(),d.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(M,w=1){u.set(M),f=w,h(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(M){f=M,h(u,f)},render:T,addToRenderList:x,dispose:E}}function RU(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=g(null);let o=s,l=!1;function u(C,H,ae,$,fe){let me=!1;const J=_($,ae,H);o!==J&&(o=J,d(o.object)),me=v(C,$,ae,fe),me&&S(C,$,ae,fe),fe!==null&&e.update(fe,t.ELEMENT_ARRAY_BUFFER),(me||l)&&(l=!1,w(C,H,ae,$),fe!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function f(){return t.createVertexArray()}function d(C){return t.bindVertexArray(C)}function m(C){return t.deleteVertexArray(C)}function _(C,H,ae){const $=ae.wireframe===!0;let fe=i[C.id];fe===void 0&&(fe={},i[C.id]=fe);let me=fe[H.id];me===void 0&&(me={},fe[H.id]=me);let J=me[$];return J===void 0&&(J=g(f()),me[$]=J),J}function g(C){const H=[],ae=[],$=[];for(let fe=0;fe<n;fe++)H[fe]=0,ae[fe]=0,$[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ae,attributeDivisors:$,object:C,attributes:{},index:null}}function v(C,H,ae,$){const fe=o.attributes,me=H.attributes;let J=0;const j=ae.getAttributes();for(const U in j)if(j[U].location>=0){const V=fe[U];let te=me[U];if(te===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(te=C.instanceColor)),V===void 0||V.attribute!==te||te&&V.data!==te.data)return!0;J++}return o.attributesNum!==J||o.index!==$}function S(C,H,ae,$){const fe={},me=H.attributes;let J=0;const j=ae.getAttributes();for(const U in j)if(j[U].location>=0){let V=me[U];V===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(V=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(V=C.instanceColor));const te={};te.attribute=V,V&&V.data&&(te.data=V.data),fe[U]=te,J++}o.attributes=fe,o.attributesNum=J,o.index=$}function T(){const C=o.newAttributes;for(let H=0,ae=C.length;H<ae;H++)C[H]=0}function x(C){h(C,0)}function h(C,H){const ae=o.newAttributes,$=o.enabledAttributes,fe=o.attributeDivisors;ae[C]=1,$[C]===0&&(t.enableVertexAttribArray(C),$[C]=1),fe[C]!==H&&(t.vertexAttribDivisor(C,H),fe[C]=H)}function E(){const C=o.newAttributes,H=o.enabledAttributes;for(let ae=0,$=H.length;ae<$;ae++)H[ae]!==C[ae]&&(t.disableVertexAttribArray(ae),H[ae]=0)}function M(C,H,ae,$,fe,me,J){J===!0?t.vertexAttribIPointer(C,H,ae,fe,me):t.vertexAttribPointer(C,H,ae,$,fe,me)}function w(C,H,ae,$){T();const fe=$.attributes,me=ae.getAttributes(),J=H.defaultAttributeValues;for(const j in me){const U=me[j];if(U.location>=0){let Q=fe[j];if(Q===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor)),Q!==void 0){const V=Q.normalized,te=Q.itemSize,de=e.get(Q);if(de===void 0)continue;const vt=de.buffer,re=de.type,xe=de.bytesPerElement,Me=re===t.INT||re===t.UNSIGNED_INT||Q.gpuType===r_;if(Q.isInterleavedBufferAttribute){const Te=Q.data,Xe=Te.stride,Ze=Q.offset;if(Te.isInstancedInterleavedBuffer){for(let ut=0;ut<U.locationSize;ut++)h(U.location+ut,Te.meshPerAttribute);C.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let ut=0;ut<U.locationSize;ut++)x(U.location+ut);t.bindBuffer(t.ARRAY_BUFFER,vt);for(let ut=0;ut<U.locationSize;ut++)M(U.location+ut,te/U.locationSize,re,V,Xe*xe,(Ze+te/U.locationSize*ut)*xe,Me)}else{if(Q.isInstancedBufferAttribute){for(let Te=0;Te<U.locationSize;Te++)h(U.location+Te,Q.meshPerAttribute);C.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Te=0;Te<U.locationSize;Te++)x(U.location+Te);t.bindBuffer(t.ARRAY_BUFFER,vt);for(let Te=0;Te<U.locationSize;Te++)M(U.location+Te,te/U.locationSize,re,V,te*xe,te/U.locationSize*Te*xe,Me)}}else if(J!==void 0){const V=J[j];if(V!==void 0)switch(V.length){case 2:t.vertexAttrib2fv(U.location,V);break;case 3:t.vertexAttrib3fv(U.location,V);break;case 4:t.vertexAttrib4fv(U.location,V);break;default:t.vertexAttrib1fv(U.location,V)}}}}E()}function O(){B();for(const C in i){const H=i[C];for(const ae in H){const $=H[ae];for(const fe in $)m($[fe].object),delete $[fe];delete H[ae]}delete i[C]}}function N(C){if(i[C.id]===void 0)return;const H=i[C.id];for(const ae in H){const $=H[ae];for(const fe in $)m($[fe].object),delete $[fe];delete H[ae]}delete i[C.id]}function I(C){for(const H in i){const ae=i[H];if(ae[C.id]===void 0)continue;const $=ae[C.id];for(const fe in $)m($[fe].object),delete $[fe];delete ae[C.id]}}function B(){L(),l=!0,o!==s&&(o=s,d(o.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:B,resetDefaultState:L,dispose:O,releaseStatesOfGeometry:N,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:x,disableUnusedAttributes:E}}function CU(t,e,n){let i;function s(d){i=d}function o(d,m){t.drawArrays(i,d,m),n.update(m,i,1)}function l(d,m,_){_!==0&&(t.drawArraysInstanced(i,d,m,_),n.update(m,i,_))}function u(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,m,0,_);let v=0;for(let S=0;S<_;S++)v+=m[S];n.update(v,i,1)}function f(d,m,_,g){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<d.length;S++)l(d[S],m[S],g[S]);else{v.multiDrawArraysInstancedWEBGL(i,d,0,m,0,g,0,_);let S=0;for(let T=0;T<_;T++)S+=m[T]*g[T];n.update(S,i,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function PU(t,e,n,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(I){return!(I!==ur&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(I){const B=I===vu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ts&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Xr&&!B)}function f(I){if(I==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const m=f(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const _=n.logarithmicDepthBuffer===!0,g=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),v=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),O=S>0,N=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:_,reverseDepthBuffer:g,maxTextures:v,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:O,maxSamples:N}}function bU(t){const e=this;let n=null,i=0,s=!1,o=!1;const l=new Es,u=new ot,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const v=_.length!==0||g||i!==0||s;return s=g,i=_.length,v},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,g){n=m(_,g,0)},this.setState=function(_,g,v){const S=_.clippingPlanes,T=_.clipIntersection,x=_.clipShadows,h=t.get(_);if(!s||S===null||S.length===0||o&&!x)o?m(null):d();else{const E=o?0:i,M=E*4;let w=h.clippingState||null;f.value=w,w=m(S,g,M,v);for(let O=0;O!==M;++O)w[O]=n[O];h.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=E}};function d(){f.value!==n&&(f.value=n,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(_,g,v,S){const T=_!==null?_.length:0;let x=null;if(T!==0){if(x=f.value,S!==!0||x===null){const h=v+T*4,E=g.matrixWorldInverse;u.getNormalMatrix(E),(x===null||x.length<h)&&(x=new Float32Array(h));for(let M=0,w=v;M!==T;++M,w+=4)l.copy(_[M]).applyMatrix4(E,u),l.normal.toArray(x,w),x[w+3]=l.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function LU(t){let e=new WeakMap;function n(l,u){return u===Lm?l.mapping=Xa:u===Dm&&(l.mapping=Ya),l}function i(l){if(l&&l.isTexture){const u=l.mapping;if(u===Lm||u===Dm)if(e.has(l)){const f=e.get(l).texture;return n(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const d=new UD(f.height);return d.fromEquirectangularTexture(t,l),e.set(l,d),l.addEventListener("dispose",s),n(d.texture,l.mapping)}else return null}}return l}function s(l){const u=l.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const Aa=4,py=[.125,.215,.35,.446,.526,.582],po=20,Sp=new HD,my=new Dt;let Ep=null,Mp=0,Tp=0,wp=!1;const fo=(1+Math.sqrt(5))/2,ca=1/fo,gy=[new K(-fo,ca,0),new K(fo,ca,0),new K(-ca,0,fo),new K(ca,0,fo),new K(0,fo,-ca),new K(0,fo,ca),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class _y{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){Ep=this._renderer.getRenderTarget(),Mp=this._renderer.getActiveCubeFace(),Tp=this._renderer.getActiveMipmapLevel(),wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ep,Mp,Tp),this._renderer.xr.enabled=wp,e.scissorTest=!1,Jc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xa||e.mapping===Ya?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ep=this._renderer.getRenderTarget(),Mp=this._renderer.getActiveCubeFace(),Tp=this._renderer.getActiveMipmapLevel(),wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Sr,minFilter:Sr,generateMipmaps:!1,type:vu,format:ur,colorSpace:$a,depthBuffer:!1},s=vy(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vy(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DU(o)),this._blurMaterial=IU(o,e,n)}return s}_compileMaterial(e){const n=new qr(this._lodPlanes[0],e);this._renderer.compile(n,Sp)}_sceneToCubeUV(e,n,i,s){const u=new Hi(90,1,n,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,g=m.toneMapping;m.getClearColor(my),m.toneMapping=Os,m.autoClear=!1;const v=new xM({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1}),S=new qr(new Su,v);let T=!1;const x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,T=!0):(v.color.copy(my),T=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(u.up.set(0,f[h],0),u.lookAt(d[h],0,0)):E===1?(u.up.set(0,0,f[h]),u.lookAt(0,d[h],0)):(u.up.set(0,f[h],0),u.lookAt(0,0,d[h]));const M=this._cubeSize;Jc(s,E*M,h>2?M:0,M,M),m.setRenderTarget(s),T&&m.render(S,u),m.render(e,u)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=g,m.autoClear=_,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Xa||e.mapping===Ya;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xy());const o=s?this._cubemapMaterial:this._equirectMaterial,l=new qr(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=e;const f=this._cubeSize;Jc(n,0,0,3*f,2*f),i.setRenderTarget(n),i.render(l,Sp)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=gy[(s-o-1)%gy.length];this._blur(e,o-1,o,l,u)}n.autoClear=i}_blur(e,n,i,s,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,n,i,s,"latitudinal",o),this._halfBlur(l,e,i,i,s,"longitudinal",o)}_halfBlur(e,n,i,s,o,l,u){const f=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new qr(this._lodPlanes[s],d),g=d.uniforms,v=this._sizeLods[i]-1,S=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*po-1),T=o/S,x=isFinite(o)?1+Math.floor(m*T):po;x>po&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${po}`);const h=[];let E=0;for(let I=0;I<po;++I){const B=I/T,L=Math.exp(-B*B/2);h.push(L),I===0?E+=L:I<x&&(E+=2*L)}for(let I=0;I<h.length;I++)h[I]=h[I]/E;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=h,g.latitudinal.value=l==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:M}=this;g.dTheta.value=S,g.mipInt.value=M-i;const w=this._sizeLods[s],O=3*w*(s>M-Aa?s-M+Aa:0),N=4*(this._cubeSize-w);Jc(n,O,N,3*w,2*w),f.setRenderTarget(n),f.render(_,Sp)}}function DU(t){const e=[],n=[],i=[];let s=t;const o=t-Aa+1+py.length;for(let l=0;l<o;l++){const u=Math.pow(2,s);n.push(u);let f=1/u;l>t-Aa?f=py[l-t+Aa-1]:l===0&&(f=0),i.push(f);const d=1/(u-2),m=-d,_=1+d,g=[m,m,_,m,_,_,m,m,_,_,m,_],v=6,S=6,T=3,x=2,h=1,E=new Float32Array(T*S*v),M=new Float32Array(x*S*v),w=new Float32Array(h*S*v);for(let N=0;N<v;N++){const I=N%3*2/3-1,B=N>2?0:-1,L=[I,B,0,I+2/3,B,0,I+2/3,B+1,0,I,B,0,I+2/3,B+1,0,I,B+1,0];E.set(L,T*S*N),M.set(g,x*S*N);const C=[N,N,N,N,N,N];w.set(C,h*S*N)}const O=new Tr;O.setAttribute("position",new Wi(E,T)),O.setAttribute("uv",new Wi(M,x)),O.setAttribute("faceIndex",new Wi(w,h)),e.push(O),s>Aa&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function vy(t,e,n){const i=new Co(t,e,n);return i.texture.mapping=hd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jc(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function IU(t,e,n){const i=new Float32Array(po),s=new K(0,1,0);return new Hs({name:"SphericalGaussianBlur",defines:{n:po,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:d_(),fragmentShader:`

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
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function xy(){return new Hs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:d_(),fragmentShader:`

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
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function yy(){return new Hs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:d_(),fragmentShader:`

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
	`}function UU(t){let e=new WeakMap,n=null;function i(u){if(u&&u.isTexture){const f=u.mapping,d=f===Lm||f===Dm,m=f===Xa||f===Ya;if(d||m){let _=e.get(u);const g=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new _y(t)),_=d?n.fromEquirectangular(u,_):n.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),_.texture;if(_!==void 0)return _.texture;{const v=u.image;return d&&v&&v.height>0||m&&v&&s(v)?(n===null&&(n=new _y(t)),_=d?n.fromEquirectangular(u):n.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),u.addEventListener("dispose",o),_.texture):null}}}return u}function s(u){let f=0;const d=6;for(let m=0;m<d;m++)u[m]!==void 0&&f++;return f===d}function o(u){const f=u.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:l}}function NU(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&da("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function FU(t,e,n,i){const s={},o=new WeakMap;function l(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const S in g.attributes)e.remove(g.attributes[S]);g.removeEventListener("dispose",l),delete s[g.id];const v=o.get(g);v&&(e.remove(v),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function u(_,g){return s[g.id]===!0||(g.addEventListener("dispose",l),s[g.id]=!0,n.memory.geometries++),g}function f(_){const g=_.attributes;for(const v in g)e.update(g[v],t.ARRAY_BUFFER)}function d(_){const g=[],v=_.index,S=_.attributes.position;let T=0;if(v!==null){const E=v.array;T=v.version;for(let M=0,w=E.length;M<w;M+=3){const O=E[M+0],N=E[M+1],I=E[M+2];g.push(O,N,N,I,I,O)}}else if(S!==void 0){const E=S.array;T=S.version;for(let M=0,w=E.length/3-1;M<w;M+=3){const O=M+0,N=M+1,I=M+2;g.push(O,N,N,I,I,O)}}else return;const x=new(pM(g)?SM:yM)(g,1);x.version=T;const h=o.get(_);h&&e.remove(h),o.set(_,x)}function m(_){const g=o.get(_);if(g){const v=_.index;v!==null&&g.version<v.version&&d(_)}else d(_);return o.get(_)}return{get:u,update:f,getWireframeAttribute:m}}function OU(t,e,n){let i;function s(g){i=g}let o,l;function u(g){o=g.type,l=g.bytesPerElement}function f(g,v){t.drawElements(i,v,o,g*l),n.update(v,i,1)}function d(g,v,S){S!==0&&(t.drawElementsInstanced(i,v,o,g*l,S),n.update(v,i,S))}function m(g,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,o,g,0,S);let x=0;for(let h=0;h<S;h++)x+=v[h];n.update(x,i,1)}function _(g,v,S,T){if(S===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let h=0;h<g.length;h++)d(g[h]/l,v[h],T[h]);else{x.multiDrawElementsInstancedWEBGL(i,v,0,o,g,0,T,0,S);let h=0;for(let E=0;E<S;E++)h+=v[E]*T[E];n.update(h,i,1)}}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function BU(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,u){switch(n.calls++,l){case t.TRIANGLES:n.triangles+=u*(o/3);break;case t.LINES:n.lines+=u*(o/2);break;case t.LINE_STRIP:n.lines+=u*(o-1);break;case t.LINE_LOOP:n.lines+=u*o;break;case t.POINTS:n.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function zU(t,e,n){const i=new WeakMap,s=new un;function o(l,u,f){const d=l.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0;let g=i.get(u);if(g===void 0||g.count!==_){let C=function(){B.dispose(),i.delete(u),u.removeEventListener("dispose",C)};var v=C;g!==void 0&&g.texture.dispose();const S=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,h=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let w=0;S===!0&&(w=1),T===!0&&(w=2),x===!0&&(w=3);let O=u.attributes.position.count*w,N=1;O>e.maxTextureSize&&(N=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const I=new Float32Array(O*N*4*_),B=new gM(I,O,N,_);B.type=Xr,B.needsUpdate=!0;const L=w*4;for(let H=0;H<_;H++){const ae=h[H],$=E[H],fe=M[H],me=O*N*4*H;for(let J=0;J<ae.count;J++){const j=J*L;S===!0&&(s.fromBufferAttribute(ae,J),I[me+j+0]=s.x,I[me+j+1]=s.y,I[me+j+2]=s.z,I[me+j+3]=0),T===!0&&(s.fromBufferAttribute($,J),I[me+j+4]=s.x,I[me+j+5]=s.y,I[me+j+6]=s.z,I[me+j+7]=0),x===!0&&(s.fromBufferAttribute(fe,J),I[me+j+8]=s.x,I[me+j+9]=s.y,I[me+j+10]=s.z,I[me+j+11]=fe.itemSize===4?s.w:1)}}g={count:_,texture:B,size:new ht(O,N)},i.set(u,g),u.addEventListener("dispose",C)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(t,"morphTexture",l.morphTexture,n);else{let S=0;for(let x=0;x<d.length;x++)S+=d[x];const T=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(t,"morphTargetBaseInfluence",T),f.getUniforms().setValue(t,"morphTargetInfluences",d)}f.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}return{update:o}}function kU(t,e,n,i){let s=new WeakMap;function o(f){const d=i.render.frame,m=f.geometry,_=e.get(f,m);if(s.get(_)!==d&&(e.update(_),s.set(_,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),s.get(f)!==d&&(n.update(f.instanceMatrix,t.ARRAY_BUFFER),f.instanceColor!==null&&n.update(f.instanceColor,t.ARRAY_BUFFER),s.set(f,d))),f.isSkinnedMesh){const g=f.skeleton;s.get(g)!==d&&(g.update(),s.set(g,d))}return _}function l(){s=new WeakMap}function u(f){const d=f.target;d.removeEventListener("dispose",u),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:o,dispose:l}}const PM=new di,Sy=new RM(1,1),bM=new gM,LM=new vD,DM=new TM,Ey=[],My=[],Ty=new Float32Array(16),wy=new Float32Array(9),Ay=new Float32Array(4);function tl(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let o=Ey[s];if(o===void 0&&(o=new Float32Array(s),Ey[s]=o),e!==0){i.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=n,t[l].toArray(o,u)}return o}function xn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function yn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function gd(t,e){let n=My[e];n===void 0&&(n=new Int32Array(e),My[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function HU(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function VU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;t.uniform2fv(this.addr,e),yn(n,e)}}function GU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(xn(n,e))return;t.uniform3fv(this.addr,e),yn(n,e)}}function WU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;t.uniform4fv(this.addr,e),yn(n,e)}}function XU(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),yn(n,e)}else{if(xn(n,i))return;Ay.set(i),t.uniformMatrix2fv(this.addr,!1,Ay),yn(n,i)}}function YU(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),yn(n,e)}else{if(xn(n,i))return;wy.set(i),t.uniformMatrix3fv(this.addr,!1,wy),yn(n,i)}}function qU(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),yn(n,e)}else{if(xn(n,i))return;Ty.set(i),t.uniformMatrix4fv(this.addr,!1,Ty),yn(n,i)}}function jU(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $U(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;t.uniform2iv(this.addr,e),yn(n,e)}}function KU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xn(n,e))return;t.uniform3iv(this.addr,e),yn(n,e)}}function ZU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;t.uniform4iv(this.addr,e),yn(n,e)}}function QU(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function JU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;t.uniform2uiv(this.addr,e),yn(n,e)}}function eN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xn(n,e))return;t.uniform3uiv(this.addr,e),yn(n,e)}}function tN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;t.uniform4uiv(this.addr,e),yn(n,e)}}function nN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let o;this.type===t.SAMPLER_2D_SHADOW?(Sy.compareFunction=hM,o=Sy):o=PM,n.setTexture2D(e||o,s)}function iN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||LM,s)}function rN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||DM,s)}function sN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||bM,s)}function oN(t){switch(t){case 5126:return HU;case 35664:return VU;case 35665:return GU;case 35666:return WU;case 35674:return XU;case 35675:return YU;case 35676:return qU;case 5124:case 35670:return jU;case 35667:case 35671:return $U;case 35668:case 35672:return KU;case 35669:case 35673:return ZU;case 5125:return QU;case 36294:return JU;case 36295:return eN;case 36296:return tN;case 35678:case 36198:case 36298:case 36306:case 35682:return nN;case 35679:case 36299:case 36307:return iN;case 35680:case 36300:case 36308:case 36293:return rN;case 36289:case 36303:case 36311:case 36292:return sN}}function aN(t,e){t.uniform1fv(this.addr,e)}function lN(t,e){const n=tl(e,this.size,2);t.uniform2fv(this.addr,n)}function uN(t,e){const n=tl(e,this.size,3);t.uniform3fv(this.addr,n)}function cN(t,e){const n=tl(e,this.size,4);t.uniform4fv(this.addr,n)}function fN(t,e){const n=tl(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function dN(t,e){const n=tl(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hN(t,e){const n=tl(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function pN(t,e){t.uniform1iv(this.addr,e)}function mN(t,e){t.uniform2iv(this.addr,e)}function gN(t,e){t.uniform3iv(this.addr,e)}function _N(t,e){t.uniform4iv(this.addr,e)}function vN(t,e){t.uniform1uiv(this.addr,e)}function xN(t,e){t.uniform2uiv(this.addr,e)}function yN(t,e){t.uniform3uiv(this.addr,e)}function SN(t,e){t.uniform4uiv(this.addr,e)}function EN(t,e,n){const i=this.cache,s=e.length,o=gd(n,s);xn(i,o)||(t.uniform1iv(this.addr,o),yn(i,o));for(let l=0;l!==s;++l)n.setTexture2D(e[l]||PM,o[l])}function MN(t,e,n){const i=this.cache,s=e.length,o=gd(n,s);xn(i,o)||(t.uniform1iv(this.addr,o),yn(i,o));for(let l=0;l!==s;++l)n.setTexture3D(e[l]||LM,o[l])}function TN(t,e,n){const i=this.cache,s=e.length,o=gd(n,s);xn(i,o)||(t.uniform1iv(this.addr,o),yn(i,o));for(let l=0;l!==s;++l)n.setTextureCube(e[l]||DM,o[l])}function wN(t,e,n){const i=this.cache,s=e.length,o=gd(n,s);xn(i,o)||(t.uniform1iv(this.addr,o),yn(i,o));for(let l=0;l!==s;++l)n.setTexture2DArray(e[l]||bM,o[l])}function AN(t){switch(t){case 5126:return aN;case 35664:return lN;case 35665:return uN;case 35666:return cN;case 35674:return fN;case 35675:return dN;case 35676:return hN;case 5124:case 35670:return pN;case 35667:case 35671:return mN;case 35668:case 35672:return gN;case 35669:case 35673:return _N;case 5125:return vN;case 36294:return xN;case 36295:return yN;case 36296:return SN;case 35678:case 36198:case 36298:case 36306:case 35682:return EN;case 35679:case 36299:case 36307:return MN;case 35680:case 36300:case 36308:case 36293:return TN;case 36289:case 36303:case 36311:case 36292:return wN}}class RN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=oN(n.type)}}class CN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AN(n.type)}}class PN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let o=0,l=s.length;o!==l;++o){const u=s[o];u.setValue(e,n[u.id],i)}}}const Ap=/(\w+)(\])?(\[|\.)?/g;function Ry(t,e){t.seq.push(e),t.map[e.id]=e}function bN(t,e,n){const i=t.name,s=i.length;for(Ap.lastIndex=0;;){const o=Ap.exec(i),l=Ap.lastIndex;let u=o[1];const f=o[2]==="]",d=o[3];if(f&&(u=u|0),d===void 0||d==="["&&l+2===s){Ry(n,d===void 0?new RN(u,t,e):new CN(u,t,e));break}else{let _=n.map[u];_===void 0&&(_=new PN(u),Ry(n,_)),n=_}}}class yf{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(n,s),l=e.getUniformLocation(n,o.name);bN(o,l,this)}}setValue(e,n,i,s){const o=this.map[n];o!==void 0&&o.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let o=0,l=n.length;o!==l;++o){const u=n[o],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,o=e.length;s!==o;++s){const l=e[s];l.id in n&&i.push(l)}return i}}function Cy(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const LN=37297;let DN=0;function IN(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let l=s;l<o;l++){const u=l+1;i.push(`${u===e?">":" "} ${u}: ${n[l]}`)}return i.join(`
`)}const Py=new ot;function UN(t){Rt._getMatrix(Py,Rt.workingColorSpace,t);const e=`mat3( ${Py.elements.map(n=>n.toFixed(4))} )`;switch(Rt.getTransfer(t)){case Xf:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function by(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const l=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+IN(t.getShaderSource(e),l)}else return s}function NN(t,e){const n=UN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function FN(t,e){let n;switch(e){case RL:n="Linear";break;case CL:n="Reinhard";break;case PL:n="Cineon";break;case bL:n="ACESFilmic";break;case DL:n="AgX";break;case IL:n="Neutral";break;case LL:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ef=new K;function ON(){Rt.getLuminanceCoefficients(ef);const t=ef.x.toFixed(4),e=ef.y.toFixed(4),n=ef.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fl).join(`
`)}function zN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function kN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=t.getActiveAttrib(e,s),l=o.name;let u=1;o.type===t.FLOAT_MAT2&&(u=2),o.type===t.FLOAT_MAT3&&(u=3),o.type===t.FLOAT_MAT4&&(u=4),n[l]={type:o.type,location:t.getAttribLocation(e,l),locationSize:u}}return n}function Fl(t){return t!==""}function Ly(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dy(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HN=/^[ \t]*#include +<([\w\d./]+)>/gm;function lg(t){return t.replace(HN,GN)}const VN=new Map;function GN(t,e){let n=lt[e];if(n===void 0){const i=VN.get(e);if(i!==void 0)n=lt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lg(n)}const WN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iy(t){return t.replace(WN,XN)}function XN(t,e,n,i){let s="";for(let o=parseInt(e);o<parseInt(n);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Uy(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function YN(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===eM?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===oL?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===zr&&(e="SHADOWMAP_TYPE_VSM"),e}function qN(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xa:case Ya:e="ENVMAP_TYPE_CUBE";break;case hd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jN(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ya:e="ENVMAP_MODE_REFRACTION";break}return e}function $N(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case tM:e="ENVMAP_BLENDING_MULTIPLY";break;case wL:e="ENVMAP_BLENDING_MIX";break;case AL:e="ENVMAP_BLENDING_ADD";break}return e}function KN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ZN(t,e,n,i){const s=t.getContext(),o=n.defines;let l=n.vertexShader,u=n.fragmentShader;const f=YN(n),d=qN(n),m=jN(n),_=$N(n),g=KN(n),v=BN(n),S=zN(o),T=s.createProgram();let x,h,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Fl).join(`
`),x.length>0&&(x+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Fl).join(`
`),h.length>0&&(h+=`
`)):(x=[Uy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fl).join(`
`),h=[Uy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Os?"#define TONE_MAPPING":"",n.toneMapping!==Os?lt.tonemapping_pars_fragment:"",n.toneMapping!==Os?FN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,NN("linearToOutputTexel",n.outputColorSpace),ON(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fl).join(`
`)),l=lg(l),l=Ly(l,n),l=Dy(l,n),u=lg(u),u=Ly(u,n),u=Dy(u,n),l=Iy(l),u=Iy(u),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,h=["#define varying in",n.glslVersion===Gx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=E+x+l,w=E+h+u,O=Cy(s,s.VERTEX_SHADER,M),N=Cy(s,s.FRAGMENT_SHADER,w);s.attachShader(T,O),s.attachShader(T,N),n.index0AttributeName!==void 0?s.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function I(H){if(t.debug.checkShaderErrors){const ae=s.getProgramInfoLog(T).trim(),$=s.getShaderInfoLog(O).trim(),fe=s.getShaderInfoLog(N).trim();let me=!0,J=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(me=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,T,O,N);else{const j=by(s,O,"vertex"),U=by(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ae+`
`+j+`
`+U)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):($===""||fe==="")&&(J=!1);J&&(H.diagnostics={runnable:me,programLog:ae,vertexShader:{log:$,prefix:x},fragmentShader:{log:fe,prefix:h}})}s.deleteShader(O),s.deleteShader(N),B=new yf(s,T),L=kN(s,T)}let B;this.getUniforms=function(){return B===void 0&&I(this),B};let L;this.getAttributes=function(){return L===void 0&&I(this),L};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(T,LN)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=DN++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=O,this.fragmentShader=N,this}let QN=0;class JN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),o=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new eF(e),n.set(e,i)),i}}class eF{constructor(e){this.id=QN++,this.code=e,this.usedTimes=0}}function tF(t,e,n,i,s,o,l){const u=new _M,f=new JN,d=new Set,m=[],_=s.logarithmicDepthBuffer,g=s.vertexTextures;let v=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return d.add(L),L===0?"uv":`uv${L}`}function x(L,C,H,ae,$){const fe=ae.fog,me=$.geometry,J=L.isMeshStandardMaterial?ae.environment:null,j=(L.isMeshStandardMaterial?n:e).get(L.envMap||J),U=j&&j.mapping===hd?j.image.height:null,Q=S[L.type];L.precision!==null&&(v=s.getMaxPrecision(L.precision),v!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",v,"instead."));const V=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,te=V!==void 0?V.length:0;let de=0;me.morphAttributes.position!==void 0&&(de=1),me.morphAttributes.normal!==void 0&&(de=2),me.morphAttributes.color!==void 0&&(de=3);let vt,re,xe,Me;if(Q){const Ct=xr[Q];vt=Ct.vertexShader,re=Ct.fragmentShader}else vt=L.vertexShader,re=L.fragmentShader,f.update(L),xe=f.getVertexShaderID(L),Me=f.getFragmentShaderID(L);const Te=t.getRenderTarget(),Xe=t.state.buffers.depth.getReversed(),Ze=$.isInstancedMesh===!0,ut=$.isBatchedMesh===!0,Ut=!!L.map,ft=!!L.matcap,qt=!!j,k=!!L.aoMap,Sn=!!L.lightMap,xt=!!L.bumpMap,et=!!L.normalMap,Ve=!!L.displacementMap,Bt=!!L.emissiveMap,He=!!L.metalnessMap,D=!!L.roughnessMap,A=L.anisotropy>0,Z=L.clearcoat>0,pe=L.dispersion>0,ge=L.iridescence>0,ue=L.sheen>0,ze=L.transmission>0,we=A&&!!L.anisotropyMap,De=Z&&!!L.clearcoatMap,mt=Z&&!!L.clearcoatNormalMap,Ee=Z&&!!L.clearcoatRoughnessMap,Ie=ge&&!!L.iridescenceMap,Ye=ge&&!!L.iridescenceThicknessMap,Ke=ue&&!!L.sheenColorMap,Ue=ue&&!!L.sheenRoughnessMap,dt=!!L.specularMap,tt=!!L.specularColorMap,Nt=!!L.specularIntensityMap,G=ze&&!!L.transmissionMap,Ce=ze&&!!L.thicknessMap,se=!!L.gradientMap,he=!!L.alphaMap,Le=L.alphaTest>0,be=!!L.alphaHash,it=!!L.extensions;let jt=Os;L.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(jt=t.toneMapping);const hn={shaderID:Q,shaderType:L.type,shaderName:L.name,vertexShader:vt,fragmentShader:re,defines:L.defines,customVertexShaderID:xe,customFragmentShaderID:Me,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:v,batching:ut,batchingColor:ut&&$._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&$.instanceColor!==null,instancingMorph:Ze&&$.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Te===null?t.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:$a,alphaToCoverage:!!L.alphaToCoverage,map:Ut,matcap:ft,envMap:qt,envMapMode:qt&&j.mapping,envMapCubeUVHeight:U,aoMap:k,lightMap:Sn,bumpMap:xt,normalMap:et,displacementMap:g&&Ve,emissiveMap:Bt,normalMapObjectSpace:et&&L.normalMapType===BL,normalMapTangentSpace:et&&L.normalMapType===OL,metalnessMap:He,roughnessMap:D,anisotropy:A,anisotropyMap:we,clearcoat:Z,clearcoatMap:De,clearcoatNormalMap:mt,clearcoatRoughnessMap:Ee,dispersion:pe,iridescence:ge,iridescenceMap:Ie,iridescenceThicknessMap:Ye,sheen:ue,sheenColorMap:Ke,sheenRoughnessMap:Ue,specularMap:dt,specularColorMap:tt,specularIntensityMap:Nt,transmission:ze,transmissionMap:G,thicknessMap:Ce,gradientMap:se,opaque:L.transparent===!1&&L.blending===Ua&&L.alphaToCoverage===!1,alphaMap:he,alphaTest:Le,alphaHash:be,combine:L.combine,mapUv:Ut&&T(L.map.channel),aoMapUv:k&&T(L.aoMap.channel),lightMapUv:Sn&&T(L.lightMap.channel),bumpMapUv:xt&&T(L.bumpMap.channel),normalMapUv:et&&T(L.normalMap.channel),displacementMapUv:Ve&&T(L.displacementMap.channel),emissiveMapUv:Bt&&T(L.emissiveMap.channel),metalnessMapUv:He&&T(L.metalnessMap.channel),roughnessMapUv:D&&T(L.roughnessMap.channel),anisotropyMapUv:we&&T(L.anisotropyMap.channel),clearcoatMapUv:De&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:mt&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&T(L.sheenRoughnessMap.channel),specularMapUv:dt&&T(L.specularMap.channel),specularColorMapUv:tt&&T(L.specularColorMap.channel),specularIntensityMapUv:Nt&&T(L.specularIntensityMap.channel),transmissionMapUv:G&&T(L.transmissionMap.channel),thicknessMapUv:Ce&&T(L.thicknessMap.channel),alphaMapUv:he&&T(L.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(et||A),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!me.attributes.uv&&(Ut||he),fog:!!fe,useFog:L.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Xe,skinning:$.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:de,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:L.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:jt,decodeVideoTexture:Ut&&L.map.isVideoTexture===!0&&Rt.getTransfer(L.map.colorSpace)===Ft,decodeVideoTextureEmissive:Bt&&L.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(L.emissiveMap.colorSpace)===Ft,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Vr,flipSided:L.side===fi,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:it&&L.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&L.extensions.multiDraw===!0||ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return hn.vertexUv1s=d.has(1),hn.vertexUv2s=d.has(2),hn.vertexUv3s=d.has(3),d.clear(),hn}function h(L){const C=[];if(L.shaderID?C.push(L.shaderID):(C.push(L.customVertexShaderID),C.push(L.customFragmentShaderID)),L.defines!==void 0)for(const H in L.defines)C.push(H),C.push(L.defines[H]);return L.isRawShaderMaterial===!1&&(E(C,L),M(C,L),C.push(t.outputColorSpace)),C.push(L.customProgramCacheKey),C.join()}function E(L,C){L.push(C.precision),L.push(C.outputColorSpace),L.push(C.envMapMode),L.push(C.envMapCubeUVHeight),L.push(C.mapUv),L.push(C.alphaMapUv),L.push(C.lightMapUv),L.push(C.aoMapUv),L.push(C.bumpMapUv),L.push(C.normalMapUv),L.push(C.displacementMapUv),L.push(C.emissiveMapUv),L.push(C.metalnessMapUv),L.push(C.roughnessMapUv),L.push(C.anisotropyMapUv),L.push(C.clearcoatMapUv),L.push(C.clearcoatNormalMapUv),L.push(C.clearcoatRoughnessMapUv),L.push(C.iridescenceMapUv),L.push(C.iridescenceThicknessMapUv),L.push(C.sheenColorMapUv),L.push(C.sheenRoughnessMapUv),L.push(C.specularMapUv),L.push(C.specularColorMapUv),L.push(C.specularIntensityMapUv),L.push(C.transmissionMapUv),L.push(C.thicknessMapUv),L.push(C.combine),L.push(C.fogExp2),L.push(C.sizeAttenuation),L.push(C.morphTargetsCount),L.push(C.morphAttributeCount),L.push(C.numDirLights),L.push(C.numPointLights),L.push(C.numSpotLights),L.push(C.numSpotLightMaps),L.push(C.numHemiLights),L.push(C.numRectAreaLights),L.push(C.numDirLightShadows),L.push(C.numPointLightShadows),L.push(C.numSpotLightShadows),L.push(C.numSpotLightShadowsWithMaps),L.push(C.numLightProbes),L.push(C.shadowMapType),L.push(C.toneMapping),L.push(C.numClippingPlanes),L.push(C.numClipIntersection),L.push(C.depthPacking)}function M(L,C){u.disableAll(),C.supportsVertexTextures&&u.enable(0),C.instancing&&u.enable(1),C.instancingColor&&u.enable(2),C.instancingMorph&&u.enable(3),C.matcap&&u.enable(4),C.envMap&&u.enable(5),C.normalMapObjectSpace&&u.enable(6),C.normalMapTangentSpace&&u.enable(7),C.clearcoat&&u.enable(8),C.iridescence&&u.enable(9),C.alphaTest&&u.enable(10),C.vertexColors&&u.enable(11),C.vertexAlphas&&u.enable(12),C.vertexUv1s&&u.enable(13),C.vertexUv2s&&u.enable(14),C.vertexUv3s&&u.enable(15),C.vertexTangents&&u.enable(16),C.anisotropy&&u.enable(17),C.alphaHash&&u.enable(18),C.batching&&u.enable(19),C.dispersion&&u.enable(20),C.batchingColor&&u.enable(21),L.push(u.mask),u.disableAll(),C.fog&&u.enable(0),C.useFog&&u.enable(1),C.flatShading&&u.enable(2),C.logarithmicDepthBuffer&&u.enable(3),C.reverseDepthBuffer&&u.enable(4),C.skinning&&u.enable(5),C.morphTargets&&u.enable(6),C.morphNormals&&u.enable(7),C.morphColors&&u.enable(8),C.premultipliedAlpha&&u.enable(9),C.shadowMapEnabled&&u.enable(10),C.doubleSided&&u.enable(11),C.flipSided&&u.enable(12),C.useDepthPacking&&u.enable(13),C.dithering&&u.enable(14),C.transmission&&u.enable(15),C.sheen&&u.enable(16),C.opaque&&u.enable(17),C.pointsUvs&&u.enable(18),C.decodeVideoTexture&&u.enable(19),C.decodeVideoTextureEmissive&&u.enable(20),C.alphaToCoverage&&u.enable(21),L.push(u.mask)}function w(L){const C=S[L.type];let H;if(C){const ae=xr[C];H=bD.clone(ae.uniforms)}else H=L.uniforms;return H}function O(L,C){let H;for(let ae=0,$=m.length;ae<$;ae++){const fe=m[ae];if(fe.cacheKey===C){H=fe,++H.usedTimes;break}}return H===void 0&&(H=new ZN(t,C,L,o),m.push(H)),H}function N(L){if(--L.usedTimes===0){const C=m.indexOf(L);m[C]=m[m.length-1],m.pop(),L.destroy()}}function I(L){f.remove(L)}function B(){f.dispose()}return{getParameters:x,getProgramCacheKey:h,getUniforms:w,acquireProgram:O,releaseProgram:N,releaseShaderCache:I,programs:m,dispose:B}}function nF(){let t=new WeakMap;function e(l){return t.has(l)}function n(l){let u=t.get(l);return u===void 0&&(u={},t.set(l,u)),u}function i(l){t.delete(l)}function s(l,u,f){t.get(l)[u]=f}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:o}}function iF(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ny(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Fy(){const t=[];let e=0;const n=[],i=[],s=[];function o(){e=0,n.length=0,i.length=0,s.length=0}function l(_,g,v,S,T,x){let h=t[e];return h===void 0?(h={id:_.id,object:_,geometry:g,material:v,groupOrder:S,renderOrder:_.renderOrder,z:T,group:x},t[e]=h):(h.id=_.id,h.object=_,h.geometry=g,h.material=v,h.groupOrder=S,h.renderOrder=_.renderOrder,h.z=T,h.group=x),e++,h}function u(_,g,v,S,T,x){const h=l(_,g,v,S,T,x);v.transmission>0?i.push(h):v.transparent===!0?s.push(h):n.push(h)}function f(_,g,v,S,T,x){const h=l(_,g,v,S,T,x);v.transmission>0?i.unshift(h):v.transparent===!0?s.unshift(h):n.unshift(h)}function d(_,g){n.length>1&&n.sort(_||iF),i.length>1&&i.sort(g||Ny),s.length>1&&s.sort(g||Ny)}function m(){for(let _=e,g=t.length;_<g;_++){const v=t[_];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:o,push:u,unshift:f,finish:m,sort:d}}function rF(){let t=new WeakMap;function e(i,s){const o=t.get(i);let l;return o===void 0?(l=new Fy,t.set(i,[l])):s>=o.length?(l=new Fy,o.push(l)):l=o[s],l}function n(){t=new WeakMap}return{get:e,dispose:n}}function sF(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new Dt};break;case"SpotLight":n={position:new K,direction:new K,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":n={color:new Dt,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function oF(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let aF=0;function lF(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function uF(t){const e=new sF,n=oF(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new K);const s=new K,o=new cn,l=new cn;function u(d){let m=0,_=0,g=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let v=0,S=0,T=0,x=0,h=0,E=0,M=0,w=0,O=0,N=0,I=0;d.sort(lF);for(let L=0,C=d.length;L<C;L++){const H=d[L],ae=H.color,$=H.intensity,fe=H.distance,me=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=ae.r*$,_+=ae.g*$,g+=ae.b*$;else if(H.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(H.sh.coefficients[J],$);I++}else if(H.isDirectionalLight){const J=e.get(H);if(J.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const j=H.shadow,U=n.get(H);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.directionalShadow[v]=U,i.directionalShadowMap[v]=me,i.directionalShadowMatrix[v]=H.shadow.matrix,E++}i.directional[v]=J,v++}else if(H.isSpotLight){const J=e.get(H);J.position.setFromMatrixPosition(H.matrixWorld),J.color.copy(ae).multiplyScalar($),J.distance=fe,J.coneCos=Math.cos(H.angle),J.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),J.decay=H.decay,i.spot[T]=J;const j=H.shadow;if(H.map&&(i.spotLightMap[O]=H.map,O++,j.updateMatrices(H),H.castShadow&&N++),i.spotLightMatrix[T]=j.matrix,H.castShadow){const U=n.get(H);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.spotShadow[T]=U,i.spotShadowMap[T]=me,w++}T++}else if(H.isRectAreaLight){const J=e.get(H);J.color.copy(ae).multiplyScalar($),J.halfWidth.set(H.width*.5,0,0),J.halfHeight.set(0,H.height*.5,0),i.rectArea[x]=J,x++}else if(H.isPointLight){const J=e.get(H);if(J.color.copy(H.color).multiplyScalar(H.intensity),J.distance=H.distance,J.decay=H.decay,H.castShadow){const j=H.shadow,U=n.get(H);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,U.shadowCameraNear=j.camera.near,U.shadowCameraFar=j.camera.far,i.pointShadow[S]=U,i.pointShadowMap[S]=me,i.pointShadowMatrix[S]=H.shadow.matrix,M++}i.point[S]=J,S++}else if(H.isHemisphereLight){const J=e.get(H);J.skyColor.copy(H.color).multiplyScalar($),J.groundColor.copy(H.groundColor).multiplyScalar($),i.hemi[h]=J,h++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=_,i.ambient[2]=g;const B=i.hash;(B.directionalLength!==v||B.pointLength!==S||B.spotLength!==T||B.rectAreaLength!==x||B.hemiLength!==h||B.numDirectionalShadows!==E||B.numPointShadows!==M||B.numSpotShadows!==w||B.numSpotMaps!==O||B.numLightProbes!==I)&&(i.directional.length=v,i.spot.length=T,i.rectArea.length=x,i.point.length=S,i.hemi.length=h,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+O-N,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=I,B.directionalLength=v,B.pointLength=S,B.spotLength=T,B.rectAreaLength=x,B.hemiLength=h,B.numDirectionalShadows=E,B.numPointShadows=M,B.numSpotShadows=w,B.numSpotMaps=O,B.numLightProbes=I,i.version=aF++)}function f(d,m){let _=0,g=0,v=0,S=0,T=0;const x=m.matrixWorldInverse;for(let h=0,E=d.length;h<E;h++){const M=d[h];if(M.isDirectionalLight){const w=i.directional[_];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),_++}else if(M.isSpotLight){const w=i.spot[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),v++}else if(M.isRectAreaLight){const w=i.rectArea[S];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(x),l.identity(),o.copy(M.matrixWorld),o.premultiply(x),l.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(l),w.halfHeight.applyMatrix4(l),S++}else if(M.isPointLight){const w=i.point[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(x),g++}else if(M.isHemisphereLight){const w=i.hemi[T];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(x),T++}}}return{setup:u,setupView:f,state:i}}function Oy(t){const e=new uF(t),n=[],i=[];function s(m){d.camera=m,n.length=0,i.length=0}function o(m){n.push(m)}function l(m){i.push(m)}function u(){e.setup(n)}function f(m){e.setupView(n,m)}const d={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:u,setupLightsView:f,pushLight:o,pushShadow:l}}function cF(t){let e=new WeakMap;function n(s,o=0){const l=e.get(s);let u;return l===void 0?(u=new Oy(t),e.set(s,[u])):o>=l.length?(u=new Oy(t),l.push(u)):u=l[o],u}function i(){e=new WeakMap}return{get:n,dispose:i}}const fF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dF=`uniform sampler2D shadow_pass;
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
}`;function hF(t,e,n){let i=new wM;const s=new ht,o=new ht,l=new un,u=new zD({depthPacking:FL}),f=new kD,d={},m=n.maxTextureSize,_={[ks]:fi,[fi]:ks,[Vr]:Vr},g=new Hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:fF,fragmentShader:dF}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const S=new Tr;S.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new qr(S,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eM;let h=this.type;this.render=function(N,I,B){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;const L=t.getRenderTarget(),C=t.getActiveCubeFace(),H=t.getActiveMipmapLevel(),ae=t.state;ae.setBlending(Fs),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const $=h!==zr&&this.type===zr,fe=h===zr&&this.type!==zr;for(let me=0,J=N.length;me<J;me++){const j=N[me],U=j.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const Q=U.getFrameExtents();if(s.multiply(Q),o.copy(U.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(o.x=Math.floor(m/Q.x),s.x=o.x*Q.x,U.mapSize.x=o.x),s.y>m&&(o.y=Math.floor(m/Q.y),s.y=o.y*Q.y,U.mapSize.y=o.y)),U.map===null||$===!0||fe===!0){const te=this.type!==zr?{minFilter:dr,magFilter:dr}:{};U.map!==null&&U.map.dispose(),U.map=new Co(s.x,s.y,te),U.map.texture.name=j.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const V=U.getViewportCount();for(let te=0;te<V;te++){const de=U.getViewport(te);l.set(o.x*de.x,o.y*de.y,o.x*de.z,o.y*de.w),ae.viewport(l),U.updateMatrices(j,te),i=U.getFrustum(),w(I,B,U.camera,j,this.type)}U.isPointLightShadow!==!0&&this.type===zr&&E(U,B),U.needsUpdate=!1}h=this.type,x.needsUpdate=!1,t.setRenderTarget(L,C,H)};function E(N,I){const B=e.update(T);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,v.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Co(s.x,s.y)),g.uniforms.shadow_pass.value=N.map.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,t.setRenderTarget(N.mapPass),t.clear(),t.renderBufferDirect(I,null,B,g,T,null),v.uniforms.shadow_pass.value=N.mapPass.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,t.setRenderTarget(N.map),t.clear(),t.renderBufferDirect(I,null,B,v,T,null)}function M(N,I,B,L){let C=null;const H=B.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)C=H;else if(C=B.isPointLight===!0?f:u,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ae=C.uuid,$=I.uuid;let fe=d[ae];fe===void 0&&(fe={},d[ae]=fe);let me=fe[$];me===void 0&&(me=C.clone(),fe[$]=me,I.addEventListener("dispose",O)),C=me}if(C.visible=I.visible,C.wireframe=I.wireframe,L===zr?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:_[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,B.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ae=t.properties.get(C);ae.light=B}return C}function w(N,I,B,L,C){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===zr)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,N.matrixWorld);const $=e.update(N),fe=N.material;if(Array.isArray(fe)){const me=$.groups;for(let J=0,j=me.length;J<j;J++){const U=me[J],Q=fe[U.materialIndex];if(Q&&Q.visible){const V=M(N,Q,L,C);N.onBeforeShadow(t,N,I,B,$,V,U),t.renderBufferDirect(B,null,$,V,N,U),N.onAfterShadow(t,N,I,B,$,V,U)}}}else if(fe.visible){const me=M(N,fe,L,C);N.onBeforeShadow(t,N,I,B,$,me,null),t.renderBufferDirect(B,null,$,me,N,null),N.onAfterShadow(t,N,I,B,$,me,null)}}const ae=N.children;for(let $=0,fe=ae.length;$<fe;$++)w(ae[$],I,B,L,C)}function O(N){N.target.removeEventListener("dispose",O);for(const B in d){const L=d[B],C=N.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}const pF={[Tm]:wm,[Am]:Pm,[Rm]:bm,[Wa]:Cm,[wm]:Tm,[Pm]:Am,[bm]:Rm,[Cm]:Wa};function mF(t,e){function n(){let G=!1;const Ce=new un;let se=null;const he=new un(0,0,0,0);return{setMask:function(Le){se!==Le&&!G&&(t.colorMask(Le,Le,Le,Le),se=Le)},setLocked:function(Le){G=Le},setClear:function(Le,be,it,jt,hn){hn===!0&&(Le*=jt,be*=jt,it*=jt),Ce.set(Le,be,it,jt),he.equals(Ce)===!1&&(t.clearColor(Le,be,it,jt),he.copy(Ce))},reset:function(){G=!1,se=null,he.set(-1,0,0,0)}}}function i(){let G=!1,Ce=!1,se=null,he=null,Le=null;return{setReversed:function(be){if(Ce!==be){const it=e.get("EXT_clip_control");Ce?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const jt=Le;Le=null,this.setClear(jt)}Ce=be},getReversed:function(){return Ce},setTest:function(be){be?Te(t.DEPTH_TEST):Xe(t.DEPTH_TEST)},setMask:function(be){se!==be&&!G&&(t.depthMask(be),se=be)},setFunc:function(be){if(Ce&&(be=pF[be]),he!==be){switch(be){case Tm:t.depthFunc(t.NEVER);break;case wm:t.depthFunc(t.ALWAYS);break;case Am:t.depthFunc(t.LESS);break;case Wa:t.depthFunc(t.LEQUAL);break;case Rm:t.depthFunc(t.EQUAL);break;case Cm:t.depthFunc(t.GEQUAL);break;case Pm:t.depthFunc(t.GREATER);break;case bm:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=be}},setLocked:function(be){G=be},setClear:function(be){Le!==be&&(Ce&&(be=1-be),t.clearDepth(be),Le=be)},reset:function(){G=!1,se=null,he=null,Le=null,Ce=!1}}}function s(){let G=!1,Ce=null,se=null,he=null,Le=null,be=null,it=null,jt=null,hn=null;return{setTest:function(Ct){G||(Ct?Te(t.STENCIL_TEST):Xe(t.STENCIL_TEST))},setMask:function(Ct){Ce!==Ct&&!G&&(t.stencilMask(Ct),Ce=Ct)},setFunc:function(Ct,pi,qi){(se!==Ct||he!==pi||Le!==qi)&&(t.stencilFunc(Ct,pi,qi),se=Ct,he=pi,Le=qi)},setOp:function(Ct,pi,qi){(be!==Ct||it!==pi||jt!==qi)&&(t.stencilOp(Ct,pi,qi),be=Ct,it=pi,jt=qi)},setLocked:function(Ct){G=Ct},setClear:function(Ct){hn!==Ct&&(t.clearStencil(Ct),hn=Ct)},reset:function(){G=!1,Ce=null,se=null,he=null,Le=null,be=null,it=null,jt=null,hn=null}}}const o=new n,l=new i,u=new s,f=new WeakMap,d=new WeakMap;let m={},_={},g=new WeakMap,v=[],S=null,T=!1,x=null,h=null,E=null,M=null,w=null,O=null,N=null,I=new Dt(0,0,0),B=0,L=!1,C=null,H=null,ae=null,$=null,fe=null;const me=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,j=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(U)[1]),J=j>=1):U.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),J=j>=2);let Q=null,V={};const te=t.getParameter(t.SCISSOR_BOX),de=t.getParameter(t.VIEWPORT),vt=new un().fromArray(te),re=new un().fromArray(de);function xe(G,Ce,se,he){const Le=new Uint8Array(4),be=t.createTexture();t.bindTexture(G,be),t.texParameteri(G,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(G,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let it=0;it<se;it++)G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY?t.texImage3D(Ce,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,Le):t.texImage2D(Ce+it,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Le);return be}const Me={};Me[t.TEXTURE_2D]=xe(t.TEXTURE_2D,t.TEXTURE_2D,1),Me[t.TEXTURE_CUBE_MAP]=xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[t.TEXTURE_2D_ARRAY]=xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Me[t.TEXTURE_3D]=xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Te(t.DEPTH_TEST),l.setFunc(Wa),xt(!1),et(Ox),Te(t.CULL_FACE),k(Fs);function Te(G){m[G]!==!0&&(t.enable(G),m[G]=!0)}function Xe(G){m[G]!==!1&&(t.disable(G),m[G]=!1)}function Ze(G,Ce){return _[G]!==Ce?(t.bindFramebuffer(G,Ce),_[G]=Ce,G===t.DRAW_FRAMEBUFFER&&(_[t.FRAMEBUFFER]=Ce),G===t.FRAMEBUFFER&&(_[t.DRAW_FRAMEBUFFER]=Ce),!0):!1}function ut(G,Ce){let se=v,he=!1;if(G){se=g.get(Ce),se===void 0&&(se=[],g.set(Ce,se));const Le=G.textures;if(se.length!==Le.length||se[0]!==t.COLOR_ATTACHMENT0){for(let be=0,it=Le.length;be<it;be++)se[be]=t.COLOR_ATTACHMENT0+be;se.length=Le.length,he=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,he=!0);he&&t.drawBuffers(se)}function Ut(G){return S!==G?(t.useProgram(G),S=G,!0):!1}const ft={[ho]:t.FUNC_ADD,[lL]:t.FUNC_SUBTRACT,[uL]:t.FUNC_REVERSE_SUBTRACT};ft[cL]=t.MIN,ft[fL]=t.MAX;const qt={[dL]:t.ZERO,[hL]:t.ONE,[pL]:t.SRC_COLOR,[Em]:t.SRC_ALPHA,[yL]:t.SRC_ALPHA_SATURATE,[vL]:t.DST_COLOR,[gL]:t.DST_ALPHA,[mL]:t.ONE_MINUS_SRC_COLOR,[Mm]:t.ONE_MINUS_SRC_ALPHA,[xL]:t.ONE_MINUS_DST_COLOR,[_L]:t.ONE_MINUS_DST_ALPHA,[SL]:t.CONSTANT_COLOR,[EL]:t.ONE_MINUS_CONSTANT_COLOR,[ML]:t.CONSTANT_ALPHA,[TL]:t.ONE_MINUS_CONSTANT_ALPHA};function k(G,Ce,se,he,Le,be,it,jt,hn,Ct){if(G===Fs){T===!0&&(Xe(t.BLEND),T=!1);return}if(T===!1&&(Te(t.BLEND),T=!0),G!==aL){if(G!==x||Ct!==L){if((h!==ho||w!==ho)&&(t.blendEquation(t.FUNC_ADD),h=ho,w=ho),Ct)switch(G){case Ua:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bx:t.blendFunc(t.ONE,t.ONE);break;case zx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case kx:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ua:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bx:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case zx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case kx:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}E=null,M=null,O=null,N=null,I.set(0,0,0),B=0,x=G,L=Ct}return}Le=Le||Ce,be=be||se,it=it||he,(Ce!==h||Le!==w)&&(t.blendEquationSeparate(ft[Ce],ft[Le]),h=Ce,w=Le),(se!==E||he!==M||be!==O||it!==N)&&(t.blendFuncSeparate(qt[se],qt[he],qt[be],qt[it]),E=se,M=he,O=be,N=it),(jt.equals(I)===!1||hn!==B)&&(t.blendColor(jt.r,jt.g,jt.b,hn),I.copy(jt),B=hn),x=G,L=!1}function Sn(G,Ce){G.side===Vr?Xe(t.CULL_FACE):Te(t.CULL_FACE);let se=G.side===fi;Ce&&(se=!se),xt(se),G.blending===Ua&&G.transparent===!1?k(Fs):k(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),o.setMask(G.colorWrite);const he=G.stencilWrite;u.setTest(he),he&&(u.setMask(G.stencilWriteMask),u.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),u.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Bt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Te(t.SAMPLE_ALPHA_TO_COVERAGE):Xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function xt(G){C!==G&&(G?t.frontFace(t.CW):t.frontFace(t.CCW),C=G)}function et(G){G!==rL?(Te(t.CULL_FACE),G!==H&&(G===Ox?t.cullFace(t.BACK):G===sL?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Xe(t.CULL_FACE),H=G}function Ve(G){G!==ae&&(J&&t.lineWidth(G),ae=G)}function Bt(G,Ce,se){G?(Te(t.POLYGON_OFFSET_FILL),($!==Ce||fe!==se)&&(t.polygonOffset(Ce,se),$=Ce,fe=se)):Xe(t.POLYGON_OFFSET_FILL)}function He(G){G?Te(t.SCISSOR_TEST):Xe(t.SCISSOR_TEST)}function D(G){G===void 0&&(G=t.TEXTURE0+me-1),Q!==G&&(t.activeTexture(G),Q=G)}function A(G,Ce,se){se===void 0&&(Q===null?se=t.TEXTURE0+me-1:se=Q);let he=V[se];he===void 0&&(he={type:void 0,texture:void 0},V[se]=he),(he.type!==G||he.texture!==Ce)&&(Q!==se&&(t.activeTexture(se),Q=se),t.bindTexture(G,Ce||Me[G]),he.type=G,he.texture=Ce)}function Z(){const G=V[Q];G!==void 0&&G.type!==void 0&&(t.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{t.compressedTexImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{t.texSubImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(){try{t.texSubImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function mt(){try{t.texStorage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{t.texStorage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{t.texImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ye(){try{t.texImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(G){vt.equals(G)===!1&&(t.scissor(G.x,G.y,G.z,G.w),vt.copy(G))}function Ue(G){re.equals(G)===!1&&(t.viewport(G.x,G.y,G.z,G.w),re.copy(G))}function dt(G,Ce){let se=d.get(Ce);se===void 0&&(se=new WeakMap,d.set(Ce,se));let he=se.get(G);he===void 0&&(he=t.getUniformBlockIndex(Ce,G.name),se.set(G,he))}function tt(G,Ce){const he=d.get(Ce).get(G);f.get(Ce)!==he&&(t.uniformBlockBinding(Ce,he,G.__bindingPointIndex),f.set(Ce,he))}function Nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),l.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),m={},Q=null,V={},_={},g=new WeakMap,v=[],S=null,T=!1,x=null,h=null,E=null,M=null,w=null,O=null,N=null,I=new Dt(0,0,0),B=0,L=!1,C=null,H=null,ae=null,$=null,fe=null,vt.set(0,0,t.canvas.width,t.canvas.height),re.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Te,disable:Xe,bindFramebuffer:Ze,drawBuffers:ut,useProgram:Ut,setBlending:k,setMaterial:Sn,setFlipSided:xt,setCullFace:et,setLineWidth:Ve,setPolygonOffset:Bt,setScissorTest:He,activeTexture:D,bindTexture:A,unbindTexture:Z,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Ie,texImage3D:Ye,updateUBOMapping:dt,uniformBlockBinding:tt,texStorage2D:mt,texStorage3D:Ee,texSubImage2D:ue,texSubImage3D:ze,compressedTexSubImage2D:we,compressedTexSubImage3D:De,scissor:Ke,viewport:Ue,reset:Nt}}function gF(t,e,n,i,s,o,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ht,m=new WeakMap;let _;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(D,A){return v?new OffscreenCanvas(D,A):qf("canvas")}function T(D,A,Z){let pe=1;const ge=He(D);if((ge.width>Z||ge.height>Z)&&(pe=Z/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ue=Math.floor(pe*ge.width),ze=Math.floor(pe*ge.height);_===void 0&&(_=S(ue,ze));const we=A?S(ue,ze):_;return we.width=ue,we.height=ze,we.getContext("2d").drawImage(D,0,0,ue,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+ze+")."),we}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),D;return D}function x(D){return D.generateMipmaps}function h(D){t.generateMipmap(D)}function E(D){return D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?t.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(D,A,Z,pe,ge=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ue=A;if(A===t.RED&&(Z===t.FLOAT&&(ue=t.R32F),Z===t.HALF_FLOAT&&(ue=t.R16F),Z===t.UNSIGNED_BYTE&&(ue=t.R8)),A===t.RED_INTEGER&&(Z===t.UNSIGNED_BYTE&&(ue=t.R8UI),Z===t.UNSIGNED_SHORT&&(ue=t.R16UI),Z===t.UNSIGNED_INT&&(ue=t.R32UI),Z===t.BYTE&&(ue=t.R8I),Z===t.SHORT&&(ue=t.R16I),Z===t.INT&&(ue=t.R32I)),A===t.RG&&(Z===t.FLOAT&&(ue=t.RG32F),Z===t.HALF_FLOAT&&(ue=t.RG16F),Z===t.UNSIGNED_BYTE&&(ue=t.RG8)),A===t.RG_INTEGER&&(Z===t.UNSIGNED_BYTE&&(ue=t.RG8UI),Z===t.UNSIGNED_SHORT&&(ue=t.RG16UI),Z===t.UNSIGNED_INT&&(ue=t.RG32UI),Z===t.BYTE&&(ue=t.RG8I),Z===t.SHORT&&(ue=t.RG16I),Z===t.INT&&(ue=t.RG32I)),A===t.RGB_INTEGER&&(Z===t.UNSIGNED_BYTE&&(ue=t.RGB8UI),Z===t.UNSIGNED_SHORT&&(ue=t.RGB16UI),Z===t.UNSIGNED_INT&&(ue=t.RGB32UI),Z===t.BYTE&&(ue=t.RGB8I),Z===t.SHORT&&(ue=t.RGB16I),Z===t.INT&&(ue=t.RGB32I)),A===t.RGBA_INTEGER&&(Z===t.UNSIGNED_BYTE&&(ue=t.RGBA8UI),Z===t.UNSIGNED_SHORT&&(ue=t.RGBA16UI),Z===t.UNSIGNED_INT&&(ue=t.RGBA32UI),Z===t.BYTE&&(ue=t.RGBA8I),Z===t.SHORT&&(ue=t.RGBA16I),Z===t.INT&&(ue=t.RGBA32I)),A===t.RGB&&Z===t.UNSIGNED_INT_5_9_9_9_REV&&(ue=t.RGB9_E5),A===t.RGBA){const ze=ge?Xf:Rt.getTransfer(pe);Z===t.FLOAT&&(ue=t.RGBA32F),Z===t.HALF_FLOAT&&(ue=t.RGBA16F),Z===t.UNSIGNED_BYTE&&(ue=ze===Ft?t.SRGB8_ALPHA8:t.RGBA8),Z===t.UNSIGNED_SHORT_4_4_4_4&&(ue=t.RGBA4),Z===t.UNSIGNED_SHORT_5_5_5_1&&(ue=t.RGB5_A1)}return(ue===t.R16F||ue===t.R32F||ue===t.RG16F||ue===t.RG32F||ue===t.RGBA16F||ue===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function w(D,A){let Z;return D?A===null||A===Ro||A===qa?Z=t.DEPTH24_STENCIL8:A===Xr?Z=t.DEPTH32F_STENCIL8:A===fu&&(Z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ro||A===qa?Z=t.DEPTH_COMPONENT24:A===Xr?Z=t.DEPTH_COMPONENT32F:A===fu&&(Z=t.DEPTH_COMPONENT16),Z}function O(D,A){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==dr&&D.minFilter!==Sr?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function N(D){const A=D.target;A.removeEventListener("dispose",N),B(A),A.isVideoTexture&&m.delete(A)}function I(D){const A=D.target;A.removeEventListener("dispose",I),C(A)}function B(D){const A=i.get(D);if(A.__webglInit===void 0)return;const Z=D.source,pe=g.get(Z);if(pe){const ge=pe[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&L(D),Object.keys(pe).length===0&&g.delete(Z)}i.remove(D)}function L(D){const A=i.get(D);t.deleteTexture(A.__webglTexture);const Z=D.source,pe=g.get(Z);delete pe[A.__cacheKey],l.memory.textures--}function C(D){const A=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(A.__webglFramebuffer[pe]))for(let ge=0;ge<A.__webglFramebuffer[pe].length;ge++)t.deleteFramebuffer(A.__webglFramebuffer[pe][ge]);else t.deleteFramebuffer(A.__webglFramebuffer[pe]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[pe])}else{if(Array.isArray(A.__webglFramebuffer))for(let pe=0;pe<A.__webglFramebuffer.length;pe++)t.deleteFramebuffer(A.__webglFramebuffer[pe]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pe=0;pe<A.__webglColorRenderbuffer.length;pe++)A.__webglColorRenderbuffer[pe]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[pe]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=D.textures;for(let pe=0,ge=Z.length;pe<ge;pe++){const ue=i.get(Z[pe]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),l.memory.textures--),i.remove(Z[pe])}i.remove(D)}let H=0;function ae(){H=0}function $(){const D=H;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),H+=1,D}function fe(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function me(D,A){const Z=i.get(D);if(D.isVideoTexture&&Ve(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){const pe=D.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(Z,D,A);return}}n.bindTexture(t.TEXTURE_2D,Z.__webglTexture,t.TEXTURE0+A)}function J(D,A){const Z=i.get(D);if(D.version>0&&Z.__version!==D.version){re(Z,D,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Z.__webglTexture,t.TEXTURE0+A)}function j(D,A){const Z=i.get(D);if(D.version>0&&Z.__version!==D.version){re(Z,D,A);return}n.bindTexture(t.TEXTURE_3D,Z.__webglTexture,t.TEXTURE0+A)}function U(D,A){const Z=i.get(D);if(D.version>0&&Z.__version!==D.version){xe(Z,D,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture,t.TEXTURE0+A)}const Q={[Im]:t.REPEAT,[vo]:t.CLAMP_TO_EDGE,[Um]:t.MIRRORED_REPEAT},V={[dr]:t.NEAREST,[UL]:t.NEAREST_MIPMAP_NEAREST,[Lc]:t.NEAREST_MIPMAP_LINEAR,[Sr]:t.LINEAR,[Jh]:t.LINEAR_MIPMAP_NEAREST,[xo]:t.LINEAR_MIPMAP_LINEAR},te={[zL]:t.NEVER,[XL]:t.ALWAYS,[kL]:t.LESS,[hM]:t.LEQUAL,[HL]:t.EQUAL,[WL]:t.GEQUAL,[VL]:t.GREATER,[GL]:t.NOTEQUAL};function de(D,A){if(A.type===Xr&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Sr||A.magFilter===Jh||A.magFilter===Lc||A.magFilter===xo||A.minFilter===Sr||A.minFilter===Jh||A.minFilter===Lc||A.minFilter===xo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,Q[A.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,Q[A.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,Q[A.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,V[A.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,V[A.minFilter]),A.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,te[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===dr||A.minFilter!==Lc&&A.minFilter!==xo||A.type===Xr&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function vt(D,A){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",N));const pe=A.source;let ge=g.get(pe);ge===void 0&&(ge={},g.set(pe,ge));const ue=fe(A);if(ue!==D.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:t.createTexture(),usedTimes:0},l.memory.textures++,Z=!0),ge[ue].usedTimes++;const ze=ge[D.__cacheKey];ze!==void 0&&(ge[D.__cacheKey].usedTimes--,ze.usedTimes===0&&L(A)),D.__cacheKey=ue,D.__webglTexture=ge[ue].texture}return Z}function re(D,A,Z){let pe=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pe=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pe=t.TEXTURE_3D);const ge=vt(D,A),ue=A.source;n.bindTexture(pe,D.__webglTexture,t.TEXTURE0+Z);const ze=i.get(ue);if(ue.version!==ze.__version||ge===!0){n.activeTexture(t.TEXTURE0+Z);const we=Rt.getPrimaries(Rt.workingColorSpace),De=A.colorSpace===ws?null:Rt.getPrimaries(A.colorSpace),mt=A.colorSpace===ws||we===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Ee=T(A.image,!1,s.maxTextureSize);Ee=Bt(A,Ee);const Ie=o.convert(A.format,A.colorSpace),Ye=o.convert(A.type);let Ke=M(A.internalFormat,Ie,Ye,A.colorSpace,A.isVideoTexture);de(pe,A);let Ue;const dt=A.mipmaps,tt=A.isVideoTexture!==!0,Nt=ze.__version===void 0||ge===!0,G=ue.dataReady,Ce=O(A,Ee);if(A.isDepthTexture)Ke=w(A.format===ja,A.type),Nt&&(tt?n.texStorage2D(t.TEXTURE_2D,1,Ke,Ee.width,Ee.height):n.texImage2D(t.TEXTURE_2D,0,Ke,Ee.width,Ee.height,0,Ie,Ye,null));else if(A.isDataTexture)if(dt.length>0){tt&&Nt&&n.texStorage2D(t.TEXTURE_2D,Ce,Ke,dt[0].width,dt[0].height);for(let se=0,he=dt.length;se<he;se++)Ue=dt[se],tt?G&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Ue.width,Ue.height,Ie,Ye,Ue.data):n.texImage2D(t.TEXTURE_2D,se,Ke,Ue.width,Ue.height,0,Ie,Ye,Ue.data);A.generateMipmaps=!1}else tt?(Nt&&n.texStorage2D(t.TEXTURE_2D,Ce,Ke,Ee.width,Ee.height),G&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ie,Ye,Ee.data)):n.texImage2D(t.TEXTURE_2D,0,Ke,Ee.width,Ee.height,0,Ie,Ye,Ee.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){tt&&Nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ce,Ke,dt[0].width,dt[0].height,Ee.depth);for(let se=0,he=dt.length;se<he;se++)if(Ue=dt[se],A.format!==ur)if(Ie!==null)if(tt){if(G)if(A.layerUpdates.size>0){const Le=hy(Ue.width,Ue.height,A.format,A.type);for(const be of A.layerUpdates){const it=Ue.data.subarray(be*Le/Ue.data.BYTES_PER_ELEMENT,(be+1)*Le/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,be,Ue.width,Ue.height,1,Ie,it)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Ue.width,Ue.height,Ee.depth,Ie,Ue.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Ke,Ue.width,Ue.height,Ee.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?G&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Ue.width,Ue.height,Ee.depth,Ie,Ye,Ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Ke,Ue.width,Ue.height,Ee.depth,0,Ie,Ye,Ue.data)}else{tt&&Nt&&n.texStorage2D(t.TEXTURE_2D,Ce,Ke,dt[0].width,dt[0].height);for(let se=0,he=dt.length;se<he;se++)Ue=dt[se],A.format!==ur?Ie!==null?tt?G&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,Ue.width,Ue.height,Ie,Ue.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Ke,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?G&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Ue.width,Ue.height,Ie,Ye,Ue.data):n.texImage2D(t.TEXTURE_2D,se,Ke,Ue.width,Ue.height,0,Ie,Ye,Ue.data)}else if(A.isDataArrayTexture)if(tt){if(Nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ce,Ke,Ee.width,Ee.height,Ee.depth),G)if(A.layerUpdates.size>0){const se=hy(Ee.width,Ee.height,A.format,A.type);for(const he of A.layerUpdates){const Le=Ee.data.subarray(he*se/Ee.data.BYTES_PER_ELEMENT,(he+1)*se/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,Ee.width,Ee.height,1,Ie,Ye,Le)}A.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ie,Ye,Ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ke,Ee.width,Ee.height,Ee.depth,0,Ie,Ye,Ee.data);else if(A.isData3DTexture)tt?(Nt&&n.texStorage3D(t.TEXTURE_3D,Ce,Ke,Ee.width,Ee.height,Ee.depth),G&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ie,Ye,Ee.data)):n.texImage3D(t.TEXTURE_3D,0,Ke,Ee.width,Ee.height,Ee.depth,0,Ie,Ye,Ee.data);else if(A.isFramebufferTexture){if(Nt)if(tt)n.texStorage2D(t.TEXTURE_2D,Ce,Ke,Ee.width,Ee.height);else{let se=Ee.width,he=Ee.height;for(let Le=0;Le<Ce;Le++)n.texImage2D(t.TEXTURE_2D,Le,Ke,se,he,0,Ie,Ye,null),se>>=1,he>>=1}}else if(dt.length>0){if(tt&&Nt){const se=He(dt[0]);n.texStorage2D(t.TEXTURE_2D,Ce,Ke,se.width,se.height)}for(let se=0,he=dt.length;se<he;se++)Ue=dt[se],tt?G&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Ie,Ye,Ue):n.texImage2D(t.TEXTURE_2D,se,Ke,Ie,Ye,Ue);A.generateMipmaps=!1}else if(tt){if(Nt){const se=He(Ee);n.texStorage2D(t.TEXTURE_2D,Ce,Ke,se.width,se.height)}G&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ie,Ye,Ee)}else n.texImage2D(t.TEXTURE_2D,0,Ke,Ie,Ye,Ee);x(A)&&h(pe),ze.__version=ue.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function xe(D,A,Z){if(A.image.length!==6)return;const pe=vt(D,A),ge=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+Z);const ue=i.get(ge);if(ge.version!==ue.__version||pe===!0){n.activeTexture(t.TEXTURE0+Z);const ze=Rt.getPrimaries(Rt.workingColorSpace),we=A.colorSpace===ws?null:Rt.getPrimaries(A.colorSpace),De=A.colorSpace===ws||ze===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const mt=A.isCompressedTexture||A.image[0].isCompressedTexture,Ee=A.image[0]&&A.image[0].isDataTexture,Ie=[];for(let he=0;he<6;he++)!mt&&!Ee?Ie[he]=T(A.image[he],!0,s.maxCubemapSize):Ie[he]=Ee?A.image[he].image:A.image[he],Ie[he]=Bt(A,Ie[he]);const Ye=Ie[0],Ke=o.convert(A.format,A.colorSpace),Ue=o.convert(A.type),dt=M(A.internalFormat,Ke,Ue,A.colorSpace),tt=A.isVideoTexture!==!0,Nt=ue.__version===void 0||pe===!0,G=ge.dataReady;let Ce=O(A,Ye);de(t.TEXTURE_CUBE_MAP,A);let se;if(mt){tt&&Nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,dt,Ye.width,Ye.height);for(let he=0;he<6;he++){se=Ie[he].mipmaps;for(let Le=0;Le<se.length;Le++){const be=se[Le];A.format!==ur?Ke!==null?tt?G&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,be.width,be.height,Ke,be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,dt,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,be.width,be.height,Ke,Ue,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,dt,be.width,be.height,0,Ke,Ue,be.data)}}}else{if(se=A.mipmaps,tt&&Nt){se.length>0&&Ce++;const he=He(Ie[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,dt,he.width,he.height)}for(let he=0;he<6;he++)if(Ee){tt?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ie[he].width,Ie[he].height,Ke,Ue,Ie[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,Ie[he].width,Ie[he].height,0,Ke,Ue,Ie[he].data);for(let Le=0;Le<se.length;Le++){const it=se[Le].image[he].image;tt?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,it.width,it.height,Ke,Ue,it.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,dt,it.width,it.height,0,Ke,Ue,it.data)}}else{tt?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ke,Ue,Ie[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,Ke,Ue,Ie[he]);for(let Le=0;Le<se.length;Le++){const be=se[Le];tt?G&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,Ke,Ue,be.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,dt,Ke,Ue,be.image[he])}}}x(A)&&h(t.TEXTURE_CUBE_MAP),ue.__version=ge.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Me(D,A,Z,pe,ge,ue){const ze=o.convert(Z.format,Z.colorSpace),we=o.convert(Z.type),De=M(Z.internalFormat,ze,we,Z.colorSpace),mt=i.get(A),Ee=i.get(Z);if(Ee.__renderTarget=A,!mt.__hasExternalTextures){const Ie=Math.max(1,A.width>>ue),Ye=Math.max(1,A.height>>ue);ge===t.TEXTURE_3D||ge===t.TEXTURE_2D_ARRAY?n.texImage3D(ge,ue,De,Ie,Ye,A.depth,0,ze,we,null):n.texImage2D(ge,ue,De,Ie,Ye,0,ze,we,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),et(A)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,pe,ge,Ee.__webglTexture,0,xt(A)):(ge===t.TEXTURE_2D||ge>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,pe,ge,Ee.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(D,A,Z){if(t.bindRenderbuffer(t.RENDERBUFFER,D),A.depthBuffer){const pe=A.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ue=w(A.stencilBuffer,ge),ze=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=xt(A);et(A)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,we,ue,A.width,A.height):Z?t.renderbufferStorageMultisample(t.RENDERBUFFER,we,ue,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,ue,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ze,t.RENDERBUFFER,D)}else{const pe=A.textures;for(let ge=0;ge<pe.length;ge++){const ue=pe[ge],ze=o.convert(ue.format,ue.colorSpace),we=o.convert(ue.type),De=M(ue.internalFormat,ze,we,ue.colorSpace),mt=xt(A);Z&&et(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt,De,A.width,A.height):et(A)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt,De,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,De,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Xe(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=i.get(A.depthTexture);pe.__renderTarget=A,(!pe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),me(A.depthTexture,0);const ge=pe.__webglTexture,ue=xt(A);if(A.depthTexture.format===Na)et(A)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ge,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ge,0);else if(A.depthTexture.format===ja)et(A)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ge,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ze(D){const A=i.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const pe=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pe){const ge=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),A.__depthDisposeCallback=ge}A.__boundDepthTexture=pe}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Xe(A.__webglFramebuffer,D)}else if(Z){A.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[pe]),A.__webglDepthbuffer[pe]===void 0)A.__webglDepthbuffer[pe]=t.createRenderbuffer(),Te(A.__webglDepthbuffer[pe],D,!1);else{const ge=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer[pe];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,ge,t.RENDERBUFFER,ue)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=t.createRenderbuffer(),Te(A.__webglDepthbuffer,D,!1);else{const pe=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=A.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ge),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,ge)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ut(D,A,Z){const pe=i.get(D);A!==void 0&&Me(pe.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Z!==void 0&&Ze(D)}function Ut(D){const A=D.texture,Z=i.get(D),pe=i.get(A);D.addEventListener("dispose",I);const ge=D.textures,ue=D.isWebGLCubeRenderTarget===!0,ze=ge.length>1;if(ze||(pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture()),pe.__version=A.version,l.memory.textures++),ue){Z.__webglFramebuffer=[];for(let we=0;we<6;we++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[we]=[];for(let De=0;De<A.mipmaps.length;De++)Z.__webglFramebuffer[we][De]=t.createFramebuffer()}else Z.__webglFramebuffer[we]=t.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let we=0;we<A.mipmaps.length;we++)Z.__webglFramebuffer[we]=t.createFramebuffer()}else Z.__webglFramebuffer=t.createFramebuffer();if(ze)for(let we=0,De=ge.length;we<De;we++){const mt=i.get(ge[we]);mt.__webglTexture===void 0&&(mt.__webglTexture=t.createTexture(),l.memory.textures++)}if(D.samples>0&&et(D)===!1){Z.__webglMultisampledFramebuffer=t.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const De=ge[we];Z.__webglColorRenderbuffer[we]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Z.__webglColorRenderbuffer[we]);const mt=o.convert(De.format,De.colorSpace),Ee=o.convert(De.type),Ie=M(De.internalFormat,mt,Ee,De.colorSpace,D.isXRRenderTarget===!0),Ye=xt(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,Ie,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,Z.__webglColorRenderbuffer[we])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=t.createRenderbuffer(),Te(Z.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,pe.__webglTexture),de(t.TEXTURE_CUBE_MAP,A);for(let we=0;we<6;we++)if(A.mipmaps&&A.mipmaps.length>0)for(let De=0;De<A.mipmaps.length;De++)Me(Z.__webglFramebuffer[we][De],D,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+we,De);else Me(Z.__webglFramebuffer[we],D,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);x(A)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ze){for(let we=0,De=ge.length;we<De;we++){const mt=ge[we],Ee=i.get(mt);n.bindTexture(t.TEXTURE_2D,Ee.__webglTexture),de(t.TEXTURE_2D,mt),Me(Z.__webglFramebuffer,D,mt,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,0),x(mt)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let we=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(we,pe.__webglTexture),de(we,A),A.mipmaps&&A.mipmaps.length>0)for(let De=0;De<A.mipmaps.length;De++)Me(Z.__webglFramebuffer[De],D,A,t.COLOR_ATTACHMENT0,we,De);else Me(Z.__webglFramebuffer,D,A,t.COLOR_ATTACHMENT0,we,0);x(A)&&h(we),n.unbindTexture()}D.depthBuffer&&Ze(D)}function ft(D){const A=D.textures;for(let Z=0,pe=A.length;Z<pe;Z++){const ge=A[Z];if(x(ge)){const ue=E(D),ze=i.get(ge).__webglTexture;n.bindTexture(ue,ze),h(ue),n.unbindTexture()}}}const qt=[],k=[];function Sn(D){if(D.samples>0){if(et(D)===!1){const A=D.textures,Z=D.width,pe=D.height;let ge=t.COLOR_BUFFER_BIT;const ue=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ze=i.get(D),we=A.length>1;if(we)for(let De=0;De<A.length;De++)n.bindFramebuffer(t.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ze.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let De=0;De<A.length;De++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ge|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ge|=t.STENCIL_BUFFER_BIT)),we){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ze.__webglColorRenderbuffer[De]);const mt=i.get(A[De]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,mt,0)}t.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,ge,t.NEAREST),f===!0&&(qt.length=0,k.length=0,qt.push(t.COLOR_ATTACHMENT0+De),D.depthBuffer&&D.resolveDepthBuffer===!1&&(qt.push(ue),k.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,k)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,qt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),we)for(let De=0;De<A.length;De++){n.bindFramebuffer(t.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,ze.__webglColorRenderbuffer[De]);const mt=i.get(A[De]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ze.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,mt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const A=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function xt(D){return Math.min(s.maxSamples,D.samples)}function et(D){const A=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ve(D){const A=l.render.frame;m.get(D)!==A&&(m.set(D,A),D.update())}function Bt(D,A){const Z=D.colorSpace,pe=D.format,ge=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==$a&&Z!==ws&&(Rt.getTransfer(Z)===Ft?(pe!==ur||ge!==ts)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function He(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=$,this.resetTextureUnits=ae,this.setTexture2D=me,this.setTexture2DArray=J,this.setTexture3D=j,this.setTextureCube=U,this.rebindTextures=ut,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=et}function _F(t,e){function n(i,s=ws){let o;const l=Rt.getTransfer(s);if(i===ts)return t.UNSIGNED_BYTE;if(i===s_)return t.UNSIGNED_SHORT_4_4_4_4;if(i===o_)return t.UNSIGNED_SHORT_5_5_5_1;if(i===sM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===iM)return t.BYTE;if(i===rM)return t.SHORT;if(i===fu)return t.UNSIGNED_SHORT;if(i===r_)return t.INT;if(i===Ro)return t.UNSIGNED_INT;if(i===Xr)return t.FLOAT;if(i===vu)return t.HALF_FLOAT;if(i===oM)return t.ALPHA;if(i===aM)return t.RGB;if(i===ur)return t.RGBA;if(i===lM)return t.LUMINANCE;if(i===uM)return t.LUMINANCE_ALPHA;if(i===Na)return t.DEPTH_COMPONENT;if(i===ja)return t.DEPTH_STENCIL;if(i===cM)return t.RED;if(i===a_)return t.RED_INTEGER;if(i===fM)return t.RG;if(i===l_)return t.RG_INTEGER;if(i===u_)return t.RGBA_INTEGER;if(i===mf||i===gf||i===_f||i===vf)if(l===Ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===mf)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gf)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_f)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vf)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===mf)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gf)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_f)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vf)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nm||i===Fm||i===Om||i===Bm)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Nm)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fm)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Om)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bm)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zm||i===km||i===Hm)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===zm||i===km)return l===Ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Hm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vm||i===Gm||i===Wm||i===Xm||i===Ym||i===qm||i===jm||i===$m||i===Km||i===Zm||i===Qm||i===Jm||i===eg||i===tg)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Vm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ym)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$m)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Km)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eg)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tg)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xf||i===ng||i===ig)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===xf)return l===Ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ng)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ig)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dM||i===rg||i===sg||i===og)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===xf)return o.COMPRESSED_RED_RGTC1_EXT;if(i===rg)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sg)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===og)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const vF={type:"move"};class Rp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,o=null,l=null;const u=this._targetRay,f=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const T of e.hand.values()){const x=n.getJointPose(T,i),h=this._getHandJoint(d,T);x!==null&&(h.matrix.fromArray(x.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=x.radius),h.visible=x!==null}const m=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],g=m.position.distanceTo(_.position),v=.02,S=.005;d.inputState.pinching&&g>v+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=v-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(vF)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Zc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const xF=`
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

}`;class SF{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const s=new di,o=e.properties.get(s);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Hs({vertexShader:xF,fragmentShader:yF,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qr(new md(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EF extends Do{constructor(e,n){super();const i=this;let s=null,o=1,l=null,u="local-floor",f=1,d=null,m=null,_=null,g=null,v=null,S=null;const T=new SF,x=n.getContextAttributes();let h=null,E=null;const M=[],w=[],O=new ht;let N=null;const I=new Hi;I.viewport=new un;const B=new Hi;B.viewport=new un;const L=[I,B],C=new VD;let H=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let xe=M[re];return xe===void 0&&(xe=new Rp,M[re]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(re){let xe=M[re];return xe===void 0&&(xe=new Rp,M[re]=xe),xe.getGripSpace()},this.getHand=function(re){let xe=M[re];return xe===void 0&&(xe=new Rp,M[re]=xe),xe.getHandSpace()};function $(re){const xe=w.indexOf(re.inputSource);if(xe===-1)return;const Me=M[xe];Me!==void 0&&(Me.update(re.inputSource,re.frame,d||l),Me.dispatchEvent({type:re.type,data:re.inputSource}))}function fe(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",fe),s.removeEventListener("inputsourceschange",me);for(let re=0;re<M.length;re++){const xe=w[re];xe!==null&&(w[re]=null,M[re].disconnect(xe))}H=null,ae=null,T.reset(),e.setRenderTarget(h),v=null,g=null,_=null,s=null,E=null,vt.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){o=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){u=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(re){d=re},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return _},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",fe),s.addEventListener("inputsourceschange",me),x.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0){const xe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(s,n,xe),s.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),E=new Co(v.framebufferWidth,v.framebufferHeight,{format:ur,type:ts,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let xe=null,Me=null,Te=null;x.depth&&(Te=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xe=x.stencil?ja:Na,Me=x.stencil?qa:Ro);const Xe={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:o};_=new XRWebGLBinding(s,n),g=_.createProjectionLayer(Xe),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),E=new Co(g.textureWidth,g.textureHeight,{format:ur,type:ts,depthTexture:new RM(g.textureWidth,g.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(f),d=null,l=await s.requestReferenceSpace(u),vt.setContext(s),vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function me(re){for(let xe=0;xe<re.removed.length;xe++){const Me=re.removed[xe],Te=w.indexOf(Me);Te>=0&&(w[Te]=null,M[Te].disconnect(Me))}for(let xe=0;xe<re.added.length;xe++){const Me=re.added[xe];let Te=w.indexOf(Me);if(Te===-1){for(let Ze=0;Ze<M.length;Ze++)if(Ze>=w.length){w.push(Me),Te=Ze;break}else if(w[Ze]===null){w[Ze]=Me,Te=Ze;break}if(Te===-1)break}const Xe=M[Te];Xe&&Xe.connect(Me)}}const J=new K,j=new K;function U(re,xe,Me){J.setFromMatrixPosition(xe.matrixWorld),j.setFromMatrixPosition(Me.matrixWorld);const Te=J.distanceTo(j),Xe=xe.projectionMatrix.elements,Ze=Me.projectionMatrix.elements,ut=Xe[14]/(Xe[10]-1),Ut=Xe[14]/(Xe[10]+1),ft=(Xe[9]+1)/Xe[5],qt=(Xe[9]-1)/Xe[5],k=(Xe[8]-1)/Xe[0],Sn=(Ze[8]+1)/Ze[0],xt=ut*k,et=ut*Sn,Ve=Te/(-k+Sn),Bt=Ve*-k;if(xe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Bt),re.translateZ(Ve),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Xe[10]===-1)re.projectionMatrix.copy(xe.projectionMatrix),re.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const He=ut+Ve,D=Ut+Ve,A=xt-Bt,Z=et+(Te-Bt),pe=ft*Ut/D*He,ge=qt*Ut/D*He;re.projectionMatrix.makePerspective(A,Z,pe,ge,He,D),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function Q(re,xe){xe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(xe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let xe=re.near,Me=re.far;T.texture!==null&&(T.depthNear>0&&(xe=T.depthNear),T.depthFar>0&&(Me=T.depthFar)),C.near=B.near=I.near=xe,C.far=B.far=I.far=Me,(H!==C.near||ae!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,ae=C.far),I.layers.mask=re.layers.mask|2,B.layers.mask=re.layers.mask|4,C.layers.mask=I.layers.mask|B.layers.mask;const Te=re.parent,Xe=C.cameras;Q(C,Te);for(let Ze=0;Ze<Xe.length;Ze++)Q(Xe[Ze],Te);Xe.length===2?U(C,I,B):C.projectionMatrix.copy(I.projectionMatrix),V(re,C,Te)};function V(re,xe,Me){Me===null?re.matrix.copy(xe.matrixWorld):(re.matrix.copy(Me.matrixWorld),re.matrix.invert(),re.matrix.multiply(xe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(xe.projectionMatrix),re.projectionMatrixInverse.copy(xe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=du*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(g===null&&v===null))return f},this.setFoveation=function(re){f=re,g!==null&&(g.fixedFoveation=re),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=re)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let te=null;function de(re,xe){if(m=xe.getViewerPose(d||l),S=xe,m!==null){const Me=m.views;v!==null&&(e.setRenderTargetFramebuffer(E,v.framebuffer),e.setRenderTarget(E));let Te=!1;Me.length!==C.cameras.length&&(C.cameras.length=0,Te=!0);for(let Ze=0;Ze<Me.length;Ze++){const ut=Me[Ze];let Ut=null;if(v!==null)Ut=v.getViewport(ut);else{const qt=_.getViewSubImage(g,ut);Ut=qt.viewport,Ze===0&&(e.setRenderTargetTextures(E,qt.colorTexture,g.ignoreDepthValues?void 0:qt.depthStencilTexture),e.setRenderTarget(E))}let ft=L[Ze];ft===void 0&&(ft=new Hi,ft.layers.enable(Ze),ft.viewport=new un,L[Ze]=ft),ft.matrix.fromArray(ut.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(ut.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),Ze===0&&(C.matrix.copy(ft.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Te===!0&&C.cameras.push(ft)}const Xe=s.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")){const Ze=_.getDepthInformation(Me[0]);Ze&&Ze.isValid&&Ze.texture&&T.init(e,Ze,s.renderState)}}for(let Me=0;Me<M.length;Me++){const Te=w[Me],Xe=M[Me];Te!==null&&Xe!==void 0&&Xe.update(Te,xe,d||l)}te&&te(re,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),S=null}const vt=new CM;vt.setAnimationLoop(de),this.setAnimationLoop=function(re){te=re},this.dispose=function(){}}}const ao=new ns,MF=new cn;function TF(t,e){function n(x,h){x.matrixAutoUpdate===!0&&x.updateMatrix(),h.value.copy(x.matrix)}function i(x,h){h.color.getRGB(x.fogColor.value,EM(t)),h.isFog?(x.fogNear.value=h.near,x.fogFar.value=h.far):h.isFogExp2&&(x.fogDensity.value=h.density)}function s(x,h,E,M,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(x,h):h.isMeshToonMaterial?(o(x,h),_(x,h)):h.isMeshPhongMaterial?(o(x,h),m(x,h)):h.isMeshStandardMaterial?(o(x,h),g(x,h),h.isMeshPhysicalMaterial&&v(x,h,w)):h.isMeshMatcapMaterial?(o(x,h),S(x,h)):h.isMeshDepthMaterial?o(x,h):h.isMeshDistanceMaterial?(o(x,h),T(x,h)):h.isMeshNormalMaterial?o(x,h):h.isLineBasicMaterial?(l(x,h),h.isLineDashedMaterial&&u(x,h)):h.isPointsMaterial?f(x,h,E,M):h.isSpriteMaterial?d(x,h):h.isShadowMaterial?(x.color.value.copy(h.color),x.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(x,h){x.opacity.value=h.opacity,h.color&&x.diffuse.value.copy(h.color),h.emissive&&x.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(x.map.value=h.map,n(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.bumpMap&&(x.bumpMap.value=h.bumpMap,n(h.bumpMap,x.bumpMapTransform),x.bumpScale.value=h.bumpScale,h.side===fi&&(x.bumpScale.value*=-1)),h.normalMap&&(x.normalMap.value=h.normalMap,n(h.normalMap,x.normalMapTransform),x.normalScale.value.copy(h.normalScale),h.side===fi&&x.normalScale.value.negate()),h.displacementMap&&(x.displacementMap.value=h.displacementMap,n(h.displacementMap,x.displacementMapTransform),x.displacementScale.value=h.displacementScale,x.displacementBias.value=h.displacementBias),h.emissiveMap&&(x.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,x.emissiveMapTransform)),h.specularMap&&(x.specularMap.value=h.specularMap,n(h.specularMap,x.specularMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest);const E=e.get(h),M=E.envMap,w=E.envMapRotation;M&&(x.envMap.value=M,ao.copy(w),ao.x*=-1,ao.y*=-1,ao.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ao.y*=-1,ao.z*=-1),x.envMapRotation.value.setFromMatrix4(MF.makeRotationFromEuler(ao)),x.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=h.reflectivity,x.ior.value=h.ior,x.refractionRatio.value=h.refractionRatio),h.lightMap&&(x.lightMap.value=h.lightMap,x.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,x.lightMapTransform)),h.aoMap&&(x.aoMap.value=h.aoMap,x.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,x.aoMapTransform))}function l(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,h.map&&(x.map.value=h.map,n(h.map,x.mapTransform))}function u(x,h){x.dashSize.value=h.dashSize,x.totalSize.value=h.dashSize+h.gapSize,x.scale.value=h.scale}function f(x,h,E,M){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.size.value=h.size*E,x.scale.value=M*.5,h.map&&(x.map.value=h.map,n(h.map,x.uvTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function d(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.rotation.value=h.rotation,h.map&&(x.map.value=h.map,n(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function m(x,h){x.specular.value.copy(h.specular),x.shininess.value=Math.max(h.shininess,1e-4)}function _(x,h){h.gradientMap&&(x.gradientMap.value=h.gradientMap)}function g(x,h){x.metalness.value=h.metalness,h.metalnessMap&&(x.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,x.metalnessMapTransform)),x.roughness.value=h.roughness,h.roughnessMap&&(x.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,x.roughnessMapTransform)),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)}function v(x,h,E){x.ior.value=h.ior,h.sheen>0&&(x.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),x.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(x.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,x.sheenColorMapTransform)),h.sheenRoughnessMap&&(x.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,x.sheenRoughnessMapTransform))),h.clearcoat>0&&(x.clearcoat.value=h.clearcoat,x.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(x.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,x.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(x.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===fi&&x.clearcoatNormalScale.value.negate())),h.dispersion>0&&(x.dispersion.value=h.dispersion),h.iridescence>0&&(x.iridescence.value=h.iridescence,x.iridescenceIOR.value=h.iridescenceIOR,x.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(x.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,x.iridescenceMapTransform)),h.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),h.transmission>0&&(x.transmission.value=h.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(x.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,x.transmissionMapTransform)),x.thickness.value=h.thickness,h.thicknessMap&&(x.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=h.attenuationDistance,x.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(x.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(x.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=h.specularIntensity,x.specularColor.value.copy(h.specularColor),h.specularColorMap&&(x.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,x.specularColorMapTransform)),h.specularIntensityMap&&(x.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,h){h.matcap&&(x.matcap.value=h.matcap)}function T(x,h){const E=e.get(h).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wF(t,e,n,i){let s={},o={},l=[];const u=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function f(E,M){const w=M.program;i.uniformBlockBinding(E,w)}function d(E,M){let w=s[E.id];w===void 0&&(S(E),w=m(E),s[E.id]=w,E.addEventListener("dispose",x));const O=M.program;i.updateUBOMapping(E,O);const N=e.render.frame;o[E.id]!==N&&(g(E),o[E.id]=N)}function m(E){const M=_();E.__bindingPointIndex=M;const w=t.createBuffer(),O=E.__size,N=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,O,N),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,w),w}function _(){for(let E=0;E<u;E++)if(l.indexOf(E)===-1)return l.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(E){const M=s[E.id],w=E.uniforms,O=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let N=0,I=w.length;N<I;N++){const B=Array.isArray(w[N])?w[N]:[w[N]];for(let L=0,C=B.length;L<C;L++){const H=B[L];if(v(H,N,L,O)===!0){const ae=H.__offset,$=Array.isArray(H.value)?H.value:[H.value];let fe=0;for(let me=0;me<$.length;me++){const J=$[me],j=T(J);typeof J=="number"||typeof J=="boolean"?(H.__data[0]=J,t.bufferSubData(t.UNIFORM_BUFFER,ae+fe,H.__data)):J.isMatrix3?(H.__data[0]=J.elements[0],H.__data[1]=J.elements[1],H.__data[2]=J.elements[2],H.__data[3]=0,H.__data[4]=J.elements[3],H.__data[5]=J.elements[4],H.__data[6]=J.elements[5],H.__data[7]=0,H.__data[8]=J.elements[6],H.__data[9]=J.elements[7],H.__data[10]=J.elements[8],H.__data[11]=0):(J.toArray(H.__data,fe),fe+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ae,H.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function v(E,M,w,O){const N=E.value,I=M+"_"+w;if(O[I]===void 0)return typeof N=="number"||typeof N=="boolean"?O[I]=N:O[I]=N.clone(),!0;{const B=O[I];if(typeof N=="number"||typeof N=="boolean"){if(B!==N)return O[I]=N,!0}else if(B.equals(N)===!1)return B.copy(N),!0}return!1}function S(E){const M=E.uniforms;let w=0;const O=16;for(let I=0,B=M.length;I<B;I++){const L=Array.isArray(M[I])?M[I]:[M[I]];for(let C=0,H=L.length;C<H;C++){const ae=L[C],$=Array.isArray(ae.value)?ae.value:[ae.value];for(let fe=0,me=$.length;fe<me;fe++){const J=$[fe],j=T(J),U=w%O,Q=U%j.boundary,V=U+Q;w+=Q,V!==0&&O-V<j.storage&&(w+=O-V),ae.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=w,w+=j.storage}}}const N=w%O;return N>0&&(w+=O-N),E.__size=w,E.__cache={},this}function T(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function x(E){const M=E.target;M.removeEventListener("dispose",x);const w=l.indexOf(M.__bindingPointIndex);l.splice(w,1),t.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function h(){for(const E in s)t.deleteBuffer(s[E]);l=[],s={},o={}}return{bind:f,update:d,dispose:h}}class AF{constructor(e={}){const{canvas:n=uD(),context:i=null,depth:s=!0,stencil:o=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=l;const S=new Uint32Array(4),T=new Int32Array(4);let x=null,h=null;const E=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bi,this.toneMapping=Os,this.toneMappingExposure=1;const w=this;let O=!1,N=0,I=0,B=null,L=-1,C=null;const H=new un,ae=new un;let $=null;const fe=new Dt(0);let me=0,J=n.width,j=n.height,U=1,Q=null,V=null;const te=new un(0,0,J,j),de=new un(0,0,J,j);let vt=!1;const re=new wM;let xe=!1,Me=!1;const Te=new cn,Xe=new cn,Ze=new K,ut=new un,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function qt(){return B===null?U:1}let k=i;function Sn(P,X){return n.getContext(P,X)}try{const P={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${i_}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",be,!1),k===null){const X="webgl2";if(k=Sn(X,P),k===null)throw Sn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let xt,et,Ve,Bt,He,D,A,Z,pe,ge,ue,ze,we,De,mt,Ee,Ie,Ye,Ke,Ue,dt,tt,Nt,G;function Ce(){xt=new NU(k),xt.init(),tt=new _F(k,xt),et=new PU(k,xt,e,tt),Ve=new mF(k,xt),et.reverseDepthBuffer&&g&&Ve.buffers.depth.setReversed(!0),Bt=new BU(k),He=new nF,D=new gF(k,xt,Ve,He,et,tt,Bt),A=new LU(w),Z=new UU(w),pe=new XD(k),Nt=new RU(k,pe),ge=new FU(k,pe,Bt,Nt),ue=new kU(k,ge,pe,Bt),Ke=new zU(k,et,D),Ee=new bU(He),ze=new tF(w,A,Z,xt,et,Nt,Ee),we=new TF(w,He),De=new rF,mt=new cF(xt),Ye=new AU(w,A,Z,Ve,ue,v,f),Ie=new hF(w,ue,et),G=new wF(k,Bt,et,Ve),Ue=new CU(k,xt,Bt),dt=new OU(k,xt,Bt),Bt.programs=ze.programs,w.capabilities=et,w.extensions=xt,w.properties=He,w.renderLists=De,w.shadowMap=Ie,w.state=Ve,w.info=Bt}Ce();const se=new EF(w,k);this.xr=se,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const P=xt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=xt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(P){P!==void 0&&(U=P,this.setSize(J,j,!1))},this.getSize=function(P){return P.set(J,j)},this.setSize=function(P,X,ee=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=P,j=X,n.width=Math.floor(P*U),n.height=Math.floor(X*U),ee===!0&&(n.style.width=P+"px",n.style.height=X+"px"),this.setViewport(0,0,P,X)},this.getDrawingBufferSize=function(P){return P.set(J*U,j*U).floor()},this.setDrawingBufferSize=function(P,X,ee){J=P,j=X,U=ee,n.width=Math.floor(P*ee),n.height=Math.floor(X*ee),this.setViewport(0,0,P,X)},this.getCurrentViewport=function(P){return P.copy(H)},this.getViewport=function(P){return P.copy(te)},this.setViewport=function(P,X,ee,ne){P.isVector4?te.set(P.x,P.y,P.z,P.w):te.set(P,X,ee,ne),Ve.viewport(H.copy(te).multiplyScalar(U).round())},this.getScissor=function(P){return P.copy(de)},this.setScissor=function(P,X,ee,ne){P.isVector4?de.set(P.x,P.y,P.z,P.w):de.set(P,X,ee,ne),Ve.scissor(ae.copy(de).multiplyScalar(U).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(P){Ve.setScissorTest(vt=P)},this.setOpaqueSort=function(P){Q=P},this.setTransparentSort=function(P){V=P},this.getClearColor=function(P){return P.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(P=!0,X=!0,ee=!0){let ne=0;if(P){let Y=!1;if(B!==null){const ye=B.texture.format;Y=ye===u_||ye===l_||ye===a_}if(Y){const ye=B.texture.type,Pe=ye===ts||ye===Ro||ye===fu||ye===qa||ye===s_||ye===o_,Ne=Ye.getClearColor(),Be=Ye.getClearAlpha(),Qe=Ne.r,Je=Ne.g,Ge=Ne.b;Pe?(S[0]=Qe,S[1]=Je,S[2]=Ge,S[3]=Be,k.clearBufferuiv(k.COLOR,0,S)):(T[0]=Qe,T[1]=Je,T[2]=Ge,T[3]=Be,k.clearBufferiv(k.COLOR,0,T))}else ne|=k.COLOR_BUFFER_BIT}X&&(ne|=k.DEPTH_BUFFER_BIT),ee&&(ne|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",be,!1),Ye.dispose(),De.dispose(),mt.dispose(),He.dispose(),A.dispose(),Z.dispose(),ue.dispose(),Nt.dispose(),G.dispose(),ze.dispose(),se.dispose(),se.removeEventListener("sessionstart",Io),se.removeEventListener("sessionend",Eu),ji.stop()};function he(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const P=Bt.autoReset,X=Ie.enabled,ee=Ie.autoUpdate,ne=Ie.needsUpdate,Y=Ie.type;Ce(),Bt.autoReset=P,Ie.enabled=X,Ie.autoUpdate=ee,Ie.needsUpdate=ne,Ie.type=Y}function be(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function it(P){const X=P.target;X.removeEventListener("dispose",it),jt(X)}function jt(P){hn(P),He.remove(P)}function hn(P){const X=He.get(P).programs;X!==void 0&&(X.forEach(function(ee){ze.releaseProgram(ee)}),P.isShaderMaterial&&ze.releaseShaderCache(P))}this.renderBufferDirect=function(P,X,ee,ne,Y,ye){X===null&&(X=Ut);const Pe=Y.isMesh&&Y.matrixWorld.determinant()<0,Ne=Cu(P,X,ee,ne,Y);Ve.setMaterial(ne,Pe);let Be=ee.index,Qe=1;if(ne.wireframe===!0){if(Be=ge.getWireframeAttribute(ee),Be===void 0)return;Qe=2}const Je=ee.drawRange,Ge=ee.attributes.position;let St=Je.start*Qe,wt=(Je.start+Je.count)*Qe;ye!==null&&(St=Math.max(St,ye.start*Qe),wt=Math.min(wt,(ye.start+ye.count)*Qe)),Be!==null?(St=Math.max(St,0),wt=Math.min(wt,Be.count)):Ge!=null&&(St=Math.max(St,0),wt=Math.min(wt,Ge.count));const tn=wt-St;if(tn<0||tn===1/0)return;Nt.setup(Y,ne,Ne,ee,Be);let Gt,Et=Ue;if(Be!==null&&(Gt=pe.get(Be),Et=dt,Et.setIndex(Gt)),Y.isMesh)ne.wireframe===!0?(Ve.setLineWidth(ne.wireframeLinewidth*qt()),Et.setMode(k.LINES)):Et.setMode(k.TRIANGLES);else if(Y.isLine){let We=ne.linewidth;We===void 0&&(We=1),Ve.setLineWidth(We*qt()),Y.isLineSegments?Et.setMode(k.LINES):Y.isLineLoop?Et.setMode(k.LINE_LOOP):Et.setMode(k.LINE_STRIP)}else Y.isPoints?Et.setMode(k.POINTS):Y.isSprite&&Et.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Et.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))Et.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const We=Y._multiDrawStarts,sn=Y._multiDrawCounts,At=Y._multiDrawCount,ei=Be?pe.get(Be).bytesPerElement:1,$i=He.get(ne).currentProgram.getUniforms();for(let Un=0;Un<At;Un++)$i.setValue(k,"_gl_DrawID",Un),Et.render(We[Un]/ei,sn[Un])}else if(Y.isInstancedMesh)Et.renderInstances(St,tn,Y.count);else if(ee.isInstancedBufferGeometry){const We=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,sn=Math.min(ee.instanceCount,We);Et.renderInstances(St,tn,sn)}else Et.render(St,tn)};function Ct(P,X,ee){P.transparent===!0&&P.side===Vr&&P.forceSinglePass===!1?(P.side=fi,P.needsUpdate=!0,No(P,X,ee),P.side=ks,P.needsUpdate=!0,No(P,X,ee),P.side=Vr):No(P,X,ee)}this.compile=function(P,X,ee=null){ee===null&&(ee=P),h=mt.get(ee),h.init(X),M.push(h),ee.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(h.pushLight(Y),Y.castShadow&&h.pushShadow(Y))}),P!==ee&&P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(h.pushLight(Y),Y.castShadow&&h.pushShadow(Y))}),h.setupLights();const ne=new Set;return P.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ye=Y.material;if(ye)if(Array.isArray(ye))for(let Pe=0;Pe<ye.length;Pe++){const Ne=ye[Pe];Ct(Ne,ee,Y),ne.add(Ne)}else Ct(ye,ee,Y),ne.add(ye)}),M.pop(),h=null,ne},this.compileAsync=function(P,X,ee=null){const ne=this.compile(P,X,ee);return new Promise(Y=>{function ye(){if(ne.forEach(function(Pe){He.get(Pe).currentProgram.isReady()&&ne.delete(Pe)}),ne.size===0){Y(P);return}setTimeout(ye,10)}xt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let pi=null;function qi(P){pi&&pi(P)}function Io(){ji.stop()}function Eu(){ji.start()}const ji=new CM;ji.setAnimationLoop(qi),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(P){pi=P,se.setAnimationLoop(P),P===null?ji.stop():ji.start()},se.addEventListener("sessionstart",Io),se.addEventListener("sessionend",Eu),this.render=function(P,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(X),X=se.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,X,B),h=mt.get(P,M.length),h.init(X),M.push(h),Xe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),re.setFromProjectionMatrix(Xe),Me=this.localClippingEnabled,xe=Ee.init(this.clippingPlanes,Me),x=De.get(P,E.length),x.init(),E.push(x),se.enabled===!0&&se.isPresenting===!0){const ye=w.xr.getDepthSensingMesh();ye!==null&&nl(ye,X,-1/0,w.sortObjects)}nl(P,X,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(Q,V),ft=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ft&&Ye.addToRenderList(x,P),this.info.render.frame++,xe===!0&&Ee.beginShadows();const ee=h.state.shadowsArray;Ie.render(ee,P,X),xe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=x.opaque,Y=x.transmissive;if(h.setupLights(),X.isArrayCamera){const ye=X.cameras;if(Y.length>0)for(let Pe=0,Ne=ye.length;Pe<Ne;Pe++){const Be=ye[Pe];Tu(ne,Y,P,Be)}ft&&Ye.render(P);for(let Pe=0,Ne=ye.length;Pe<Ne;Pe++){const Be=ye[Pe];Mu(x,P,Be,Be.viewport)}}else Y.length>0&&Tu(ne,Y,P,X),ft&&Ye.render(P),Mu(x,P,X);B!==null&&(D.updateMultisampleRenderTarget(B),D.updateRenderTargetMipmap(B)),P.isScene===!0&&P.onAfterRender(w,P,X),Nt.resetDefaultState(),L=-1,C=null,M.pop(),M.length>0?(h=M[M.length-1],xe===!0&&Ee.setGlobalState(w.clippingPlanes,h.state.camera)):h=null,E.pop(),E.length>0?x=E[E.length-1]:x=null};function nl(P,X,ee,ne){if(P.visible===!1)return;if(P.layers.test(X.layers)){if(P.isGroup)ee=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(X);else if(P.isLight)h.pushLight(P),P.castShadow&&h.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||re.intersectsSprite(P)){ne&&ut.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Xe);const Pe=ue.update(P),Ne=P.material;Ne.visible&&x.push(P,Pe,Ne,ee,ut.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||re.intersectsObject(P))){const Pe=ue.update(P),Ne=P.material;if(ne&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ut.copy(P.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ut.copy(Pe.boundingSphere.center)),ut.applyMatrix4(P.matrixWorld).applyMatrix4(Xe)),Array.isArray(Ne)){const Be=Pe.groups;for(let Qe=0,Je=Be.length;Qe<Je;Qe++){const Ge=Be[Qe],St=Ne[Ge.materialIndex];St&&St.visible&&x.push(P,Pe,St,ee,ut.z,Ge)}}else Ne.visible&&x.push(P,Pe,Ne,ee,ut.z,null)}}const ye=P.children;for(let Pe=0,Ne=ye.length;Pe<Ne;Pe++)nl(ye[Pe],X,ee,ne)}function Mu(P,X,ee,ne){const Y=P.opaque,ye=P.transmissive,Pe=P.transparent;h.setupLightsView(ee),xe===!0&&Ee.setGlobalState(w.clippingPlanes,ee),ne&&Ve.viewport(H.copy(ne)),Y.length>0&&Uo(Y,X,ee),ye.length>0&&Uo(ye,X,ee),Pe.length>0&&Uo(Pe,X,ee),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Tu(P,X,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[ne.id]===void 0&&(h.state.transmissionRenderTarget[ne.id]=new Co(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?vu:ts,minFilter:xo,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const ye=h.state.transmissionRenderTarget[ne.id],Pe=ne.viewport||H;ye.setSize(Pe.z,Pe.w);const Ne=w.getRenderTarget();w.setRenderTarget(ye),w.getClearColor(fe),me=w.getClearAlpha(),me<1&&w.setClearColor(16777215,.5),w.clear(),ft&&Ye.render(ee);const Be=w.toneMapping;w.toneMapping=Os;const Qe=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),h.setupLightsView(ne),xe===!0&&Ee.setGlobalState(w.clippingPlanes,ne),Uo(P,ee,ne),D.updateMultisampleRenderTarget(ye),D.updateRenderTargetMipmap(ye),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Ge=0,St=X.length;Ge<St;Ge++){const wt=X[Ge],tn=wt.object,Gt=wt.geometry,Et=wt.material,We=wt.group;if(Et.side===Vr&&tn.layers.test(ne.layers)){const sn=Et.side;Et.side=fi,Et.needsUpdate=!0,wu(tn,ee,ne,Gt,Et,We),Et.side=sn,Et.needsUpdate=!0,Je=!0}}Je===!0&&(D.updateMultisampleRenderTarget(ye),D.updateRenderTargetMipmap(ye))}w.setRenderTarget(Ne),w.setClearColor(fe,me),Qe!==void 0&&(ne.viewport=Qe),w.toneMapping=Be}function Uo(P,X,ee){const ne=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,ye=P.length;Y<ye;Y++){const Pe=P[Y],Ne=Pe.object,Be=Pe.geometry,Qe=ne===null?Pe.material:ne,Je=Pe.group;Ne.layers.test(ee.layers)&&wu(Ne,X,ee,Be,Qe,Je)}}function wu(P,X,ee,ne,Y,ye){P.onBeforeRender(w,X,ee,ne,Y,ye),P.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Y.onBeforeRender(w,X,ee,ne,P,ye),Y.transparent===!0&&Y.side===Vr&&Y.forceSinglePass===!1?(Y.side=fi,Y.needsUpdate=!0,w.renderBufferDirect(ee,X,ne,Y,P,ye),Y.side=ks,Y.needsUpdate=!0,w.renderBufferDirect(ee,X,ne,Y,P,ye),Y.side=Vr):w.renderBufferDirect(ee,X,ne,Y,P,ye),P.onAfterRender(w,X,ee,ne,Y,ye)}function No(P,X,ee){X.isScene!==!0&&(X=Ut);const ne=He.get(P),Y=h.state.lights,ye=h.state.shadowsArray,Pe=Y.state.version,Ne=ze.getParameters(P,Y.state,ye,X,ee),Be=ze.getProgramCacheKey(Ne);let Qe=ne.programs;ne.environment=P.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(P.isMeshStandardMaterial?Z:A).get(P.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&P.envMap===null?X.environmentRotation:P.envMapRotation,Qe===void 0&&(P.addEventListener("dispose",it),Qe=new Map,ne.programs=Qe);let Je=Qe.get(Be);if(Je!==void 0){if(ne.currentProgram===Je&&ne.lightsStateVersion===Pe)return Ru(P,Ne),Je}else Ne.uniforms=ze.getUniforms(P),P.onBeforeCompile(Ne,w),Je=ze.acquireProgram(Ne,Be),Qe.set(Be,Je),ne.uniforms=Ne.uniforms;const Ge=ne.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ge.clippingPlanes=Ee.uniform),Ru(P,Ne),ne.needsLights=vd(P),ne.lightsStateVersion=Pe,ne.needsLights&&(Ge.ambientLightColor.value=Y.state.ambient,Ge.lightProbe.value=Y.state.probe,Ge.directionalLights.value=Y.state.directional,Ge.directionalLightShadows.value=Y.state.directionalShadow,Ge.spotLights.value=Y.state.spot,Ge.spotLightShadows.value=Y.state.spotShadow,Ge.rectAreaLights.value=Y.state.rectArea,Ge.ltc_1.value=Y.state.rectAreaLTC1,Ge.ltc_2.value=Y.state.rectAreaLTC2,Ge.pointLights.value=Y.state.point,Ge.pointLightShadows.value=Y.state.pointShadow,Ge.hemisphereLights.value=Y.state.hemi,Ge.directionalShadowMap.value=Y.state.directionalShadowMap,Ge.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ge.spotShadowMap.value=Y.state.spotShadowMap,Ge.spotLightMatrix.value=Y.state.spotLightMatrix,Ge.spotLightMap.value=Y.state.spotLightMap,Ge.pointShadowMap.value=Y.state.pointShadowMap,Ge.pointShadowMatrix.value=Y.state.pointShadowMatrix),ne.currentProgram=Je,ne.uniformsList=null,Je}function Au(P){if(P.uniformsList===null){const X=P.currentProgram.getUniforms();P.uniformsList=yf.seqWithValue(X.seq,P.uniforms)}return P.uniformsList}function Ru(P,X){const ee=He.get(P);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function Cu(P,X,ee,ne,Y){X.isScene!==!0&&(X=Ut),D.resetTextureUnits();const ye=X.fog,Pe=ne.isMeshStandardMaterial?X.environment:null,Ne=B===null?w.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:$a,Be=(ne.isMeshStandardMaterial?Z:A).get(ne.envMap||Pe),Qe=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Je=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ge=!!ee.morphAttributes.position,St=!!ee.morphAttributes.normal,wt=!!ee.morphAttributes.color;let tn=Os;ne.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(tn=w.toneMapping);const Gt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Et=Gt!==void 0?Gt.length:0,We=He.get(ne),sn=h.state.lights;if(xe===!0&&(Me===!0||P!==C)){const An=P===C&&ne.id===L;Ee.setState(ne,P,An)}let At=!1;ne.version===We.__version?(We.needsLights&&We.lightsStateVersion!==sn.state.version||We.outputColorSpace!==Ne||Y.isBatchedMesh&&We.batching===!1||!Y.isBatchedMesh&&We.batching===!0||Y.isBatchedMesh&&We.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&We.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&We.instancing===!1||!Y.isInstancedMesh&&We.instancing===!0||Y.isSkinnedMesh&&We.skinning===!1||!Y.isSkinnedMesh&&We.skinning===!0||Y.isInstancedMesh&&We.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&We.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&We.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&We.instancingMorph===!1&&Y.morphTexture!==null||We.envMap!==Be||ne.fog===!0&&We.fog!==ye||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ee.numPlanes||We.numIntersection!==Ee.numIntersection)||We.vertexAlphas!==Qe||We.vertexTangents!==Je||We.morphTargets!==Ge||We.morphNormals!==St||We.morphColors!==wt||We.toneMapping!==tn||We.morphTargetsCount!==Et)&&(At=!0):(At=!0,We.__version=ne.version);let ei=We.currentProgram;At===!0&&(ei=No(ne,X,Y));let $i=!1,Un=!1,Xs=!1;const zt=ei.getUniforms(),Wn=We.uniforms;if(Ve.useProgram(ei.program)&&($i=!0,Un=!0,Xs=!0),ne.id!==L&&(L=ne.id,Un=!0),$i||C!==P){Ve.buffers.depth.getReversed()?(Te.copy(P.projectionMatrix),fD(Te),dD(Te),zt.setValue(k,"projectionMatrix",Te)):zt.setValue(k,"projectionMatrix",P.projectionMatrix),zt.setValue(k,"viewMatrix",P.matrixWorldInverse);const Rn=zt.map.cameraPosition;Rn!==void 0&&Rn.setValue(k,Ze.setFromMatrixPosition(P.matrixWorld)),et.logarithmicDepthBuffer&&zt.setValue(k,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&zt.setValue(k,"isOrthographic",P.isOrthographicCamera===!0),C!==P&&(C=P,Un=!0,Xs=!0)}if(Y.isSkinnedMesh){zt.setOptional(k,Y,"bindMatrix"),zt.setOptional(k,Y,"bindMatrixInverse");const An=Y.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),zt.setValue(k,"boneTexture",An.boneTexture,D))}Y.isBatchedMesh&&(zt.setOptional(k,Y,"batchingTexture"),zt.setValue(k,"batchingTexture",Y._matricesTexture,D),zt.setOptional(k,Y,"batchingIdTexture"),zt.setValue(k,"batchingIdTexture",Y._indirectTexture,D),zt.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&zt.setValue(k,"batchingColorTexture",Y._colorsTexture,D));const Nn=ee.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&Ke.update(Y,ee,ei),(Un||We.receiveShadow!==Y.receiveShadow)&&(We.receiveShadow=Y.receiveShadow,zt.setValue(k,"receiveShadow",Y.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Wn.envMap.value=Be,Wn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(Wn.envMapIntensity.value=X.environmentIntensity),Un&&(zt.setValue(k,"toneMappingExposure",w.toneMappingExposure),We.needsLights&&_d(Wn,Xs),ye&&ne.fog===!0&&we.refreshFogUniforms(Wn,ye),we.refreshMaterialUniforms(Wn,ne,U,j,h.state.transmissionRenderTarget[P.id]),yf.upload(k,Au(We),Wn,D)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(yf.upload(k,Au(We),Wn,D),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&zt.setValue(k,"center",Y.center),zt.setValue(k,"modelViewMatrix",Y.modelViewMatrix),zt.setValue(k,"normalMatrix",Y.normalMatrix),zt.setValue(k,"modelMatrix",Y.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const An=ne.uniformsGroups;for(let Rn=0,Ys=An.length;Rn<Ys;Rn++){const Ki=An[Rn];G.update(Ki,ei),G.bind(Ki,ei)}}return ei}function _d(P,X){P.ambientLightColor.needsUpdate=X,P.lightProbe.needsUpdate=X,P.directionalLights.needsUpdate=X,P.directionalLightShadows.needsUpdate=X,P.pointLights.needsUpdate=X,P.pointLightShadows.needsUpdate=X,P.spotLights.needsUpdate=X,P.spotLightShadows.needsUpdate=X,P.rectAreaLights.needsUpdate=X,P.hemisphereLights.needsUpdate=X}function vd(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(P,X,ee){He.get(P.texture).__webglTexture=X,He.get(P.depthTexture).__webglTexture=ee;const ne=He.get(P);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=ee===void 0,ne.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,X){const ee=He.get(P);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(P,X=0,ee=0){B=P,N=X,I=ee;let ne=!0,Y=null,ye=!1,Pe=!1;if(P){const Be=He.get(P);if(Be.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(k.FRAMEBUFFER,null),ne=!1;else if(Be.__webglFramebuffer===void 0)D.setupRenderTarget(P);else if(Be.__hasExternalTextures)D.rebindTextures(P,He.get(P.texture).__webglTexture,He.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ge=P.depthTexture;if(Be.__boundDepthTexture!==Ge){if(Ge!==null&&He.has(Ge)&&(P.width!==Ge.image.width||P.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(P)}}const Qe=P.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Pe=!0);const Je=He.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?Y=Je[X][ee]:Y=Je[X],ye=!0):P.samples>0&&D.useMultisampledRTT(P)===!1?Y=He.get(P).__webglMultisampledFramebuffer:Array.isArray(Je)?Y=Je[ee]:Y=Je,H.copy(P.viewport),ae.copy(P.scissor),$=P.scissorTest}else H.copy(te).multiplyScalar(U).floor(),ae.copy(de).multiplyScalar(U).floor(),$=vt;if(Ve.bindFramebuffer(k.FRAMEBUFFER,Y)&&ne&&Ve.drawBuffers(P,Y),Ve.viewport(H),Ve.scissor(ae),Ve.setScissorTest($),ye){const Be=He.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,ee)}else if(Pe){const Be=He.get(P.texture),Qe=X||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.__webglTexture,ee||0,Qe)}L=-1},this.readRenderTargetPixels=function(P,X,ee,ne,Y,ye,Pe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=He.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){Ve.bindFramebuffer(k.FRAMEBUFFER,Ne);try{const Be=P.texture,Qe=Be.format,Je=Be.type;if(!et.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=P.width-ne&&ee>=0&&ee<=P.height-Y&&k.readPixels(X,ee,ne,Y,tt.convert(Qe),tt.convert(Je),ye)}finally{const Be=B!==null?He.get(B).__webglFramebuffer:null;Ve.bindFramebuffer(k.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(P,X,ee,ne,Y,ye,Pe){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=He.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){const Be=P.texture,Qe=Be.format,Je=Be.type;if(!et.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=P.width-ne&&ee>=0&&ee<=P.height-Y){Ve.bindFramebuffer(k.FRAMEBUFFER,Ne);const Ge=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ge),k.bufferData(k.PIXEL_PACK_BUFFER,ye.byteLength,k.STREAM_READ),k.readPixels(X,ee,ne,Y,tt.convert(Qe),tt.convert(Je),0);const St=B!==null?He.get(B).__webglFramebuffer:null;Ve.bindFramebuffer(k.FRAMEBUFFER,St);const wt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await cD(k,wt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ge),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ye),k.deleteBuffer(Ge),k.deleteSync(wt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,X=null,ee=0){P.isTexture!==!0&&(da("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,P=arguments[1]);const ne=Math.pow(2,-ee),Y=Math.floor(P.image.width*ne),ye=Math.floor(P.image.height*ne),Pe=X!==null?X.x:0,Ne=X!==null?X.y:0;D.setTexture2D(P,0),k.copyTexSubImage2D(k.TEXTURE_2D,ee,0,0,Pe,Ne,Y,ye),Ve.unbindTexture()};const xd=k.createFramebuffer(),yd=k.createFramebuffer();this.copyTextureToTexture=function(P,X,ee=null,ne=null,Y=0,ye=null){P.isTexture!==!0&&(da("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,P=arguments[1],X=arguments[2],ye=arguments[3]||0,ee=null),ye===null&&(Y!==0?(da("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=Y,Y=0):ye=0);let Pe,Ne,Be,Qe,Je,Ge,St,wt,tn;const Gt=P.isCompressedTexture?P.mipmaps[ye]:P.image;if(ee!==null)Pe=ee.max.x-ee.min.x,Ne=ee.max.y-ee.min.y,Be=ee.isBox3?ee.max.z-ee.min.z:1,Qe=ee.min.x,Je=ee.min.y,Ge=ee.isBox3?ee.min.z:0;else{const Nn=Math.pow(2,-Y);Pe=Math.floor(Gt.width*Nn),Ne=Math.floor(Gt.height*Nn),P.isDataArrayTexture?Be=Gt.depth:P.isData3DTexture?Be=Math.floor(Gt.depth*Nn):Be=1,Qe=0,Je=0,Ge=0}ne!==null?(St=ne.x,wt=ne.y,tn=ne.z):(St=0,wt=0,tn=0);const Et=tt.convert(X.format),We=tt.convert(X.type);let sn;X.isData3DTexture?(D.setTexture3D(X,0),sn=k.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),sn=k.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),sn=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const At=k.getParameter(k.UNPACK_ROW_LENGTH),ei=k.getParameter(k.UNPACK_IMAGE_HEIGHT),$i=k.getParameter(k.UNPACK_SKIP_PIXELS),Un=k.getParameter(k.UNPACK_SKIP_ROWS),Xs=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Gt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Gt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Qe),k.pixelStorei(k.UNPACK_SKIP_ROWS,Je),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ge);const zt=P.isDataArrayTexture||P.isData3DTexture,Wn=X.isDataArrayTexture||X.isData3DTexture;if(P.isDepthTexture){const Nn=He.get(P),An=He.get(X),Rn=He.get(Nn.__renderTarget),Ys=He.get(An.__renderTarget);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ys.__webglFramebuffer);for(let Ki=0;Ki<Be;Ki++)zt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,He.get(P).__webglTexture,Y,Ge+Ki),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,He.get(X).__webglTexture,ye,tn+Ki)),k.blitFramebuffer(Qe,Je,Pe,Ne,St,wt,Pe,Ne,k.DEPTH_BUFFER_BIT,k.NEAREST);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||P.isRenderTargetTexture||He.has(P)){const Nn=He.get(P),An=He.get(X);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,xd),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,yd);for(let Rn=0;Rn<Be;Rn++)zt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Nn.__webglTexture,Y,Ge+Rn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Nn.__webglTexture,Y),Wn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,An.__webglTexture,ye,tn+Rn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,An.__webglTexture,ye),Y!==0?k.blitFramebuffer(Qe,Je,Pe,Ne,St,wt,Pe,Ne,k.COLOR_BUFFER_BIT,k.NEAREST):Wn?k.copyTexSubImage3D(sn,ye,St,wt,tn+Rn,Qe,Je,Pe,Ne):k.copyTexSubImage2D(sn,ye,St,wt,Qe,Je,Pe,Ne);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Wn?P.isDataTexture||P.isData3DTexture?k.texSubImage3D(sn,ye,St,wt,tn,Pe,Ne,Be,Et,We,Gt.data):X.isCompressedArrayTexture?k.compressedTexSubImage3D(sn,ye,St,wt,tn,Pe,Ne,Be,Et,Gt.data):k.texSubImage3D(sn,ye,St,wt,tn,Pe,Ne,Be,Et,We,Gt):P.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ye,St,wt,Pe,Ne,Et,We,Gt.data):P.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ye,St,wt,Gt.width,Gt.height,Et,Gt.data):k.texSubImage2D(k.TEXTURE_2D,ye,St,wt,Pe,Ne,Et,We,Gt);k.pixelStorei(k.UNPACK_ROW_LENGTH,At),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ei),k.pixelStorei(k.UNPACK_SKIP_PIXELS,$i),k.pixelStorei(k.UNPACK_SKIP_ROWS,Un),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Xs),ye===0&&X.generateMipmaps&&k.generateMipmap(sn),Ve.unbindTexture()},this.copyTextureToTexture3D=function(P,X,ee=null,ne=null,Y=0){return P.isTexture!==!0&&(da("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,ne=arguments[1]||null,P=arguments[2],X=arguments[3],Y=arguments[4]||0),da('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,X,ee,ne,Y)},this.initRenderTarget=function(P){He.get(P).__webglFramebuffer===void 0&&D.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?D.setTextureCube(P,0):P.isData3DTexture?D.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?D.setTexture2DArray(P,0):D.setTexture2D(P,0),Ve.unbindTexture()},this.resetState=function(){N=0,I=0,B=null,Ve.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Rt._getUnpackColorSpace()}}const By={type:"change"},h_={type:"start"},IM={type:"end"},tf=new f_,zy=new Es,RF=Math.cos(70*lD.DEG2RAD),gn=new K,si=2*Math.PI,Ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cp=1e-6;class CF extends GD{constructor(e,n=null){super(e,n),this.state=Ot.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ia.ROTATE,MIDDLE:Ia.DOLLY,RIGHT:Ia.PAN},this.touches={ONE:wa.ROTATE,TWO:wa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Po,this._lastTargetPosition=new K,this._quat=new Po().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dy,this._sphericalDelta=new dy,this._scale=1,this._panOffset=new K,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new K,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bF.bind(this),this._onPointerDown=PF.bind(this),this._onPointerUp=LF.bind(this),this._onContextMenu=BF.bind(this),this._onMouseWheel=UF.bind(this),this._onKeyDown=NF.bind(this),this._onTouchStart=FF.bind(this),this._onTouchMove=OF.bind(this),this._onMouseDown=DF.bind(this),this._onMouseMove=IF.bind(this),this._interceptControlDown=zF.bind(this),this._interceptControlUp=kF.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(By),this.update(),this.state=Ot.NONE}update(e=null){const n=this.object.position;gn.copy(n).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=si:i>Math.PI&&(i-=si),s<-Math.PI?s+=si:s>Math.PI&&(s-=si),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),n.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const u=gn.length();l=this._clampDistance(u*this._scale);const f=u-l;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),o=!!f}else if(this.object.isOrthographicCamera){const u=new K(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=f!==this.object.zoom;const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(u),this.object.updateMatrixWorld(),l=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(tf.origin.copy(this.object.position),tf.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tf.direction))<RF?this.object.lookAt(this.target):(zy.setFromNormalAndCoplanarPoint(this.object.up,this.target),tf.intersectPlane(zy,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Cp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cp||this._lastTargetPosition.distanceToSquared(this.target)>Cp?(this.dispatchEvent(By),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?si/60*this.autoRotateSpeed*e:si/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){gn.setFromMatrixColumn(n,0),gn.multiplyScalar(-e),this._panOffset.add(gn)}_panUp(e,n){this.screenSpacePanning===!0?gn.setFromMatrixColumn(n,1):(gn.setFromMatrixColumn(n,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(e),this._panOffset.add(gn)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;gn.copy(s).sub(this.target);let o=gn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*n*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,o=n-i.top,l=i.width,u=i.height;this._mouse.x=s/l*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(si*this._rotateDelta.x/n.clientHeight),this._rotateUp(si*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(si*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-si*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(si*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-si*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(si*this._rotateDelta.x/n.clientHeight),this._rotateUp(si*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+n.x)*.5,u=(e.pageY+n.y)*.5;this._updateZoomParameters(l,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ht,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function PF(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function bF(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function LF(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(IM),this.state=Ot.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function DF(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ia.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Ot.DOLLY;break;case Ia.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Ot.ROTATE}break;case Ia.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Ot.PAN}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(h_)}function IF(t){switch(this.state){case Ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function UF(t){this.enabled===!1||this.enableZoom===!1||this.state!==Ot.NONE||(t.preventDefault(),this.dispatchEvent(h_),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(IM))}function NF(t){this.enabled!==!1&&this._handleKeyDown(t)}function FF(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case wa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Ot.TOUCH_ROTATE;break;case wa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Ot.TOUCH_PAN;break;default:this.state=Ot.NONE}break;case 2:switch(this.touches.TWO){case wa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Ot.TOUCH_DOLLY_PAN;break;case wa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Ot.TOUCH_DOLLY_ROTATE;break;default:this.state=Ot.NONE}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(h_)}function OF(t){switch(this._trackPointer(t),this.state){case Ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Ot.NONE}}function BF(t){this.enabled!==!1&&t.preventDefault()}function zF(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kF(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Kf={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Kf.exports;(function(t,e){(function(){var n,i="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",d=500,m="__lodash_placeholder__",_=1,g=2,v=4,S=1,T=2,x=1,h=2,E=4,M=8,w=16,O=32,N=64,I=128,B=256,L=512,C=30,H="...",ae=800,$=16,fe=1,me=2,J=3,j=1/0,U=9007199254740991,Q=17976931348623157e292,V=NaN,te=4294967295,de=te-1,vt=te>>>1,re=[["ary",I],["bind",x],["bindKey",h],["curry",M],["curryRight",w],["flip",L],["partial",O],["partialRight",N],["rearg",B]],xe="[object Arguments]",Me="[object Array]",Te="[object AsyncFunction]",Xe="[object Boolean]",Ze="[object Date]",ut="[object DOMException]",Ut="[object Error]",ft="[object Function]",qt="[object GeneratorFunction]",k="[object Map]",Sn="[object Number]",xt="[object Null]",et="[object Object]",Ve="[object Promise]",Bt="[object Proxy]",He="[object RegExp]",D="[object Set]",A="[object String]",Z="[object Symbol]",pe="[object Undefined]",ge="[object WeakMap]",ue="[object WeakSet]",ze="[object ArrayBuffer]",we="[object DataView]",De="[object Float32Array]",mt="[object Float64Array]",Ee="[object Int8Array]",Ie="[object Int16Array]",Ye="[object Int32Array]",Ke="[object Uint8Array]",Ue="[object Uint8ClampedArray]",dt="[object Uint16Array]",tt="[object Uint32Array]",Nt=/\b__p \+= '';/g,G=/\b(__p \+=) '' \+/g,Ce=/(__e\(.*?\)|\b__t\)) \+\n'';/g,se=/&(?:amp|lt|gt|quot|#39);/g,he=/[&<>"']/g,Le=RegExp(se.source),be=RegExp(he.source),it=/<%-([\s\S]+?)%>/g,jt=/<%([\s\S]+?)%>/g,hn=/<%=([\s\S]+?)%>/g,Ct=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pi=/^\w*$/,qi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Io=/[\\^$.*+?()[\]{}|]/g,Eu=RegExp(Io.source),ji=/^\s+/,nl=/\s/,Mu=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Tu=/\{\n\/\* \[wrapped with (.+)\] \*/,Uo=/,? & /,wu=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,No=/[()=,{}\[\]\/\s]/,Au=/\\(\\)?/g,Ru=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Cu=/\w*$/,_d=/^[-+]0x[0-9a-f]+$/i,vd=/^0b[01]+$/i,xd=/^\[object .+?Constructor\]$/,yd=/^0o[0-7]+$/i,P=/^(?:0|[1-9]\d*)$/,X=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ee=/($^)/,ne=/['\n\r\u2028\u2029\\]/g,Y="\\ud800-\\udfff",ye="\\u0300-\\u036f",Pe="\\ufe20-\\ufe2f",Ne="\\u20d0-\\u20ff",Be=ye+Pe+Ne,Qe="\\u2700-\\u27bf",Je="a-z\\xdf-\\xf6\\xf8-\\xff",Ge="\\xac\\xb1\\xd7\\xf7",St="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",wt="\\u2000-\\u206f",tn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Gt="A-Z\\xc0-\\xd6\\xd8-\\xde",Et="\\ufe0e\\ufe0f",We=Ge+St+wt+tn,sn="['’]",At="["+Y+"]",ei="["+We+"]",$i="["+Be+"]",Un="\\d+",Xs="["+Qe+"]",zt="["+Je+"]",Wn="[^"+Y+We+Un+Qe+Je+Gt+"]",Nn="\\ud83c[\\udffb-\\udfff]",An="(?:"+$i+"|"+Nn+")",Rn="[^"+Y+"]",Ys="(?:\\ud83c[\\udde6-\\uddff]){2}",Ki="[\\ud800-\\udbff][\\udc00-\\udfff]",Fo="["+Gt+"]",p_="\\u200d",m_="(?:"+zt+"|"+Wn+")",UM="(?:"+Fo+"|"+Wn+")",g_="(?:"+sn+"(?:d|ll|m|re|s|t|ve))?",__="(?:"+sn+"(?:D|LL|M|RE|S|T|VE))?",v_=An+"?",x_="["+Et+"]?",NM="(?:"+p_+"(?:"+[Rn,Ys,Ki].join("|")+")"+x_+v_+")*",FM="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",OM="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",y_=x_+v_+NM,BM="(?:"+[Xs,Ys,Ki].join("|")+")"+y_,zM="(?:"+[Rn+$i+"?",$i,Ys,Ki,At].join("|")+")",kM=RegExp(sn,"g"),HM=RegExp($i,"g"),Sd=RegExp(Nn+"(?="+Nn+")|"+zM+y_,"g"),VM=RegExp([Fo+"?"+zt+"+"+g_+"(?="+[ei,Fo,"$"].join("|")+")",UM+"+"+__+"(?="+[ei,Fo+m_,"$"].join("|")+")",Fo+"?"+m_+"+"+g_,Fo+"+"+__,OM,FM,Un,BM].join("|"),"g"),GM=RegExp("["+p_+Y+Be+Et+"]"),WM=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,XM=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],YM=-1,Wt={};Wt[De]=Wt[mt]=Wt[Ee]=Wt[Ie]=Wt[Ye]=Wt[Ke]=Wt[Ue]=Wt[dt]=Wt[tt]=!0,Wt[xe]=Wt[Me]=Wt[ze]=Wt[Xe]=Wt[we]=Wt[Ze]=Wt[Ut]=Wt[ft]=Wt[k]=Wt[Sn]=Wt[et]=Wt[He]=Wt[D]=Wt[A]=Wt[ge]=!1;var Ht={};Ht[xe]=Ht[Me]=Ht[ze]=Ht[we]=Ht[Xe]=Ht[Ze]=Ht[De]=Ht[mt]=Ht[Ee]=Ht[Ie]=Ht[Ye]=Ht[k]=Ht[Sn]=Ht[et]=Ht[He]=Ht[D]=Ht[A]=Ht[Z]=Ht[Ke]=Ht[Ue]=Ht[dt]=Ht[tt]=!0,Ht[Ut]=Ht[ft]=Ht[ge]=!1;var qM={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},jM={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$M={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},KM={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ZM=parseFloat,QM=parseInt,S_=typeof vl=="object"&&vl&&vl.Object===Object&&vl,JM=typeof self=="object"&&self&&self.Object===Object&&self,Cn=S_||JM||Function("return this")(),Ed=e&&!e.nodeType&&e,qs=Ed&&!0&&t&&!t.nodeType&&t,E_=qs&&qs.exports===Ed,Md=E_&&S_.process,Pi=function(){try{var W=qs&&qs.require&&qs.require("util").types;return W||Md&&Md.binding&&Md.binding("util")}catch{}}(),M_=Pi&&Pi.isArrayBuffer,T_=Pi&&Pi.isDate,w_=Pi&&Pi.isMap,A_=Pi&&Pi.isRegExp,R_=Pi&&Pi.isSet,C_=Pi&&Pi.isTypedArray;function mi(W,oe,ie){switch(ie.length){case 0:return W.call(oe);case 1:return W.call(oe,ie[0]);case 2:return W.call(oe,ie[0],ie[1]);case 3:return W.call(oe,ie[0],ie[1],ie[2])}return W.apply(oe,ie)}function e1(W,oe,ie,Fe){for(var nt=-1,Pt=W==null?0:W.length;++nt<Pt;){var pn=W[nt];oe(Fe,pn,ie(pn),W)}return Fe}function bi(W,oe){for(var ie=-1,Fe=W==null?0:W.length;++ie<Fe&&oe(W[ie],ie,W)!==!1;);return W}function t1(W,oe){for(var ie=W==null?0:W.length;ie--&&oe(W[ie],ie,W)!==!1;);return W}function P_(W,oe){for(var ie=-1,Fe=W==null?0:W.length;++ie<Fe;)if(!oe(W[ie],ie,W))return!1;return!0}function rs(W,oe){for(var ie=-1,Fe=W==null?0:W.length,nt=0,Pt=[];++ie<Fe;){var pn=W[ie];oe(pn,ie,W)&&(Pt[nt++]=pn)}return Pt}function Pu(W,oe){var ie=W==null?0:W.length;return!!ie&&Oo(W,oe,0)>-1}function Td(W,oe,ie){for(var Fe=-1,nt=W==null?0:W.length;++Fe<nt;)if(ie(oe,W[Fe]))return!0;return!1}function $t(W,oe){for(var ie=-1,Fe=W==null?0:W.length,nt=Array(Fe);++ie<Fe;)nt[ie]=oe(W[ie],ie,W);return nt}function ss(W,oe){for(var ie=-1,Fe=oe.length,nt=W.length;++ie<Fe;)W[nt+ie]=oe[ie];return W}function wd(W,oe,ie,Fe){var nt=-1,Pt=W==null?0:W.length;for(Fe&&Pt&&(ie=W[++nt]);++nt<Pt;)ie=oe(ie,W[nt],nt,W);return ie}function n1(W,oe,ie,Fe){var nt=W==null?0:W.length;for(Fe&&nt&&(ie=W[--nt]);nt--;)ie=oe(ie,W[nt],nt,W);return ie}function Ad(W,oe){for(var ie=-1,Fe=W==null?0:W.length;++ie<Fe;)if(oe(W[ie],ie,W))return!0;return!1}var i1=Rd("length");function r1(W){return W.split("")}function s1(W){return W.match(wu)||[]}function b_(W,oe,ie){var Fe;return ie(W,function(nt,Pt,pn){if(oe(nt,Pt,pn))return Fe=Pt,!1}),Fe}function bu(W,oe,ie,Fe){for(var nt=W.length,Pt=ie+(Fe?1:-1);Fe?Pt--:++Pt<nt;)if(oe(W[Pt],Pt,W))return Pt;return-1}function Oo(W,oe,ie){return oe===oe?_1(W,oe,ie):bu(W,L_,ie)}function o1(W,oe,ie,Fe){for(var nt=ie-1,Pt=W.length;++nt<Pt;)if(Fe(W[nt],oe))return nt;return-1}function L_(W){return W!==W}function D_(W,oe){var ie=W==null?0:W.length;return ie?Pd(W,oe)/ie:V}function Rd(W){return function(oe){return oe==null?n:oe[W]}}function Cd(W){return function(oe){return W==null?n:W[oe]}}function I_(W,oe,ie,Fe,nt){return nt(W,function(Pt,pn,kt){ie=Fe?(Fe=!1,Pt):oe(ie,Pt,pn,kt)}),ie}function a1(W,oe){var ie=W.length;for(W.sort(oe);ie--;)W[ie]=W[ie].value;return W}function Pd(W,oe){for(var ie,Fe=-1,nt=W.length;++Fe<nt;){var Pt=oe(W[Fe]);Pt!==n&&(ie=ie===n?Pt:ie+Pt)}return ie}function bd(W,oe){for(var ie=-1,Fe=Array(W);++ie<W;)Fe[ie]=oe(ie);return Fe}function l1(W,oe){return $t(oe,function(ie){return[ie,W[ie]]})}function U_(W){return W&&W.slice(0,B_(W)+1).replace(ji,"")}function gi(W){return function(oe){return W(oe)}}function Ld(W,oe){return $t(oe,function(ie){return W[ie]})}function il(W,oe){return W.has(oe)}function N_(W,oe){for(var ie=-1,Fe=W.length;++ie<Fe&&Oo(oe,W[ie],0)>-1;);return ie}function F_(W,oe){for(var ie=W.length;ie--&&Oo(oe,W[ie],0)>-1;);return ie}function u1(W,oe){for(var ie=W.length,Fe=0;ie--;)W[ie]===oe&&++Fe;return Fe}var c1=Cd(qM),f1=Cd(jM);function d1(W){return"\\"+KM[W]}function h1(W,oe){return W==null?n:W[oe]}function Bo(W){return GM.test(W)}function p1(W){return WM.test(W)}function m1(W){for(var oe,ie=[];!(oe=W.next()).done;)ie.push(oe.value);return ie}function Dd(W){var oe=-1,ie=Array(W.size);return W.forEach(function(Fe,nt){ie[++oe]=[nt,Fe]}),ie}function O_(W,oe){return function(ie){return W(oe(ie))}}function os(W,oe){for(var ie=-1,Fe=W.length,nt=0,Pt=[];++ie<Fe;){var pn=W[ie];(pn===oe||pn===m)&&(W[ie]=m,Pt[nt++]=ie)}return Pt}function Lu(W){var oe=-1,ie=Array(W.size);return W.forEach(function(Fe){ie[++oe]=Fe}),ie}function g1(W){var oe=-1,ie=Array(W.size);return W.forEach(function(Fe){ie[++oe]=[Fe,Fe]}),ie}function _1(W,oe,ie){for(var Fe=ie-1,nt=W.length;++Fe<nt;)if(W[Fe]===oe)return Fe;return-1}function v1(W,oe,ie){for(var Fe=ie+1;Fe--;)if(W[Fe]===oe)return Fe;return Fe}function zo(W){return Bo(W)?y1(W):i1(W)}function Zi(W){return Bo(W)?S1(W):r1(W)}function B_(W){for(var oe=W.length;oe--&&nl.test(W.charAt(oe)););return oe}var x1=Cd($M);function y1(W){for(var oe=Sd.lastIndex=0;Sd.test(W);)++oe;return oe}function S1(W){return W.match(Sd)||[]}function E1(W){return W.match(VM)||[]}var M1=function W(oe){oe=oe==null?Cn:ko.defaults(Cn.Object(),oe,ko.pick(Cn,XM));var ie=oe.Array,Fe=oe.Date,nt=oe.Error,Pt=oe.Function,pn=oe.Math,kt=oe.Object,Id=oe.RegExp,T1=oe.String,Li=oe.TypeError,Du=ie.prototype,w1=Pt.prototype,Ho=kt.prototype,Iu=oe["__core-js_shared__"],Uu=w1.toString,Lt=Ho.hasOwnProperty,A1=0,z_=function(){var r=/[^.]+$/.exec(Iu&&Iu.keys&&Iu.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Nu=Ho.toString,R1=Uu.call(kt),C1=Cn._,P1=Id("^"+Uu.call(Lt).replace(Io,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Fu=E_?oe.Buffer:n,as=oe.Symbol,Ou=oe.Uint8Array,k_=Fu?Fu.allocUnsafe:n,Bu=O_(kt.getPrototypeOf,kt),H_=kt.create,V_=Ho.propertyIsEnumerable,zu=Du.splice,G_=as?as.isConcatSpreadable:n,rl=as?as.iterator:n,js=as?as.toStringTag:n,ku=function(){try{var r=Js(kt,"defineProperty");return r({},"",{}),r}catch{}}(),b1=oe.clearTimeout!==Cn.clearTimeout&&oe.clearTimeout,L1=Fe&&Fe.now!==Cn.Date.now&&Fe.now,D1=oe.setTimeout!==Cn.setTimeout&&oe.setTimeout,Hu=pn.ceil,Vu=pn.floor,Ud=kt.getOwnPropertySymbols,I1=Fu?Fu.isBuffer:n,W_=oe.isFinite,U1=Du.join,N1=O_(kt.keys,kt),mn=pn.max,Fn=pn.min,F1=Fe.now,O1=oe.parseInt,X_=pn.random,B1=Du.reverse,Nd=Js(oe,"DataView"),sl=Js(oe,"Map"),Fd=Js(oe,"Promise"),Vo=Js(oe,"Set"),ol=Js(oe,"WeakMap"),al=Js(kt,"create"),Gu=ol&&new ol,Go={},z1=eo(Nd),k1=eo(sl),H1=eo(Fd),V1=eo(Vo),G1=eo(ol),Wu=as?as.prototype:n,ll=Wu?Wu.valueOf:n,Y_=Wu?Wu.toString:n;function R(r){if(nn(r)&&!rt(r)&&!(r instanceof yt)){if(r instanceof Di)return r;if(Lt.call(r,"__wrapped__"))return q0(r)}return new Di(r)}var Wo=function(){function r(){}return function(a){if(!Zt(a))return{};if(H_)return H_(a);r.prototype=a;var c=new r;return r.prototype=n,c}}();function Xu(){}function Di(r,a){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=n}R.templateSettings={escape:it,evaluate:jt,interpolate:hn,variable:"",imports:{_:R}},R.prototype=Xu.prototype,R.prototype.constructor=R,Di.prototype=Wo(Xu.prototype),Di.prototype.constructor=Di;function yt(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=te,this.__views__=[]}function W1(){var r=new yt(this.__wrapped__);return r.__actions__=ti(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=ti(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=ti(this.__views__),r}function X1(){if(this.__filtered__){var r=new yt(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function Y1(){var r=this.__wrapped__.value(),a=this.__dir__,c=rt(r),p=a<0,y=c?r.length:0,b=rw(0,y,this.__views__),F=b.start,z=b.end,q=z-F,le=p?z:F-1,ce=this.__iteratees__,_e=ce.length,Ae=0,ke=Fn(q,this.__takeCount__);if(!c||!p&&y==q&&ke==q)return g0(r,this.__actions__);var je=[];e:for(;q--&&Ae<ke;){le+=a;for(var at=-1,$e=r[le];++at<_e;){var gt=ce[at],Mt=gt.iteratee,xi=gt.type,qn=Mt($e);if(xi==me)$e=qn;else if(!qn){if(xi==fe)continue e;break e}}je[Ae++]=$e}return je}yt.prototype=Wo(Xu.prototype),yt.prototype.constructor=yt;function $s(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var p=r[a];this.set(p[0],p[1])}}function q1(){this.__data__=al?al(null):{},this.size=0}function j1(r){var a=this.has(r)&&delete this.__data__[r];return this.size-=a?1:0,a}function $1(r){var a=this.__data__;if(al){var c=a[r];return c===f?n:c}return Lt.call(a,r)?a[r]:n}function K1(r){var a=this.__data__;return al?a[r]!==n:Lt.call(a,r)}function Z1(r,a){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=al&&a===n?f:a,this}$s.prototype.clear=q1,$s.prototype.delete=j1,$s.prototype.get=$1,$s.prototype.has=K1,$s.prototype.set=Z1;function wr(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var p=r[a];this.set(p[0],p[1])}}function Q1(){this.__data__=[],this.size=0}function J1(r){var a=this.__data__,c=Yu(a,r);if(c<0)return!1;var p=a.length-1;return c==p?a.pop():zu.call(a,c,1),--this.size,!0}function eT(r){var a=this.__data__,c=Yu(a,r);return c<0?n:a[c][1]}function tT(r){return Yu(this.__data__,r)>-1}function nT(r,a){var c=this.__data__,p=Yu(c,r);return p<0?(++this.size,c.push([r,a])):c[p][1]=a,this}wr.prototype.clear=Q1,wr.prototype.delete=J1,wr.prototype.get=eT,wr.prototype.has=tT,wr.prototype.set=nT;function Ar(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var p=r[a];this.set(p[0],p[1])}}function iT(){this.size=0,this.__data__={hash:new $s,map:new(sl||wr),string:new $s}}function rT(r){var a=rc(this,r).delete(r);return this.size-=a?1:0,a}function sT(r){return rc(this,r).get(r)}function oT(r){return rc(this,r).has(r)}function aT(r,a){var c=rc(this,r),p=c.size;return c.set(r,a),this.size+=c.size==p?0:1,this}Ar.prototype.clear=iT,Ar.prototype.delete=rT,Ar.prototype.get=sT,Ar.prototype.has=oT,Ar.prototype.set=aT;function Ks(r){var a=-1,c=r==null?0:r.length;for(this.__data__=new Ar;++a<c;)this.add(r[a])}function lT(r){return this.__data__.set(r,f),this}function uT(r){return this.__data__.has(r)}Ks.prototype.add=Ks.prototype.push=lT,Ks.prototype.has=uT;function Qi(r){var a=this.__data__=new wr(r);this.size=a.size}function cT(){this.__data__=new wr,this.size=0}function fT(r){var a=this.__data__,c=a.delete(r);return this.size=a.size,c}function dT(r){return this.__data__.get(r)}function hT(r){return this.__data__.has(r)}function pT(r,a){var c=this.__data__;if(c instanceof wr){var p=c.__data__;if(!sl||p.length<s-1)return p.push([r,a]),this.size=++c.size,this;c=this.__data__=new Ar(p)}return c.set(r,a),this.size=c.size,this}Qi.prototype.clear=cT,Qi.prototype.delete=fT,Qi.prototype.get=dT,Qi.prototype.has=hT,Qi.prototype.set=pT;function q_(r,a){var c=rt(r),p=!c&&to(r),y=!c&&!p&&ds(r),b=!c&&!p&&!y&&jo(r),F=c||p||y||b,z=F?bd(r.length,T1):[],q=z.length;for(var le in r)(a||Lt.call(r,le))&&!(F&&(le=="length"||y&&(le=="offset"||le=="parent")||b&&(le=="buffer"||le=="byteLength"||le=="byteOffset")||br(le,q)))&&z.push(le);return z}function j_(r){var a=r.length;return a?r[qd(0,a-1)]:n}function mT(r,a){return sc(ti(r),Zs(a,0,r.length))}function gT(r){return sc(ti(r))}function Od(r,a,c){(c!==n&&!Ji(r[a],c)||c===n&&!(a in r))&&Rr(r,a,c)}function ul(r,a,c){var p=r[a];(!(Lt.call(r,a)&&Ji(p,c))||c===n&&!(a in r))&&Rr(r,a,c)}function Yu(r,a){for(var c=r.length;c--;)if(Ji(r[c][0],a))return c;return-1}function _T(r,a,c,p){return ls(r,function(y,b,F){a(p,y,c(y),F)}),p}function $_(r,a){return r&&mr(a,En(a),r)}function vT(r,a){return r&&mr(a,ii(a),r)}function Rr(r,a,c){a=="__proto__"&&ku?ku(r,a,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[a]=c}function Bd(r,a){for(var c=-1,p=a.length,y=ie(p),b=r==null;++c<p;)y[c]=b?n:vh(r,a[c]);return y}function Zs(r,a,c){return r===r&&(c!==n&&(r=r<=c?r:c),a!==n&&(r=r>=a?r:a)),r}function Ii(r,a,c,p,y,b){var F,z=a&_,q=a&g,le=a&v;if(c&&(F=y?c(r,p,y,b):c(r)),F!==n)return F;if(!Zt(r))return r;var ce=rt(r);if(ce){if(F=ow(r),!z)return ti(r,F)}else{var _e=On(r),Ae=_e==ft||_e==qt;if(ds(r))return x0(r,z);if(_e==et||_e==xe||Ae&&!y){if(F=q||Ae?{}:B0(r),!z)return q?$T(r,vT(F,r)):jT(r,$_(F,r))}else{if(!Ht[_e])return y?r:{};F=aw(r,_e,z)}}b||(b=new Qi);var ke=b.get(r);if(ke)return ke;b.set(r,F),hv(r)?r.forEach(function($e){F.add(Ii($e,a,c,$e,r,b))}):fv(r)&&r.forEach(function($e,gt){F.set(gt,Ii($e,a,c,gt,r,b))});var je=le?q?rh:ih:q?ii:En,at=ce?n:je(r);return bi(at||r,function($e,gt){at&&(gt=$e,$e=r[gt]),ul(F,gt,Ii($e,a,c,gt,r,b))}),F}function xT(r){var a=En(r);return function(c){return K_(c,r,a)}}function K_(r,a,c){var p=c.length;if(r==null)return!p;for(r=kt(r);p--;){var y=c[p],b=a[y],F=r[y];if(F===n&&!(y in r)||!b(F))return!1}return!0}function Z_(r,a,c){if(typeof r!="function")throw new Li(l);return gl(function(){r.apply(n,c)},a)}function cl(r,a,c,p){var y=-1,b=Pu,F=!0,z=r.length,q=[],le=a.length;if(!z)return q;c&&(a=$t(a,gi(c))),p?(b=Td,F=!1):a.length>=s&&(b=il,F=!1,a=new Ks(a));e:for(;++y<z;){var ce=r[y],_e=c==null?ce:c(ce);if(ce=p||ce!==0?ce:0,F&&_e===_e){for(var Ae=le;Ae--;)if(a[Ae]===_e)continue e;q.push(ce)}else b(a,_e,p)||q.push(ce)}return q}var ls=T0(pr),Q_=T0(kd,!0);function yT(r,a){var c=!0;return ls(r,function(p,y,b){return c=!!a(p,y,b),c}),c}function qu(r,a,c){for(var p=-1,y=r.length;++p<y;){var b=r[p],F=a(b);if(F!=null&&(z===n?F===F&&!vi(F):c(F,z)))var z=F,q=b}return q}function ST(r,a,c,p){var y=r.length;for(c=st(c),c<0&&(c=-c>y?0:y+c),p=p===n||p>y?y:st(p),p<0&&(p+=y),p=c>p?0:mv(p);c<p;)r[c++]=a;return r}function J_(r,a){var c=[];return ls(r,function(p,y,b){a(p,y,b)&&c.push(p)}),c}function Pn(r,a,c,p,y){var b=-1,F=r.length;for(c||(c=uw),y||(y=[]);++b<F;){var z=r[b];a>0&&c(z)?a>1?Pn(z,a-1,c,p,y):ss(y,z):p||(y[y.length]=z)}return y}var zd=w0(),e0=w0(!0);function pr(r,a){return r&&zd(r,a,En)}function kd(r,a){return r&&e0(r,a,En)}function ju(r,a){return rs(a,function(c){return Lr(r[c])})}function Qs(r,a){a=cs(a,r);for(var c=0,p=a.length;r!=null&&c<p;)r=r[gr(a[c++])];return c&&c==p?r:n}function t0(r,a,c){var p=a(r);return rt(r)?p:ss(p,c(r))}function Xn(r){return r==null?r===n?pe:xt:js&&js in kt(r)?iw(r):gw(r)}function Hd(r,a){return r>a}function ET(r,a){return r!=null&&Lt.call(r,a)}function MT(r,a){return r!=null&&a in kt(r)}function TT(r,a,c){return r>=Fn(a,c)&&r<mn(a,c)}function Vd(r,a,c){for(var p=c?Td:Pu,y=r[0].length,b=r.length,F=b,z=ie(b),q=1/0,le=[];F--;){var ce=r[F];F&&a&&(ce=$t(ce,gi(a))),q=Fn(ce.length,q),z[F]=!c&&(a||y>=120&&ce.length>=120)?new Ks(F&&ce):n}ce=r[0];var _e=-1,Ae=z[0];e:for(;++_e<y&&le.length<q;){var ke=ce[_e],je=a?a(ke):ke;if(ke=c||ke!==0?ke:0,!(Ae?il(Ae,je):p(le,je,c))){for(F=b;--F;){var at=z[F];if(!(at?il(at,je):p(r[F],je,c)))continue e}Ae&&Ae.push(je),le.push(ke)}}return le}function wT(r,a,c,p){return pr(r,function(y,b,F){a(p,c(y),b,F)}),p}function fl(r,a,c){a=cs(a,r),r=V0(r,a);var p=r==null?r:r[gr(Ni(a))];return p==null?n:mi(p,r,c)}function n0(r){return nn(r)&&Xn(r)==xe}function AT(r){return nn(r)&&Xn(r)==ze}function RT(r){return nn(r)&&Xn(r)==Ze}function dl(r,a,c,p,y){return r===a?!0:r==null||a==null||!nn(r)&&!nn(a)?r!==r&&a!==a:CT(r,a,c,p,dl,y)}function CT(r,a,c,p,y,b){var F=rt(r),z=rt(a),q=F?Me:On(r),le=z?Me:On(a);q=q==xe?et:q,le=le==xe?et:le;var ce=q==et,_e=le==et,Ae=q==le;if(Ae&&ds(r)){if(!ds(a))return!1;F=!0,ce=!1}if(Ae&&!ce)return b||(b=new Qi),F||jo(r)?N0(r,a,c,p,y,b):tw(r,a,q,c,p,y,b);if(!(c&S)){var ke=ce&&Lt.call(r,"__wrapped__"),je=_e&&Lt.call(a,"__wrapped__");if(ke||je){var at=ke?r.value():r,$e=je?a.value():a;return b||(b=new Qi),y(at,$e,c,p,b)}}return Ae?(b||(b=new Qi),nw(r,a,c,p,y,b)):!1}function PT(r){return nn(r)&&On(r)==k}function Gd(r,a,c,p){var y=c.length,b=y,F=!p;if(r==null)return!b;for(r=kt(r);y--;){var z=c[y];if(F&&z[2]?z[1]!==r[z[0]]:!(z[0]in r))return!1}for(;++y<b;){z=c[y];var q=z[0],le=r[q],ce=z[1];if(F&&z[2]){if(le===n&&!(q in r))return!1}else{var _e=new Qi;if(p)var Ae=p(le,ce,q,r,a,_e);if(!(Ae===n?dl(ce,le,S|T,p,_e):Ae))return!1}}return!0}function i0(r){if(!Zt(r)||fw(r))return!1;var a=Lr(r)?P1:xd;return a.test(eo(r))}function bT(r){return nn(r)&&Xn(r)==He}function LT(r){return nn(r)&&On(r)==D}function DT(r){return nn(r)&&fc(r.length)&&!!Wt[Xn(r)]}function r0(r){return typeof r=="function"?r:r==null?ri:typeof r=="object"?rt(r)?a0(r[0],r[1]):o0(r):Av(r)}function Wd(r){if(!ml(r))return N1(r);var a=[];for(var c in kt(r))Lt.call(r,c)&&c!="constructor"&&a.push(c);return a}function IT(r){if(!Zt(r))return mw(r);var a=ml(r),c=[];for(var p in r)p=="constructor"&&(a||!Lt.call(r,p))||c.push(p);return c}function Xd(r,a){return r<a}function s0(r,a){var c=-1,p=ni(r)?ie(r.length):[];return ls(r,function(y,b,F){p[++c]=a(y,b,F)}),p}function o0(r){var a=oh(r);return a.length==1&&a[0][2]?k0(a[0][0],a[0][1]):function(c){return c===r||Gd(c,r,a)}}function a0(r,a){return lh(r)&&z0(a)?k0(gr(r),a):function(c){var p=vh(c,r);return p===n&&p===a?xh(c,r):dl(a,p,S|T)}}function $u(r,a,c,p,y){r!==a&&zd(a,function(b,F){if(y||(y=new Qi),Zt(b))UT(r,a,F,c,$u,p,y);else{var z=p?p(ch(r,F),b,F+"",r,a,y):n;z===n&&(z=b),Od(r,F,z)}},ii)}function UT(r,a,c,p,y,b,F){var z=ch(r,c),q=ch(a,c),le=F.get(q);if(le){Od(r,c,le);return}var ce=b?b(z,q,c+"",r,a,F):n,_e=ce===n;if(_e){var Ae=rt(q),ke=!Ae&&ds(q),je=!Ae&&!ke&&jo(q);ce=q,Ae||ke||je?rt(z)?ce=z:on(z)?ce=ti(z):ke?(_e=!1,ce=x0(q,!0)):je?(_e=!1,ce=y0(q,!0)):ce=[]:_l(q)||to(q)?(ce=z,to(z)?ce=gv(z):(!Zt(z)||Lr(z))&&(ce=B0(q))):_e=!1}_e&&(F.set(q,ce),y(ce,q,p,b,F),F.delete(q)),Od(r,c,ce)}function l0(r,a){var c=r.length;if(c)return a+=a<0?c:0,br(a,c)?r[a]:n}function u0(r,a,c){a.length?a=$t(a,function(b){return rt(b)?function(F){return Qs(F,b.length===1?b[0]:b)}:b}):a=[ri];var p=-1;a=$t(a,gi(qe()));var y=s0(r,function(b,F,z){var q=$t(a,function(le){return le(b)});return{criteria:q,index:++p,value:b}});return a1(y,function(b,F){return qT(b,F,c)})}function NT(r,a){return c0(r,a,function(c,p){return xh(r,p)})}function c0(r,a,c){for(var p=-1,y=a.length,b={};++p<y;){var F=a[p],z=Qs(r,F);c(z,F)&&hl(b,cs(F,r),z)}return b}function FT(r){return function(a){return Qs(a,r)}}function Yd(r,a,c,p){var y=p?o1:Oo,b=-1,F=a.length,z=r;for(r===a&&(a=ti(a)),c&&(z=$t(r,gi(c)));++b<F;)for(var q=0,le=a[b],ce=c?c(le):le;(q=y(z,ce,q,p))>-1;)z!==r&&zu.call(z,q,1),zu.call(r,q,1);return r}function f0(r,a){for(var c=r?a.length:0,p=c-1;c--;){var y=a[c];if(c==p||y!==b){var b=y;br(y)?zu.call(r,y,1):Kd(r,y)}}return r}function qd(r,a){return r+Vu(X_()*(a-r+1))}function OT(r,a,c,p){for(var y=-1,b=mn(Hu((a-r)/(c||1)),0),F=ie(b);b--;)F[p?b:++y]=r,r+=c;return F}function jd(r,a){var c="";if(!r||a<1||a>U)return c;do a%2&&(c+=r),a=Vu(a/2),a&&(r+=r);while(a);return c}function ct(r,a){return fh(H0(r,a,ri),r+"")}function BT(r){return j_($o(r))}function zT(r,a){var c=$o(r);return sc(c,Zs(a,0,c.length))}function hl(r,a,c,p){if(!Zt(r))return r;a=cs(a,r);for(var y=-1,b=a.length,F=b-1,z=r;z!=null&&++y<b;){var q=gr(a[y]),le=c;if(q==="__proto__"||q==="constructor"||q==="prototype")return r;if(y!=F){var ce=z[q];le=p?p(ce,q,z):n,le===n&&(le=Zt(ce)?ce:br(a[y+1])?[]:{})}ul(z,q,le),z=z[q]}return r}var d0=Gu?function(r,a){return Gu.set(r,a),r}:ri,kT=ku?function(r,a){return ku(r,"toString",{configurable:!0,enumerable:!1,value:Sh(a),writable:!0})}:ri;function HT(r){return sc($o(r))}function Ui(r,a,c){var p=-1,y=r.length;a<0&&(a=-a>y?0:y+a),c=c>y?y:c,c<0&&(c+=y),y=a>c?0:c-a>>>0,a>>>=0;for(var b=ie(y);++p<y;)b[p]=r[p+a];return b}function VT(r,a){var c;return ls(r,function(p,y,b){return c=a(p,y,b),!c}),!!c}function Ku(r,a,c){var p=0,y=r==null?p:r.length;if(typeof a=="number"&&a===a&&y<=vt){for(;p<y;){var b=p+y>>>1,F=r[b];F!==null&&!vi(F)&&(c?F<=a:F<a)?p=b+1:y=b}return y}return $d(r,a,ri,c)}function $d(r,a,c,p){var y=0,b=r==null?0:r.length;if(b===0)return 0;a=c(a);for(var F=a!==a,z=a===null,q=vi(a),le=a===n;y<b;){var ce=Vu((y+b)/2),_e=c(r[ce]),Ae=_e!==n,ke=_e===null,je=_e===_e,at=vi(_e);if(F)var $e=p||je;else le?$e=je&&(p||Ae):z?$e=je&&Ae&&(p||!ke):q?$e=je&&Ae&&!ke&&(p||!at):ke||at?$e=!1:$e=p?_e<=a:_e<a;$e?y=ce+1:b=ce}return Fn(b,de)}function h0(r,a){for(var c=-1,p=r.length,y=0,b=[];++c<p;){var F=r[c],z=a?a(F):F;if(!c||!Ji(z,q)){var q=z;b[y++]=F===0?0:F}}return b}function p0(r){return typeof r=="number"?r:vi(r)?V:+r}function _i(r){if(typeof r=="string")return r;if(rt(r))return $t(r,_i)+"";if(vi(r))return Y_?Y_.call(r):"";var a=r+"";return a=="0"&&1/r==-j?"-0":a}function us(r,a,c){var p=-1,y=Pu,b=r.length,F=!0,z=[],q=z;if(c)F=!1,y=Td;else if(b>=s){var le=a?null:JT(r);if(le)return Lu(le);F=!1,y=il,q=new Ks}else q=a?[]:z;e:for(;++p<b;){var ce=r[p],_e=a?a(ce):ce;if(ce=c||ce!==0?ce:0,F&&_e===_e){for(var Ae=q.length;Ae--;)if(q[Ae]===_e)continue e;a&&q.push(_e),z.push(ce)}else y(q,_e,c)||(q!==z&&q.push(_e),z.push(ce))}return z}function Kd(r,a){return a=cs(a,r),r=V0(r,a),r==null||delete r[gr(Ni(a))]}function m0(r,a,c,p){return hl(r,a,c(Qs(r,a)),p)}function Zu(r,a,c,p){for(var y=r.length,b=p?y:-1;(p?b--:++b<y)&&a(r[b],b,r););return c?Ui(r,p?0:b,p?b+1:y):Ui(r,p?b+1:0,p?y:b)}function g0(r,a){var c=r;return c instanceof yt&&(c=c.value()),wd(a,function(p,y){return y.func.apply(y.thisArg,ss([p],y.args))},c)}function Zd(r,a,c){var p=r.length;if(p<2)return p?us(r[0]):[];for(var y=-1,b=ie(p);++y<p;)for(var F=r[y],z=-1;++z<p;)z!=y&&(b[y]=cl(b[y]||F,r[z],a,c));return us(Pn(b,1),a,c)}function _0(r,a,c){for(var p=-1,y=r.length,b=a.length,F={};++p<y;){var z=p<b?a[p]:n;c(F,r[p],z)}return F}function Qd(r){return on(r)?r:[]}function Jd(r){return typeof r=="function"?r:ri}function cs(r,a){return rt(r)?r:lh(r,a)?[r]:Y0(bt(r))}var GT=ct;function fs(r,a,c){var p=r.length;return c=c===n?p:c,!a&&c>=p?r:Ui(r,a,c)}var v0=b1||function(r){return Cn.clearTimeout(r)};function x0(r,a){if(a)return r.slice();var c=r.length,p=k_?k_(c):new r.constructor(c);return r.copy(p),p}function eh(r){var a=new r.constructor(r.byteLength);return new Ou(a).set(new Ou(r)),a}function WT(r,a){var c=a?eh(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function XT(r){var a=new r.constructor(r.source,Cu.exec(r));return a.lastIndex=r.lastIndex,a}function YT(r){return ll?kt(ll.call(r)):{}}function y0(r,a){var c=a?eh(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function S0(r,a){if(r!==a){var c=r!==n,p=r===null,y=r===r,b=vi(r),F=a!==n,z=a===null,q=a===a,le=vi(a);if(!z&&!le&&!b&&r>a||b&&F&&q&&!z&&!le||p&&F&&q||!c&&q||!y)return 1;if(!p&&!b&&!le&&r<a||le&&c&&y&&!p&&!b||z&&c&&y||!F&&y||!q)return-1}return 0}function qT(r,a,c){for(var p=-1,y=r.criteria,b=a.criteria,F=y.length,z=c.length;++p<F;){var q=S0(y[p],b[p]);if(q){if(p>=z)return q;var le=c[p];return q*(le=="desc"?-1:1)}}return r.index-a.index}function E0(r,a,c,p){for(var y=-1,b=r.length,F=c.length,z=-1,q=a.length,le=mn(b-F,0),ce=ie(q+le),_e=!p;++z<q;)ce[z]=a[z];for(;++y<F;)(_e||y<b)&&(ce[c[y]]=r[y]);for(;le--;)ce[z++]=r[y++];return ce}function M0(r,a,c,p){for(var y=-1,b=r.length,F=-1,z=c.length,q=-1,le=a.length,ce=mn(b-z,0),_e=ie(ce+le),Ae=!p;++y<ce;)_e[y]=r[y];for(var ke=y;++q<le;)_e[ke+q]=a[q];for(;++F<z;)(Ae||y<b)&&(_e[ke+c[F]]=r[y++]);return _e}function ti(r,a){var c=-1,p=r.length;for(a||(a=ie(p));++c<p;)a[c]=r[c];return a}function mr(r,a,c,p){var y=!c;c||(c={});for(var b=-1,F=a.length;++b<F;){var z=a[b],q=p?p(c[z],r[z],z,c,r):n;q===n&&(q=r[z]),y?Rr(c,z,q):ul(c,z,q)}return c}function jT(r,a){return mr(r,ah(r),a)}function $T(r,a){return mr(r,F0(r),a)}function Qu(r,a){return function(c,p){var y=rt(c)?e1:_T,b=a?a():{};return y(c,r,qe(p,2),b)}}function Xo(r){return ct(function(a,c){var p=-1,y=c.length,b=y>1?c[y-1]:n,F=y>2?c[2]:n;for(b=r.length>3&&typeof b=="function"?(y--,b):n,F&&Yn(c[0],c[1],F)&&(b=y<3?n:b,y=1),a=kt(a);++p<y;){var z=c[p];z&&r(a,z,p,b)}return a})}function T0(r,a){return function(c,p){if(c==null)return c;if(!ni(c))return r(c,p);for(var y=c.length,b=a?y:-1,F=kt(c);(a?b--:++b<y)&&p(F[b],b,F)!==!1;);return c}}function w0(r){return function(a,c,p){for(var y=-1,b=kt(a),F=p(a),z=F.length;z--;){var q=F[r?z:++y];if(c(b[q],q,b)===!1)break}return a}}function KT(r,a,c){var p=a&x,y=pl(r);function b(){var F=this&&this!==Cn&&this instanceof b?y:r;return F.apply(p?c:this,arguments)}return b}function A0(r){return function(a){a=bt(a);var c=Bo(a)?Zi(a):n,p=c?c[0]:a.charAt(0),y=c?fs(c,1).join(""):a.slice(1);return p[r]()+y}}function Yo(r){return function(a){return wd(Tv(Mv(a).replace(kM,"")),r,"")}}function pl(r){return function(){var a=arguments;switch(a.length){case 0:return new r;case 1:return new r(a[0]);case 2:return new r(a[0],a[1]);case 3:return new r(a[0],a[1],a[2]);case 4:return new r(a[0],a[1],a[2],a[3]);case 5:return new r(a[0],a[1],a[2],a[3],a[4]);case 6:return new r(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new r(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var c=Wo(r.prototype),p=r.apply(c,a);return Zt(p)?p:c}}function ZT(r,a,c){var p=pl(r);function y(){for(var b=arguments.length,F=ie(b),z=b,q=qo(y);z--;)F[z]=arguments[z];var le=b<3&&F[0]!==q&&F[b-1]!==q?[]:os(F,q);if(b-=le.length,b<c)return L0(r,a,Ju,y.placeholder,n,F,le,n,n,c-b);var ce=this&&this!==Cn&&this instanceof y?p:r;return mi(ce,this,F)}return y}function R0(r){return function(a,c,p){var y=kt(a);if(!ni(a)){var b=qe(c,3);a=En(a),c=function(z){return b(y[z],z,y)}}var F=r(a,c,p);return F>-1?y[b?a[F]:F]:n}}function C0(r){return Pr(function(a){var c=a.length,p=c,y=Di.prototype.thru;for(r&&a.reverse();p--;){var b=a[p];if(typeof b!="function")throw new Li(l);if(y&&!F&&ic(b)=="wrapper")var F=new Di([],!0)}for(p=F?p:c;++p<c;){b=a[p];var z=ic(b),q=z=="wrapper"?sh(b):n;q&&uh(q[0])&&q[1]==(I|M|O|B)&&!q[4].length&&q[9]==1?F=F[ic(q[0])].apply(F,q[3]):F=b.length==1&&uh(b)?F[z]():F.thru(b)}return function(){var le=arguments,ce=le[0];if(F&&le.length==1&&rt(ce))return F.plant(ce).value();for(var _e=0,Ae=c?a[_e].apply(this,le):ce;++_e<c;)Ae=a[_e].call(this,Ae);return Ae}})}function Ju(r,a,c,p,y,b,F,z,q,le){var ce=a&I,_e=a&x,Ae=a&h,ke=a&(M|w),je=a&L,at=Ae?n:pl(r);function $e(){for(var gt=arguments.length,Mt=ie(gt),xi=gt;xi--;)Mt[xi]=arguments[xi];if(ke)var qn=qo($e),yi=u1(Mt,qn);if(p&&(Mt=E0(Mt,p,y,ke)),b&&(Mt=M0(Mt,b,F,ke)),gt-=yi,ke&&gt<le){var an=os(Mt,qn);return L0(r,a,Ju,$e.placeholder,c,Mt,an,z,q,le-gt)}var er=_e?c:this,Ir=Ae?er[r]:r;return gt=Mt.length,z?Mt=_w(Mt,z):je&&gt>1&&Mt.reverse(),ce&&q<gt&&(Mt.length=q),this&&this!==Cn&&this instanceof $e&&(Ir=at||pl(Ir)),Ir.apply(er,Mt)}return $e}function P0(r,a){return function(c,p){return wT(c,r,a(p),{})}}function ec(r,a){return function(c,p){var y;if(c===n&&p===n)return a;if(c!==n&&(y=c),p!==n){if(y===n)return p;typeof c=="string"||typeof p=="string"?(c=_i(c),p=_i(p)):(c=p0(c),p=p0(p)),y=r(c,p)}return y}}function th(r){return Pr(function(a){return a=$t(a,gi(qe())),ct(function(c){var p=this;return r(a,function(y){return mi(y,p,c)})})})}function tc(r,a){a=a===n?" ":_i(a);var c=a.length;if(c<2)return c?jd(a,r):a;var p=jd(a,Hu(r/zo(a)));return Bo(a)?fs(Zi(p),0,r).join(""):p.slice(0,r)}function QT(r,a,c,p){var y=a&x,b=pl(r);function F(){for(var z=-1,q=arguments.length,le=-1,ce=p.length,_e=ie(ce+q),Ae=this&&this!==Cn&&this instanceof F?b:r;++le<ce;)_e[le]=p[le];for(;q--;)_e[le++]=arguments[++z];return mi(Ae,y?c:this,_e)}return F}function b0(r){return function(a,c,p){return p&&typeof p!="number"&&Yn(a,c,p)&&(c=p=n),a=Dr(a),c===n?(c=a,a=0):c=Dr(c),p=p===n?a<c?1:-1:Dr(p),OT(a,c,p,r)}}function nc(r){return function(a,c){return typeof a=="string"&&typeof c=="string"||(a=Fi(a),c=Fi(c)),r(a,c)}}function L0(r,a,c,p,y,b,F,z,q,le){var ce=a&M,_e=ce?F:n,Ae=ce?n:F,ke=ce?b:n,je=ce?n:b;a|=ce?O:N,a&=~(ce?N:O),a&E||(a&=~(x|h));var at=[r,a,y,ke,_e,je,Ae,z,q,le],$e=c.apply(n,at);return uh(r)&&G0($e,at),$e.placeholder=p,W0($e,r,a)}function nh(r){var a=pn[r];return function(c,p){if(c=Fi(c),p=p==null?0:Fn(st(p),292),p&&W_(c)){var y=(bt(c)+"e").split("e"),b=a(y[0]+"e"+(+y[1]+p));return y=(bt(b)+"e").split("e"),+(y[0]+"e"+(+y[1]-p))}return a(c)}}var JT=Vo&&1/Lu(new Vo([,-0]))[1]==j?function(r){return new Vo(r)}:Th;function D0(r){return function(a){var c=On(a);return c==k?Dd(a):c==D?g1(a):l1(a,r(a))}}function Cr(r,a,c,p,y,b,F,z){var q=a&h;if(!q&&typeof r!="function")throw new Li(l);var le=p?p.length:0;if(le||(a&=~(O|N),p=y=n),F=F===n?F:mn(st(F),0),z=z===n?z:st(z),le-=y?y.length:0,a&N){var ce=p,_e=y;p=y=n}var Ae=q?n:sh(r),ke=[r,a,c,p,y,ce,_e,b,F,z];if(Ae&&pw(ke,Ae),r=ke[0],a=ke[1],c=ke[2],p=ke[3],y=ke[4],z=ke[9]=ke[9]===n?q?0:r.length:mn(ke[9]-le,0),!z&&a&(M|w)&&(a&=~(M|w)),!a||a==x)var je=KT(r,a,c);else a==M||a==w?je=ZT(r,a,z):(a==O||a==(x|O))&&!y.length?je=QT(r,a,c,p):je=Ju.apply(n,ke);var at=Ae?d0:G0;return W0(at(je,ke),r,a)}function I0(r,a,c,p){return r===n||Ji(r,Ho[c])&&!Lt.call(p,c)?a:r}function U0(r,a,c,p,y,b){return Zt(r)&&Zt(a)&&(b.set(a,r),$u(r,a,n,U0,b),b.delete(a)),r}function ew(r){return _l(r)?n:r}function N0(r,a,c,p,y,b){var F=c&S,z=r.length,q=a.length;if(z!=q&&!(F&&q>z))return!1;var le=b.get(r),ce=b.get(a);if(le&&ce)return le==a&&ce==r;var _e=-1,Ae=!0,ke=c&T?new Ks:n;for(b.set(r,a),b.set(a,r);++_e<z;){var je=r[_e],at=a[_e];if(p)var $e=F?p(at,je,_e,a,r,b):p(je,at,_e,r,a,b);if($e!==n){if($e)continue;Ae=!1;break}if(ke){if(!Ad(a,function(gt,Mt){if(!il(ke,Mt)&&(je===gt||y(je,gt,c,p,b)))return ke.push(Mt)})){Ae=!1;break}}else if(!(je===at||y(je,at,c,p,b))){Ae=!1;break}}return b.delete(r),b.delete(a),Ae}function tw(r,a,c,p,y,b,F){switch(c){case we:if(r.byteLength!=a.byteLength||r.byteOffset!=a.byteOffset)return!1;r=r.buffer,a=a.buffer;case ze:return!(r.byteLength!=a.byteLength||!b(new Ou(r),new Ou(a)));case Xe:case Ze:case Sn:return Ji(+r,+a);case Ut:return r.name==a.name&&r.message==a.message;case He:case A:return r==a+"";case k:var z=Dd;case D:var q=p&S;if(z||(z=Lu),r.size!=a.size&&!q)return!1;var le=F.get(r);if(le)return le==a;p|=T,F.set(r,a);var ce=N0(z(r),z(a),p,y,b,F);return F.delete(r),ce;case Z:if(ll)return ll.call(r)==ll.call(a)}return!1}function nw(r,a,c,p,y,b){var F=c&S,z=ih(r),q=z.length,le=ih(a),ce=le.length;if(q!=ce&&!F)return!1;for(var _e=q;_e--;){var Ae=z[_e];if(!(F?Ae in a:Lt.call(a,Ae)))return!1}var ke=b.get(r),je=b.get(a);if(ke&&je)return ke==a&&je==r;var at=!0;b.set(r,a),b.set(a,r);for(var $e=F;++_e<q;){Ae=z[_e];var gt=r[Ae],Mt=a[Ae];if(p)var xi=F?p(Mt,gt,Ae,a,r,b):p(gt,Mt,Ae,r,a,b);if(!(xi===n?gt===Mt||y(gt,Mt,c,p,b):xi)){at=!1;break}$e||($e=Ae=="constructor")}if(at&&!$e){var qn=r.constructor,yi=a.constructor;qn!=yi&&"constructor"in r&&"constructor"in a&&!(typeof qn=="function"&&qn instanceof qn&&typeof yi=="function"&&yi instanceof yi)&&(at=!1)}return b.delete(r),b.delete(a),at}function Pr(r){return fh(H0(r,n,K0),r+"")}function ih(r){return t0(r,En,ah)}function rh(r){return t0(r,ii,F0)}var sh=Gu?function(r){return Gu.get(r)}:Th;function ic(r){for(var a=r.name+"",c=Go[a],p=Lt.call(Go,a)?c.length:0;p--;){var y=c[p],b=y.func;if(b==null||b==r)return y.name}return a}function qo(r){var a=Lt.call(R,"placeholder")?R:r;return a.placeholder}function qe(){var r=R.iteratee||Eh;return r=r===Eh?r0:r,arguments.length?r(arguments[0],arguments[1]):r}function rc(r,a){var c=r.__data__;return cw(a)?c[typeof a=="string"?"string":"hash"]:c.map}function oh(r){for(var a=En(r),c=a.length;c--;){var p=a[c],y=r[p];a[c]=[p,y,z0(y)]}return a}function Js(r,a){var c=h1(r,a);return i0(c)?c:n}function iw(r){var a=Lt.call(r,js),c=r[js];try{r[js]=n;var p=!0}catch{}var y=Nu.call(r);return p&&(a?r[js]=c:delete r[js]),y}var ah=Ud?function(r){return r==null?[]:(r=kt(r),rs(Ud(r),function(a){return V_.call(r,a)}))}:wh,F0=Ud?function(r){for(var a=[];r;)ss(a,ah(r)),r=Bu(r);return a}:wh,On=Xn;(Nd&&On(new Nd(new ArrayBuffer(1)))!=we||sl&&On(new sl)!=k||Fd&&On(Fd.resolve())!=Ve||Vo&&On(new Vo)!=D||ol&&On(new ol)!=ge)&&(On=function(r){var a=Xn(r),c=a==et?r.constructor:n,p=c?eo(c):"";if(p)switch(p){case z1:return we;case k1:return k;case H1:return Ve;case V1:return D;case G1:return ge}return a});function rw(r,a,c){for(var p=-1,y=c.length;++p<y;){var b=c[p],F=b.size;switch(b.type){case"drop":r+=F;break;case"dropRight":a-=F;break;case"take":a=Fn(a,r+F);break;case"takeRight":r=mn(r,a-F);break}}return{start:r,end:a}}function sw(r){var a=r.match(Tu);return a?a[1].split(Uo):[]}function O0(r,a,c){a=cs(a,r);for(var p=-1,y=a.length,b=!1;++p<y;){var F=gr(a[p]);if(!(b=r!=null&&c(r,F)))break;r=r[F]}return b||++p!=y?b:(y=r==null?0:r.length,!!y&&fc(y)&&br(F,y)&&(rt(r)||to(r)))}function ow(r){var a=r.length,c=new r.constructor(a);return a&&typeof r[0]=="string"&&Lt.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function B0(r){return typeof r.constructor=="function"&&!ml(r)?Wo(Bu(r)):{}}function aw(r,a,c){var p=r.constructor;switch(a){case ze:return eh(r);case Xe:case Ze:return new p(+r);case we:return WT(r,c);case De:case mt:case Ee:case Ie:case Ye:case Ke:case Ue:case dt:case tt:return y0(r,c);case k:return new p;case Sn:case A:return new p(r);case He:return XT(r);case D:return new p;case Z:return YT(r)}}function lw(r,a){var c=a.length;if(!c)return r;var p=c-1;return a[p]=(c>1?"& ":"")+a[p],a=a.join(c>2?", ":" "),r.replace(Mu,`{
/* [wrapped with `+a+`] */
`)}function uw(r){return rt(r)||to(r)||!!(G_&&r&&r[G_])}function br(r,a){var c=typeof r;return a=a??U,!!a&&(c=="number"||c!="symbol"&&P.test(r))&&r>-1&&r%1==0&&r<a}function Yn(r,a,c){if(!Zt(c))return!1;var p=typeof a;return(p=="number"?ni(c)&&br(a,c.length):p=="string"&&a in c)?Ji(c[a],r):!1}function lh(r,a){if(rt(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||vi(r)?!0:pi.test(r)||!Ct.test(r)||a!=null&&r in kt(a)}function cw(r){var a=typeof r;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?r!=="__proto__":r===null}function uh(r){var a=ic(r),c=R[a];if(typeof c!="function"||!(a in yt.prototype))return!1;if(r===c)return!0;var p=sh(c);return!!p&&r===p[0]}function fw(r){return!!z_&&z_ in r}var dw=Iu?Lr:Ah;function ml(r){var a=r&&r.constructor,c=typeof a=="function"&&a.prototype||Ho;return r===c}function z0(r){return r===r&&!Zt(r)}function k0(r,a){return function(c){return c==null?!1:c[r]===a&&(a!==n||r in kt(c))}}function hw(r){var a=uc(r,function(p){return c.size===d&&c.clear(),p}),c=a.cache;return a}function pw(r,a){var c=r[1],p=a[1],y=c|p,b=y<(x|h|I),F=p==I&&c==M||p==I&&c==B&&r[7].length<=a[8]||p==(I|B)&&a[7].length<=a[8]&&c==M;if(!(b||F))return r;p&x&&(r[2]=a[2],y|=c&x?0:E);var z=a[3];if(z){var q=r[3];r[3]=q?E0(q,z,a[4]):z,r[4]=q?os(r[3],m):a[4]}return z=a[5],z&&(q=r[5],r[5]=q?M0(q,z,a[6]):z,r[6]=q?os(r[5],m):a[6]),z=a[7],z&&(r[7]=z),p&I&&(r[8]=r[8]==null?a[8]:Fn(r[8],a[8])),r[9]==null&&(r[9]=a[9]),r[0]=a[0],r[1]=y,r}function mw(r){var a=[];if(r!=null)for(var c in kt(r))a.push(c);return a}function gw(r){return Nu.call(r)}function H0(r,a,c){return a=mn(a===n?r.length-1:a,0),function(){for(var p=arguments,y=-1,b=mn(p.length-a,0),F=ie(b);++y<b;)F[y]=p[a+y];y=-1;for(var z=ie(a+1);++y<a;)z[y]=p[y];return z[a]=c(F),mi(r,this,z)}}function V0(r,a){return a.length<2?r:Qs(r,Ui(a,0,-1))}function _w(r,a){for(var c=r.length,p=Fn(a.length,c),y=ti(r);p--;){var b=a[p];r[p]=br(b,c)?y[b]:n}return r}function ch(r,a){if(!(a==="constructor"&&typeof r[a]=="function")&&a!="__proto__")return r[a]}var G0=X0(d0),gl=D1||function(r,a){return Cn.setTimeout(r,a)},fh=X0(kT);function W0(r,a,c){var p=a+"";return fh(r,lw(p,vw(sw(p),c)))}function X0(r){var a=0,c=0;return function(){var p=F1(),y=$-(p-c);if(c=p,y>0){if(++a>=ae)return arguments[0]}else a=0;return r.apply(n,arguments)}}function sc(r,a){var c=-1,p=r.length,y=p-1;for(a=a===n?p:a;++c<a;){var b=qd(c,y),F=r[b];r[b]=r[c],r[c]=F}return r.length=a,r}var Y0=hw(function(r){var a=[];return r.charCodeAt(0)===46&&a.push(""),r.replace(qi,function(c,p,y,b){a.push(y?b.replace(Au,"$1"):p||c)}),a});function gr(r){if(typeof r=="string"||vi(r))return r;var a=r+"";return a=="0"&&1/r==-j?"-0":a}function eo(r){if(r!=null){try{return Uu.call(r)}catch{}try{return r+""}catch{}}return""}function vw(r,a){return bi(re,function(c){var p="_."+c[0];a&c[1]&&!Pu(r,p)&&r.push(p)}),r.sort()}function q0(r){if(r instanceof yt)return r.clone();var a=new Di(r.__wrapped__,r.__chain__);return a.__actions__=ti(r.__actions__),a.__index__=r.__index__,a.__values__=r.__values__,a}function xw(r,a,c){(c?Yn(r,a,c):a===n)?a=1:a=mn(st(a),0);var p=r==null?0:r.length;if(!p||a<1)return[];for(var y=0,b=0,F=ie(Hu(p/a));y<p;)F[b++]=Ui(r,y,y+=a);return F}function yw(r){for(var a=-1,c=r==null?0:r.length,p=0,y=[];++a<c;){var b=r[a];b&&(y[p++]=b)}return y}function Sw(){var r=arguments.length;if(!r)return[];for(var a=ie(r-1),c=arguments[0],p=r;p--;)a[p-1]=arguments[p];return ss(rt(c)?ti(c):[c],Pn(a,1))}var Ew=ct(function(r,a){return on(r)?cl(r,Pn(a,1,on,!0)):[]}),Mw=ct(function(r,a){var c=Ni(a);return on(c)&&(c=n),on(r)?cl(r,Pn(a,1,on,!0),qe(c,2)):[]}),Tw=ct(function(r,a){var c=Ni(a);return on(c)&&(c=n),on(r)?cl(r,Pn(a,1,on,!0),n,c):[]});function ww(r,a,c){var p=r==null?0:r.length;return p?(a=c||a===n?1:st(a),Ui(r,a<0?0:a,p)):[]}function Aw(r,a,c){var p=r==null?0:r.length;return p?(a=c||a===n?1:st(a),a=p-a,Ui(r,0,a<0?0:a)):[]}function Rw(r,a){return r&&r.length?Zu(r,qe(a,3),!0,!0):[]}function Cw(r,a){return r&&r.length?Zu(r,qe(a,3),!0):[]}function Pw(r,a,c,p){var y=r==null?0:r.length;return y?(c&&typeof c!="number"&&Yn(r,a,c)&&(c=0,p=y),ST(r,a,c,p)):[]}function j0(r,a,c){var p=r==null?0:r.length;if(!p)return-1;var y=c==null?0:st(c);return y<0&&(y=mn(p+y,0)),bu(r,qe(a,3),y)}function $0(r,a,c){var p=r==null?0:r.length;if(!p)return-1;var y=p-1;return c!==n&&(y=st(c),y=c<0?mn(p+y,0):Fn(y,p-1)),bu(r,qe(a,3),y,!0)}function K0(r){var a=r==null?0:r.length;return a?Pn(r,1):[]}function bw(r){var a=r==null?0:r.length;return a?Pn(r,j):[]}function Lw(r,a){var c=r==null?0:r.length;return c?(a=a===n?1:st(a),Pn(r,a)):[]}function Dw(r){for(var a=-1,c=r==null?0:r.length,p={};++a<c;){var y=r[a];p[y[0]]=y[1]}return p}function Z0(r){return r&&r.length?r[0]:n}function Iw(r,a,c){var p=r==null?0:r.length;if(!p)return-1;var y=c==null?0:st(c);return y<0&&(y=mn(p+y,0)),Oo(r,a,y)}function Uw(r){var a=r==null?0:r.length;return a?Ui(r,0,-1):[]}var Nw=ct(function(r){var a=$t(r,Qd);return a.length&&a[0]===r[0]?Vd(a):[]}),Fw=ct(function(r){var a=Ni(r),c=$t(r,Qd);return a===Ni(c)?a=n:c.pop(),c.length&&c[0]===r[0]?Vd(c,qe(a,2)):[]}),Ow=ct(function(r){var a=Ni(r),c=$t(r,Qd);return a=typeof a=="function"?a:n,a&&c.pop(),c.length&&c[0]===r[0]?Vd(c,n,a):[]});function Bw(r,a){return r==null?"":U1.call(r,a)}function Ni(r){var a=r==null?0:r.length;return a?r[a-1]:n}function zw(r,a,c){var p=r==null?0:r.length;if(!p)return-1;var y=p;return c!==n&&(y=st(c),y=y<0?mn(p+y,0):Fn(y,p-1)),a===a?v1(r,a,y):bu(r,L_,y,!0)}function kw(r,a){return r&&r.length?l0(r,st(a)):n}var Hw=ct(Q0);function Q0(r,a){return r&&r.length&&a&&a.length?Yd(r,a):r}function Vw(r,a,c){return r&&r.length&&a&&a.length?Yd(r,a,qe(c,2)):r}function Gw(r,a,c){return r&&r.length&&a&&a.length?Yd(r,a,n,c):r}var Ww=Pr(function(r,a){var c=r==null?0:r.length,p=Bd(r,a);return f0(r,$t(a,function(y){return br(y,c)?+y:y}).sort(S0)),p});function Xw(r,a){var c=[];if(!(r&&r.length))return c;var p=-1,y=[],b=r.length;for(a=qe(a,3);++p<b;){var F=r[p];a(F,p,r)&&(c.push(F),y.push(p))}return f0(r,y),c}function dh(r){return r==null?r:B1.call(r)}function Yw(r,a,c){var p=r==null?0:r.length;return p?(c&&typeof c!="number"&&Yn(r,a,c)?(a=0,c=p):(a=a==null?0:st(a),c=c===n?p:st(c)),Ui(r,a,c)):[]}function qw(r,a){return Ku(r,a)}function jw(r,a,c){return $d(r,a,qe(c,2))}function $w(r,a){var c=r==null?0:r.length;if(c){var p=Ku(r,a);if(p<c&&Ji(r[p],a))return p}return-1}function Kw(r,a){return Ku(r,a,!0)}function Zw(r,a,c){return $d(r,a,qe(c,2),!0)}function Qw(r,a){var c=r==null?0:r.length;if(c){var p=Ku(r,a,!0)-1;if(Ji(r[p],a))return p}return-1}function Jw(r){return r&&r.length?h0(r):[]}function eA(r,a){return r&&r.length?h0(r,qe(a,2)):[]}function tA(r){var a=r==null?0:r.length;return a?Ui(r,1,a):[]}function nA(r,a,c){return r&&r.length?(a=c||a===n?1:st(a),Ui(r,0,a<0?0:a)):[]}function iA(r,a,c){var p=r==null?0:r.length;return p?(a=c||a===n?1:st(a),a=p-a,Ui(r,a<0?0:a,p)):[]}function rA(r,a){return r&&r.length?Zu(r,qe(a,3),!1,!0):[]}function sA(r,a){return r&&r.length?Zu(r,qe(a,3)):[]}var oA=ct(function(r){return us(Pn(r,1,on,!0))}),aA=ct(function(r){var a=Ni(r);return on(a)&&(a=n),us(Pn(r,1,on,!0),qe(a,2))}),lA=ct(function(r){var a=Ni(r);return a=typeof a=="function"?a:n,us(Pn(r,1,on,!0),n,a)});function uA(r){return r&&r.length?us(r):[]}function cA(r,a){return r&&r.length?us(r,qe(a,2)):[]}function fA(r,a){return a=typeof a=="function"?a:n,r&&r.length?us(r,n,a):[]}function hh(r){if(!(r&&r.length))return[];var a=0;return r=rs(r,function(c){if(on(c))return a=mn(c.length,a),!0}),bd(a,function(c){return $t(r,Rd(c))})}function J0(r,a){if(!(r&&r.length))return[];var c=hh(r);return a==null?c:$t(c,function(p){return mi(a,n,p)})}var dA=ct(function(r,a){return on(r)?cl(r,a):[]}),hA=ct(function(r){return Zd(rs(r,on))}),pA=ct(function(r){var a=Ni(r);return on(a)&&(a=n),Zd(rs(r,on),qe(a,2))}),mA=ct(function(r){var a=Ni(r);return a=typeof a=="function"?a:n,Zd(rs(r,on),n,a)}),gA=ct(hh);function _A(r,a){return _0(r||[],a||[],ul)}function vA(r,a){return _0(r||[],a||[],hl)}var xA=ct(function(r){var a=r.length,c=a>1?r[a-1]:n;return c=typeof c=="function"?(r.pop(),c):n,J0(r,c)});function ev(r){var a=R(r);return a.__chain__=!0,a}function yA(r,a){return a(r),r}function oc(r,a){return a(r)}var SA=Pr(function(r){var a=r.length,c=a?r[0]:0,p=this.__wrapped__,y=function(b){return Bd(b,r)};return a>1||this.__actions__.length||!(p instanceof yt)||!br(c)?this.thru(y):(p=p.slice(c,+c+(a?1:0)),p.__actions__.push({func:oc,args:[y],thisArg:n}),new Di(p,this.__chain__).thru(function(b){return a&&!b.length&&b.push(n),b}))});function EA(){return ev(this)}function MA(){return new Di(this.value(),this.__chain__)}function TA(){this.__values__===n&&(this.__values__=pv(this.value()));var r=this.__index__>=this.__values__.length,a=r?n:this.__values__[this.__index__++];return{done:r,value:a}}function wA(){return this}function AA(r){for(var a,c=this;c instanceof Xu;){var p=q0(c);p.__index__=0,p.__values__=n,a?y.__wrapped__=p:a=p;var y=p;c=c.__wrapped__}return y.__wrapped__=r,a}function RA(){var r=this.__wrapped__;if(r instanceof yt){var a=r;return this.__actions__.length&&(a=new yt(this)),a=a.reverse(),a.__actions__.push({func:oc,args:[dh],thisArg:n}),new Di(a,this.__chain__)}return this.thru(dh)}function CA(){return g0(this.__wrapped__,this.__actions__)}var PA=Qu(function(r,a,c){Lt.call(r,c)?++r[c]:Rr(r,c,1)});function bA(r,a,c){var p=rt(r)?P_:yT;return c&&Yn(r,a,c)&&(a=n),p(r,qe(a,3))}function LA(r,a){var c=rt(r)?rs:J_;return c(r,qe(a,3))}var DA=R0(j0),IA=R0($0);function UA(r,a){return Pn(ac(r,a),1)}function NA(r,a){return Pn(ac(r,a),j)}function FA(r,a,c){return c=c===n?1:st(c),Pn(ac(r,a),c)}function tv(r,a){var c=rt(r)?bi:ls;return c(r,qe(a,3))}function nv(r,a){var c=rt(r)?t1:Q_;return c(r,qe(a,3))}var OA=Qu(function(r,a,c){Lt.call(r,c)?r[c].push(a):Rr(r,c,[a])});function BA(r,a,c,p){r=ni(r)?r:$o(r),c=c&&!p?st(c):0;var y=r.length;return c<0&&(c=mn(y+c,0)),dc(r)?c<=y&&r.indexOf(a,c)>-1:!!y&&Oo(r,a,c)>-1}var zA=ct(function(r,a,c){var p=-1,y=typeof a=="function",b=ni(r)?ie(r.length):[];return ls(r,function(F){b[++p]=y?mi(a,F,c):fl(F,a,c)}),b}),kA=Qu(function(r,a,c){Rr(r,c,a)});function ac(r,a){var c=rt(r)?$t:s0;return c(r,qe(a,3))}function HA(r,a,c,p){return r==null?[]:(rt(a)||(a=a==null?[]:[a]),c=p?n:c,rt(c)||(c=c==null?[]:[c]),u0(r,a,c))}var VA=Qu(function(r,a,c){r[c?0:1].push(a)},function(){return[[],[]]});function GA(r,a,c){var p=rt(r)?wd:I_,y=arguments.length<3;return p(r,qe(a,4),c,y,ls)}function WA(r,a,c){var p=rt(r)?n1:I_,y=arguments.length<3;return p(r,qe(a,4),c,y,Q_)}function XA(r,a){var c=rt(r)?rs:J_;return c(r,cc(qe(a,3)))}function YA(r){var a=rt(r)?j_:BT;return a(r)}function qA(r,a,c){(c?Yn(r,a,c):a===n)?a=1:a=st(a);var p=rt(r)?mT:zT;return p(r,a)}function jA(r){var a=rt(r)?gT:HT;return a(r)}function $A(r){if(r==null)return 0;if(ni(r))return dc(r)?zo(r):r.length;var a=On(r);return a==k||a==D?r.size:Wd(r).length}function KA(r,a,c){var p=rt(r)?Ad:VT;return c&&Yn(r,a,c)&&(a=n),p(r,qe(a,3))}var ZA=ct(function(r,a){if(r==null)return[];var c=a.length;return c>1&&Yn(r,a[0],a[1])?a=[]:c>2&&Yn(a[0],a[1],a[2])&&(a=[a[0]]),u0(r,Pn(a,1),[])}),lc=L1||function(){return Cn.Date.now()};function QA(r,a){if(typeof a!="function")throw new Li(l);return r=st(r),function(){if(--r<1)return a.apply(this,arguments)}}function iv(r,a,c){return a=c?n:a,a=r&&a==null?r.length:a,Cr(r,I,n,n,n,n,a)}function rv(r,a){var c;if(typeof a!="function")throw new Li(l);return r=st(r),function(){return--r>0&&(c=a.apply(this,arguments)),r<=1&&(a=n),c}}var ph=ct(function(r,a,c){var p=x;if(c.length){var y=os(c,qo(ph));p|=O}return Cr(r,p,a,c,y)}),sv=ct(function(r,a,c){var p=x|h;if(c.length){var y=os(c,qo(sv));p|=O}return Cr(a,p,r,c,y)});function ov(r,a,c){a=c?n:a;var p=Cr(r,M,n,n,n,n,n,a);return p.placeholder=ov.placeholder,p}function av(r,a,c){a=c?n:a;var p=Cr(r,w,n,n,n,n,n,a);return p.placeholder=av.placeholder,p}function lv(r,a,c){var p,y,b,F,z,q,le=0,ce=!1,_e=!1,Ae=!0;if(typeof r!="function")throw new Li(l);a=Fi(a)||0,Zt(c)&&(ce=!!c.leading,_e="maxWait"in c,b=_e?mn(Fi(c.maxWait)||0,a):b,Ae="trailing"in c?!!c.trailing:Ae);function ke(an){var er=p,Ir=y;return p=y=n,le=an,F=r.apply(Ir,er),F}function je(an){return le=an,z=gl(gt,a),ce?ke(an):F}function at(an){var er=an-q,Ir=an-le,Rv=a-er;return _e?Fn(Rv,b-Ir):Rv}function $e(an){var er=an-q,Ir=an-le;return q===n||er>=a||er<0||_e&&Ir>=b}function gt(){var an=lc();if($e(an))return Mt(an);z=gl(gt,at(an))}function Mt(an){return z=n,Ae&&p?ke(an):(p=y=n,F)}function xi(){z!==n&&v0(z),le=0,p=q=y=z=n}function qn(){return z===n?F:Mt(lc())}function yi(){var an=lc(),er=$e(an);if(p=arguments,y=this,q=an,er){if(z===n)return je(q);if(_e)return v0(z),z=gl(gt,a),ke(q)}return z===n&&(z=gl(gt,a)),F}return yi.cancel=xi,yi.flush=qn,yi}var JA=ct(function(r,a){return Z_(r,1,a)}),eR=ct(function(r,a,c){return Z_(r,Fi(a)||0,c)});function tR(r){return Cr(r,L)}function uc(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new Li(l);var c=function(){var p=arguments,y=a?a.apply(this,p):p[0],b=c.cache;if(b.has(y))return b.get(y);var F=r.apply(this,p);return c.cache=b.set(y,F)||b,F};return c.cache=new(uc.Cache||Ar),c}uc.Cache=Ar;function cc(r){if(typeof r!="function")throw new Li(l);return function(){var a=arguments;switch(a.length){case 0:return!r.call(this);case 1:return!r.call(this,a[0]);case 2:return!r.call(this,a[0],a[1]);case 3:return!r.call(this,a[0],a[1],a[2])}return!r.apply(this,a)}}function nR(r){return rv(2,r)}var iR=GT(function(r,a){a=a.length==1&&rt(a[0])?$t(a[0],gi(qe())):$t(Pn(a,1),gi(qe()));var c=a.length;return ct(function(p){for(var y=-1,b=Fn(p.length,c);++y<b;)p[y]=a[y].call(this,p[y]);return mi(r,this,p)})}),mh=ct(function(r,a){var c=os(a,qo(mh));return Cr(r,O,n,a,c)}),uv=ct(function(r,a){var c=os(a,qo(uv));return Cr(r,N,n,a,c)}),rR=Pr(function(r,a){return Cr(r,B,n,n,n,a)});function sR(r,a){if(typeof r!="function")throw new Li(l);return a=a===n?a:st(a),ct(r,a)}function oR(r,a){if(typeof r!="function")throw new Li(l);return a=a==null?0:mn(st(a),0),ct(function(c){var p=c[a],y=fs(c,0,a);return p&&ss(y,p),mi(r,this,y)})}function aR(r,a,c){var p=!0,y=!0;if(typeof r!="function")throw new Li(l);return Zt(c)&&(p="leading"in c?!!c.leading:p,y="trailing"in c?!!c.trailing:y),lv(r,a,{leading:p,maxWait:a,trailing:y})}function lR(r){return iv(r,1)}function uR(r,a){return mh(Jd(a),r)}function cR(){if(!arguments.length)return[];var r=arguments[0];return rt(r)?r:[r]}function fR(r){return Ii(r,v)}function dR(r,a){return a=typeof a=="function"?a:n,Ii(r,v,a)}function hR(r){return Ii(r,_|v)}function pR(r,a){return a=typeof a=="function"?a:n,Ii(r,_|v,a)}function mR(r,a){return a==null||K_(r,a,En(a))}function Ji(r,a){return r===a||r!==r&&a!==a}var gR=nc(Hd),_R=nc(function(r,a){return r>=a}),to=n0(function(){return arguments}())?n0:function(r){return nn(r)&&Lt.call(r,"callee")&&!V_.call(r,"callee")},rt=ie.isArray,vR=M_?gi(M_):AT;function ni(r){return r!=null&&fc(r.length)&&!Lr(r)}function on(r){return nn(r)&&ni(r)}function xR(r){return r===!0||r===!1||nn(r)&&Xn(r)==Xe}var ds=I1||Ah,yR=T_?gi(T_):RT;function SR(r){return nn(r)&&r.nodeType===1&&!_l(r)}function ER(r){if(r==null)return!0;if(ni(r)&&(rt(r)||typeof r=="string"||typeof r.splice=="function"||ds(r)||jo(r)||to(r)))return!r.length;var a=On(r);if(a==k||a==D)return!r.size;if(ml(r))return!Wd(r).length;for(var c in r)if(Lt.call(r,c))return!1;return!0}function MR(r,a){return dl(r,a)}function TR(r,a,c){c=typeof c=="function"?c:n;var p=c?c(r,a):n;return p===n?dl(r,a,n,c):!!p}function gh(r){if(!nn(r))return!1;var a=Xn(r);return a==Ut||a==ut||typeof r.message=="string"&&typeof r.name=="string"&&!_l(r)}function wR(r){return typeof r=="number"&&W_(r)}function Lr(r){if(!Zt(r))return!1;var a=Xn(r);return a==ft||a==qt||a==Te||a==Bt}function cv(r){return typeof r=="number"&&r==st(r)}function fc(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=U}function Zt(r){var a=typeof r;return r!=null&&(a=="object"||a=="function")}function nn(r){return r!=null&&typeof r=="object"}var fv=w_?gi(w_):PT;function AR(r,a){return r===a||Gd(r,a,oh(a))}function RR(r,a,c){return c=typeof c=="function"?c:n,Gd(r,a,oh(a),c)}function CR(r){return dv(r)&&r!=+r}function PR(r){if(dw(r))throw new nt(o);return i0(r)}function bR(r){return r===null}function LR(r){return r==null}function dv(r){return typeof r=="number"||nn(r)&&Xn(r)==Sn}function _l(r){if(!nn(r)||Xn(r)!=et)return!1;var a=Bu(r);if(a===null)return!0;var c=Lt.call(a,"constructor")&&a.constructor;return typeof c=="function"&&c instanceof c&&Uu.call(c)==R1}var _h=A_?gi(A_):bT;function DR(r){return cv(r)&&r>=-U&&r<=U}var hv=R_?gi(R_):LT;function dc(r){return typeof r=="string"||!rt(r)&&nn(r)&&Xn(r)==A}function vi(r){return typeof r=="symbol"||nn(r)&&Xn(r)==Z}var jo=C_?gi(C_):DT;function IR(r){return r===n}function UR(r){return nn(r)&&On(r)==ge}function NR(r){return nn(r)&&Xn(r)==ue}var FR=nc(Xd),OR=nc(function(r,a){return r<=a});function pv(r){if(!r)return[];if(ni(r))return dc(r)?Zi(r):ti(r);if(rl&&r[rl])return m1(r[rl]());var a=On(r),c=a==k?Dd:a==D?Lu:$o;return c(r)}function Dr(r){if(!r)return r===0?r:0;if(r=Fi(r),r===j||r===-j){var a=r<0?-1:1;return a*Q}return r===r?r:0}function st(r){var a=Dr(r),c=a%1;return a===a?c?a-c:a:0}function mv(r){return r?Zs(st(r),0,te):0}function Fi(r){if(typeof r=="number")return r;if(vi(r))return V;if(Zt(r)){var a=typeof r.valueOf=="function"?r.valueOf():r;r=Zt(a)?a+"":a}if(typeof r!="string")return r===0?r:+r;r=U_(r);var c=vd.test(r);return c||yd.test(r)?QM(r.slice(2),c?2:8):_d.test(r)?V:+r}function gv(r){return mr(r,ii(r))}function BR(r){return r?Zs(st(r),-U,U):r===0?r:0}function bt(r){return r==null?"":_i(r)}var zR=Xo(function(r,a){if(ml(a)||ni(a)){mr(a,En(a),r);return}for(var c in a)Lt.call(a,c)&&ul(r,c,a[c])}),_v=Xo(function(r,a){mr(a,ii(a),r)}),hc=Xo(function(r,a,c,p){mr(a,ii(a),r,p)}),kR=Xo(function(r,a,c,p){mr(a,En(a),r,p)}),HR=Pr(Bd);function VR(r,a){var c=Wo(r);return a==null?c:$_(c,a)}var GR=ct(function(r,a){r=kt(r);var c=-1,p=a.length,y=p>2?a[2]:n;for(y&&Yn(a[0],a[1],y)&&(p=1);++c<p;)for(var b=a[c],F=ii(b),z=-1,q=F.length;++z<q;){var le=F[z],ce=r[le];(ce===n||Ji(ce,Ho[le])&&!Lt.call(r,le))&&(r[le]=b[le])}return r}),WR=ct(function(r){return r.push(n,U0),mi(vv,n,r)});function XR(r,a){return b_(r,qe(a,3),pr)}function YR(r,a){return b_(r,qe(a,3),kd)}function qR(r,a){return r==null?r:zd(r,qe(a,3),ii)}function jR(r,a){return r==null?r:e0(r,qe(a,3),ii)}function $R(r,a){return r&&pr(r,qe(a,3))}function KR(r,a){return r&&kd(r,qe(a,3))}function ZR(r){return r==null?[]:ju(r,En(r))}function QR(r){return r==null?[]:ju(r,ii(r))}function vh(r,a,c){var p=r==null?n:Qs(r,a);return p===n?c:p}function JR(r,a){return r!=null&&O0(r,a,ET)}function xh(r,a){return r!=null&&O0(r,a,MT)}var eC=P0(function(r,a,c){a!=null&&typeof a.toString!="function"&&(a=Nu.call(a)),r[a]=c},Sh(ri)),tC=P0(function(r,a,c){a!=null&&typeof a.toString!="function"&&(a=Nu.call(a)),Lt.call(r,a)?r[a].push(c):r[a]=[c]},qe),nC=ct(fl);function En(r){return ni(r)?q_(r):Wd(r)}function ii(r){return ni(r)?q_(r,!0):IT(r)}function iC(r,a){var c={};return a=qe(a,3),pr(r,function(p,y,b){Rr(c,a(p,y,b),p)}),c}function rC(r,a){var c={};return a=qe(a,3),pr(r,function(p,y,b){Rr(c,y,a(p,y,b))}),c}var sC=Xo(function(r,a,c){$u(r,a,c)}),vv=Xo(function(r,a,c,p){$u(r,a,c,p)}),oC=Pr(function(r,a){var c={};if(r==null)return c;var p=!1;a=$t(a,function(b){return b=cs(b,r),p||(p=b.length>1),b}),mr(r,rh(r),c),p&&(c=Ii(c,_|g|v,ew));for(var y=a.length;y--;)Kd(c,a[y]);return c});function aC(r,a){return xv(r,cc(qe(a)))}var lC=Pr(function(r,a){return r==null?{}:NT(r,a)});function xv(r,a){if(r==null)return{};var c=$t(rh(r),function(p){return[p]});return a=qe(a),c0(r,c,function(p,y){return a(p,y[0])})}function uC(r,a,c){a=cs(a,r);var p=-1,y=a.length;for(y||(y=1,r=n);++p<y;){var b=r==null?n:r[gr(a[p])];b===n&&(p=y,b=c),r=Lr(b)?b.call(r):b}return r}function cC(r,a,c){return r==null?r:hl(r,a,c)}function fC(r,a,c,p){return p=typeof p=="function"?p:n,r==null?r:hl(r,a,c,p)}var yv=D0(En),Sv=D0(ii);function dC(r,a,c){var p=rt(r),y=p||ds(r)||jo(r);if(a=qe(a,4),c==null){var b=r&&r.constructor;y?c=p?new b:[]:Zt(r)?c=Lr(b)?Wo(Bu(r)):{}:c={}}return(y?bi:pr)(r,function(F,z,q){return a(c,F,z,q)}),c}function hC(r,a){return r==null?!0:Kd(r,a)}function pC(r,a,c){return r==null?r:m0(r,a,Jd(c))}function mC(r,a,c,p){return p=typeof p=="function"?p:n,r==null?r:m0(r,a,Jd(c),p)}function $o(r){return r==null?[]:Ld(r,En(r))}function gC(r){return r==null?[]:Ld(r,ii(r))}function _C(r,a,c){return c===n&&(c=a,a=n),c!==n&&(c=Fi(c),c=c===c?c:0),a!==n&&(a=Fi(a),a=a===a?a:0),Zs(Fi(r),a,c)}function vC(r,a,c){return a=Dr(a),c===n?(c=a,a=0):c=Dr(c),r=Fi(r),TT(r,a,c)}function xC(r,a,c){if(c&&typeof c!="boolean"&&Yn(r,a,c)&&(a=c=n),c===n&&(typeof a=="boolean"?(c=a,a=n):typeof r=="boolean"&&(c=r,r=n)),r===n&&a===n?(r=0,a=1):(r=Dr(r),a===n?(a=r,r=0):a=Dr(a)),r>a){var p=r;r=a,a=p}if(c||r%1||a%1){var y=X_();return Fn(r+y*(a-r+ZM("1e-"+((y+"").length-1))),a)}return qd(r,a)}var yC=Yo(function(r,a,c){return a=a.toLowerCase(),r+(c?Ev(a):a)});function Ev(r){return yh(bt(r).toLowerCase())}function Mv(r){return r=bt(r),r&&r.replace(X,c1).replace(HM,"")}function SC(r,a,c){r=bt(r),a=_i(a);var p=r.length;c=c===n?p:Zs(st(c),0,p);var y=c;return c-=a.length,c>=0&&r.slice(c,y)==a}function EC(r){return r=bt(r),r&&be.test(r)?r.replace(he,f1):r}function MC(r){return r=bt(r),r&&Eu.test(r)?r.replace(Io,"\\$&"):r}var TC=Yo(function(r,a,c){return r+(c?"-":"")+a.toLowerCase()}),wC=Yo(function(r,a,c){return r+(c?" ":"")+a.toLowerCase()}),AC=A0("toLowerCase");function RC(r,a,c){r=bt(r),a=st(a);var p=a?zo(r):0;if(!a||p>=a)return r;var y=(a-p)/2;return tc(Vu(y),c)+r+tc(Hu(y),c)}function CC(r,a,c){r=bt(r),a=st(a);var p=a?zo(r):0;return a&&p<a?r+tc(a-p,c):r}function PC(r,a,c){r=bt(r),a=st(a);var p=a?zo(r):0;return a&&p<a?tc(a-p,c)+r:r}function bC(r,a,c){return c||a==null?a=0:a&&(a=+a),O1(bt(r).replace(ji,""),a||0)}function LC(r,a,c){return(c?Yn(r,a,c):a===n)?a=1:a=st(a),jd(bt(r),a)}function DC(){var r=arguments,a=bt(r[0]);return r.length<3?a:a.replace(r[1],r[2])}var IC=Yo(function(r,a,c){return r+(c?"_":"")+a.toLowerCase()});function UC(r,a,c){return c&&typeof c!="number"&&Yn(r,a,c)&&(a=c=n),c=c===n?te:c>>>0,c?(r=bt(r),r&&(typeof a=="string"||a!=null&&!_h(a))&&(a=_i(a),!a&&Bo(r))?fs(Zi(r),0,c):r.split(a,c)):[]}var NC=Yo(function(r,a,c){return r+(c?" ":"")+yh(a)});function FC(r,a,c){return r=bt(r),c=c==null?0:Zs(st(c),0,r.length),a=_i(a),r.slice(c,c+a.length)==a}function OC(r,a,c){var p=R.templateSettings;c&&Yn(r,a,c)&&(a=n),r=bt(r),a=hc({},a,p,I0);var y=hc({},a.imports,p.imports,I0),b=En(y),F=Ld(y,b),z,q,le=0,ce=a.interpolate||ee,_e="__p += '",Ae=Id((a.escape||ee).source+"|"+ce.source+"|"+(ce===hn?Ru:ee).source+"|"+(a.evaluate||ee).source+"|$","g"),ke="//# sourceURL="+(Lt.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++YM+"]")+`
`;r.replace(Ae,function($e,gt,Mt,xi,qn,yi){return Mt||(Mt=xi),_e+=r.slice(le,yi).replace(ne,d1),gt&&(z=!0,_e+=`' +
__e(`+gt+`) +
'`),qn&&(q=!0,_e+=`';
`+qn+`;
__p += '`),Mt&&(_e+=`' +
((__t = (`+Mt+`)) == null ? '' : __t) +
'`),le=yi+$e.length,$e}),_e+=`';
`;var je=Lt.call(a,"variable")&&a.variable;if(!je)_e=`with (obj) {
`+_e+`
}
`;else if(No.test(je))throw new nt(u);_e=(q?_e.replace(Nt,""):_e).replace(G,"$1").replace(Ce,"$1;"),_e="function("+(je||"obj")+`) {
`+(je?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(z?", __e = _.escape":"")+(q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+_e+`return __p
}`;var at=wv(function(){return Pt(b,ke+"return "+_e).apply(n,F)});if(at.source=_e,gh(at))throw at;return at}function BC(r){return bt(r).toLowerCase()}function zC(r){return bt(r).toUpperCase()}function kC(r,a,c){if(r=bt(r),r&&(c||a===n))return U_(r);if(!r||!(a=_i(a)))return r;var p=Zi(r),y=Zi(a),b=N_(p,y),F=F_(p,y)+1;return fs(p,b,F).join("")}function HC(r,a,c){if(r=bt(r),r&&(c||a===n))return r.slice(0,B_(r)+1);if(!r||!(a=_i(a)))return r;var p=Zi(r),y=F_(p,Zi(a))+1;return fs(p,0,y).join("")}function VC(r,a,c){if(r=bt(r),r&&(c||a===n))return r.replace(ji,"");if(!r||!(a=_i(a)))return r;var p=Zi(r),y=N_(p,Zi(a));return fs(p,y).join("")}function GC(r,a){var c=C,p=H;if(Zt(a)){var y="separator"in a?a.separator:y;c="length"in a?st(a.length):c,p="omission"in a?_i(a.omission):p}r=bt(r);var b=r.length;if(Bo(r)){var F=Zi(r);b=F.length}if(c>=b)return r;var z=c-zo(p);if(z<1)return p;var q=F?fs(F,0,z).join(""):r.slice(0,z);if(y===n)return q+p;if(F&&(z+=q.length-z),_h(y)){if(r.slice(z).search(y)){var le,ce=q;for(y.global||(y=Id(y.source,bt(Cu.exec(y))+"g")),y.lastIndex=0;le=y.exec(ce);)var _e=le.index;q=q.slice(0,_e===n?z:_e)}}else if(r.indexOf(_i(y),z)!=z){var Ae=q.lastIndexOf(y);Ae>-1&&(q=q.slice(0,Ae))}return q+p}function WC(r){return r=bt(r),r&&Le.test(r)?r.replace(se,x1):r}var XC=Yo(function(r,a,c){return r+(c?" ":"")+a.toUpperCase()}),yh=A0("toUpperCase");function Tv(r,a,c){return r=bt(r),a=c?n:a,a===n?p1(r)?E1(r):s1(r):r.match(a)||[]}var wv=ct(function(r,a){try{return mi(r,n,a)}catch(c){return gh(c)?c:new nt(c)}}),YC=Pr(function(r,a){return bi(a,function(c){c=gr(c),Rr(r,c,ph(r[c],r))}),r});function qC(r){var a=r==null?0:r.length,c=qe();return r=a?$t(r,function(p){if(typeof p[1]!="function")throw new Li(l);return[c(p[0]),p[1]]}):[],ct(function(p){for(var y=-1;++y<a;){var b=r[y];if(mi(b[0],this,p))return mi(b[1],this,p)}})}function jC(r){return xT(Ii(r,_))}function Sh(r){return function(){return r}}function $C(r,a){return r==null||r!==r?a:r}var KC=C0(),ZC=C0(!0);function ri(r){return r}function Eh(r){return r0(typeof r=="function"?r:Ii(r,_))}function QC(r){return o0(Ii(r,_))}function JC(r,a){return a0(r,Ii(a,_))}var eP=ct(function(r,a){return function(c){return fl(c,r,a)}}),tP=ct(function(r,a){return function(c){return fl(r,c,a)}});function Mh(r,a,c){var p=En(a),y=ju(a,p);c==null&&!(Zt(a)&&(y.length||!p.length))&&(c=a,a=r,r=this,y=ju(a,En(a)));var b=!(Zt(c)&&"chain"in c)||!!c.chain,F=Lr(r);return bi(y,function(z){var q=a[z];r[z]=q,F&&(r.prototype[z]=function(){var le=this.__chain__;if(b||le){var ce=r(this.__wrapped__),_e=ce.__actions__=ti(this.__actions__);return _e.push({func:q,args:arguments,thisArg:r}),ce.__chain__=le,ce}return q.apply(r,ss([this.value()],arguments))})}),r}function nP(){return Cn._===this&&(Cn._=C1),this}function Th(){}function iP(r){return r=st(r),ct(function(a){return l0(a,r)})}var rP=th($t),sP=th(P_),oP=th(Ad);function Av(r){return lh(r)?Rd(gr(r)):FT(r)}function aP(r){return function(a){return r==null?n:Qs(r,a)}}var lP=b0(),uP=b0(!0);function wh(){return[]}function Ah(){return!1}function cP(){return{}}function fP(){return""}function dP(){return!0}function hP(r,a){if(r=st(r),r<1||r>U)return[];var c=te,p=Fn(r,te);a=qe(a),r-=te;for(var y=bd(p,a);++c<r;)a(c);return y}function pP(r){return rt(r)?$t(r,gr):vi(r)?[r]:ti(Y0(bt(r)))}function mP(r){var a=++A1;return bt(r)+a}var gP=ec(function(r,a){return r+a},0),_P=nh("ceil"),vP=ec(function(r,a){return r/a},1),xP=nh("floor");function yP(r){return r&&r.length?qu(r,ri,Hd):n}function SP(r,a){return r&&r.length?qu(r,qe(a,2),Hd):n}function EP(r){return D_(r,ri)}function MP(r,a){return D_(r,qe(a,2))}function TP(r){return r&&r.length?qu(r,ri,Xd):n}function wP(r,a){return r&&r.length?qu(r,qe(a,2),Xd):n}var AP=ec(function(r,a){return r*a},1),RP=nh("round"),CP=ec(function(r,a){return r-a},0);function PP(r){return r&&r.length?Pd(r,ri):0}function bP(r,a){return r&&r.length?Pd(r,qe(a,2)):0}return R.after=QA,R.ary=iv,R.assign=zR,R.assignIn=_v,R.assignInWith=hc,R.assignWith=kR,R.at=HR,R.before=rv,R.bind=ph,R.bindAll=YC,R.bindKey=sv,R.castArray=cR,R.chain=ev,R.chunk=xw,R.compact=yw,R.concat=Sw,R.cond=qC,R.conforms=jC,R.constant=Sh,R.countBy=PA,R.create=VR,R.curry=ov,R.curryRight=av,R.debounce=lv,R.defaults=GR,R.defaultsDeep=WR,R.defer=JA,R.delay=eR,R.difference=Ew,R.differenceBy=Mw,R.differenceWith=Tw,R.drop=ww,R.dropRight=Aw,R.dropRightWhile=Rw,R.dropWhile=Cw,R.fill=Pw,R.filter=LA,R.flatMap=UA,R.flatMapDeep=NA,R.flatMapDepth=FA,R.flatten=K0,R.flattenDeep=bw,R.flattenDepth=Lw,R.flip=tR,R.flow=KC,R.flowRight=ZC,R.fromPairs=Dw,R.functions=ZR,R.functionsIn=QR,R.groupBy=OA,R.initial=Uw,R.intersection=Nw,R.intersectionBy=Fw,R.intersectionWith=Ow,R.invert=eC,R.invertBy=tC,R.invokeMap=zA,R.iteratee=Eh,R.keyBy=kA,R.keys=En,R.keysIn=ii,R.map=ac,R.mapKeys=iC,R.mapValues=rC,R.matches=QC,R.matchesProperty=JC,R.memoize=uc,R.merge=sC,R.mergeWith=vv,R.method=eP,R.methodOf=tP,R.mixin=Mh,R.negate=cc,R.nthArg=iP,R.omit=oC,R.omitBy=aC,R.once=nR,R.orderBy=HA,R.over=rP,R.overArgs=iR,R.overEvery=sP,R.overSome=oP,R.partial=mh,R.partialRight=uv,R.partition=VA,R.pick=lC,R.pickBy=xv,R.property=Av,R.propertyOf=aP,R.pull=Hw,R.pullAll=Q0,R.pullAllBy=Vw,R.pullAllWith=Gw,R.pullAt=Ww,R.range=lP,R.rangeRight=uP,R.rearg=rR,R.reject=XA,R.remove=Xw,R.rest=sR,R.reverse=dh,R.sampleSize=qA,R.set=cC,R.setWith=fC,R.shuffle=jA,R.slice=Yw,R.sortBy=ZA,R.sortedUniq=Jw,R.sortedUniqBy=eA,R.split=UC,R.spread=oR,R.tail=tA,R.take=nA,R.takeRight=iA,R.takeRightWhile=rA,R.takeWhile=sA,R.tap=yA,R.throttle=aR,R.thru=oc,R.toArray=pv,R.toPairs=yv,R.toPairsIn=Sv,R.toPath=pP,R.toPlainObject=gv,R.transform=dC,R.unary=lR,R.union=oA,R.unionBy=aA,R.unionWith=lA,R.uniq=uA,R.uniqBy=cA,R.uniqWith=fA,R.unset=hC,R.unzip=hh,R.unzipWith=J0,R.update=pC,R.updateWith=mC,R.values=$o,R.valuesIn=gC,R.without=dA,R.words=Tv,R.wrap=uR,R.xor=hA,R.xorBy=pA,R.xorWith=mA,R.zip=gA,R.zipObject=_A,R.zipObjectDeep=vA,R.zipWith=xA,R.entries=yv,R.entriesIn=Sv,R.extend=_v,R.extendWith=hc,Mh(R,R),R.add=gP,R.attempt=wv,R.camelCase=yC,R.capitalize=Ev,R.ceil=_P,R.clamp=_C,R.clone=fR,R.cloneDeep=hR,R.cloneDeepWith=pR,R.cloneWith=dR,R.conformsTo=mR,R.deburr=Mv,R.defaultTo=$C,R.divide=vP,R.endsWith=SC,R.eq=Ji,R.escape=EC,R.escapeRegExp=MC,R.every=bA,R.find=DA,R.findIndex=j0,R.findKey=XR,R.findLast=IA,R.findLastIndex=$0,R.findLastKey=YR,R.floor=xP,R.forEach=tv,R.forEachRight=nv,R.forIn=qR,R.forInRight=jR,R.forOwn=$R,R.forOwnRight=KR,R.get=vh,R.gt=gR,R.gte=_R,R.has=JR,R.hasIn=xh,R.head=Z0,R.identity=ri,R.includes=BA,R.indexOf=Iw,R.inRange=vC,R.invoke=nC,R.isArguments=to,R.isArray=rt,R.isArrayBuffer=vR,R.isArrayLike=ni,R.isArrayLikeObject=on,R.isBoolean=xR,R.isBuffer=ds,R.isDate=yR,R.isElement=SR,R.isEmpty=ER,R.isEqual=MR,R.isEqualWith=TR,R.isError=gh,R.isFinite=wR,R.isFunction=Lr,R.isInteger=cv,R.isLength=fc,R.isMap=fv,R.isMatch=AR,R.isMatchWith=RR,R.isNaN=CR,R.isNative=PR,R.isNil=LR,R.isNull=bR,R.isNumber=dv,R.isObject=Zt,R.isObjectLike=nn,R.isPlainObject=_l,R.isRegExp=_h,R.isSafeInteger=DR,R.isSet=hv,R.isString=dc,R.isSymbol=vi,R.isTypedArray=jo,R.isUndefined=IR,R.isWeakMap=UR,R.isWeakSet=NR,R.join=Bw,R.kebabCase=TC,R.last=Ni,R.lastIndexOf=zw,R.lowerCase=wC,R.lowerFirst=AC,R.lt=FR,R.lte=OR,R.max=yP,R.maxBy=SP,R.mean=EP,R.meanBy=MP,R.min=TP,R.minBy=wP,R.stubArray=wh,R.stubFalse=Ah,R.stubObject=cP,R.stubString=fP,R.stubTrue=dP,R.multiply=AP,R.nth=kw,R.noConflict=nP,R.noop=Th,R.now=lc,R.pad=RC,R.padEnd=CC,R.padStart=PC,R.parseInt=bC,R.random=xC,R.reduce=GA,R.reduceRight=WA,R.repeat=LC,R.replace=DC,R.result=uC,R.round=RP,R.runInContext=W,R.sample=YA,R.size=$A,R.snakeCase=IC,R.some=KA,R.sortedIndex=qw,R.sortedIndexBy=jw,R.sortedIndexOf=$w,R.sortedLastIndex=Kw,R.sortedLastIndexBy=Zw,R.sortedLastIndexOf=Qw,R.startCase=NC,R.startsWith=FC,R.subtract=CP,R.sum=PP,R.sumBy=bP,R.template=OC,R.times=hP,R.toFinite=Dr,R.toInteger=st,R.toLength=mv,R.toLower=BC,R.toNumber=Fi,R.toSafeInteger=BR,R.toString=bt,R.toUpper=zC,R.trim=kC,R.trimEnd=HC,R.trimStart=VC,R.truncate=GC,R.unescape=WC,R.uniqueId=mP,R.upperCase=XC,R.upperFirst=yh,R.each=tv,R.eachRight=nv,R.first=Z0,Mh(R,function(){var r={};return pr(R,function(a,c){Lt.call(R.prototype,c)||(r[c]=a)}),r}(),{chain:!1}),R.VERSION=i,bi(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){R[r].placeholder=R}),bi(["drop","take"],function(r,a){yt.prototype[r]=function(c){c=c===n?1:mn(st(c),0);var p=this.__filtered__&&!a?new yt(this):this.clone();return p.__filtered__?p.__takeCount__=Fn(c,p.__takeCount__):p.__views__.push({size:Fn(c,te),type:r+(p.__dir__<0?"Right":"")}),p},yt.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),bi(["filter","map","takeWhile"],function(r,a){var c=a+1,p=c==fe||c==J;yt.prototype[r]=function(y){var b=this.clone();return b.__iteratees__.push({iteratee:qe(y,3),type:c}),b.__filtered__=b.__filtered__||p,b}}),bi(["head","last"],function(r,a){var c="take"+(a?"Right":"");yt.prototype[r]=function(){return this[c](1).value()[0]}}),bi(["initial","tail"],function(r,a){var c="drop"+(a?"":"Right");yt.prototype[r]=function(){return this.__filtered__?new yt(this):this[c](1)}}),yt.prototype.compact=function(){return this.filter(ri)},yt.prototype.find=function(r){return this.filter(r).head()},yt.prototype.findLast=function(r){return this.reverse().find(r)},yt.prototype.invokeMap=ct(function(r,a){return typeof r=="function"?new yt(this):this.map(function(c){return fl(c,r,a)})}),yt.prototype.reject=function(r){return this.filter(cc(qe(r)))},yt.prototype.slice=function(r,a){r=st(r);var c=this;return c.__filtered__&&(r>0||a<0)?new yt(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),a!==n&&(a=st(a),c=a<0?c.dropRight(-a):c.take(a-r)),c)},yt.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},yt.prototype.toArray=function(){return this.take(te)},pr(yt.prototype,function(r,a){var c=/^(?:filter|find|map|reject)|While$/.test(a),p=/^(?:head|last)$/.test(a),y=R[p?"take"+(a=="last"?"Right":""):a],b=p||/^find/.test(a);y&&(R.prototype[a]=function(){var F=this.__wrapped__,z=p?[1]:arguments,q=F instanceof yt,le=z[0],ce=q||rt(F),_e=function(gt){var Mt=y.apply(R,ss([gt],z));return p&&Ae?Mt[0]:Mt};ce&&c&&typeof le=="function"&&le.length!=1&&(q=ce=!1);var Ae=this.__chain__,ke=!!this.__actions__.length,je=b&&!Ae,at=q&&!ke;if(!b&&ce){F=at?F:new yt(this);var $e=r.apply(F,z);return $e.__actions__.push({func:oc,args:[_e],thisArg:n}),new Di($e,Ae)}return je&&at?r.apply(this,z):($e=this.thru(_e),je?p?$e.value()[0]:$e.value():$e)})}),bi(["pop","push","shift","sort","splice","unshift"],function(r){var a=Du[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",p=/^(?:pop|shift)$/.test(r);R.prototype[r]=function(){var y=arguments;if(p&&!this.__chain__){var b=this.value();return a.apply(rt(b)?b:[],y)}return this[c](function(F){return a.apply(rt(F)?F:[],y)})}}),pr(yt.prototype,function(r,a){var c=R[a];if(c){var p=c.name+"";Lt.call(Go,p)||(Go[p]=[]),Go[p].push({name:a,func:c})}}),Go[Ju(n,h).name]=[{name:"wrapper",func:n}],yt.prototype.clone=W1,yt.prototype.reverse=X1,yt.prototype.value=Y1,R.prototype.at=SA,R.prototype.chain=EA,R.prototype.commit=MA,R.prototype.next=TA,R.prototype.plant=AA,R.prototype.reverse=RA,R.prototype.toJSON=R.prototype.valueOf=R.prototype.value=CA,R.prototype.first=R.prototype.head,rl&&(R.prototype[rl]=wA),R},ko=M1();qs?((qs.exports=ko)._=ko,Ed._=ko):Cn._=ko}).call(vl)})(Kf,Kf.exports);var HF=Kf.exports;const lo=Hy(HF),VF=()=>{const[t,e]=Ln.useState(!1);return ve.jsxs("div",{style:{position:"relative",color:"white"},children:[ve.jsx("div",{onClick:()=>e(!t),style:{position:"absolute",top:"10px",left:"20px",cursor:"pointer",fontSize:"24px",background:"white",color:"black",padding:"5px 10px",borderRadius:"5px",zIndex:1e3},children:t?"✖":"☰"}),t&&ve.jsxs("div",{style:{position:"absolute",top:"50px",left:"20px",backgroundColor:"rgba(0, 0, 0, 0.9)",color:"white",padding:"20px",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.5)",zIndex:999,maxWidth:"90%",overflowY:"auto",height:"80vh",scrollbarWidth:"thin"},children:[ve.jsx("h3",{style:{marginBottom:"10px",borderBottom:"1px solid white"},children:"Controls"}),ve.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",fontSize:"14px",color:"white"},children:[ve.jsx("thead",{children:ve.jsxs("tr",{children:[ve.jsx("th",{style:{border:"1px solid white",padding:"8px",textAlign:"left"},children:"Action"}),ve.jsx("th",{style:{border:"1px solid white",padding:"8px",textAlign:"left"},children:"Keys"})]})}),ve.jsxs("tbody",{children:[ve.jsxs("tr",{children:[ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Change X coordinate"}),ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"ArrowUp / ArrowDown"})]}),ve.jsxs("tr",{children:[ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Change Y coordinate"}),ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"ArrowLeft / ArrowRight"})]}),ve.jsxs("tr",{children:[ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Change Z coordinate"}),ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"W / S"})]}),ve.jsxs("tr",{children:[ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Change W coordinate"}),ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"A / D"})]}),ve.jsxs("tr",{children:[ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate YZ"}),ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + ArrowUp / ArrowDown"})]}),ve.jsxs("tr",{children:[ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate XZ"}),ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + ArrowLeft / ArrowRight"})]}),ve.jsxs("tr",{children:[ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate XY"}),ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + M / N"})]}),ve.jsxs("tr",{children:[ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate WX"}),ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + Q / A"})]}),ve.jsxs("tr",{children:[ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate WY"}),ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + W / S"})]}),ve.jsxs("tr",{children:[ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate WZ"}),ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + E / D"})]}),ve.jsxs("tr",{children:[ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate axes YZ"}),ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + R / F"})]}),ve.jsxs("tr",{children:[ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate axes XZ"}),ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + T / G"})]}),ve.jsxs("tr",{children:[ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate axes XY"}),ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + Y / H"})]}),ve.jsxs("tr",{children:[ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate axes WX"}),ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + U / J"})]}),ve.jsxs("tr",{children:[ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate axes WY"}),ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + I / K"})]}),ve.jsxs("tr",{children:[ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Rotate axes WZ"}),ve.jsx("td",{style:{border:"1px solid white",padding:"8px"},children:"Shift + O / L"})]})]})]})]})]})};function GF(){const t=Ln.useRef(null),[e,n]=Ln.useState([0,0,0,0]),i=Ln.useRef([]),s=Ln.useRef([]),o=Ln.useRef(e),[l,u]=Ln.useState([0,0,0,0,0,0]),[f,d]=Ln.useState([0,0,0,0,0,0]),m=2;return Ln.useEffect(()=>{o.current=e},[e]),Ln.useEffect(()=>{const _=new ND,g=new Hi(75,window.innerWidth/window.innerHeight,.1,1e3),v=new AF;v.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(v.domElement);const S=()=>{const J=document.querySelector("canvas"),j=window.innerWidth,U=window.innerHeight;J.width=j,J.height=U,v.setSize(j,U),g.aspect=j/U,g.updateProjectionMatrix()};window.addEventListener("resize",S);const T=new CF(g,v.domElement);g.position.z=5;const x=[[0,1],[0,2],[0,4],[0,8],[1,3],[1,5],[1,9],[2,3],[2,6],[2,10],[3,7],[3,11],[4,5],[4,6],[4,12],[5,7],[5,13],[6,7],[6,14],[7,15],[8,9],[8,10],[8,12],[9,11],[9,13],[10,11],[10,14],[11,15],[12,13],[12,14],[13,15],[14,15]],h=[[-1,-1,-1,-1],[1,-1,-1,-1],[-1,1,-1,-1],[1,1,-1,-1],[-1,-1,1,-1],[1,-1,1,-1],[-1,1,1,-1],[1,1,1,-1],[-1,-1,-1,1],[1,-1,-1,1],[-1,1,-1,1],[1,1,-1,1],[-1,-1,1,1],[1,-1,1,1],[-1,1,1,1],[1,1,1,1]],E=J=>{const[j,U,Q,V]=J,te=1/(m-V);return[j*te,U*te,Q*te]},M=new Tr,w=new ag({color:16777215}),O=new BD(M,w);_.add(O);const N=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];s.current=N;const I=(J,j,U)=>{const Q=new Tr().setFromPoints([new K(...J),new K(...j)]),V=new ag({color:U});return new AM(Q,V)},B=N.map(J=>E(J)),L=[I([0,0,0],B[0],16711680),I([0,0,0],B[1],16776960),I([0,0,0],B[2],65280),I([0,0,0],B[3],5592575)];L.forEach(J=>_.add(J));const C=J=>{let j=lo.cloneDeep(J),U=lo.cloneDeep(J),Q=lo.cloneDeep(J),V=lo.cloneDeep(J),te=lo.cloneDeep(J),de=lo.cloneDeep(J);$(j,"yz",l[0]),$(U,"xz",l[1]),$(Q,"xy",l[2]),$(V,"wx",l[3]),$(te,"wy",l[4]),$(de,"wz",l[5]),J.forEach((vt,re)=>{vt.forEach((xe,Me)=>{J[re][Me]=j[re][Me]+U[re][Me]+Q[re][Me]+V[re][Me]+te[re][Me]+de[re][Me]-5*xe})})},H=()=>{const J=lo.cloneDeep(s.current);C(J);const j=J.map(U=>E(U));L.forEach((U,Q)=>{const V=[0,0,0],te=j[Q],de=new Float32Array([...V,...te]);U.geometry.setAttribute("position",new Wi(de,3)),U.geometry.attributes.position.needsUpdate=!0})},ae=()=>{let J=i.current.map(Q=>Q.map((V,te)=>V+o.current[te]));C(J);const j=J.map(E),U=new Float32Array(x.flatMap(([Q,V])=>[...j[Q],...j[V]]));M.setAttribute("position",new Wi(U,3))},$=(J,j,U)=>{const Q=Math.cos(U),V=Math.sin(U),te={yz:de=>[de[0],Q*de[1]-V*de[2],V*de[1]+Q*de[2],de[3]],xz:de=>[Q*de[0]-V*de[2],de[1],V*de[0]+Q*de[2],de[3]],xy:de=>[Q*de[0]-V*de[1],V*de[0]+Q*de[1],de[2],de[3]],wx:de=>[Q*de[0]-V*de[3],de[1],de[2],V*de[0]+Q*de[3]],wy:de=>[de[0],Q*de[1]-V*de[3],de[2],V*de[1]+Q*de[3]],wz:de=>[de[0],de[1],Q*de[2]-V*de[3],V*de[2]+Q*de[3]]};for(let de=0;de<J.length;de++)J[de]=te[j](J[de])},fe=J=>{const j=J.key.toLowerCase(),U=.1,Q=.1;J.shiftKey?j==="arrowup"?($(i.current,"yz",-U),d(V=>{let te=[...V];return te[0]-=U,te})):j==="arrowdown"?($(i.current,"yz",U),d(V=>{let te=[...V];return te[0]+=U,te})):j==="arrowleft"?($(i.current,"xz",U),d(V=>{let te=[...V];return te[1]+=U,te})):j==="arrowright"?($(i.current,"xz",-U),d(V=>{let te=[...V];return te[1]-=U,te})):j==="m"?($(i.current,"xy",U),d(V=>{let te=[...V];return te[2]+=U,te})):j==="n"?($(i.current,"xy",-U),d(V=>{let te=[...V];return te[2]-=U,te})):j==="q"?($(i.current,"wx",U),d(V=>{let te=[...V];return te[3]+=U,te})):j==="a"?($(i.current,"wx",-U),d(V=>{let te=[...V];return te[3]-=U,te})):j==="w"?($(i.current,"wy",-U),d(V=>{let te=[...V];return te[4]-=U,te})):j==="s"?($(i.current,"wy",U),d(V=>{let te=[...V];return te[4]+=U,te})):j==="e"?($(i.current,"wz",U),d(V=>{let te=[...V];return te[5]+=U,te})):j==="d"?($(i.current,"wz",-U),d(V=>{let te=[...V];return te[5]-=U,te})):j==="r"?u(V=>(V[0]-=U,V)):j==="f"?u(V=>(V[0]+=U,V)):j==="t"?u(V=>(V[1]+=U,V)):j==="g"?u(V=>(V[1]-=U,V)):j==="y"?u(V=>(V[2]+=U,V)):j==="h"?u(V=>(V[2]-=U,V)):j==="u"?u(V=>(V[3]+=U,V)):j==="j"?u(V=>(V[3]-=U,V)):j==="i"?u(V=>(V[4]-=U,V)):j==="k"?u(V=>(V[4]+=U,V)):j==="o"?u(V=>(V[5]+=U,V)):j==="l"&&u(V=>(V[5]-=U,V)):n(V=>{const te=[...V];return j==="arrowup"?te[1]+=Q:j==="arrowdown"?te[1]-=Q:j==="arrowleft"?te[0]-=Q:j==="arrowright"?te[0]+=Q:j==="w"?te[2]-=Q:j==="s"?te[2]+=Q:j==="a"?te[3]-=Q:j==="d"&&(te[3]+=Q),te})};document.addEventListener("keydown",fe),T.update();function me(){requestAnimationFrame(me),H(),ae(),T.update(),v.render(_,g)}return i.current=h,me(),()=>{document.removeEventListener("keydown",fe),document.removeEventListener("resize",S),t.current.removeChild(v.domElement)}},[]),ve.jsxs("div",{tabIndex:0,style:{outline:"none",position:"relative"},children:[ve.jsx("div",{style:{position:"absolute",top:"10px",right:"20px",color:"white"},children:ve.jsx("table",{style:{borderCollapse:"collapse",borderSpacing:0,border:"1px solid #ccc"},children:ve.jsxs("tbody",{children:[ve.jsxs("tr",{children:[ve.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ve.jsxs("p",{children:["X: ",e[0].toFixed(2)]})}),ve.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ve.jsxs("p",{children:["Z: ",e[2].toFixed(2)]})})]}),ve.jsxs("tr",{children:[ve.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ve.jsxs("p",{children:["Y: ",e[1].toFixed(2)]})}),ve.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ve.jsxs("p",{children:["W: ",(e[3]-m).toFixed(2)]})})]}),ve.jsxs("tr",{children:[ve.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ve.jsxs("p",{children:["YZ: ",(-f[0]).toFixed(2)]})}),ve.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ve.jsxs("p",{children:["XY: ",f[2].toFixed(2)]})})]}),ve.jsxs("tr",{children:[ve.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ve.jsxs("p",{children:["XZ: ",(-f[1]).toFixed(2)]})}),ve.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ve.jsxs("p",{children:["WX: ",f[3].toFixed(2)]})})]}),ve.jsxs("tr",{children:[ve.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ve.jsxs("p",{children:["WY: ",(-f[4]).toFixed(2)]})}),ve.jsx("td",{style:{padding:"5px",border:"1px solid #ccc"},children:ve.jsxs("p",{children:["WZ: ",f[5].toFixed(2)]})})]})]})})}),ve.jsx(VF,{}),ve.jsx("div",{ref:t})]})}const WF="modulepreload",XF=function(t){return"/Tesseract/"+t},ky={},YF=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=Promise.allSettled(n.map(f=>{if(f=XF(f),f in ky)return;ky[f]=!0;const d=f.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${m}`))return;const _=document.createElement("link");if(_.rel=d?"stylesheet":WF,d||(_.as="script"),_.crossOrigin="",_.href=f,u&&_.setAttribute("nonce",u),document.head.appendChild(_),d)return new Promise((g,v)=>{_.addEventListener("load",g),_.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return s.then(l=>{for(const u of l||[])u.status==="rejected"&&o(u.reason);return e().catch(o)})};function qF(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:i,onRegistered:s,onRegisteredSW:o,onRegisterError:l}=t;let u,f,d;const m=async(g=!0)=>{await f,await(d==null?void 0:d())};async function _(){if("serviceWorker"in navigator){if(u=await YF(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:g}},[]).then(({Workbox:g})=>new g("/Tesseract/sw.js",{scope:"/Tesseract/",type:"classic"})).catch(g=>{l==null||l(g)}),!u)return;d=async()=>{await(u==null?void 0:u.messageSkipWaiting())};{let g=!1;const v=()=>{g=!0,u==null||u.addEventListener("controlling",S=>{S.isUpdate&&window.location.reload()}),n==null||n()};u.addEventListener("installed",S=>{typeof S.isUpdate>"u"?typeof S.isExternal<"u"?S.isExternal?v():!g&&(i==null||i()):S.isExternal?window.location.reload():!g&&(i==null||i()):S.isUpdate||i==null||i()}),u.addEventListener("waiting",v),u.addEventListener("externalwaiting",v)}u.register({immediate:e}).then(g=>{o?o("/Tesseract/sw.js",g):s==null||s(g)}).catch(g=>{l==null||l(g)})}}return f=_(),m}function jF(t={}){const{immediate:e=!0,onNeedRefresh:n,onOfflineReady:i,onRegistered:s,onRegisteredSW:o,onRegisterError:l}=t,[u,f]=Ln.useState(!1),[d,m]=Ln.useState(!1),[_]=Ln.useState(()=>qF({immediate:e,onOfflineReady(){m(!0),i==null||i()},onNeedRefresh(){f(!0),n==null||n()},onRegistered:s,onRegisteredSW:o,onRegisterError:l}));return{needRefresh:[u,f],offlineReady:[d,m],updateServiceWorker:_}}function $F(){const{offlineReady:[t,e],needRefresh:[n,i],updateServiceWorker:s}=jF({onRegisteredSW(l,u){}});function o(){e(!1),i(!1)}return ve.jsx("div",{className:"PWABadge",role:"alert","aria-labelledby":"toast-message",children:(t||n)&&ve.jsxs("div",{className:"PWABadge-toast",children:[ve.jsx("div",{className:"PWABadge-message",children:t?ve.jsx("span",{id:"toast-message",children:"App ready to work offline"}):ve.jsx("span",{id:"toast-message",children:"New content available, click on reload button to update."})}),ve.jsxs("div",{className:"PWABadge-buttons",children:[n&&ve.jsx("button",{className:"PWABadge-toast-button",onClick:()=>s(!0),children:"Reload"}),ve.jsx("button",{className:"PWABadge-toast-button",onClick:()=>o(),children:"Close"})]})]})})}function KF(){return Ln.useState(0),ve.jsxs(ve.Fragment,{children:[ve.jsx(GF,{}),ve.jsx($F,{})]})}Pp.createRoot(document.getElementById("root")).render(ve.jsx(YP.StrictMode,{children:ve.jsx(KF,{})}));
