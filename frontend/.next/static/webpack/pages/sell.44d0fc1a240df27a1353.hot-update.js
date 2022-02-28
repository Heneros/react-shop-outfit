self["webpackHotUpdate_N_E"]("pages/sell",{

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useForm; }
/* harmony export */ });
/* harmony import */ var C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function useForm() {
  _s();

  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initial),
      inputs = _useState[0],
      setInputs = _useState[1];

  function handleChange(e) {
    var _e$target = e.target,
        value = _e$target.value,
        name = _e$target.name,
        type = _e$target.type;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      value[0] = e.target.files;
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, (0,C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, value)));
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    var blankState = Object.fromEntries(Object.entries(inputs).map(function (_ref) {
      var _ref2 = (0,C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      return [key, ''];
    }));
    setInputs;
  }

  return {
    inputs: inputs,
    handleChange: handleChange,
    resetForm: resetForm
  };
}

_s(useForm, "0tjT+aoDVbAe0wsQZsq9AKLCE20=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanMiXSwibmFtZXMiOlsidXNlRm9ybSIsImluaXRpYWwiLCJ1c2VTdGF0ZSIsImlucHV0cyIsInNldElucHV0cyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJ0eXBlIiwicGFyc2VJbnQiLCJmaWxlcyIsInJlc2V0Rm9ybSIsImNsZWFyRm9ybSIsImJsYW5rU3RhdGUiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJtYXAiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxHQUE4QjtBQUFBOztBQUFBLE1BQWJDLE9BQWEsdUVBQUgsRUFBRzs7QUFBQSxrQkFDYkMsK0NBQVEsQ0FBQ0QsT0FBRCxDQURLO0FBQUEsTUFDbENFLE1BRGtDO0FBQUEsTUFDMUJDLFNBRDBCOztBQUl6QyxXQUFTQyxZQUFULENBQXNCQyxDQUF0QixFQUF3QjtBQUFBLG9CQUNNQSxDQUFDLENBQUNDLE1BRFI7QUFBQSxRQUNmQyxLQURlLGFBQ2ZBLEtBRGU7QUFBQSxRQUNSQyxJQURRLGFBQ1JBLElBRFE7QUFBQSxRQUNGQyxJQURFLGFBQ0ZBLElBREU7O0FBRXBCLFFBQUdBLElBQUksS0FBSyxRQUFaLEVBQXFCO0FBQ2pCRixXQUFLLEdBQUdHLFFBQVEsQ0FBQ0gsS0FBRCxDQUFoQjtBQUNIOztBQUNELFFBQUdFLElBQUksS0FBSyxNQUFaLEVBQW1CO0FBQ2ZGLFdBQUssQ0FBQyxDQUFELENBQUwsR0FBV0YsQ0FBQyxDQUFDQyxNQUFGLENBQVNLLEtBQXBCO0FBQ0g7O0FBQ0RSLGFBQVMsaUNBQ0ZELE1BREUsc0xBRUpNLElBRkksRUFFR0QsS0FGSCxHQUFUO0FBSUg7O0FBRUQsV0FBU0ssU0FBVCxHQUFvQjtBQUNoQlQsYUFBUyxDQUFDSCxPQUFELENBQVQ7QUFDSDs7QUFFRCxXQUFTYSxTQUFULEdBQW9CO0FBQ2hCLFFBQU1DLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxXQUFQLENBQW1CRCxNQUFNLENBQUNFLE9BQVAsQ0FBZWYsTUFBZixFQUF1QmdCLEdBQXZCLENBQTJCO0FBQUE7QUFBQSxVQUFFQyxHQUFGO0FBQUEsVUFBT1osS0FBUDs7QUFBQSxhQUNqRSxDQUFDWSxHQUFELEVBQU0sRUFBTixDQURpRTtBQUFBLEtBQTNCLENBQW5CLENBQW5CO0FBR0FoQixhQUFTO0FBQ1o7O0FBRUQsU0FBTztBQUNIRCxVQUFNLEVBQU5BLE1BREc7QUFFSEUsZ0JBQVksRUFBWkEsWUFGRztBQUdIUSxhQUFTLEVBQVRBO0FBSEcsR0FBUDtBQUtIOztHQWxDdUJiLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VsbC40NGQwZmMxYTI0MGRmMjdhMTM1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcm0oaW5pdGlhbCA9IHt9KXtcclxuICAgIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZShpbml0aWFsKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpe1xyXG4gICAgICAgIGxldCB7dmFsdWUsIG5hbWUsIHR5cGV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaWYodHlwZSA9PT0gJ251bWJlcicpe1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodHlwZSA9PT0gJ2ZpbGUnKXtcclxuICAgICAgICAgICAgdmFsdWVbMF0gPSBlLnRhcmdldC5maWxlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SW5wdXRzKHtcclxuICAgICAgICAgICAgLi4uaW5wdXRzLFxyXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRGb3JtKCl7XHJcbiAgICAgICAgc2V0SW5wdXRzKGluaXRpYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyRm9ybSgpe1xyXG4gICAgICAgIGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoaW5wdXRzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gXHJcbiAgICAgICAgW2tleSwgJyddXHJcbiAgICAgICAgKSk7XHJcbiAgICAgICAgc2V0SW5wdXRzXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbnB1dHMsXHJcbiAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgIHJlc2V0Rm9ybVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==