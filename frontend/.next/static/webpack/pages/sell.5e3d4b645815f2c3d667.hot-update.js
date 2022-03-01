self["webpackHotUpdate_N_E"]("pages/sell",{

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateProduct; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\punk6\\Desktop\\Projects\\react-shop outfit\\frontend\\components\\CreateProduct.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n    mutation CREATE_PRODUCT_MUTATION (\n      $name: String!\n      $descroption: String!\n      $price: Int!\n      $image: Upload\n    ){\n      CreateProduct(\n        data:{\n          name: $name\n          description: $description\n          price: $price\n          status: \"AVAILABLE\",\n          photo: { create: {image: $image,altText: $name}\n          }\n        }\n      ){\n        id\n        price\n        description\n        name\n      }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var CREATE_PRODUCT_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject());
function CreateProduct() {
  _s();

  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_5__.default)({
    image: '',
    name: '545',
    price: 2313,
    description: 'test123'
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      clearForm = _useForm.clearForm,
      resetForm = _useForm.resetForm;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(CREATE_PRODUCT_MUTATION, {
    variables: inputs
  }),
      _useMutation2 = (0,C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),
      createProduct = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error,
      data = _useMutation2$.data;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_7__.default, {
    onSubmit: /*#__PURE__*/function () {
      var _ref = (0,C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
        return C_Users_punk6_Desktop_Projects_react_shop_outfit_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                console.log(inputs);
                _context.next = 4;
                return createProduct();

              case 4:
                console.log(res);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__.default, {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("fieldset", {
      disabled: loading,
      "aria-busy": loading,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "image",
        children: ["Name", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "file",
          id: "image",
          name: "image",
          required: true,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 16
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 10
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          id: "name",
          name: "name",
          placeholder: "Name",
          value: inputs.name,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 16
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 12
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "price",
        children: ["Price", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "number",
          id: "price",
          name: "price",
          placeholder: "Price",
          value: inputs.price,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 16
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 12
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "description",
        children: ["Price", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
          id: "description",
          name: "description",
          placeholder: "Description",
          value: inputs.description,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 16
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 12
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 10
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 8
  }, this);
}

_s(CreateProduct, "XfimSRA7JBLOohqMc3u+wEXQvuw=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_5__.default, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation];
});

_c = CreateProduct;

var _c;

$RefreshReg$(_c, "CreateProduct");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkNSRUFURV9QUk9EVUNUX01VVEFUSU9OIiwiZ3FsIiwiQ3JlYXRlUHJvZHVjdCIsInVzZUZvcm0iLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwiY2xlYXJGb3JtIiwicmVzZXRGb3JtIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJjcmVhdGVQcm9kdWN0IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSx1QkFBdUIsR0FBR0Msb0RBQUgsbUJBQTdCO0FBeUJnQixTQUFTQyxhQUFULEdBQXlCO0FBQUE7O0FBQUEsaUJBQ2lCQyxxREFBTyxDQUFDO0FBQzdEQyxTQUFLLEVBQUUsRUFEc0Q7QUFFN0RDLFFBQUksRUFBRSxLQUZ1RDtBQUc3REMsU0FBSyxFQUFFLElBSHNEO0FBSTdEQyxlQUFXLEVBQUU7QUFKZ0QsR0FBRCxDQUR4QjtBQUFBLE1BQzlCQyxNQUQ4QixZQUM5QkEsTUFEOEI7QUFBQSxNQUN0QkMsWUFEc0IsWUFDdEJBLFlBRHNCO0FBQUEsTUFDUkMsU0FEUSxZQUNSQSxTQURRO0FBQUEsTUFDR0MsU0FESCxZQUNHQSxTQURIOztBQUFBLHFCQU9VQywyREFBVyxDQUFDWix1QkFBRCxFQUEwQjtBQUNuRmEsYUFBUyxFQUFFTDtBQUR3RSxHQUExQixDQVByQjtBQUFBO0FBQUEsTUFPL0JNLGFBUCtCO0FBQUE7QUFBQSxNQU9mQyxPQVBlLGtCQU9mQSxPQVBlO0FBQUEsTUFPTkMsS0FQTSxrQkFPTkEsS0FQTTtBQUFBLE1BT0NDLElBUEQsa0JBT0NBLElBUEQ7O0FBVXJDLHNCQUNHLDhEQUFDLGlEQUFEO0FBQU0sWUFBUTtBQUFBLDJXQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZkEsaUJBQUMsQ0FBQ0MsY0FBRjtBQUNBQyx1QkFBTyxDQUFDQyxHQUFSLENBQVliLE1BQVo7QUFGZTtBQUFBLHVCQUdUTSxhQUFhLEVBSEo7O0FBQUE7QUFJZk0sdUJBQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaOztBQUplO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZDtBQUFBLDRCQU1DLDhEQUFDLGtEQUFEO0FBQWMsV0FBSyxFQUFFTjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkQsZUFPRTtBQUFVLGNBQVEsRUFBRUQsT0FBcEI7QUFBNkIsbUJBQVdBLE9BQXhDO0FBQUEsOEJBQ0E7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLHdDQUVNO0FBQ0EsY0FBSSxFQUFDLE1BREw7QUFFQSxZQUFFLEVBQUMsT0FGSDtBQUdBLGNBQUksRUFBQyxPQUhMO0FBSUEsa0JBQVEsTUFKUjtBQUtBLGtCQUFRLEVBQUVOO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQVdFO0FBQU8sZUFBTyxFQUFDLE1BQWY7QUFBQSx3Q0FFSTtBQUNBLGNBQUksRUFBQyxNQURMO0FBRUEsWUFBRSxFQUFDLE1BRkg7QUFHQSxjQUFJLEVBQUMsTUFITDtBQUlBLHFCQUFXLEVBQUMsTUFKWjtBQUtBLGVBQUssRUFBRUQsTUFBTSxDQUFDSCxJQUxkO0FBTUEsa0JBQVEsRUFBRUk7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBc0JFO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQSx5Q0FFSTtBQUNBLGNBQUksRUFBQyxRQURMO0FBRUEsWUFBRSxFQUFDLE9BRkg7QUFHQSxjQUFJLEVBQUMsT0FITDtBQUlBLHFCQUFXLEVBQUMsT0FKWjtBQUtBLGVBQUssRUFBRUQsTUFBTSxDQUFDRixLQUxkO0FBTUEsa0JBQVEsRUFBRUc7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRixlQWlDRTtBQUFPLGVBQU8sRUFBQyxhQUFmO0FBQUEseUNBRUk7QUFDQSxZQUFFLEVBQUMsYUFESDtBQUVBLGNBQUksRUFBQyxhQUZMO0FBR0EscUJBQVcsRUFBQyxhQUhaO0FBSUEsZUFBSyxFQUFFRCxNQUFNLENBQUNELFdBSmQ7QUFLQSxrQkFBUSxFQUFFRTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakNGLGVBNkNFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUF5REg7O0dBbkV3QlAsYTtVQUNpQ0MsaUQsRUFNUFMsdUQ7OztLQVAxQlYsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWxsLjVlM2Q0YjY0NTgxNWYyYzNkNjY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi4vbGliL3VzZUZvcm1cIjtcclxuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tIFwiLi9FcnJvck1lc3NhZ2VcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XHJcblxyXG5cclxuY29uc3QgQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXHJcbiAgICBtdXRhdGlvbiBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTiAoXHJcbiAgICAgICRuYW1lOiBTdHJpbmchXHJcbiAgICAgICRkZXNjcm9wdGlvbjogU3RyaW5nIVxyXG4gICAgICAkcHJpY2U6IEludCFcclxuICAgICAgJGltYWdlOiBVcGxvYWRcclxuICAgICl7XHJcbiAgICAgIENyZWF0ZVByb2R1Y3QoXHJcbiAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICBuYW1lOiAkbmFtZVxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvblxyXG4gICAgICAgICAgcHJpY2U6ICRwcmljZVxyXG4gICAgICAgICAgc3RhdHVzOiBcIkFWQUlMQUJMRVwiLFxyXG4gICAgICAgICAgcGhvdG86IHsgY3JlYXRlOiB7aW1hZ2U6ICRpbWFnZSxhbHRUZXh0OiAkbmFtZX1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICl7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBwcmljZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAgZnVuY3Rpb24gQ3JlYXRlUHJvZHVjdCgpIHtcclxuICAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgY2xlYXJGb3JtLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xyXG4gICAgIGltYWdlOiAnJywgXHJcbiAgICAgbmFtZTogJzU0NScsXHJcbiAgICAgcHJpY2U6IDIzMTMsXHJcbiAgICAgZGVzY3JpcHRpb246ICd0ZXN0MTIzJ1xyXG4gICB9KTtcclxuICAgY29uc3QgW2NyZWF0ZVByb2R1Y3QsIHtsb2FkaW5nLCBlcnJvciwgZGF0YX1dID0gdXNlTXV0YXRpb24oQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04sIHtcclxuICAgICB2YXJpYWJsZXM6IGlucHV0cyxcclxuICAgfSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPEZvcm0gb25TdWJtaXQ9eyBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGlucHV0cyk7XHJcbiAgICAgICAgIGF3YWl0IGNyZWF0ZVByb2R1Y3QoKTtcclxuICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgIH19PlxyXG4gICAgICAgIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yfSAvPlxyXG4gICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2xvYWRpbmd9IGFyaWEtYnVzeT17bG9hZGluZ30+XHJcbiAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCIgXHJcbiAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VcIiBcclxuICAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCIgXHJcbiAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgIGlkPVwibmFtZVwiIFxyXG4gICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiIFxyXG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIiBcclxuICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxyXG4gICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiPlxyXG4gICAgICAgICAgICAgICBQcmljZVxyXG4gICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBcclxuICAgICAgICAgICAgICAgaWQ9XCJwcmljZVwiIFxyXG4gICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIiBcclxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmljZVwiIFxyXG4gICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnByaWNlfVxyXG4gICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICBQcmljZVxyXG4gICAgICAgICAgICAgICA8dGV4dGFyZWEgXHJcbiAgICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIiBcclxuICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCIgXHJcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiBcclxuICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgIHsvKiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjbGVhckZvcm19PkNsZWFyIEZvcm08L2J1dHRvbj5cclxuICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtyZXNldEZvcm19PlJlc2V0IEZvcm08L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkIFByb2R1Y3Q8L2J1dHRvbj5cclxuICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgPC9Gb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=