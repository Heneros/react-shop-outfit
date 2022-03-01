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
    name: 'Test',
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
                clearForm();

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
      lineNumber: 51,
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
          lineNumber: 55,
          columnNumber: 16
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
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
          lineNumber: 65,
          columnNumber: 16
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
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
          lineNumber: 76,
          columnNumber: 16
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
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
          lineNumber: 87,
          columnNumber: 16
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 12
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 10
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkNSRUFURV9QUk9EVUNUX01VVEFUSU9OIiwiZ3FsIiwiQ3JlYXRlUHJvZHVjdCIsInVzZUZvcm0iLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwiY2xlYXJGb3JtIiwicmVzZXRGb3JtIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJjcmVhdGVQcm9kdWN0IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSx1QkFBdUIsR0FBR0Msb0RBQUgsbUJBQTdCO0FBeUJnQixTQUFTQyxhQUFULEdBQXlCO0FBQUE7O0FBQUEsaUJBQ2lCQyxxREFBTyxDQUFDO0FBQzdEQyxTQUFLLEVBQUUsRUFEc0Q7QUFFN0RDLFFBQUksRUFBRSxNQUZ1RDtBQUc3REMsU0FBSyxFQUFFLElBSHNEO0FBSTdEQyxlQUFXLEVBQUU7QUFKZ0QsR0FBRCxDQUR4QjtBQUFBLE1BQzlCQyxNQUQ4QixZQUM5QkEsTUFEOEI7QUFBQSxNQUN0QkMsWUFEc0IsWUFDdEJBLFlBRHNCO0FBQUEsTUFDUkMsU0FEUSxZQUNSQSxTQURRO0FBQUEsTUFDR0MsU0FESCxZQUNHQSxTQURIOztBQUFBLHFCQU9VQywyREFBVyxDQUN6RFosdUJBRHlELEVBQ2hDO0FBQ3pCYSxhQUFTLEVBQUVMO0FBRGMsR0FEZ0MsQ0FQckI7QUFBQTtBQUFBLE1BTy9CTSxhQVArQjtBQUFBO0FBQUEsTUFPZkMsT0FQZSxrQkFPZkEsT0FQZTtBQUFBLE1BT05DLEtBUE0sa0JBT05BLEtBUE07QUFBQSxNQU9DQyxJQVBELGtCQU9DQSxJQVBEOztBQVdyQyxzQkFDRyw4REFBQyxpREFBRDtBQUFNLFlBQVE7QUFBQSwyV0FBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZBLGlCQUFDLENBQUNDLGNBQUY7QUFDQUMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZYixNQUFaO0FBRmU7QUFBQSx1QkFHVE0sYUFBYSxFQUhKOztBQUFBO0FBSWZKLHlCQUFTOztBQUpNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZDtBQUFBLDRCQU1DLDhEQUFDLGtEQUFEO0FBQWMsV0FBSyxFQUFFTTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkQsZUFPRTtBQUFVLGNBQVEsRUFBRUQsT0FBcEI7QUFBNkIsbUJBQVdBLE9BQXhDO0FBQUEsOEJBQ0E7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLHdDQUVNO0FBQ0EsY0FBSSxFQUFDLE1BREw7QUFFQSxZQUFFLEVBQUMsT0FGSDtBQUdBLGNBQUksRUFBQyxPQUhMO0FBSUEsa0JBQVEsTUFKUjtBQUtBLGtCQUFRLEVBQUVOO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQVdFO0FBQU8sZUFBTyxFQUFDLE1BQWY7QUFBQSx3Q0FFSTtBQUNBLGNBQUksRUFBQyxNQURMO0FBRUEsWUFBRSxFQUFDLE1BRkg7QUFHQSxjQUFJLEVBQUMsTUFITDtBQUlBLHFCQUFXLEVBQUMsTUFKWjtBQUtBLGVBQUssRUFBRUQsTUFBTSxDQUFDSCxJQUxkO0FBTUEsa0JBQVEsRUFBRUk7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBc0JFO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQSx5Q0FFSTtBQUNBLGNBQUksRUFBQyxRQURMO0FBRUEsWUFBRSxFQUFDLE9BRkg7QUFHQSxjQUFJLEVBQUMsT0FITDtBQUlBLHFCQUFXLEVBQUMsT0FKWjtBQUtBLGVBQUssRUFBRUQsTUFBTSxDQUFDRixLQUxkO0FBTUEsa0JBQVEsRUFBRUc7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRixlQWlDRTtBQUFPLGVBQU8sRUFBQyxhQUFmO0FBQUEseUNBRUk7QUFDQSxZQUFFLEVBQUMsYUFESDtBQUVBLGNBQUksRUFBQyxhQUZMO0FBR0EscUJBQVcsRUFBQyxhQUhaO0FBSUEsZUFBSyxFQUFFRCxNQUFNLENBQUNELFdBSmQ7QUFLQSxrQkFBUSxFQUFFRTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakNGLGVBNkNFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUF5REg7O0dBcEV3QlAsYTtVQUNpQ0MsaUQsRUFNUFMsdUQ7OztLQVAxQlYsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWxsLmNlZjNiNzQ5OTRiNjZmNWZkNDA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi4vbGliL3VzZUZvcm1cIjtcclxuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tIFwiLi9FcnJvck1lc3NhZ2VcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XHJcblxyXG5cclxuY29uc3QgQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXHJcbiAgICBtdXRhdGlvbiBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTiAoXHJcbiAgICAgICRuYW1lOiBTdHJpbmchXHJcbiAgICAgICRkZXNjcm9wdGlvbjogU3RyaW5nIVxyXG4gICAgICAkcHJpY2U6IEludCFcclxuICAgICAgJGltYWdlOiBVcGxvYWRcclxuICAgICl7XHJcbiAgICAgIENyZWF0ZVByb2R1Y3QoXHJcbiAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICBuYW1lOiAkbmFtZVxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvblxyXG4gICAgICAgICAgcHJpY2U6ICRwcmljZVxyXG4gICAgICAgICAgc3RhdHVzOiBcIkFWQUlMQUJMRVwiLFxyXG4gICAgICAgICAgcGhvdG86IHsgY3JlYXRlOiB7aW1hZ2U6ICRpbWFnZSxhbHRUZXh0OiAkbmFtZX1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICl7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBwcmljZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAgZnVuY3Rpb24gQ3JlYXRlUHJvZHVjdCgpIHtcclxuICAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgY2xlYXJGb3JtLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xyXG4gICAgIGltYWdlOiAnJywgXHJcbiAgICAgbmFtZTogJ1Rlc3QnLFxyXG4gICAgIHByaWNlOiAyMzEzLFxyXG4gICAgIGRlc2NyaXB0aW9uOiAndGVzdDEyMydcclxuICAgfSk7XHJcbiAgIGNvbnN0IFtjcmVhdGVQcm9kdWN0LCB7bG9hZGluZywgZXJyb3IsIGRhdGF9XSA9IHVzZU11dGF0aW9uKFxyXG4gICAgIENSRUFURV9QUk9EVUNUX01VVEFUSU9OLCB7XHJcbiAgICAgdmFyaWFibGVzOiBpbnB1dHMsXHJcbiAgIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxGb3JtIG9uU3VibWl0PXsgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhpbnB1dHMpO1xyXG4gICAgICAgICBhd2FpdCBjcmVhdGVQcm9kdWN0KCk7XHJcbiAgICAgICAgIGNsZWFyRm9ybSgpO1xyXG4gICAgICAgfX0+XHJcbiAgICAgICAgPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+XHJcbiAgICAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17bG9hZGluZ30gYXJpYS1idXN5PXtsb2FkaW5nfT5cclxuICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIiBcclxuICAgICAgICAgICAgICAgaWQ9XCJpbWFnZVwiIFxyXG4gICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIiBcclxuICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCIgXHJcbiAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCIgXHJcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiIFxyXG4gICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XHJcbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+XHJcbiAgICAgICAgICAgICAgIFByaWNlXHJcbiAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxyXG4gICAgICAgICAgICAgICBpZD1cInByaWNlXCIgXHJcbiAgICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiIFxyXG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByaWNlXCIgXHJcbiAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucHJpY2V9XHJcbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgIFByaWNlXHJcbiAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBcclxuICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiIFxyXG4gICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIiBcclxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIFxyXG4gICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgey8qIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2NsZWFyRm9ybX0+Q2xlYXIgRm9ybTwvYnV0dG9uPlxyXG4gICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3Jlc2V0Rm9ybX0+UmVzZXQgRm9ybTwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQgUHJvZHVjdDwvYnV0dG9uPlxyXG4gICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==