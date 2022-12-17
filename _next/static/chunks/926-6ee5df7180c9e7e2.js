(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[926],{9604:function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){var r,o;r=e,o=n[t],t in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){var r,o;r=e,o=n[t],t in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e){return function t(){for(var n=this,r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.apply(n,[].concat(o,r))}}}function l(e){return({}).toString.call(e).includes("Object")}function s(e){return"function"==typeof e}n.d(t,{ZP:function(){return K}});var f,d,p=a(function(e,t){throw Error(e[t]||e.default)})({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),g={changes:function(e,t){return l(t)||p("changeType"),Object.keys(t).some(function(t){return!Object.prototype.hasOwnProperty.call(e,t)})&&p("changeField"),t},selector:function(e){s(e)||p("selectorType")},handler:function(e){s(e)||l(e)||p("handlerType"),l(e)&&Object.values(e).some(function(e){return!s(e)})&&p("handlersType")},initial:function(e){e||p("initialIsRequired"),l(e)||p("initialType"),Object.keys(e).length||p("initialContent")}};function h(e,t){return s(t)?t(e.current):t}function y(e,t){return e.current=u(u({},e.current),t),t}function b(e,t,n){return s(t)?t(e.current):Object.keys(n).forEach(function(n){var r;return null===(r=t[n])||void 0===r?void 0:r.call(t,e.current[n])}),n}var m={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},v=(f=function(e,t){throw Error(e[t]||e.default)},function e(){for(var t=this,n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return r.length>=f.length?f.apply(this,r):function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return e.apply(t,[].concat(r,o))}})(m),O={config:function(e){return e||v("configIsRequired"),({}).toString.call(e).includes("Object")||v("configType"),e.urls?(console.warn(m.deprecation),{paths:{vs:e.urls.monacoBase}}):e}},j=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},w={type:"cancelation",msg:"operation is manually canceled"},M=function(e){var t=!1,n=new Promise(function(n,r){e.then(function(e){return t?r(w):n(e)}),e.catch(r)});return n.cancel=function(){return t=!0},n},P=function(e){if(Array.isArray(e))return e}(d=({create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};g.initial(e),g.handler(t);var n={current:e},r=a(b)(n,t),o=a(y)(n),i=a(g.changes)(e),c=a(h)(n);return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return g.selector(e),e(n.current)},function(e){(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}})(r,o,i,c)(e)}]}}).create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}))||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(d,2)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}}(d,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),E=P[0],T=P[1];function R(e){return document.body.appendChild(e)}function k(e){var t,n,r=E(function(e){return{config:e.config,reject:e.reject}}),o=(t="".concat(r.config.paths.vs,"/loader.js"),n=document.createElement("script"),t&&(n.src=t),n);return o.onload=function(){return e()},o.onerror=r.reject,o}function S(){var e=E(function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(t){C(t),e.resolve(t)},function(t){e.reject(t)})}function C(e){E().monaco||T({monaco:e})}var I=new Promise(function(e,t){return T({resolve:e,reject:t})}),_={config:function(e){var t=O.config(e),n=t.monaco,r=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,["monaco"]);T(function(e){return{config:function e(t,n){return Object.keys(n).forEach(function(r){n[r]instanceof Object&&t[r]&&Object.assign(n[r],e(t[r],n[r]))}),o(o({},t),n)}(e.config,r),monaco:n}})},init:function(){var e=E(function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}});if(!e.isInitialized){if(T({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),M(I);if(window.monaco&&window.monaco.editor)return C(window.monaco),e.resolve(window.monaco),M(I);j(R,k)(S)}return M(I)},__getMonacoInstance:function(){return E(function(e){return e.monaco})}},V=n(7294),x=n(5697),A=n.n(x);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let L={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var q=function({content:e}){return V.createElement("div",{style:L},e)},N={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function z({width:e,height:t,isEditorReady:n,loading:r,_ref:o,className:i,wrapperProps:c}){return V.createElement("section",D({style:{...N.wrapper,width:e,height:t}},c),!n&&V.createElement(q,{content:r}),V.createElement("div",{ref:o,style:{...N.fullWidth,...!n&&N.hide},className:i}))}z.propTypes={width:A().oneOfType([A().number,A().string]).isRequired,height:A().oneOfType([A().number,A().string]).isRequired,loading:A().oneOfType([A().element,A().string]).isRequired,isEditorReady:A().bool.isRequired,className:A().string,wrapperProps:A().object};var F=(0,V.memo)(z),U=function(e){(0,V.useEffect)(e,[])},W=function(e,t,n=!0){let r=(0,V.useRef)(!0);(0,V.useEffect)(r.current||!n?()=>{r.current=!1}:e,t)};function B(){}function Y(e,t,n,r){return e.editor.getModel(H(e,r))||e.editor.createModel(t,n,r&&H(e,r))}function H(e,t){return e.Uri.parse(t)}function Z({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:c,keepCurrentOriginalModel:u,keepCurrentModifiedModel:a,theme:l,loading:s,options:f,height:d,width:p,className:g,wrapperProps:h,beforeMount:y,onMount:b}){let[m,v]=(0,V.useState)(!1),[O,j]=(0,V.useState)(!0),w=(0,V.useRef)(null),M=(0,V.useRef)(null),P=(0,V.useRef)(null),E=(0,V.useRef)(b),T=(0,V.useRef)(y);U(()=>{let e=_.init();return e.then(e=>(M.current=e)&&j(!1)).catch(e=>(null==e?void 0:e.type)!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>w.current?function(){var e,t;let n=w.current.getModel();u||null===(e=n.original)||void 0===e||e.dispose(),a||null===(t=n.modified)||void 0===t||t.dispose(),w.current.dispose()}():e.cancel()}),W(()=>{let e=w.current.getModifiedEditor();e.getOption(M.current.editor.EditorOption.readOnly)?e.setValue(t):t!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),e.pushUndoStop())},[t],m),W(()=>{w.current.getModel().original.setValue(e)},[e],m),W(()=>{let{original:e,modified:t}=w.current.getModel();M.current.editor.setModelLanguage(e,r||n),M.current.editor.setModelLanguage(t,o||n)},[n,r,o],m),W(()=>{M.current.editor.setTheme(l)},[l],m),W(()=>{w.current.updateOptions(f)},[f],m);let R=(0,V.useCallback)(()=>{T.current(M.current);let u=Y(M.current,e,r||n,i),a=Y(M.current,t,o||n,c);w.current.setModel({original:u,modified:a})},[n,t,o,e,r,i,c]),k=(0,V.useCallback)(()=>{w.current=M.current.editor.createDiffEditor(P.current,{automaticLayout:!0,...f}),R(),M.current.editor.setTheme(l),v(!0)},[f,l,R]);return(0,V.useEffect)(()=>{m&&E.current(w.current,M.current)},[m]),(0,V.useEffect)(()=>{O||m||k()},[O,m,k]),V.createElement(F,{width:p,height:d,isEditorReady:m,loading:s,_ref:P,className:g,wrapperProps:h})}Z.propTypes={original:A().string,modified:A().string,language:A().string,originalLanguage:A().string,modifiedLanguage:A().string,originalModelPath:A().string,modifiedModelPath:A().string,keepCurrentOriginalModel:A().bool,keepCurrentModifiedModel:A().bool,theme:A().string,loading:A().oneOfType([A().element,A().string]),options:A().object,width:A().oneOfType([A().number,A().string]),height:A().oneOfType([A().number,A().string]),className:A().string,wrapperProps:A().object,beforeMount:A().func,onMount:A().func},Z.defaultProps={theme:"light",loading:"Loading...",options:{},keepCurrentOriginalModel:!1,keepCurrentModifiedModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:B,onMount:B};var $=function(e){let t=(0,V.useRef)();return(0,V.useEffect)(()=>{t.current=e},[e]),t.current};let G=new Map;function J({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:o,path:i,theme:c,line:u,loading:a,options:l,overrideServices:s,saveViewState:f,keepCurrentModel:d,width:p,height:g,className:h,wrapperProps:y,beforeMount:b,onMount:m,onChange:v,onValidate:O}){let[j,w]=(0,V.useState)(!1),[M,P]=(0,V.useState)(!0),E=(0,V.useRef)(null),T=(0,V.useRef)(null),R=(0,V.useRef)(null),k=(0,V.useRef)(m),S=(0,V.useRef)(b),C=(0,V.useRef)(null),I=(0,V.useRef)(r),x=$(i),A=(0,V.useRef)(!1);U(()=>{let e=_.init();return e.then(e=>(E.current=e)&&P(!1)).catch(e=>(null==e?void 0:e.type)!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>{var t,n;return T.current?void(null===(t=C.current)||void 0===t||t.dispose(),d?f&&G.set(i,T.current.saveViewState()):null===(n=T.current.getModel())||void 0===n||n.dispose(),T.current.dispose()):e.cancel()}}),W(()=>{let n=Y(E.current,e||r,t||o,i);n!==T.current.getModel()&&(f&&G.set(x,T.current.saveViewState()),T.current.setModel(n),f&&T.current.restoreViewState(G.get(i)))},[i],j),W(()=>{T.current.updateOptions(l)},[l],j),W(()=>{T.current.getOption(E.current.editor.EditorOption.readOnly)?T.current.setValue(r):r!==T.current.getValue()&&(T.current.executeEdits("",[{range:T.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),T.current.pushUndoStop())},[r],j),W(()=>{E.current.editor.setModelLanguage(T.current.getModel(),o)},[o],j),W(()=>{void 0!==u&&T.current.revealLine(u)},[u],j),W(()=>{E.current.editor.setTheme(c)},[c],j);let D=(0,V.useCallback)(()=>{if(!A.current){S.current(E.current);let u=i||n,a=Y(E.current,r||e,t||o,u);T.current=E.current.editor.create(R.current,{model:a,automaticLayout:!0,...l},s),f&&T.current.restoreViewState(G.get(u)),E.current.editor.setTheme(c),w(!0),A.current=!0}},[e,t,n,r,o,i,l,s,f,c]);return(0,V.useEffect)(()=>{j&&k.current(T.current,E.current)},[j]),(0,V.useEffect)(()=>{M||j||D()},[M,j,D]),I.current=r,(0,V.useEffect)(()=>{if(j&&v){var e,t;null===(e=C.current)||void 0===e||e.dispose(),C.current=null===(t=T.current)||void 0===t?void 0:t.onDidChangeModelContent(e=>{v(T.current.getValue(),e)})}},[j,v]),(0,V.useEffect)(()=>{if(j){let e=E.current.editor.onDidChangeMarkers(e=>{var t;let n=null===(t=T.current.getModel())||void 0===t?void 0:t.uri;if(n){let r=e.find(e=>e.path===n.path);if(r){let o=E.current.editor.getModelMarkers({resource:n});null==O||O(o)}}});return()=>{null==e||e.dispose()}}},[j,O]),V.createElement(F,{width:p,height:g,isEditorReady:j,loading:a,_ref:R,className:h,wrapperProps:y})}J.propTypes={defaultValue:A().string,defaultPath:A().string,defaultLanguage:A().string,value:A().string,language:A().string,path:A().string,theme:A().string,line:A().number,loading:A().oneOfType([A().element,A().string]),options:A().object,overrideServices:A().object,saveViewState:A().bool,keepCurrentModel:A().bool,width:A().oneOfType([A().number,A().string]),height:A().oneOfType([A().number,A().string]),className:A().string,wrapperProps:A().object,beforeMount:A().func,onMount:A().func,onChange:A().func,onValidate:A().func},J.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:B,onMount:B,onValidate:B};var K=(0,V.memo)(J)},9008:function(e,t,n){e.exports=n(3121)},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,c){if(c!==r){var u=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);