"use strict";(globalThis.webpackChunkhubs=globalThis.webpackChunkhubs||[]).push([[6149],{"./src/react-components/auth/VerifyModal.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:()=>Error,Verified:()=>Verified,Verifying:()=>Verifying,__namedExportsOrder:()=>__namedExportsOrder,default:()=>VerifyModal_stories});__webpack_require__("./node_modules/react/index.js");var Center=__webpack_require__("./src/react-components/layout/Center.js"),Page=__webpack_require__("./src/react-components/layout/Page.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Spinner=__webpack_require__("./src/react-components/misc/Spinner.js"),Modal=__webpack_require__("./src/react-components/modal/Modal.js"),Column=__webpack_require__("./src/react-components/layout/Column.js"),message=__webpack_require__("./node_modules/react-intl/lib/src/components/message.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function VerifyingEmail(){return(0,jsx_runtime.jsxs)(Column.s,{center:!0,padding:!0,grow:!0,children:[(0,jsx_runtime.jsx)("b",{children:(0,jsx_runtime.jsx)(message.Z,{id:"verify-modal.verifying-email",defaultMessage:"Verifying Email"})}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(Spinner.$,{})]})}function EmailVerified(_ref){let{origin}=_ref;return(0,jsx_runtime.jsxs)(Column.s,{center:!0,padding:!0,grow:!0,children:[(0,jsx_runtime.jsx)("b",{children:(0,jsx_runtime.jsx)(message.Z,{id:"verify-modal.verification-complete",defaultMessage:"Verification Complete"})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(message.Z,{id:"verify-modal.close-window",defaultMessage:"Please close this browser window and return to {origin}.",values:{origin}})})]})}function VerificationError(_ref2){let{error}=_ref2;return(0,jsx_runtime.jsxs)(Column.s,{center:!0,padding:!0,grow:!0,children:[(0,jsx_runtime.jsx)("b",{children:(0,jsx_runtime.jsx)(message.Z,{id:"verify-modal.error",defaultMessage:"Error Verifying Email"})}),(0,jsx_runtime.jsx)("p",{children:error&&error.message||(0,jsx_runtime.jsx)(message.Z,{id:"verify-modal.unknown-error",defaultMessage:"Unknown Error"})})]})}function VerifyModal(_ref3){let{children}=_ref3;return(0,jsx_runtime.jsx)(Modal.u,{title:(0,jsx_runtime.jsx)(message.Z,{id:"verify-modal.title",defaultMessage:"Verify"}),disableFullscreen:!0,children})}VerifyingEmail.displayName="VerifyingEmail",EmailVerified.displayName="EmailVerified",EmailVerified.propTypes={origin:prop_types_default().string.isRequired},VerificationError.displayName="VerificationError",VerificationError.propTypes={error:prop_types_default().object},VerifyModal.displayName="VerifyModal",VerifyModal.propTypes={children:prop_types_default().node},VerifyingEmail.__docgenInfo={description:"",methods:[],displayName:"VerifyingEmail"},EmailVerified.__docgenInfo={description:"",methods:[],displayName:"EmailVerified",props:{origin:{description:"",type:{name:"string"},required:!0}}},VerificationError.__docgenInfo={description:"",methods:[],displayName:"VerificationError",props:{error:{description:"",type:{name:"object"},required:!1}}},VerifyModal.__docgenInfo={description:"",methods:[],displayName:"VerifyModal",props:{children:{description:"",type:{name:"node"},required:!1}}};var _Verifying$parameters,_Verifying$parameters2,_Verifying$parameters3,_Verified$parameters,_Verified$parameters2,_Verified$parameters3,_Error$parameters,_Error$parameters2,_Error$parameters2$do,home_hero_background_unbranded=__webpack_require__("./src/assets/images/home-hero-background-unbranded.png");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const VerifyModal_stories={title:"Auth/VerifyModal",parameters:{layout:"fullscreen"}},Verifying=()=>(0,jsx_runtime.jsx)(Page.T,{style:{backgroundImage:`url(${home_hero_background_unbranded})`,backgroundSize:"cover"},children:(0,jsx_runtime.jsx)(Center.M,{children:(0,jsx_runtime.jsx)(VerifyModal,{children:(0,jsx_runtime.jsx)(VerifyingEmail,{})})})});Verifying.displayName="Verifying";const Verified=()=>(0,jsx_runtime.jsx)(Page.T,{style:{backgroundImage:`url(${home_hero_background_unbranded})`,backgroundSize:"cover"},children:(0,jsx_runtime.jsx)(Center.M,{children:(0,jsx_runtime.jsx)(VerifyModal,{children:(0,jsx_runtime.jsx)(EmailVerified,{origin:"demo.hubsfoundation.org"})})})});Verified.displayName="Verified";const Error=()=>(0,jsx_runtime.jsx)(Page.T,{style:{backgroundImage:`url(${home_hero_background_unbranded})`,backgroundSize:"cover"},children:(0,jsx_runtime.jsx)(Center.M,{children:(0,jsx_runtime.jsx)(VerifyModal,{children:(0,jsx_runtime.jsx)(VerificationError,{})})})});Error.displayName="Error",Verifying.parameters=_objectSpread(_objectSpread({},Verifying.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Verifying$parameters=Verifying.parameters)||void 0===_Verifying$parameters?void 0:_Verifying$parameters.docs),{},{source:_objectSpread({originalSource:'() => <Page style={{\n  backgroundImage: `url(${backgroundUrl})`,\n  backgroundSize: "cover"\n}}>\n    <Center>\n      <VerifyModal>\n        <VerifyingEmail />\n      </VerifyModal>\n    </Center>\n  </Page>'},null===(_Verifying$parameters2=Verifying.parameters)||void 0===_Verifying$parameters2||null===(_Verifying$parameters3=_Verifying$parameters2.docs)||void 0===_Verifying$parameters3?void 0:_Verifying$parameters3.source)})}),Verified.parameters=_objectSpread(_objectSpread({},Verified.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Verified$parameters=Verified.parameters)||void 0===_Verified$parameters?void 0:_Verified$parameters.docs),{},{source:_objectSpread({originalSource:'() => <Page style={{\n  backgroundImage: `url(${backgroundUrl})`,\n  backgroundSize: "cover"\n}}>\n    <Center>\n      <VerifyModal>\n        <EmailVerified origin="demo.hubsfoundation.org" />\n      </VerifyModal>\n    </Center>\n  </Page>'},null===(_Verified$parameters2=Verified.parameters)||void 0===_Verified$parameters2||null===(_Verified$parameters3=_Verified$parameters2.docs)||void 0===_Verified$parameters3?void 0:_Verified$parameters3.source)})}),Error.parameters=_objectSpread(_objectSpread({},Error.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Error$parameters=Error.parameters)||void 0===_Error$parameters?void 0:_Error$parameters.docs),{},{source:_objectSpread({originalSource:'() => <Page style={{\n  backgroundImage: `url(${backgroundUrl})`,\n  backgroundSize: "cover"\n}}>\n    <Center>\n      <VerifyModal>\n        <VerificationError />\n      </VerifyModal>\n    </Center>\n  </Page>'},null===(_Error$parameters2=Error.parameters)||void 0===_Error$parameters2||null===(_Error$parameters2$do=_Error$parameters2.docs)||void 0===_Error$parameters2$do?void 0:_Error$parameters2$do.source)})});const __namedExportsOrder=["Verifying","Verified","Error"];Verifying.__docgenInfo={description:"",methods:[],displayName:"Verifying"},Verified.__docgenInfo={description:"",methods:[],displayName:"Verified"},Error.__docgenInfo={description:"",methods:[],displayName:"Error"}}}]);