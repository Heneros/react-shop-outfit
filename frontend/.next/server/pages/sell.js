(function() {
var exports = {};
exports.id = "pages/sell";
exports.ids = ["pages/sell"];
exports.modules = {

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateProduct; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");

var _jsxFileName = "C:\\Users\\punk6\\Desktop\\Projects\\react-shop outfit\\frontend\\components\\CreateProduct.js";


function CreateProduct() {
  const {
    inputs,
    handleChange,
    clearForm,
    resetForm
  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_2__.default)({
    name: 'Test',
    price: 2313,
    description: 'test123'
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
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
        lineNumber: 14,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
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
        lineNumber: 25,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "button",
      onClick: clearForm,
      children: "Clear Form"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 12
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "button",
      onClick: resetForm,
      children: "Reset Form"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 8
  }, this);
}

/***/ }),

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useForm; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function useForm(initial = {}) {
  const {
    0: inputs,
    1: setInputs
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);

  function handleChange(e) {
    let {
      value,
      name,
      type
    } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      value[0] = e.target.files;
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {
      [name]: value
    }));
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm
  };
}

/***/ }),

/***/ "./pages/sell.js":
/*!***********************!*\
  !*** ./pages/sell.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SellPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CreateProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CreateProduct */ "./components/CreateProduct.js");

var _jsxFileName = "C:\\Users\\punk6\\Desktop\\Projects\\react-shop outfit\\frontend\\pages\\sell.js";

function SellPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CreateProduct__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/sell.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdCBzaG9wIG91dGZpdC8uL2NvbXBvbmVudHMvQ3JlYXRlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9yZWFjdCBzaG9wIG91dGZpdC8uL2xpYi91c2VGb3JtLmpzIiwid2VicGFjazovL3JlYWN0IHNob3Agb3V0Zml0Ly4vcGFnZXMvc2VsbC5qcyIsIndlYnBhY2s6Ly9yZWFjdCBzaG9wIG91dGZpdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmVhY3Qgc2hvcCBvdXRmaXQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDcmVhdGVQcm9kdWN0IiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwiY2xlYXJGb3JtIiwicmVzZXRGb3JtIiwidXNlRm9ybSIsIm5hbWUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiaW5pdGlhbCIsInNldElucHV0cyIsInVzZVN0YXRlIiwiZSIsInZhbHVlIiwidHlwZSIsInRhcmdldCIsInBhcnNlSW50IiwiZmlsZXMiLCJibGFua1N0YXRlIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwiU2VsbFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZ0IsU0FBU0EsYUFBVCxHQUF5QjtBQUN0QyxRQUFNO0FBQUVDLFVBQUY7QUFBVUMsZ0JBQVY7QUFBd0JDLGFBQXhCO0FBQW1DQztBQUFuQyxNQUFpREMscURBQU8sQ0FBQztBQUM3REMsUUFBSSxFQUFFLE1BRHVEO0FBRTdEQyxTQUFLLEVBQUUsSUFGc0Q7QUFHN0RDLGVBQVcsRUFBRTtBQUhnRCxHQUFELENBQTlEO0FBS0Msc0JBQ0c7QUFBQSw0QkFDSTtBQUFPLGFBQU8sRUFBQyxNQUFmO0FBQUEsc0NBRUk7QUFDQSxZQUFJLEVBQUMsTUFETDtBQUVBLFVBQUUsRUFBQyxNQUZIO0FBR0EsWUFBSSxFQUFDLE1BSEw7QUFJQSxtQkFBVyxFQUFDLE1BSlo7QUFLQSxhQUFLLEVBQUVQLE1BQU0sQ0FBQ0ssSUFMZDtBQU1BLGdCQUFRLEVBQUVKO0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBWUk7QUFBTyxhQUFPLEVBQUMsT0FBZjtBQUFBLHVDQUVJO0FBQ0EsWUFBSSxFQUFDLFFBREw7QUFFQSxVQUFFLEVBQUMsT0FGSDtBQUdBLFlBQUksRUFBQyxPQUhMO0FBSUEsbUJBQVcsRUFBQyxPQUpaO0FBS0EsYUFBSyxFQUFFRCxNQUFNLENBQUNNLEtBTGQ7QUFNQSxnQkFBUSxFQUFFTDtBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaSixlQXVCSTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGFBQU8sRUFBRUMsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkosZUF3Qkk7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUVDLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBNEJILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNEO0FBRWUsU0FBU0MsT0FBVCxDQUFpQkksT0FBTyxHQUFHLEVBQTNCLEVBQThCO0FBQ3pDLFFBQU07QUFBQSxPQUFDUixNQUFEO0FBQUEsT0FBU1M7QUFBVCxNQUFzQkMsK0NBQVEsQ0FBQ0YsT0FBRCxDQUFwQzs7QUFHQSxXQUFTUCxZQUFULENBQXNCVSxDQUF0QixFQUF3QjtBQUNwQixRQUFJO0FBQUNDLFdBQUQ7QUFBUVAsVUFBUjtBQUFjUTtBQUFkLFFBQXNCRixDQUFDLENBQUNHLE1BQTVCOztBQUNBLFFBQUdELElBQUksS0FBSyxRQUFaLEVBQXFCO0FBQ2pCRCxXQUFLLEdBQUdHLFFBQVEsQ0FBQ0gsS0FBRCxDQUFoQjtBQUNIOztBQUNELFFBQUdDLElBQUksS0FBSyxNQUFaLEVBQW1CO0FBQ2ZELFdBQUssQ0FBQyxDQUFELENBQUwsR0FBV0QsQ0FBQyxDQUFDRyxNQUFGLENBQVNFLEtBQXBCO0FBQ0g7O0FBQ0RQLGFBQVMsaUNBQ0ZULE1BREU7QUFFTCxPQUFDSyxJQUFELEdBQVFPO0FBRkgsT0FBVDtBQUlIOztBQUVELFdBQVNULFNBQVQsR0FBb0I7QUFDaEJNLGFBQVMsQ0FBQ0QsT0FBRCxDQUFUO0FBQ0g7O0FBRUQsV0FBU04sU0FBVCxHQUFvQjtBQUNoQixVQUFNZSxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQkQsTUFBTSxDQUFDRSxPQUFQLENBQWVwQixNQUFmLEVBQXVCcUIsR0FBdkIsQ0FBMkIsQ0FBQyxDQUFDQyxHQUFELEVBQU1WLEtBQU4sQ0FBRCxLQUNqRSxDQUFDVSxHQUFELEVBQU0sRUFBTixDQURzQyxDQUFuQixDQUFuQjtBQUdBYixhQUFTLENBQUNRLFVBQUQsQ0FBVDtBQUNIOztBQUVELFNBQU87QUFDSGpCLFVBREc7QUFFSEMsZ0JBRkc7QUFHSEUsYUFIRztBQUlIRDtBQUpHLEdBQVA7QUFNSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDRDtBQUVlLFNBQVNxQixRQUFULEdBQW9CO0FBQ2pDLHNCQUFPO0FBQUEsMkJBQ0wsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURLO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUdELEM7Ozs7Ozs7Ozs7O0FDTkQsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvc2VsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAgZnVuY3Rpb24gQ3JlYXRlUHJvZHVjdCgpIHtcclxuICAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgY2xlYXJGb3JtLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xyXG4gICAgIG5hbWU6ICdUZXN0JyxcclxuICAgICBwcmljZTogMjMxMyxcclxuICAgICBkZXNjcmlwdGlvbjogJ3Rlc3QxMjMnXHJcbiAgIH0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgIE5hbWVcclxuICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICBpZD1cIm5hbWVcIiBcclxuICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIiBcclxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCIgXHJcbiAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cclxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5cclxuICAgICAgICAgICAgICAgUHJpY2VcclxuICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgXHJcbiAgICAgICAgICAgICAgIGlkPVwicHJpY2VcIiBcclxuICAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCIgXHJcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJpY2VcIiBcclxuICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wcmljZX1cclxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2NsZWFyRm9ybX0+Q2xlYXIgRm9ybTwvYnV0dG9uPlxyXG4gICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3Jlc2V0Rm9ybX0+UmVzZXQgRm9ybTwvYnV0dG9uPlxyXG4gICAgICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JtKGluaXRpYWwgPSB7fSl7XHJcbiAgICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoaW5pdGlhbCk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKXtcclxuICAgICAgICBsZXQge3ZhbHVlLCBuYW1lLCB0eXBlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGlmKHR5cGUgPT09ICdudW1iZXInKXtcclxuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHR5cGUgPT09ICdmaWxlJyl7XHJcbiAgICAgICAgICAgIHZhbHVlWzBdID0gZS50YXJnZXQuZmlsZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElucHV0cyh7XHJcbiAgICAgICAgICAgIC4uLmlucHV0cyxcclxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpe1xyXG4gICAgICAgIHNldElucHV0cyhpbml0aWFsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhckZvcm0oKXtcclxuICAgICAgICBjb25zdCBibGFua1N0YXRlID0gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGlucHV0cykubWFwKChba2V5LCB2YWx1ZV0pID0+IFxyXG4gICAgICAgIFtrZXksICcnXVxyXG4gICAgICAgICkpO1xyXG4gICAgICAgIHNldElucHV0cyhibGFua1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlucHV0cyxcclxuICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgcmVzZXRGb3JtLFxyXG4gICAgICAgIGNsZWFyRm9ybVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IENyZWF0ZVByb2R1Y3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3JlYXRlUHJvZHVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWxsUGFnZSgpIHtcbiAgcmV0dXJuIDxwPlxuICAgIDxDcmVhdGVQcm9kdWN0IC8+XG4gIDwvcD47XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9