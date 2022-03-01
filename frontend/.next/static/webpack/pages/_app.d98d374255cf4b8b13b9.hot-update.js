self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/styles/nprogress.css */ "./components/styles/nprogress.css");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\punk6\\Desktop\\Projects\\react-shop outfit\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on('routeChangeStart', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();
});
next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on('routeChangeComplete', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();
});
next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on('routeChangeError', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();
});

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      apollo = _ref.apollo;
  console.log(apollo);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_9__.ApolloProvider, {
    client: apollo,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Page__WEBPACK_IMPORTED_MODULE_6__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

_c = MyApp;

MyApp.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = (0,C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref2) {
    var Component, ctx, pageProps;
    return C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = _ref2.Component, ctx = _ref2.ctx;
            pageProps = {};

            if (!Component.getInitialProps) {
              _context.next = 6;
              break;
            }

            _context.next = 5;
            return Component.getInitialProps(ctx);

          case 5:
            pageProps = _context.sent;

          case 6:
            pageProps.query = ctx.query;
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,_lib_withData__WEBPACK_IMPORTED_MODULE_8__.default)(MyApp));

var _c, _c2;

$RefreshReg$(_c, "MyApp");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJOUHJvZ3Jlc3MiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFwb2xsbyIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSIsIndpdGhEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsNERBQUEsQ0FBaUIsa0JBQWpCLEVBQXFDO0FBQUEsU0FBTUMsc0RBQUEsRUFBTjtBQUFBLENBQXJDO0FBQ0FELDREQUFBLENBQWlCLHFCQUFqQixFQUF3QztBQUFBLFNBQU1DLHFEQUFBLEVBQU47QUFBQSxDQUF4QztBQUNBRCw0REFBQSxDQUFpQixrQkFBakIsRUFBcUM7QUFBQSxTQUFNQyxxREFBQSxFQUFOO0FBQUEsQ0FBckM7O0FBRUEsU0FBU0MsS0FBVCxPQUFpRDtBQUFBLE1BQWhDQyxTQUFnQyxRQUFoQ0EsU0FBZ0M7QUFBQSxNQUFyQkMsU0FBcUIsUUFBckJBLFNBQXFCO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQy9DQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBLHNCQUNFLDhEQUFDLDBEQUFEO0FBQWdCLFVBQU0sRUFBRUEsTUFBeEI7QUFBQSwyQkFDRSw4REFBQyxxREFBRDtBQUFBLDZCQUNFLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7S0FUUUYsSzs7QUFXVEEsS0FBSyxDQUFDTSxlQUFOO0FBQUEsd1dBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrQkwscUJBQWxCLFNBQWtCQSxTQUFsQixFQUE2Qk0sR0FBN0IsU0FBNkJBLEdBQTdCO0FBQ2xCTCxxQkFEa0IsR0FDTixFQURNOztBQUFBLGlCQUVsQkQsU0FBUyxDQUFDSyxlQUZRO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBR0ZMLFNBQVMsQ0FBQ0ssZUFBVixDQUEwQkMsR0FBMUIsQ0FIRTs7QUFBQTtBQUdwQkwscUJBSG9COztBQUFBO0FBS3RCQSxxQkFBUyxDQUFDTSxLQUFWLEdBQWtCRCxHQUFHLENBQUNDLEtBQXRCO0FBTHNCLDZDQU1mO0FBQUVOLHVCQUFTLEVBQVRBO0FBQUYsYUFOZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTQSwrREFBZSxNQUFBTyxzREFBUSxDQUFDVCxLQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZDk4ZDM3NDI1NWNmNGI4YjEzYjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL3N0eWxlcy9ucHJvZ3Jlc3MuY3NzJztcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9saWIvd2l0aERhdGEnO1xuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpO1xuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBhcG9sbG8gfSkge1xuICBjb25zb2xlLmxvZyhhcG9sbG8pO1xuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb30+XG4gICAgICA8UGFnZT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9QYWdlPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59XG5cbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICh7IENvbXBvbmVudCwgY3R4IH0pIHtcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgfVxuICBwYWdlUHJvcHMucXVlcnkgPSBjdHgucXVlcnk7XG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEoTXlBcHApOyJdLCJzb3VyY2VSb290IjoiIn0=