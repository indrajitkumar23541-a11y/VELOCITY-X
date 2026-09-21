(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function bv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var wm={exports:{}},zl={},Am={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qa=Symbol.for("react.element"),Lv=Symbol.for("react.portal"),Pv=Symbol.for("react.fragment"),Nv=Symbol.for("react.strict_mode"),Dv=Symbol.for("react.profiler"),Iv=Symbol.for("react.provider"),Uv=Symbol.for("react.context"),Ov=Symbol.for("react.forward_ref"),Fv=Symbol.for("react.suspense"),kv=Symbol.for("react.memo"),zv=Symbol.for("react.lazy"),Ld=Symbol.iterator;function Bv(t){return t===null||typeof t!="object"?null:(t=Ld&&t[Ld]||t["@@iterator"],typeof t=="function"?t:null)}var Cm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rm=Object.assign,bm={};function Bs(t,e,n){this.props=t,this.context=e,this.refs=bm,this.updater=n||Cm}Bs.prototype.isReactComponent={};Bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lm(){}Lm.prototype=Bs.prototype;function _h(t,e,n){this.props=t,this.context=e,this.refs=bm,this.updater=n||Cm}var xh=_h.prototype=new Lm;xh.constructor=_h;Rm(xh,Bs.prototype);xh.isPureReactComponent=!0;var Pd=Array.isArray,Pm=Object.prototype.hasOwnProperty,yh={current:null},Nm={key:!0,ref:!0,__self:!0,__source:!0};function Dm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Pm.call(e,i)&&!Nm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:qa,type:t,key:s,ref:a,props:r,_owner:yh.current}}function Gv(t,e){return{$$typeof:qa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sh(t){return typeof t=="object"&&t!==null&&t.$$typeof===qa}function Hv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nd=/\/+/g;function cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Hv(""+t.key):e.toString(36)}function jo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case qa:case Lv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+cc(a,0):i,Pd(r)?(n="",t!=null&&(n=t.replace(Nd,"$&/")+"/"),jo(r,e,n,"",function(c){return c})):r!=null&&(Sh(r)&&(r=Gv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Nd,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Pd(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+cc(s,o);a+=jo(s,e,n,l,r)}else if(l=Bv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+cc(s,o++),a+=jo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function to(t,e,n){if(t==null)return t;var i=[],r=0;return jo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Vv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},Xo={transition:null},Wv={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:Xo,ReactCurrentOwner:yh};function Im(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:to,forEach:function(t,e,n){to(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return to(t,function(){e++}),e},toArray:function(t){return to(t,function(e){return e})||[]},only:function(t){if(!Sh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Bs;Xe.Fragment=Pv;Xe.Profiler=Dv;Xe.PureComponent=_h;Xe.StrictMode=Nv;Xe.Suspense=Fv;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wv;Xe.act=Im;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Rm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=yh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Pm.call(e,l)&&!Nm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:qa,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:Uv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Iv,_context:t},t.Consumer=t};Xe.createElement=Dm;Xe.createFactory=function(t){var e=Dm.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:Ov,render:t}};Xe.isValidElement=Sh;Xe.lazy=function(t){return{$$typeof:zv,_payload:{_status:-1,_result:t},_init:Vv}};Xe.memo=function(t,e){return{$$typeof:kv,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Xo.transition;Xo.transition={};try{t()}finally{Xo.transition=e}};Xe.unstable_act=Im;Xe.useCallback=function(t,e){return rn.current.useCallback(t,e)};Xe.useContext=function(t){return rn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return rn.current.useEffect(t,e)};Xe.useId=function(){return rn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return rn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};Xe.useRef=function(t){return rn.current.useRef(t)};Xe.useState=function(t){return rn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return rn.current.useTransition()};Xe.version="18.3.1";Am.exports=Xe;var ye=Am.exports;const jv=bv(ye);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv=ye,qv=Symbol.for("react.element"),Yv=Symbol.for("react.fragment"),$v=Object.prototype.hasOwnProperty,Kv=Xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zv={key:!0,ref:!0,__self:!0,__source:!0};function Um(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)$v.call(e,i)&&!Zv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:qv,type:t,key:s,ref:a,props:r,_owner:Kv.current}}zl.Fragment=Yv;zl.jsx=Um;zl.jsxs=Um;wm.exports=zl;var v=wm.exports,fu={},Om={exports:{}},Tn={},Fm={exports:{}},km={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,F){var W=N.length;N.push(F);e:for(;0<W;){var K=W-1>>>1,Q=N[K];if(0<r(Q,F))N[K]=F,N[W]=Q,W=K;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var F=N[0],W=N.pop();if(W!==F){N[0]=W;e:for(var K=0,Q=N.length,Y=Q>>>1;K<Y;){var Z=2*(K+1)-1,le=N[Z],de=Z+1,me=N[de];if(0>r(le,W))de<Q&&0>r(me,le)?(N[K]=me,N[de]=W,K=de):(N[K]=le,N[Z]=W,K=Z);else if(de<Q&&0>r(me,W))N[K]=me,N[de]=W,K=de;else break e}}return F}function r(N,F){var W=N.sortIndex-F.sortIndex;return W!==0?W:N.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,d=null,f=3,m=!1,x=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=N)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function S(N){if(y=!1,_(N),!x)if(n(l)!==null)x=!0,k(b);else{var F=n(c);F!==null&&q(S,F.startTime-N)}}function b(N,F){x=!1,y&&(y=!1,u(I),I=-1),m=!0;var W=f;try{for(_(F),d=n(l);d!==null&&(!(d.expirationTime>F)||N&&!z());){var K=d.callback;if(typeof K=="function"){d.callback=null,f=d.priorityLevel;var Q=K(d.expirationTime<=F);F=t.unstable_now(),typeof Q=="function"?d.callback=Q:d===n(l)&&i(l),_(F)}else i(l);d=n(l)}if(d!==null)var Y=!0;else{var Z=n(c);Z!==null&&q(S,Z.startTime-F),Y=!1}return Y}finally{d=null,f=W,m=!1}}var R=!1,A=null,I=-1,E=5,T=-1;function z(){return!(t.unstable_now()-T<E)}function j(){if(A!==null){var N=t.unstable_now();T=N;var F=!0;try{F=A(!0,N)}finally{F?$():(R=!1,A=null)}}else R=!1}var $;if(typeof g=="function")$=function(){g(j)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,U=P.port2;P.port1.onmessage=j,$=function(){U.postMessage(null)}}else $=function(){p(j,0)};function k(N){A=N,R||(R=!0,$())}function q(N,F){I=p(function(){N(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,k(b))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var W=f;f=F;try{return N()}finally{f=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=f;f=N;try{return F()}finally{f=W}},t.unstable_scheduleCallback=function(N,F,W){var K=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?K+W:K):W=K,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=W+Q,N={id:h++,callback:F,priorityLevel:N,startTime:W,expirationTime:Q,sortIndex:-1},W>K?(N.sortIndex=W,e(c,N),n(l)===null&&N===n(c)&&(y?(u(I),I=-1):y=!0,q(S,W-K))):(N.sortIndex=Q,e(l,N),x||m||(x=!0,k(b))),N},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(N){var F=f;return function(){var W=f;f=F;try{return N.apply(this,arguments)}finally{f=W}}}})(km);Fm.exports=km;var Qv=Fm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv=ye,En=Qv;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zm=new Set,Ta={};function Ir(t,e){Cs(t,e),Cs(t+"Capture",e)}function Cs(t,e){for(Ta[t]=e,t=0;t<e.length;t++)zm.add(e[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=Object.prototype.hasOwnProperty,e_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dd={},Id={};function t_(t){return pu.call(Id,t)?!0:pu.call(Dd,t)?!1:e_.test(t)?Id[t]=!0:(Dd[t]=!0,!1)}function n_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function i_(t,e,n,i){if(e===null||typeof e>"u"||n_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mh=/[\-:]([a-z])/g;function Eh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mh,Eh);Bt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mh,Eh);Bt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mh,Eh);Bt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Th(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(i_(e,n,r,i)&&(n=null),i||r===null?t_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ci=Jv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),is=Symbol.for("react.portal"),rs=Symbol.for("react.fragment"),wh=Symbol.for("react.strict_mode"),mu=Symbol.for("react.profiler"),Bm=Symbol.for("react.provider"),Gm=Symbol.for("react.context"),Ah=Symbol.for("react.forward_ref"),gu=Symbol.for("react.suspense"),vu=Symbol.for("react.suspense_list"),Ch=Symbol.for("react.memo"),Ii=Symbol.for("react.lazy"),Hm=Symbol.for("react.offscreen"),Ud=Symbol.iterator;function qs(t){return t===null||typeof t!="object"?null:(t=Ud&&t[Ud]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,uc;function la(t){if(uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uc=e&&e[1]||""}return`
`+uc+t}var hc=!1;function dc(t,e){if(!t||hc)return"";hc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{hc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?la(t):""}function r_(t){switch(t.tag){case 5:return la(t.type);case 16:return la("Lazy");case 13:return la("Suspense");case 19:return la("SuspenseList");case 0:case 2:case 15:return t=dc(t.type,!1),t;case 11:return t=dc(t.type.render,!1),t;case 1:return t=dc(t.type,!0),t;default:return""}}function _u(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rs:return"Fragment";case is:return"Portal";case mu:return"Profiler";case wh:return"StrictMode";case gu:return"Suspense";case vu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gm:return(t.displayName||"Context")+".Consumer";case Bm:return(t._context.displayName||"Context")+".Provider";case Ah:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ch:return e=t.displayName||null,e!==null?e:_u(t.type)||"Memo";case Ii:e=t._payload,t=t._init;try{return _u(t(e))}catch{}}return null}function s_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _u(e);case 8:return e===wh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function a_(t){var e=Vm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function io(t){t._valueTracker||(t._valueTracker=a_(t))}function Wm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Vm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xu(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Od(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jm(t,e){e=e.checked,e!=null&&Th(t,"checked",e,!1)}function yu(t,e){jm(t,e);var n=Ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Su(t,e.type,n):e.hasOwnProperty("defaultValue")&&Su(t,e.type,Ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Su(t,e,n){(e!=="number"||sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ca=Array.isArray;function _s(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Mu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(ca(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ji(n)}}function Xm(t,e){var n=Ji(e.value),i=Ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function zd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ro,Ym=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},o_=["Webkit","ms","Moz","O"];Object.keys(da).forEach(function(t){o_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),da[e]=da[t]})});function $m(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||da.hasOwnProperty(t)&&da[t]?(""+e).trim():e+"px"}function Km(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=$m(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var l_=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tu(t,e){if(e){if(l_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function wu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Au=null;function Rh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cu=null,xs=null,ys=null;function Bd(t){if(t=Ka(t)){if(typeof Cu!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Wl(e),Cu(t.stateNode,t.type,e))}}function Zm(t){xs?ys?ys.push(t):ys=[t]:xs=t}function Qm(){if(xs){var t=xs,e=ys;if(ys=xs=null,Bd(t),e)for(t=0;t<e.length;t++)Bd(e[t])}}function Jm(t,e){return t(e)}function eg(){}var fc=!1;function tg(t,e,n){if(fc)return t(e,n);fc=!0;try{return Jm(t,e,n)}finally{fc=!1,(xs!==null||ys!==null)&&(eg(),Qm())}}function Aa(t,e){var n=t.stateNode;if(n===null)return null;var i=Wl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Ru=!1;if(Mi)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Ru=!1}function c_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var fa=!1,al=null,ol=!1,bu=null,u_={onError:function(t){fa=!0,al=t}};function h_(t,e,n,i,r,s,a,o,l){fa=!1,al=null,c_.apply(u_,arguments)}function d_(t,e,n,i,r,s,a,o,l){if(h_.apply(this,arguments),fa){if(fa){var c=al;fa=!1,al=null}else throw Error(te(198));ol||(ol=!0,bu=c)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ng(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gd(t){if(Ur(t)!==t)throw Error(te(188))}function f_(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Gd(r),t;if(s===i)return Gd(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function ig(t){return t=f_(t),t!==null?rg(t):null}function rg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rg(t);if(e!==null)return e;t=t.sibling}return null}var sg=En.unstable_scheduleCallback,Hd=En.unstable_cancelCallback,p_=En.unstable_shouldYield,m_=En.unstable_requestPaint,Mt=En.unstable_now,g_=En.unstable_getCurrentPriorityLevel,bh=En.unstable_ImmediatePriority,ag=En.unstable_UserBlockingPriority,ll=En.unstable_NormalPriority,v_=En.unstable_LowPriority,og=En.unstable_IdlePriority,Bl=null,ai=null;function __(t){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(Bl,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:S_,x_=Math.log,y_=Math.LN2;function S_(t){return t>>>=0,t===0?32:31-(x_(t)/y_|0)|0}var so=64,ao=4194304;function ua(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ua(o):(s&=a,s!==0&&(i=ua(s)))}else a=n&~r,a!==0?i=ua(a):s!==0&&(i=ua(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function M_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function E_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Zn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=M_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Lu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lg(){var t=so;return so<<=1,!(so&4194240)&&(so=64),t}function pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ya(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function T_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Lh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function cg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ug,Ph,hg,dg,fg,Pu=!1,oo=[],Hi=null,Vi=null,Wi=null,Ca=new Map,Ra=new Map,Oi=[],w_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vd(t,e){switch(t){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":Ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(e.pointerId)}}function $s(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ka(e),e!==null&&Ph(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function A_(t,e,n,i,r){switch(e){case"focusin":return Hi=$s(Hi,t,e,n,i,r),!0;case"dragenter":return Vi=$s(Vi,t,e,n,i,r),!0;case"mouseover":return Wi=$s(Wi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ca.set(s,$s(Ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ra.set(s,$s(Ra.get(s)||null,t,e,n,i,r)),!0}return!1}function pg(t){var e=vr(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=ng(n),e!==null){t.blockedOn=e,fg(t.priority,function(){hg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Au=i,n.target.dispatchEvent(i),Au=null}else return e=Ka(n),e!==null&&Ph(e),t.blockedOn=n,!1;e.shift()}return!0}function Wd(t,e,n){qo(t)&&n.delete(e)}function C_(){Pu=!1,Hi!==null&&qo(Hi)&&(Hi=null),Vi!==null&&qo(Vi)&&(Vi=null),Wi!==null&&qo(Wi)&&(Wi=null),Ca.forEach(Wd),Ra.forEach(Wd)}function Ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Pu||(Pu=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,C_)))}function ba(t){function e(r){return Ks(r,t)}if(0<oo.length){Ks(oo[0],t);for(var n=1;n<oo.length;n++){var i=oo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Hi!==null&&Ks(Hi,t),Vi!==null&&Ks(Vi,t),Wi!==null&&Ks(Wi,t),Ca.forEach(e),Ra.forEach(e),n=0;n<Oi.length;n++)i=Oi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Oi.length&&(n=Oi[0],n.blockedOn===null);)pg(n),n.blockedOn===null&&Oi.shift()}var Ss=Ci.ReactCurrentBatchConfig,ul=!0;function R_(t,e,n,i){var r=Qe,s=Ss.transition;Ss.transition=null;try{Qe=1,Nh(t,e,n,i)}finally{Qe=r,Ss.transition=s}}function b_(t,e,n,i){var r=Qe,s=Ss.transition;Ss.transition=null;try{Qe=4,Nh(t,e,n,i)}finally{Qe=r,Ss.transition=s}}function Nh(t,e,n,i){if(ul){var r=Nu(t,e,n,i);if(r===null)Tc(t,e,i,hl,n),Vd(t,i);else if(A_(r,t,e,n,i))i.stopPropagation();else if(Vd(t,i),e&4&&-1<w_.indexOf(t)){for(;r!==null;){var s=Ka(r);if(s!==null&&ug(s),s=Nu(t,e,n,i),s===null&&Tc(t,e,i,hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Tc(t,e,i,null,n)}}var hl=null;function Nu(t,e,n,i){if(hl=null,t=Rh(i),t=vr(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ng(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function mg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(g_()){case bh:return 1;case ag:return 4;case ll:case v_:return 16;case og:return 536870912;default:return 16}default:return 16}}var ki=null,Dh=null,Yo=null;function gg(){if(Yo)return Yo;var t,e=Dh,n=e.length,i,r="value"in ki?ki.value:ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Yo=r.slice(t,1<i?1-i:void 0)}function $o(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function jd(){return!1}function wn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lo:jd,this.isPropagationStopped=jd,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),e}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ih=wn(Gs),$a=gt({},Gs,{view:0,detail:0}),L_=wn($a),mc,gc,Zs,Gl=gt({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(mc=t.screenX-Zs.screenX,gc=t.screenY-Zs.screenY):gc=mc=0,Zs=t),mc)},movementY:function(t){return"movementY"in t?t.movementY:gc}}),Xd=wn(Gl),P_=gt({},Gl,{dataTransfer:0}),N_=wn(P_),D_=gt({},$a,{relatedTarget:0}),vc=wn(D_),I_=gt({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),U_=wn(I_),O_=gt({},Gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),F_=wn(O_),k_=gt({},Gs,{data:0}),qd=wn(k_),z_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=G_[t])?!!e[t]:!1}function Uh(){return H_}var V_=gt({},$a,{key:function(t){if(t.key){var e=z_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?B_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uh,charCode:function(t){return t.type==="keypress"?$o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),W_=wn(V_),j_=gt({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yd=wn(j_),X_=gt({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uh}),q_=wn(X_),Y_=gt({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),$_=wn(Y_),K_=gt({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Z_=wn(K_),Q_=[9,13,27,32],Oh=Mi&&"CompositionEvent"in window,pa=null;Mi&&"documentMode"in document&&(pa=document.documentMode);var J_=Mi&&"TextEvent"in window&&!pa,vg=Mi&&(!Oh||pa&&8<pa&&11>=pa),$d=" ",Kd=!1;function _g(t,e){switch(t){case"keyup":return Q_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function ex(t,e){switch(t){case"compositionend":return xg(e);case"keypress":return e.which!==32?null:(Kd=!0,$d);case"textInput":return t=e.data,t===$d&&Kd?null:t;default:return null}}function tx(t,e){if(ss)return t==="compositionend"||!Oh&&_g(t,e)?(t=gg(),Yo=Dh=ki=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vg&&e.locale!=="ko"?null:e.data;default:return null}}var nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nx[t.type]:e==="textarea"}function yg(t,e,n,i){Zm(i),e=dl(e,"onChange"),0<e.length&&(n=new Ih("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ma=null,La=null;function ix(t){Pg(t,0)}function Hl(t){var e=ls(t);if(Wm(e))return t}function rx(t,e){if(t==="change")return e}var Sg=!1;if(Mi){var _c;if(Mi){var xc="oninput"in document;if(!xc){var Qd=document.createElement("div");Qd.setAttribute("oninput","return;"),xc=typeof Qd.oninput=="function"}_c=xc}else _c=!1;Sg=_c&&(!document.documentMode||9<document.documentMode)}function Jd(){ma&&(ma.detachEvent("onpropertychange",Mg),La=ma=null)}function Mg(t){if(t.propertyName==="value"&&Hl(La)){var e=[];yg(e,La,t,Rh(t)),tg(ix,e)}}function sx(t,e,n){t==="focusin"?(Jd(),ma=e,La=n,ma.attachEvent("onpropertychange",Mg)):t==="focusout"&&Jd()}function ax(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(La)}function ox(t,e){if(t==="click")return Hl(e)}function lx(t,e){if(t==="input"||t==="change")return Hl(e)}function cx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:cx;function Pa(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!pu.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function ef(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tf(t,e){var n=ef(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ef(n)}}function Eg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Eg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tg(){for(var t=window,e=sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sl(t.document)}return e}function Fh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ux(t){var e=Tg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Eg(n.ownerDocument.documentElement,n)){if(i!==null&&Fh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=tf(n,s);var a=tf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hx=Mi&&"documentMode"in document&&11>=document.documentMode,as=null,Du=null,ga=null,Iu=!1;function nf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Iu||as==null||as!==sl(i)||(i=as,"selectionStart"in i&&Fh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ga&&Pa(ga,i)||(ga=i,i=dl(Du,"onSelect"),0<i.length&&(e=new Ih("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=as)))}function co(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var os={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},yc={},wg={};Mi&&(wg=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function Vl(t){if(yc[t])return yc[t];if(!os[t])return t;var e=os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in wg)return yc[t]=e[n];return t}var Ag=Vl("animationend"),Cg=Vl("animationiteration"),Rg=Vl("animationstart"),bg=Vl("transitionend"),Lg=new Map,rf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(t,e){Lg.set(t,e),Ir(e,[t])}for(var Sc=0;Sc<rf.length;Sc++){var Mc=rf[Sc],dx=Mc.toLowerCase(),fx=Mc[0].toUpperCase()+Mc.slice(1);nr(dx,"on"+fx)}nr(Ag,"onAnimationEnd");nr(Cg,"onAnimationIteration");nr(Rg,"onAnimationStart");nr("dblclick","onDoubleClick");nr("focusin","onFocus");nr("focusout","onBlur");nr(bg,"onTransitionEnd");Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),px=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function sf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,d_(i,e,void 0,t),t.currentTarget=null}function Pg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;sf(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;sf(r,o,c),s=l}}}if(ol)throw t=bu,ol=!1,bu=null,t}function at(t,e){var n=e[zu];n===void 0&&(n=e[zu]=new Set);var i=t+"__bubble";n.has(i)||(Ng(e,t,2,!1),n.add(i))}function Ec(t,e,n){var i=0;e&&(i|=4),Ng(n,t,i,e)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Na(t){if(!t[uo]){t[uo]=!0,zm.forEach(function(n){n!=="selectionchange"&&(px.has(n)||Ec(n,!1,t),Ec(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[uo]||(e[uo]=!0,Ec("selectionchange",!1,e))}}function Ng(t,e,n,i){switch(mg(e)){case 1:var r=R_;break;case 4:r=b_;break;default:r=Nh}n=r.bind(null,e,n,t),r=void 0,!Ru||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Tc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=vr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}tg(function(){var c=s,h=Rh(n),d=[];e:{var f=Lg.get(t);if(f!==void 0){var m=Ih,x=t;switch(t){case"keypress":if($o(n)===0)break e;case"keydown":case"keyup":m=W_;break;case"focusin":x="focus",m=vc;break;case"focusout":x="blur",m=vc;break;case"beforeblur":case"afterblur":m=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=N_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=q_;break;case Ag:case Cg:case Rg:m=U_;break;case bg:m=$_;break;case"scroll":m=L_;break;case"wheel":m=Z_;break;case"copy":case"cut":case"paste":m=F_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Yd}var y=(e&4)!==0,p=!y&&t==="scroll",u=y?f!==null?f+"Capture":null:f;y=[];for(var g=c,_;g!==null;){_=g;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,u!==null&&(S=Aa(g,u),S!=null&&y.push(Da(g,S,_)))),p)break;g=g.return}0<y.length&&(f=new m(f,x,null,n,h),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Au&&(x=n.relatedTarget||n.fromElement)&&(vr(x)||x[Ei]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?vr(x):null,x!==null&&(p=Ur(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(y=Xd,S="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Yd,S="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?f:ls(m),_=x==null?f:ls(x),f=new y(S,g+"leave",m,n,h),f.target=p,f.relatedTarget=_,S=null,vr(h)===c&&(y=new y(u,g+"enter",x,n,h),y.target=_,y.relatedTarget=p,S=y),p=S,m&&x)t:{for(y=m,u=x,g=0,_=y;_;_=kr(_))g++;for(_=0,S=u;S;S=kr(S))_++;for(;0<g-_;)y=kr(y),g--;for(;0<_-g;)u=kr(u),_--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=kr(y),u=kr(u)}y=null}else y=null;m!==null&&af(d,f,m,y,!1),x!==null&&p!==null&&af(d,p,x,y,!0)}}e:{if(f=c?ls(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var b=rx;else if(Zd(f))if(Sg)b=lx;else{b=ax;var R=sx}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=ox);if(b&&(b=b(t,c))){yg(d,b,n,h);break e}R&&R(t,f,c),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&Su(f,"number",f.value)}switch(R=c?ls(c):window,t){case"focusin":(Zd(R)||R.contentEditable==="true")&&(as=R,Du=c,ga=null);break;case"focusout":ga=Du=as=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,nf(d,n,h);break;case"selectionchange":if(hx)break;case"keydown":case"keyup":nf(d,n,h)}var A;if(Oh)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else ss?_g(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(vg&&n.locale!=="ko"&&(ss||I!=="onCompositionStart"?I==="onCompositionEnd"&&ss&&(A=gg()):(ki=h,Dh="value"in ki?ki.value:ki.textContent,ss=!0)),R=dl(c,I),0<R.length&&(I=new qd(I,t,null,n,h),d.push({event:I,listeners:R}),A?I.data=A:(A=xg(n),A!==null&&(I.data=A)))),(A=J_?ex(t,n):tx(t,n))&&(c=dl(c,"onBeforeInput"),0<c.length&&(h=new qd("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=A))}Pg(d,e)})}function Da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Aa(t,n),s!=null&&i.unshift(Da(t,s,r)),s=Aa(t,e),s!=null&&i.push(Da(t,s,r))),t=t.return}return i}function kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function af(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Aa(n,s),l!=null&&a.unshift(Da(n,l,o))):r||(l=Aa(n,s),l!=null&&a.push(Da(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var mx=/\r\n?/g,gx=/\u0000|\uFFFD/g;function of(t){return(typeof t=="string"?t:""+t).replace(mx,`
`).replace(gx,"")}function ho(t,e,n){if(e=of(e),of(t)!==e&&n)throw Error(te(425))}function fl(){}var Uu=null,Ou=null;function Fu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ku=typeof setTimeout=="function"?setTimeout:void 0,vx=typeof clearTimeout=="function"?clearTimeout:void 0,lf=typeof Promise=="function"?Promise:void 0,_x=typeof queueMicrotask=="function"?queueMicrotask:typeof lf<"u"?function(t){return lf.resolve(null).then(t).catch(xx)}:ku;function xx(t){setTimeout(function(){throw t})}function wc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ba(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ba(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),ri="__reactFiber$"+Hs,Ia="__reactProps$"+Hs,Ei="__reactContainer$"+Hs,zu="__reactEvents$"+Hs,yx="__reactListeners$"+Hs,Sx="__reactHandles$"+Hs;function vr(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ei]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cf(t);t!==null;){if(n=t[ri])return n;t=cf(t)}return e}t=n,n=t.parentNode}return null}function Ka(t){return t=t[ri]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Wl(t){return t[Ia]||null}var Bu=[],cs=-1;function ir(t){return{current:t}}function lt(t){0>cs||(t.current=Bu[cs],Bu[cs]=null,cs--)}function rt(t,e){cs++,Bu[cs]=t.current,t.current=e}var er={},Yt=ir(er),cn=ir(!1),Ar=er;function Rs(t,e){var n=t.type.contextTypes;if(!n)return er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function pl(){lt(cn),lt(Yt)}function uf(t,e,n){if(Yt.current!==er)throw Error(te(168));rt(Yt,e),rt(cn,n)}function Dg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,s_(t)||"Unknown",r));return gt({},n,i)}function ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Ar=Yt.current,rt(Yt,t),rt(cn,cn.current),!0}function hf(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=Dg(t,e,Ar),i.__reactInternalMemoizedMergedChildContext=t,lt(cn),lt(Yt),rt(Yt,t)):lt(cn),rt(cn,n)}var vi=null,jl=!1,Ac=!1;function Ig(t){vi===null?vi=[t]:vi.push(t)}function Mx(t){jl=!0,Ig(t)}function rr(){if(!Ac&&vi!==null){Ac=!0;var t=0,e=Qe;try{var n=vi;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}vi=null,jl=!1}catch(r){throw vi!==null&&(vi=vi.slice(t+1)),sg(bh,rr),r}finally{Qe=e,Ac=!1}}return null}var us=[],hs=0,gl=null,vl=0,Rn=[],bn=0,Cr=null,_i=1,xi="";function hr(t,e){us[hs++]=vl,us[hs++]=gl,gl=t,vl=e}function Ug(t,e,n){Rn[bn++]=_i,Rn[bn++]=xi,Rn[bn++]=Cr,Cr=t;var i=_i;t=xi;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var s=32-Zn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,_i=1<<32-Zn(e)+r|n<<r|i,xi=s+t}else _i=1<<s|n<<r|i,xi=t}function kh(t){t.return!==null&&(hr(t,1),Ug(t,1,0))}function zh(t){for(;t===gl;)gl=us[--hs],us[hs]=null,vl=us[--hs],us[hs]=null;for(;t===Cr;)Cr=Rn[--bn],Rn[bn]=null,xi=Rn[--bn],Rn[bn]=null,_i=Rn[--bn],Rn[bn]=null}var Mn=null,yn=null,ut=!1,Xn=null;function Og(t,e){var n=Dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function df(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mn=t,yn=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:_i,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mn=t,yn=null,!0):!1;default:return!1}}function Gu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hu(t){if(ut){var e=yn;if(e){var n=e;if(!df(t,e)){if(Gu(t))throw Error(te(418));e=ji(n.nextSibling);var i=Mn;e&&df(t,e)?Og(i,n):(t.flags=t.flags&-4097|2,ut=!1,Mn=t)}}else{if(Gu(t))throw Error(te(418));t.flags=t.flags&-4097|2,ut=!1,Mn=t}}}function ff(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function fo(t){if(t!==Mn)return!1;if(!ut)return ff(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fu(t.type,t.memoizedProps)),e&&(e=yn)){if(Gu(t))throw Fg(),Error(te(418));for(;e;)Og(t,e),e=ji(e.nextSibling)}if(ff(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Mn?ji(t.stateNode.nextSibling):null;return!0}function Fg(){for(var t=yn;t;)t=ji(t.nextSibling)}function bs(){yn=Mn=null,ut=!1}function Bh(t){Xn===null?Xn=[t]:Xn.push(t)}var Ex=Ci.ReactCurrentBatchConfig;function Qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function po(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pf(t){var e=t._init;return e(t._payload)}function kg(t){function e(u,g){if(t){var _=u.deletions;_===null?(u.deletions=[g],u.flags|=16):_.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=$i(u,g),u.index=0,u.sibling=null,u}function s(u,g,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<g?(u.flags|=2,g):_):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,_,S){return g===null||g.tag!==6?(g=Dc(_,u.mode,S),g.return=u,g):(g=r(g,_),g.return=u,g)}function l(u,g,_,S){var b=_.type;return b===rs?h(u,g,_.props.children,S,_.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ii&&pf(b)===g.type)?(S=r(g,_.props),S.ref=Qs(u,g,_),S.return=u,S):(S=nl(_.type,_.key,_.props,null,u.mode,S),S.ref=Qs(u,g,_),S.return=u,S)}function c(u,g,_,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Ic(_,u.mode,S),g.return=u,g):(g=r(g,_.children||[]),g.return=u,g)}function h(u,g,_,S,b){return g===null||g.tag!==7?(g=Sr(_,u.mode,S,b),g.return=u,g):(g=r(g,_),g.return=u,g)}function d(u,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Dc(""+g,u.mode,_),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case no:return _=nl(g.type,g.key,g.props,null,u.mode,_),_.ref=Qs(u,null,g),_.return=u,_;case is:return g=Ic(g,u.mode,_),g.return=u,g;case Ii:var S=g._init;return d(u,S(g._payload),_)}if(ca(g)||qs(g))return g=Sr(g,u.mode,_,null),g.return=u,g;po(u,g)}return null}function f(u,g,_,S){var b=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:o(u,g,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case no:return _.key===b?l(u,g,_,S):null;case is:return _.key===b?c(u,g,_,S):null;case Ii:return b=_._init,f(u,g,b(_._payload),S)}if(ca(_)||qs(_))return b!==null?null:h(u,g,_,S,null);po(u,_)}return null}function m(u,g,_,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(_)||null,o(g,u,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case no:return u=u.get(S.key===null?_:S.key)||null,l(g,u,S,b);case is:return u=u.get(S.key===null?_:S.key)||null,c(g,u,S,b);case Ii:var R=S._init;return m(u,g,_,R(S._payload),b)}if(ca(S)||qs(S))return u=u.get(_)||null,h(g,u,S,b,null);po(g,S)}return null}function x(u,g,_,S){for(var b=null,R=null,A=g,I=g=0,E=null;A!==null&&I<_.length;I++){A.index>I?(E=A,A=null):E=A.sibling;var T=f(u,A,_[I],S);if(T===null){A===null&&(A=E);break}t&&A&&T.alternate===null&&e(u,A),g=s(T,g,I),R===null?b=T:R.sibling=T,R=T,A=E}if(I===_.length)return n(u,A),ut&&hr(u,I),b;if(A===null){for(;I<_.length;I++)A=d(u,_[I],S),A!==null&&(g=s(A,g,I),R===null?b=A:R.sibling=A,R=A);return ut&&hr(u,I),b}for(A=i(u,A);I<_.length;I++)E=m(A,u,I,_[I],S),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?I:E.key),g=s(E,g,I),R===null?b=E:R.sibling=E,R=E);return t&&A.forEach(function(z){return e(u,z)}),ut&&hr(u,I),b}function y(u,g,_,S){var b=qs(_);if(typeof b!="function")throw Error(te(150));if(_=b.call(_),_==null)throw Error(te(151));for(var R=b=null,A=g,I=g=0,E=null,T=_.next();A!==null&&!T.done;I++,T=_.next()){A.index>I?(E=A,A=null):E=A.sibling;var z=f(u,A,T.value,S);if(z===null){A===null&&(A=E);break}t&&A&&z.alternate===null&&e(u,A),g=s(z,g,I),R===null?b=z:R.sibling=z,R=z,A=E}if(T.done)return n(u,A),ut&&hr(u,I),b;if(A===null){for(;!T.done;I++,T=_.next())T=d(u,T.value,S),T!==null&&(g=s(T,g,I),R===null?b=T:R.sibling=T,R=T);return ut&&hr(u,I),b}for(A=i(u,A);!T.done;I++,T=_.next())T=m(A,u,I,T.value,S),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?I:T.key),g=s(T,g,I),R===null?b=T:R.sibling=T,R=T);return t&&A.forEach(function(j){return e(u,j)}),ut&&hr(u,I),b}function p(u,g,_,S){if(typeof _=="object"&&_!==null&&_.type===rs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case no:e:{for(var b=_.key,R=g;R!==null;){if(R.key===b){if(b=_.type,b===rs){if(R.tag===7){n(u,R.sibling),g=r(R,_.props.children),g.return=u,u=g;break e}}else if(R.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ii&&pf(b)===R.type){n(u,R.sibling),g=r(R,_.props),g.ref=Qs(u,R,_),g.return=u,u=g;break e}n(u,R);break}else e(u,R);R=R.sibling}_.type===rs?(g=Sr(_.props.children,u.mode,S,_.key),g.return=u,u=g):(S=nl(_.type,_.key,_.props,null,u.mode,S),S.ref=Qs(u,g,_),S.return=u,u=S)}return a(u);case is:e:{for(R=_.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(u,g.sibling),g=r(g,_.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Ic(_,u.mode,S),g.return=u,u=g}return a(u);case Ii:return R=_._init,p(u,g,R(_._payload),S)}if(ca(_))return x(u,g,_,S);if(qs(_))return y(u,g,_,S);po(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,_),g.return=u,u=g):(n(u,g),g=Dc(_,u.mode,S),g.return=u,u=g),a(u)):n(u,g)}return p}var Ls=kg(!0),zg=kg(!1),_l=ir(null),xl=null,ds=null,Gh=null;function Hh(){Gh=ds=xl=null}function Vh(t){var e=_l.current;lt(_l),t._currentValue=e}function Vu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ms(t,e){xl=t,Gh=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function Fn(t){var e=t._currentValue;if(Gh!==t)if(t={context:t,memoizedValue:e,next:null},ds===null){if(xl===null)throw Error(te(308));ds=t,xl.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return e}var _r=null;function Wh(t){_r===null?_r=[t]:_r.push(t)}function Bg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Wh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ti(t,i)}function Ti(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ui=!1;function jh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ti(t,n)}return r=i.interleaved,r===null?(e.next=e,Wh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ti(t,n)}function Ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lh(t,n)}}function mf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yl(t,e,n,i){var r=t.updateQueue;Ui=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,h=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,y=o;switch(f=e,m=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){d=x.call(m,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(m,d,f):x,f==null)break e;d=gt({},d,f);break e;case 2:Ui=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=m,l=d):h=h.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);br|=a,t.lanes=a,t.memoizedState=d}}function gf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Za={},oi=ir(Za),Ua=ir(Za),Oa=ir(Za);function xr(t){if(t===Za)throw Error(te(174));return t}function Xh(t,e){switch(rt(Oa,e),rt(Ua,t),rt(oi,Za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Eu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Eu(e,t)}lt(oi),rt(oi,e)}function Ps(){lt(oi),lt(Ua),lt(Oa)}function Hg(t){xr(Oa.current);var e=xr(oi.current),n=Eu(e,t.type);e!==n&&(rt(Ua,t),rt(oi,n))}function qh(t){Ua.current===t&&(lt(oi),lt(Ua))}var pt=ir(0);function Sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cc=[];function Yh(){for(var t=0;t<Cc.length;t++)Cc[t]._workInProgressVersionPrimary=null;Cc.length=0}var Zo=Ci.ReactCurrentDispatcher,Rc=Ci.ReactCurrentBatchConfig,Rr=0,mt=null,Ct=null,Ut=null,Ml=!1,va=!1,Fa=0,Tx=0;function Ht(){throw Error(te(321))}function $h(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function Kh(t,e,n,i,r,s){if(Rr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zo.current=t===null||t.memoizedState===null?Rx:bx,t=n(i,r),va){s=0;do{if(va=!1,Fa=0,25<=s)throw Error(te(301));s+=1,Ut=Ct=null,e.updateQueue=null,Zo.current=Lx,t=n(i,r)}while(va)}if(Zo.current=El,e=Ct!==null&&Ct.next!==null,Rr=0,Ut=Ct=mt=null,Ml=!1,e)throw Error(te(300));return t}function Zh(){var t=Fa!==0;return Fa=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?mt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function kn(){if(Ct===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Ut===null?mt.memoizedState:Ut.next;if(e!==null)Ut=e,Ct=t;else{if(t===null)throw Error(te(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Ut===null?mt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function ka(t,e){return typeof e=="function"?e(t):e}function bc(t){var e=kn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Rr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,mt.lanes|=h,br|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Jn(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lc(t){var e=kn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Jn(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Vg(){}function Wg(t,e){var n=mt,i=kn(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,Qh(qg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,za(9,Xg.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(te(349));Rr&30||jg(n,e,r)}return r}function jg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Xg(t,e,n,i){e.value=n,e.getSnapshot=i,Yg(e)&&$g(t)}function qg(t,e,n){return n(function(){Yg(e)&&$g(t)})}function Yg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function $g(t){var e=Ti(t,1);e!==null&&Qn(e,t,1,-1)}function vf(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:t},e.queue=t,t=t.dispatch=Cx.bind(null,mt,t),[e.memoizedState,t]}function za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Kg(){return kn().memoizedState}function Qo(t,e,n,i){var r=ni();mt.flags|=t,r.memoizedState=za(1|e,n,void 0,i===void 0?null:i)}function Xl(t,e,n,i){var r=kn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var a=Ct.memoizedState;if(s=a.destroy,i!==null&&$h(i,a.deps)){r.memoizedState=za(e,n,s,i);return}}mt.flags|=t,r.memoizedState=za(1|e,n,s,i)}function _f(t,e){return Qo(8390656,8,t,e)}function Qh(t,e){return Xl(2048,8,t,e)}function Zg(t,e){return Xl(4,2,t,e)}function Qg(t,e){return Xl(4,4,t,e)}function Jg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function e0(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4,4,Jg.bind(null,e,t),n)}function Jh(){}function t0(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&$h(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function n0(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&$h(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function i0(t,e,n){return Rr&21?(Jn(n,e)||(n=lg(),mt.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function wx(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=Rc.transition;Rc.transition={};try{t(!1),e()}finally{Qe=n,Rc.transition=i}}function r0(){return kn().memoizedState}function Ax(t,e,n){var i=Yi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},s0(t))a0(e,n);else if(n=Bg(t,e,n,i),n!==null){var r=nn();Qn(n,t,i,r),o0(n,e,i)}}function Cx(t,e,n){var i=Yi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(s0(t))a0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Jn(o,a)){var l=e.interleaved;l===null?(r.next=r,Wh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Bg(t,e,r,i),n!==null&&(r=nn(),Qn(n,t,i,r),o0(n,e,i))}}function s0(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function a0(t,e){va=Ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function o0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lh(t,n)}}var El={readContext:Fn,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},Rx={readContext:Fn,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:Fn,useEffect:_f,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qo(4194308,4,Jg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qo(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ax.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:vf,useDebugValue:Jh,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=vf(!1),e=t[0];return t=wx.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=ni();if(ut){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Ot===null)throw Error(te(349));Rr&30||jg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,_f(qg.bind(null,i,s,t),[t]),i.flags|=2048,za(9,Xg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=Ot.identifierPrefix;if(ut){var n=xi,i=_i;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Tx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bx={readContext:Fn,useCallback:t0,useContext:Fn,useEffect:Qh,useImperativeHandle:e0,useInsertionEffect:Zg,useLayoutEffect:Qg,useMemo:n0,useReducer:bc,useRef:Kg,useState:function(){return bc(ka)},useDebugValue:Jh,useDeferredValue:function(t){var e=kn();return i0(e,Ct.memoizedState,t)},useTransition:function(){var t=bc(ka)[0],e=kn().memoizedState;return[t,e]},useMutableSource:Vg,useSyncExternalStore:Wg,useId:r0,unstable_isNewReconciler:!1},Lx={readContext:Fn,useCallback:t0,useContext:Fn,useEffect:Qh,useImperativeHandle:e0,useInsertionEffect:Zg,useLayoutEffect:Qg,useMemo:n0,useReducer:Lc,useRef:Kg,useState:function(){return Lc(ka)},useDebugValue:Jh,useDeferredValue:function(t){var e=kn();return Ct===null?e.memoizedState=t:i0(e,Ct.memoizedState,t)},useTransition:function(){var t=Lc(ka)[0],e=kn().memoizedState;return[t,e]},useMutableSource:Vg,useSyncExternalStore:Wg,useId:r0,unstable_isNewReconciler:!1};function Wn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ql={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=Yi(t),s=Si(i,r);s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(Qn(e,t,r,i),Ko(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=Yi(t),s=Si(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(Qn(e,t,r,i),Ko(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=Yi(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=Xi(t,r,i),e!==null&&(Qn(e,t,i,n),Ko(e,t,i))}};function xf(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Pa(n,i)||!Pa(r,s):!0}function l0(t,e,n){var i=!1,r=er,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(r=un(e)?Ar:Yt.current,i=e.contextTypes,s=(i=i!=null)?Rs(t,r):er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ql,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function yf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ql.enqueueReplaceState(e,e.state,null)}function ju(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},jh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Fn(s):(s=un(e)?Ar:Yt.current,r.context=Rs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ql.enqueueReplaceState(r,r.state,null),yl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,e){try{var n="",i=e;do n+=r_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Px=typeof WeakMap=="function"?WeakMap:Map;function c0(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){wl||(wl=!0,nh=i),Xu(t,e)},n}function u0(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Xu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xu(t,e),typeof i!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Sf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Px;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=jx.bind(null,t,e,n),e.then(t,t))}function Mf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ef(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,Xi(n,e,1))),n.lanes|=1),t)}var Nx=Ci.ReactCurrentOwner,ln=!1;function en(t,e,n,i){e.child=t===null?zg(e,null,n,i):Ls(e,t.child,n,i)}function Tf(t,e,n,i,r){n=n.render;var s=e.ref;return Ms(e,r),i=Kh(t,e,n,i,s,r),n=Zh(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(ut&&n&&kh(e),e.flags|=1,en(t,e,i,r),e.child)}function wf(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!od(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,h0(t,e,s,i,r)):(t=nl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(a,i)&&t.ref===e.ref)return wi(t,e,r)}return e.flags|=1,t=$i(s,i),t.ref=e.ref,t.return=e,e.child=t}function h0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Pa(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,wi(t,e,r)}return qu(t,e,n,i,r)}function d0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(ps,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(ps,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(ps,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(ps,_n),_n|=i;return en(t,e,r,n),e.child}function f0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qu(t,e,n,i,r){var s=un(n)?Ar:Yt.current;return s=Rs(e,s),Ms(e,r),n=Kh(t,e,n,i,s,r),i=Zh(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(ut&&i&&kh(e),e.flags|=1,en(t,e,n,r),e.child)}function Af(t,e,n,i,r){if(un(n)){var s=!0;ml(e)}else s=!1;if(Ms(e,r),e.stateNode===null)Jo(t,e),l0(e,n,i),ju(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fn(c):(c=un(n)?Ar:Yt.current,c=Rs(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&yf(e,a,i,c),Ui=!1;var f=e.memoizedState;a.state=f,yl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||cn.current||Ui?(typeof h=="function"&&(Wu(e,n,h,i),l=e.memoizedState),(o=Ui||xf(e,n,o,i,f,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Gg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Wn(e.type,o),a.props=c,d=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=un(n)?Ar:Yt.current,l=Rs(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||f!==l)&&yf(e,a,i,l),Ui=!1,f=e.memoizedState,a.state=f,yl(e,i,a,r);var x=e.memoizedState;o!==d||f!==x||cn.current||Ui?(typeof m=="function"&&(Wu(e,n,m,i),x=e.memoizedState),(c=Ui||xf(e,n,c,i,f,x,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Yu(t,e,n,i,s,r)}function Yu(t,e,n,i,r,s){f0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&hf(e,n,!1),wi(t,e,s);i=e.stateNode,Nx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ls(e,t.child,null,s),e.child=Ls(e,null,o,s)):en(t,e,o,s),e.memoizedState=i.state,r&&hf(e,n,!0),e.child}function p0(t){var e=t.stateNode;e.pendingContext?uf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&uf(t,e.context,!1),Xh(t,e.containerInfo)}function Cf(t,e,n,i,r){return bs(),Bh(r),e.flags|=256,en(t,e,n,i),e.child}var $u={dehydrated:null,treeContext:null,retryLane:0};function Ku(t){return{baseLanes:t,cachePool:null,transitions:null}}function m0(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(pt,r&1),t===null)return Hu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Kl(a,i,0,null),t=Sr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ku(n),e.memoizedState=$u,t):ed(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Dx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=$i(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=$i(o,s):(s=Sr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Ku(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=$u,i}return s=t.child,t=s.sibling,i=$i(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ed(t,e){return e=Kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mo(t,e,n,i){return i!==null&&Bh(i),Ls(e,t.child,null,n),t=ed(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Dx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Pc(Error(te(422))),mo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Kl({mode:"visible",children:i.children},r,0,null),s=Sr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ls(e,t.child,null,a),e.child.memoizedState=Ku(a),e.memoizedState=$u,s);if(!(e.mode&1))return mo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(te(419)),i=Pc(s,i,void 0),mo(t,e,a,i)}if(o=(a&t.childLanes)!==0,ln||o){if(i=Ot,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ti(t,r),Qn(i,t,r,-1))}return ad(),i=Pc(Error(te(421))),mo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Xx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=ji(r.nextSibling),Mn=e,ut=!0,Xn=null,t!==null&&(Rn[bn++]=_i,Rn[bn++]=xi,Rn[bn++]=Cr,_i=t.id,xi=t.overflow,Cr=e),e=ed(e,i.children),e.flags|=4096,e)}function Rf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Vu(t.return,e,n)}function Nc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function g0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rf(t,n,e);else if(t.tag===19)Rf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Sl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Nc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Sl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Nc(e,!0,n,null,s);break;case"together":Nc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=$i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ix(t,e,n){switch(e.tag){case 3:p0(e),bs();break;case 5:Hg(e);break;case 1:un(e.type)&&ml(e);break;case 4:Xh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(_l,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?m0(t,e,n):(rt(pt,pt.current&1),t=wi(t,e,n),t!==null?t.sibling:null);rt(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return g0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,d0(t,e,n)}return wi(t,e,n)}var v0,Zu,_0,x0;v0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zu=function(){};_0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,xr(oi.current);var s=null;switch(n){case"input":r=xu(t,r),i=xu(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=Mu(t,r),i=Mu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=fl)}Tu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ta.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r?.[c],i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ta.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};x0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Js(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ux(t,e,n){var i=e.pendingProps;switch(zh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return un(e.type)&&pl(),Vt(e),null;case 3:return i=e.stateNode,Ps(),lt(cn),lt(Yt),Yh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(sh(Xn),Xn=null))),Zu(t,e),Vt(e),null;case 5:qh(e);var r=xr(Oa.current);if(n=e.type,t!==null&&e.stateNode!=null)_0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Vt(e),null}if(t=xr(oi.current),fo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ri]=e,i[Ia]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<ha.length;r++)at(ha[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":Od(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":kd(i,s),at("invalid",i)}Tu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",""+o]):Ta.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&at("scroll",i)}switch(n){case"input":io(i),Fd(i,s,!0);break;case"textarea":io(i),zd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=fl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ri]=e,t[Ia]=i,v0(t,e,!1,!1),e.stateNode=t;e:{switch(a=wu(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<ha.length;r++)at(ha[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":Od(t,i),r=xu(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),at("invalid",t);break;case"textarea":kd(t,i),r=Mu(t,i),at("invalid",t);break;default:r=i}Tu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Km(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ym(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wa(t,l):typeof l=="number"&&wa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&Th(t,s,l,a))}switch(n){case"input":io(t),Fd(t,i,!1);break;case"textarea":io(t),zd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?_s(t,!!i.multiple,s,!1):i.defaultValue!=null&&_s(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=fl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)x0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=xr(Oa.current),xr(oi.current),fo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(s=i.nodeValue!==n)&&(t=Mn,t!==null))switch(t.tag){case 3:ho(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return Vt(e),null;case 13:if(lt(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&yn!==null&&e.mode&1&&!(e.flags&128))Fg(),bs(),e.flags|=98560,s=!1;else if(s=fo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ri]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Xn!==null&&(sh(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Rt===0&&(Rt=3):ad())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Ps(),Zu(t,e),t===null&&Na(e.stateNode.containerInfo),Vt(e),null;case 10:return Vh(e.type._context),Vt(e),null;case 17:return un(e.type)&&pl(),Vt(e),null;case 19:if(lt(pt),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Js(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Sl(t),a!==null){for(e.flags|=128,Js(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>Ds&&(e.flags|=128,i=!0,Js(s,!1),e.lanes=4194304)}else{if(!i)if(t=Sl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ut)return Vt(e),null}else 2*Mt()-s.renderingStartTime>Ds&&n!==1073741824&&(e.flags|=128,i=!0,Js(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=pt.current,rt(pt,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return sd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function Ox(t,e){switch(zh(e),e.tag){case 1:return un(e.type)&&pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ps(),lt(cn),lt(Yt),Yh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qh(e),null;case 13:if(lt(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(pt),null;case 4:return Ps(),null;case 10:return Vh(e.type._context),null;case 22:case 23:return sd(),null;case 24:return null;default:return null}}var go=!1,Xt=!1,Fx=typeof WeakSet=="function"?WeakSet:Set,he=null;function fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function Qu(t,e,n){try{n()}catch(i){xt(t,e,i)}}var bf=!1;function kx(t,e){if(Uu=ul,t=Tg(),Fh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,d=t,f=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++h===i&&(l=a),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ou={focusedElem:t,selectionRange:n},ul=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,p=x.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Wn(e.type,y),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(S){xt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return x=bf,bf=!1,x}function _a(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Qu(e,n,s)}r=r.next}while(r!==i)}}function Yl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ju(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function y0(t){var e=t.alternate;e!==null&&(t.alternate=null,y0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[Ia],delete e[zu],delete e[yx],delete e[Sx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function S0(t){return t.tag===5||t.tag===3||t.tag===4}function Lf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||S0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function eh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fl));else if(i!==4&&(t=t.child,t!==null))for(eh(t,e,n),t=t.sibling;t!==null;)eh(t,e,n),t=t.sibling}function th(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(th(t,e,n),t=t.sibling;t!==null;)th(t,e,n),t=t.sibling}var Ft=null,jn=!1;function Ri(t,e,n){for(n=n.child;n!==null;)M0(t,e,n),n=n.sibling}function M0(t,e,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 5:Xt||fs(n,e);case 6:var i=Ft,r=jn;Ft=null,Ri(t,e,n),Ft=i,jn=r,Ft!==null&&(jn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(jn?(t=Ft,n=n.stateNode,t.nodeType===8?wc(t.parentNode,n):t.nodeType===1&&wc(t,n),ba(t)):wc(Ft,n.stateNode));break;case 4:i=Ft,r=jn,Ft=n.stateNode.containerInfo,jn=!0,Ri(t,e,n),Ft=i,jn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Qu(n,e,a),r=r.next}while(r!==i)}Ri(t,e,n);break;case 1:if(!Xt&&(fs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){xt(n,e,o)}Ri(t,e,n);break;case 21:Ri(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Ri(t,e,n),Xt=i):Ri(t,e,n);break;default:Ri(t,e,n)}}function Pf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Fx),e.forEach(function(i){var r=qx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ft=o.stateNode,jn=!1;break e;case 3:Ft=o.stateNode.containerInfo,jn=!0;break e;case 4:Ft=o.stateNode.containerInfo,jn=!0;break e}o=o.return}if(Ft===null)throw Error(te(160));M0(s,a,r),Ft=null,jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)E0(e,t),e=e.sibling}function E0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ti(t),i&4){try{_a(3,t,t.return),Yl(3,t)}catch(y){xt(t,t.return,y)}try{_a(5,t,t.return)}catch(y){xt(t,t.return,y)}}break;case 1:Bn(e,t),ti(t),i&512&&n!==null&&fs(n,n.return);break;case 5:if(Bn(e,t),ti(t),i&512&&n!==null&&fs(n,n.return),t.flags&32){var r=t.stateNode;try{wa(r,"")}catch(y){xt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&jm(r,s),wu(o,a);var c=wu(o,s);for(a=0;a<l.length;a+=2){var h=l[a],d=l[a+1];h==="style"?Km(r,d):h==="dangerouslySetInnerHTML"?Ym(r,d):h==="children"?wa(r,d):Th(r,h,d,c)}switch(o){case"input":yu(r,s);break;case"textarea":Xm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?_s(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?_s(r,!!s.multiple,s.defaultValue,!0):_s(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ia]=s}catch(y){xt(t,t.return,y)}}break;case 6:if(Bn(e,t),ti(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){xt(t,t.return,y)}}break;case 3:if(Bn(e,t),ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ba(e.containerInfo)}catch(y){xt(t,t.return,y)}break;case 4:Bn(e,t),ti(t);break;case 13:Bn(e,t),ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(id=Mt())),i&4&&Pf(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||h,Bn(e,t),Xt=c):Bn(e,t),ti(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(he=t,h=t.child;h!==null;){for(d=he=h;he!==null;){switch(f=he,m=f.child,f.tag){case 0:case 11:case 14:case 15:_a(4,f,f.return);break;case 1:fs(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){xt(i,n,y)}}break;case 5:fs(f,f.return);break;case 22:if(f.memoizedState!==null){Df(d);continue}}m!==null?(m.return=f,he=m):Df(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=$m("display",a))}catch(y){xt(t,t.return,y)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){xt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Bn(e,t),ti(t),i&4&&Pf(t);break;case 21:break;default:Bn(e,t),ti(t)}}function ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(S0(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(wa(r,""),i.flags&=-33);var s=Lf(t);th(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Lf(t);eh(t,o,a);break;default:throw Error(te(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zx(t,e,n){he=t,T0(t)}function T0(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||go;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Xt;o=go;var c=Xt;if(go=a,(Xt=l)&&!c)for(he=r;he!==null;)a=he,l=a.child,a.tag===22&&a.memoizedState!==null?If(r):l!==null?(l.return=a,he=l):If(r);for(;s!==null;)he=s,T0(s),s=s.sibling;he=r,go=o,Xt=c}Nf(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):Nf(t)}}function Nf(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Yl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gf(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gf(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&ba(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Xt||e.flags&512&&Ju(e)}catch(f){xt(e,e.return,f)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function Df(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function If(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yl(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{Ju(e)}catch(l){xt(e,s,l)}break;case 5:var a=e.return;try{Ju(e)}catch(l){xt(e,a,l)}}}catch(l){xt(e,e.return,l)}if(e===t){he=null;break}var o=e.sibling;if(o!==null){o.return=e.return,he=o;break}he=e.return}}var Bx=Math.ceil,Tl=Ci.ReactCurrentDispatcher,td=Ci.ReactCurrentOwner,In=Ci.ReactCurrentBatchConfig,$e=0,Ot=null,At=null,zt=0,_n=0,ps=ir(0),Rt=0,Ba=null,br=0,$l=0,nd=0,xa=null,on=null,id=0,Ds=1/0,gi=null,wl=!1,nh=null,qi=null,vo=!1,zi=null,Al=0,ya=0,ih=null,el=-1,tl=0;function nn(){return $e&6?Mt():el!==-1?el:el=Mt()}function Yi(t){return t.mode&1?$e&2&&zt!==0?zt&-zt:Ex.transition!==null?(tl===0&&(tl=lg()),tl):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:mg(t.type)),t):1}function Qn(t,e,n,i){if(50<ya)throw ya=0,ih=null,Error(te(185));Ya(t,n,i),(!($e&2)||t!==Ot)&&(t===Ot&&(!($e&2)&&($l|=n),Rt===4&&Fi(t,zt)),hn(t,i),n===1&&$e===0&&!(e.mode&1)&&(Ds=Mt()+500,jl&&rr()))}function hn(t,e){var n=t.callbackNode;E_(t,e);var i=cl(t,t===Ot?zt:0);if(i===0)n!==null&&Hd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hd(n),e===1)t.tag===0?Mx(Uf.bind(null,t)):Ig(Uf.bind(null,t)),_x(function(){!($e&6)&&rr()}),n=null;else{switch(cg(i)){case 1:n=bh;break;case 4:n=ag;break;case 16:n=ll;break;case 536870912:n=og;break;default:n=ll}n=N0(n,w0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function w0(t,e){if(el=-1,tl=0,$e&6)throw Error(te(327));var n=t.callbackNode;if(Es()&&t.callbackNode!==n)return null;var i=cl(t,t===Ot?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Cl(t,i);else{e=i;var r=$e;$e|=2;var s=C0();(Ot!==t||zt!==e)&&(gi=null,Ds=Mt()+500,yr(t,e));do try{Vx();break}catch(o){A0(t,o)}while(!0);Hh(),Tl.current=s,$e=r,At!==null?e=0:(Ot=null,zt=0,e=Rt)}if(e!==0){if(e===2&&(r=Lu(t),r!==0&&(i=r,e=rh(t,r))),e===1)throw n=Ba,yr(t,0),Fi(t,i),hn(t,Mt()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Gx(r)&&(e=Cl(t,i),e===2&&(s=Lu(t),s!==0&&(i=s,e=rh(t,s))),e===1))throw n=Ba,yr(t,0),Fi(t,i),hn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:dr(t,on,gi);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=id+500-Mt(),10<e)){if(cl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ku(dr.bind(null,t,on,gi),e);break}dr(t,on,gi);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Zn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Bx(i/1960))-i,10<i){t.timeoutHandle=ku(dr.bind(null,t,on,gi),i);break}dr(t,on,gi);break;case 5:dr(t,on,gi);break;default:throw Error(te(329))}}}return hn(t,Mt()),t.callbackNode===n?w0.bind(null,t):null}function rh(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&(yr(t,e).flags|=256),t=Cl(t,e),t!==2&&(e=on,on=n,e!==null&&sh(e)),t}function sh(t){on===null?on=t:on.push.apply(on,t)}function Gx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~nd,e&=~$l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function Uf(t){if($e&6)throw Error(te(327));Es();var e=cl(t,0);if(!(e&1))return hn(t,Mt()),null;var n=Cl(t,e);if(t.tag!==0&&n===2){var i=Lu(t);i!==0&&(e=i,n=rh(t,i))}if(n===1)throw n=Ba,yr(t,0),Fi(t,e),hn(t,Mt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dr(t,on,gi),hn(t,Mt()),null}function rd(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Ds=Mt()+500,jl&&rr())}}function Lr(t){zi!==null&&zi.tag===0&&!($e&6)&&Es();var e=$e;$e|=1;var n=In.transition,i=Qe;try{if(In.transition=null,Qe=1,t)return t()}finally{Qe=i,In.transition=n,$e=e,!($e&6)&&rr()}}function sd(){_n=ps.current,lt(ps)}function yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vx(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(zh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&pl();break;case 3:Ps(),lt(cn),lt(Yt),Yh();break;case 5:qh(i);break;case 4:Ps();break;case 13:lt(pt);break;case 19:lt(pt);break;case 10:Vh(i.type._context);break;case 22:case 23:sd()}n=n.return}if(Ot=t,At=t=$i(t.current,null),zt=_n=e,Rt=0,Ba=null,nd=$l=br=0,on=xa=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}_r=null}return t}function A0(t,e){do{var n=At;try{if(Hh(),Zo.current=El,Ml){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ml=!1}if(Rr=0,Ut=Ct=mt=null,va=!1,Fa=0,td.current=null,n===null||n.return===null){Rt=1,Ba=e,At=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=zt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Mf(a);if(m!==null){m.flags&=-257,Ef(m,a,o,s,e),m.mode&1&&Sf(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){Sf(s,c,e),ad();break e}l=Error(te(426))}}else if(ut&&o.mode&1){var p=Mf(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Ef(p,a,o,s,e),Bh(Ns(l,o));break e}}s=l=Ns(l,o),Rt!==4&&(Rt=2),xa===null?xa=[s]:xa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=c0(s,l,e);mf(s,u);break e;case 1:o=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(qi===null||!qi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=u0(s,o,e);mf(s,S);break e}}s=s.return}while(s!==null)}b0(n)}catch(b){e=b,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function C0(){var t=Tl.current;return Tl.current=El,t===null?El:t}function ad(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ot===null||!(br&268435455)&&!($l&268435455)||Fi(Ot,zt)}function Cl(t,e){var n=$e;$e|=2;var i=C0();(Ot!==t||zt!==e)&&(gi=null,yr(t,e));do try{Hx();break}catch(r){A0(t,r)}while(!0);if(Hh(),$e=n,Tl.current=i,At!==null)throw Error(te(261));return Ot=null,zt=0,Rt}function Hx(){for(;At!==null;)R0(At)}function Vx(){for(;At!==null&&!p_();)R0(At)}function R0(t){var e=P0(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?b0(t):At=e,td.current=null}function b0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ox(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,At=null;return}}else if(n=Ux(n,e,_n),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Rt===0&&(Rt=5)}function dr(t,e,n){var i=Qe,r=In.transition;try{In.transition=null,Qe=1,Wx(t,e,n,i)}finally{In.transition=r,Qe=i}return null}function Wx(t,e,n,i){do Es();while(zi!==null);if($e&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(T_(t,s),t===Ot&&(At=Ot=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,N0(ll,function(){return Es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var a=Qe;Qe=1;var o=$e;$e|=4,td.current=null,kx(t,n),E0(n,t),ux(Ou),ul=!!Uu,Ou=Uu=null,t.current=n,zx(n),m_(),$e=o,Qe=a,In.transition=s}else t.current=n;if(vo&&(vo=!1,zi=t,Al=r),s=t.pendingLanes,s===0&&(qi=null),__(n.stateNode),hn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(wl)throw wl=!1,t=nh,nh=null,t;return Al&1&&t.tag!==0&&Es(),s=t.pendingLanes,s&1?t===ih?ya++:(ya=0,ih=t):ya=0,rr(),null}function Es(){if(zi!==null){var t=cg(Al),e=In.transition,n=Qe;try{if(In.transition=null,Qe=16>t?16:t,zi===null)var i=!1;else{if(t=zi,zi=null,Al=0,$e&6)throw Error(te(331));var r=$e;for($e|=4,he=t.current;he!==null;){var s=he,a=s.child;if(he.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(he=c;he!==null;){var h=he;switch(h.tag){case 0:case 11:case 15:_a(8,h,s)}var d=h.child;if(d!==null)d.return=h,he=d;else for(;he!==null;){h=he;var f=h.sibling,m=h.return;if(y0(h),h===c){he=null;break}if(f!==null){f.return=m,he=f;break}he=m}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}he=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,he=a;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_a(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,he=u;break e}he=s.return}}var g=t.current;for(he=g;he!==null;){a=he;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,he=_;else e:for(a=g;he!==null;){if(o=he,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Yl(9,o)}}catch(b){xt(o,o.return,b)}if(o===a){he=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,he=S;break e}he=o.return}}if($e=r,rr(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(Bl,t)}catch{}i=!0}return i}finally{Qe=n,In.transition=e}}return!1}function Of(t,e,n){e=Ns(n,e),e=c0(t,e,1),t=Xi(t,e,1),e=nn(),t!==null&&(Ya(t,1,e),hn(t,e))}function xt(t,e,n){if(t.tag===3)Of(t,t,n);else for(;e!==null;){if(e.tag===3){Of(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qi===null||!qi.has(i))){t=Ns(n,t),t=u0(e,t,1),e=Xi(e,t,1),t=nn(),e!==null&&(Ya(e,1,t),hn(e,t));break}}e=e.return}}function jx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(zt&n)===n&&(Rt===4||Rt===3&&(zt&130023424)===zt&&500>Mt()-id?yr(t,0):nd|=n),hn(t,e)}function L0(t,e){e===0&&(t.mode&1?(e=ao,ao<<=1,!(ao&130023424)&&(ao=4194304)):e=1);var n=nn();t=Ti(t,e),t!==null&&(Ya(t,e,n),hn(t,n))}function Xx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),L0(t,n)}function qx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),L0(t,n)}var P0;P0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,Ix(t,e,n);ln=!!(t.flags&131072)}else ln=!1,ut&&e.flags&1048576&&Ug(e,vl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Jo(t,e),t=e.pendingProps;var r=Rs(e,Yt.current);Ms(e,n),r=Kh(null,e,i,t,r,n);var s=Zh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,ml(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jh(e),r.updater=ql,e.stateNode=r,r._reactInternals=e,ju(e,i,t,n),e=Yu(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&kh(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Jo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=$x(i),t=Wn(i,t),r){case 0:e=qu(null,e,i,t,n);break e;case 1:e=Af(null,e,i,t,n);break e;case 11:e=Tf(null,e,i,t,n);break e;case 14:e=wf(null,e,i,Wn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),qu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Af(t,e,i,r,n);case 3:e:{if(p0(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Gg(t,e),yl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ns(Error(te(423)),e),e=Cf(t,e,i,n,r);break e}else if(i!==r){r=Ns(Error(te(424)),e),e=Cf(t,e,i,n,r);break e}else for(yn=ji(e.stateNode.containerInfo.firstChild),Mn=e,ut=!0,Xn=null,n=zg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),i===r){e=wi(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return Hg(e),t===null&&Hu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Fu(i,r)?a=null:s!==null&&Fu(i,s)&&(e.flags|=32),f0(t,e),en(t,e,a,n),e.child;case 6:return t===null&&Hu(e),null;case 13:return m0(t,e,n);case 4:return Xh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ls(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Tf(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,rt(_l,i._currentValue),i._currentValue=a,s!==null)if(Jn(s.value,a)){if(s.children===r.children&&!cn.current){e=wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Si(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(te(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Vu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ms(e,n),r=Fn(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Wn(i,e.pendingProps),r=Wn(i.type,r),wf(t,e,i,r,n);case 15:return h0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Jo(t,e),e.tag=1,un(i)?(t=!0,ml(e)):t=!1,Ms(e,n),l0(e,i,r),ju(e,i,r,n),Yu(null,e,i,!0,t,n);case 19:return g0(t,e,n);case 22:return d0(t,e,n)}throw Error(te(156,e.tag))};function N0(t,e){return sg(t,e)}function Yx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,n,i){return new Yx(t,e,n,i)}function od(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $x(t){if(typeof t=="function")return od(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ah)return 11;if(t===Ch)return 14}return 2}function $i(t,e){var n=t.alternate;return n===null?(n=Dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")od(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case rs:return Sr(n.children,r,s,e);case wh:a=8,r|=8;break;case mu:return t=Dn(12,n,e,r|2),t.elementType=mu,t.lanes=s,t;case gu:return t=Dn(13,n,e,r),t.elementType=gu,t.lanes=s,t;case vu:return t=Dn(19,n,e,r),t.elementType=vu,t.lanes=s,t;case Hm:return Kl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bm:a=10;break e;case Gm:a=9;break e;case Ah:a=11;break e;case Ch:a=14;break e;case Ii:a=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Dn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Sr(t,e,n,i){return t=Dn(7,t,i,e),t.lanes=n,t}function Kl(t,e,n,i){return t=Dn(22,t,i,e),t.elementType=Hm,t.lanes=n,t.stateNode={isHidden:!1},t}function Dc(t,e,n){return t=Dn(6,t,null,e),t.lanes=n,t}function Ic(t,e,n){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Kx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pc(0),this.expirationTimes=pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ld(t,e,n,i,r,s,a,o,l){return t=new Kx(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jh(s),t}function Zx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:is,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function D0(t){if(!t)return er;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(un(n))return Dg(t,n,e)}return e}function I0(t,e,n,i,r,s,a,o,l){return t=ld(n,i,!0,t,r,s,a,o,l),t.context=D0(null),n=t.current,i=nn(),r=Yi(n),s=Si(i,r),s.callback=e??null,Xi(n,s,r),t.current.lanes=r,Ya(t,r,i),hn(t,i),t}function Zl(t,e,n,i){var r=e.current,s=nn(),a=Yi(r);return n=D0(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Xi(r,e,a),t!==null&&(Qn(t,r,a,s),Ko(t,r,a)),a}function Rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ff(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cd(t,e){Ff(t,e),(t=t.alternate)&&Ff(t,e)}function Qx(){return null}var U0=typeof reportError=="function"?reportError:function(t){console.error(t)};function ud(t){this._internalRoot=t}Ql.prototype.render=ud.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Zl(t,e,null,null)};Ql.prototype.unmount=ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Lr(function(){Zl(null,t,null,null)}),e[Ei]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=dg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Oi.length&&e!==0&&e<Oi[n].priority;n++);Oi.splice(n,0,t),n===0&&pg(t)}};function hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kf(){}function Jx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Rl(a);s.call(c)}}var a=I0(e,i,t,0,null,!1,!1,"",kf);return t._reactRootContainer=a,t[Ei]=a.current,Na(t.nodeType===8?t.parentNode:t),Lr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Rl(l);o.call(c)}}var l=ld(t,0,!1,null,null,!1,!1,"",kf);return t._reactRootContainer=l,t[Ei]=l.current,Na(t.nodeType===8?t.parentNode:t),Lr(function(){Zl(e,l,n,i)}),l}function ec(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Rl(a);o.call(l)}}Zl(e,a,t,r)}else a=Jx(n,e,t,r,i);return Rl(a)}ug=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ua(e.pendingLanes);n!==0&&(Lh(e,n|1),hn(e,Mt()),!($e&6)&&(Ds=Mt()+500,rr()))}break;case 13:Lr(function(){var i=Ti(t,1);if(i!==null){var r=nn();Qn(i,t,1,r)}}),cd(t,1)}};Ph=function(t){if(t.tag===13){var e=Ti(t,134217728);if(e!==null){var n=nn();Qn(e,t,134217728,n)}cd(t,134217728)}};hg=function(t){if(t.tag===13){var e=Yi(t),n=Ti(t,e);if(n!==null){var i=nn();Qn(n,t,e,i)}cd(t,e)}};dg=function(){return Qe};fg=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};Cu=function(t,e,n){switch(e){case"input":if(yu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Wl(i);if(!r)throw Error(te(90));Wm(i),yu(i,r)}}}break;case"textarea":Xm(t,n);break;case"select":e=n.value,e!=null&&_s(t,!!n.multiple,e,!1)}};Jm=rd;eg=Lr;var ey={usingClientEntryPoint:!1,Events:[Ka,ls,Wl,Zm,Qm,rd]},ea={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ty={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ig(t),t===null?null:t.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||Qx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{Bl=_o.inject(ty),ai=_o}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ey;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hd(e))throw Error(te(200));return Zx(t,e,null,n)};Tn.createRoot=function(t,e){if(!hd(t))throw Error(te(299));var n=!1,i="",r=U0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ld(t,1,!1,null,null,n,!1,i,r),t[Ei]=e.current,Na(t.nodeType===8?t.parentNode:t),new ud(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=ig(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Lr(t)};Tn.hydrate=function(t,e,n){if(!Jl(e))throw Error(te(200));return ec(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!hd(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=U0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=I0(e,null,t,1,n??null,r,!1,s,a),t[Ei]=e.current,Na(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ql(e)};Tn.render=function(t,e,n){if(!Jl(e))throw Error(te(200));return ec(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!Jl(t))throw Error(te(40));return t._reactRootContainer?(Lr(function(){ec(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1};Tn.unstable_batchedUpdates=rd;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Jl(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return ec(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function O0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O0)}catch(t){console.error(t)}}O0(),Om.exports=Tn;var ny=Om.exports,zf=ny;fu.createRoot=zf.createRoot,fu.hydrateRoot=zf.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dd="160",iy=0,Bf=1,ry=2,F0=1,k0=2,mi=3,tr=0,dn=1,si=2,Ki=0,Ts=1,Is=2,Gf=3,Hf=4,sy=5,mr=100,ay=101,oy=102,Vf=103,Wf=104,ly=200,cy=201,uy=202,hy=203,ah=204,oh=205,dy=206,fy=207,py=208,my=209,gy=210,vy=211,_y=212,xy=213,yy=214,Sy=0,My=1,Ey=2,bl=3,Ty=4,wy=5,Ay=6,Cy=7,z0=0,Ry=1,by=2,Zi=0,Ly=1,Py=2,Ny=3,B0=4,Dy=5,Iy=6,G0=300,Us=301,Os=302,lh=303,ch=304,tc=306,Ga=1e3,Yn=1001,uh=1002,tn=1003,jf=1004,Uc=1005,Ln=1006,Uy=1007,Ha=1008,Qi=1009,Oy=1010,Fy=1011,fd=1012,H0=1013,Bi=1014,Gi=1015,Va=1016,V0=1017,W0=1018,Mr=1020,ky=1021,$n=1023,zy=1024,By=1025,Er=1026,Fs=1027,Gy=1028,j0=1029,Hy=1030,X0=1031,q0=1033,Oc=33776,Fc=33777,kc=33778,zc=33779,Xf=35840,qf=35841,Yf=35842,$f=35843,Y0=36196,Kf=37492,Zf=37496,Qf=37808,Jf=37809,ep=37810,tp=37811,np=37812,ip=37813,rp=37814,sp=37815,ap=37816,op=37817,lp=37818,cp=37819,up=37820,hp=37821,Bc=36492,dp=36494,fp=36495,Vy=36283,pp=36284,mp=36285,gp=36286,$0=3e3,Tr=3001,Wy=3200,jy=3201,K0=0,Xy=1,Pn="",kt="srgb",Ai="srgb-linear",pd="display-p3",nc="display-p3-linear",Ll="linear",ot="srgb",Pl="rec709",Nl="p3",zr=7680,vp=519,qy=512,Yy=513,$y=514,Z0=515,Ky=516,Zy=517,Qy=518,Jy=519,_p=35044,xp="300 es",hh=1035,yi=2e3,Dl=2001;class Vs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yp=1234567;const Sa=Math.PI/180,Wa=180/Math.PI;function Ws(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function qt(t,e,n){return Math.max(e,Math.min(n,t))}function md(t,e){return(t%e+e)%e}function eS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function tS(t,e,n){return t!==e?(n-t)/(e-t):0}function Ma(t,e,n){return(1-n)*t+n*e}function nS(t,e,n,i){return Ma(t,e,1-Math.exp(-n*i))}function iS(t,e=1){return e-Math.abs(md(t,e*2)-e)}function rS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function sS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function aS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function oS(t,e){return t+Math.random()*(e-t)}function lS(t){return t*(.5-Math.random())}function cS(t){t!==void 0&&(yp=t);let e=yp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uS(t){return t*Sa}function hS(t){return t*Wa}function dh(t){return(t&t-1)===0&&t!==0}function dS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Il(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function fS(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),m=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":t.set(o*h,l*d,l*f,o*c);break;case"YZY":t.set(l*f,o*h,l*d,o*c);break;case"ZXZ":t.set(l*d,l*f,o*h,o*c);break;case"XZX":t.set(o*h,l*x,l*m,o*c);break;case"YXY":t.set(l*m,o*h,l*x,o*c);break;case"ZYZ":t.set(l*x,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ns(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Nn={DEG2RAD:Sa,RAD2DEG:Wa,generateUUID:Ws,clamp:qt,euclideanModulo:md,mapLinear:eS,inverseLerp:tS,lerp:Ma,damp:nS,pingpong:iS,smoothstep:rS,smootherstep:sS,randInt:aS,randFloat:oS,randFloatSpread:lS,seededRandom:cS,degToRad:uS,radToDeg:hS,isPowerOfTwo:dh,ceilPowerOfTwo:dS,floorPowerOfTwo:Il,setQuaternionFromProperEuler:fS,normalize:Qt,denormalize:ns};class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],x=i[8],y=r[0],p=r[3],u=r[6],g=r[1],_=r[4],S=r[7],b=r[2],R=r[5],A=r[8];return s[0]=a*y+o*g+l*b,s[3]=a*p+o*_+l*R,s[6]=a*u+o*S+l*A,s[1]=c*y+h*g+d*b,s[4]=c*p+h*_+d*R,s[7]=c*u+h*S+d*A,s[2]=f*y+m*g+x*b,s[5]=f*p+m*_+x*R,s[8]=f*u+m*S+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*s,m=c*s-a*l,x=n*d+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=d*y,e[1]=(r*c-h*i)*y,e[2]=(o*i-r*a)*y,e[3]=f*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Gc.makeScale(e,n)),this}rotate(e){return this.premultiply(Gc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Gc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gc=new Ve;function Q0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ul(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function pS(){const t=Ul("canvas");return t.style.display="block",t}const Sp={};function Ea(t){t in Sp||(Sp[t]=!0,console.warn(t))}const Mp=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ep=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xo={[Ai]:{transfer:Ll,primaries:Pl,toReference:t=>t,fromReference:t=>t},[kt]:{transfer:ot,primaries:Pl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[nc]:{transfer:Ll,primaries:Nl,toReference:t=>t.applyMatrix3(Ep),fromReference:t=>t.applyMatrix3(Mp)},[pd]:{transfer:ot,primaries:Nl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Ep),fromReference:t=>t.applyMatrix3(Mp).convertLinearToSRGB()}},mS=new Set([Ai,nc]),et={enabled:!0,_workingColorSpace:Ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!mS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=xo[e].toReference,r=xo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return xo[t].primaries},getTransfer:function(t){return t===Pn?Ll:xo[t].transfer}};function ws(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Hc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Br;class J0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Br===void 0&&(Br=Ul("canvas")),Br.width=e.width,Br.height=e.height;const i=Br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ul("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ws(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ws(n[i]/255)*255):n[i]=ws(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gS=0;class ev{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Ws(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vc(r[a].image)):s.push(Vc(r[a]))}else s=Vc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Vc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?J0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vS=0;class fn extends Vs{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=Yn,r=Yn,s=Ln,a=Ha,o=$n,l=Qi,c=fn.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=Ws(),this.name="",this.source=new ev(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Tr?kt:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==G0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ga:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ga:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?Tr:$0}set encoding(e){Ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Tr?kt:Pn}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=G0;fn.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,n=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],x=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(m+1)/2,b=(u+1)/2,R=(h+f)/4,A=(d+y)/4,I=(x+p)/4;return _>S&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=R/i,s=A/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=I/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=I/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-x)*(p-x)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(p-x)/g,this.y=(d-y)/g,this.z=(f-h)/g,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _S extends Vs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ht(0,0,e,n),this.scissorTest=!1,this.viewport=new ht(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ea("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Tr?kt:Pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new ev(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends _S{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class tv extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xS extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=s[a+0],m=s[a+1],x=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=x,e[n+3]=y;return}if(d!==y||l!==f||c!==m||h!==x){let p=1-o;const u=l*f+c*m+h*x+d*y,g=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const b=Math.sqrt(_),R=Math.atan2(b,u*g);p=Math.sin(p*R)/b,o=Math.sin(o*R)/b}const S=o*g;if(l=l*p+f*S,c=c*p+m*S,h=h*p+x*S,d=d*p+y*S,p===1-o){const b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[a],f=s[a+1],m=s[a+2],x=s[a+3];return e[n]=o*x+h*d+l*m-c*f,e[n+1]=l*x+h*f+c*d-o*m,e[n+2]=c*x+h*m+o*f-l*d,e[n+3]=h*x-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),d=o(s/2),f=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*m*x,this._y=c*m*d-f*h*x,this._z=c*h*x+f*m*d,this._w=c*h*d-f*m*x;break;case"YXZ":this._x=f*h*d+c*m*x,this._y=c*m*d-f*h*x,this._z=c*h*x-f*m*d,this._w=c*h*d+f*m*x;break;case"ZXY":this._x=f*h*d-c*m*x,this._y=c*m*d+f*h*x,this._z=c*h*x+f*m*d,this._w=c*h*d-f*m*x;break;case"ZYX":this._x=f*h*d-c*m*x,this._y=c*m*d+f*h*x,this._z=c*h*x-f*m*d,this._w=c*h*d+f*m*x;break;case"YZX":this._x=f*h*d+c*m*x,this._y=c*m*d+f*h*x,this._z=c*h*x-f*m*d,this._w=c*h*d-f*m*x;break;case"XZY":this._x=f*h*d-c*m*x,this._y=c*m*d-f*h*x,this._z=c*h*x+f*m*d,this._w=c*h*d+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wc.copy(this).projectOnVector(e),this.sub(Wc)}reflect(e){return this.sub(Wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wc=new D,Tp=new Qa;class li{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yo.copy(i.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),So.subVectors(this.max,ta),Gr.subVectors(e.a,ta),Hr.subVectors(e.b,ta),Vr.subVectors(e.c,ta),bi.subVectors(Hr,Gr),Li.subVectors(Vr,Hr),or.subVectors(Gr,Vr);let n=[0,-bi.z,bi.y,0,-Li.z,Li.y,0,-or.z,or.y,bi.z,0,-bi.x,Li.z,0,-Li.x,or.z,0,-or.x,-bi.y,bi.x,0,-Li.y,Li.x,0,-or.y,or.x,0];return!jc(n,Gr,Hr,Vr,So)||(n=[1,0,0,0,1,0,0,0,1],!jc(n,Gr,Hr,Vr,So))?!1:(Mo.crossVectors(bi,Li),n=[Mo.x,Mo.y,Mo.z],jc(n,Gr,Hr,Vr,So))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new D,new D,new D,new D,new D,new D,new D,new D],Gn=new D,yo=new li,Gr=new D,Hr=new D,Vr=new D,bi=new D,Li=new D,or=new D,ta=new D,So=new D,Mo=new D,lr=new D;function jc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){lr.fromArray(t,s);const o=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),c=n.dot(lr),h=i.dot(lr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const yS=new li,na=new D,Xc=new D;class Or{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):yS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const n=na.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(na,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Xc)),this.expandByPoint(na.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new D,qc=new D,Eo=new D,Pi=new D,Yc=new D,To=new D,$c=new D;class gd{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){qc.copy(e).add(n).multiplyScalar(.5),Eo.copy(n).sub(e).normalize(),Pi.copy(this.origin).sub(qc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Eo),o=Pi.dot(this.direction),l=-Pi.dot(Eo),c=Pi.lengthSq(),h=Math.abs(1-a*a);let d,f,m,x;if(h>0)if(d=a*l-o,f=a*o-l,x=s*h,d>=0)if(f>=-x)if(f<=x){const y=1/h;d*=y,f*=y,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-x?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(qc).addScaledVector(Eo,f),m}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,s){Yc.subVectors(n,e),To.subVectors(i,e),$c.crossVectors(Yc,To);let a=this.direction.dot($c),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,e);const l=o*this.direction.dot(To.crossVectors(Pi,To));if(l<0)return null;const c=o*this.direction.dot(Yc.cross(Pi));if(c<0||l+c>a)return null;const h=-o*Pi.dot($c);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,n,i,r,s,a,o,l,c,h,d,f,m,x,y,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,d,f,m,x,y,p)}set(e,n,i,r,s,a,o,l,c,h,d,f,m,x,y,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=x,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Wr.setFromMatrixColumn(e,0).length(),s=1/Wr.setFromMatrixColumn(e,1).length(),a=1/Wr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*d,x=o*h,y=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=m+x*c,n[5]=f-y*c,n[9]=-o*l,n[2]=y-f*c,n[6]=x+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,x=c*h,y=c*d;n[0]=f+y*o,n[4]=x*o-m,n[8]=a*c,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=m*o-x,n[6]=y+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,x=c*h,y=c*d;n[0]=f-y*o,n[4]=-a*d,n[8]=x+m*o,n[1]=m+x*o,n[5]=a*h,n[9]=y-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*d,x=o*h,y=o*d;n[0]=l*h,n[4]=x*c-m,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=m*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,x=o*l,y=o*c;n[0]=l*h,n[4]=y-f*d,n[8]=x*d+m,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=m*d+x,n[10]=f-y*d}else if(e.order==="XZY"){const f=a*l,m=a*c,x=o*l,y=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+y,n[5]=a*h,n[9]=m*d-x,n[2]=x*d-m,n[6]=o*h,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SS,e,MS)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ni.crossVectors(i,gn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ni.crossVectors(i,gn)),Ni.normalize(),wo.crossVectors(gn,Ni),r[0]=Ni.x,r[4]=wo.x,r[8]=gn.x,r[1]=Ni.y,r[5]=wo.y,r[9]=gn.y,r[2]=Ni.z,r[6]=wo.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],x=i[2],y=i[6],p=i[10],u=i[14],g=i[3],_=i[7],S=i[11],b=i[15],R=r[0],A=r[4],I=r[8],E=r[12],T=r[1],z=r[5],j=r[9],$=r[13],P=r[2],U=r[6],k=r[10],q=r[14],N=r[3],F=r[7],W=r[11],K=r[15];return s[0]=a*R+o*T+l*P+c*N,s[4]=a*A+o*z+l*U+c*F,s[8]=a*I+o*j+l*k+c*W,s[12]=a*E+o*$+l*q+c*K,s[1]=h*R+d*T+f*P+m*N,s[5]=h*A+d*z+f*U+m*F,s[9]=h*I+d*j+f*k+m*W,s[13]=h*E+d*$+f*q+m*K,s[2]=x*R+y*T+p*P+u*N,s[6]=x*A+y*z+p*U+u*F,s[10]=x*I+y*j+p*k+u*W,s[14]=x*E+y*$+p*q+u*K,s[3]=g*R+_*T+S*P+b*N,s[7]=g*A+_*z+S*U+b*F,s[11]=g*I+_*j+S*k+b*W,s[15]=g*E+_*$+S*q+b*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],x=e[3],y=e[7],p=e[11],u=e[15];return x*(+s*l*d-r*c*d-s*o*f+i*c*f+r*o*m-i*l*m)+y*(+n*l*m-n*c*f+s*a*f-r*a*m+r*c*h-s*l*h)+p*(+n*c*d-n*o*m-s*a*d+i*a*m+s*o*h-i*c*h)+u*(-r*o*h-n*l*d+n*o*f+r*a*d-i*a*f+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],x=e[12],y=e[13],p=e[14],u=e[15],g=d*p*c-y*f*c+y*l*m-o*p*m-d*l*u+o*f*u,_=x*f*c-h*p*c-x*l*m+a*p*m+h*l*u-a*f*u,S=h*y*c-x*d*c+x*o*m-a*y*m-h*o*u+a*d*u,b=x*d*l-h*y*l-x*o*f+a*y*f+h*o*p-a*d*p,R=n*g+i*_+r*S+s*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=g*A,e[1]=(y*f*s-d*p*s-y*r*m+i*p*m+d*r*u-i*f*u)*A,e[2]=(o*p*s-y*l*s+y*r*c-i*p*c-o*r*u+i*l*u)*A,e[3]=(d*l*s-o*f*s-d*r*c+i*f*c+o*r*m-i*l*m)*A,e[4]=_*A,e[5]=(h*p*s-x*f*s+x*r*m-n*p*m-h*r*u+n*f*u)*A,e[6]=(x*l*s-a*p*s-x*r*c+n*p*c+a*r*u-n*l*u)*A,e[7]=(a*f*s-h*l*s+h*r*c-n*f*c-a*r*m+n*l*m)*A,e[8]=S*A,e[9]=(x*d*s-h*y*s-x*i*m+n*y*m+h*i*u-n*d*u)*A,e[10]=(a*y*s-x*o*s+x*i*c-n*y*c-a*i*u+n*o*u)*A,e[11]=(h*o*s-a*d*s-h*i*c+n*d*c+a*i*m-n*o*m)*A,e[12]=b*A,e[13]=(h*y*r-x*d*r+x*i*f-n*y*f-h*i*p+n*d*p)*A,e[14]=(x*o*r-a*y*r-x*i*l+n*y*l+a*i*p-n*o*p)*A,e[15]=(a*d*r-h*o*r+h*i*l-n*d*l-a*i*f+n*o*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,d=o+o,f=s*c,m=s*h,x=s*d,y=a*h,p=a*d,u=o*d,g=l*c,_=l*h,S=l*d,b=i.x,R=i.y,A=i.z;return r[0]=(1-(y+u))*b,r[1]=(m+S)*b,r[2]=(x-_)*b,r[3]=0,r[4]=(m-S)*R,r[5]=(1-(f+u))*R,r[6]=(p+g)*R,r[7]=0,r[8]=(x+_)*A,r[9]=(p-g)*A,r[10]=(1-(f+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Wr.set(r[0],r[1],r[2]).length();const a=Wr.set(r[4],r[5],r[6]).length(),o=Wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);const c=1/s,h=1/a,d=1/o;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,n.setFromRotationMatrix(Hn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=yi){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let m,x;if(o===yi)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Dl)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=yi){const l=this.elements,c=1/(n-e),h=1/(i-r),d=1/(a-s),f=(n+e)*c,m=(i+r)*h;let x,y;if(o===yi)x=(a+s)*d,y=-2*d;else if(o===Dl)x=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Wr=new D,Hn=new ct,SS=new D(0,0,0),MS=new D(1,1,1),Ni=new D,wo=new D,gn=new D,wp=new ct,Ap=new Qa;class ic{constructor(e=0,n=0,i=0,r=ic.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ap.setFromEuler(this),this.setFromQuaternion(Ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ic.DEFAULT_ORDER="XYZ";class nv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ES=0;const Cp=new D,jr=new Qa,di=new ct,Ao=new D,ia=new D,TS=new D,wS=new Qa,Rp=new D(1,0,0),bp=new D(0,1,0),Lp=new D(0,0,1),AS={type:"added"},CS={type:"removed"};class bt extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new D,n=new ic,i=new Qa,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ve}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(Rp,e)}rotateY(e){return this.rotateOnAxis(bp,e)}rotateZ(e){return this.rotateOnAxis(Lp,e)}translateOnAxis(e,n){return Cp.copy(e).applyQuaternion(this.quaternion),this.position.add(Cp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rp,e)}translateY(e){return this.translateOnAxis(bp,e)}translateZ(e){return this.translateOnAxis(Lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ao.copy(e):Ao.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(ia,Ao,this.up):di.lookAt(Ao,ia,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),jr.setFromRotationMatrix(di),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(AS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(CS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,TS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,wS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new D(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new D,fi=new D,Kc=new D,pi=new D,Xr=new D,qr=new D,Pp=new D,Zc=new D,Qc=new D,Jc=new D;let Co=!1;class qn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),fi.subVectors(i,n),Kc.subVectors(e,n);const a=Vn.dot(Vn),o=Vn.dot(fi),l=Vn.dot(Kc),c=fi.dot(fi),h=fi.dot(Kc),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(c*l-o*h)*f,x=(a*h-o*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(e,n,i,r,s,a,o,l){return Co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Co=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(o,pi.z),l)}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),fi.subVectors(e,n),Vn.cross(fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Vn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Co=!0),qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Xr.subVectors(r,i),qr.subVectors(s,i),Zc.subVectors(e,i);const l=Xr.dot(Zc),c=qr.dot(Zc);if(l<=0&&c<=0)return n.copy(i);Qc.subVectors(e,r);const h=Xr.dot(Qc),d=qr.dot(Qc);if(h>=0&&d<=h)return n.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(Xr,a);Jc.subVectors(e,s);const m=Xr.dot(Jc),x=qr.dot(Jc);if(x>=0&&m<=x)return n.copy(s);const y=m*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(qr,o);const p=h*x-m*d;if(p<=0&&d-h>=0&&m-x>=0)return Pp.subVectors(s,r),o=(d-h)/(d-h+(m-x)),n.copy(r).addScaledVector(Pp,o);const u=1/(p+y+f);return a=y*u,o=f*u,n.copy(i).addScaledVector(Xr,a).addScaledVector(qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const iv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function eu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ne{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=md(e,1),n=qt(n,0,1),i=qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=eu(a,s,e+1/3),this.g=eu(a,s,e),this.b=eu(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kt){const i=iv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}copyLinearToSRGB(e){return this.r=Hc(e.r),this.g=Hc(e.g),this.b=Hc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return et.fromWorkingColorSpace(jt.copy(this),e),Math.round(qt(jt.r*255,0,255))*65536+Math.round(qt(jt.g*255,0,255))*256+Math.round(qt(jt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=kt){et.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+n,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Di),e.getHSL(Ro);const i=Ma(Di.h,Ro.h,n),r=Ma(Di.s,Ro.s,n),s=Ma(Di.l,Ro.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Ne;Ne.NAMES=iv;let RS=0;class Fr extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=Ts,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=oh,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ah&&(i.blendSrc=this.blendSrc),this.blendDst!==oh&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Sn extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=z0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new D,bo=new qe;class pn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=_p,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)bo.fromBufferAttribute(this,n),bo.applyMatrix3(e),this.setXY(n,bo.x,bo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ns(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ns(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ns(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ns(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ns(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_p&&(e.usage=this.usage),e}}class rv extends pn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class sv extends pn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Un extends pn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let bS=0;const Cn=new ct,tu=new bt,Yr=new D,vn=new li,ra=new li,It=new D;class zn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Q0(e)?sv:rv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return tu.lookAt(e),tu.updateMatrix(),this.applyMatrix4(tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Un(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Or);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ra.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(vn.min,ra.min),vn.expandByPoint(It),It.addVectors(vn.max,ra.max),vn.expandByPoint(It)):(vn.expandByPoint(ra.min),vn.expandByPoint(ra.max))}vn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)It.fromBufferAttribute(o,c),l&&(Yr.fromBufferAttribute(e,c),It.add(Yr)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new D,h[T]=new D;const d=new D,f=new D,m=new D,x=new qe,y=new qe,p=new qe,u=new D,g=new D;function _(T,z,j){d.fromArray(r,T*3),f.fromArray(r,z*3),m.fromArray(r,j*3),x.fromArray(a,T*2),y.fromArray(a,z*2),p.fromArray(a,j*2),f.sub(d),m.sub(d),y.sub(x),p.sub(x);const $=1/(y.x*p.y-p.x*y.y);isFinite($)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar($),g.copy(m).multiplyScalar(y.x).addScaledVector(f,-p.x).multiplyScalar($),c[T].add(u),c[z].add(u),c[j].add(u),h[T].add(g),h[z].add(g),h[j].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,z=S.length;T<z;++T){const j=S[T],$=j.start,P=j.count;for(let U=$,k=$+P;U<k;U+=3)_(i[U+0],i[U+1],i[U+2])}const b=new D,R=new D,A=new D,I=new D;function E(T){A.fromArray(s,T*3),I.copy(A);const z=c[T];b.copy(z),b.sub(A.multiplyScalar(A.dot(z))).normalize(),R.crossVectors(I,z);const $=R.dot(h[T])<0?-1:1;l[T*4]=b.x,l[T*4+1]=b.y,l[T*4+2]=b.z,l[T*4+3]=$}for(let T=0,z=S.length;T<z;++T){const j=S[T],$=j.start,P=j.count;for(let U=$,k=$+P;U<k;U+=3)E(i[U+0]),E(i[U+1]),E(i[U+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,p),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let m=0,x=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*h;for(let u=0;u<h;u++)f[x++]=c[m++]}return new pn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Np=new ct,cr=new gd,Lo=new Or,Dp=new D,$r=new D,Kr=new D,Zr=new D,nu=new D,Po=new D,No=new qe,Do=new qe,Io=new qe,Ip=new D,Up=new D,Op=new D,Uo=new D,Oo=new D;class ge extends bt{constructor(e=new zn,n=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(nu.fromBufferAttribute(d,e),a?Po.addScaledVector(nu,h):Po.addScaledVector(nu.sub(n),h))}n.add(Po)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(Lo.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Lo,Dp)===null||cr.origin.distanceToSquared(Dp)>(e.far-e.near)**2))&&(Np.copy(s).invert(),cr.copy(e.ray).applyMatrix4(Np),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){const p=f[x],u=a[p.materialIndex],g=Math.max(p.start,m.start),_=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=g,b=_;S<b;S+=3){const R=o.getX(S),A=o.getX(S+1),I=o.getX(S+2);r=Fo(this,u,e,i,c,h,d,R,A,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=x,u=y;p<u;p+=3){const g=o.getX(p),_=o.getX(p+1),S=o.getX(p+2);r=Fo(this,a,e,i,c,h,d,g,_,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){const p=f[x],u=a[p.materialIndex],g=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=g,b=_;S<b;S+=3){const R=S,A=S+1,I=S+2;r=Fo(this,u,e,i,c,h,d,R,A,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=x,u=y;p<u;p+=3){const g=p,_=p+1,S=p+2;r=Fo(this,a,e,i,c,h,d,g,_,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function LS(t,e,n,i,r,s,a,o){let l;if(e.side===dn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===tr,o),l===null)return null;Oo.copy(o),Oo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Oo);return c<n.near||c>n.far?null:{distance:c,point:Oo.clone(),object:t}}function Fo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,$r),t.getVertexPosition(l,Kr),t.getVertexPosition(c,Zr);const h=LS(t,e,n,i,$r,Kr,Zr,Uo);if(h){r&&(No.fromBufferAttribute(r,o),Do.fromBufferAttribute(r,l),Io.fromBufferAttribute(r,c),h.uv=qn.getInterpolation(Uo,$r,Kr,Zr,No,Do,Io,new qe)),s&&(No.fromBufferAttribute(s,o),Do.fromBufferAttribute(s,l),Io.fromBufferAttribute(s,c),h.uv1=qn.getInterpolation(Uo,$r,Kr,Zr,No,Do,Io,new qe),h.uv2=h.uv1),a&&(Ip.fromBufferAttribute(a,o),Up.fromBufferAttribute(a,l),Op.fromBufferAttribute(a,c),h.normal=qn.getInterpolation(Uo,$r,Kr,Zr,Ip,Up,Op,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};qn.getNormal($r,Kr,Zr,d.normal),h.face=d}return h}class Ke extends zn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,m=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Un(c,3)),this.setAttribute("normal",new Un(h,3)),this.setAttribute("uv",new Un(d,2));function x(y,p,u,g,_,S,b,R,A,I,E){const T=S/A,z=b/I,j=S/2,$=b/2,P=R/2,U=A+1,k=I+1;let q=0,N=0;const F=new D;for(let W=0;W<k;W++){const K=W*z-$;for(let Q=0;Q<U;Q++){const Y=Q*T-j;F[y]=Y*g,F[p]=K*_,F[u]=P,c.push(F.x,F.y,F.z),F[y]=0,F[p]=0,F[u]=R>0?1:-1,h.push(F.x,F.y,F.z),d.push(Q/A),d.push(1-W/I),q+=1}}for(let W=0;W<I;W++)for(let K=0;K<A;K++){const Q=f+K+U*W,Y=f+K+U*(W+1),Z=f+(K+1)+U*(W+1),le=f+(K+1)+U*W;l.push(Q,Y,le),l.push(Y,Z,le),N+=6}o.addGroup(m,N,E),m+=N,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=ks(t[n]);for(const r in i)e[r]=i[r]}return e}function PS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function av(t){return t.getRenderTarget()===null?t.outputColorSpace:et.workingColorSpace}const NS={clone:ks,merge:Jt};var DS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nr extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DS,this.fragmentShader=IS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=PS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ov extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=yi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class xn extends ov{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Sa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qr=-90,Jr=1;class US extends bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(Qr,Jr,e,n);r.layers=this.layers,this.add(r);const s=new xn(Qr,Jr,e,n);s.layers=this.layers,this.add(s);const a=new xn(Qr,Jr,e,n);a.layers=this.layers,this.add(a);const o=new xn(Qr,Jr,e,n);o.layers=this.layers,this.add(o);const l=new xn(Qr,Jr,e,n);l.layers=this.layers,this.add(l);const c=new xn(Qr,Jr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(d,f,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class lv extends fn{constructor(e,n,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Us,super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OS extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ea("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Tr?kt:Pn),this.texture=new lv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ke(5,5,5),s=new Nr({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Ki});s.uniforms.tEquirect.value=n;const a=new ge(r,s),o=n.minFilter;return n.minFilter===Ha&&(n.minFilter=Ln),new US(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const iu=new D,FS=new D,kS=new Ve;class fr{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=iu.subVectors(i,n).cross(FS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(iu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||kS.getNormalMatrix(e),r=this.coplanarPoint(iu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new Or,ko=new D;class vd{constructor(e=new fr,n=new fr,i=new fr,r=new fr,s=new fr,a=new fr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],m=r[8],x=r[9],y=r[10],p=r[11],u=r[12],g=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,p-m,S-u).normalize(),i[1].setComponents(l+s,f+c,p+m,S+u).normalize(),i[2].setComponents(l+a,f+h,p+x,S+g).normalize(),i[3].setComponents(l-a,f-h,p-x,S-g).normalize(),i[4].setComponents(l-o,f-d,p-y,S-_).normalize(),n===yi)i[5].setComponents(l+o,f+d,p+y,S+_).normalize();else if(n===Dl)i[5].setComponents(o,d,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ko.x=r.normal.x>0?e.max.x:e.min.x,ko.y=r.normal.y>0?e.max.y:e.min.y,ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function zS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,f=c.usage,m=d.byteLength,x=t.createBuffer();t.bindBuffer(h,x),t.bufferData(h,d,f),c.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,d){const f=h.array,m=h._updateRange,x=h.updateRanges;if(t.bindBuffer(d,c),m.count===-1&&x.length===0&&t.bufferSubData(d,0,f),x.length!==0){for(let y=0,p=x.length;y<p;y++){const u=x[y];n?t.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):t.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):t.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}class wr extends zn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,d=e/o,f=n/l,m=[],x=[],y=[],p=[];for(let u=0;u<h;u++){const g=u*f-a;for(let _=0;_<c;_++){const S=_*d-s;x.push(S,-g,0),y.push(0,0,1),p.push(_/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const _=g+c*u,S=g+c*(u+1),b=g+1+c*(u+1),R=g+1+c*u;m.push(_,S,R),m.push(S,b,R)}this.setIndex(m),this.setAttribute("position",new Un(x,3)),this.setAttribute("normal",new Un(y,3)),this.setAttribute("uv",new Un(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.widthSegments,e.heightSegments)}}var BS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GS=`#ifdef USE_ALPHAHASH
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
#endif`,HS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XS=`#ifdef USE_AOMAP
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
#endif`,qS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,$S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,KS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JS=`#ifdef USE_IRIDESCENCE
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
#endif`,eM=`#ifdef USE_BUMPMAP
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
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cM=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,uM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hM=`vec3 transformedNormal = objectNormal;
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
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gM="gl_FragColor = linearToOutputTexel( gl_FragColor );",vM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,_M=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,xM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
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
#endif`,EM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CM=`#ifdef USE_GRADIENTMAP
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
}`,RM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NM=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,DM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,IM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kM=`PhysicalMaterial material;
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
#endif`,zM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,BM=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,GM=`#if defined( RE_IndirectDiffuse )
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
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,XM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KM=`#if defined( USE_POINTS_UV )
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
#endif`,ZM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,tE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,nE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,iE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lE=`#ifdef USE_NORMALMAP
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
#endif`,cE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,mE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,EE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AE=`#ifdef USE_SKINNING
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
#endif`,CE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RE=`#ifdef USE_SKINNING
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
#endif`,bE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NE=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DE=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IE=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BE=`uniform sampler2D t2D;
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
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`#include <common>
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
}`,XE=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,qE=`#define DISTANCE
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
}`,YE=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JE=`#include <common>
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
}`,e1=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,t1=`#define LAMBERT
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
}`,n1=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,i1=`#define MATCAP
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
}`,r1=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,s1=`#define NORMAL
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
}`,a1=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o1=`#define PHONG
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
}`,l1=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,c1=`#define STANDARD
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
}`,u1=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,h1=`#define TOON
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
}`,d1=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,f1=`uniform float size;
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
}`,p1=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,m1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,g1=`uniform vec3 color;
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
}`,v1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,_1=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Fe={alphahash_fragment:BS,alphahash_pars_fragment:GS,alphamap_fragment:HS,alphamap_pars_fragment:VS,alphatest_fragment:WS,alphatest_pars_fragment:jS,aomap_fragment:XS,aomap_pars_fragment:qS,batching_pars_vertex:YS,batching_vertex:$S,begin_vertex:KS,beginnormal_vertex:ZS,bsdfs:QS,iridescence_fragment:JS,bumpmap_pars_fragment:eM,clipping_planes_fragment:tM,clipping_planes_pars_fragment:nM,clipping_planes_pars_vertex:iM,clipping_planes_vertex:rM,color_fragment:sM,color_pars_fragment:aM,color_pars_vertex:oM,color_vertex:lM,common:cM,cube_uv_reflection_fragment:uM,defaultnormal_vertex:hM,displacementmap_pars_vertex:dM,displacementmap_vertex:fM,emissivemap_fragment:pM,emissivemap_pars_fragment:mM,colorspace_fragment:gM,colorspace_pars_fragment:vM,envmap_fragment:_M,envmap_common_pars_fragment:xM,envmap_pars_fragment:yM,envmap_pars_vertex:SM,envmap_physical_pars_fragment:DM,envmap_vertex:MM,fog_vertex:EM,fog_pars_vertex:TM,fog_fragment:wM,fog_pars_fragment:AM,gradientmap_pars_fragment:CM,lightmap_fragment:RM,lightmap_pars_fragment:bM,lights_lambert_fragment:LM,lights_lambert_pars_fragment:PM,lights_pars_begin:NM,lights_toon_fragment:IM,lights_toon_pars_fragment:UM,lights_phong_fragment:OM,lights_phong_pars_fragment:FM,lights_physical_fragment:kM,lights_physical_pars_fragment:zM,lights_fragment_begin:BM,lights_fragment_maps:GM,lights_fragment_end:HM,logdepthbuf_fragment:VM,logdepthbuf_pars_fragment:WM,logdepthbuf_pars_vertex:jM,logdepthbuf_vertex:XM,map_fragment:qM,map_pars_fragment:YM,map_particle_fragment:$M,map_particle_pars_fragment:KM,metalnessmap_fragment:ZM,metalnessmap_pars_fragment:QM,morphcolor_vertex:JM,morphnormal_vertex:eE,morphtarget_pars_vertex:tE,morphtarget_vertex:nE,normal_fragment_begin:iE,normal_fragment_maps:rE,normal_pars_fragment:sE,normal_pars_vertex:aE,normal_vertex:oE,normalmap_pars_fragment:lE,clearcoat_normal_fragment_begin:cE,clearcoat_normal_fragment_maps:uE,clearcoat_pars_fragment:hE,iridescence_pars_fragment:dE,opaque_fragment:fE,packing:pE,premultiplied_alpha_fragment:mE,project_vertex:gE,dithering_fragment:vE,dithering_pars_fragment:_E,roughnessmap_fragment:xE,roughnessmap_pars_fragment:yE,shadowmap_pars_fragment:SE,shadowmap_pars_vertex:ME,shadowmap_vertex:EE,shadowmask_pars_fragment:TE,skinbase_vertex:wE,skinning_pars_vertex:AE,skinning_vertex:CE,skinnormal_vertex:RE,specularmap_fragment:bE,specularmap_pars_fragment:LE,tonemapping_fragment:PE,tonemapping_pars_fragment:NE,transmission_fragment:DE,transmission_pars_fragment:IE,uv_pars_fragment:UE,uv_pars_vertex:OE,uv_vertex:FE,worldpos_vertex:kE,background_vert:zE,background_frag:BE,backgroundCube_vert:GE,backgroundCube_frag:HE,cube_vert:VE,cube_frag:WE,depth_vert:jE,depth_frag:XE,distanceRGBA_vert:qE,distanceRGBA_frag:YE,equirect_vert:$E,equirect_frag:KE,linedashed_vert:ZE,linedashed_frag:QE,meshbasic_vert:JE,meshbasic_frag:e1,meshlambert_vert:t1,meshlambert_frag:n1,meshmatcap_vert:i1,meshmatcap_frag:r1,meshnormal_vert:s1,meshnormal_frag:a1,meshphong_vert:o1,meshphong_frag:l1,meshphysical_vert:c1,meshphysical_frag:u1,meshtoon_vert:h1,meshtoon_frag:d1,points_vert:f1,points_frag:p1,shadow_vert:m1,shadow_frag:g1,sprite_vert:v1,sprite_frag:_1},se={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ii={basic:{uniforms:Jt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Jt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Jt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Jt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Jt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Jt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Jt([se.points,se.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Jt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Jt([se.common,se.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Jt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Jt([se.sprite,se.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Jt([se.common,se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Jt([se.lights,se.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};ii.physical={uniforms:Jt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const zo={r:0,b:0,g:0};function x1(t,e,n,i,r,s,a){const o=new Ne(0);let l=s===!0?0:1,c,h,d=null,f=0,m=null;function x(p,u){let g=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?n:e).get(_)),_===null?y(o,l):_&&_.isColor&&(y(_,1),g=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===tc)?(h===void 0&&(h=new ge(new Ke(1,1,1),new Nr({name:"BackgroundCubeMaterial",uniforms:ks(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=et.getTransfer(_.colorSpace)!==ot,(d!==_||f!==_.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,d=_,f=_.version,m=t.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ge(new wr(2,2),new Nr({name:"BackgroundMaterial",uniforms:ks(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=et.getTransfer(_.colorSpace)!==ot,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,u){p.getRGB(zo,av(t)),i.buffers.color.setClear(zo.r,zo.g,zo.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),l=u,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(o,l)},render:x}}function y1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,h=!1;function d(P,U,k,q,N){let F=!1;if(a){const W=y(q,k,U);c!==W&&(c=W,m(c.object)),F=u(P,q,k,N),F&&g(P,q,k,N)}else{const W=U.wireframe===!0;(c.geometry!==q.id||c.program!==k.id||c.wireframe!==W)&&(c.geometry=q.id,c.program=k.id,c.wireframe=W,F=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(F||h)&&(h=!1,I(P,U,k,q),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(P){return i.isWebGL2?t.bindVertexArray(P):s.bindVertexArrayOES(P)}function x(P){return i.isWebGL2?t.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function y(P,U,k){const q=k.wireframe===!0;let N=o[P.id];N===void 0&&(N={},o[P.id]=N);let F=N[U.id];F===void 0&&(F={},N[U.id]=F);let W=F[q];return W===void 0&&(W=p(f()),F[q]=W),W}function p(P){const U=[],k=[],q=[];for(let N=0;N<r;N++)U[N]=0,k[N]=0,q[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:q,object:P,attributes:{},index:null}}function u(P,U,k,q){const N=c.attributes,F=U.attributes;let W=0;const K=k.getAttributes();for(const Q in K)if(K[Q].location>=0){const Z=N[Q];let le=F[Q];if(le===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),Z===void 0||Z.attribute!==le||le&&Z.data!==le.data)return!0;W++}return c.attributesNum!==W||c.index!==q}function g(P,U,k,q){const N={},F=U.attributes;let W=0;const K=k.getAttributes();for(const Q in K)if(K[Q].location>=0){let Z=F[Q];Z===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const le={};le.attribute=Z,Z&&Z.data&&(le.data=Z.data),N[Q]=le,W++}c.attributes=N,c.attributesNum=W,c.index=q}function _(){const P=c.newAttributes;for(let U=0,k=P.length;U<k;U++)P[U]=0}function S(P){b(P,0)}function b(P,U){const k=c.newAttributes,q=c.enabledAttributes,N=c.attributeDivisors;k[P]=1,q[P]===0&&(t.enableVertexAttribArray(P),q[P]=1),N[P]!==U&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),N[P]=U)}function R(){const P=c.newAttributes,U=c.enabledAttributes;for(let k=0,q=U.length;k<q;k++)U[k]!==P[k]&&(t.disableVertexAttribArray(k),U[k]=0)}function A(P,U,k,q,N,F,W){W===!0?t.vertexAttribIPointer(P,U,k,N,F):t.vertexAttribPointer(P,U,k,q,N,F)}function I(P,U,k,q){if(i.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const N=q.attributes,F=k.getAttributes(),W=U.defaultAttributeValues;for(const K in F){const Q=F[K];if(Q.location>=0){let Y=N[K];if(Y===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){const Z=Y.normalized,le=Y.itemSize,de=n.get(Y);if(de===void 0)continue;const me=de.buffer,De=de.type,Ue=de.bytesPerElement,Ae=i.isWebGL2===!0&&(De===t.INT||De===t.UNSIGNED_INT||Y.gpuType===H0);if(Y.isInterleavedBufferAttribute){const Ye=Y.data,B=Ye.stride,$t=Y.offset;if(Ye.isInstancedInterleavedBuffer){for(let Me=0;Me<Q.locationSize;Me++)b(Q.location+Me,Ye.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let Me=0;Me<Q.locationSize;Me++)S(Q.location+Me);t.bindBuffer(t.ARRAY_BUFFER,me);for(let Me=0;Me<Q.locationSize;Me++)A(Q.location+Me,le/Q.locationSize,De,Z,B*Ue,($t+le/Q.locationSize*Me)*Ue,Ae)}else{if(Y.isInstancedBufferAttribute){for(let Ye=0;Ye<Q.locationSize;Ye++)b(Q.location+Ye,Y.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Ye=0;Ye<Q.locationSize;Ye++)S(Q.location+Ye);t.bindBuffer(t.ARRAY_BUFFER,me);for(let Ye=0;Ye<Q.locationSize;Ye++)A(Q.location+Ye,le/Q.locationSize,De,Z,le*Ue,le/Q.locationSize*Ye*Ue,Ae)}}else if(W!==void 0){const Z=W[K];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(Q.location,Z);break;case 3:t.vertexAttrib3fv(Q.location,Z);break;case 4:t.vertexAttrib4fv(Q.location,Z);break;default:t.vertexAttrib1fv(Q.location,Z)}}}}R()}function E(){j();for(const P in o){const U=o[P];for(const k in U){const q=U[k];for(const N in q)x(q[N].object),delete q[N];delete U[k]}delete o[P]}}function T(P){if(o[P.id]===void 0)return;const U=o[P.id];for(const k in U){const q=U[k];for(const N in q)x(q[N].object),delete q[N];delete U[k]}delete o[P.id]}function z(P){for(const U in o){const k=o[U];if(k[P.id]===void 0)continue;const q=k[P.id];for(const N in q)x(q[N].object),delete q[N];delete k[P.id]}}function j(){$(),h=!0,c!==l&&(c=l,m(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:$,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:z,initAttributes:_,enableAttribute:S,disableUnusedAttributes:R}}function S1(t,e,n,i){const r=i.isWebGL2;let s;function a(h){s=h}function o(h,d){t.drawArrays(s,h,d),n.update(d,s,1)}function l(h,d,f){if(f===0)return;let m,x;if(r)m=t,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,h,d,f),n.update(d,s,f)}function c(h,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<f;x++)this.render(h[x],d[x]);else{m.multiDrawArraysWEBGL(s,h,0,d,0,f);let x=0;for(let y=0;y<f;y++)x+=d[y];n.update(x,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function M1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,S=a||e.has("OES_texture_float"),b=_&&S,R=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:b,maxSamples:R}}function E1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new fr,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,m){const x=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||x===null||x.length===0||s&&!p)s?h(null):c();else{const g=s?0:i,_=g*4;let S=u.clippingState||null;l.value=S,S=h(x,f,_,m);for(let b=0;b!==_;++b)S[b]=n[b];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,m,x){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,x!==!0||p===null){const u=m+y*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let _=0,S=m;_!==y;++_,S+=4)a.copy(d[_]).applyMatrix4(g,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function T1(t){let e=new WeakMap;function n(a,o){return o===lh?a.mapping=Us:o===ch&&(a.mapping=Os),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===lh||o===ch)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new OS(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class uv extends ov{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ms=4,Fp=[.125,.215,.35,.446,.526,.582],gr=20,ru=new uv,kp=new Ne;let su=null,au=0,ou=0;const pr=(1+Math.sqrt(5))/2,es=1/pr,zp=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,pr,es),new D(0,pr,-es),new D(es,0,pr),new D(-es,0,pr),new D(pr,es,0),new D(-pr,es,0)];class Bp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){su=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(su,au,ou),e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Us||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),su=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Va,format:$n,colorSpace:Ai,depthBuffer:!1},r=Gp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w1(s)),this._blurMaterial=A1(s,e,n)}return r}_compileMaterial(e){const n=new ge(this._lodPlanes[0],e);this._renderer.compile(n,ru)}_sceneToCubeUV(e,n,i,r){const o=new xn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(kp),h.toneMapping=Zi,h.autoClear=!1;const m=new Sn({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),x=new ge(new Ke,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(kp),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):g===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const _=this._cubeSize;Bo(r,g*_,u>2?_:0,_,_),h.setRenderTarget(r),y&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Us||e.mapping===Os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ge(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Bo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ru)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zp[(r-1)%zp.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ge(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*gr-1),y=s/x,p=isFinite(s)?1+Math.floor(h*y):gr;p>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gr}`);const u=[];let g=0;for(let A=0;A<gr;++A){const I=A/y,E=Math.exp(-I*I/2);u.push(E),A===0?g+=E:A<p&&(g+=2*E)}for(let A=0;A<u.length;A++)u[A]=u[A]/g;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-i;const S=this._sizeLods[r],b=3*S*(r>_-ms?r-_+ms:0),R=4*(this._cubeSize-S);Bo(n,b,R,3*S,2*S),l.setRenderTarget(n),l.render(d,ru)}}function w1(t){const e=[],n=[],i=[];let r=t;const s=t-ms+1+Fp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-ms?l=Fp[a-t+ms-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,x=6,y=3,p=2,u=1,g=new Float32Array(y*x*m),_=new Float32Array(p*x*m),S=new Float32Array(u*x*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,I=R>2?0:-1,E=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];g.set(E,y*x*R),_.set(f,p*x*R);const T=[R,R,R,R,R,R];S.set(T,u*x*R)}const b=new zn;b.setAttribute("position",new pn(g,y)),b.setAttribute("uv",new pn(_,p)),b.setAttribute("faceIndex",new pn(S,u)),e.push(b),r>ms&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Gp(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function A1(t,e,n){const i=new Float32Array(gr),r=new D(0,1,0);return new Nr({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_d(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Hp(){return new Nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_d(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Vp(){return new Nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function _d(){return`

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
	`}function C1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===lh||l===ch,h=l===Us||l===Os;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return n===null&&(n=new Bp(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&r(d)){n===null&&(n=new Bp(t));const f=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function R1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function b1(t,e,n,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const y=f.morphAttributes[x];for(let p=0,u=y.length;p<u;p++)e.remove(y[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const x in m){const y=m[x];for(let p=0,u=y.length;p<u;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,x=d.attributes.position;let y=0;if(m!==null){const g=m.array;y=m.version;for(let _=0,S=g.length;_<S;_+=3){const b=g[_+0],R=g[_+1],A=g[_+2];f.push(b,R,R,A,A,b)}}else if(x!==void 0){const g=x.array;y=x.version;for(let _=0,S=g.length/3-1;_<S;_+=3){const b=_+0,R=_+1,A=_+2;f.push(b,R,R,A,A,b)}}else return;const p=new(Q0(f)?sv:rv)(f,1);p.version=y;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function L1(t,e,n,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,x){t.drawElements(s,x,o,m*l),n.update(x,s,1)}function d(m,x,y){if(y===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,x,o,m*l,y),n.update(x,s,y)}function f(m,x,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<y;u++)this.render(m[u]/l,x[u]);else{p.multiDrawElementsWEBGL(s,x,0,o,m,0,y);let u=0;for(let g=0;g<y;g++)u+=x[g];n.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function P1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function N1(t,e){return t[0]-e[0]}function D1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function I1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new ht,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=x!==void 0?x.length:0;let p=s.get(h);if(p===void 0||p.count!==y){let U=function(){$.dispose(),s.delete(h),h.removeEventListener("dispose",U)};var m=U;p!==void 0&&p.texture.dispose();const _=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let E=0;_===!0&&(E=1),S===!0&&(E=2),b===!0&&(E=3);let T=h.attributes.position.count*E,z=1;T>e.maxTextureSize&&(z=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const j=new Float32Array(T*z*4*y),$=new tv(j,T,z,y);$.type=Gi,$.needsUpdate=!0;const P=E*4;for(let k=0;k<y;k++){const q=R[k],N=A[k],F=I[k],W=T*z*4*k;for(let K=0;K<q.count;K++){const Q=K*P;_===!0&&(a.fromBufferAttribute(q,K),j[W+Q+0]=a.x,j[W+Q+1]=a.y,j[W+Q+2]=a.z,j[W+Q+3]=0),S===!0&&(a.fromBufferAttribute(N,K),j[W+Q+4]=a.x,j[W+Q+5]=a.y,j[W+Q+6]=a.z,j[W+Q+7]=0),b===!0&&(a.fromBufferAttribute(F,K),j[W+Q+8]=a.x,j[W+Q+9]=a.y,j[W+Q+10]=a.z,j[W+Q+11]=F.itemSize===4?a.w:1)}}p={count:y,texture:$,size:new qe(T,z)},s.set(h,p),h.addEventListener("dispose",U)}let u=0;for(let _=0;_<f.length;_++)u+=f[_];const g=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",f),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=f===void 0?0:f.length;let y=i[h.id];if(y===void 0||y.length!==x){y=[];for(let S=0;S<x;S++)y[S]=[S,0];i[h.id]=y}for(let S=0;S<x;S++){const b=y[S];b[0]=S,b[1]=f[S]}y.sort(D1);for(let S=0;S<8;S++)S<x&&y[S][1]?(o[S][0]=y[S][0],o[S][1]=y[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(N1);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let g=0;for(let S=0;S<8;S++){const b=o[S],R=b[0],A=b[1];R!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+S)!==p[R]&&h.setAttribute("morphTarget"+S,p[R]),u&&h.getAttribute("morphNormal"+S)!==u[R]&&h.setAttribute("morphNormal"+S,u[R]),r[S]=A,g+=A):(p&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),u&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),r[S]=0)}const _=h.morphTargetsRelative?1:1-g;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function U1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class hv extends fn{constructor(e,n,i,r,s,a,o,l,c,h){if(h=h!==void 0?h:Er,h!==Er&&h!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Er&&(i=Bi),i===void 0&&h===Fs&&(i=Mr),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const dv=new fn,fv=new hv(1,1);fv.compareFunction=Z0;const pv=new tv,mv=new xS,gv=new lv,Wp=[],jp=[],Xp=new Float32Array(16),qp=new Float32Array(9),Yp=new Float32Array(4);function js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Wp[r];if(s===void 0&&(s=new Float32Array(r),Wp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function rc(t,e){let n=jp[e];n===void 0&&(n=new Int32Array(e),jp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function O1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function F1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function k1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function B1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Lt(n,i))return;Yp.set(i),t.uniformMatrix2fv(this.addr,!1,Yp),Pt(n,i)}}function G1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Lt(n,i))return;qp.set(i),t.uniformMatrix3fv(this.addr,!1,qp),Pt(n,i)}}function H1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Lt(n,i))return;Xp.set(i),t.uniformMatrix4fv(this.addr,!1,Xp),Pt(n,i)}}function V1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function W1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function j1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function X1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function q1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function $1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function K1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function Z1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?fv:dv;n.setTexture2D(e||s,r)}function Q1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||mv,r)}function J1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||gv,r)}function eT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||pv,r)}function tT(t){switch(t){case 5126:return O1;case 35664:return F1;case 35665:return k1;case 35666:return z1;case 35674:return B1;case 35675:return G1;case 35676:return H1;case 5124:case 35670:return V1;case 35667:case 35671:return W1;case 35668:case 35672:return j1;case 35669:case 35673:return X1;case 5125:return q1;case 36294:return Y1;case 36295:return $1;case 36296:return K1;case 35678:case 36198:case 36298:case 36306:case 35682:return Z1;case 35679:case 36299:case 36307:return Q1;case 35680:case 36300:case 36308:case 36293:return J1;case 36289:case 36303:case 36311:case 36292:return eT}}function nT(t,e){t.uniform1fv(this.addr,e)}function iT(t,e){const n=js(e,this.size,2);t.uniform2fv(this.addr,n)}function rT(t,e){const n=js(e,this.size,3);t.uniform3fv(this.addr,n)}function sT(t,e){const n=js(e,this.size,4);t.uniform4fv(this.addr,n)}function aT(t,e){const n=js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function oT(t,e){const n=js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function lT(t,e){const n=js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function cT(t,e){t.uniform1iv(this.addr,e)}function uT(t,e){t.uniform2iv(this.addr,e)}function hT(t,e){t.uniform3iv(this.addr,e)}function dT(t,e){t.uniform4iv(this.addr,e)}function fT(t,e){t.uniform1uiv(this.addr,e)}function pT(t,e){t.uniform2uiv(this.addr,e)}function mT(t,e){t.uniform3uiv(this.addr,e)}function gT(t,e){t.uniform4uiv(this.addr,e)}function vT(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||dv,s[a])}function _T(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||mv,s[a])}function xT(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||gv,s[a])}function yT(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||pv,s[a])}function ST(t){switch(t){case 5126:return nT;case 35664:return iT;case 35665:return rT;case 35666:return sT;case 35674:return aT;case 35675:return oT;case 35676:return lT;case 5124:case 35670:return cT;case 35667:case 35671:return uT;case 35668:case 35672:return hT;case 35669:case 35673:return dT;case 5125:return fT;case 36294:return pT;case 36295:return mT;case 36296:return gT;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return _T;case 35680:case 36300:case 36308:case 36293:return xT;case 36289:case 36303:case 36311:case 36292:return yT}}class MT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=tT(n.type)}}class ET{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ST(n.type)}}class TT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const lu=/(\w+)(\])?(\[|\.)?/g;function $p(t,e){t.seq.push(e),t.map[e.id]=e}function wT(t,e,n){const i=t.name,r=i.length;for(lu.lastIndex=0;;){const s=lu.exec(i),a=lu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){$p(n,c===void 0?new MT(o,t,e):new ET(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new TT(o),$p(n,d)),n=d}}}class il{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);wT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Kp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const AT=37297;let CT=0;function RT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function bT(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===Nl&&n===Pl?i="LinearDisplayP3ToLinearSRGB":e===Pl&&n===Nl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ai:case nc:return[i,"LinearTransferOETF"];case kt:case pd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Zp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+RT(t.getShaderSource(e),a)}else return r}function LT(t,e){const n=bT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function PT(t,e){let n;switch(e){case Ly:n="Linear";break;case Py:n="Reinhard";break;case Ny:n="OptimizedCineon";break;case B0:n="ACESFilmic";break;case Iy:n="AgX";break;case Dy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function NT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gs).join(`
`)}function DT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(gs).join(`
`)}function IT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function UT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function gs(t){return t!==""}function Qp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OT=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(t){return t.replace(OT,kT)}const FT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kT(t,e){let n=Fe[e];if(n===void 0){const i=FT.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fh(n)}const zT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function em(t){return t.replace(zT,BT)}function BT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===F0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===k0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function HT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Us:case Os:e="ENVMAP_TYPE_CUBE";break;case tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function WT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case z0:e="ENVMAP_BLENDING_MULTIPLY";break;case Ry:e="ENVMAP_BLENDING_MIX";break;case by:e="ENVMAP_BLENDING_ADD";break}return e}function jT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function XT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=GT(n),c=HT(n),h=VT(n),d=WT(n),f=jT(n),m=n.isWebGL2?"":NT(n),x=DT(n),y=IT(s),p=r.createProgram();let u,g,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(gs).join(`
`),u.length>0&&(u+=`
`),g=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(gs).join(`
`),g.length>0&&(g+=`
`)):(u=[tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),g=[m,tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zi?"#define TONE_MAPPING":"",n.toneMapping!==Zi?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Zi?PT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,LT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gs).join(`
`)),a=fh(a),a=Qp(a,n),a=Jp(a,n),o=fh(o),o=Qp(o,n),o=Jp(o,n),a=em(a),o=em(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=_+u+a,b=_+g+o,R=Kp(r,r.VERTEX_SHADER,S),A=Kp(r,r.FRAGMENT_SHADER,b);r.attachShader(p,R),r.attachShader(p,A),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function I(j){if(t.debug.checkShaderErrors){const $=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(R).trim(),U=r.getShaderInfoLog(A).trim();let k=!0,q=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,R,A);else{const N=Zp(r,R,"vertex"),F=Zp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+N+`
`+F)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(P===""||U==="")&&(q=!1);q&&(j.diagnostics={runnable:k,programLog:$,vertexShader:{log:P,prefix:u},fragmentShader:{log:U,prefix:g}})}r.deleteShader(R),r.deleteShader(A),E=new il(r,p),T=UT(r,p)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(p,AT)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=CT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=A,this}let qT=0;class YT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $T(e),n.set(e,i)),i}}class $T{constructor(e){this.id=qT++,this.code=e,this.usedTimes=0}}function KT(t,e,n,i,r,s,a){const o=new nv,l=new YT,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function p(E,T,z,j,$){const P=j.fog,U=$.geometry,k=E.isMeshStandardMaterial?j.environment:null,q=(E.isMeshStandardMaterial?n:e).get(E.envMap||k),N=q&&q.mapping===tc?q.image.height:null,F=x[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const W=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,K=W!==void 0?W.length:0;let Q=0;U.morphAttributes.position!==void 0&&(Q=1),U.morphAttributes.normal!==void 0&&(Q=2),U.morphAttributes.color!==void 0&&(Q=3);let Y,Z,le,de;if(F){const Kt=ii[F];Y=Kt.vertexShader,Z=Kt.fragmentShader}else Y=E.vertexShader,Z=E.fragmentShader,l.update(E),le=l.getVertexShaderID(E),de=l.getFragmentShaderID(E);const me=t.getRenderTarget(),De=$.isInstancedMesh===!0,Ue=$.isBatchedMesh===!0,Ae=!!E.map,Ye=!!E.matcap,B=!!q,$t=!!E.aoMap,Me=!!E.lightMap,Le=!!E.bumpMap,ve=!!E.normalMap,dt=!!E.displacementMap,ke=!!E.emissiveMap,C=!!E.metalnessMap,M=!!E.roughnessMap,H=E.anisotropy>0,ne=E.clearcoat>0,ee=E.iridescence>0,ie=E.sheen>0,_e=E.transmission>0,ce=H&&!!E.anisotropyMap,fe=ne&&!!E.clearcoatMap,we=ne&&!!E.clearcoatNormalMap,ze=ne&&!!E.clearcoatRoughnessMap,J=ee&&!!E.iridescenceMap,Je=ee&&!!E.iridescenceThicknessMap,We=ie&&!!E.sheenColorMap,be=ie&&!!E.sheenRoughnessMap,Se=!!E.specularMap,pe=!!E.specularColorMap,Oe=!!E.specularIntensityMap,Ze=_e&&!!E.transmissionMap,vt=_e&&!!E.thicknessMap,Ge=!!E.gradientMap,re=!!E.alphaMap,L=E.alphaTest>0,ae=!!E.alphaHash,oe=!!E.extensions,Ce=!!U.attributes.uv1,Ee=!!U.attributes.uv2,tt=!!U.attributes.uv3;let nt=Zi;return E.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(nt=t.toneMapping),{isWebGL2:h,shaderID:F,shaderType:E.type,shaderName:E.name,vertexShader:Y,fragmentShader:Z,defines:E.defines,customVertexShaderID:le,customFragmentShaderID:de,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ue,instancing:De,instancingColor:De&&$.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:me===null?t.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ai,map:Ae,matcap:Ye,envMap:B,envMapMode:B&&q.mapping,envMapCubeUVHeight:N,aoMap:$t,lightMap:Me,bumpMap:Le,normalMap:ve,displacementMap:f&&dt,emissiveMap:ke,normalMapObjectSpace:ve&&E.normalMapType===Xy,normalMapTangentSpace:ve&&E.normalMapType===K0,metalnessMap:C,roughnessMap:M,anisotropy:H,anisotropyMap:ce,clearcoat:ne,clearcoatMap:fe,clearcoatNormalMap:we,clearcoatRoughnessMap:ze,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:Je,sheen:ie,sheenColorMap:We,sheenRoughnessMap:be,specularMap:Se,specularColorMap:pe,specularIntensityMap:Oe,transmission:_e,transmissionMap:Ze,thicknessMap:vt,gradientMap:Ge,opaque:E.transparent===!1&&E.blending===Ts,alphaMap:re,alphaTest:L,alphaHash:ae,combine:E.combine,mapUv:Ae&&y(E.map.channel),aoMapUv:$t&&y(E.aoMap.channel),lightMapUv:Me&&y(E.lightMap.channel),bumpMapUv:Le&&y(E.bumpMap.channel),normalMapUv:ve&&y(E.normalMap.channel),displacementMapUv:dt&&y(E.displacementMap.channel),emissiveMapUv:ke&&y(E.emissiveMap.channel),metalnessMapUv:C&&y(E.metalnessMap.channel),roughnessMapUv:M&&y(E.roughnessMap.channel),anisotropyMapUv:ce&&y(E.anisotropyMap.channel),clearcoatMapUv:fe&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:we&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:We&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:be&&y(E.sheenRoughnessMap.channel),specularMapUv:Se&&y(E.specularMap.channel),specularColorMapUv:pe&&y(E.specularColorMap.channel),specularIntensityMapUv:Oe&&y(E.specularIntensityMap.channel),transmissionMapUv:Ze&&y(E.transmissionMap.channel),thicknessMapUv:vt&&y(E.thicknessMap.channel),alphaMapUv:re&&y(E.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ve||H),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:Ee,vertexUv3s:tt,pointsUvs:$.isPoints===!0&&!!U.attributes.uv&&(Ae||re),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:$.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:nt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ae&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===si,flipSided:E.side===dn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:oe&&E.extensions.derivatives===!0,extensionFragDepth:oe&&E.extensions.fragDepth===!0,extensionDrawBuffers:oe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const z in E.defines)T.push(z),T.push(E.defines[z]);return E.isRawShaderMaterial===!1&&(g(T,E),_(T,E),T.push(t.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function g(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function _(E,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),E.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function S(E){const T=x[E.type];let z;if(T){const j=ii[T];z=NS.clone(j.uniforms)}else z=E.uniforms;return z}function b(E,T){let z;for(let j=0,$=c.length;j<$;j++){const P=c[j];if(P.cacheKey===T){z=P,++z.usedTimes;break}}return z===void 0&&(z=new XT(t,T,E,s),c.push(z)),z}function R(E){if(--E.usedTimes===0){const T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function A(E){l.remove(E)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:b,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:I}}function ZT(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function QT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function nm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function im(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,f,m,x,y,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:x,renderOrder:d.renderOrder,z:y,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=x,u.renderOrder=d.renderOrder,u.z=y,u.group=p),e++,u}function o(d,f,m,x,y,p){const u=a(d,f,m,x,y,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(d,f,m,x,y,p){const u=a(d,f,m,x,y,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||QT),i.length>1&&i.sort(f||nm),r.length>1&&r.sort(f||nm)}function h(){for(let d=e,f=t.length;d<f;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function JT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new im,t.set(i,[a])):r>=s.length?(a=new im,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ew(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new Ne};break;case"SpotLight":n={position:new D,direction:new D,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":n={color:new Ne,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function tw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nw=0;function iw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function rw(t,e){const n=new ew,i=tw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new D);const s=new D,a=new ct,o=new ct;function l(h,d){let f=0,m=0,x=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let y=0,p=0,u=0,g=0,_=0,S=0,b=0,R=0,A=0,I=0,E=0;h.sort(iw);const T=d===!0?Math.PI:1;for(let j=0,$=h.length;j<$;j++){const P=h[j],U=P.color,k=P.intensity,q=P.distance,N=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=U.r*k*T,m+=U.g*k*T,x+=U.b*k*T;else if(P.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(P.sh.coefficients[F],k);E++}else if(P.isDirectionalLight){const F=n.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const W=P.shadow,K=i.get(P);K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,r.directionalShadow[y]=K,r.directionalShadowMap[y]=N,r.directionalShadowMatrix[y]=P.shadow.matrix,S++}r.directional[y]=F,y++}else if(P.isSpotLight){const F=n.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(U).multiplyScalar(k*T),F.distance=q,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,r.spot[u]=F;const W=P.shadow;if(P.map&&(r.spotLightMap[A]=P.map,A++,W.updateMatrices(P),P.castShadow&&I++),r.spotLightMatrix[u]=W.matrix,P.castShadow){const K=i.get(P);K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,r.spotShadow[u]=K,r.spotShadowMap[u]=N,R++}u++}else if(P.isRectAreaLight){const F=n.get(P);F.color.copy(U).multiplyScalar(k),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),r.rectArea[g]=F,g++}else if(P.isPointLight){const F=n.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity*T),F.distance=P.distance,F.decay=P.decay,P.castShadow){const W=P.shadow,K=i.get(P);K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,K.shadowCameraNear=W.camera.near,K.shadowCameraFar=W.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=N,r.pointShadowMatrix[p]=P.shadow.matrix,b++}r.point[p]=F,p++}else if(P.isHemisphereLight){const F=n.get(P);F.skyColor.copy(P.color).multiplyScalar(k*T),F.groundColor.copy(P.groundColor).multiplyScalar(k*T),r.hemi[_]=F,_++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=x;const z=r.hash;(z.directionalLength!==y||z.pointLength!==p||z.spotLength!==u||z.rectAreaLength!==g||z.hemiLength!==_||z.numDirectionalShadows!==S||z.numPointShadows!==b||z.numSpotShadows!==R||z.numSpotMaps!==A||z.numLightProbes!==E)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=g,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=R+A-I,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=E,z.directionalLength=y,z.pointLength=p,z.spotLength=u,z.rectAreaLength=g,z.hemiLength=_,z.numDirectionalShadows=S,z.numPointShadows=b,z.numSpotShadows=R,z.numSpotMaps=A,z.numLightProbes=E,r.version=nw++)}function c(h,d){let f=0,m=0,x=0,y=0,p=0;const u=d.matrixWorldInverse;for(let g=0,_=h.length;g<_;g++){const S=h[g];if(S.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),f++}else if(S.isSpotLight){const b=r.spot[x];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),x++}else if(S.isRectAreaLight){const b=r.rectArea[y];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(u),o.identity(),a.copy(S.matrixWorld),a.premultiply(u),o.extractRotation(a),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(u),m++}else if(S.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function rm(t,e){const n=new rw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function sw(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new rm(t,e),n.set(s,[l])):a>=o.length?(l=new rm(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class aw extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ow extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cw=`uniform sampler2D shadow_pass;
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
}`;function uw(t,e,n){let i=new vd;const r=new qe,s=new qe,a=new ht,o=new aw({depthPacking:jy}),l=new ow,c={},h=n.maxTextureSize,d={[tr]:dn,[dn]:tr,[si]:si},f=new Nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:lw,fragmentShader:cw}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new zn;x.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ge(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=F0;let u=this.type;this.render=function(R,A,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const E=t.getRenderTarget(),T=t.getActiveCubeFace(),z=t.getActiveMipmapLevel(),j=t.state;j.setBlending(Ki),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const $=u!==mi&&this.type===mi,P=u===mi&&this.type!==mi;for(let U=0,k=R.length;U<k;U++){const q=R[U],N=q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const F=N.getFrameExtents();if(r.multiply(F),s.copy(N.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/F.x),r.x=s.x*F.x,N.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/F.y),r.y=s.y*F.y,N.mapSize.y=s.y)),N.map===null||$===!0||P===!0){const K=this.type!==mi?{minFilter:tn,magFilter:tn}:{};N.map!==null&&N.map.dispose(),N.map=new Pr(r.x,r.y,K),N.map.texture.name=q.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const W=N.getViewportCount();for(let K=0;K<W;K++){const Q=N.getViewport(K);a.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),j.viewport(a),N.updateMatrices(q,K),i=N.getFrustum(),S(A,I,N.camera,q,this.type)}N.isPointLightShadow!==!0&&this.type===mi&&g(N,I),N.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(E,T,z)};function g(R,A){const I=e.update(y);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Pr(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,I,f,y,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,I,m,y,null)}function _(R,A,I,E){let T=null;const z=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)T=z;else if(T=I.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const j=T.uuid,$=A.uuid;let P=c[j];P===void 0&&(P={},c[j]=P);let U=P[$];U===void 0&&(U=T.clone(),P[$]=U,A.addEventListener("dispose",b)),T=U}if(T.visible=A.visible,T.wireframe=A.wireframe,E===mi?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:d[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const j=t.properties.get(T);j.light=I}return T}function S(R,A,I,E,T){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===mi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const $=e.update(R),P=R.material;if(Array.isArray(P)){const U=$.groups;for(let k=0,q=U.length;k<q;k++){const N=U[k],F=P[N.materialIndex];if(F&&F.visible){const W=_(R,F,E,T);R.onBeforeShadow(t,R,A,I,$,W,N),t.renderBufferDirect(I,null,$,W,R,N),R.onAfterShadow(t,R,A,I,$,W,N)}}}else if(P.visible){const U=_(R,P,E,T);R.onBeforeShadow(t,R,A,I,$,U,null),t.renderBufferDirect(I,null,$,U,R,null),R.onAfterShadow(t,R,A,I,$,U,null)}}const j=R.children;for(let $=0,P=j.length;$<P;$++)S(j[$],A,I,E,T)}function b(R){R.target.removeEventListener("dispose",b);for(const I in c){const E=c[I],T=R.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function hw(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ae=new ht;let oe=null;const Ce=new ht(0,0,0,0);return{setMask:function(Ee){oe!==Ee&&!L&&(t.colorMask(Ee,Ee,Ee,Ee),oe=Ee)},setLocked:function(Ee){L=Ee},setClear:function(Ee,tt,nt,Nt,Kt){Kt===!0&&(Ee*=Nt,tt*=Nt,nt*=Nt),ae.set(Ee,tt,nt,Nt),Ce.equals(ae)===!1&&(t.clearColor(Ee,tt,nt,Nt),Ce.copy(ae))},reset:function(){L=!1,oe=null,Ce.set(-1,0,0,0)}}}function s(){let L=!1,ae=null,oe=null,Ce=null;return{setTest:function(Ee){Ee?Ue(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(Ee){ae!==Ee&&!L&&(t.depthMask(Ee),ae=Ee)},setFunc:function(Ee){if(oe!==Ee){switch(Ee){case Sy:t.depthFunc(t.NEVER);break;case My:t.depthFunc(t.ALWAYS);break;case Ey:t.depthFunc(t.LESS);break;case bl:t.depthFunc(t.LEQUAL);break;case Ty:t.depthFunc(t.EQUAL);break;case wy:t.depthFunc(t.GEQUAL);break;case Ay:t.depthFunc(t.GREATER);break;case Cy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=Ee}},setLocked:function(Ee){L=Ee},setClear:function(Ee){Ce!==Ee&&(t.clearDepth(Ee),Ce=Ee)},reset:function(){L=!1,ae=null,oe=null,Ce=null}}}function a(){let L=!1,ae=null,oe=null,Ce=null,Ee=null,tt=null,nt=null,Nt=null,Kt=null;return{setTest:function(it){L||(it?Ue(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(it){ae!==it&&!L&&(t.stencilMask(it),ae=it)},setFunc:function(it,Zt,ei){(oe!==it||Ce!==Zt||Ee!==ei)&&(t.stencilFunc(it,Zt,ei),oe=it,Ce=Zt,Ee=ei)},setOp:function(it,Zt,ei){(tt!==it||nt!==Zt||Nt!==ei)&&(t.stencilOp(it,Zt,ei),tt=it,nt=Zt,Nt=ei)},setLocked:function(it){L=it},setClear:function(it){Kt!==it&&(t.clearStencil(it),Kt=it)},reset:function(){L=!1,ae=null,oe=null,Ce=null,Ee=null,tt=null,nt=null,Nt=null,Kt=null}}}const o=new r,l=new s,c=new a,h=new WeakMap,d=new WeakMap;let f={},m={},x=new WeakMap,y=[],p=null,u=!1,g=null,_=null,S=null,b=null,R=null,A=null,I=null,E=new Ne(0,0,0),T=0,z=!1,j=null,$=null,P=null,U=null,k=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,F=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(W)[1]),N=F>=1):W.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),N=F>=2);let K=null,Q={};const Y=t.getParameter(t.SCISSOR_BOX),Z=t.getParameter(t.VIEWPORT),le=new ht().fromArray(Y),de=new ht().fromArray(Z);function me(L,ae,oe,Ce){const Ee=new Uint8Array(4),tt=t.createTexture();t.bindTexture(L,tt),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<oe;nt++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ae,0,t.RGBA,1,1,Ce,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(ae+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return tt}const De={};De[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),De[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),De[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(t.DEPTH_TEST),l.setFunc(bl),ke(!1),C(Bf),Ue(t.CULL_FACE),ve(Ki);function Ue(L){f[L]!==!0&&(t.enable(L),f[L]=!0)}function Ae(L){f[L]!==!1&&(t.disable(L),f[L]=!1)}function Ye(L,ae){return m[L]!==ae?(t.bindFramebuffer(L,ae),m[L]=ae,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ae),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ae)),!0):!1}function B(L,ae){let oe=y,Ce=!1;if(L)if(oe=x.get(ae),oe===void 0&&(oe=[],x.set(ae,oe)),L.isWebGLMultipleRenderTargets){const Ee=L.texture;if(oe.length!==Ee.length||oe[0]!==t.COLOR_ATTACHMENT0){for(let tt=0,nt=Ee.length;tt<nt;tt++)oe[tt]=t.COLOR_ATTACHMENT0+tt;oe.length=Ee.length,Ce=!0}}else oe[0]!==t.COLOR_ATTACHMENT0&&(oe[0]=t.COLOR_ATTACHMENT0,Ce=!0);else oe[0]!==t.BACK&&(oe[0]=t.BACK,Ce=!0);Ce&&(n.isWebGL2?t.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function $t(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const Me={[mr]:t.FUNC_ADD,[ay]:t.FUNC_SUBTRACT,[oy]:t.FUNC_REVERSE_SUBTRACT};if(i)Me[Vf]=t.MIN,Me[Wf]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Me[Vf]=L.MIN_EXT,Me[Wf]=L.MAX_EXT)}const Le={[ly]:t.ZERO,[cy]:t.ONE,[uy]:t.SRC_COLOR,[ah]:t.SRC_ALPHA,[gy]:t.SRC_ALPHA_SATURATE,[py]:t.DST_COLOR,[dy]:t.DST_ALPHA,[hy]:t.ONE_MINUS_SRC_COLOR,[oh]:t.ONE_MINUS_SRC_ALPHA,[my]:t.ONE_MINUS_DST_COLOR,[fy]:t.ONE_MINUS_DST_ALPHA,[vy]:t.CONSTANT_COLOR,[_y]:t.ONE_MINUS_CONSTANT_COLOR,[xy]:t.CONSTANT_ALPHA,[yy]:t.ONE_MINUS_CONSTANT_ALPHA};function ve(L,ae,oe,Ce,Ee,tt,nt,Nt,Kt,it){if(L===Ki){u===!0&&(Ae(t.BLEND),u=!1);return}if(u===!1&&(Ue(t.BLEND),u=!0),L!==sy){if(L!==g||it!==z){if((_!==mr||R!==mr)&&(t.blendEquation(t.FUNC_ADD),_=mr,R=mr),it)switch(L){case Ts:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Is:t.blendFunc(t.ONE,t.ONE);break;case Gf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ts:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Is:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Gf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,b=null,A=null,I=null,E.set(0,0,0),T=0,g=L,z=it}return}Ee=Ee||ae,tt=tt||oe,nt=nt||Ce,(ae!==_||Ee!==R)&&(t.blendEquationSeparate(Me[ae],Me[Ee]),_=ae,R=Ee),(oe!==S||Ce!==b||tt!==A||nt!==I)&&(t.blendFuncSeparate(Le[oe],Le[Ce],Le[tt],Le[nt]),S=oe,b=Ce,A=tt,I=nt),(Nt.equals(E)===!1||Kt!==T)&&(t.blendColor(Nt.r,Nt.g,Nt.b,Kt),E.copy(Nt),T=Kt),g=L,z=!1}function dt(L,ae){L.side===si?Ae(t.CULL_FACE):Ue(t.CULL_FACE);let oe=L.side===dn;ae&&(oe=!oe),ke(oe),L.blending===Ts&&L.transparent===!1?ve(Ki):ve(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Ce=L.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),H(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ue(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){j!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),j=L)}function C(L){L!==iy?(Ue(t.CULL_FACE),L!==$&&(L===Bf?t.cullFace(t.BACK):L===ry?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),$=L}function M(L){L!==P&&(N&&t.lineWidth(L),P=L)}function H(L,ae,oe){L?(Ue(t.POLYGON_OFFSET_FILL),(U!==ae||k!==oe)&&(t.polygonOffset(ae,oe),U=ae,k=oe)):Ae(t.POLYGON_OFFSET_FILL)}function ne(L){L?Ue(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function ee(L){L===void 0&&(L=t.TEXTURE0+q-1),K!==L&&(t.activeTexture(L),K=L)}function ie(L,ae,oe){oe===void 0&&(K===null?oe=t.TEXTURE0+q-1:oe=K);let Ce=Q[oe];Ce===void 0&&(Ce={type:void 0,texture:void 0},Q[oe]=Ce),(Ce.type!==L||Ce.texture!==ae)&&(K!==oe&&(t.activeTexture(oe),K=oe),t.bindTexture(L,ae||De[L]),Ce.type=L,Ce.texture=ae)}function _e(){const L=Q[K];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ce(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Je(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(L){le.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),le.copy(L))}function Ze(L){de.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),de.copy(L))}function vt(L,ae){let oe=d.get(ae);oe===void 0&&(oe=new WeakMap,d.set(ae,oe));let Ce=oe.get(L);Ce===void 0&&(Ce=t.getUniformBlockIndex(ae,L.name),oe.set(L,Ce))}function Ge(L,ae){const Ce=d.get(ae).get(L);h.get(ae)!==Ce&&(t.uniformBlockBinding(ae,Ce,L.__bindingPointIndex),h.set(ae,Ce))}function re(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},K=null,Q={},m={},x=new WeakMap,y=[],p=null,u=!1,g=null,_=null,S=null,b=null,R=null,A=null,I=null,E=new Ne(0,0,0),T=0,z=!1,j=null,$=null,P=null,U=null,k=null,le.set(0,0,t.canvas.width,t.canvas.height),de.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ue,disable:Ae,bindFramebuffer:Ye,drawBuffers:B,useProgram:$t,setBlending:ve,setMaterial:dt,setFlipSided:ke,setCullFace:C,setLineWidth:M,setPolygonOffset:H,setScissorTest:ne,activeTexture:ee,bindTexture:ie,unbindTexture:_e,compressedTexImage2D:ce,compressedTexImage3D:fe,texImage2D:Se,texImage3D:pe,updateUBOMapping:vt,uniformBlockBinding:Ge,texStorage2D:We,texStorage3D:be,texSubImage2D:we,texSubImage3D:ze,compressedTexSubImage2D:J,compressedTexSubImage3D:Je,scissor:Oe,viewport:Ze,reset:re}}function dw(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,M){return m?new OffscreenCanvas(C,M):Ul("canvas")}function y(C,M,H,ne){let ee=1;if((C.width>ne||C.height>ne)&&(ee=ne/Math.max(C.width,C.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ie=M?Il:Math.floor,_e=ie(ee*C.width),ce=ie(ee*C.height);d===void 0&&(d=x(_e,ce));const fe=H?x(_e,ce):d;return fe.width=_e,fe.height=ce,fe.getContext("2d").drawImage(C,0,0,_e,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+_e+"x"+ce+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return dh(C.width)&&dh(C.height)}function u(C){return o?!1:C.wrapS!==Yn||C.wrapT!==Yn||C.minFilter!==tn&&C.minFilter!==Ln}function g(C,M){return C.generateMipmaps&&M&&C.minFilter!==tn&&C.minFilter!==Ln}function _(C){t.generateMipmap(C)}function S(C,M,H,ne,ee=!1){if(o===!1)return M;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ie=M;if(M===t.RED&&(H===t.FLOAT&&(ie=t.R32F),H===t.HALF_FLOAT&&(ie=t.R16F),H===t.UNSIGNED_BYTE&&(ie=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ie=t.R8UI),H===t.UNSIGNED_SHORT&&(ie=t.R16UI),H===t.UNSIGNED_INT&&(ie=t.R32UI),H===t.BYTE&&(ie=t.R8I),H===t.SHORT&&(ie=t.R16I),H===t.INT&&(ie=t.R32I)),M===t.RG&&(H===t.FLOAT&&(ie=t.RG32F),H===t.HALF_FLOAT&&(ie=t.RG16F),H===t.UNSIGNED_BYTE&&(ie=t.RG8)),M===t.RGBA){const _e=ee?Ll:et.getTransfer(ne);H===t.FLOAT&&(ie=t.RGBA32F),H===t.HALF_FLOAT&&(ie=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ie=_e===ot?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function b(C,M,H){return g(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==tn&&C.minFilter!==Ln?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){return C===tn||C===jf||C===Uc?t.NEAREST:t.LINEAR}function A(C){const M=C.target;M.removeEventListener("dispose",A),E(M),M.isVideoTexture&&h.delete(M)}function I(C){const M=C.target;M.removeEventListener("dispose",I),z(M)}function E(C){const M=i.get(C);if(M.__webglInit===void 0)return;const H=C.source,ne=f.get(H);if(ne){const ee=ne[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(C),Object.keys(ne).length===0&&f.delete(H)}i.remove(C)}function T(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const H=C.source,ne=f.get(H);delete ne[M.__cacheKey],a.memory.textures--}function z(C){const M=C.texture,H=i.get(C),ne=i.get(M);if(ne.__webglTexture!==void 0&&(t.deleteTexture(ne.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(H.__webglFramebuffer[ee]))for(let ie=0;ie<H.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(H.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(H.__webglFramebuffer[ee]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[ee])}else{if(Array.isArray(H.__webglFramebuffer))for(let ee=0;ee<H.__webglFramebuffer.length;ee++)t.deleteFramebuffer(H.__webglFramebuffer[ee]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ee=0;ee<H.__webglColorRenderbuffer.length;ee++)H.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[ee]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,ie=M.length;ee<ie;ee++){const _e=i.get(M[ee]);_e.__webglTexture&&(t.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(M[ee])}i.remove(M),i.remove(C)}let j=0;function $(){j=0}function P(){const C=j;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),j+=1,C}function U(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function k(C,M){const H=i.get(C);if(C.isVideoTexture&&dt(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const ne=C.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(H,C,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function q(C,M){const H=i.get(C);if(C.version>0&&H.__version!==C.version){le(H,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function N(C,M){const H=i.get(C);if(C.version>0&&H.__version!==C.version){le(H,C,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function F(C,M){const H=i.get(C);if(C.version>0&&H.__version!==C.version){de(H,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const W={[Ga]:t.REPEAT,[Yn]:t.CLAMP_TO_EDGE,[uh]:t.MIRRORED_REPEAT},K={[tn]:t.NEAREST,[jf]:t.NEAREST_MIPMAP_NEAREST,[Uc]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[Uy]:t.LINEAR_MIPMAP_NEAREST,[Ha]:t.LINEAR_MIPMAP_LINEAR},Q={[qy]:t.NEVER,[Jy]:t.ALWAYS,[Yy]:t.LESS,[Z0]:t.LEQUAL,[$y]:t.EQUAL,[Qy]:t.GEQUAL,[Ky]:t.GREATER,[Zy]:t.NOTEQUAL};function Y(C,M,H){if(H?(t.texParameteri(C,t.TEXTURE_WRAP_S,W[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,W[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,W[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,K[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,K[M.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Yn||M.wrapT!==Yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,R(M.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,R(M.minFilter)),M.minFilter!==tn&&M.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===tn||M.minFilter!==Uc&&M.minFilter!==Ha||M.type===Gi&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Va&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(C,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Z(C,M){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));const ne=M.source;let ee=f.get(ne);ee===void 0&&(ee={},f.set(ne,ee));const ie=U(M);if(ie!==C.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ee[ie].usedTimes++;const _e=ee[C.__cacheKey];_e!==void 0&&(ee[C.__cacheKey].usedTimes--,_e.usedTimes===0&&T(M)),C.__cacheKey=ie,C.__webglTexture=ee[ie].texture}return H}function le(C,M,H){let ne=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=t.TEXTURE_3D);const ee=Z(C,M),ie=M.source;n.bindTexture(ne,C.__webglTexture,t.TEXTURE0+H);const _e=i.get(ie);if(ie.version!==_e.__version||ee===!0){n.activeTexture(t.TEXTURE0+H);const ce=et.getPrimaries(et.workingColorSpace),fe=M.colorSpace===Pn?null:et.getPrimaries(M.colorSpace),we=M.colorSpace===Pn||ce===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const ze=u(M)&&p(M.image)===!1;let J=y(M.image,ze,!1,r.maxTextureSize);J=ke(M,J);const Je=p(J)||o,We=s.convert(M.format,M.colorSpace);let be=s.convert(M.type),Se=S(M.internalFormat,We,be,M.colorSpace,M.isVideoTexture);Y(ne,M,Je);let pe;const Oe=M.mipmaps,Ze=o&&M.isVideoTexture!==!0&&Se!==Y0,vt=_e.__version===void 0||ee===!0,Ge=b(M,J,Je);if(M.isDepthTexture)Se=t.DEPTH_COMPONENT,o?M.type===Gi?Se=t.DEPTH_COMPONENT32F:M.type===Bi?Se=t.DEPTH_COMPONENT24:M.type===Mr?Se=t.DEPTH24_STENCIL8:Se=t.DEPTH_COMPONENT16:M.type===Gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Er&&Se===t.DEPTH_COMPONENT&&M.type!==fd&&M.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Bi,be=s.convert(M.type)),M.format===Fs&&Se===t.DEPTH_COMPONENT&&(Se=t.DEPTH_STENCIL,M.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Mr,be=s.convert(M.type))),vt&&(Ze?n.texStorage2D(t.TEXTURE_2D,1,Se,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,Se,J.width,J.height,0,We,be,null));else if(M.isDataTexture)if(Oe.length>0&&Je){Ze&&vt&&n.texStorage2D(t.TEXTURE_2D,Ge,Se,Oe[0].width,Oe[0].height);for(let re=0,L=Oe.length;re<L;re++)pe=Oe[re],Ze?n.texSubImage2D(t.TEXTURE_2D,re,0,0,pe.width,pe.height,We,be,pe.data):n.texImage2D(t.TEXTURE_2D,re,Se,pe.width,pe.height,0,We,be,pe.data);M.generateMipmaps=!1}else Ze?(vt&&n.texStorage2D(t.TEXTURE_2D,Ge,Se,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,J.width,J.height,We,be,J.data)):n.texImage2D(t.TEXTURE_2D,0,Se,J.width,J.height,0,We,be,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ze&&vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,Se,Oe[0].width,Oe[0].height,J.depth);for(let re=0,L=Oe.length;re<L;re++)pe=Oe[re],M.format!==$n?We!==null?Ze?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,J.depth,We,pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,Se,pe.width,pe.height,J.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,J.depth,We,be,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,Se,pe.width,pe.height,J.depth,0,We,be,pe.data)}else{Ze&&vt&&n.texStorage2D(t.TEXTURE_2D,Ge,Se,Oe[0].width,Oe[0].height);for(let re=0,L=Oe.length;re<L;re++)pe=Oe[re],M.format!==$n?We!==null?Ze?n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,pe.width,pe.height,We,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,re,Se,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage2D(t.TEXTURE_2D,re,0,0,pe.width,pe.height,We,be,pe.data):n.texImage2D(t.TEXTURE_2D,re,Se,pe.width,pe.height,0,We,be,pe.data)}else if(M.isDataArrayTexture)Ze?(vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,Se,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,We,be,J.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,J.width,J.height,J.depth,0,We,be,J.data);else if(M.isData3DTexture)Ze?(vt&&n.texStorage3D(t.TEXTURE_3D,Ge,Se,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,We,be,J.data)):n.texImage3D(t.TEXTURE_3D,0,Se,J.width,J.height,J.depth,0,We,be,J.data);else if(M.isFramebufferTexture){if(vt)if(Ze)n.texStorage2D(t.TEXTURE_2D,Ge,Se,J.width,J.height);else{let re=J.width,L=J.height;for(let ae=0;ae<Ge;ae++)n.texImage2D(t.TEXTURE_2D,ae,Se,re,L,0,We,be,null),re>>=1,L>>=1}}else if(Oe.length>0&&Je){Ze&&vt&&n.texStorage2D(t.TEXTURE_2D,Ge,Se,Oe[0].width,Oe[0].height);for(let re=0,L=Oe.length;re<L;re++)pe=Oe[re],Ze?n.texSubImage2D(t.TEXTURE_2D,re,0,0,We,be,pe):n.texImage2D(t.TEXTURE_2D,re,Se,We,be,pe);M.generateMipmaps=!1}else Ze?(vt&&n.texStorage2D(t.TEXTURE_2D,Ge,Se,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,be,J)):n.texImage2D(t.TEXTURE_2D,0,Se,We,be,J);g(M,Je)&&_(ne),_e.__version=ie.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function de(C,M,H){if(M.image.length!==6)return;const ne=Z(C,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+H);const ie=i.get(ee);if(ee.version!==ie.__version||ne===!0){n.activeTexture(t.TEXTURE0+H);const _e=et.getPrimaries(et.workingColorSpace),ce=M.colorSpace===Pn?null:et.getPrimaries(M.colorSpace),fe=M.colorSpace===Pn||_e===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const we=M.isCompressedTexture||M.image[0].isCompressedTexture,ze=M.image[0]&&M.image[0].isDataTexture,J=[];for(let re=0;re<6;re++)!we&&!ze?J[re]=y(M.image[re],!1,!0,r.maxCubemapSize):J[re]=ze?M.image[re].image:M.image[re],J[re]=ke(M,J[re]);const Je=J[0],We=p(Je)||o,be=s.convert(M.format,M.colorSpace),Se=s.convert(M.type),pe=S(M.internalFormat,be,Se,M.colorSpace),Oe=o&&M.isVideoTexture!==!0,Ze=ie.__version===void 0||ne===!0;let vt=b(M,Je,We);Y(t.TEXTURE_CUBE_MAP,M,We);let Ge;if(we){Oe&&Ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,vt,pe,Je.width,Je.height);for(let re=0;re<6;re++){Ge=J[re].mipmaps;for(let L=0;L<Ge.length;L++){const ae=Ge[L];M.format!==$n?be!==null?Oe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,0,0,ae.width,ae.height,be,ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,pe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,0,0,ae.width,ae.height,be,Se,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,pe,ae.width,ae.height,0,be,Se,ae.data)}}}else{Ge=M.mipmaps,Oe&&Ze&&(Ge.length>0&&vt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,vt,pe,J[0].width,J[0].height));for(let re=0;re<6;re++)if(ze){Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,J[re].width,J[re].height,be,Se,J[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,pe,J[re].width,J[re].height,0,be,Se,J[re].data);for(let L=0;L<Ge.length;L++){const oe=Ge[L].image[re].image;Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,0,0,oe.width,oe.height,be,Se,oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,pe,oe.width,oe.height,0,be,Se,oe.data)}}else{Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,be,Se,J[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,pe,be,Se,J[re]);for(let L=0;L<Ge.length;L++){const ae=Ge[L];Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,0,0,be,Se,ae.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,pe,be,Se,ae.image[re])}}}g(M,We)&&_(t.TEXTURE_CUBE_MAP),ie.__version=ee.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function me(C,M,H,ne,ee,ie){const _e=s.convert(H.format,H.colorSpace),ce=s.convert(H.type),fe=S(H.internalFormat,_e,ce,H.colorSpace);if(!i.get(M).__hasExternalTextures){const ze=Math.max(1,M.width>>ie),J=Math.max(1,M.height>>ie);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ie,fe,ze,J,M.depth,0,_e,ce,null):n.texImage2D(ee,ie,fe,ze,J,0,_e,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),ve(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,i.get(H).__webglTexture,0,Le(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,i.get(H).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(C,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let ne=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||ve(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Gi?ne=t.DEPTH_COMPONENT32F:ee.type===Bi&&(ne=t.DEPTH_COMPONENT24));const ie=Le(M);ve(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,ne,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,ne,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,ne,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const ne=Le(M);H&&ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,M.width,M.height):ve(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const ne=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<ne.length;ee++){const ie=ne[ee],_e=s.convert(ie.format,ie.colorSpace),ce=s.convert(ie.type),fe=S(ie.internalFormat,_e,ce,ie.colorSpace),we=Le(M);H&&ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,we,fe,M.width,M.height):ve(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,we,fe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,fe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ue(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);const ne=i.get(M.depthTexture).__webglTexture,ee=Le(M);if(M.depthTexture.format===Er)ve(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(M.depthTexture.format===Fs)ve(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ae(C){const M=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ue(M.__webglFramebuffer,C)}else if(H){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]=t.createRenderbuffer(),De(M.__webglDepthbuffer[ne],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),De(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(C,M,H){const ne=i.get(C);M!==void 0&&me(ne.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ae(C)}function B(C){const M=C.texture,H=i.get(C),ne=i.get(M);C.addEventListener("dispose",I),C.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=M.version,a.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,ie=C.isWebGLMultipleRenderTargets===!0,_e=p(C)||o;if(ee){H.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(o&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ce]=[];for(let fe=0;fe<M.mipmaps.length;fe++)H.__webglFramebuffer[ce][fe]=t.createFramebuffer()}else H.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)H.__webglFramebuffer[ce]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const ce=C.texture;for(let fe=0,we=ce.length;fe<we;fe++){const ze=i.get(ce[fe]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&ve(C)===!1){const ce=ie?M:[M];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let fe=0;fe<ce.length;fe++){const we=ce[fe];H.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[fe]);const ze=s.convert(we.format,we.colorSpace),J=s.convert(we.type),Je=S(we.internalFormat,ze,J,we.colorSpace,C.isXRRenderTarget===!0),We=Le(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,Je,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,H.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),De(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),Y(t.TEXTURE_CUBE_MAP,M,_e);for(let ce=0;ce<6;ce++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)me(H.__webglFramebuffer[ce][fe],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else me(H.__webglFramebuffer[ce],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(M,_e)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const ce=C.texture;for(let fe=0,we=ce.length;fe<we;fe++){const ze=ce[fe],J=i.get(ze);n.bindTexture(t.TEXTURE_2D,J.__webglTexture),Y(t.TEXTURE_2D,ze,_e),me(H.__webglFramebuffer,C,ze,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),g(ze,_e)&&_(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ce=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ce,ne.__webglTexture),Y(ce,M,_e),o&&M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)me(H.__webglFramebuffer[fe],C,M,t.COLOR_ATTACHMENT0,ce,fe);else me(H.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,ce,0);g(M,_e)&&_(ce),n.unbindTexture()}C.depthBuffer&&Ae(C)}function $t(C){const M=p(C)||o,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ne=0,ee=H.length;ne<ee;ne++){const ie=H[ne];if(g(ie,M)){const _e=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ce=i.get(ie).__webglTexture;n.bindTexture(_e,ce),_(_e),n.unbindTexture()}}}function Me(C){if(o&&C.samples>0&&ve(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,ne=C.height;let ee=t.COLOR_BUFFER_BIT;const ie=[],_e=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(C),fe=C.isWebGLMultipleRenderTargets===!0;if(fe)for(let we=0;we<M.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let we=0;we<M.length;we++){ie.push(t.COLOR_ATTACHMENT0+we),C.depthBuffer&&ie.push(_e);const ze=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(ze===!1&&(C.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),fe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[we]),ze===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[_e]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_e])),fe){const J=i.get(M[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,J,0)}t.blitFramebuffer(0,0,H,ne,0,0,H,ne,ee,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let we=0;we<M.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,ce.__webglColorRenderbuffer[we]);const ze=i.get(M[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Le(C){return Math.min(r.maxSamples,C.samples)}function ve(C){const M=i.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function dt(C){const M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function ke(C,M){const H=C.colorSpace,ne=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===hh||H!==Ai&&H!==Pn&&(et.getTransfer(H)===ot?o===!1?e.has("EXT_sRGB")===!0&&ne===$n?(C.format=hh,C.minFilter=Ln,C.generateMipmaps=!1):M=J0.sRGBToLinear(M):(ne!==$n||ee!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}this.allocateTextureUnit=P,this.resetTextureUnits=$,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=N,this.setTextureCube=F,this.rebindTextures=Ye,this.setupRenderTarget=B,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ve}function fw(t,e,n){const i=n.isWebGL2;function r(s,a=Pn){let o;const l=et.getTransfer(a);if(s===Qi)return t.UNSIGNED_BYTE;if(s===V0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===W0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Oy)return t.BYTE;if(s===Fy)return t.SHORT;if(s===fd)return t.UNSIGNED_SHORT;if(s===H0)return t.INT;if(s===Bi)return t.UNSIGNED_INT;if(s===Gi)return t.FLOAT;if(s===Va)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ky)return t.ALPHA;if(s===$n)return t.RGBA;if(s===zy)return t.LUMINANCE;if(s===By)return t.LUMINANCE_ALPHA;if(s===Er)return t.DEPTH_COMPONENT;if(s===Fs)return t.DEPTH_STENCIL;if(s===hh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Gy)return t.RED;if(s===j0)return t.RED_INTEGER;if(s===Hy)return t.RG;if(s===X0)return t.RG_INTEGER;if(s===q0)return t.RGBA_INTEGER;if(s===Oc||s===Fc||s===kc||s===zc)if(l===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Oc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===kc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Oc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===kc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xf||s===qf||s===Yf||s===$f)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Xf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$f)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Y0)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Kf||s===Zf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Kf)return l===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Zf)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Qf||s===Jf||s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===ap||s===op||s===lp||s===cp||s===up||s===hp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Qf)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Jf)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ep)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===tp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===np)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ip)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===rp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===sp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ap)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===op)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===lp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===cp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===up)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===hp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bc||s===dp||s===fp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Bc)return l===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===dp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===fp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Vy||s===pp||s===mp||s===gp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Bc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===pp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Mr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class pw extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kn extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mw={type:"move"};class cu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Kn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class gw extends Vs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,x=null;const y=n.getContextAttributes();let p=null,u=null;const g=[],_=[],S=new qe;let b=null;const R=new xn;R.layers.enable(1),R.viewport=new ht;const A=new xn;A.layers.enable(2),A.viewport=new ht;const I=[R,A],E=new pw;E.layers.enable(1),E.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=g[Y];return Z===void 0&&(Z=new cu,g[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=g[Y];return Z===void 0&&(Z=new cu,g[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=g[Y];return Z===void 0&&(Z=new cu,g[Y]=Z),Z.getHandSpace()};function j(Y){const Z=_.indexOf(Y.inputSource);if(Z===-1)return;const le=g[Z];le!==void 0&&(le.update(Y.inputSource,Y.frame,c||a),le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",P);for(let Y=0;Y<g.length;Y++){const Z=_[Y];Z!==null&&(_[Y]=null,g[Y].disconnect(Z))}T=null,z=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,u=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",$),r.addEventListener("inputsourceschange",P),y.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Pr(m.framebufferWidth,m.framebufferHeight,{format:$n,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Z=null,le=null,de=null;y.depth&&(de=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=y.stencil?Fs:Er,le=y.stencil?Mr:Bi);const me={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(me),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new Pr(f.textureWidth,f.textureHeight,{format:$n,type:Qi,depthTexture:new hv(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const De=e.properties.get(u);De.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(Y){for(let Z=0;Z<Y.removed.length;Z++){const le=Y.removed[Z],de=_.indexOf(le);de>=0&&(_[de]=null,g[de].disconnect(le))}for(let Z=0;Z<Y.added.length;Z++){const le=Y.added[Z];let de=_.indexOf(le);if(de===-1){for(let De=0;De<g.length;De++)if(De>=_.length){_.push(le),de=De;break}else if(_[De]===null){_[De]=le,de=De;break}if(de===-1)break}const me=g[de];me&&me.connect(le)}}const U=new D,k=new D;function q(Y,Z,le){U.setFromMatrixPosition(Z.matrixWorld),k.setFromMatrixPosition(le.matrixWorld);const de=U.distanceTo(k),me=Z.projectionMatrix.elements,De=le.projectionMatrix.elements,Ue=me[14]/(me[10]-1),Ae=me[14]/(me[10]+1),Ye=(me[9]+1)/me[5],B=(me[9]-1)/me[5],$t=(me[8]-1)/me[0],Me=(De[8]+1)/De[0],Le=Ue*$t,ve=Ue*Me,dt=de/(-$t+Me),ke=dt*-$t;Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ke),Y.translateZ(dt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const C=Ue+dt,M=Ae+dt,H=Le-ke,ne=ve+(de-ke),ee=Ye*Ae/M*C,ie=B*Ae/M*C;Y.projectionMatrix.makePerspective(H,ne,ee,ie,C,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function N(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;E.near=A.near=R.near=Y.near,E.far=A.far=R.far=Y.far,(T!==E.near||z!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,z=E.far);const Z=Y.parent,le=E.cameras;N(E,Z);for(let de=0;de<le.length;de++)N(le[de],Z);le.length===2?q(E,R,A):E.projectionMatrix.copy(R.projectionMatrix),F(Y,E,Z)};function F(Y,Z,le){le===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Wa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)};let W=null;function K(Y,Z){if(h=Z.getViewerPose(c||a),x=Z,h!==null){const le=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let de=!1;le.length!==E.cameras.length&&(E.cameras.length=0,de=!0);for(let me=0;me<le.length;me++){const De=le[me];let Ue=null;if(m!==null)Ue=m.getViewport(De);else{const Ye=d.getViewSubImage(f,De);Ue=Ye.viewport,me===0&&(e.setRenderTargetTextures(u,Ye.colorTexture,f.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(u))}let Ae=I[me];Ae===void 0&&(Ae=new xn,Ae.layers.enable(me),Ae.viewport=new ht,I[me]=Ae),Ae.matrix.fromArray(De.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(De.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),me===0&&(E.matrix.copy(Ae.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),de===!0&&E.cameras.push(Ae)}}for(let le=0;le<g.length;le++){const de=_[le],me=g[le];de!==null&&me!==void 0&&me.update(de,Z,c||a)}W&&W(Y,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),x=null}const Q=new cv;Q.setAnimationLoop(K),this.setAnimationLoop=function(Y){W=Y},this.dispose=function(){}}}function vw(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,av(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,_,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),y(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,g,_):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===dn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===dn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*_,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,_){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=_*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===dn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _w(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const S=_.program;i.uniformBlockBinding(g,S)}function c(g,_){let S=r[g.id];S===void 0&&(x(g),S=h(g),r[g.id]=S,g.addEventListener("dispose",p));const b=_.program;i.updateUBOMapping(g,b);const R=e.render.frame;s[g.id]!==R&&(f(g),s[g.id]=R)}function h(g){const _=d();g.__bindingPointIndex=_;const S=t.createBuffer(),b=g.__size,R=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function d(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const _=r[g.id],S=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let R=0,A=S.length;R<A;R++){const I=Array.isArray(S[R])?S[R]:[S[R]];for(let E=0,T=I.length;E<T;E++){const z=I[E];if(m(z,R,E,b)===!0){const j=z.__offset,$=Array.isArray(z.value)?z.value:[z.value];let P=0;for(let U=0;U<$.length;U++){const k=$[U],q=y(k);typeof k=="number"||typeof k=="boolean"?(z.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,j+P,z.__data)):k.isMatrix3?(z.__data[0]=k.elements[0],z.__data[1]=k.elements[1],z.__data[2]=k.elements[2],z.__data[3]=0,z.__data[4]=k.elements[3],z.__data[5]=k.elements[4],z.__data[6]=k.elements[5],z.__data[7]=0,z.__data[8]=k.elements[6],z.__data[9]=k.elements[7],z.__data[10]=k.elements[8],z.__data[11]=0):(k.toArray(z.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,z.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,_,S,b){const R=g.value,A=_+"_"+S;if(b[A]===void 0)return typeof R=="number"||typeof R=="boolean"?b[A]=R:b[A]=R.clone(),!0;{const I=b[A];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return b[A]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function x(g){const _=g.uniforms;let S=0;const b=16;for(let A=0,I=_.length;A<I;A++){const E=Array.isArray(_[A])?_[A]:[_[A]];for(let T=0,z=E.length;T<z;T++){const j=E[T],$=Array.isArray(j.value)?j.value:[j.value];for(let P=0,U=$.length;P<U;P++){const k=$[P],q=y(k),N=S%b;N!==0&&b-N<q.boundary&&(S+=b-N),j.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=S,S+=q.storage}}}const R=S%b;return R>0&&(S+=b-R),g.__size=S,g.__cache={},this}function y(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function p(g){const _=g.target;_.removeEventListener("dispose",p);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class vv{constructor(e={}){const{canvas:n=pS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),x=new Int32Array(4);let y=null,p=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;const _=this;let S=!1,b=0,R=0,A=null,I=-1,E=null;const T=new ht,z=new ht;let j=null;const $=new Ne(0);let P=0,U=n.width,k=n.height,q=1,N=null,F=null;const W=new ht(0,0,U,k),K=new ht(0,0,U,k);let Q=!1;const Y=new vd;let Z=!1,le=!1,de=null;const me=new ct,De=new qe,Ue=new D,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return A===null?q:1}let B=i;function $t(w,O){for(let V=0;V<w.length;V++){const X=w[V],G=n.getContext(X,O);if(G!==null)return G}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${dd}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",ae,!1),B===null){const O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),B=$t(O,w),B===null)throw $t(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Me,Le,ve,dt,ke,C,M,H,ne,ee,ie,_e,ce,fe,we,ze,J,Je,We,be,Se,pe,Oe,Ze;function vt(){Me=new R1(B),Le=new M1(B,Me,e),Me.init(Le),pe=new fw(B,Me,Le),ve=new hw(B,Me,Le),dt=new P1(B),ke=new ZT,C=new dw(B,Me,ve,ke,Le,pe,dt),M=new T1(_),H=new C1(_),ne=new zS(B,Le),Oe=new y1(B,Me,ne,Le),ee=new b1(B,ne,dt,Oe),ie=new U1(B,ee,ne,dt),We=new I1(B,Le,C),ze=new E1(ke),_e=new KT(_,M,H,Me,Le,Oe,ze),ce=new vw(_,ke),fe=new JT,we=new sw(Me,Le),Je=new x1(_,M,H,ve,ie,f,l),J=new uw(_,ie,Le),Ze=new _w(B,dt,Le,ve),be=new S1(B,Me,dt,Le),Se=new L1(B,Me,dt,Le),dt.programs=_e.programs,_.capabilities=Le,_.extensions=Me,_.properties=ke,_.renderLists=fe,_.shadowMap=J,_.state=ve,_.info=dt}vt();const Ge=new gw(_,B);this.xr=Ge,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=Me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(U,k,!1))},this.getSize=function(w){return w.set(U,k)},this.setSize=function(w,O,V=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,k=O,n.width=Math.floor(w*q),n.height=Math.floor(O*q),V===!0&&(n.style.width=w+"px",n.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(U*q,k*q).floor()},this.setDrawingBufferSize=function(w,O,V){U=w,k=O,q=V,n.width=Math.floor(w*V),n.height=Math.floor(O*V),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(W)},this.setViewport=function(w,O,V,X){w.isVector4?W.set(w.x,w.y,w.z,w.w):W.set(w,O,V,X),ve.viewport(T.copy(W).multiplyScalar(q).floor())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,O,V,X){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,O,V,X),ve.scissor(z.copy(K).multiplyScalar(q).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(w){ve.setScissorTest(Q=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){F=w},this.getClearColor=function(w){return w.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(w=!0,O=!0,V=!0){let X=0;if(w){let G=!1;if(A!==null){const ue=A.texture.format;G=ue===q0||ue===X0||ue===j0}if(G){const ue=A.texture.type,xe=ue===Qi||ue===Bi||ue===fd||ue===Mr||ue===V0||ue===W0,Te=Je.getClearColor(),Re=Je.getClearAlpha(),Be=Te.r,Pe=Te.g,Ie=Te.b;xe?(m[0]=Be,m[1]=Pe,m[2]=Ie,m[3]=Re,B.clearBufferuiv(B.COLOR,0,m)):(x[0]=Be,x[1]=Pe,x[2]=Ie,x[3]=Re,B.clearBufferiv(B.COLOR,0,x))}else X|=B.COLOR_BUFFER_BIT}O&&(X|=B.DEPTH_BUFFER_BIT),V&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),fe.dispose(),we.dispose(),ke.dispose(),M.dispose(),H.dispose(),ie.dispose(),Oe.dispose(),Ze.dispose(),_e.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Kt),Ge.removeEventListener("sessionend",it),de&&(de.dispose(),de=null),Zt.stop()};function re(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=dt.autoReset,O=J.enabled,V=J.autoUpdate,X=J.needsUpdate,G=J.type;vt(),dt.autoReset=w,J.enabled=O,J.autoUpdate=V,J.needsUpdate=X,J.type=G}function ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function oe(w){const O=w.target;O.removeEventListener("dispose",oe),Ce(O)}function Ce(w){Ee(w),ke.remove(w)}function Ee(w){const O=ke.get(w).programs;O!==void 0&&(O.forEach(function(V){_e.releaseProgram(V)}),w.isShaderMaterial&&_e.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,V,X,G,ue){O===null&&(O=Ae);const xe=G.isMesh&&G.matrixWorld.determinant()<0,Te=wv(w,O,V,X,G);ve.setMaterial(X,xe);let Re=V.index,Be=1;if(X.wireframe===!0){if(Re=ee.getWireframeAttribute(V),Re===void 0)return;Be=2}const Pe=V.drawRange,Ie=V.attributes.position;let St=Pe.start*Be,mn=(Pe.start+Pe.count)*Be;ue!==null&&(St=Math.max(St,ue.start*Be),mn=Math.min(mn,(ue.start+ue.count)*Be)),Re!==null?(St=Math.max(St,0),mn=Math.min(mn,Re.count)):Ie!=null&&(St=Math.max(St,0),mn=Math.min(mn,Ie.count));const Dt=mn-St;if(Dt<0||Dt===1/0)return;Oe.setup(G,X,Te,V,Re);let ci,ft=be;if(Re!==null&&(ci=ne.get(Re),ft=Se,ft.setIndex(ci)),G.isMesh)X.wireframe===!0?(ve.setLineWidth(X.wireframeLinewidth*Ye()),ft.setMode(B.LINES)):ft.setMode(B.TRIANGLES);else if(G.isLine){let He=X.linewidth;He===void 0&&(He=1),ve.setLineWidth(He*Ye()),G.isLineSegments?ft.setMode(B.LINES):G.isLineLoop?ft.setMode(B.LINE_LOOP):ft.setMode(B.LINE_STRIP)}else G.isPoints?ft.setMode(B.POINTS):G.isSprite&&ft.setMode(B.TRIANGLES);if(G.isBatchedMesh)ft.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ft.renderInstances(St,Dt,G.count);else if(V.isInstancedBufferGeometry){const He=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,sc=Math.min(V.instanceCount,He);ft.renderInstances(St,Dt,sc)}else ft.render(St,Dt)};function tt(w,O,V){w.transparent===!0&&w.side===si&&w.forceSinglePass===!1?(w.side=dn,w.needsUpdate=!0,eo(w,O,V),w.side=tr,w.needsUpdate=!0,eo(w,O,V),w.side=si):eo(w,O,V)}this.compile=function(w,O,V=null){V===null&&(V=w),p=we.get(V),p.init(),g.push(p),V.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),w!==V&&w.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(_._useLegacyLights);const X=new Set;return w.traverse(function(G){const ue=G.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){const Te=ue[xe];tt(Te,V,G),X.add(Te)}else tt(ue,V,G),X.add(ue)}),g.pop(),p=null,X},this.compileAsync=function(w,O,V=null){const X=this.compile(w,O,V);return new Promise(G=>{function ue(){if(X.forEach(function(xe){ke.get(xe).currentProgram.isReady()&&X.delete(xe)}),X.size===0){G(w);return}setTimeout(ue,10)}Me.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let nt=null;function Nt(w){nt&&nt(w)}function Kt(){Zt.stop()}function it(){Zt.start()}const Zt=new cv;Zt.setAnimationLoop(Nt),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(w){nt=w,Ge.setAnimationLoop(w),w===null?Zt.stop():Zt.start()},Ge.addEventListener("sessionstart",Kt),Ge.addEventListener("sessionend",it),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(O),O=Ge.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,O,A),p=we.get(w,g.length),p.init(),g.push(p),me.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(me),le=this.localClippingEnabled,Z=ze.init(this.clippingPlanes,le),y=fe.get(w,u.length),y.init(),u.push(y),ei(w,O,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(N,F),this.info.render.frame++,Z===!0&&ze.beginShadows();const V=p.state.shadowsArray;if(J.render(V,w,O),Z===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(y,w),p.setupLights(_._useLegacyLights),O.isArrayCamera){const X=O.cameras;for(let G=0,ue=X.length;G<ue;G++){const xe=X[G];Td(y,w,xe,xe.viewport)}}else Td(y,w,O);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(_,w,O),Oe.resetDefaultState(),I=-1,E=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function ei(w,O,V,X){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){X&&Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(me);const xe=ie.update(w),Te=w.material;Te.visible&&y.push(w,xe,Te,V,Ue.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const xe=ie.update(w),Te=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ue.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ue.copy(xe.boundingSphere.center)),Ue.applyMatrix4(w.matrixWorld).applyMatrix4(me)),Array.isArray(Te)){const Re=xe.groups;for(let Be=0,Pe=Re.length;Be<Pe;Be++){const Ie=Re[Be],St=Te[Ie.materialIndex];St&&St.visible&&y.push(w,xe,St,V,Ue.z,Ie)}}else Te.visible&&y.push(w,xe,Te,V,Ue.z,null)}}const ue=w.children;for(let xe=0,Te=ue.length;xe<Te;xe++)ei(ue[xe],O,V,X)}function Td(w,O,V,X){const G=w.opaque,ue=w.transmissive,xe=w.transparent;p.setupLightsView(V),Z===!0&&ze.setGlobalState(_.clippingPlanes,V),ue.length>0&&Tv(G,ue,O,V),X&&ve.viewport(T.copy(X)),G.length>0&&Ja(G,O,V),ue.length>0&&Ja(ue,O,V),xe.length>0&&Ja(xe,O,V),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Tv(w,O,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const ue=Le.isWebGL2;de===null&&(de=new Pr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Va:Qi,minFilter:Ha,samples:ue?4:0})),_.getDrawingBufferSize(De),ue?de.setSize(De.x,De.y):de.setSize(Il(De.x),Il(De.y));const xe=_.getRenderTarget();_.setRenderTarget(de),_.getClearColor($),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();const Te=_.toneMapping;_.toneMapping=Zi,Ja(w,V,X),C.updateMultisampleRenderTarget(de),C.updateRenderTargetMipmap(de);let Re=!1;for(let Be=0,Pe=O.length;Be<Pe;Be++){const Ie=O[Be],St=Ie.object,mn=Ie.geometry,Dt=Ie.material,ci=Ie.group;if(Dt.side===si&&St.layers.test(X.layers)){const ft=Dt.side;Dt.side=dn,Dt.needsUpdate=!0,wd(St,V,X,mn,Dt,ci),Dt.side=ft,Dt.needsUpdate=!0,Re=!0}}Re===!0&&(C.updateMultisampleRenderTarget(de),C.updateRenderTargetMipmap(de)),_.setRenderTarget(xe),_.setClearColor($,P),_.toneMapping=Te}function Ja(w,O,V){const X=O.isScene===!0?O.overrideMaterial:null;for(let G=0,ue=w.length;G<ue;G++){const xe=w[G],Te=xe.object,Re=xe.geometry,Be=X===null?xe.material:X,Pe=xe.group;Te.layers.test(V.layers)&&wd(Te,O,V,Re,Be,Pe)}}function wd(w,O,V,X,G,ue){w.onBeforeRender(_,O,V,X,G,ue),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(_,O,V,X,w,ue),G.transparent===!0&&G.side===si&&G.forceSinglePass===!1?(G.side=dn,G.needsUpdate=!0,_.renderBufferDirect(V,O,X,G,w,ue),G.side=tr,G.needsUpdate=!0,_.renderBufferDirect(V,O,X,G,w,ue),G.side=si):_.renderBufferDirect(V,O,X,G,w,ue),w.onAfterRender(_,O,V,X,G,ue)}function eo(w,O,V){O.isScene!==!0&&(O=Ae);const X=ke.get(w),G=p.state.lights,ue=p.state.shadowsArray,xe=G.state.version,Te=_e.getParameters(w,G.state,ue,O,V),Re=_e.getProgramCacheKey(Te);let Be=X.programs;X.environment=w.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(w.isMeshStandardMaterial?H:M).get(w.envMap||X.environment),Be===void 0&&(w.addEventListener("dispose",oe),Be=new Map,X.programs=Be);let Pe=Be.get(Re);if(Pe!==void 0){if(X.currentProgram===Pe&&X.lightsStateVersion===xe)return Cd(w,Te),Pe}else Te.uniforms=_e.getUniforms(w),w.onBuild(V,Te,_),w.onBeforeCompile(Te,_),Pe=_e.acquireProgram(Te,Re),Be.set(Re,Pe),X.uniforms=Te.uniforms;const Ie=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=ze.uniform),Cd(w,Te),X.needsLights=Cv(w),X.lightsStateVersion=xe,X.needsLights&&(Ie.ambientLightColor.value=G.state.ambient,Ie.lightProbe.value=G.state.probe,Ie.directionalLights.value=G.state.directional,Ie.directionalLightShadows.value=G.state.directionalShadow,Ie.spotLights.value=G.state.spot,Ie.spotLightShadows.value=G.state.spotShadow,Ie.rectAreaLights.value=G.state.rectArea,Ie.ltc_1.value=G.state.rectAreaLTC1,Ie.ltc_2.value=G.state.rectAreaLTC2,Ie.pointLights.value=G.state.point,Ie.pointLightShadows.value=G.state.pointShadow,Ie.hemisphereLights.value=G.state.hemi,Ie.directionalShadowMap.value=G.state.directionalShadowMap,Ie.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ie.spotShadowMap.value=G.state.spotShadowMap,Ie.spotLightMatrix.value=G.state.spotLightMatrix,Ie.spotLightMap.value=G.state.spotLightMap,Ie.pointShadowMap.value=G.state.pointShadowMap,Ie.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Pe,X.uniformsList=null,Pe}function Ad(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=il.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Cd(w,O){const V=ke.get(w);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function wv(w,O,V,X,G){O.isScene!==!0&&(O=Ae),C.resetTextureUnits();const ue=O.fog,xe=X.isMeshStandardMaterial?O.environment:null,Te=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ai,Re=(X.isMeshStandardMaterial?H:M).get(X.envMap||xe),Be=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pe=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ie=!!V.morphAttributes.position,St=!!V.morphAttributes.normal,mn=!!V.morphAttributes.color;let Dt=Zi;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Dt=_.toneMapping);const ci=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ft=ci!==void 0?ci.length:0,He=ke.get(X),sc=p.state.lights;if(Z===!0&&(le===!0||w!==E)){const An=w===E&&X.id===I;ze.setState(X,w,An)}let _t=!1;X.version===He.__version?(He.needsLights&&He.lightsStateVersion!==sc.state.version||He.outputColorSpace!==Te||G.isBatchedMesh&&He.batching===!1||!G.isBatchedMesh&&He.batching===!0||G.isInstancedMesh&&He.instancing===!1||!G.isInstancedMesh&&He.instancing===!0||G.isSkinnedMesh&&He.skinning===!1||!G.isSkinnedMesh&&He.skinning===!0||G.isInstancedMesh&&He.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&He.instancingColor===!1&&G.instanceColor!==null||He.envMap!==Re||X.fog===!0&&He.fog!==ue||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ze.numPlanes||He.numIntersection!==ze.numIntersection)||He.vertexAlphas!==Be||He.vertexTangents!==Pe||He.morphTargets!==Ie||He.morphNormals!==St||He.morphColors!==mn||He.toneMapping!==Dt||Le.isWebGL2===!0&&He.morphTargetsCount!==ft)&&(_t=!0):(_t=!0,He.__version=X.version);let sr=He.currentProgram;_t===!0&&(sr=eo(X,O,G));let Rd=!1,Xs=!1,ac=!1;const Gt=sr.getUniforms(),ar=He.uniforms;if(ve.useProgram(sr.program)&&(Rd=!0,Xs=!0,ac=!0),X.id!==I&&(I=X.id,Xs=!0),Rd||E!==w){Gt.setValue(B,"projectionMatrix",w.projectionMatrix),Gt.setValue(B,"viewMatrix",w.matrixWorldInverse);const An=Gt.map.cameraPosition;An!==void 0&&An.setValue(B,Ue.setFromMatrixPosition(w.matrixWorld)),Le.logarithmicDepthBuffer&&Gt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Gt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,Xs=!0,ac=!0)}if(G.isSkinnedMesh){Gt.setOptional(B,G,"bindMatrix"),Gt.setOptional(B,G,"bindMatrixInverse");const An=G.skeleton;An&&(Le.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Gt.setValue(B,"boneTexture",An.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Gt.setOptional(B,G,"batchingTexture"),Gt.setValue(B,"batchingTexture",G._matricesTexture,C));const oc=V.morphAttributes;if((oc.position!==void 0||oc.normal!==void 0||oc.color!==void 0&&Le.isWebGL2===!0)&&We.update(G,V,sr),(Xs||He.receiveShadow!==G.receiveShadow)&&(He.receiveShadow=G.receiveShadow,Gt.setValue(B,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ar.envMap.value=Re,ar.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Xs&&(Gt.setValue(B,"toneMappingExposure",_.toneMappingExposure),He.needsLights&&Av(ar,ac),ue&&X.fog===!0&&ce.refreshFogUniforms(ar,ue),ce.refreshMaterialUniforms(ar,X,q,k,de),il.upload(B,Ad(He),ar,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(il.upload(B,Ad(He),ar,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Gt.setValue(B,"center",G.center),Gt.setValue(B,"modelViewMatrix",G.modelViewMatrix),Gt.setValue(B,"normalMatrix",G.normalMatrix),Gt.setValue(B,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const An=X.uniformsGroups;for(let lc=0,Rv=An.length;lc<Rv;lc++)if(Le.isWebGL2){const bd=An[lc];Ze.update(bd,sr),Ze.bind(bd,sr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return sr}function Av(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Cv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,O,V){ke.get(w.texture).__webglTexture=O,ke.get(w.depthTexture).__webglTexture=V;const X=ke.get(w);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){const V=ke.get(w);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,V=0){A=w,b=O,R=V;let X=!0,G=null,ue=!1,xe=!1;if(w){const Re=ke.get(w);Re.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(B.FRAMEBUFFER,null),X=!1):Re.__webglFramebuffer===void 0?C.setupRenderTarget(w):Re.__hasExternalTextures&&C.rebindTextures(w,ke.get(w.texture).__webglTexture,ke.get(w.depthTexture).__webglTexture);const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(xe=!0);const Pe=ke.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Pe[O])?G=Pe[O][V]:G=Pe[O],ue=!0):Le.isWebGL2&&w.samples>0&&C.useMultisampledRTT(w)===!1?G=ke.get(w).__webglMultisampledFramebuffer:Array.isArray(Pe)?G=Pe[V]:G=Pe,T.copy(w.viewport),z.copy(w.scissor),j=w.scissorTest}else T.copy(W).multiplyScalar(q).floor(),z.copy(K).multiplyScalar(q).floor(),j=Q;if(ve.bindFramebuffer(B.FRAMEBUFFER,G)&&Le.drawBuffers&&X&&ve.drawBuffers(w,G),ve.viewport(T),ve.scissor(z),ve.setScissorTest(j),ue){const Re=ke.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,Re.__webglTexture,V)}else if(xe){const Re=ke.get(w.texture),Be=O||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Re.__webglTexture,V||0,Be)}I=-1},this.readRenderTargetPixels=function(w,O,V,X,G,ue,xe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(Te=Te[xe]),Te){ve.bindFramebuffer(B.FRAMEBUFFER,Te);try{const Re=w.texture,Be=Re.format,Pe=Re.type;if(Be!==$n&&pe.convert(Be)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Pe===Va&&(Me.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Pe!==Qi&&pe.convert(Pe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===Gi&&(Le.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-X&&V>=0&&V<=w.height-G&&B.readPixels(O,V,X,G,pe.convert(Be),pe.convert(Pe),ue)}finally{const Re=A!==null?ke.get(A).__webglFramebuffer:null;ve.bindFramebuffer(B.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(w,O,V=0){const X=Math.pow(2,-V),G=Math.floor(O.image.width*X),ue=Math.floor(O.image.height*X);C.setTexture2D(O,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,w.x,w.y,G,ue),ve.unbindTexture()},this.copyTextureToTexture=function(w,O,V,X=0){const G=O.image.width,ue=O.image.height,xe=pe.convert(V.format),Te=pe.convert(V.type);C.setTexture2D(V,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,X,w.x,w.y,G,ue,xe,Te,O.image.data):O.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,X,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,xe,O.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,X,w.x,w.y,xe,Te,O.image),X===0&&V.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(w,O,V,X,G=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=w.max.x-w.min.x+1,xe=w.max.y-w.min.y+1,Te=w.max.z-w.min.z+1,Re=pe.convert(X.format),Be=pe.convert(X.type);let Pe;if(X.isData3DTexture)C.setTexture3D(X,0),Pe=B.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)C.setTexture2DArray(X,0),Pe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const Ie=B.getParameter(B.UNPACK_ROW_LENGTH),St=B.getParameter(B.UNPACK_IMAGE_HEIGHT),mn=B.getParameter(B.UNPACK_SKIP_PIXELS),Dt=B.getParameter(B.UNPACK_SKIP_ROWS),ci=B.getParameter(B.UNPACK_SKIP_IMAGES),ft=V.isCompressedTexture?V.mipmaps[G]:V.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ft.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ft.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,w.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,w.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,w.min.z),V.isDataTexture||V.isData3DTexture?B.texSubImage3D(Pe,G,O.x,O.y,O.z,ue,xe,Te,Re,Be,ft.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Pe,G,O.x,O.y,O.z,ue,xe,Te,Re,ft.data)):B.texSubImage3D(Pe,G,O.x,O.y,O.z,ue,xe,Te,Re,Be,ft),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ie),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,St),B.pixelStorei(B.UNPACK_SKIP_PIXELS,mn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Dt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ci),G===0&&X.generateMipmaps&&B.generateMipmap(Pe),ve.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),ve.unbindTexture()},this.resetState=function(){b=0,R=0,A=null,ve.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===pd?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===nc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?Tr:$0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Tr?kt:Ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xw extends vv{}xw.prototype.isWebGL1Renderer=!0;class ja{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=n}clone(){return new ja(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yw extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class sm extends pn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ts=new ct,am=new ct,Go=[],om=new li,Sw=new ct,sa=new ge,aa=new Or;class Mw extends ge{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new sm(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Sw)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new li),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ts),om.copy(e.boundingBox).applyMatrix4(ts),this.boundingBox.union(om)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Or),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ts),aa.copy(e.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(aa)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}raycast(e,n){const i=this.matrixWorld,r=this.count;if(sa.geometry=this.geometry,sa.material=this.material,sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(i),e.ray.intersectsSphere(aa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ts),am.multiplyMatrices(i,ts),sa.matrixWorld=am,sa.raycast(e,Go);for(let a=0,o=Go.length;a<o;a++){const l=Go[a];l.instanceId=s,l.object=this,n.push(l)}Go.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new sm(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class _v extends Fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lm=new D,cm=new D,um=new ct,uu=new gd,Ho=new Or;class Ew extends bt{constructor(e=new zn,n=new _v){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)lm.fromBufferAttribute(n,r-1),cm.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=lm.distanceTo(cm);e.setAttribute("lineDistance",new Un(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(r),Ho.radius+=s,e.ray.intersectsSphere(Ho)===!1)return;um.copy(r).invert(),uu.copy(e.ray).applyMatrix4(um);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new D,h=new D,d=new D,f=new D,m=this.isLineSegments?2:1,x=i.index,p=i.attributes.position;if(x!==null){const u=Math.max(0,a.start),g=Math.min(x.count,a.start+a.count);for(let _=u,S=g-1;_<S;_+=m){const b=x.getX(_),R=x.getX(_+1);if(c.fromBufferAttribute(p,b),h.fromBufferAttribute(p,R),uu.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||n.push({distance:I,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let _=u,S=g-1;_<S;_+=m){if(c.fromBufferAttribute(p,_),h.fromBufferAttribute(p,_+1),uu.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||n.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const hm=new D,dm=new D;class Tw extends Ew{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)hm.fromBufferAttribute(n,r),dm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+hm.distanceTo(dm);e.setAttribute("lineDistance",new Un(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xv extends Fr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fm=new ct,ph=new gd,Vo=new Or,Wo=new D;class ww extends bt{constructor(e=new zn,n=new xv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(r),Vo.radius+=s,e.ray.intersectsSphere(Vo)===!1)return;fm.copy(r).invert(),ph.copy(e.ray).applyMatrix4(fm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=f,y=m;x<y;x++){const p=c.getX(x);Wo.fromBufferAttribute(d,p),pm(Wo,p,l,r,e,n,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=f,y=m;x<y;x++)Wo.fromBufferAttribute(d,x),pm(Wo,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function pm(t,e,n,i,r,s,a){const o=ph.distanceSqToPoint(t);if(o<n){const l=new D;ph.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Aw extends fn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class On extends zn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],m=[];let x=0;const y=[],p=i/2;let u=0;g(),a===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Un(d,3)),this.setAttribute("normal",new Un(f,3)),this.setAttribute("uv",new Un(m,2));function g(){const S=new D,b=new D;let R=0;const A=(n-e)/i;for(let I=0;I<=s;I++){const E=[],T=I/s,z=T*(n-e)+e;for(let j=0;j<=r;j++){const $=j/r,P=$*l+o,U=Math.sin(P),k=Math.cos(P);b.x=z*U,b.y=-T*i+p,b.z=z*k,d.push(b.x,b.y,b.z),S.set(U,A,k).normalize(),f.push(S.x,S.y,S.z),m.push($,1-T),E.push(x++)}y.push(E)}for(let I=0;I<r;I++)for(let E=0;E<s;E++){const T=y[E][I],z=y[E+1][I],j=y[E+1][I+1],$=y[E][I+1];h.push(T,z,$),h.push(z,j,$),R+=6}c.addGroup(u,R,0),u+=R}function _(S){const b=x,R=new qe,A=new D;let I=0;const E=S===!0?e:n,T=S===!0?1:-1;for(let j=1;j<=r;j++)d.push(0,p*T,0),f.push(0,T,0),m.push(.5,.5),x++;const z=x;for(let j=0;j<=r;j++){const P=j/r*l+o,U=Math.cos(P),k=Math.sin(P);A.x=E*k,A.y=p*T,A.z=E*U,d.push(A.x,A.y,A.z),f.push(0,T,0),R.x=U*.5+.5,R.y=k*.5*T+.5,m.push(R.x,R.y),x++}for(let j=0;j<r;j++){const $=b+j,P=z+j;S===!0?h.push(P,P+1,$):h.push(P+1,P,$),I+=3}c.addGroup(u,I,S===!0?1:2),u+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xd extends On{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new xd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wt extends Fr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=K0,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ol extends wt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class yd extends bt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const hu=new ct,mm=new D,gm=new D;class yv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vd,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;mm.setFromMatrixPosition(e.matrixWorld),n.position.copy(mm),gm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(gm),n.updateMatrixWorld(),hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vm=new ct,oa=new D,du=new D;class Cw extends yv{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),oa.setFromMatrixPosition(e.matrixWorld),i.position.copy(oa),du.copy(i.position),du.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(du),i.updateMatrixWorld(),r.makeTranslation(-oa.x,-oa.y,-oa.z),vm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vm)}}class mh extends yd{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Cw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Rw extends yv{constructor(){super(new uv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bw extends yd{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Rw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Lw extends yd{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_m(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=_m();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function _m(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dd);class Nw{camera;currentPos=new D;targetPos=new D;lookTarget=new D;baseFOV=68;maxFOV=92;shakeIntensity=0;shakeDecay=4.5;constructor(){this.camera=new xn(this.baseFOV,window.innerWidth/window.innerHeight,.1,1e3),this.currentPos.set(0,3.8,-8),this.camera.position.copy(this.currentPos)}triggerShake(e){this.shakeIntensity=Math.max(this.shakeIntensity,e)}resize(e,n){this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}update(e,n,i,r){const s=Math.min(1,i/280),a=Math.min(this.maxFOV,this.baseFOV+s*16+(r?8:0));this.camera.fov=Nn.lerp(this.camera.fov,a,e*5),this.camera.updateProjectionMatrix();const o=7.5+s*1.5,l=3.2+s*.4;this.targetPos.set(n.x*.75,n.y+l,n.z-o),this.currentPos.x=Nn.lerp(this.currentPos.x,this.targetPos.x,e*9),this.currentPos.y=Nn.lerp(this.currentPos.y,this.targetPos.y,e*9),this.currentPos.z=Nn.lerp(this.currentPos.z,this.targetPos.z,e*12);let c=0,h=0;this.shakeIntensity>.01&&(c=(Math.random()-.5)*this.shakeIntensity,h=(Math.random()-.5)*this.shakeIntensity,this.shakeIntensity=Math.max(0,this.shakeIntensity-this.shakeDecay*e)),i>160&&(h+=Math.sin(Date.now()*.04)*(s*.025)),this.camera.position.set(this.currentPos.x+c,this.currentPos.y+h,this.currentPos.z),this.lookTarget.set(n.x*.4,n.y+1.2,n.z+18),this.camera.lookAt(this.lookTarget)}}class zs{scene;roadSegments=[];segmentLength=120;totalSegments=6;static LANE_WIDTH=3.6;static LANES=[-5.4,-1.8,1.8,5.4];asphaltMaterial;lineMaterial;yellowLineMaterial;barrierMaterial;constructor(e){this.scene=e;const n=this.createAsphaltTexture();n.wrapS=Ga,n.wrapT=Ga,n.repeat.set(4,30),this.asphaltMaterial=new wt({color:1579552,map:n,roughness:.35,metalness:.15}),this.lineMaterial=new Sn({color:16777215}),this.yellowLineMaterial=new Sn({color:16755200}),this.barrierMaterial=new wt({color:4871528,metalness:.8,roughness:.3}),this.buildHighwaySegments(),this.buildCitySkyline()}createAsphaltTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d");n.fillStyle="#1a1d24",n.fillRect(0,0,512,512);const i=n.getImageData(0,0,512,512),r=i.data;for(let a=0;a<r.length;a+=4){const o=(Math.random()-.5)*24;r[a]=Math.min(255,Math.max(0,r[a]+o)),r[a+1]=Math.min(255,Math.max(0,r[a+1]+o)),r[a+2]=Math.min(255,Math.max(0,r[a+2]+o))}n.putImageData(i,0,0),n.fillStyle="rgba(10, 15, 25, 0.4)";for(let a=0;a<8;a++)n.beginPath(),n.ellipse(Math.random()*512,Math.random()*512,60+Math.random()*80,20+Math.random()*30,Math.random()*Math.PI,0,Math.PI*2),n.fill();return new Aw(e)}buildHighwaySegments(){const n=new wr(16.5,this.segmentLength);n.rotateX(-Math.PI/2);const i=new wr(.2,4);i.rotateX(-Math.PI/2);const r=new wr(.25,this.segmentLength);r.rotateX(-Math.PI/2);const s=new Ke(.5,.9,this.segmentLength);for(let a=0;a<this.totalSegments;a++){const o=new Kn,l=a*this.segmentLength-40;o.position.set(0,0,l);const c=new ge(n,this.asphaltMaterial);c.receiveShadow=!0,o.add(c);const h=new ge(r,this.yellowLineMaterial);h.position.set(-7.4,.01,0),o.add(h);const d=new ge(r,this.lineMaterial);d.position.set(7.4,.01,0),o.add(d);const f=[-3.6,0,3.6],m=Math.floor(this.segmentLength/8);for(const p of f)for(let u=0;u<m;u++){const g=new ge(i,this.lineMaterial);g.position.set(p,.01,-this.segmentLength/2+u*8+2),o.add(g)}const x=new ge(s,this.barrierMaterial);x.position.set(-8.3,.45,0),o.add(x);const y=new ge(s,this.barrierMaterial);y.position.set(8.3,.45,0),o.add(y);for(let p=0;p<3;p++){const u=-this.segmentLength/2+p*40+20,g=this.createStreetLamp();g.position.set(-8.8,0,u),o.add(g);const _=this.createStreetLamp(!0);_.position.set(8.8,0,u),o.add(_)}this.scene.add(o),this.roadSegments.push(o)}}createStreetLamp(e=!1){const n=new Kn,i=new On(.12,.16,7.5,8),r=new wt({color:3357517,metalness:.8,roughness:.3}),s=new ge(i,r);s.position.y=3.75,n.add(s);const a=new On(.08,.1,2.5,8);a.rotateZ(e?-Math.PI/4:Math.PI/4);const o=new ge(a,r);o.position.set(e?-.8:.8,7.2,0),n.add(o);const l=new Ke(.6,.15,.4),c=new Sn({color:8974079}),h=new ge(l,c);return h.position.set(e?-1.6:1.6,7.6,0),n.add(h),n}buildCitySkyline(){const n=new Ke(1,1,1),i=new wt({color:658968,roughness:.6,metalness:.2}),r=new Mw(n,i,60),s=new bt;for(let a=0;a<60;a++){const l=(a%2===0?-1:1)*(45+Math.random()*80),c=a/60*800-100,h=40+Math.random()*90,d=15+Math.random()*25,f=15+Math.random()*25;s.position.set(l,h/2-5,c),s.scale.set(d,h,f),s.updateMatrix(),r.setMatrixAt(a,s.matrix)}r.instanceMatrix.needsUpdate=!0,this.scene.add(r)}update(e){for(const n of this.roadSegments)if(n.position.z<e-60){let i=-1/0;for(const r of this.roadSegments)r.position.z>i&&(i=r.position.z);n.position.z=i+this.segmentLength}}getLaneX(e){const n=Math.max(0,Math.min(3,e));return zs.LANES[n]}setWetness(e){e?(this.asphaltMaterial.roughness=.1,this.asphaltMaterial.metalness=.35):(this.asphaltMaterial.roughness=.35,this.asphaltMaterial.metalness=.15)}}class Dw{mesh;config;speedKmh=0;targetSpeedKmh=0;accelerationRate=28;maxSpeedKmh=240;nitroMaxSpeedKmh=295;currentLaneX=1.8;lateralVelocity=0;steeringInertia=0;currentRPM=800;currentGear=1;nitroReserve=100;isNitroActive=!1;isBraking=!1;isCrashed=!1;carPaintMaterial;underglowMesh;underglowLight;frontWheels=[];allWheels=[];brakeLightMaterial;headlightCones=[];leftExhaustPos=new D;rightExhaustPos=new D;bounds=new li;carSize=new D(2.1,1.2,4.6);constructor(e,n){this.config=n,this.maxSpeedKmh=n.topSpeedKmh,this.nitroMaxSpeedKmh=n.topSpeedKmh*1.22,this.mesh=new Kn,this.carPaintMaterial=new Ol({color:new Ne(n.color),metalness:.85,roughness:.18,clearcoat:1,clearcoatRoughness:.08,reflectivity:.9}),this.brakeLightMaterial=new Sn({color:5570560});const i=new wr(2.6,5);i.rotateX(-Math.PI/2);const r=new Sn({color:new Ne(n.underglowColor),transparent:!0,opacity:.7,blending:Is,depthWrite:!1});this.underglowMesh=new ge(i,r),this.underglowMesh.position.y=.05,this.mesh.add(this.underglowMesh),this.underglowLight=new mh(new Ne(n.underglowColor),1.5,4.5),this.underglowLight.position.set(0,.2,0),this.mesh.add(this.underglowLight),this.buildSupercarModel(),e.add(this.mesh),this.mesh.position.set(this.currentLaneX,0,0),this.updateBounds()}buildSupercarModel(){const e=new Kn,n=new Ke(2.05,.42,4.5),i=new ge(n,this.carPaintMaterial);i.position.y=.38,i.castShadow=!0,i.receiveShadow=!0,e.add(i);const r=new Ke(1.95,.28,1.6);r.rotateX(-.1);const s=new ge(r,this.carPaintMaterial);s.position.set(0,.46,1.4),s.castShadow=!0,e.add(s);const a=new Ke(2.1,.08,.7),o=new wt({color:1118485,metalness:.4,roughness:.5}),l=new ge(a,o);l.position.set(0,.18,2.25),e.add(l);const c=new Ke(1.65,.52,2.2);c.rotateX(.08);const h=new Ol({color:329482,metalness:.9,roughness:.1,clearcoat:1,transmission:.3,transparent:!0,opacity:.92}),d=new ge(c,h);d.position.set(0,.76,-.2),d.castShadow=!0,e.add(d);const f=new Ke(1.4,.08,1.3),m=new ge(f,this.carPaintMaterial);m.position.set(0,1.02,-.3),e.add(m);const x=new Ke(1.95,.38,1.2),y=new ge(x,this.carPaintMaterial);y.position.set(0,.54,-1.6),e.add(y);const p=new Ke(1.9,.22,.6),u=new ge(p,o);u.position.set(0,.24,-2.2),e.add(u);const g=new Ke(2.1,.06,.45),_=new ge(g,o);_.position.set(0,1.05,-2.15),e.add(_);const S=new Ke(.06,.35,.15),b=new ge(S,o);b.position.set(-.65,.85,-2.12),e.add(b);const R=new ge(S,o);R.position.set(.65,.85,-2.12),e.add(R);const A=new Ke(.35,.12,.1),I=new Sn({color:16777215}),E=new ge(A,I);E.position.set(-.75,.45,2.22),e.add(E);const T=new ge(A,I);T.position.set(.75,.45,2.22),e.add(T),this.createVolumetricBeam(e,-.75,.45,2.25),this.createVolumetricBeam(e,.75,.45,2.25);const z=new Ke(1.85,.08,.08),j=new ge(z,this.brakeLightMaterial);j.position.set(0,.58,-2.26),e.add(j);const $=new On(.09,.09,.25,12);$.rotateX(Math.PI/2);const P=new wt({color:2236968,metalness:.95,roughness:.2}),U=new ge($,P);U.position.set(-.45,.26,-2.25),e.add(U);const k=new ge($,P);k.position.set(.45,.26,-2.25),e.add(k);const q=[{x:-.98,y:.34,z:1.35,isFront:!0},{x:.98,y:.34,z:1.35,isFront:!0},{x:-.98,y:.36,z:-1.35,isFront:!1},{x:.98,y:.36,z:-1.35,isFront:!1}];for(const N of q){const F=this.createDetailedWheel(N.isFront);F.position.set(N.x,N.y,N.z),e.add(F),this.allWheels.push(F),N.isFront&&this.frontWheels.push(F)}this.mesh.add(e)}createDetailedWheel(e){const n=new Kn,i=e?.34:.36,r=e?.26:.32,s=new On(i,i,r,20);s.rotateZ(Math.PI/2);const a=new wt({color:1315863,roughness:.75,metalness:.1}),o=new ge(s,a);o.castShadow=!0,n.add(o);const l=new On(i*.7,i*.7,r+.01,12);l.rotateZ(Math.PI/2);const c=new wt({color:10070715,metalness:.92,roughness:.15}),h=new ge(l,c);n.add(h);const d=new Ke(.08,.14,.12),f=new wt({color:16711731,metalness:.8,roughness:.2}),m=new ge(d,f);return m.position.set(0,i*.35,0),n.add(m),n}createVolumetricBeam(e,n,i,r){const a=new xd(2.5,22,16,1,!0);a.rotateX(Math.PI/2),a.translate(0,0,22/2);const o=new Sn({color:11197951,transparent:!0,opacity:.12,blending:Is,depthWrite:!1,side:si}),l=new ge(a,o);l.position.set(n,i,r),e.add(l),this.headlightCones.push(l)}setCustomization(e,n){this.carPaintMaterial.color.set(e),this.underglowMesh.material.color.set(n),this.underglowLight.color.set(n)}update(e,n){if(this.isCrashed){this.speedKmh=Math.max(0,this.speedKmh-180*e),this.mesh.position.z+=this.speedKmh/3.6*e,this.updateBounds();return}this.isBraking=n.brake;let i=0;n.nitro&&this.nitroReserve>0&&n.throttle?(this.isNitroActive=!0,this.nitroReserve=Math.max(0,this.nitroReserve-22*e),i=this.nitroMaxSpeedKmh,this.accelerationRate=65):(this.isNitroActive=!1,this.speedKmh>100&&(this.nitroReserve=Math.min(100,this.nitroReserve+4.5*e)),n.throttle?(i=this.maxSpeedKmh,this.accelerationRate=32):n.brake?(i=0,this.accelerationRate=95):(i=40,this.accelerationRate=18)),this.speedKmh<i?this.speedKmh=Math.min(i,this.speedKmh+this.accelerationRate*e):this.speedKmh=Math.max(i,this.speedKmh-this.accelerationRate*1.6*e);const s=14.5*Math.min(1,Math.max(.2,this.speedKmh/140));let a=0;n.steerAxis!==void 0&&Math.abs(n.steerAxis)>.01?a=Nn.clamp(n.steerAxis,-1,1):n.steerLeft?a=1:n.steerRight&&(a=-1),this.steeringInertia=Nn.lerp(this.steeringInertia,a,e*(a!==0?12:10)),this.lateralVelocity=this.steeringInertia*s,this.mesh.position.x+=this.lateralVelocity*e,this.mesh.position.x<-7.1?(this.mesh.position.x=-7.1,this.steeringInertia=0):this.mesh.position.x>7.1&&(this.mesh.position.x=7.1,this.steeringInertia=0);const o=this.speedKmh/3.6;this.mesh.position.z+=o*e;const l=this.steeringInertia*.08,c=n.brake?.04:this.isNitroActive?-.05:0;this.mesh.rotation.z=Nn.lerp(this.mesh.rotation.z,l,e*10),this.mesh.rotation.x=Nn.lerp(this.mesh.rotation.x,c,e*8),this.mesh.rotation.y=Nn.lerp(this.mesh.rotation.y,this.steeringInertia*.06,e*10);const h=this.steeringInertia*.35;for(const f of this.frontWheels)f.rotation.y=h;const d=o*e*4;for(const f of this.allWheels)f.rotation.x+=d;n.brake?this.brakeLightMaterial.color.setHex(16711697):this.brakeLightMaterial.color.setHex(5570560),this.calculateGearAndRPM(),this.leftExhaustPos.set(-.45,.26,-2.25).applyMatrix4(this.mesh.matrixWorld),this.rightExhaustPos.set(.45,.26,-2.25).applyMatrix4(this.mesh.matrixWorld),this.updateBounds()}calculateGearAndRPM(){const e=this.speedKmh;e<45?(this.currentGear=1,this.currentRPM=900+e/45*6e3):e<90?(this.currentGear=2,this.currentRPM=3500+(e-45)/45*4500):e<140?(this.currentGear=3,this.currentRPM=4e3+(e-90)/50*4400):e<195?(this.currentGear=4,this.currentRPM=4500+(e-140)/55*4200):e<245?(this.currentGear=5,this.currentRPM=4800+(e-195)/50*3800):(this.currentGear=6,this.currentRPM=5200+Math.min(3200,(e-245)/60*3200))}updateBounds(){this.bounds.setFromCenterAndSize(new D(this.mesh.position.x,this.mesh.position.y+.6,this.mesh.position.z),this.carSize)}reset(e=1){this.mesh.position.set(zs.LANES[e],0,0),this.mesh.rotation.set(0,0,0),this.speedKmh=0,this.steeringInertia=0,this.lateralVelocity=0,this.nitroReserve=100,this.isCrashed=!1,this.isNitroActive=!1,this.updateBounds()}}class Iw{scene;poolSize=14;vehicles=[];taxiMaterial;sedanMaterial;suvMaterial;truckCabMaterial;truckTankMaterial;glassMaterial;tireMaterial;taillightMaterial;constructor(e){this.scene=e,this.taxiMaterial=new wt({color:16763904,metalness:.6,roughness:.3}),this.sedanMaterial=new wt({color:14870768,metalness:.8,roughness:.25}),this.suvMaterial=new wt({color:1712172,metalness:.7,roughness:.35}),this.truckCabMaterial=new wt({color:3244750,metalness:.5,roughness:.4}),this.truckTankMaterial=new wt({color:9741240,metalness:.95,roughness:.15}),this.glassMaterial=new Ol({color:988970,roughness:.1,metalness:.9,opacity:.85,transparent:!0}),this.tireMaterial=new wt({color:1118484,roughness:.8,metalness:.1}),this.taillightMaterial=new Sn({color:12259601}),this.initPool()}initPool(){const e=["taxi","sedan","suv","truck"];for(let n=0;n<this.poolSize;n++){const i=e[n%e.length],r=this.createVehicleModel(i);r.mesh.position.set(0,-999,0),this.scene.add(r.mesh),this.vehicles.push(r)}}createVehicleModel(e){const n=new Kn;let i=new D(2,1.4,4.4);if(e==="truck"){i=new D(2.5,3.2,9.2);const r=new Ke(2.4,2.8,2.8),s=new ge(r,this.truckCabMaterial);s.position.set(0,1.6,2.6),s.castShadow=!0,n.add(s);const a=new On(1.25,1.25,5.8,16);a.rotateX(Math.PI/2);const o=new ge(a,this.truckTankMaterial);o.position.set(0,1.8,-1.8),o.castShadow=!0,n.add(o);const l=new Ke(2.3,.4,6.2),c=new ge(l,this.tireMaterial);c.position.set(0,.5,-1.8),n.add(c);const h=new On(.48,.48,.35,16);h.rotateZ(Math.PI/2);const d=[3.2,1.8,-1,-2.4,-3.8];for(const f of d){const m=new ge(h,this.tireMaterial);m.position.set(-1.15,.48,f),n.add(m);const x=new ge(h,this.tireMaterial);x.position.set(1.15,.48,f),n.add(x)}}else{const r=e==="suv",s=e==="taxi",a=r?.65:.45,o=r?.75:.5;i=new D(2,r?1.65:1.35,4.4);const l=s?this.taxiMaterial:r?this.suvMaterial:this.sedanMaterial,c=new Ke(2,a,4.4),h=new ge(c,l);h.position.y=.35+a/2,h.castShadow=!0,n.add(h);const d=new Ke(1.7,o,2.2),f=new ge(d,this.glassMaterial);if(f.position.set(0,.35+a+o/2-.05,-.2),n.add(f),s){const g=new Ke(.6,.16,.25),_=new Sn({color:16773290}),S=new ge(g,_);S.position.set(0,.35+a+o+.08,-.2),n.add(S)}const m=new On(.32,.32,.24,16);m.rotateZ(Math.PI/2);const x=[[-.95,.32,1.3],[.95,.32,1.3],[-.95,.32,-1.3],[.95,.32,-1.3]];for(const[g,_,S]of x){const b=new ge(m,this.tireMaterial);b.position.set(g,_,S),n.add(b)}const y=new Ke(.4,.12,.08),p=new ge(y,this.taillightMaterial);p.position.set(-.65,.35+a*.7,-2.2),n.add(p);const u=new ge(y,this.taillightMaterial);u.position.set(.65,.35+a*.7,-2.2),n.add(u)}return{mesh:n,type:e,speedKmh:80+Math.random()*30,laneIndex:0,bounds:new li,size:i,active:!1,nearMissed:!1}}reset(e){let n=e+45;for(let i=0;i<this.vehicles.length;i++){const r=this.vehicles[i],s=Math.floor(Math.random()*4),a=zs.LANES[s];r.active=!0,r.laneIndex=s,r.nearMissed=!1,r.speedKmh=r.type==="truck"?70+Math.random()*15:85+Math.random()*25,r.mesh.position.set(a,0,n),this.updateVehicleBounds(r),n+=28+Math.random()*32}}update(e,n,i,r,s,a,o){for(const l of this.vehicles){if(!l.active)continue;const c=l.speedKmh/3.6;if(l.mesh.position.z+=c*e,this.updateVehicleBounds(l),s.intersectsBox(l.bounds)){o();return}if(!l.nearMissed&&r>115){const h=Math.abs(i-l.mesh.position.x),d=Math.abs(n-l.mesh.position.z),f=l.size.x/2+1.05+.65,m=l.size.z/2+2.3;h<f&&d<m&&h>l.size.x/2+.95&&(l.nearMissed=!0,a(150))}if(l.mesh.position.z<n-35){let h=n+50;for(const f of this.vehicles)f.active&&f.mesh.position.z>h&&(h=f.mesh.position.z);const d=Math.floor(Math.random()*4);l.laneIndex=d,l.mesh.position.set(zs.LANES[d],0,h+25+Math.random()*30),l.speedKmh=l.type==="truck"?70+Math.random()*15:85+Math.random()*25,l.nearMissed=!1,this.updateVehicleBounds(l)}}}updateVehicleBounds(e){e.bounds.setFromCenterAndSize(new D(e.mesh.position.x,e.mesh.position.y+e.size.y/2,e.mesh.position.z),e.size)}}class Uw{ctx=null;masterGain=null;isMuted=!1;volume=.8;engineOsc1=null;engineOsc2=null;engineSubOsc=null;engineFilter=null;engineGain=null;nitroNoiseNode=null;nitroGain=null;nitroFilter=null;isNitroPlaying=!1;sirenOsc=null;sirenLfo=null;sirenLfoGain=null;sirenGain=null;sirenPanner=null;skidGain=null;isSkidPlaying=!1;rainNoiseNode=null;rainFilter=null;rainGain=null;isRainPlaying=!1;constructor(){}init(){if(!this.ctx)try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.volume,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupEngineSound(),this.setupNitroSound(),this.setupSirenSound(),this.setupSkidSound(),this.setupRainSound()}catch(e){console.warn("Web Audio API not supported:",e)}}unlock(){this.ctx||this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.isMuted?0:this.volume,this.ctx.currentTime,.05)}toggleMute(){return this.isMuted=!this.isMuted,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.isMuted?0:this.volume,this.ctx.currentTime,.05),this.isMuted}getIsMuted(){return this.isMuted}setupEngineSound(){if(!this.ctx||!this.masterGain)return;this.engineOsc1=this.ctx.createOscillator(),this.engineOsc1.type="sawtooth",this.engineOsc1.frequency.setValueAtTime(55,this.ctx.currentTime),this.engineOsc2=this.ctx.createOscillator(),this.engineOsc2.type="triangle",this.engineOsc2.frequency.setValueAtTime(110,this.ctx.currentTime),this.engineSubOsc=this.ctx.createOscillator(),this.engineSubOsc.type="square",this.engineSubOsc.frequency.setValueAtTime(27.5,this.ctx.currentTime),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(320,this.ctx.currentTime),this.engineFilter.Q.setValueAtTime(3.5,this.ctx.currentTime),this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(0,this.ctx.currentTime);const e=this.ctx.createGain();e.gain.setValueAtTime(.22,this.ctx.currentTime),this.engineOsc1.connect(this.engineFilter),this.engineOsc2.connect(this.engineFilter),this.engineSubOsc.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(e),e.connect(this.masterGain),this.engineOsc1.start(),this.engineOsc2.start(),this.engineSubOsc.start()}updateEngine(e,n,i){if(!this.ctx||!this.engineGain||!this.engineOsc1||!this.engineOsc2||!this.engineSubOsc||!this.engineFilter)return;if(!i){this.engineGain.gain.setTargetAtTime(0,this.ctx.currentTime,.1);return}const r=Math.max(0,Math.min(1,(e-800)/7700)),s=48+r*240,a=this.ctx.currentTime;this.engineOsc1.frequency.setTargetAtTime(s,a,.04),this.engineOsc2.frequency.setTargetAtTime(s*1.5,a,.04),this.engineSubOsc.frequency.setTargetAtTime(s*.5,a,.04);const o=300+r*1800+n*1200;this.engineFilter.frequency.setTargetAtTime(o,a,.05);const l=.35+n*.45;this.engineGain.gain.setTargetAtTime(l,a,.05)}setupNitroSound(){!this.ctx||!this.masterGain||(this.nitroGain=this.ctx.createGain(),this.nitroGain.gain.setValueAtTime(0,this.ctx.currentTime),this.nitroFilter=this.ctx.createBiquadFilter(),this.nitroFilter.type="bandpass",this.nitroFilter.frequency.setValueAtTime(1400,this.ctx.currentTime),this.nitroFilter.Q.setValueAtTime(1.5,this.ctx.currentTime),this.nitroFilter.connect(this.nitroGain),this.nitroGain.connect(this.masterGain))}createWhiteNoiseBuffer(){if(!this.ctx)throw new Error("No context");const e=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<e;r++)i[r]=Math.random()*2-1;return n}startNitro(){if(!(!this.ctx||!this.nitroGain||!this.nitroFilter)&&!this.isNitroPlaying){this.isNitroPlaying=!0;try{this.nitroNoiseNode=this.ctx.createBufferSource(),this.nitroNoiseNode.buffer=this.createWhiteNoiseBuffer(),this.nitroNoiseNode.loop=!0,this.nitroNoiseNode.connect(this.nitroFilter),this.nitroNoiseNode.start();const e=this.ctx.currentTime;this.nitroGain.gain.cancelScheduledValues(e),this.nitroGain.gain.setValueAtTime(0,e),this.nitroGain.gain.linearRampToValueAtTime(.55,e+.15)}catch{}}}stopNitro(){if(!this.ctx||!this.nitroGain||!this.isNitroPlaying)return;const e=this.ctx.currentTime;this.nitroGain.gain.cancelScheduledValues(e),this.nitroGain.gain.linearRampToValueAtTime(0,e+.2),setTimeout(()=>{if(this.nitroNoiseNode){try{this.nitroNoiseNode.stop(),this.nitroNoiseNode.disconnect()}catch{}this.nitroNoiseNode=null}this.isNitroPlaying=!1},250),this.playBlowOffValve()}playBlowOffValve(){if(!(!this.ctx||!this.masterGain))try{const e=this.ctx.createBufferSource();e.buffer=this.createWhiteNoiseBuffer();const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.setValueAtTime(2200,this.ctx.currentTime);const i=this.ctx.createGain(),r=this.ctx.currentTime;i.gain.setValueAtTime(.4,r),i.gain.exponentialRampToValueAtTime(.001,r+.35),e.connect(n),n.connect(i),i.connect(this.masterGain),e.start(r),e.stop(r+.4)}catch{}}setupSirenSound(){!this.ctx||!this.masterGain||(this.sirenOsc=this.ctx.createOscillator(),this.sirenOsc.type="sawtooth",this.sirenOsc.frequency.setValueAtTime(800,this.ctx.currentTime),this.sirenLfo=this.ctx.createOscillator(),this.sirenLfo.type="sine",this.sirenLfo.frequency.setValueAtTime(.65,this.ctx.currentTime),this.sirenLfoGain=this.ctx.createGain(),this.sirenLfoGain.gain.setValueAtTime(320,this.ctx.currentTime),this.sirenLfo.connect(this.sirenLfoGain),this.sirenLfoGain.connect(this.sirenOsc.frequency),this.sirenGain=this.ctx.createGain(),this.sirenGain.gain.setValueAtTime(0,this.ctx.currentTime),this.ctx.createStereoPanner?(this.sirenPanner=this.ctx.createStereoPanner(),this.sirenPanner.pan.setValueAtTime(0,this.ctx.currentTime),this.sirenOsc.connect(this.sirenGain),this.sirenGain.connect(this.sirenPanner),this.sirenPanner.connect(this.masterGain)):(this.sirenOsc.connect(this.sirenGain),this.sirenGain.connect(this.masterGain)),this.sirenOsc.start(),this.sirenLfo.start())}updateSiren(e,n,i){if(!this.ctx||!this.sirenGain)return;const r=this.ctx.currentTime;if(e){const s=Math.max(0,Math.min(.65,(1-n)*.65));if(this.sirenGain.gain.setTargetAtTime(s,r,.1),this.sirenPanner){const a=Math.max(-.85,Math.min(.85,i*.2));this.sirenPanner.pan.setTargetAtTime(a,r,.1)}}else this.sirenGain.gain.setTargetAtTime(0,r,.3)}setupSkidSound(){!this.ctx||!this.masterGain||(this.skidGain=this.ctx.createGain(),this.skidGain.gain.setValueAtTime(0,this.ctx.currentTime),this.skidGain.connect(this.masterGain))}updateTireSkid(e){if(!this.ctx||!this.skidGain)return;const n=this.ctx.currentTime;if(e>.15){this.isSkidPlaying||(this.isSkidPlaying=!0);const i=Math.min(.4,(e-.15)*.6);this.skidGain.gain.setTargetAtTime(i,n,.05)}else this.skidGain.gain.setTargetAtTime(0,n,.1),this.isSkidPlaying=!1}playNearMiss(){if(!(!this.ctx||!this.masterGain))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(350,i),e.frequency.exponentialRampToValueAtTime(1400,i+.15),e.frequency.exponentialRampToValueAtTime(220,i+.35),n.gain.setValueAtTime(.4,i),n.gain.exponentialRampToValueAtTime(.001,i+.35),e.connect(n),n.connect(this.masterGain),e.start(i),e.stop(i+.36)}catch{}}playCrash(){if(!(!this.ctx||!this.masterGain))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(120,i),e.frequency.exponentialRampToValueAtTime(30,i+.4),n.gain.setValueAtTime(.8,i),n.gain.exponentialRampToValueAtTime(.001,i+.45),e.connect(n),n.connect(this.masterGain),e.start(i),e.stop(i+.5);const r=this.ctx.createBufferSource();r.buffer=this.createWhiteNoiseBuffer();const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(800,i);const a=this.ctx.createGain();a.gain.setValueAtTime(.7,i),a.gain.exponentialRampToValueAtTime(.001,i+.6),r.connect(s),s.connect(a),a.connect(this.masterGain),r.start(i),r.stop(i+.65)}catch{}}playCoinPickup(){if(!(!this.ctx||!this.masterGain))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(987.77,i),e.frequency.setValueAtTime(1318.51,i+.08),n.gain.setValueAtTime(.3,i),n.gain.exponentialRampToValueAtTime(.001,i+.25),e.connect(n),n.connect(this.masterGain),e.start(i),e.stop(i+.26)}catch{}}setupRainSound(){if(!(!this.ctx||!this.masterGain||this.isRainPlaying))try{const e=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<e;r++)i[r]=(Math.random()*2-1)*.4;this.rainNoiseNode=this.ctx.createBufferSource(),this.rainNoiseNode.buffer=n,this.rainNoiseNode.loop=!0,this.rainFilter=this.ctx.createBiquadFilter(),this.rainFilter.type="bandpass",this.rainFilter.frequency.setValueAtTime(1400,this.ctx.currentTime),this.rainFilter.Q.setValueAtTime(1.2,this.ctx.currentTime),this.rainGain=this.ctx.createGain(),this.rainGain.gain.setValueAtTime(0,this.ctx.currentTime),this.rainNoiseNode.connect(this.rainFilter),this.rainFilter.connect(this.rainGain),this.rainGain.connect(this.masterGain),this.rainNoiseNode.start(),this.isRainPlaying=!0}catch(e){console.warn("Rain sound init failed:",e)}}startRain(){(!this.ctx||!this.rainGain)&&this.setupRainSound(),this.ctx&&this.rainGain&&this.rainGain.gain.setTargetAtTime(.32,this.ctx.currentTime,.4)}stopRain(){this.ctx&&this.rainGain&&this.rainGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.4)}playThunder(){if(!(!this.ctx||!this.masterGain))try{const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(110,e),n.frequency.exponentialRampToValueAtTime(28,e+2.2),i.gain.setValueAtTime(.65,e),i.gain.exponentialRampToValueAtTime(.001,e+2.4),n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+2.5);const r=Math.floor(this.ctx.sampleRate*.8),s=this.ctx.createBuffer(1,r,this.ctx.sampleRate),a=s.getChannelData(0);for(let h=0;h<r;h++)a[h]=Math.random()*2-1;const o=this.ctx.createBufferSource();o.buffer=s;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(320,e);const c=this.ctx.createGain();c.gain.setValueAtTime(.4,e),c.gain.exponentialRampToValueAtTime(.001,e+1.2),o.connect(l),l.connect(c),c.connect(this.masterGain),o.start(e),o.stop(e+1.2)}catch{}}}const Tt=new Uw;class je{static enabled=!0;static setEnabled(e){this.enabled=e}static isEnabled(){return this.enabled}static nearMiss(){if(!(!this.enabled||typeof navigator>"u"||!("vibrate"in navigator)))try{navigator.vibrate(18)}catch{}}static nitroPulse(){if(!(!this.enabled||typeof navigator>"u"||!("vibrate"in navigator)))try{navigator.vibrate([25,20,25])}catch{}}static policeImpact(){if(!(!this.enabled||typeof navigator>"u"||!("vibrate"in navigator)))try{navigator.vibrate([60,30,80])}catch{}}static crash(){if(!(!this.enabled||typeof navigator>"u"||!("vibrate"in navigator)))try{navigator.vibrate([120,50,200])}catch{}}static buttonTap(){if(!(!this.enabled||typeof navigator>"u"||!("vibrate"in navigator)))try{navigator.vibrate(10)}catch{}}}class Ow{scene;state="IDLE";cruisers=[];pursuitScore=0;timeInPursuit=0;evasionTimer=0;strobeTimer=0;strobePhase=!1;ramCooldown=0;redBlueFlashIntensity=0;distanceToClosest=999;constructor(e){this.scene=e,this.initCruisers()}initCruisers(){for(let e=0;e<2;e++){const n=this.buildPoliceCruiserModel();n.mesh.position.set(e===0?-1.8:1.8,0,-999),this.scene.add(n.mesh),this.cruisers.push(n)}}buildPoliceCruiserModel(){const e=new Kn,n=new D(2.1,1.45,4.6),i=new Ke(2.1,.48,4.6),r=new wt({color:592399,metalness:.8,roughness:.2}),s=new ge(i,r);s.position.y=.4,s.castShadow=!0,e.add(s);const a=new Ke(2.12,.44,1.8),o=new wt({color:15791352,metalness:.4,roughness:.3}),l=new ge(a,o);l.position.set(0,.4,0),e.add(l);const c=new Ke(1.7,.52,2.3),h=new Ol({color:395534,roughness:.1,metalness:.9,opacity:.9,transparent:!0}),d=new ge(c,h);d.position.set(0,.82,-.15),e.add(d);const f=new Ke(1.9,.35,.2),m=new wt({color:2237998,metalness:.9,roughness:.3}),x=new ge(f,m);x.position.set(0,.38,2.35),e.add(x);const y=new Ke(1.2,.08,.2),p=new ge(y,m);p.position.set(0,1.12,-.2),e.add(p);const u=new Ke(.45,.12,.18),g=new Sn({color:16711714}),_=new Sn({color:22015}),S=new ge(u,g);S.position.set(-.35,1.18,-.2),e.add(S);const b=new ge(u,_);b.position.set(.35,1.18,-.2),e.add(b);const R=new mh(16711714,2.5,16);R.position.set(-.35,1.3,-.2),e.add(R);const A=new mh(26367,2.5,16);A.position.set(.35,1.3,-.2),e.add(A);const I=new On(.34,.34,.26,16);I.rotateZ(Math.PI/2);const E=new wt({color:1118484,roughness:.8}),T=[[-.98,.34,1.35],[.98,.34,1.35],[-.98,.34,-1.35],[.98,.34,-1.35]];for(const[z,j,$]of T){const P=new ge(I,E);P.position.set(z,j,$),e.add(P)}return{mesh:e,speedKmh:200,targetLaneX:0,lateralVel:0,bounds:new li,size:n,redLight:R,blueLight:A,redMesh:S,blueMesh:b,active:!1}}triggerPursuit(e,n){if(this.state==="PURSUIT")return;this.state="PURSUIT",this.timeInPursuit=0,this.evasionTimer=0,this.ramCooldown=1.5;const i=[-18,-32],r=[n>0?-1.8:1.8,n];this.cruisers.forEach((s,a)=>{s.active=!0,s.speedKmh=270,s.targetLaneX=r[a],s.mesh.position.set(r[a],0,e+i[a]),this.updateCruiserBounds(s)}),Tt.updateSiren(!0,.3,0)}update(e,n,i,r,s,a,o){if(this.state!=="PURSUIT"){this.redBlueFlashIntensity=0,Tt.updateSiren(!1,1,0);return}this.timeInPursuit+=e,this.ramCooldown-=e,this.strobeTimer+=e*16,this.strobeTimer>1&&(this.strobeTimer=0,this.strobePhase=!this.strobePhase);const l=this.strobePhase,c=!this.strobePhase;this.redBlueFlashIntensity=.45+(this.strobePhase?.35:-.2);let h=999,d=0;for(let m=0;m<this.cruisers.length;m++){const x=this.cruisers[m];if(!x.active)continue;x.redLight.intensity=l?3.5:.2,x.blueLight.intensity=c?3.5:.2,x.redMesh.material.color.setHex(l?16711714:4456453),x.blueMesh.material.color.setHex(c?26367:4420);const y=x.mesh.position.z-n,p=Math.abs(y);if(p<h&&(h=p,d=x.mesh.position.x-i),y<-4?x.speedKmh=Math.max(r+28,260):y>6?x.speedKmh=Math.max(60,r-15):x.speedKmh=r+(m===0?4:-3),x.mesh.position.z+=x.speedKmh/3.6*e,m===0?Math.abs(y)<3.5&&this.ramCooldown<=0?(x.targetLaneX=i,this.ramCooldown=2.2,je.policeImpact()):x.targetLaneX=i>0?i-3.2:i+3.2:x.targetLaneX=i,x.mesh.position.x=Nn.lerp(x.mesh.position.x,x.targetLaneX,e*3.8),this.updateCruiserBounds(x),s.intersectsBox(x.bounds)){je.policeImpact();const u=x.mesh.position.x<i?1:-1;i+=u*3.5*e}}this.distanceToClosest=h;const f=Math.min(1,h/60);Tt.updateSiren(!0,f,d),h>75&&r>180?(this.evasionTimer+=e,this.evasionTimer>4.5&&(this.state="EVADED",this.cruisers.forEach(m=>m.active=!1),Tt.updateSiren(!1,1,0),o(1e3))):this.evasionTimer=Math.max(0,this.evasionTimer-e*.8),h<5.5&&r<22&&this.timeInPursuit>2&&(this.state="BUSTED",Tt.updateSiren(!1,1,0),a())}updateCruiserBounds(e){e.bounds.setFromCenterAndSize(new D(e.mesh.position.x,e.mesh.position.y+e.size.y/2,e.mesh.position.z),e.size)}reset(){this.state="IDLE",this.timeInPursuit=0,this.evasionTimer=0,this.redBlueFlashIntensity=0,this.cruisers.forEach(e=>{e.active=!1,e.mesh.position.set(0,-999,0)}),Tt.updateSiren(!1,1,0)}}class Fw{maxParticles=300;particles=[];geometry;material;points;positions;colors;constructor(e){this.positions=new Float32Array(this.maxParticles*3),this.colors=new Float32Array(this.maxParticles*3);for(let n=0;n<this.maxParticles;n++)this.particles.push({position:new D(0,-999,0),velocity:new D,color:new Ne(1,1,1),size:.2,alpha:1,life:0,maxLife:1,active:!1});this.geometry=new zn,this.geometry.setAttribute("position",new pn(this.positions,3)),this.geometry.setAttribute("color",new pn(this.colors,3)),this.material=new xv({size:.35,vertexColors:!0,transparent:!0,opacity:.85,blending:Is,depthWrite:!1}),this.points=new ww(this.geometry,this.material),this.points.frustumCulled=!1,e.add(this.points)}emitNitroFlame(e,n,i){const r=[e,n];for(const s of r)this.spawnParticle(s.x+(Math.random()-.5)*.08,s.y+(Math.random()-.5)*.08,s.z+(Math.random()-.5)*.1,(Math.random()-.5)*.5,(Math.random()-.5)*.3,i-(8+Math.random()*6),Math.random()>.3?62463:26367,.3+Math.random()*.15,.18+Math.random()*.12)}emitTireSmoke(e){this.spawnParticle(e.x+(Math.random()-.5)*.15,e.y+.1,e.z+(Math.random()-.5)*.2,(Math.random()-.5)*1.5,.5+Math.random()*.8,(Math.random()-.5)*1.5,5596791,.4+Math.random()*.2,.4+Math.random()*.3)}emitSparks(e,n=12){for(let i=0;i<n;i++)this.spawnParticle(e.x,e.y,e.z,(Math.random()-.5)*12,2+Math.random()*8,(Math.random()-.5)*12,Math.random()>.5?16755200:16724736,.2+Math.random()*.15,.3+Math.random()*.25)}spawnParticle(e,n,i,r,s,a,o,l,c){const h=this.particles.find(d=>!d.active);h&&(h.active=!0,h.position.set(e,n,i),h.velocity.set(r,s,a),h.color.setHex(o),h.size=l,h.life=c,h.maxLife=c)}update(e){const n=this.geometry.attributes.position,i=this.geometry.attributes.color;for(let r=0;r<this.maxParticles;r++){const s=this.particles[r];if(!s.active){this.positions[r*3+1]=-999;continue}if(s.life-=e,s.life<=0){s.active=!1,this.positions[r*3+1]=-999;continue}s.position.x+=s.velocity.x*e,s.position.y+=s.velocity.y*e,s.position.z+=s.velocity.z*e,s.velocity.x*=.95,s.velocity.y-=9.8*e*.5,s.velocity.z*=.95;const a=s.life/s.maxLife;this.positions[r*3]=s.position.x,this.positions[r*3+1]=s.position.y,this.positions[r*3+2]=s.position.z,this.colors[r*3]=s.color.r*a,this.colors[r*3+1]=s.color.g*a,this.colors[r*3+2]=s.color.b*a}n.needsUpdate=!0,i.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}const xm=[{id:"apex_roadster",name:"Apex Roadster",type:"roadster",price:0,unlocked:!0,topSpeedKmh:240,acceleration:9.2,handling:9.5,armor:6,color:"#00f3ff",underglowColor:"#00f3ff"},{id:"veloce_gt",name:"Veloce GT Supercar",type:"gt",price:3500,unlocked:!1,topSpeedKmh:295,acceleration:9.8,handling:8.8,armor:5.5,color:"#ff0055",underglowColor:"#ff0055"},{id:"titan_v8",name:"Titan V8 Muscle",type:"muscle",price:5e3,unlocked:!1,topSpeedKmh:260,acceleration:8.5,handling:7.5,armor:9.5,color:"#e6c300",underglowColor:"#ffaa00"}],ym={highScore:0,coins:500,totalNearMisses:0,totalPoliceEvaded:0,selectedCarId:"apex_roadster",audioVolume:.8,hapticsEnabled:!0,tiltSteeringEnabled:!1,playerCallsign:"VIPER_01"},kw=[{id:"lb_1",callsign:"CYBER_GHOST",score:98450,distanceMeters:12400,policeEvaded:8,carName:"Veloce GT",date:"SEP 20"},{id:"lb_2",callsign:"NEO_VIPER",score:84200,distanceMeters:9850,policeEvaded:6,carName:"Apex Roadster",date:"SEP 19"},{id:"lb_3",callsign:"TITAN_WARLORD",score:71900,distanceMeters:8200,policeEvaded:5,carName:"Titan V8",date:"SEP 18"},{id:"lb_4",callsign:"NIGHT_STALKER",score:58600,distanceMeters:6900,policeEvaded:4,carName:"Veloce GT",date:"SEP 17"},{id:"lb_5",callsign:"INDRAJIT_X",score:48500,distanceMeters:5600,policeEvaded:3,carName:"Apex Roadster",date:"SEP 16"},{id:"lb_6",callsign:"SYNTH_PULSE",score:38200,distanceMeters:4400,policeEvaded:2,carName:"Veloce GT",date:"SEP 15"},{id:"lb_7",callsign:"DRIFT_SPECTRE",score:29400,distanceMeters:3300,policeEvaded:2,carName:"Titan V8",date:"SEP 14"},{id:"lb_8",callsign:"BLADE_RUNNER",score:21600,distanceMeters:2500,policeEvaded:1,carName:"Apex Roadster",date:"SEP 12"},{id:"lb_9",callsign:"ZERO_COOL",score:15300,distanceMeters:1800,policeEvaded:1,carName:"Apex Roadster",date:"SEP 10"},{id:"lb_10",callsign:"HIGHWAY_COP",score:9200,distanceMeters:1200,policeEvaded:0,carName:"Titan V8",date:"SEP 08"}],Sm="velocity_x_stats",Mm="velocity_x_cars",Em="velocity_x_leaderboard";class yt{static getStats(){try{const e=localStorage.getItem(Sm);if(e)return{...ym,...JSON.parse(e)}}catch{}return{...ym}}static saveStats(e){const i={...this.getStats(),...e};try{localStorage.setItem(Sm,JSON.stringify(i))}catch{}return i}static getCars(){try{const e=localStorage.getItem(Mm);if(e){const n=JSON.parse(e);return xm.map(i=>{const r=n.find(s=>s.id===i.id);return r?{...i,...r}:i})}}catch{}return xm}static saveCars(e){try{localStorage.setItem(Mm,JSON.stringify(e))}catch{}}static unlockCar(e){const n=this.getStats(),i=this.getCars(),r=i.find(s=>s.id===e);return r&&!r.unlocked&&n.coins>=r.price?(n.coins-=r.price,r.unlocked=!0,this.saveStats(n),this.saveCars(i),!0):!1}static updateCarCustomization(e,n,i){const r=this.getCars(),s=r.find(a=>a.id===e);s&&(s.color=n,s.underglowColor=i,this.saveCars(r))}static getLeaderboard(){try{const e=localStorage.getItem(Em);if(e)return JSON.parse(e).sort((i,r)=>r.score-i.score).slice(0,10)}catch{}return[...kw]}static addLeaderboardScore(e){const n=this.getLeaderboard(),i={...e,id:"lb_"+Date.now(),isPlayer:!0},s=[...n,i].sort((a,o)=>o.score-a.score).slice(0,10);try{localStorage.setItem(Em,JSON.stringify(s))}catch{}return s}}class vs{static instance=null;enabled=!1;supported=!1;steerAxis=0;rawAngle=0;calibratedAngle=0;baselineAngle=0;isCalibrated=!1;deadzoneDeg=2;maxSteerDeg=16;smoothing=14;boundHandleOrientation;constructor(){this.boundHandleOrientation=this.handleDeviceOrientation.bind(this),this.checkSupport()}static getInstance(){return vs.instance||(vs.instance=new vs),vs.instance}checkSupport(){typeof window<"u"&&"DeviceOrientationEvent"in window&&(this.supported=!0)}async requestPermission(){if(typeof window<"u"&&typeof DeviceOrientationEvent.requestPermission=="function")try{return await DeviceOrientationEvent.requestPermission()==="granted"?(this.supported=!0,!0):(this.supported=!1,!1)}catch(e){return console.warn("DeviceOrientation permission request failed:",e),!1}return this.supported}start(){typeof window>"u"||(this.enabled=!0,window.addEventListener("deviceorientation",this.boundHandleOrientation,{passive:!0}))}stop(){typeof window>"u"||(this.enabled=!1,this.steerAxis=0,this._targetSteer=0,window.removeEventListener("deviceorientation",this.boundHandleOrientation))}calibrate(){this.baselineAngle=this.rawAngle,this.isCalibrated=!0,this.calibratedAngle=0,this.steerAxis=0,this._targetSteer=0}handleDeviceOrientation(e){if(!this.enabled)return;let n=90;typeof window<"u"&&(window.screen?.orientation?.angle!==void 0?n=window.screen.orientation.angle:typeof window.orientation=="number"&&(n=window.orientation));let i=0;const r=e.beta??0,s=e.gamma??0;n===90?i=r:n===270||n===-90?i=-r:i=s,this.rawAngle=i,this.isCalibrated||(this.baselineAngle=i,this.isCalibrated=!0);let a=i-this.baselineAngle;a=Nn.clamp(a,-45,45),this.calibratedAngle=a;const o=Math.abs(a);let l=0;if(o>this.deadzoneDeg){const c=this.maxSteerDeg-this.deadzoneDeg,h=Math.min(1,(o-this.deadzoneDeg)/c),d=.7*h+.3*Math.pow(h,2);l=-Math.sign(a)*d}this._targetSteer=l}_targetSteer=0;update(e){return this.enabled?(this.steerAxis=Nn.lerp(this.steerAxis,this._targetSteer,Math.min(1,e*this.smoothing)),this.steerAxis):(this.steerAxis=0,0)}getState(){return{enabled:this.enabled,supported:this.supported,steerAxis:this.steerAxis,rawAngle:this.rawAngle,calibratedAngle:this.calibratedAngle,isCalibrated:this.isCalibrated}}}const an=vs.getInstance();class zw{scene;maxRainDrops=900;geometry;material;lineSegments;positions;dropSpeeds;dropLengths;enabled=!1;boxWidth=36;boxDepth=90;boxHeight=28;constructor(e){this.scene=e,this.positions=new Float32Array(this.maxRainDrops*6),this.dropSpeeds=new Float32Array(this.maxRainDrops),this.dropLengths=new Float32Array(this.maxRainDrops);for(let n=0;n<this.maxRainDrops;n++){const i=n*6,r=(Math.random()-.5)*this.boxWidth,s=Math.random()*this.boxHeight,a=(Math.random()-.25)*this.boxDepth,o=1.2+Math.random()*.8;this.positions[i]=r,this.positions[i+1]=s+o,this.positions[i+2]=a,this.positions[i+3]=r,this.positions[i+4]=s,this.positions[i+5]=a,this.dropSpeeds[n]=48+Math.random()*24,this.dropLengths[n]=o}this.geometry=new zn,this.geometry.setAttribute("position",new pn(this.positions,3)),this.material=new _v({color:8965375,transparent:!0,opacity:.55,blending:Is,depthWrite:!1}),this.lineSegments=new Tw(this.geometry,this.material),this.lineSegments.frustumCulled=!1,this.lineSegments.visible=!1,this.scene.add(this.lineSegments)}setEnabled(e){this.enabled=e,this.lineSegments.visible=e}update(e,n,i,r){if(!this.enabled)return;const s=this.geometry.attributes.position,a=s.array,o=r/3.6*.08;for(let l=0;l<this.maxRainDrops;l++){const c=l*6,h=this.dropSpeeds[l],d=this.dropLengths[l];a[c+1]-=h*e,a[c+4]=a[c+1]-d,a[c+2]-=o*e,a[c+5]=a[c+2]+o*.04;const f=a[c+2]-n,m=a[c]-i;if(a[c+1]<=.1||f<-25||f>75||Math.abs(m)>this.boxWidth/2){const x=i+(Math.random()-.5)*this.boxWidth,y=this.boxHeight-Math.random()*3,p=n+(Math.random()-.2)*this.boxDepth;a[c]=x,a[c+1]=y,a[c+2]=p,a[c+3]=x,a[c+4]=y-d,a[c+5]=p}}s.needsUpdate=!0}dispose(){this.scene.remove(this.lineSegments),this.geometry.dispose(),this.material.dispose()}}class Bw{currentWeather="CLEAR";rainSystem;roadManager;dirLight;ambientLight;scene;baseDirIntensity=1.8;baseAmbientIntensity=1.4;lightningTimer=8;isFlashing=!1;flashDuration=0;onLightningFlash;onWeatherChange;constructor(e,n,i,r){this.scene=e,this.dirLight=n,this.ambientLight=i,this.roadManager=r,this.rainSystem=new zw(e)}setWeather(e){this.currentWeather=e;const n=e==="RAIN";this.rainSystem.setEnabled(n),this.roadManager.setWetness(n),n?(Tt.startRain(),this.lightningTimer=5+Math.random()*6,this.scene.fog instanceof ja&&(this.scene.fog.density=.0055)):(Tt.stopRain(),this.scene.fog instanceof ja&&(this.scene.fog.density=.0035),this.resetLighting()),this.onWeatherChange&&this.onWeatherChange(e)}toggleWeather(){const e=this.currentWeather==="CLEAR"?"RAIN":"CLEAR";return this.setWeather(e),e}update(e,n,i,r){this.currentWeather==="RAIN"&&(this.rainSystem.update(e,n,i,r),this.isFlashing?(this.flashDuration-=e,this.flashDuration<=0&&(this.isFlashing=!1,this.resetLighting(),this.lightningTimer=9+Math.random()*12)):(this.lightningTimer-=e,this.lightningTimer<=0&&this.triggerLightning()))}triggerLightning(){this.isFlashing=!0,this.flashDuration=.14,this.dirLight.intensity=this.baseDirIntensity*3.6,this.ambientLight.intensity=this.baseAmbientIntensity*3.2,Tt.playThunder(),this.onLightningFlash&&this.onLightningFlash()}resetLighting(){this.dirLight.intensity=this.baseDirIntensity,this.ambientLight.intensity=this.baseAmbientIntensity}dispose(){this.rainSystem.dispose()}}class Gw{renderer;scene;cameraManager;playerCar;roadManager;trafficManager;policeChase;particleSystem;weatherManager;isLightningFlashing=!1;dirLight;clock=new Pw;isRunning=!1;animFrameId=null;score=0;distanceMeters=0;nearMissCount=0;policeEvadedCount=0;comboMultiplier=1;comboResetTimer=0;nextPursuitDistance=750;onHUDUpdate;onNearMissAlert;onGameOver;onPursuitEvadedAlert;controls={steerLeft:!1,steerRight:!1,throttle:!1,brake:!1,nitro:!1,steerAxis:0};constructor(e,n){this.renderer=new vv({canvas:e,antialias:!0,powerPreference:"high-performance",stencil:!1,depth:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=B0,this.renderer.toneMappingExposure=1.2,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=k0,this.scene=new yw,this.scene.background=new Ne(527122),this.scene.fog=new ja(527122,.0035),this.dirLight=new bw(8961023,1.8),this.dirLight.position.set(25,45,20),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=1024,this.dirLight.shadow.mapSize.height=1024,this.dirLight.shadow.camera.near=.5,this.dirLight.shadow.camera.far=120,this.dirLight.shadow.camera.left=-18,this.dirLight.shadow.camera.right=18,this.dirLight.shadow.camera.top=22,this.dirLight.shadow.camera.bottom=-22,this.dirLight.shadow.bias=-8e-4,this.scene.add(this.dirLight);const i=new Lw(1713720,1.4);this.scene.add(i),this.cameraManager=new Nw,this.roadManager=new zs(this.scene),this.playerCar=new Dw(this.scene,n),this.trafficManager=new Iw(this.scene),this.policeChase=new Ow(this.scene),this.particleSystem=new Fw(this.scene),this.weatherManager=new Bw(this.scene,this.dirLight,i,this.roadManager),this.weatherManager.onLightningFlash=()=>{this.isLightningFlashing=!0,setTimeout(()=>{this.isLightningFlashing=!1},160)},window.addEventListener("resize",this.onResize)}setCarConfig(e){this.playerCar.config=e,this.playerCar.setCustomization(e.color,e.underglowColor),this.playerCar.maxSpeedKmh=e.topSpeedKmh,this.playerCar.nitroMaxSpeedKmh=e.topSpeedKmh*1.22}start(){this.isRunning=!0,this.clock.start(),this.resetRunState(),this.tick()}stop(){this.isRunning=!1,this.animFrameId&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null)}resetRunState(){this.score=0,this.distanceMeters=0,this.nearMissCount=0,this.policeEvadedCount=0,this.comboMultiplier=1,this.comboResetTimer=0,this.nextPursuitDistance=650,this.playerCar.reset(1),this.trafficManager.reset(this.playerCar.mesh.position.z),this.policeChase.reset()}onResize=()=>{const e=window.innerWidth,n=window.innerHeight;this.renderer.setSize(e,n),this.cameraManager.resize(e,n)};handleNearMiss=e=>{this.nearMissCount++,this.comboMultiplier=Math.min(8,this.comboMultiplier+1),this.comboResetTimer=3.8;const n=e*this.comboMultiplier;this.score+=n,Tt.playNearMiss(),je.nearMiss(),this.cameraManager.triggerShake(.12),this.onNearMissAlert&&this.onNearMissAlert(`NEAR MISS! +${n}`,this.comboMultiplier)};handleCrash=()=>{this.playerCar.isCrashed||(this.playerCar.isCrashed=!0,Tt.playCrash(),je.crash(),this.cameraManager.triggerShake(.55),this.particleSystem.emitSparks(this.playerCar.mesh.position,28),setTimeout(()=>{this.finishRun(!1)},1400))};handleBusted=()=>{this.playerCar.isCrashed||(this.playerCar.isCrashed=!0,je.crash(),this.cameraManager.triggerShake(.35),setTimeout(()=>{this.finishRun(!0)},1200))};handlePursuitEvaded=e=>{this.policeEvadedCount++,this.score+=2500,Tt.playCoinPickup(),this.onPursuitEvadedAlert&&this.onPursuitEvadedAlert(e),this.nextPursuitDistance=this.distanceMeters+1200};finishRun(e){this.stop();const n=yt.getStats(),i=this.score>n.highScore,r=Math.floor(this.score/15)+this.policeEvadedCount*500;yt.saveStats({highScore:Math.max(n.highScore,this.score),coins:n.coins+r,totalNearMisses:n.totalNearMisses+this.nearMissCount,totalPoliceEvaded:n.totalPoliceEvaded+this.policeEvadedCount}),this.score>200&&yt.addLeaderboardScore({callsign:n.playerCallsign||"VIPER_01",score:this.score,distanceMeters:Math.floor(this.distanceMeters),policeEvaded:this.policeEvadedCount,carName:this.playerCar.config.name,date:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric"}).toUpperCase()}),this.onGameOver&&this.onGameOver({score:this.score,distanceMeters:Math.floor(this.distanceMeters),nearMisses:this.nearMissCount,policeEvaded:this.policeEvadedCount,coinsEarned:r,isBusted:e,isHighScore:i})}tick=()=>{if(!this.isRunning)return;this.animFrameId=requestAnimationFrame(this.tick);const e=Math.min(this.clock.getDelta(),.08);an.enabled&&(this.controls.steerAxis=an.update(e)),this.playerCar.update(e,this.controls);const n=!this.playerCar.isCrashed;Tt.updateEngine(this.playerCar.currentRPM,this.controls.throttle?1:0,n),Tt.updateTireSkid(Math.abs(this.playerCar.steeringInertia)*(this.playerCar.speedKmh>120?.35:0)),this.playerCar.isNitroActive?(Tt.startNitro(),je.nitroPulse(),this.particleSystem.emitNitroFlame(this.playerCar.leftExhaustPos,this.playerCar.rightExhaustPos,this.playerCar.speedKmh/3.6)):Tt.stopNitro(),this.roadManager.update(this.playerCar.mesh.position.z),this.dirLight.position.set(this.playerCar.mesh.position.x+20,45,this.playerCar.mesh.position.z+15),this.dirLight.target.position.set(this.playerCar.mesh.position.x,0,this.playerCar.mesh.position.z+10),this.dirLight.target.updateMatrixWorld(),this.trafficManager.update(e,this.playerCar.mesh.position.z,this.playerCar.mesh.position.x,this.playerCar.speedKmh,this.playerCar.bounds,this.handleNearMiss,this.handleCrash),this.distanceMeters=this.playerCar.mesh.position.z,this.policeChase.state==="IDLE"&&this.distanceMeters>=this.nextPursuitDistance&&this.policeChase.triggerPursuit(this.playerCar.mesh.position.z,this.playerCar.mesh.position.x),this.policeChase.update(e,this.playerCar.mesh.position.z,this.playerCar.mesh.position.x,this.playerCar.speedKmh,this.playerCar.bounds,this.handleBusted,this.handlePursuitEvaded),this.particleSystem.update(e),this.weatherManager.update(e,this.playerCar.mesh.position.z,this.playerCar.mesh.position.x,this.playerCar.speedKmh),this.cameraManager.update(e,this.playerCar.mesh.position,this.playerCar.speedKmh,this.playerCar.isNitroActive),this.comboResetTimer>0&&(this.comboResetTimer-=e,this.comboResetTimer<=0&&(this.comboMultiplier=1)),!this.playerCar.isCrashed&&this.playerCar.speedKmh>50&&(this.score+=Math.floor(this.playerCar.speedKmh/36*e*10*this.comboMultiplier)),this.renderer.render(this.scene,this.cameraManager.camera),this.onHUDUpdate&&this.onHUDUpdate({speedKmh:Math.floor(this.playerCar.speedKmh),gear:this.playerCar.currentGear,rpm:Math.floor(this.playerCar.currentRPM),nitroPercent:Math.floor(this.playerCar.nitroReserve),score:this.score,distanceMeters:Math.floor(this.distanceMeters),combo:this.comboMultiplier,comboTimerProgress:Math.max(0,this.comboResetTimer/3.8),pursuitActive:this.policeChase.state==="PURSUIT",pursuitAlertIntensity:this.policeChase.redBlueFlashIntensity,policeDistance:Math.floor(this.policeChase.distanceToClosest),steerAxis:this.playerCar.steeringInertia,tiltAngle:Math.round(an.calibratedAngle),tiltActive:an.enabled,weather:this.weatherManager.currentWeather,isLightningFlashing:this.isLightningFlashing})};destroy(){this.stop(),window.removeEventListener("resize",this.onResize),this.weatherManager.dispose(),this.particleSystem.dispose(),this.renderer.dispose()}}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),st=(t,e)=>{const n=ye.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},h)=>ye.createElement("svg",{ref:h,...Hw,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${Vw(t)}`,o].join(" "),...c},[...e.map(([d,f])=>ye.createElement(d,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=st("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=st("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=st("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=st("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=st("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=st("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=st("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=st("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=st("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=st("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=st("HandMetal",[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"7eki13"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2",key:"94qvcw"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9",key:"m1ah89"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",key:"t1skq1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=st("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=st("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=st("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=st("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=st("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=st("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=st("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=st("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=st("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=st("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=st("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=st("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=st("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=st("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=st("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),nA=({hud:t,nearMissAlert:e,evadedBonus:n})=>{const[i,r]=ye.useState(!1);ye.useEffect(()=>{if(e){r(!0);const o=setTimeout(()=>r(!1),800);return()=>clearTimeout(o)}},[e]);const s=Math.min(1,t.speedKmh/300),a=Math.min(1,Math.max(0,(t.rpm-800)/7700));return v.jsxs("div",{className:"mobile-hud-root",children:[t.pursuitActive&&v.jsx("div",{className:"police-strobe-vignette",style:{boxShadow:t.pursuitAlertIntensity>.5?"inset 0 0 80px 20px rgba(255, 0, 40, 0.75)":"inset 0 0 80px 20px rgba(0, 100, 255, 0.75)"},children:v.jsxs("div",{className:"pursuit-banner",children:[v.jsx(Xa,{size:18,className:"strobe-icon"}),v.jsx("span",{children:"POLICE PURSUIT — OUTRUN OR WEAVE TRAFFIC!"}),v.jsx(Xa,{size:18,className:"strobe-icon"})]})}),n!==null&&v.jsx("div",{className:"evaded-popup",children:v.jsxs("div",{className:"evaded-badge",children:[v.jsx(Ww,{size:28,className:"gold-icon"}),v.jsxs("div",{className:"evaded-text",children:[v.jsx("h3",{children:"POLICE EVADED!"}),v.jsxs("p",{children:["+",n," BONUS REWARD"]})]})]})}),e&&i&&v.jsx("div",{className:"near-miss-alert",children:v.jsxs("div",{className:"near-miss-pill",children:[v.jsx(Md,{size:20,className:"flame-icon"}),v.jsx("span",{className:"text",children:e.text}),e.combo>1&&v.jsxs("span",{className:"combo-tag",children:["x",e.combo]})]})}),v.jsxs("div",{className:"top-stats-bar",children:[v.jsxs("div",{className:"stat-card distance-card",children:[v.jsx("span",{className:"stat-label",children:"DISTANCE"}),v.jsxs("span",{className:"stat-value",children:[t.distanceMeters.toLocaleString()," ",v.jsx("small",{children:"M"})]})]}),t.combo>1&&v.jsxs("div",{className:"combo-meter-card",children:[v.jsxs("div",{className:"combo-val",children:["x",t.combo]}),v.jsx("div",{className:"combo-bar-wrapper",children:v.jsx("div",{className:"combo-bar-fill",style:{width:`${t.comboTimerProgress*100}%`}})}),v.jsx("span",{className:"combo-sub",children:"COMBO STREAK"})]}),v.jsxs("div",{className:"stat-card score-card",children:[v.jsx("span",{className:"stat-label",children:"SCORE"}),v.jsx("span",{className:"stat-value",children:t.score.toLocaleString()})]}),v.jsxs("div",{className:`stat-card weather-hud-chip ${t.weather==="RAIN"?"rain-active":""}`,children:[t.weather==="RAIN"?v.jsx(gh,{size:12,className:"weather-hud-icon rain"}):v.jsx(vh,{size:12,className:"weather-hud-icon moon"}),v.jsx("span",{className:"weather-hud-text",children:t.weather})]})]}),v.jsxs("div",{className:"bottom-cluster",children:[v.jsxs("div",{className:"speedometer-widget",children:[v.jsxs("div",{className:"radial-speed-track",children:[v.jsxs("svg",{viewBox:"0 0 100 100",className:"radial-svg",children:[v.jsx("circle",{cx:"50",cy:"50",r:"42",fill:"none",stroke:"#171e2e",strokeWidth:"8",strokeDasharray:"198",strokeDashoffset:"33",strokeLinecap:"round"}),v.jsx("circle",{cx:"50",cy:"50",r:"42",fill:"none",stroke:"url(#speedGrad)",strokeWidth:"8",strokeDasharray:"198",strokeDashoffset:198-s*165,strokeLinecap:"round",className:"speed-needle-circle"}),v.jsx("defs",{children:v.jsxs("linearGradient",{id:"speedGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[v.jsx("stop",{offset:"0%",stopColor:"#00f3ff"}),v.jsx("stop",{offset:"65%",stopColor:"#ffaa00"}),v.jsx("stop",{offset:"100%",stopColor:"#ff0055"})]})})]}),v.jsxs("div",{className:"speed-center-readout",children:[v.jsx("span",{className:"digital-speed",children:t.speedKmh}),v.jsx("span",{className:"unit-label",children:"KM/H"})]})]}),v.jsxs("div",{className:"gear-rpm-bar",children:[v.jsxs("div",{className:"gear-badge",children:[v.jsx("span",{className:"gear-sub",children:"GEAR"}),v.jsx("span",{className:"gear-num",children:t.gear})]}),v.jsx("div",{className:"rpm-linear-track",children:v.jsx("div",{className:`rpm-fill ${a>.85?"redline":""}`,style:{width:`${a*100}%`}})})]}),t.tiltActive&&v.jsxs("div",{className:"hud-gyro-chip",children:[v.jsx(Dr,{size:9,className:"hud-gyro-icon"}),v.jsxs("span",{children:["TILT ",t.tiltAngle>0?`+${t.tiltAngle}°`:`${t.tiltAngle}°`]})]})]}),v.jsxs("div",{className:"nos-widget",children:[v.jsxs("div",{className:"nos-header",children:[v.jsx(Ed,{size:14,className:"nos-icon"}),v.jsx("span",{children:"NITROUS"}),v.jsxs("span",{className:"nos-val",children:[t.nitroPercent,"%"]})]}),v.jsx("div",{className:"nos-tube-wrapper",children:v.jsx("div",{className:`nos-tube-fill ${t.nitroPercent<15?"low":""}`,style:{width:`${t.nitroPercent}%`}})})]})]})]})},iA=({onControlsChange:t,nitroPercent:e,isNitroActive:n,tiltSteeringEnabled:i=!1,tiltAngle:r=0,steerAxis:s=0,onCalibrateTilt:a,onToggleTiltMode:o})=>{const l=ye.useRef(null),c=ye.useCallback(g=>{l.current=g,je.buttonTap(),t({steerLeft:g==="left",steerRight:g==="right"})},[t]),h=ye.useCallback(()=>{l.current=null,t({steerLeft:!1,steerRight:!1})},[t]),d=ye.useCallback(()=>{je.buttonTap(),t({throttle:!0,brake:!1})},[t]),f=ye.useCallback(()=>{t({throttle:!1})},[t]),m=ye.useCallback(()=>{je.buttonTap(),t({brake:!0,throttle:!1})},[t]),x=ye.useCallback(()=>{t({brake:!1})},[t]),y=ye.useCallback(()=>{e>5&&(je.nitroPulse(),t({nitro:!0}))},[e,t]),p=ye.useCallback(()=>{t({nitro:!1})},[t]),u=ye.useCallback(g=>{g.preventDefault(),g.stopPropagation(),je.buttonTap(),a&&a()},[a]);return v.jsxs("div",{className:"mobile-controls-container",children:[v.jsx("div",{className:"touch-zone left-zone",children:i?v.jsx("div",{className:"tilt-steering-zone",children:v.jsxs("div",{className:"tilt-instrument-card",children:[v.jsxs("div",{className:"tilt-inst-header",children:[v.jsxs("div",{className:"tilt-mode-tag",children:[v.jsx(Dr,{size:13,className:"tilt-icon-pulse"}),v.jsx("span",{children:"GYRO TILT"})]}),v.jsx("span",{className:"tilt-angle-deg",children:r>0?`+${r}°`:`${r}°`})]}),v.jsxs("div",{className:"tilt-horizon-track",children:[v.jsx("div",{className:"tilt-zone-deadzone"}),v.jsx("div",{className:"tilt-center-tick"}),v.jsxs("div",{className:"tilt-horizon-reticle",style:{transform:`translateX(${s*40}px)`},children:[v.jsx("div",{className:"reticle-core"}),v.jsx("div",{className:"reticle-wings"})]})]}),v.jsxs("div",{className:"tilt-actions-row",children:[v.jsxs("button",{type:"button",className:"tilt-btn tilt-recenter-btn",onPointerDown:u,title:"Calibrate Center Angle",children:[v.jsx(Sv,{size:13}),v.jsx("span",{children:"CENTER"})]}),o&&v.jsxs("button",{type:"button",className:"tilt-btn tilt-switch-btn",onPointerDown:g=>{g.preventDefault(),g.stopPropagation(),je.buttonTap(),o()},title:"Switch to Touch Buttons",children:[v.jsx($w,{size:13}),v.jsx("span",{children:"PADS"})]})]})]})}):v.jsxs("div",{className:"steer-buttons-group",children:[v.jsxs("button",{className:"touch-btn steer-btn left-steer",onPointerDown:g=>{g.preventDefault(),c("left")},onPointerUp:g=>{g.preventDefault(),h()},onPointerCancel:g=>{g.preventDefault(),h()},onPointerLeave:g=>{g.preventDefault(),h()},children:[v.jsx("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:v.jsx("path",{d:"m15 18-6-6 6-6"})}),v.jsx("span",{className:"btn-label",children:"LEFT"})]}),v.jsxs("button",{className:"touch-btn steer-btn right-steer",onPointerDown:g=>{g.preventDefault(),c("right")},onPointerUp:g=>{g.preventDefault(),h()},onPointerCancel:g=>{g.preventDefault(),h()},onPointerLeave:g=>{g.preventDefault(),h()},children:[v.jsx("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:v.jsx("path",{d:"m9 18 6-6-6-6"})}),v.jsx("span",{className:"btn-label",children:"RIGHT"})]})]})}),v.jsxs("div",{className:"touch-zone right-zone",children:[v.jsxs("button",{className:`touch-btn nos-btn ${n?"nos-active":""} ${e<5?"nos-depleted":""}`,onPointerDown:g=>{g.preventDefault(),y()},onPointerUp:g=>{g.preventDefault(),p()},onPointerCancel:g=>{g.preventDefault(),p()},onPointerLeave:g=>{g.preventDefault(),p()},children:[v.jsx(Ed,{className:"nos-icon",size:26}),v.jsx("span",{className:"nos-label",children:"NOS"}),v.jsx("div",{className:"nos-ring",style:{opacity:e/100}})]}),v.jsx("button",{className:"touch-btn pedal-btn brake-pedal",onPointerDown:g=>{g.preventDefault(),m()},onPointerUp:g=>{g.preventDefault(),x()},onPointerCancel:g=>{g.preventDefault(),x()},onPointerLeave:g=>{g.preventDefault(),x()},children:v.jsx("span",{className:"pedal-label",children:"BRAKE"})}),v.jsx("button",{className:"touch-btn pedal-btn gas-pedal",onPointerDown:g=>{g.preventDefault(),d()},onPointerUp:g=>{g.preventDefault(),f()},onPointerCancel:g=>{g.preventDefault(),f()},onPointerLeave:g=>{g.preventDefault(),f()},children:v.jsx("span",{className:"pedal-label",children:"GAS"})})]})]})},rA=({pursuitActive:t,policeDistance:e,alertIntensity:n})=>v.jsx("div",{className:`rearview-mirror-container ${t?"mirror-pursuit":""}`,children:v.jsx("div",{className:"mirror-frame",children:v.jsxs("div",{className:"mirror-glass",children:[v.jsx("div",{className:"mirror-road"}),t&&v.jsx("div",{className:"mirror-cruiser-wrapper",style:{transform:`scale(${Math.min(1.8,Math.max(.4,(80-e)/40))})`,opacity:Math.max(.3,Math.min(1,(100-e)/60))},children:v.jsxs("div",{className:"mirror-cruiser",children:[v.jsxs("div",{className:"cruiser-roof-lightbar",children:[v.jsx("span",{className:`strobe-dot red-strobe ${n>.5?"lit":""}`}),v.jsx("span",{className:`strobe-dot blue-strobe ${n<=.5?"lit":""}`})]}),v.jsx("div",{className:"cruiser-grille"}),v.jsxs("div",{className:"cruiser-headlights",children:[v.jsx("span",{className:"beam"}),v.jsx("span",{className:"beam"})]})]})}),t&&v.jsxs("div",{className:"mirror-distance-badge",children:[v.jsx(Xa,{size:12,className:"shield-icon"}),v.jsxs("span",{children:[e,"m"]})]})]})})}),sA=[{name:"Cyber Cyan",hex:"#00f3ff"},{name:"Midnight Obsidian",hex:"#11141a"},{name:"Crimson Flare",hex:"#ff0044"},{name:"Liquid Gold",hex:"#e6c300"},{name:"Toxic Lime",hex:"#22ff44"},{name:"Ultraviolet",hex:"#a822ff"}],aA=[{name:"Ice Blue",hex:"#00f3ff"},{name:"Neon Pink",hex:"#ff0088"},{name:"Emerald",hex:"#00ff66"},{name:"Solar Amber",hex:"#ff9900"},{name:"Ghost Purple",hex:"#9933ff"}],oA=({cars:t,selectedCarId:e,coins:n,onSelectCar:i,onClose:r,onUpdateCars:s,onUpdateCoins:a})=>{const[o,l]=ye.useState(()=>{const y=t.findIndex(p=>p.id===e);return y>=0?y:0}),c=t[o],h=y=>{je.buttonTap(),l(y)},d=y=>{je.buttonTap(),yt.updateCarCustomization(c.id,y,c.underglowColor);const p=yt.getCars();s(p),c.id===e&&i(p[o])},f=y=>{je.buttonTap(),yt.updateCarCustomization(c.id,c.color,y);const p=yt.getCars();s(p),c.id===e&&i(p[o])},m=()=>{if(n>=c.price&&(je.buttonTap(),Tt.playCoinPickup(),yt.unlockCar(c.id))){const y=yt.getCars(),p=yt.getStats();s(y),a(p.coins),i(y[o])}},x=()=>{je.buttonTap(),yt.saveStats({selectedCarId:c.id}),i(c),r()};return v.jsx("div",{className:"garage-modal-overlay",children:v.jsxs("div",{className:"garage-modal-card",children:[v.jsxs("div",{className:"garage-header",children:[v.jsxs("div",{className:"garage-title-wrap",children:[v.jsx("h2",{className:"garage-title",children:"CYBER GARAGE"}),v.jsx("span",{className:"garage-sub",children:"SELECT & CUSTOMIZE VEHICLE"})]}),v.jsxs("div",{className:"coins-badge",children:[v.jsx(Sd,{size:18,className:"coin-icon"}),v.jsx("span",{children:n.toLocaleString()})]}),v.jsx("button",{className:"close-btn",onClick:()=>{je.buttonTap(),r()},children:v.jsx(kl,{size:22})})]}),v.jsx("div",{className:"car-tabs",children:t.map((y,p)=>v.jsxs("button",{className:`car-tab-btn ${p===o?"active":""}`,onClick:()=>h(p),children:[v.jsx("span",{className:"car-tab-name",children:y.name}),!y.unlocked&&v.jsx(Tm,{size:12,className:"lock-icon"})]},y.id))}),v.jsxs("div",{className:"car-detail-container",children:[v.jsxs("div",{className:"car-stats-panel",children:[v.jsxs("div",{className:"spec-row",children:[v.jsxs("div",{className:"spec-label",children:[v.jsx(Yw,{size:16}),v.jsx("span",{children:"TOP SPEED"})]}),v.jsxs("span",{className:"spec-value",children:[c.topSpeedKmh," KM/H"]})]}),v.jsxs("div",{className:"spec-row",children:[v.jsxs("div",{className:"spec-label",children:[v.jsx(Ed,{size:16}),v.jsx("span",{children:"ACCELERATION"})]}),v.jsx("div",{className:"spec-bar-track",children:v.jsx("div",{className:"spec-bar-fill",style:{width:`${c.acceleration/10*100}%`}})})]}),v.jsxs("div",{className:"spec-row",children:[v.jsxs("div",{className:"spec-label",children:[v.jsx(Xw,{size:16}),v.jsx("span",{children:"HANDLING"})]}),v.jsx("div",{className:"spec-bar-track",children:v.jsx("div",{className:"spec-bar-fill",style:{width:`${c.handling/10*100}%`}})})]}),v.jsxs("div",{className:"spec-row",children:[v.jsxs("div",{className:"spec-label",children:[v.jsx(Zw,{size:16}),v.jsx("span",{children:"ARMOR (VS POLICE)"})]}),v.jsx("div",{className:"spec-bar-track",children:v.jsx("div",{className:"spec-bar-fill armor",style:{width:`${c.armor/10*100}%`}})})]})]}),v.jsxs("div",{className:"customizer-panel",children:[v.jsxs("div",{className:"palette-section",children:[v.jsx("span",{className:"palette-label",children:"METALLIC CLEARCOAT PAINT"}),v.jsx("div",{className:"swatches-row",children:sA.map(y=>v.jsx("button",{className:`color-swatch ${c.color.toLowerCase()===y.hex.toLowerCase()?"selected":""}`,style:{backgroundColor:y.hex},onClick:()=>d(y.hex),children:c.color.toLowerCase()===y.hex.toLowerCase()&&v.jsx(Fl,{size:14,color:"#fff"})},y.hex))})]}),v.jsxs("div",{className:"palette-section",children:[v.jsx("span",{className:"palette-label",children:"NEON RGB UNDERGLOW"}),v.jsx("div",{className:"swatches-row",children:aA.map(y=>v.jsx("button",{className:`color-swatch underglow-swatch ${c.underglowColor.toLowerCase()===y.hex.toLowerCase()?"selected":""}`,style:{backgroundColor:y.hex,boxShadow:`0 0 10px ${y.hex}`},onClick:()=>f(y.hex),children:c.underglowColor.toLowerCase()===y.hex.toLowerCase()&&v.jsx(Fl,{size:14,color:"#000"})},y.hex))})]})]})]}),v.jsx("div",{className:"garage-footer",children:c.unlocked?v.jsx("button",{className:`primary-action-btn ${c.id===e?"selected-btn":""}`,onClick:x,children:c.id===e?"EQUIPPED & READY":"SELECT CAR"}):v.jsxs("button",{className:`primary-action-btn unlock-btn ${n<c.price?"disabled":""}`,disabled:n<c.price,onClick:m,children:[v.jsx(Tm,{size:16}),v.jsxs("span",{children:["UNLOCK FOR ",c.price.toLocaleString()," COINS"]})]})})]})})},lA=({summary:t,onRestart:e,onOpenGarage:n,onOpenLeaderboard:i})=>v.jsx("div",{className:"game-over-overlay",children:v.jsxs("div",{className:"game-over-card",children:[v.jsx("div",{className:`result-badge ${t.isBusted?"badge-busted":"badge-crashed"}`,children:t.isBusted?v.jsxs(v.Fragment,{children:[v.jsx(Xa,{size:28}),v.jsx("span",{children:"BUSTED BY POLICE"})]}):v.jsxs(v.Fragment,{children:[v.jsx(Md,{size:28}),v.jsx("span",{children:"VEHICLE CRASHED"})]})}),t.isHighScore&&v.jsxs("div",{className:"high-score-banner",children:[v.jsx(As,{size:16}),v.jsx("span",{children:"NEW ALL-TIME RECORD!"})]}),v.jsxs("div",{className:"summary-metrics",children:[v.jsxs("div",{className:"summary-item main-score",children:[v.jsx("span",{className:"label",children:"FINAL SCORE"}),v.jsx("span",{className:"value",children:t.score.toLocaleString()})]}),v.jsxs("div",{className:"summary-grid",children:[v.jsxs("div",{className:"summary-item",children:[v.jsx("span",{className:"label",children:"DISTANCE"}),v.jsxs("span",{className:"value",children:[t.distanceMeters.toLocaleString()," m"]})]}),v.jsxs("div",{className:"summary-item",children:[v.jsx("span",{className:"label",children:"NEAR-MISSES"}),v.jsx("span",{className:"value",children:t.nearMisses})]}),v.jsxs("div",{className:"summary-item",children:[v.jsx("span",{className:"label",children:"POLICE EVADED"}),v.jsx("span",{className:"value",children:t.policeEvaded})]}),v.jsxs("div",{className:"summary-item coin-reward",children:[v.jsx("span",{className:"label",children:"REWARD"}),v.jsxs("span",{className:"value",children:[v.jsx(Sd,{size:15,className:"coin-icon"}),"+",t.coinsEarned]})]})]})]}),v.jsxs("div",{className:"game-over-actions",children:[v.jsxs("button",{className:"action-btn garage-btn",onClick:()=>{je.buttonTap(),n()},children:[v.jsx(Mv,{size:18}),v.jsx("span",{children:"GARAGE"})]}),i&&v.jsxs("button",{className:"action-btn leaderboard-action-btn",onClick:()=>{je.buttonTap(),i()},children:[v.jsx(As,{size:18}),v.jsx("span",{children:"RECORDS"})]}),v.jsxs("button",{className:"action-btn restart-btn",onClick:()=>{je.buttonTap(),e()},children:[v.jsx(Sv,{size:18}),v.jsx("span",{children:"RACE AGAIN"})]})]})]})}),Ev=()=>{typeof window<"u"&&window.dispatchEvent(new CustomEvent("velocity-x-install-requested"))},cA=()=>{const[t,e]=ye.useState(null),[n,i]=ye.useState(!1),[r,s]=ye.useState(!0),[a,o]=ye.useState(!1),[l,c]=ye.useState(!1);ye.useEffect(()=>{(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)&&i(!0);const m=y=>{y.preventDefault(),e(y),s(!0)},x=()=>{h()};return window.addEventListener("beforeinstallprompt",m),window.addEventListener("velocity-x-install-requested",x),()=>{window.removeEventListener("beforeinstallprompt",m),window.removeEventListener("velocity-x-install-requested",x)}},[]);const h=ye.useCallback(async()=>{if(je.buttonTap(),t)try{await t.prompt(),(await t.userChoice).outcome==="accepted"?(i(!0),s(!1)):o(!0),e(null)}catch(m){console.warn("Install prompt error:",m),o(!0)}else o(!0)},[t]),d=typeof window<"u"?window.location.href:"https://indrajitkumar23541-a11y.github.io/VELOCITY-X/",f=()=>{je.buttonTap(),navigator.clipboard.writeText(d),c(!0),setTimeout(()=>c(!1),2e3)};return n?null:v.jsxs(v.Fragment,{children:[v.jsxs("button",{type:"button",className:"install-pwa-btn",onClick:h,title:"Install VELOCITY X for 100% Offline 120 FPS Play",children:[v.jsx(rl,{size:14,className:"install-icon"}),v.jsx("span",{children:"INSTALL APP"})]}),r&&v.jsxs("div",{className:"install-floating-banner",children:[v.jsxs("div",{className:"banner-left",children:[v.jsx("div",{className:"banner-icon-glow",children:v.jsx(Qw,{size:18,className:"banner-sparkle"})}),v.jsxs("div",{className:"banner-text",children:[v.jsx("div",{className:"banner-title",children:"INSTALL VELOCITY X"}),v.jsx("div",{className:"banner-desc",children:"Play offline in Flight Mode • 120 FPS • Temple Run Style"})]})]}),v.jsxs("div",{className:"banner-actions",children:[v.jsxs("button",{type:"button",className:"banner-install-btn",onClick:h,children:[v.jsx(rl,{size:15}),v.jsx("span",{children:"INSTALL NOW"})]}),v.jsx("button",{type:"button",className:"banner-dismiss-btn",onClick:()=>{je.buttonTap(),s(!1)},title:"Dismiss for now",children:v.jsx(kl,{size:16})})]})]}),a&&v.jsx("div",{className:"install-modal-backdrop",onClick:()=>o(!1),children:v.jsxs("div",{className:"install-modal-card",onClick:m=>m.stopPropagation(),children:[v.jsxs("div",{className:"install-modal-header",children:[v.jsxs("div",{className:"modal-title-group",children:[v.jsx(Dr,{size:20,className:"modal-header-icon"}),v.jsx("h3",{children:"INSTALL ON YOUR PHONE"})]}),v.jsx("button",{type:"button",className:"modal-close-btn",onClick:()=>{je.buttonTap(),o(!1)},children:v.jsx(kl,{size:18})})]}),v.jsx("p",{className:"install-modal-sub",children:"VELOCITY X ko proper game app ki tarah open karein — bina browser URL bar ke, aur 100% offline Flight Mode me khele!"}),v.jsxs("div",{className:"install-steps-list",children:[v.jsxs("div",{className:"install-step-item highlight-step",children:[v.jsx("div",{className:"step-badge",children:"1"}),v.jsxs("div",{className:"step-content",children:[v.jsx("h4",{children:"Android Phone (Chrome)"}),v.jsxs("p",{children:["Chrome me upar right side me ",v.jsx("strong",{children:"3 dots (⋮)"})," dabayein, fir ",v.jsx("strong",{children:'"Install app"'})," ya ",v.jsx("strong",{children:'"Add to Home screen"'})," par tap karein."]})]})]}),v.jsxs("div",{className:"install-step-item",children:[v.jsx("div",{className:"step-badge",children:"2"}),v.jsxs("div",{className:"step-content",children:[v.jsx("h4",{children:"iPhone / iPad (Safari)"}),v.jsxs("p",{children:["Safari ke bottom me ",v.jsx("strong",{children:"Share button (📤)"})," dabayein, fir scroll karke ",v.jsx("strong",{children:'"Add to Home Screen"'})," chunein."]})]})]}),v.jsxs("div",{className:"install-step-item",children:[v.jsx("div",{className:"step-badge",children:"APK"}),v.jsxs("div",{className:"step-content",children:[v.jsx("h4",{children:"Direct Android .APK File"}),v.jsx("p",{children:"Agar aap direct file download karna chahte hain:"}),v.jsxs("a",{href:"https://github.com/indrajitkumar23541-a11y/VELOCITY-X/releases",target:"_blank",rel:"noopener noreferrer",className:"apk-download-link-btn",children:[v.jsx(rl,{size:14}),v.jsx("span",{children:"Download VELOCITY-X.apk"}),v.jsx(qw,{size:12})]})]})]}),v.jsxs("div",{className:"install-step-item",children:[v.jsx("div",{className:"step-badge",children:"🔗"}),v.jsxs("div",{className:"step-content",children:[v.jsx("h4",{children:"Phone Link Share"}),v.jsxs("div",{className:"copy-url-row",children:[v.jsx("code",{children:d}),v.jsxs("button",{type:"button",className:"copy-btn",onClick:f,children:[l?v.jsx(Fl,{size:14,color:"#00f3ff"}):v.jsx(jw,{size:14}),v.jsx("span",{children:l?"COPIED!":"COPY"})]})]})]})]})]}),v.jsx("button",{type:"button",className:"install-modal-done-btn",onClick:()=>{je.buttonTap(),o(!1)},children:"GOT IT, LET'S RACE!"})]})})]})},uA=()=>{const[t,e]=ye.useState(!1);return ye.useEffect(()=>{const n=()=>{e(window.innerWidth<window.innerHeight)};return n(),window.addEventListener("resize",n),window.addEventListener("orientationchange",n),()=>{window.removeEventListener("resize",n),window.removeEventListener("orientationchange",n)}},[]),t?v.jsx("div",{className:"rotate-prompt-overlay",children:v.jsxs("div",{className:"rotate-card",children:[v.jsx("div",{className:"phone-rotate-anim",children:v.jsx(Dr,{size:56,className:"phone-icon"})}),v.jsx("h2",{className:"rotate-title",children:"ROTATE YOUR PHONE"}),v.jsx("p",{className:"rotate-desc",children:"VELOCITY X is engineered for high-octane widescreen landscape mobile racing."}),v.jsx("div",{className:"rotate-pill",children:"LANDSCAPE MODE ONLY"}),v.jsxs("button",{type:"button",className:"portrait-install-action-btn",onClick:()=>Ev(),children:[v.jsx(Dr,{size:16}),v.jsx("span",{children:"📲 INSTALL APP FIRST"})]})]})}):null},hA=({onClose:t})=>{const[e]=ye.useState(()=>yt.getLeaderboard()),[n,i]=ye.useState(()=>yt.getStats()),[r,s]=ye.useState(n.playerCallsign),[a,o]=ye.useState(!1),l=c=>{c.preventDefault(),je.buttonTap();const h=r.trim().toUpperCase().slice(0,14)||"VIPER_01";yt.saveStats({playerCallsign:h}),i(d=>({...d,playerCallsign:h})),o(!1)};return v.jsx("div",{className:"leaderboard-backdrop",onClick:t,children:v.jsxs("div",{className:"leaderboard-card",onClick:c=>c.stopPropagation(),children:[v.jsxs("div",{className:"leaderboard-header",children:[v.jsxs("div",{className:"leaderboard-title-group",children:[v.jsx(As,{size:26,className:"trophy-gold"}),v.jsxs("div",{children:[v.jsx("h2",{children:"GLOBAL HALL OF FAME"}),v.jsx("p",{className:"subtitle",children:"HIGHWAY PURSUIT WORLD RECORDS"})]})]}),v.jsx("button",{type:"button",className:"modal-close-btn",onClick:()=>{je.buttonTap(),t()},children:v.jsx(kl,{size:20})})]}),v.jsxs("div",{className:"player-callsign-bar",children:[v.jsxs("div",{className:"callsign-left",children:[v.jsx(Jw,{size:16,className:"callsign-icon"}),v.jsx("span",{className:"callsign-label",children:"DRIVER CALLSIGN:"}),a?v.jsxs("form",{onSubmit:l,className:"callsign-form",children:[v.jsx("input",{type:"text",value:r,onChange:c=>s(c.target.value.toUpperCase()),maxLength:14,autoFocus:!0,className:"callsign-input"}),v.jsx("button",{type:"submit",className:"save-callsign-btn",children:v.jsx(Fl,{size:14})})]}):v.jsxs("span",{className:"player-name-badge",onClick:()=>o(!0),children:[n.playerCallsign,v.jsx("small",{className:"edit-hint",children:"(EDIT)"})]})]}),v.jsxs("div",{className:"callsign-right",children:[v.jsx("span",{className:"personal-best-label",children:"YOUR TOP:"}),v.jsxs("span",{className:"personal-best-val",children:[n.highScore.toLocaleString()," PTS"]})]})]}),v.jsx("div",{className:"leaderboard-table-wrapper",children:v.jsxs("table",{className:"leaderboard-table",children:[v.jsx("thead",{children:v.jsxs("tr",{children:[v.jsx("th",{children:"RANK"}),v.jsx("th",{children:"DRIVER"}),v.jsx("th",{children:"VEHICLE"}),v.jsx("th",{children:"DISTANCE"}),v.jsx("th",{children:"EVADED"}),v.jsx("th",{className:"score-th",children:"SCORE"})]})}),v.jsx("tbody",{children:e.map((c,h)=>{const d=h+1,f=d<=3;return v.jsxs("tr",{className:`leaderboard-row ${c.isPlayer?"player-row":""} ${f?"top3-row":""}`,children:[v.jsxs("td",{className:"rank-td",children:[d===1&&v.jsx("span",{className:"rank-badge gold",children:"#1"}),d===2&&v.jsx("span",{className:"rank-badge silver",children:"#2"}),d===3&&v.jsx("span",{className:"rank-badge bronze",children:"#3"}),d>3&&v.jsxs("span",{className:"rank-num",children:["#",d]})]}),v.jsxs("td",{className:"driver-td",children:[v.jsx("span",{className:"driver-name",children:c.callsign}),c.isPlayer&&v.jsx("span",{className:"you-pill",children:"YOU"})]}),v.jsx("td",{className:"vehicle-td",children:c.carName}),v.jsxs("td",{className:"distance-td",children:[c.distanceMeters.toLocaleString(),"m"]}),v.jsx("td",{className:"evaded-td",children:c.policeEvaded>0?v.jsxs("span",{className:"evaded-count",children:[v.jsx(Xa,{size:12}),c.policeEvaded]}):v.jsx("span",{className:"zero-evaded",children:"-"})}),v.jsx("td",{className:"score-td",children:v.jsx("span",{className:"score-digits",children:c.score.toLocaleString()})})]},c.id||h)})})]})}),v.jsxs("div",{className:"leaderboard-footer",children:[v.jsxs("div",{className:"footer-tip",children:[v.jsx(Md,{size:14,className:"flame-tip-icon"}),v.jsx("span",{children:"EARN NEAR-MISS COMBOS & EVADE POLICE TO CLIMB THE RANKS"})]}),v.jsx("button",{type:"button",className:"leaderboard-race-btn",onClick:()=>{je.buttonTap(),t()},children:"LET'S RACE"})]})]})})},dA=({isRaining:t,isLightningFlashing:e})=>!t&&!e?null:v.jsxs("div",{className:"rain-screen-container",children:[e&&v.jsx("div",{className:"lightning-flash-overlay"}),t&&v.jsx("div",{className:"water-droplets-layer",children:v.jsxs("svg",{className:"droplets-svg",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[v.jsxs("defs",{children:[v.jsxs("radialGradient",{id:"dropGrad",cx:"35%",cy:"35%",r:"65%",children:[v.jsx("stop",{offset:"0%",stopColor:"#ffffff",stopOpacity:"0.8"}),v.jsx("stop",{offset:"45%",stopColor:"#88ccff",stopOpacity:"0.4"}),v.jsx("stop",{offset:"100%",stopColor:"#08101a",stopOpacity:"0.7"})]}),v.jsx("filter",{id:"dropBlur",children:v.jsx("feGaussianBlur",{stdDeviation:"0.2"})})]}),v.jsx("circle",{cx:"8",cy:"14",r:"1.2",fill:"url(#dropGrad)"}),v.jsx("circle",{cx:"12",cy:"18",r:"0.8",fill:"url(#dropGrad)"}),v.jsx("circle",{cx:"22",cy:"8",r:"1.5",fill:"url(#dropGrad)",className:"sliding-drop-1"}),v.jsx("circle",{cx:"34",cy:"24",r:"1.0",fill:"url(#dropGrad)"}),v.jsx("circle",{cx:"48",cy:"12",r:"1.8",fill:"url(#dropGrad)",className:"sliding-drop-2"}),v.jsx("circle",{cx:"62",cy:"16",r:"0.9",fill:"url(#dropGrad)"}),v.jsx("circle",{cx:"75",cy:"9",r:"1.4",fill:"url(#dropGrad)",className:"sliding-drop-3"}),v.jsx("circle",{cx:"88",cy:"20",r:"1.1",fill:"url(#dropGrad)"}),v.jsx("circle",{cx:"94",cy:"35",r:"1.6",fill:"url(#dropGrad)",className:"sliding-drop-1"}),v.jsx("circle",{cx:"6",cy:"65",r:"1.4",fill:"url(#dropGrad)"}),v.jsx("circle",{cx:"15",cy:"82",r:"1.9",fill:"url(#dropGrad)",className:"sliding-drop-2"}),v.jsx("circle",{cx:"28",cy:"74",r:"1.0",fill:"url(#dropGrad)"}),v.jsx("circle",{cx:"82",cy:"78",r:"1.7",fill:"url(#dropGrad)",className:"sliding-drop-3"}),v.jsx("circle",{cx:"91",cy:"62",r:"1.2",fill:"url(#dropGrad)"})]})})]}),fA=()=>{const t=ye.useRef(null),e=ye.useRef(null),[n,i]=ye.useState(()=>yt.getStats()),[r,s]=ye.useState(()=>yt.getCars()),[a,o]=ye.useState(()=>{const U=yt.getCars(),k=yt.getStats();return U.find(q=>q.id===k.selectedCarId)||U[0]}),[l,c]=ye.useState("MENU"),[h,d]=ye.useState(!1),[f,m]=ye.useState(!1),[x,y]=ye.useState("CLEAR"),[p,u]=ye.useState(()=>yt.getStats().tiltSteeringEnabled??!1),[g,_]=ye.useState({speedKmh:0,gear:1,rpm:800,nitroPercent:100,score:0,distanceMeters:0,combo:1,comboTimerProgress:0,pursuitActive:!1,pursuitAlertIntensity:0,policeDistance:999,steerAxis:0,tiltAngle:0,tiltActive:!1,weather:"CLEAR",isLightningFlashing:!1}),[S,b]=ye.useState(null),[R,A]=ye.useState(null),[I,E]=ye.useState(null);ye.useEffect(()=>{if(!t.current)return;const U=new Gw(t.current,a);return e.current=U,U.onHUDUpdate=k=>{_(k)},U.onNearMissAlert=(k,q)=>{b({text:k,combo:q,id:Date.now()})},U.onPursuitEvadedAlert=k=>{A(k),setTimeout(()=>A(null),3e3)},U.onGameOver=k=>{an.stop(),E(k),c("GAME_OVER"),i(yt.getStats())},()=>{an.stop(),U.destroy()}},[]),ye.useEffect(()=>{e.current&&e.current.setCarConfig(a)},[a]),ye.useEffect(()=>{const U=q=>{if(l!=="RACING"||!e.current)return;const N=e.current.controls;(q.key==="ArrowLeft"||q.key.toLowerCase()==="a")&&(N.steerLeft=!0),(q.key==="ArrowRight"||q.key.toLowerCase()==="d")&&(N.steerRight=!0),(q.key==="ArrowUp"||q.key.toLowerCase()==="w")&&(N.throttle=!0,N.brake=!1),(q.key==="ArrowDown"||q.key.toLowerCase()==="s"||q.key===" ")&&(N.brake=!0,N.throttle=!1),q.shiftKey&&(N.nitro=!0)},k=q=>{if(!e.current)return;const N=e.current.controls;(q.key==="ArrowLeft"||q.key.toLowerCase()==="a")&&(N.steerLeft=!1),(q.key==="ArrowRight"||q.key.toLowerCase()==="d")&&(N.steerRight=!1),(q.key==="ArrowUp"||q.key.toLowerCase()==="w")&&(N.throttle=!1),(q.key==="ArrowDown"||q.key.toLowerCase()==="s"||q.key===" ")&&(N.brake=!1),q.shiftKey||(N.nitro=!1)};return window.addEventListener("keydown",U),window.addEventListener("keyup",k),()=>{window.removeEventListener("keydown",U),window.removeEventListener("keyup",k)}},[l]);const T=ye.useCallback(()=>{je.buttonTap(),Tt.unlock(),c("RACING"),p?(an.start(),an.calibrate()):an.stop(),e.current&&e.current.start()},[p]),z=ye.useCallback(()=>{je.buttonTap(),Tt.unlock();const U=Tt.toggleMute();d(U)},[]),j=ye.useCallback(()=>{if(je.buttonTap(),e.current){const U=e.current.weatherManager.toggleWeather();y(U)}},[]),$=ye.useCallback(async()=>{je.buttonTap(),!p?await an.requestPermission()?(l==="RACING"&&(an.start(),an.calibrate()),u(!0),i(yt.saveStats({tiltSteeringEnabled:!0}))):alert("Device orientation sensors could not be accessed. Keeping touch buttons."):(an.stop(),e.current&&(e.current.controls.steerAxis=0),u(!1),i(yt.saveStats({tiltSteeringEnabled:!1})))},[p,l]),P=ye.useCallback(U=>{e.current&&Object.assign(e.current.controls,U)},[]);return v.jsxs("div",{className:"game-app-root",children:[v.jsx("canvas",{ref:t,className:"webgl-canvas"}),v.jsx(dA,{isRaining:g.weather==="RAIN",isLightningFlashing:g.isLightningFlashing}),v.jsx(uA,{}),v.jsxs("header",{className:"mobile-app-header",children:[v.jsxs("div",{className:"header-left",children:[v.jsx("button",{className:"icon-btn",onClick:z,title:"Toggle Audio",children:h?v.jsx(tA,{size:18}):v.jsx(eA,{size:18})}),v.jsx("button",{className:`icon-btn weather-toggle-header ${x==="RAIN"?"rain-active":""}`,onClick:j,title:x==="RAIN"?"Cyber Rain Active (Tap for Clear Night)":"Clear Night Active (Tap for Cyber Rain)",children:x==="RAIN"?v.jsx(gh,{size:18,color:"#00f3ff"}):v.jsx(vh,{size:18})}),v.jsxs("button",{className:`icon-btn tilt-toggle-header ${p?"tilt-active":""}`,onClick:$,title:p?"Gyro Tilt Active (Tap to switch to Touch)":"Touch Buttons Active (Tap to switch to Gyro Tilt)",children:[v.jsx(Dr,{size:17}),v.jsx("span",{className:"tilt-status-pill",children:p?"GYRO":"TOUCH"})]}),v.jsx("button",{className:"icon-btn leaderboard-header-btn",onClick:()=>{je.buttonTap(),m(!0)},title:"Global Leaderboard & World Records",children:v.jsx(As,{size:18})}),v.jsx(cA,{})]}),v.jsx("div",{className:"header-right",children:v.jsxs("div",{className:"coin-display",children:[v.jsx(Sd,{size:16,className:"coin-icon"}),v.jsx("span",{children:n.coins.toLocaleString()})]})})]}),l==="MENU"&&v.jsx("div",{className:"menu-screen-overlay",children:v.jsxs("div",{className:"menu-center-card",children:[v.jsxs("div",{className:"title-glow-wrap",children:[v.jsxs("h1",{className:"game-title",children:["VELOCITY ",v.jsx("span",{className:"highlight",children:"X"})]}),v.jsx("p",{className:"game-subtitle",children:"CYBER HIGHWAY POLICE PURSUIT"})]}),v.jsxs("div",{className:"menu-car-pill",children:[v.jsxs("div",{className:"car-pill-left",children:[v.jsx("span",{className:"pill-sub",children:"SELECTED VEHICLE"}),v.jsx("span",{className:"pill-name",children:a.name})]}),v.jsxs("div",{className:"car-pill-right",children:[v.jsx("span",{className:"pill-sub",children:"TOP RECORD"}),v.jsxs("span",{className:"pill-val",children:[v.jsx(As,{size:14,className:"trophy-icon"}),n.highScore.toLocaleString()]})]})]}),v.jsxs("div",{className:"menu-selectors-row",children:[v.jsxs("div",{className:"control-mode-selector",children:[v.jsx("span",{className:"selector-label",children:"STEERING SYSTEM"}),v.jsxs("div",{className:"mode-toggle-pill",children:[v.jsx("button",{type:"button",className:`mode-pill-btn ${p?"":"selected"}`,onClick:()=>{p&&$()},children:v.jsx("span",{children:"TOUCH PADS"})}),v.jsxs("button",{type:"button",className:`mode-pill-btn ${p?"selected":""}`,onClick:()=>{p||$()},children:[v.jsx(Dr,{size:13}),v.jsx("span",{children:"GYRO TILT"})]})]})]}),v.jsxs("div",{className:"control-mode-selector weather-selector",children:[v.jsx("span",{className:"selector-label",children:"ATMOSPHERE"}),v.jsxs("div",{className:"mode-toggle-pill",children:[v.jsxs("button",{type:"button",className:`mode-pill-btn ${x==="CLEAR"?"selected":""}`,onClick:()=>{x!=="CLEAR"&&j()},children:[v.jsx(vh,{size:13}),v.jsx("span",{children:"CLEAR"})]}),v.jsxs("button",{type:"button",className:`mode-pill-btn ${x==="RAIN"?"selected":""}`,onClick:()=>{x!=="RAIN"&&j()},children:[v.jsx(gh,{size:13}),v.jsx("span",{children:"RAIN"})]})]})]})]}),v.jsxs("div",{className:"menu-buttons-row",children:[v.jsxs("button",{className:"menu-btn install-menu-btn",onClick:()=>{je.buttonTap(),Ev()},title:"Install VELOCITY X on Phone (Offline / Standalone)",children:[v.jsx(rl,{size:20}),v.jsx("span",{children:"INSTALL APP"})]}),v.jsxs("button",{className:"menu-btn leaderboard-btn",onClick:()=>{je.buttonTap(),m(!0)},children:[v.jsx(As,{size:20}),v.jsx("span",{children:"RECORDS"})]}),v.jsxs("button",{className:"menu-btn garage-btn",onClick:()=>{je.buttonTap(),c("GARAGE")},children:[v.jsx(Mv,{size:20}),v.jsx("span",{children:"GARAGE"})]}),v.jsxs("button",{className:"menu-btn play-btn",onClick:T,children:[v.jsx(Kw,{size:24,fill:"currentColor"}),v.jsx("span",{children:"START RACE"})]})]}),v.jsx("div",{className:"menu-tips",children:v.jsx("span",{children:p?"PHYSICALLY TILT PHONE TO CARVE THROUGH HIGHWAY LANES":"TAP & HOLD LEFT / RIGHT TO WEAVE THROUGH TRAFFIC"})})]})}),l==="RACING"&&v.jsxs(v.Fragment,{children:[v.jsx(rA,{pursuitActive:g.pursuitActive,policeDistance:g.policeDistance,alertIntensity:g.pursuitAlertIntensity}),v.jsx(nA,{hud:g,nearMissAlert:S,evadedBonus:R}),v.jsx(iA,{onControlsChange:P,nitroPercent:g.nitroPercent,isNitroActive:e.current?.playerCar.isNitroActive||!1,tiltSteeringEnabled:p,tiltAngle:g.tiltAngle,steerAxis:g.steerAxis,onCalibrateTilt:()=>an.calibrate(),onToggleTiltMode:$})]}),l==="GARAGE"&&v.jsx(oA,{cars:r,selectedCarId:a.id,coins:n.coins,onSelectCar:U=>o(U),onClose:()=>c("MENU"),onUpdateCars:U=>s(U),onUpdateCoins:U=>i(k=>({...k,coins:U}))}),l==="GAME_OVER"&&I&&v.jsx(lA,{summary:I,onRestart:T,onOpenGarage:()=>c("GARAGE"),onOpenLeaderboard:()=>m(!0)}),f&&v.jsx(hA,{onClose:()=>m(!1)})]})};fu.createRoot(document.getElementById("root")).render(v.jsx(jv.StrictMode,{children:v.jsx(fA,{})}));
