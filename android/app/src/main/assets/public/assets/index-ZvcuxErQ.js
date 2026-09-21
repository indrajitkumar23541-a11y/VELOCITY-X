(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Rv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Sm={exports:{}},kl={},Em={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=Symbol.for("react.element"),bv=Symbol.for("react.portal"),Lv=Symbol.for("react.fragment"),Pv=Symbol.for("react.strict_mode"),Nv=Symbol.for("react.profiler"),Dv=Symbol.for("react.provider"),Iv=Symbol.for("react.context"),Uv=Symbol.for("react.forward_ref"),Ov=Symbol.for("react.suspense"),Fv=Symbol.for("react.memo"),kv=Symbol.for("react.lazy"),Pd=Symbol.iterator;function zv(t){return t===null||typeof t!="object"?null:(t=Pd&&t[Pd]||t["@@iterator"],typeof t=="function"?t:null)}var wm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tm=Object.assign,Am={};function zs(t,e,n){this.props=t,this.context=e,this.refs=Am,this.updater=n||wm}zs.prototype.isReactComponent={};zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cm(){}Cm.prototype=zs.prototype;function _h(t,e,n){this.props=t,this.context=e,this.refs=Am,this.updater=n||wm}var xh=_h.prototype=new Cm;xh.constructor=_h;Tm(xh,zs.prototype);xh.isPureReactComponent=!0;var Nd=Array.isArray,Rm=Object.prototype.hasOwnProperty,yh={current:null},bm={key:!0,ref:!0,__self:!0,__source:!0};function Lm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Rm.call(e,i)&&!bm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Xa,type:t,key:s,ref:a,props:r,_owner:yh.current}}function Bv(t,e){return{$$typeof:Xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xa}function Gv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dd=/\/+/g;function lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Gv(""+t.key):e.toString(36)}function Wo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Xa:case bv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+lc(a,0):i,Nd(r)?(n="",t!=null&&(n=t.replace(Dd,"$&/")+"/"),Wo(r,e,n,"",function(c){return c})):r!=null&&(Mh(r)&&(r=Bv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Dd,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Nd(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+lc(s,o);a+=Wo(s,e,n,l,r)}else if(l=zv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+lc(s,o++),a+=Wo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function to(t,e,n){if(t==null)return t;var i=[],r=0;return Wo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Hv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var on={current:null},jo={transition:null},Vv={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:jo,ReactCurrentOwner:yh};function Pm(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:to,forEach:function(t,e,n){to(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return to(t,function(){e++}),e},toArray:function(t){return to(t,function(e){return e})||[]},only:function(t){if(!Mh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=zs;qe.Fragment=Lv;qe.Profiler=Nv;qe.PureComponent=_h;qe.StrictMode=Pv;qe.Suspense=Ov;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vv;qe.act=Pm;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Tm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=yh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Rm.call(e,l)&&!bm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Xa,type:t.type,key:r,ref:s,props:i,_owner:a}};qe.createContext=function(t){return t={$$typeof:Iv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Dv,_context:t},t.Consumer=t};qe.createElement=Lm;qe.createFactory=function(t){var e=Lm.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:Uv,render:t}};qe.isValidElement=Mh;qe.lazy=function(t){return{$$typeof:kv,_payload:{_status:-1,_result:t},_init:Hv}};qe.memo=function(t,e){return{$$typeof:Fv,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=jo.transition;jo.transition={};try{t()}finally{jo.transition=e}};qe.unstable_act=Pm;qe.useCallback=function(t,e){return on.current.useCallback(t,e)};qe.useContext=function(t){return on.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return on.current.useDeferredValue(t)};qe.useEffect=function(t,e){return on.current.useEffect(t,e)};qe.useId=function(){return on.current.useId()};qe.useImperativeHandle=function(t,e,n){return on.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return on.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return on.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return on.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return on.current.useReducer(t,e,n)};qe.useRef=function(t){return on.current.useRef(t)};qe.useState=function(t){return on.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return on.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return on.current.useTransition()};qe.version="18.3.1";Em.exports=qe;var ve=Em.exports;const Wv=Rv(ve);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv=ve,Xv=Symbol.for("react.element"),qv=Symbol.for("react.fragment"),Yv=Object.prototype.hasOwnProperty,$v=jv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kv={key:!0,ref:!0,__self:!0,__source:!0};function Nm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Yv.call(e,i)&&!Kv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Xv,type:t,key:s,ref:a,props:r,_owner:$v.current}}kl.Fragment=qv;kl.jsx=Nm;kl.jsxs=Nm;Sm.exports=kl;var _=Sm.exports,fu={},Dm={exports:{}},Rn={},Im={exports:{}},Um={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,z){var j=D.length;D.push(z);e:for(;0<j;){var Z=j-1>>>1,J=D[Z];if(0<r(J,z))D[Z]=z,D[j]=J,j=Z;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var z=D[0],j=D.pop();if(j!==z){D[0]=j;e:for(var Z=0,J=D.length,Y=J>>>1;Z<Y;){var Q=2*(Z+1)-1,ce=D[Q],pe=Q+1,_e=D[pe];if(0>r(ce,j))pe<J&&0>r(_e,ce)?(D[Z]=_e,D[pe]=j,Z=pe):(D[Z]=ce,D[Q]=j,Z=Q);else if(pe<J&&0>r(_e,j))D[Z]=_e,D[pe]=j,Z=pe;else break e}}return z}function r(D,z){var j=D.sortIndex-z.sortIndex;return j!==0?j:D.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,d=null,f=3,m=!1,x=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=D)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function M(D){if(y=!1,v(D),!x)if(n(l)!==null)x=!0,F(b);else{var z=n(c);z!==null&&X(M,z.startTime-D)}}function b(D,z){x=!1,y&&(y=!1,u(U),U=-1),m=!0;var j=f;try{for(v(z),d=n(l);d!==null&&(!(d.expirationTime>z)||D&&!k());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,f=d.priorityLevel;var J=Z(d.expirationTime<=z);z=t.unstable_now(),typeof J=="function"?d.callback=J:d===n(l)&&i(l),v(z)}else i(l);d=n(l)}if(d!==null)var Y=!0;else{var Q=n(c);Q!==null&&X(M,Q.startTime-z),Y=!1}return Y}finally{d=null,f=j,m=!1}}var A=!1,C=null,U=-1,E=5,w=-1;function k(){return!(t.unstable_now()-w<E)}function W(){if(C!==null){var D=t.unstable_now();w=D;var z=!0;try{z=C(!0,D)}finally{z?K():(A=!1,C=null)}}else A=!1}var K;if(typeof g=="function")K=function(){g(W)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,I=P.port2;P.port1.onmessage=W,K=function(){I.postMessage(null)}}else K=function(){p(W,0)};function F(D){C=D,A||(A=!0,K())}function X(D,z){U=p(function(){D(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,F(b))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var j=f;f=z;try{return D()}finally{f=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var j=f;f=D;try{return z()}finally{f=j}},t.unstable_scheduleCallback=function(D,z,j){var Z=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Z+j:Z):j=Z,D){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=j+J,D={id:h++,callback:z,priorityLevel:D,startTime:j,expirationTime:J,sortIndex:-1},j>Z?(D.sortIndex=j,e(c,D),n(l)===null&&D===n(c)&&(y?(u(U),U=-1):y=!0,X(M,j-Z))):(D.sortIndex=J,e(l,D),x||m||(x=!0,F(b))),D},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(D){var z=f;return function(){var j=f;f=z;try{return D.apply(this,arguments)}finally{f=j}}}})(Um);Im.exports=Um;var Zv=Im.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv=ve,Cn=Zv;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Om=new Set,Ea={};function Ir(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(Ea[t]=e,t=0;t<e.length;t++)Om.add(e[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=Object.prototype.hasOwnProperty,Jv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Id={},Ud={};function e_(t){return pu.call(Ud,t)?!0:pu.call(Id,t)?!1:Jv.test(t)?Ud[t]=!0:(Id[t]=!0,!1)}function t_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function n_(t,e,n,i){if(e===null||typeof e>"u"||t_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sh=/[\-:]([a-z])/g;function Eh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sh,Eh);Vt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sh,Eh);Vt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sh,Eh);Vt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function wh(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(n_(e,n,r,i)&&(n=null),i||r===null?e_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ai=Qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),Th=Symbol.for("react.strict_mode"),mu=Symbol.for("react.profiler"),Fm=Symbol.for("react.provider"),km=Symbol.for("react.context"),Ah=Symbol.for("react.forward_ref"),gu=Symbol.for("react.suspense"),vu=Symbol.for("react.suspense_list"),Ch=Symbol.for("react.memo"),Di=Symbol.for("react.lazy"),zm=Symbol.for("react.offscreen"),Od=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=Od&&t[Od]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,cc;function sa(t){if(cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cc=e&&e[1]||""}return`
`+cc+t}var uc=!1;function hc(t,e){if(!t||uc)return"";uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?sa(t):""}function i_(t){switch(t.tag){case 5:return sa(t.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function _u(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ns:return"Fragment";case ts:return"Portal";case mu:return"Profiler";case Th:return"StrictMode";case gu:return"Suspense";case vu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case km:return(t.displayName||"Context")+".Consumer";case Fm:return(t._context.displayName||"Context")+".Provider";case Ah:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ch:return e=t.displayName||null,e!==null?e:_u(t.type)||"Memo";case Di:e=t._payload,t=t._init;try{return _u(t(e))}catch{}}return null}function r_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _u(e);case 8:return e===Th?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function s_(t){var e=Bm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function io(t){t._valueTracker||(t._valueTracker=s_(t))}function Gm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Bm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xu(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hm(t,e){e=e.checked,e!=null&&wh(t,"checked",e,!1)}function yu(t,e){Hm(t,e);var n=Ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mu(t,e.type,Ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mu(t,e,n){(e!=="number"||rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var aa=Array.isArray;function gs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Su(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(aa(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ji(n)}}function Vm(t,e){var n=Ji(e.value),i=Ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Bd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ro,jm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},a_=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(t){a_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ca[e]=ca[t]})});function Xm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ca.hasOwnProperty(t)&&ca[t]?(""+e).trim():e+"px"}function qm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Xm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var o_=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wu(t,e){if(e){if(o_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Tu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Au=null;function Rh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cu=null,vs=null,_s=null;function Gd(t){if(t=$a(t)){if(typeof Cu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Vl(e),Cu(t.stateNode,t.type,e))}}function Ym(t){vs?_s?_s.push(t):_s=[t]:vs=t}function $m(){if(vs){var t=vs,e=_s;if(_s=vs=null,Gd(t),e)for(t=0;t<e.length;t++)Gd(e[t])}}function Km(t,e){return t(e)}function Zm(){}var dc=!1;function Qm(t,e,n){if(dc)return t(e,n);dc=!0;try{return Km(t,e,n)}finally{dc=!1,(vs!==null||_s!==null)&&(Zm(),$m())}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var i=Vl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Ru=!1;if(Mi)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{Ru=!1}function l_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ua=!1,sl=null,al=!1,bu=null,c_={onError:function(t){ua=!0,sl=t}};function u_(t,e,n,i,r,s,a,o,l){ua=!1,sl=null,l_.apply(c_,arguments)}function h_(t,e,n,i,r,s,a,o,l){if(u_.apply(this,arguments),ua){if(ua){var c=sl;ua=!1,sl=null}else throw Error(ne(198));al||(al=!0,bu=c)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hd(t){if(Ur(t)!==t)throw Error(ne(188))}function d_(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Hd(r),t;if(s===i)return Hd(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function eg(t){return t=d_(t),t!==null?tg(t):null}function tg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=tg(t);if(e!==null)return e;t=t.sibling}return null}var ng=Cn.unstable_scheduleCallback,Vd=Cn.unstable_cancelCallback,f_=Cn.unstable_shouldYield,p_=Cn.unstable_requestPaint,Tt=Cn.unstable_now,m_=Cn.unstable_getCurrentPriorityLevel,bh=Cn.unstable_ImmediatePriority,ig=Cn.unstable_UserBlockingPriority,ol=Cn.unstable_NormalPriority,g_=Cn.unstable_LowPriority,rg=Cn.unstable_IdlePriority,zl=null,ai=null;function v_(t){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(zl,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:y_,__=Math.log,x_=Math.LN2;function y_(t){return t>>>=0,t===0?32:31-(__(t)/x_|0)|0}var so=64,ao=4194304;function oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=oa(o):(s&=a,s!==0&&(i=oa(s)))}else a=n&~r,a!==0?i=oa(a):s!==0&&(i=oa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function M_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function S_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Zn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=M_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Lu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sg(){var t=so;return so<<=1,!(so&4194240)&&(so=64),t}function fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function E_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Lh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function ag(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var og,Ph,lg,cg,ug,Pu=!1,oo=[],Hi=null,Vi=null,Wi=null,Aa=new Map,Ca=new Map,Ui=[],w_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wd(t,e){switch(t){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":Aa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function Ys(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=$a(e),e!==null&&Ph(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function T_(t,e,n,i,r){switch(e){case"focusin":return Hi=Ys(Hi,t,e,n,i,r),!0;case"dragenter":return Vi=Ys(Vi,t,e,n,i,r),!0;case"mouseover":return Wi=Ys(Wi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Aa.set(s,Ys(Aa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ca.set(s,Ys(Ca.get(s)||null,t,e,n,i,r)),!0}return!1}function hg(t){var e=_r(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=Jm(n),e!==null){t.blockedOn=e,ug(t.priority,function(){lg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Au=i,n.target.dispatchEvent(i),Au=null}else return e=$a(n),e!==null&&Ph(e),t.blockedOn=n,!1;e.shift()}return!0}function jd(t,e,n){Xo(t)&&n.delete(e)}function A_(){Pu=!1,Hi!==null&&Xo(Hi)&&(Hi=null),Vi!==null&&Xo(Vi)&&(Vi=null),Wi!==null&&Xo(Wi)&&(Wi=null),Aa.forEach(jd),Ca.forEach(jd)}function $s(t,e){t.blockedOn===e&&(t.blockedOn=null,Pu||(Pu=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,A_)))}function Ra(t){function e(r){return $s(r,t)}if(0<oo.length){$s(oo[0],t);for(var n=1;n<oo.length;n++){var i=oo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Hi!==null&&$s(Hi,t),Vi!==null&&$s(Vi,t),Wi!==null&&$s(Wi,t),Aa.forEach(e),Ca.forEach(e),n=0;n<Ui.length;n++)i=Ui[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ui.length&&(n=Ui[0],n.blockedOn===null);)hg(n),n.blockedOn===null&&Ui.shift()}var xs=Ai.ReactCurrentBatchConfig,cl=!0;function C_(t,e,n,i){var r=Qe,s=xs.transition;xs.transition=null;try{Qe=1,Nh(t,e,n,i)}finally{Qe=r,xs.transition=s}}function R_(t,e,n,i){var r=Qe,s=xs.transition;xs.transition=null;try{Qe=4,Nh(t,e,n,i)}finally{Qe=r,xs.transition=s}}function Nh(t,e,n,i){if(cl){var r=Nu(t,e,n,i);if(r===null)Ec(t,e,i,ul,n),Wd(t,i);else if(T_(r,t,e,n,i))i.stopPropagation();else if(Wd(t,i),e&4&&-1<w_.indexOf(t)){for(;r!==null;){var s=$a(r);if(s!==null&&og(s),s=Nu(t,e,n,i),s===null&&Ec(t,e,i,ul,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ec(t,e,i,null,n)}}var ul=null;function Nu(t,e,n,i){if(ul=null,t=Rh(i),t=_r(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ul=t,null}function dg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(m_()){case bh:return 1;case ig:return 4;case ol:case g_:return 16;case rg:return 536870912;default:return 16}default:return 16}}var Fi=null,Dh=null,qo=null;function fg(){if(qo)return qo;var t,e=Dh,n=e.length,i,r="value"in Fi?Fi.value:Fi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return qo=r.slice(t,1<i?1-i:void 0)}function Yo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function Xd(){return!1}function bn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lo:Xd,this.isPropagationStopped=Xd,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),e}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ih=bn(Bs),Ya=_t({},Bs,{view:0,detail:0}),b_=bn(Ya),pc,mc,Ks,Bl=_t({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(pc=t.screenX-Ks.screenX,mc=t.screenY-Ks.screenY):mc=pc=0,Ks=t),pc)},movementY:function(t){return"movementY"in t?t.movementY:mc}}),qd=bn(Bl),L_=_t({},Bl,{dataTransfer:0}),P_=bn(L_),N_=_t({},Ya,{relatedTarget:0}),gc=bn(N_),D_=_t({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),I_=bn(D_),U_=_t({},Bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),O_=bn(U_),F_=_t({},Bs,{data:0}),Yd=bn(F_),k_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B_[t])?!!e[t]:!1}function Uh(){return G_}var H_=_t({},Ya,{key:function(t){if(t.key){var e=k_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?z_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uh,charCode:function(t){return t.type==="keypress"?Yo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),V_=bn(H_),W_=_t({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=bn(W_),j_=_t({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uh}),X_=bn(j_),q_=_t({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y_=bn(q_),$_=_t({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K_=bn($_),Z_=[9,13,27,32],Oh=Mi&&"CompositionEvent"in window,ha=null;Mi&&"documentMode"in document&&(ha=document.documentMode);var Q_=Mi&&"TextEvent"in window&&!ha,pg=Mi&&(!Oh||ha&&8<ha&&11>=ha),Kd=" ",Zd=!1;function mg(t,e){switch(t){case"keyup":return Z_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function J_(t,e){switch(t){case"compositionend":return gg(e);case"keypress":return e.which!==32?null:(Zd=!0,Kd);case"textInput":return t=e.data,t===Kd&&Zd?null:t;default:return null}}function ex(t,e){if(is)return t==="compositionend"||!Oh&&mg(t,e)?(t=fg(),qo=Dh=Fi=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pg&&e.locale!=="ko"?null:e.data;default:return null}}var tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tx[t.type]:e==="textarea"}function vg(t,e,n,i){Ym(i),e=hl(e,"onChange"),0<e.length&&(n=new Ih("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var da=null,ba=null;function nx(t){Rg(t,0)}function Gl(t){var e=as(t);if(Gm(e))return t}function ix(t,e){if(t==="change")return e}var _g=!1;if(Mi){var vc;if(Mi){var _c="oninput"in document;if(!_c){var Jd=document.createElement("div");Jd.setAttribute("oninput","return;"),_c=typeof Jd.oninput=="function"}vc=_c}else vc=!1;_g=vc&&(!document.documentMode||9<document.documentMode)}function ef(){da&&(da.detachEvent("onpropertychange",xg),ba=da=null)}function xg(t){if(t.propertyName==="value"&&Gl(ba)){var e=[];vg(e,ba,t,Rh(t)),Qm(nx,e)}}function rx(t,e,n){t==="focusin"?(ef(),da=e,ba=n,da.attachEvent("onpropertychange",xg)):t==="focusout"&&ef()}function sx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gl(ba)}function ax(t,e){if(t==="click")return Gl(e)}function ox(t,e){if(t==="input"||t==="change")return Gl(e)}function lx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:lx;function La(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!pu.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function tf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nf(t,e){var n=tf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tf(n)}}function yg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mg(){for(var t=window,e=rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=rl(t.document)}return e}function Fh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cx(t){var e=Mg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yg(n.ownerDocument.documentElement,n)){if(i!==null&&Fh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=nf(n,s);var a=nf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ux=Mi&&"documentMode"in document&&11>=document.documentMode,rs=null,Du=null,fa=null,Iu=!1;function rf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Iu||rs==null||rs!==rl(i)||(i=rs,"selectionStart"in i&&Fh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fa&&La(fa,i)||(fa=i,i=hl(Du,"onSelect"),0<i.length&&(e=new Ih("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=rs)))}function co(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},xc={},Sg={};Mi&&(Sg=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function Hl(t){if(xc[t])return xc[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sg)return xc[t]=e[n];return t}var Eg=Hl("animationend"),wg=Hl("animationiteration"),Tg=Hl("animationstart"),Ag=Hl("transitionend"),Cg=new Map,sf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(t,e){Cg.set(t,e),Ir(e,[t])}for(var yc=0;yc<sf.length;yc++){var Mc=sf[yc],hx=Mc.toLowerCase(),dx=Mc[0].toUpperCase()+Mc.slice(1);nr(hx,"on"+dx)}nr(Eg,"onAnimationEnd");nr(wg,"onAnimationIteration");nr(Tg,"onAnimationStart");nr("dblclick","onDoubleClick");nr("focusin","onFocus");nr("focusout","onBlur");nr(Ag,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fx=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function af(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,h_(i,e,void 0,t),t.currentTarget=null}function Rg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;af(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;af(r,o,c),s=l}}}if(al)throw t=bu,al=!1,bu=null,t}function at(t,e){var n=e[zu];n===void 0&&(n=e[zu]=new Set);var i=t+"__bubble";n.has(i)||(bg(e,t,2,!1),n.add(i))}function Sc(t,e,n){var i=0;e&&(i|=4),bg(n,t,i,e)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Pa(t){if(!t[uo]){t[uo]=!0,Om.forEach(function(n){n!=="selectionchange"&&(fx.has(n)||Sc(n,!1,t),Sc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[uo]||(e[uo]=!0,Sc("selectionchange",!1,e))}}function bg(t,e,n,i){switch(dg(e)){case 1:var r=C_;break;case 4:r=R_;break;default:r=Nh}n=r.bind(null,e,n,t),r=void 0,!Ru||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ec(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=_r(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Qm(function(){var c=s,h=Rh(n),d=[];e:{var f=Cg.get(t);if(f!==void 0){var m=Ih,x=t;switch(t){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":m=V_;break;case"focusin":x="focus",m=gc;break;case"focusout":x="blur",m=gc;break;case"beforeblur":case"afterblur":m=gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=P_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=X_;break;case Eg:case wg:case Tg:m=I_;break;case Ag:m=Y_;break;case"scroll":m=b_;break;case"wheel":m=K_;break;case"copy":case"cut":case"paste":m=O_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=$d}var y=(e&4)!==0,p=!y&&t==="scroll",u=y?f!==null?f+"Capture":null:f;y=[];for(var g=c,v;g!==null;){v=g;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,u!==null&&(M=Ta(g,u),M!=null&&y.push(Na(g,M,v)))),p)break;g=g.return}0<y.length&&(f=new m(f,x,null,n,h),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Au&&(x=n.relatedTarget||n.fromElement)&&(_r(x)||x[Si]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?_r(x):null,x!==null&&(p=Ur(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(y=qd,M="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=$d,M="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?f:as(m),v=x==null?f:as(x),f=new y(M,g+"leave",m,n,h),f.target=p,f.relatedTarget=v,M=null,_r(h)===c&&(y=new y(u,g+"enter",x,n,h),y.target=v,y.relatedTarget=p,M=y),p=M,m&&x)t:{for(y=m,u=x,g=0,v=y;v;v=Fr(v))g++;for(v=0,M=u;M;M=Fr(M))v++;for(;0<g-v;)y=Fr(y),g--;for(;0<v-g;)u=Fr(u),v--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=Fr(y),u=Fr(u)}y=null}else y=null;m!==null&&of(d,f,m,y,!1),x!==null&&p!==null&&of(d,p,x,y,!0)}}e:{if(f=c?as(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var b=ix;else if(Qd(f))if(_g)b=ox;else{b=sx;var A=rx}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=ax);if(b&&(b=b(t,c))){vg(d,b,n,h);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Mu(f,"number",f.value)}switch(A=c?as(c):window,t){case"focusin":(Qd(A)||A.contentEditable==="true")&&(rs=A,Du=c,fa=null);break;case"focusout":fa=Du=rs=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,rf(d,n,h);break;case"selectionchange":if(ux)break;case"keydown":case"keyup":rf(d,n,h)}var C;if(Oh)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else is?mg(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(pg&&n.locale!=="ko"&&(is||U!=="onCompositionStart"?U==="onCompositionEnd"&&is&&(C=fg()):(Fi=h,Dh="value"in Fi?Fi.value:Fi.textContent,is=!0)),A=hl(c,U),0<A.length&&(U=new Yd(U,t,null,n,h),d.push({event:U,listeners:A}),C?U.data=C:(C=gg(n),C!==null&&(U.data=C)))),(C=Q_?J_(t,n):ex(t,n))&&(c=hl(c,"onBeforeInput"),0<c.length&&(h=new Yd("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=C))}Rg(d,e)})}function Na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ta(t,n),s!=null&&i.unshift(Na(t,s,r)),s=Ta(t,e),s!=null&&i.push(Na(t,s,r))),t=t.return}return i}function Fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function of(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ta(n,s),l!=null&&a.unshift(Na(n,l,o))):r||(l=Ta(n,s),l!=null&&a.push(Na(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var px=/\r\n?/g,mx=/\u0000|\uFFFD/g;function lf(t){return(typeof t=="string"?t:""+t).replace(px,`
`).replace(mx,"")}function ho(t,e,n){if(e=lf(e),lf(t)!==e&&n)throw Error(ne(425))}function dl(){}var Uu=null,Ou=null;function Fu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ku=typeof setTimeout=="function"?setTimeout:void 0,gx=typeof clearTimeout=="function"?clearTimeout:void 0,cf=typeof Promise=="function"?Promise:void 0,vx=typeof queueMicrotask=="function"?queueMicrotask:typeof cf<"u"?function(t){return cf.resolve(null).then(t).catch(_x)}:ku;function _x(t){setTimeout(function(){throw t})}function wc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ra(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ra(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function uf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),ri="__reactFiber$"+Gs,Da="__reactProps$"+Gs,Si="__reactContainer$"+Gs,zu="__reactEvents$"+Gs,xx="__reactListeners$"+Gs,yx="__reactHandles$"+Gs;function _r(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Si]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=uf(t);t!==null;){if(n=t[ri])return n;t=uf(t)}return e}t=n,n=t.parentNode}return null}function $a(t){return t=t[ri]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Vl(t){return t[Da]||null}var Bu=[],os=-1;function ir(t){return{current:t}}function ut(t){0>os||(t.current=Bu[os],Bu[os]=null,os--)}function st(t,e){os++,Bu[os]=t.current,t.current=e}var er={},Zt=ir(er),dn=ir(!1),Cr=er;function As(t,e){var n=t.type.contextTypes;if(!n)return er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function fl(){ut(dn),ut(Zt)}function hf(t,e,n){if(Zt.current!==er)throw Error(ne(168));st(Zt,e),st(dn,n)}function Lg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,r_(t)||"Unknown",r));return _t({},n,i)}function pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Cr=Zt.current,st(Zt,t),st(dn,dn.current),!0}function df(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Lg(t,e,Cr),i.__reactInternalMemoizedMergedChildContext=t,ut(dn),ut(Zt),st(Zt,t)):ut(dn),st(dn,n)}var gi=null,Wl=!1,Tc=!1;function Pg(t){gi===null?gi=[t]:gi.push(t)}function Mx(t){Wl=!0,Pg(t)}function rr(){if(!Tc&&gi!==null){Tc=!0;var t=0,e=Qe;try{var n=gi;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,Wl=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),ng(bh,rr),r}finally{Qe=e,Tc=!1}}return null}var ls=[],cs=0,ml=null,gl=0,Nn=[],Dn=0,Rr=null,vi=1,_i="";function dr(t,e){ls[cs++]=gl,ls[cs++]=ml,ml=t,gl=e}function Ng(t,e,n){Nn[Dn++]=vi,Nn[Dn++]=_i,Nn[Dn++]=Rr,Rr=t;var i=vi;t=_i;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var s=32-Zn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,vi=1<<32-Zn(e)+r|n<<r|i,_i=s+t}else vi=1<<s|n<<r|i,_i=t}function kh(t){t.return!==null&&(dr(t,1),Ng(t,1,0))}function zh(t){for(;t===ml;)ml=ls[--cs],ls[cs]=null,gl=ls[--cs],ls[cs]=null;for(;t===Rr;)Rr=Nn[--Dn],Nn[Dn]=null,_i=Nn[--Dn],Nn[Dn]=null,vi=Nn[--Dn],Nn[Dn]=null}var Tn=null,wn=null,ht=!1,qn=null;function Dg(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ff(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,wn=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Rr!==null?{id:vi,overflow:_i}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,wn=null,!0):!1;default:return!1}}function Gu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hu(t){if(ht){var e=wn;if(e){var n=e;if(!ff(t,e)){if(Gu(t))throw Error(ne(418));e=ji(n.nextSibling);var i=Tn;e&&ff(t,e)?Dg(i,n):(t.flags=t.flags&-4097|2,ht=!1,Tn=t)}}else{if(Gu(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ht=!1,Tn=t}}}function pf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function fo(t){if(t!==Tn)return!1;if(!ht)return pf(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fu(t.type,t.memoizedProps)),e&&(e=wn)){if(Gu(t))throw Ig(),Error(ne(418));for(;e;)Dg(t,e),e=ji(e.nextSibling)}if(pf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=Tn?ji(t.stateNode.nextSibling):null;return!0}function Ig(){for(var t=wn;t;)t=ji(t.nextSibling)}function Cs(){wn=Tn=null,ht=!1}function Bh(t){qn===null?qn=[t]:qn.push(t)}var Sx=Ai.ReactCurrentBatchConfig;function Zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function po(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mf(t){var e=t._init;return e(t._payload)}function Ug(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=$i(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,v,M){return g===null||g.tag!==6?(g=Nc(v,u.mode,M),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,M){var b=v.type;return b===ns?h(u,g,v.props.children,M,v.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Di&&mf(b)===g.type)?(M=r(g,v.props),M.ref=Zs(u,g,v),M.return=u,M):(M=tl(v.type,v.key,v.props,null,u.mode,M),M.ref=Zs(u,g,v),M.return=u,M)}function c(u,g,v,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Dc(v,u.mode,M),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function h(u,g,v,M,b){return g===null||g.tag!==7?(g=Er(v,u.mode,M,b),g.return=u,g):(g=r(g,v),g.return=u,g)}function d(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Nc(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case no:return v=tl(g.type,g.key,g.props,null,u.mode,v),v.ref=Zs(u,null,g),v.return=u,v;case ts:return g=Dc(g,u.mode,v),g.return=u,g;case Di:var M=g._init;return d(u,M(g._payload),v)}if(aa(g)||Xs(g))return g=Er(g,u.mode,v,null),g.return=u,g;po(u,g)}return null}function f(u,g,v,M){var b=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:o(u,g,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case no:return v.key===b?l(u,g,v,M):null;case ts:return v.key===b?c(u,g,v,M):null;case Di:return b=v._init,f(u,g,b(v._payload),M)}if(aa(v)||Xs(v))return b!==null?null:h(u,g,v,M,null);po(u,v)}return null}function m(u,g,v,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(v)||null,o(g,u,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case no:return u=u.get(M.key===null?v:M.key)||null,l(g,u,M,b);case ts:return u=u.get(M.key===null?v:M.key)||null,c(g,u,M,b);case Di:var A=M._init;return m(u,g,v,A(M._payload),b)}if(aa(M)||Xs(M))return u=u.get(v)||null,h(g,u,M,b,null);po(g,M)}return null}function x(u,g,v,M){for(var b=null,A=null,C=g,U=g=0,E=null;C!==null&&U<v.length;U++){C.index>U?(E=C,C=null):E=C.sibling;var w=f(u,C,v[U],M);if(w===null){C===null&&(C=E);break}t&&C&&w.alternate===null&&e(u,C),g=s(w,g,U),A===null?b=w:A.sibling=w,A=w,C=E}if(U===v.length)return n(u,C),ht&&dr(u,U),b;if(C===null){for(;U<v.length;U++)C=d(u,v[U],M),C!==null&&(g=s(C,g,U),A===null?b=C:A.sibling=C,A=C);return ht&&dr(u,U),b}for(C=i(u,C);U<v.length;U++)E=m(C,u,U,v[U],M),E!==null&&(t&&E.alternate!==null&&C.delete(E.key===null?U:E.key),g=s(E,g,U),A===null?b=E:A.sibling=E,A=E);return t&&C.forEach(function(k){return e(u,k)}),ht&&dr(u,U),b}function y(u,g,v,M){var b=Xs(v);if(typeof b!="function")throw Error(ne(150));if(v=b.call(v),v==null)throw Error(ne(151));for(var A=b=null,C=g,U=g=0,E=null,w=v.next();C!==null&&!w.done;U++,w=v.next()){C.index>U?(E=C,C=null):E=C.sibling;var k=f(u,C,w.value,M);if(k===null){C===null&&(C=E);break}t&&C&&k.alternate===null&&e(u,C),g=s(k,g,U),A===null?b=k:A.sibling=k,A=k,C=E}if(w.done)return n(u,C),ht&&dr(u,U),b;if(C===null){for(;!w.done;U++,w=v.next())w=d(u,w.value,M),w!==null&&(g=s(w,g,U),A===null?b=w:A.sibling=w,A=w);return ht&&dr(u,U),b}for(C=i(u,C);!w.done;U++,w=v.next())w=m(C,u,U,w.value,M),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?U:w.key),g=s(w,g,U),A===null?b=w:A.sibling=w,A=w);return t&&C.forEach(function(W){return e(u,W)}),ht&&dr(u,U),b}function p(u,g,v,M){if(typeof v=="object"&&v!==null&&v.type===ns&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case no:e:{for(var b=v.key,A=g;A!==null;){if(A.key===b){if(b=v.type,b===ns){if(A.tag===7){n(u,A.sibling),g=r(A,v.props.children),g.return=u,u=g;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Di&&mf(b)===A.type){n(u,A.sibling),g=r(A,v.props),g.ref=Zs(u,A,v),g.return=u,u=g;break e}n(u,A);break}else e(u,A);A=A.sibling}v.type===ns?(g=Er(v.props.children,u.mode,M,v.key),g.return=u,u=g):(M=tl(v.type,v.key,v.props,null,u.mode,M),M.ref=Zs(u,g,v),M.return=u,u=M)}return a(u);case ts:e:{for(A=v.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Dc(v,u.mode,M),g.return=u,u=g}return a(u);case Di:return A=v._init,p(u,g,A(v._payload),M)}if(aa(v))return x(u,g,v,M);if(Xs(v))return y(u,g,v,M);po(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=Nc(v,u.mode,M),g.return=u,u=g),a(u)):n(u,g)}return p}var Rs=Ug(!0),Og=Ug(!1),vl=ir(null),_l=null,us=null,Gh=null;function Hh(){Gh=us=_l=null}function Vh(t){var e=vl.current;ut(vl),t._currentValue=e}function Vu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){_l=t,Gh=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(Gh!==t)if(t={context:t,memoizedValue:e,next:null},us===null){if(_l===null)throw Error(ne(308));us=t,_l.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return e}var xr=null;function Wh(t){xr===null?xr=[t]:xr.push(t)}function Fg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Wh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ii=!1;function jh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,Wh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function $o(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lh(t,n)}}function gf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,i){var r=t.updateQueue;Ii=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,h=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,y=o;switch(f=e,m=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){d=x.call(m,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(m,d,f):x,f==null)break e;d=_t({},d,f);break e;case 2:Ii=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=m,l=d):h=h.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Lr|=a,t.lanes=a,t.memoizedState=d}}function vf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Ka={},oi=ir(Ka),Ia=ir(Ka),Ua=ir(Ka);function yr(t){if(t===Ka)throw Error(ne(174));return t}function Xh(t,e){switch(st(Ua,e),st(Ia,t),st(oi,Ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Eu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Eu(e,t)}ut(oi),st(oi,e)}function bs(){ut(oi),ut(Ia),ut(Ua)}function zg(t){yr(Ua.current);var e=yr(oi.current),n=Eu(e,t.type);e!==n&&(st(Ia,t),st(oi,n))}function qh(t){Ia.current===t&&(ut(oi),ut(Ia))}var gt=ir(0);function yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ac=[];function Yh(){for(var t=0;t<Ac.length;t++)Ac[t]._workInProgressVersionPrimary=null;Ac.length=0}var Ko=Ai.ReactCurrentDispatcher,Cc=Ai.ReactCurrentBatchConfig,br=0,vt=null,bt=null,Ot=null,Ml=!1,pa=!1,Oa=0,Ex=0;function jt(){throw Error(ne(321))}function $h(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function Kh(t,e,n,i,r,s){if(br=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ko.current=t===null||t.memoizedState===null?Cx:Rx,t=n(i,r),pa){s=0;do{if(pa=!1,Oa=0,25<=s)throw Error(ne(301));s+=1,Ot=bt=null,e.updateQueue=null,Ko.current=bx,t=n(i,r)}while(pa)}if(Ko.current=Sl,e=bt!==null&&bt.next!==null,br=0,Ot=bt=vt=null,Ml=!1,e)throw Error(ne(300));return t}function Zh(){var t=Oa!==0;return Oa=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?vt.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Bn(){if(bt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ot===null?vt.memoizedState:Ot.next;if(e!==null)Ot=e,bt=t;else{if(t===null)throw Error(ne(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ot===null?vt.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Fa(t,e){return typeof e=="function"?e(t):e}function Rc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((br&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,vt.lanes|=h,Lr|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Jn(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,vt.lanes|=s,Lr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Jn(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Bg(){}function Gg(t,e){var n=vt,i=Bn(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,hn=!0),i=i.queue,Qh(Wg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,ka(9,Vg.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(ne(349));br&30||Hg(n,e,r)}return r}function Hg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vg(t,e,n,i){e.value=n,e.getSnapshot=i,jg(e)&&Xg(t)}function Wg(t,e,n){return n(function(){jg(e)&&Xg(t)})}function jg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function Xg(t){var e=Ei(t,1);e!==null&&Qn(e,t,1,-1)}function _f(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},e.queue=t,t=t.dispatch=Ax.bind(null,vt,t),[e.memoizedState,t]}function ka(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function qg(){return Bn().memoizedState}function Zo(t,e,n,i){var r=ni();vt.flags|=t,r.memoizedState=ka(1|e,n,void 0,i===void 0?null:i)}function jl(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var a=bt.memoizedState;if(s=a.destroy,i!==null&&$h(i,a.deps)){r.memoizedState=ka(e,n,s,i);return}}vt.flags|=t,r.memoizedState=ka(1|e,n,s,i)}function xf(t,e){return Zo(8390656,8,t,e)}function Qh(t,e){return jl(2048,8,t,e)}function Yg(t,e){return jl(4,2,t,e)}function $g(t,e){return jl(4,4,t,e)}function Kg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zg(t,e,n){return n=n!=null?n.concat([t]):null,jl(4,4,Kg.bind(null,e,t),n)}function Jh(){}function Qg(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&$h(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Jg(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&$h(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function e0(t,e,n){return br&21?(Jn(n,e)||(n=sg(),vt.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function wx(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=Cc.transition;Cc.transition={};try{t(!1),e()}finally{Qe=n,Cc.transition=i}}function t0(){return Bn().memoizedState}function Tx(t,e,n){var i=Yi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},n0(t))i0(e,n);else if(n=Fg(t,e,n,i),n!==null){var r=an();Qn(n,t,i,r),r0(n,e,i)}}function Ax(t,e,n){var i=Yi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(n0(t))i0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Jn(o,a)){var l=e.interleaved;l===null?(r.next=r,Wh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Fg(t,e,r,i),n!==null&&(r=an(),Qn(n,t,i,r),r0(n,e,i))}}function n0(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function i0(t,e){pa=Ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function r0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lh(t,n)}}var Sl={readContext:zn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},Cx={readContext:zn,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:xf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zo(4194308,4,Kg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zo(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Tx.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:_f,useDebugValue:Jh,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=_f(!1),e=t[0];return t=wx.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=ni();if(ht){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Ft===null)throw Error(ne(349));br&30||Hg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,xf(Wg.bind(null,i,s,t),[t]),i.flags|=2048,ka(9,Vg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=Ft.identifierPrefix;if(ht){var n=_i,i=vi;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ex++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Rx={readContext:zn,useCallback:Qg,useContext:zn,useEffect:Qh,useImperativeHandle:Zg,useInsertionEffect:Yg,useLayoutEffect:$g,useMemo:Jg,useReducer:Rc,useRef:qg,useState:function(){return Rc(Fa)},useDebugValue:Jh,useDeferredValue:function(t){var e=Bn();return e0(e,bt.memoizedState,t)},useTransition:function(){var t=Rc(Fa)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:Bg,useSyncExternalStore:Gg,useId:t0,unstable_isNewReconciler:!1},bx={readContext:zn,useCallback:Qg,useContext:zn,useEffect:Qh,useImperativeHandle:Zg,useInsertionEffect:Yg,useLayoutEffect:$g,useMemo:Jg,useReducer:bc,useRef:qg,useState:function(){return bc(Fa)},useDebugValue:Jh,useDeferredValue:function(t){var e=Bn();return bt===null?e.memoizedState=t:e0(e,bt.memoizedState,t)},useTransition:function(){var t=bc(Fa)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:Bg,useSyncExternalStore:Gg,useId:t0,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xl={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=Yi(t),s=yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(Qn(e,t,r,i),$o(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=Yi(t),s=yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(Qn(e,t,r,i),$o(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=Yi(t),r=yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Xi(t,r,i),e!==null&&(Qn(e,t,i,n),$o(e,t,i))}};function yf(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!La(n,i)||!La(r,s):!0}function s0(t,e,n){var i=!1,r=er,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=fn(e)?Cr:Zt.current,i=e.contextTypes,s=(i=i!=null)?As(t,r):er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Xl.enqueueReplaceState(e,e.state,null)}function ju(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},jh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=fn(e)?Cr:Zt.current,r.context=As(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Xl.enqueueReplaceState(r,r.state,null),xl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,e){try{var n="",i=e;do n+=i_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Lx=typeof WeakMap=="function"?WeakMap:Map;function a0(t,e,n){n=yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){wl||(wl=!0,nh=i),Xu(t,e)},n}function o0(t,e,n){n=yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Xu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xu(t,e),typeof i!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Sf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Lx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Wx.bind(null,t,e,n),e.then(t,t))}function Ef(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yi(-1,1),e.tag=2,Xi(n,e,1))),n.lanes|=1),t)}var Px=Ai.ReactCurrentOwner,hn=!1;function rn(t,e,n,i){e.child=t===null?Og(e,null,n,i):Rs(e,t.child,n,i)}function Tf(t,e,n,i,r){n=n.render;var s=e.ref;return ys(e,r),i=Kh(t,e,n,i,s,r),n=Zh(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(ht&&n&&kh(e),e.flags|=1,rn(t,e,i,r),e.child)}function Af(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!od(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,l0(t,e,s,i,r)):(t=tl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(a,i)&&t.ref===e.ref)return wi(t,e,r)}return e.flags|=1,t=$i(s,i),t.ref=e.ref,t.return=e,e.child=t}function l0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(La(s,i)&&t.ref===e.ref)if(hn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,wi(t,e,r)}return qu(t,e,n,i,r)}function c0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(ds,Mn),Mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(ds,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(ds,Mn),Mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(ds,Mn),Mn|=i;return rn(t,e,r,n),e.child}function u0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qu(t,e,n,i,r){var s=fn(n)?Cr:Zt.current;return s=As(e,s),ys(e,r),n=Kh(t,e,n,i,s,r),i=Zh(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(ht&&i&&kh(e),e.flags|=1,rn(t,e,n,r),e.child)}function Cf(t,e,n,i,r){if(fn(n)){var s=!0;pl(e)}else s=!1;if(ys(e,r),e.stateNode===null)Qo(t,e),s0(e,n,i),ju(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=zn(c):(c=fn(n)?Cr:Zt.current,c=As(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Mf(e,a,i,c),Ii=!1;var f=e.memoizedState;a.state=f,xl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||dn.current||Ii?(typeof h=="function"&&(Wu(e,n,h,i),l=e.memoizedState),(o=Ii||yf(e,n,o,i,f,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,kg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:jn(e.type,o),a.props=c,d=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=fn(n)?Cr:Zt.current,l=As(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||f!==l)&&Mf(e,a,i,l),Ii=!1,f=e.memoizedState,a.state=f,xl(e,i,a,r);var x=e.memoizedState;o!==d||f!==x||dn.current||Ii?(typeof m=="function"&&(Wu(e,n,m,i),x=e.memoizedState),(c=Ii||yf(e,n,c,i,f,x,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Yu(t,e,n,i,s,r)}function Yu(t,e,n,i,r,s){u0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&df(e,n,!1),wi(t,e,s);i=e.stateNode,Px.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,o,s)):rn(t,e,o,s),e.memoizedState=i.state,r&&df(e,n,!0),e.child}function h0(t){var e=t.stateNode;e.pendingContext?hf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hf(t,e.context,!1),Xh(t,e.containerInfo)}function Rf(t,e,n,i,r){return Cs(),Bh(r),e.flags|=256,rn(t,e,n,i),e.child}var $u={dehydrated:null,treeContext:null,retryLane:0};function Ku(t){return{baseLanes:t,cachePool:null,transitions:null}}function d0(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(gt,r&1),t===null)return Hu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=$l(a,i,0,null),t=Er(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ku(n),e.memoizedState=$u,t):ed(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Nx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=$i(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=$i(o,s):(s=Er(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Ku(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=$u,i}return s=t.child,t=s.sibling,i=$i(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ed(t,e){return e=$l({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mo(t,e,n,i){return i!==null&&Bh(i),Rs(e,t.child,null,n),t=ed(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Nx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Lc(Error(ne(422))),mo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=$l({mode:"visible",children:i.children},r,0,null),s=Er(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Rs(e,t.child,null,a),e.child.memoizedState=Ku(a),e.memoizedState=$u,s);if(!(e.mode&1))return mo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=Lc(s,i,void 0),mo(t,e,a,i)}if(o=(a&t.childLanes)!==0,hn||o){if(i=Ft,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ei(t,r),Qn(i,t,r,-1))}return ad(),i=Lc(Error(ne(421))),mo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=jx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,wn=ji(r.nextSibling),Tn=e,ht=!0,qn=null,t!==null&&(Nn[Dn++]=vi,Nn[Dn++]=_i,Nn[Dn++]=Rr,vi=t.id,_i=t.overflow,Rr=e),e=ed(e,i.children),e.flags|=4096,e)}function bf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Vu(t.return,e,n)}function Pc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function f0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bf(t,n,e);else if(t.tag===19)bf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&yl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Pc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&yl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Pc(e,!0,n,null,s);break;case"together":Pc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=$i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Dx(t,e,n){switch(e.tag){case 3:h0(e),Cs();break;case 5:zg(e);break;case 1:fn(e.type)&&pl(e);break;case 4:Xh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(vl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?d0(t,e,n):(st(gt,gt.current&1),t=wi(t,e,n),t!==null?t.sibling:null);st(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return f0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,c0(t,e,n)}return wi(t,e,n)}var p0,Zu,m0,g0;p0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zu=function(){};m0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,yr(oi.current);var s=null;switch(n){case"input":r=xu(t,r),i=xu(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=Su(t,r),i=Su(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=dl)}wu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ea.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r?.[c],i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};g0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Qs(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ix(t,e,n){var i=e.pendingProps;switch(zh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return fn(e.type)&&fl(),Xt(e),null;case 3:return i=e.stateNode,bs(),ut(dn),ut(Zt),Yh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(sh(qn),qn=null))),Zu(t,e),Xt(e),null;case 5:qh(e);var r=yr(Ua.current);if(n=e.type,t!==null&&e.stateNode!=null)m0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Xt(e),null}if(t=yr(oi.current),fo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ri]=e,i[Da]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<la.length;r++)at(la[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":Fd(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":zd(i,s),at("invalid",i)}wu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",""+o]):Ea.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&at("scroll",i)}switch(n){case"input":io(i),kd(i,s,!0);break;case"textarea":io(i),Bd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=dl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ri]=e,t[Da]=i,p0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Tu(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<la.length;r++)at(la[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":Fd(t,i),r=xu(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),at("invalid",t);break;case"textarea":zd(t,i),r=Su(t,i),at("invalid",t);break;default:r=i}wu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?qm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&jm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wa(t,l):typeof l=="number"&&wa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&wh(t,s,l,a))}switch(n){case"input":io(t),kd(t,i,!1);break;case"textarea":io(t),Bd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?gs(t,!!i.multiple,s,!1):i.defaultValue!=null&&gs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=dl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)g0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=yr(Ua.current),yr(oi.current),fo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:ho(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return Xt(e),null;case 13:if(ut(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&wn!==null&&e.mode&1&&!(e.flags&128))Ig(),Cs(),e.flags|=98560,s=!1;else if(s=fo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[ri]=e}else Cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else qn!==null&&(sh(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Lt===0&&(Lt=3):ad())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return bs(),Zu(t,e),t===null&&Pa(e.stateNode.containerInfo),Xt(e),null;case 10:return Vh(e.type._context),Xt(e),null;case 17:return fn(e.type)&&fl(),Xt(e),null;case 19:if(ut(gt),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Qs(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=yl(t),a!==null){for(e.flags|=128,Qs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>Ps&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=yl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ht)return Xt(e),null}else 2*Tt()-s.renderingStartTime>Ps&&n!==1073741824&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=gt.current,st(gt,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return sd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function Ux(t,e){switch(zh(e),e.tag){case 1:return fn(e.type)&&fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return bs(),ut(dn),ut(Zt),Yh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qh(e),null;case 13:if(ut(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(gt),null;case 4:return bs(),null;case 10:return Vh(e.type._context),null;case 22:case 23:return sd(),null;case 24:return null;default:return null}}var go=!1,$t=!1,Ox=typeof WeakSet=="function"?WeakSet:Set,de=null;function hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function Qu(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var Lf=!1;function Fx(t,e){if(Uu=cl,t=Mg(),Fh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,d=t,f=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++h===i&&(l=a),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ou={focusedElem:t,selectionRange:n},cl=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,p=x.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:jn(e.type,y),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){Mt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return x=Lf,Lf=!1,x}function ma(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Qu(e,n,s)}r=r.next}while(r!==i)}}function ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ju(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function v0(t){var e=t.alternate;e!==null&&(t.alternate=null,v0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[Da],delete e[zu],delete e[xx],delete e[yx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _0(t){return t.tag===5||t.tag===3||t.tag===4}function Pf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function eh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=dl));else if(i!==4&&(t=t.child,t!==null))for(eh(t,e,n),t=t.sibling;t!==null;)eh(t,e,n),t=t.sibling}function th(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(th(t,e,n),t=t.sibling;t!==null;)th(t,e,n),t=t.sibling}var Bt=null,Xn=!1;function Ci(t,e,n){for(n=n.child;n!==null;)x0(t,e,n),n=n.sibling}function x0(t,e,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(zl,n)}catch{}switch(n.tag){case 5:$t||hs(n,e);case 6:var i=Bt,r=Xn;Bt=null,Ci(t,e,n),Bt=i,Xn=r,Bt!==null&&(Xn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Xn?(t=Bt,n=n.stateNode,t.nodeType===8?wc(t.parentNode,n):t.nodeType===1&&wc(t,n),Ra(t)):wc(Bt,n.stateNode));break;case 4:i=Bt,r=Xn,Bt=n.stateNode.containerInfo,Xn=!0,Ci(t,e,n),Bt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Qu(n,e,a),r=r.next}while(r!==i)}Ci(t,e,n);break;case 1:if(!$t&&(hs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Mt(n,e,o)}Ci(t,e,n);break;case 21:Ci(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Ci(t,e,n),$t=i):Ci(t,e,n);break;default:Ci(t,e,n)}}function Nf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ox),e.forEach(function(i){var r=Xx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Bt=o.stateNode,Xn=!1;break e;case 3:Bt=o.stateNode.containerInfo,Xn=!0;break e;case 4:Bt=o.stateNode.containerInfo,Xn=!0;break e}o=o.return}if(Bt===null)throw Error(ne(160));x0(s,a,r),Bt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)y0(e,t),e=e.sibling}function y0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),ti(t),i&4){try{ma(3,t,t.return),ql(3,t)}catch(y){Mt(t,t.return,y)}try{ma(5,t,t.return)}catch(y){Mt(t,t.return,y)}}break;case 1:Gn(e,t),ti(t),i&512&&n!==null&&hs(n,n.return);break;case 5:if(Gn(e,t),ti(t),i&512&&n!==null&&hs(n,n.return),t.flags&32){var r=t.stateNode;try{wa(r,"")}catch(y){Mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Hm(r,s),Tu(o,a);var c=Tu(o,s);for(a=0;a<l.length;a+=2){var h=l[a],d=l[a+1];h==="style"?qm(r,d):h==="dangerouslySetInnerHTML"?jm(r,d):h==="children"?wa(r,d):wh(r,h,d,c)}switch(o){case"input":yu(r,s);break;case"textarea":Vm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?gs(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?gs(r,!!s.multiple,s.defaultValue,!0):gs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Da]=s}catch(y){Mt(t,t.return,y)}}break;case 6:if(Gn(e,t),ti(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Mt(t,t.return,y)}}break;case 3:if(Gn(e,t),ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(y){Mt(t,t.return,y)}break;case 4:Gn(e,t),ti(t);break;case 13:Gn(e,t),ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(id=Tt())),i&4&&Nf(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||h,Gn(e,t),$t=c):Gn(e,t),ti(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(de=t,h=t.child;h!==null;){for(d=de=h;de!==null;){switch(f=de,m=f.child,f.tag){case 0:case 11:case 14:case 15:ma(4,f,f.return);break;case 1:hs(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){Mt(i,n,y)}}break;case 5:hs(f,f.return);break;case 22:if(f.memoizedState!==null){If(d);continue}}m!==null?(m.return=f,de=m):If(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Xm("display",a))}catch(y){Mt(t,t.return,y)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Mt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Gn(e,t),ti(t),i&4&&Nf(t);break;case 21:break;default:Gn(e,t),ti(t)}}function ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_0(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(wa(r,""),i.flags&=-33);var s=Pf(t);th(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Pf(t);eh(t,o,a);break;default:throw Error(ne(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kx(t,e,n){de=t,M0(t)}function M0(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||go;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||$t;o=go;var c=$t;if(go=a,($t=l)&&!c)for(de=r;de!==null;)a=de,l=a.child,a.tag===22&&a.memoizedState!==null?Uf(r):l!==null?(l.return=a,de=l):Uf(r);for(;s!==null;)de=s,M0(s),s=s.sibling;de=r,go=o,$t=c}Df(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):Df(t)}}function Df(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||ql(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vf(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vf(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Ra(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}$t||e.flags&512&&Ju(e)}catch(f){Mt(e,e.return,f)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function If(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function Uf(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ql(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{Ju(e)}catch(l){Mt(e,s,l)}break;case 5:var a=e.return;try{Ju(e)}catch(l){Mt(e,a,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){de=null;break}var o=e.sibling;if(o!==null){o.return=e.return,de=o;break}de=e.return}}var zx=Math.ceil,El=Ai.ReactCurrentDispatcher,td=Ai.ReactCurrentOwner,kn=Ai.ReactCurrentBatchConfig,Ke=0,Ft=null,Rt=null,Ht=0,Mn=0,ds=ir(0),Lt=0,za=null,Lr=0,Yl=0,nd=0,ga=null,un=null,id=0,Ps=1/0,mi=null,wl=!1,nh=null,qi=null,vo=!1,ki=null,Tl=0,va=0,ih=null,Jo=-1,el=0;function an(){return Ke&6?Tt():Jo!==-1?Jo:Jo=Tt()}function Yi(t){return t.mode&1?Ke&2&&Ht!==0?Ht&-Ht:Sx.transition!==null?(el===0&&(el=sg()),el):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:dg(t.type)),t):1}function Qn(t,e,n,i){if(50<va)throw va=0,ih=null,Error(ne(185));qa(t,n,i),(!(Ke&2)||t!==Ft)&&(t===Ft&&(!(Ke&2)&&(Yl|=n),Lt===4&&Oi(t,Ht)),pn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Ps=Tt()+500,Wl&&rr()))}function pn(t,e){var n=t.callbackNode;S_(t,e);var i=ll(t,t===Ft?Ht:0);if(i===0)n!==null&&Vd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Vd(n),e===1)t.tag===0?Mx(Of.bind(null,t)):Pg(Of.bind(null,t)),vx(function(){!(Ke&6)&&rr()}),n=null;else{switch(ag(i)){case 1:n=bh;break;case 4:n=ig;break;case 16:n=ol;break;case 536870912:n=rg;break;default:n=ol}n=b0(n,S0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function S0(t,e){if(Jo=-1,el=0,Ke&6)throw Error(ne(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var i=ll(t,t===Ft?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Al(t,i);else{e=i;var r=Ke;Ke|=2;var s=w0();(Ft!==t||Ht!==e)&&(mi=null,Ps=Tt()+500,Sr(t,e));do try{Hx();break}catch(o){E0(t,o)}while(!0);Hh(),El.current=s,Ke=r,Rt!==null?e=0:(Ft=null,Ht=0,e=Lt)}if(e!==0){if(e===2&&(r=Lu(t),r!==0&&(i=r,e=rh(t,r))),e===1)throw n=za,Sr(t,0),Oi(t,i),pn(t,Tt()),n;if(e===6)Oi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Bx(r)&&(e=Al(t,i),e===2&&(s=Lu(t),s!==0&&(i=s,e=rh(t,s))),e===1))throw n=za,Sr(t,0),Oi(t,i),pn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:fr(t,un,mi);break;case 3:if(Oi(t,i),(i&130023424)===i&&(e=id+500-Tt(),10<e)){if(ll(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ku(fr.bind(null,t,un,mi),e);break}fr(t,un,mi);break;case 4:if(Oi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Zn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zx(i/1960))-i,10<i){t.timeoutHandle=ku(fr.bind(null,t,un,mi),i);break}fr(t,un,mi);break;case 5:fr(t,un,mi);break;default:throw Error(ne(329))}}}return pn(t,Tt()),t.callbackNode===n?S0.bind(null,t):null}function rh(t,e){var n=ga;return t.current.memoizedState.isDehydrated&&(Sr(t,e).flags|=256),t=Al(t,e),t!==2&&(e=un,un=n,e!==null&&sh(e)),t}function sh(t){un===null?un=t:un.push.apply(un,t)}function Bx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Oi(t,e){for(e&=~nd,e&=~Yl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function Of(t){if(Ke&6)throw Error(ne(327));Ms();var e=ll(t,0);if(!(e&1))return pn(t,Tt()),null;var n=Al(t,e);if(t.tag!==0&&n===2){var i=Lu(t);i!==0&&(e=i,n=rh(t,i))}if(n===1)throw n=za,Sr(t,0),Oi(t,e),pn(t,Tt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,un,mi),pn(t,Tt()),null}function rd(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Ps=Tt()+500,Wl&&rr())}}function Pr(t){ki!==null&&ki.tag===0&&!(Ke&6)&&Ms();var e=Ke;Ke|=1;var n=kn.transition,i=Qe;try{if(kn.transition=null,Qe=1,t)return t()}finally{Qe=i,kn.transition=n,Ke=e,!(Ke&6)&&rr()}}function sd(){Mn=ds.current,ut(ds)}function Sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gx(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(zh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&fl();break;case 3:bs(),ut(dn),ut(Zt),Yh();break;case 5:qh(i);break;case 4:bs();break;case 13:ut(gt);break;case 19:ut(gt);break;case 10:Vh(i.type._context);break;case 22:case 23:sd()}n=n.return}if(Ft=t,Rt=t=$i(t.current,null),Ht=Mn=e,Lt=0,za=null,nd=Yl=Lr=0,un=ga=null,xr!==null){for(e=0;e<xr.length;e++)if(n=xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}xr=null}return t}function E0(t,e){do{var n=Rt;try{if(Hh(),Ko.current=Sl,Ml){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ml=!1}if(br=0,Ot=bt=vt=null,pa=!1,Oa=0,td.current=null,n===null||n.return===null){Lt=1,za=e,Rt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ht,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Ef(a);if(m!==null){m.flags&=-257,wf(m,a,o,s,e),m.mode&1&&Sf(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){Sf(s,c,e),ad();break e}l=Error(ne(426))}}else if(ht&&o.mode&1){var p=Ef(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),wf(p,a,o,s,e),Bh(Ls(l,o));break e}}s=l=Ls(l,o),Lt!==4&&(Lt=2),ga===null?ga=[s]:ga.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=a0(s,l,e);gf(s,u);break e;case 1:o=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(qi===null||!qi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=o0(s,o,e);gf(s,M);break e}}s=s.return}while(s!==null)}A0(n)}catch(b){e=b,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function w0(){var t=El.current;return El.current=Sl,t===null?Sl:t}function ad(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Ft===null||!(Lr&268435455)&&!(Yl&268435455)||Oi(Ft,Ht)}function Al(t,e){var n=Ke;Ke|=2;var i=w0();(Ft!==t||Ht!==e)&&(mi=null,Sr(t,e));do try{Gx();break}catch(r){E0(t,r)}while(!0);if(Hh(),Ke=n,El.current=i,Rt!==null)throw Error(ne(261));return Ft=null,Ht=0,Lt}function Gx(){for(;Rt!==null;)T0(Rt)}function Hx(){for(;Rt!==null&&!f_();)T0(Rt)}function T0(t){var e=R0(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?A0(t):Rt=e,td.current=null}function A0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ux(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Rt=null;return}}else if(n=Ix(n,e,Mn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Lt===0&&(Lt=5)}function fr(t,e,n){var i=Qe,r=kn.transition;try{kn.transition=null,Qe=1,Vx(t,e,n,i)}finally{kn.transition=r,Qe=i}return null}function Vx(t,e,n,i){do Ms();while(ki!==null);if(Ke&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(E_(t,s),t===Ft&&(Rt=Ft=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,b0(ol,function(){return Ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var a=Qe;Qe=1;var o=Ke;Ke|=4,td.current=null,Fx(t,n),y0(n,t),cx(Ou),cl=!!Uu,Ou=Uu=null,t.current=n,kx(n),p_(),Ke=o,Qe=a,kn.transition=s}else t.current=n;if(vo&&(vo=!1,ki=t,Tl=r),s=t.pendingLanes,s===0&&(qi=null),v_(n.stateNode),pn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(wl)throw wl=!1,t=nh,nh=null,t;return Tl&1&&t.tag!==0&&Ms(),s=t.pendingLanes,s&1?t===ih?va++:(va=0,ih=t):va=0,rr(),null}function Ms(){if(ki!==null){var t=ag(Tl),e=kn.transition,n=Qe;try{if(kn.transition=null,Qe=16>t?16:t,ki===null)var i=!1;else{if(t=ki,ki=null,Tl=0,Ke&6)throw Error(ne(331));var r=Ke;for(Ke|=4,de=t.current;de!==null;){var s=de,a=s.child;if(de.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(de=c;de!==null;){var h=de;switch(h.tag){case 0:case 11:case 15:ma(8,h,s)}var d=h.child;if(d!==null)d.return=h,de=d;else for(;de!==null;){h=de;var f=h.sibling,m=h.return;if(v0(h),h===c){de=null;break}if(f!==null){f.return=m,de=f;break}de=m}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}de=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,de=a;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ma(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,de=u;break e}de=s.return}}var g=t.current;for(de=g;de!==null;){a=de;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,de=v;else e:for(a=g;de!==null;){if(o=de,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ql(9,o)}}catch(b){Mt(o,o.return,b)}if(o===a){de=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,de=M;break e}de=o.return}}if(Ke=r,rr(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(zl,t)}catch{}i=!0}return i}finally{Qe=n,kn.transition=e}}return!1}function Ff(t,e,n){e=Ls(n,e),e=a0(t,e,1),t=Xi(t,e,1),e=an(),t!==null&&(qa(t,1,e),pn(t,e))}function Mt(t,e,n){if(t.tag===3)Ff(t,t,n);else for(;e!==null;){if(e.tag===3){Ff(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qi===null||!qi.has(i))){t=Ls(n,t),t=o0(e,t,1),e=Xi(e,t,1),t=an(),e!==null&&(qa(e,1,t),pn(e,t));break}}e=e.return}}function Wx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Ht&n)===n&&(Lt===4||Lt===3&&(Ht&130023424)===Ht&&500>Tt()-id?Sr(t,0):nd|=n),pn(t,e)}function C0(t,e){e===0&&(t.mode&1?(e=ao,ao<<=1,!(ao&130023424)&&(ao=4194304)):e=1);var n=an();t=Ei(t,e),t!==null&&(qa(t,e,n),pn(t,n))}function jx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),C0(t,n)}function Xx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),C0(t,n)}var R0;R0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,Dx(t,e,n);hn=!!(t.flags&131072)}else hn=!1,ht&&e.flags&1048576&&Ng(e,gl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Qo(t,e),t=e.pendingProps;var r=As(e,Zt.current);ys(e,n),r=Kh(null,e,i,t,r,n);var s=Zh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,pl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jh(e),r.updater=Xl,e.stateNode=r,r._reactInternals=e,ju(e,i,t,n),e=Yu(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&kh(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Qo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Yx(i),t=jn(i,t),r){case 0:e=qu(null,e,i,t,n);break e;case 1:e=Cf(null,e,i,t,n);break e;case 11:e=Tf(null,e,i,t,n);break e;case 14:e=Af(null,e,i,jn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),qu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Cf(t,e,i,r,n);case 3:e:{if(h0(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,kg(t,e),xl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ls(Error(ne(423)),e),e=Rf(t,e,i,n,r);break e}else if(i!==r){r=Ls(Error(ne(424)),e),e=Rf(t,e,i,n,r);break e}else for(wn=ji(e.stateNode.containerInfo.firstChild),Tn=e,ht=!0,qn=null,n=Og(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),i===r){e=wi(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return zg(e),t===null&&Hu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Fu(i,r)?a=null:s!==null&&Fu(i,s)&&(e.flags|=32),u0(t,e),rn(t,e,a,n),e.child;case 6:return t===null&&Hu(e),null;case 13:return d0(t,e,n);case 4:return Xh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Rs(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Tf(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,st(vl,i._currentValue),i._currentValue=a,s!==null)if(Jn(s.value,a)){if(s.children===r.children&&!dn.current){e=wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Vu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ys(e,n),r=zn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),Af(t,e,i,r,n);case 15:return l0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Qo(t,e),e.tag=1,fn(i)?(t=!0,pl(e)):t=!1,ys(e,n),s0(e,i,r),ju(e,i,r,n),Yu(null,e,i,!0,t,n);case 19:return f0(t,e,n);case 22:return c0(t,e,n)}throw Error(ne(156,e.tag))};function b0(t,e){return ng(t,e)}function qx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new qx(t,e,n,i)}function od(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yx(t){if(typeof t=="function")return od(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ah)return 11;if(t===Ch)return 14}return 2}function $i(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")od(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ns:return Er(n.children,r,s,e);case Th:a=8,r|=8;break;case mu:return t=On(12,n,e,r|2),t.elementType=mu,t.lanes=s,t;case gu:return t=On(13,n,e,r),t.elementType=gu,t.lanes=s,t;case vu:return t=On(19,n,e,r),t.elementType=vu,t.lanes=s,t;case zm:return $l(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fm:a=10;break e;case km:a=9;break e;case Ah:a=11;break e;case Ch:a=14;break e;case Di:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=On(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Er(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function $l(t,e,n,i){return t=On(22,t,i,e),t.elementType=zm,t.lanes=n,t.stateNode={isHidden:!1},t}function Nc(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function Dc(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $x(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fc(0),this.expirationTimes=fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ld(t,e,n,i,r,s,a,o,l){return t=new $x(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jh(s),t}function Kx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function L0(t){if(!t)return er;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(fn(n))return Lg(t,n,e)}return e}function P0(t,e,n,i,r,s,a,o,l){return t=ld(n,i,!0,t,r,s,a,o,l),t.context=L0(null),n=t.current,i=an(),r=Yi(n),s=yi(i,r),s.callback=e??null,Xi(n,s,r),t.current.lanes=r,qa(t,r,i),pn(t,i),t}function Kl(t,e,n,i){var r=e.current,s=an(),a=Yi(r);return n=L0(n),e.context===null?e.context=n:e.pendingContext=n,e=yi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Xi(r,e,a),t!==null&&(Qn(t,r,a,s),$o(t,r,a)),a}function Cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cd(t,e){kf(t,e),(t=t.alternate)&&kf(t,e)}function Zx(){return null}var N0=typeof reportError=="function"?reportError:function(t){console.error(t)};function ud(t){this._internalRoot=t}Zl.prototype.render=ud.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Kl(t,e,null,null)};Zl.prototype.unmount=ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){Kl(null,t,null,null)}),e[Si]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=cg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ui.length&&e!==0&&e<Ui[n].priority;n++);Ui.splice(n,0,t),n===0&&hg(t)}};function hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zf(){}function Qx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Cl(a);s.call(c)}}var a=P0(e,i,t,0,null,!1,!1,"",zf);return t._reactRootContainer=a,t[Si]=a.current,Pa(t.nodeType===8?t.parentNode:t),Pr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Cl(l);o.call(c)}}var l=ld(t,0,!1,null,null,!1,!1,"",zf);return t._reactRootContainer=l,t[Si]=l.current,Pa(t.nodeType===8?t.parentNode:t),Pr(function(){Kl(e,l,n,i)}),l}function Jl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Cl(a);o.call(l)}}Kl(e,a,t,r)}else a=Qx(n,e,t,r,i);return Cl(a)}og=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oa(e.pendingLanes);n!==0&&(Lh(e,n|1),pn(e,Tt()),!(Ke&6)&&(Ps=Tt()+500,rr()))}break;case 13:Pr(function(){var i=Ei(t,1);if(i!==null){var r=an();Qn(i,t,1,r)}}),cd(t,1)}};Ph=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=an();Qn(e,t,134217728,n)}cd(t,134217728)}};lg=function(t){if(t.tag===13){var e=Yi(t),n=Ei(t,e);if(n!==null){var i=an();Qn(n,t,e,i)}cd(t,e)}};cg=function(){return Qe};ug=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};Cu=function(t,e,n){switch(e){case"input":if(yu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Vl(i);if(!r)throw Error(ne(90));Gm(i),yu(i,r)}}}break;case"textarea":Vm(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};Km=rd;Zm=Pr;var Jx={usingClientEntryPoint:!1,Events:[$a,as,Vl,Ym,$m,rd]},Js={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ey={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=eg(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||Zx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{zl=_o.inject(ey),ai=_o}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jx;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hd(e))throw Error(ne(200));return Kx(t,e,null,n)};Rn.createRoot=function(t,e){if(!hd(t))throw Error(ne(299));var n=!1,i="",r=N0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ld(t,1,!1,null,null,n,!1,i,r),t[Si]=e.current,Pa(t.nodeType===8?t.parentNode:t),new ud(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=eg(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return Pr(t)};Rn.hydrate=function(t,e,n){if(!Ql(e))throw Error(ne(200));return Jl(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!hd(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=N0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=P0(e,null,t,1,n??null,r,!1,s,a),t[Si]=e.current,Pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Zl(e)};Rn.render=function(t,e,n){if(!Ql(e))throw Error(ne(200));return Jl(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!Ql(t))throw Error(ne(40));return t._reactRootContainer?(Pr(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1};Rn.unstable_batchedUpdates=rd;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ql(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Jl(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function D0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D0)}catch(t){console.error(t)}}D0(),Dm.exports=Rn;var ty=Dm.exports,Bf=ty;fu.createRoot=Bf.createRoot,fu.hydrateRoot=Bf.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dd="160",ny=0,Gf=1,iy=2,I0=1,U0=2,pi=3,tr=0,mn=1,si=2,Ki=0,Ss=1,Ns=2,Hf=3,Vf=4,ry=5,gr=100,sy=101,ay=102,Wf=103,jf=104,oy=200,ly=201,cy=202,uy=203,ah=204,oh=205,hy=206,dy=207,fy=208,py=209,my=210,gy=211,vy=212,_y=213,xy=214,yy=0,My=1,Sy=2,Rl=3,Ey=4,wy=5,Ty=6,Ay=7,O0=0,Cy=1,Ry=2,Zi=0,by=1,Ly=2,Py=3,F0=4,Ny=5,Dy=6,k0=300,Ds=301,Is=302,bl=303,lh=304,ec=306,Mr=1e3,$n=1001,ch=1002,sn=1003,Xf=1004,Ic=1005,In=1006,Iy=1007,Ba=1008,Qi=1009,Uy=1010,Oy=1011,fd=1012,z0=1013,zi=1014,Bi=1015,Ga=1016,B0=1017,G0=1018,wr=1020,Fy=1021,Kn=1023,ky=1024,zy=1025,Tr=1026,Us=1027,By=1028,H0=1029,Gy=1030,V0=1031,W0=1033,Uc=33776,Oc=33777,Fc=33778,kc=33779,qf=35840,Yf=35841,$f=35842,Kf=35843,j0=36196,Zf=37492,Qf=37496,Jf=37808,ep=37809,tp=37810,np=37811,ip=37812,rp=37813,sp=37814,ap=37815,op=37816,lp=37817,cp=37818,up=37819,hp=37820,dp=37821,zc=36492,fp=36494,pp=36495,Hy=36283,mp=36284,gp=36285,vp=36286,X0=3e3,Ar=3001,Vy=3200,Wy=3201,q0=0,jy=1,Un="",Gt="srgb",Ti="srgb-linear",pd="display-p3",tc="display-p3-linear",Ll="linear",ot="srgb",Pl="rec709",Nl="p3",kr=7680,_p=519,Xy=512,qy=513,Yy=514,Y0=515,$y=516,Ky=517,Zy=518,Qy=519,xp=35044,yp="300 es",uh=1035,xi=2e3,Dl=2001;class Hs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mp=1234567;const _a=Math.PI/180,Ha=180/Math.PI;function Vs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function md(t,e){return(t%e+e)%e}function Jy(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function eM(t,e,n){return t!==e?(n-t)/(e-t):0}function xa(t,e,n){return(1-n)*t+n*e}function tM(t,e,n,i){return xa(t,e,1-Math.exp(-n*i))}function nM(t,e=1){return e-Math.abs(md(t,e*2)-e)}function iM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function rM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function sM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function aM(t,e){return t+Math.random()*(e-t)}function oM(t){return t*(.5-Math.random())}function lM(t){t!==void 0&&(Mp=t);let e=Mp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cM(t){return t*_a}function uM(t){return t*Ha}function hh(t){return(t&t-1)===0&&t!==0}function hM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Il(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function dM(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),m=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":t.set(o*h,l*d,l*f,o*c);break;case"YZY":t.set(l*f,o*h,l*d,o*c);break;case"ZXZ":t.set(l*d,l*f,o*h,o*c);break;case"XZX":t.set(o*h,l*x,l*m,o*c);break;case"YXY":t.set(l*m,o*h,l*x,o*c);break;case"ZYZ":t.set(l*x,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function es(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Sn={DEG2RAD:_a,RAD2DEG:Ha,generateUUID:Vs,clamp:Kt,euclideanModulo:md,mapLinear:Jy,inverseLerp:eM,lerp:xa,damp:tM,pingpong:nM,smoothstep:iM,smootherstep:rM,randInt:sM,randFloat:aM,randFloatSpread:oM,seededRandom:lM,degToRad:cM,radToDeg:uM,isPowerOfTwo:hh,ceilPowerOfTwo:hM,floorPowerOfTwo:Il,setQuaternionFromProperEuler:dM,normalize:tn,denormalize:es};class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],x=i[8],y=r[0],p=r[3],u=r[6],g=r[1],v=r[4],M=r[7],b=r[2],A=r[5],C=r[8];return s[0]=a*y+o*g+l*b,s[3]=a*p+o*v+l*A,s[6]=a*u+o*M+l*C,s[1]=c*y+h*g+d*b,s[4]=c*p+h*v+d*A,s[7]=c*u+h*M+d*C,s[2]=f*y+m*g+x*b,s[5]=f*p+m*v+x*A,s[8]=f*u+m*M+x*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*s,m=c*s-a*l,x=n*d+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=d*y,e[1]=(r*c-h*i)*y,e[2]=(o*i-r*a)*y,e[3]=f*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Bc.makeScale(e,n)),this}rotate(e){return this.premultiply(Bc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bc=new je;function $0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ul(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function fM(){const t=Ul("canvas");return t.style.display="block",t}const Sp={};function ya(t){t in Sp||(Sp[t]=!0,console.warn(t))}const Ep=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wp=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xo={[Ti]:{transfer:Ll,primaries:Pl,toReference:t=>t,fromReference:t=>t},[Gt]:{transfer:ot,primaries:Pl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[tc]:{transfer:Ll,primaries:Nl,toReference:t=>t.applyMatrix3(wp),fromReference:t=>t.applyMatrix3(Ep)},[pd]:{transfer:ot,primaries:Nl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(wp),fromReference:t=>t.applyMatrix3(Ep).convertLinearToSRGB()}},pM=new Set([Ti,tc]),et={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!pM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=xo[e].toReference,r=xo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return xo[t].primaries},getTransfer:function(t){return t===Un?Ll:xo[t].transfer}};function Es(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let zr;class K0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zr===void 0&&(zr=Ul("canvas")),zr.width=e.width,zr.height=e.height;const i=zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ul("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Es(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Es(n[i]/255)*255):n[i]=Es(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mM=0;class Z0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Vs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Hc(r[a].image)):s.push(Hc(r[a]))}else s=Hc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Hc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?K0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gM=0;class gn extends Hs{constructor(e=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=$n,r=$n,s=In,a=Ba,o=Kn,l=Qi,c=gn.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Vs(),this.name="",this.source=new Z0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ar?Gt:Un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==k0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mr:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mr:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Gt?Ar:X0}set encoding(e){ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ar?Gt:Un}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=k0;gn.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,n=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],x=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(m+1)/2,b=(u+1)/2,A=(h+f)/4,C=(d+y)/4,U=(x+p)/4;return v>M&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=C/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=U/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=U/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-x)*(p-x)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(p-x)/g,this.y=(d-y)/g,this.z=(f-h)/g,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vM extends Hs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new dt(0,0,e,n),this.scissorTest=!1,this.viewport=new dt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ya("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ar?Gt:Un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new gn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Z0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends vM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Q0 extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _M extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Za{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=s[a+0],m=s[a+1],x=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=x,e[n+3]=y;return}if(d!==y||l!==f||c!==m||h!==x){let p=1-o;const u=l*f+c*m+h*x+d*y,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const b=Math.sqrt(v),A=Math.atan2(b,u*g);p=Math.sin(p*A)/b,o=Math.sin(o*A)/b}const M=o*g;if(l=l*p+f*M,c=c*p+m*M,h=h*p+x*M,d=d*p+y*M,p===1-o){const b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[a],f=s[a+1],m=s[a+2],x=s[a+3];return e[n]=o*x+h*d+l*m-c*f,e[n+1]=l*x+h*f+c*d-o*m,e[n+2]=c*x+h*m+o*f-l*d,e[n+3]=h*x-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),d=o(s/2),f=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*m*x,this._y=c*m*d-f*h*x,this._z=c*h*x+f*m*d,this._w=c*h*d-f*m*x;break;case"YXZ":this._x=f*h*d+c*m*x,this._y=c*m*d-f*h*x,this._z=c*h*x-f*m*d,this._w=c*h*d+f*m*x;break;case"ZXY":this._x=f*h*d-c*m*x,this._y=c*m*d+f*h*x,this._z=c*h*x+f*m*d,this._w=c*h*d-f*m*x;break;case"ZYX":this._x=f*h*d-c*m*x,this._y=c*m*d+f*h*x,this._z=c*h*x-f*m*d,this._w=c*h*d+f*m*x;break;case"YZX":this._x=f*h*d+c*m*x,this._y=c*m*d+f*h*x,this._z=c*h*x-f*m*d,this._w=c*h*d-f*m*x;break;case"XZY":this._x=f*h*d-c*m*x,this._y=c*m*d-f*h*x,this._z=c*h*x+f*m*d,this._w=c*h*d+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vc=new N,Tp=new Za;class sr{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(s,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yo.copy(i.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),Mo.subVectors(this.max,ea),Br.subVectors(e.a,ea),Gr.subVectors(e.b,ea),Hr.subVectors(e.c,ea),Ri.subVectors(Gr,Br),bi.subVectors(Hr,Gr),lr.subVectors(Br,Hr);let n=[0,-Ri.z,Ri.y,0,-bi.z,bi.y,0,-lr.z,lr.y,Ri.z,0,-Ri.x,bi.z,0,-bi.x,lr.z,0,-lr.x,-Ri.y,Ri.x,0,-bi.y,bi.x,0,-lr.y,lr.x,0];return!Wc(n,Br,Gr,Hr,Mo)||(n=[1,0,0,0,1,0,0,0,1],!Wc(n,Br,Gr,Hr,Mo))?!1:(So.crossVectors(Ri,bi),n=[So.x,So.y,So.z],Wc(n,Br,Gr,Hr,Mo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new N,new N,new N,new N,new N,new N,new N,new N],Hn=new N,yo=new sr,Br=new N,Gr=new N,Hr=new N,Ri=new N,bi=new N,lr=new N,ea=new N,Mo=new N,So=new N,cr=new N;function Wc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){cr.fromArray(t,s);const o=r.x*Math.abs(cr.x)+r.y*Math.abs(cr.y)+r.z*Math.abs(cr.z),l=e.dot(cr),c=n.dot(cr),h=i.dot(cr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const xM=new sr,ta=new N,jc=new N;class Qa{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):xM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);const n=ta.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ta,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(jc)),this.expandByPoint(ta.copy(e.center).sub(jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new N,Xc=new N,Eo=new N,Li=new N,qc=new N,wo=new N,Yc=new N;class gd{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xc.copy(e).add(n).multiplyScalar(.5),Eo.copy(n).sub(e).normalize(),Li.copy(this.origin).sub(Xc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Eo),o=Li.dot(this.direction),l=-Li.dot(Eo),c=Li.lengthSq(),h=Math.abs(1-a*a);let d,f,m,x;if(h>0)if(d=a*l-o,f=a*o-l,x=s*h,d>=0)if(f>=-x)if(f<=x){const y=1/h;d*=y,f*=y,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-x?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Xc).addScaledVector(Eo,f),m}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,s){qc.subVectors(n,e),wo.subVectors(i,e),Yc.crossVectors(qc,wo);let a=this.direction.dot(Yc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,e);const l=o*this.direction.dot(wo.crossVectors(Li,wo));if(l<0)return null;const c=o*this.direction.dot(qc.cross(Li));if(c<0||l+c>a)return null;const h=-o*Li.dot(Yc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,s,a,o,l,c,h,d,f,m,x,y,p){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,d,f,m,x,y,p)}set(e,n,i,r,s,a,o,l,c,h,d,f,m,x,y,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=x,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*d,x=o*h,y=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=m+x*c,n[5]=f-y*c,n[9]=-o*l,n[2]=y-f*c,n[6]=x+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,x=c*h,y=c*d;n[0]=f+y*o,n[4]=x*o-m,n[8]=a*c,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=m*o-x,n[6]=y+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,x=c*h,y=c*d;n[0]=f-y*o,n[4]=-a*d,n[8]=x+m*o,n[1]=m+x*o,n[5]=a*h,n[9]=y-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*d,x=o*h,y=o*d;n[0]=l*h,n[4]=x*c-m,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=m*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,x=o*l,y=o*c;n[0]=l*h,n[4]=y-f*d,n[8]=x*d+m,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=m*d+x,n[10]=f-y*d}else if(e.order==="XZY"){const f=a*l,m=a*c,x=o*l,y=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+y,n[5]=a*h,n[9]=m*d-x,n[2]=x*d-m,n[6]=o*h,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yM,e,MM)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Pi.crossVectors(i,xn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Pi.crossVectors(i,xn)),Pi.normalize(),To.crossVectors(xn,Pi),r[0]=Pi.x,r[4]=To.x,r[8]=xn.x,r[1]=Pi.y,r[5]=To.y,r[9]=xn.y,r[2]=Pi.z,r[6]=To.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],x=i[2],y=i[6],p=i[10],u=i[14],g=i[3],v=i[7],M=i[11],b=i[15],A=r[0],C=r[4],U=r[8],E=r[12],w=r[1],k=r[5],W=r[9],K=r[13],P=r[2],I=r[6],F=r[10],X=r[14],D=r[3],z=r[7],j=r[11],Z=r[15];return s[0]=a*A+o*w+l*P+c*D,s[4]=a*C+o*k+l*I+c*z,s[8]=a*U+o*W+l*F+c*j,s[12]=a*E+o*K+l*X+c*Z,s[1]=h*A+d*w+f*P+m*D,s[5]=h*C+d*k+f*I+m*z,s[9]=h*U+d*W+f*F+m*j,s[13]=h*E+d*K+f*X+m*Z,s[2]=x*A+y*w+p*P+u*D,s[6]=x*C+y*k+p*I+u*z,s[10]=x*U+y*W+p*F+u*j,s[14]=x*E+y*K+p*X+u*Z,s[3]=g*A+v*w+M*P+b*D,s[7]=g*C+v*k+M*I+b*z,s[11]=g*U+v*W+M*F+b*j,s[15]=g*E+v*K+M*X+b*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],x=e[3],y=e[7],p=e[11],u=e[15];return x*(+s*l*d-r*c*d-s*o*f+i*c*f+r*o*m-i*l*m)+y*(+n*l*m-n*c*f+s*a*f-r*a*m+r*c*h-s*l*h)+p*(+n*c*d-n*o*m-s*a*d+i*a*m+s*o*h-i*c*h)+u*(-r*o*h-n*l*d+n*o*f+r*a*d-i*a*f+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],x=e[12],y=e[13],p=e[14],u=e[15],g=d*p*c-y*f*c+y*l*m-o*p*m-d*l*u+o*f*u,v=x*f*c-h*p*c-x*l*m+a*p*m+h*l*u-a*f*u,M=h*y*c-x*d*c+x*o*m-a*y*m-h*o*u+a*d*u,b=x*d*l-h*y*l-x*o*f+a*y*f+h*o*p-a*d*p,A=n*g+i*v+r*M+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=g*C,e[1]=(y*f*s-d*p*s-y*r*m+i*p*m+d*r*u-i*f*u)*C,e[2]=(o*p*s-y*l*s+y*r*c-i*p*c-o*r*u+i*l*u)*C,e[3]=(d*l*s-o*f*s-d*r*c+i*f*c+o*r*m-i*l*m)*C,e[4]=v*C,e[5]=(h*p*s-x*f*s+x*r*m-n*p*m-h*r*u+n*f*u)*C,e[6]=(x*l*s-a*p*s-x*r*c+n*p*c+a*r*u-n*l*u)*C,e[7]=(a*f*s-h*l*s+h*r*c-n*f*c-a*r*m+n*l*m)*C,e[8]=M*C,e[9]=(x*d*s-h*y*s-x*i*m+n*y*m+h*i*u-n*d*u)*C,e[10]=(a*y*s-x*o*s+x*i*c-n*y*c-a*i*u+n*o*u)*C,e[11]=(h*o*s-a*d*s-h*i*c+n*d*c+a*i*m-n*o*m)*C,e[12]=b*C,e[13]=(h*y*r-x*d*r+x*i*f-n*y*f-h*i*p+n*d*p)*C,e[14]=(x*o*r-a*y*r-x*i*l+n*y*l+a*i*p-n*o*p)*C,e[15]=(a*d*r-h*o*r+h*i*l-n*d*l-a*i*f+n*o*f)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,d=o+o,f=s*c,m=s*h,x=s*d,y=a*h,p=a*d,u=o*d,g=l*c,v=l*h,M=l*d,b=i.x,A=i.y,C=i.z;return r[0]=(1-(y+u))*b,r[1]=(m+M)*b,r[2]=(x-v)*b,r[3]=0,r[4]=(m-M)*A,r[5]=(1-(f+u))*A,r[6]=(p+g)*A,r[7]=0,r[8]=(x+v)*C,r[9]=(p-g)*C,r[10]=(1-(f+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Vr.set(r[0],r[1],r[2]).length();const a=Vr.set(r[4],r[5],r[6]).length(),o=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const c=1/s,h=1/a,d=1/o;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,n.setFromRotationMatrix(Vn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=xi){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let m,x;if(o===xi)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Dl)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=xi){const l=this.elements,c=1/(n-e),h=1/(i-r),d=1/(a-s),f=(n+e)*c,m=(i+r)*h;let x,y;if(o===xi)x=(a+s)*d,y=-2*d;else if(o===Dl)x=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Vr=new N,Vn=new Et,yM=new N(0,0,0),MM=new N(1,1,1),Pi=new N,To=new N,xn=new N,Ap=new Et,Cp=new Za;class nc{constructor(e=0,n=0,i=0,r=nc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ap.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ap,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Cp.setFromEuler(this),this.setFromQuaternion(Cp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nc.DEFAULT_ORDER="XYZ";class J0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SM=0;const Rp=new N,Wr=new Za,hi=new Et,Ao=new N,na=new N,EM=new N,wM=new Za,bp=new N(1,0,0),Lp=new N(0,1,0),Pp=new N(0,0,1),TM={type:"added"},AM={type:"removed"};class kt extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new N,n=new nc,i=new Za,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new je}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new J0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(bp,e)}rotateY(e){return this.rotateOnAxis(Lp,e)}rotateZ(e){return this.rotateOnAxis(Pp,e)}translateOnAxis(e,n){return Rp.copy(e).applyQuaternion(this.quaternion),this.position.add(Rp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bp,e)}translateY(e){return this.translateOnAxis(Lp,e)}translateZ(e){return this.translateOnAxis(Pp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ao.copy(e):Ao.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(na,Ao,this.up):hi.lookAt(Ao,na,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(hi),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(TM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(AM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,EM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,wM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new N(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new N,di=new N,$c=new N,fi=new N,jr=new N,Xr=new N,Np=new N,Kc=new N,Zc=new N,Qc=new N;let Co=!1;class Yn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Wn.subVectors(r,n),di.subVectors(i,n),$c.subVectors(e,n);const a=Wn.dot(Wn),o=Wn.dot(di),l=Wn.dot($c),c=di.dot(di),h=di.dot($c),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(c*l-o*h)*f,x=(a*h-o*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,n,i,r,s,a,o,l){return Co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Co=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),di.subVectors(e,n),Wn.cross(di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Wn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Co=!0),Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;jr.subVectors(r,i),Xr.subVectors(s,i),Kc.subVectors(e,i);const l=jr.dot(Kc),c=Xr.dot(Kc);if(l<=0&&c<=0)return n.copy(i);Zc.subVectors(e,r);const h=jr.dot(Zc),d=Xr.dot(Zc);if(h>=0&&d<=h)return n.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(jr,a);Qc.subVectors(e,s);const m=jr.dot(Qc),x=Xr.dot(Qc);if(x>=0&&m<=x)return n.copy(s);const y=m*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(Xr,o);const p=h*x-m*d;if(p<=0&&d-h>=0&&m-x>=0)return Np.subVectors(s,r),o=(d-h)/(d-h+(m-x)),n.copy(r).addScaledVector(Np,o);const u=1/(p+y+f);return a=y*u,o=f*u,n.copy(i).addScaledVector(jr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function Jc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class De{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=md(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Jc(a,s,e+1/3),this.g=Jc(a,s,e),this.b=Jc(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Gt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gt){const i=ev[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}copyLinearToSRGB(e){return this.r=Gc(e.r),this.g=Gc(e.g),this.b=Gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return et.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Kt(Yt.r*255,0,255))*65536+Math.round(Kt(Yt.g*255,0,255))*256+Math.round(Kt(Yt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,s=Yt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Gt){et.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==Gt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+n,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ni),e.getHSL(Ro);const i=xa(Ni.h,Ro.h,n),r=xa(Ni.s,Ro.s,n),s=xa(Ni.l,Ro.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new De;De.NAMES=ev;let CM=0;class Or extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=Ss,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=oh,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ah&&(i.blendSrc=this.blendSrc),this.blendDst!==oh&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_p&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mt extends Or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=O0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new N,bo=new Ye;class An{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)bo.fromBufferAttribute(this,n),bo.applyMatrix3(e),this.setXY(n,bo.x,bo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=es(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=es(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=es(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=es(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=es(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xp&&(e.usage=this.usage),e}}class tv extends An{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class nv extends An{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class zt extends An{constructor(e,n,i){super(new Float32Array(e),n,i)}}let RM=0;const Pn=new Et,eu=new kt,qr=new N,yn=new sr,ia=new sr,Ut=new N;class vn extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($0(e)?nv:tv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return eu.lookAt(e),eu.updateMatrix(),this.applyMatrix4(eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ia.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(yn.min,ia.min),yn.expandByPoint(Ut),Ut.addVectors(yn.max,ia.max),yn.expandByPoint(Ut)):(yn.expandByPoint(ia.min),yn.expandByPoint(ia.max))}yn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ut.fromBufferAttribute(o,c),l&&(qr.fromBufferAttribute(e,c),Ut.add(qr)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new N,h[w]=new N;const d=new N,f=new N,m=new N,x=new Ye,y=new Ye,p=new Ye,u=new N,g=new N;function v(w,k,W){d.fromArray(r,w*3),f.fromArray(r,k*3),m.fromArray(r,W*3),x.fromArray(a,w*2),y.fromArray(a,k*2),p.fromArray(a,W*2),f.sub(d),m.sub(d),y.sub(x),p.sub(x);const K=1/(y.x*p.y-p.x*y.y);isFinite(K)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(K),g.copy(m).multiplyScalar(y.x).addScaledVector(f,-p.x).multiplyScalar(K),c[w].add(u),c[k].add(u),c[W].add(u),h[w].add(g),h[k].add(g),h[W].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let w=0,k=M.length;w<k;++w){const W=M[w],K=W.start,P=W.count;for(let I=K,F=K+P;I<F;I+=3)v(i[I+0],i[I+1],i[I+2])}const b=new N,A=new N,C=new N,U=new N;function E(w){C.fromArray(s,w*3),U.copy(C);const k=c[w];b.copy(k),b.sub(C.multiplyScalar(C.dot(k))).normalize(),A.crossVectors(U,k);const K=A.dot(h[w])<0?-1:1;l[w*4]=b.x,l[w*4+1]=b.y,l[w*4+2]=b.z,l[w*4+3]=K}for(let w=0,k=M.length;w<k;++w){const W=M[w],K=W.start,P=W.count;for(let I=K,F=K+P;I<F;I+=3)E(i[I+0]),E(i[I+1]),E(i[I+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,h=new N,d=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,p),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let m=0,x=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*h;for(let u=0;u<h;u++)f[x++]=c[m++]}return new An(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dp=new Et,ur=new gd,Lo=new Qa,Ip=new N,Yr=new N,$r=new N,Kr=new N,tu=new N,Po=new N,No=new Ye,Do=new Ye,Io=new Ye,Up=new N,Op=new N,Fp=new N,Uo=new N,Oo=new N;class $ extends kt{constructor(e=new vn,n=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(tu.fromBufferAttribute(d,e),a?Po.addScaledVector(tu,h):Po.addScaledVector(tu.sub(n),h))}n.add(Po)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(s),ur.copy(e.ray).recast(e.near),!(Lo.containsPoint(ur.origin)===!1&&(ur.intersectSphere(Lo,Ip)===null||ur.origin.distanceToSquared(Ip)>(e.far-e.near)**2))&&(Dp.copy(s).invert(),ur.copy(e.ray).applyMatrix4(Dp),!(i.boundingBox!==null&&ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ur)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){const p=f[x],u=a[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,b=v;M<b;M+=3){const A=o.getX(M),C=o.getX(M+1),U=o.getX(M+2);r=Fo(this,u,e,i,c,h,d,A,C,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=x,u=y;p<u;p+=3){const g=o.getX(p),v=o.getX(p+1),M=o.getX(p+2);r=Fo(this,a,e,i,c,h,d,g,v,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){const p=f[x],u=a[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,b=v;M<b;M+=3){const A=M,C=M+1,U=M+2;r=Fo(this,u,e,i,c,h,d,A,C,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=x,u=y;p<u;p+=3){const g=p,v=p+1,M=p+2;r=Fo(this,a,e,i,c,h,d,g,v,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function bM(t,e,n,i,r,s,a,o){let l;if(e.side===mn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===tr,o),l===null)return null;Oo.copy(o),Oo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Oo);return c<n.near||c>n.far?null:{distance:c,point:Oo.clone(),object:t}}function Fo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Yr),t.getVertexPosition(l,$r),t.getVertexPosition(c,Kr);const h=bM(t,e,n,i,Yr,$r,Kr,Uo);if(h){r&&(No.fromBufferAttribute(r,o),Do.fromBufferAttribute(r,l),Io.fromBufferAttribute(r,c),h.uv=Yn.getInterpolation(Uo,Yr,$r,Kr,No,Do,Io,new Ye)),s&&(No.fromBufferAttribute(s,o),Do.fromBufferAttribute(s,l),Io.fromBufferAttribute(s,c),h.uv1=Yn.getInterpolation(Uo,Yr,$r,Kr,No,Do,Io,new Ye),h.uv2=h.uv1),a&&(Up.fromBufferAttribute(a,o),Op.fromBufferAttribute(a,l),Fp.fromBufferAttribute(a,c),h.normal=Yn.getInterpolation(Uo,Yr,$r,Kr,Up,Op,Fp,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};Yn.getNormal(Yr,$r,Kr,d.normal),h.face=d}return h}class fe extends vn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,m=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2));function x(y,p,u,g,v,M,b,A,C,U,E){const w=M/C,k=b/U,W=M/2,K=b/2,P=A/2,I=C+1,F=U+1;let X=0,D=0;const z=new N;for(let j=0;j<F;j++){const Z=j*k-K;for(let J=0;J<I;J++){const Y=J*w-W;z[y]=Y*g,z[p]=Z*v,z[u]=P,c.push(z.x,z.y,z.z),z[y]=0,z[p]=0,z[u]=A>0?1:-1,h.push(z.x,z.y,z.z),d.push(J/C),d.push(1-j/U),X+=1}}for(let j=0;j<U;j++)for(let Z=0;Z<C;Z++){const J=f+Z+I*j,Y=f+Z+I*(j+1),Q=f+(Z+1)+I*(j+1),ce=f+(Z+1)+I*j;l.push(J,Y,ce),l.push(Y,Q,ce),D+=6}o.addGroup(m,D,E),m+=D,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=Os(t[n]);for(const r in i)e[r]=i[r]}return e}function LM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function iv(t){return t.getRenderTarget()===null?t.outputColorSpace:et.workingColorSpace}const PM={clone:Os,merge:nn};var NM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dr extends Or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NM,this.fragmentShader=DM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=LM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class rv extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class En extends rv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ha*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_a*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Zr=-90,Qr=1;class IM extends kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(Zr,Qr,e,n);r.layers=this.layers,this.add(r);const s=new En(Zr,Qr,e,n);s.layers=this.layers,this.add(s);const a=new En(Zr,Qr,e,n);a.layers=this.layers,this.add(a);const o=new En(Zr,Qr,e,n);o.layers=this.layers,this.add(o);const l=new En(Zr,Qr,e,n);l.layers=this.layers,this.add(l);const c=new En(Zr,Qr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(d,f,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class sv extends gn{constructor(e,n,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Ds,super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class UM extends Nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ya("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ar?Gt:Un),this.texture=new sv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:In}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fe(5,5,5),s=new Dr({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Ki});s.uniforms.tEquirect.value=n;const a=new $(r,s),o=n.minFilter;return n.minFilter===Ba&&(n.minFilter=In),new IM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const nu=new N,OM=new N,FM=new je;class pr{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=nu.subVectors(i,n).cross(OM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(nu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||FM.getNormalMatrix(e),r=this.coplanarPoint(nu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Qa,ko=new N;class vd{constructor(e=new pr,n=new pr,i=new pr,r=new pr,s=new pr,a=new pr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=xi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],m=r[8],x=r[9],y=r[10],p=r[11],u=r[12],g=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,p-m,M-u).normalize(),i[1].setComponents(l+s,f+c,p+m,M+u).normalize(),i[2].setComponents(l+a,f+h,p+x,M+g).normalize(),i[3].setComponents(l-a,f-h,p-x,M-g).normalize(),i[4].setComponents(l-o,f-d,p-y,M-v).normalize(),n===xi)i[5].setComponents(l+o,f+d,p+y,M+v).normalize();else if(n===Dl)i[5].setComponents(o,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ko.x=r.normal.x>0?e.max.x:e.min.x,ko.y=r.normal.y>0?e.max.y:e.min.y,ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function av(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function kM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,f=c.usage,m=d.byteLength,x=t.createBuffer();t.bindBuffer(h,x),t.bufferData(h,d,f),c.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,d){const f=h.array,m=h._updateRange,x=h.updateRanges;if(t.bindBuffer(d,c),m.count===-1&&x.length===0&&t.bufferSubData(d,0,f),x.length!==0){for(let y=0,p=x.length;y<p;y++){const u=x[y];n?t.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):t.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):t.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}class Gi extends vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,d=e/o,f=n/l,m=[],x=[],y=[],p=[];for(let u=0;u<h;u++){const g=u*f-a;for(let v=0;v<c;v++){const M=v*d-s;x.push(M,-g,0),y.push(0,0,1),p.push(v/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const v=g+c*u,M=g+c*(u+1),b=g+1+c*(u+1),A=g+1+c*u;m.push(v,M,A),m.push(M,b,A)}this.setIndex(m),this.setAttribute("position",new zt(x,3)),this.setAttribute("normal",new zt(y,3)),this.setAttribute("uv",new zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.width,e.height,e.widthSegments,e.heightSegments)}}var zM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BM=`#ifdef USE_ALPHAHASH
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
#endif`,GM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,WM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jM=`#ifdef USE_AOMAP
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
#endif`,XM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qM=`#ifdef USE_BATCHING
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
#endif`,YM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QM=`#ifdef USE_IRIDESCENCE
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
#endif`,JM=`#ifdef USE_BUMPMAP
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
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,oS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lS=`#define PI 3.141592653589793
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
} // validated`,cS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uS=`vec3 transformedNormal = objectNormal;
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
#endif`,hS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mS="gl_FragColor = linearToOutputTexel( gl_FragColor );",gS=`
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
}`,vS=`#ifdef USE_ENVMAP
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
#endif`,_S=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xS=`#ifdef USE_ENVMAP
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
#endif`,yS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MS=`#ifdef USE_ENVMAP
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
#endif`,SS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ES=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AS=`#ifdef USE_GRADIENTMAP
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
}`,CS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,RS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PS=`uniform bool receiveShadow;
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
#endif`,NS=`#ifdef USE_ENVMAP
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
#endif`,DS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,US=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FS=`PhysicalMaterial material;
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
#endif`,kS=`struct PhysicalMaterial {
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
}`,zS=`
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
#endif`,BS=`#if defined( RE_IndirectDiffuse )
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
#endif`,GS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,XS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$S=`#if defined( USE_POINTS_UV )
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
#endif`,KS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JS=`#ifdef USE_MORPHNORMALS
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
#endif`,e1=`#ifdef USE_MORPHTARGETS
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
#endif`,t1=`#ifdef USE_MORPHTARGETS
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
#endif`,n1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o1=`#ifdef USE_NORMALMAP
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
#endif`,l1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,E1=`float getShadowMask() {
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
}`,w1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T1=`#ifdef USE_SKINNING
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
#endif`,A1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C1=`#ifdef USE_SKINNING
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
#endif`,R1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N1=`#ifdef USE_TRANSMISSION
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
#endif`,D1=`#ifdef USE_TRANSMISSION
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
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z1=`uniform sampler2D t2D;
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
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`#include <common>
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
}`,j1=`#if DEPTH_PACKING == 3200
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
}`,X1=`#define DISTANCE
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
}`,q1=`#define DISTANCE
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
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`uniform float scale;
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
}`,Z1=`uniform vec3 diffuse;
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
}`,Q1=`#include <common>
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
}`,J1=`uniform vec3 diffuse;
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
}`,eE=`#define LAMBERT
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
}`,tE=`#define LAMBERT
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
}`,nE=`#define MATCAP
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
}`,iE=`#define MATCAP
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
}`,rE=`#define NORMAL
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
}`,sE=`#define NORMAL
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
}`,aE=`#define PHONG
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
}`,oE=`#define PHONG
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
}`,lE=`#define STANDARD
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
}`,cE=`#define STANDARD
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
}`,uE=`#define TOON
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
}`,hE=`#define TOON
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
}`,dE=`uniform float size;
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
}`,fE=`uniform vec3 diffuse;
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
}`,pE=`#include <common>
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
}`,mE=`uniform vec3 color;
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
}`,gE=`uniform float rotation;
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
}`,vE=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:zM,alphahash_pars_fragment:BM,alphamap_fragment:GM,alphamap_pars_fragment:HM,alphatest_fragment:VM,alphatest_pars_fragment:WM,aomap_fragment:jM,aomap_pars_fragment:XM,batching_pars_vertex:qM,batching_vertex:YM,begin_vertex:$M,beginnormal_vertex:KM,bsdfs:ZM,iridescence_fragment:QM,bumpmap_pars_fragment:JM,clipping_planes_fragment:eS,clipping_planes_pars_fragment:tS,clipping_planes_pars_vertex:nS,clipping_planes_vertex:iS,color_fragment:rS,color_pars_fragment:sS,color_pars_vertex:aS,color_vertex:oS,common:lS,cube_uv_reflection_fragment:cS,defaultnormal_vertex:uS,displacementmap_pars_vertex:hS,displacementmap_vertex:dS,emissivemap_fragment:fS,emissivemap_pars_fragment:pS,colorspace_fragment:mS,colorspace_pars_fragment:gS,envmap_fragment:vS,envmap_common_pars_fragment:_S,envmap_pars_fragment:xS,envmap_pars_vertex:yS,envmap_physical_pars_fragment:NS,envmap_vertex:MS,fog_vertex:SS,fog_pars_vertex:ES,fog_fragment:wS,fog_pars_fragment:TS,gradientmap_pars_fragment:AS,lightmap_fragment:CS,lightmap_pars_fragment:RS,lights_lambert_fragment:bS,lights_lambert_pars_fragment:LS,lights_pars_begin:PS,lights_toon_fragment:DS,lights_toon_pars_fragment:IS,lights_phong_fragment:US,lights_phong_pars_fragment:OS,lights_physical_fragment:FS,lights_physical_pars_fragment:kS,lights_fragment_begin:zS,lights_fragment_maps:BS,lights_fragment_end:GS,logdepthbuf_fragment:HS,logdepthbuf_pars_fragment:VS,logdepthbuf_pars_vertex:WS,logdepthbuf_vertex:jS,map_fragment:XS,map_pars_fragment:qS,map_particle_fragment:YS,map_particle_pars_fragment:$S,metalnessmap_fragment:KS,metalnessmap_pars_fragment:ZS,morphcolor_vertex:QS,morphnormal_vertex:JS,morphtarget_pars_vertex:e1,morphtarget_vertex:t1,normal_fragment_begin:n1,normal_fragment_maps:i1,normal_pars_fragment:r1,normal_pars_vertex:s1,normal_vertex:a1,normalmap_pars_fragment:o1,clearcoat_normal_fragment_begin:l1,clearcoat_normal_fragment_maps:c1,clearcoat_pars_fragment:u1,iridescence_pars_fragment:h1,opaque_fragment:d1,packing:f1,premultiplied_alpha_fragment:p1,project_vertex:m1,dithering_fragment:g1,dithering_pars_fragment:v1,roughnessmap_fragment:_1,roughnessmap_pars_fragment:x1,shadowmap_pars_fragment:y1,shadowmap_pars_vertex:M1,shadowmap_vertex:S1,shadowmask_pars_fragment:E1,skinbase_vertex:w1,skinning_pars_vertex:T1,skinning_vertex:A1,skinnormal_vertex:C1,specularmap_fragment:R1,specularmap_pars_fragment:b1,tonemapping_fragment:L1,tonemapping_pars_fragment:P1,transmission_fragment:N1,transmission_pars_fragment:D1,uv_pars_fragment:I1,uv_pars_vertex:U1,uv_vertex:O1,worldpos_vertex:F1,background_vert:k1,background_frag:z1,backgroundCube_vert:B1,backgroundCube_frag:G1,cube_vert:H1,cube_frag:V1,depth_vert:W1,depth_frag:j1,distanceRGBA_vert:X1,distanceRGBA_frag:q1,equirect_vert:Y1,equirect_frag:$1,linedashed_vert:K1,linedashed_frag:Z1,meshbasic_vert:Q1,meshbasic_frag:J1,meshlambert_vert:eE,meshlambert_frag:tE,meshmatcap_vert:nE,meshmatcap_frag:iE,meshnormal_vert:rE,meshnormal_frag:sE,meshphong_vert:aE,meshphong_frag:oE,meshphysical_vert:lE,meshphysical_frag:cE,meshtoon_vert:uE,meshtoon_frag:hE,points_vert:dE,points_frag:fE,shadow_vert:pE,shadow_frag:mE,sprite_vert:gE,sprite_frag:vE},ae={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ii={basic:{uniforms:nn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:nn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new De(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:nn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:nn([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:nn([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new De(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:nn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:nn([ae.points,ae.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:nn([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:nn([ae.common,ae.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:nn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:nn([ae.sprite,ae.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:nn([ae.common,ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:nn([ae.lights,ae.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};ii.physical={uniforms:nn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const zo={r:0,b:0,g:0};function _E(t,e,n,i,r,s,a){const o=new De(0);let l=s===!0?0:1,c,h,d=null,f=0,m=null;function x(p,u){let g=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?y(o,l):v&&v.isColor&&(y(v,1),g=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ec)?(h===void 0&&(h=new $(new fe(1,1,1),new Dr({name:"BackgroundCubeMaterial",uniforms:Os(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=et.getTransfer(v.colorSpace)!==ot,(d!==v||f!==v.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,m=t.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new $(new Gi(2,2),new Dr({name:"BackgroundMaterial",uniforms:Os(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=et.getTransfer(v.colorSpace)!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,u){p.getRGB(zo,iv(t)),i.buffers.color.setClear(zo.r,zo.g,zo.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),l=u,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(o,l)},render:x}}function xE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,h=!1;function d(P,I,F,X,D){let z=!1;if(a){const j=y(X,F,I);c!==j&&(c=j,m(c.object)),z=u(P,X,F,D),z&&g(P,X,F,D)}else{const j=I.wireframe===!0;(c.geometry!==X.id||c.program!==F.id||c.wireframe!==j)&&(c.geometry=X.id,c.program=F.id,c.wireframe=j,z=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(z||h)&&(h=!1,U(P,I,F,X),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(P){return i.isWebGL2?t.bindVertexArray(P):s.bindVertexArrayOES(P)}function x(P){return i.isWebGL2?t.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function y(P,I,F){const X=F.wireframe===!0;let D=o[P.id];D===void 0&&(D={},o[P.id]=D);let z=D[I.id];z===void 0&&(z={},D[I.id]=z);let j=z[X];return j===void 0&&(j=p(f()),z[X]=j),j}function p(P){const I=[],F=[],X=[];for(let D=0;D<r;D++)I[D]=0,F[D]=0,X[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:X,object:P,attributes:{},index:null}}function u(P,I,F,X){const D=c.attributes,z=I.attributes;let j=0;const Z=F.getAttributes();for(const J in Z)if(Z[J].location>=0){const Q=D[J];let ce=z[J];if(ce===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),Q===void 0||Q.attribute!==ce||ce&&Q.data!==ce.data)return!0;j++}return c.attributesNum!==j||c.index!==X}function g(P,I,F,X){const D={},z=I.attributes;let j=0;const Z=F.getAttributes();for(const J in Z)if(Z[J].location>=0){let Q=z[J];Q===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor));const ce={};ce.attribute=Q,Q&&Q.data&&(ce.data=Q.data),D[J]=ce,j++}c.attributes=D,c.attributesNum=j,c.index=X}function v(){const P=c.newAttributes;for(let I=0,F=P.length;I<F;I++)P[I]=0}function M(P){b(P,0)}function b(P,I){const F=c.newAttributes,X=c.enabledAttributes,D=c.attributeDivisors;F[P]=1,X[P]===0&&(t.enableVertexAttribArray(P),X[P]=1),D[P]!==I&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,I),D[P]=I)}function A(){const P=c.newAttributes,I=c.enabledAttributes;for(let F=0,X=I.length;F<X;F++)I[F]!==P[F]&&(t.disableVertexAttribArray(F),I[F]=0)}function C(P,I,F,X,D,z,j){j===!0?t.vertexAttribIPointer(P,I,F,D,z):t.vertexAttribPointer(P,I,F,X,D,z)}function U(P,I,F,X){if(i.isWebGL2===!1&&(P.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const D=X.attributes,z=F.getAttributes(),j=I.defaultAttributeValues;for(const Z in z){const J=z[Z];if(J.location>=0){let Y=D[Z];if(Y===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){const Q=Y.normalized,ce=Y.itemSize,pe=n.get(Y);if(pe===void 0)continue;const _e=pe.buffer,Ie=pe.type,Oe=pe.bytesPerElement,Ce=i.isWebGL2===!0&&(Ie===t.INT||Ie===t.UNSIGNED_INT||Y.gpuType===z0);if(Y.isInterleavedBufferAttribute){const $e=Y.data,B=$e.stride,Qt=Y.offset;if($e.isInstancedInterleavedBuffer){for(let Ee=0;Ee<J.locationSize;Ee++)b(J.location+Ee,$e.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let Ee=0;Ee<J.locationSize;Ee++)M(J.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let Ee=0;Ee<J.locationSize;Ee++)C(J.location+Ee,ce/J.locationSize,Ie,Q,B*Oe,(Qt+ce/J.locationSize*Ee)*Oe,Ce)}else{if(Y.isInstancedBufferAttribute){for(let $e=0;$e<J.locationSize;$e++)b(J.location+$e,Y.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let $e=0;$e<J.locationSize;$e++)M(J.location+$e);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let $e=0;$e<J.locationSize;$e++)C(J.location+$e,ce/J.locationSize,Ie,Q,ce*Oe,ce/J.locationSize*$e*Oe,Ce)}}else if(j!==void 0){const Q=j[Z];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(J.location,Q);break;case 3:t.vertexAttrib3fv(J.location,Q);break;case 4:t.vertexAttrib4fv(J.location,Q);break;default:t.vertexAttrib1fv(J.location,Q)}}}}A()}function E(){W();for(const P in o){const I=o[P];for(const F in I){const X=I[F];for(const D in X)x(X[D].object),delete X[D];delete I[F]}delete o[P]}}function w(P){if(o[P.id]===void 0)return;const I=o[P.id];for(const F in I){const X=I[F];for(const D in X)x(X[D].object),delete X[D];delete I[F]}delete o[P.id]}function k(P){for(const I in o){const F=o[I];if(F[P.id]===void 0)continue;const X=F[P.id];for(const D in X)x(X[D].object),delete X[D];delete F[P.id]}}function W(){K(),h=!0,c!==l&&(c=l,m(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:K,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:M,disableUnusedAttributes:A}}function yE(t,e,n,i){const r=i.isWebGL2;let s;function a(h){s=h}function o(h,d){t.drawArrays(s,h,d),n.update(d,s,1)}function l(h,d,f){if(f===0)return;let m,x;if(r)m=t,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,h,d,f),n.update(d,s,f)}function c(h,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<f;x++)this.render(h[x],d[x]);else{m.multiDrawArraysWEBGL(s,h,0,d,0,f);let x=0;for(let y=0;y<f;y++)x+=d[y];n.update(x,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function ME(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,M=a||e.has("OES_texture_float"),b=v&&M,A=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:A}}function SE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new pr,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,m){const x=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||x===null||x.length===0||s&&!p)s?h(null):c();else{const g=s?0:i,v=g*4;let M=u.clippingState||null;l.value=M,M=h(x,f,v,m);for(let b=0;b!==v;++b)M[b]=n[b];u.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,m,x){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,x!==!0||p===null){const u=m+y*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,M=m;v!==y;++v,M+=4)a.copy(d[v]).applyMatrix4(g,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function EE(t){let e=new WeakMap;function n(a,o){return o===bl?a.mapping=Ds:o===lh&&(a.mapping=Is),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===bl||o===lh)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new UM(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ov extends rv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fs=4,kp=[.125,.215,.35,.446,.526,.582],vr=20,iu=new ov,zp=new De;let ru=null,su=0,au=0;const mr=(1+Math.sqrt(5))/2,Jr=1/mr,Bp=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,mr,Jr),new N(0,mr,-Jr),new N(Jr,0,mr),new N(-Jr,0,mr),new N(mr,Jr,0),new N(-mr,Jr,0)];class dh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ru=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ru,su,au),e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ds||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ru=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:Ga,format:Kn,colorSpace:Ti,depthBuffer:!1},r=Gp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wE(s)),this._blurMaterial=TE(s,e,n)}return r}_compileMaterial(e){const n=new $(this._lodPlanes[0],e);this._renderer.compile(n,iu)}_sceneToCubeUV(e,n,i,r){const o=new En(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(zp),h.toneMapping=Zi,h.autoClear=!1;const m=new mt({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),x=new $(new fe,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(zp),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):g===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const v=this._cubeSize;Bo(r,g*v,u>2?v:0,v,v),h.setRenderTarget(r),y&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ds||e.mapping===Is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new $(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Bo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,iu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bp[(r-1)%Bp.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new $(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*vr-1),y=s/x,p=isFinite(s)?1+Math.floor(h*y):vr;p>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vr}`);const u=[];let g=0;for(let C=0;C<vr;++C){const U=C/y,E=Math.exp(-U*U/2);u.push(E),C===0?g+=E:C<p&&(g+=2*E)}for(let C=0;C<u.length;C++)u[C]=u[C]/g;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-i;const M=this._sizeLods[r],b=3*M*(r>v-fs?r-v+fs:0),A=4*(this._cubeSize-M);Bo(n,b,A,3*M,2*M),l.setRenderTarget(n),l.render(d,iu)}}function wE(t){const e=[],n=[],i=[];let r=t;const s=t-fs+1+kp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-fs?l=kp[a-t+fs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,x=6,y=3,p=2,u=1,g=new Float32Array(y*x*m),v=new Float32Array(p*x*m),M=new Float32Array(u*x*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,U=A>2?0:-1,E=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];g.set(E,y*x*A),v.set(f,p*x*A);const w=[A,A,A,A,A,A];M.set(w,u*x*A)}const b=new vn;b.setAttribute("position",new An(g,y)),b.setAttribute("uv",new An(v,p)),b.setAttribute("faceIndex",new An(M,u)),e.push(b),r>fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Gp(t,e,n){const i=new Nr(t,e,n);return i.texture.mapping=ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function TE(t,e,n){const i=new Float32Array(vr),r=new N(0,1,0);return new Dr({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_d(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Hp(){return new Dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_d(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Vp(){return new Dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_d(),fragmentShader:`

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
	`}function AE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===bl||l===lh,h=l===Ds||l===Is;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return n===null&&(n=new dh(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&r(d)){n===null&&(n=new dh(t));const f=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function CE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function RE(t,e,n,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const y=f.morphAttributes[x];for(let p=0,u=y.length;p<u;p++)e.remove(y[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const x in m){const y=m[x];for(let p=0,u=y.length;p<u;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,x=d.attributes.position;let y=0;if(m!==null){const g=m.array;y=m.version;for(let v=0,M=g.length;v<M;v+=3){const b=g[v+0],A=g[v+1],C=g[v+2];f.push(b,A,A,C,C,b)}}else if(x!==void 0){const g=x.array;y=x.version;for(let v=0,M=g.length/3-1;v<M;v+=3){const b=v+0,A=v+1,C=v+2;f.push(b,A,A,C,C,b)}}else return;const p=new($0(f)?nv:tv)(f,1);p.version=y;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function bE(t,e,n,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,x){t.drawElements(s,x,o,m*l),n.update(x,s,1)}function d(m,x,y){if(y===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,x,o,m*l,y),n.update(x,s,y)}function f(m,x,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<y;u++)this.render(m[u]/l,x[u]);else{p.multiDrawElementsWEBGL(s,x,0,o,m,0,y);let u=0;for(let g=0;g<y;g++)u+=x[g];n.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function LE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function PE(t,e){return t[0]-e[0]}function NE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function DE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new dt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=x!==void 0?x.length:0;let p=s.get(h);if(p===void 0||p.count!==y){let I=function(){K.dispose(),s.delete(h),h.removeEventListener("dispose",I)};var m=I;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let E=0;v===!0&&(E=1),M===!0&&(E=2),b===!0&&(E=3);let w=h.attributes.position.count*E,k=1;w>e.maxTextureSize&&(k=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const W=new Float32Array(w*k*4*y),K=new Q0(W,w,k,y);K.type=Bi,K.needsUpdate=!0;const P=E*4;for(let F=0;F<y;F++){const X=A[F],D=C[F],z=U[F],j=w*k*4*F;for(let Z=0;Z<X.count;Z++){const J=Z*P;v===!0&&(a.fromBufferAttribute(X,Z),W[j+J+0]=a.x,W[j+J+1]=a.y,W[j+J+2]=a.z,W[j+J+3]=0),M===!0&&(a.fromBufferAttribute(D,Z),W[j+J+4]=a.x,W[j+J+5]=a.y,W[j+J+6]=a.z,W[j+J+7]=0),b===!0&&(a.fromBufferAttribute(z,Z),W[j+J+8]=a.x,W[j+J+9]=a.y,W[j+J+10]=a.z,W[j+J+11]=z.itemSize===4?a.w:1)}}p={count:y,texture:K,size:new Ye(w,k)},s.set(h,p),h.addEventListener("dispose",I)}let u=0;for(let v=0;v<f.length;v++)u+=f[v];const g=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",f),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=f===void 0?0:f.length;let y=i[h.id];if(y===void 0||y.length!==x){y=[];for(let M=0;M<x;M++)y[M]=[M,0];i[h.id]=y}for(let M=0;M<x;M++){const b=y[M];b[0]=M,b[1]=f[M]}y.sort(NE);for(let M=0;M<8;M++)M<x&&y[M][1]?(o[M][0]=y[M][0],o[M][1]=y[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(PE);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let g=0;for(let M=0;M<8;M++){const b=o[M],A=b[0],C=b[1];A!==Number.MAX_SAFE_INTEGER&&C?(p&&h.getAttribute("morphTarget"+M)!==p[A]&&h.setAttribute("morphTarget"+M,p[A]),u&&h.getAttribute("morphNormal"+M)!==u[A]&&h.setAttribute("morphNormal"+M,u[A]),r[M]=C,g+=C):(p&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),u&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),r[M]=0)}const v=h.morphTargetsRelative?1:1-g;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function IE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class lv extends gn{constructor(e,n,i,r,s,a,o,l,c,h){if(h=h!==void 0?h:Tr,h!==Tr&&h!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Tr&&(i=zi),i===void 0&&h===Us&&(i=wr),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const cv=new gn,uv=new lv(1,1);uv.compareFunction=Y0;const hv=new Q0,dv=new _M,fv=new sv,Wp=[],jp=[],Xp=new Float32Array(16),qp=new Float32Array(9),Yp=new Float32Array(4);function Ws(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Wp[r];if(s===void 0&&(s=new Float32Array(r),Wp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ic(t,e){let n=jp[e];n===void 0&&(n=new Int32Array(e),jp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function UE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function FE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function zE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Pt(n,i))return;Yp.set(i),t.uniformMatrix2fv(this.addr,!1,Yp),Nt(n,i)}}function BE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Pt(n,i))return;qp.set(i),t.uniformMatrix3fv(this.addr,!1,qp),Nt(n,i)}}function GE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Pt(n,i))return;Xp.set(i),t.uniformMatrix4fv(this.addr,!1,Xp),Nt(n,i)}}function HE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function XE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function YE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function KE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?uv:cv;n.setTexture2D(e||s,r)}function ZE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||dv,r)}function QE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||fv,r)}function JE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||hv,r)}function ew(t){switch(t){case 5126:return UE;case 35664:return OE;case 35665:return FE;case 35666:return kE;case 35674:return zE;case 35675:return BE;case 35676:return GE;case 5124:case 35670:return HE;case 35667:case 35671:return VE;case 35668:case 35672:return WE;case 35669:case 35673:return jE;case 5125:return XE;case 36294:return qE;case 36295:return YE;case 36296:return $E;case 35678:case 36198:case 36298:case 36306:case 35682:return KE;case 35679:case 36299:case 36307:return ZE;case 35680:case 36300:case 36308:case 36293:return QE;case 36289:case 36303:case 36311:case 36292:return JE}}function tw(t,e){t.uniform1fv(this.addr,e)}function nw(t,e){const n=Ws(e,this.size,2);t.uniform2fv(this.addr,n)}function iw(t,e){const n=Ws(e,this.size,3);t.uniform3fv(this.addr,n)}function rw(t,e){const n=Ws(e,this.size,4);t.uniform4fv(this.addr,n)}function sw(t,e){const n=Ws(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function aw(t,e){const n=Ws(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ow(t,e){const n=Ws(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function lw(t,e){t.uniform1iv(this.addr,e)}function cw(t,e){t.uniform2iv(this.addr,e)}function uw(t,e){t.uniform3iv(this.addr,e)}function hw(t,e){t.uniform4iv(this.addr,e)}function dw(t,e){t.uniform1uiv(this.addr,e)}function fw(t,e){t.uniform2uiv(this.addr,e)}function pw(t,e){t.uniform3uiv(this.addr,e)}function mw(t,e){t.uniform4uiv(this.addr,e)}function gw(t,e,n){const i=this.cache,r=e.length,s=ic(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||cv,s[a])}function vw(t,e,n){const i=this.cache,r=e.length,s=ic(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||dv,s[a])}function _w(t,e,n){const i=this.cache,r=e.length,s=ic(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||fv,s[a])}function xw(t,e,n){const i=this.cache,r=e.length,s=ic(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||hv,s[a])}function yw(t){switch(t){case 5126:return tw;case 35664:return nw;case 35665:return iw;case 35666:return rw;case 35674:return sw;case 35675:return aw;case 35676:return ow;case 5124:case 35670:return lw;case 35667:case 35671:return cw;case 35668:case 35672:return uw;case 35669:case 35673:return hw;case 5125:return dw;case 36294:return fw;case 36295:return pw;case 36296:return mw;case 35678:case 36198:case 36298:case 36306:case 35682:return gw;case 35679:case 36299:case 36307:return vw;case 35680:case 36300:case 36308:case 36293:return _w;case 36289:case 36303:case 36311:case 36292:return xw}}class Mw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ew(n.type)}}class Sw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yw(n.type)}}class Ew{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const ou=/(\w+)(\])?(\[|\.)?/g;function $p(t,e){t.seq.push(e),t.map[e.id]=e}function ww(t,e,n){const i=t.name,r=i.length;for(ou.lastIndex=0;;){const s=ou.exec(i),a=ou.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){$p(n,c===void 0?new Mw(o,t,e):new Sw(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new Ew(o),$p(n,d)),n=d}}}class nl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);ww(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Kp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Tw=37297;let Aw=0;function Cw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Rw(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===Nl&&n===Pl?i="LinearDisplayP3ToLinearSRGB":e===Pl&&n===Nl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ti:case tc:return[i,"LinearTransferOETF"];case Gt:case pd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Zp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Cw(t.getShaderSource(e),a)}else return r}function bw(t,e){const n=Rw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Lw(t,e){let n;switch(e){case by:n="Linear";break;case Ly:n="Reinhard";break;case Py:n="OptimizedCineon";break;case F0:n="ACESFilmic";break;case Dy:n="AgX";break;case Ny:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Pw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ps).join(`
`)}function Nw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ps).join(`
`)}function Dw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Iw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ps(t){return t!==""}function Qp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uw=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(t){return t.replace(Uw,Fw)}const Ow=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Fw(t,e){let n=ke[e];if(n===void 0){const i=Ow.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fh(n)}const kw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function em(t){return t.replace(kw,zw)}function zw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===I0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===U0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function Gw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ds:case Is:e="ENVMAP_TYPE_CUBE";break;case ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function Vw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case O0:e="ENVMAP_BLENDING_MULTIPLY";break;case Cy:e="ENVMAP_BLENDING_MIX";break;case Ry:e="ENVMAP_BLENDING_ADD";break}return e}function Ww(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function jw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Bw(n),c=Gw(n),h=Hw(n),d=Vw(n),f=Ww(n),m=n.isWebGL2?"":Pw(n),x=Nw(n),y=Dw(s),p=r.createProgram();let u,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ps).join(`
`),u.length>0&&(u+=`
`),g=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ps).join(`
`),g.length>0&&(g+=`
`)):(u=[tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),g=[m,tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zi?"#define TONE_MAPPING":"",n.toneMapping!==Zi?ke.tonemapping_pars_fragment:"",n.toneMapping!==Zi?Lw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,bw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ps).join(`
`)),a=fh(a),a=Qp(a,n),a=Jp(a,n),o=fh(o),o=Qp(o,n),o=Jp(o,n),a=em(a),o=em(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=v+u+a,b=v+g+o,A=Kp(r,r.VERTEX_SHADER,M),C=Kp(r,r.FRAGMENT_SHADER,b);r.attachShader(p,A),r.attachShader(p,C),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function U(W){if(t.debug.checkShaderErrors){const K=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(A).trim(),I=r.getShaderInfoLog(C).trim();let F=!0,X=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,A,C);else{const D=Zp(r,A,"vertex"),z=Zp(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+D+`
`+z)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(P===""||I==="")&&(X=!1);X&&(W.diagnostics={runnable:F,programLog:K,vertexShader:{log:P,prefix:u},fragmentShader:{log:I,prefix:g}})}r.deleteShader(A),r.deleteShader(C),E=new nl(r,p),w=Iw(r,p)}let E;this.getUniforms=function(){return E===void 0&&U(this),E};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(p,Tw)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Aw++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=C,this}let Xw=0;class qw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Yw(e),n.set(e,i)),i}}class Yw{constructor(e){this.id=Xw++,this.code=e,this.usedTimes=0}}function $w(t,e,n,i,r,s,a){const o=new J0,l=new qw,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function p(E,w,k,W,K){const P=W.fog,I=K.geometry,F=E.isMeshStandardMaterial?W.environment:null,X=(E.isMeshStandardMaterial?n:e).get(E.envMap||F),D=X&&X.mapping===ec?X.image.height:null,z=x[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Z=j!==void 0?j.length:0;let J=0;I.morphAttributes.position!==void 0&&(J=1),I.morphAttributes.normal!==void 0&&(J=2),I.morphAttributes.color!==void 0&&(J=3);let Y,Q,ce,pe;if(z){const Jt=ii[z];Y=Jt.vertexShader,Q=Jt.fragmentShader}else Y=E.vertexShader,Q=E.fragmentShader,l.update(E),ce=l.getVertexShaderID(E),pe=l.getFragmentShaderID(E);const _e=t.getRenderTarget(),Ie=K.isInstancedMesh===!0,Oe=K.isBatchedMesh===!0,Ce=!!E.map,$e=!!E.matcap,B=!!X,Qt=!!E.aoMap,Ee=!!E.lightMap,Pe=!!E.bumpMap,xe=!!E.normalMap,ft=!!E.displacementMap,Be=!!E.emissiveMap,R=!!E.metalnessMap,S=!!E.roughnessMap,H=E.anisotropy>0,ie=E.clearcoat>0,te=E.iridescence>0,re=E.sheen>0,ye=E.transmission>0,ue=H&&!!E.anisotropyMap,me=ie&&!!E.clearcoatMap,Ae=ie&&!!E.clearcoatNormalMap,Ge=ie&&!!E.clearcoatRoughnessMap,ee=te&&!!E.iridescenceMap,Je=te&&!!E.iridescenceThicknessMap,Xe=re&&!!E.sheenColorMap,Le=re&&!!E.sheenRoughnessMap,Se=!!E.specularMap,ge=!!E.specularColorMap,Fe=!!E.specularIntensityMap,Ze=ye&&!!E.transmissionMap,xt=ye&&!!E.thicknessMap,Ve=!!E.gradientMap,se=!!E.alphaMap,L=E.alphaTest>0,oe=!!E.alphaHash,le=!!E.extensions,Re=!!I.attributes.uv1,we=!!I.attributes.uv2,nt=!!I.attributes.uv3;let it=Zi;return E.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(it=t.toneMapping),{isWebGL2:h,shaderID:z,shaderType:E.type,shaderName:E.name,vertexShader:Y,fragmentShader:Q,defines:E.defines,customVertexShaderID:ce,customFragmentShaderID:pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Oe,instancing:Ie,instancingColor:Ie&&K.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_e===null?t.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Ti,map:Ce,matcap:$e,envMap:B,envMapMode:B&&X.mapping,envMapCubeUVHeight:D,aoMap:Qt,lightMap:Ee,bumpMap:Pe,normalMap:xe,displacementMap:f&&ft,emissiveMap:Be,normalMapObjectSpace:xe&&E.normalMapType===jy,normalMapTangentSpace:xe&&E.normalMapType===q0,metalnessMap:R,roughnessMap:S,anisotropy:H,anisotropyMap:ue,clearcoat:ie,clearcoatMap:me,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ge,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:Je,sheen:re,sheenColorMap:Xe,sheenRoughnessMap:Le,specularMap:Se,specularColorMap:ge,specularIntensityMap:Fe,transmission:ye,transmissionMap:Ze,thicknessMap:xt,gradientMap:Ve,opaque:E.transparent===!1&&E.blending===Ss,alphaMap:se,alphaTest:L,alphaHash:oe,combine:E.combine,mapUv:Ce&&y(E.map.channel),aoMapUv:Qt&&y(E.aoMap.channel),lightMapUv:Ee&&y(E.lightMap.channel),bumpMapUv:Pe&&y(E.bumpMap.channel),normalMapUv:xe&&y(E.normalMap.channel),displacementMapUv:ft&&y(E.displacementMap.channel),emissiveMapUv:Be&&y(E.emissiveMap.channel),metalnessMapUv:R&&y(E.metalnessMap.channel),roughnessMapUv:S&&y(E.roughnessMap.channel),anisotropyMapUv:ue&&y(E.anisotropyMap.channel),clearcoatMapUv:me&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Le&&y(E.sheenRoughnessMap.channel),specularMapUv:Se&&y(E.specularMap.channel),specularColorMapUv:ge&&y(E.specularColorMap.channel),specularIntensityMapUv:Fe&&y(E.specularIntensityMap.channel),transmissionMapUv:Ze&&y(E.transmissionMap.channel),thicknessMapUv:xt&&y(E.thicknessMap.channel),alphaMapUv:se&&y(E.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(xe||H),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:we,vertexUv3s:nt,pointsUvs:K.isPoints===!0&&!!I.attributes.uv&&(Ce||se),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:J,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:it,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ce&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===si,flipSided:E.side===mn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:le&&E.extensions.derivatives===!0,extensionFragDepth:le&&E.extensions.fragDepth===!0,extensionDrawBuffers:le&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)w.push(k),w.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(g(w,E),v(w,E),w.push(t.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function g(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function v(E,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),E.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function M(E){const w=x[E.type];let k;if(w){const W=ii[w];k=PM.clone(W.uniforms)}else k=E.uniforms;return k}function b(E,w){let k;for(let W=0,K=c.length;W<K;W++){const P=c[W];if(P.cacheKey===w){k=P,++k.usedTimes;break}}return k===void 0&&(k=new jw(t,w,E,s),c.push(k)),k}function A(E){if(--E.usedTimes===0){const w=c.indexOf(E);c[w]=c[c.length-1],c.pop(),E.destroy()}}function C(E){l.remove(E)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:M,acquireProgram:b,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:U}}function Kw(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Zw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function nm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function im(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,f,m,x,y,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:x,renderOrder:d.renderOrder,z:y,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=x,u.renderOrder=d.renderOrder,u.z=y,u.group=p),e++,u}function o(d,f,m,x,y,p){const u=a(d,f,m,x,y,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(d,f,m,x,y,p){const u=a(d,f,m,x,y,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||Zw),i.length>1&&i.sort(f||nm),r.length>1&&r.sort(f||nm)}function h(){for(let d=e,f=t.length;d<f;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Qw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new im,t.set(i,[a])):r>=s.length?(a=new im,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Jw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new De};break;case"SpotLight":n={position:new N,direction:new N,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new De,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new De,groundColor:new De};break;case"RectAreaLight":n={color:new De,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function eT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let tT=0;function nT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function iT(t,e){const n=new Jw,i=eT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new N);const s=new N,a=new Et,o=new Et;function l(h,d){let f=0,m=0,x=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let y=0,p=0,u=0,g=0,v=0,M=0,b=0,A=0,C=0,U=0,E=0;h.sort(nT);const w=d===!0?Math.PI:1;for(let W=0,K=h.length;W<K;W++){const P=h[W],I=P.color,F=P.intensity,X=P.distance,D=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=I.r*F*w,m+=I.g*F*w,x+=I.b*F*w;else if(P.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(P.sh.coefficients[z],F);E++}else if(P.isDirectionalLight){const z=n.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const j=P.shadow,Z=i.get(P);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,r.directionalShadow[y]=Z,r.directionalShadowMap[y]=D,r.directionalShadowMatrix[y]=P.shadow.matrix,M++}r.directional[y]=z,y++}else if(P.isSpotLight){const z=n.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(I).multiplyScalar(F*w),z.distance=X,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,r.spot[u]=z;const j=P.shadow;if(P.map&&(r.spotLightMap[C]=P.map,C++,j.updateMatrices(P),P.castShadow&&U++),r.spotLightMatrix[u]=j.matrix,P.castShadow){const Z=i.get(P);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,r.spotShadow[u]=Z,r.spotShadowMap[u]=D,A++}u++}else if(P.isRectAreaLight){const z=n.get(P);z.color.copy(I).multiplyScalar(F),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),r.rectArea[g]=z,g++}else if(P.isPointLight){const z=n.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*w),z.distance=P.distance,z.decay=P.decay,P.castShadow){const j=P.shadow,Z=i.get(P);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,Z.shadowCameraNear=j.camera.near,Z.shadowCameraFar=j.camera.far,r.pointShadow[p]=Z,r.pointShadowMap[p]=D,r.pointShadowMatrix[p]=P.shadow.matrix,b++}r.point[p]=z,p++}else if(P.isHemisphereLight){const z=n.get(P);z.skyColor.copy(P.color).multiplyScalar(F*w),z.groundColor.copy(P.groundColor).multiplyScalar(F*w),r.hemi[v]=z,v++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=x;const k=r.hash;(k.directionalLength!==y||k.pointLength!==p||k.spotLength!==u||k.rectAreaLength!==g||k.hemiLength!==v||k.numDirectionalShadows!==M||k.numPointShadows!==b||k.numSpotShadows!==A||k.numSpotMaps!==C||k.numLightProbes!==E)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=g,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=A+C-U,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=E,k.directionalLength=y,k.pointLength=p,k.spotLength=u,k.rectAreaLength=g,k.hemiLength=v,k.numDirectionalShadows=M,k.numPointShadows=b,k.numSpotShadows=A,k.numSpotMaps=C,k.numLightProbes=E,r.version=tT++)}function c(h,d){let f=0,m=0,x=0,y=0,p=0;const u=d.matrixWorldInverse;for(let g=0,v=h.length;g<v;g++){const M=h[g];if(M.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),f++}else if(M.isSpotLight){const b=r.spot[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),x++}else if(M.isRectAreaLight){const b=r.rectArea[y];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),o.identity(),a.copy(M.matrixWorld),a.premultiply(u),o.extractRotation(a),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),m++}else if(M.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function rm(t,e){const n=new iT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function rT(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new rm(t,e),n.set(s,[l])):a>=o.length?(l=new rm(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class sT extends Or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aT extends Or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lT=`uniform sampler2D shadow_pass;
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
}`;function cT(t,e,n){let i=new vd;const r=new Ye,s=new Ye,a=new dt,o=new sT({depthPacking:Wy}),l=new aT,c={},h=n.maxTextureSize,d={[tr]:mn,[mn]:tr,[si]:si},f=new Dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:oT,fragmentShader:lT}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new vn;x.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new $(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=I0;let u=this.type;this.render=function(A,C,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),w=t.getActiveCubeFace(),k=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Ki),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const K=u!==pi&&this.type===pi,P=u===pi&&this.type!==pi;for(let I=0,F=A.length;I<F;I++){const X=A[I],D=X.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const z=D.getFrameExtents();if(r.multiply(z),s.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/z.x),r.x=s.x*z.x,D.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/z.y),r.y=s.y*z.y,D.mapSize.y=s.y)),D.map===null||K===!0||P===!0){const Z=this.type!==pi?{minFilter:sn,magFilter:sn}:{};D.map!==null&&D.map.dispose(),D.map=new Nr(r.x,r.y,Z),D.map.texture.name=X.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const j=D.getViewportCount();for(let Z=0;Z<j;Z++){const J=D.getViewport(Z);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),W.viewport(a),D.updateMatrices(X,Z),i=D.getFrustum(),M(C,U,D.camera,X,this.type)}D.isPointLightShadow!==!0&&this.type===pi&&g(D,U),D.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(E,w,k)};function g(A,C){const U=e.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Nr(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,U,f,y,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,U,m,y,null)}function v(A,C,U,E){let w=null;const k=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(k!==void 0)w=k;else if(w=U.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const W=w.uuid,K=C.uuid;let P=c[W];P===void 0&&(P={},c[W]=P);let I=P[K];I===void 0&&(I=w.clone(),P[K]=I,C.addEventListener("dispose",b)),w=I}if(w.visible=C.visible,w.wireframe=C.wireframe,E===pi?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:d[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const W=t.properties.get(w);W.light=U}return w}function M(A,C,U,E,w){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===pi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const K=e.update(A),P=A.material;if(Array.isArray(P)){const I=K.groups;for(let F=0,X=I.length;F<X;F++){const D=I[F],z=P[D.materialIndex];if(z&&z.visible){const j=v(A,z,E,w);A.onBeforeShadow(t,A,C,U,K,j,D),t.renderBufferDirect(U,null,K,j,A,D),A.onAfterShadow(t,A,C,U,K,j,D)}}}else if(P.visible){const I=v(A,P,E,w);A.onBeforeShadow(t,A,C,U,K,I,null),t.renderBufferDirect(U,null,K,I,A,null),A.onAfterShadow(t,A,C,U,K,I,null)}}const W=A.children;for(let K=0,P=W.length;K<P;K++)M(W[K],C,U,E,w)}function b(A){A.target.removeEventListener("dispose",b);for(const U in c){const E=c[U],w=A.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}function uT(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const oe=new dt;let le=null;const Re=new dt(0,0,0,0);return{setMask:function(we){le!==we&&!L&&(t.colorMask(we,we,we,we),le=we)},setLocked:function(we){L=we},setClear:function(we,nt,it,Dt,Jt){Jt===!0&&(we*=Dt,nt*=Dt,it*=Dt),oe.set(we,nt,it,Dt),Re.equals(oe)===!1&&(t.clearColor(we,nt,it,Dt),Re.copy(oe))},reset:function(){L=!1,le=null,Re.set(-1,0,0,0)}}}function s(){let L=!1,oe=null,le=null,Re=null;return{setTest:function(we){we?Oe(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(we){oe!==we&&!L&&(t.depthMask(we),oe=we)},setFunc:function(we){if(le!==we){switch(we){case yy:t.depthFunc(t.NEVER);break;case My:t.depthFunc(t.ALWAYS);break;case Sy:t.depthFunc(t.LESS);break;case Rl:t.depthFunc(t.LEQUAL);break;case Ey:t.depthFunc(t.EQUAL);break;case wy:t.depthFunc(t.GEQUAL);break;case Ty:t.depthFunc(t.GREATER);break;case Ay:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=we}},setLocked:function(we){L=we},setClear:function(we){Re!==we&&(t.clearDepth(we),Re=we)},reset:function(){L=!1,oe=null,le=null,Re=null}}}function a(){let L=!1,oe=null,le=null,Re=null,we=null,nt=null,it=null,Dt=null,Jt=null;return{setTest:function(rt){L||(rt?Oe(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(rt){oe!==rt&&!L&&(t.stencilMask(rt),oe=rt)},setFunc:function(rt,en,ei){(le!==rt||Re!==en||we!==ei)&&(t.stencilFunc(rt,en,ei),le=rt,Re=en,we=ei)},setOp:function(rt,en,ei){(nt!==rt||it!==en||Dt!==ei)&&(t.stencilOp(rt,en,ei),nt=rt,it=en,Dt=ei)},setLocked:function(rt){L=rt},setClear:function(rt){Jt!==rt&&(t.clearStencil(rt),Jt=rt)},reset:function(){L=!1,oe=null,le=null,Re=null,we=null,nt=null,it=null,Dt=null,Jt=null}}}const o=new r,l=new s,c=new a,h=new WeakMap,d=new WeakMap;let f={},m={},x=new WeakMap,y=[],p=null,u=!1,g=null,v=null,M=null,b=null,A=null,C=null,U=null,E=new De(0,0,0),w=0,k=!1,W=null,K=null,P=null,I=null,F=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,z=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(j)[1]),D=z>=1):j.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),D=z>=2);let Z=null,J={};const Y=t.getParameter(t.SCISSOR_BOX),Q=t.getParameter(t.VIEWPORT),ce=new dt().fromArray(Y),pe=new dt().fromArray(Q);function _e(L,oe,le,Re){const we=new Uint8Array(4),nt=t.createTexture();t.bindTexture(L,nt),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let it=0;it<le;it++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(oe,0,t.RGBA,1,1,Re,0,t.RGBA,t.UNSIGNED_BYTE,we):t.texImage2D(oe+it,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,we);return nt}const Ie={};Ie[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),Ie[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ie[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ie[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(t.DEPTH_TEST),l.setFunc(Rl),Be(!1),R(Gf),Oe(t.CULL_FACE),xe(Ki);function Oe(L){f[L]!==!0&&(t.enable(L),f[L]=!0)}function Ce(L){f[L]!==!1&&(t.disable(L),f[L]=!1)}function $e(L,oe){return m[L]!==oe?(t.bindFramebuffer(L,oe),m[L]=oe,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=oe),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=oe)),!0):!1}function B(L,oe){let le=y,Re=!1;if(L)if(le=x.get(oe),le===void 0&&(le=[],x.set(oe,le)),L.isWebGLMultipleRenderTargets){const we=L.texture;if(le.length!==we.length||le[0]!==t.COLOR_ATTACHMENT0){for(let nt=0,it=we.length;nt<it;nt++)le[nt]=t.COLOR_ATTACHMENT0+nt;le.length=we.length,Re=!0}}else le[0]!==t.COLOR_ATTACHMENT0&&(le[0]=t.COLOR_ATTACHMENT0,Re=!0);else le[0]!==t.BACK&&(le[0]=t.BACK,Re=!0);Re&&(n.isWebGL2?t.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Qt(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const Ee={[gr]:t.FUNC_ADD,[sy]:t.FUNC_SUBTRACT,[ay]:t.FUNC_REVERSE_SUBTRACT};if(i)Ee[Wf]=t.MIN,Ee[jf]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ee[Wf]=L.MIN_EXT,Ee[jf]=L.MAX_EXT)}const Pe={[oy]:t.ZERO,[ly]:t.ONE,[cy]:t.SRC_COLOR,[ah]:t.SRC_ALPHA,[my]:t.SRC_ALPHA_SATURATE,[fy]:t.DST_COLOR,[hy]:t.DST_ALPHA,[uy]:t.ONE_MINUS_SRC_COLOR,[oh]:t.ONE_MINUS_SRC_ALPHA,[py]:t.ONE_MINUS_DST_COLOR,[dy]:t.ONE_MINUS_DST_ALPHA,[gy]:t.CONSTANT_COLOR,[vy]:t.ONE_MINUS_CONSTANT_COLOR,[_y]:t.CONSTANT_ALPHA,[xy]:t.ONE_MINUS_CONSTANT_ALPHA};function xe(L,oe,le,Re,we,nt,it,Dt,Jt,rt){if(L===Ki){u===!0&&(Ce(t.BLEND),u=!1);return}if(u===!1&&(Oe(t.BLEND),u=!0),L!==ry){if(L!==g||rt!==k){if((v!==gr||A!==gr)&&(t.blendEquation(t.FUNC_ADD),v=gr,A=gr),rt)switch(L){case Ss:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ns:t.blendFunc(t.ONE,t.ONE);break;case Hf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ss:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ns:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Hf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,b=null,C=null,U=null,E.set(0,0,0),w=0,g=L,k=rt}return}we=we||oe,nt=nt||le,it=it||Re,(oe!==v||we!==A)&&(t.blendEquationSeparate(Ee[oe],Ee[we]),v=oe,A=we),(le!==M||Re!==b||nt!==C||it!==U)&&(t.blendFuncSeparate(Pe[le],Pe[Re],Pe[nt],Pe[it]),M=le,b=Re,C=nt,U=it),(Dt.equals(E)===!1||Jt!==w)&&(t.blendColor(Dt.r,Dt.g,Dt.b,Jt),E.copy(Dt),w=Jt),g=L,k=!1}function ft(L,oe){L.side===si?Ce(t.CULL_FACE):Oe(t.CULL_FACE);let le=L.side===mn;oe&&(le=!le),Be(le),L.blending===Ss&&L.transparent===!1?xe(Ki):xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Re=L.stencilWrite;c.setTest(Re),Re&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),H(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Oe(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){W!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),W=L)}function R(L){L!==ny?(Oe(t.CULL_FACE),L!==K&&(L===Gf?t.cullFace(t.BACK):L===iy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),K=L}function S(L){L!==P&&(D&&t.lineWidth(L),P=L)}function H(L,oe,le){L?(Oe(t.POLYGON_OFFSET_FILL),(I!==oe||F!==le)&&(t.polygonOffset(oe,le),I=oe,F=le)):Ce(t.POLYGON_OFFSET_FILL)}function ie(L){L?Oe(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function te(L){L===void 0&&(L=t.TEXTURE0+X-1),Z!==L&&(t.activeTexture(L),Z=L)}function re(L,oe,le){le===void 0&&(Z===null?le=t.TEXTURE0+X-1:le=Z);let Re=J[le];Re===void 0&&(Re={type:void 0,texture:void 0},J[le]=Re),(Re.type!==L||Re.texture!==oe)&&(Z!==le&&(t.activeTexture(le),Z=le),t.bindTexture(L,oe||Ie[L]),Re.type=L,Re.texture=oe)}function ye(){const L=J[Z];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ue(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Je(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(L){ce.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ce.copy(L))}function Ze(L){pe.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),pe.copy(L))}function xt(L,oe){let le=d.get(oe);le===void 0&&(le=new WeakMap,d.set(oe,le));let Re=le.get(L);Re===void 0&&(Re=t.getUniformBlockIndex(oe,L.name),le.set(L,Re))}function Ve(L,oe){const Re=d.get(oe).get(L);h.get(oe)!==Re&&(t.uniformBlockBinding(oe,Re,L.__bindingPointIndex),h.set(oe,Re))}function se(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},Z=null,J={},m={},x=new WeakMap,y=[],p=null,u=!1,g=null,v=null,M=null,b=null,A=null,C=null,U=null,E=new De(0,0,0),w=0,k=!1,W=null,K=null,P=null,I=null,F=null,ce.set(0,0,t.canvas.width,t.canvas.height),pe.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Oe,disable:Ce,bindFramebuffer:$e,drawBuffers:B,useProgram:Qt,setBlending:xe,setMaterial:ft,setFlipSided:Be,setCullFace:R,setLineWidth:S,setPolygonOffset:H,setScissorTest:ie,activeTexture:te,bindTexture:re,unbindTexture:ye,compressedTexImage2D:ue,compressedTexImage3D:me,texImage2D:Se,texImage3D:ge,updateUBOMapping:xt,uniformBlockBinding:Ve,texStorage2D:Xe,texStorage3D:Le,texSubImage2D:Ae,texSubImage3D:Ge,compressedTexSubImage2D:ee,compressedTexSubImage3D:Je,scissor:Fe,viewport:Ze,reset:se}}function hT(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,S){return m?new OffscreenCanvas(R,S):Ul("canvas")}function y(R,S,H,ie){let te=1;if((R.width>ie||R.height>ie)&&(te=ie/Math.max(R.width,R.height)),te<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const re=S?Il:Math.floor,ye=re(te*R.width),ue=re(te*R.height);d===void 0&&(d=x(ye,ue));const me=H?x(ye,ue):d;return me.width=ye,me.height=ue,me.getContext("2d").drawImage(R,0,0,ye,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ye+"x"+ue+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return hh(R.width)&&hh(R.height)}function u(R){return o?!1:R.wrapS!==$n||R.wrapT!==$n||R.minFilter!==sn&&R.minFilter!==In}function g(R,S){return R.generateMipmaps&&S&&R.minFilter!==sn&&R.minFilter!==In}function v(R){t.generateMipmap(R)}function M(R,S,H,ie,te=!1){if(o===!1)return S;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=S;if(S===t.RED&&(H===t.FLOAT&&(re=t.R32F),H===t.HALF_FLOAT&&(re=t.R16F),H===t.UNSIGNED_BYTE&&(re=t.R8)),S===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(re=t.R8UI),H===t.UNSIGNED_SHORT&&(re=t.R16UI),H===t.UNSIGNED_INT&&(re=t.R32UI),H===t.BYTE&&(re=t.R8I),H===t.SHORT&&(re=t.R16I),H===t.INT&&(re=t.R32I)),S===t.RG&&(H===t.FLOAT&&(re=t.RG32F),H===t.HALF_FLOAT&&(re=t.RG16F),H===t.UNSIGNED_BYTE&&(re=t.RG8)),S===t.RGBA){const ye=te?Ll:et.getTransfer(ie);H===t.FLOAT&&(re=t.RGBA32F),H===t.HALF_FLOAT&&(re=t.RGBA16F),H===t.UNSIGNED_BYTE&&(re=ye===ot?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function b(R,S,H){return g(R,H)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==In?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){return R===sn||R===Xf||R===Ic?t.NEAREST:t.LINEAR}function C(R){const S=R.target;S.removeEventListener("dispose",C),E(S),S.isVideoTexture&&h.delete(S)}function U(R){const S=R.target;S.removeEventListener("dispose",U),k(S)}function E(R){const S=i.get(R);if(S.__webglInit===void 0)return;const H=R.source,ie=f.get(H);if(ie){const te=ie[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(R),Object.keys(ie).length===0&&f.delete(H)}i.remove(R)}function w(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const H=R.source,ie=f.get(H);delete ie[S.__cacheKey],a.memory.textures--}function k(R){const S=R.texture,H=i.get(R),ie=i.get(S);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(H.__webglFramebuffer[te]))for(let re=0;re<H.__webglFramebuffer[te].length;re++)t.deleteFramebuffer(H.__webglFramebuffer[te][re]);else t.deleteFramebuffer(H.__webglFramebuffer[te]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[te])}else{if(Array.isArray(H.__webglFramebuffer))for(let te=0;te<H.__webglFramebuffer.length;te++)t.deleteFramebuffer(H.__webglFramebuffer[te]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let te=0;te<H.__webglColorRenderbuffer.length;te++)H.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[te]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let te=0,re=S.length;te<re;te++){const ye=i.get(S[te]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),a.memory.textures--),i.remove(S[te])}i.remove(S),i.remove(R)}let W=0;function K(){W=0}function P(){const R=W;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),W+=1,R}function I(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function F(R,S){const H=i.get(R);if(R.isVideoTexture&&ft(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(H,R,S);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+S)}function X(R,S){const H=i.get(R);if(R.version>0&&H.__version!==R.version){ce(H,R,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+S)}function D(R,S){const H=i.get(R);if(R.version>0&&H.__version!==R.version){ce(H,R,S);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+S)}function z(R,S){const H=i.get(R);if(R.version>0&&H.__version!==R.version){pe(H,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+S)}const j={[Mr]:t.REPEAT,[$n]:t.CLAMP_TO_EDGE,[ch]:t.MIRRORED_REPEAT},Z={[sn]:t.NEAREST,[Xf]:t.NEAREST_MIPMAP_NEAREST,[Ic]:t.NEAREST_MIPMAP_LINEAR,[In]:t.LINEAR,[Iy]:t.LINEAR_MIPMAP_NEAREST,[Ba]:t.LINEAR_MIPMAP_LINEAR},J={[Xy]:t.NEVER,[Qy]:t.ALWAYS,[qy]:t.LESS,[Y0]:t.LEQUAL,[Yy]:t.EQUAL,[Zy]:t.GEQUAL,[$y]:t.GREATER,[Ky]:t.NOTEQUAL};function Y(R,S,H){if(H?(t.texParameteri(R,t.TEXTURE_WRAP_S,j[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,j[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,j[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Z[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Z[S.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==$n||S.wrapT!==$n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,A(S.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==sn&&S.minFilter!==In&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===sn||S.minFilter!==Ic&&S.minFilter!==Ba||S.type===Bi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Ga&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Q(R,S){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C));const ie=S.source;let te=f.get(ie);te===void 0&&(te={},f.set(ie,te));const re=I(S);if(re!==R.__cacheKey){te[re]===void 0&&(te[re]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),te[re].usedTimes++;const ye=te[R.__cacheKey];ye!==void 0&&(te[R.__cacheKey].usedTimes--,ye.usedTimes===0&&w(S)),R.__cacheKey=re,R.__webglTexture=te[re].texture}return H}function ce(R,S,H){let ie=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=t.TEXTURE_3D);const te=Q(R,S),re=S.source;n.bindTexture(ie,R.__webglTexture,t.TEXTURE0+H);const ye=i.get(re);if(re.version!==ye.__version||te===!0){n.activeTexture(t.TEXTURE0+H);const ue=et.getPrimaries(et.workingColorSpace),me=S.colorSpace===Un?null:et.getPrimaries(S.colorSpace),Ae=S.colorSpace===Un||ue===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ge=u(S)&&p(S.image)===!1;let ee=y(S.image,Ge,!1,r.maxTextureSize);ee=Be(S,ee);const Je=p(ee)||o,Xe=s.convert(S.format,S.colorSpace);let Le=s.convert(S.type),Se=M(S.internalFormat,Xe,Le,S.colorSpace,S.isVideoTexture);Y(ie,S,Je);let ge;const Fe=S.mipmaps,Ze=o&&S.isVideoTexture!==!0&&Se!==j0,xt=ye.__version===void 0||te===!0,Ve=b(S,ee,Je);if(S.isDepthTexture)Se=t.DEPTH_COMPONENT,o?S.type===Bi?Se=t.DEPTH_COMPONENT32F:S.type===zi?Se=t.DEPTH_COMPONENT24:S.type===wr?Se=t.DEPTH24_STENCIL8:Se=t.DEPTH_COMPONENT16:S.type===Bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Tr&&Se===t.DEPTH_COMPONENT&&S.type!==fd&&S.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=zi,Le=s.convert(S.type)),S.format===Us&&Se===t.DEPTH_COMPONENT&&(Se=t.DEPTH_STENCIL,S.type!==wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=wr,Le=s.convert(S.type))),xt&&(Ze?n.texStorage2D(t.TEXTURE_2D,1,Se,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Se,ee.width,ee.height,0,Xe,Le,null));else if(S.isDataTexture)if(Fe.length>0&&Je){Ze&&xt&&n.texStorage2D(t.TEXTURE_2D,Ve,Se,Fe[0].width,Fe[0].height);for(let se=0,L=Fe.length;se<L;se++)ge=Fe[se],Ze?n.texSubImage2D(t.TEXTURE_2D,se,0,0,ge.width,ge.height,Xe,Le,ge.data):n.texImage2D(t.TEXTURE_2D,se,Se,ge.width,ge.height,0,Xe,Le,ge.data);S.generateMipmaps=!1}else Ze?(xt&&n.texStorage2D(t.TEXTURE_2D,Ve,Se,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,Xe,Le,ee.data)):n.texImage2D(t.TEXTURE_2D,0,Se,ee.width,ee.height,0,Xe,Le,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ze&&xt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Se,Fe[0].width,Fe[0].height,ee.depth);for(let se=0,L=Fe.length;se<L;se++)ge=Fe[se],S.format!==Kn?Xe!==null?Ze?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,ee.depth,Xe,ge.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Se,ge.width,ge.height,ee.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,ee.depth,Xe,Le,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Se,ge.width,ge.height,ee.depth,0,Xe,Le,ge.data)}else{Ze&&xt&&n.texStorage2D(t.TEXTURE_2D,Ve,Se,Fe[0].width,Fe[0].height);for(let se=0,L=Fe.length;se<L;se++)ge=Fe[se],S.format!==Kn?Xe!==null?Ze?n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,ge.width,ge.height,Xe,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Se,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage2D(t.TEXTURE_2D,se,0,0,ge.width,ge.height,Xe,Le,ge.data):n.texImage2D(t.TEXTURE_2D,se,Se,ge.width,ge.height,0,Xe,Le,ge.data)}else if(S.isDataArrayTexture)Ze?(xt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Se,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Xe,Le,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,ee.width,ee.height,ee.depth,0,Xe,Le,ee.data);else if(S.isData3DTexture)Ze?(xt&&n.texStorage3D(t.TEXTURE_3D,Ve,Se,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Xe,Le,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Se,ee.width,ee.height,ee.depth,0,Xe,Le,ee.data);else if(S.isFramebufferTexture){if(xt)if(Ze)n.texStorage2D(t.TEXTURE_2D,Ve,Se,ee.width,ee.height);else{let se=ee.width,L=ee.height;for(let oe=0;oe<Ve;oe++)n.texImage2D(t.TEXTURE_2D,oe,Se,se,L,0,Xe,Le,null),se>>=1,L>>=1}}else if(Fe.length>0&&Je){Ze&&xt&&n.texStorage2D(t.TEXTURE_2D,Ve,Se,Fe[0].width,Fe[0].height);for(let se=0,L=Fe.length;se<L;se++)ge=Fe[se],Ze?n.texSubImage2D(t.TEXTURE_2D,se,0,0,Xe,Le,ge):n.texImage2D(t.TEXTURE_2D,se,Se,Xe,Le,ge);S.generateMipmaps=!1}else Ze?(xt&&n.texStorage2D(t.TEXTURE_2D,Ve,Se,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Xe,Le,ee)):n.texImage2D(t.TEXTURE_2D,0,Se,Xe,Le,ee);g(S,Je)&&v(ie),ye.__version=re.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function pe(R,S,H){if(S.image.length!==6)return;const ie=Q(R,S),te=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const re=i.get(te);if(te.version!==re.__version||ie===!0){n.activeTexture(t.TEXTURE0+H);const ye=et.getPrimaries(et.workingColorSpace),ue=S.colorSpace===Un?null:et.getPrimaries(S.colorSpace),me=S.colorSpace===Un||ye===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,Ge=S.image[0]&&S.image[0].isDataTexture,ee=[];for(let se=0;se<6;se++)!Ae&&!Ge?ee[se]=y(S.image[se],!1,!0,r.maxCubemapSize):ee[se]=Ge?S.image[se].image:S.image[se],ee[se]=Be(S,ee[se]);const Je=ee[0],Xe=p(Je)||o,Le=s.convert(S.format,S.colorSpace),Se=s.convert(S.type),ge=M(S.internalFormat,Le,Se,S.colorSpace),Fe=o&&S.isVideoTexture!==!0,Ze=re.__version===void 0||ie===!0;let xt=b(S,Je,Xe);Y(t.TEXTURE_CUBE_MAP,S,Xe);let Ve;if(Ae){Fe&&Ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xt,ge,Je.width,Je.height);for(let se=0;se<6;se++){Ve=ee[se].mipmaps;for(let L=0;L<Ve.length;L++){const oe=Ve[L];S.format!==Kn?Le!==null?Fe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,0,0,oe.width,oe.height,Le,oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,ge,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,0,0,oe.width,oe.height,Le,Se,oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,ge,oe.width,oe.height,0,Le,Se,oe.data)}}}else{Ve=S.mipmaps,Fe&&Ze&&(Ve.length>0&&xt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,xt,ge,ee[0].width,ee[0].height));for(let se=0;se<6;se++)if(Ge){Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ee[se].width,ee[se].height,Le,Se,ee[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ge,ee[se].width,ee[se].height,0,Le,Se,ee[se].data);for(let L=0;L<Ve.length;L++){const le=Ve[L].image[se].image;Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,0,0,le.width,le.height,Le,Se,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,ge,le.width,le.height,0,Le,Se,le.data)}}else{Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Le,Se,ee[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ge,Le,Se,ee[se]);for(let L=0;L<Ve.length;L++){const oe=Ve[L];Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,0,0,Le,Se,oe.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,ge,Le,Se,oe.image[se])}}}g(S,Xe)&&v(t.TEXTURE_CUBE_MAP),re.__version=te.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function _e(R,S,H,ie,te,re){const ye=s.convert(H.format,H.colorSpace),ue=s.convert(H.type),me=M(H.internalFormat,ye,ue,H.colorSpace);if(!i.get(S).__hasExternalTextures){const Ge=Math.max(1,S.width>>re),ee=Math.max(1,S.height>>re);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,re,me,Ge,ee,S.depth,0,ye,ue,null):n.texImage2D(te,re,me,Ge,ee,0,ye,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),xe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,te,i.get(H).__webglTexture,0,Pe(S)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,te,i.get(H).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(R,S,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let ie=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||xe(S)){const te=S.depthTexture;te&&te.isDepthTexture&&(te.type===Bi?ie=t.DEPTH_COMPONENT32F:te.type===zi&&(ie=t.DEPTH_COMPONENT24));const re=Pe(S);xe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,ie,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ie,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){const ie=Pe(S);H&&xe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,S.width,S.height):xe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const ie=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0;te<ie.length;te++){const re=ie[te],ye=s.convert(re.format,re.colorSpace),ue=s.convert(re.type),me=M(re.internalFormat,ye,ue,re.colorSpace),Ae=Pe(S);H&&xe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,me,S.width,S.height):xe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,me,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,me,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Oe(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),F(S.depthTexture,0);const ie=i.get(S.depthTexture).__webglTexture,te=Pe(S);if(S.depthTexture.format===Tr)xe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(S.depthTexture.format===Us)xe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ce(R){const S=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Oe(S.__webglFramebuffer,R)}else if(H){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]=t.createRenderbuffer(),Ie(S.__webglDepthbuffer[ie],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Ie(S.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function $e(R,S,H){const ie=i.get(R);S!==void 0&&_e(ie.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ce(R)}function B(R){const S=R.texture,H=i.get(R),ie=i.get(S);R.addEventListener("dispose",U),R.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=S.version,a.memory.textures++);const te=R.isWebGLCubeRenderTarget===!0,re=R.isWebGLMultipleRenderTargets===!0,ye=p(R)||o;if(te){H.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(o&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ue]=[];for(let me=0;me<S.mipmaps.length;me++)H.__webglFramebuffer[ue][me]=t.createFramebuffer()}else H.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)H.__webglFramebuffer[ue]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(re)if(r.drawBuffers){const ue=R.texture;for(let me=0,Ae=ue.length;me<Ae;me++){const Ge=i.get(ue[me]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&xe(R)===!1){const ue=re?S:[S];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let me=0;me<ue.length;me++){const Ae=ue[me];H.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[me]);const Ge=s.convert(Ae.format,Ae.colorSpace),ee=s.convert(Ae.type),Je=M(Ae.internalFormat,Ge,ee,Ae.colorSpace,R.isXRRenderTarget===!0),Xe=Pe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,Je,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,H.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Ie(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),Y(t.TEXTURE_CUBE_MAP,S,ye);for(let ue=0;ue<6;ue++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)_e(H.__webglFramebuffer[ue][me],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else _e(H.__webglFramebuffer[ue],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(S,ye)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){const ue=R.texture;for(let me=0,Ae=ue.length;me<Ae;me++){const Ge=ue[me],ee=i.get(Ge);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),Y(t.TEXTURE_2D,Ge,ye),_e(H.__webglFramebuffer,R,Ge,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),g(Ge,ye)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?ue=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ue,ie.__webglTexture),Y(ue,S,ye),o&&S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)_e(H.__webglFramebuffer[me],R,S,t.COLOR_ATTACHMENT0,ue,me);else _e(H.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,ue,0);g(S,ye)&&v(ue),n.unbindTexture()}R.depthBuffer&&Ce(R)}function Qt(R){const S=p(R)||o,H=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ie=0,te=H.length;ie<te;ie++){const re=H[ie];if(g(re,S)){const ye=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ue=i.get(re).__webglTexture;n.bindTexture(ye,ue),v(ye),n.unbindTexture()}}}function Ee(R){if(o&&R.samples>0&&xe(R)===!1){const S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],H=R.width,ie=R.height;let te=t.COLOR_BUFFER_BIT;const re=[],ye=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(R),me=R.isWebGLMultipleRenderTargets===!0;if(me)for(let Ae=0;Ae<S.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){re.push(t.COLOR_ATTACHMENT0+Ae),R.depthBuffer&&re.push(ye);const Ge=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Ge===!1&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),me&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Ae]),Ge===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ye]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ye])),me){const ee=i.get(S[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,H,ie,0,0,H,ie,te,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let Ae=0;Ae<S.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Ae]);const Ge=i.get(S[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Ge,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Pe(R){return Math.min(r.maxSamples,R.samples)}function xe(R){const S=i.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ft(R){const S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Be(R,S){const H=R.colorSpace,ie=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===uh||H!==Ti&&H!==Un&&(et.getTransfer(H)===ot?o===!1?e.has("EXT_sRGB")===!0&&ie===Kn?(R.format=uh,R.minFilter=In,R.generateMipmaps=!1):S=K0.sRGBToLinear(S):(ie!==Kn||te!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}this.allocateTextureUnit=P,this.resetTextureUnits=K,this.setTexture2D=F,this.setTexture2DArray=X,this.setTexture3D=D,this.setTextureCube=z,this.rebindTextures=$e,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=xe}function dT(t,e,n){const i=n.isWebGL2;function r(s,a=Un){let o;const l=et.getTransfer(a);if(s===Qi)return t.UNSIGNED_BYTE;if(s===B0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===G0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Uy)return t.BYTE;if(s===Oy)return t.SHORT;if(s===fd)return t.UNSIGNED_SHORT;if(s===z0)return t.INT;if(s===zi)return t.UNSIGNED_INT;if(s===Bi)return t.FLOAT;if(s===Ga)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Fy)return t.ALPHA;if(s===Kn)return t.RGBA;if(s===ky)return t.LUMINANCE;if(s===zy)return t.LUMINANCE_ALPHA;if(s===Tr)return t.DEPTH_COMPONENT;if(s===Us)return t.DEPTH_STENCIL;if(s===uh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===By)return t.RED;if(s===H0)return t.RED_INTEGER;if(s===Gy)return t.RG;if(s===V0)return t.RG_INTEGER;if(s===W0)return t.RGBA_INTEGER;if(s===Uc||s===Oc||s===Fc||s===kc)if(l===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Uc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Uc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qf||s===Yf||s===$f||s===Kf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===qf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Yf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$f)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===j0)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zf||s===Qf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Zf)return l===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Qf)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Jf||s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===ap||s===op||s===lp||s===cp||s===up||s===hp||s===dp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Jf)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ep)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===tp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===np)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ip)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ap)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===op)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===up)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===dp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zc||s===fp||s===pp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===zc)return l===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===pp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Hy||s===mp||s===gp||s===vp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===zc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===mp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===gp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===wr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class fT extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fn extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pT={type:"move"};class lu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Fn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class mT extends Hs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,x=null;const y=n.getContextAttributes();let p=null,u=null;const g=[],v=[],M=new Ye;let b=null;const A=new En;A.layers.enable(1),A.viewport=new dt;const C=new En;C.layers.enable(2),C.viewport=new dt;const U=[A,C],E=new fT;E.layers.enable(1),E.layers.enable(2);let w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=g[Y];return Q===void 0&&(Q=new lu,g[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=g[Y];return Q===void 0&&(Q=new lu,g[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=g[Y];return Q===void 0&&(Q=new lu,g[Y]=Q),Q.getHandSpace()};function W(Y){const Q=v.indexOf(Y.inputSource);if(Q===-1)return;const ce=g[Q];ce!==void 0&&(ce.update(Y.inputSource,Y.frame,c||a),ce.dispatchEvent({type:Y.type,data:Y.inputSource}))}function K(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",P);for(let Y=0;Y<g.length;Y++){const Q=v[Y];Q!==null&&(v[Y]=null,g[Y].disconnect(Q))}w=null,k=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,u=null,J.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",K),r.addEventListener("inputsourceschange",P),y.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Nr(m.framebufferWidth,m.framebufferHeight,{format:Kn,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Q=null,ce=null,pe=null;y.depth&&(pe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=y.stencil?Us:Tr,ce=y.stencil?wr:zi);const _e={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(_e),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new Nr(f.textureWidth,f.textureHeight,{format:Kn,type:Qi,depthTexture:new lv(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Ie=e.properties.get(u);Ie.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(Y){for(let Q=0;Q<Y.removed.length;Q++){const ce=Y.removed[Q],pe=v.indexOf(ce);pe>=0&&(v[pe]=null,g[pe].disconnect(ce))}for(let Q=0;Q<Y.added.length;Q++){const ce=Y.added[Q];let pe=v.indexOf(ce);if(pe===-1){for(let Ie=0;Ie<g.length;Ie++)if(Ie>=v.length){v.push(ce),pe=Ie;break}else if(v[Ie]===null){v[Ie]=ce,pe=Ie;break}if(pe===-1)break}const _e=g[pe];_e&&_e.connect(ce)}}const I=new N,F=new N;function X(Y,Q,ce){I.setFromMatrixPosition(Q.matrixWorld),F.setFromMatrixPosition(ce.matrixWorld);const pe=I.distanceTo(F),_e=Q.projectionMatrix.elements,Ie=ce.projectionMatrix.elements,Oe=_e[14]/(_e[10]-1),Ce=_e[14]/(_e[10]+1),$e=(_e[9]+1)/_e[5],B=(_e[9]-1)/_e[5],Qt=(_e[8]-1)/_e[0],Ee=(Ie[8]+1)/Ie[0],Pe=Oe*Qt,xe=Oe*Ee,ft=pe/(-Qt+Ee),Be=ft*-Qt;Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Be),Y.translateZ(ft),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const R=Oe+ft,S=Ce+ft,H=Pe-Be,ie=xe+(pe-Be),te=$e*Ce/S*R,re=B*Ce/S*R;Y.projectionMatrix.makePerspective(H,ie,te,re,R,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function D(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;E.near=C.near=A.near=Y.near,E.far=C.far=A.far=Y.far,(w!==E.near||k!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,k=E.far);const Q=Y.parent,ce=E.cameras;D(E,Q);for(let pe=0;pe<ce.length;pe++)D(ce[pe],Q);ce.length===2?X(E,A,C):E.projectionMatrix.copy(A.projectionMatrix),z(Y,E,Q)};function z(Y,Q,ce){ce===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(ce.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ha*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)};let j=null;function Z(Y,Q){if(h=Q.getViewerPose(c||a),x=Q,h!==null){const ce=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let pe=!1;ce.length!==E.cameras.length&&(E.cameras.length=0,pe=!0);for(let _e=0;_e<ce.length;_e++){const Ie=ce[_e];let Oe=null;if(m!==null)Oe=m.getViewport(Ie);else{const $e=d.getViewSubImage(f,Ie);Oe=$e.viewport,_e===0&&(e.setRenderTargetTextures(u,$e.colorTexture,f.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(u))}let Ce=U[_e];Ce===void 0&&(Ce=new En,Ce.layers.enable(_e),Ce.viewport=new dt,U[_e]=Ce),Ce.matrix.fromArray(Ie.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ie.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),_e===0&&(E.matrix.copy(Ce.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),pe===!0&&E.cameras.push(Ce)}}for(let ce=0;ce<g.length;ce++){const pe=v[ce],_e=g[ce];pe!==null&&_e!==void 0&&_e.update(pe,Q,c||a)}j&&j(Y,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),x=null}const J=new av;J.setAnimationLoop(Z),this.setAnimationLoop=function(Y){j=Y},this.dispose=function(){}}}function gT(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,iv(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,v,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),y(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,g,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===mn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===mn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===mn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vT(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,v){const M=v.program;i.uniformBlockBinding(g,M)}function c(g,v){let M=r[g.id];M===void 0&&(x(g),M=h(g),r[g.id]=M,g.addEventListener("dispose",p));const b=v.program;i.updateUBOMapping(g,b);const A=e.render.frame;s[g.id]!==A&&(f(g),s[g.id]=A)}function h(g){const v=d();g.__bindingPointIndex=v;const M=t.createBuffer(),b=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function d(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const v=r[g.id],M=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,C=M.length;A<C;A++){const U=Array.isArray(M[A])?M[A]:[M[A]];for(let E=0,w=U.length;E<w;E++){const k=U[E];if(m(k,A,E,b)===!0){const W=k.__offset,K=Array.isArray(k.value)?k.value:[k.value];let P=0;for(let I=0;I<K.length;I++){const F=K[I],X=y(F);typeof F=="number"||typeof F=="boolean"?(k.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,W+P,k.__data)):F.isMatrix3?(k.__data[0]=F.elements[0],k.__data[1]=F.elements[1],k.__data[2]=F.elements[2],k.__data[3]=0,k.__data[4]=F.elements[3],k.__data[5]=F.elements[4],k.__data[6]=F.elements[5],k.__data[7]=0,k.__data[8]=F.elements[6],k.__data[9]=F.elements[7],k.__data[10]=F.elements[8],k.__data[11]=0):(F.toArray(k.__data,P),P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,k.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,M,b){const A=g.value,C=v+"_"+M;if(b[C]===void 0)return typeof A=="number"||typeof A=="boolean"?b[C]=A:b[C]=A.clone(),!0;{const U=b[C];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return b[C]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function x(g){const v=g.uniforms;let M=0;const b=16;for(let C=0,U=v.length;C<U;C++){const E=Array.isArray(v[C])?v[C]:[v[C]];for(let w=0,k=E.length;w<k;w++){const W=E[w],K=Array.isArray(W.value)?W.value:[W.value];for(let P=0,I=K.length;P<I;P++){const F=K[P],X=y(F),D=M%b;D!==0&&b-D<X.boundary&&(M+=b-D),W.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=X.storage}}}const A=M%b;return A>0&&(M+=b-A),g.__size=M,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class pv{constructor(e={}){const{canvas:n=fM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),x=new Int32Array(4);let y=null,p=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;const v=this;let M=!1,b=0,A=0,C=null,U=-1,E=null;const w=new dt,k=new dt;let W=null;const K=new De(0);let P=0,I=n.width,F=n.height,X=1,D=null,z=null;const j=new dt(0,0,I,F),Z=new dt(0,0,I,F);let J=!1;const Y=new vd;let Q=!1,ce=!1,pe=null;const _e=new Et,Ie=new Ye,Oe=new N,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return C===null?X:1}let B=i;function Qt(T,O){for(let V=0;V<T.length;V++){const q=T[V],G=n.getContext(q,O);if(G!==null)return G}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${dd}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",oe,!1),B===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),B=Qt(O,T),B===null)throw Qt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ee,Pe,xe,ft,Be,R,S,H,ie,te,re,ye,ue,me,Ae,Ge,ee,Je,Xe,Le,Se,ge,Fe,Ze;function xt(){Ee=new CE(B),Pe=new ME(B,Ee,e),Ee.init(Pe),ge=new dT(B,Ee,Pe),xe=new uT(B,Ee,Pe),ft=new LE(B),Be=new Kw,R=new hT(B,Ee,xe,Be,Pe,ge,ft),S=new EE(v),H=new AE(v),ie=new kM(B,Pe),Fe=new xE(B,Ee,ie,Pe),te=new RE(B,ie,ft,Fe),re=new IE(B,te,ie,ft),Xe=new DE(B,Pe,R),Ge=new SE(Be),ye=new $w(v,S,H,Ee,Pe,Fe,Ge),ue=new gT(v,Be),me=new Qw,Ae=new rT(Ee,Pe),Je=new _E(v,S,H,xe,re,f,l),ee=new cT(v,re,Pe),Ze=new vT(B,ft,Pe,xe),Le=new yE(B,Ee,ft,Pe),Se=new bE(B,Ee,ft,Pe),ft.programs=ye.programs,v.capabilities=Pe,v.extensions=Ee,v.properties=Be,v.renderLists=me,v.shadowMap=ee,v.state=xe,v.info=ft}xt();const Ve=new mT(v,B);this.xr=Ve,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(I,F,!1))},this.getSize=function(T){return T.set(I,F)},this.setSize=function(T,O,V=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=T,F=O,n.width=Math.floor(T*X),n.height=Math.floor(O*X),V===!0&&(n.style.width=T+"px",n.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(I*X,F*X).floor()},this.setDrawingBufferSize=function(T,O,V){I=T,F=O,X=V,n.width=Math.floor(T*V),n.height=Math.floor(O*V),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,O,V,q){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,O,V,q),xe.viewport(w.copy(j).multiplyScalar(X).floor())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,O,V,q){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,O,V,q),xe.scissor(k.copy(Z).multiplyScalar(X).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(T){xe.setScissorTest(J=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){z=T},this.getClearColor=function(T){return T.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(T=!0,O=!0,V=!0){let q=0;if(T){let G=!1;if(C!==null){const he=C.texture.format;G=he===W0||he===V0||he===H0}if(G){const he=C.texture.type,Me=he===Qi||he===zi||he===fd||he===wr||he===B0||he===G0,Te=Je.getClearColor(),be=Je.getClearAlpha(),He=Te.r,Ne=Te.g,Ue=Te.b;Me?(m[0]=He,m[1]=Ne,m[2]=Ue,m[3]=be,B.clearBufferuiv(B.COLOR,0,m)):(x[0]=He,x[1]=Ne,x[2]=Ue,x[3]=be,B.clearBufferiv(B.COLOR,0,x))}else q|=B.COLOR_BUFFER_BIT}O&&(q|=B.DEPTH_BUFFER_BIT),V&&(q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),me.dispose(),Ae.dispose(),Be.dispose(),S.dispose(),H.dispose(),re.dispose(),Fe.dispose(),Ze.dispose(),ye.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Jt),Ve.removeEventListener("sessionend",rt),pe&&(pe.dispose(),pe=null),en.stop()};function se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=ft.autoReset,O=ee.enabled,V=ee.autoUpdate,q=ee.needsUpdate,G=ee.type;xt(),ft.autoReset=T,ee.enabled=O,ee.autoUpdate=V,ee.needsUpdate=q,ee.type=G}function oe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function le(T){const O=T.target;O.removeEventListener("dispose",le),Re(O)}function Re(T){we(T),Be.remove(T)}function we(T){const O=Be.get(T).programs;O!==void 0&&(O.forEach(function(V){ye.releaseProgram(V)}),T.isShaderMaterial&&ye.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,V,q,G,he){O===null&&(O=Ce);const Me=G.isMesh&&G.matrixWorld.determinant()<0,Te=wv(T,O,V,q,G);xe.setMaterial(q,Me);let be=V.index,He=1;if(q.wireframe===!0){if(be=te.getWireframeAttribute(V),be===void 0)return;He=2}const Ne=V.drawRange,Ue=V.attributes.position;let wt=Ne.start*He,_n=(Ne.start+Ne.count)*He;he!==null&&(wt=Math.max(wt,he.start*He),_n=Math.min(_n,(he.start+he.count)*He)),be!==null?(wt=Math.max(wt,0),_n=Math.min(_n,be.count)):Ue!=null&&(wt=Math.max(wt,0),_n=Math.min(_n,Ue.count));const It=_n-wt;if(It<0||It===1/0)return;Fe.setup(G,q,Te,V,be);let li,pt=Le;if(be!==null&&(li=ie.get(be),pt=Se,pt.setIndex(li)),G.isMesh)q.wireframe===!0?(xe.setLineWidth(q.wireframeLinewidth*$e()),pt.setMode(B.LINES)):pt.setMode(B.TRIANGLES);else if(G.isLine){let We=q.linewidth;We===void 0&&(We=1),xe.setLineWidth(We*$e()),G.isLineSegments?pt.setMode(B.LINES):G.isLineLoop?pt.setMode(B.LINE_LOOP):pt.setMode(B.LINE_STRIP)}else G.isPoints?pt.setMode(B.POINTS):G.isSprite&&pt.setMode(B.TRIANGLES);if(G.isBatchedMesh)pt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)pt.renderInstances(wt,It,G.count);else if(V.isInstancedBufferGeometry){const We=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,rc=Math.min(V.instanceCount,We);pt.renderInstances(wt,It,rc)}else pt.render(wt,It)};function nt(T,O,V){T.transparent===!0&&T.side===si&&T.forceSinglePass===!1?(T.side=mn,T.needsUpdate=!0,eo(T,O,V),T.side=tr,T.needsUpdate=!0,eo(T,O,V),T.side=si):eo(T,O,V)}this.compile=function(T,O,V=null){V===null&&(V=T),p=Ae.get(V),p.init(),g.push(p),V.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),T!==V&&T.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(v._useLegacyLights);const q=new Set;return T.traverse(function(G){const he=G.material;if(he)if(Array.isArray(he))for(let Me=0;Me<he.length;Me++){const Te=he[Me];nt(Te,V,G),q.add(Te)}else nt(he,V,G),q.add(he)}),g.pop(),p=null,q},this.compileAsync=function(T,O,V=null){const q=this.compile(T,O,V);return new Promise(G=>{function he(){if(q.forEach(function(Me){Be.get(Me).currentProgram.isReady()&&q.delete(Me)}),q.size===0){G(T);return}setTimeout(he,10)}Ee.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let it=null;function Dt(T){it&&it(T)}function Jt(){en.stop()}function rt(){en.start()}const en=new av;en.setAnimationLoop(Dt),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(T){it=T,Ve.setAnimationLoop(T),T===null?en.stop():en.start()},Ve.addEventListener("sessionstart",Jt),Ve.addEventListener("sessionend",rt),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(O),O=Ve.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,C),p=Ae.get(T,g.length),p.init(),g.push(p),_e.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(_e),ce=this.localClippingEnabled,Q=Ge.init(this.clippingPlanes,ce),y=me.get(T,u.length),y.init(),u.push(y),ei(T,O,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(D,z),this.info.render.frame++,Q===!0&&Ge.beginShadows();const V=p.state.shadowsArray;if(ee.render(V,T,O),Q===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(y,T),p.setupLights(v._useLegacyLights),O.isArrayCamera){const q=O.cameras;for(let G=0,he=q.length;G<he;G++){const Me=q[G];Td(y,T,Me,Me.viewport)}}else Td(y,T,O);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,O),Fe.resetDefaultState(),U=-1,E=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function ei(T,O,V,q){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){q&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(_e);const Me=re.update(T),Te=T.material;Te.visible&&y.push(T,Me,Te,V,Oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const Me=re.update(T),Te=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Oe.copy(Me.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(_e)),Array.isArray(Te)){const be=Me.groups;for(let He=0,Ne=be.length;He<Ne;He++){const Ue=be[He],wt=Te[Ue.materialIndex];wt&&wt.visible&&y.push(T,Me,wt,V,Oe.z,Ue)}}else Te.visible&&y.push(T,Me,Te,V,Oe.z,null)}}const he=T.children;for(let Me=0,Te=he.length;Me<Te;Me++)ei(he[Me],O,V,q)}function Td(T,O,V,q){const G=T.opaque,he=T.transmissive,Me=T.transparent;p.setupLightsView(V),Q===!0&&Ge.setGlobalState(v.clippingPlanes,V),he.length>0&&Ev(G,he,O,V),q&&xe.viewport(w.copy(q)),G.length>0&&Ja(G,O,V),he.length>0&&Ja(he,O,V),Me.length>0&&Ja(Me,O,V),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Ev(T,O,V,q){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const he=Pe.isWebGL2;pe===null&&(pe=new Nr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Ga:Qi,minFilter:Ba,samples:he?4:0})),v.getDrawingBufferSize(Ie),he?pe.setSize(Ie.x,Ie.y):pe.setSize(Il(Ie.x),Il(Ie.y));const Me=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(K),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Te=v.toneMapping;v.toneMapping=Zi,Ja(T,V,q),R.updateMultisampleRenderTarget(pe),R.updateRenderTargetMipmap(pe);let be=!1;for(let He=0,Ne=O.length;He<Ne;He++){const Ue=O[He],wt=Ue.object,_n=Ue.geometry,It=Ue.material,li=Ue.group;if(It.side===si&&wt.layers.test(q.layers)){const pt=It.side;It.side=mn,It.needsUpdate=!0,Ad(wt,V,q,_n,It,li),It.side=pt,It.needsUpdate=!0,be=!0}}be===!0&&(R.updateMultisampleRenderTarget(pe),R.updateRenderTargetMipmap(pe)),v.setRenderTarget(Me),v.setClearColor(K,P),v.toneMapping=Te}function Ja(T,O,V){const q=O.isScene===!0?O.overrideMaterial:null;for(let G=0,he=T.length;G<he;G++){const Me=T[G],Te=Me.object,be=Me.geometry,He=q===null?Me.material:q,Ne=Me.group;Te.layers.test(V.layers)&&Ad(Te,O,V,be,He,Ne)}}function Ad(T,O,V,q,G,he){T.onBeforeRender(v,O,V,q,G,he),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(v,O,V,q,T,he),G.transparent===!0&&G.side===si&&G.forceSinglePass===!1?(G.side=mn,G.needsUpdate=!0,v.renderBufferDirect(V,O,q,G,T,he),G.side=tr,G.needsUpdate=!0,v.renderBufferDirect(V,O,q,G,T,he),G.side=si):v.renderBufferDirect(V,O,q,G,T,he),T.onAfterRender(v,O,V,q,G,he)}function eo(T,O,V){O.isScene!==!0&&(O=Ce);const q=Be.get(T),G=p.state.lights,he=p.state.shadowsArray,Me=G.state.version,Te=ye.getParameters(T,G.state,he,O,V),be=ye.getProgramCacheKey(Te);let He=q.programs;q.environment=T.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(T.isMeshStandardMaterial?H:S).get(T.envMap||q.environment),He===void 0&&(T.addEventListener("dispose",le),He=new Map,q.programs=He);let Ne=He.get(be);if(Ne!==void 0){if(q.currentProgram===Ne&&q.lightsStateVersion===Me)return Rd(T,Te),Ne}else Te.uniforms=ye.getUniforms(T),T.onBuild(V,Te,v),T.onBeforeCompile(Te,v),Ne=ye.acquireProgram(Te,be),He.set(be,Ne),q.uniforms=Te.uniforms;const Ue=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=Ge.uniform),Rd(T,Te),q.needsLights=Av(T),q.lightsStateVersion=Me,q.needsLights&&(Ue.ambientLightColor.value=G.state.ambient,Ue.lightProbe.value=G.state.probe,Ue.directionalLights.value=G.state.directional,Ue.directionalLightShadows.value=G.state.directionalShadow,Ue.spotLights.value=G.state.spot,Ue.spotLightShadows.value=G.state.spotShadow,Ue.rectAreaLights.value=G.state.rectArea,Ue.ltc_1.value=G.state.rectAreaLTC1,Ue.ltc_2.value=G.state.rectAreaLTC2,Ue.pointLights.value=G.state.point,Ue.pointLightShadows.value=G.state.pointShadow,Ue.hemisphereLights.value=G.state.hemi,Ue.directionalShadowMap.value=G.state.directionalShadowMap,Ue.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ue.spotShadowMap.value=G.state.spotShadowMap,Ue.spotLightMatrix.value=G.state.spotLightMatrix,Ue.spotLightMap.value=G.state.spotLightMap,Ue.pointShadowMap.value=G.state.pointShadowMap,Ue.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=Ne,q.uniformsList=null,Ne}function Cd(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=nl.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Rd(T,O){const V=Be.get(T);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function wv(T,O,V,q,G){O.isScene!==!0&&(O=Ce),R.resetTextureUnits();const he=O.fog,Me=q.isMeshStandardMaterial?O.environment:null,Te=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ti,be=(q.isMeshStandardMaterial?H:S).get(q.envMap||Me),He=q.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ne=!!V.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ue=!!V.morphAttributes.position,wt=!!V.morphAttributes.normal,_n=!!V.morphAttributes.color;let It=Zi;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(It=v.toneMapping);const li=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pt=li!==void 0?li.length:0,We=Be.get(q),rc=p.state.lights;if(Q===!0&&(ce===!0||T!==E)){const Ln=T===E&&q.id===U;Ge.setState(q,T,Ln)}let yt=!1;q.version===We.__version?(We.needsLights&&We.lightsStateVersion!==rc.state.version||We.outputColorSpace!==Te||G.isBatchedMesh&&We.batching===!1||!G.isBatchedMesh&&We.batching===!0||G.isInstancedMesh&&We.instancing===!1||!G.isInstancedMesh&&We.instancing===!0||G.isSkinnedMesh&&We.skinning===!1||!G.isSkinnedMesh&&We.skinning===!0||G.isInstancedMesh&&We.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&We.instancingColor===!1&&G.instanceColor!==null||We.envMap!==be||q.fog===!0&&We.fog!==he||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ge.numPlanes||We.numIntersection!==Ge.numIntersection)||We.vertexAlphas!==He||We.vertexTangents!==Ne||We.morphTargets!==Ue||We.morphNormals!==wt||We.morphColors!==_n||We.toneMapping!==It||Pe.isWebGL2===!0&&We.morphTargetsCount!==pt)&&(yt=!0):(yt=!0,We.__version=q.version);let ar=We.currentProgram;yt===!0&&(ar=eo(q,O,G));let bd=!1,js=!1,sc=!1;const Wt=ar.getUniforms(),or=We.uniforms;if(xe.useProgram(ar.program)&&(bd=!0,js=!0,sc=!0),q.id!==U&&(U=q.id,js=!0),bd||E!==T){Wt.setValue(B,"projectionMatrix",T.projectionMatrix),Wt.setValue(B,"viewMatrix",T.matrixWorldInverse);const Ln=Wt.map.cameraPosition;Ln!==void 0&&Ln.setValue(B,Oe.setFromMatrixPosition(T.matrixWorld)),Pe.logarithmicDepthBuffer&&Wt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Wt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,js=!0,sc=!0)}if(G.isSkinnedMesh){Wt.setOptional(B,G,"bindMatrix"),Wt.setOptional(B,G,"bindMatrixInverse");const Ln=G.skeleton;Ln&&(Pe.floatVertexTextures?(Ln.boneTexture===null&&Ln.computeBoneTexture(),Wt.setValue(B,"boneTexture",Ln.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Wt.setOptional(B,G,"batchingTexture"),Wt.setValue(B,"batchingTexture",G._matricesTexture,R));const ac=V.morphAttributes;if((ac.position!==void 0||ac.normal!==void 0||ac.color!==void 0&&Pe.isWebGL2===!0)&&Xe.update(G,V,ar),(js||We.receiveShadow!==G.receiveShadow)&&(We.receiveShadow=G.receiveShadow,Wt.setValue(B,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(or.envMap.value=be,or.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),js&&(Wt.setValue(B,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&Tv(or,sc),he&&q.fog===!0&&ue.refreshFogUniforms(or,he),ue.refreshMaterialUniforms(or,q,X,F,pe),nl.upload(B,Cd(We),or,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(nl.upload(B,Cd(We),or,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Wt.setValue(B,"center",G.center),Wt.setValue(B,"modelViewMatrix",G.modelViewMatrix),Wt.setValue(B,"normalMatrix",G.normalMatrix),Wt.setValue(B,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ln=q.uniformsGroups;for(let oc=0,Cv=Ln.length;oc<Cv;oc++)if(Pe.isWebGL2){const Ld=Ln[oc];Ze.update(Ld,ar),Ze.bind(Ld,ar)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ar}function Tv(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Av(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,O,V){Be.get(T.texture).__webglTexture=O,Be.get(T.depthTexture).__webglTexture=V;const q=Be.get(T);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=V===void 0,q.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const V=Be.get(T);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,V=0){C=T,b=O,A=V;let q=!0,G=null,he=!1,Me=!1;if(T){const be=Be.get(T);be.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(B.FRAMEBUFFER,null),q=!1):be.__webglFramebuffer===void 0?R.setupRenderTarget(T):be.__hasExternalTextures&&R.rebindTextures(T,Be.get(T.texture).__webglTexture,Be.get(T.depthTexture).__webglTexture);const He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Me=!0);const Ne=Be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?G=Ne[O][V]:G=Ne[O],he=!0):Pe.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?G=Be.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?G=Ne[V]:G=Ne,w.copy(T.viewport),k.copy(T.scissor),W=T.scissorTest}else w.copy(j).multiplyScalar(X).floor(),k.copy(Z).multiplyScalar(X).floor(),W=J;if(xe.bindFramebuffer(B.FRAMEBUFFER,G)&&Pe.drawBuffers&&q&&xe.drawBuffers(T,G),xe.viewport(w),xe.scissor(k),xe.setScissorTest(W),he){const be=Be.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,V)}else if(Me){const be=Be.get(T.texture),He=O||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,be.__webglTexture,V||0,He)}U=-1},this.readRenderTargetPixels=function(T,O,V,q,G,he,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){xe.bindFramebuffer(B.FRAMEBUFFER,Te);try{const be=T.texture,He=be.format,Ne=be.type;if(He!==Kn&&ge.convert(He)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Ne===Ga&&(Ee.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ne!==Qi&&ge.convert(Ne)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Bi&&(Pe.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-q&&V>=0&&V<=T.height-G&&B.readPixels(O,V,q,G,ge.convert(He),ge.convert(Ne),he)}finally{const be=C!==null?Be.get(C).__webglFramebuffer:null;xe.bindFramebuffer(B.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(T,O,V=0){const q=Math.pow(2,-V),G=Math.floor(O.image.width*q),he=Math.floor(O.image.height*q);R.setTexture2D(O,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,T.x,T.y,G,he),xe.unbindTexture()},this.copyTextureToTexture=function(T,O,V,q=0){const G=O.image.width,he=O.image.height,Me=ge.convert(V.format),Te=ge.convert(V.type);R.setTexture2D(V,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,q,T.x,T.y,G,he,Me,Te,O.image.data):O.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,q,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,Me,O.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,q,T.x,T.y,Me,Te,O.image),q===0&&V.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(T,O,V,q,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=T.max.x-T.min.x+1,Me=T.max.y-T.min.y+1,Te=T.max.z-T.min.z+1,be=ge.convert(q.format),He=ge.convert(q.type);let Ne;if(q.isData3DTexture)R.setTexture3D(q,0),Ne=B.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)R.setTexture2DArray(q,0),Ne=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);const Ue=B.getParameter(B.UNPACK_ROW_LENGTH),wt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),_n=B.getParameter(B.UNPACK_SKIP_PIXELS),It=B.getParameter(B.UNPACK_SKIP_ROWS),li=B.getParameter(B.UNPACK_SKIP_IMAGES),pt=V.isCompressedTexture?V.mipmaps[G]:V.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,pt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,pt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,T.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,T.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?B.texSubImage3D(Ne,G,O.x,O.y,O.z,he,Me,Te,be,He,pt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ne,G,O.x,O.y,O.z,he,Me,Te,be,pt.data)):B.texSubImage3D(Ne,G,O.x,O.y,O.z,he,Me,Te,be,He,pt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ue),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,wt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,_n),B.pixelStorei(B.UNPACK_SKIP_ROWS,It),B.pixelStorei(B.UNPACK_SKIP_IMAGES,li),G===0&&q.generateMipmaps&&B.generateMipmap(Ne),xe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){b=0,A=0,C=null,xe.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===pd?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===tc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Gt?Ar:X0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ar?Gt:Ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class _T extends pv{}_T.prototype.isWebGL1Renderer=!0;class Va{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=n}clone(){return new Va(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xT extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class mv extends Or{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sm=new N,am=new N,om=new Et,cu=new gd,Go=new Qa;class yT extends kt{constructor(e=new vn,n=new mv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)sm.fromBufferAttribute(n,r-1),am.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=sm.distanceTo(am);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(r),Go.radius+=s,e.ray.intersectsSphere(Go)===!1)return;om.copy(r).invert(),cu.copy(e.ray).applyMatrix4(om);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new N,h=new N,d=new N,f=new N,m=this.isLineSegments?2:1,x=i.index,p=i.attributes.position;if(x!==null){const u=Math.max(0,a.start),g=Math.min(x.count,a.start+a.count);for(let v=u,M=g-1;v<M;v+=m){const b=x.getX(v),A=x.getX(v+1);if(c.fromBufferAttribute(p,b),h.fromBufferAttribute(p,A),cu.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(f);U<e.near||U>e.far||n.push({distance:U,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let v=u,M=g-1;v<M;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),cu.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||n.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const lm=new N,cm=new N;class MT extends yT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)lm.fromBufferAttribute(n,r),cm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+lm.distanceTo(cm);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gv extends Or{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const um=new Et,ph=new gd,Ho=new Qa,Vo=new N;class ST extends kt{constructor(e=new vn,n=new gv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(r),Ho.radius+=s,e.ray.intersectsSphere(Ho)===!1)return;um.copy(r).invert(),ph.copy(e.ray).applyMatrix4(um);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=f,y=m;x<y;x++){const p=c.getX(x);Vo.fromBufferAttribute(d,p),hm(Vo,p,l,r,e,n,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=f,y=m;x<y;x++)Vo.fromBufferAttribute(d,x),hm(Vo,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function hm(t,e,n,i,r,s,a){const o=ph.distanceSqToPoint(t);if(o<n){const l=new N;ph.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class il extends gn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lt extends vn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],m=[];let x=0;const y=[],p=i/2;let u=0;g(),a===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new zt(d,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(m,2));function g(){const M=new N,b=new N;let A=0;const C=(n-e)/i;for(let U=0;U<=s;U++){const E=[],w=U/s,k=w*(n-e)+e;for(let W=0;W<=r;W++){const K=W/r,P=K*l+o,I=Math.sin(P),F=Math.cos(P);b.x=k*I,b.y=-w*i+p,b.z=k*F,d.push(b.x,b.y,b.z),M.set(I,C,F).normalize(),f.push(M.x,M.y,M.z),m.push(K,1-w),E.push(x++)}y.push(E)}for(let U=0;U<r;U++)for(let E=0;E<s;E++){const w=y[E][U],k=y[E+1][U],W=y[E+1][U+1],K=y[E][U+1];h.push(w,k,K),h.push(k,W,K),A+=6}c.addGroup(u,A,0),u+=A}function v(M){const b=x,A=new Ye,C=new N;let U=0;const E=M===!0?e:n,w=M===!0?1:-1;for(let W=1;W<=r;W++)d.push(0,p*w,0),f.push(0,w,0),m.push(.5,.5),x++;const k=x;for(let W=0;W<=r;W++){const P=W/r*l+o,I=Math.cos(P),F=Math.sin(P);C.x=E*F,C.y=p*w,C.z=E*I,d.push(C.x,C.y,C.z),f.push(0,w,0),A.x=I*.5+.5,A.y=F*.5*w+.5,m.push(A.x,A.y),x++}for(let W=0;W<r;W++){const K=b+W,P=k+W;M===!0?h.push(P,P+1,K):h.push(P+1,P,K),U+=3}c.addGroup(u,U,M===!0?1:2),u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xd extends lt{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new xd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ma extends vn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new N,f=new N,m=[],x=[],y=[],p=[];for(let u=0;u<=i;u++){const g=[],v=u/i;let M=0;u===0&&a===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let b=0;b<=n;b++){const A=b/n;d.x=-e*Math.cos(r+A*s)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(r+A*s)*Math.sin(a+v*o),x.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),p.push(A+M,1-v),g.push(c++)}h.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const v=h[u][g+1],M=h[u][g],b=h[u+1][g],A=h[u+1][g+1];(u!==0||a>0)&&m.push(v,M,A),(u!==i-1||l<Math.PI)&&m.push(M,b,A)}this.setIndex(m),this.setAttribute("position",new zt(x,3)),this.setAttribute("normal",new zt(y,3)),this.setAttribute("uv",new zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yd extends vn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new N,d=new N,f=new N;for(let m=0;m<=i;m++)for(let x=0;x<=r;x++){const y=x/r*s,p=m/i*Math.PI*2;d.x=(e+n*Math.cos(p))*Math.cos(y),d.y=(e+n*Math.cos(p))*Math.sin(y),d.z=n*Math.sin(p),o.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(x/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let x=1;x<=r;x++){const y=(r+1)*m+x-1,p=(r+1)*(m-1)+x-1,u=(r+1)*(m-1)+x,g=(r+1)*m+x;a.push(y,p,g),a.push(p,u,g)}this.setIndex(a),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ct extends Or{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=q0,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ol extends ct{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Md extends kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const uu=new Et,dm=new N,fm=new N;class vv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vd,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;dm.setFromMatrixPosition(e.matrixWorld),n.position.copy(dm),fm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(fm),n.updateMatrixWorld(),uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pm=new Et,ra=new N,hu=new N;class ET extends vv{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ra.setFromMatrixPosition(e.matrixWorld),i.position.copy(ra),hu.copy(i.position),hu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(hu),i.updateMatrixWorld(),r.makeTranslation(-ra.x,-ra.y,-ra.z),pm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pm)}}class mh extends Md{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ET}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wT extends vv{constructor(){super(new ov(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class TT extends Md{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new wT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class AT extends Md{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class CT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=mm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function mm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dd);class RT{camera;currentPos=new N;targetPos=new N;lookTarget=new N;baseFOV=68;maxFOV=92;shakeIntensity=0;shakeDecay=4.5;constructor(){this.camera=new En(this.baseFOV,window.innerWidth/window.innerHeight,.1,1e3),this.currentPos.set(0,3.8,-8),this.camera.position.copy(this.currentPos)}triggerShake(e){this.shakeIntensity=Math.max(this.shakeIntensity,e)}resize(e,n){this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}update(e,n,i,r){const s=Math.min(1,i/280),a=Math.min(this.maxFOV,this.baseFOV+s*16+(r?8:0));this.camera.fov=Sn.lerp(this.camera.fov,a,e*5),this.camera.updateProjectionMatrix();const o=7.5+s*1.5,l=3.2+s*.4;this.targetPos.set(n.x*.75,n.y+l,n.z-o),this.currentPos.x=Sn.lerp(this.currentPos.x,this.targetPos.x,e*9),this.currentPos.y=Sn.lerp(this.currentPos.y,this.targetPos.y,e*9),this.currentPos.z=Sn.lerp(this.currentPos.z,this.targetPos.z,e*12);let c=0,h=0;this.shakeIntensity>.01&&(c=(Math.random()-.5)*this.shakeIntensity,h=(Math.random()-.5)*this.shakeIntensity,this.shakeIntensity=Math.max(0,this.shakeIntensity-this.shakeDecay*e)),i>160&&(h+=Math.sin(Date.now()*.04)*(s*.025)),this.camera.position.set(this.currentPos.x+c,this.currentPos.y+h,this.currentPos.z),this.lookTarget.set(n.x*.4,n.y+1.2,n.z+18),this.camera.lookAt(this.lookTarget)}}class Fs{scene;roadSegments=[];segmentLength=140;totalSegments=6;static LANE_WIDTH=3.6;static LANES=[-5.4,-1.8,1.8,5.4];asphaltMaterial;lineMaterial;yellowLineMaterial;barrierMaterial;buildingMaterial;neonSignMaterials=[];constructor(e){this.scene=e;const n=this.createAsphaltTexture();n.wrapS=Mr,n.wrapT=Mr,n.repeat.set(4,35),this.asphaltMaterial=new ct({color:2238e3,map:n,roughness:.22,metalness:.25}),this.lineMaterial=new ct({color:16777215,emissive:8965375,emissiveIntensity:.6,roughness:.2}),this.yellowLineMaterial=new ct({color:16755200,emissive:16746496,emissiveIntensity:.7,roughness:.2}),this.barrierMaterial=new ct({color:5925509,metalness:.85,roughness:.25});const i=this.createBuildingTexture();i.wrapS=Mr,i.wrapT=Mr,i.repeat.set(1,1),this.buildingMaterial=new ct({color:1185574,roughness:.35,metalness:.6,map:i,emissiveMap:i,emissive:16777215,emissiveIntensity:.85}),this.createNeonSignMaterials(),this.buildHighwaySegments()}createAsphaltTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d");n.fillStyle="#1e222a",n.fillRect(0,0,512,512);const i=n.getImageData(0,0,512,512),r=i.data;for(let s=0;s<r.length;s+=4){const a=(Math.random()-.5)*32;r[s]=Math.min(255,Math.max(0,r[s]+a)),r[s+1]=Math.min(255,Math.max(0,r[s+1]+a+2)),r[s+2]=Math.min(255,Math.max(0,r[s+2]+a+6))}n.putImageData(i,0,0),n.fillStyle="rgba(10, 20, 35, 0.45)";for(let s=0;s<12;s++)n.beginPath(),n.ellipse(Math.random()*512,Math.random()*512,50+Math.random()*80,15+Math.random()*30,Math.random()*Math.PI,0,Math.PI*2),n.fill();return new il(e)}createBuildingTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d");n.fillStyle="#060a14",n.fillRect(0,0,512,512),n.fillStyle="#0b1220";for(let s=0;s<512;s+=32)n.fillRect(s,0,4,512);const i=["#ffd580","#00f3ff","#ff007f","#a0c4ff","#ffe066"];for(let s=16;s<500;s+=18)for(let a=6;a<500;a+=32)if(Math.random()<.55){const o=i[Math.floor(Math.random()*i.length)];n.fillStyle=o,n.fillRect(a,s,22,10),Math.random()<.3&&(n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(a,s+4,22,2))}const r=n.createLinearGradient(0,0,512,0);return r.addColorStop(0,"#00f3ff"),r.addColorStop(.5,"#ff007f"),r.addColorStop(1,"#00f3ff"),n.fillStyle=r,n.fillRect(0,0,512,12),new il(e)}createNeonSignMaterials(){[{text:"NEO TOKYO",color:"#00f3ff",border:"#ff007f"},{text:"CYBER SHUTO",color:"#ff007f",border:"#00f3ff"},{text:"VELOCITY X",color:"#ffd700",border:"#00f3ff"},{text:"MIDTOWN 2077",color:"#00ff88",border:"#ffd700"},{text:"KOWLOON EXPRESS",color:"#ff3366",border:"#00f3ff"}].forEach(n=>{const i=document.createElement("canvas");i.width=512,i.height=128;const r=i.getContext("2d");r.fillStyle="#060912",r.fillRect(0,0,512,128),r.strokeStyle=n.border,r.lineWidth=6,r.strokeRect(6,6,500,116),r.font="bold 42px sans-serif",r.textAlign="center",r.textBaseline="middle",r.shadowColor=n.color,r.shadowBlur=18,r.fillStyle="#ffffff",r.fillText(n.text,256,64),r.fillStyle=n.color,r.fillText(n.text,256,64);const s=new il(i);this.neonSignMaterials.push(new mt({map:s,transparent:!1}))})}buildHighwaySegments(){const n=new Gi(17.5,this.segmentLength);n.rotateX(-Math.PI/2);const i=new Gi(.24,4.5);i.rotateX(-Math.PI/2);const r=new Gi(.3,this.segmentLength);r.rotateX(-Math.PI/2);const s=new fe(.55,1,this.segmentLength),a=new fe(.2,.08,.4),o=new mt({color:16755200}),l=new mt({color:62463});for(let c=0;c<this.totalSegments;c++){const h=new Fn,d=c*this.segmentLength-40;h.position.set(0,0,d);const f=new $(n,this.asphaltMaterial);f.receiveShadow=!0,h.add(f);const m=new $(r,this.yellowLineMaterial);m.position.set(-7.8,.015,0),h.add(m);const x=new $(r,this.lineMaterial);x.position.set(7.8,.015,0),h.add(x);const y=[-3.6,0,3.6],p=Math.floor(this.segmentLength/9);for(const v of y)for(let M=0;M<p;M++){const b=new $(i,this.lineMaterial),A=-this.segmentLength/2+M*9+3;if(b.position.set(v,.015,A),h.add(b),M%2===0){const C=new $(a,v===0?l:o);C.position.set(v,.04,A+2.5),h.add(C)}}const u=new $(s,this.barrierMaterial);u.position.set(-8.8,.5,0),h.add(u);const g=new $(s,this.barrierMaterial);g.position.set(8.8,.5,0),h.add(g);for(let v=0;v<4;v++){const M=-this.segmentLength/2+v*35+15,b=this.createStreetLamp(!1);b.position.set(-9.4,0,M),h.add(b);const A=this.createStreetLamp(!0);A.position.set(9.4,0,M),h.add(A)}if(c%2===0){const v=this.createOverheadGantry(c);v.position.set(0,0,0),h.add(v)}this.attachCityBuildingsToSegment(h,c),this.scene.add(h),this.roadSegments.push(h)}}createStreetLamp(e=!1){const n=new Fn,i=new lt(.12,.18,8.5,8),r=new ct({color:3818842,metalness:.85,roughness:.25}),s=new $(i,r);s.position.y=4.25,n.add(s);const a=new lt(.08,.12,3.2,8);a.rotateZ(e?-Math.PI/3.5:Math.PI/3.5);const o=new $(a,r);o.position.set(e?-1.2:1.2,8.2,0),n.add(o);const l=new fe(1,.2,.5),c=new mt({color:62463}),h=new $(l,c);h.position.set(e?-2.3:2.3,8.8,0),n.add(h);const d=new Gi(6,6);d.rotateX(-Math.PI/2);const f=new mt({color:62463,transparent:!0,opacity:.12,depthWrite:!1}),m=new $(d,f);return m.position.set(e?-2.3:2.3,.02,0),n.add(m),n}createOverheadGantry(e){const n=new Fn,i=new fe(20,.6,.6),r=new ct({color:2963272,metalness:.8,roughness:.4}),s=new $(i,r);s.position.set(0,6.5,0),n.add(s);const a=new fe(.6,6.5,.6),o=new $(a,r);o.position.set(-9.8,3.25,0),n.add(o);const l=new $(a,r);l.position.set(9.8,3.25,0),n.add(l);const c=new fe(6.5,2.2,.25),h=this.neonSignMaterials[e%this.neonSignMaterials.length],d=new $(c,h);return d.position.set(0,6.8,.25),n.add(d),n}attachCityBuildingsToSegment(e,n){const r=new fe(1,1,1),s=new mt({color:16711765}),a=new mt({color:62463}),o=new lt(.1,.2,6,6);for(let l=-1;l<=1;l+=2)for(let c=0;c<4;c++){const h=45+(c*19+n*13)%75,d=16+c%3*8,f=16+(c+n)%3*8,m=l*(24+c%2*20+Math.random()*8),x=-this.segmentLength/2+c*32+16,y=new $(r,this.buildingMaterial);y.scale.set(d,h,f),y.position.set(m,h/2-2,x),e.add(y);const p=new $(o,c%2===0?s:a);if(p.position.set(m,h+1,x),e.add(p),c%2===1&&this.neonSignMaterials.length>0){const u=this.neonSignMaterials[(c+n)%this.neonSignMaterials.length],g=new fe(14,4.5,.5),v=new $(g,u);v.position.set(l<0?m+d/2+.3:m-d/2-.3,24+c%2*8,x),v.rotateY(l<0?Math.PI/2:-Math.PI/2),e.add(v)}}}update(e){for(const n of this.roadSegments)if(n.position.z<e-80){let i=-1/0;for(const r of this.roadSegments)r.position.z>i&&(i=r.position.z);n.position.z=i+this.segmentLength}}getLaneX(e){const n=Math.max(0,Math.min(3,e));return Fs.LANES[n]}setWetness(e){e?(this.asphaltMaterial.roughness=.08,this.asphaltMaterial.metalness=.45):(this.asphaltMaterial.roughness=.22,this.asphaltMaterial.metalness=.25)}}class bT{mesh;config;speedKmh=0;targetSpeedKmh=0;accelerationRate=28;maxSpeedKmh=240;nitroMaxSpeedKmh=295;currentLaneX=1.8;lateralVelocity=0;steeringInertia=0;currentRPM=800;currentGear=1;nitroReserve=100;isNitroActive=!1;isBraking=!1;isCrashed=!1;carRoot=null;carPaintMaterial;carbonMat;glassMat;chromeMat;brakeLightMaterial;underglowMesh;underglowLight;frontWheels=[];allWheels=[];headlightCones=[];activeAeroFlaps=[];leftExhaustPos=new N;rightExhaustPos=new N;leftExhaustLocal=new N(-.45,.26,-2.25);rightExhaustLocal=new N(.45,.26,-2.25);bounds=new sr;carSize=new N(2.1,1.2,4.6);constructor(e,n){this.config=n,this.maxSpeedKmh=n.topSpeedKmh,this.nitroMaxSpeedKmh=n.topSpeedKmh*1.22,this.mesh=new Fn,this.carPaintMaterial=new Ol({color:new De(n.color),metalness:.9,roughness:.16,clearcoat:1,clearcoatRoughness:.05,reflectivity:1,envMapIntensity:2.4}),this.carbonMat=new ct({color:1118999,metalness:.5,roughness:.42}),this.glassMat=new Ol({color:263690,metalness:.95,roughness:.05,clearcoat:1,transmission:.35,transparent:!0,opacity:.92,envMapIntensity:2.5}),this.chromeMat=new ct({color:14542317,metalness:.98,roughness:.1,envMapIntensity:2}),this.brakeLightMaterial=new mt({color:6684672});const i=new Gi(2.7,5.2);i.rotateX(-Math.PI/2);const r=new mt({color:new De(n.underglowColor),transparent:!0,opacity:.75,blending:Ns,depthWrite:!1});this.underglowMesh=new $(i,r),this.underglowMesh.position.y=.04,this.mesh.add(this.underglowMesh),this.underglowLight=new mh(new De(n.underglowColor),2,5),this.underglowLight.position.set(0,.25,0),this.mesh.add(this.underglowLight),this.buildSupercarModel(),e.add(this.mesh),this.mesh.position.set(this.currentLaneX,0,0),this.updateBounds()}setCarConfig(e){const n=this.config.type!==e.type;this.config=e,this.maxSpeedKmh=e.topSpeedKmh,this.nitroMaxSpeedKmh=e.topSpeedKmh*1.22,this.setCustomization(e.color,e.underglowColor),n&&this.buildSupercarModel()}setCustomization(e,n){this.carPaintMaterial.color.set(e),this.underglowMesh.material.color.set(n),this.underglowLight.color.set(n)}buildSupercarModel(){switch(this.carRoot&&(this.mesh.remove(this.carRoot),this.carRoot.traverse(e=>{e instanceof $&&e.geometry&&e.geometry.dispose()})),this.carRoot=new Fn,this.frontWheels=[],this.allWheels=[],this.headlightCones=[],this.activeAeroFlaps=[],this.config.type){case"roadster":this.buildPaganiRoadster(this.carRoot);break;case"gt":this.buildBugattiGT(this.carRoot);break;case"muscle":this.buildTitanMuscle(this.carRoot);break;default:this.buildBugattiGT(this.carRoot);break}this.mesh.add(this.carRoot)}buildPaganiRoadster(e){const n=new fe(2.02,.36,4.5),i=new $(n,this.carPaintMaterial);i.position.y=.34,i.castShadow=!0,e.add(i);const r=new fe(1.9,.24,1.6);r.rotateX(-.14);const s=new $(r,this.carPaintMaterial);s.position.set(0,.42,1.45),s.castShadow=!0,e.add(s);const a=new fe(2.12,.06,.8),o=new $(a,this.carbonMat);o.position.set(0,.16,2.25),e.add(o);const l=new $(new fe(.08,.18,.35),this.carbonMat);l.position.set(-1.08,.22,2.2),l.rotation.y=.2,e.add(l);const c=new $(new fe(.08,.18,.35),this.carbonMat);c.position.set(1.08,.22,2.2),c.rotation.y=-.2,e.add(c);const h=new Ma(.92,16,12);h.scale(.85,.55,1.6);const d=new $(h,this.glassMat);d.position.set(0,.72,-.15),d.castShadow=!0,e.add(d);const f=new fe(.32,.14,.8),m=new $(f,this.carbonMat);m.position.set(0,.98,-.35),e.add(m);const x=new $(new fe(.24,.08,.12),this.carPaintMaterial);x.position.set(-1.05,.68,.6),x.rotation.y=.3,e.add(x);const y=new $(new fe(.24,.08,.12),this.carPaintMaterial);y.position.set(1.05,.68,.6),y.rotation.y=-.3,e.add(y);const p=new fe(1.98,.36,1.4),u=new $(p,this.carPaintMaterial);u.position.set(0,.5,-1.55),u.castShadow=!0,e.add(u);const g=new $(new fe(.85,.08,.8),this.glassMat);g.position.set(0,.66,-1.35),e.add(g);const v=new $(new lt(.12,.12,.7,8),this.chromeMat);v.rotateZ(Math.PI/2),v.position.set(0,.62,-1.35),e.add(v);const M=new fe(.65,.05,.35),b=new $(M,this.carbonMat);b.position.set(-.55,.68,-2.15),e.add(b),this.activeAeroFlaps.push(b);const A=new $(M,this.carbonMat);A.position.set(.55,.68,-2.15),e.add(A),this.activeAeroFlaps.push(A);const C=new fe(1.92,.22,.6),U=new $(C,this.carbonMat);U.position.set(0,.22,-2.25),e.add(U);for(let I=-.7;I<=.7;I+=.35){const F=new $(new fe(.04,.24,.5),this.carbonMat);F.position.set(I,.22,-2.25),e.add(F)}const E=new $(new lt(.24,.24,.1,16),this.carbonMat);E.rotateX(Math.PI/2),E.position.set(0,.62,-2.26),e.add(E);const w=new lt(.05,.05,.18,12);w.rotateX(Math.PI/2);const k=[{x:-.08,y:.69},{x:.08,y:.69},{x:-.08,y:.55},{x:.08,y:.55}];for(const I of k){const F=new $(w,this.chromeMat);F.position.set(I.x,I.y,-2.28),e.add(F)}this.leftExhaustLocal.set(-.08,.62,-2.28),this.rightExhaustLocal.set(.08,.62,-2.28);const W=[{x:-.75,y:.58},{x:-.62,y:.58},{x:.62,y:.58},{x:.75,y:.58}],K=new lt(.06,.06,.04,12);K.rotateX(Math.PI/2);for(const I of W){const F=new $(K,this.brakeLightMaterial);F.position.set(I.x,I.y,-2.26),e.add(F)}const P=[-.74,.74];for(const I of P){const F=new $(new Ma(.08,12,8),new mt({color:16777215}));F.position.set(I-.06,.44,2.22),e.add(F);const X=new $(new Ma(.07,12,8),new mt({color:10083839}));X.position.set(I+.06,.42,2.25),e.add(X),this.createVolumetricBeam(e,I,.44,2.26)}this.installWheels(e,13687010,!1)}buildBugattiGT(e){const n=new fe(2.12,.4,4.6),i=new $(n,this.carPaintMaterial);i.position.y=.36,i.castShadow=!0,e.add(i);const r=new fe(2,.3,1.7);r.rotateX(-.11);const s=new $(r,this.carPaintMaterial);s.position.set(0,.48,1.4),s.castShadow=!0,e.add(s);const a=new yd(.32,.04,12,24,Math.PI),o=new mt({color:62463}),l=new $(a,o);l.rotateZ(Math.PI),l.position.set(0,.38,2.32),e.add(l);const c=new $(new lt(.28,.28,.04,16,1,!1,0,Math.PI),new ct({color:526864,metalness:.9,roughness:.3}));c.rotateX(Math.PI/2),c.position.set(0,.38,2.31),e.add(c);const h=new fe(2.18,.07,.75),d=new $(h,this.carbonMat);d.position.set(0,.16,2.28),e.add(d);const f=this.chromeMat,m=new fe(.06,.08,2.4),x=new $(m,f);x.position.set(-.95,.88,-.2),x.rotation.y=.05,e.add(x);const y=new $(m,f);y.position.set(.95,.88,-.2),y.rotation.y=-.05,e.add(y);const p=new fe(1.7,.54,2.3);p.rotateX(.07);const u=new $(p,this.glassMat);u.position.set(0,.78,-.2),u.castShadow=!0,e.add(u);const g=new $(new fe(.04,.22,2),this.carbonMat);g.position.set(0,.92,-.9),e.add(g);const v=new fe(2.05,.42,1.3),M=new $(v,this.carPaintMaterial);M.position.set(0,.56,-1.6),M.castShadow=!0,e.add(M);const b=new $(new lt(.18,.18,.5,12),this.chromeMat);b.rotateX(Math.PI/2),b.position.set(-.48,.76,-1.1),e.add(b);const A=new $(new lt(.18,.18,.5,12),this.chromeMat);A.rotateX(Math.PI/2),A.position.set(.48,.76,-1.1),e.add(A);const C=new fe(2.18,.07,.5),U=new $(C,this.carbonMat);U.position.set(0,1.08,-2.18),e.add(U);const E=new $(new fe(.06,.38,.14),this.carbonMat);E.position.set(-.68,.88,-2.15),e.add(E);const w=new $(new fe(.06,.38,.14),this.carbonMat);w.position.set(.68,.88,-2.15),e.add(w);const k=new fe(1.98,.07,.08),W=new $(k,this.brakeLightMaterial);W.position.set(0,.62,-2.28),e.add(W);const K=new $(new fe(.24,.12,.25),this.chromeMat);K.position.set(-.2,.28,-2.26),e.add(K);const P=new $(new fe(.24,.12,.25),this.chromeMat);P.position.set(.2,.28,-2.26),e.add(P),this.leftExhaustLocal.set(-.2,.28,-2.28),this.rightExhaustLocal.set(.2,.28,-2.28);for(const I of[-.78,.78]){for(let F=0;F<4;F++){const X=(F-1.5)*.09,D=new $(new fe(.07,.07,.06),new mt({color:15136767}));D.position.set(I+X*.6,.46,2.24+X*.2),e.add(D)}this.createVolumetricBeam(e,I,.46,2.26)}this.installWheels(e,1119776,!1)}buildTitanMuscle(e){const n=new fe(2.18,.44,4.5),i=new $(n,this.carPaintMaterial);i.position.y=.38,i.castShadow=!0,e.add(i);const r=new fe(2.08,.32,1.7),s=new $(r,this.carPaintMaterial);s.position.set(0,.52,1.4),s.castShadow=!0,e.add(s);const a=new $(new fe(.58,.36,.7),this.chromeMat);a.position.set(0,.82,1.35),e.add(a);const o=new lt(.07,.07,.03,12);o.rotateX(Math.PI/2);const l=new mt({color:16716066});for(let u=-.16;u<=.16;u+=.16){const g=new $(o,l);g.position.set(u,.84,1.71),e.add(g)}const c=new $(new fe(2.24,.08,.7),this.carbonMat);c.position.set(0,.16,2.25),e.add(c);const h=new fe(1.8,.56,2.1);h.rotateX(.04);const d=new $(h,this.glassMat);d.position.set(0,.8,-.15),d.castShadow=!0,e.add(d);for(let u=0;u<4;u++){const g=new $(new fe(1.4,.04,.12),this.carbonMat);g.position.set(0,.94-u*.08,-.85-u*.18),e.add(g)}const f=new fe(2.1,.44,1.2),m=new $(f,this.carPaintMaterial);m.position.set(0,.58,-1.6),m.castShadow=!0,e.add(m);const x=new $(new fe(2.12,.16,.28),this.carbonMat);x.position.set(0,.86,-2.18),x.rotation.x=.35,e.add(x);for(const u of[-.7,.7])for(let g=-.14;g<=.14;g+=.14){const v=new $(new fe(.06,.22,.06),this.brakeLightMaterial);v.position.set(u+g,.56,-2.26),e.add(v)}const y=new $(new lt(.11,.11,.25,12),this.chromeMat);y.rotateX(Math.PI/2),y.position.set(-.55,.26,-2.25),e.add(y);const p=new $(new lt(.11,.11,.25,12),this.chromeMat);p.rotateX(Math.PI/2),p.position.set(.55,.26,-2.25),e.add(p),this.leftExhaustLocal.set(-.55,.26,-2.25),this.rightExhaustLocal.set(.55,.26,-2.25);for(const u of[-.75,.75]){const g=new $(new fe(.36,.14,.08),new mt({color:16777215}));g.position.set(u,.46,2.24),e.add(g);const v=new $(new lt(.09,.09,.06,12),new mt({color:16755200}));v.rotateX(Math.PI/2),v.position.set(u*.45,.34,2.26),e.add(v),this.createVolumetricBeam(e,u,.46,2.26)}this.installWheels(e,2236962,!0)}installWheels(e,n,i){const r=[{x:-1.02,y:.34,z:1.35,isFront:!0,isRearMuscle:!1},{x:1.02,y:.34,z:1.35,isFront:!0,isRearMuscle:!1},{x:-1.04,y:.36,z:-1.35,isFront:!1,isRearMuscle:i},{x:1.04,y:.36,z:-1.35,isFront:!1,isRearMuscle:i}];for(const s of r){const a=this.createDetailedWheel(s.isFront,s.isRearMuscle,n);a.position.set(s.x,s.y,s.z),e.add(a),this.allWheels.push(a),s.isFront&&this.frontWheels.push(a)}}createDetailedWheel(e,n,i){const r=new Fn,s=n?.38:e?.34:.36,a=n?.42:e?.28:.34,o=new lt(s,s,a,24);o.rotateZ(Math.PI/2);const l=new ct({color:1184791,roughness:.8,metalness:.08}),c=new $(o,l);c.castShadow=!0,r.add(c);const h=new lt(s*.72,s*.72,a*.4,16);h.rotateZ(Math.PI/2);const d=new ct({color:3159357,metalness:.9,roughness:.25}),f=new $(h,d);r.add(f);const m=new fe(a*.6,.16,.14),x=new ct({color:16711720,metalness:.85,roughness:.15}),y=new $(m,x);y.position.set(0,s*.38,0),r.add(y);const p=new lt(s*.68,s*.68,a+.02,16);p.rotateZ(Math.PI/2);const u=new ct({color:i,metalness:.92,roughness:.14,envMapIntensity:2.2}),g=new $(p,u);r.add(g);const v=new lt(s*.22,s*.22,a+.03,12);v.rotateZ(Math.PI/2);const M=new $(v,this.chromeMat);return r.add(M),r}createVolumetricBeam(e,n,i,r){const a=new xd(2.8,26,16,1,!0);a.rotateX(Math.PI/2),a.translate(0,0,26/2);const o=new mt({color:10083839,transparent:!0,opacity:.14,blending:Ns,depthWrite:!1,side:si}),l=new $(a,o);l.position.set(n,i,r),e.add(l),this.headlightCones.push(l)}update(e,n){if(this.isCrashed){this.speedKmh=Math.max(0,this.speedKmh-180*e),this.mesh.position.z+=this.speedKmh/3.6*e,this.updateBounds();return}this.isBraking=n.brake;let i=0;n.nitro&&this.nitroReserve>0&&n.throttle?(this.isNitroActive=!0,this.nitroReserve=Math.max(0,this.nitroReserve-22*e),i=this.nitroMaxSpeedKmh,this.accelerationRate=65):(this.isNitroActive=!1,this.speedKmh>100&&(this.nitroReserve=Math.min(100,this.nitroReserve+4.5*e)),n.throttle?(i=this.maxSpeedKmh,this.accelerationRate=32):n.brake?(i=0,this.accelerationRate=95):(i=40,this.accelerationRate=18)),this.speedKmh<i?this.speedKmh=Math.min(i,this.speedKmh+this.accelerationRate*e):this.speedKmh=Math.max(i,this.speedKmh-this.accelerationRate*1.6*e);const s=14.5*Math.min(1,Math.max(.2,this.speedKmh/140));let a=0;n.steerAxis!==void 0&&Math.abs(n.steerAxis)>.01?a=Sn.clamp(n.steerAxis,-1,1):n.steerLeft?a=1:n.steerRight&&(a=-1),this.steeringInertia=Sn.lerp(this.steeringInertia,a,e*(a!==0?12:10)),this.lateralVelocity=this.steeringInertia*s,this.mesh.position.x+=this.lateralVelocity*e,this.mesh.position.x<-7.1?(this.mesh.position.x=-7.1,this.steeringInertia=0):this.mesh.position.x>7.1&&(this.mesh.position.x=7.1,this.steeringInertia=0);const o=this.speedKmh/3.6;this.mesh.position.z+=o*e;const l=this.steeringInertia*.08,c=n.brake?.04:this.isNitroActive?-.05:0;this.mesh.rotation.z=Sn.lerp(this.mesh.rotation.z,l,e*10),this.mesh.rotation.x=Sn.lerp(this.mesh.rotation.x,c,e*8),this.mesh.rotation.y=Sn.lerp(this.mesh.rotation.y,this.steeringInertia*.06,e*10);const h=this.steeringInertia*.35;for(const f of this.frontWheels)f.rotation.y=h;const d=o*e*4;for(const f of this.allWheels)f.rotation.x+=d;if(this.activeAeroFlaps.length>0){const f=n.brake?.45:Math.abs(this.steeringInertia)*.2;for(const m of this.activeAeroFlaps)m.rotation.x=Sn.lerp(m.rotation.x,-f,e*8)}n.brake?this.brakeLightMaterial.color.setHex(16711697):this.brakeLightMaterial.color.setHex(5570560),this.calculateGearAndRPM(),this.leftExhaustPos.copy(this.leftExhaustLocal).applyMatrix4(this.mesh.matrixWorld),this.rightExhaustPos.copy(this.rightExhaustLocal).applyMatrix4(this.mesh.matrixWorld),this.updateBounds()}calculateGearAndRPM(){const e=this.speedKmh;e<45?(this.currentGear=1,this.currentRPM=900+e/45*6e3):e<90?(this.currentGear=2,this.currentRPM=3500+(e-45)/45*4500):e<140?(this.currentGear=3,this.currentRPM=4e3+(e-90)/50*4400):e<195?(this.currentGear=4,this.currentRPM=4500+(e-140)/55*4200):e<245?(this.currentGear=5,this.currentRPM=4800+(e-195)/50*3800):(this.currentGear=6,this.currentRPM=5200+Math.min(3200,(e-245)/60*3200))}updateBounds(){this.bounds.setFromCenterAndSize(new N(this.mesh.position.x,this.mesh.position.y+.6,this.mesh.position.z),this.carSize)}reset(e=1){this.mesh.position.set(Fs.LANES[e],0,0),this.mesh.rotation.set(0,0,0),this.speedKmh=0,this.steeringInertia=0,this.lateralVelocity=0,this.nitroReserve=100,this.isCrashed=!1,this.isNitroActive=!1,this.updateBounds()}}class LT{scene;poolSize=14;vehicles=[];taxiMaterial;sedanMaterial;suvMaterial;truckCabMaterial;truckTankMaterial;glassMaterial;tireMaterial;taillightMaterial;constructor(e){this.scene=e,this.taxiMaterial=new ct({color:16763904,metalness:.6,roughness:.3}),this.sedanMaterial=new ct({color:14870768,metalness:.8,roughness:.25}),this.suvMaterial=new ct({color:1712172,metalness:.7,roughness:.35}),this.truckCabMaterial=new ct({color:3244750,metalness:.5,roughness:.4}),this.truckTankMaterial=new ct({color:9741240,metalness:.95,roughness:.15}),this.glassMaterial=new Ol({color:988970,roughness:.1,metalness:.9,opacity:.85,transparent:!0}),this.tireMaterial=new ct({color:1118484,roughness:.8,metalness:.1}),this.taillightMaterial=new mt({color:12259601}),this.initPool()}initPool(){const e=["taxi","sedan","suv","truck"];for(let n=0;n<this.poolSize;n++){const i=e[n%e.length],r=this.createVehicleModel(i);r.mesh.position.set(0,-999,0),this.scene.add(r.mesh),this.vehicles.push(r)}}createVehicleModel(e){const n=new Fn;let i=new N(2,1.4,4.4);if(e==="truck"){i=new N(2.5,3.2,9.2);const r=new fe(2.4,2.8,2.8),s=new $(r,this.truckCabMaterial);s.position.set(0,1.6,2.6),s.castShadow=!0,n.add(s);const a=new lt(1.25,1.25,5.8,16);a.rotateX(Math.PI/2);const o=new $(a,this.truckTankMaterial);o.position.set(0,1.8,-1.8),o.castShadow=!0,n.add(o);const l=new fe(2.3,.4,6.2),c=new $(l,this.tireMaterial);c.position.set(0,.5,-1.8),n.add(c);const h=new lt(.48,.48,.35,16);h.rotateZ(Math.PI/2);const d=[3.2,1.8,-1,-2.4,-3.8];for(const f of d){const m=new $(h,this.tireMaterial);m.position.set(-1.15,.48,f),n.add(m);const x=new $(h,this.tireMaterial);x.position.set(1.15,.48,f),n.add(x)}}else{const r=e==="suv",s=e==="taxi",a=r?.65:.45,o=r?.75:.5;i=new N(2,r?1.65:1.35,4.4);const l=s?this.taxiMaterial:r?this.suvMaterial:this.sedanMaterial,c=new fe(2,a,4.4),h=new $(c,l);h.position.y=.35+a/2,h.castShadow=!0,n.add(h);const d=new fe(1.7,o,2.2),f=new $(d,this.glassMaterial);if(f.position.set(0,.35+a+o/2-.05,-.2),n.add(f),s){const g=new fe(.6,.16,.25),v=new mt({color:16773290}),M=new $(g,v);M.position.set(0,.35+a+o+.08,-.2),n.add(M)}const m=new lt(.32,.32,.24,16);m.rotateZ(Math.PI/2);const x=[[-.95,.32,1.3],[.95,.32,1.3],[-.95,.32,-1.3],[.95,.32,-1.3]];for(const[g,v,M]of x){const b=new $(m,this.tireMaterial);b.position.set(g,v,M),n.add(b)}const y=new fe(.4,.12,.08),p=new $(y,this.taillightMaterial);p.position.set(-.65,.35+a*.7,-2.2),n.add(p);const u=new $(y,this.taillightMaterial);u.position.set(.65,.35+a*.7,-2.2),n.add(u)}return{mesh:n,type:e,speedKmh:80+Math.random()*30,laneIndex:0,bounds:new sr,size:i,active:!1,nearMissed:!1}}reset(e){let n=e+45;for(let i=0;i<this.vehicles.length;i++){const r=this.vehicles[i],s=Math.floor(Math.random()*4),a=Fs.LANES[s];r.active=!0,r.laneIndex=s,r.nearMissed=!1,r.speedKmh=r.type==="truck"?70+Math.random()*15:85+Math.random()*25,r.mesh.position.set(a,0,n),this.updateVehicleBounds(r),n+=28+Math.random()*32}}update(e,n,i,r,s,a,o){for(const l of this.vehicles){if(!l.active)continue;const c=l.speedKmh/3.6;if(l.mesh.position.z+=c*e,this.updateVehicleBounds(l),s.intersectsBox(l.bounds)){o();return}if(!l.nearMissed&&r>115){const h=Math.abs(i-l.mesh.position.x),d=Math.abs(n-l.mesh.position.z),f=l.size.x/2+1.05+.65,m=l.size.z/2+2.3;h<f&&d<m&&h>l.size.x/2+.95&&(l.nearMissed=!0,a(150))}if(l.mesh.position.z<n-35){let h=n+50;for(const f of this.vehicles)f.active&&f.mesh.position.z>h&&(h=f.mesh.position.z);const d=Math.floor(Math.random()*4);l.laneIndex=d,l.mesh.position.set(Fs.LANES[d],0,h+25+Math.random()*30),l.speedKmh=l.type==="truck"?70+Math.random()*15:85+Math.random()*25,l.nearMissed=!1,this.updateVehicleBounds(l)}}}updateVehicleBounds(e){e.bounds.setFromCenterAndSize(new N(e.mesh.position.x,e.mesh.position.y+e.size.y/2,e.mesh.position.z),e.size)}}class PT{ctx=null;masterGain=null;isMuted=!1;volume=.8;engineOsc1=null;engineOsc2=null;engineSubOsc=null;engineFilter=null;engineGain=null;nitroNoiseNode=null;nitroGain=null;nitroFilter=null;isNitroPlaying=!1;sirenOsc=null;sirenLfo=null;sirenLfoGain=null;sirenGain=null;sirenPanner=null;skidGain=null;isSkidPlaying=!1;rainNoiseNode=null;rainFilter=null;rainGain=null;isRainPlaying=!1;constructor(){}init(){if(!this.ctx)try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.volume,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupEngineSound(),this.setupNitroSound(),this.setupSirenSound(),this.setupSkidSound(),this.setupRainSound()}catch(e){console.warn("Web Audio API not supported:",e)}}unlock(){this.ctx||this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.isMuted?0:this.volume,this.ctx.currentTime,.05)}toggleMute(){return this.isMuted=!this.isMuted,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.isMuted?0:this.volume,this.ctx.currentTime,.05),this.isMuted}getIsMuted(){return this.isMuted}setupEngineSound(){if(!this.ctx||!this.masterGain)return;this.engineOsc1=this.ctx.createOscillator(),this.engineOsc1.type="sawtooth",this.engineOsc1.frequency.setValueAtTime(55,this.ctx.currentTime),this.engineOsc2=this.ctx.createOscillator(),this.engineOsc2.type="triangle",this.engineOsc2.frequency.setValueAtTime(110,this.ctx.currentTime),this.engineSubOsc=this.ctx.createOscillator(),this.engineSubOsc.type="square",this.engineSubOsc.frequency.setValueAtTime(27.5,this.ctx.currentTime),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(320,this.ctx.currentTime),this.engineFilter.Q.setValueAtTime(3.5,this.ctx.currentTime),this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(0,this.ctx.currentTime);const e=this.ctx.createGain();e.gain.setValueAtTime(.22,this.ctx.currentTime),this.engineOsc1.connect(this.engineFilter),this.engineOsc2.connect(this.engineFilter),this.engineSubOsc.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(e),e.connect(this.masterGain),this.engineOsc1.start(),this.engineOsc2.start(),this.engineSubOsc.start()}updateEngine(e,n,i){if(!this.ctx||!this.engineGain||!this.engineOsc1||!this.engineOsc2||!this.engineSubOsc||!this.engineFilter)return;if(!i){this.engineGain.gain.setTargetAtTime(0,this.ctx.currentTime,.1);return}const r=Math.max(0,Math.min(1,(e-800)/7700)),s=48+r*240,a=this.ctx.currentTime;this.engineOsc1.frequency.setTargetAtTime(s,a,.04),this.engineOsc2.frequency.setTargetAtTime(s*1.5,a,.04),this.engineSubOsc.frequency.setTargetAtTime(s*.5,a,.04);const o=300+r*1800+n*1200;this.engineFilter.frequency.setTargetAtTime(o,a,.05);const l=.35+n*.45;this.engineGain.gain.setTargetAtTime(l,a,.05)}setupNitroSound(){!this.ctx||!this.masterGain||(this.nitroGain=this.ctx.createGain(),this.nitroGain.gain.setValueAtTime(0,this.ctx.currentTime),this.nitroFilter=this.ctx.createBiquadFilter(),this.nitroFilter.type="bandpass",this.nitroFilter.frequency.setValueAtTime(1400,this.ctx.currentTime),this.nitroFilter.Q.setValueAtTime(1.5,this.ctx.currentTime),this.nitroFilter.connect(this.nitroGain),this.nitroGain.connect(this.masterGain))}createWhiteNoiseBuffer(){if(!this.ctx)throw new Error("No context");const e=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<e;r++)i[r]=Math.random()*2-1;return n}startNitro(){if(!(!this.ctx||!this.nitroGain||!this.nitroFilter)&&!this.isNitroPlaying){this.isNitroPlaying=!0;try{this.nitroNoiseNode=this.ctx.createBufferSource(),this.nitroNoiseNode.buffer=this.createWhiteNoiseBuffer(),this.nitroNoiseNode.loop=!0,this.nitroNoiseNode.connect(this.nitroFilter),this.nitroNoiseNode.start();const e=this.ctx.currentTime;this.nitroGain.gain.cancelScheduledValues(e),this.nitroGain.gain.setValueAtTime(0,e),this.nitroGain.gain.linearRampToValueAtTime(.55,e+.15)}catch{}}}stopNitro(){if(!this.ctx||!this.nitroGain||!this.isNitroPlaying)return;const e=this.ctx.currentTime;this.nitroGain.gain.cancelScheduledValues(e),this.nitroGain.gain.linearRampToValueAtTime(0,e+.2),setTimeout(()=>{if(this.nitroNoiseNode){try{this.nitroNoiseNode.stop(),this.nitroNoiseNode.disconnect()}catch{}this.nitroNoiseNode=null}this.isNitroPlaying=!1},250),this.playBlowOffValve()}playBlowOffValve(){if(!(!this.ctx||!this.masterGain))try{const e=this.ctx.createBufferSource();e.buffer=this.createWhiteNoiseBuffer();const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.setValueAtTime(2200,this.ctx.currentTime);const i=this.ctx.createGain(),r=this.ctx.currentTime;i.gain.setValueAtTime(.4,r),i.gain.exponentialRampToValueAtTime(.001,r+.35),e.connect(n),n.connect(i),i.connect(this.masterGain),e.start(r),e.stop(r+.4)}catch{}}setupSirenSound(){!this.ctx||!this.masterGain||(this.sirenOsc=this.ctx.createOscillator(),this.sirenOsc.type="sawtooth",this.sirenOsc.frequency.setValueAtTime(800,this.ctx.currentTime),this.sirenLfo=this.ctx.createOscillator(),this.sirenLfo.type="sine",this.sirenLfo.frequency.setValueAtTime(.65,this.ctx.currentTime),this.sirenLfoGain=this.ctx.createGain(),this.sirenLfoGain.gain.setValueAtTime(320,this.ctx.currentTime),this.sirenLfo.connect(this.sirenLfoGain),this.sirenLfoGain.connect(this.sirenOsc.frequency),this.sirenGain=this.ctx.createGain(),this.sirenGain.gain.setValueAtTime(0,this.ctx.currentTime),this.ctx.createStereoPanner?(this.sirenPanner=this.ctx.createStereoPanner(),this.sirenPanner.pan.setValueAtTime(0,this.ctx.currentTime),this.sirenOsc.connect(this.sirenGain),this.sirenGain.connect(this.sirenPanner),this.sirenPanner.connect(this.masterGain)):(this.sirenOsc.connect(this.sirenGain),this.sirenGain.connect(this.masterGain)),this.sirenOsc.start(),this.sirenLfo.start())}updateSiren(e,n,i){if(!this.ctx||!this.sirenGain)return;const r=this.ctx.currentTime;if(e){const s=Math.max(0,Math.min(.65,(1-n)*.65));if(this.sirenGain.gain.setTargetAtTime(s,r,.1),this.sirenPanner){const a=Math.max(-.85,Math.min(.85,i*.2));this.sirenPanner.pan.setTargetAtTime(a,r,.1)}}else this.sirenGain.gain.setTargetAtTime(0,r,.3)}setupSkidSound(){!this.ctx||!this.masterGain||(this.skidGain=this.ctx.createGain(),this.skidGain.gain.setValueAtTime(0,this.ctx.currentTime),this.skidGain.connect(this.masterGain))}updateTireSkid(e){if(!this.ctx||!this.skidGain)return;const n=this.ctx.currentTime;if(e>.15){this.isSkidPlaying||(this.isSkidPlaying=!0);const i=Math.min(.4,(e-.15)*.6);this.skidGain.gain.setTargetAtTime(i,n,.05)}else this.skidGain.gain.setTargetAtTime(0,n,.1),this.isSkidPlaying=!1}playNearMiss(){if(!(!this.ctx||!this.masterGain))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(350,i),e.frequency.exponentialRampToValueAtTime(1400,i+.15),e.frequency.exponentialRampToValueAtTime(220,i+.35),n.gain.setValueAtTime(.4,i),n.gain.exponentialRampToValueAtTime(.001,i+.35),e.connect(n),n.connect(this.masterGain),e.start(i),e.stop(i+.36)}catch{}}playCrash(){if(!(!this.ctx||!this.masterGain))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(120,i),e.frequency.exponentialRampToValueAtTime(30,i+.4),n.gain.setValueAtTime(.8,i),n.gain.exponentialRampToValueAtTime(.001,i+.45),e.connect(n),n.connect(this.masterGain),e.start(i),e.stop(i+.5);const r=this.ctx.createBufferSource();r.buffer=this.createWhiteNoiseBuffer();const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(800,i);const a=this.ctx.createGain();a.gain.setValueAtTime(.7,i),a.gain.exponentialRampToValueAtTime(.001,i+.6),r.connect(s),s.connect(a),a.connect(this.masterGain),r.start(i),r.stop(i+.65)}catch{}}playCoinPickup(){if(!(!this.ctx||!this.masterGain))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(987.77,i),e.frequency.setValueAtTime(1318.51,i+.08),n.gain.setValueAtTime(.3,i),n.gain.exponentialRampToValueAtTime(.001,i+.25),e.connect(n),n.connect(this.masterGain),e.start(i),e.stop(i+.26)}catch{}}setupRainSound(){if(!(!this.ctx||!this.masterGain||this.isRainPlaying))try{const e=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<e;r++)i[r]=(Math.random()*2-1)*.4;this.rainNoiseNode=this.ctx.createBufferSource(),this.rainNoiseNode.buffer=n,this.rainNoiseNode.loop=!0,this.rainFilter=this.ctx.createBiquadFilter(),this.rainFilter.type="bandpass",this.rainFilter.frequency.setValueAtTime(1400,this.ctx.currentTime),this.rainFilter.Q.setValueAtTime(1.2,this.ctx.currentTime),this.rainGain=this.ctx.createGain(),this.rainGain.gain.setValueAtTime(0,this.ctx.currentTime),this.rainNoiseNode.connect(this.rainFilter),this.rainFilter.connect(this.rainGain),this.rainGain.connect(this.masterGain),this.rainNoiseNode.start(),this.isRainPlaying=!0}catch(e){console.warn("Rain sound init failed:",e)}}startRain(){(!this.ctx||!this.rainGain)&&this.setupRainSound(),this.ctx&&this.rainGain&&this.rainGain.gain.setTargetAtTime(.32,this.ctx.currentTime,.4)}stopRain(){this.ctx&&this.rainGain&&this.rainGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.4)}playThunder(){if(!(!this.ctx||!this.masterGain))try{const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(110,e),n.frequency.exponentialRampToValueAtTime(28,e+2.2),i.gain.setValueAtTime(.65,e),i.gain.exponentialRampToValueAtTime(.001,e+2.4),n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+2.5);const r=Math.floor(this.ctx.sampleRate*.8),s=this.ctx.createBuffer(1,r,this.ctx.sampleRate),a=s.getChannelData(0);for(let h=0;h<r;h++)a[h]=Math.random()*2-1;const o=this.ctx.createBufferSource();o.buffer=s;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(320,e);const c=this.ctx.createGain();c.gain.setValueAtTime(.4,e),c.gain.exponentialRampToValueAtTime(.001,e+1.2),o.connect(l),l.connect(c),c.connect(this.masterGain),o.start(e),o.stop(e+1.2)}catch{}}}const Ct=new PT;class ze{static enabled=!0;static setEnabled(e){this.enabled=e}static isEnabled(){return this.enabled}static nearMiss(){if(!(!this.enabled||typeof navigator>"u"||!("vibrate"in navigator)))try{navigator.vibrate(18)}catch{}}static nitroPulse(){if(!(!this.enabled||typeof navigator>"u"||!("vibrate"in navigator)))try{navigator.vibrate([25,20,25])}catch{}}static policeImpact(){if(!(!this.enabled||typeof navigator>"u"||!("vibrate"in navigator)))try{navigator.vibrate([60,30,80])}catch{}}static crash(){if(!(!this.enabled||typeof navigator>"u"||!("vibrate"in navigator)))try{navigator.vibrate([120,50,200])}catch{}}static buttonTap(){if(!(!this.enabled||typeof navigator>"u"||!("vibrate"in navigator)))try{navigator.vibrate(10)}catch{}}}class NT{scene;state="IDLE";cruisers=[];pursuitScore=0;timeInPursuit=0;evasionTimer=0;strobeTimer=0;strobePhase=!1;ramCooldown=0;redBlueFlashIntensity=0;distanceToClosest=999;constructor(e){this.scene=e,this.initCruisers()}initCruisers(){for(let e=0;e<2;e++){const n=this.buildPoliceCruiserModel();n.mesh.position.set(e===0?-1.8:1.8,0,-999),this.scene.add(n.mesh),this.cruisers.push(n)}}buildPoliceCruiserModel(){const e=new Fn,n=new N(2.1,1.45,4.6),i=new fe(2.1,.48,4.6),r=new ct({color:592399,metalness:.8,roughness:.2}),s=new $(i,r);s.position.y=.4,s.castShadow=!0,e.add(s);const a=new fe(2.12,.44,1.8),o=new ct({color:15791352,metalness:.4,roughness:.3}),l=new $(a,o);l.position.set(0,.4,0),e.add(l);const c=new fe(1.7,.52,2.3),h=new Ol({color:395534,roughness:.1,metalness:.9,opacity:.9,transparent:!0}),d=new $(c,h);d.position.set(0,.82,-.15),e.add(d);const f=new fe(1.9,.35,.2),m=new ct({color:2237998,metalness:.9,roughness:.3}),x=new $(f,m);x.position.set(0,.38,2.35),e.add(x);const y=new fe(1.2,.08,.2),p=new $(y,m);p.position.set(0,1.12,-.2),e.add(p);const u=new fe(.45,.12,.18),g=new mt({color:16711714}),v=new mt({color:22015}),M=new $(u,g);M.position.set(-.35,1.18,-.2),e.add(M);const b=new $(u,v);b.position.set(.35,1.18,-.2),e.add(b);const A=new mh(16711714,2.5,16);A.position.set(-.35,1.3,-.2),e.add(A);const C=new mh(26367,2.5,16);C.position.set(.35,1.3,-.2),e.add(C);const U=new lt(.34,.34,.26,16);U.rotateZ(Math.PI/2);const E=new ct({color:1118484,roughness:.8}),w=[[-.98,.34,1.35],[.98,.34,1.35],[-.98,.34,-1.35],[.98,.34,-1.35]];for(const[k,W,K]of w){const P=new $(U,E);P.position.set(k,W,K),e.add(P)}return{mesh:e,speedKmh:200,targetLaneX:0,lateralVel:0,bounds:new sr,size:n,redLight:A,blueLight:C,redMesh:M,blueMesh:b,active:!1}}triggerPursuit(e,n){if(this.state==="PURSUIT")return;this.state="PURSUIT",this.timeInPursuit=0,this.evasionTimer=0,this.ramCooldown=1.5;const i=[-18,-32],r=[n>0?-1.8:1.8,n];this.cruisers.forEach((s,a)=>{s.active=!0,s.speedKmh=270,s.targetLaneX=r[a],s.mesh.position.set(r[a],0,e+i[a]),this.updateCruiserBounds(s)}),Ct.updateSiren(!0,.3,0)}update(e,n,i,r,s,a,o){if(this.state!=="PURSUIT"){this.redBlueFlashIntensity=0,Ct.updateSiren(!1,1,0);return}this.timeInPursuit+=e,this.ramCooldown-=e,this.strobeTimer+=e*16,this.strobeTimer>1&&(this.strobeTimer=0,this.strobePhase=!this.strobePhase);const l=this.strobePhase,c=!this.strobePhase;this.redBlueFlashIntensity=.45+(this.strobePhase?.35:-.2);let h=999,d=0;for(let m=0;m<this.cruisers.length;m++){const x=this.cruisers[m];if(!x.active)continue;x.redLight.intensity=l?3.5:.2,x.blueLight.intensity=c?3.5:.2,x.redMesh.material.color.setHex(l?16711714:4456453),x.blueMesh.material.color.setHex(c?26367:4420);const y=x.mesh.position.z-n,p=Math.abs(y);if(p<h&&(h=p,d=x.mesh.position.x-i),y<-4?x.speedKmh=Math.max(r+28,260):y>6?x.speedKmh=Math.max(60,r-15):x.speedKmh=r+(m===0?4:-3),x.mesh.position.z+=x.speedKmh/3.6*e,m===0?Math.abs(y)<3.5&&this.ramCooldown<=0?(x.targetLaneX=i,this.ramCooldown=2.2,ze.policeImpact()):x.targetLaneX=i>0?i-3.2:i+3.2:x.targetLaneX=i,x.mesh.position.x=Sn.lerp(x.mesh.position.x,x.targetLaneX,e*3.8),this.updateCruiserBounds(x),s.intersectsBox(x.bounds)){ze.policeImpact();const u=x.mesh.position.x<i?1:-1;i+=u*3.5*e}}this.distanceToClosest=h;const f=Math.min(1,h/60);Ct.updateSiren(!0,f,d),h>75&&r>180?(this.evasionTimer+=e,this.evasionTimer>4.5&&(this.state="EVADED",this.cruisers.forEach(m=>m.active=!1),Ct.updateSiren(!1,1,0),o(1e3))):this.evasionTimer=Math.max(0,this.evasionTimer-e*.8),h<5.5&&r<22&&this.timeInPursuit>2&&(this.state="BUSTED",Ct.updateSiren(!1,1,0),a())}updateCruiserBounds(e){e.bounds.setFromCenterAndSize(new N(e.mesh.position.x,e.mesh.position.y+e.size.y/2,e.mesh.position.z),e.size)}reset(){this.state="IDLE",this.timeInPursuit=0,this.evasionTimer=0,this.redBlueFlashIntensity=0,this.cruisers.forEach(e=>{e.active=!1,e.mesh.position.set(0,-999,0)}),Ct.updateSiren(!1,1,0)}}class DT{maxParticles=300;particles=[];geometry;material;points;positions;colors;constructor(e){this.positions=new Float32Array(this.maxParticles*3),this.colors=new Float32Array(this.maxParticles*3);for(let n=0;n<this.maxParticles;n++)this.particles.push({position:new N(0,-999,0),velocity:new N,color:new De(1,1,1),size:.2,alpha:1,life:0,maxLife:1,active:!1});this.geometry=new vn,this.geometry.setAttribute("position",new An(this.positions,3)),this.geometry.setAttribute("color",new An(this.colors,3)),this.material=new gv({size:.35,vertexColors:!0,transparent:!0,opacity:.85,blending:Ns,depthWrite:!1}),this.points=new ST(this.geometry,this.material),this.points.frustumCulled=!1,e.add(this.points)}emitNitroFlame(e,n,i){const r=[e,n];for(const s of r)this.spawnParticle(s.x+(Math.random()-.5)*.08,s.y+(Math.random()-.5)*.08,s.z+(Math.random()-.5)*.1,(Math.random()-.5)*.5,(Math.random()-.5)*.3,i-(8+Math.random()*6),Math.random()>.3?62463:26367,.3+Math.random()*.15,.18+Math.random()*.12)}emitTireSmoke(e){this.spawnParticle(e.x+(Math.random()-.5)*.15,e.y+.1,e.z+(Math.random()-.5)*.2,(Math.random()-.5)*1.5,.5+Math.random()*.8,(Math.random()-.5)*1.5,5596791,.4+Math.random()*.2,.4+Math.random()*.3)}emitSparks(e,n=12){for(let i=0;i<n;i++)this.spawnParticle(e.x,e.y,e.z,(Math.random()-.5)*12,2+Math.random()*8,(Math.random()-.5)*12,Math.random()>.5?16755200:16724736,.2+Math.random()*.15,.3+Math.random()*.25)}spawnParticle(e,n,i,r,s,a,o,l,c){const h=this.particles.find(d=>!d.active);h&&(h.active=!0,h.position.set(e,n,i),h.velocity.set(r,s,a),h.color.setHex(o),h.size=l,h.life=c,h.maxLife=c)}update(e){const n=this.geometry.attributes.position,i=this.geometry.attributes.color;for(let r=0;r<this.maxParticles;r++){const s=this.particles[r];if(!s.active){this.positions[r*3+1]=-999;continue}if(s.life-=e,s.life<=0){s.active=!1,this.positions[r*3+1]=-999;continue}s.position.x+=s.velocity.x*e,s.position.y+=s.velocity.y*e,s.position.z+=s.velocity.z*e,s.velocity.x*=.95,s.velocity.y-=9.8*e*.5,s.velocity.z*=.95;const a=s.life/s.maxLife;this.positions[r*3]=s.position.x,this.positions[r*3+1]=s.position.y,this.positions[r*3+2]=s.position.z,this.colors[r*3]=s.color.r*a,this.colors[r*3+1]=s.color.g*a,this.colors[r*3+2]=s.color.b*a}n.needsUpdate=!0,i.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}const gm=[{id:"apex_roadster",name:"Apex Roadster",type:"roadster",price:0,unlocked:!0,topSpeedKmh:240,acceleration:9.2,handling:9.5,armor:6,color:"#00f3ff",underglowColor:"#00f3ff"},{id:"veloce_gt",name:"Veloce GT Supercar",type:"gt",price:3500,unlocked:!1,topSpeedKmh:295,acceleration:9.8,handling:8.8,armor:5.5,color:"#ff0055",underglowColor:"#ff0055"},{id:"titan_v8",name:"Titan V8 Muscle",type:"muscle",price:5e3,unlocked:!1,topSpeedKmh:260,acceleration:8.5,handling:7.5,armor:9.5,color:"#e6c300",underglowColor:"#ffaa00"}],vm={highScore:0,coins:500,totalNearMisses:0,totalPoliceEvaded:0,selectedCarId:"apex_roadster",audioVolume:.8,hapticsEnabled:!0,tiltSteeringEnabled:!1,playerCallsign:"VIPER_01"},IT=[{id:"lb_1",callsign:"CYBER_GHOST",score:98450,distanceMeters:12400,policeEvaded:8,carName:"Veloce GT",date:"SEP 20"},{id:"lb_2",callsign:"NEO_VIPER",score:84200,distanceMeters:9850,policeEvaded:6,carName:"Apex Roadster",date:"SEP 19"},{id:"lb_3",callsign:"TITAN_WARLORD",score:71900,distanceMeters:8200,policeEvaded:5,carName:"Titan V8",date:"SEP 18"},{id:"lb_4",callsign:"NIGHT_STALKER",score:58600,distanceMeters:6900,policeEvaded:4,carName:"Veloce GT",date:"SEP 17"},{id:"lb_5",callsign:"INDRAJIT_X",score:48500,distanceMeters:5600,policeEvaded:3,carName:"Apex Roadster",date:"SEP 16"},{id:"lb_6",callsign:"SYNTH_PULSE",score:38200,distanceMeters:4400,policeEvaded:2,carName:"Veloce GT",date:"SEP 15"},{id:"lb_7",callsign:"DRIFT_SPECTRE",score:29400,distanceMeters:3300,policeEvaded:2,carName:"Titan V8",date:"SEP 14"},{id:"lb_8",callsign:"BLADE_RUNNER",score:21600,distanceMeters:2500,policeEvaded:1,carName:"Apex Roadster",date:"SEP 12"},{id:"lb_9",callsign:"ZERO_COOL",score:15300,distanceMeters:1800,policeEvaded:1,carName:"Apex Roadster",date:"SEP 10"},{id:"lb_10",callsign:"HIGHWAY_COP",score:9200,distanceMeters:1200,policeEvaded:0,carName:"Titan V8",date:"SEP 08"}],_m="velocity_x_stats",xm="velocity_x_cars",ym="velocity_x_leaderboard";class St{static getStats(){try{const e=localStorage.getItem(_m);if(e)return{...vm,...JSON.parse(e)}}catch{}return{...vm}}static saveStats(e){const i={...this.getStats(),...e};try{localStorage.setItem(_m,JSON.stringify(i))}catch{}return i}static getCars(){try{const e=localStorage.getItem(xm);if(e){const n=JSON.parse(e);return gm.map(i=>{const r=n.find(s=>s.id===i.id);return r?{...i,...r}:i})}}catch{}return gm}static saveCars(e){try{localStorage.setItem(xm,JSON.stringify(e))}catch{}}static unlockCar(e){const n=this.getStats(),i=this.getCars(),r=i.find(s=>s.id===e);return r&&!r.unlocked&&n.coins>=r.price?(n.coins-=r.price,r.unlocked=!0,this.saveStats(n),this.saveCars(i),!0):!1}static updateCarCustomization(e,n,i){const r=this.getCars(),s=r.find(a=>a.id===e);s&&(s.color=n,s.underglowColor=i,this.saveCars(r))}static getLeaderboard(){try{const e=localStorage.getItem(ym);if(e)return JSON.parse(e).sort((i,r)=>r.score-i.score).slice(0,10)}catch{}return[...IT]}static addLeaderboardScore(e){const n=this.getLeaderboard(),i={...e,id:"lb_"+Date.now(),isPlayer:!0},s=[...n,i].sort((a,o)=>o.score-a.score).slice(0,10);try{localStorage.setItem(ym,JSON.stringify(s))}catch{}return s}}class ms{static instance=null;enabled=!1;supported=!1;steerAxis=0;rawAngle=0;calibratedAngle=0;baselineAngle=0;isCalibrated=!1;deadzoneDeg=2;maxSteerDeg=16;smoothing=14;boundHandleOrientation;constructor(){this.boundHandleOrientation=this.handleDeviceOrientation.bind(this),this.checkSupport()}static getInstance(){return ms.instance||(ms.instance=new ms),ms.instance}checkSupport(){typeof window<"u"&&"DeviceOrientationEvent"in window&&(this.supported=!0)}async requestPermission(){if(typeof window<"u"&&typeof DeviceOrientationEvent.requestPermission=="function")try{return await DeviceOrientationEvent.requestPermission()==="granted"?(this.supported=!0,!0):(this.supported=!1,!1)}catch(e){return console.warn("DeviceOrientation permission request failed:",e),!1}return this.supported}start(){typeof window>"u"||(this.enabled=!0,window.addEventListener("deviceorientation",this.boundHandleOrientation,{passive:!0}))}stop(){typeof window>"u"||(this.enabled=!1,this.steerAxis=0,this._targetSteer=0,window.removeEventListener("deviceorientation",this.boundHandleOrientation))}calibrate(){this.baselineAngle=this.rawAngle,this.isCalibrated=!0,this.calibratedAngle=0,this.steerAxis=0,this._targetSteer=0}handleDeviceOrientation(e){if(!this.enabled)return;let n=90;typeof window<"u"&&(window.screen?.orientation?.angle!==void 0?n=window.screen.orientation.angle:typeof window.orientation=="number"&&(n=window.orientation));let i=0;const r=e.beta??0,s=e.gamma??0;n===90?i=r:n===270||n===-90?i=-r:i=s,this.rawAngle=i,this.isCalibrated||(this.baselineAngle=i,this.isCalibrated=!0);let a=i-this.baselineAngle;a=Sn.clamp(a,-45,45),this.calibratedAngle=a;const o=Math.abs(a);let l=0;if(o>this.deadzoneDeg){const c=this.maxSteerDeg-this.deadzoneDeg,h=Math.min(1,(o-this.deadzoneDeg)/c),d=.7*h+.3*Math.pow(h,2);l=-Math.sign(a)*d}this._targetSteer=l}_targetSteer=0;update(e){return this.enabled?(this.steerAxis=Sn.lerp(this.steerAxis,this._targetSteer,Math.min(1,e*this.smoothing)),this.steerAxis):(this.steerAxis=0,0)}getState(){return{enabled:this.enabled,supported:this.supported,steerAxis:this.steerAxis,rawAngle:this.rawAngle,calibratedAngle:this.calibratedAngle,isCalibrated:this.isCalibrated}}}const cn=ms.getInstance();class UT{scene;maxRainDrops=900;geometry;material;lineSegments;positions;dropSpeeds;dropLengths;enabled=!1;boxWidth=36;boxDepth=90;boxHeight=28;constructor(e){this.scene=e,this.positions=new Float32Array(this.maxRainDrops*6),this.dropSpeeds=new Float32Array(this.maxRainDrops),this.dropLengths=new Float32Array(this.maxRainDrops);for(let n=0;n<this.maxRainDrops;n++){const i=n*6,r=(Math.random()-.5)*this.boxWidth,s=Math.random()*this.boxHeight,a=(Math.random()-.25)*this.boxDepth,o=1.2+Math.random()*.8;this.positions[i]=r,this.positions[i+1]=s+o,this.positions[i+2]=a,this.positions[i+3]=r,this.positions[i+4]=s,this.positions[i+5]=a,this.dropSpeeds[n]=48+Math.random()*24,this.dropLengths[n]=o}this.geometry=new vn,this.geometry.setAttribute("position",new An(this.positions,3)),this.material=new mv({color:8965375,transparent:!0,opacity:.55,blending:Ns,depthWrite:!1}),this.lineSegments=new MT(this.geometry,this.material),this.lineSegments.frustumCulled=!1,this.lineSegments.visible=!1,this.scene.add(this.lineSegments)}setEnabled(e){this.enabled=e,this.lineSegments.visible=e}update(e,n,i,r){if(!this.enabled)return;const s=this.geometry.attributes.position,a=s.array,o=r/3.6*.08;for(let l=0;l<this.maxRainDrops;l++){const c=l*6,h=this.dropSpeeds[l],d=this.dropLengths[l];a[c+1]-=h*e,a[c+4]=a[c+1]-d,a[c+2]-=o*e,a[c+5]=a[c+2]+o*.04;const f=a[c+2]-n,m=a[c]-i;if(a[c+1]<=.1||f<-25||f>75||Math.abs(m)>this.boxWidth/2){const x=i+(Math.random()-.5)*this.boxWidth,y=this.boxHeight-Math.random()*3,p=n+(Math.random()-.2)*this.boxDepth;a[c]=x,a[c+1]=y,a[c+2]=p,a[c+3]=x,a[c+4]=y-d,a[c+5]=p}}s.needsUpdate=!0}dispose(){this.scene.remove(this.lineSegments),this.geometry.dispose(),this.material.dispose()}}class OT{currentWeather="CLEAR";rainSystem;roadManager;dirLight;ambientLight;scene;baseDirIntensity=1.8;baseAmbientIntensity=1.4;lightningTimer=8;isFlashing=!1;flashDuration=0;onLightningFlash;onWeatherChange;constructor(e,n,i,r){this.scene=e,this.dirLight=n,this.ambientLight=i,this.roadManager=r,this.rainSystem=new UT(e)}setWeather(e){this.currentWeather=e;const n=e==="RAIN";this.rainSystem.setEnabled(n),this.roadManager.setWetness(n),n?(Ct.startRain(),this.lightningTimer=5+Math.random()*6,this.scene.fog instanceof Va&&(this.scene.fog.density=.0055)):(Ct.stopRain(),this.scene.fog instanceof Va&&(this.scene.fog.density=.0035),this.resetLighting()),this.onWeatherChange&&this.onWeatherChange(e)}toggleWeather(){const e=this.currentWeather==="CLEAR"?"RAIN":"CLEAR";return this.setWeather(e),e}update(e,n,i,r){this.currentWeather==="RAIN"&&(this.rainSystem.update(e,n,i,r),this.isFlashing?(this.flashDuration-=e,this.flashDuration<=0&&(this.isFlashing=!1,this.resetLighting(),this.lightningTimer=9+Math.random()*12)):(this.lightningTimer-=e,this.lightningTimer<=0&&this.triggerLightning()))}triggerLightning(){this.isFlashing=!0,this.flashDuration=.14,this.dirLight.intensity=this.baseDirIntensity*3.6,this.ambientLight.intensity=this.baseAmbientIntensity*3.2,Ct.playThunder(),this.onLightningFlash&&this.onLightningFlash()}resetLighting(){this.dirLight.intensity=this.baseDirIntensity,this.ambientLight.intensity=this.baseAmbientIntensity}dispose(){this.rainSystem.dispose()}}class FT{renderer;scene;cameraManager;playerCar;roadManager;trafficManager;policeChase;particleSystem;weatherManager;isLightningFlashing=!1;dirLight;clock=new CT;isRunning=!1;animFrameId=null;score=0;distanceMeters=0;nearMissCount=0;policeEvadedCount=0;comboMultiplier=1;comboResetTimer=0;nextPursuitDistance=750;onHUDUpdate;onNearMissAlert;onGameOver;onPursuitEvadedAlert;controls={steerLeft:!1,steerRight:!1,throttle:!1,brake:!1,nitro:!1,steerAxis:0};constructor(e,n){this.renderer=new pv({canvas:e,antialias:!0,powerPreference:"high-performance",stencil:!1,depth:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=F0,this.renderer.toneMappingExposure=1.2,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=U0,this.scene=new xT,this.scene.background=new De(395539),this.scene.fog=new Va(461848,.0028),this.setupCyberpunkEnvironment(),this.dirLight=new TT(10079487,2.2),this.dirLight.position.set(25,45,20),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=1024,this.dirLight.shadow.mapSize.height=1024,this.dirLight.shadow.camera.near=.5,this.dirLight.shadow.camera.far=120,this.dirLight.shadow.camera.left=-18,this.dirLight.shadow.camera.right=18,this.dirLight.shadow.camera.top=22,this.dirLight.shadow.camera.bottom=-22,this.dirLight.shadow.bias=-8e-4,this.scene.add(this.dirLight);const i=new AT(2635860,1.8);this.scene.add(i),this.cameraManager=new RT,this.roadManager=new Fs(this.scene),this.playerCar=new bT(this.scene,n),this.trafficManager=new LT(this.scene),this.policeChase=new NT(this.scene),this.particleSystem=new DT(this.scene),this.weatherManager=new OT(this.scene,this.dirLight,i,this.roadManager),this.weatherManager.onLightningFlash=()=>{this.isLightningFlashing=!0,setTimeout(()=>{this.isLightningFlashing=!1},160)},window.addEventListener("resize",this.onResize)}setCarConfig(e){this.playerCar.setCarConfig(e)}start(){this.isRunning=!0,this.clock.start(),this.resetRunState(),this.tick()}stop(){this.isRunning=!1,this.animFrameId&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null)}resetRunState(){this.score=0,this.distanceMeters=0,this.nearMissCount=0,this.policeEvadedCount=0,this.comboMultiplier=1,this.comboResetTimer=0,this.nextPursuitDistance=650,this.playerCar.reset(1),this.trafficManager.reset(this.playerCar.mesh.position.z),this.policeChase.reset()}onResize=()=>{const e=window.innerWidth,n=window.innerHeight;this.renderer.setSize(e,n),this.cameraManager.resize(e,n)};handleNearMiss=e=>{this.nearMissCount++,this.comboMultiplier=Math.min(8,this.comboMultiplier+1),this.comboResetTimer=3.8;const n=e*this.comboMultiplier;this.score+=n,Ct.playNearMiss(),ze.nearMiss(),this.cameraManager.triggerShake(.12),this.onNearMissAlert&&this.onNearMissAlert(`NEAR MISS! +${n}`,this.comboMultiplier)};handleCrash=()=>{this.playerCar.isCrashed||(this.playerCar.isCrashed=!0,Ct.playCrash(),ze.crash(),this.cameraManager.triggerShake(.55),this.particleSystem.emitSparks(this.playerCar.mesh.position,28),setTimeout(()=>{this.finishRun(!1)},1400))};handleBusted=()=>{this.playerCar.isCrashed||(this.playerCar.isCrashed=!0,ze.crash(),this.cameraManager.triggerShake(.35),setTimeout(()=>{this.finishRun(!0)},1200))};handlePursuitEvaded=e=>{this.policeEvadedCount++,this.score+=2500,Ct.playCoinPickup(),this.onPursuitEvadedAlert&&this.onPursuitEvadedAlert(e),this.nextPursuitDistance=this.distanceMeters+1200};finishRun(e){this.stop();const n=St.getStats(),i=this.score>n.highScore,r=Math.floor(this.score/15)+this.policeEvadedCount*500;St.saveStats({highScore:Math.max(n.highScore,this.score),coins:n.coins+r,totalNearMisses:n.totalNearMisses+this.nearMissCount,totalPoliceEvaded:n.totalPoliceEvaded+this.policeEvadedCount}),this.score>200&&St.addLeaderboardScore({callsign:n.playerCallsign||"VIPER_01",score:this.score,distanceMeters:Math.floor(this.distanceMeters),policeEvaded:this.policeEvadedCount,carName:this.playerCar.config.name,date:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric"}).toUpperCase()}),this.onGameOver&&this.onGameOver({score:this.score,distanceMeters:Math.floor(this.distanceMeters),nearMisses:this.nearMissCount,policeEvaded:this.policeEvadedCount,coinsEarned:r,isBusted:e,isHighScore:i})}tick=()=>{if(!this.isRunning)return;this.animFrameId=requestAnimationFrame(this.tick);const e=Math.min(this.clock.getDelta(),.08);cn.enabled&&(this.controls.steerAxis=cn.update(e)),this.playerCar.update(e,this.controls);const n=!this.playerCar.isCrashed;Ct.updateEngine(this.playerCar.currentRPM,this.controls.throttle?1:0,n),Ct.updateTireSkid(Math.abs(this.playerCar.steeringInertia)*(this.playerCar.speedKmh>120?.35:0)),this.playerCar.isNitroActive?(Ct.startNitro(),ze.nitroPulse(),this.particleSystem.emitNitroFlame(this.playerCar.leftExhaustPos,this.playerCar.rightExhaustPos,this.playerCar.speedKmh/3.6)):Ct.stopNitro(),this.roadManager.update(this.playerCar.mesh.position.z),this.dirLight.position.set(this.playerCar.mesh.position.x+20,45,this.playerCar.mesh.position.z+15),this.dirLight.target.position.set(this.playerCar.mesh.position.x,0,this.playerCar.mesh.position.z+10),this.dirLight.target.updateMatrixWorld(),this.trafficManager.update(e,this.playerCar.mesh.position.z,this.playerCar.mesh.position.x,this.playerCar.speedKmh,this.playerCar.bounds,this.handleNearMiss,this.handleCrash),this.distanceMeters=this.playerCar.mesh.position.z,this.policeChase.state==="IDLE"&&this.distanceMeters>=this.nextPursuitDistance&&this.policeChase.triggerPursuit(this.playerCar.mesh.position.z,this.playerCar.mesh.position.x),this.policeChase.update(e,this.playerCar.mesh.position.z,this.playerCar.mesh.position.x,this.playerCar.speedKmh,this.playerCar.bounds,this.handleBusted,this.handlePursuitEvaded),this.particleSystem.update(e),this.weatherManager.update(e,this.playerCar.mesh.position.z,this.playerCar.mesh.position.x,this.playerCar.speedKmh),this.cameraManager.update(e,this.playerCar.mesh.position,this.playerCar.speedKmh,this.playerCar.isNitroActive),this.comboResetTimer>0&&(this.comboResetTimer-=e,this.comboResetTimer<=0&&(this.comboMultiplier=1)),!this.playerCar.isCrashed&&this.playerCar.speedKmh>50&&(this.score+=Math.floor(this.playerCar.speedKmh/36*e*10*this.comboMultiplier)),this.renderer.render(this.scene,this.cameraManager.camera),this.onHUDUpdate&&this.onHUDUpdate({speedKmh:Math.floor(this.playerCar.speedKmh),gear:this.playerCar.currentGear,rpm:Math.floor(this.playerCar.currentRPM),nitroPercent:Math.floor(this.playerCar.nitroReserve),score:this.score,distanceMeters:Math.floor(this.distanceMeters),combo:this.comboMultiplier,comboTimerProgress:Math.max(0,this.comboResetTimer/3.8),pursuitActive:this.policeChase.state==="PURSUIT",pursuitAlertIntensity:this.policeChase.redBlueFlashIntensity,policeDistance:Math.floor(this.policeChase.distanceToClosest),steerAxis:this.playerCar.steeringInertia,tiltAngle:Math.round(cn.calibratedAngle),tiltActive:cn.enabled,weather:this.weatherManager.currentWeather,isLightningFlashing:this.isLightningFlashing})};setupCyberpunkEnvironment(){if(typeof document>"u")return;const e=document.createElement("canvas");e.width=512,e.height=256;const n=e.getContext("2d");if(!n)return;const i=n.createLinearGradient(0,0,0,256);i.addColorStop(0,"#02050c"),i.addColorStop(.35,"#071022"),i.addColorStop(.48,"#0a2345"),i.addColorStop(.5,"#00f3ff"),i.addColorStop(.53,"#ff007f"),i.addColorStop(.65,"#0d1322"),i.addColorStop(1,"#03060d"),n.fillStyle=i,n.fillRect(0,0,512,256);for(let o=0;o<32;o++){const l=o/32*512+Math.sin(o*4)*6,c=10+o%4*6,h=20+o*11%45,d=128-h;n.fillStyle="#060b17",n.fillRect(l,d,c,h),n.fillStyle=o%2===0?"#00f3ff":o%3===0?"#ff007f":"#ffaa00",n.fillRect(l+2,d+4,c-4,3),n.fillRect(l+2,d+12,c-4,2),n.fillRect(l+2,d+20,c-4,2),n.fillStyle=o%2===0?"#ff3366":"#00f3ff",n.fillRect(l+c/2-1,d-5,2,5)}const r=new il(e);r.mapping=bl;const s=new dh(this.renderer);s.compileEquirectangularShader();const a=s.fromEquirectangular(r).texture;this.scene.environment=a,s.dispose(),r.dispose()}destroy(){this.stop(),window.removeEventListener("resize",this.onResize),this.weatherManager.dispose(),this.particleSystem.dispose(),this.renderer.dispose()}}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),tt=(t,e)=>{const n=ve.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},h)=>ve.createElement("svg",{ref:h,...kT,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${zT(t)}`,o].join(" "),...c},[...e.map(([d,f])=>ve.createElement(d,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=tt("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=tt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=tt("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=tt("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=tt("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=tt("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=tt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=tt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=tt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=tt("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=tt("HandMetal",[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"7eki13"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2",key:"94qvcw"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9",key:"m1ah89"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",key:"t1skq1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=tt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=tt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=tt("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=tt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=tt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=tt("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=tt("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=tt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=tt("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=tt("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=tt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=tt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=tt("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=tt("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=tt("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=tt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=tt("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),QT=({hud:t,nearMissAlert:e,evadedBonus:n})=>{const[i,r]=ve.useState(!1);ve.useEffect(()=>{if(e){r(!0);const o=setTimeout(()=>r(!1),800);return()=>clearTimeout(o)}},[e]);const s=Math.min(1,t.speedKmh/300),a=Math.min(1,Math.max(0,(t.rpm-800)/7700));return _.jsxs("div",{className:"mobile-hud-root",children:[t.pursuitActive&&_.jsx("div",{className:"police-strobe-vignette",style:{boxShadow:t.pursuitAlertIntensity>.5?"inset 0 0 80px 20px rgba(255, 0, 40, 0.75)":"inset 0 0 80px 20px rgba(0, 100, 255, 0.75)"},children:_.jsxs("div",{className:"pursuit-banner",children:[_.jsx(Wa,{size:16,className:"strobe-icon"}),_.jsx("span",{children:"POLICE PURSUIT — WEAVE TRAFFIC TO EVADE!"}),_.jsx(Wa,{size:16,className:"strobe-icon"})]})}),n!==null&&_.jsx("div",{className:"evaded-popup",children:_.jsxs("div",{className:"evaded-badge",children:[_.jsx(BT,{size:26,className:"gold-icon"}),_.jsxs("div",{className:"evaded-text",children:[_.jsx("h3",{children:"POLICE EVADED!"}),_.jsxs("p",{children:["+",n," REWARD BONUS"]})]})]})}),e&&i&&_.jsx("div",{className:"near-miss-alert",children:_.jsxs("div",{className:"near-miss-pill",children:[_.jsx(Ed,{size:18,className:"flame-icon"}),_.jsx("span",{className:"text",children:e.text}),e.combo>1&&_.jsxs("span",{className:"combo-tag",children:["x",e.combo]})]})}),_.jsxs("div",{className:"top-hud-left",children:[_.jsxs("div",{className:"stat-card distance-card",children:[_.jsx("span",{className:"stat-label",children:"DISTANCE"}),_.jsxs("span",{className:"stat-value",children:[t.distanceMeters.toLocaleString()," ",_.jsx("small",{children:"M"})]})]}),t.combo>1&&_.jsxs("div",{className:"combo-meter-card",children:[_.jsxs("div",{className:"combo-val",children:["x",t.combo]}),_.jsx("div",{className:"combo-bar-wrapper",children:_.jsx("div",{className:"combo-bar-fill",style:{width:`${t.comboTimerProgress*100}%`}})}),_.jsx("span",{className:"combo-sub",children:"COMBO"})]})]}),_.jsxs("div",{className:"top-hud-right",children:[_.jsxs("div",{className:"stat-card score-card",children:[_.jsx("span",{className:"stat-label",children:"SCORE"}),_.jsx("span",{className:"stat-value",children:t.score.toLocaleString()})]}),_.jsxs("div",{className:`stat-card weather-hud-chip ${t.weather==="RAIN"?"rain-active":""}`,children:[t.weather==="RAIN"?_.jsx(gh,{size:13,className:"weather-hud-icon rain"}):_.jsx(vh,{size:13,className:"weather-hud-icon moon"}),_.jsx("span",{className:"weather-hud-text",children:t.weather})]})]}),_.jsx("div",{className:"hud-bottom-left",children:_.jsxs("div",{className:"speedometer-widget",children:[_.jsxs("div",{className:"radial-speed-track",children:[_.jsxs("svg",{viewBox:"0 0 100 100",className:"radial-svg",children:[_.jsx("circle",{cx:"50",cy:"50",r:"42",fill:"none",stroke:"#131b2a",strokeWidth:"7",strokeDasharray:"198",strokeDashoffset:"33",strokeLinecap:"round"}),_.jsx("circle",{cx:"50",cy:"50",r:"42",fill:"none",stroke:"url(#speedGrad)",strokeWidth:"7",strokeDasharray:"198",strokeDashoffset:198-s*165,strokeLinecap:"round",className:"speed-needle-circle"}),_.jsx("defs",{children:_.jsxs("linearGradient",{id:"speedGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[_.jsx("stop",{offset:"0%",stopColor:"#00f3ff"}),_.jsx("stop",{offset:"65%",stopColor:"#ffaa00"}),_.jsx("stop",{offset:"100%",stopColor:"#ff0055"})]})})]}),_.jsxs("div",{className:"speed-center-readout",children:[_.jsx("span",{className:"digital-speed",children:t.speedKmh}),_.jsx("span",{className:"unit-label",children:"KM/H"})]})]}),_.jsxs("div",{className:"gear-rpm-bar",children:[_.jsxs("div",{className:"gear-badge",children:[_.jsx("span",{className:"gear-sub",children:"GEAR"}),_.jsx("span",{className:"gear-num",children:t.gear})]}),_.jsx("div",{className:"rpm-linear-track",children:_.jsx("div",{className:`rpm-fill ${a>.85?"redline":""}`,style:{width:`${a*100}%`}})})]}),t.tiltActive&&_.jsxs("div",{className:"hud-gyro-chip",children:[_.jsx(ks,{size:10,className:"hud-gyro-icon"}),_.jsxs("span",{children:["TILT ",t.tiltAngle>0?`+${t.tiltAngle}°`:`${t.tiltAngle}°`]})]})]})}),_.jsx("div",{className:"hud-bottom-right",children:_.jsxs("div",{className:"nos-widget",children:[_.jsxs("div",{className:"nos-header",children:[_.jsx(wd,{size:13,className:"nos-icon"}),_.jsx("span",{children:"NITROUS"}),_.jsxs("span",{className:"nos-val",children:[t.nitroPercent,"%"]})]}),_.jsx("div",{className:"nos-tube-wrapper",children:_.jsx("div",{className:`nos-tube-fill ${t.nitroPercent<15?"low":""}`,style:{width:`${t.nitroPercent}%`}})})]})})]})},JT=({onControlsChange:t,nitroPercent:e,isNitroActive:n,tiltSteeringEnabled:i=!1,tiltAngle:r=0,steerAxis:s=0,onCalibrateTilt:a,onToggleTiltMode:o})=>{const l=ve.useRef(null),c=ve.useCallback(g=>{l.current=g,ze.buttonTap(),t({steerLeft:g==="left",steerRight:g==="right"})},[t]),h=ve.useCallback(()=>{l.current=null,t({steerLeft:!1,steerRight:!1})},[t]),d=ve.useCallback(()=>{ze.buttonTap(),t({throttle:!0,brake:!1})},[t]),f=ve.useCallback(()=>{t({throttle:!1})},[t]),m=ve.useCallback(()=>{ze.buttonTap(),t({brake:!0,throttle:!1})},[t]),x=ve.useCallback(()=>{t({brake:!1})},[t]),y=ve.useCallback(()=>{e>5&&(ze.nitroPulse(),t({nitro:!0}))},[e,t]),p=ve.useCallback(()=>{t({nitro:!1})},[t]),u=ve.useCallback(g=>{g.preventDefault(),g.stopPropagation(),ze.buttonTap(),a&&a()},[a]);return _.jsxs("div",{className:`mobile-controls-container ${i?"tilt-mode":"touch-mode"}`,children:[_.jsx("div",{className:"touch-zone left-zone",children:i?_.jsx("div",{className:"tilt-steering-zone",children:_.jsxs("div",{className:"tilt-instrument-card",children:[_.jsxs("div",{className:"tilt-inst-header",children:[_.jsxs("div",{className:"tilt-mode-tag",children:[_.jsx(ks,{size:13,className:"tilt-icon-pulse"}),_.jsx("span",{children:"GYRO TILT"})]}),_.jsx("span",{className:"tilt-angle-deg",children:r>0?`+${r}°`:`${r}°`})]}),_.jsxs("div",{className:"tilt-horizon-track",children:[_.jsx("div",{className:"tilt-zone-deadzone"}),_.jsx("div",{className:"tilt-center-tick"}),_.jsxs("div",{className:"tilt-horizon-reticle",style:{transform:`translateX(${s*40}px)`},children:[_.jsx("div",{className:"reticle-core"}),_.jsx("div",{className:"reticle-wings"})]})]}),_.jsxs("div",{className:"tilt-actions-row",children:[_.jsxs("button",{type:"button",className:"tilt-btn tilt-recenter-btn",onPointerDown:u,title:"Calibrate Center Angle",children:[_.jsx(xv,{size:13}),_.jsx("span",{children:"CENTER"})]}),o&&_.jsxs("button",{type:"button",className:"tilt-btn tilt-switch-btn",onPointerDown:g=>{g.preventDefault(),g.stopPropagation(),ze.buttonTap(),o()},title:"Switch to Touch Buttons",children:[_.jsx(jT,{size:13}),_.jsx("span",{children:"PADS"})]})]})]})}):_.jsxs("div",{className:"steer-buttons-group",children:[_.jsxs("button",{className:"touch-btn steer-btn left-steer",onPointerDown:g=>{g.preventDefault(),c("left")},onPointerUp:g=>{g.preventDefault(),h()},onPointerCancel:g=>{g.preventDefault(),h()},onPointerLeave:g=>{g.preventDefault(),h()},children:[_.jsx("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:_.jsx("path",{d:"m15 18-6-6 6-6"})}),_.jsx("span",{className:"btn-label",children:"LEFT"})]}),_.jsxs("button",{className:"touch-btn steer-btn right-steer",onPointerDown:g=>{g.preventDefault(),c("right")},onPointerUp:g=>{g.preventDefault(),h()},onPointerCancel:g=>{g.preventDefault(),h()},onPointerLeave:g=>{g.preventDefault(),h()},children:[_.jsx("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:_.jsx("path",{d:"m9 18 6-6-6-6"})}),_.jsx("span",{className:"btn-label",children:"RIGHT"})]})]})}),_.jsxs("div",{className:"touch-zone right-zone",children:[_.jsxs("button",{className:`touch-btn nos-btn ${n?"nos-active":""} ${e<5?"nos-depleted":""}`,onPointerDown:g=>{g.preventDefault(),y()},onPointerUp:g=>{g.preventDefault(),p()},onPointerCancel:g=>{g.preventDefault(),p()},onPointerLeave:g=>{g.preventDefault(),p()},children:[_.jsx(wd,{className:"nos-icon",size:26}),_.jsx("span",{className:"nos-label",children:"NOS"}),_.jsx("div",{className:"nos-ring",style:{opacity:e/100}})]}),_.jsx("button",{className:"touch-btn pedal-btn brake-pedal",onPointerDown:g=>{g.preventDefault(),m()},onPointerUp:g=>{g.preventDefault(),x()},onPointerCancel:g=>{g.preventDefault(),x()},onPointerLeave:g=>{g.preventDefault(),x()},children:_.jsx("span",{className:"pedal-label",children:"BRAKE"})}),_.jsx("button",{className:"touch-btn pedal-btn gas-pedal",onPointerDown:g=>{g.preventDefault(),d()},onPointerUp:g=>{g.preventDefault(),f()},onPointerCancel:g=>{g.preventDefault(),f()},onPointerLeave:g=>{g.preventDefault(),f()},children:_.jsx("span",{className:"pedal-label",children:"GAS"})})]})]})},e2=({pursuitActive:t,policeDistance:e,alertIntensity:n})=>_.jsx("div",{className:`rearview-mirror-container ${t?"mirror-pursuit":""}`,children:_.jsx("div",{className:"mirror-frame",children:_.jsxs("div",{className:"mirror-glass",children:[_.jsx("div",{className:"mirror-road"}),t&&_.jsx("div",{className:"mirror-cruiser-wrapper",style:{transform:`scale(${Math.min(1.8,Math.max(.4,(80-e)/40))})`,opacity:Math.max(.3,Math.min(1,(100-e)/60))},children:_.jsxs("div",{className:"mirror-cruiser",children:[_.jsxs("div",{className:"cruiser-roof-lightbar",children:[_.jsx("span",{className:`strobe-dot red-strobe ${n>.5?"lit":""}`}),_.jsx("span",{className:`strobe-dot blue-strobe ${n<=.5?"lit":""}`})]}),_.jsx("div",{className:"cruiser-grille"}),_.jsxs("div",{className:"cruiser-headlights",children:[_.jsx("span",{className:"beam"}),_.jsx("span",{className:"beam"})]})]})}),t&&_.jsxs("div",{className:"mirror-distance-badge",children:[_.jsx(Wa,{size:12,className:"shield-icon"}),_.jsxs("span",{children:[e,"m"]})]})]})})}),t2=[{name:"Cyber Cyan",hex:"#00f3ff"},{name:"Midnight Obsidian",hex:"#11141a"},{name:"Crimson Flare",hex:"#ff0044"},{name:"Liquid Gold",hex:"#e6c300"},{name:"Toxic Lime",hex:"#22ff44"},{name:"Ultraviolet",hex:"#a822ff"}],n2=[{name:"Ice Blue",hex:"#00f3ff"},{name:"Neon Pink",hex:"#ff0088"},{name:"Emerald",hex:"#00ff66"},{name:"Solar Amber",hex:"#ff9900"},{name:"Ghost Purple",hex:"#9933ff"}],i2=({cars:t,selectedCarId:e,coins:n,onSelectCar:i,onClose:r,onUpdateCars:s,onUpdateCoins:a})=>{const[o,l]=ve.useState(()=>{const y=t.findIndex(p=>p.id===e);return y>=0?y:0}),c=t[o],h=y=>{ze.buttonTap(),l(y)},d=y=>{ze.buttonTap(),St.updateCarCustomization(c.id,y,c.underglowColor);const p=St.getCars();s(p),c.id===e&&i(p[o])},f=y=>{ze.buttonTap(),St.updateCarCustomization(c.id,c.color,y);const p=St.getCars();s(p),c.id===e&&i(p[o])},m=()=>{if(n>=c.price&&(ze.buttonTap(),Ct.playCoinPickup(),St.unlockCar(c.id))){const y=St.getCars(),p=St.getStats();s(y),a(p.coins),i(y[o])}},x=()=>{ze.buttonTap(),St.saveStats({selectedCarId:c.id}),i(c),r()};return _.jsx("div",{className:"garage-modal-overlay",children:_.jsxs("div",{className:"garage-modal-card",children:[_.jsxs("div",{className:"garage-header",children:[_.jsxs("div",{className:"garage-title-wrap",children:[_.jsx("h2",{className:"garage-title",children:"CYBER GARAGE"}),_.jsx("span",{className:"garage-sub",children:"SELECT & CUSTOMIZE VEHICLE"})]}),_.jsxs("div",{className:"coins-badge",children:[_.jsx(Sd,{size:18,className:"coin-icon"}),_.jsx("span",{children:n.toLocaleString()})]}),_.jsx("button",{className:"close-btn",onClick:()=>{ze.buttonTap(),r()},children:_.jsx(ja,{size:22})})]}),_.jsx("div",{className:"car-tabs",children:t.map((y,p)=>_.jsxs("button",{className:`car-tab-btn ${p===o?"active":""}`,onClick:()=>h(p),children:[_.jsx("span",{className:"car-tab-name",children:y.name}),!y.unlocked&&_.jsx(Mm,{size:12,className:"lock-icon"})]},y.id))}),_.jsxs("div",{className:"car-detail-container",children:[_.jsxs("div",{className:"car-stats-panel",children:[_.jsxs("div",{className:"spec-row",children:[_.jsxs("div",{className:"spec-label",children:[_.jsx(WT,{size:16}),_.jsx("span",{children:"TOP SPEED"})]}),_.jsxs("span",{className:"spec-value",children:[c.topSpeedKmh," KM/H"]})]}),_.jsxs("div",{className:"spec-row",children:[_.jsxs("div",{className:"spec-label",children:[_.jsx(wd,{size:16}),_.jsx("span",{children:"ACCELERATION"})]}),_.jsx("div",{className:"spec-bar-track",children:_.jsx("div",{className:"spec-bar-fill",style:{width:`${c.acceleration/10*100}%`}})})]}),_.jsxs("div",{className:"spec-row",children:[_.jsxs("div",{className:"spec-label",children:[_.jsx(HT,{size:16}),_.jsx("span",{children:"HANDLING"})]}),_.jsx("div",{className:"spec-bar-track",children:_.jsx("div",{className:"spec-bar-fill",style:{width:`${c.handling/10*100}%`}})})]}),_.jsxs("div",{className:"spec-row",children:[_.jsxs("div",{className:"spec-label",children:[_.jsx(YT,{size:16}),_.jsx("span",{children:"ARMOR (VS POLICE)"})]}),_.jsx("div",{className:"spec-bar-track",children:_.jsx("div",{className:"spec-bar-fill armor",style:{width:`${c.armor/10*100}%`}})})]})]}),_.jsxs("div",{className:"customizer-panel",children:[_.jsxs("div",{className:"palette-section",children:[_.jsx("span",{className:"palette-label",children:"METALLIC CLEARCOAT PAINT"}),_.jsx("div",{className:"swatches-row",children:t2.map(y=>_.jsx("button",{className:`color-swatch ${c.color.toLowerCase()===y.hex.toLowerCase()?"selected":""}`,style:{backgroundColor:y.hex},onClick:()=>d(y.hex),children:c.color.toLowerCase()===y.hex.toLowerCase()&&_.jsx(Fl,{size:14,color:"#fff"})},y.hex))})]}),_.jsxs("div",{className:"palette-section",children:[_.jsx("span",{className:"palette-label",children:"NEON RGB UNDERGLOW"}),_.jsx("div",{className:"swatches-row",children:n2.map(y=>_.jsx("button",{className:`color-swatch underglow-swatch ${c.underglowColor.toLowerCase()===y.hex.toLowerCase()?"selected":""}`,style:{backgroundColor:y.hex,boxShadow:`0 0 10px ${y.hex}`},onClick:()=>f(y.hex),children:c.underglowColor.toLowerCase()===y.hex.toLowerCase()&&_.jsx(Fl,{size:14,color:"#000"})},y.hex))})]})]})]}),_.jsx("div",{className:"garage-footer",children:c.unlocked?_.jsx("button",{className:`primary-action-btn ${c.id===e?"selected-btn":""}`,onClick:x,children:c.id===e?"EQUIPPED & READY":"SELECT CAR"}):_.jsxs("button",{className:`primary-action-btn unlock-btn ${n<c.price?"disabled":""}`,disabled:n<c.price,onClick:m,children:[_.jsx(Mm,{size:16}),_.jsxs("span",{children:["UNLOCK FOR ",c.price.toLocaleString()," COINS"]})]})})]})})},r2=({summary:t,onRestart:e,onOpenGarage:n,onOpenLeaderboard:i})=>_.jsx("div",{className:"game-over-overlay",children:_.jsxs("div",{className:"game-over-card",children:[_.jsx("div",{className:`result-badge ${t.isBusted?"badge-busted":"badge-crashed"}`,children:t.isBusted?_.jsxs(_.Fragment,{children:[_.jsx(Wa,{size:28}),_.jsx("span",{children:"BUSTED BY POLICE"})]}):_.jsxs(_.Fragment,{children:[_.jsx(Ed,{size:28}),_.jsx("span",{children:"VEHICLE CRASHED"})]})}),t.isHighScore&&_.jsxs("div",{className:"high-score-banner",children:[_.jsx(ws,{size:16}),_.jsx("span",{children:"NEW ALL-TIME RECORD!"})]}),_.jsxs("div",{className:"summary-metrics",children:[_.jsxs("div",{className:"summary-item main-score",children:[_.jsx("span",{className:"label",children:"FINAL SCORE"}),_.jsx("span",{className:"value",children:t.score.toLocaleString()})]}),_.jsxs("div",{className:"summary-grid",children:[_.jsxs("div",{className:"summary-item",children:[_.jsx("span",{className:"label",children:"DISTANCE"}),_.jsxs("span",{className:"value",children:[t.distanceMeters.toLocaleString()," m"]})]}),_.jsxs("div",{className:"summary-item",children:[_.jsx("span",{className:"label",children:"NEAR-MISSES"}),_.jsx("span",{className:"value",children:t.nearMisses})]}),_.jsxs("div",{className:"summary-item",children:[_.jsx("span",{className:"label",children:"POLICE EVADED"}),_.jsx("span",{className:"value",children:t.policeEvaded})]}),_.jsxs("div",{className:"summary-item coin-reward",children:[_.jsx("span",{className:"label",children:"REWARD"}),_.jsxs("span",{className:"value",children:[_.jsx(Sd,{size:15,className:"coin-icon"}),"+",t.coinsEarned]})]})]})]}),_.jsxs("div",{className:"game-over-actions",children:[_.jsxs("button",{className:"action-btn garage-btn",onClick:()=>{ze.buttonTap(),n()},children:[_.jsx(Mv,{size:18}),_.jsx("span",{children:"GARAGE"})]}),i&&_.jsxs("button",{className:"action-btn leaderboard-action-btn",onClick:()=>{ze.buttonTap(),i()},children:[_.jsx(ws,{size:18}),_.jsx("span",{children:"RECORDS"})]}),_.jsxs("button",{className:"action-btn restart-btn",onClick:()=>{ze.buttonTap(),e()},children:[_.jsx(xv,{size:18}),_.jsx("span",{children:"RACE AGAIN"})]})]})]})}),Sv=()=>{typeof window<"u"&&window.dispatchEvent(new CustomEvent("velocity-x-install-requested"))},s2=()=>{const[t,e]=ve.useState(null),[n,i]=ve.useState(!1),[r,s]=ve.useState(!0),[a,o]=ve.useState(!1),[l,c]=ve.useState(!1);ve.useEffect(()=>{(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)&&i(!0);const m=y=>{y.preventDefault(),e(y),s(!0)},x=()=>{h()};return window.addEventListener("beforeinstallprompt",m),window.addEventListener("velocity-x-install-requested",x),()=>{window.removeEventListener("beforeinstallprompt",m),window.removeEventListener("velocity-x-install-requested",x)}},[]);const h=ve.useCallback(async()=>{if(ze.buttonTap(),t)try{await t.prompt(),(await t.userChoice).outcome==="accepted"?(i(!0),s(!1)):o(!0),e(null)}catch(m){console.warn("Install prompt error:",m),o(!0)}else o(!0)},[t]),d=typeof window<"u"?window.location.href:"https://indrajitkumar23541-a11y.github.io/VELOCITY-X/",f=()=>{ze.buttonTap(),navigator.clipboard.writeText(d),c(!0),setTimeout(()=>c(!1),2e3)};return n?null:_.jsxs(_.Fragment,{children:[_.jsxs("button",{type:"button",className:"install-pwa-btn",onClick:h,title:"Install VELOCITY X for 100% Offline 120 FPS Play",children:[_.jsx(Sa,{size:14,className:"install-icon"}),_.jsx("span",{children:"INSTALL APP"})]}),r&&_.jsxs("div",{className:"install-floating-banner",children:[_.jsxs("div",{className:"banner-left",children:[_.jsx("div",{className:"banner-icon-glow",children:_.jsx(yv,{size:18,className:"banner-sparkle"})}),_.jsxs("div",{className:"banner-text",children:[_.jsx("div",{className:"banner-title",children:"INSTALL VELOCITY X"}),_.jsx("div",{className:"banner-desc",children:"Play offline in Flight Mode • 120 FPS • Temple Run Style"})]})]}),_.jsxs("div",{className:"banner-actions",children:[_.jsxs("button",{type:"button",className:"banner-install-btn",onClick:h,children:[_.jsx(Sa,{size:15}),_.jsx("span",{children:"INSTALL NOW"})]}),_.jsx("button",{type:"button",className:"banner-dismiss-btn",onClick:()=>{ze.buttonTap(),s(!1)},title:"Dismiss for now",children:_.jsx(ja,{size:16})})]})]}),a&&_.jsx("div",{className:"install-modal-backdrop",onClick:()=>o(!1),children:_.jsxs("div",{className:"install-modal-card",onClick:m=>m.stopPropagation(),children:[_.jsxs("div",{className:"install-modal-header",children:[_.jsxs("div",{className:"modal-title-group",children:[_.jsx(ks,{size:20,className:"modal-header-icon"}),_.jsx("h3",{children:"INSTALL ON YOUR PHONE"})]}),_.jsx("button",{type:"button",className:"modal-close-btn",onClick:()=>{ze.buttonTap(),o(!1)},children:_.jsx(ja,{size:18})})]}),_.jsx("p",{className:"install-modal-sub",children:"VELOCITY X ko proper game app ki tarah open karein — bina browser URL bar ke, aur 100% offline Flight Mode me khele!"}),_.jsxs("div",{className:"install-steps-list",children:[_.jsxs("div",{className:"install-step-item highlight-step",children:[_.jsx("div",{className:"step-badge",children:"1"}),_.jsxs("div",{className:"step-content",children:[_.jsx("h4",{children:"Android Phone (Chrome)"}),_.jsxs("p",{children:["Chrome me upar right side me ",_.jsx("strong",{children:"3 dots (⋮)"})," dabayein, fir ",_.jsx("strong",{children:'"Install app"'})," ya ",_.jsx("strong",{children:'"Add to Home screen"'})," par tap karein."]})]})]}),_.jsxs("div",{className:"install-step-item",children:[_.jsx("div",{className:"step-badge",children:"2"}),_.jsxs("div",{className:"step-content",children:[_.jsx("h4",{children:"iPhone / iPad (Safari)"}),_.jsxs("p",{children:["Safari ke bottom me ",_.jsx("strong",{children:"Share button (📤)"})," dabayein, fir scroll karke ",_.jsx("strong",{children:'"Add to Home Screen"'})," chunein."]})]})]}),_.jsxs("div",{className:"install-step-item",children:[_.jsx("div",{className:"step-badge",children:"APK"}),_.jsxs("div",{className:"step-content",children:[_.jsx("h4",{children:"Direct Android .APK File"}),_.jsx("p",{children:"Agar aap direct file download karna chahte hain:"}),_.jsxs("a",{href:"https://github.com/indrajitkumar23541-a11y/VELOCITY-X/releases",target:"_blank",rel:"noopener noreferrer",className:"apk-download-link-btn",children:[_.jsx(Sa,{size:14}),_.jsx("span",{children:"Download VELOCITY-X.apk"}),_.jsx(VT,{size:12})]})]})]}),_.jsxs("div",{className:"install-step-item",children:[_.jsx("div",{className:"step-badge",children:"🔗"}),_.jsxs("div",{className:"step-content",children:[_.jsx("h4",{children:"Phone Link Share"}),_.jsxs("div",{className:"copy-url-row",children:[_.jsx("code",{children:d}),_.jsxs("button",{type:"button",className:"copy-btn",onClick:f,children:[l?_.jsx(Fl,{size:14,color:"#00f3ff"}):_.jsx(GT,{size:14}),_.jsx("span",{children:l?"COPIED!":"COPY"})]})]})]})]})]}),_.jsx("button",{type:"button",className:"install-modal-done-btn",onClick:()=>{ze.buttonTap(),o(!1)},children:"GOT IT, LET'S RACE!"})]})})]})},a2=()=>{const[t,e]=ve.useState(!1),[n,i]=ve.useState(!1);ve.useEffect(()=>{const s=()=>{const o=window.innerWidth<window.innerHeight;e(o),!o&&document.body.classList.contains("force-virtual-landscape")&&(document.body.classList.remove("force-virtual-landscape"),i(!1))};return s(),window.addEventListener("resize",s),window.addEventListener("orientationchange",s),(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)&&screen.orientation&&"lock"in screen.orientation&&screen.orientation.lock("landscape").catch(()=>{}),()=>{window.removeEventListener("resize",s),window.removeEventListener("orientationchange",s),document.body.classList.remove("force-virtual-landscape")}},[]);const r=async()=>{try{if(document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen(),screen.orientation&&"lock"in screen.orientation){await screen.orientation.lock("landscape");return}}catch{}document.body.classList.add("force-virtual-landscape"),i(!0),e(!1),window.dispatchEvent(new Event("resize"))};return!t||n?null:_.jsx("div",{className:"rotate-prompt-overlay",children:_.jsxs("div",{className:"rotate-card",children:[_.jsxs("div",{className:"phone-rotate-anim",children:[_.jsx(ks,{size:54,className:"phone-icon"}),_.jsx(qT,{size:26,className:"rotate-spinner-icon"})]}),_.jsx("h2",{className:"rotate-title",children:"ROTATE YOUR PHONE"}),_.jsx("p",{className:"rotate-desc",children:"VELOCITY X is engineered for 4K widescreen landscape hypercar racing."}),_.jsxs("div",{className:"rotate-actions-group",children:[_.jsxs("button",{type:"button",className:"auto-landscape-btn",onClick:r,children:[_.jsx(_v,{size:18,fill:"currentColor"}),_.jsx("span",{children:"FORCE AUTO-LANDSCAPE"})]}),_.jsxs("button",{type:"button",className:"portrait-install-action-btn",onClick:()=>Sv(),children:[_.jsx(Sa,{size:16}),_.jsx("span",{children:"INSTALL APP (PERMANENT LANDSCAPE)"})]})]}),_.jsx("div",{className:"rotate-pill",children:"OR TURN PHONE HORIZONTALLY"})]})})},o2=({onClose:t})=>{const[e]=ve.useState(()=>St.getLeaderboard()),[n,i]=ve.useState(()=>St.getStats()),[r,s]=ve.useState(n.playerCallsign),[a,o]=ve.useState(!1),l=c=>{c.preventDefault(),ze.buttonTap();const h=r.trim().toUpperCase().slice(0,14)||"VIPER_01";St.saveStats({playerCallsign:h}),i(d=>({...d,playerCallsign:h})),o(!1)};return _.jsx("div",{className:"leaderboard-backdrop",onClick:t,children:_.jsxs("div",{className:"leaderboard-card",onClick:c=>c.stopPropagation(),children:[_.jsxs("div",{className:"leaderboard-header",children:[_.jsxs("div",{className:"leaderboard-title-group",children:[_.jsx(ws,{size:26,className:"trophy-gold"}),_.jsxs("div",{children:[_.jsx("h2",{children:"GLOBAL HALL OF FAME"}),_.jsx("p",{className:"subtitle",children:"HIGHWAY PURSUIT WORLD RECORDS"})]})]}),_.jsx("button",{type:"button",className:"modal-close-btn",onClick:()=>{ze.buttonTap(),t()},children:_.jsx(ja,{size:20})})]}),_.jsxs("div",{className:"player-callsign-bar",children:[_.jsxs("div",{className:"callsign-left",children:[_.jsx($T,{size:16,className:"callsign-icon"}),_.jsx("span",{className:"callsign-label",children:"DRIVER CALLSIGN:"}),a?_.jsxs("form",{onSubmit:l,className:"callsign-form",children:[_.jsx("input",{type:"text",value:r,onChange:c=>s(c.target.value.toUpperCase()),maxLength:14,autoFocus:!0,className:"callsign-input"}),_.jsx("button",{type:"submit",className:"save-callsign-btn",children:_.jsx(Fl,{size:14})})]}):_.jsxs("span",{className:"player-name-badge",onClick:()=>o(!0),children:[n.playerCallsign,_.jsx("small",{className:"edit-hint",children:"(EDIT)"})]})]}),_.jsxs("div",{className:"callsign-right",children:[_.jsx("span",{className:"personal-best-label",children:"YOUR TOP:"}),_.jsxs("span",{className:"personal-best-val",children:[n.highScore.toLocaleString()," PTS"]})]})]}),_.jsx("div",{className:"leaderboard-table-wrapper",children:_.jsxs("table",{className:"leaderboard-table",children:[_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx("th",{children:"RANK"}),_.jsx("th",{children:"DRIVER"}),_.jsx("th",{children:"VEHICLE"}),_.jsx("th",{children:"DISTANCE"}),_.jsx("th",{children:"EVADED"}),_.jsx("th",{className:"score-th",children:"SCORE"})]})}),_.jsx("tbody",{children:e.map((c,h)=>{const d=h+1,f=d<=3;return _.jsxs("tr",{className:`leaderboard-row ${c.isPlayer?"player-row":""} ${f?"top3-row":""}`,children:[_.jsxs("td",{className:"rank-td",children:[d===1&&_.jsx("span",{className:"rank-badge gold",children:"#1"}),d===2&&_.jsx("span",{className:"rank-badge silver",children:"#2"}),d===3&&_.jsx("span",{className:"rank-badge bronze",children:"#3"}),d>3&&_.jsxs("span",{className:"rank-num",children:["#",d]})]}),_.jsxs("td",{className:"driver-td",children:[_.jsx("span",{className:"driver-name",children:c.callsign}),c.isPlayer&&_.jsx("span",{className:"you-pill",children:"YOU"})]}),_.jsx("td",{className:"vehicle-td",children:c.carName}),_.jsxs("td",{className:"distance-td",children:[c.distanceMeters.toLocaleString(),"m"]}),_.jsx("td",{className:"evaded-td",children:c.policeEvaded>0?_.jsxs("span",{className:"evaded-count",children:[_.jsx(Wa,{size:12}),c.policeEvaded]}):_.jsx("span",{className:"zero-evaded",children:"-"})}),_.jsx("td",{className:"score-td",children:_.jsx("span",{className:"score-digits",children:c.score.toLocaleString()})})]},c.id||h)})})]})}),_.jsxs("div",{className:"leaderboard-footer",children:[_.jsxs("div",{className:"footer-tip",children:[_.jsx(Ed,{size:14,className:"flame-tip-icon"}),_.jsx("span",{children:"EARN NEAR-MISS COMBOS & EVADE POLICE TO CLIMB THE RANKS"})]}),_.jsx("button",{type:"button",className:"leaderboard-race-btn",onClick:()=>{ze.buttonTap(),t()},children:"LET'S RACE"})]})]})})},l2=({isRaining:t,isLightningFlashing:e})=>!t&&!e?null:_.jsxs("div",{className:"rain-screen-container",children:[e&&_.jsx("div",{className:"lightning-flash-overlay"}),t&&_.jsx("div",{className:"water-droplets-layer",children:_.jsxs("svg",{className:"droplets-svg",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[_.jsxs("defs",{children:[_.jsxs("radialGradient",{id:"dropGrad",cx:"35%",cy:"35%",r:"65%",children:[_.jsx("stop",{offset:"0%",stopColor:"#ffffff",stopOpacity:"0.8"}),_.jsx("stop",{offset:"45%",stopColor:"#88ccff",stopOpacity:"0.4"}),_.jsx("stop",{offset:"100%",stopColor:"#08101a",stopOpacity:"0.7"})]}),_.jsx("filter",{id:"dropBlur",children:_.jsx("feGaussianBlur",{stdDeviation:"0.2"})})]}),_.jsx("circle",{cx:"8",cy:"14",r:"1.2",fill:"url(#dropGrad)"}),_.jsx("circle",{cx:"12",cy:"18",r:"0.8",fill:"url(#dropGrad)"}),_.jsx("circle",{cx:"22",cy:"8",r:"1.5",fill:"url(#dropGrad)",className:"sliding-drop-1"}),_.jsx("circle",{cx:"34",cy:"24",r:"1.0",fill:"url(#dropGrad)"}),_.jsx("circle",{cx:"48",cy:"12",r:"1.8",fill:"url(#dropGrad)",className:"sliding-drop-2"}),_.jsx("circle",{cx:"62",cy:"16",r:"0.9",fill:"url(#dropGrad)"}),_.jsx("circle",{cx:"75",cy:"9",r:"1.4",fill:"url(#dropGrad)",className:"sliding-drop-3"}),_.jsx("circle",{cx:"88",cy:"20",r:"1.1",fill:"url(#dropGrad)"}),_.jsx("circle",{cx:"94",cy:"35",r:"1.6",fill:"url(#dropGrad)",className:"sliding-drop-1"}),_.jsx("circle",{cx:"6",cy:"65",r:"1.4",fill:"url(#dropGrad)"}),_.jsx("circle",{cx:"15",cy:"82",r:"1.9",fill:"url(#dropGrad)",className:"sliding-drop-2"}),_.jsx("circle",{cx:"28",cy:"74",r:"1.0",fill:"url(#dropGrad)"}),_.jsx("circle",{cx:"82",cy:"78",r:"1.7",fill:"url(#dropGrad)",className:"sliding-drop-3"}),_.jsx("circle",{cx:"91",cy:"62",r:"1.2",fill:"url(#dropGrad)"})]})})]});class c2{registration=null;updateAvailable=!1;callbacks=new Set;constructor(){typeof window<"u"&&"serviceWorker"in navigator&&this.init()}async init(){try{const e="./sw.js";this.registration=await navigator.serviceWorker.register(e,{updateViaCache:"none"}),console.log("[UpdateManager] ServiceWorker registered with scope:",this.registration.scope),this.registration.waiting&&this.notifyUpdateReady(),this.registration.addEventListener("updatefound",()=>{const i=this.registration?.installing;i&&i.addEventListener("statechange",()=>{i.state==="installed"&&navigator.serviceWorker.controller&&this.notifyUpdateReady()})});let n=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{n||(n=!0,window.location.reload())}),window.addEventListener("online",()=>{console.log("[UpdateManager] Device came ONLINE - checking for cloud updates..."),this.checkForUpdate()}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&this.checkForUpdate()}),window.setInterval(()=>{navigator.onLine&&this.checkForUpdate()},6e4),setTimeout(()=>this.checkForUpdate(),3e3)}catch(e){console.warn("[UpdateManager] Registration error:",e)}}async checkForUpdate(){if(!(!this.registration||!navigator.onLine))try{await this.registration.update(),console.log("[UpdateManager] Checked GitHub cloud for updates")}catch(e){console.warn("[UpdateManager] Check update error:",e)}}onUpdate(e){return this.callbacks.add(e),this.updateAvailable&&e(),()=>this.callbacks.delete(e)}notifyUpdateReady(){console.log("[UpdateManager] ⚡ New game version downloaded and ready to apply!"),this.updateAvailable=!0,this.callbacks.forEach(e=>e())}applyUpdate(){this.registration?.waiting?this.registration.waiting.postMessage({type:"SKIP_WAITING"}):window.location.reload()}isUpdateReady(){return this.updateAvailable}}const du=new c2,u2=({gameState:t})=>{const[e,n]=ve.useState(!1),[i,r]=ve.useState(4),[s,a]=ve.useState(!1);return ve.useEffect(()=>du.onUpdate(()=>{n(!0),ze.buttonTap()}),[]),ve.useEffect(()=>{if(!e||s||t!=="MENU")return;const o=setInterval(()=>{r(l=>l<=1?(clearInterval(o),du.applyUpdate(),0):l-1)},1e3);return()=>clearInterval(o)},[e,s,t]),!e||s?null:_.jsx("div",{className:"update-toast-overlay",children:_.jsxs("div",{className:"update-toast-card",children:[_.jsx("div",{className:"update-icon-wrap",children:_.jsx(yv,{size:20,className:"update-sparkle-icon"})}),_.jsxs("div",{className:"update-info",children:[_.jsxs("div",{className:"update-title-row",children:[_.jsx("h4",{children:"⚡ GAME UPDATE READY"}),_.jsx("span",{className:"update-version-tag",children:"NEW"})]}),_.jsxs("p",{className:"update-desc",children:["New features & fixes downloaded from GitHub! ",t==="MENU"?`Restarting in ${i}s...`:"Will update after current run."]})]}),_.jsxs("div",{className:"update-actions",children:[_.jsxs("button",{type:"button",className:"update-reload-btn",onClick:()=>{ze.buttonTap(),du.applyUpdate()},children:[_.jsx(XT,{size:14,className:"spin-slow"}),_.jsx("span",{children:"RESTART"})]}),_.jsx("button",{type:"button",className:"update-dismiss-btn",onClick:()=>{ze.buttonTap(),a(!0)},title:"Update on next open",children:_.jsx(ja,{size:15})})]})]})})},h2=()=>{const t=ve.useRef(null),e=ve.useRef(null),[n,i]=ve.useState(()=>St.getStats()),[r,s]=ve.useState(()=>St.getCars()),[a,o]=ve.useState(()=>{const I=St.getCars(),F=St.getStats();return I.find(X=>X.id===F.selectedCarId)||I[0]}),[l,c]=ve.useState("MENU"),[h,d]=ve.useState(!1),[f,m]=ve.useState(!1),[x,y]=ve.useState("CLEAR"),[p,u]=ve.useState(()=>St.getStats().tiltSteeringEnabled??!1),[g,v]=ve.useState({speedKmh:0,gear:1,rpm:800,nitroPercent:100,score:0,distanceMeters:0,combo:1,comboTimerProgress:0,pursuitActive:!1,pursuitAlertIntensity:0,policeDistance:999,steerAxis:0,tiltAngle:0,tiltActive:!1,weather:"CLEAR",isLightningFlashing:!1}),[M,b]=ve.useState(null),[A,C]=ve.useState(null),[U,E]=ve.useState(null);ve.useEffect(()=>{if(!t.current)return;const I=new FT(t.current,a);return e.current=I,I.onHUDUpdate=F=>{v(F)},I.onNearMissAlert=(F,X)=>{b({text:F,combo:X,id:Date.now()})},I.onPursuitEvadedAlert=F=>{C(F),setTimeout(()=>C(null),3e3)},I.onGameOver=F=>{cn.stop(),E(F),c("GAME_OVER"),i(St.getStats())},()=>{cn.stop(),I.destroy()}},[]),ve.useEffect(()=>{e.current&&e.current.setCarConfig(a)},[a]),ve.useEffect(()=>{const I=X=>{if(l!=="RACING"||!e.current)return;const D=e.current.controls;(X.key==="ArrowLeft"||X.key.toLowerCase()==="a")&&(D.steerLeft=!0),(X.key==="ArrowRight"||X.key.toLowerCase()==="d")&&(D.steerRight=!0),(X.key==="ArrowUp"||X.key.toLowerCase()==="w")&&(D.throttle=!0,D.brake=!1),(X.key==="ArrowDown"||X.key.toLowerCase()==="s"||X.key===" ")&&(D.brake=!0,D.throttle=!1),X.shiftKey&&(D.nitro=!0)},F=X=>{if(!e.current)return;const D=e.current.controls;(X.key==="ArrowLeft"||X.key.toLowerCase()==="a")&&(D.steerLeft=!1),(X.key==="ArrowRight"||X.key.toLowerCase()==="d")&&(D.steerRight=!1),(X.key==="ArrowUp"||X.key.toLowerCase()==="w")&&(D.throttle=!1),(X.key==="ArrowDown"||X.key.toLowerCase()==="s"||X.key===" ")&&(D.brake=!1),X.shiftKey||(D.nitro=!1)};return window.addEventListener("keydown",I),window.addEventListener("keyup",F),()=>{window.removeEventListener("keydown",I),window.removeEventListener("keyup",F)}},[l]);const w=ve.useCallback(()=>{ze.buttonTap(),Ct.unlock(),c("RACING"),p?(cn.start(),cn.calibrate()):cn.stop(),e.current&&e.current.start()},[p]),k=ve.useCallback(()=>{ze.buttonTap(),Ct.unlock();const I=Ct.toggleMute();d(I)},[]),W=ve.useCallback(()=>{if(ze.buttonTap(),e.current){const I=e.current.weatherManager.toggleWeather();y(I)}},[]),K=ve.useCallback(async()=>{ze.buttonTap(),!p?await cn.requestPermission()?(l==="RACING"&&(cn.start(),cn.calibrate()),u(!0),i(St.saveStats({tiltSteeringEnabled:!0}))):alert("Device orientation sensors could not be accessed. Keeping touch buttons."):(cn.stop(),e.current&&(e.current.controls.steerAxis=0),u(!1),i(St.saveStats({tiltSteeringEnabled:!1})))},[p,l]),P=ve.useCallback(I=>{e.current&&Object.assign(e.current.controls,I)},[]);return _.jsxs("div",{className:"game-app-root",children:[_.jsx("canvas",{ref:t,className:"webgl-canvas"}),_.jsx(l2,{isRaining:g.weather==="RAIN",isLightningFlashing:g.isLightningFlashing}),_.jsx(u2,{gameState:l}),_.jsx(a2,{}),_.jsxs("header",{className:"mobile-app-header",children:[_.jsxs("div",{className:"header-left",children:[_.jsx("button",{className:"icon-btn",onClick:k,title:"Toggle Audio",children:h?_.jsx(ZT,{size:18}):_.jsx(KT,{size:18})}),_.jsx("button",{className:`icon-btn weather-toggle-header ${x==="RAIN"?"rain-active":""}`,onClick:W,title:x==="RAIN"?"Cyber Rain Active (Tap for Clear Night)":"Clear Night Active (Tap for Cyber Rain)",children:x==="RAIN"?_.jsx(gh,{size:18,color:"#00f3ff"}):_.jsx(vh,{size:18})}),_.jsxs("button",{className:`icon-btn tilt-toggle-header ${p?"tilt-active":""}`,onClick:K,title:p?"Gyro Tilt Active (Tap to switch to Touch)":"Touch Buttons Active (Tap to switch to Gyro Tilt)",children:[_.jsx(ks,{size:17}),_.jsx("span",{className:"tilt-status-pill",children:p?"GYRO":"TOUCH"})]}),_.jsx("button",{className:"icon-btn leaderboard-header-btn",onClick:()=>{ze.buttonTap(),m(!0)},title:"Global Leaderboard & World Records",children:_.jsx(ws,{size:18})}),_.jsx(s2,{})]}),_.jsx("div",{className:"header-right",children:_.jsxs("div",{className:"coin-display",children:[_.jsx(Sd,{size:16,className:"coin-icon"}),_.jsx("span",{children:n.coins.toLocaleString()})]})})]}),l==="MENU"&&_.jsx("div",{className:"menu-screen-overlay",children:_.jsxs("div",{className:"menu-center-card",children:[_.jsxs("div",{className:"title-glow-wrap",children:[_.jsxs("h1",{className:"game-title",children:["VELOCITY ",_.jsx("span",{className:"highlight",children:"X"})]}),_.jsx("p",{className:"game-subtitle",children:"CYBER HIGHWAY POLICE PURSUIT"})]}),_.jsxs("div",{className:"menu-car-pill",children:[_.jsxs("div",{className:"car-pill-left",children:[_.jsx("span",{className:"pill-sub",children:"SELECTED VEHICLE"}),_.jsx("span",{className:"pill-name",children:a.name})]}),_.jsxs("div",{className:"car-pill-right",children:[_.jsx("span",{className:"pill-sub",children:"TOP RECORD"}),_.jsxs("span",{className:"pill-val",children:[_.jsx(ws,{size:14,className:"trophy-icon"}),n.highScore.toLocaleString()]})]})]}),_.jsxs("div",{className:"menu-selectors-row",children:[_.jsxs("div",{className:"control-mode-selector",children:[_.jsx("span",{className:"selector-label",children:"STEERING SYSTEM"}),_.jsxs("div",{className:"mode-toggle-pill",children:[_.jsx("button",{type:"button",className:`mode-pill-btn ${p?"":"selected"}`,onClick:()=>{p&&K()},children:_.jsx("span",{children:"TOUCH PADS"})}),_.jsxs("button",{type:"button",className:`mode-pill-btn ${p?"selected":""}`,onClick:()=>{p||K()},children:[_.jsx(ks,{size:13}),_.jsx("span",{children:"GYRO TILT"})]})]})]}),_.jsxs("div",{className:"control-mode-selector weather-selector",children:[_.jsx("span",{className:"selector-label",children:"ATMOSPHERE"}),_.jsxs("div",{className:"mode-toggle-pill",children:[_.jsxs("button",{type:"button",className:`mode-pill-btn ${x==="CLEAR"?"selected":""}`,onClick:()=>{x!=="CLEAR"&&W()},children:[_.jsx(vh,{size:13}),_.jsx("span",{children:"CLEAR"})]}),_.jsxs("button",{type:"button",className:`mode-pill-btn ${x==="RAIN"?"selected":""}`,onClick:()=>{x!=="RAIN"&&W()},children:[_.jsx(gh,{size:13}),_.jsx("span",{children:"RAIN"})]})]})]})]}),_.jsxs("div",{className:"menu-actions-stack",children:[_.jsxs("button",{className:"menu-btn play-btn-hero",onClick:w,children:[_.jsx(_v,{size:24,fill:"currentColor"}),_.jsx("span",{children:"START RACE"})]}),_.jsxs("div",{className:"menu-sub-actions-row",children:[_.jsxs("button",{className:"menu-btn-sub garage-btn",onClick:()=>{ze.buttonTap(),c("GARAGE")},children:[_.jsx(Mv,{size:16}),_.jsx("span",{children:"GARAGE"})]}),_.jsxs("button",{className:"menu-btn-sub leaderboard-btn",onClick:()=>{ze.buttonTap(),m(!0)},children:[_.jsx(ws,{size:16}),_.jsx("span",{children:"RECORDS"})]}),_.jsxs("button",{className:"menu-btn-sub install-menu-btn",onClick:()=>{ze.buttonTap(),Sv()},title:"Install VELOCITY X on Phone (Offline / Standalone)",children:[_.jsx(Sa,{size:16}),_.jsx("span",{children:"INSTALL"})]})]})]}),_.jsx("div",{className:"menu-tips",children:_.jsx("span",{children:p?"PHYSICALLY TILT PHONE TO CARVE THROUGH HIGHWAY LANES":"TAP & HOLD LEFT / RIGHT TO WEAVE THROUGH TRAFFIC"})})]})}),l==="RACING"&&_.jsxs(_.Fragment,{children:[_.jsx(e2,{pursuitActive:g.pursuitActive,policeDistance:g.policeDistance,alertIntensity:g.pursuitAlertIntensity}),_.jsx(QT,{hud:g,nearMissAlert:M,evadedBonus:A}),_.jsx(JT,{onControlsChange:P,nitroPercent:g.nitroPercent,isNitroActive:e.current?.playerCar.isNitroActive||!1,tiltSteeringEnabled:p,tiltAngle:g.tiltAngle,steerAxis:g.steerAxis,onCalibrateTilt:()=>cn.calibrate(),onToggleTiltMode:K})]}),l==="GARAGE"&&_.jsx(i2,{cars:r,selectedCarId:a.id,coins:n.coins,onSelectCar:I=>o(I),onClose:()=>c("MENU"),onUpdateCars:I=>s(I),onUpdateCoins:I=>i(F=>({...F,coins:I}))}),l==="GAME_OVER"&&U&&_.jsx(r2,{summary:U,onRestart:w,onOpenGarage:()=>c("GARAGE"),onOpenLeaderboard:()=>m(!0)}),f&&_.jsx(o2,{onClose:()=>m(!1)})]})};fu.createRoot(document.getElementById("root")).render(_.jsx(Wv.StrictMode,{children:_.jsx(h2,{})}));
