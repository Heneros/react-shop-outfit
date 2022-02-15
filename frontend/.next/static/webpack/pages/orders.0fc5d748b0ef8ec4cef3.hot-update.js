self["webpackHotUpdate_N_E"]("pages/orders",{

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Products; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\punk6\\Desktop\\Projects\\react-shop outfit\\frontend\\components\\Products.js",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = (0,C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\nquery ALL_PRODUCTS_QUERY {\n  allProducts{\n    id\n    name\n    price\n    description\n    photo{\n      id\n      image{\n        publicUrlTransformed\n      }\n    }\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ALL_PRODUCTS_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_2__.default)(_templateObject());
var ProductList = styled.div(_templateObject2());
function Products() {
  _s();

  var _this = this;

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(ALL_PRODUCTS_QUERY),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

  console.log(data, error, loading);
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 22
  }, this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: ["Error: ", error.message, " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 20
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: data.allProducts.map(function (product) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [" ", product.name, " "]
        }, product.id, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 44
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, this);
}

_s(Products, "eE+cqeCo2lkI//dPlCsO1rICVGU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery];
});

_c = Products;

var _c;

$RefreshReg$(_c, "Products");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJBTExfUFJPRFVDVFNfUVVFUlkiLCJncWwiLCJQcm9kdWN0TGlzdCIsInN0eWxlZCIsImRpdiIsIlByb2R1Y3RzIiwidXNlUXVlcnkiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJhbGxQcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJuYW1lIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFHQSxJQUFNQSxrQkFBa0IsR0FBR0Msb0RBQUgsbUJBQXhCO0FBaUJBLElBQU1DLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxHQUFWLG9CQUFqQjtBQUllLFNBQVNDLFFBQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDQ0Msd0RBQVEsQ0FBQ04sa0JBQUQsQ0FEVDtBQUFBLE1BQ3hCTyxJQUR3QixhQUN4QkEsSUFEd0I7QUFBQSxNQUNsQkMsS0FEa0IsYUFDbEJBLEtBRGtCO0FBQUEsTUFDWEMsT0FEVyxhQUNYQSxPQURXOztBQUVoQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxPQUF6QjtBQUNBLE1BQUdBLE9BQUgsRUFBWSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ1osTUFBR0QsS0FBSCxFQUFVLG9CQUFPO0FBQUEsMEJBQVdBLEtBQUssQ0FBQ0ksT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDWCxzQkFDTztBQUFBLDJCQUNFO0FBQUEsZ0JBQ0NMLElBQUksQ0FBQ00sV0FBTCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQUMsT0FBTztBQUFBLDRCQUFJO0FBQUEsMEJBQXNCQSxPQUFPLENBQUNDLElBQTlCO0FBQUEsV0FBUUQsT0FBTyxDQUFDRSxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFKO0FBQUEsT0FBNUI7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURQO0FBT0E7O0dBWnVCWixRO1VBQ1dDLG9EOzs7S0FEWEQsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vcmRlcnMuMGZjNWQ3NDhiMGVmOGVjNGNlZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuXHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5cclxuXHJcbmNvbnN0IEFMTF9QUk9EVUNUU19RVUVSWSA9IGdxbGBcclxucXVlcnkgQUxMX1BST0RVQ1RTX1FVRVJZIHtcclxuICBhbGxQcm9kdWN0c3tcclxuICAgIGlkXHJcbiAgICBuYW1lXHJcbiAgICBwcmljZVxyXG4gICAgZGVzY3JpcHRpb25cclxuICAgIHBob3Rve1xyXG4gICAgICBpZFxyXG4gICAgICBpbWFnZXtcclxuICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0TGlzdCA9IHN0eWxlZC5kaXZgXHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKXtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShBTExfUFJPRFVDVFNfUVVFUlkpO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEsIGVycm9yLCBsb2FkaW5nKTtcclxuICBpZihsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cclxuICBpZihlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX0gPC9wPlxyXG4gcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2RhdGEuYWxsUHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gPHAga2V5PXtwcm9kdWN0LmlkfT4ge3Byb2R1Y3QubmFtZX0gPC9wPil9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=