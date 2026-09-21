(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Tv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _m={exports:{}},Ol={},xm={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=Symbol.for("react.element"),Av=Symbol.for("react.portal"),Cv=Symbol.for("react.fragment"),Rv=Symbol.for("react.strict_mode"),bv=Symbol.for("react.profiler"),Lv=Symbol.for("react.provider"),Pv=Symbol.for("react.context"),Nv=Symbol.for("react.forward_ref"),Dv=Symbol.for("react.suspense"),Iv=Symbol.for("react.memo"),Uv=Symbol.for("react.lazy"),Rd=Symbol.iterator;function Fv(t){return t===null||typeof t!="object"?null:(t=Rd&&t[Rd]||t["@@iterator"],typeof t=="function"?t:null)}var ym={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mm=Object.assign,Sm={};function Os(t,e,n){this.props=t,this.context=e,this.refs=Sm,this.updater=n||ym}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Em(){}Em.prototype=Os.prototype;function _h(t,e,n){this.props=t,this.context=e,this.refs=Sm,this.updater=n||ym}var xh=_h.prototype=new Em;xh.constructor=_h;Mm(xh,Os.prototype);xh.isPureReactComponent=!0;var bd=Array.isArray,wm=Object.prototype.hasOwnProperty,yh={current:null},Tm={key:!0,ref:!0,__self:!0,__source:!0};function Am(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)wm.call(e,i)&&!Tm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ha,type:t,key:s,ref:a,props:r,_owner:yh.current}}function Ov(t,e){return{$$typeof:Ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ha}function kv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ld=/\/+/g;function lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?kv(""+t.key):e.toString(36)}function Bo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ha:case Av:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+lc(a,0):i,bd(r)?(n="",t!=null&&(n=t.replace(Ld,"$&/")+"/"),Bo(r,e,n,"",function(c){return c})):r!=null&&(Mh(r)&&(r=Ov(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ld,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",bd(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+lc(s,o);a+=Bo(s,e,n,l,r)}else if(l=Fv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+lc(s,o++),a+=Bo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Za(t,e,n){if(t==null)return t;var i=[],r=0;return Bo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function zv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var on={current:null},Go={transition:null},Bv={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:Go,ReactCurrentOwner:yh};function Cm(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Za,forEach:function(t,e,n){Za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Za(t,function(){e++}),e},toArray:function(t){return Za(t,function(e){return e})||[]},only:function(t){if(!Mh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=Os;qe.Fragment=Cv;qe.Profiler=bv;qe.PureComponent=_h;qe.StrictMode=Rv;qe.Suspense=Dv;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bv;qe.act=Cm;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Mm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=yh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)wm.call(e,l)&&!Tm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ha,type:t.type,key:r,ref:s,props:i,_owner:a}};qe.createContext=function(t){return t={$$typeof:Pv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Lv,_context:t},t.Consumer=t};qe.createElement=Am;qe.createFactory=function(t){var e=Am.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:Nv,render:t}};qe.isValidElement=Mh;qe.lazy=function(t){return{$$typeof:Uv,_payload:{_status:-1,_result:t},_init:zv}};qe.memo=function(t,e){return{$$typeof:Iv,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Go.transition;Go.transition={};try{t()}finally{Go.transition=e}};qe.unstable_act=Cm;qe.useCallback=function(t,e){return on.current.useCallback(t,e)};qe.useContext=function(t){return on.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return on.current.useDeferredValue(t)};qe.useEffect=function(t,e){return on.current.useEffect(t,e)};qe.useId=function(){return on.current.useId()};qe.useImperativeHandle=function(t,e,n){return on.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return on.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return on.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return on.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return on.current.useReducer(t,e,n)};qe.useRef=function(t){return on.current.useRef(t)};qe.useState=function(t){return on.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return on.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return on.current.useTransition()};qe.version="18.3.1";xm.exports=qe;var Me=xm.exports;const Gv=Tv(Me);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv=Me,Vv=Symbol.for("react.element"),Wv=Symbol.for("react.fragment"),jv=Object.prototype.hasOwnProperty,Xv=Hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qv={key:!0,ref:!0,__self:!0,__source:!0};function Rm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)jv.call(e,i)&&!qv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Vv,type:t,key:s,ref:a,props:r,_owner:Xv.current}}Ol.Fragment=Wv;Ol.jsx=Rm;Ol.jsxs=Rm;_m.exports=Ol;var y=_m.exports,pu={},bm={exports:{}},bn={},Lm={exports:{}},Pm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,k){var B=I.length;I.push(k);e:for(;0<B;){var $=B-1>>>1,J=I[$];if(0<r(J,k))I[$]=k,I[B]=J,B=$;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var k=I[0],B=I.pop();if(B!==k){I[0]=B;e:for(var $=0,J=I.length,q=J>>>1;$<q;){var Z=2*($+1)-1,oe=I[Z],ge=Z+1,_e=I[ge];if(0>r(oe,B))ge<J&&0>r(_e,oe)?(I[$]=_e,I[ge]=B,$=ge):(I[$]=oe,I[Z]=B,$=Z);else if(ge<J&&0>r(_e,B))I[$]=_e,I[ge]=B,$=ge;else break e}}return k}function r(I,k){var B=I.sortIndex-k.sortIndex;return B!==0?B:I.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,d=null,f=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=I)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function M(I){if(x=!1,g(I),!v)if(n(l)!==null)v=!0,j(b);else{var k=n(c);k!==null&&K(M,k.startTime-I)}}function b(I,k){v=!1,x&&(x=!1,u(D),D=-1),p=!0;var B=f;try{for(g(k),d=n(l);d!==null&&(!(d.expirationTime>k)||I&&!z());){var $=d.callback;if(typeof $=="function"){d.callback=null,f=d.priorityLevel;var J=$(d.expirationTime<=k);k=t.unstable_now(),typeof J=="function"?d.callback=J:d===n(l)&&i(l),g(k)}else i(l);d=n(l)}if(d!==null)var q=!0;else{var Z=n(c);Z!==null&&K(M,Z.startTime-k),q=!1}return q}finally{d=null,f=B,p=!1}}var A=!1,C=null,D=-1,E=5,w=-1;function z(){return!(t.unstable_now()-w<E)}function W(){if(C!==null){var I=t.unstable_now();w=I;var k=!0;try{k=C(!0,I)}finally{k?Q():(A=!1,C=null)}}else A=!1}var Q;if(typeof _=="function")Q=function(){_(W)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,O=P.port2;P.port1.onmessage=W,Q=function(){O.postMessage(null)}}else Q=function(){m(W,0)};function j(I){C=I,A||(A=!0,Q())}function K(I,k){D=m(function(){I(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,j(b))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var k=3;break;default:k=f}var B=f;f=k;try{return I()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,k){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var B=f;f=I;try{return k()}finally{f=B}},t.unstable_scheduleCallback=function(I,k,B){var $=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?$+B:$):B=$,I){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=B+J,I={id:h++,callback:k,priorityLevel:I,startTime:B,expirationTime:J,sortIndex:-1},B>$?(I.sortIndex=B,e(c,I),n(l)===null&&I===n(c)&&(x?(u(D),D=-1):x=!0,K(M,B-$))):(I.sortIndex=J,e(l,I),v||p||(v=!0,j(b))),I},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(I){var k=f;return function(){var B=f;f=k;try{return I.apply(this,arguments)}finally{f=B}}}})(Pm);Lm.exports=Pm;var Yv=Lm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv=Me,Rn=Yv;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nm=new Set,Ma={};function Ir(t,e){ws(t,e),ws(t+"Capture",e)}function ws(t,e){for(Ma[t]=e,t=0;t<e.length;t++)Nm.add(e[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=Object.prototype.hasOwnProperty,$v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pd={},Nd={};function Zv(t){return mu.call(Nd,t)?!0:mu.call(Pd,t)?!1:$v.test(t)?Nd[t]=!0:(Pd[t]=!0,!1)}function Qv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Jv(t,e,n,i){if(e===null||typeof e>"u"||Qv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sh=/[\-:]([a-z])/g;function Eh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sh,Eh);Wt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sh,Eh);Wt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sh,Eh);Wt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function wh(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jv(e,n,r,i)&&(n=null),i||r===null?Zv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ai=Kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),Th=Symbol.for("react.strict_mode"),gu=Symbol.for("react.profiler"),Dm=Symbol.for("react.provider"),Im=Symbol.for("react.context"),Ah=Symbol.for("react.forward_ref"),vu=Symbol.for("react.suspense"),_u=Symbol.for("react.suspense_list"),Ch=Symbol.for("react.memo"),Di=Symbol.for("react.lazy"),Um=Symbol.for("react.offscreen"),Dd=Symbol.iterator;function Ws(t){return t===null||typeof t!="object"?null:(t=Dd&&t[Dd]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,cc;function ia(t){if(cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cc=e&&e[1]||""}return`
`+cc+t}var uc=!1;function hc(t,e){if(!t||uc)return"";uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function e_(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function xu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ns:return"Fragment";case ts:return"Portal";case gu:return"Profiler";case Th:return"StrictMode";case vu:return"Suspense";case _u:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Im:return(t.displayName||"Context")+".Consumer";case Dm:return(t._context.displayName||"Context")+".Provider";case Ah:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ch:return e=t.displayName||null,e!==null?e:xu(t.type)||"Memo";case Di:e=t._payload,t=t._init;try{return xu(t(e))}catch{}}return null}function t_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xu(e);case 8:return e===Th?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function n_(t){var e=Fm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=n_(t))}function Om(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Fm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Jo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yu(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Id(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function km(t,e){e=e.checked,e!=null&&wh(t,"checked",e,!1)}function Mu(t,e){km(t,e);var n=Ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Su(t,e.type,n):e.hasOwnProperty("defaultValue")&&Su(t,e.type,Ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ud(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Su(t,e,n){(e!=="number"||Jo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function gs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Eu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(ra(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ji(n)}}function zm(t,e){var n=Ji(e.value),i=Ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Od(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Bm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Bm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var eo,Gm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=eo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i_=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(t){i_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),la[e]=la[t]})});function Hm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||la.hasOwnProperty(t)&&la[t]?(""+e).trim():e+"px"}function Vm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Hm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var r_=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tu(t,e){if(e){if(r_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Au(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cu=null;function Rh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ru=null,vs=null,_s=null;function kd(t){if(t=ja(t)){if(typeof Ru!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Hl(e),Ru(t.stateNode,t.type,e))}}function Wm(t){vs?_s?_s.push(t):_s=[t]:vs=t}function jm(){if(vs){var t=vs,e=_s;if(_s=vs=null,kd(t),e)for(t=0;t<e.length;t++)kd(e[t])}}function Xm(t,e){return t(e)}function qm(){}var dc=!1;function Ym(t,e,n){if(dc)return t(e,n);dc=!0;try{return Xm(t,e,n)}finally{dc=!1,(vs!==null||_s!==null)&&(qm(),jm())}}function Ea(t,e){var n=t.stateNode;if(n===null)return null;var i=Hl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var bu=!1;if(Mi)try{var js={};Object.defineProperty(js,"passive",{get:function(){bu=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{bu=!1}function s_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ca=!1,el=null,tl=!1,Lu=null,a_={onError:function(t){ca=!0,el=t}};function o_(t,e,n,i,r,s,a,o,l){ca=!1,el=null,s_.apply(a_,arguments)}function l_(t,e,n,i,r,s,a,o,l){if(o_.apply(this,arguments),ca){if(ca){var c=el;ca=!1,el=null}else throw Error(ne(198));tl||(tl=!0,Lu=c)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Km(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zd(t){if(Ur(t)!==t)throw Error(ne(188))}function c_(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return zd(r),t;if(s===i)return zd(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function $m(t){return t=c_(t),t!==null?Zm(t):null}function Zm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Zm(t);if(e!==null)return e;t=t.sibling}return null}var Qm=Rn.unstable_scheduleCallback,Bd=Rn.unstable_cancelCallback,u_=Rn.unstable_shouldYield,h_=Rn.unstable_requestPaint,At=Rn.unstable_now,d_=Rn.unstable_getCurrentPriorityLevel,bh=Rn.unstable_ImmediatePriority,Jm=Rn.unstable_UserBlockingPriority,nl=Rn.unstable_NormalPriority,f_=Rn.unstable_LowPriority,eg=Rn.unstable_IdlePriority,kl=null,ai=null;function p_(t){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:v_,m_=Math.log,g_=Math.LN2;function v_(t){return t>>>=0,t===0?32:31-(m_(t)/g_|0)|0}var to=64,no=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function il(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=sa(o):(s&=a,s!==0&&(i=sa(s)))}else a=n&~r,a!==0?i=sa(a):s!==0&&(i=sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function __(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Zn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=__(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Pu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tg(){var t=to;return to<<=1,!(to&4194240)&&(to=64),t}function fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function y_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Lh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function ng(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ig,Ph,rg,sg,ag,Nu=!1,io=[],Hi=null,Vi=null,Wi=null,wa=new Map,Ta=new Map,Ui=[],M_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gd(t,e){switch(t){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(e.pointerId)}}function Xs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ja(e),e!==null&&Ph(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function S_(t,e,n,i,r){switch(e){case"focusin":return Hi=Xs(Hi,t,e,n,i,r),!0;case"dragenter":return Vi=Xs(Vi,t,e,n,i,r),!0;case"mouseover":return Wi=Xs(Wi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return wa.set(s,Xs(wa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ta.set(s,Xs(Ta.get(s)||null,t,e,n,i,r)),!0}return!1}function og(t){var e=_r(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=Km(n),e!==null){t.blockedOn=e,ag(t.priority,function(){rg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ho(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Du(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Cu=i,n.target.dispatchEvent(i),Cu=null}else return e=ja(n),e!==null&&Ph(e),t.blockedOn=n,!1;e.shift()}return!0}function Hd(t,e,n){Ho(t)&&n.delete(e)}function E_(){Nu=!1,Hi!==null&&Ho(Hi)&&(Hi=null),Vi!==null&&Ho(Vi)&&(Vi=null),Wi!==null&&Ho(Wi)&&(Wi=null),wa.forEach(Hd),Ta.forEach(Hd)}function qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Nu||(Nu=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,E_)))}function Aa(t){function e(r){return qs(r,t)}if(0<io.length){qs(io[0],t);for(var n=1;n<io.length;n++){var i=io[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Hi!==null&&qs(Hi,t),Vi!==null&&qs(Vi,t),Wi!==null&&qs(Wi,t),wa.forEach(e),Ta.forEach(e),n=0;n<Ui.length;n++)i=Ui[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ui.length&&(n=Ui[0],n.blockedOn===null);)og(n),n.blockedOn===null&&Ui.shift()}var xs=Ai.ReactCurrentBatchConfig,rl=!0;function w_(t,e,n,i){var r=Je,s=xs.transition;xs.transition=null;try{Je=1,Nh(t,e,n,i)}finally{Je=r,xs.transition=s}}function T_(t,e,n,i){var r=Je,s=xs.transition;xs.transition=null;try{Je=4,Nh(t,e,n,i)}finally{Je=r,xs.transition=s}}function Nh(t,e,n,i){if(rl){var r=Du(t,e,n,i);if(r===null)Ec(t,e,i,sl,n),Gd(t,i);else if(S_(r,t,e,n,i))i.stopPropagation();else if(Gd(t,i),e&4&&-1<M_.indexOf(t)){for(;r!==null;){var s=ja(r);if(s!==null&&ig(s),s=Du(t,e,n,i),s===null&&Ec(t,e,i,sl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ec(t,e,i,null,n)}}var sl=null;function Du(t,e,n,i){if(sl=null,t=Rh(i),t=_r(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Km(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sl=t,null}function lg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(d_()){case bh:return 1;case Jm:return 4;case nl:case f_:return 16;case eg:return 536870912;default:return 16}default:return 16}}var Oi=null,Dh=null,Vo=null;function cg(){if(Vo)return Vo;var t,e=Dh,n=e.length,i,r="value"in Oi?Oi.value:Oi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Vo=r.slice(t,1<i?1-i:void 0)}function Wo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function Vd(){return!1}function Ln(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ro:Vd,this.isPropagationStopped=Vd,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),e}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ih=Ln(ks),Wa=yt({},ks,{view:0,detail:0}),A_=Ln(Wa),pc,mc,Ys,zl=yt({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ys&&(Ys&&t.type==="mousemove"?(pc=t.screenX-Ys.screenX,mc=t.screenY-Ys.screenY):mc=pc=0,Ys=t),pc)},movementY:function(t){return"movementY"in t?t.movementY:mc}}),Wd=Ln(zl),C_=yt({},zl,{dataTransfer:0}),R_=Ln(C_),b_=yt({},Wa,{relatedTarget:0}),gc=Ln(b_),L_=yt({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),P_=Ln(L_),N_=yt({},ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),D_=Ln(N_),I_=yt({},ks,{data:0}),jd=Ln(I_),U_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=O_[t])?!!e[t]:!1}function Uh(){return k_}var z_=yt({},Wa,{key:function(t){if(t.key){var e=U_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?F_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uh,charCode:function(t){return t.type==="keypress"?Wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),B_=Ln(z_),G_=yt({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xd=Ln(G_),H_=yt({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uh}),V_=Ln(H_),W_=yt({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),j_=Ln(W_),X_=yt({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),q_=Ln(X_),Y_=[9,13,27,32],Fh=Mi&&"CompositionEvent"in window,ua=null;Mi&&"documentMode"in document&&(ua=document.documentMode);var K_=Mi&&"TextEvent"in window&&!ua,ug=Mi&&(!Fh||ua&&8<ua&&11>=ua),qd=" ",Yd=!1;function hg(t,e){switch(t){case"keyup":return Y_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function $_(t,e){switch(t){case"compositionend":return dg(e);case"keypress":return e.which!==32?null:(Yd=!0,qd);case"textInput":return t=e.data,t===qd&&Yd?null:t;default:return null}}function Z_(t,e){if(is)return t==="compositionend"||!Fh&&hg(t,e)?(t=cg(),Vo=Dh=Oi=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ug&&e.locale!=="ko"?null:e.data;default:return null}}var Q_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Q_[t.type]:e==="textarea"}function fg(t,e,n,i){Wm(i),e=al(e,"onChange"),0<e.length&&(n=new Ih("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ha=null,Ca=null;function J_(t){wg(t,0)}function Bl(t){var e=as(t);if(Om(e))return t}function ex(t,e){if(t==="change")return e}var pg=!1;if(Mi){var vc;if(Mi){var _c="oninput"in document;if(!_c){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),_c=typeof $d.oninput=="function"}vc=_c}else vc=!1;pg=vc&&(!document.documentMode||9<document.documentMode)}function Zd(){ha&&(ha.detachEvent("onpropertychange",mg),Ca=ha=null)}function mg(t){if(t.propertyName==="value"&&Bl(Ca)){var e=[];fg(e,Ca,t,Rh(t)),Ym(J_,e)}}function tx(t,e,n){t==="focusin"?(Zd(),ha=e,Ca=n,ha.attachEvent("onpropertychange",mg)):t==="focusout"&&Zd()}function nx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bl(Ca)}function ix(t,e){if(t==="click")return Bl(e)}function rx(t,e){if(t==="input"||t==="change")return Bl(e)}function sx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:sx;function Ra(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!mu.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function Qd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jd(t,e){var n=Qd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qd(n)}}function gg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vg(){for(var t=window,e=Jo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jo(t.document)}return e}function Oh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ax(t){var e=vg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gg(n.ownerDocument.documentElement,n)){if(i!==null&&Oh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Jd(n,s);var a=Jd(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ox=Mi&&"documentMode"in document&&11>=document.documentMode,rs=null,Iu=null,da=null,Uu=!1;function ef(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uu||rs==null||rs!==Jo(i)||(i=rs,"selectionStart"in i&&Oh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),da&&Ra(da,i)||(da=i,i=al(Iu,"onSelect"),0<i.length&&(e=new Ih("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=rs)))}function so(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},xc={},_g={};Mi&&(_g=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function Gl(t){if(xc[t])return xc[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _g)return xc[t]=e[n];return t}var xg=Gl("animationend"),yg=Gl("animationiteration"),Mg=Gl("animationstart"),Sg=Gl("transitionend"),Eg=new Map,tf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(t,e){Eg.set(t,e),Ir(e,[t])}for(var yc=0;yc<tf.length;yc++){var Mc=tf[yc],lx=Mc.toLowerCase(),cx=Mc[0].toUpperCase()+Mc.slice(1);nr(lx,"on"+cx)}nr(xg,"onAnimationEnd");nr(yg,"onAnimationIteration");nr(Mg,"onAnimationStart");nr("dblclick","onDoubleClick");nr("focusin","onFocus");nr("focusout","onBlur");nr(Sg,"onTransitionEnd");ws("onMouseEnter",["mouseout","mouseover"]);ws("onMouseLeave",["mouseout","mouseover"]);ws("onPointerEnter",["pointerout","pointerover"]);ws("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ux=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function nf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,l_(i,e,void 0,t),t.currentTarget=null}function wg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;nf(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;nf(r,o,c),s=l}}}if(tl)throw t=Lu,tl=!1,Lu=null,t}function ht(t,e){var n=e[Bu];n===void 0&&(n=e[Bu]=new Set);var i=t+"__bubble";n.has(i)||(Tg(e,t,2,!1),n.add(i))}function Sc(t,e,n){var i=0;e&&(i|=4),Tg(n,t,i,e)}var ao="_reactListening"+Math.random().toString(36).slice(2);function ba(t){if(!t[ao]){t[ao]=!0,Nm.forEach(function(n){n!=="selectionchange"&&(ux.has(n)||Sc(n,!1,t),Sc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ao]||(e[ao]=!0,Sc("selectionchange",!1,e))}}function Tg(t,e,n,i){switch(lg(e)){case 1:var r=w_;break;case 4:r=T_;break;default:r=Nh}n=r.bind(null,e,n,t),r=void 0,!bu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ec(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=_r(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Ym(function(){var c=s,h=Rh(n),d=[];e:{var f=Eg.get(t);if(f!==void 0){var p=Ih,v=t;switch(t){case"keypress":if(Wo(n)===0)break e;case"keydown":case"keyup":p=B_;break;case"focusin":v="focus",p=gc;break;case"focusout":v="blur",p=gc;break;case"beforeblur":case"afterblur":p=gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=R_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=V_;break;case xg:case yg:case Mg:p=P_;break;case Sg:p=j_;break;case"scroll":p=A_;break;case"wheel":p=q_;break;case"copy":case"cut":case"paste":p=D_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Xd}var x=(e&4)!==0,m=!x&&t==="scroll",u=x?f!==null?f+"Capture":null:f;x=[];for(var _=c,g;_!==null;){g=_;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,u!==null&&(M=Ea(_,u),M!=null&&x.push(La(_,M,g)))),m)break;_=_.return}0<x.length&&(f=new p(f,v,null,n,h),d.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Cu&&(v=n.relatedTarget||n.fromElement)&&(_r(v)||v[Si]))break e;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?_r(v):null,v!==null&&(m=Ur(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=Wd,M="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Xd,M="onPointerLeave",u="onPointerEnter",_="pointer"),m=p==null?f:as(p),g=v==null?f:as(v),f=new x(M,_+"leave",p,n,h),f.target=m,f.relatedTarget=g,M=null,_r(h)===c&&(x=new x(u,_+"enter",v,n,h),x.target=g,x.relatedTarget=m,M=x),m=M,p&&v)t:{for(x=p,u=v,_=0,g=x;g;g=Or(g))_++;for(g=0,M=u;M;M=Or(M))g++;for(;0<_-g;)x=Or(x),_--;for(;0<g-_;)u=Or(u),g--;for(;_--;){if(x===u||u!==null&&x===u.alternate)break t;x=Or(x),u=Or(u)}x=null}else x=null;p!==null&&rf(d,f,p,x,!1),v!==null&&m!==null&&rf(d,m,v,x,!0)}}e:{if(f=c?as(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var b=ex;else if(Kd(f))if(pg)b=rx;else{b=nx;var A=tx}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=ix);if(b&&(b=b(t,c))){fg(d,b,n,h);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Su(f,"number",f.value)}switch(A=c?as(c):window,t){case"focusin":(Kd(A)||A.contentEditable==="true")&&(rs=A,Iu=c,da=null);break;case"focusout":da=Iu=rs=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,ef(d,n,h);break;case"selectionchange":if(ox)break;case"keydown":case"keyup":ef(d,n,h)}var C;if(Fh)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else is?hg(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(ug&&n.locale!=="ko"&&(is||D!=="onCompositionStart"?D==="onCompositionEnd"&&is&&(C=cg()):(Oi=h,Dh="value"in Oi?Oi.value:Oi.textContent,is=!0)),A=al(c,D),0<A.length&&(D=new jd(D,t,null,n,h),d.push({event:D,listeners:A}),C?D.data=C:(C=dg(n),C!==null&&(D.data=C)))),(C=K_?$_(t,n):Z_(t,n))&&(c=al(c,"onBeforeInput"),0<c.length&&(h=new jd("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=C))}wg(d,e)})}function La(t,e,n){return{instance:t,listener:e,currentTarget:n}}function al(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ea(t,n),s!=null&&i.unshift(La(t,s,r)),s=Ea(t,e),s!=null&&i.push(La(t,s,r))),t=t.return}return i}function Or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ea(n,s),l!=null&&a.unshift(La(n,l,o))):r||(l=Ea(n,s),l!=null&&a.push(La(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var hx=/\r\n?/g,dx=/\u0000|\uFFFD/g;function sf(t){return(typeof t=="string"?t:""+t).replace(hx,`
`).replace(dx,"")}function oo(t,e,n){if(e=sf(e),sf(t)!==e&&n)throw Error(ne(425))}function ol(){}var Fu=null,Ou=null;function ku(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zu=typeof setTimeout=="function"?setTimeout:void 0,fx=typeof clearTimeout=="function"?clearTimeout:void 0,af=typeof Promise=="function"?Promise:void 0,px=typeof queueMicrotask=="function"?queueMicrotask:typeof af<"u"?function(t){return af.resolve(null).then(t).catch(mx)}:zu;function mx(t){setTimeout(function(){throw t})}function wc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Aa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Aa(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function of(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zs=Math.random().toString(36).slice(2),ri="__reactFiber$"+zs,Pa="__reactProps$"+zs,Si="__reactContainer$"+zs,Bu="__reactEvents$"+zs,gx="__reactListeners$"+zs,vx="__reactHandles$"+zs;function _r(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Si]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=of(t);t!==null;){if(n=t[ri])return n;t=of(t)}return e}t=n,n=t.parentNode}return null}function ja(t){return t=t[ri]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Hl(t){return t[Pa]||null}var Gu=[],os=-1;function ir(t){return{current:t}}function ft(t){0>os||(t.current=Gu[os],Gu[os]=null,os--)}function ut(t,e){os++,Gu[os]=t.current,t.current=e}var er={},Qt=ir(er),dn=ir(!1),Cr=er;function Ts(t,e){var n=t.type.contextTypes;if(!n)return er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function ll(){ft(dn),ft(Qt)}function lf(t,e,n){if(Qt.current!==er)throw Error(ne(168));ut(Qt,e),ut(dn,n)}function Ag(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,t_(t)||"Unknown",r));return yt({},n,i)}function cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Cr=Qt.current,ut(Qt,t),ut(dn,dn.current),!0}function cf(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Ag(t,e,Cr),i.__reactInternalMemoizedMergedChildContext=t,ft(dn),ft(Qt),ut(Qt,t)):ft(dn),ut(dn,n)}var gi=null,Vl=!1,Tc=!1;function Cg(t){gi===null?gi=[t]:gi.push(t)}function _x(t){Vl=!0,Cg(t)}function rr(){if(!Tc&&gi!==null){Tc=!0;var t=0,e=Je;try{var n=gi;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,Vl=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),Qm(bh,rr),r}finally{Je=e,Tc=!1}}return null}var ls=[],cs=0,ul=null,hl=0,Dn=[],In=0,Rr=null,vi=1,_i="";function dr(t,e){ls[cs++]=hl,ls[cs++]=ul,ul=t,hl=e}function Rg(t,e,n){Dn[In++]=vi,Dn[In++]=_i,Dn[In++]=Rr,Rr=t;var i=vi;t=_i;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var s=32-Zn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,vi=1<<32-Zn(e)+r|n<<r|i,_i=s+t}else vi=1<<s|n<<r|i,_i=t}function kh(t){t.return!==null&&(dr(t,1),Rg(t,1,0))}function zh(t){for(;t===ul;)ul=ls[--cs],ls[cs]=null,hl=ls[--cs],ls[cs]=null;for(;t===Rr;)Rr=Dn[--In],Dn[In]=null,_i=Dn[--In],Dn[In]=null,vi=Dn[--In],Dn[In]=null}var An=null,wn=null,pt=!1,qn=null;function bg(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function uf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,An=t,wn=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,An=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Rr!==null?{id:vi,overflow:_i}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,An=t,wn=null,!0):!1;default:return!1}}function Hu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vu(t){if(pt){var e=wn;if(e){var n=e;if(!uf(t,e)){if(Hu(t))throw Error(ne(418));e=ji(n.nextSibling);var i=An;e&&uf(t,e)?bg(i,n):(t.flags=t.flags&-4097|2,pt=!1,An=t)}}else{if(Hu(t))throw Error(ne(418));t.flags=t.flags&-4097|2,pt=!1,An=t}}}function hf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;An=t}function lo(t){if(t!==An)return!1;if(!pt)return hf(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ku(t.type,t.memoizedProps)),e&&(e=wn)){if(Hu(t))throw Lg(),Error(ne(418));for(;e;)bg(t,e),e=ji(e.nextSibling)}if(hf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=An?ji(t.stateNode.nextSibling):null;return!0}function Lg(){for(var t=wn;t;)t=ji(t.nextSibling)}function As(){wn=An=null,pt=!1}function Bh(t){qn===null?qn=[t]:qn.push(t)}var xx=Ai.ReactCurrentBatchConfig;function Ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function co(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function df(t){var e=t._init;return e(t._payload)}function Pg(t){function e(u,_){if(t){var g=u.deletions;g===null?(u.deletions=[_],u.flags|=16):g.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=Ki(u,_),u.index=0,u.sibling=null,u}function s(u,_,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<_?(u.flags|=2,_):g):(u.flags|=2,_)):(u.flags|=1048576,_)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,_,g,M){return _===null||_.tag!==6?(_=Nc(g,u.mode,M),_.return=u,_):(_=r(_,g),_.return=u,_)}function l(u,_,g,M){var b=g.type;return b===ns?h(u,_,g.props.children,M,g.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Di&&df(b)===_.type)?(M=r(_,g.props),M.ref=Ks(u,_,g),M.return=u,M):(M=Zo(g.type,g.key,g.props,null,u.mode,M),M.ref=Ks(u,_,g),M.return=u,M)}function c(u,_,g,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Dc(g,u.mode,M),_.return=u,_):(_=r(_,g.children||[]),_.return=u,_)}function h(u,_,g,M,b){return _===null||_.tag!==7?(_=Er(g,u.mode,M,b),_.return=u,_):(_=r(_,g),_.return=u,_)}function d(u,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Nc(""+_,u.mode,g),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Qa:return g=Zo(_.type,_.key,_.props,null,u.mode,g),g.ref=Ks(u,null,_),g.return=u,g;case ts:return _=Dc(_,u.mode,g),_.return=u,_;case Di:var M=_._init;return d(u,M(_._payload),g)}if(ra(_)||Ws(_))return _=Er(_,u.mode,g,null),_.return=u,_;co(u,_)}return null}function f(u,_,g,M){var b=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:o(u,_,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Qa:return g.key===b?l(u,_,g,M):null;case ts:return g.key===b?c(u,_,g,M):null;case Di:return b=g._init,f(u,_,b(g._payload),M)}if(ra(g)||Ws(g))return b!==null?null:h(u,_,g,M,null);co(u,g)}return null}function p(u,_,g,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(g)||null,o(_,u,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Qa:return u=u.get(M.key===null?g:M.key)||null,l(_,u,M,b);case ts:return u=u.get(M.key===null?g:M.key)||null,c(_,u,M,b);case Di:var A=M._init;return p(u,_,g,A(M._payload),b)}if(ra(M)||Ws(M))return u=u.get(g)||null,h(_,u,M,b,null);co(_,M)}return null}function v(u,_,g,M){for(var b=null,A=null,C=_,D=_=0,E=null;C!==null&&D<g.length;D++){C.index>D?(E=C,C=null):E=C.sibling;var w=f(u,C,g[D],M);if(w===null){C===null&&(C=E);break}t&&C&&w.alternate===null&&e(u,C),_=s(w,_,D),A===null?b=w:A.sibling=w,A=w,C=E}if(D===g.length)return n(u,C),pt&&dr(u,D),b;if(C===null){for(;D<g.length;D++)C=d(u,g[D],M),C!==null&&(_=s(C,_,D),A===null?b=C:A.sibling=C,A=C);return pt&&dr(u,D),b}for(C=i(u,C);D<g.length;D++)E=p(C,u,D,g[D],M),E!==null&&(t&&E.alternate!==null&&C.delete(E.key===null?D:E.key),_=s(E,_,D),A===null?b=E:A.sibling=E,A=E);return t&&C.forEach(function(z){return e(u,z)}),pt&&dr(u,D),b}function x(u,_,g,M){var b=Ws(g);if(typeof b!="function")throw Error(ne(150));if(g=b.call(g),g==null)throw Error(ne(151));for(var A=b=null,C=_,D=_=0,E=null,w=g.next();C!==null&&!w.done;D++,w=g.next()){C.index>D?(E=C,C=null):E=C.sibling;var z=f(u,C,w.value,M);if(z===null){C===null&&(C=E);break}t&&C&&z.alternate===null&&e(u,C),_=s(z,_,D),A===null?b=z:A.sibling=z,A=z,C=E}if(w.done)return n(u,C),pt&&dr(u,D),b;if(C===null){for(;!w.done;D++,w=g.next())w=d(u,w.value,M),w!==null&&(_=s(w,_,D),A===null?b=w:A.sibling=w,A=w);return pt&&dr(u,D),b}for(C=i(u,C);!w.done;D++,w=g.next())w=p(C,u,D,w.value,M),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?D:w.key),_=s(w,_,D),A===null?b=w:A.sibling=w,A=w);return t&&C.forEach(function(W){return e(u,W)}),pt&&dr(u,D),b}function m(u,_,g,M){if(typeof g=="object"&&g!==null&&g.type===ns&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Qa:e:{for(var b=g.key,A=_;A!==null;){if(A.key===b){if(b=g.type,b===ns){if(A.tag===7){n(u,A.sibling),_=r(A,g.props.children),_.return=u,u=_;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Di&&df(b)===A.type){n(u,A.sibling),_=r(A,g.props),_.ref=Ks(u,A,g),_.return=u,u=_;break e}n(u,A);break}else e(u,A);A=A.sibling}g.type===ns?(_=Er(g.props.children,u.mode,M,g.key),_.return=u,u=_):(M=Zo(g.type,g.key,g.props,null,u.mode,M),M.ref=Ks(u,_,g),M.return=u,u=M)}return a(u);case ts:e:{for(A=g.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(u,_.sibling),_=r(_,g.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=Dc(g,u.mode,M),_.return=u,u=_}return a(u);case Di:return A=g._init,m(u,_,A(g._payload),M)}if(ra(g))return v(u,_,g,M);if(Ws(g))return x(u,_,g,M);co(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,g),_.return=u,u=_):(n(u,_),_=Nc(g,u.mode,M),_.return=u,u=_),a(u)):n(u,_)}return m}var Cs=Pg(!0),Ng=Pg(!1),dl=ir(null),fl=null,us=null,Gh=null;function Hh(){Gh=us=fl=null}function Vh(t){var e=dl.current;ft(dl),t._currentValue=e}function Wu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){fl=t,Gh=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(Gh!==t)if(t={context:t,memoizedValue:e,next:null},us===null){if(fl===null)throw Error(ne(308));us=t,fl.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return e}var xr=null;function Wh(t){xr===null?xr=[t]:xr.push(t)}function Dg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Wh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ii=!1;function jh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ig(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,Wh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function jo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lh(t,n)}}function ff(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pl(t,e,n,i){var r=t.updateQueue;Ii=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,h=c=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,x=o;switch(f=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=yt({},d,f);break e;case 2:Ii=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Lr|=a,t.lanes=a,t.memoizedState=d}}function pf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Xa={},oi=ir(Xa),Na=ir(Xa),Da=ir(Xa);function yr(t){if(t===Xa)throw Error(ne(174));return t}function Xh(t,e){switch(ut(Da,e),ut(Na,t),ut(oi,Xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wu(e,t)}ft(oi),ut(oi,e)}function Rs(){ft(oi),ft(Na),ft(Da)}function Ug(t){yr(Da.current);var e=yr(oi.current),n=wu(e,t.type);e!==n&&(ut(Na,t),ut(oi,n))}function qh(t){Na.current===t&&(ft(oi),ft(Na))}var _t=ir(0);function ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ac=[];function Yh(){for(var t=0;t<Ac.length;t++)Ac[t]._workInProgressVersionPrimary=null;Ac.length=0}var Xo=Ai.ReactCurrentDispatcher,Cc=Ai.ReactCurrentBatchConfig,br=0,xt=null,bt=null,Ft=null,gl=!1,fa=!1,Ia=0,yx=0;function Xt(){throw Error(ne(321))}function Kh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function $h(t,e,n,i,r,s){if(br=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xo.current=t===null||t.memoizedState===null?wx:Tx,t=n(i,r),fa){s=0;do{if(fa=!1,Ia=0,25<=s)throw Error(ne(301));s+=1,Ft=bt=null,e.updateQueue=null,Xo.current=Ax,t=n(i,r)}while(fa)}if(Xo.current=vl,e=bt!==null&&bt.next!==null,br=0,Ft=bt=xt=null,gl=!1,e)throw Error(ne(300));return t}function Zh(){var t=Ia!==0;return Ia=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?xt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Bn(){if(bt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ft===null?xt.memoizedState:Ft.next;if(e!==null)Ft=e,bt=t;else{if(t===null)throw Error(ne(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ft===null?xt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Ua(t,e){return typeof e=="function"?e(t):e}function Rc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((br&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,xt.lanes|=h,Lr|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Jn(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,Lr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Jn(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Fg(){}function Og(t,e){var n=xt,i=Bn(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,hn=!0),i=i.queue,Qh(Bg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,Fa(9,zg.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(ne(349));br&30||kg(n,e,r)}return r}function kg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zg(t,e,n,i){e.value=n,e.getSnapshot=i,Gg(e)&&Hg(t)}function Bg(t,e,n){return n(function(){Gg(e)&&Hg(t)})}function Gg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function Hg(t){var e=Ei(t,1);e!==null&&Qn(e,t,1,-1)}function mf(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:t},e.queue=t,t=t.dispatch=Ex.bind(null,xt,t),[e.memoizedState,t]}function Fa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Vg(){return Bn().memoizedState}function qo(t,e,n,i){var r=ni();xt.flags|=t,r.memoizedState=Fa(1|e,n,void 0,i===void 0?null:i)}function Wl(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var a=bt.memoizedState;if(s=a.destroy,i!==null&&Kh(i,a.deps)){r.memoizedState=Fa(e,n,s,i);return}}xt.flags|=t,r.memoizedState=Fa(1|e,n,s,i)}function gf(t,e){return qo(8390656,8,t,e)}function Qh(t,e){return Wl(2048,8,t,e)}function Wg(t,e){return Wl(4,2,t,e)}function jg(t,e){return Wl(4,4,t,e)}function Xg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qg(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4,4,Xg.bind(null,e,t),n)}function Jh(){}function Yg(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Kg(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function $g(t,e,n){return br&21?(Jn(n,e)||(n=tg(),xt.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function Mx(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Cc.transition;Cc.transition={};try{t(!1),e()}finally{Je=n,Cc.transition=i}}function Zg(){return Bn().memoizedState}function Sx(t,e,n){var i=Yi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Qg(t))Jg(e,n);else if(n=Dg(t,e,n,i),n!==null){var r=an();Qn(n,t,i,r),e0(n,e,i)}}function Ex(t,e,n){var i=Yi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qg(t))Jg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Jn(o,a)){var l=e.interleaved;l===null?(r.next=r,Wh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Dg(t,e,r,i),n!==null&&(r=an(),Qn(n,t,i,r),e0(n,e,i))}}function Qg(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function Jg(t,e){fa=gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function e0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lh(t,n)}}var vl={readContext:zn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},wx={readContext:zn,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:gf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qo(4194308,4,Xg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qo(4194308,4,t,e)},useInsertionEffect:function(t,e){return qo(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Sx.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:mf,useDebugValue:Jh,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=mf(!1),e=t[0];return t=Mx.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=ni();if(pt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),kt===null)throw Error(ne(349));br&30||kg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,gf(Bg.bind(null,i,s,t),[t]),i.flags|=2048,Fa(9,zg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=kt.identifierPrefix;if(pt){var n=_i,i=vi;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Tx={readContext:zn,useCallback:Yg,useContext:zn,useEffect:Qh,useImperativeHandle:qg,useInsertionEffect:Wg,useLayoutEffect:jg,useMemo:Kg,useReducer:Rc,useRef:Vg,useState:function(){return Rc(Ua)},useDebugValue:Jh,useDeferredValue:function(t){var e=Bn();return $g(e,bt.memoizedState,t)},useTransition:function(){var t=Rc(Ua)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Og,useId:Zg,unstable_isNewReconciler:!1},Ax={readContext:zn,useCallback:Yg,useContext:zn,useEffect:Qh,useImperativeHandle:qg,useInsertionEffect:Wg,useLayoutEffect:jg,useMemo:Kg,useReducer:bc,useRef:Vg,useState:function(){return bc(Ua)},useDebugValue:Jh,useDeferredValue:function(t){var e=Bn();return bt===null?e.memoizedState=t:$g(e,bt.memoizedState,t)},useTransition:function(){var t=bc(Ua)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Og,useId:Zg,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ju(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jl={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=Yi(t),s=yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(Qn(e,t,r,i),jo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=Yi(t),s=yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(Qn(e,t,r,i),jo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=Yi(t),r=yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Xi(t,r,i),e!==null&&(Qn(e,t,i,n),jo(e,t,i))}};function vf(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ra(n,i)||!Ra(r,s):!0}function t0(t,e,n){var i=!1,r=er,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=fn(e)?Cr:Qt.current,i=e.contextTypes,s=(i=i!=null)?Ts(t,r):er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function _f(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&jl.enqueueReplaceState(e,e.state,null)}function Xu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},jh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=fn(e)?Cr:Qt.current,r.context=Ts(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ju(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&jl.enqueueReplaceState(r,r.state,null),pl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function bs(t,e){try{var n="",i=e;do n+=e_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Cx=typeof WeakMap=="function"?WeakMap:Map;function n0(t,e,n){n=yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){xl||(xl=!0,ih=i),qu(t,e)},n}function i0(t,e,n){n=yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){qu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qu(t,e),typeof i!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function xf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Cx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Gx.bind(null,t,e,n),e.then(t,t))}function yf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yi(-1,1),e.tag=2,Xi(n,e,1))),n.lanes|=1),t)}var Rx=Ai.ReactCurrentOwner,hn=!1;function rn(t,e,n,i){e.child=t===null?Ng(e,null,n,i):Cs(e,t.child,n,i)}function Sf(t,e,n,i,r){n=n.render;var s=e.ref;return ys(e,r),i=$h(t,e,n,i,s,r),n=Zh(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(pt&&n&&kh(e),e.flags|=1,rn(t,e,i,r),e.child)}function Ef(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!od(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,r0(t,e,s,i,r)):(t=Zo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ra,n(a,i)&&t.ref===e.ref)return wi(t,e,r)}return e.flags|=1,t=Ki(s,i),t.ref=e.ref,t.return=e,e.child=t}function r0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ra(s,i)&&t.ref===e.ref)if(hn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,wi(t,e,r)}return Yu(t,e,n,i,r)}function s0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(ds,Mn),Mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(ds,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(ds,Mn),Mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(ds,Mn),Mn|=i;return rn(t,e,r,n),e.child}function a0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yu(t,e,n,i,r){var s=fn(n)?Cr:Qt.current;return s=Ts(e,s),ys(e,r),n=$h(t,e,n,i,s,r),i=Zh(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(pt&&i&&kh(e),e.flags|=1,rn(t,e,n,r),e.child)}function wf(t,e,n,i,r){if(fn(n)){var s=!0;cl(e)}else s=!1;if(ys(e,r),e.stateNode===null)Yo(t,e),t0(e,n,i),Xu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=zn(c):(c=fn(n)?Cr:Qt.current,c=Ts(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&_f(e,a,i,c),Ii=!1;var f=e.memoizedState;a.state=f,pl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||dn.current||Ii?(typeof h=="function"&&(ju(e,n,h,i),l=e.memoizedState),(o=Ii||vf(e,n,o,i,f,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Ig(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:jn(e.type,o),a.props=c,d=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=fn(n)?Cr:Qt.current,l=Ts(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||f!==l)&&_f(e,a,i,l),Ii=!1,f=e.memoizedState,a.state=f,pl(e,i,a,r);var v=e.memoizedState;o!==d||f!==v||dn.current||Ii?(typeof p=="function"&&(ju(e,n,p,i),v=e.memoizedState),(c=Ii||vf(e,n,c,i,f,v,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Ku(t,e,n,i,s,r)}function Ku(t,e,n,i,r,s){a0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&cf(e,n,!1),wi(t,e,s);i=e.stateNode,Rx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Cs(e,t.child,null,s),e.child=Cs(e,null,o,s)):rn(t,e,o,s),e.memoizedState=i.state,r&&cf(e,n,!0),e.child}function o0(t){var e=t.stateNode;e.pendingContext?lf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lf(t,e.context,!1),Xh(t,e.containerInfo)}function Tf(t,e,n,i,r){return As(),Bh(r),e.flags|=256,rn(t,e,n,i),e.child}var $u={dehydrated:null,treeContext:null,retryLane:0};function Zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function l0(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(_t,r&1),t===null)return Vu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Yl(a,i,0,null),t=Er(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zu(n),e.memoizedState=$u,t):ed(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return bx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Ki(o,s):(s=Er(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Zu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=$u,i}return s=t.child,t=s.sibling,i=Ki(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ed(t,e){return e=Yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function uo(t,e,n,i){return i!==null&&Bh(i),Cs(e,t.child,null,n),t=ed(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Lc(Error(ne(422))),uo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Yl({mode:"visible",children:i.children},r,0,null),s=Er(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Cs(e,t.child,null,a),e.child.memoizedState=Zu(a),e.memoizedState=$u,s);if(!(e.mode&1))return uo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=Lc(s,i,void 0),uo(t,e,a,i)}if(o=(a&t.childLanes)!==0,hn||o){if(i=kt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ei(t,r),Qn(i,t,r,-1))}return ad(),i=Lc(Error(ne(421))),uo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Hx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,wn=ji(r.nextSibling),An=e,pt=!0,qn=null,t!==null&&(Dn[In++]=vi,Dn[In++]=_i,Dn[In++]=Rr,vi=t.id,_i=t.overflow,Rr=e),e=ed(e,i.children),e.flags|=4096,e)}function Af(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Wu(t.return,e,n)}function Pc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function c0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Af(t,n,e);else if(t.tag===19)Af(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ml(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Pc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ml(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Pc(e,!0,n,null,s);break;case"together":Pc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Lx(t,e,n){switch(e.tag){case 3:o0(e),As();break;case 5:Ug(e);break;case 1:fn(e.type)&&cl(e);break;case 4:Xh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(dl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?l0(t,e,n):(ut(_t,_t.current&1),t=wi(t,e,n),t!==null?t.sibling:null);ut(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return c0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,s0(t,e,n)}return wi(t,e,n)}var u0,Qu,h0,d0;u0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qu=function(){};h0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,yr(oi.current);var s=null;switch(n){case"input":r=yu(t,r),i=yu(t,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=Eu(t,r),i=Eu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ol)}Tu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ma.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r?.[c],i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ma.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};d0=function(t,e,n,i){n!==i&&(e.flags|=4)};function $s(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Px(t,e,n){var i=e.pendingProps;switch(zh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return fn(e.type)&&ll(),qt(e),null;case 3:return i=e.stateNode,Rs(),ft(dn),ft(Qt),Yh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(lo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(ah(qn),qn=null))),Qu(t,e),qt(e),null;case 5:qh(e);var r=yr(Da.current);if(n=e.type,t!==null&&e.stateNode!=null)h0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return qt(e),null}if(t=yr(oi.current),lo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ri]=e,i[Pa]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<aa.length;r++)ht(aa[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":Id(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":Fd(i,s),ht("invalid",i)}Tu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&oo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&oo(i.textContent,o,t),r=["children",""+o]):Ma.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ht("scroll",i)}switch(n){case"input":Ja(i),Ud(i,s,!0);break;case"textarea":Ja(i),Od(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ri]=e,t[Pa]=i,u0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Au(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<aa.length;r++)ht(aa[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":Id(t,i),r=yu(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),ht("invalid",t);break;case"textarea":Fd(t,i),r=Eu(t,i),ht("invalid",t);break;default:r=i}Tu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Vm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Sa(t,l):typeof l=="number"&&Sa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&wh(t,s,l,a))}switch(n){case"input":Ja(t),Ud(t,i,!1);break;case"textarea":Ja(t),Od(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?gs(t,!!i.multiple,s,!1):i.defaultValue!=null&&gs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)d0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=yr(Da.current),yr(oi.current),lo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(s=i.nodeValue!==n)&&(t=An,t!==null))switch(t.tag){case 3:oo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return qt(e),null;case 13:if(ft(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&wn!==null&&e.mode&1&&!(e.flags&128))Lg(),As(),e.flags|=98560,s=!1;else if(s=lo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[ri]=e}else As(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else qn!==null&&(ah(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?Lt===0&&(Lt=3):ad())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Rs(),Qu(t,e),t===null&&ba(e.stateNode.containerInfo),qt(e),null;case 10:return Vh(e.type._context),qt(e),null;case 17:return fn(e.type)&&ll(),qt(e),null;case 19:if(ft(_t),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)$s(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=ml(t),a!==null){for(e.flags|=128,$s(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Ls&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304)}else{if(!i)if(t=ml(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!pt)return qt(e),null}else 2*At()-s.renderingStartTime>Ls&&n!==1073741824&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=_t.current,ut(_t,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return sd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function Nx(t,e){switch(zh(e),e.tag){case 1:return fn(e.type)&&ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Rs(),ft(dn),ft(Qt),Yh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qh(e),null;case 13:if(ft(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));As()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(_t),null;case 4:return Rs(),null;case 10:return Vh(e.type._context),null;case 22:case 23:return sd(),null;case 24:return null;default:return null}}var ho=!1,$t=!1,Dx=typeof WeakSet=="function"?WeakSet:Set,ve=null;function hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function Ju(t,e,n){try{n()}catch(i){Et(t,e,i)}}var Cf=!1;function Ix(t,e){if(Fu=rl,t=vg(),Oh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++h===i&&(l=a),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ou={focusedElem:t,selectionRange:n},rl=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:jn(e.type,x),m);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){Et(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return v=Cf,Cf=!1,v}function pa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ju(e,n,s)}r=r.next}while(r!==i)}}function Xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function eh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function f0(t){var e=t.alternate;e!==null&&(t.alternate=null,f0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[Pa],delete e[Bu],delete e[gx],delete e[vx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function p0(t){return t.tag===5||t.tag===3||t.tag===4}function Rf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||p0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function th(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ol));else if(i!==4&&(t=t.child,t!==null))for(th(t,e,n),t=t.sibling;t!==null;)th(t,e,n),t=t.sibling}function nh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(nh(t,e,n),t=t.sibling;t!==null;)nh(t,e,n),t=t.sibling}var Gt=null,Xn=!1;function Ci(t,e,n){for(n=n.child;n!==null;)m0(t,e,n),n=n.sibling}function m0(t,e,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:$t||hs(n,e);case 6:var i=Gt,r=Xn;Gt=null,Ci(t,e,n),Gt=i,Xn=r,Gt!==null&&(Xn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Xn?(t=Gt,n=n.stateNode,t.nodeType===8?wc(t.parentNode,n):t.nodeType===1&&wc(t,n),Aa(t)):wc(Gt,n.stateNode));break;case 4:i=Gt,r=Xn,Gt=n.stateNode.containerInfo,Xn=!0,Ci(t,e,n),Gt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ju(n,e,a),r=r.next}while(r!==i)}Ci(t,e,n);break;case 1:if(!$t&&(hs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Et(n,e,o)}Ci(t,e,n);break;case 21:Ci(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Ci(t,e,n),$t=i):Ci(t,e,n);break;default:Ci(t,e,n)}}function bf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Dx),e.forEach(function(i){var r=Vx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Gt=o.stateNode,Xn=!1;break e;case 3:Gt=o.stateNode.containerInfo,Xn=!0;break e;case 4:Gt=o.stateNode.containerInfo,Xn=!0;break e}o=o.return}if(Gt===null)throw Error(ne(160));m0(s,a,r),Gt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)g0(e,t),e=e.sibling}function g0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),ti(t),i&4){try{pa(3,t,t.return),Xl(3,t)}catch(x){Et(t,t.return,x)}try{pa(5,t,t.return)}catch(x){Et(t,t.return,x)}}break;case 1:Gn(e,t),ti(t),i&512&&n!==null&&hs(n,n.return);break;case 5:if(Gn(e,t),ti(t),i&512&&n!==null&&hs(n,n.return),t.flags&32){var r=t.stateNode;try{Sa(r,"")}catch(x){Et(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&km(r,s),Au(o,a);var c=Au(o,s);for(a=0;a<l.length;a+=2){var h=l[a],d=l[a+1];h==="style"?Vm(r,d):h==="dangerouslySetInnerHTML"?Gm(r,d):h==="children"?Sa(r,d):wh(r,h,d,c)}switch(o){case"input":Mu(r,s);break;case"textarea":zm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?gs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?gs(r,!!s.multiple,s.defaultValue,!0):gs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Pa]=s}catch(x){Et(t,t.return,x)}}break;case 6:if(Gn(e,t),ti(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Et(t,t.return,x)}}break;case 3:if(Gn(e,t),ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Aa(e.containerInfo)}catch(x){Et(t,t.return,x)}break;case 4:Gn(e,t),ti(t);break;case 13:Gn(e,t),ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(id=At())),i&4&&bf(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||h,Gn(e,t),$t=c):Gn(e,t),ti(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(ve=t,h=t.child;h!==null;){for(d=ve=h;ve!==null;){switch(f=ve,p=f.child,f.tag){case 0:case 11:case 14:case 15:pa(4,f,f.return);break;case 1:hs(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){Et(i,n,x)}}break;case 5:hs(f,f.return);break;case 22:if(f.memoizedState!==null){Pf(d);continue}}p!==null?(p.return=f,ve=p):Pf(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Hm("display",a))}catch(x){Et(t,t.return,x)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){Et(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Gn(e,t),ti(t),i&4&&bf(t);break;case 21:break;default:Gn(e,t),ti(t)}}function ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(p0(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Sa(r,""),i.flags&=-33);var s=Rf(t);nh(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Rf(t);th(t,o,a);break;default:throw Error(ne(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ux(t,e,n){ve=t,v0(t)}function v0(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ho;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||$t;o=ho;var c=$t;if(ho=a,($t=l)&&!c)for(ve=r;ve!==null;)a=ve,l=a.child,a.tag===22&&a.memoizedState!==null?Nf(r):l!==null?(l.return=a,ve=l):Nf(r);for(;s!==null;)ve=s,v0(s),s=s.sibling;ve=r,ho=o,$t=c}Lf(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):Lf(t)}}function Lf(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||Xl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pf(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pf(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Aa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}$t||e.flags&512&&eh(e)}catch(f){Et(e,e.return,f)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Pf(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Nf(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xl(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{eh(e)}catch(l){Et(e,s,l)}break;case 5:var a=e.return;try{eh(e)}catch(l){Et(e,a,l)}}}catch(l){Et(e,e.return,l)}if(e===t){ve=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ve=o;break}ve=e.return}}var Fx=Math.ceil,_l=Ai.ReactCurrentDispatcher,td=Ai.ReactCurrentOwner,kn=Ai.ReactCurrentBatchConfig,Ke=0,kt=null,Rt=null,Vt=0,Mn=0,ds=ir(0),Lt=0,Oa=null,Lr=0,ql=0,nd=0,ma=null,un=null,id=0,Ls=1/0,mi=null,xl=!1,ih=null,qi=null,fo=!1,ki=null,yl=0,ga=0,rh=null,Ko=-1,$o=0;function an(){return Ke&6?At():Ko!==-1?Ko:Ko=At()}function Yi(t){return t.mode&1?Ke&2&&Vt!==0?Vt&-Vt:xx.transition!==null?($o===0&&($o=tg()),$o):(t=Je,t!==0||(t=window.event,t=t===void 0?16:lg(t.type)),t):1}function Qn(t,e,n,i){if(50<ga)throw ga=0,rh=null,Error(ne(185));Va(t,n,i),(!(Ke&2)||t!==kt)&&(t===kt&&(!(Ke&2)&&(ql|=n),Lt===4&&Fi(t,Vt)),pn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Ls=At()+500,Vl&&rr()))}function pn(t,e){var n=t.callbackNode;x_(t,e);var i=il(t,t===kt?Vt:0);if(i===0)n!==null&&Bd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Bd(n),e===1)t.tag===0?_x(Df.bind(null,t)):Cg(Df.bind(null,t)),px(function(){!(Ke&6)&&rr()}),n=null;else{switch(ng(i)){case 1:n=bh;break;case 4:n=Jm;break;case 16:n=nl;break;case 536870912:n=eg;break;default:n=nl}n=T0(n,_0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _0(t,e){if(Ko=-1,$o=0,Ke&6)throw Error(ne(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var i=il(t,t===kt?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ml(t,i);else{e=i;var r=Ke;Ke|=2;var s=y0();(kt!==t||Vt!==e)&&(mi=null,Ls=At()+500,Sr(t,e));do try{zx();break}catch(o){x0(t,o)}while(!0);Hh(),_l.current=s,Ke=r,Rt!==null?e=0:(kt=null,Vt=0,e=Lt)}if(e!==0){if(e===2&&(r=Pu(t),r!==0&&(i=r,e=sh(t,r))),e===1)throw n=Oa,Sr(t,0),Fi(t,i),pn(t,At()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ox(r)&&(e=Ml(t,i),e===2&&(s=Pu(t),s!==0&&(i=s,e=sh(t,s))),e===1))throw n=Oa,Sr(t,0),Fi(t,i),pn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:fr(t,un,mi);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=id+500-At(),10<e)){if(il(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=zu(fr.bind(null,t,un,mi),e);break}fr(t,un,mi);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Zn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Fx(i/1960))-i,10<i){t.timeoutHandle=zu(fr.bind(null,t,un,mi),i);break}fr(t,un,mi);break;case 5:fr(t,un,mi);break;default:throw Error(ne(329))}}}return pn(t,At()),t.callbackNode===n?_0.bind(null,t):null}function sh(t,e){var n=ma;return t.current.memoizedState.isDehydrated&&(Sr(t,e).flags|=256),t=Ml(t,e),t!==2&&(e=un,un=n,e!==null&&ah(e)),t}function ah(t){un===null?un=t:un.push.apply(un,t)}function Ox(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~nd,e&=~ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function Df(t){if(Ke&6)throw Error(ne(327));Ms();var e=il(t,0);if(!(e&1))return pn(t,At()),null;var n=Ml(t,e);if(t.tag!==0&&n===2){var i=Pu(t);i!==0&&(e=i,n=sh(t,i))}if(n===1)throw n=Oa,Sr(t,0),Fi(t,e),pn(t,At()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,un,mi),pn(t,At()),null}function rd(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Ls=At()+500,Vl&&rr())}}function Pr(t){ki!==null&&ki.tag===0&&!(Ke&6)&&Ms();var e=Ke;Ke|=1;var n=kn.transition,i=Je;try{if(kn.transition=null,Je=1,t)return t()}finally{Je=i,kn.transition=n,Ke=e,!(Ke&6)&&rr()}}function sd(){Mn=ds.current,ft(ds)}function Sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fx(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(zh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ll();break;case 3:Rs(),ft(dn),ft(Qt),Yh();break;case 5:qh(i);break;case 4:Rs();break;case 13:ft(_t);break;case 19:ft(_t);break;case 10:Vh(i.type._context);break;case 22:case 23:sd()}n=n.return}if(kt=t,Rt=t=Ki(t.current,null),Vt=Mn=e,Lt=0,Oa=null,nd=ql=Lr=0,un=ma=null,xr!==null){for(e=0;e<xr.length;e++)if(n=xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}xr=null}return t}function x0(t,e){do{var n=Rt;try{if(Hh(),Xo.current=vl,gl){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gl=!1}if(br=0,Ft=bt=xt=null,fa=!1,Ia=0,td.current=null,n===null||n.return===null){Lt=1,Oa=e,Rt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Vt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=yf(a);if(p!==null){p.flags&=-257,Mf(p,a,o,s,e),p.mode&1&&xf(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){xf(s,c,e),ad();break e}l=Error(ne(426))}}else if(pt&&o.mode&1){var m=yf(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Mf(m,a,o,s,e),Bh(bs(l,o));break e}}s=l=bs(l,o),Lt!==4&&(Lt=2),ma===null?ma=[s]:ma.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=n0(s,l,e);ff(s,u);break e;case 1:o=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(qi===null||!qi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=i0(s,o,e);ff(s,M);break e}}s=s.return}while(s!==null)}S0(n)}catch(b){e=b,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function y0(){var t=_l.current;return _l.current=vl,t===null?vl:t}function ad(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),kt===null||!(Lr&268435455)&&!(ql&268435455)||Fi(kt,Vt)}function Ml(t,e){var n=Ke;Ke|=2;var i=y0();(kt!==t||Vt!==e)&&(mi=null,Sr(t,e));do try{kx();break}catch(r){x0(t,r)}while(!0);if(Hh(),Ke=n,_l.current=i,Rt!==null)throw Error(ne(261));return kt=null,Vt=0,Lt}function kx(){for(;Rt!==null;)M0(Rt)}function zx(){for(;Rt!==null&&!u_();)M0(Rt)}function M0(t){var e=w0(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?S0(t):Rt=e,td.current=null}function S0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Nx(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Rt=null;return}}else if(n=Px(n,e,Mn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Lt===0&&(Lt=5)}function fr(t,e,n){var i=Je,r=kn.transition;try{kn.transition=null,Je=1,Bx(t,e,n,i)}finally{kn.transition=r,Je=i}return null}function Bx(t,e,n,i){do Ms();while(ki!==null);if(Ke&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(y_(t,s),t===kt&&(Rt=kt=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fo||(fo=!0,T0(nl,function(){return Ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var a=Je;Je=1;var o=Ke;Ke|=4,td.current=null,Ix(t,n),g0(n,t),ax(Ou),rl=!!Fu,Ou=Fu=null,t.current=n,Ux(n),h_(),Ke=o,Je=a,kn.transition=s}else t.current=n;if(fo&&(fo=!1,ki=t,yl=r),s=t.pendingLanes,s===0&&(qi=null),p_(n.stateNode),pn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(xl)throw xl=!1,t=ih,ih=null,t;return yl&1&&t.tag!==0&&Ms(),s=t.pendingLanes,s&1?t===rh?ga++:(ga=0,rh=t):ga=0,rr(),null}function Ms(){if(ki!==null){var t=ng(yl),e=kn.transition,n=Je;try{if(kn.transition=null,Je=16>t?16:t,ki===null)var i=!1;else{if(t=ki,ki=null,yl=0,Ke&6)throw Error(ne(331));var r=Ke;for(Ke|=4,ve=t.current;ve!==null;){var s=ve,a=s.child;if(ve.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ve=c;ve!==null;){var h=ve;switch(h.tag){case 0:case 11:case 15:pa(8,h,s)}var d=h.child;if(d!==null)d.return=h,ve=d;else for(;ve!==null;){h=ve;var f=h.sibling,p=h.return;if(f0(h),h===c){ve=null;break}if(f!==null){f.return=p,ve=f;break}ve=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}ve=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ve=a;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:pa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ve=u;break e}ve=s.return}}var _=t.current;for(ve=_;ve!==null;){a=ve;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,ve=g;else e:for(a=_;ve!==null;){if(o=ve,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Xl(9,o)}}catch(b){Et(o,o.return,b)}if(o===a){ve=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,ve=M;break e}ve=o.return}}if(Ke=r,rr(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(kl,t)}catch{}i=!0}return i}finally{Je=n,kn.transition=e}}return!1}function If(t,e,n){e=bs(n,e),e=n0(t,e,1),t=Xi(t,e,1),e=an(),t!==null&&(Va(t,1,e),pn(t,e))}function Et(t,e,n){if(t.tag===3)If(t,t,n);else for(;e!==null;){if(e.tag===3){If(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qi===null||!qi.has(i))){t=bs(n,t),t=i0(e,t,1),e=Xi(e,t,1),t=an(),e!==null&&(Va(e,1,t),pn(e,t));break}}e=e.return}}function Gx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Vt&n)===n&&(Lt===4||Lt===3&&(Vt&130023424)===Vt&&500>At()-id?Sr(t,0):nd|=n),pn(t,e)}function E0(t,e){e===0&&(t.mode&1?(e=no,no<<=1,!(no&130023424)&&(no=4194304)):e=1);var n=an();t=Ei(t,e),t!==null&&(Va(t,e,n),pn(t,n))}function Hx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),E0(t,n)}function Vx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),E0(t,n)}var w0;w0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,Lx(t,e,n);hn=!!(t.flags&131072)}else hn=!1,pt&&e.flags&1048576&&Rg(e,hl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Yo(t,e),t=e.pendingProps;var r=Ts(e,Qt.current);ys(e,n),r=$h(null,e,i,t,r,n);var s=Zh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,cl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jh(e),r.updater=jl,e.stateNode=r,r._reactInternals=e,Xu(e,i,t,n),e=Ku(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&kh(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Yo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=jx(i),t=jn(i,t),r){case 0:e=Yu(null,e,i,t,n);break e;case 1:e=wf(null,e,i,t,n);break e;case 11:e=Sf(null,e,i,t,n);break e;case 14:e=Ef(null,e,i,jn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Yu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),wf(t,e,i,r,n);case 3:e:{if(o0(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ig(t,e),pl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=bs(Error(ne(423)),e),e=Tf(t,e,i,n,r);break e}else if(i!==r){r=bs(Error(ne(424)),e),e=Tf(t,e,i,n,r);break e}else for(wn=ji(e.stateNode.containerInfo.firstChild),An=e,pt=!0,qn=null,n=Ng(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(As(),i===r){e=wi(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return Ug(e),t===null&&Vu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,ku(i,r)?a=null:s!==null&&ku(i,s)&&(e.flags|=32),a0(t,e),rn(t,e,a,n),e.child;case 6:return t===null&&Vu(e),null;case 13:return l0(t,e,n);case 4:return Xh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Cs(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Sf(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(dl,i._currentValue),i._currentValue=a,s!==null)if(Jn(s.value,a)){if(s.children===r.children&&!dn.current){e=wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Wu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ys(e,n),r=zn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),Ef(t,e,i,r,n);case 15:return r0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Yo(t,e),e.tag=1,fn(i)?(t=!0,cl(e)):t=!1,ys(e,n),t0(e,i,r),Xu(e,i,r,n),Ku(null,e,i,!0,t,n);case 19:return c0(t,e,n);case 22:return s0(t,e,n)}throw Error(ne(156,e.tag))};function T0(t,e){return Qm(t,e)}function Wx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new Wx(t,e,n,i)}function od(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jx(t){if(typeof t=="function")return od(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ah)return 11;if(t===Ch)return 14}return 2}function Ki(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Zo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")od(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ns:return Er(n.children,r,s,e);case Th:a=8,r|=8;break;case gu:return t=On(12,n,e,r|2),t.elementType=gu,t.lanes=s,t;case vu:return t=On(13,n,e,r),t.elementType=vu,t.lanes=s,t;case _u:return t=On(19,n,e,r),t.elementType=_u,t.lanes=s,t;case Um:return Yl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dm:a=10;break e;case Im:a=9;break e;case Ah:a=11;break e;case Ch:a=14;break e;case Di:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=On(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Er(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function Yl(t,e,n,i){return t=On(22,t,i,e),t.elementType=Um,t.lanes=n,t.stateNode={isHidden:!1},t}function Nc(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function Dc(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Xx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fc(0),this.expirationTimes=fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ld(t,e,n,i,r,s,a,o,l){return t=new Xx(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jh(s),t}function qx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function A0(t){if(!t)return er;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(fn(n))return Ag(t,n,e)}return e}function C0(t,e,n,i,r,s,a,o,l){return t=ld(n,i,!0,t,r,s,a,o,l),t.context=A0(null),n=t.current,i=an(),r=Yi(n),s=yi(i,r),s.callback=e??null,Xi(n,s,r),t.current.lanes=r,Va(t,r,i),pn(t,i),t}function Kl(t,e,n,i){var r=e.current,s=an(),a=Yi(r);return n=A0(n),e.context===null?e.context=n:e.pendingContext=n,e=yi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Xi(r,e,a),t!==null&&(Qn(t,r,a,s),jo(t,r,a)),a}function Sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Uf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cd(t,e){Uf(t,e),(t=t.alternate)&&Uf(t,e)}function Yx(){return null}var R0=typeof reportError=="function"?reportError:function(t){console.error(t)};function ud(t){this._internalRoot=t}$l.prototype.render=ud.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Kl(t,e,null,null)};$l.prototype.unmount=ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){Kl(null,t,null,null)}),e[Si]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var e=sg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ui.length&&e!==0&&e<Ui[n].priority;n++);Ui.splice(n,0,t),n===0&&og(t)}};function hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ff(){}function Kx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Sl(a);s.call(c)}}var a=C0(e,i,t,0,null,!1,!1,"",Ff);return t._reactRootContainer=a,t[Si]=a.current,ba(t.nodeType===8?t.parentNode:t),Pr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Sl(l);o.call(c)}}var l=ld(t,0,!1,null,null,!1,!1,"",Ff);return t._reactRootContainer=l,t[Si]=l.current,ba(t.nodeType===8?t.parentNode:t),Pr(function(){Kl(e,l,n,i)}),l}function Ql(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Sl(a);o.call(l)}}Kl(e,a,t,r)}else a=Kx(n,e,t,r,i);return Sl(a)}ig=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&(Lh(e,n|1),pn(e,At()),!(Ke&6)&&(Ls=At()+500,rr()))}break;case 13:Pr(function(){var i=Ei(t,1);if(i!==null){var r=an();Qn(i,t,1,r)}}),cd(t,1)}};Ph=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=an();Qn(e,t,134217728,n)}cd(t,134217728)}};rg=function(t){if(t.tag===13){var e=Yi(t),n=Ei(t,e);if(n!==null){var i=an();Qn(n,t,e,i)}cd(t,e)}};sg=function(){return Je};ag=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Ru=function(t,e,n){switch(e){case"input":if(Mu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Hl(i);if(!r)throw Error(ne(90));Om(i),Mu(i,r)}}}break;case"textarea":zm(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};Xm=rd;qm=Pr;var $x={usingClientEntryPoint:!1,Events:[ja,as,Hl,Wm,jm,rd]},Zs={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zx={bundleType:Zs.bundleType,version:Zs.version,rendererPackageName:Zs.rendererPackageName,rendererConfig:Zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$m(t),t===null?null:t.stateNode},findFiberByHostInstance:Zs.findFiberByHostInstance||Yx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{kl=po.inject(Zx),ai=po}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$x;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hd(e))throw Error(ne(200));return qx(t,e,null,n)};bn.createRoot=function(t,e){if(!hd(t))throw Error(ne(299));var n=!1,i="",r=R0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ld(t,1,!1,null,null,n,!1,i,r),t[Si]=e.current,ba(t.nodeType===8?t.parentNode:t),new ud(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=$m(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return Pr(t)};bn.hydrate=function(t,e,n){if(!Zl(e))throw Error(ne(200));return Ql(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!hd(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=R0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=C0(e,null,t,1,n??null,r,!1,s,a),t[Si]=e.current,ba(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new $l(e)};bn.render=function(t,e,n){if(!Zl(e))throw Error(ne(200));return Ql(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(ne(40));return t._reactRootContainer?(Pr(function(){Ql(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1};bn.unstable_batchedUpdates=rd;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Zl(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Ql(t,e,n,!1,i)};bn.version="18.3.1-next-f1338f8080-20240426";function b0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b0)}catch(t){console.error(t)}}b0(),bm.exports=bn;var Qx=bm.exports,Of=Qx;pu.createRoot=Of.createRoot,pu.hydrateRoot=Of.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dd="160",Jx=0,kf=1,ey=2,L0=1,P0=2,pi=3,tr=0,mn=1,si=2,$i=0,Ss=1,Ps=2,zf=3,Bf=4,ty=5,gr=100,ny=101,iy=102,Gf=103,Hf=104,ry=200,sy=201,ay=202,oy=203,oh=204,lh=205,ly=206,cy=207,uy=208,hy=209,dy=210,fy=211,py=212,my=213,gy=214,vy=0,_y=1,xy=2,El=3,yy=4,My=5,Sy=6,Ey=7,N0=0,wy=1,Ty=2,Zi=0,Ay=1,Cy=2,Ry=3,D0=4,by=5,Ly=6,I0=300,Ns=301,Ds=302,wl=303,ch=304,Jl=306,Mr=1e3,Kn=1001,uh=1002,sn=1003,Vf=1004,Ic=1005,Un=1006,Py=1007,ka=1008,Qi=1009,Ny=1010,Dy=1011,fd=1012,U0=1013,zi=1014,Bi=1015,za=1016,F0=1017,O0=1018,wr=1020,Iy=1021,$n=1023,Uy=1024,Fy=1025,Tr=1026,Is=1027,Oy=1028,k0=1029,ky=1030,z0=1031,B0=1033,Uc=33776,Fc=33777,Oc=33778,kc=33779,Wf=35840,jf=35841,Xf=35842,qf=35843,G0=36196,Yf=37492,Kf=37496,$f=37808,Zf=37809,Qf=37810,Jf=37811,ep=37812,tp=37813,np=37814,ip=37815,rp=37816,sp=37817,ap=37818,op=37819,lp=37820,cp=37821,zc=36492,up=36494,hp=36495,zy=36283,dp=36284,fp=36285,pp=36286,H0=3e3,Ar=3001,By=3200,Gy=3201,V0=0,Hy=1,Fn="",Ot="srgb",Ti="srgb-linear",pd="display-p3",ec="display-p3-linear",Tl="linear",dt="srgb",Al="rec709",Cl="p3",kr=7680,mp=519,Vy=512,Wy=513,jy=514,W0=515,Xy=516,qy=517,Yy=518,Ky=519,gp=35044,vp="300 es",hh=1035,xi=2e3,Rl=2001;class Bs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _p=1234567;const va=Math.PI/180,Ba=180/Math.PI;function Gs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function md(t,e){return(t%e+e)%e}function $y(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Zy(t,e,n){return t!==e?(n-t)/(e-t):0}function _a(t,e,n){return(1-n)*t+n*e}function Qy(t,e,n,i){return _a(t,e,1-Math.exp(-n*i))}function Jy(t,e=1){return e-Math.abs(md(t,e*2)-e)}function eM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function tM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function nM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function iM(t,e){return t+Math.random()*(e-t)}function rM(t){return t*(.5-Math.random())}function sM(t){t!==void 0&&(_p=t);let e=_p+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function aM(t){return t*va}function oM(t){return t*Ba}function dh(t){return(t&t-1)===0&&t!==0}function lM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function bl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function cM(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),p=s((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":t.set(o*h,l*d,l*f,o*c);break;case"YZY":t.set(l*f,o*h,l*d,o*c);break;case"ZXZ":t.set(l*d,l*f,o*h,o*c);break;case"XZX":t.set(o*h,l*v,l*p,o*c);break;case"YXY":t.set(l*p,o*h,l*v,o*c);break;case"ZYZ":t.set(l*v,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function es(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Sn={DEG2RAD:va,RAD2DEG:Ba,generateUUID:Gs,clamp:Zt,euclideanModulo:md,mapLinear:$y,inverseLerp:Zy,lerp:_a,damp:Qy,pingpong:Jy,smoothstep:eM,smootherstep:tM,randInt:nM,randFloat:iM,randFloatSpread:rM,seededRandom:sM,degToRad:aM,radToDeg:oM,isPowerOfTwo:dh,ceilPowerOfTwo:lM,floorPowerOfTwo:bl,setQuaternionFromProperEuler:cM,normalize:tn,denormalize:es};class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],v=i[8],x=r[0],m=r[3],u=r[6],_=r[1],g=r[4],M=r[7],b=r[2],A=r[5],C=r[8];return s[0]=a*x+o*_+l*b,s[3]=a*m+o*g+l*A,s[6]=a*u+o*M+l*C,s[1]=c*x+h*_+d*b,s[4]=c*m+h*g+d*A,s[7]=c*u+h*M+d*C,s[2]=f*x+p*_+v*b,s[5]=f*m+p*g+v*A,s[8]=f*u+p*M+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*s,p=c*s-a*l,v=n*d+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*c-h*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(h*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Bc.makeScale(e,n)),this}rotate(e){return this.premultiply(Bc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bc=new je;function j0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ll(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function uM(){const t=Ll("canvas");return t.style.display="block",t}const xp={};function xa(t){t in xp||(xp[t]=!0,console.warn(t))}const yp=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mp=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mo={[Ti]:{transfer:Tl,primaries:Al,toReference:t=>t,fromReference:t=>t},[Ot]:{transfer:dt,primaries:Al,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ec]:{transfer:Tl,primaries:Cl,toReference:t=>t.applyMatrix3(Mp),fromReference:t=>t.applyMatrix3(yp)},[pd]:{transfer:dt,primaries:Cl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Mp),fromReference:t=>t.applyMatrix3(yp).convertLinearToSRGB()}},hM=new Set([Ti,ec]),nt={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!hM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=mo[e].toReference,r=mo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return mo[t].primaries},getTransfer:function(t){return t===Fn?Tl:mo[t].transfer}};function Es(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let zr;class X0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zr===void 0&&(zr=Ll("canvas")),zr.width=e.width,zr.height=e.height;const i=zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ll("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Es(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Es(n[i]/255)*255):n[i]=Es(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dM=0;class q0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Gs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Hc(r[a].image)):s.push(Hc(r[a]))}else s=Hc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Hc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?X0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fM=0;class gn extends Bs{constructor(e=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=Kn,r=Kn,s=Un,a=ka,o=$n,l=Qi,c=gn.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Gs(),this.name="",this.source=new q0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(xa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ar?Ot:Fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==I0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mr:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mr:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?Ar:H0}set encoding(e){xa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ar?Ot:Fn}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=I0;gn.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,n=0,i=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],v=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(p+1)/2,b=(u+1)/2,A=(h+f)/4,C=(d+x)/4,D=(v+m)/4;return g>M&&g>b?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=C/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=D/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=D/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(d-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pM extends Bs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new mt(0,0,e,n),this.scissorTest=!1,this.viewport=new mt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(xa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ar?Ot:Fn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new gn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new q0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends pM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Y0 extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mM extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=s[a+0],p=s[a+1],v=s[a+2],x=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d;return}if(o===1){e[n+0]=f,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(d!==x||l!==f||c!==p||h!==v){let m=1-o;const u=l*f+c*p+h*v+d*x,_=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const b=Math.sqrt(g),A=Math.atan2(b,u*_);m=Math.sin(m*A)/b,o=Math.sin(o*A)/b}const M=o*_;if(l=l*m+f*M,c=c*m+p*M,h=h*m+v*M,d=d*m+x*M,m===1-o){const b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[a],f=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+h*d+l*p-c*f,e[n+1]=l*v+h*f+c*d-o*p,e[n+2]=c*v+h*p+o*f-l*d,e[n+3]=h*v-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),d=o(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"YXZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"ZXY":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"ZYX":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"YZX":this._x=f*h*d+c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d-f*p*v;break;case"XZY":this._x=f*h*d-c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vc=new N,Sp=new qa;class sr{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(s,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),go.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),go.copy(i.boundingBox)),go.applyMatrix4(e.matrixWorld),this.union(go)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),vo.subVectors(this.max,Qs),Br.subVectors(e.a,Qs),Gr.subVectors(e.b,Qs),Hr.subVectors(e.c,Qs),Ri.subVectors(Gr,Br),bi.subVectors(Hr,Gr),lr.subVectors(Br,Hr);let n=[0,-Ri.z,Ri.y,0,-bi.z,bi.y,0,-lr.z,lr.y,Ri.z,0,-Ri.x,bi.z,0,-bi.x,lr.z,0,-lr.x,-Ri.y,Ri.x,0,-bi.y,bi.x,0,-lr.y,lr.x,0];return!Wc(n,Br,Gr,Hr,vo)||(n=[1,0,0,0,1,0,0,0,1],!Wc(n,Br,Gr,Hr,vo))?!1:(_o.crossVectors(Ri,bi),n=[_o.x,_o.y,_o.z],Wc(n,Br,Gr,Hr,vo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new N,new N,new N,new N,new N,new N,new N,new N],Hn=new N,go=new sr,Br=new N,Gr=new N,Hr=new N,Ri=new N,bi=new N,lr=new N,Qs=new N,vo=new N,_o=new N,cr=new N;function Wc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){cr.fromArray(t,s);const o=r.x*Math.abs(cr.x)+r.y*Math.abs(cr.y)+r.z*Math.abs(cr.z),l=e.dot(cr),c=n.dot(cr),h=i.dot(cr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const gM=new sr,Js=new N,jc=new N;class Ya{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):gM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(jc)),this.expandByPoint(Js.copy(e.center).sub(jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new N,Xc=new N,xo=new N,Li=new N,qc=new N,yo=new N,Yc=new N;class gd{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xc.copy(e).add(n).multiplyScalar(.5),xo.copy(n).sub(e).normalize(),Li.copy(this.origin).sub(Xc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(xo),o=Li.dot(this.direction),l=-Li.dot(xo),c=Li.lengthSq(),h=Math.abs(1-a*a);let d,f,p,v;if(h>0)if(d=a*l-o,f=a*o-l,v=s*h,d>=0)if(f>=-v)if(f<=v){const x=1/h;d*=x,f*=x,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Xc).addScaledVector(xo,f),p}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,s){qc.subVectors(n,e),yo.subVectors(i,e),Yc.crossVectors(qc,yo);let a=this.direction.dot(Yc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,e);const l=o*this.direction.dot(yo.crossVectors(Li,yo));if(l<0)return null;const c=o*this.direction.dot(qc.cross(Li));if(c<0||l+c>a)return null;const h=-o*Li.dot(Yc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,n,i,r,s,a,o,l,c,h,d,f,p,v,x,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,d,f,p,v,x,m)}set(e,n,i,r,s,a,o,l,c,h,d,f,p,v,x,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=v,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*h,p=a*d,v=o*h,x=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=v+p*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,v=c*h,x=c*d;n[0]=f+x*o,n[4]=v*o-p,n[8]=a*c,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=p*o-v,n[6]=x+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,v=c*h,x=c*d;n[0]=f-x*o,n[4]=-a*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*h,n[9]=x-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*h,p=a*d,v=o*h,x=o*d;n[0]=l*h,n[4]=v*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,v=o*l,x=o*c;n[0]=l*h,n[4]=x-f*d,n[8]=v*d+p,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+v,n[10]=f-x*d}else if(e.order==="XZY"){const f=a*l,p=a*c,v=o*l,x=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+x,n[5]=a*h,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*h,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vM,e,_M)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Pi.crossVectors(i,xn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Pi.crossVectors(i,xn)),Pi.normalize(),Mo.crossVectors(xn,Pi),r[0]=Pi.x,r[4]=Mo.x,r[8]=xn.x,r[1]=Pi.y,r[5]=Mo.y,r[9]=xn.y,r[2]=Pi.z,r[6]=Mo.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],v=i[2],x=i[6],m=i[10],u=i[14],_=i[3],g=i[7],M=i[11],b=i[15],A=r[0],C=r[4],D=r[8],E=r[12],w=r[1],z=r[5],W=r[9],Q=r[13],P=r[2],O=r[6],j=r[10],K=r[14],I=r[3],k=r[7],B=r[11],$=r[15];return s[0]=a*A+o*w+l*P+c*I,s[4]=a*C+o*z+l*O+c*k,s[8]=a*D+o*W+l*j+c*B,s[12]=a*E+o*Q+l*K+c*$,s[1]=h*A+d*w+f*P+p*I,s[5]=h*C+d*z+f*O+p*k,s[9]=h*D+d*W+f*j+p*B,s[13]=h*E+d*Q+f*K+p*$,s[2]=v*A+x*w+m*P+u*I,s[6]=v*C+x*z+m*O+u*k,s[10]=v*D+x*W+m*j+u*B,s[14]=v*E+x*Q+m*K+u*$,s[3]=_*A+g*w+M*P+b*I,s[7]=_*C+g*z+M*O+b*k,s[11]=_*D+g*W+M*j+b*B,s[15]=_*E+g*Q+M*K+b*$,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],v=e[3],x=e[7],m=e[11],u=e[15];return v*(+s*l*d-r*c*d-s*o*f+i*c*f+r*o*p-i*l*p)+x*(+n*l*p-n*c*f+s*a*f-r*a*p+r*c*h-s*l*h)+m*(+n*c*d-n*o*p-s*a*d+i*a*p+s*o*h-i*c*h)+u*(-r*o*h-n*l*d+n*o*f+r*a*d-i*a*f+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],v=e[12],x=e[13],m=e[14],u=e[15],_=d*m*c-x*f*c+x*l*p-o*m*p-d*l*u+o*f*u,g=v*f*c-h*m*c-v*l*p+a*m*p+h*l*u-a*f*u,M=h*x*c-v*d*c+v*o*p-a*x*p-h*o*u+a*d*u,b=v*d*l-h*x*l-v*o*f+a*x*f+h*o*m-a*d*m,A=n*_+i*g+r*M+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=_*C,e[1]=(x*f*s-d*m*s-x*r*p+i*m*p+d*r*u-i*f*u)*C,e[2]=(o*m*s-x*l*s+x*r*c-i*m*c-o*r*u+i*l*u)*C,e[3]=(d*l*s-o*f*s-d*r*c+i*f*c+o*r*p-i*l*p)*C,e[4]=g*C,e[5]=(h*m*s-v*f*s+v*r*p-n*m*p-h*r*u+n*f*u)*C,e[6]=(v*l*s-a*m*s-v*r*c+n*m*c+a*r*u-n*l*u)*C,e[7]=(a*f*s-h*l*s+h*r*c-n*f*c-a*r*p+n*l*p)*C,e[8]=M*C,e[9]=(v*d*s-h*x*s-v*i*p+n*x*p+h*i*u-n*d*u)*C,e[10]=(a*x*s-v*o*s+v*i*c-n*x*c-a*i*u+n*o*u)*C,e[11]=(h*o*s-a*d*s-h*i*c+n*d*c+a*i*p-n*o*p)*C,e[12]=b*C,e[13]=(h*x*r-v*d*r+v*i*f-n*x*f-h*i*m+n*d*m)*C,e[14]=(v*o*r-a*x*r-v*i*l+n*x*l+a*i*m-n*o*m)*C,e[15]=(a*d*r-h*o*r+h*i*l-n*d*l-a*i*f+n*o*f)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,d=o+o,f=s*c,p=s*h,v=s*d,x=a*h,m=a*d,u=o*d,_=l*c,g=l*h,M=l*d,b=i.x,A=i.y,C=i.z;return r[0]=(1-(x+u))*b,r[1]=(p+M)*b,r[2]=(v-g)*b,r[3]=0,r[4]=(p-M)*A,r[5]=(1-(f+u))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(v+g)*C,r[9]=(m-_)*C,r[10]=(1-(f+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Vr.set(r[0],r[1],r[2]).length();const a=Vr.set(r[4],r[5],r[6]).length(),o=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const c=1/s,h=1/a,d=1/o;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,n.setFromRotationMatrix(Vn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=xi){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,v;if(o===xi)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Rl)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=xi){const l=this.elements,c=1/(n-e),h=1/(i-r),d=1/(a-s),f=(n+e)*c,p=(i+r)*h;let v,x;if(o===xi)v=(a+s)*d,x=-2*d;else if(o===Rl)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Vr=new N,Vn=new wt,vM=new N(0,0,0),_M=new N(1,1,1),Pi=new N,Mo=new N,xn=new N,Ep=new wt,wp=new qa;class tc{constructor(e=0,n=0,i=0,r=tc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ep,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wp.setFromEuler(this),this.setFromQuaternion(wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tc.DEFAULT_ORDER="XYZ";class K0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xM=0;const Tp=new N,Wr=new qa,hi=new wt,So=new N,ea=new N,yM=new N,MM=new qa,Ap=new N(1,0,0),Cp=new N(0,1,0),Rp=new N(0,0,1),SM={type:"added"},EM={type:"removed"};class zt extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new N,n=new tc,i=new qa,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new je}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Ap,e)}rotateY(e){return this.rotateOnAxis(Cp,e)}rotateZ(e){return this.rotateOnAxis(Rp,e)}translateOnAxis(e,n){return Tp.copy(e).applyQuaternion(this.quaternion),this.position.add(Tp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ap,e)}translateY(e){return this.translateOnAxis(Cp,e)}translateZ(e){return this.translateOnAxis(Rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?So.copy(e):So.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(ea,So,this.up):hi.lookAt(So,ea,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(hi),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(SM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(EM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,yM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,MM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new N(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new N,di=new N,Kc=new N,fi=new N,jr=new N,Xr=new N,bp=new N,$c=new N,Zc=new N,Qc=new N;let Eo=!1;class Yn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Wn.subVectors(r,n),di.subVectors(i,n),Kc.subVectors(e,n);const a=Wn.dot(Wn),o=Wn.dot(di),l=Wn.dot(Kc),c=di.dot(di),h=di.dot(Kc),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-o*h)*f,v=(a*h-o*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,n,i,r,s,a,o,l){return Eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Eo=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),di.subVectors(e,n),Wn.cross(di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Wn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Eo=!0),Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;jr.subVectors(r,i),Xr.subVectors(s,i),$c.subVectors(e,i);const l=jr.dot($c),c=Xr.dot($c);if(l<=0&&c<=0)return n.copy(i);Zc.subVectors(e,r);const h=jr.dot(Zc),d=Xr.dot(Zc);if(h>=0&&d<=h)return n.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(jr,a);Qc.subVectors(e,s);const p=jr.dot(Qc),v=Xr.dot(Qc);if(v>=0&&p<=v)return n.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Xr,o);const m=h*v-p*d;if(m<=0&&d-h>=0&&p-v>=0)return bp.subVectors(s,r),o=(d-h)/(d-h+(p-v)),n.copy(r).addScaledVector(bp,o);const u=1/(m+x+f);return a=x*u,o=f*u,n.copy(i).addScaledVector(jr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},wo={h:0,s:0,l:0};function Jc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class De{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=md(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Jc(a,s,e+1/3),this.g=Jc(a,s,e),this.b=Jc(a,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ot){const i=$0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}copyLinearToSRGB(e){return this.r=Gc(e.r),this.g=Gc(e.g),this.b=Gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return nt.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Zt(Kt.r*255,0,255))*65536+Math.round(Zt(Kt.g*255,0,255))*256+Math.round(Zt(Kt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Ot){nt.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==Ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+n,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ni),e.getHSL(wo);const i=_a(Ni.h,wo.h,n),r=_a(Ni.s,wo.s,n),s=_a(Ni.l,wo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new De;De.NAMES=$0;let wM=0;class Fr extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=Ss,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=lh,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=El,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oh&&(i.blendSrc=this.blendSrc),this.blendDst!==lh&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==El&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ct extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=N0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new N,To=new Ye;class Cn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=gp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)To.fromBufferAttribute(this,n),To.applyMatrix3(e),this.setXY(n,To.x,To.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=es(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=es(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=es(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=es(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=es(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gp&&(e.usage=this.usage),e}}class Z0 extends Cn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Q0 extends Cn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Bt extends Cn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let TM=0;const Nn=new wt,eu=new zt,qr=new N,yn=new sr,ta=new sr,Ut=new N;class vn extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(j0(e)?Q0:Z0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return eu.lookAt(e),eu.updateMatrix(),this.applyMatrix4(eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ta.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(yn.min,ta.min),yn.expandByPoint(Ut),Ut.addVectors(yn.max,ta.max),yn.expandByPoint(Ut)):(yn.expandByPoint(ta.min),yn.expandByPoint(ta.max))}yn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ut.fromBufferAttribute(o,c),l&&(qr.fromBufferAttribute(e,c),Ut.add(qr)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new N,h[w]=new N;const d=new N,f=new N,p=new N,v=new Ye,x=new Ye,m=new Ye,u=new N,_=new N;function g(w,z,W){d.fromArray(r,w*3),f.fromArray(r,z*3),p.fromArray(r,W*3),v.fromArray(a,w*2),x.fromArray(a,z*2),m.fromArray(a,W*2),f.sub(d),p.sub(d),x.sub(v),m.sub(v);const Q=1/(x.x*m.y-m.x*x.y);isFinite(Q)&&(u.copy(f).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(Q),_.copy(p).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(Q),c[w].add(u),c[z].add(u),c[W].add(u),h[w].add(_),h[z].add(_),h[W].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let w=0,z=M.length;w<z;++w){const W=M[w],Q=W.start,P=W.count;for(let O=Q,j=Q+P;O<j;O+=3)g(i[O+0],i[O+1],i[O+2])}const b=new N,A=new N,C=new N,D=new N;function E(w){C.fromArray(s,w*3),D.copy(C);const z=c[w];b.copy(z),b.sub(C.multiplyScalar(C.dot(z))).normalize(),A.crossVectors(D,z);const Q=A.dot(h[w])<0?-1:1;l[w*4]=b.x,l[w*4+1]=b.y,l[w*4+2]=b.z,l[w*4+3]=Q}for(let w=0,z=M.length;w<z;++w){const W=M[w],Q=W.start,P=W.count;for(let O=Q,j=Q+P;O<j;O+=3)E(i[O+0]),E(i[O+1]),E(i[O+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,h=new N,d=new N;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let u=0;u<h;u++)f[v++]=c[p++]}return new Cn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lp=new wt,ur=new gd,Ao=new Ya,Pp=new N,Yr=new N,Kr=new N,$r=new N,tu=new N,Co=new N,Ro=new Ye,bo=new Ye,Lo=new Ye,Np=new N,Dp=new N,Ip=new N,Po=new N,No=new N;class Y extends zt{constructor(e=new vn,n=new ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Co.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(tu.fromBufferAttribute(d,e),a?Co.addScaledVector(tu,h):Co.addScaledVector(tu.sub(n),h))}n.add(Co)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(s),ur.copy(e.ray).recast(e.near),!(Ao.containsPoint(ur.origin)===!1&&(ur.intersectSphere(Ao,Pp)===null||ur.origin.distanceToSquared(Pp)>(e.far-e.near)**2))&&(Lp.copy(s).invert(),ur.copy(e.ray).applyMatrix4(Lp),!(i.boundingBox!==null&&ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ur)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],u=a[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,b=g;M<b;M+=3){const A=o.getX(M),C=o.getX(M+1),D=o.getX(M+2);r=Do(this,u,e,i,c,h,d,A,C,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const _=o.getX(m),g=o.getX(m+1),M=o.getX(m+2);r=Do(this,a,e,i,c,h,d,_,g,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],u=a[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,b=g;M<b;M+=3){const A=M,C=M+1,D=M+2;r=Do(this,u,e,i,c,h,d,A,C,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const _=m,g=m+1,M=m+2;r=Do(this,a,e,i,c,h,d,_,g,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function AM(t,e,n,i,r,s,a,o){let l;if(e.side===mn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===tr,o),l===null)return null;No.copy(o),No.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(No);return c<n.near||c>n.far?null:{distance:c,point:No.clone(),object:t}}function Do(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Yr),t.getVertexPosition(l,Kr),t.getVertexPosition(c,$r);const h=AM(t,e,n,i,Yr,Kr,$r,Po);if(h){r&&(Ro.fromBufferAttribute(r,o),bo.fromBufferAttribute(r,l),Lo.fromBufferAttribute(r,c),h.uv=Yn.getInterpolation(Po,Yr,Kr,$r,Ro,bo,Lo,new Ye)),s&&(Ro.fromBufferAttribute(s,o),bo.fromBufferAttribute(s,l),Lo.fromBufferAttribute(s,c),h.uv1=Yn.getInterpolation(Po,Yr,Kr,$r,Ro,bo,Lo,new Ye),h.uv2=h.uv1),a&&(Np.fromBufferAttribute(a,o),Dp.fromBufferAttribute(a,l),Ip.fromBufferAttribute(a,c),h.normal=Yn.getInterpolation(Po,Yr,Kr,$r,Np,Dp,Ip,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};Yn.getNormal(Yr,Kr,$r,d.normal),h.face=d}return h}class ue extends vn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(d,2));function v(x,m,u,_,g,M,b,A,C,D,E){const w=M/C,z=b/D,W=M/2,Q=b/2,P=A/2,O=C+1,j=D+1;let K=0,I=0;const k=new N;for(let B=0;B<j;B++){const $=B*z-Q;for(let J=0;J<O;J++){const q=J*w-W;k[x]=q*_,k[m]=$*g,k[u]=P,c.push(k.x,k.y,k.z),k[x]=0,k[m]=0,k[u]=A>0?1:-1,h.push(k.x,k.y,k.z),d.push(J/C),d.push(1-B/D),K+=1}}for(let B=0;B<D;B++)for(let $=0;$<C;$++){const J=f+$+O*B,q=f+$+O*(B+1),Z=f+($+1)+O*(B+1),oe=f+($+1)+O*B;l.push(J,q,oe),l.push(q,Z,oe),I+=6}o.addGroup(p,I,E),p+=I,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ue(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=Us(t[n]);for(const r in i)e[r]=i[r]}return e}function CM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function J0(t){return t.getRenderTarget()===null?t.outputColorSpace:nt.workingColorSpace}const RM={clone:Us,merge:nn};var bM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dr extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bM,this.fragmentShader=LM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=CM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ev extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class En extends ev{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ba*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(va*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Zr=-90,Qr=1;class PM extends zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(Zr,Qr,e,n);r.layers=this.layers,this.add(r);const s=new En(Zr,Qr,e,n);s.layers=this.layers,this.add(s);const a=new En(Zr,Qr,e,n);a.layers=this.layers,this.add(a);const o=new En(Zr,Qr,e,n);o.layers=this.layers,this.add(o);const l=new En(Zr,Qr,e,n);l.layers=this.layers,this.add(l);const c=new En(Zr,Qr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(d,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class tv extends gn{constructor(e,n,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Ns,super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class NM extends Nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(xa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ar?Ot:Fn),this.texture=new tv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Un}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ue(5,5,5),s=new Dr({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:$i});s.uniforms.tEquirect.value=n;const a=new Y(r,s),o=n.minFilter;return n.minFilter===ka&&(n.minFilter=Un),new PM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const nu=new N,DM=new N,IM=new je;class pr{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=nu.subVectors(i,n).cross(DM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(nu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||IM.getNormalMatrix(e),r=this.coplanarPoint(nu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Ya,Io=new N;class vd{constructor(e=new pr,n=new pr,i=new pr,r=new pr,s=new pr,a=new pr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=xi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],p=r[8],v=r[9],x=r[10],m=r[11],u=r[12],_=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,m-p,M-u).normalize(),i[1].setComponents(l+s,f+c,m+p,M+u).normalize(),i[2].setComponents(l+a,f+h,m+v,M+_).normalize(),i[3].setComponents(l-a,f-h,m-v,M-_).normalize(),i[4].setComponents(l-o,f-d,m-x,M-g).normalize(),n===xi)i[5].setComponents(l+o,f+d,m+x,M+g).normalize();else if(n===Rl)i[5].setComponents(o,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Io.x=r.normal.x>0?e.max.x:e.min.x,Io.y=r.normal.y>0?e.max.y:e.min.y,Io.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function UM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,f=c.usage,p=d.byteLength,v=t.createBuffer();t.bindBuffer(h,v),t.bufferData(h,d,f),c.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,h,d){const f=h.array,p=h._updateRange,v=h.updateRanges;if(t.bindBuffer(d,c),p.count===-1&&v.length===0&&t.bufferSubData(d,0,f),v.length!==0){for(let x=0,m=v.length;x<m;x++){const u=v[x];n?t.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):t.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):t.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}class Gi extends vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,d=e/o,f=n/l,p=[],v=[],x=[],m=[];for(let u=0;u<h;u++){const _=u*f-a;for(let g=0;g<c;g++){const M=g*d-s;v.push(M,-_,0),x.push(0,0,1),m.push(g/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<o;_++){const g=_+c*u,M=_+c*(u+1),b=_+1+c*(u+1),A=_+1+c*u;p.push(g,M,A),p.push(M,b,A)}this.setIndex(p),this.setAttribute("position",new Bt(v,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.width,e.height,e.widthSegments,e.heightSegments)}}var FM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OM=`#ifdef USE_ALPHAHASH
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
#endif`,kM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,GM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HM=`#ifdef USE_AOMAP
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
#endif`,VM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WM=`#ifdef USE_BATCHING
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
#endif`,jM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,XM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KM=`#ifdef USE_IRIDESCENCE
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
#endif`,$M=`#ifdef USE_BUMPMAP
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
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sS=`#define PI 3.141592653589793
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
} // validated`,aS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oS=`vec3 transformedNormal = objectNormal;
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
#endif`,lS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dS="gl_FragColor = linearToOutputTexel( gl_FragColor );",fS=`
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
}`,pS=`#ifdef USE_ENVMAP
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
#endif`,mS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gS=`#ifdef USE_ENVMAP
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
#endif`,vS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_S=`#ifdef USE_ENVMAP
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
#endif`,xS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ES=`#ifdef USE_GRADIENTMAP
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
}`,wS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,TS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RS=`uniform bool receiveShadow;
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
#endif`,bS=`#ifdef USE_ENVMAP
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
#endif`,LS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IS=`PhysicalMaterial material;
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
#endif`,US=`struct PhysicalMaterial {
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
}`,FS=`
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
#endif`,OS=`#if defined( RE_IndirectDiffuse )
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
#endif`,kS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,HS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,VS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XS=`#if defined( USE_POINTS_UV )
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
#endif`,qS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$S=`#ifdef USE_MORPHNORMALS
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
#endif`,ZS=`#ifdef USE_MORPHTARGETS
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
#endif`,QS=`#ifdef USE_MORPHTARGETS
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
#endif`,JS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,e1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,t1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r1=`#ifdef USE_NORMALMAP
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
#endif`,s1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y1=`float getShadowMask() {
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
}`,M1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S1=`#ifdef USE_SKINNING
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
#endif`,E1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w1=`#ifdef USE_SKINNING
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
#endif`,T1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b1=`#ifdef USE_TRANSMISSION
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
#endif`,L1=`#ifdef USE_TRANSMISSION
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const U1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F1=`uniform sampler2D t2D;
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
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`#include <common>
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
}`,H1=`#if DEPTH_PACKING == 3200
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
}`,V1=`#define DISTANCE
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
}`,W1=`#define DISTANCE
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
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`uniform float scale;
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
}`,Y1=`uniform vec3 diffuse;
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
}`,K1=`#include <common>
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
}`,$1=`uniform vec3 diffuse;
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
}`,Z1=`#define LAMBERT
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
}`,Q1=`#define LAMBERT
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
}`,J1=`#define MATCAP
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
}`,eE=`#define MATCAP
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
}`,tE=`#define NORMAL
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
}`,nE=`#define NORMAL
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
}`,iE=`#define PHONG
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
}`,rE=`#define PHONG
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
}`,sE=`#define STANDARD
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
}`,aE=`#define STANDARD
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
}`,oE=`#define TOON
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
}`,lE=`#define TOON
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
}`,cE=`uniform float size;
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
}`,uE=`uniform vec3 diffuse;
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
}`,hE=`#include <common>
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
}`,dE=`uniform vec3 color;
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
}`,fE=`uniform float rotation;
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
}`,pE=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:FM,alphahash_pars_fragment:OM,alphamap_fragment:kM,alphamap_pars_fragment:zM,alphatest_fragment:BM,alphatest_pars_fragment:GM,aomap_fragment:HM,aomap_pars_fragment:VM,batching_pars_vertex:WM,batching_vertex:jM,begin_vertex:XM,beginnormal_vertex:qM,bsdfs:YM,iridescence_fragment:KM,bumpmap_pars_fragment:$M,clipping_planes_fragment:ZM,clipping_planes_pars_fragment:QM,clipping_planes_pars_vertex:JM,clipping_planes_vertex:eS,color_fragment:tS,color_pars_fragment:nS,color_pars_vertex:iS,color_vertex:rS,common:sS,cube_uv_reflection_fragment:aS,defaultnormal_vertex:oS,displacementmap_pars_vertex:lS,displacementmap_vertex:cS,emissivemap_fragment:uS,emissivemap_pars_fragment:hS,colorspace_fragment:dS,colorspace_pars_fragment:fS,envmap_fragment:pS,envmap_common_pars_fragment:mS,envmap_pars_fragment:gS,envmap_pars_vertex:vS,envmap_physical_pars_fragment:bS,envmap_vertex:_S,fog_vertex:xS,fog_pars_vertex:yS,fog_fragment:MS,fog_pars_fragment:SS,gradientmap_pars_fragment:ES,lightmap_fragment:wS,lightmap_pars_fragment:TS,lights_lambert_fragment:AS,lights_lambert_pars_fragment:CS,lights_pars_begin:RS,lights_toon_fragment:LS,lights_toon_pars_fragment:PS,lights_phong_fragment:NS,lights_phong_pars_fragment:DS,lights_physical_fragment:IS,lights_physical_pars_fragment:US,lights_fragment_begin:FS,lights_fragment_maps:OS,lights_fragment_end:kS,logdepthbuf_fragment:zS,logdepthbuf_pars_fragment:BS,logdepthbuf_pars_vertex:GS,logdepthbuf_vertex:HS,map_fragment:VS,map_pars_fragment:WS,map_particle_fragment:jS,map_particle_pars_fragment:XS,metalnessmap_fragment:qS,metalnessmap_pars_fragment:YS,morphcolor_vertex:KS,morphnormal_vertex:$S,morphtarget_pars_vertex:ZS,morphtarget_vertex:QS,normal_fragment_begin:JS,normal_fragment_maps:e1,normal_pars_fragment:t1,normal_pars_vertex:n1,normal_vertex:i1,normalmap_pars_fragment:r1,clearcoat_normal_fragment_begin:s1,clearcoat_normal_fragment_maps:a1,clearcoat_pars_fragment:o1,iridescence_pars_fragment:l1,opaque_fragment:c1,packing:u1,premultiplied_alpha_fragment:h1,project_vertex:d1,dithering_fragment:f1,dithering_pars_fragment:p1,roughnessmap_fragment:m1,roughnessmap_pars_fragment:g1,shadowmap_pars_fragment:v1,shadowmap_pars_vertex:_1,shadowmap_vertex:x1,shadowmask_pars_fragment:y1,skinbase_vertex:M1,skinning_pars_vertex:S1,skinning_vertex:E1,skinnormal_vertex:w1,specularmap_fragment:T1,specularmap_pars_fragment:A1,tonemapping_fragment:C1,tonemapping_pars_fragment:R1,transmission_fragment:b1,transmission_pars_fragment:L1,uv_pars_fragment:P1,uv_pars_vertex:N1,uv_vertex:D1,worldpos_vertex:I1,background_vert:U1,background_frag:F1,backgroundCube_vert:O1,backgroundCube_frag:k1,cube_vert:z1,cube_frag:B1,depth_vert:G1,depth_frag:H1,distanceRGBA_vert:V1,distanceRGBA_frag:W1,equirect_vert:j1,equirect_frag:X1,linedashed_vert:q1,linedashed_frag:Y1,meshbasic_vert:K1,meshbasic_frag:$1,meshlambert_vert:Z1,meshlambert_frag:Q1,meshmatcap_vert:J1,meshmatcap_frag:eE,meshnormal_vert:tE,meshnormal_frag:nE,meshphong_vert:iE,meshphong_frag:rE,meshphysical_vert:sE,meshphysical_frag:aE,meshtoon_vert:oE,meshtoon_frag:lE,points_vert:cE,points_frag:uE,shadow_vert:hE,shadow_frag:dE,sprite_vert:fE,sprite_frag:pE},ae={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ii={basic:{uniforms:nn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:nn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new De(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:nn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:nn([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:nn([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new De(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:nn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:nn([ae.points,ae.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:nn([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:nn([ae.common,ae.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:nn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:nn([ae.sprite,ae.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:nn([ae.common,ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:nn([ae.lights,ae.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ii.physical={uniforms:nn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Uo={r:0,b:0,g:0};function mE(t,e,n,i,r,s,a){const o=new De(0);let l=s===!0?0:1,c,h,d=null,f=0,p=null;function v(m,u){let _=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?x(o,l):g&&g.isColor&&(x(g,1),_=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Jl)?(h===void 0&&(h=new Y(new ue(1,1,1),new Dr({name:"BackgroundCubeMaterial",uniforms:Us(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=nt.getTransfer(g.colorSpace)!==dt,(d!==g||f!==g.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,d=g,f=g.version,p=t.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Y(new Gi(2,2),new Dr({name:"BackgroundMaterial",uniforms:Us(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=nt.getTransfer(g.colorSpace)!==dt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||f!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,f=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,u){m.getRGB(Uo,J0(t)),i.buffers.color.setClear(Uo.r,Uo.g,Uo.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),l=u,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:v}}function gE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,h=!1;function d(P,O,j,K,I){let k=!1;if(a){const B=x(K,j,O);c!==B&&(c=B,p(c.object)),k=u(P,K,j,I),k&&_(P,K,j,I)}else{const B=O.wireframe===!0;(c.geometry!==K.id||c.program!==j.id||c.wireframe!==B)&&(c.geometry=K.id,c.program=j.id,c.wireframe=B,k=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(k||h)&&(h=!1,D(P,O,j,K),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(P){return i.isWebGL2?t.bindVertexArray(P):s.bindVertexArrayOES(P)}function v(P){return i.isWebGL2?t.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function x(P,O,j){const K=j.wireframe===!0;let I=o[P.id];I===void 0&&(I={},o[P.id]=I);let k=I[O.id];k===void 0&&(k={},I[O.id]=k);let B=k[K];return B===void 0&&(B=m(f()),k[K]=B),B}function m(P){const O=[],j=[],K=[];for(let I=0;I<r;I++)O[I]=0,j[I]=0,K[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:j,attributeDivisors:K,object:P,attributes:{},index:null}}function u(P,O,j,K){const I=c.attributes,k=O.attributes;let B=0;const $=j.getAttributes();for(const J in $)if($[J].location>=0){const Z=I[J];let oe=k[J];if(oe===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),Z===void 0||Z.attribute!==oe||oe&&Z.data!==oe.data)return!0;B++}return c.attributesNum!==B||c.index!==K}function _(P,O,j,K){const I={},k=O.attributes;let B=0;const $=j.getAttributes();for(const J in $)if($[J].location>=0){let Z=k[J];Z===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const oe={};oe.attribute=Z,Z&&Z.data&&(oe.data=Z.data),I[J]=oe,B++}c.attributes=I,c.attributesNum=B,c.index=K}function g(){const P=c.newAttributes;for(let O=0,j=P.length;O<j;O++)P[O]=0}function M(P){b(P,0)}function b(P,O){const j=c.newAttributes,K=c.enabledAttributes,I=c.attributeDivisors;j[P]=1,K[P]===0&&(t.enableVertexAttribArray(P),K[P]=1),I[P]!==O&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),I[P]=O)}function A(){const P=c.newAttributes,O=c.enabledAttributes;for(let j=0,K=O.length;j<K;j++)O[j]!==P[j]&&(t.disableVertexAttribArray(j),O[j]=0)}function C(P,O,j,K,I,k,B){B===!0?t.vertexAttribIPointer(P,O,j,I,k):t.vertexAttribPointer(P,O,j,K,I,k)}function D(P,O,j,K){if(i.isWebGL2===!1&&(P.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const I=K.attributes,k=j.getAttributes(),B=O.defaultAttributeValues;for(const $ in k){const J=k[$];if(J.location>=0){let q=I[$];if(q===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(q=P.instanceColor)),q!==void 0){const Z=q.normalized,oe=q.itemSize,ge=n.get(q);if(ge===void 0)continue;const _e=ge.buffer,Pe=ge.type,le=ge.bytesPerElement,pe=i.isWebGL2===!0&&(Pe===t.INT||Pe===t.UNSIGNED_INT||q.gpuType===U0);if(q.isInterleavedBufferAttribute){const ce=q.data,U=ce.stride,it=q.offset;if(ce.isInstancedInterleavedBuffer){for(let Te=0;Te<J.locationSize;Te++)b(J.location+Te,ce.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Te=0;Te<J.locationSize;Te++)M(J.location+Te);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let Te=0;Te<J.locationSize;Te++)C(J.location+Te,oe/J.locationSize,Pe,Z,U*le,(it+oe/J.locationSize*Te)*le,pe)}else{if(q.isInstancedBufferAttribute){for(let ce=0;ce<J.locationSize;ce++)b(J.location+ce,q.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ce=0;ce<J.locationSize;ce++)M(J.location+ce);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let ce=0;ce<J.locationSize;ce++)C(J.location+ce,oe/J.locationSize,Pe,Z,oe*le,oe/J.locationSize*ce*le,pe)}}else if(B!==void 0){const Z=B[$];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(J.location,Z);break;case 3:t.vertexAttrib3fv(J.location,Z);break;case 4:t.vertexAttrib4fv(J.location,Z);break;default:t.vertexAttrib1fv(J.location,Z)}}}}A()}function E(){W();for(const P in o){const O=o[P];for(const j in O){const K=O[j];for(const I in K)v(K[I].object),delete K[I];delete O[j]}delete o[P]}}function w(P){if(o[P.id]===void 0)return;const O=o[P.id];for(const j in O){const K=O[j];for(const I in K)v(K[I].object),delete K[I];delete O[j]}delete o[P.id]}function z(P){for(const O in o){const j=o[O];if(j[P.id]===void 0)continue;const K=j[P.id];for(const I in K)v(K[I].object),delete K[I];delete j[P.id]}}function W(){Q(),h=!0,c!==l&&(c=l,p(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:Q,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:g,enableAttribute:M,disableUnusedAttributes:A}}function vE(t,e,n,i){const r=i.isWebGL2;let s;function a(h){s=h}function o(h,d){t.drawArrays(s,h,d),n.update(d,s,1)}function l(h,d,f){if(f===0)return;let p,v;if(r)p=t,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,h,d,f),n.update(d,s,f)}function c(h,d,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<f;v++)this.render(h[v],d[v]);else{p.multiDrawArraysWEBGL(s,h,0,d,0,f);let v=0;for(let x=0;x<f;x++)v+=d[x];n.update(v,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function _E(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,M=a||e.has("OES_texture_float"),b=g&&M,A=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:A}}function xE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new pr,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?h(null):c();else{const _=s?0:i,g=_*4;let M=u.clippingState||null;l.value=M,M=h(v,f,g,p);for(let b=0;b!==g;++b)M[b]=n[b];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,p,v){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const u=p+x*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,M=p;g!==x;++g,M+=4)a.copy(d[g]).applyMatrix4(_,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function yE(t){let e=new WeakMap;function n(a,o){return o===wl?a.mapping=Ns:o===ch&&(a.mapping=Ds),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===wl||o===ch)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new NM(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class iv extends ev{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fs=4,Up=[.125,.215,.35,.446,.526,.582],vr=20,iu=new iv,Fp=new De;let ru=null,su=0,au=0;const mr=(1+Math.sqrt(5))/2,Jr=1/mr,Op=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,mr,Jr),new N(0,mr,-Jr),new N(Jr,0,mr),new N(-Jr,0,mr),new N(mr,Jr,0),new N(-mr,Jr,0)];class fh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ru=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ru,su,au),e.scissorTest=!1,Fo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ns||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ru=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:za,format:$n,colorSpace:Ti,depthBuffer:!1},r=kp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ME(s)),this._blurMaterial=SE(s,e,n)}return r}_compileMaterial(e){const n=new Y(this._lodPlanes[0],e);this._renderer.compile(n,iu)}_sceneToCubeUV(e,n,i,r){const o=new En(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Fp),h.toneMapping=Zi,h.autoClear=!1;const p=new ct({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),v=new Y(new ue,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Fp),x=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):_===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const g=this._cubeSize;Fo(r,_*g,u>2?g:0,g,g),h.setRenderTarget(r),x&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ns||e.mapping===Ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Y(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Fo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,iu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Op[(r-1)%Op.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Y(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vr-1),x=s/v,m=isFinite(s)?1+Math.floor(h*x):vr;m>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vr}`);const u=[];let _=0;for(let C=0;C<vr;++C){const D=C/x,E=Math.exp(-D*D/2);u.push(E),C===0?_+=E:C<m&&(_+=2*E)}for(let C=0;C<u.length;C++)u[C]=u[C]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:g}=this;f.dTheta.value=v,f.mipInt.value=g-i;const M=this._sizeLods[r],b=3*M*(r>g-fs?r-g+fs:0),A=4*(this._cubeSize-M);Fo(n,b,A,3*M,2*M),l.setRenderTarget(n),l.render(d,iu)}}function ME(t){const e=[],n=[],i=[];let r=t;const s=t-fs+1+Up.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-fs?l=Up[a-t+fs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,x=3,m=2,u=1,_=new Float32Array(x*v*p),g=new Float32Array(m*v*p),M=new Float32Array(u*v*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,D=A>2?0:-1,E=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];_.set(E,x*v*A),g.set(f,m*v*A);const w=[A,A,A,A,A,A];M.set(w,u*v*A)}const b=new vn;b.setAttribute("position",new Cn(_,x)),b.setAttribute("uv",new Cn(g,m)),b.setAttribute("faceIndex",new Cn(M,u)),e.push(b),r>fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function kp(t,e,n){const i=new Nr(t,e,n);return i.texture.mapping=Jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function SE(t,e,n){const i=new Float32Array(vr),r=new N(0,1,0);return new Dr({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_d(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function zp(){return new Dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_d(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Bp(){return new Dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function _d(){return`

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
	`}function EE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===wl||l===ch,h=l===Ns||l===Ds;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return n===null&&(n=new fh(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&r(d)){n===null&&(n=new fh(t));const f=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function wE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function TE(t,e,n,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const x=p[v];for(let m=0,u=x.length;m<u;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,v=d.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let g=0,M=_.length;g<M;g+=3){const b=_[g+0],A=_[g+1],C=_[g+2];f.push(b,A,A,C,C,b)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,M=_.length/3-1;g<M;g+=3){const b=g+0,A=g+1,C=g+2;f.push(b,A,A,C,C,b)}}else return;const m=new(j0(f)?Q0:Z0)(f,1);m.version=x;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function AE(t,e,n,i){const r=i.isWebGL2;let s;function a(p){s=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,v){t.drawElements(s,v,o,p*l),n.update(v,s,1)}function d(p,v,x){if(x===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,v,o,p*l,x),n.update(v,s,x)}function f(p,v,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<x;u++)this.render(p[u]/l,v[u]);else{m.multiDrawElementsWEBGL(s,v,0,o,p,0,x);let u=0;for(let _=0;_<x;_++)u+=v[_];n.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function CE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function RE(t,e){return t[0]-e[0]}function bE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function LE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new mt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=v!==void 0?v.length:0;let m=s.get(h);if(m===void 0||m.count!==x){let O=function(){Q.dispose(),s.delete(h),h.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const g=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let E=0;g===!0&&(E=1),M===!0&&(E=2),b===!0&&(E=3);let w=h.attributes.position.count*E,z=1;w>e.maxTextureSize&&(z=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const W=new Float32Array(w*z*4*x),Q=new Y0(W,w,z,x);Q.type=Bi,Q.needsUpdate=!0;const P=E*4;for(let j=0;j<x;j++){const K=A[j],I=C[j],k=D[j],B=w*z*4*j;for(let $=0;$<K.count;$++){const J=$*P;g===!0&&(a.fromBufferAttribute(K,$),W[B+J+0]=a.x,W[B+J+1]=a.y,W[B+J+2]=a.z,W[B+J+3]=0),M===!0&&(a.fromBufferAttribute(I,$),W[B+J+4]=a.x,W[B+J+5]=a.y,W[B+J+6]=a.z,W[B+J+7]=0),b===!0&&(a.fromBufferAttribute(k,$),W[B+J+8]=a.x,W[B+J+9]=a.y,W[B+J+10]=a.z,W[B+J+11]=k.itemSize===4?a.w:1)}}m={count:x,texture:Q,size:new Ye(w,z)},s.set(h,m),h.addEventListener("dispose",O)}let u=0;for(let g=0;g<f.length;g++)u+=f[g];const _=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",f),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const v=f===void 0?0:f.length;let x=i[h.id];if(x===void 0||x.length!==v){x=[];for(let M=0;M<v;M++)x[M]=[M,0];i[h.id]=x}for(let M=0;M<v;M++){const b=x[M];b[0]=M,b[1]=f[M]}x.sort(bE);for(let M=0;M<8;M++)M<v&&x[M][1]?(o[M][0]=x[M][0],o[M][1]=x[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(RE);const m=h.morphAttributes.position,u=h.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const b=o[M],A=b[0],C=b[1];A!==Number.MAX_SAFE_INTEGER&&C?(m&&h.getAttribute("morphTarget"+M)!==m[A]&&h.setAttribute("morphTarget"+M,m[A]),u&&h.getAttribute("morphNormal"+M)!==u[A]&&h.setAttribute("morphNormal"+M,u[A]),r[M]=C,_+=C):(m&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),u&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),r[M]=0)}const g=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function PE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class rv extends gn{constructor(e,n,i,r,s,a,o,l,c,h){if(h=h!==void 0?h:Tr,h!==Tr&&h!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Tr&&(i=zi),i===void 0&&h===Is&&(i=wr),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const sv=new gn,av=new rv(1,1);av.compareFunction=W0;const ov=new Y0,lv=new mM,cv=new tv,Gp=[],Hp=[],Vp=new Float32Array(16),Wp=new Float32Array(9),jp=new Float32Array(4);function Hs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Gp[r];if(s===void 0&&(s=new Float32Array(r),Gp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function nc(t,e){let n=Hp[e];n===void 0&&(n=new Int32Array(e),Hp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function NE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function DE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function UE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function FE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Pt(n,i))return;jp.set(i),t.uniformMatrix2fv(this.addr,!1,jp),Nt(n,i)}}function OE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Pt(n,i))return;Wp.set(i),t.uniformMatrix3fv(this.addr,!1,Wp),Nt(n,i)}}function kE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Pt(n,i))return;Vp.set(i),t.uniformMatrix4fv(this.addr,!1,Vp),Nt(n,i)}}function zE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function GE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function VE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function XE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function qE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?av:sv;n.setTexture2D(e||s,r)}function YE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||lv,r)}function KE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||cv,r)}function $E(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ov,r)}function ZE(t){switch(t){case 5126:return NE;case 35664:return DE;case 35665:return IE;case 35666:return UE;case 35674:return FE;case 35675:return OE;case 35676:return kE;case 5124:case 35670:return zE;case 35667:case 35671:return BE;case 35668:case 35672:return GE;case 35669:case 35673:return HE;case 5125:return VE;case 36294:return WE;case 36295:return jE;case 36296:return XE;case 35678:case 36198:case 36298:case 36306:case 35682:return qE;case 35679:case 36299:case 36307:return YE;case 35680:case 36300:case 36308:case 36293:return KE;case 36289:case 36303:case 36311:case 36292:return $E}}function QE(t,e){t.uniform1fv(this.addr,e)}function JE(t,e){const n=Hs(e,this.size,2);t.uniform2fv(this.addr,n)}function ew(t,e){const n=Hs(e,this.size,3);t.uniform3fv(this.addr,n)}function tw(t,e){const n=Hs(e,this.size,4);t.uniform4fv(this.addr,n)}function nw(t,e){const n=Hs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function iw(t,e){const n=Hs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function rw(t,e){const n=Hs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function sw(t,e){t.uniform1iv(this.addr,e)}function aw(t,e){t.uniform2iv(this.addr,e)}function ow(t,e){t.uniform3iv(this.addr,e)}function lw(t,e){t.uniform4iv(this.addr,e)}function cw(t,e){t.uniform1uiv(this.addr,e)}function uw(t,e){t.uniform2uiv(this.addr,e)}function hw(t,e){t.uniform3uiv(this.addr,e)}function dw(t,e){t.uniform4uiv(this.addr,e)}function fw(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||sv,s[a])}function pw(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||lv,s[a])}function mw(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||cv,s[a])}function gw(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||ov,s[a])}function vw(t){switch(t){case 5126:return QE;case 35664:return JE;case 35665:return ew;case 35666:return tw;case 35674:return nw;case 35675:return iw;case 35676:return rw;case 5124:case 35670:return sw;case 35667:case 35671:return aw;case 35668:case 35672:return ow;case 35669:case 35673:return lw;case 5125:return cw;case 36294:return uw;case 36295:return hw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return fw;case 35679:case 36299:case 36307:return pw;case 35680:case 36300:case 36308:case 36293:return mw;case 36289:case 36303:case 36311:case 36292:return gw}}class _w{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ZE(n.type)}}class xw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=vw(n.type)}}class yw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const ou=/(\w+)(\])?(\[|\.)?/g;function Xp(t,e){t.seq.push(e),t.map[e.id]=e}function Mw(t,e,n){const i=t.name,r=i.length;for(ou.lastIndex=0;;){const s=ou.exec(i),a=ou.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Xp(n,c===void 0?new _w(o,t,e):new xw(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new yw(o),Xp(n,d)),n=d}}}class Qo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Mw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function qp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Sw=37297;let Ew=0;function ww(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Tw(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===Cl&&n===Al?i="LinearDisplayP3ToLinearSRGB":e===Al&&n===Cl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ti:case ec:return[i,"LinearTransferOETF"];case Ot:case pd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Yp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ww(t.getShaderSource(e),a)}else return r}function Aw(t,e){const n=Tw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Cw(t,e){let n;switch(e){case Ay:n="Linear";break;case Cy:n="Reinhard";break;case Ry:n="OptimizedCineon";break;case D0:n="ACESFilmic";break;case Ly:n="AgX";break;case by:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Rw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ps).join(`
`)}function bw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ps).join(`
`)}function Lw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Pw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ps(t){return t!==""}function Kp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $p(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(t){return t.replace(Nw,Iw)}const Dw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Iw(t,e){let n=ze[e];if(n===void 0){const i=Dw.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ph(n)}const Uw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zp(t){return t.replace(Uw,Fw)}function Fw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ow(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===L0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===P0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function kw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ns:case Ds:e="ENVMAP_TYPE_CUBE";break;case Jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function Bw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case N0:e="ENVMAP_BLENDING_MULTIPLY";break;case wy:e="ENVMAP_BLENDING_MIX";break;case Ty:e="ENVMAP_BLENDING_ADD";break}return e}function Gw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Hw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Ow(n),c=kw(n),h=zw(n),d=Bw(n),f=Gw(n),p=n.isWebGL2?"":Rw(n),v=bw(n),x=Lw(s),m=r.createProgram();let u,_,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ps).join(`
`),u.length>0&&(u+=`
`),_=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ps).join(`
`),_.length>0&&(_+=`
`)):(u=[Qp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),_=[p,Qp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zi?"#define TONE_MAPPING":"",n.toneMapping!==Zi?ze.tonemapping_pars_fragment:"",n.toneMapping!==Zi?Cw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Aw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ps).join(`
`)),a=ph(a),a=Kp(a,n),a=$p(a,n),o=ph(o),o=Kp(o,n),o=$p(o,n),a=Zp(a),o=Zp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===vp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=g+u+a,b=g+_+o,A=qp(r,r.VERTEX_SHADER,M),C=qp(r,r.FRAGMENT_SHADER,b);r.attachShader(m,A),r.attachShader(m,C),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function D(W){if(t.debug.checkShaderErrors){const Q=r.getProgramInfoLog(m).trim(),P=r.getShaderInfoLog(A).trim(),O=r.getShaderInfoLog(C).trim();let j=!0,K=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,A,C);else{const I=Yp(r,A,"vertex"),k=Yp(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+I+`
`+k)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(P===""||O==="")&&(K=!1);K&&(W.diagnostics={runnable:j,programLog:Q,vertexShader:{log:P,prefix:u},fragmentShader:{log:O,prefix:_}})}r.deleteShader(A),r.deleteShader(C),E=new Qo(r,m),w=Pw(r,m)}let E;this.getUniforms=function(){return E===void 0&&D(this),E};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(m,Sw)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ew++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=C,this}let Vw=0;class Ww{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new jw(e),n.set(e,i)),i}}class jw{constructor(e){this.id=Vw++,this.code=e,this.usedTimes=0}}function Xw(t,e,n,i,r,s,a){const o=new K0,l=new Ww,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function m(E,w,z,W,Q){const P=W.fog,O=Q.geometry,j=E.isMeshStandardMaterial?W.environment:null,K=(E.isMeshStandardMaterial?n:e).get(E.envMap||j),I=K&&K.mapping===Jl?K.image.height:null,k=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const B=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$=B!==void 0?B.length:0;let J=0;O.morphAttributes.position!==void 0&&(J=1),O.morphAttributes.normal!==void 0&&(J=2),O.morphAttributes.color!==void 0&&(J=3);let q,Z,oe,ge;if(k){const Jt=ii[k];q=Jt.vertexShader,Z=Jt.fragmentShader}else q=E.vertexShader,Z=E.fragmentShader,l.update(E),oe=l.getVertexShaderID(E),ge=l.getFragmentShaderID(E);const _e=t.getRenderTarget(),Pe=Q.isInstancedMesh===!0,le=Q.isBatchedMesh===!0,pe=!!E.map,ce=!!E.matcap,U=!!K,it=!!E.aoMap,Te=!!E.lightMap,Ue=!!E.bumpMap,Se=!!E.normalMap,gt=!!E.displacementMap,Be=!!E.emissiveMap,R=!!E.metalnessMap,S=!!E.roughnessMap,H=E.anisotropy>0,ie=E.clearcoat>0,te=E.iridescence>0,re=E.sheen>0,Ee=E.transmission>0,fe=H&&!!E.anisotropyMap,xe=ie&&!!E.clearcoatMap,be=ie&&!!E.clearcoatNormalMap,Ge=ie&&!!E.clearcoatRoughnessMap,ee=te&&!!E.iridescenceMap,et=te&&!!E.iridescenceThicknessMap,Xe=re&&!!E.sheenColorMap,Ie=re&&!!E.sheenRoughnessMap,Ae=!!E.specularMap,ye=!!E.specularColorMap,ke=!!E.specularIntensityMap,Ze=Ee&&!!E.transmissionMap,Mt=Ee&&!!E.thicknessMap,Ve=!!E.gradientMap,se=!!E.alphaMap,L=E.alphaTest>0,he=!!E.alphaHash,de=!!E.extensions,Le=!!O.attributes.uv1,Ce=!!O.attributes.uv2,st=!!O.attributes.uv3;let at=Zi;return E.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(at=t.toneMapping),{isWebGL2:h,shaderID:k,shaderType:E.type,shaderName:E.name,vertexShader:q,fragmentShader:Z,defines:E.defines,customVertexShaderID:oe,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:le,instancing:Pe,instancingColor:Pe&&Q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_e===null?t.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Ti,map:pe,matcap:ce,envMap:U,envMapMode:U&&K.mapping,envMapCubeUVHeight:I,aoMap:it,lightMap:Te,bumpMap:Ue,normalMap:Se,displacementMap:f&&gt,emissiveMap:Be,normalMapObjectSpace:Se&&E.normalMapType===Hy,normalMapTangentSpace:Se&&E.normalMapType===V0,metalnessMap:R,roughnessMap:S,anisotropy:H,anisotropyMap:fe,clearcoat:ie,clearcoatMap:xe,clearcoatNormalMap:be,clearcoatRoughnessMap:Ge,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:et,sheen:re,sheenColorMap:Xe,sheenRoughnessMap:Ie,specularMap:Ae,specularColorMap:ye,specularIntensityMap:ke,transmission:Ee,transmissionMap:Ze,thicknessMap:Mt,gradientMap:Ve,opaque:E.transparent===!1&&E.blending===Ss,alphaMap:se,alphaTest:L,alphaHash:he,combine:E.combine,mapUv:pe&&x(E.map.channel),aoMapUv:it&&x(E.aoMap.channel),lightMapUv:Te&&x(E.lightMap.channel),bumpMapUv:Ue&&x(E.bumpMap.channel),normalMapUv:Se&&x(E.normalMap.channel),displacementMapUv:gt&&x(E.displacementMap.channel),emissiveMapUv:Be&&x(E.emissiveMap.channel),metalnessMapUv:R&&x(E.metalnessMap.channel),roughnessMapUv:S&&x(E.roughnessMap.channel),anisotropyMapUv:fe&&x(E.anisotropyMap.channel),clearcoatMapUv:xe&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:be&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:et&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&x(E.sheenRoughnessMap.channel),specularMapUv:Ae&&x(E.specularMap.channel),specularColorMapUv:ye&&x(E.specularColorMap.channel),specularIntensityMapUv:ke&&x(E.specularIntensityMap.channel),transmissionMapUv:Ze&&x(E.transmissionMap.channel),thicknessMapUv:Mt&&x(E.thicknessMap.channel),alphaMapUv:se&&x(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Se||H),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:Ce,vertexUv3s:st,pointsUvs:Q.isPoints===!0&&!!O.attributes.uv&&(pe||se),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Q.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:J,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:at,useLegacyLights:t._useLegacyLights,decodeVideoTexture:pe&&E.map.isVideoTexture===!0&&nt.getTransfer(E.map.colorSpace)===dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===si,flipSided:E.side===mn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:de&&E.extensions.derivatives===!0,extensionFragDepth:de&&E.extensions.fragDepth===!0,extensionDrawBuffers:de&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const z in E.defines)w.push(z),w.push(E.defines[z]);return E.isRawShaderMaterial===!1&&(_(w,E),g(w,E),w.push(t.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function _(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function g(E,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),E.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function M(E){const w=v[E.type];let z;if(w){const W=ii[w];z=RM.clone(W.uniforms)}else z=E.uniforms;return z}function b(E,w){let z;for(let W=0,Q=c.length;W<Q;W++){const P=c[W];if(P.cacheKey===w){z=P,++z.usedTimes;break}}return z===void 0&&(z=new Hw(t,w,E,s),c.push(z)),z}function A(E){if(--E.usedTimes===0){const w=c.indexOf(E);c[w]=c[c.length-1],c.pop(),E.destroy()}}function C(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:b,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:D}}function qw(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Yw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Jp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function em(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,f,p,v,x,m){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},t[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=x,u.group=m),e++,u}function o(d,f,p,v,x,m){const u=a(d,f,p,v,x,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(d,f,p,v,x,m){const u=a(d,f,p,v,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||Yw),i.length>1&&i.sort(f||Jp),r.length>1&&r.sort(f||Jp)}function h(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Kw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new em,t.set(i,[a])):r>=s.length?(a=new em,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function $w(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new De};break;case"SpotLight":n={position:new N,direction:new N,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new De,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new De,groundColor:new De};break;case"RectAreaLight":n={color:new De,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function Zw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Qw=0;function Jw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function eT(t,e){const n=new $w,i=Zw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new N);const s=new N,a=new wt,o=new wt;function l(h,d){let f=0,p=0,v=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let x=0,m=0,u=0,_=0,g=0,M=0,b=0,A=0,C=0,D=0,E=0;h.sort(Jw);const w=d===!0?Math.PI:1;for(let W=0,Q=h.length;W<Q;W++){const P=h[W],O=P.color,j=P.intensity,K=P.distance,I=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=O.r*j*w,p+=O.g*j*w,v+=O.b*j*w;else if(P.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(P.sh.coefficients[k],j);E++}else if(P.isDirectionalLight){const k=n.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const B=P.shadow,$=i.get(P);$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,r.directionalShadow[x]=$,r.directionalShadowMap[x]=I,r.directionalShadowMatrix[x]=P.shadow.matrix,M++}r.directional[x]=k,x++}else if(P.isSpotLight){const k=n.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(O).multiplyScalar(j*w),k.distance=K,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,r.spot[u]=k;const B=P.shadow;if(P.map&&(r.spotLightMap[C]=P.map,C++,B.updateMatrices(P),P.castShadow&&D++),r.spotLightMatrix[u]=B.matrix,P.castShadow){const $=i.get(P);$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,r.spotShadow[u]=$,r.spotShadowMap[u]=I,A++}u++}else if(P.isRectAreaLight){const k=n.get(P);k.color.copy(O).multiplyScalar(j),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),r.rectArea[_]=k,_++}else if(P.isPointLight){const k=n.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity*w),k.distance=P.distance,k.decay=P.decay,P.castShadow){const B=P.shadow,$=i.get(P);$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,$.shadowCameraNear=B.camera.near,$.shadowCameraFar=B.camera.far,r.pointShadow[m]=$,r.pointShadowMap[m]=I,r.pointShadowMatrix[m]=P.shadow.matrix,b++}r.point[m]=k,m++}else if(P.isHemisphereLight){const k=n.get(P);k.skyColor.copy(P.color).multiplyScalar(j*w),k.groundColor.copy(P.groundColor).multiplyScalar(j*w),r.hemi[g]=k,g++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=v;const z=r.hash;(z.directionalLength!==x||z.pointLength!==m||z.spotLength!==u||z.rectAreaLength!==_||z.hemiLength!==g||z.numDirectionalShadows!==M||z.numPointShadows!==b||z.numSpotShadows!==A||z.numSpotMaps!==C||z.numLightProbes!==E)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=_,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=A+C-D,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=E,z.directionalLength=x,z.pointLength=m,z.spotLength=u,z.rectAreaLength=_,z.hemiLength=g,z.numDirectionalShadows=M,z.numPointShadows=b,z.numSpotShadows=A,z.numSpotMaps=C,z.numLightProbes=E,r.version=Qw++)}function c(h,d){let f=0,p=0,v=0,x=0,m=0;const u=d.matrixWorldInverse;for(let _=0,g=h.length;_<g;_++){const M=h[_];if(M.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),f++}else if(M.isSpotLight){const b=r.spot[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),v++}else if(M.isRectAreaLight){const b=r.rectArea[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),o.identity(),a.copy(M.matrixWorld),a.premultiply(u),o.extractRotation(a),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){const b=r.point[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),p++}else if(M.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function tm(t,e){const n=new eT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function tT(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new tm(t,e),n.set(s,[l])):a>=o.length?(l=new tm(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class nT extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=By,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iT extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sT=`uniform sampler2D shadow_pass;
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
}`;function aT(t,e,n){let i=new vd;const r=new Ye,s=new Ye,a=new mt,o=new nT({depthPacking:Gy}),l=new iT,c={},h=n.maxTextureSize,d={[tr]:mn,[mn]:tr,[si]:si},f=new Dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:rT,fragmentShader:sT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new vn;v.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Y(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=L0;let u=this.type;this.render=function(A,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),w=t.getActiveCubeFace(),z=t.getActiveMipmapLevel(),W=t.state;W.setBlending($i),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Q=u!==pi&&this.type===pi,P=u===pi&&this.type!==pi;for(let O=0,j=A.length;O<j;O++){const K=A[O],I=K.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const k=I.getFrameExtents();if(r.multiply(k),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/k.x),r.x=s.x*k.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/k.y),r.y=s.y*k.y,I.mapSize.y=s.y)),I.map===null||Q===!0||P===!0){const $=this.type!==pi?{minFilter:sn,magFilter:sn}:{};I.map!==null&&I.map.dispose(),I.map=new Nr(r.x,r.y,$),I.map.texture.name=K.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const B=I.getViewportCount();for(let $=0;$<B;$++){const J=I.getViewport($);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),W.viewport(a),I.updateMatrices(K,$),i=I.getFrustum(),M(C,D,I.camera,K,this.type)}I.isPointLightShadow!==!0&&this.type===pi&&_(I,D),I.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(E,w,z)};function _(A,C){const D=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Nr(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,D,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,D,p,x,null)}function g(A,C,D,E){let w=null;const z=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)w=z;else if(w=D.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const W=w.uuid,Q=C.uuid;let P=c[W];P===void 0&&(P={},c[W]=P);let O=P[Q];O===void 0&&(O=w.clone(),P[Q]=O,C.addEventListener("dispose",b)),w=O}if(w.visible=C.visible,w.wireframe=C.wireframe,E===pi?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:d[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const W=t.properties.get(w);W.light=D}return w}function M(A,C,D,E,w){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===pi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const Q=e.update(A),P=A.material;if(Array.isArray(P)){const O=Q.groups;for(let j=0,K=O.length;j<K;j++){const I=O[j],k=P[I.materialIndex];if(k&&k.visible){const B=g(A,k,E,w);A.onBeforeShadow(t,A,C,D,Q,B,I),t.renderBufferDirect(D,null,Q,B,A,I),A.onAfterShadow(t,A,C,D,Q,B,I)}}}else if(P.visible){const O=g(A,P,E,w);A.onBeforeShadow(t,A,C,D,Q,O,null),t.renderBufferDirect(D,null,Q,O,A,null),A.onAfterShadow(t,A,C,D,Q,O,null)}}const W=A.children;for(let Q=0,P=W.length;Q<P;Q++)M(W[Q],C,D,E,w)}function b(A){A.target.removeEventListener("dispose",b);for(const D in c){const E=c[D],w=A.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}function oT(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const he=new mt;let de=null;const Le=new mt(0,0,0,0);return{setMask:function(Ce){de!==Ce&&!L&&(t.colorMask(Ce,Ce,Ce,Ce),de=Ce)},setLocked:function(Ce){L=Ce},setClear:function(Ce,st,at,Dt,Jt){Jt===!0&&(Ce*=Dt,st*=Dt,at*=Dt),he.set(Ce,st,at,Dt),Le.equals(he)===!1&&(t.clearColor(Ce,st,at,Dt),Le.copy(he))},reset:function(){L=!1,de=null,Le.set(-1,0,0,0)}}}function s(){let L=!1,he=null,de=null,Le=null;return{setTest:function(Ce){Ce?le(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(Ce){he!==Ce&&!L&&(t.depthMask(Ce),he=Ce)},setFunc:function(Ce){if(de!==Ce){switch(Ce){case vy:t.depthFunc(t.NEVER);break;case _y:t.depthFunc(t.ALWAYS);break;case xy:t.depthFunc(t.LESS);break;case El:t.depthFunc(t.LEQUAL);break;case yy:t.depthFunc(t.EQUAL);break;case My:t.depthFunc(t.GEQUAL);break;case Sy:t.depthFunc(t.GREATER);break;case Ey:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=Ce}},setLocked:function(Ce){L=Ce},setClear:function(Ce){Le!==Ce&&(t.clearDepth(Ce),Le=Ce)},reset:function(){L=!1,he=null,de=null,Le=null}}}function a(){let L=!1,he=null,de=null,Le=null,Ce=null,st=null,at=null,Dt=null,Jt=null;return{setTest:function(ot){L||(ot?le(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(ot){he!==ot&&!L&&(t.stencilMask(ot),he=ot)},setFunc:function(ot,en,ei){(de!==ot||Le!==en||Ce!==ei)&&(t.stencilFunc(ot,en,ei),de=ot,Le=en,Ce=ei)},setOp:function(ot,en,ei){(st!==ot||at!==en||Dt!==ei)&&(t.stencilOp(ot,en,ei),st=ot,at=en,Dt=ei)},setLocked:function(ot){L=ot},setClear:function(ot){Jt!==ot&&(t.clearStencil(ot),Jt=ot)},reset:function(){L=!1,he=null,de=null,Le=null,Ce=null,st=null,at=null,Dt=null,Jt=null}}}const o=new r,l=new s,c=new a,h=new WeakMap,d=new WeakMap;let f={},p={},v=new WeakMap,x=[],m=null,u=!1,_=null,g=null,M=null,b=null,A=null,C=null,D=null,E=new De(0,0,0),w=0,z=!1,W=null,Q=null,P=null,O=null,j=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,k=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(B)[1]),I=k>=1):B.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),I=k>=2);let $=null,J={};const q=t.getParameter(t.SCISSOR_BOX),Z=t.getParameter(t.VIEWPORT),oe=new mt().fromArray(q),ge=new mt().fromArray(Z);function _e(L,he,de,Le){const Ce=new Uint8Array(4),st=t.createTexture();t.bindTexture(L,st),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let at=0;at<de;at++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(he,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,Ce):t.texImage2D(he+at,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ce);return st}const Pe={};Pe[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),Pe[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pe[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Pe[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),le(t.DEPTH_TEST),l.setFunc(El),Be(!1),R(kf),le(t.CULL_FACE),Se($i);function le(L){f[L]!==!0&&(t.enable(L),f[L]=!0)}function pe(L){f[L]!==!1&&(t.disable(L),f[L]=!1)}function ce(L,he){return p[L]!==he?(t.bindFramebuffer(L,he),p[L]=he,i&&(L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=he),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=he)),!0):!1}function U(L,he){let de=x,Le=!1;if(L)if(de=v.get(he),de===void 0&&(de=[],v.set(he,de)),L.isWebGLMultipleRenderTargets){const Ce=L.texture;if(de.length!==Ce.length||de[0]!==t.COLOR_ATTACHMENT0){for(let st=0,at=Ce.length;st<at;st++)de[st]=t.COLOR_ATTACHMENT0+st;de.length=Ce.length,Le=!0}}else de[0]!==t.COLOR_ATTACHMENT0&&(de[0]=t.COLOR_ATTACHMENT0,Le=!0);else de[0]!==t.BACK&&(de[0]=t.BACK,Le=!0);Le&&(n.isWebGL2?t.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function it(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const Te={[gr]:t.FUNC_ADD,[ny]:t.FUNC_SUBTRACT,[iy]:t.FUNC_REVERSE_SUBTRACT};if(i)Te[Gf]=t.MIN,Te[Hf]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Te[Gf]=L.MIN_EXT,Te[Hf]=L.MAX_EXT)}const Ue={[ry]:t.ZERO,[sy]:t.ONE,[ay]:t.SRC_COLOR,[oh]:t.SRC_ALPHA,[dy]:t.SRC_ALPHA_SATURATE,[uy]:t.DST_COLOR,[ly]:t.DST_ALPHA,[oy]:t.ONE_MINUS_SRC_COLOR,[lh]:t.ONE_MINUS_SRC_ALPHA,[hy]:t.ONE_MINUS_DST_COLOR,[cy]:t.ONE_MINUS_DST_ALPHA,[fy]:t.CONSTANT_COLOR,[py]:t.ONE_MINUS_CONSTANT_COLOR,[my]:t.CONSTANT_ALPHA,[gy]:t.ONE_MINUS_CONSTANT_ALPHA};function Se(L,he,de,Le,Ce,st,at,Dt,Jt,ot){if(L===$i){u===!0&&(pe(t.BLEND),u=!1);return}if(u===!1&&(le(t.BLEND),u=!0),L!==ty){if(L!==_||ot!==z){if((g!==gr||A!==gr)&&(t.blendEquation(t.FUNC_ADD),g=gr,A=gr),ot)switch(L){case Ss:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ps:t.blendFunc(t.ONE,t.ONE);break;case zf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ss:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ps:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case zf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,b=null,C=null,D=null,E.set(0,0,0),w=0,_=L,z=ot}return}Ce=Ce||he,st=st||de,at=at||Le,(he!==g||Ce!==A)&&(t.blendEquationSeparate(Te[he],Te[Ce]),g=he,A=Ce),(de!==M||Le!==b||st!==C||at!==D)&&(t.blendFuncSeparate(Ue[de],Ue[Le],Ue[st],Ue[at]),M=de,b=Le,C=st,D=at),(Dt.equals(E)===!1||Jt!==w)&&(t.blendColor(Dt.r,Dt.g,Dt.b,Jt),E.copy(Dt),w=Jt),_=L,z=!1}function gt(L,he){L.side===si?pe(t.CULL_FACE):le(t.CULL_FACE);let de=L.side===mn;he&&(de=!de),Be(de),L.blending===Ss&&L.transparent===!1?Se($i):Se(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Le=L.stencilWrite;c.setTest(Le),Le&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),H(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){W!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),W=L)}function R(L){L!==Jx?(le(t.CULL_FACE),L!==Q&&(L===kf?t.cullFace(t.BACK):L===ey?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),Q=L}function S(L){L!==P&&(I&&t.lineWidth(L),P=L)}function H(L,he,de){L?(le(t.POLYGON_OFFSET_FILL),(O!==he||j!==de)&&(t.polygonOffset(he,de),O=he,j=de)):pe(t.POLYGON_OFFSET_FILL)}function ie(L){L?le(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function te(L){L===void 0&&(L=t.TEXTURE0+K-1),$!==L&&(t.activeTexture(L),$=L)}function re(L,he,de){de===void 0&&($===null?de=t.TEXTURE0+K-1:de=$);let Le=J[de];Le===void 0&&(Le={type:void 0,texture:void 0},J[de]=Le),(Le.type!==L||Le.texture!==he)&&($!==de&&(t.activeTexture(de),$=de),t.bindTexture(L,he||Pe[L]),Le.type=L,Le.texture=he)}function Ee(){const L=J[$];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function fe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(L){oe.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),oe.copy(L))}function Ze(L){ge.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),ge.copy(L))}function Mt(L,he){let de=d.get(he);de===void 0&&(de=new WeakMap,d.set(he,de));let Le=de.get(L);Le===void 0&&(Le=t.getUniformBlockIndex(he,L.name),de.set(L,Le))}function Ve(L,he){const Le=d.get(he).get(L);h.get(he)!==Le&&(t.uniformBlockBinding(he,Le,L.__bindingPointIndex),h.set(he,Le))}function se(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},$=null,J={},p={},v=new WeakMap,x=[],m=null,u=!1,_=null,g=null,M=null,b=null,A=null,C=null,D=null,E=new De(0,0,0),w=0,z=!1,W=null,Q=null,P=null,O=null,j=null,oe.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:le,disable:pe,bindFramebuffer:ce,drawBuffers:U,useProgram:it,setBlending:Se,setMaterial:gt,setFlipSided:Be,setCullFace:R,setLineWidth:S,setPolygonOffset:H,setScissorTest:ie,activeTexture:te,bindTexture:re,unbindTexture:Ee,compressedTexImage2D:fe,compressedTexImage3D:xe,texImage2D:Ae,texImage3D:ye,updateUBOMapping:Mt,uniformBlockBinding:Ve,texStorage2D:Xe,texStorage3D:Ie,texSubImage2D:be,texSubImage3D:Ge,compressedTexSubImage2D:ee,compressedTexSubImage3D:et,scissor:ke,viewport:Ze,reset:se}}function lT(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,S){return p?new OffscreenCanvas(R,S):Ll("canvas")}function x(R,S,H,ie){let te=1;if((R.width>ie||R.height>ie)&&(te=ie/Math.max(R.width,R.height)),te<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const re=S?bl:Math.floor,Ee=re(te*R.width),fe=re(te*R.height);d===void 0&&(d=v(Ee,fe));const xe=H?v(Ee,fe):d;return xe.width=Ee,xe.height=fe,xe.getContext("2d").drawImage(R,0,0,Ee,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ee+"x"+fe+")."),xe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return dh(R.width)&&dh(R.height)}function u(R){return o?!1:R.wrapS!==Kn||R.wrapT!==Kn||R.minFilter!==sn&&R.minFilter!==Un}function _(R,S){return R.generateMipmaps&&S&&R.minFilter!==sn&&R.minFilter!==Un}function g(R){t.generateMipmap(R)}function M(R,S,H,ie,te=!1){if(o===!1)return S;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=S;if(S===t.RED&&(H===t.FLOAT&&(re=t.R32F),H===t.HALF_FLOAT&&(re=t.R16F),H===t.UNSIGNED_BYTE&&(re=t.R8)),S===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(re=t.R8UI),H===t.UNSIGNED_SHORT&&(re=t.R16UI),H===t.UNSIGNED_INT&&(re=t.R32UI),H===t.BYTE&&(re=t.R8I),H===t.SHORT&&(re=t.R16I),H===t.INT&&(re=t.R32I)),S===t.RG&&(H===t.FLOAT&&(re=t.RG32F),H===t.HALF_FLOAT&&(re=t.RG16F),H===t.UNSIGNED_BYTE&&(re=t.RG8)),S===t.RGBA){const Ee=te?Tl:nt.getTransfer(ie);H===t.FLOAT&&(re=t.RGBA32F),H===t.HALF_FLOAT&&(re=t.RGBA16F),H===t.UNSIGNED_BYTE&&(re=Ee===dt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function b(R,S,H){return _(R,H)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){return R===sn||R===Vf||R===Ic?t.NEAREST:t.LINEAR}function C(R){const S=R.target;S.removeEventListener("dispose",C),E(S),S.isVideoTexture&&h.delete(S)}function D(R){const S=R.target;S.removeEventListener("dispose",D),z(S)}function E(R){const S=i.get(R);if(S.__webglInit===void 0)return;const H=R.source,ie=f.get(H);if(ie){const te=ie[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(R),Object.keys(ie).length===0&&f.delete(H)}i.remove(R)}function w(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const H=R.source,ie=f.get(H);delete ie[S.__cacheKey],a.memory.textures--}function z(R){const S=R.texture,H=i.get(R),ie=i.get(S);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(H.__webglFramebuffer[te]))for(let re=0;re<H.__webglFramebuffer[te].length;re++)t.deleteFramebuffer(H.__webglFramebuffer[te][re]);else t.deleteFramebuffer(H.__webglFramebuffer[te]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[te])}else{if(Array.isArray(H.__webglFramebuffer))for(let te=0;te<H.__webglFramebuffer.length;te++)t.deleteFramebuffer(H.__webglFramebuffer[te]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let te=0;te<H.__webglColorRenderbuffer.length;te++)H.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[te]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let te=0,re=S.length;te<re;te++){const Ee=i.get(S[te]);Ee.__webglTexture&&(t.deleteTexture(Ee.__webglTexture),a.memory.textures--),i.remove(S[te])}i.remove(S),i.remove(R)}let W=0;function Q(){W=0}function P(){const R=W;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),W+=1,R}function O(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function j(R,S){const H=i.get(R);if(R.isVideoTexture&&gt(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(H,R,S);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+S)}function K(R,S){const H=i.get(R);if(R.version>0&&H.__version!==R.version){oe(H,R,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+S)}function I(R,S){const H=i.get(R);if(R.version>0&&H.__version!==R.version){oe(H,R,S);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+S)}function k(R,S){const H=i.get(R);if(R.version>0&&H.__version!==R.version){ge(H,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+S)}const B={[Mr]:t.REPEAT,[Kn]:t.CLAMP_TO_EDGE,[uh]:t.MIRRORED_REPEAT},$={[sn]:t.NEAREST,[Vf]:t.NEAREST_MIPMAP_NEAREST,[Ic]:t.NEAREST_MIPMAP_LINEAR,[Un]:t.LINEAR,[Py]:t.LINEAR_MIPMAP_NEAREST,[ka]:t.LINEAR_MIPMAP_LINEAR},J={[Vy]:t.NEVER,[Ky]:t.ALWAYS,[Wy]:t.LESS,[W0]:t.LEQUAL,[jy]:t.EQUAL,[Yy]:t.GEQUAL,[Xy]:t.GREATER,[qy]:t.NOTEQUAL};function q(R,S,H){if(H?(t.texParameteri(R,t.TEXTURE_WRAP_S,B[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,B[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,B[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,$[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,$[S.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Kn||S.wrapT!==Kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,A(S.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==sn&&S.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===sn||S.minFilter!==Ic&&S.minFilter!==ka||S.type===Bi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===za&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Z(R,S){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C));const ie=S.source;let te=f.get(ie);te===void 0&&(te={},f.set(ie,te));const re=O(S);if(re!==R.__cacheKey){te[re]===void 0&&(te[re]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),te[re].usedTimes++;const Ee=te[R.__cacheKey];Ee!==void 0&&(te[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(S)),R.__cacheKey=re,R.__webglTexture=te[re].texture}return H}function oe(R,S,H){let ie=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=t.TEXTURE_3D);const te=Z(R,S),re=S.source;n.bindTexture(ie,R.__webglTexture,t.TEXTURE0+H);const Ee=i.get(re);if(re.version!==Ee.__version||te===!0){n.activeTexture(t.TEXTURE0+H);const fe=nt.getPrimaries(nt.workingColorSpace),xe=S.colorSpace===Fn?null:nt.getPrimaries(S.colorSpace),be=S.colorSpace===Fn||fe===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ge=u(S)&&m(S.image)===!1;let ee=x(S.image,Ge,!1,r.maxTextureSize);ee=Be(S,ee);const et=m(ee)||o,Xe=s.convert(S.format,S.colorSpace);let Ie=s.convert(S.type),Ae=M(S.internalFormat,Xe,Ie,S.colorSpace,S.isVideoTexture);q(ie,S,et);let ye;const ke=S.mipmaps,Ze=o&&S.isVideoTexture!==!0&&Ae!==G0,Mt=Ee.__version===void 0||te===!0,Ve=b(S,ee,et);if(S.isDepthTexture)Ae=t.DEPTH_COMPONENT,o?S.type===Bi?Ae=t.DEPTH_COMPONENT32F:S.type===zi?Ae=t.DEPTH_COMPONENT24:S.type===wr?Ae=t.DEPTH24_STENCIL8:Ae=t.DEPTH_COMPONENT16:S.type===Bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Tr&&Ae===t.DEPTH_COMPONENT&&S.type!==fd&&S.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=zi,Ie=s.convert(S.type)),S.format===Is&&Ae===t.DEPTH_COMPONENT&&(Ae=t.DEPTH_STENCIL,S.type!==wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=wr,Ie=s.convert(S.type))),Mt&&(Ze?n.texStorage2D(t.TEXTURE_2D,1,Ae,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Ae,ee.width,ee.height,0,Xe,Ie,null));else if(S.isDataTexture)if(ke.length>0&&et){Ze&&Mt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ae,ke[0].width,ke[0].height);for(let se=0,L=ke.length;se<L;se++)ye=ke[se],Ze?n.texSubImage2D(t.TEXTURE_2D,se,0,0,ye.width,ye.height,Xe,Ie,ye.data):n.texImage2D(t.TEXTURE_2D,se,Ae,ye.width,ye.height,0,Xe,Ie,ye.data);S.generateMipmaps=!1}else Ze?(Mt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ae,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,Xe,Ie,ee.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,ee.width,ee.height,0,Xe,Ie,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ze&&Mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Ae,ke[0].width,ke[0].height,ee.depth);for(let se=0,L=ke.length;se<L;se++)ye=ke[se],S.format!==$n?Xe!==null?Ze?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,ye.width,ye.height,ee.depth,Xe,ye.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Ae,ye.width,ye.height,ee.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,ye.width,ye.height,ee.depth,Xe,Ie,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Ae,ye.width,ye.height,ee.depth,0,Xe,Ie,ye.data)}else{Ze&&Mt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ae,ke[0].width,ke[0].height);for(let se=0,L=ke.length;se<L;se++)ye=ke[se],S.format!==$n?Xe!==null?Ze?n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,ye.width,ye.height,Xe,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Ae,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage2D(t.TEXTURE_2D,se,0,0,ye.width,ye.height,Xe,Ie,ye.data):n.texImage2D(t.TEXTURE_2D,se,Ae,ye.width,ye.height,0,Xe,Ie,ye.data)}else if(S.isDataArrayTexture)Ze?(Mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Ae,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Xe,Ie,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,ee.width,ee.height,ee.depth,0,Xe,Ie,ee.data);else if(S.isData3DTexture)Ze?(Mt&&n.texStorage3D(t.TEXTURE_3D,Ve,Ae,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Xe,Ie,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,ee.width,ee.height,ee.depth,0,Xe,Ie,ee.data);else if(S.isFramebufferTexture){if(Mt)if(Ze)n.texStorage2D(t.TEXTURE_2D,Ve,Ae,ee.width,ee.height);else{let se=ee.width,L=ee.height;for(let he=0;he<Ve;he++)n.texImage2D(t.TEXTURE_2D,he,Ae,se,L,0,Xe,Ie,null),se>>=1,L>>=1}}else if(ke.length>0&&et){Ze&&Mt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ae,ke[0].width,ke[0].height);for(let se=0,L=ke.length;se<L;se++)ye=ke[se],Ze?n.texSubImage2D(t.TEXTURE_2D,se,0,0,Xe,Ie,ye):n.texImage2D(t.TEXTURE_2D,se,Ae,Xe,Ie,ye);S.generateMipmaps=!1}else Ze?(Mt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ae,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Xe,Ie,ee)):n.texImage2D(t.TEXTURE_2D,0,Ae,Xe,Ie,ee);_(S,et)&&g(ie),Ee.__version=re.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ge(R,S,H){if(S.image.length!==6)return;const ie=Z(R,S),te=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const re=i.get(te);if(te.version!==re.__version||ie===!0){n.activeTexture(t.TEXTURE0+H);const Ee=nt.getPrimaries(nt.workingColorSpace),fe=S.colorSpace===Fn?null:nt.getPrimaries(S.colorSpace),xe=S.colorSpace===Fn||Ee===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const be=S.isCompressedTexture||S.image[0].isCompressedTexture,Ge=S.image[0]&&S.image[0].isDataTexture,ee=[];for(let se=0;se<6;se++)!be&&!Ge?ee[se]=x(S.image[se],!1,!0,r.maxCubemapSize):ee[se]=Ge?S.image[se].image:S.image[se],ee[se]=Be(S,ee[se]);const et=ee[0],Xe=m(et)||o,Ie=s.convert(S.format,S.colorSpace),Ae=s.convert(S.type),ye=M(S.internalFormat,Ie,Ae,S.colorSpace),ke=o&&S.isVideoTexture!==!0,Ze=re.__version===void 0||ie===!0;let Mt=b(S,et,Xe);q(t.TEXTURE_CUBE_MAP,S,Xe);let Ve;if(be){ke&&Ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Mt,ye,et.width,et.height);for(let se=0;se<6;se++){Ve=ee[se].mipmaps;for(let L=0;L<Ve.length;L++){const he=Ve[L];S.format!==$n?Ie!==null?ke?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,0,0,he.width,he.height,Ie,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,ye,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,0,0,he.width,he.height,Ie,Ae,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,ye,he.width,he.height,0,Ie,Ae,he.data)}}}else{Ve=S.mipmaps,ke&&Ze&&(Ve.length>0&&Mt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Mt,ye,ee[0].width,ee[0].height));for(let se=0;se<6;se++)if(Ge){ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ee[se].width,ee[se].height,Ie,Ae,ee[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ye,ee[se].width,ee[se].height,0,Ie,Ae,ee[se].data);for(let L=0;L<Ve.length;L++){const de=Ve[L].image[se].image;ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,0,0,de.width,de.height,Ie,Ae,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,ye,de.width,de.height,0,Ie,Ae,de.data)}}else{ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ie,Ae,ee[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ye,Ie,Ae,ee[se]);for(let L=0;L<Ve.length;L++){const he=Ve[L];ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,0,0,Ie,Ae,he.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,ye,Ie,Ae,he.image[se])}}}_(S,Xe)&&g(t.TEXTURE_CUBE_MAP),re.__version=te.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function _e(R,S,H,ie,te,re){const Ee=s.convert(H.format,H.colorSpace),fe=s.convert(H.type),xe=M(H.internalFormat,Ee,fe,H.colorSpace);if(!i.get(S).__hasExternalTextures){const Ge=Math.max(1,S.width>>re),ee=Math.max(1,S.height>>re);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,re,xe,Ge,ee,S.depth,0,Ee,fe,null):n.texImage2D(te,re,xe,Ge,ee,0,Ee,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Se(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,te,i.get(H).__webglTexture,0,Ue(S)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,te,i.get(H).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(R,S,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let ie=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||Se(S)){const te=S.depthTexture;te&&te.isDepthTexture&&(te.type===Bi?ie=t.DEPTH_COMPONENT32F:te.type===zi&&(ie=t.DEPTH_COMPONENT24));const re=Ue(S);Se(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,ie,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ie,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){const ie=Ue(S);H&&Se(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,S.width,S.height):Se(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const ie=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0;te<ie.length;te++){const re=ie[te],Ee=s.convert(re.format,re.colorSpace),fe=s.convert(re.type),xe=M(re.internalFormat,Ee,fe,re.colorSpace),be=Ue(S);H&&Se(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,xe,S.width,S.height):Se(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,xe,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,xe,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const ie=i.get(S.depthTexture).__webglTexture,te=Ue(S);if(S.depthTexture.format===Tr)Se(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(S.depthTexture.format===Is)Se(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function pe(R){const S=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");le(S.__webglFramebuffer,R)}else if(H){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]=t.createRenderbuffer(),Pe(S.__webglDepthbuffer[ie],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Pe(S.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(R,S,H){const ie=i.get(R);S!==void 0&&_e(ie.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&pe(R)}function U(R){const S=R.texture,H=i.get(R),ie=i.get(S);R.addEventListener("dispose",D),R.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=S.version,a.memory.textures++);const te=R.isWebGLCubeRenderTarget===!0,re=R.isWebGLMultipleRenderTargets===!0,Ee=m(R)||o;if(te){H.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[fe]=[];for(let xe=0;xe<S.mipmaps.length;xe++)H.__webglFramebuffer[fe][xe]=t.createFramebuffer()}else H.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)H.__webglFramebuffer[fe]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(re)if(r.drawBuffers){const fe=R.texture;for(let xe=0,be=fe.length;xe<be;xe++){const Ge=i.get(fe[xe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Se(R)===!1){const fe=re?S:[S];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let xe=0;xe<fe.length;xe++){const be=fe[xe];H.__webglColorRenderbuffer[xe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[xe]);const Ge=s.convert(be.format,be.colorSpace),ee=s.convert(be.type),et=M(be.internalFormat,Ge,ee,be.colorSpace,R.isXRRenderTarget===!0),Xe=Ue(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,et,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,H.__webglColorRenderbuffer[xe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Pe(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),q(t.TEXTURE_CUBE_MAP,S,Ee);for(let fe=0;fe<6;fe++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)_e(H.__webglFramebuffer[fe][xe],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else _e(H.__webglFramebuffer[fe],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);_(S,Ee)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){const fe=R.texture;for(let xe=0,be=fe.length;xe<be;xe++){const Ge=fe[xe],ee=i.get(Ge);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),q(t.TEXTURE_2D,Ge,Ee),_e(H.__webglFramebuffer,R,Ge,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,0),_(Ge,Ee)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?fe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(fe,ie.__webglTexture),q(fe,S,Ee),o&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)_e(H.__webglFramebuffer[xe],R,S,t.COLOR_ATTACHMENT0,fe,xe);else _e(H.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,fe,0);_(S,Ee)&&g(fe),n.unbindTexture()}R.depthBuffer&&pe(R)}function it(R){const S=m(R)||o,H=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ie=0,te=H.length;ie<te;ie++){const re=H[ie];if(_(re,S)){const Ee=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,fe=i.get(re).__webglTexture;n.bindTexture(Ee,fe),g(Ee),n.unbindTexture()}}}function Te(R){if(o&&R.samples>0&&Se(R)===!1){const S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],H=R.width,ie=R.height;let te=t.COLOR_BUFFER_BIT;const re=[],Ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(R),xe=R.isWebGLMultipleRenderTargets===!0;if(xe)for(let be=0;be<S.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let be=0;be<S.length;be++){re.push(t.COLOR_ATTACHMENT0+be),R.depthBuffer&&re.push(Ee);const Ge=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Ge===!1&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),xe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[be]),Ge===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ee]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ee])),xe){const ee=i.get(S[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,H,ie,0,0,H,ie,te,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let be=0;be<S.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,fe.__webglColorRenderbuffer[be]);const Ge=i.get(S[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,Ge,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Ue(R){return Math.min(r.maxSamples,R.samples)}function Se(R){const S=i.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function gt(R){const S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Be(R,S){const H=R.colorSpace,ie=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===hh||H!==Ti&&H!==Fn&&(nt.getTransfer(H)===dt?o===!1?e.has("EXT_sRGB")===!0&&ie===$n?(R.format=hh,R.minFilter=Un,R.generateMipmaps=!1):S=X0.sRGBToLinear(S):(ie!==$n||te!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}this.allocateTextureUnit=P,this.resetTextureUnits=Q,this.setTexture2D=j,this.setTexture2DArray=K,this.setTexture3D=I,this.setTextureCube=k,this.rebindTextures=ce,this.setupRenderTarget=U,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Se}function cT(t,e,n){const i=n.isWebGL2;function r(s,a=Fn){let o;const l=nt.getTransfer(a);if(s===Qi)return t.UNSIGNED_BYTE;if(s===F0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===O0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Ny)return t.BYTE;if(s===Dy)return t.SHORT;if(s===fd)return t.UNSIGNED_SHORT;if(s===U0)return t.INT;if(s===zi)return t.UNSIGNED_INT;if(s===Bi)return t.FLOAT;if(s===za)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Iy)return t.ALPHA;if(s===$n)return t.RGBA;if(s===Uy)return t.LUMINANCE;if(s===Fy)return t.LUMINANCE_ALPHA;if(s===Tr)return t.DEPTH_COMPONENT;if(s===Is)return t.DEPTH_STENCIL;if(s===hh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Oy)return t.RED;if(s===k0)return t.RED_INTEGER;if(s===ky)return t.RG;if(s===z0)return t.RG_INTEGER;if(s===B0)return t.RGBA_INTEGER;if(s===Uc||s===Fc||s===Oc||s===kc)if(l===dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Uc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Uc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wf||s===jf||s===Xf||s===qf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Wf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===G0)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Yf||s===Kf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Yf)return l===dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Kf)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===$f||s===Zf||s===Qf||s===Jf||s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===ap||s===op||s===lp||s===cp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===$f)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zf)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qf)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jf)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ep)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===np)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ip)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ap)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===op)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zc||s===up||s===hp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===zc)return l===dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===up)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===hp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===zy||s===dp||s===fp||s===pp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===zc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===dp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===pp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===wr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class uT extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tn extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hT={type:"move"};class lu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class dT extends Bs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,v=null;const x=n.getContextAttributes();let m=null,u=null;const _=[],g=[],M=new Ye;let b=null;const A=new En;A.layers.enable(1),A.viewport=new mt;const C=new En;C.layers.enable(2),C.viewport=new mt;const D=[A,C],E=new uT;E.layers.enable(1),E.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=_[q];return Z===void 0&&(Z=new lu,_[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=_[q];return Z===void 0&&(Z=new lu,_[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=_[q];return Z===void 0&&(Z=new lu,_[q]=Z),Z.getHandSpace()};function W(q){const Z=g.indexOf(q.inputSource);if(Z===-1)return;const oe=_[Z];oe!==void 0&&(oe.update(q.inputSource,q.frame,c||a),oe.dispatchEvent({type:q.type,data:q.inputSource}))}function Q(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",P);for(let q=0;q<_.length;q++){const Z=g[q];Z!==null&&(g[q]=null,_[q].disconnect(Z))}w=null,z=null,e.setRenderTarget(m),p=null,f=null,d=null,r=null,u=null,J.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),u=new Nr(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Z=null,oe=null,ge=null;x.depth&&(ge=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=x.stencil?Is:Tr,oe=x.stencil?wr:zi);const _e={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(_e),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new Nr(f.textureWidth,f.textureHeight,{format:$n,type:Qi,depthTexture:new rv(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Pe=e.properties.get(u);Pe.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(q){for(let Z=0;Z<q.removed.length;Z++){const oe=q.removed[Z],ge=g.indexOf(oe);ge>=0&&(g[ge]=null,_[ge].disconnect(oe))}for(let Z=0;Z<q.added.length;Z++){const oe=q.added[Z];let ge=g.indexOf(oe);if(ge===-1){for(let Pe=0;Pe<_.length;Pe++)if(Pe>=g.length){g.push(oe),ge=Pe;break}else if(g[Pe]===null){g[Pe]=oe,ge=Pe;break}if(ge===-1)break}const _e=_[ge];_e&&_e.connect(oe)}}const O=new N,j=new N;function K(q,Z,oe){O.setFromMatrixPosition(Z.matrixWorld),j.setFromMatrixPosition(oe.matrixWorld);const ge=O.distanceTo(j),_e=Z.projectionMatrix.elements,Pe=oe.projectionMatrix.elements,le=_e[14]/(_e[10]-1),pe=_e[14]/(_e[10]+1),ce=(_e[9]+1)/_e[5],U=(_e[9]-1)/_e[5],it=(_e[8]-1)/_e[0],Te=(Pe[8]+1)/Pe[0],Ue=le*it,Se=le*Te,gt=ge/(-it+Te),Be=gt*-it;Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Be),q.translateZ(gt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const R=le+gt,S=pe+gt,H=Ue-Be,ie=Se+(ge-Be),te=ce*pe/S*R,re=U*pe/S*R;q.projectionMatrix.makePerspective(H,ie,te,re,R,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function I(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;E.near=C.near=A.near=q.near,E.far=C.far=A.far=q.far,(w!==E.near||z!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,z=E.far);const Z=q.parent,oe=E.cameras;I(E,Z);for(let ge=0;ge<oe.length;ge++)I(oe[ge],Z);oe.length===2?K(E,A,C):E.projectionMatrix.copy(A.projectionMatrix),k(q,E,Z)};function k(q,Z,oe){oe===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(oe.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ba*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let B=null;function $(q,Z){if(h=Z.getViewerPose(c||a),v=Z,h!==null){const oe=h.views;p!==null&&(e.setRenderTargetFramebuffer(u,p.framebuffer),e.setRenderTarget(u));let ge=!1;oe.length!==E.cameras.length&&(E.cameras.length=0,ge=!0);for(let _e=0;_e<oe.length;_e++){const Pe=oe[_e];let le=null;if(p!==null)le=p.getViewport(Pe);else{const ce=d.getViewSubImage(f,Pe);le=ce.viewport,_e===0&&(e.setRenderTargetTextures(u,ce.colorTexture,f.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(u))}let pe=D[_e];pe===void 0&&(pe=new En,pe.layers.enable(_e),pe.viewport=new mt,D[_e]=pe),pe.matrix.fromArray(Pe.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Pe.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(le.x,le.y,le.width,le.height),_e===0&&(E.matrix.copy(pe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ge===!0&&E.cameras.push(pe)}}for(let oe=0;oe<_.length;oe++){const ge=g[oe],_e=_[oe];ge!==null&&_e!==void 0&&_e.update(ge,Z,c||a)}B&&B(q,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),v=null}const J=new nv;J.setAnimationLoop($),this.setAnimationLoop=function(q){B=q},this.dispose=function(){}}}function fT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,J0(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,g,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,_,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===mn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===mn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=e.get(u).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*g,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=g*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===mn&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pT(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const M=g.program;i.uniformBlockBinding(_,M)}function c(_,g){let M=r[_.id];M===void 0&&(v(_),M=h(_),r[_.id]=M,_.addEventListener("dispose",m));const b=g.program;i.updateUBOMapping(_,b);const A=e.render.frame;s[_.id]!==A&&(f(_),s[_.id]=A)}function h(_){const g=d();_.__bindingPointIndex=g;const M=t.createBuffer(),b=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const g=r[_.id],M=_.uniforms,b=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,C=M.length;A<C;A++){const D=Array.isArray(M[A])?M[A]:[M[A]];for(let E=0,w=D.length;E<w;E++){const z=D[E];if(p(z,A,E,b)===!0){const W=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value];let P=0;for(let O=0;O<Q.length;O++){const j=Q[O],K=x(j);typeof j=="number"||typeof j=="boolean"?(z.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,W+P,z.__data)):j.isMatrix3?(z.__data[0]=j.elements[0],z.__data[1]=j.elements[1],z.__data[2]=j.elements[2],z.__data[3]=0,z.__data[4]=j.elements[3],z.__data[5]=j.elements[4],z.__data[6]=j.elements[5],z.__data[7]=0,z.__data[8]=j.elements[6],z.__data[9]=j.elements[7],z.__data[10]=j.elements[8],z.__data[11]=0):(j.toArray(z.__data,P),P+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,z.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,M,b){const A=_.value,C=g+"_"+M;if(b[C]===void 0)return typeof A=="number"||typeof A=="boolean"?b[C]=A:b[C]=A.clone(),!0;{const D=b[C];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return b[C]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function v(_){const g=_.uniforms;let M=0;const b=16;for(let C=0,D=g.length;C<D;C++){const E=Array.isArray(g[C])?g[C]:[g[C]];for(let w=0,z=E.length;w<z;w++){const W=E[w],Q=Array.isArray(W.value)?W.value:[W.value];for(let P=0,O=Q.length;P<O;P++){const j=Q[P],K=x(j),I=M%b;I!==0&&b-I<K.boundary&&(M+=b-I),W.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=K.storage}}}const A=M%b;return A>0&&(M+=b-A),_.__size=M,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const M=a.indexOf(g.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class uv{constructor(e={}){const{canvas:n=uM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;const g=this;let M=!1,b=0,A=0,C=null,D=-1,E=null;const w=new mt,z=new mt;let W=null;const Q=new De(0);let P=0,O=n.width,j=n.height,K=1,I=null,k=null;const B=new mt(0,0,O,j),$=new mt(0,0,O,j);let J=!1;const q=new vd;let Z=!1,oe=!1,ge=null;const _e=new wt,Pe=new Ye,le=new N,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return C===null?K:1}let U=i;function it(T,F){for(let V=0;V<T.length;V++){const X=T[V],G=n.getContext(X,F);if(G!==null)return G}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${dd}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",he,!1),U===null){const F=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&F.shift(),U=it(F,T),U===null)throw it(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Te,Ue,Se,gt,Be,R,S,H,ie,te,re,Ee,fe,xe,be,Ge,ee,et,Xe,Ie,Ae,ye,ke,Ze;function Mt(){Te=new wE(U),Ue=new _E(U,Te,e),Te.init(Ue),ye=new cT(U,Te,Ue),Se=new oT(U,Te,Ue),gt=new CE(U),Be=new qw,R=new lT(U,Te,Se,Be,Ue,ye,gt),S=new yE(g),H=new EE(g),ie=new UM(U,Ue),ke=new gE(U,Te,ie,Ue),te=new TE(U,ie,gt,ke),re=new PE(U,te,ie,gt),Xe=new LE(U,Ue,R),Ge=new xE(Be),Ee=new Xw(g,S,H,Te,Ue,ke,Ge),fe=new fT(g,Be),xe=new Kw,be=new tT(Te,Ue),et=new mE(g,S,H,Se,re,f,l),ee=new aT(g,re,Ue),Ze=new pT(U,gt,Ue,Se),Ie=new vE(U,Te,gt,Ue),Ae=new AE(U,Te,gt,Ue),gt.programs=Ee.programs,g.capabilities=Ue,g.extensions=Te,g.properties=Be,g.renderLists=xe,g.shadowMap=ee,g.state=Se,g.info=gt}Mt();const Ve=new dT(g,U);this.xr=Ve,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(O,j,!1))},this.getSize=function(T){return T.set(O,j)},this.setSize=function(T,F,V=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,j=F,n.width=Math.floor(T*K),n.height=Math.floor(F*K),V===!0&&(n.style.width=T+"px",n.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(O*K,j*K).floor()},this.setDrawingBufferSize=function(T,F,V){O=T,j=F,K=V,n.width=Math.floor(T*V),n.height=Math.floor(F*V),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(B)},this.setViewport=function(T,F,V,X){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,F,V,X),Se.viewport(w.copy(B).multiplyScalar(K).floor())},this.getScissor=function(T){return T.copy($)},this.setScissor=function(T,F,V,X){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,F,V,X),Se.scissor(z.copy($).multiplyScalar(K).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(T){Se.setScissorTest(J=T)},this.setOpaqueSort=function(T){I=T},this.setTransparentSort=function(T){k=T},this.getClearColor=function(T){return T.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(T=!0,F=!0,V=!0){let X=0;if(T){let G=!1;if(C!==null){const me=C.texture.format;G=me===B0||me===z0||me===k0}if(G){const me=C.texture.type,we=me===Qi||me===zi||me===fd||me===wr||me===F0||me===O0,Re=et.getClearColor(),Ne=et.getClearAlpha(),He=Re.r,Fe=Re.g,Oe=Re.b;we?(p[0]=He,p[1]=Fe,p[2]=Oe,p[3]=Ne,U.clearBufferuiv(U.COLOR,0,p)):(v[0]=He,v[1]=Fe,v[2]=Oe,v[3]=Ne,U.clearBufferiv(U.COLOR,0,v))}else X|=U.COLOR_BUFFER_BIT}F&&(X|=U.DEPTH_BUFFER_BIT),V&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",he,!1),xe.dispose(),be.dispose(),Be.dispose(),S.dispose(),H.dispose(),re.dispose(),ke.dispose(),Ze.dispose(),Ee.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Jt),Ve.removeEventListener("sessionend",ot),ge&&(ge.dispose(),ge=null),en.stop()};function se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=gt.autoReset,F=ee.enabled,V=ee.autoUpdate,X=ee.needsUpdate,G=ee.type;Mt(),gt.autoReset=T,ee.enabled=F,ee.autoUpdate=V,ee.needsUpdate=X,ee.type=G}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function de(T){const F=T.target;F.removeEventListener("dispose",de),Le(F)}function Le(T){Ce(T),Be.remove(T)}function Ce(T){const F=Be.get(T).programs;F!==void 0&&(F.forEach(function(V){Ee.releaseProgram(V)}),T.isShaderMaterial&&Ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,V,X,G,me){F===null&&(F=pe);const we=G.isMesh&&G.matrixWorld.determinant()<0,Re=Mv(T,F,V,X,G);Se.setMaterial(X,we);let Ne=V.index,He=1;if(X.wireframe===!0){if(Ne=te.getWireframeAttribute(V),Ne===void 0)return;He=2}const Fe=V.drawRange,Oe=V.attributes.position;let Tt=Fe.start*He,_n=(Fe.start+Fe.count)*He;me!==null&&(Tt=Math.max(Tt,me.start*He),_n=Math.min(_n,(me.start+me.count)*He)),Ne!==null?(Tt=Math.max(Tt,0),_n=Math.min(_n,Ne.count)):Oe!=null&&(Tt=Math.max(Tt,0),_n=Math.min(_n,Oe.count));const It=_n-Tt;if(It<0||It===1/0)return;ke.setup(G,X,Re,V,Ne);let li,vt=Ie;if(Ne!==null&&(li=ie.get(Ne),vt=Ae,vt.setIndex(li)),G.isMesh)X.wireframe===!0?(Se.setLineWidth(X.wireframeLinewidth*ce()),vt.setMode(U.LINES)):vt.setMode(U.TRIANGLES);else if(G.isLine){let We=X.linewidth;We===void 0&&(We=1),Se.setLineWidth(We*ce()),G.isLineSegments?vt.setMode(U.LINES):G.isLineLoop?vt.setMode(U.LINE_LOOP):vt.setMode(U.LINE_STRIP)}else G.isPoints?vt.setMode(U.POINTS):G.isSprite&&vt.setMode(U.TRIANGLES);if(G.isBatchedMesh)vt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)vt.renderInstances(Tt,It,G.count);else if(V.isInstancedBufferGeometry){const We=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,rc=Math.min(V.instanceCount,We);vt.renderInstances(Tt,It,rc)}else vt.render(Tt,It)};function st(T,F,V){T.transparent===!0&&T.side===si&&T.forceSinglePass===!1?(T.side=mn,T.needsUpdate=!0,$a(T,F,V),T.side=tr,T.needsUpdate=!0,$a(T,F,V),T.side=si):$a(T,F,V)}this.compile=function(T,F,V=null){V===null&&(V=T),m=be.get(V),m.init(),_.push(m),V.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==V&&T.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(g._useLegacyLights);const X=new Set;return T.traverse(function(G){const me=G.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){const Re=me[we];st(Re,V,G),X.add(Re)}else st(me,V,G),X.add(me)}),_.pop(),m=null,X},this.compileAsync=function(T,F,V=null){const X=this.compile(T,F,V);return new Promise(G=>{function me(){if(X.forEach(function(we){Be.get(we).currentProgram.isReady()&&X.delete(we)}),X.size===0){G(T);return}setTimeout(me,10)}Te.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let at=null;function Dt(T){at&&at(T)}function Jt(){en.stop()}function ot(){en.start()}const en=new nv;en.setAnimationLoop(Dt),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(T){at=T,Ve.setAnimationLoop(T),T===null?en.stop():en.start()},Ve.addEventListener("sessionstart",Jt),Ve.addEventListener("sessionend",ot),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(F),F=Ve.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,F,C),m=be.get(T,_.length),m.init(),_.push(m),_e.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(_e),oe=this.localClippingEnabled,Z=Ge.init(this.clippingPlanes,oe),x=xe.get(T,u.length),x.init(),u.push(x),ei(T,F,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(I,k),this.info.render.frame++,Z===!0&&Ge.beginShadows();const V=m.state.shadowsArray;if(ee.render(V,T,F),Z===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(x,T),m.setupLights(g._useLegacyLights),F.isArrayCamera){const X=F.cameras;for(let G=0,me=X.length;G<me;G++){const we=X[G];Sd(x,T,we,we.viewport)}}else Sd(x,T,F);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(g,T,F),ke.resetDefaultState(),D=-1,E=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function ei(T,F,V,X){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){X&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(_e);const we=re.update(T),Re=T.material;Re.visible&&x.push(T,we,Re,V,le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){const we=re.update(T),Re=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),le.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),le.copy(we.boundingSphere.center)),le.applyMatrix4(T.matrixWorld).applyMatrix4(_e)),Array.isArray(Re)){const Ne=we.groups;for(let He=0,Fe=Ne.length;He<Fe;He++){const Oe=Ne[He],Tt=Re[Oe.materialIndex];Tt&&Tt.visible&&x.push(T,we,Tt,V,le.z,Oe)}}else Re.visible&&x.push(T,we,Re,V,le.z,null)}}const me=T.children;for(let we=0,Re=me.length;we<Re;we++)ei(me[we],F,V,X)}function Sd(T,F,V,X){const G=T.opaque,me=T.transmissive,we=T.transparent;m.setupLightsView(V),Z===!0&&Ge.setGlobalState(g.clippingPlanes,V),me.length>0&&yv(G,me,F,V),X&&Se.viewport(w.copy(X)),G.length>0&&Ka(G,F,V),me.length>0&&Ka(me,F,V),we.length>0&&Ka(we,F,V),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function yv(T,F,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const me=Ue.isWebGL2;ge===null&&(ge=new Nr(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?za:Qi,minFilter:ka,samples:me?4:0})),g.getDrawingBufferSize(Pe),me?ge.setSize(Pe.x,Pe.y):ge.setSize(bl(Pe.x),bl(Pe.y));const we=g.getRenderTarget();g.setRenderTarget(ge),g.getClearColor(Q),P=g.getClearAlpha(),P<1&&g.setClearColor(16777215,.5),g.clear();const Re=g.toneMapping;g.toneMapping=Zi,Ka(T,V,X),R.updateMultisampleRenderTarget(ge),R.updateRenderTargetMipmap(ge);let Ne=!1;for(let He=0,Fe=F.length;He<Fe;He++){const Oe=F[He],Tt=Oe.object,_n=Oe.geometry,It=Oe.material,li=Oe.group;if(It.side===si&&Tt.layers.test(X.layers)){const vt=It.side;It.side=mn,It.needsUpdate=!0,Ed(Tt,V,X,_n,It,li),It.side=vt,It.needsUpdate=!0,Ne=!0}}Ne===!0&&(R.updateMultisampleRenderTarget(ge),R.updateRenderTargetMipmap(ge)),g.setRenderTarget(we),g.setClearColor(Q,P),g.toneMapping=Re}function Ka(T,F,V){const X=F.isScene===!0?F.overrideMaterial:null;for(let G=0,me=T.length;G<me;G++){const we=T[G],Re=we.object,Ne=we.geometry,He=X===null?we.material:X,Fe=we.group;Re.layers.test(V.layers)&&Ed(Re,F,V,Ne,He,Fe)}}function Ed(T,F,V,X,G,me){T.onBeforeRender(g,F,V,X,G,me),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(g,F,V,X,T,me),G.transparent===!0&&G.side===si&&G.forceSinglePass===!1?(G.side=mn,G.needsUpdate=!0,g.renderBufferDirect(V,F,X,G,T,me),G.side=tr,G.needsUpdate=!0,g.renderBufferDirect(V,F,X,G,T,me),G.side=si):g.renderBufferDirect(V,F,X,G,T,me),T.onAfterRender(g,F,V,X,G,me)}function $a(T,F,V){F.isScene!==!0&&(F=pe);const X=Be.get(T),G=m.state.lights,me=m.state.shadowsArray,we=G.state.version,Re=Ee.getParameters(T,G.state,me,F,V),Ne=Ee.getProgramCacheKey(Re);let He=X.programs;X.environment=T.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(T.isMeshStandardMaterial?H:S).get(T.envMap||X.environment),He===void 0&&(T.addEventListener("dispose",de),He=new Map,X.programs=He);let Fe=He.get(Ne);if(Fe!==void 0){if(X.currentProgram===Fe&&X.lightsStateVersion===we)return Td(T,Re),Fe}else Re.uniforms=Ee.getUniforms(T),T.onBuild(V,Re,g),T.onBeforeCompile(Re,g),Fe=Ee.acquireProgram(Re,Ne),He.set(Ne,Fe),X.uniforms=Re.uniforms;const Oe=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=Ge.uniform),Td(T,Re),X.needsLights=Ev(T),X.lightsStateVersion=we,X.needsLights&&(Oe.ambientLightColor.value=G.state.ambient,Oe.lightProbe.value=G.state.probe,Oe.directionalLights.value=G.state.directional,Oe.directionalLightShadows.value=G.state.directionalShadow,Oe.spotLights.value=G.state.spot,Oe.spotLightShadows.value=G.state.spotShadow,Oe.rectAreaLights.value=G.state.rectArea,Oe.ltc_1.value=G.state.rectAreaLTC1,Oe.ltc_2.value=G.state.rectAreaLTC2,Oe.pointLights.value=G.state.point,Oe.pointLightShadows.value=G.state.pointShadow,Oe.hemisphereLights.value=G.state.hemi,Oe.directionalShadowMap.value=G.state.directionalShadowMap,Oe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Oe.spotShadowMap.value=G.state.spotShadowMap,Oe.spotLightMatrix.value=G.state.spotLightMatrix,Oe.spotLightMap.value=G.state.spotLightMap,Oe.pointShadowMap.value=G.state.pointShadowMap,Oe.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Fe,X.uniformsList=null,Fe}function wd(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Qo.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Td(T,F){const V=Be.get(T);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Mv(T,F,V,X,G){F.isScene!==!0&&(F=pe),R.resetTextureUnits();const me=F.fog,we=X.isMeshStandardMaterial?F.environment:null,Re=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ti,Ne=(X.isMeshStandardMaterial?H:S).get(X.envMap||we),He=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Fe=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Oe=!!V.morphAttributes.position,Tt=!!V.morphAttributes.normal,_n=!!V.morphAttributes.color;let It=Zi;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(It=g.toneMapping);const li=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,vt=li!==void 0?li.length:0,We=Be.get(X),rc=m.state.lights;if(Z===!0&&(oe===!0||T!==E)){const Pn=T===E&&X.id===D;Ge.setState(X,T,Pn)}let St=!1;X.version===We.__version?(We.needsLights&&We.lightsStateVersion!==rc.state.version||We.outputColorSpace!==Re||G.isBatchedMesh&&We.batching===!1||!G.isBatchedMesh&&We.batching===!0||G.isInstancedMesh&&We.instancing===!1||!G.isInstancedMesh&&We.instancing===!0||G.isSkinnedMesh&&We.skinning===!1||!G.isSkinnedMesh&&We.skinning===!0||G.isInstancedMesh&&We.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&We.instancingColor===!1&&G.instanceColor!==null||We.envMap!==Ne||X.fog===!0&&We.fog!==me||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ge.numPlanes||We.numIntersection!==Ge.numIntersection)||We.vertexAlphas!==He||We.vertexTangents!==Fe||We.morphTargets!==Oe||We.morphNormals!==Tt||We.morphColors!==_n||We.toneMapping!==It||Ue.isWebGL2===!0&&We.morphTargetsCount!==vt)&&(St=!0):(St=!0,We.__version=X.version);let ar=We.currentProgram;St===!0&&(ar=$a(X,F,G));let Ad=!1,Vs=!1,sc=!1;const jt=ar.getUniforms(),or=We.uniforms;if(Se.useProgram(ar.program)&&(Ad=!0,Vs=!0,sc=!0),X.id!==D&&(D=X.id,Vs=!0),Ad||E!==T){jt.setValue(U,"projectionMatrix",T.projectionMatrix),jt.setValue(U,"viewMatrix",T.matrixWorldInverse);const Pn=jt.map.cameraPosition;Pn!==void 0&&Pn.setValue(U,le.setFromMatrixPosition(T.matrixWorld)),Ue.logarithmicDepthBuffer&&jt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&jt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,Vs=!0,sc=!0)}if(G.isSkinnedMesh){jt.setOptional(U,G,"bindMatrix"),jt.setOptional(U,G,"bindMatrixInverse");const Pn=G.skeleton;Pn&&(Ue.floatVertexTextures?(Pn.boneTexture===null&&Pn.computeBoneTexture(),jt.setValue(U,"boneTexture",Pn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(jt.setOptional(U,G,"batchingTexture"),jt.setValue(U,"batchingTexture",G._matricesTexture,R));const ac=V.morphAttributes;if((ac.position!==void 0||ac.normal!==void 0||ac.color!==void 0&&Ue.isWebGL2===!0)&&Xe.update(G,V,ar),(Vs||We.receiveShadow!==G.receiveShadow)&&(We.receiveShadow=G.receiveShadow,jt.setValue(U,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(or.envMap.value=Ne,or.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Vs&&(jt.setValue(U,"toneMappingExposure",g.toneMappingExposure),We.needsLights&&Sv(or,sc),me&&X.fog===!0&&fe.refreshFogUniforms(or,me),fe.refreshMaterialUniforms(or,X,K,j,ge),Qo.upload(U,wd(We),or,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Qo.upload(U,wd(We),or,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&jt.setValue(U,"center",G.center),jt.setValue(U,"modelViewMatrix",G.modelViewMatrix),jt.setValue(U,"normalMatrix",G.normalMatrix),jt.setValue(U,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Pn=X.uniformsGroups;for(let oc=0,wv=Pn.length;oc<wv;oc++)if(Ue.isWebGL2){const Cd=Pn[oc];Ze.update(Cd,ar),Ze.bind(Cd,ar)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ar}function Sv(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Ev(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,F,V){Be.get(T.texture).__webglTexture=F,Be.get(T.depthTexture).__webglTexture=V;const X=Be.get(T);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const V=Be.get(T);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,V=0){C=T,b=F,A=V;let X=!0,G=null,me=!1,we=!1;if(T){const Ne=Be.get(T);Ne.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(U.FRAMEBUFFER,null),X=!1):Ne.__webglFramebuffer===void 0?R.setupRenderTarget(T):Ne.__hasExternalTextures&&R.rebindTextures(T,Be.get(T.texture).__webglTexture,Be.get(T.depthTexture).__webglTexture);const He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(we=!0);const Fe=Be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[F])?G=Fe[F][V]:G=Fe[F],me=!0):Ue.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?G=Be.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?G=Fe[V]:G=Fe,w.copy(T.viewport),z.copy(T.scissor),W=T.scissorTest}else w.copy(B).multiplyScalar(K).floor(),z.copy($).multiplyScalar(K).floor(),W=J;if(Se.bindFramebuffer(U.FRAMEBUFFER,G)&&Ue.drawBuffers&&X&&Se.drawBuffers(T,G),Se.viewport(w),Se.scissor(z),Se.setScissorTest(W),me){const Ne=Be.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ne.__webglTexture,V)}else if(we){const Ne=Be.get(T.texture),He=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ne.__webglTexture,V||0,He)}D=-1},this.readRenderTargetPixels=function(T,F,V,X,G,me,we){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re){Se.bindFramebuffer(U.FRAMEBUFFER,Re);try{const Ne=T.texture,He=Ne.format,Fe=Ne.type;if(He!==$n&&ye.convert(He)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Fe===za&&(Te.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Fe!==Qi&&ye.convert(Fe)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Bi&&(Ue.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-X&&V>=0&&V<=T.height-G&&U.readPixels(F,V,X,G,ye.convert(He),ye.convert(Fe),me)}finally{const Ne=C!==null?Be.get(C).__webglFramebuffer:null;Se.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(T,F,V=0){const X=Math.pow(2,-V),G=Math.floor(F.image.width*X),me=Math.floor(F.image.height*X);R.setTexture2D(F,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,T.x,T.y,G,me),Se.unbindTexture()},this.copyTextureToTexture=function(T,F,V,X=0){const G=F.image.width,me=F.image.height,we=ye.convert(V.format),Re=ye.convert(V.type);R.setTexture2D(V,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,X,T.x,T.y,G,me,we,Re,F.image.data):F.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,X,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,we,F.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,X,T.x,T.y,we,Re,F.image),X===0&&V.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(T,F,V,X,G=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=T.max.x-T.min.x+1,we=T.max.y-T.min.y+1,Re=T.max.z-T.min.z+1,Ne=ye.convert(X.format),He=ye.convert(X.type);let Fe;if(X.isData3DTexture)R.setTexture3D(X,0),Fe=U.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)R.setTexture2DArray(X,0),Fe=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,X.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,X.unpackAlignment);const Oe=U.getParameter(U.UNPACK_ROW_LENGTH),Tt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),_n=U.getParameter(U.UNPACK_SKIP_PIXELS),It=U.getParameter(U.UNPACK_SKIP_ROWS),li=U.getParameter(U.UNPACK_SKIP_IMAGES),vt=V.isCompressedTexture?V.mipmaps[G]:V.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,vt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,T.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,T.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?U.texSubImage3D(Fe,G,F.x,F.y,F.z,me,we,Re,Ne,He,vt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Fe,G,F.x,F.y,F.z,me,we,Re,Ne,vt.data)):U.texSubImage3D(Fe,G,F.x,F.y,F.z,me,we,Re,Ne,He,vt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Oe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Tt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_n),U.pixelStorei(U.UNPACK_SKIP_ROWS,It),U.pixelStorei(U.UNPACK_SKIP_IMAGES,li),G===0&&X.generateMipmaps&&U.generateMipmap(Fe),Se.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Se.unbindTexture()},this.resetState=function(){b=0,A=0,C=null,Se.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===pd?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===ec?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?Ar:H0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ar?Ot:Ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class mT extends uv{}mT.prototype.isWebGL1Renderer=!0;class Pl{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=n}clone(){return new Pl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ya{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=n,this.far=i}clone(){return new ya(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gT extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class hv extends Fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nm=new N,im=new N,rm=new wt,cu=new gd,Oo=new Ya;class vT extends zt{constructor(e=new vn,n=new hv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)nm.fromBufferAttribute(n,r-1),im.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=nm.distanceTo(im);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(r),Oo.radius+=s,e.ray.intersectsSphere(Oo)===!1)return;rm.copy(r).invert(),cu.copy(e.ray).applyMatrix4(rm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new N,h=new N,d=new N,f=new N,p=this.isLineSegments?2:1,v=i.index,m=i.attributes.position;if(v!==null){const u=Math.max(0,a.start),_=Math.min(v.count,a.start+a.count);for(let g=u,M=_-1;g<M;g+=p){const b=v.getX(g),A=v.getX(g+1);if(c.fromBufferAttribute(m,b),h.fromBufferAttribute(m,A),cu.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(f);D<e.near||D>e.far||n.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let g=u,M=_-1;g<M;g+=p){if(c.fromBufferAttribute(m,g),h.fromBufferAttribute(m,g+1),cu.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||n.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const sm=new N,am=new N;class _T extends vT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)sm.fromBufferAttribute(n,r),am.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+sm.distanceTo(am);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dv extends Fr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const om=new wt,mh=new gd,ko=new Ya,zo=new N;class xT extends zt{constructor(e=new vn,n=new dv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ko.copy(i.boundingSphere),ko.applyMatrix4(r),ko.radius+=s,e.ray.intersectsSphere(ko)===!1)return;om.copy(r).invert(),mh.copy(e.ray).applyMatrix4(om);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=f,x=p;v<x;v++){const m=c.getX(v);zo.fromBufferAttribute(d,m),lm(zo,m,l,r,e,n,this)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let v=f,x=p;v<x;v++)zo.fromBufferAttribute(d,v),lm(zo,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function lm(t,e,n,i,r,s,a){const o=mh.distanceSqToPoint(t);if(o<n){const l=new N;mh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class oa extends gn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lt extends vn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],p=[];let v=0;const x=[],m=i/2;let u=0;_(),a===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Bt(d,3)),this.setAttribute("normal",new Bt(f,3)),this.setAttribute("uv",new Bt(p,2));function _(){const M=new N,b=new N;let A=0;const C=(n-e)/i;for(let D=0;D<=s;D++){const E=[],w=D/s,z=w*(n-e)+e;for(let W=0;W<=r;W++){const Q=W/r,P=Q*l+o,O=Math.sin(P),j=Math.cos(P);b.x=z*O,b.y=-w*i+m,b.z=z*j,d.push(b.x,b.y,b.z),M.set(O,C,j).normalize(),f.push(M.x,M.y,M.z),p.push(Q,1-w),E.push(v++)}x.push(E)}for(let D=0;D<r;D++)for(let E=0;E<s;E++){const w=x[E][D],z=x[E+1][D],W=x[E+1][D+1],Q=x[E][D+1];h.push(w,z,Q),h.push(z,W,Q),A+=6}c.addGroup(u,A,0),u+=A}function g(M){const b=v,A=new Ye,C=new N;let D=0;const E=M===!0?e:n,w=M===!0?1:-1;for(let W=1;W<=r;W++)d.push(0,m*w,0),f.push(0,w,0),p.push(.5,.5),v++;const z=v;for(let W=0;W<=r;W++){const P=W/r*l+o,O=Math.cos(P),j=Math.sin(P);C.x=E*j,C.y=m*w,C.z=E*O,d.push(C.x,C.y,C.z),f.push(0,w,0),A.x=O*.5+.5,A.y=j*.5*w+.5,p.push(A.x,A.y),v++}for(let W=0;W<r;W++){const Q=b+W,P=z+W;M===!0?h.push(P,P+1,Q):h.push(P+1,P,Q),D+=3}c.addGroup(u,D,M===!0?1:2),u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xd extends lt{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new xd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nl extends vn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new N,f=new N,p=[],v=[],x=[],m=[];for(let u=0;u<=i;u++){const _=[],g=u/i;let M=0;u===0&&a===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let b=0;b<=n;b++){const A=b/n;d.x=-e*Math.cos(r+A*s)*Math.sin(a+g*o),d.y=e*Math.cos(a+g*o),d.z=e*Math.sin(r+A*s)*Math.sin(a+g*o),v.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(A+M,1-g),_.push(c++)}h.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){const g=h[u][_+1],M=h[u][_],b=h[u+1][_],A=h[u+1][_+1];(u!==0||a>0)&&p.push(g,M,A),(u!==i-1||l<Math.PI)&&p.push(M,b,A)}this.setIndex(p),this.setAttribute("position",new Bt(v,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Dl extends vn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new N,d=new N,f=new N;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const x=v/r*s,m=p/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(x),d.y=(e+n*Math.cos(m))*Math.sin(x),d.z=n*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const x=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,u=(r+1)*(p-1)+v,_=(r+1)*p+v;a.push(x,m,_),a.push(m,u,_)}this.setIndex(a),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Qe extends Fr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=V0,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Il extends Qe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class yd extends zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const uu=new wt,cm=new N,um=new N;class fv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vd,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;cm.setFromMatrixPosition(e.matrixWorld),n.position.copy(cm),um.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(um),n.updateMatrixWorld(),uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hm=new wt,na=new N,hu=new N;class yT extends fv{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),na.setFromMatrixPosition(e.matrixWorld),i.position.copy(na),hu.copy(i.position),hu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(hu),i.updateMatrixWorld(),r.makeTranslation(-na.x,-na.y,-na.z),hm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hm)}}class gh extends yd{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new yT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class MT extends fv{constructor(){super(new iv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ST extends yd{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new MT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ET extends yd{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class wT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=dm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function dm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dd);class TT{camera;currentPos=new N;targetPos=new N;lookTarget=new N;baseFOV=68;maxFOV=92;shakeIntensity=0;shakeDecay=4.5;constructor(){this.camera=new En(this.baseFOV,window.innerWidth/window.innerHeight,.1,1e3),this.currentPos.set(0,3.8,-8),this.camera.position.copy(this.currentPos)}triggerShake(e){this.shakeIntensity=Math.max(this.shakeIntensity,e)}resize(e,n){this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}update(e,n,i,r){const s=Math.min(1,i/280),a=Math.min(this.maxFOV,this.baseFOV+s*16+(r?8:0));this.camera.fov=Sn.lerp(this.camera.fov,a,e*5),this.camera.updateProjectionMatrix();const o=5.6+s*1.4,l=1.95+s*.35;this.targetPos.set(n.x*.7,n.y+l,n.z-o),this.currentPos.x=Sn.lerp(this.currentPos.x,this.targetPos.x,e*9),this.currentPos.y=Sn.lerp(this.currentPos.y,this.targetPos.y,e*9),this.currentPos.z=Sn.lerp(this.currentPos.z,this.targetPos.z,e*12);let c=0,h=0;this.shakeIntensity>.01&&(c=(Math.random()-.5)*this.shakeIntensity,h=(Math.random()-.5)*this.shakeIntensity,this.shakeIntensity=Math.max(0,this.shakeIntensity-this.shakeDecay*e)),i>160&&(h+=Math.sin(Date.now()*.04)*(s*.025)),this.camera.position.set(this.currentPos.x+c,this.currentPos.y+h,this.currentPos.z),this.lookTarget.set(n.x*.35,n.y+1.05,n.z+16),this.camera.lookAt(this.lookTarget)}}class Fs{scene;roadSegments=[];segmentLength=140;totalSegments=6;static LANE_WIDTH=3.6;static LANES=[-5.4,-1.8,1.8,5.4];asphaltMaterial;lineMaterial;yellowLineMaterial;barrierMaterial;buildingMaterial;neonSignMaterials=[];founderGantry;founderBillboardMat;nextFounderZ=1e3;lastAnnouncedKm=0;onFounderMilestone;constructor(e){this.scene=e;const n=this.createAsphaltTexture();n.wrapS=Mr,n.wrapT=Mr,n.repeat.set(4,35),this.asphaltMaterial=new Qe({color:1448484,map:n,roughness:.14,metalness:.45}),this.lineMaterial=new Qe({color:16777215,emissive:8965375,emissiveIntensity:.6,roughness:.2}),this.yellowLineMaterial=new Qe({color:16755200,emissive:16746496,emissiveIntensity:.7,roughness:.2}),this.barrierMaterial=new Qe({color:5925509,metalness:.85,roughness:.25});const i=this.createBuildingTexture();i.wrapS=Mr,i.wrapT=Mr,i.repeat.set(1,1),this.buildingMaterial=new Qe({color:790557,roughness:.35,metalness:.6,map:i,emissiveMap:i,emissive:16777215,emissiveIntensity:.9}),this.createNeonSignMaterials();const r=this.createFounderBillboardTexture();this.founderBillboardMat=new Qe({map:r,emissiveMap:r,emissive:16777215,emissiveIntensity:.95,roughness:.25,metalness:.4}),this.founderGantry=this.createFounderGantry(),this.founderGantry.position.set(0,0,this.nextFounderZ),this.scene.add(this.founderGantry),this.buildHighwaySegments()}createAsphaltTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d");n.fillStyle="#1e222a",n.fillRect(0,0,512,512);const i=n.getImageData(0,0,512,512),r=i.data;for(let s=0;s<r.length;s+=4){const a=(Math.random()-.5)*32;r[s]=Math.min(255,Math.max(0,r[s]+a)),r[s+1]=Math.min(255,Math.max(0,r[s+1]+a+2)),r[s+2]=Math.min(255,Math.max(0,r[s+2]+a+6))}n.putImageData(i,0,0),n.fillStyle="rgba(10, 20, 35, 0.45)";for(let s=0;s<12;s++)n.beginPath(),n.ellipse(Math.random()*512,Math.random()*512,50+Math.random()*80,15+Math.random()*30,Math.random()*Math.PI,0,Math.PI*2),n.fill();return new oa(e)}createBuildingTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d");n.fillStyle="#060a14",n.fillRect(0,0,512,512),n.fillStyle="#0d1526";for(let s=0;s<512;s+=24)n.fillRect(s,0,3,512);n.fillStyle="#080e1a";for(let s=0;s<512;s+=36)n.fillRect(0,s,512,6);const i=["#ffd580","#ffeaa7","#eef4fc","#88d8ff","#ffd700"];for(let s=8;s<500;s+=36)for(let a=4;a<500;a+=24)if(Math.random()<.65){const o=i[Math.floor(Math.random()*i.length)];n.fillStyle=o,n.fillRect(a,s,17,24),Math.random()<.35&&(n.fillStyle="rgba(0, 0, 0, 0.45)",n.fillRect(a,s+10,17,4))}const r=n.createLinearGradient(0,0,512,0);return r.addColorStop(0,"#00f3ff"),r.addColorStop(.5,"#ffd700"),r.addColorStop(1,"#00f3ff"),n.fillStyle=r,n.fillRect(0,0,512,10),new oa(e)}createFounderBillboardTexture(){const e=document.createElement("canvas");e.width=1200,e.height=540;const n=e.getContext("2d"),i=new oa(e);i.colorSpace=Ot;const r=a=>{const o=n.createLinearGradient(0,0,1200,540);o.addColorStop(0,"#060a14"),o.addColorStop(.5,"#0d1322"),o.addColorStop(1,"#080d18"),n.fillStyle=o,n.fillRect(0,0,1200,540),n.strokeStyle="rgba(0, 243, 255, 0.08)",n.lineWidth=1;for(let v=0;v<1200;v+=40)n.beginPath(),n.moveTo(v,0),n.lineTo(v,540),n.stroke();for(let v=0;v<540;v+=40)n.beginPath(),n.moveTo(0,v),n.lineTo(1200,v),n.stroke();n.strokeStyle="#00f3ff",n.lineWidth=6,n.strokeRect(10,10,1180,520),n.strokeStyle="#ffd700",n.lineWidth=2,n.strokeRect(18,18,1164,504);const l=40,c=40,h=380,d=460;if(n.save(),n.beginPath(),n.roundRect(l,c,h,d,16),n.clip(),a&&a.complete&&a.naturalWidth>0){const v=a.naturalWidth/a.naturalHeight,x=h/d;let m=a.naturalWidth,u=a.naturalHeight,_=0,g=0;v>x?(m=a.naturalHeight*x,_=(a.naturalWidth-m)/2):(u=a.naturalWidth/x,g=0),n.drawImage(a,_,g,m,u,l,c,h,d);const M=n.createLinearGradient(0,c+d-120,0,c+d);M.addColorStop(0,"rgba(6, 10, 20, 0)"),M.addColorStop(1,"rgba(6, 10, 20, 0.94)"),n.fillStyle=M,n.fillRect(l,c+d-120,h,120)}else n.fillStyle="#151d30",n.fillRect(l,c,h,d),n.fillStyle="#00f3ff",n.font="bold 24px sans-serif",n.textAlign="center",n.fillText("INDRAJIT KUMAR",l+h/2,c+d/2);n.restore(),n.strokeStyle="#00f3ff",n.lineWidth=4,n.strokeRect(l,c,h,d),n.fillStyle="#ffd700",n.fillRect(l+20,c+d-44,h-40,32),n.fillStyle="#0a0d16",n.font="900 16px sans-serif",n.textAlign="center",n.fillText("OFFICIAL FOUNDER & ARCHITECT",l+h/2,c+d-23);const f=460;n.fillStyle="rgba(0, 243, 255, 0.15)",n.fillRect(f,48,440,38),n.strokeStyle="#00f3ff",n.lineWidth=1.5,n.strokeRect(f,48,440,38),n.fillStyle="#00f3ff",n.font="bold 16px sans-serif",n.textAlign="left",n.fillText("★  VELOCITY X • HIGHWAY MILESTONE GANTRY  ★",f+16,73),n.font="900 58px sans-serif",n.fillStyle="#ffffff",n.shadowColor="#00f3ff",n.shadowBlur=15,n.fillText("INDRAJIT KUMAR",f,155),n.shadowBlur=0,n.font="bold 24px sans-serif",n.fillStyle="#ffd700",n.fillText("CREATOR & LEAD ARCHITECT — VELOCITY X",f,195);const p=n.createLinearGradient(f,0,f+680,0);p.addColorStop(0,"#00f3ff"),p.addColorStop(.5,"#ffd700"),p.addColorStop(1,"rgba(0, 243, 255, 0)"),n.fillStyle=p,n.fillRect(f,215,680,3),n.fillStyle="#ffffff",n.font="bold 20px sans-serif",n.fillText("EMAIL ADDRESS:",f,258),n.fillStyle="rgba(255, 255, 255, 0.08)",n.fillRect(f,272,680,52),n.strokeStyle="rgba(0, 243, 255, 0.4)",n.lineWidth=1,n.strokeRect(f,272,680,52),n.font="bold 26px monospace",n.fillStyle="#00f3ff",n.fillText("✉  indrakitkumar23541@gmail.com",f+20,307),n.fillStyle="#ffffff",n.font="bold 20px sans-serif",n.fillText("OFFICIAL INSTAGRAM:",f,362),n.fillStyle="rgba(255, 0, 127, 0.12)",n.fillRect(f,376,680,52),n.strokeStyle="#ff007f",n.lineWidth=1.5,n.strokeRect(f,376,680,52),n.font="900 28px sans-serif",n.fillStyle="#ff3388",n.fillText("📸  tech_arcane.wizard",f+20,412),n.fillStyle="#ffd700",n.font="bold 18px sans-serif",n.fillText("⚡ 1,000M HIGHWAY PURSUIT MILESTONE REACHED • SPEED ZONE ACTIVATED",f,480)};r();const s=new Image;return s.src="./images/founder.jpg",s.onload=()=>{r(s),i.needsUpdate=!0},i}createFounderGantry(){const e=new Tn,n=new Qe({color:1975864,metalness:.9,roughness:.28}),i=new Y(new ue(22,1.2,1.2),n);i.position.set(0,10.2,0),e.add(i);for(const l of[-10.5,10.5]){const c=new Y(new ue(1.4,11,1.4),n);c.position.set(l,5.5,0),e.add(c);const h=new Y(new lt(.18,.18,.6,12),new ct({color:16711731}));h.position.set(l,11.3,0),e.add(h)}const r=new ue(16,7.2,.5),s=new Y(r,this.founderBillboardMat);s.position.set(0,6.2,0),e.add(s);const a=new Qe({color:1119776,metalness:.9}),o=new ct({color:62463});for(let l=-6;l<=6;l+=4){const c=new Y(new ue(.8,.4,.6),a);c.position.set(l,10.2,.6),e.add(c);const h=new Y(new ue(.7,.1,.5),o);h.position.set(l,10,.6),e.add(h)}return e}createNeonSignMaterials(){[{text:"NEO TOKYO",color:"#00f3ff",border:"#ff007f"},{text:"CYBER SHUTO",color:"#ff007f",border:"#00f3ff"},{text:"VELOCITY X",color:"#ffd700",border:"#00f3ff"},{text:"MIDTOWN 2077",color:"#00ff88",border:"#ffd700"},{text:"KOWLOON EXPRESS",color:"#ff3366",border:"#00f3ff"}].forEach(n=>{const i=document.createElement("canvas");i.width=512,i.height=128;const r=i.getContext("2d");r.fillStyle="#060912",r.fillRect(0,0,512,128),r.strokeStyle=n.border,r.lineWidth=6,r.strokeRect(6,6,500,116),r.font="bold 42px sans-serif",r.textAlign="center",r.textBaseline="middle",r.shadowColor=n.color,r.shadowBlur=18,r.fillStyle="#ffffff",r.fillText(n.text,256,64),r.fillStyle=n.color,r.fillText(n.text,256,64);const s=new oa(i);this.neonSignMaterials.push(new ct({map:s,transparent:!1}))})}buildHighwaySegments(){const n=new Gi(17.5,this.segmentLength);n.rotateX(-Math.PI/2);const i=new Gi(.24,4.5);i.rotateX(-Math.PI/2);const r=new Gi(.3,this.segmentLength);r.rotateX(-Math.PI/2);const s=new ue(.55,1,this.segmentLength),a=new ue(.2,.08,.4),o=new ct({color:16755200}),l=new ct({color:62463});for(let c=0;c<this.totalSegments;c++){const h=new Tn,d=c*this.segmentLength-40;h.position.set(0,0,d);const f=new Y(n,this.asphaltMaterial);f.receiveShadow=!0,h.add(f);const p=new Y(r,this.yellowLineMaterial);p.position.set(-7.8,.015,0),h.add(p);const v=new Y(r,this.lineMaterial);v.position.set(7.8,.015,0),h.add(v);const x=[-3.6,0,3.6],m=Math.floor(this.segmentLength/9);for(const g of x)for(let M=0;M<m;M++){const b=new Y(i,this.lineMaterial),A=-this.segmentLength/2+M*9+3;if(b.position.set(g,.015,A),h.add(b),M%2===0){const C=new Y(a,g===0?l:o);C.position.set(g,.04,A+2.5),h.add(C)}}const u=new Y(s,this.barrierMaterial);u.position.set(-8.8,.5,0),h.add(u);const _=new Y(s,this.barrierMaterial);_.position.set(8.8,.5,0),h.add(_);for(let g=0;g<4;g++){const M=-this.segmentLength/2+g*35+15,b=this.createStreetLamp(!1);b.position.set(-9.4,0,M),h.add(b);const A=this.createStreetLamp(!0);A.position.set(9.4,0,M),h.add(A)}if(c%2===0){const g=this.createOverheadGantry(c);g.position.set(0,0,0),h.add(g)}this.attachCityBuildingsToSegment(h,c),this.scene.add(h),this.roadSegments.push(h)}}createStreetLamp(e=!1){const n=new Tn,i=new lt(.12,.18,8.5,8),r=new Qe({color:3818842,metalness:.85,roughness:.25}),s=new Y(i,r);s.position.y=4.25,n.add(s);const a=new lt(.08,.12,3.2,8);a.rotateZ(e?-Math.PI/3.5:Math.PI/3.5);const o=new Y(a,r);o.position.set(e?-1.2:1.2,8.2,0),n.add(o);const l=new ue(1,.2,.5),c=new ct({color:62463}),h=new Y(l,c);h.position.set(e?-2.3:2.3,8.8,0),n.add(h);const d=new Gi(6,6);d.rotateX(-Math.PI/2);const f=new ct({color:62463,transparent:!0,opacity:.12,depthWrite:!1}),p=new Y(d,f);return p.position.set(e?-2.3:2.3,.02,0),n.add(p),n}createOverheadGantry(e){const n=new Tn,i=new ue(20,.6,.6),r=new Qe({color:2963272,metalness:.8,roughness:.4}),s=new Y(i,r);s.position.set(0,6.5,0),n.add(s);const a=new ue(.6,6.5,.6),o=new Y(a,r);o.position.set(-9.8,3.25,0),n.add(o);const l=new Y(a,r);l.position.set(9.8,3.25,0),n.add(l);const c=new ue(6.5,2.2,.25),h=this.neonSignMaterials[e%this.neonSignMaterials.length],d=new Y(c,h);return d.position.set(0,6.8,.25),n.add(d),n}attachCityBuildingsToSegment(e,n){const r=new ue(1,1,1),s=new ct({color:16711765}),a=new ct({color:62463}),o=new lt(.1,.2,6,6);for(let l=-1;l<=1;l+=2)for(let c=0;c<4;c++){const h=45+(c*19+n*13)%75,d=16+c%3*8,f=16+(c+n)%3*8,p=l*(24+c%2*20+Math.random()*8),v=-this.segmentLength/2+c*32+16,x=new Y(r,this.buildingMaterial);x.scale.set(d,h,f),x.position.set(p,h/2-2,v),e.add(x);const m=new Y(o,c%2===0?s:a);if(m.position.set(p,h+1,v),e.add(m),c%2===1&&this.neonSignMaterials.length>0){const u=this.neonSignMaterials[(c+n)%this.neonSignMaterials.length],_=new ue(14,4.5,.5),g=new Y(_,u);g.position.set(l<0?p+d/2+.3:p-d/2-.3,24+c%2*8,v),g.rotateY(l<0?Math.PI/2:-Math.PI/2),e.add(g)}}}reset(e=0){for(let n=0;n<this.roadSegments.length;n++){const i=e+(n*this.segmentLength-40);this.roadSegments[n].position.set(0,0,i)}this.nextFounderZ=Math.floor(e/1e3)*1e3+1e3,this.founderGantry.position.set(0,0,this.nextFounderZ),this.lastAnnouncedKm=Math.floor(e/1e3)}update(e){const n=this.totalSegments*this.segmentLength;for(const r of this.roadSegments)for(;r.position.z<e-this.segmentLength*1.5;)r.position.z+=n;e>this.nextFounderZ+50&&(this.nextFounderZ+=1e3,this.founderGantry.position.set(0,0,this.nextFounderZ));const i=Math.floor(e/1e3);i>this.lastAnnouncedKm&&e>=i*1e3-15&&(this.lastAnnouncedKm=i,this.onFounderMilestone?.(i*1e3))}setTrackEnvironment(e){e==="NIGHT"?(this.asphaltMaterial.color.setHex(1448482),this.asphaltMaterial.roughness=.12,this.asphaltMaterial.metalness=.45,this.buildingMaterial.emissiveIntensity=.95,this.lineMaterial.emissiveIntensity=.7,this.yellowLineMaterial.emissiveIntensity=.75):(this.asphaltMaterial.color.setHex(3685962),this.asphaltMaterial.roughness=.45,this.asphaltMaterial.metalness=.15,this.buildingMaterial.emissiveIntensity=.15,this.lineMaterial.emissiveIntensity=.2,this.yellowLineMaterial.emissiveIntensity=.25)}getLaneX(e){const n=Math.max(0,Math.min(3,e));return Fs.LANES[n]}setWetness(e){e?(this.asphaltMaterial.roughness=.06,this.asphaltMaterial.metalness=.55):(this.asphaltMaterial.roughness=.14,this.asphaltMaterial.metalness=.35)}}class AT{mesh;config;speedKmh=0;targetSpeedKmh=0;accelerationRate=28;maxSpeedKmh=240;nitroMaxSpeedKmh=295;currentLaneX=1.8;lateralVelocity=0;steeringInertia=0;currentRPM=800;currentGear=1;nitroReserve=100;isNitroActive=!1;isBraking=!1;isCrashed=!1;carRoot=null;carPaintMaterial;carbonMat;glassMat;chromeMat;brakeLightMaterial;underglowMesh;underglowLight;frontWheels=[];allWheels=[];headlightCones=[];activeAeroFlaps=[];leftExhaustPos=new N;rightExhaustPos=new N;leftExhaustLocal=new N(-.45,.26,-2.25);rightExhaustLocal=new N(.45,.26,-2.25);bounds=new sr;carSize=new N(2.1,1.2,4.6);constructor(e,n){this.config=n,this.maxSpeedKmh=n.topSpeedKmh,this.nitroMaxSpeedKmh=n.topSpeedKmh*1.22,this.mesh=new Tn,this.carPaintMaterial=new Il({color:new De(n.color),metalness:.9,roughness:.16,clearcoat:1,clearcoatRoughness:.05,reflectivity:1,envMapIntensity:2.4}),this.carbonMat=new Qe({color:1118999,metalness:.5,roughness:.42}),this.glassMat=new Il({color:263690,metalness:.95,roughness:.05,clearcoat:1,transmission:.35,transparent:!0,opacity:.92,envMapIntensity:2.5}),this.chromeMat=new Qe({color:14542317,metalness:.98,roughness:.1,envMapIntensity:2}),this.brakeLightMaterial=new ct({color:6684672});const i=new Gi(2.7,5.2);i.rotateX(-Math.PI/2);const r=new ct({color:new De(n.underglowColor),transparent:!0,opacity:.75,blending:Ps,depthWrite:!1});this.underglowMesh=new Y(i,r),this.underglowMesh.position.y=.04,this.mesh.add(this.underglowMesh),this.underglowLight=new gh(new De(n.underglowColor),2,5),this.underglowLight.position.set(0,.25,0),this.mesh.add(this.underglowLight),this.buildSupercarModel(),e.add(this.mesh),this.mesh.position.set(this.currentLaneX,0,0),this.updateBounds()}setCarConfig(e){const n=this.config.type!==e.type;this.config=e,this.maxSpeedKmh=e.topSpeedKmh,this.nitroMaxSpeedKmh=e.topSpeedKmh*1.22,this.setCustomization(e.color,e.underglowColor),n&&this.buildSupercarModel()}setCustomization(e,n){this.carPaintMaterial.color.set(e),this.underglowMesh.material.color.set(n),this.underglowLight.color.set(n)}buildSupercarModel(){switch(this.carRoot&&(this.mesh.remove(this.carRoot),this.carRoot.traverse(e=>{e instanceof Y&&e.geometry&&e.geometry.dispose()})),this.carRoot=new Tn,this.frontWheels=[],this.allWheels=[],this.headlightCones=[],this.activeAeroFlaps=[],this.config.type){case"roadster":this.buildPaganiRoadster(this.carRoot);break;case"gt":this.buildBugattiGT(this.carRoot);break;case"muscle":this.buildTitanMuscle(this.carRoot);break;default:this.buildBugattiGT(this.carRoot);break}this.mesh.add(this.carRoot)}buildPaganiRoadster(e){const n=new ue(1.98,.32,4.5),i=new Y(n,this.carPaintMaterial);i.position.y=.32,i.castShadow=!0,e.add(i);const r=new ue(2.18,.06,3.8),s=new Y(r,this.carbonMat);s.position.set(0,.16,.1),e.add(s);const a=new ue(.38,.36,1.8),o=new Y(a,this.carPaintMaterial);o.position.set(-1.06,.44,-1.35),o.castShadow=!0,e.add(o);const l=new Y(a,this.carPaintMaterial);l.position.set(1.06,.44,-1.35),l.castShadow=!0,e.add(l);const c=new ue(.32,.32,1.6),h=new Y(c,this.carPaintMaterial);h.position.set(-1.02,.42,1.35),h.castShadow=!0,e.add(h);const d=new Y(c,this.carPaintMaterial);d.position.set(1.02,.42,1.35),d.castShadow=!0,e.add(d);const f=new ue(1.85,.22,1.6);f.rotateX(-.16);const p=new Y(f,this.carPaintMaterial);p.position.set(0,.38,1.45),p.castShadow=!0,e.add(p);const v=new ue(2.18,.06,.85),x=new Y(v,this.carbonMat);x.position.set(0,.16,2.28),e.add(x);const m=new Y(new ue(.12,.04,.4),this.carbonMat);m.position.set(-1.12,.32,2.15),m.rotation.y=.25,e.add(m);const u=new Y(new ue(.12,.04,.4),this.carbonMat);u.position.set(1.12,.32,2.15),u.rotation.y=-.25,e.add(u);const _=new ue(1.42,.46,2.1);_.rotateX(.12);const g=new Y(_,this.glassMat);g.position.set(0,.72,-.05),g.castShadow=!0,e.add(g);const M=new Y(new ue(.28,.12,1.6),this.carbonMat);M.position.set(0,.94,-.3),e.add(M);const b=new Y(new ue(.28,.08,.14),this.carbonMat);b.position.set(-1.08,.68,.55),b.rotation.y=.35,b.rotation.z=-.15,e.add(b);const A=new Y(new ue(.28,.08,.14),this.carbonMat);A.position.set(1.08,.68,.55),A.rotation.y=-.35,A.rotation.z=.15,e.add(A);const C=new ue(1.88,.34,1.5),D=new Y(C,this.carPaintMaterial);D.position.set(0,.48,-1.55),D.castShadow=!0,e.add(D);const E=new Y(new ue(.9,.05,.95),this.glassMat);E.position.set(0,.66,-1.35),e.add(E);const w=new Y(new lt(.12,.12,.8,12),this.chromeMat);w.rotateZ(Math.PI/2),w.position.set(0,.62,-1.35),e.add(w);const z=new ue(2.14,.06,.48),W=new Y(z,this.carbonMat);W.position.set(0,1.05,-2.14),W.castShadow=!0,e.add(W);const Q=new ue(.04,.32,.52),P=new Y(Q,this.carbonMat);P.position.set(-1.08,1.05,-2.14),e.add(P);const O=new Y(Q,this.carbonMat);O.position.set(1.08,1.05,-2.14),e.add(O);const j=new ue(.05,.46,.18),K=new Y(j,this.carbonMat);K.position.set(-.56,.82,-2.05),K.rotation.x=-.2,e.add(K);const I=new Y(j,this.carbonMat);I.position.set(.56,.82,-2.05),I.rotation.x=-.2,e.add(I);const k=new ue(1.94,.06,.08),B=new Qe({color:16711720,emissive:16711714,emissiveIntensity:2.8,roughness:.1}),$=new Y(k,B);$.position.set(0,.62,-2.26),e.add($);const J=new Dl(.08,.025,8,16),q=new Y(J,B);q.position.set(-.78,.62,-2.26),e.add(q);const Z=new Y(J,B);Z.position.set(.78,.62,-2.26),e.add(Z);const oe=new Y(new lt(.24,.24,.1,16),this.carbonMat);oe.rotateX(Math.PI/2),oe.position.set(0,.62,-2.26),e.add(oe);const ge=new lt(.05,.05,.18,12);ge.rotateX(Math.PI/2);const _e=[{x:-.07,y:.68},{x:.07,y:.68},{x:-.07,y:.56},{x:.07,y:.56}];for(const ce of _e){const U=new Y(ge,this.chromeMat);U.position.set(ce.x,ce.y,-2.28),e.add(U);const it=new Y(new lt(.038,.038,.05,8),new ct({color:16737792}));it.rotateX(Math.PI/2),it.position.set(ce.x,ce.y,-2.29),e.add(it)}this.leftExhaustLocal.set(-.07,.62,-2.28),this.rightExhaustLocal.set(.07,.62,-2.28);const Pe=new ue(2.02,.22,.65),le=new Y(Pe,this.carbonMat);le.position.set(0,.22,-2.25),e.add(le);for(let ce=-.75;ce<=.75;ce+=.3){const U=new Y(new ue(.04,.26,.55),this.carbonMat);U.position.set(ce,.22,-2.25),e.add(U)}const pe=[-.78,.78];for(const ce of pe){const U=new Y(new Nl(.08,12,8),new ct({color:16777215}));U.position.set(ce-.06,.42,2.22),e.add(U);const it=new Y(new Nl(.07,12,8),new ct({color:10083839}));it.position.set(ce+.06,.4,2.25),e.add(it),this.createVolumetricBeam(e,ce,.42,2.26)}this.installWheels(e,13687010,!1)}buildBugattiGT(e){const n=new ue(2.12,.4,4.6),i=new Y(n,this.carPaintMaterial);i.position.y=.36,i.castShadow=!0,e.add(i);const r=new ue(2,.3,1.7);r.rotateX(-.11);const s=new Y(r,this.carPaintMaterial);s.position.set(0,.48,1.4),s.castShadow=!0,e.add(s);const a=new Dl(.32,.04,12,24,Math.PI),o=new ct({color:62463}),l=new Y(a,o);l.rotateZ(Math.PI),l.position.set(0,.38,2.32),e.add(l);const c=new Y(new lt(.28,.28,.04,16,1,!1,0,Math.PI),new Qe({color:526864,metalness:.9,roughness:.3}));c.rotateX(Math.PI/2),c.position.set(0,.38,2.31),e.add(c);const h=new ue(2.18,.07,.75),d=new Y(h,this.carbonMat);d.position.set(0,.16,2.28),e.add(d);const f=this.chromeMat,p=new ue(.06,.08,2.4),v=new Y(p,f);v.position.set(-.95,.88,-.2),v.rotation.y=.05,e.add(v);const x=new Y(p,f);x.position.set(.95,.88,-.2),x.rotation.y=-.05,e.add(x);const m=new ue(1.7,.54,2.3);m.rotateX(.07);const u=new Y(m,this.glassMat);u.position.set(0,.78,-.2),u.castShadow=!0,e.add(u);const _=new Y(new ue(.04,.22,2),this.carbonMat);_.position.set(0,.92,-.9),e.add(_);const g=new ue(2.05,.42,1.3),M=new Y(g,this.carPaintMaterial);M.position.set(0,.56,-1.6),M.castShadow=!0,e.add(M);const b=new Y(new lt(.18,.18,.5,12),this.chromeMat);b.rotateX(Math.PI/2),b.position.set(-.48,.76,-1.1),e.add(b);const A=new Y(new lt(.18,.18,.5,12),this.chromeMat);A.rotateX(Math.PI/2),A.position.set(.48,.76,-1.1),e.add(A);const C=new ue(2.18,.07,.5),D=new Y(C,this.carbonMat);D.position.set(0,1.08,-2.18),e.add(D);const E=new Y(new ue(.06,.38,.14),this.carbonMat);E.position.set(-.68,.88,-2.15),e.add(E);const w=new Y(new ue(.06,.38,.14),this.carbonMat);w.position.set(.68,.88,-2.15),e.add(w);const z=new ue(1.98,.07,.08),W=new Y(z,this.brakeLightMaterial);W.position.set(0,.62,-2.28),e.add(W);const Q=new Y(new ue(.24,.12,.25),this.chromeMat);Q.position.set(-.2,.28,-2.26),e.add(Q);const P=new Y(new ue(.24,.12,.25),this.chromeMat);P.position.set(.2,.28,-2.26),e.add(P),this.leftExhaustLocal.set(-.2,.28,-2.28),this.rightExhaustLocal.set(.2,.28,-2.28);for(const O of[-.78,.78]){for(let j=0;j<4;j++){const K=(j-1.5)*.09,I=new Y(new ue(.07,.07,.06),new ct({color:15136767}));I.position.set(O+K*.6,.46,2.24+K*.2),e.add(I)}this.createVolumetricBeam(e,O,.46,2.26)}this.installWheels(e,1119776,!1)}buildTitanMuscle(e){const n=new ue(2.18,.44,4.5),i=new Y(n,this.carPaintMaterial);i.position.y=.38,i.castShadow=!0,e.add(i);const r=new ue(2.08,.32,1.7),s=new Y(r,this.carPaintMaterial);s.position.set(0,.52,1.4),s.castShadow=!0,e.add(s);const a=new Y(new ue(.58,.36,.7),this.chromeMat);a.position.set(0,.82,1.35),e.add(a);const o=new lt(.07,.07,.03,12);o.rotateX(Math.PI/2);const l=new ct({color:16716066});for(let u=-.16;u<=.16;u+=.16){const _=new Y(o,l);_.position.set(u,.84,1.71),e.add(_)}const c=new Y(new ue(2.24,.08,.7),this.carbonMat);c.position.set(0,.16,2.25),e.add(c);const h=new ue(1.8,.56,2.1);h.rotateX(.04);const d=new Y(h,this.glassMat);d.position.set(0,.8,-.15),d.castShadow=!0,e.add(d);for(let u=0;u<4;u++){const _=new Y(new ue(1.4,.04,.12),this.carbonMat);_.position.set(0,.94-u*.08,-.85-u*.18),e.add(_)}const f=new ue(2.1,.44,1.2),p=new Y(f,this.carPaintMaterial);p.position.set(0,.58,-1.6),p.castShadow=!0,e.add(p);const v=new Y(new ue(2.12,.16,.28),this.carbonMat);v.position.set(0,.86,-2.18),v.rotation.x=.35,e.add(v);for(const u of[-.7,.7])for(let _=-.14;_<=.14;_+=.14){const g=new Y(new ue(.06,.22,.06),this.brakeLightMaterial);g.position.set(u+_,.56,-2.26),e.add(g)}const x=new Y(new lt(.11,.11,.25,12),this.chromeMat);x.rotateX(Math.PI/2),x.position.set(-.55,.26,-2.25),e.add(x);const m=new Y(new lt(.11,.11,.25,12),this.chromeMat);m.rotateX(Math.PI/2),m.position.set(.55,.26,-2.25),e.add(m),this.leftExhaustLocal.set(-.55,.26,-2.25),this.rightExhaustLocal.set(.55,.26,-2.25);for(const u of[-.75,.75]){const _=new Y(new ue(.36,.14,.08),new ct({color:16777215}));_.position.set(u,.46,2.24),e.add(_);const g=new Y(new lt(.09,.09,.06,12),new ct({color:16755200}));g.rotateX(Math.PI/2),g.position.set(u*.45,.34,2.26),e.add(g),this.createVolumetricBeam(e,u,.46,2.26)}this.installWheels(e,2236962,!0)}installWheels(e,n,i){const r=[{x:-1.02,y:.34,z:1.35,isFront:!0,isRearMuscle:!1},{x:1.02,y:.34,z:1.35,isFront:!0,isRearMuscle:!1},{x:-1.04,y:.36,z:-1.35,isFront:!1,isRearMuscle:i},{x:1.04,y:.36,z:-1.35,isFront:!1,isRearMuscle:i}];for(const s of r){const a=this.createDetailedWheel(s.isFront,s.isRearMuscle,n);a.position.set(s.x,s.y,s.z),e.add(a),this.allWheels.push(a),s.isFront&&this.frontWheels.push(a)}}createDetailedWheel(e,n,i){const r=new Tn,s=n?.38:e?.34:.36,a=n?.42:e?.28:.34,o=new lt(s,s,a,24);o.rotateZ(Math.PI/2);const l=new Qe({color:1184791,roughness:.8,metalness:.08}),c=new Y(o,l);c.castShadow=!0,r.add(c);const h=new lt(s*.72,s*.72,a*.4,16);h.rotateZ(Math.PI/2);const d=new Qe({color:3159357,metalness:.9,roughness:.25}),f=new Y(h,d);r.add(f);const p=new ue(a*.6,.16,.14),v=new Qe({color:16711720,metalness:.85,roughness:.15}),x=new Y(p,v);x.position.set(0,s*.38,0),r.add(x);const m=new lt(s*.68,s*.68,a+.02,16);m.rotateZ(Math.PI/2);const u=new Qe({color:i,metalness:.92,roughness:.14,envMapIntensity:2.2}),_=new Y(m,u);r.add(_);const g=new lt(s*.22,s*.22,a+.03,12);g.rotateZ(Math.PI/2);const M=new Y(g,this.chromeMat);return r.add(M),r}createVolumetricBeam(e,n,i,r){const a=new xd(2.8,26,16,1,!0);a.rotateX(Math.PI/2),a.translate(0,0,26/2);const o=new ct({color:10083839,transparent:!0,opacity:.14,blending:Ps,depthWrite:!1,side:si}),l=new Y(a,o);l.position.set(n,i,r),e.add(l),this.headlightCones.push(l)}update(e,n){if(this.isCrashed){this.speedKmh=Math.max(0,this.speedKmh-180*e),this.mesh.position.z+=this.speedKmh/3.6*e,this.updateBounds();return}this.isBraking=n.brake;let i=0;n.nitro&&this.nitroReserve>0&&n.throttle?(this.isNitroActive=!0,this.nitroReserve=Math.max(0,this.nitroReserve-22*e),i=this.nitroMaxSpeedKmh,this.accelerationRate=65):(this.isNitroActive=!1,this.speedKmh>100&&(this.nitroReserve=Math.min(100,this.nitroReserve+4.5*e)),n.throttle?(i=this.maxSpeedKmh,this.accelerationRate=32):n.brake?(i=0,this.accelerationRate=95):(i=40,this.accelerationRate=18)),this.speedKmh<i?this.speedKmh=Math.min(i,this.speedKmh+this.accelerationRate*e):this.speedKmh=Math.max(i,this.speedKmh-this.accelerationRate*1.6*e);const s=14.5*Math.min(1,Math.max(.2,this.speedKmh/140));let a=0;n.steerAxis!==void 0&&Math.abs(n.steerAxis)>.01?a=Sn.clamp(n.steerAxis,-1,1):n.steerLeft?a=1:n.steerRight&&(a=-1),this.steeringInertia=Sn.lerp(this.steeringInertia,a,e*(a!==0?12:10)),this.lateralVelocity=this.steeringInertia*s,this.mesh.position.x+=this.lateralVelocity*e,this.mesh.position.x<-7.1?(this.mesh.position.x=-7.1,this.steeringInertia=0):this.mesh.position.x>7.1&&(this.mesh.position.x=7.1,this.steeringInertia=0);const o=this.speedKmh/3.6;this.mesh.position.z+=o*e;const l=this.steeringInertia*.08,c=n.brake?.04:this.isNitroActive?-.05:0;this.mesh.rotation.z=Sn.lerp(this.mesh.rotation.z,l,e*10),this.mesh.rotation.x=Sn.lerp(this.mesh.rotation.x,c,e*8),this.mesh.rotation.y=Sn.lerp(this.mesh.rotation.y,this.steeringInertia*.06,e*10);const h=this.steeringInertia*.35;for(const f of this.frontWheels)f.rotation.y=h;const d=o*e*4;for(const f of this.allWheels)f.rotation.x+=d;if(this.activeAeroFlaps.length>0){const f=n.brake?.45:Math.abs(this.steeringInertia)*.2;for(const p of this.activeAeroFlaps)p.rotation.x=Sn.lerp(p.rotation.x,-f,e*8)}n.brake?this.brakeLightMaterial.color.setHex(16711697):this.brakeLightMaterial.color.setHex(5570560),this.calculateGearAndRPM(),this.leftExhaustPos.copy(this.leftExhaustLocal).applyMatrix4(this.mesh.matrixWorld),this.rightExhaustPos.copy(this.rightExhaustLocal).applyMatrix4(this.mesh.matrixWorld),this.updateBounds()}calculateGearAndRPM(){const e=this.speedKmh;e<45?(this.currentGear=1,this.currentRPM=900+e/45*6e3):e<90?(this.currentGear=2,this.currentRPM=3500+(e-45)/45*4500):e<140?(this.currentGear=3,this.currentRPM=4e3+(e-90)/50*4400):e<195?(this.currentGear=4,this.currentRPM=4500+(e-140)/55*4200):e<245?(this.currentGear=5,this.currentRPM=4800+(e-195)/50*3800):(this.currentGear=6,this.currentRPM=5200+Math.min(3200,(e-245)/60*3200))}updateBounds(){this.bounds.setFromCenterAndSize(new N(this.mesh.position.x,this.mesh.position.y+.6,this.mesh.position.z),this.carSize)}reset(e=1){this.mesh.position.set(Fs.LANES[e],0,0),this.mesh.rotation.set(0,0,0),this.speedKmh=0,this.steeringInertia=0,this.lateralVelocity=0,this.nitroReserve=100,this.isCrashed=!1,this.isNitroActive=!1,this.updateBounds()}}class CT{scene;poolSize=14;vehicles=[];taxiMaterial;sedanMaterial;suvMaterial;truckCabMaterial;truckTankMaterial;glassMaterial;tireMaterial;taillightMaterial;constructor(e){this.scene=e,this.taxiMaterial=new Qe({color:16763904,metalness:.6,roughness:.3}),this.sedanMaterial=new Qe({color:14870768,metalness:.8,roughness:.25}),this.suvMaterial=new Qe({color:1712172,metalness:.7,roughness:.35}),this.truckCabMaterial=new Qe({color:3244750,metalness:.5,roughness:.4}),this.truckTankMaterial=new Qe({color:9741240,metalness:.95,roughness:.15}),this.glassMaterial=new Il({color:988970,roughness:.1,metalness:.9,opacity:.85,transparent:!0}),this.tireMaterial=new Qe({color:1118484,roughness:.8,metalness:.1}),this.taillightMaterial=new ct({color:12259601}),this.initPool()}initPool(){const e=["taxi","sedan","suv","truck"];for(let n=0;n<this.poolSize;n++){const i=e[n%e.length],r=this.createVehicleModel(i);r.mesh.position.set(0,-999,0),this.scene.add(r.mesh),this.vehicles.push(r)}}createVehicleModel(e){const n=new Tn;let i=new N(2,1.4,4.4);if(e==="truck"){i=new N(2.5,3.2,9.2);const r=new ue(2.4,2.8,2.8),s=new Y(r,this.truckCabMaterial);s.position.set(0,1.6,2.6),s.castShadow=!0,n.add(s);const a=new lt(1.25,1.25,5.8,16);a.rotateX(Math.PI/2);const o=new Y(a,this.truckTankMaterial);o.position.set(0,1.8,-1.8),o.castShadow=!0,n.add(o);const l=new ue(2.3,.4,6.2),c=new Y(l,this.tireMaterial);c.position.set(0,.5,-1.8),n.add(c);const h=new lt(.48,.48,.35,16);h.rotateZ(Math.PI/2);const d=[3.2,1.8,-1,-2.4,-3.8];for(const f of d){const p=new Y(h,this.tireMaterial);p.position.set(-1.15,.48,f),n.add(p);const v=new Y(h,this.tireMaterial);v.position.set(1.15,.48,f),n.add(v)}}else{const r=e==="suv",s=e==="taxi",a=r?.65:.45,o=r?.75:.5;i=new N(2,r?1.65:1.35,4.4);const l=s?this.taxiMaterial:r?this.suvMaterial:this.sedanMaterial,c=new ue(2,a,4.4),h=new Y(c,l);h.position.y=.35+a/2,h.castShadow=!0,n.add(h);const d=new ue(1.7,o,2.2),f=new Y(d,this.glassMaterial);if(f.position.set(0,.35+a+o/2-.05,-.2),n.add(f),s){const _=new ue(.6,.16,.25),g=new ct({color:16773290}),M=new Y(_,g);M.position.set(0,.35+a+o+.08,-.2),n.add(M)}const p=new lt(.32,.32,.24,16);p.rotateZ(Math.PI/2);const v=[[-.95,.32,1.3],[.95,.32,1.3],[-.95,.32,-1.3],[.95,.32,-1.3]];for(const[_,g,M]of v){const b=new Y(p,this.tireMaterial);b.position.set(_,g,M),n.add(b)}const x=new ue(.4,.12,.08),m=new Y(x,this.taillightMaterial);m.position.set(-.65,.35+a*.7,-2.2),n.add(m);const u=new Y(x,this.taillightMaterial);u.position.set(.65,.35+a*.7,-2.2),n.add(u)}return{mesh:n,type:e,speedKmh:80+Math.random()*30,laneIndex:0,bounds:new sr,size:i,active:!1,nearMissed:!1}}reset(e){let n=e+45;for(let i=0;i<this.vehicles.length;i++){const r=this.vehicles[i],s=Math.floor(Math.random()*4),a=Fs.LANES[s];r.active=!0,r.laneIndex=s,r.nearMissed=!1,r.speedKmh=r.type==="truck"?70+Math.random()*15:85+Math.random()*25,r.mesh.position.set(a,0,n),this.updateVehicleBounds(r),n+=28+Math.random()*32}}update(e,n,i,r,s,a,o){for(const l of this.vehicles){if(!l.active)continue;const c=l.speedKmh/3.6;if(l.mesh.position.z+=c*e,this.updateVehicleBounds(l),s.intersectsBox(l.bounds)){o();return}if(!l.nearMissed&&r>115){const h=Math.abs(i-l.mesh.position.x),d=Math.abs(n-l.mesh.position.z),f=l.size.x/2+1.05+.65,p=l.size.z/2+2.3;h<f&&d<p&&h>l.size.x/2+.95&&(l.nearMissed=!0,a(150))}if(l.mesh.position.z<n-35){let h=n+50;for(const f of this.vehicles)f.active&&f.mesh.position.z>h&&(h=f.mesh.position.z);const d=Math.floor(Math.random()*4);l.laneIndex=d,l.mesh.position.set(Fs.LANES[d],0,h+25+Math.random()*30),l.speedKmh=l.type==="truck"?70+Math.random()*15:85+Math.random()*25,l.nearMissed=!1,this.updateVehicleBounds(l)}}}updateVehicleBounds(e){e.bounds.setFromCenterAndSize(new N(e.mesh.position.x,e.mesh.position.y+e.size.y/2,e.mesh.position.z),e.size)}}class RT{ctx=null;masterGain=null;isMuted=!1;volume=.8;engineOsc1=null;engineOsc2=null;engineSubOsc=null;engineFilter=null;engineGain=null;nitroNoiseNode=null;nitroGain=null;nitroFilter=null;isNitroPlaying=!1;sirenOsc=null;sirenLfo=null;sirenLfoGain=null;sirenGain=null;sirenPanner=null;skidGain=null;isSkidPlaying=!1;rainNoiseNode=null;rainFilter=null;rainGain=null;isRainPlaying=!1;constructor(){}init(){if(!this.ctx)try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.volume,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupEngineSound(),this.setupNitroSound(),this.setupSirenSound(),this.setupSkidSound(),this.setupRainSound()}catch(e){console.warn("Web Audio API not supported:",e)}}unlock(){this.ctx||this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.isMuted?0:this.volume,this.ctx.currentTime,.05)}toggleMute(){return this.isMuted=!this.isMuted,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.isMuted?0:this.volume,this.ctx.currentTime,.05),this.isMuted}getIsMuted(){return this.isMuted}setupEngineSound(){if(!this.ctx||!this.masterGain)return;this.engineOsc1=this.ctx.createOscillator(),this.engineOsc1.type="sawtooth",this.engineOsc1.frequency.setValueAtTime(55,this.ctx.currentTime),this.engineOsc2=this.ctx.createOscillator(),this.engineOsc2.type="triangle",this.engineOsc2.frequency.setValueAtTime(110,this.ctx.currentTime),this.engineSubOsc=this.ctx.createOscillator(),this.engineSubOsc.type="square",this.engineSubOsc.frequency.setValueAtTime(27.5,this.ctx.currentTime),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(320,this.ctx.currentTime),this.engineFilter.Q.setValueAtTime(3.5,this.ctx.currentTime),this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(0,this.ctx.currentTime);const e=this.ctx.createGain();e.gain.setValueAtTime(.22,this.ctx.currentTime),this.engineOsc1.connect(this.engineFilter),this.engineOsc2.connect(this.engineFilter),this.engineSubOsc.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(e),e.connect(this.masterGain),this.engineOsc1.start(),this.engineOsc2.start(),this.engineSubOsc.start()}updateEngine(e,n,i){if(!this.ctx||!this.engineGain||!this.engineOsc1||!this.engineOsc2||!this.engineSubOsc||!this.engineFilter)return;if(!i){this.engineGain.gain.setTargetAtTime(0,this.ctx.currentTime,.1);return}const r=Math.max(0,Math.min(1,(e-800)/7700)),s=48+r*240,a=this.ctx.currentTime;this.engineOsc1.frequency.setTargetAtTime(s,a,.04),this.engineOsc2.frequency.setTargetAtTime(s*1.5,a,.04),this.engineSubOsc.frequency.setTargetAtTime(s*.5,a,.04);const o=300+r*1800+n*1200;this.engineFilter.frequency.setTargetAtTime(o,a,.05);const l=.35+n*.45;this.engineGain.gain.setTargetAtTime(l,a,.05)}setupNitroSound(){!this.ctx||!this.masterGain||(this.nitroGain=this.ctx.createGain(),this.nitroGain.gain.setValueAtTime(0,this.ctx.currentTime),this.nitroFilter=this.ctx.createBiquadFilter(),this.nitroFilter.type="bandpass",this.nitroFilter.frequency.setValueAtTime(1400,this.ctx.currentTime),this.nitroFilter.Q.setValueAtTime(1.5,this.ctx.currentTime),this.nitroFilter.connect(this.nitroGain),this.nitroGain.connect(this.masterGain))}createWhiteNoiseBuffer(){if(!this.ctx)throw new Error("No context");const e=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<e;r++)i[r]=Math.random()*2-1;return n}startNitro(){if(!(!this.ctx||!this.nitroGain||!this.nitroFilter)&&!this.isNitroPlaying){this.isNitroPlaying=!0;try{this.nitroNoiseNode=this.ctx.createBufferSource(),this.nitroNoiseNode.buffer=this.createWhiteNoiseBuffer(),this.nitroNoiseNode.loop=!0,this.nitroNoiseNode.connect(this.nitroFilter),this.nitroNoiseNode.start();const e=this.ctx.currentTime;this.nitroGain.gain.cancelScheduledValues(e),this.nitroGain.gain.setValueAtTime(0,e),this.nitroGain.gain.linearRampToValueAtTime(.55,e+.15)}catch{}}}stopNitro(){if(!this.ctx||!this.nitroGain||!this.isNitroPlaying)return;const e=this.ctx.currentTime;this.nitroGain.gain.cancelScheduledValues(e),this.nitroGain.gain.linearRampToValueAtTime(0,e+.2),setTimeout(()=>{if(this.nitroNoiseNode){try{this.nitroNoiseNode.stop(),this.nitroNoiseNode.disconnect()}catch{}this.nitroNoiseNode=null}this.isNitroPlaying=!1},250),this.playBlowOffValve()}playBlowOffValve(){if(!(!this.ctx||!this.masterGain))try{const e=this.ctx.createBufferSource();e.buffer=this.createWhiteNoiseBuffer();const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.setValueAtTime(2200,this.ctx.currentTime);const i=this.ctx.createGain(),r=this.ctx.currentTime;i.gain.setValueAtTime(.4,r),i.gain.exponentialRampToValueAtTime(.001,r+.35),e.connect(n),n.connect(i),i.connect(this.masterGain),e.start(r),e.stop(r+.4)}catch{}}setupSirenSound(){!this.ctx||!this.masterGain||(this.sirenOsc=this.ctx.createOscillator(),this.sirenOsc.type="sawtooth",this.sirenOsc.frequency.setValueAtTime(800,this.ctx.currentTime),this.sirenLfo=this.ctx.createOscillator(),this.sirenLfo.type="sine",this.sirenLfo.frequency.setValueAtTime(.65,this.ctx.currentTime),this.sirenLfoGain=this.ctx.createGain(),this.sirenLfoGain.gain.setValueAtTime(320,this.ctx.currentTime),this.sirenLfo.connect(this.sirenLfoGain),this.sirenLfoGain.connect(this.sirenOsc.frequency),this.sirenGain=this.ctx.createGain(),this.sirenGain.gain.setValueAtTime(0,this.ctx.currentTime),this.ctx.createStereoPanner?(this.sirenPanner=this.ctx.createStereoPanner(),this.sirenPanner.pan.setValueAtTime(0,this.ctx.currentTime),this.sirenOsc.connect(this.sirenGain),this.sirenGain.connect(this.sirenPanner),this.sirenPanner.connect(this.masterGain)):(this.sirenOsc.connect(this.sirenGain),this.sirenGain.connect(this.masterGain)),this.sirenOsc.start(),this.sirenLfo.start())}updateSiren(e,n,i){if(!this.ctx||!this.sirenGain)return;const r=this.ctx.currentTime;if(e){const s=Math.max(0,Math.min(.65,(1-n)*.65));if(this.sirenGain.gain.setTargetAtTime(s,r,.1),this.sirenPanner){const a=Math.max(-.85,Math.min(.85,i*.2));this.sirenPanner.pan.setTargetAtTime(a,r,.1)}}else this.sirenGain.gain.setTargetAtTime(0,r,.3)}setupSkidSound(){!this.ctx||!this.masterGain||(this.skidGain=this.ctx.createGain(),this.skidGain.gain.setValueAtTime(0,this.ctx.currentTime),this.skidGain.connect(this.masterGain))}updateTireSkid(e){if(!this.ctx||!this.skidGain)return;const n=this.ctx.currentTime;if(e>.15){this.isSkidPlaying||(this.isSkidPlaying=!0);const i=Math.min(.4,(e-.15)*.6);this.skidGain.gain.setTargetAtTime(i,n,.05)}else this.skidGain.gain.setTargetAtTime(0,n,.1),this.isSkidPlaying=!1}playNearMiss(){if(!(!this.ctx||!this.masterGain))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(350,i),e.frequency.exponentialRampToValueAtTime(1400,i+.15),e.frequency.exponentialRampToValueAtTime(220,i+.35),n.gain.setValueAtTime(.4,i),n.gain.exponentialRampToValueAtTime(.001,i+.35),e.connect(n),n.connect(this.masterGain),e.start(i),e.stop(i+.36)}catch{}}playCrash(){if(!(!this.ctx||!this.masterGain))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(120,i),e.frequency.exponentialRampToValueAtTime(30,i+.4),n.gain.setValueAtTime(.8,i),n.gain.exponentialRampToValueAtTime(.001,i+.45),e.connect(n),n.connect(this.masterGain),e.start(i),e.stop(i+.5);const r=this.ctx.createBufferSource();r.buffer=this.createWhiteNoiseBuffer();const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(800,i);const a=this.ctx.createGain();a.gain.setValueAtTime(.7,i),a.gain.exponentialRampToValueAtTime(.001,i+.6),r.connect(s),s.connect(a),a.connect(this.masterGain),r.start(i),r.stop(i+.65)}catch{}}playCoinPickup(){if(!(!this.ctx||!this.masterGain))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(987.77,i),e.frequency.setValueAtTime(1318.51,i+.08),n.gain.setValueAtTime(.3,i),n.gain.exponentialRampToValueAtTime(.001,i+.25),e.connect(n),n.connect(this.masterGain),e.start(i),e.stop(i+.26)}catch{}}setupRainSound(){if(!(!this.ctx||!this.masterGain||this.isRainPlaying))try{const e=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<e;r++)i[r]=(Math.random()*2-1)*.4;this.rainNoiseNode=this.ctx.createBufferSource(),this.rainNoiseNode.buffer=n,this.rainNoiseNode.loop=!0,this.rainFilter=this.ctx.createBiquadFilter(),this.rainFilter.type="bandpass",this.rainFilter.frequency.setValueAtTime(1400,this.ctx.currentTime),this.rainFilter.Q.setValueAtTime(1.2,this.ctx.currentTime),this.rainGain=this.ctx.createGain(),this.rainGain.gain.setValueAtTime(0,this.ctx.currentTime),this.rainNoiseNode.connect(this.rainFilter),this.rainFilter.connect(this.rainGain),this.rainGain.connect(this.masterGain),this.rainNoiseNode.start(),this.isRainPlaying=!0}catch(e){console.warn("Rain sound init failed:",e)}}startRain(){(!this.ctx||!this.rainGain)&&this.setupRainSound(),this.ctx&&this.rainGain&&this.rainGain.gain.setTargetAtTime(.32,this.ctx.currentTime,.4)}stopRain(){this.ctx&&this.rainGain&&this.rainGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.4)}playThunder(){if(!(!this.ctx||!this.masterGain))try{const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(110,e),n.frequency.exponentialRampToValueAtTime(28,e+2.2),i.gain.setValueAtTime(.65,e),i.gain.exponentialRampToValueAtTime(.001,e+2.4),n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+2.5);const r=Math.floor(this.ctx.sampleRate*.8),s=this.ctx.createBuffer(1,r,this.ctx.sampleRate),a=s.getChannelData(0);for(let h=0;h<r;h++)a[h]=Math.random()*2-1;const o=this.ctx.createBufferSource();o.buffer=s;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(320,e);const c=this.ctx.createGain();c.gain.setValueAtTime(.4,e),c.gain.exponentialRampToValueAtTime(.001,e+1.2),o.connect(l),l.connect(c),c.connect(this.masterGain),o.start(e),o.stop(e+1.2)}catch{}}playCinematicIntroSound(){if(this.init(),!(!this.ctx||!this.masterGain))try{this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(65,e),n.frequency.exponentialRampToValueAtTime(220,e+.35),n.frequency.exponentialRampToValueAtTime(80,e+.85),i.gain.setValueAtTime(.6,e),i.gain.exponentialRampToValueAtTime(.001,e+.95),n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+1);const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(55,e+.9),r.frequency.exponentialRampToValueAtTime(260,e+1.3),r.frequency.exponentialRampToValueAtTime(90,e+1.9),s.gain.setValueAtTime(.001,e),s.gain.setValueAtTime(.7,e+.9),s.gain.exponentialRampToValueAtTime(.001,e+2.1),r.connect(s),s.connect(this.masterGain),r.start(e+.9),r.stop(e+2.2);const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(45,e),a.frequency.exponentialRampToValueAtTime(32,e+1.8),o.gain.setValueAtTime(.8,e),o.gain.exponentialRampToValueAtTime(.001,e+1.9),a.connect(o),o.connect(this.masterGain),a.start(e),a.stop(e+2);const l=Math.floor(this.ctx.sampleRate*.9),c=this.ctx.createBuffer(1,l,this.ctx.sampleRate),h=c.getChannelData(0);for(let v=0;v<l;v++)h[v]=Math.random()*2-1;const d=this.ctx.createBufferSource();d.buffer=c;const f=this.ctx.createBiquadFilter();f.type="bandpass",f.frequency.setValueAtTime(1800,e+1.2),f.frequency.exponentialRampToValueAtTime(600,e+2.1);const p=this.ctx.createGain();p.gain.setValueAtTime(.001,e),p.gain.setValueAtTime(.5,e+1.2),p.gain.exponentialRampToValueAtTime(.001,e+2.2),d.connect(f),f.connect(p),p.connect(this.masterGain),d.start(e+1.2),d.stop(e+2.3)}catch{}}playCountdownBeep(e){if(this.init(),!(!this.ctx||!this.masterGain))try{this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const n=this.ctx.currentTime;if(e){[523.25,659.25,783.99,1046.5].forEach(s=>{const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(s,n),o.gain.setValueAtTime(.35,n),o.gain.exponentialRampToValueAtTime(.001,n+.65),a.connect(o),o.connect(this.masterGain),a.start(n),a.stop(n+.7)});const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(80,n),i.frequency.exponentialRampToValueAtTime(35,n+.5),r.gain.setValueAtTime(.7,n),r.gain.exponentialRampToValueAtTime(.001,n+.6),i.connect(r),r.connect(this.masterGain),i.start(n),i.stop(n+.65)}else{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(880,n),r.gain.setValueAtTime(.45,n),r.gain.exponentialRampToValueAtTime(.001,n+.18),i.connect(r),r.connect(this.masterGain),i.start(n),i.stop(n+.2)}}catch{}}playCoinUnlock(){if(this.init(),!(!this.ctx||!this.masterGain))try{const e=this.ctx.currentTime;[1046.5,1318.51,1567.98,2093].forEach((n,i)=>{const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,e+i*.06),s.gain.setValueAtTime(.4,e+i*.06),s.gain.exponentialRampToValueAtTime(.001,e+i*.06+.35),r.connect(s),s.connect(this.masterGain),r.start(e+i*.06),r.stop(e+i*.06+.4)})}catch{}}}const tt=new RT;class $e{static enabled=!0;static setEnabled(e){this.enabled=e}static isEnabled(){return this.enabled}static nearMiss(){if(!(!this.enabled||typeof navigator>"u"||!("vibrate"in navigator)))try{navigator.vibrate(18)}catch{}}static nitroPulse(){if(!(!this.enabled||typeof navigator>"u"||!("vibrate"in navigator)))try{navigator.vibrate([25,20,25])}catch{}}static policeImpact(){if(!(!this.enabled||typeof navigator>"u"||!("vibrate"in navigator)))try{navigator.vibrate([60,30,80])}catch{}}static crash(){if(!(!this.enabled||typeof navigator>"u"||!("vibrate"in navigator)))try{navigator.vibrate([120,50,200])}catch{}}static buttonTap(){if(!(!this.enabled||typeof navigator>"u"||!("vibrate"in navigator)))try{navigator.vibrate(10)}catch{}}}class bT{scene;state="IDLE";cruisers=[];pursuitScore=0;timeInPursuit=0;evasionTimer=0;strobeTimer=0;strobePhase=!1;ramCooldown=0;redBlueFlashIntensity=0;distanceToClosest=999;constructor(e){this.scene=e,this.initCruisers()}initCruisers(){for(let e=0;e<2;e++){const n=this.buildPoliceCruiserModel();n.mesh.position.set(e===0?-1.8:1.8,0,-999),this.scene.add(n.mesh),this.cruisers.push(n)}}buildPoliceCruiserModel(){const e=new Tn,n=new N(2.1,1.45,4.6),i=new ue(2.1,.48,4.6),r=new Qe({color:592399,metalness:.8,roughness:.2}),s=new Y(i,r);s.position.y=.4,s.castShadow=!0,e.add(s);const a=new ue(2.12,.44,1.8),o=new Qe({color:15791352,metalness:.4,roughness:.3}),l=new Y(a,o);l.position.set(0,.4,0),e.add(l);const c=new ue(1.7,.52,2.3),h=new Il({color:395534,roughness:.1,metalness:.9,opacity:.9,transparent:!0}),d=new Y(c,h);d.position.set(0,.82,-.15),e.add(d);const f=new ue(1.9,.35,.2),p=new Qe({color:2237998,metalness:.9,roughness:.3}),v=new Y(f,p);v.position.set(0,.38,2.35),e.add(v);const x=new ue(1.2,.08,.2),m=new Y(x,p);m.position.set(0,1.12,-.2),e.add(m);const u=new ue(.45,.12,.18),_=new ct({color:16711714}),g=new ct({color:22015}),M=new Y(u,_);M.position.set(-.35,1.18,-.2),e.add(M);const b=new Y(u,g);b.position.set(.35,1.18,-.2),e.add(b);const A=new gh(16711714,2.5,16);A.position.set(-.35,1.3,-.2),e.add(A);const C=new gh(26367,2.5,16);C.position.set(.35,1.3,-.2),e.add(C);const D=new lt(.34,.34,.26,16);D.rotateZ(Math.PI/2);const E=new Qe({color:1118484,roughness:.8}),w=[[-.98,.34,1.35],[.98,.34,1.35],[-.98,.34,-1.35],[.98,.34,-1.35]];for(const[z,W,Q]of w){const P=new Y(D,E);P.position.set(z,W,Q),e.add(P)}return{mesh:e,speedKmh:200,targetLaneX:0,lateralVel:0,bounds:new sr,size:n,redLight:A,blueLight:C,redMesh:M,blueMesh:b,active:!1}}triggerPursuit(e,n){if(this.state==="PURSUIT")return;this.state="PURSUIT",this.timeInPursuit=0,this.evasionTimer=0,this.ramCooldown=1.5;const i=[-18,-32],r=[n>0?-1.8:1.8,n];this.cruisers.forEach((s,a)=>{s.active=!0,s.speedKmh=270,s.targetLaneX=r[a],s.mesh.position.set(r[a],0,e+i[a]),this.updateCruiserBounds(s)}),tt.updateSiren(!0,.3,0)}update(e,n,i,r,s,a,o){if(this.state!=="PURSUIT"){this.redBlueFlashIntensity=0,tt.updateSiren(!1,1,0);return}this.timeInPursuit+=e,this.ramCooldown-=e,this.strobeTimer+=e*16,this.strobeTimer>1&&(this.strobeTimer=0,this.strobePhase=!this.strobePhase);const l=this.strobePhase,c=!this.strobePhase;this.redBlueFlashIntensity=.45+(this.strobePhase?.35:-.2);let h=999,d=0;for(let p=0;p<this.cruisers.length;p++){const v=this.cruisers[p];if(!v.active)continue;v.redLight.intensity=l?3.5:.2,v.blueLight.intensity=c?3.5:.2,v.redMesh.material.color.setHex(l?16711714:4456453),v.blueMesh.material.color.setHex(c?26367:4420);const x=v.mesh.position.z-n,m=Math.abs(x);if(m<h&&(h=m,d=v.mesh.position.x-i),x<-4?v.speedKmh=Math.max(r+28,260):x>6?v.speedKmh=Math.max(60,r-15):v.speedKmh=r+(p===0?4:-3),v.mesh.position.z+=v.speedKmh/3.6*e,p===0?Math.abs(x)<3.5&&this.ramCooldown<=0?(v.targetLaneX=i,this.ramCooldown=2.2,$e.policeImpact()):v.targetLaneX=i>0?i-3.2:i+3.2:v.targetLaneX=i,v.mesh.position.x=Sn.lerp(v.mesh.position.x,v.targetLaneX,e*3.8),this.updateCruiserBounds(v),s.intersectsBox(v.bounds)){$e.policeImpact();const u=v.mesh.position.x<i?1:-1;i+=u*3.5*e}}this.distanceToClosest=h;const f=Math.min(1,h/60);tt.updateSiren(!0,f,d),h>75&&r>180?(this.evasionTimer+=e,this.evasionTimer>4.5&&(this.state="EVADED",this.cruisers.forEach(p=>p.active=!1),tt.updateSiren(!1,1,0),o(1e3))):this.evasionTimer=Math.max(0,this.evasionTimer-e*.8),h<5.5&&r<22&&this.timeInPursuit>2&&(this.state="BUSTED",tt.updateSiren(!1,1,0),a())}updateCruiserBounds(e){e.bounds.setFromCenterAndSize(new N(e.mesh.position.x,e.mesh.position.y+e.size.y/2,e.mesh.position.z),e.size)}reset(){this.state="IDLE",this.timeInPursuit=0,this.evasionTimer=0,this.redBlueFlashIntensity=0,this.cruisers.forEach(e=>{e.active=!1,e.mesh.position.set(0,-999,0)}),tt.updateSiren(!1,1,0)}}class LT{maxParticles=300;particles=[];geometry;material;points;positions;colors;constructor(e){this.positions=new Float32Array(this.maxParticles*3),this.colors=new Float32Array(this.maxParticles*3);for(let n=0;n<this.maxParticles;n++)this.particles.push({position:new N(0,-999,0),velocity:new N,color:new De(1,1,1),size:.2,alpha:1,life:0,maxLife:1,active:!1});this.geometry=new vn,this.geometry.setAttribute("position",new Cn(this.positions,3)),this.geometry.setAttribute("color",new Cn(this.colors,3)),this.material=new dv({size:.35,vertexColors:!0,transparent:!0,opacity:.85,blending:Ps,depthWrite:!1}),this.points=new xT(this.geometry,this.material),this.points.frustumCulled=!1,e.add(this.points)}emitNitroFlame(e,n,i){const r=[e,n];for(const s of r)this.spawnParticle(s.x+(Math.random()-.5)*.08,s.y+(Math.random()-.5)*.08,s.z+(Math.random()-.5)*.1,(Math.random()-.5)*.5,(Math.random()-.5)*.3,i-(8+Math.random()*6),Math.random()>.3?62463:26367,.3+Math.random()*.15,.18+Math.random()*.12)}emitTireSmoke(e){this.spawnParticle(e.x+(Math.random()-.5)*.15,e.y+.1,e.z+(Math.random()-.5)*.2,(Math.random()-.5)*1.5,.5+Math.random()*.8,(Math.random()-.5)*1.5,5596791,.4+Math.random()*.2,.4+Math.random()*.3)}emitSparks(e,n=12){for(let i=0;i<n;i++)this.spawnParticle(e.x,e.y,e.z,(Math.random()-.5)*12,2+Math.random()*8,(Math.random()-.5)*12,Math.random()>.5?16755200:16724736,.2+Math.random()*.15,.3+Math.random()*.25)}spawnParticle(e,n,i,r,s,a,o,l,c){const h=this.particles.find(d=>!d.active);h&&(h.active=!0,h.position.set(e,n,i),h.velocity.set(r,s,a),h.color.setHex(o),h.size=l,h.life=c,h.maxLife=c)}update(e){const n=this.geometry.attributes.position,i=this.geometry.attributes.color;for(let r=0;r<this.maxParticles;r++){const s=this.particles[r];if(!s.active){this.positions[r*3+1]=-999;continue}if(s.life-=e,s.life<=0){s.active=!1,this.positions[r*3+1]=-999;continue}s.position.x+=s.velocity.x*e,s.position.y+=s.velocity.y*e,s.position.z+=s.velocity.z*e,s.velocity.x*=.95,s.velocity.y-=9.8*e*.5,s.velocity.z*=.95;const a=s.life/s.maxLife;this.positions[r*3]=s.position.x,this.positions[r*3+1]=s.position.y,this.positions[r*3+2]=s.position.z,this.colors[r*3]=s.color.r*a,this.colors[r*3+1]=s.color.g*a,this.colors[r*3+2]=s.color.b*a}n.needsUpdate=!0,i.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}const fm=[{id:"apex_roadster",name:"Pagani Huayra BC",type:"roadster",price:0,unlocked:!0,topSpeedKmh:260,acceleration:9.4,handling:9.5,armor:6.5,color:"#e59500",underglowColor:"#ff7700"},{id:"veloce_gt",name:"Bugatti Bolide GT",type:"gt",price:3500,unlocked:!1,topSpeedKmh:310,acceleration:9.8,handling:8.9,armor:7,color:"#0055ff",underglowColor:"#00d4ff"},{id:"titan_v8",name:"Titan V8 Supercharged",type:"muscle",price:5e3,unlocked:!1,topSpeedKmh:275,acceleration:8.8,handling:7.8,armor:9.5,color:"#c21807",underglowColor:"#ff2200"}],pm={highScore:0,coins:500,totalNearMisses:0,totalPoliceEvaded:0,selectedCarId:"apex_roadster",audioVolume:.8,hapticsEnabled:!0,tiltSteeringEnabled:!1,playerCallsign:"VIPER_01"},PT=[{id:"lb_1",callsign:"CYBER_GHOST",score:98450,distanceMeters:12400,policeEvaded:8,carName:"Veloce GT",date:"SEP 20"},{id:"lb_2",callsign:"NEO_VIPER",score:84200,distanceMeters:9850,policeEvaded:6,carName:"Apex Roadster",date:"SEP 19"},{id:"lb_3",callsign:"TITAN_WARLORD",score:71900,distanceMeters:8200,policeEvaded:5,carName:"Titan V8",date:"SEP 18"},{id:"lb_4",callsign:"NIGHT_STALKER",score:58600,distanceMeters:6900,policeEvaded:4,carName:"Veloce GT",date:"SEP 17"},{id:"lb_5",callsign:"INDRAJIT_X",score:48500,distanceMeters:5600,policeEvaded:3,carName:"Apex Roadster",date:"SEP 16"},{id:"lb_6",callsign:"SYNTH_PULSE",score:38200,distanceMeters:4400,policeEvaded:2,carName:"Veloce GT",date:"SEP 15"},{id:"lb_7",callsign:"DRIFT_SPECTRE",score:29400,distanceMeters:3300,policeEvaded:2,carName:"Titan V8",date:"SEP 14"},{id:"lb_8",callsign:"BLADE_RUNNER",score:21600,distanceMeters:2500,policeEvaded:1,carName:"Apex Roadster",date:"SEP 12"},{id:"lb_9",callsign:"ZERO_COOL",score:15300,distanceMeters:1800,policeEvaded:1,carName:"Apex Roadster",date:"SEP 10"},{id:"lb_10",callsign:"HIGHWAY_COP",score:9200,distanceMeters:1200,policeEvaded:0,carName:"Titan V8",date:"SEP 08"}],mm="velocity_x_stats",gm="velocity_x_cars",vm="velocity_x_leaderboard";class Ht{static getStats(){try{const e=localStorage.getItem(mm);if(e)return{...pm,...JSON.parse(e)}}catch{}return{...pm}}static saveStats(e){const i={...this.getStats(),...e};try{localStorage.setItem(mm,JSON.stringify(i))}catch{}return i}static getCars(){try{const e=localStorage.getItem(gm);if(e){const n=JSON.parse(e);return fm.map(i=>{const r=n.find(s=>s.id===i.id);if(r){const s=r.color==="#00f3ff"&&i.id==="apex_roadster"?i.color:r.color,a=r.underglowColor==="#00f3ff"&&i.id==="apex_roadster"?i.underglowColor:r.underglowColor||i.underglowColor;return{...i,...r,name:i.name,color:s,underglowColor:a}}return i})}}catch{}return fm}static saveCars(e){try{localStorage.setItem(gm,JSON.stringify(e))}catch{}}static unlockCar(e){const n=this.getStats(),i=this.getCars(),r=i.find(s=>s.id===e);return r&&!r.unlocked&&n.coins>=r.price?(n.coins-=r.price,r.unlocked=!0,this.saveStats(n),this.saveCars(i),!0):!1}static updateCarCustomization(e,n,i){const r=this.getCars(),s=r.find(a=>a.id===e);s&&(s.color=n,s.underglowColor=i,this.saveCars(r))}static getLeaderboard(){try{const e=localStorage.getItem(vm);if(e)return JSON.parse(e).sort((i,r)=>r.score-i.score).slice(0,10)}catch{}return[...PT]}static addLeaderboardScore(e){const n=this.getLeaderboard(),i={...e,id:"lb_"+Date.now(),isPlayer:!0},s=[...n,i].sort((a,o)=>o.score-a.score).slice(0,10);try{localStorage.setItem(vm,JSON.stringify(s))}catch{}return s}}class ms{static instance=null;enabled=!1;supported=!1;steerAxis=0;rawAngle=0;calibratedAngle=0;baselineAngle=0;isCalibrated=!1;deadzoneDeg=2;maxSteerDeg=16;smoothing=14;boundHandleOrientation;constructor(){this.boundHandleOrientation=this.handleDeviceOrientation.bind(this),this.checkSupport()}static getInstance(){return ms.instance||(ms.instance=new ms),ms.instance}checkSupport(){typeof window<"u"&&"DeviceOrientationEvent"in window&&(this.supported=!0)}async requestPermission(){if(typeof window<"u"&&typeof DeviceOrientationEvent.requestPermission=="function")try{return await DeviceOrientationEvent.requestPermission()==="granted"?(this.supported=!0,!0):(this.supported=!1,!1)}catch(e){return console.warn("DeviceOrientation permission request failed:",e),!1}return this.supported}start(){typeof window>"u"||(this.enabled=!0,window.addEventListener("deviceorientation",this.boundHandleOrientation,{passive:!0}))}stop(){typeof window>"u"||(this.enabled=!1,this.steerAxis=0,this._targetSteer=0,window.removeEventListener("deviceorientation",this.boundHandleOrientation))}calibrate(){this.baselineAngle=this.rawAngle,this.isCalibrated=!0,this.calibratedAngle=0,this.steerAxis=0,this._targetSteer=0}handleDeviceOrientation(e){if(!this.enabled)return;let n=90;typeof window<"u"&&(window.screen?.orientation?.angle!==void 0?n=window.screen.orientation.angle:typeof window.orientation=="number"&&(n=window.orientation));let i=0;const r=e.beta??0,s=e.gamma??0;n===90?i=r:n===270||n===-90?i=-r:i=s,this.rawAngle=i,this.isCalibrated||(this.baselineAngle=i,this.isCalibrated=!0);let a=i-this.baselineAngle;a=Sn.clamp(a,-45,45),this.calibratedAngle=a;const o=Math.abs(a);let l=0;if(o>this.deadzoneDeg){const c=this.maxSteerDeg-this.deadzoneDeg,h=Math.min(1,(o-this.deadzoneDeg)/c),d=.7*h+.3*Math.pow(h,2);l=-Math.sign(a)*d}this._targetSteer=l}_targetSteer=0;update(e){return this.enabled?(this.steerAxis=Sn.lerp(this.steerAxis,this._targetSteer,Math.min(1,e*this.smoothing)),this.steerAxis):(this.steerAxis=0,0)}getState(){return{enabled:this.enabled,supported:this.supported,steerAxis:this.steerAxis,rawAngle:this.rawAngle,calibratedAngle:this.calibratedAngle,isCalibrated:this.isCalibrated}}}const cn=ms.getInstance();class NT{scene;maxRainDrops=900;geometry;material;lineSegments;positions;dropSpeeds;dropLengths;enabled=!1;boxWidth=36;boxDepth=90;boxHeight=28;constructor(e){this.scene=e,this.positions=new Float32Array(this.maxRainDrops*6),this.dropSpeeds=new Float32Array(this.maxRainDrops),this.dropLengths=new Float32Array(this.maxRainDrops);for(let n=0;n<this.maxRainDrops;n++){const i=n*6,r=(Math.random()-.5)*this.boxWidth,s=Math.random()*this.boxHeight,a=(Math.random()-.25)*this.boxDepth,o=1.2+Math.random()*.8;this.positions[i]=r,this.positions[i+1]=s+o,this.positions[i+2]=a,this.positions[i+3]=r,this.positions[i+4]=s,this.positions[i+5]=a,this.dropSpeeds[n]=48+Math.random()*24,this.dropLengths[n]=o}this.geometry=new vn,this.geometry.setAttribute("position",new Cn(this.positions,3)),this.material=new hv({color:8965375,transparent:!0,opacity:.55,blending:Ps,depthWrite:!1}),this.lineSegments=new _T(this.geometry,this.material),this.lineSegments.frustumCulled=!1,this.lineSegments.visible=!1,this.scene.add(this.lineSegments)}setEnabled(e){this.enabled=e,this.lineSegments.visible=e}update(e,n,i,r){if(!this.enabled)return;const s=this.geometry.attributes.position,a=s.array,o=r/3.6*.08;for(let l=0;l<this.maxRainDrops;l++){const c=l*6,h=this.dropSpeeds[l],d=this.dropLengths[l];a[c+1]-=h*e,a[c+4]=a[c+1]-d,a[c+2]-=o*e,a[c+5]=a[c+2]+o*.04;const f=a[c+2]-n,p=a[c]-i;if(a[c+1]<=.1||f<-25||f>75||Math.abs(p)>this.boxWidth/2){const v=i+(Math.random()-.5)*this.boxWidth,x=this.boxHeight-Math.random()*3,m=n+(Math.random()-.2)*this.boxDepth;a[c]=v,a[c+1]=x,a[c+2]=m,a[c+3]=v,a[c+4]=x-d,a[c+5]=m}}s.needsUpdate=!0}dispose(){this.scene.remove(this.lineSegments),this.geometry.dispose(),this.material.dispose()}}class DT{currentWeather="CLEAR";rainSystem;roadManager;dirLight;ambientLight;scene;baseDirIntensity=1.8;baseAmbientIntensity=1.4;lightningTimer=8;isFlashing=!1;flashDuration=0;onLightningFlash;onWeatherChange;constructor(e,n,i,r){this.scene=e,this.dirLight=n,this.ambientLight=i,this.roadManager=r,this.rainSystem=new NT(e)}setWeather(e){this.currentWeather=e;const n=e==="RAIN";this.rainSystem.setEnabled(n),this.roadManager.setWetness(n),n?(tt.startRain(),this.lightningTimer=5+Math.random()*6,this.scene.fog instanceof Pl&&(this.scene.fog.density=.0055)):(tt.stopRain(),this.scene.fog instanceof Pl&&(this.scene.fog.density=.0035),this.resetLighting()),this.onWeatherChange&&this.onWeatherChange(e)}toggleWeather(){const e=this.currentWeather==="CLEAR"?"RAIN":"CLEAR";return this.setWeather(e),e}update(e,n,i,r){this.currentWeather==="RAIN"&&(this.rainSystem.update(e,n,i,r),this.isFlashing?(this.flashDuration-=e,this.flashDuration<=0&&(this.isFlashing=!1,this.resetLighting(),this.lightningTimer=9+Math.random()*12)):(this.lightningTimer-=e,this.lightningTimer<=0&&this.triggerLightning()))}triggerLightning(){this.isFlashing=!0,this.flashDuration=.14,this.dirLight.intensity=this.baseDirIntensity*3.6,this.ambientLight.intensity=this.baseAmbientIntensity*3.2,tt.playThunder(),this.onLightningFlash&&this.onLightningFlash()}resetLighting(){this.dirLight.intensity=this.baseDirIntensity,this.ambientLight.intensity=this.baseAmbientIntensity}dispose(){this.rainSystem.dispose()}}class IT{renderer;scene;cameraManager;playerCar;roadManager;trafficManager;policeChase;particleSystem;weatherManager;isLightningFlashing=!1;trackMode="NIGHT";isTurntableMode=!1;turntableAngle=0;dirLight;ambientLight;clock=new wT;isRunning=!1;animFrameId=null;score=0;distanceMeters=0;nearMissCount=0;policeEvadedCount=0;comboMultiplier=1;comboResetTimer=0;nextPursuitDistance=750;onHUDUpdate;onNearMissAlert;onGameOver;onPursuitEvadedAlert;onFounderMilestone;controls={steerLeft:!1,steerRight:!1,throttle:!1,brake:!1,nitro:!1,steerAxis:0};constructor(e,n){this.renderer=new uv({canvas:e,antialias:!0,powerPreference:"high-performance",stencil:!1,depth:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=D0,this.renderer.toneMappingExposure=1.25,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=P0,this.scene=new gT,this.scene.background=new De(395539),this.scene.fog=new ya(395539,25,280),this.setupCyberpunkEnvironment(),this.dirLight=new ST(11589887,2.6),this.dirLight.position.set(25,45,20),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=1024,this.dirLight.shadow.mapSize.height=1024,this.dirLight.shadow.camera.near=.5,this.dirLight.shadow.camera.far=140,this.dirLight.shadow.camera.left=-22,this.dirLight.shadow.camera.right=22,this.dirLight.shadow.camera.top=25,this.dirLight.shadow.camera.bottom=-25,this.dirLight.shadow.bias=-6e-4,this.scene.add(this.dirLight),this.ambientLight=new ET(3689064,2.2),this.scene.add(this.ambientLight),this.cameraManager=new TT,this.roadManager=new Fs(this.scene),this.roadManager.onFounderMilestone=i=>{this.onFounderMilestone?.(i)},this.playerCar=new AT(this.scene,n),this.trafficManager=new CT(this.scene),this.policeChase=new bT(this.scene),this.particleSystem=new LT(this.scene),this.weatherManager=new DT(this.scene,this.dirLight,this.ambientLight,this.roadManager),this.weatherManager.onLightningFlash=()=>{this.isLightningFlashing=!0,setTimeout(()=>{this.isLightningFlashing=!1},160)},window.addEventListener("resize",this.onResize)}setCarConfig(e){this.playerCar.setCarConfig(e)}start(){this.isRunning=!0,this.clock.start(),this.resetRunState(),this.tick()}stop(){this.isRunning=!1,this.animFrameId&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null)}resetRunState(){this.score=0,this.distanceMeters=0,this.nearMissCount=0,this.policeEvadedCount=0,this.comboMultiplier=1,this.comboResetTimer=0,this.nextPursuitDistance=650,this.playerCar.reset(1),this.roadManager.reset(this.playerCar.mesh.position.z),this.trafficManager.reset(this.playerCar.mesh.position.z),this.policeChase.reset()}setTrackEnvironment(e){this.trackMode=e,this.roadManager.setTrackEnvironment(e),e==="NIGHT"?(this.scene.background=new De(395539),this.scene.fog=new ya(395539,25,280),this.dirLight.color.setHex(11589887),this.dirLight.intensity=2.6,this.ambientLight.color.setHex(3689064),this.ambientLight.intensity=2.2):(this.scene.background=new De(5404569),this.scene.fog=new ya(7049134,35,300),this.dirLight.color.setHex(16775914),this.dirLight.intensity=3.6,this.ambientLight.color.setHex(9282488),this.ambientLight.intensity=2.4)}setTurntableMode(e){this.isTurntableMode=e,e&&(this.turntableAngle=0,this.playerCar.mesh.position.set(0,0,0),this.playerCar.mesh.rotation.set(0,0,0),this.roadManager.reset(0))}onResize=()=>{const e=window.innerWidth,n=window.innerHeight;this.renderer.setSize(e,n),this.cameraManager.resize(e,n)};handleNearMiss=e=>{this.nearMissCount++,this.comboMultiplier=Math.min(8,this.comboMultiplier+1),this.comboResetTimer=3.8;const n=e*this.comboMultiplier;this.score+=n,tt.playNearMiss(),$e.nearMiss(),this.cameraManager.triggerShake(.12),this.onNearMissAlert&&this.onNearMissAlert(`NEAR MISS! +${n}`,this.comboMultiplier)};handleCrash=()=>{this.playerCar.isCrashed||(this.playerCar.isCrashed=!0,tt.playCrash(),$e.crash(),this.cameraManager.triggerShake(.55),this.particleSystem.emitSparks(this.playerCar.mesh.position,28),setTimeout(()=>{this.finishRun(!1)},1400))};handleBusted=()=>{this.playerCar.isCrashed||(this.playerCar.isCrashed=!0,$e.crash(),this.cameraManager.triggerShake(.35),setTimeout(()=>{this.finishRun(!0)},1200))};handlePursuitEvaded=e=>{this.policeEvadedCount++,this.score+=2500,tt.playCoinPickup(),this.onPursuitEvadedAlert&&this.onPursuitEvadedAlert(e),this.nextPursuitDistance=this.distanceMeters+1200};finishRun(e){this.stop();const n=Ht.getStats(),i=this.score>n.highScore,r=Math.floor(this.score/15)+this.policeEvadedCount*500;Ht.saveStats({highScore:Math.max(n.highScore,this.score),coins:n.coins+r,totalNearMisses:n.totalNearMisses+this.nearMissCount,totalPoliceEvaded:n.totalPoliceEvaded+this.policeEvadedCount}),this.score>200&&Ht.addLeaderboardScore({callsign:n.playerCallsign||"VIPER_01",score:this.score,distanceMeters:Math.floor(this.distanceMeters),policeEvaded:this.policeEvadedCount,carName:this.playerCar.config.name,date:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric"}).toUpperCase()}),this.onGameOver&&this.onGameOver({score:this.score,distanceMeters:Math.floor(this.distanceMeters),nearMisses:this.nearMissCount,policeEvaded:this.policeEvadedCount,coinsEarned:r,isBusted:e,isHighScore:i})}tick=()=>{if(!this.isRunning)return;this.animFrameId=requestAnimationFrame(this.tick);const e=Math.min(this.clock.getDelta(),.08);if(this.isTurntableMode){this.turntableAngle+=e*.55;const i=5.2;this.cameraManager.camera.position.set(Math.sin(this.turntableAngle)*i,1.6+Math.sin(this.turntableAngle*.5)*.2,Math.cos(this.turntableAngle)*i),this.cameraManager.camera.lookAt(0,.55,0),this.renderer.render(this.scene,this.cameraManager.camera);return}cn.enabled&&(this.controls.steerAxis=cn.update(e)),this.playerCar.update(e,this.controls);const n=!this.playerCar.isCrashed;tt.updateEngine(this.playerCar.currentRPM,this.controls.throttle?1:0,n),tt.updateTireSkid(Math.abs(this.playerCar.steeringInertia)*(this.playerCar.speedKmh>120?.35:0)),this.playerCar.isNitroActive?(tt.startNitro(),$e.nitroPulse(),this.particleSystem.emitNitroFlame(this.playerCar.leftExhaustPos,this.playerCar.rightExhaustPos,this.playerCar.speedKmh/3.6)):tt.stopNitro(),this.roadManager.update(this.playerCar.mesh.position.z),this.dirLight.position.set(this.playerCar.mesh.position.x+20,45,this.playerCar.mesh.position.z+15),this.dirLight.target.position.set(this.playerCar.mesh.position.x,0,this.playerCar.mesh.position.z+10),this.dirLight.target.updateMatrixWorld(),this.trafficManager.update(e,this.playerCar.mesh.position.z,this.playerCar.mesh.position.x,this.playerCar.speedKmh,this.playerCar.bounds,this.handleNearMiss,this.handleCrash),this.distanceMeters=this.playerCar.mesh.position.z,this.policeChase.state==="IDLE"&&this.distanceMeters>=this.nextPursuitDistance&&this.policeChase.triggerPursuit(this.playerCar.mesh.position.z,this.playerCar.mesh.position.x),this.policeChase.update(e,this.playerCar.mesh.position.z,this.playerCar.mesh.position.x,this.playerCar.speedKmh,this.playerCar.bounds,this.handleBusted,this.handlePursuitEvaded),this.particleSystem.update(e),this.weatherManager.update(e,this.playerCar.mesh.position.z,this.playerCar.mesh.position.x,this.playerCar.speedKmh),this.cameraManager.update(e,this.playerCar.mesh.position,this.playerCar.speedKmh,this.playerCar.isNitroActive),this.comboResetTimer>0&&(this.comboResetTimer-=e,this.comboResetTimer<=0&&(this.comboMultiplier=1)),!this.playerCar.isCrashed&&this.playerCar.speedKmh>50&&(this.score+=Math.floor(this.playerCar.speedKmh/36*e*10*this.comboMultiplier)),this.renderer.render(this.scene,this.cameraManager.camera),this.onHUDUpdate&&this.onHUDUpdate({speedKmh:Math.floor(this.playerCar.speedKmh),gear:this.playerCar.currentGear,rpm:Math.floor(this.playerCar.currentRPM),nitroPercent:Math.floor(this.playerCar.nitroReserve),score:this.score,distanceMeters:Math.floor(this.distanceMeters),combo:this.comboMultiplier,comboTimerProgress:Math.max(0,this.comboResetTimer/3.8),pursuitActive:this.policeChase.state==="PURSUIT",pursuitAlertIntensity:this.policeChase.redBlueFlashIntensity,policeDistance:Math.floor(this.policeChase.distanceToClosest),steerAxis:this.playerCar.steeringInertia,tiltAngle:Math.round(cn.calibratedAngle),tiltActive:cn.enabled,weather:this.weatherManager.currentWeather,isLightningFlashing:this.isLightningFlashing})};setupCyberpunkEnvironment(){if(typeof document>"u")return;const e=document.createElement("canvas");e.width=512,e.height=256;const n=e.getContext("2d");if(!n)return;const i=n.createLinearGradient(0,0,0,256);i.addColorStop(0,"#02050c"),i.addColorStop(.35,"#071022"),i.addColorStop(.48,"#0a2345"),i.addColorStop(.5,"#00f3ff"),i.addColorStop(.53,"#ff007f"),i.addColorStop(.65,"#0d1322"),i.addColorStop(1,"#03060d"),n.fillStyle=i,n.fillRect(0,0,512,256);for(let o=0;o<32;o++){const l=o/32*512+Math.sin(o*4)*6,c=10+o%4*6,h=20+o*11%45,d=128-h;n.fillStyle="#060b17",n.fillRect(l,d,c,h),n.fillStyle=o%2===0?"#00f3ff":o%3===0?"#ff007f":"#ffaa00",n.fillRect(l+2,d+4,c-4,3),n.fillRect(l+2,d+12,c-4,2),n.fillRect(l+2,d+20,c-4,2),n.fillStyle=o%2===0?"#ff3366":"#00f3ff",n.fillRect(l+c/2-1,d-5,2,5)}const r=new oa(e);r.mapping=wl;const s=new fh(this.renderer);s.compileEquirectangularShader();const a=s.fromEquirectangular(r).texture;this.scene.environment=a,s.dispose(),r.dispose()}destroy(){this.stop(),window.removeEventListener("resize",this.onResize),this.weatherManager.dispose(),this.particleSystem.dispose(),this.renderer.dispose()}}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var UT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),rt=(t,e)=>{const n=Me.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},h)=>Me.createElement("svg",{ref:h,...UT,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${FT(t)}`,o].join(" "),...c},[...e.map(([d,f])=>Me.createElement(d,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=rt("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=rt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=rt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=rt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=rt("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=rt("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=rt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=rt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=rt("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=rt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=rt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=rt("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=rt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=rt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=rt("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=rt("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=rt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=rt("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=rt("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=rt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=rt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=rt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=rt("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=rt("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=rt("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=rt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=rt("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),QT=({hud:t,nearMissAlert:e,evadedBonus:n})=>{const[i,r]=Me.useState(!1);Me.useEffect(()=>{if(e){r(!0);const o=setTimeout(()=>r(!1),800);return()=>clearTimeout(o)}},[e]);const s=Math.min(1,t.speedKmh/300),a=Math.min(1,Math.max(0,(t.rpm-800)/7700));return y.jsxs("div",{className:"mobile-hud-root",children:[t.pursuitActive&&y.jsx("div",{className:"police-strobe-vignette",style:{boxShadow:t.pursuitAlertIntensity>.5?"inset 0 0 80px 20px rgba(255, 0, 40, 0.75)":"inset 0 0 80px 20px rgba(0, 100, 255, 0.75)"},children:y.jsxs("div",{className:"pursuit-banner",children:[y.jsx(Ga,{size:16,className:"strobe-icon"}),y.jsx("span",{children:"POLICE PURSUIT — WEAVE TRAFFIC TO EVADE!"}),y.jsx(Ga,{size:16,className:"strobe-icon"})]})}),n!==null&&y.jsx("div",{className:"evaded-popup",children:y.jsxs("div",{className:"evaded-badge",children:[y.jsx(OT,{size:26,className:"gold-icon"}),y.jsxs("div",{className:"evaded-text",children:[y.jsx("h3",{children:"POLICE EVADED!"}),y.jsxs("p",{children:["+",n," REWARD BONUS"]})]})]})}),e&&i&&y.jsx("div",{className:"near-miss-alert",children:y.jsxs("div",{className:"near-miss-pill",children:[y.jsx(Md,{size:18,className:"flame-icon"}),y.jsx("span",{className:"text",children:e.text}),e.combo>1&&y.jsxs("span",{className:"combo-tag",children:["x",e.combo]})]})}),y.jsxs("div",{className:"top-hud-left",children:[y.jsxs("div",{className:"stat-card distance-card",children:[y.jsx("span",{className:"stat-label",children:"DISTANCE"}),y.jsxs("span",{className:"stat-value",children:[t.distanceMeters.toLocaleString()," ",y.jsx("small",{children:"M"})]})]}),t.combo>1&&y.jsxs("div",{className:"combo-meter-card",children:[y.jsxs("div",{className:"combo-val",children:["x",t.combo]}),y.jsx("div",{className:"combo-bar-wrapper",children:y.jsx("div",{className:"combo-bar-fill",style:{width:`${t.comboTimerProgress*100}%`}})}),y.jsx("span",{className:"combo-sub",children:"COMBO"})]})]}),y.jsxs("div",{className:"top-hud-right",children:[y.jsxs("div",{className:"stat-card score-card",children:[y.jsx("span",{className:"stat-label",children:"SCORE"}),y.jsx("span",{className:"stat-value",children:t.score.toLocaleString()})]}),y.jsxs("div",{className:`stat-card weather-hud-chip ${t.weather==="RAIN"?"rain-active":""}`,children:[t.weather==="RAIN"?y.jsx(BT,{size:13,className:"weather-hud-icon rain"}):y.jsx(gv,{size:13,className:"weather-hud-icon moon"}),y.jsx("span",{className:"weather-hud-text",children:t.weather})]})]}),y.jsx("div",{className:"hud-bottom-left",children:y.jsxs("div",{className:"speedometer-widget",children:[y.jsxs("div",{className:"radial-speed-track",children:[y.jsxs("svg",{viewBox:"0 0 100 100",className:"radial-svg",children:[y.jsx("circle",{cx:"50",cy:"50",r:"42",fill:"none",stroke:"#131b2a",strokeWidth:"7",strokeDasharray:"198",strokeDashoffset:"33",strokeLinecap:"round"}),y.jsx("circle",{cx:"50",cy:"50",r:"42",fill:"none",stroke:"url(#speedGrad)",strokeWidth:"7",strokeDasharray:"198",strokeDashoffset:198-s*165,strokeLinecap:"round",className:"speed-needle-circle"}),y.jsx("defs",{children:y.jsxs("linearGradient",{id:"speedGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[y.jsx("stop",{offset:"0%",stopColor:"#00f3ff"}),y.jsx("stop",{offset:"65%",stopColor:"#ffaa00"}),y.jsx("stop",{offset:"100%",stopColor:"#ff0055"})]})})]}),y.jsxs("div",{className:"speed-center-readout",children:[y.jsx("span",{className:"digital-speed",children:t.speedKmh}),y.jsx("span",{className:"unit-label",children:"KM/H"})]})]}),y.jsxs("div",{className:"gear-rpm-bar",children:[y.jsxs("div",{className:"gear-badge",children:[y.jsx("span",{className:"gear-sub",children:"GEAR"}),y.jsx("span",{className:"gear-num",children:t.gear})]}),y.jsx("div",{className:"rpm-linear-track",children:y.jsx("div",{className:`rpm-fill ${a>.85?"redline":""}`,style:{width:`${a*100}%`}})})]}),t.tiltActive&&y.jsxs("div",{className:"hud-gyro-chip",children:[y.jsx(ic,{size:10,className:"hud-gyro-icon"}),y.jsxs("span",{children:["TILT ",t.tiltAngle>0?`+${t.tiltAngle}°`:`${t.tiltAngle}°`]})]})]})}),y.jsx("div",{className:"hud-bottom-right",children:y.jsxs("div",{className:"nos-widget",children:[y.jsxs("div",{className:"nos-header",children:[y.jsx(Fl,{size:13,className:"nos-icon"}),y.jsx("span",{children:"NITROUS"}),y.jsxs("span",{className:"nos-val",children:[t.nitroPercent,"%"]})]}),y.jsx("div",{className:"nos-tube-wrapper",children:y.jsx("div",{className:`nos-tube-fill ${t.nitroPercent<15?"low":""}`,style:{width:`${t.nitroPercent}%`}})})]})})]})},JT=({onControlsChange:t,nitroPercent:e,isNitroActive:n,tiltSteeringEnabled:i=!1,tiltAngle:r=0,onCalibrateTilt:s})=>{const[a,o]=Me.useState(!1),l=Me.useRef(null);Me.useEffect(()=>{(()=>{const _="ontouchstart"in window||navigator.maxTouchPoints>0||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);o(_)})()},[]);const c=Me.useCallback(u=>{l.current=u,$e.buttonTap(),t({steerLeft:u==="left",steerRight:u==="right"})},[t]),h=Me.useCallback(()=>{l.current=null,t({steerLeft:!1,steerRight:!1})},[t]),d=Me.useCallback(()=>{$e.buttonTap(),t({throttle:!0,brake:!1})},[t]),f=Me.useCallback(()=>{t({throttle:!1})},[t]),p=Me.useCallback(()=>{$e.buttonTap(),t({brake:!0,throttle:!1})},[t]),v=Me.useCallback(()=>{t({brake:!1})},[t]),x=Me.useCallback(()=>{e>5&&($e.nitroPulse(),t({nitro:!0}))},[e,t]),m=Me.useCallback(()=>{t({nitro:!1})},[t]);return a?y.jsxs("div",{className:`mobile-controls-container ${i?"tilt-active":"touch-active"}`,children:[y.jsx("div",{className:"touch-zone left-zone",children:i?y.jsx("div",{className:"tilt-active-hint",children:y.jsxs("button",{type:"button",className:"tilt-calibrate-badge",onClick:u=>{u.preventDefault(),$e.buttonTap(),s&&s()},title:"Calibrate Center Angle",children:[y.jsx(ic,{size:13,className:"tilt-icon-anim"}),y.jsxs("span",{children:["TILT ",r>0?`+${r}°`:`${r}°`]}),y.jsx(vv,{size:11,className:"recenter-sub"})]})}):y.jsxs("div",{className:"steer-buttons-group",children:[y.jsxs("button",{className:"touch-btn steer-btn left-steer",onPointerDown:u=>{u.preventDefault(),c("left")},onPointerUp:u=>{u.preventDefault(),h()},onPointerCancel:u=>{u.preventDefault(),h()},onPointerLeave:u=>{u.preventDefault(),h()},children:[y.jsx("svg",{width:"34",height:"34",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:y.jsx("path",{d:"m15 18-6-6 6-6"})}),y.jsx("span",{className:"btn-label",children:"LEFT"})]}),y.jsxs("button",{className:"touch-btn steer-btn right-steer",onPointerDown:u=>{u.preventDefault(),c("right")},onPointerUp:u=>{u.preventDefault(),h()},onPointerCancel:u=>{u.preventDefault(),h()},onPointerLeave:u=>{u.preventDefault(),h()},children:[y.jsx("svg",{width:"34",height:"34",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:y.jsx("path",{d:"m9 18 6-6-6-6"})}),y.jsx("span",{className:"btn-label",children:"RIGHT"})]})]})}),y.jsxs("div",{className:"touch-zone right-zone",children:[y.jsxs("button",{className:`touch-btn nos-btn ${n?"nos-active":""} ${e<5?"nos-depleted":""}`,onPointerDown:u=>{u.preventDefault(),x()},onPointerUp:u=>{u.preventDefault(),m()},onPointerCancel:u=>{u.preventDefault(),m()},onPointerLeave:u=>{u.preventDefault(),m()},children:[y.jsx(Fl,{className:"nos-icon",size:24}),y.jsx("span",{className:"nos-label",children:"NOS"}),y.jsx("div",{className:"nos-ring",style:{opacity:e/100}})]}),y.jsx("button",{className:"touch-btn pedal-btn brake-pedal",onPointerDown:u=>{u.preventDefault(),p()},onPointerUp:u=>{u.preventDefault(),v()},onPointerCancel:u=>{u.preventDefault(),v()},onPointerLeave:u=>{u.preventDefault(),v()},children:y.jsx("span",{className:"pedal-label",children:"BRAKE"})}),y.jsx("button",{className:"touch-btn pedal-btn gas-pedal",onPointerDown:u=>{u.preventDefault(),d()},onPointerUp:u=>{u.preventDefault(),f()},onPointerCancel:u=>{u.preventDefault(),f()},onPointerLeave:u=>{u.preventDefault(),f()},children:y.jsx("span",{className:"pedal-label",children:"GAS"})})]})]}):null},e2=({pursuitActive:t,policeDistance:e,alertIntensity:n})=>y.jsx("div",{className:`rearview-mirror-container ${t?"mirror-pursuit":""}`,children:y.jsx("div",{className:"mirror-frame",children:y.jsxs("div",{className:"mirror-glass",children:[y.jsx("div",{className:"mirror-road"}),t&&y.jsx("div",{className:"mirror-cruiser-wrapper",style:{transform:`scale(${Math.min(1.8,Math.max(.4,(80-e)/40))})`,opacity:Math.max(.3,Math.min(1,(100-e)/60))},children:y.jsxs("div",{className:"mirror-cruiser",children:[y.jsxs("div",{className:"cruiser-roof-lightbar",children:[y.jsx("span",{className:`strobe-dot red-strobe ${n>.5?"lit":""}`}),y.jsx("span",{className:`strobe-dot blue-strobe ${n<=.5?"lit":""}`})]}),y.jsx("div",{className:"cruiser-grille"}),y.jsxs("div",{className:"cruiser-headlights",children:[y.jsx("span",{className:"beam"}),y.jsx("span",{className:"beam"})]})]})}),t&&y.jsxs("div",{className:"mirror-distance-badge",children:[y.jsx(Ga,{size:12,className:"shield-icon"}),y.jsxs("span",{children:[e,"m"]})]})]})})}),t2=({summary:t,onRestart:e,onOpenGarage:n,onOpenLeaderboard:i})=>y.jsx("div",{className:"game-over-overlay",children:y.jsxs("div",{className:"game-over-card",children:[y.jsx("div",{className:`result-badge ${t.isBusted?"badge-busted":"badge-crashed"}`,children:t.isBusted?y.jsxs(y.Fragment,{children:[y.jsx(Ga,{size:28}),y.jsx("span",{children:"BUSTED BY POLICE"})]}):y.jsxs(y.Fragment,{children:[y.jsx(Md,{size:28}),y.jsx("span",{children:"VEHICLE CRASHED"})]})}),t.isHighScore&&y.jsxs("div",{className:"high-score-banner",children:[y.jsx(Ul,{size:16}),y.jsx("span",{children:"NEW ALL-TIME RECORD!"})]}),y.jsxs("div",{className:"summary-metrics",children:[y.jsxs("div",{className:"summary-item main-score",children:[y.jsx("span",{className:"label",children:"FINAL SCORE"}),y.jsx("span",{className:"value",children:t.score.toLocaleString()})]}),y.jsxs("div",{className:"summary-grid",children:[y.jsxs("div",{className:"summary-item",children:[y.jsx("span",{className:"label",children:"DISTANCE"}),y.jsxs("span",{className:"value",children:[t.distanceMeters.toLocaleString()," m"]})]}),y.jsxs("div",{className:"summary-item",children:[y.jsx("span",{className:"label",children:"NEAR-MISSES"}),y.jsx("span",{className:"value",children:t.nearMisses})]}),y.jsxs("div",{className:"summary-item",children:[y.jsx("span",{className:"label",children:"POLICE EVADED"}),y.jsx("span",{className:"value",children:t.policeEvaded})]}),y.jsxs("div",{className:"summary-item coin-reward",children:[y.jsx("span",{className:"label",children:"REWARD"}),y.jsxs("span",{className:"value",children:[y.jsx(pv,{size:15,className:"coin-icon"}),"+",t.coinsEarned]})]})]})]}),y.jsxs("div",{className:"game-over-actions",children:[y.jsxs("button",{className:"action-btn garage-btn",onClick:()=>{$e.buttonTap(),n()},children:[y.jsx(ZT,{size:18}),y.jsx("span",{children:"GARAGE"})]}),i&&y.jsxs("button",{className:"action-btn leaderboard-action-btn",onClick:()=>{$e.buttonTap(),i()},children:[y.jsx(Ul,{size:18}),y.jsx("span",{children:"RECORDS"})]}),y.jsxs("button",{className:"action-btn restart-btn",onClick:()=>{$e.buttonTap(),e()},children:[y.jsx(vv,{size:18}),y.jsx("span",{children:"RACE AGAIN"})]})]})]})}),xv=()=>{typeof window<"u"&&window.dispatchEvent(new CustomEvent("velocity-x-install-requested"))},n2=()=>{const[t,e]=Me.useState(!1),[n,i]=Me.useState(!1);Me.useEffect(()=>{const s=()=>{const o=window.innerWidth<window.innerHeight;e(o),!o&&document.body.classList.contains("force-virtual-landscape")&&(document.body.classList.remove("force-virtual-landscape"),i(!1))};return s(),window.addEventListener("resize",s),window.addEventListener("orientationchange",s),(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)&&screen.orientation&&"lock"in screen.orientation&&screen.orientation.lock("landscape").catch(()=>{}),()=>{window.removeEventListener("resize",s),window.removeEventListener("orientationchange",s),document.body.classList.remove("force-virtual-landscape")}},[]);const r=async()=>{try{if(document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen(),screen.orientation&&"lock"in screen.orientation){await screen.orientation.lock("landscape");return}}catch{}document.body.classList.add("force-virtual-landscape"),i(!0),e(!1),window.dispatchEvent(new Event("resize"))};return!t||n?null:y.jsx("div",{className:"rotate-prompt-overlay",children:y.jsxs("div",{className:"rotate-card",children:[y.jsxs("div",{className:"phone-rotate-anim",children:[y.jsx(ic,{size:54,className:"phone-icon"}),y.jsx(WT,{size:26,className:"rotate-spinner-icon"})]}),y.jsx("h2",{className:"rotate-title",children:"ROTATE YOUR PHONE"}),y.jsx("p",{className:"rotate-desc",children:"VELOCITY X is engineered for 4K widescreen landscape hypercar racing."}),y.jsxs("div",{className:"rotate-actions-group",children:[y.jsxs("button",{type:"button",className:"auto-landscape-btn",onClick:r,children:[y.jsx(vh,{size:18,fill:"currentColor"}),y.jsx("span",{children:"FORCE AUTO-LANDSCAPE"})]}),y.jsxs("button",{type:"button",className:"portrait-install-action-btn",onClick:()=>xv(),children:[y.jsx(mv,{size:16}),y.jsx("span",{children:"INSTALL APP (PERMANENT LANDSCAPE)"})]})]}),y.jsx("div",{className:"rotate-pill",children:"OR TURN PHONE HORIZONTALLY"})]})})},i2=({onClose:t})=>{const[e]=Me.useState(()=>Ht.getLeaderboard()),[n,i]=Me.useState(()=>Ht.getStats()),[r,s]=Me.useState(n.playerCallsign),[a,o]=Me.useState(!1),l=c=>{c.preventDefault(),$e.buttonTap();const h=r.trim().toUpperCase().slice(0,14)||"VIPER_01";Ht.saveStats({playerCallsign:h}),i(d=>({...d,playerCallsign:h})),o(!1)};return y.jsx("div",{className:"leaderboard-backdrop",onClick:t,children:y.jsxs("div",{className:"leaderboard-card",onClick:c=>c.stopPropagation(),children:[y.jsxs("div",{className:"leaderboard-header",children:[y.jsxs("div",{className:"leaderboard-title-group",children:[y.jsx(Ul,{size:26,className:"trophy-gold"}),y.jsxs("div",{children:[y.jsx("h2",{children:"GLOBAL HALL OF FAME"}),y.jsx("p",{className:"subtitle",children:"HIGHWAY PURSUIT WORLD RECORDS"})]})]}),y.jsx("button",{type:"button",className:"modal-close-btn",onClick:()=>{$e.buttonTap(),t()},children:y.jsx(_v,{size:20})})]}),y.jsxs("div",{className:"player-callsign-bar",children:[y.jsxs("div",{className:"callsign-left",children:[y.jsx(YT,{size:16,className:"callsign-icon"}),y.jsx("span",{className:"callsign-label",children:"DRIVER CALLSIGN:"}),a?y.jsxs("form",{onSubmit:l,className:"callsign-form",children:[y.jsx("input",{type:"text",value:r,onChange:c=>s(c.target.value.toUpperCase()),maxLength:14,autoFocus:!0,className:"callsign-input"}),y.jsx("button",{type:"submit",className:"save-callsign-btn",children:y.jsx(kT,{size:14})})]}):y.jsxs("span",{className:"player-name-badge",onClick:()=>o(!0),children:[n.playerCallsign,y.jsx("small",{className:"edit-hint",children:"(EDIT)"})]})]}),y.jsxs("div",{className:"callsign-right",children:[y.jsx("span",{className:"personal-best-label",children:"YOUR TOP:"}),y.jsxs("span",{className:"personal-best-val",children:[n.highScore.toLocaleString()," PTS"]})]})]}),y.jsx("div",{className:"leaderboard-table-wrapper",children:y.jsxs("table",{className:"leaderboard-table",children:[y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx("th",{children:"RANK"}),y.jsx("th",{children:"DRIVER"}),y.jsx("th",{children:"VEHICLE"}),y.jsx("th",{children:"DISTANCE"}),y.jsx("th",{children:"EVADED"}),y.jsx("th",{className:"score-th",children:"SCORE"})]})}),y.jsx("tbody",{children:e.map((c,h)=>{const d=h+1,f=d<=3;return y.jsxs("tr",{className:`leaderboard-row ${c.isPlayer?"player-row":""} ${f?"top3-row":""}`,children:[y.jsxs("td",{className:"rank-td",children:[d===1&&y.jsx("span",{className:"rank-badge gold",children:"#1"}),d===2&&y.jsx("span",{className:"rank-badge silver",children:"#2"}),d===3&&y.jsx("span",{className:"rank-badge bronze",children:"#3"}),d>3&&y.jsxs("span",{className:"rank-num",children:["#",d]})]}),y.jsxs("td",{className:"driver-td",children:[y.jsx("span",{className:"driver-name",children:c.callsign}),c.isPlayer&&y.jsx("span",{className:"you-pill",children:"YOU"})]}),y.jsx("td",{className:"vehicle-td",children:c.carName}),y.jsxs("td",{className:"distance-td",children:[c.distanceMeters.toLocaleString(),"m"]}),y.jsx("td",{className:"evaded-td",children:c.policeEvaded>0?y.jsxs("span",{className:"evaded-count",children:[y.jsx(Ga,{size:12}),c.policeEvaded]}):y.jsx("span",{className:"zero-evaded",children:"-"})}),y.jsx("td",{className:"score-td",children:y.jsx("span",{className:"score-digits",children:c.score.toLocaleString()})})]},c.id||h)})})]})}),y.jsxs("div",{className:"leaderboard-footer",children:[y.jsxs("div",{className:"footer-tip",children:[y.jsx(Md,{size:14,className:"flame-tip-icon"}),y.jsx("span",{children:"EARN NEAR-MISS COMBOS & EVADE POLICE TO CLIMB THE RANKS"})]}),y.jsx("button",{type:"button",className:"leaderboard-race-btn",onClick:()=>{$e.buttonTap(),t()},children:"LET'S RACE"})]})]})})},r2=({isRaining:t,isLightningFlashing:e})=>!t&&!e?null:y.jsxs("div",{className:"rain-screen-container",children:[e&&y.jsx("div",{className:"lightning-flash-overlay"}),t&&y.jsx("div",{className:"water-droplets-layer",children:y.jsxs("svg",{className:"droplets-svg",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[y.jsxs("defs",{children:[y.jsxs("radialGradient",{id:"dropGrad",cx:"35%",cy:"35%",r:"65%",children:[y.jsx("stop",{offset:"0%",stopColor:"#ffffff",stopOpacity:"0.8"}),y.jsx("stop",{offset:"45%",stopColor:"#88ccff",stopOpacity:"0.4"}),y.jsx("stop",{offset:"100%",stopColor:"#08101a",stopOpacity:"0.7"})]}),y.jsx("filter",{id:"dropBlur",children:y.jsx("feGaussianBlur",{stdDeviation:"0.2"})})]}),y.jsx("circle",{cx:"8",cy:"14",r:"1.2",fill:"url(#dropGrad)"}),y.jsx("circle",{cx:"12",cy:"18",r:"0.8",fill:"url(#dropGrad)"}),y.jsx("circle",{cx:"22",cy:"8",r:"1.5",fill:"url(#dropGrad)",className:"sliding-drop-1"}),y.jsx("circle",{cx:"34",cy:"24",r:"1.0",fill:"url(#dropGrad)"}),y.jsx("circle",{cx:"48",cy:"12",r:"1.8",fill:"url(#dropGrad)",className:"sliding-drop-2"}),y.jsx("circle",{cx:"62",cy:"16",r:"0.9",fill:"url(#dropGrad)"}),y.jsx("circle",{cx:"75",cy:"9",r:"1.4",fill:"url(#dropGrad)",className:"sliding-drop-3"}),y.jsx("circle",{cx:"88",cy:"20",r:"1.1",fill:"url(#dropGrad)"}),y.jsx("circle",{cx:"94",cy:"35",r:"1.6",fill:"url(#dropGrad)",className:"sliding-drop-1"}),y.jsx("circle",{cx:"6",cy:"65",r:"1.4",fill:"url(#dropGrad)"}),y.jsx("circle",{cx:"15",cy:"82",r:"1.9",fill:"url(#dropGrad)",className:"sliding-drop-2"}),y.jsx("circle",{cx:"28",cy:"74",r:"1.0",fill:"url(#dropGrad)"}),y.jsx("circle",{cx:"82",cy:"78",r:"1.7",fill:"url(#dropGrad)",className:"sliding-drop-3"}),y.jsx("circle",{cx:"91",cy:"62",r:"1.2",fill:"url(#dropGrad)"})]})})]});class s2{registration=null;updateAvailable=!1;callbacks=new Set;constructor(){typeof window<"u"&&"serviceWorker"in navigator&&this.init()}async init(){try{const e="./sw.js";this.registration=await navigator.serviceWorker.register(e,{updateViaCache:"none"}),console.log("[UpdateManager] ServiceWorker registered with scope:",this.registration.scope),this.registration.waiting&&this.notifyUpdateReady(),this.registration.addEventListener("updatefound",()=>{const i=this.registration?.installing;i&&i.addEventListener("statechange",()=>{i.state==="installed"&&navigator.serviceWorker.controller&&this.notifyUpdateReady()})});let n=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{n||(n=!0,window.location.reload())}),window.addEventListener("online",()=>{console.log("[UpdateManager] Device came ONLINE - checking for cloud updates..."),this.checkForUpdate()}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&this.checkForUpdate()}),window.setInterval(()=>{navigator.onLine&&this.checkForUpdate()},6e4),setTimeout(()=>this.checkForUpdate(),3e3)}catch(e){console.warn("[UpdateManager] Registration error:",e)}}async checkForUpdate(){if(!(!this.registration||!navigator.onLine))try{await this.registration.update(),console.log("[UpdateManager] Checked GitHub cloud for updates")}catch(e){console.warn("[UpdateManager] Check update error:",e)}}onUpdate(e){return this.callbacks.add(e),this.updateAvailable&&e(),()=>this.callbacks.delete(e)}notifyUpdateReady(){console.log("[UpdateManager] ⚡ New game version downloaded and ready to apply!"),this.updateAvailable=!0,this.callbacks.forEach(e=>e())}applyUpdate(){this.registration?.waiting?this.registration.waiting.postMessage({type:"SKIP_WAITING"}):window.location.reload()}isUpdateReady(){return this.updateAvailable}}const fu=new s2,a2=({gameState:t})=>{const[e,n]=Me.useState(!1),[i,r]=Me.useState(4),[s,a]=Me.useState(!1);return Me.useEffect(()=>fu.onUpdate(()=>{n(!0),$e.buttonTap()}),[]),Me.useEffect(()=>{if(!e||s||t==="RACING")return;const o=setInterval(()=>{r(l=>l<=1?(clearInterval(o),fu.applyUpdate(),0):l-1)},1e3);return()=>clearInterval(o)},[e,s,t]),!e||s?null:y.jsx("div",{className:"update-toast-overlay",children:y.jsxs("div",{className:"update-toast-card",children:[y.jsx("div",{className:"update-icon-wrap",children:y.jsx(XT,{size:20,className:"update-sparkle-icon"})}),y.jsxs("div",{className:"update-info",children:[y.jsxs("div",{className:"update-title-row",children:[y.jsx("h4",{children:"⚡ GAME UPDATE READY"}),y.jsx("span",{className:"update-version-tag",children:"NEW"})]}),y.jsxs("p",{className:"update-desc",children:["New features & fixes downloaded from GitHub! ",t!=="RACING"?`Restarting in ${i}s...`:"Will update after current run."]})]}),y.jsxs("div",{className:"update-actions",children:[y.jsxs("button",{type:"button",className:"update-reload-btn",onClick:()=>{$e.buttonTap(),fu.applyUpdate()},children:[y.jsx(VT,{size:14,className:"spin-slow"}),y.jsx("span",{children:"RESTART"})]}),y.jsx("button",{type:"button",className:"update-dismiss-btn",onClick:()=>{$e.buttonTap(),a(!0)},title:"Update on next open",children:y.jsx(_v,{size:15})})]})]})})},o2=()=>{const t=Me.useRef(null),e=Me.useRef(null),[n,i]=Me.useState(()=>Ht.getStats()),[r,s]=Me.useState(()=>Ht.getCars()),[a,o]=Me.useState(0),[l,c]=Me.useState(()=>{const le=Ht.getCars(),pe=Ht.getStats();return le.find(ce=>ce.id===pe.selectedCarId)||le[0]}),[h,d]=Me.useState("SPLASH"),[f,p]=Me.useState("NIGHT"),[v,x]=Me.useState(null),[m,u]=Me.useState(!1),[_,g]=Me.useState(0),[M,b]=Me.useState(!1),[A,C]=Me.useState(!1),[D,E]=Me.useState(()=>Ht.getStats().tiltSteeringEnabled??!1),[w,z]=Me.useState({speedKmh:0,gear:1,rpm:800,nitroPercent:100,score:0,distanceMeters:0,combo:1,comboTimerProgress:0,pursuitActive:!1,pursuitAlertIntensity:0,policeDistance:999,steerAxis:0,tiltAngle:0,tiltActive:!1,weather:"CLEAR",isLightningFlashing:!1}),[W,Q]=Me.useState(null),[P,O]=Me.useState(null),[j,K]=Me.useState(null),[I,k]=Me.useState(null);Me.useEffect(()=>{if(!t.current)return;const le=new IT(t.current,l);return e.current=le,le.onHUDUpdate=pe=>{z(pe)},le.onNearMissAlert=(pe,ce)=>{Q({text:pe,combo:ce,id:Date.now()})},le.onPursuitEvadedAlert=pe=>{O(pe),setTimeout(()=>O(null),3e3)},le.onFounderMilestone=pe=>{tt.playCoinUnlock(),$e.nearMiss(),K(`👑 ${Math.round(pe/1e3)},000M MILESTONE — INDRAJIT KUMAR FOUNDER ZONE`),setTimeout(()=>K(null),4500)},le.onGameOver=pe=>{cn.stop(),k(pe),d("GAME_OVER"),i(Ht.getStats())},()=>{cn.stop(),le.destroy()}},[]),Me.useEffect(()=>{if(h==="SPLASH"){const le=()=>{tt.playCinematicIntroSound(),window.removeEventListener("pointerdown",le)};window.addEventListener("pointerdown",le),tt.playCinematicIntroSound();const pe=Date.now(),ce=setInterval(()=>{const U=(Date.now()-pe)/1e3,it=Math.min(100,U/3*100);g(it),U>=3&&(clearInterval(ce),u(!0))},50);return()=>{clearInterval(ce),window.removeEventListener("pointerdown",le)}}},[h]),Me.useEffect(()=>{e.current&&(e.current.setCarConfig(l),h==="SELECT_CAR"?e.current.setTurntableMode(!0):e.current.setTurntableMode(!1))},[l,h]),Me.useEffect(()=>{const le=ce=>{if(h!=="RACING"||!e.current)return;const U=e.current.controls;(ce.key==="ArrowLeft"||ce.key.toLowerCase()==="a")&&(U.steerLeft=!0),(ce.key==="ArrowRight"||ce.key.toLowerCase()==="d")&&(U.steerRight=!0),(ce.key==="ArrowUp"||ce.key.toLowerCase()==="w")&&(U.throttle=!0,U.brake=!1),(ce.key==="ArrowDown"||ce.key.toLowerCase()==="s"||ce.key===" ")&&(U.brake=!0,U.throttle=!1),ce.shiftKey&&(U.nitro=!0)},pe=ce=>{if(!e.current)return;const U=e.current.controls;(ce.key==="ArrowLeft"||ce.key.toLowerCase()==="a")&&(U.steerLeft=!1),(ce.key==="ArrowRight"||ce.key.toLowerCase()==="d")&&(U.steerRight=!1),(ce.key==="ArrowUp"||ce.key.toLowerCase()==="w")&&(U.throttle=!1),(ce.key==="ArrowDown"||ce.key.toLowerCase()==="s"||ce.key===" ")&&(U.brake=!1),ce.shiftKey||(U.nitro=!1)};return window.addEventListener("keydown",le),window.addEventListener("keyup",pe),()=>{window.removeEventListener("keydown",le),window.removeEventListener("keyup",pe)}},[h]);const B=()=>{$e.buttonTap(),tt.unlock(),document.documentElement.requestFullscreen().catch(()=>{}),d("SELECT_TRACK")},$=le=>{$e.buttonTap(),p(le),e.current&&e.current.setTrackEnvironment(le),d("SELECT_CAR")},J=()=>{$e.buttonTap();const le=(a+1)%r.length;o(le),c(r[le])},q=()=>{$e.buttonTap();const le=(a-1+r.length)%r.length;o(le),c(r[le])},Z=le=>{if(Ht.unlockCar(le)){$e.crash(),tt.playCoinUnlock();const ce=Ht.getCars(),U=Ht.getStats();s(ce),i(U);const it=ce.find(Te=>Te.id===le);it&&c(it)}},oe=Me.useCallback(()=>{$e.buttonTap(),tt.unlock(),e.current&&(e.current.setTurntableMode(!1),e.current.setTrackEnvironment(f)),d("COUNTDOWN"),x(3),tt.playCountdownBeep(!1),setTimeout(()=>{x(2),tt.playCountdownBeep(!1)},1e3),setTimeout(()=>{x(1),tt.playCountdownBeep(!1)},2e3),setTimeout(()=>{x("GO!"),tt.playCountdownBeep(!0),e.current&&e.current.start(),D?(cn.start(),cn.calibrate()):cn.stop(),d("RACING"),setTimeout(()=>x(null),700)},3e3)},[f,D]),ge=Me.useCallback(()=>{$e.buttonTap(),tt.unlock();const le=tt.toggleMute();b(le)},[]),_e=Me.useCallback(async()=>{$e.buttonTap(),!D?await cn.requestPermission()?(h==="RACING"&&(cn.start(),cn.calibrate()),E(!0),i(Ht.saveStats({tiltSteeringEnabled:!0}))):alert("Orientation sensors unavailable. Keeping touch buttons."):(cn.stop(),e.current&&(e.current.controls.steerAxis=0),E(!1),i(Ht.saveStats({tiltSteeringEnabled:!1})))},[D,h]),Pe=Me.useCallback(le=>{e.current&&Object.assign(e.current.controls,le)},[]);return y.jsxs("div",{className:"game-app-root",children:[y.jsx("canvas",{ref:t,className:"webgl-canvas"}),y.jsx(r2,{isRaining:w.weather==="RAIN"&&h==="RACING",isLightningFlashing:w.isLightningFlashing}),y.jsx(a2,{gameState:h}),y.jsx(n2,{}),h==="SPLASH"&&y.jsxs("div",{className:"splash-screen-overlay",children:[y.jsx("div",{className:"splash-bg-image"}),y.jsx("div",{className:"splash-vignette"}),y.jsxs("div",{className:"splash-content-card",children:[y.jsxs("h1",{className:"splash-title",children:["VELOCITY ",y.jsx("span",{className:"highlight",children:"X"})]}),y.jsx("p",{className:"splash-subtitle",children:"NEXT-GEN HIGHWAY PURSUIT"}),m?y.jsxs("div",{className:"splash-actions-group",children:[y.jsxs("button",{className:"splash-play-btn",onClick:B,children:[y.jsx(vh,{size:26,fill:"currentColor"}),y.jsx("span",{children:"PLAY GAME"})]}),y.jsxs("button",{type:"button",className:"splash-install-btn",onClick:()=>xv(),title:"Install Directly on Phone (Offline Flight Mode)",children:[y.jsx(mv,{size:18}),y.jsx("span",{children:"INSTALL STANDALONE APP"})]})]}):y.jsxs("div",{className:"splash-loading-wrapper",children:[y.jsxs("div",{className:"engine-rev-badge",children:[y.jsx(Fl,{size:15,className:"rev-icon"}),y.jsx("span",{children:"STARTING V8 ENGINES..."})]}),y.jsx("div",{className:"splash-progress-track",children:y.jsx("div",{className:"splash-progress-fill",style:{width:`${_}%`}})}),y.jsx("span",{className:"splash-hint",children:"TAP SCREEN FOR ENGINE SOUND"})]})]})]}),h==="SELECT_TRACK"&&y.jsx("div",{className:"track-select-overlay",children:y.jsxs("div",{className:"select-modal-container",children:[y.jsx("span",{className:"track-super-title",children:"STEP 1 OF 2"}),y.jsx("h2",{className:"select-screen-title",children:"CHOOSE HIGHWAY ATMOSPHERE"}),y.jsx("p",{className:"select-screen-desc",children:"Select your high-speed expressway environment"}),y.jsxs("div",{className:"track-cards-grid",children:[y.jsxs("div",{className:`track-card night-card ${f==="NIGHT"?"active":""}`,onClick:()=>$("NIGHT"),children:[y.jsx("div",{className:"track-card-badge",children:"RECOMMENDED • AAA VIEW"}),y.jsx("div",{className:"track-icon-wrap night-icon-wrap",children:y.jsx(gv,{size:36})}),y.jsx("h3",{className:"track-name",children:"TOKYO CYBER NIGHT"}),y.jsx("p",{className:"track-sub",children:"Wet reflective expressway, glowing streetlights, Japanese neon billboards & midnight rain atmosphere."}),y.jsx("div",{className:"track-card-select-btn",children:y.jsx("span",{children:"SELECT NIGHT EXP-9"})})]}),y.jsxs("div",{className:`track-card day-card ${f==="DAY"?"active":""}`,onClick:()=>$("DAY"),children:[y.jsx("div",{className:"track-card-badge",children:"GOLDEN HOUR"}),y.jsx("div",{className:"track-icon-wrap day-icon-wrap",children:y.jsx(qT,{size:36})}),y.jsx("h3",{className:"track-name",children:"GOLDEN DAYLIGHT"}),y.jsx("p",{className:"track-sub",children:"Bright sunlit expressway, crisp long shadows, clear city skyline & high daytime visibility."}),y.jsx("div",{className:"track-card-select-btn",children:y.jsx("span",{children:"SELECT SUNNY CRUISE"})})]})]}),y.jsxs("button",{className:"back-step-btn",onClick:()=>{$e.buttonTap(),d("SPLASH")},children:[y.jsx(du,{size:16}),y.jsx("span",{children:"BACK TO TITLE"})]})]})}),h==="SELECT_CAR"&&y.jsxs("div",{className:"car-showroom-overlay",children:[y.jsxs("div",{className:"showroom-top-bar",children:[y.jsxs("button",{className:"showroom-back-btn",onClick:()=>{$e.buttonTap(),d("SELECT_TRACK")},children:[y.jsx(du,{size:16}),y.jsx("span",{children:"TRACKS"})]}),y.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[y.jsx("button",{type:"button",className:"showroom-back-btn",style:{padding:"8px 12px"},onClick:ge,title:M?"Unmute Sound":"Mute Sound",children:M?y.jsx($T,{size:16}):y.jsx(KT,{size:16})}),y.jsx("button",{type:"button",className:"showroom-back-btn",style:{padding:"8px 12px"},onClick:()=>C(!0),title:"Leaderboard",children:y.jsx(Ul,{size:16})}),y.jsxs("div",{className:"coin-display-showroom",children:[y.jsx(pv,{size:17,className:"coin-icon"}),y.jsxs("span",{children:[n.coins.toLocaleString()," ",y.jsx("small",{children:"COINS"})]})]})]})]}),y.jsxs("div",{className:"showroom-nav-controls",children:[y.jsx("button",{className:"showroom-arrow-btn prev",onClick:q,children:y.jsx(du,{size:28})}),y.jsx("button",{className:"showroom-arrow-btn next",onClick:J,children:y.jsx(zT,{size:28})})]}),y.jsxs("div",{className:"showroom-bottom-dock",children:[y.jsxs("div",{className:"showroom-car-meta",children:[y.jsxs("div",{className:"car-name-row",children:[y.jsx("span",{className:"car-brand-tag",children:"HYPERCAR SHOWROOM"}),y.jsx("h3",{className:"showroom-car-name",children:l.name})]}),y.jsxs("div",{className:"showroom-stats-row",children:[y.jsxs("div",{className:"spec-item",children:[y.jsx(GT,{size:13}),y.jsx("span",{children:"TOP SPEED"}),y.jsxs("strong",{children:[l.topSpeedKmh," ",y.jsx("small",{children:"KM/H"})]})]}),y.jsxs("div",{className:"spec-item",children:[y.jsx(Fl,{size:13}),y.jsx("span",{children:"ACCELERATION"}),y.jsxs("strong",{children:[l.acceleration," ",y.jsx("small",{children:"/10"})]})]}),y.jsxs("div",{className:"spec-item",children:[y.jsx(jT,{size:13}),y.jsx("span",{children:"ARMOR"}),y.jsxs("strong",{children:[l.armor," ",y.jsx("small",{children:"/10"})]})]})]}),y.jsxs("div",{className:"showroom-steering-selector",children:[y.jsx("span",{className:"steering-sel-label",children:"STEERING MODE:"}),y.jsxs("div",{className:"steering-toggle-capsule",children:[y.jsx("button",{type:"button",className:`steer-opt-btn ${D?"":"active"}`,onClick:()=>{D&&_e()},children:y.jsx("span",{children:"TOUCH BUTTONS"})}),y.jsxs("button",{type:"button",className:`steer-opt-btn ${D?"active":""}`,onClick:()=>{D||_e()},children:[y.jsx(ic,{size:13}),y.jsx("span",{children:"PHONE TILT (BUTTONS GAYAB)"})]})]})]})]}),y.jsx("div",{className:"showroom-actions-col",children:l.unlocked?y.jsxs("button",{className:"showroom-action-btn start-race-btn",onClick:oe,children:[y.jsx(vh,{size:24,fill:"currentColor"}),y.jsx("span",{children:"START RACE"})]}):y.jsxs("button",{className:`showroom-action-btn unlock-btn ${n.coins>=l.price?"can-afford":"disabled"}`,disabled:n.coins<l.price,onClick:()=>Z(l.id),children:[y.jsx(HT,{size:20}),y.jsxs("span",{children:["UNLOCK FOR ",l.price.toLocaleString()," COINS"]})]})})]})]}),h==="COUNTDOWN"&&v!==null&&y.jsx("div",{className:"countdown-overlay",children:y.jsx("div",{className:`countdown-digits ${v==="GO!"?"go-text":""}`,children:v})}),h==="RACING"&&y.jsxs(y.Fragment,{children:[y.jsx(e2,{pursuitActive:w.pursuitActive,policeDistance:w.policeDistance,alertIntensity:w.pursuitAlertIntensity}),y.jsx(QT,{hud:w,nearMissAlert:W,evadedBonus:P}),j&&y.jsxs("div",{className:"founder-milestone-banner",children:[y.jsx("div",{className:"founder-milestone-tag",children:"HIGHWAY MILESTONE"}),y.jsx("div",{className:"founder-milestone-title",children:j}),y.jsx("div",{className:"founder-milestone-sub",children:"OFFICIAL ARCHITECT • INDRAJIT KUMAR"})]}),y.jsx(JT,{onControlsChange:Pe,nitroPercent:w.nitroPercent,isNitroActive:e.current?.playerCar.isNitroActive||!1,tiltSteeringEnabled:D,tiltAngle:w.tiltAngle,steerAxis:w.steerAxis,onCalibrateTilt:()=>cn.calibrate(),onToggleTiltMode:_e})]}),h==="GAME_OVER"&&I&&y.jsx(t2,{summary:I,onRestart:()=>{d("SELECT_TRACK")},onOpenGarage:()=>d("SELECT_CAR"),onOpenLeaderboard:()=>C(!0)}),A&&y.jsx(i2,{onClose:()=>C(!1)})]})};pu.createRoot(document.getElementById("root")).render(y.jsx(Gv.StrictMode,{children:y.jsx(o2,{})}));
