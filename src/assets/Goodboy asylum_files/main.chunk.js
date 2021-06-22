(this["webpackJsonpgoodboy-app"] = this["webpackJsonpgoodboy-app"] || []).push([["main"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_sheltersActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/actions/sheltersActions */ "./src/redux/actions/sheltersActions.ts");
/* harmony import */ var _styles_globalStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/globalStyle */ "./src/styles/globalStyle.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router */ "./src/router.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header */ "./src/header.tsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer */ "./src/footer.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/misindelka.dev/Desktop/DEV/GOOD_REQUEST/ASSIGMENT/goodboy-app/src/App.tsx",
    _s = __webpack_require__.$Refresh$.signature();











const App = () => {
  _s();

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    dispatch(Object(_redux_actions_sheltersActions__WEBPACK_IMPORTED_MODULE_3__["getShelters"])());
  }, [dispatch]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_header__WEBPACK_IMPORTED_MODULE_6__["Header"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      children: _router__WEBPACK_IMPORTED_MODULE_5__["routes"].map(route => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: route.path,
        component: route.component
      }, route.path, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_footer__WEBPACK_IMPORTED_MODULE_7__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_globalStyle__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined);
};

_s(App, "rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/assets/dogFoot.png":
/*!********************************!*\
  !*** ./src/assets/dogFoot.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/dogFoot.32173e13.png");

/***/ }),

/***/ "./src/assets/dogLogo.png":
/*!********************************!*\
  !*** ./src/assets/dogLogo.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/dogLogo.bb8f9840.png");

/***/ }),

/***/ "./src/assets/facebookLogo.png":
/*!*************************************!*\
  !*** ./src/assets/facebookLogo.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/assets/instagramLogo.png":
/*!**************************************!*\
  !*** ./src/assets/instagramLogo.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/assets/pageBg.png":
/*!*******************************!*\
  !*** ./src/assets/pageBg.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/pageBg.7153d990.png");

/***/ }),

/***/ "./src/assets/wallet.png":
/*!*******************************!*\
  !*** ./src/assets/wallet.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/footer.tsx":
/*!************************!*\
  !*** ./src/footer.tsx ***!
  \************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ "./src/i18n/index.ts");
/* harmony import */ var _styles_components_footerStyled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/components/footerStyled */ "./src/styles/components/footerStyled.ts");
/* harmony import */ var _assets_dogLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/dogLogo.png */ "./src/assets/dogLogo.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/misindelka.dev/Desktop/DEV/GOOD_REQUEST/ASSIGMENT/goodboy-app/src/footer.tsx",
    _s = __webpack_require__.$Refresh$.signature();







const Footer = () => {
  _s();

  const {
    language
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.lang);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles_components_footerStyled__WEBPACK_IMPORTED_MODULE_3__["Wrapper"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles_components_footerStyled__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles_components_footerStyled__WEBPACK_IMPORTED_MODULE_3__["LogoWrapper"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles_components_footerStyled__WEBPACK_IMPORTED_MODULE_3__["LogoImage"], {
          src: _assets_dogLogo_png__WEBPACK_IMPORTED_MODULE_4__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles_components_footerStyled__WEBPACK_IMPORTED_MODULE_3__["LogoText"], {
          children: Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('logoTitle', language)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles_components_footerStyled__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles_components_footerStyled__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
        children: Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('companyName', language)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles_components_footerStyled__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles_components_footerStyled__WEBPACK_IMPORTED_MODULE_3__["LinkTo"], {
          to: "",
          children: Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('aboutLink', language)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles_components_footerStyled__WEBPACK_IMPORTED_MODULE_3__["LinkTo"], {
          to: "",
          children: Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('guideLink', language)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles_components_footerStyled__WEBPACK_IMPORTED_MODULE_3__["LinkTo"], {
          to: "",
          children: Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('contactLink', language)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles_components_footerStyled__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles_components_footerStyled__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
        children: Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('companyName', language)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles_components_footerStyled__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
        children: Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('lorem', language)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles_components_footerStyled__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles_components_footerStyled__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
        children: Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('companyName', language)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styles_components_footerStyled__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
        children: Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('lorem', language)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined);
};

_s(Footer, "VONX64DacJt6SalpyK9C6SP1HMI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Footer;

var _c;

__webpack_require__.$Refresh$.register(_c, "Footer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/header.tsx":
/*!************************!*\
  !*** ./src/header.tsx ***!
  \************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ "./src/i18n/index.ts");
/* harmony import */ var _styles_components_headerStyled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/components/headerStyled */ "./src/styles/components/headerStyled.ts");
/* harmony import */ var _styles_components_generalStyled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/components/generalStyled */ "./src/styles/components/generalStyled.ts");
/* harmony import */ var _assets_facebookLogo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/facebookLogo.png */ "./src/assets/facebookLogo.png");
/* harmony import */ var _assets_instagramLogo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/instagramLogo.png */ "./src/assets/instagramLogo.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/misindelka.dev/Desktop/DEV/GOOD_REQUEST/ASSIGMENT/goodboy-app/src/header.tsx",
    _s = __webpack_require__.$Refresh$.signature();









const Header = () => {
  _s();

  const {
    language
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.lang);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles_components_headerStyled__WEBPACK_IMPORTED_MODULE_3__["Wrapper"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
      children: Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])('companyName', language)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles_components_generalStyled__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles_components_headerStyled__WEBPACK_IMPORTED_MODULE_3__["LinkTo"], {
        to: "",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles_components_headerStyled__WEBPACK_IMPORTED_MODULE_3__["LogoImage"], {
          src: _assets_facebookLogo_png__WEBPACK_IMPORTED_MODULE_5__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles_components_headerStyled__WEBPACK_IMPORTED_MODULE_3__["LinkTo"], {
        to: "",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_styles_components_headerStyled__WEBPACK_IMPORTED_MODULE_3__["LogoImage"], {
          src: _assets_instagramLogo_png__WEBPACK_IMPORTED_MODULE_6__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

_s(Header, "VONX64DacJt6SalpyK9C6SP1HMI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Header;

var _c;

__webpack_require__.$Refresh$.register(_c, "Header");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/i18n/index.ts":
/*!***************************!*\
  !*** ./src/i18n/index.ts ***!
  \***************************/
/*! exports provided: translate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony import */ var _locales_sk_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locales/sk.json */ "./src/i18n/locales/sk.json");
var _locales_sk_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locales/sk.json */ "./src/i18n/locales/sk.json", 1);
/* harmony import */ var _locales_cz_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales/cz.json */ "./src/i18n/locales/cz.json");
var _locales_cz_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locales/cz.json */ "./src/i18n/locales/cz.json", 1);
/* harmony import */ var _locales_en_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locales/en.json */ "./src/i18n/locales/en.json");
var _locales_en_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locales/en.json */ "./src/i18n/locales/en.json", 1);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




const translate = (key, language) => {
  let langData = {};

  if (language === 'SK') {
    langData = _locales_sk_json__WEBPACK_IMPORTED_MODULE_0__;
  } else if (language === 'CZ') {
    langData = _locales_cz_json__WEBPACK_IMPORTED_MODULE_1__;
  } else if (language === 'EN') {
    langData = _locales_en_json__WEBPACK_IMPORTED_MODULE_2__;
  }

  return langData[key];
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/i18n/locales/cz.json":
/*!**********************************!*\
  !*** ./src/i18n/locales/cz.json ***!
  \**********************************/
/*! exports provided: home, about, introText, aboutUsText, pageDoesNotExist, returnToHomepage, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"home\":\"Home\",\"about\":\"About Us\",\"introText\":\"We are a digital agency that boosts businesses and grows startups\",\"aboutUsText\":\"We strive for innovation, believe in creating creative solutions and implementing technology using simple User Experience.\",\"pageDoesNotExist\":\"This page does not exist.\",\"returnToHomepage\":\"Return to homepage\"}");

/***/ }),

/***/ "./src/i18n/locales/en.json":
/*!**********************************!*\
  !*** ./src/i18n/locales/en.json ***!
  \**********************************/
/*! exports provided: home, about, introText, aboutUsText, pageDoesNotExist, returnToHomepage, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"home\":\"Home\",\"about\":\"About Us\",\"introText\":\"We are a digital agency that boosts businesses and grows startups\",\"aboutUsText\":\"We strive for innovation, believe in creating creative solutions and implementing technology using simple User Experience.\",\"pageDoesNotExist\":\"This page does not exist.\",\"returnToHomepage\":\"Return to homepage\"}");

/***/ }),

/***/ "./src/i18n/locales/sk.json":
/*!**********************************!*\
  !*** ./src/i18n/locales/sk.json ***!
  \**********************************/
/*! exports provided: _header_, companyName, _footer_, aboutLink, guideLink, contactLink, logoTitle, _choose_, chooseTitle, chooseFromList, chooseSupportAsylum, cooseSupportTrust, chooseAboutProject, choosePriceToDonate, chooseVoluntary, _userData_, userDataTitle, userDataFormTitle, userName, userNamePlaceholder, userSurname, userSurnamePlaceholder, userEmail, userEmailPlaceholder, userPhoneNo, userPhoneSk, _submit, submitTitle, submitSupportAsylumLabel, submitAmoutLabel, submitNameSurnameLabel, submitEmailLabel, submitPhoneNumber, submitAcceptRulesLabel, submitButton, _general, lorem, continueButton, backButton, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_header_\":\"this is header section\",\"companyName\":\"Nadácia Good Boy\",\"_footer_\":\"this is footer section\",\"aboutLink\":\"O projekte\",\"guideLink\":\"Ako na to\",\"contactLink\":\"Kontak\",\"logoTitle\":\"Good boy\",\"_choose_\":\"this is choose section\",\"chooseTitle\":\"Vyberte si možnosť, ako chcete pomôcť\",\"chooseFromList\":\"Vyberte útulok zo zoznamu\",\"chooseSupportAsylum\":\"Chcem finančne prispieť konkrétnemu útulku\",\"cooseSupportTrust\":\"Chcem finančne prispieť celej nadácii\",\"chooseAboutProject\":\"O Projekte\",\"choosePriceToDonate\":\"Suma, ktorou chcem prispieť\",\"chooseVoluntary\":\"Nepovinné\",\"_userData_\":\"this is userData Section\",\"userDataTitle\":\"Potrebujeme od Vás zopár informácií\",\"userDataFormTitle\":\"O vás\",\"userName\":\"Meno\",\"userNamePlaceholder\":\"Zadajte Vaše meno\",\"userSurname\":\"Priezvisko\",\"userSurnamePlaceholder\":\"Zadajte Vaše priezvisko\",\"userEmail\":\"E-mailová adresa\",\"userEmailPlaceholder\":\"Zadajte Váš e-mail\",\"userPhoneNo\":\"Telefónne číslo\",\"userPhoneSk\":\"+421\",\"_submit\":\"this is submit section\",\"submitTitle\":\"Skontrolujte si zadané údaje\",\"submitSupportAsylumLabel\":\"Akou formou chcem pomôcť\",\"submitAmoutLabel\":\"Suma ktorou chcem pomôcť\",\"submitNameSurnameLabel\":\"Meno a priezvisko\",\"submitEmailLabel\":\"E-mailová adresa\",\"submitPhoneNumber\":\"Telefónne číslo\",\"submitAcceptRulesLabel\":\"Súhlasím so spracovaním mojich osobných údajov\",\"submitButton\":\"Odoslať formulár\",\"_general\":\"general section\",\"lorem\":\" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.\",\"continueButton\":\"Pokračovat'\",\"backButton\":\"Späť\"}");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/theme */ "./src/styles/theme.ts");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redux/store */ "./src/redux/store.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/misindelka.dev/Desktop/DEV/GOOD_REQUEST/ASSIGMENT/goodboy-app/src/index.tsx";








react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_5__,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      store: _redux_store__WEBPACK_IMPORTED_MODULE_6__["default"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: "...Loading",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 5
}, undefined), document.getElementById('root'));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/choose.tsx":
/*!******************************!*\
  !*** ./src/pages/choose.tsx ***!
  \******************************/
/*! exports provided: Choose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choose", function() { return Choose; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n */ "./src/i18n/index.ts");
/* harmony import */ var _assets_wallet_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/wallet.png */ "./src/assets/wallet.png");
/* harmony import */ var _assets_dogFoot_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/dogFoot.png */ "./src/assets/dogFoot.png");
/* harmony import */ var _styles_components_generalStyled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/components/generalStyled */ "./src/styles/components/generalStyled.ts");
/* harmony import */ var _styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/components/chooseStyled */ "./src/styles/components/chooseStyled.ts");
/* harmony import */ var _assets_pageBg_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/pageBg.png */ "./src/assets/pageBg.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/misindelka.dev/Desktop/DEV/GOOD_REQUEST/ASSIGMENT/goodboy-app/src/pages/choose.tsx",
    _s = __webpack_require__.$Refresh$.signature();

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-unused-vars */











const Choose = () => {
  _s();

  var _shelters$shelters;

  const {
    language
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.lang);
  const {
    shelters
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.shelters);
  const [selectOption, setOption] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_generalStyled__WEBPACK_IMPORTED_MODULE_6__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "./Choose",
        style: {
          margin: '10px'
        },
        children: "Choose"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "./UserData",
        style: {
          margin: '10px'
        },
        children: "UserData"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "./Submit",
        style: {
          margin: '10px'
        },
        children: "submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["Wrapper"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["ContentContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["TitleContainer"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["Title"], {
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('chooseTitle', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_generalStyled__WEBPACK_IMPORTED_MODULE_6__["Container"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["CardWhite"], {
            selected: selectOption,
            onClick: () => setOption(false),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["CardSelectGrey"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
                src: _assets_wallet_png__WEBPACK_IMPORTED_MODULE_4__["default"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["CardDesc"], {
              children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('chooseSupportAsylum', language)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["CardBrown"], {
            selected: selectOption,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["CardSelectBrown"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
                src: _assets_dogFoot_png__WEBPACK_IMPORTED_MODULE_5__["default"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["CardDesc"], {
              children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('cooseSupportTrust', language)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["LabelContainer"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["PriceTitle"], {
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('chooseAboutProject', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["PriceTitle"], {
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('chooseVoluntary', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_generalStyled__WEBPACK_IMPORTED_MODULE_6__["Container"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["StyledSelect"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("option", {
              value: "",
              children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('chooseFromList', language)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, undefined), (_shelters$shelters = shelters.shelters) === null || _shelters$shelters === void 0 ? void 0 : _shelters$shelters.map(i => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("option", {
              value: "",
              children: i.name
            }, i.id, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 33
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["LabelContainer"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["PriceTitle"], {
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('choosePriceToDonate', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_generalStyled__WEBPACK_IMPORTED_MODULE_6__["Container"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["PriceField"], {
            children: "5\u20AC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["PriceField"], {
            children: "10\u20AC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["PriceField"], {
            children: "20\u20AC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["PriceField"], {
            children: "30\u20AC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["PriceField"], {
            children: "50\u20AC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["PriceField"], {
            children: "100\u20AC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["PriceField"], {
            children: "...\u20AC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["LabelContainer"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_generalStyled__WEBPACK_IMPORTED_MODULE_6__["Container"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["LinkTo"], {
            to: "./UserData",
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('continueButton', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_generalStyled__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_7__["Image"], {
          src: _assets_pageBg_png__WEBPACK_IMPORTED_MODULE_8__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

_s(Choose, "8QhJEPXcTpIykiydV0jW+F1h9oo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Choose;

var _c;

__webpack_require__.$Refresh$.register(_c, "Choose");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/submit.tsx":
/*!******************************!*\
  !*** ./src/pages/submit.tsx ***!
  \******************************/
/*! exports provided: Submit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Submit", function() { return Submit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n */ "./src/i18n/index.ts");
/* harmony import */ var _styles_components_generalStyled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/generalStyled */ "./src/styles/components/generalStyled.ts");
/* harmony import */ var _styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/components/chooseStyled */ "./src/styles/components/chooseStyled.ts");
/* harmony import */ var _styles_components_submitStyled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/components/submitStyled */ "./src/styles/components/submitStyled.ts");
/* harmony import */ var _assets_pageBg_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/pageBg.png */ "./src/assets/pageBg.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/misindelka.dev/Desktop/DEV/GOOD_REQUEST/ASSIGMENT/goodboy-app/src/pages/submit.tsx",
    _s = __webpack_require__.$Refresh$.signature();











const Submit = () => {
  _s();

  const {
    language
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.lang);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_generalStyled__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "./Choose",
        style: {
          margin: '10px'
        },
        children: "Choose"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "./UserData",
        style: {
          margin: '10px'
        },
        children: "UserData"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "./Submit",
        style: {
          margin: '10px'
        },
        children: "submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["Wrapper"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["ContentContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["TitleContainer"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["Title"], {
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('submitTitle', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["LabelContainer"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["PriceTitle"], {
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('submitSupportAsylumLabel', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["LabelContainer"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["PriceTitle"], {
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('submitAmoutLabel', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["LabelContainer"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["PriceTitle"], {
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('submitNameSurnameLabel', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["LabelContainer"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["PriceTitle"], {
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('submitEmailLabel', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["LabelContainer"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["PriceTitle"], {
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('submitPhoneNumber', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_submitStyled__WEBPACK_IMPORTED_MODULE_6__["CheckedWrapper"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_submitStyled__WEBPACK_IMPORTED_MODULE_6__["StyledCheckbox"], {
            type: "checkbox",
            id: "vehicle1",
            name: "vehicle1",
            value: "Bike"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_submitStyled__WEBPACK_IMPORTED_MODULE_6__["CheckedLabel"], {
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('submitTitle', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["LabelContainer"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["LinkTo"], {
            to: "./UserData",
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('backButton', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["LinkTo"], {
            to: "./Submit",
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('submitButton', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_generalStyled__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["Image"], {
          src: _assets_pageBg_png__WEBPACK_IMPORTED_MODULE_7__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

_s(Submit, "VONX64DacJt6SalpyK9C6SP1HMI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Submit;

var _c;

__webpack_require__.$Refresh$.register(_c, "Submit");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/userData.tsx":
/*!********************************!*\
  !*** ./src/pages/userData.tsx ***!
  \********************************/
/*! exports provided: UserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n */ "./src/i18n/index.ts");
/* harmony import */ var _styles_components_generalStyled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/generalStyled */ "./src/styles/components/generalStyled.ts");
/* harmony import */ var _styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/components/chooseStyled */ "./src/styles/components/chooseStyled.ts");
/* harmony import */ var _styles_components_userDataStyled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/components/userDataStyled */ "./src/styles/components/userDataStyled.ts");
/* harmony import */ var _assets_pageBg_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/pageBg.png */ "./src/assets/pageBg.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/misindelka.dev/Desktop/DEV/GOOD_REQUEST/ASSIGMENT/goodboy-app/src/pages/userData.tsx",
    _s = __webpack_require__.$Refresh$.signature();











const UserData = () => {
  _s();

  const {
    language
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.lang);

  const handleInput = () => {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_generalStyled__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "./Choose",
        style: {
          margin: '10px'
        },
        children: "Choose"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "./UserData",
        style: {
          margin: '10px'
        },
        children: "UserData"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "./Submit",
        style: {
          margin: '10px'
        },
        children: "submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["Wrapper"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["ContentContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["TitleContainer"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["Title"], {
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('userDataTitle', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["LabelContainer"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["PriceTitle"], {
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('userDataFormTitle', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_userDataStyled__WEBPACK_IMPORTED_MODULE_6__["FormWrapper"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_userDataStyled__WEBPACK_IMPORTED_MODULE_6__["InputName"], {
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('userName', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_userDataStyled__WEBPACK_IMPORTED_MODULE_6__["StyledInput"], {
            type: "text",
            placeholder: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('userNamePlaceholder', language),
            name: "name",
            value: "",
            onChange: handleInput
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_userDataStyled__WEBPACK_IMPORTED_MODULE_6__["FormWrapper"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_userDataStyled__WEBPACK_IMPORTED_MODULE_6__["InputName"], {
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('userSurname', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_userDataStyled__WEBPACK_IMPORTED_MODULE_6__["StyledInput"], {
            type: "text",
            placeholder: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('userSurnamePlaceholder', language),
            name: "surname",
            value: "",
            onChange: handleInput
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_userDataStyled__WEBPACK_IMPORTED_MODULE_6__["FormWrapper"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_userDataStyled__WEBPACK_IMPORTED_MODULE_6__["InputName"], {
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('userEmail', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_userDataStyled__WEBPACK_IMPORTED_MODULE_6__["StyledInput"], {
            type: "email",
            placeholder: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('userEmailPlaceholder', language),
            name: "email",
            value: "",
            onChange: handleInput
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_userDataStyled__WEBPACK_IMPORTED_MODULE_6__["FormWrapper"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_userDataStyled__WEBPACK_IMPORTED_MODULE_6__["InputName"], {
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('userPhoneNo', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_userDataStyled__WEBPACK_IMPORTED_MODULE_6__["StyledInput"], {
            type: "tel",
            placeholder: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('userPhoneSk', language),
            name: "phone",
            value: "",
            onChange: handleInput
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["LabelContainer"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["LinkTo"], {
            to: "./Choose",
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('backButton', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["LinkTo"], {
            to: "./Submit",
            children: Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["translate"])('continueButton', language)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_generalStyled__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styles_components_chooseStyled__WEBPACK_IMPORTED_MODULE_5__["Image"], {
          src: _assets_pageBg_png__WEBPACK_IMPORTED_MODULE_7__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

_s(UserData, "VONX64DacJt6SalpyK9C6SP1HMI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = UserData;

var _c;

__webpack_require__.$Refresh$.register(_c, "UserData");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/redux/actions/sheltersActions.ts":
/*!**********************************************!*\
  !*** ./src/redux/actions/sheltersActions.ts ***!
  \**********************************************/
/*! exports provided: getShelters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShelters", function() { return getShelters; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/redux/types.ts");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const getShelters = () => async dispatch => {
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://frontend-assignment-api.goodrequest.com/api/v1/shelters').then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_SHELTERS"],
      payload: res.data
    });
  });
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/redux/index.tsx":
/*!*****************************!*\
  !*** ./src/redux/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_langReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/langReducer */ "./src/redux/reducers/langReducer.ts");
/* harmony import */ var _reducers_sheltersReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/sheltersReducer */ "./src/redux/reducers/sheltersReducer.ts");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  lang: _reducers_langReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  shelters: _reducers_sheltersReducer__WEBPACK_IMPORTED_MODULE_2__["sheltersReducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/redux/reducers/langReducer.ts":
/*!*******************************************!*\
  !*** ./src/redux/reducers/langReducer.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/redux/types.ts");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const localSorageLang = localStorage.getItem('language');
const initialState = {
  language: localSorageLang || 'SK'
};

const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_LANGUAGE"]:
      return { ...state,
        language: action.payload
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (langReducer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/redux/reducers/sheltersReducer.ts":
/*!***********************************************!*\
  !*** ./src/redux/reducers/sheltersReducer.ts ***!
  \***********************************************/
/*! exports provided: sheltersReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheltersReducer", function() { return sheltersReducer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/redux/types.ts");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const initialState = {
  shelters: []
};
const sheltersReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_SHELTERS"]:
      return { ...state,
        shelters: action.payload
      };

    default:
      return state;
  }
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/redux/store.tsx":
/*!*****************************!*\
  !*** ./src/redux/store.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/redux/index.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);





const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_index__WEBPACK_IMPORTED_MODULE_3__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"])));
/* harmony default export */ __webpack_exports__["default"] = (store);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/redux/types.ts":
/*!****************************!*\
  !*** ./src/redux/types.ts ***!
  \****************************/
/*! exports provided: SET_LANGUAGE, GET_SHELTERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LANGUAGE", function() { return SET_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SHELTERS", function() { return GET_SHELTERS; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const SET_LANGUAGE = 'SET_LANGUAGE';
const GET_SHELTERS = 'GET_SHELTERS';

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _pages_choose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/choose */ "./src/pages/choose.tsx");
/* harmony import */ var _pages_userData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/userData */ "./src/pages/userData.tsx");
/* harmony import */ var _pages_submit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/submit */ "./src/pages/submit.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

/* eslint-disable prettier/prettier */



const routes = [{
  path: '/Choose',
  component: _pages_choose__WEBPACK_IMPORTED_MODULE_0__["Choose"],
  routeName: 'ChooseHelp'
}, {
  path: '/UserData',
  component: _pages_userData__WEBPACK_IMPORTED_MODULE_1__["UserData"],
  routeName: 'UserData'
}, {
  path: '/Submit',
  component: _pages_submit__WEBPACK_IMPORTED_MODULE_2__["Submit"],
  routeName: 'Submit'
}];

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/styles/components/chooseStyled.ts":
/*!***********************************************!*\
  !*** ./src/styles/components/chooseStyled.ts ***!
  \***********************************************/
/*! exports provided: Wrapper, ContentContainer, CardDesc, CardWhite, CardBrown, LinkTo, TitleContainer, Title, StyledSelect, LabelContainer, PriceTitle, PriceField, Image, Icon, CardSelectGrey, CardSelectBrown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentContainer", function() { return ContentContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDesc", function() { return CardDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWhite", function() { return CardWhite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBrown", function() { return CardBrown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkTo", function() { return LinkTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleContainer", function() { return TitleContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledSelect", function() { return StyledSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelContainer", function() { return LabelContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceTitle", function() { return PriceTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceField", function() { return PriceField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSelectGrey", function() { return CardSelectGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSelectBrown", function() { return CardSelectBrown; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    top: 0;
    width: 100%;
    padding: ${props => props.theme.largePadding};
    @media (max-width: 768px) {
        flex-direction: column;
        flex: 1 auto 1;
    }
`;
const ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    flex-direction: column;
`;
const CardDesc = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
    margin-left: ${props => props.theme.mediumPadding};
`;
const CardWhite = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
    display: flex;
    flex-direction: column;
    height: 186px;
    width: 278px;
    background: #faf9f9;
    border: 1px solid #cd8b65;
    box-sizing: border-box;
    border-radius: 24px 0px 0px 24px;
    margin-top: ${props => props.theme.largePadding};
    cursor: pointer;
    background-color: ${props => props.selected ? 'red' : 'none'};
`;
const CardBrown = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    flex-direction: column;
    height: 186px;
    width: 278px;
    background: linear-gradient(180deg, #cd8b65 0%, #bb6b3d 100%);
    margin-top: ${props => props.theme.largePadding};
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
        0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
        0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
        0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
        0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    border-radius: 0px 24px 24px 0px;
    background-color: ${props => props.selected ? 'red' : 'none'};
`;
const LinkTo = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"])`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: black;
    font-size: ${props => props.theme.primaryFontSize};
    width: 124px;
    height: 59px;
    left: 682px;
    top: 844px;
    margin-top: ${props => props.theme.largePadding};
    background: linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
        0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
        0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
        0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
        0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    border-radius: 100px;
    text-decoration: none;
    :hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 0.3s;
    }
`;
const TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    max-width: ${props => props.theme.largeContarinerSize};
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    font-family: Hind;
    font-style: normal;
    font-weight: bold;
    font-size: 46px;
    line-height: 52px;
    letter-spacing: 0.01em;
    font-weight: bold;
`;
const StyledSelect = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].select`
    width: ${props => props.theme.largeContarinerSize};
    height: ${props => props.theme.mediumIconSize};
    background: white;
    color: gray;
    padding-left: 5px;
    font-size: 14px;
    border: none;
    border: 1px solid #dfdfdf;
    border-radius: 8px;
    option {
        color: black;
        background: white;
        font-weight: small;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`;
const LabelContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    margin-top: ${props => props.theme.largePadding};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${props => props.theme.largePadding};
    width: ${props => props.theme.largeContarinerSize};
`;
const PriceTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
    display: flex;
    margin-left: 0;
    font-family: Public Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
`;
const PriceField = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 58px;
    height: 53px;
    left: 251px;
    top: 719px;
    background: #ffffff;
    border: 1px solid #dfdfdf;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: Public Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    margin: ${props => props.theme.secondaryPadding};
`;
const Image = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
    margin-left: ${props => props.theme.largePadding};
`;
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
    width: 30px;
    height: 30px;
`;
const CardSelectGrey = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background: #e0e0e0;
    border-radius: 100%;
    margin: ${props => props.theme.mediumPadding};
    margin-bottom: 5px;
`;
const CardSelectBrown = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background: #8d6e63;
    border-radius: 100%;
    margin: ${props => props.theme.mediumPadding};
    margin-bottom: 5px;
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/styles/components/footerStyled.ts":
/*!***********************************************!*\
  !*** ./src/styles/components/footerStyled.ts ***!
  \***********************************************/
/*! exports provided: Wrapper, Card, LogoWrapper, LogoImage, LogoText, CardTitle, CardContent, LinkTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoWrapper", function() { return LogoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoImage", function() { return LogoImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoText", function() { return LogoText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitle", function() { return CardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContent", function() { return CardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkTo", function() { return LinkTo; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    top: 0;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
        flex: 1 auto 1;
    }
`;
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    flex-direction: column;
`;
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    padding: ${props => props.theme.smallPadding};
`;
const LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
    height: ${props => props.theme.mediumIconSize};
    width: ${props => props.theme.mediumIconSize};
`;
const LogoText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
    margin-top: 0;
    font-size: ${props => props.theme.largeFontSize};
    font-weight: bolder;
    font-family: ${props => props.theme.headerFont};
    margin-left: ${props => props.theme.secondaryPadding};
`;
const CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    font-size: ${props => props.theme.mediumFontSize};
    font-weight: bold;
    font-family: ${props => props.theme.headerFont};
    justify-content: center;
    padding: ${props => props.theme.smallPadding};
`;
const CardContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: ${props => props.theme.mediumCardSize};
    height: ${props => props.theme.smallCardSize};
    font-size: ${props => props.theme.primaryFontSize};
    justify-content: center;
    padding: ${props => props.theme.smallPadding};
`;
const LinkTo = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"])`
    display: flex;
    color: black;
    cursor: pointer;
    font-size: ${props => props.theme.primaryFontSize};
    padding: ${props => props.theme.smallPadding};
    text-decoration: none;
    :hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 0.3s;
    }
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/styles/components/generalStyled.ts":
/*!************************************************!*\
  !*** ./src/styles/components/generalStyled.ts ***!
  \************************************************/
/*! exports provided: Container, SliderRectangleBrown, SliderRectangleSilver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderRectangleBrown", function() { return SliderRectangleBrown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderRectangleSilver", function() { return SliderRectangleSilver; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
`;
const SliderRectangleBrown = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 43.77px;
    height: 6px;
    left: 0px;
    background: linear-gradient(94.75deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0) 100.7%), #cd8b65;
    border-radius: 10px;
`;
const SliderRectangleSilver = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 20.6px;
    height: 6px;
    left: 48.77px;
    bottom: 0px;
    background: #9f9f9f;
    opacity: 0.36;
    border-radius: 10px;
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/styles/components/headerStyled.ts":
/*!***********************************************!*\
  !*** ./src/styles/components/headerStyled.ts ***!
  \***********************************************/
/*! exports provided: Wrapper, LogoImage, LinkTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoImage", function() { return LogoImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkTo", function() { return LinkTo; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    align-items: center;
    background-color: ${props => props.theme.headerBg};
    display: flex;
    flex-direction: row;
    font-family: ${props => props.theme.headerFont};
    font-size: ${props => props.theme.primaryFontSize};
    color: ${props => props.theme.secondaryTextGrey};
    justify-content: space-around;
    top: 0;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
        flex: 1 auto 1;
    }
`;
const LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
    height: ${props => props.theme.smallIconSize};
    width: ${props => props.theme.smallIconSize};
    margin-right: ${props => props.theme.secondaryPadding};
`;
const LinkTo = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"])`
    display: flex;
    color: black;
    cursor: pointer;
    font-size: ${props => props.theme.primaryFontSize};
    padding: ${props => props.theme.smallPadding};
    text-decoration: none;
    :hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 0.3s;
    }
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/styles/components/submitStyled.ts":
/*!***********************************************!*\
  !*** ./src/styles/components/submitStyled.ts ***!
  \***********************************************/
/*! exports provided: CheckedWrapper, StyledCheckbox, CheckedLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckedWrapper", function() { return CheckedWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledCheckbox", function() { return StyledCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckedLabel", function() { return CheckedLabel; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const CheckedWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: ${props => props.theme.largePadding};
    padding: ${props => props.theme.secondaryPadding};
`;
const StyledCheckbox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input`
    width: 34px;
    height: 34px;
`;
const CheckedLabel = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
    margin-left: ${props => props.theme.secondaryPadding}; ;
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/styles/components/userDataStyled.ts":
/*!*************************************************!*\
  !*** ./src/styles/components/userDataStyled.ts ***!
  \*************************************************/
/*! exports provided: FormWrapper, StyledInput, InputName, StyledForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWrapper", function() { return FormWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledInput", function() { return StyledInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputName", function() { return InputName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledForm", function() { return StyledForm; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    border: 0.3px solid #cd8b65;
    width: ${props => props.theme.largeContarinerSize};
    height: ${props => props.theme.mediumInputHeight};
    padding: ${props => props.theme.secondaryPadding};

    margin-top: ${props => props.theme.secondaryPadding};
`;
const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input`
    border: none;
    height: ${props => props.theme.smallIconSize};
    width: ${props => props.theme.mediumInputSize};
`;
const InputName = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
    display: flex;
    margin: 0;
`;
const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/styles/globalStyle.ts":
/*!***********************************!*\
  !*** ./src/styles/globalStyle.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
 body {
   margin: 0;
   padding: 0;
   font-family: sans-serif;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 }
`;


const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/*! exports provided: headerBg, secondaryTextGrey, fontFamily, headerFont, smallFontSize, primaryFontSize, mediumFontSize, secondaryFontSize, largeFontSize, primaryOpacity, largePadding, mediumPadding, primaryPadding, secondaryPadding, smallPadding, mediumIconSize, smallIconSize, smallCardSize, mediumCardSize, mediumInputHeight, mediumInputSize, largeContarinerSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerBg", function() { return headerBg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondaryTextGrey", function() { return secondaryTextGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamily", function() { return fontFamily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerFont", function() { return headerFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallFontSize", function() { return smallFontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryFontSize", function() { return primaryFontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumFontSize", function() { return mediumFontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondaryFontSize", function() { return secondaryFontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "largeFontSize", function() { return largeFontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryOpacity", function() { return primaryOpacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "largePadding", function() { return largePadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumPadding", function() { return mediumPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryPadding", function() { return primaryPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondaryPadding", function() { return secondaryPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallPadding", function() { return smallPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumIconSize", function() { return mediumIconSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallIconSize", function() { return smallIconSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallCardSize", function() { return smallCardSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumCardSize", function() { return mediumCardSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumInputHeight", function() { return mediumInputHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumInputSize", function() { return mediumInputSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "largeContarinerSize", function() { return largeContarinerSize; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

// Colors
const headerBg = '#f5f5f5';
const secondaryTextGrey = '#9F9F9F'; // Fonts

const fontFamily = 'Segoe UI';
const headerFont = 'Public Sans'; // FontSize

const smallFontSize = '12px';
const primaryFontSize = '14px';
const mediumFontSize = '16px';
const secondaryFontSize = '18px';
const largeFontSize = '24px'; // Opacity

const primaryOpacity = 0.9; // Paddings

const largePadding = '50px';
const mediumPadding = '25px';
const primaryPadding = '15px';
const secondaryPadding = '10px';
const smallPadding = '5px;'; // Size

const mediumIconSize = '70px';
const smallIconSize = '20px';
const smallCardSize = '105px';
const mediumCardSize = '170px';
const mediumInputHeight = '50px';
const mediumInputSize = '220px';
const largeContarinerSize = '550px';

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.tsx ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/misindelka.dev/Desktop/DEV/GOOD_REQUEST/ASSIGMENT/goodboy-app/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/misindelka.dev/Desktop/DEV/GOOD_REQUEST/ASSIGMENT/goodboy-app/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/misindelka.dev/Desktop/DEV/GOOD_REQUEST/ASSIGMENT/goodboy-app/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/misindelka.dev/Desktop/DEV/GOOD_REQUEST/ASSIGMENT/goodboy-app/src/index.tsx */"./src/index.tsx");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map