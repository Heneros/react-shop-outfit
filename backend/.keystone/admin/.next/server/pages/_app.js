module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/punk6/Desktop/Projects/react-shop outfit/backend/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectSpread2.js":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/punk6/Desktop/Projects/react-shop outfit/backend/node_modules/@babel/runtime/helpers/objectSpread2.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty.js */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/punk6/Desktop/Projects/react-shop outfit/backend/node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var types_text_views_dist_fields = __webpack_require__(/*! ../../../text/views/dist/fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js");
__webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");

/* @jsx jsx */
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',

    deserialize(item) {
      const value = item[config.path];
      return typeof value === 'string' ? value : '';
    },

    serialize(value) {
      return {
        [config.path]: value
      };
    },

    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          onChange: event => {
            props.onChange(event.target.value);
          },
          value: props.value,
          autoFocus: true
        });
      },

      graphql({
        type,
        value
      }) {
        switch (type) {
          case 'is':
            {
              return {
                [config.path]: value
              };
            }

          case 'not':
            {
              return {
                [`${config.path}_not`]: value
              };
            }

          case 'in':
            {
              return {
                [`${config.path}_in`]: value.split(',').map(value => value.trim())
              };
            }

          case 'not_in':
            {
              return {
                [`${config.path}_not_in`]: value.split(',').map(value => value.trim())
              };
            }
        }

        return {};
      },

      Label({
        label,
        type,
        value
      }) {
        let renderedValue = value;

        if (['in', 'not_in'].includes(type)) {
          renderedValue = value.split(',').map(value => value.trim()).join(', ');
        }

        return `${label.toLowerCase()}: ${renderedValue}`;
      },

      types: {
        is: {
          label: 'Is exactly',
          initialValue: ''
        },
        not: {
          label: 'Is not',
          initialValue: ''
        },
        in: {
          label: 'Is one of',
          initialValue: ''
        },
        not_in: {
          label: 'Is not one of',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = types_text_views_dist_fields.CardValue;
exports.Cell = types_text_views_dist_fields.Cell;
exports.Field = types_text_views_dist_fields.Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/punk6/Desktop/Projects/react-shop outfit/backend/node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js":
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/punk6/Desktop/Projects/react-shop outfit/backend/node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var React = __webpack_require__(/*! react */ "react");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var button = __webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var EyeIcon = __webpack_require__(/*! @keystone-ui/icons/icons/EyeIcon */ "@keystone-ui/icons/icons/EyeIcon");
var EyeOffIcon = __webpack_require__(/*! @keystone-ui/icons/icons/EyeOffIcon */ "@keystone-ui/icons/icons/EyeOffIcon");
var XIcon = __webpack_require__(/*! @keystone-ui/icons/icons/XIcon */ "@keystone-ui/icons/icons/XIcon");
var segmentedControl = __webpack_require__(/*! @keystone-ui/segmented-control */ "@keystone-ui/segmented-control");

const Field = ({
  field,
  value,
  onChange,
  forceValidation,
  autoFocus
}) => {
  const [showInputValue, setShowInputValue] = React.useState(false);
  const [touchedFirstInput, setTouchedFirstInput] = React.useState(false);
  const [touchedSecondInput, setTouchedSecondInput] = React.useState(false);
  const shouldShowValidation = forceValidation || touchedFirstInput && touchedSecondInput;
  const validation = shouldShowValidation && value.kind === 'editing' ? value.value === value.confirm ? value.value.length >= field.minLength ? undefined : `The password must be at least ${field.minLength} characters long` : 'The passwords do not match' : undefined;
  const inputType = showInputValue ? 'text' : 'password';
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange === undefined ? value.isSet ? 'Password is set' : 'Password is not set' : value.kind === 'initial' ? core.jsx(button.Button, {
    autoFocus: autoFocus,
    onClick: () => {
      onChange({
        kind: 'editing',
        confirm: '',
        value: '',
        isSet: value.isSet
      });
    }
  }, value.isSet ? 'Change Password' : 'Set Password') : core.jsx(core.Stack, {
    gap: "small"
  }, core.jsx("div", {
    css: {
      display: 'flex'
    }
  }, core.jsx(fields.TextInput, {
    autoFocus: true,
    invalid: validation !== undefined,
    type: inputType,
    value: value.value,
    placeholder: "New Password",
    onChange: event => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: event.target.value
      }));
    },
    onBlur: () => {
      setTouchedFirstInput(true);
    }
  }), core.jsx(Spacer, null), core.jsx(fields.TextInput, {
    invalid: validation !== undefined,
    type: inputType,
    value: value.confirm,
    placeholder: "Confirm Password",
    onChange: event => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        confirm: event.target.value
      }));
    },
    onBlur: () => {
      setTouchedSecondInput(true);
    }
  }), core.jsx(Spacer, null), core.jsx(button.Button, {
    onClick: () => {
      setShowInputValue(!showInputValue);
    }
  }, core.jsx(core.VisuallyHidden, null, showInputValue ? 'Hide Text' : 'Show Text'), showInputValue ? core.jsx(EyeOffIcon.EyeOffIcon, null) : core.jsx(EyeIcon.EyeIcon, null)), core.jsx(Spacer, null), core.jsx(button.Button, {
    onClick: () => {
      onChange({
        kind: 'initial',
        isSet: value.isSet
      });
    }
  }, core.jsx(core.VisuallyHidden, null, "Cancel"), core.jsx(XIcon.XIcon, null))), validation && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, validation)));
};
const Cell = ({
  item,
  field
}) => {
  return core.jsx(components.CellContainer, null, item[`${field.path}_is_set`] ? 'Is set' : 'Is not set');
};
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[`${field.path}_is_set`] ? 'Is set' : 'Is not set');
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: `${config.path}_is_set`,
    minLength: config.fieldMeta.minLength,
    defaultValue: {
      kind: 'initial',
      isSet: null
    },

    validate(state) {
      return state.kind === 'initial' || state.value === state.confirm && state.value.length >= config.fieldMeta.minLength;
    },

    deserialize: data => ({
      kind: 'initial',
      isSet: data[`${config.path}_is_set`]
    }),
    serialize: value => {
      if (value.kind === 'initial') return {};
      return {
        [config.path]: value.value
      };
    },
    filter: {
      Filter(props) {
        return core.jsx(segmentedControl.SegmentedControl, {
          selectedIndex: Number(props.value),
          onChange: value => {
            props.onChange(!!value);
          },
          segments: ['Is Not Set', 'Is Set']
        });
      },

      graphql: ({
        type,
        value
      }) => {
        return {
          [`${config.path}_${type}`]: value
        };
      },

      Label({
        value
      }) {
        return value ? 'is set' : 'is not set';
      },

      types: {
        is_set: {
          label: 'Is Set',
          initialValue: true
        }
      }
    }
  };
};

const Spacer = () => {
  const {
    spacing
  } = core.useTheme();
  return core.jsx("div", {
    css: {
      width: spacing.small,
      flexShrink: 0
    }
  });
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/punk6/Desktop/Projects/react-shop outfit/backend/node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/punk6/Desktop/Projects/react-shop outfit/backend/node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? field.displayMode === 'textarea' ? core.jsx(fields.TextArea, {
  autoFocus: autoFocus,
  onChange: event => onChange(event.target.value),
  value: value
}) : core.jsx(fields.TextInput, {
  autoFocus: autoFocus,
  onChange: event => onChange(event.target.value),
  value: value
}) : value);
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path] + '';
  return linkTo ? core.jsx(components.CellLink, linkTo, value) : core.jsx(components.CellContainer, null, value);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',
    displayMode: config.fieldMeta.displayMode,
    deserialize: data => {
      const value = data[config.path];
      return typeof value === 'string' ? value : '';
    },
    serialize: value => ({
      [config.path]: value
    }),
    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          onChange: event => {
            props.onChange(event.target.value);
          },
          value: props.value,
          autoFocus: true
        });
      },

      graphql: ({
        type,
        value
      }) => {
        const key = type === 'is_i' ? `${config.path}_i` : `${config.path}_${type}`;
        return {
          [key]: value
        };
      },

      Label({
        label,
        value
      }) {
        return `${label.toLowerCase()}: "${value}"`;
      },

      types: {
        contains_i: {
          label: 'Contains',
          initialValue: ''
        },
        not_contains_i: {
          label: 'Does not contain',
          initialValue: ''
        },
        is_i: {
          label: 'Is exactly',
          initialValue: ''
        },
        not_i: {
          label: 'Is not exactly',
          initialValue: ''
        },
        starts_with_i: {
          label: 'Starts with',
          initialValue: ''
        },
        not_starts_with_i: {
          label: 'Does not start with',
          initialValue: ''
        },
        ends_with_i: {
          label: 'Ends with',
          initialValue: ''
        },
        not_ends_with_i: {
          label: 'Does not end with',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/punk6/Desktop/Projects/react-shop outfit/backend/node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js":
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/punk6/Desktop/Projects/react-shop outfit/backend/node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var React = __webpack_require__(/*! react */ "react");
var dateFns = __webpack_require__(/*! date-fns */ "date-fns");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

const getTime = timeValue => {
  if (!timeValue) return [0, 0];
  return timeValue.split(':').map(n => Number(n));
};

function isValidDate(date) {
  if (!date) return false;
  return Boolean(dateFns.parseISO(date).toISOString());
}
function isValidTime(time) {
  if (!time) {
    return false;
  }

  return dateFns.isValid(dateFns.parse(time, 'HH:mm', new Date()));
}
function isValidISO(value) {
  try {
    // toISOString converts our string into zulu time
    // instead of checking for the timestamp to be specifically in zulu time
    // we relax the validation here a little, to just be a valid ISO string.
    return Boolean(dateFns.parseISO(constructTimestamp(value)).toISOString());
  } catch (err) {
    return false;
  }
}
function constructTimestamp({
  dateValue,
  timeValue
}) {
  let formattedDate = new Date(dateValue);
  const [hours, minutes] = getTime(timeValue);
  formattedDate.setHours(hours);
  formattedDate.setMinutes(minutes);
  return dateFns.formatISO(formattedDate);
}
function deconstructTimestamp(value) {
  return {
    dateValue: value,
    timeValue: resolveInitialTimeValue(value)
  };
}
function formatOutput(value) {
  if (!value) return '';
  const date = new Date(value);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
function resolveInitialTimeValue(value, defaultValue) {
  const date = value || defaultValue;
  if (!date) return '';
  return new Date(date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
}

const TimePicker = ({
  autoFocus,
  onBlur,
  disabled,
  onChange,
  format = '24hr',
  value
}) => {
  return core.jsx(fields.TextInput, {
    autoFocus: autoFocus,
    maxLength: format === '24hr' ? 5 : 7,
    disabled: disabled,
    onChange: onChange,
    onBlur: onBlur,
    placeholder: format === '24hr' ? '00:00' : '00:00am',
    value: value
  });
};

const Field = ({
  field,
  value,
  onChange,
  forceValidation
}) => {
  const [touchedFirstInput, setTouchedFirstInput] = React.useState(false);
  const [touchedSecondInput, setTouchedSecondInput] = React.useState(false);
  const showValidation = touchedFirstInput && touchedSecondInput || forceValidation;

  const showDateError = dateValue => {
    if (!dateValue) {
      return core.jsx("div", {
        css: {
          color: 'red'
        }
      }, "Please select a date value.");
    }

    return !isValidDate(dateValue) && core.jsx("div", {
      css: {
        color: 'red'
      }
    }, "Incorrect date value");
  };

  const showTimeError = timeValue => {
    if (!timeValue) {
      return core.jsx("div", {
        css: {
          color: 'red'
        }
      }, "Please select a time value.");
    }

    return !isValidTime(timeValue) && core.jsx("div", {
      css: {
        color: 'red'
      }
    }, "Time must be in the form HH:mm");
  };

  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? core.jsx(core.Stack, null, core.jsx(core.Inline, {
    gap: "small"
  }, core.jsx(core.Stack, null, core.jsx(fields.DatePicker, {
    onUpdate: date => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        dateValue: date || ''
      }));
    },
    onClear: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        dateValue: ''
      }));
    },
    onBlur: () => setTouchedFirstInput(true),
    value: value.dateValue
  }), showValidation && showDateError(value.dateValue)), core.jsx(core.Stack, null, core.jsx(TimePicker, {
    onBlur: () => setTouchedSecondInput(true),
    disabled: onChange === undefined,
    format: "24hr",
    onChange: event => onChange(_objectSpread(_objectSpread({}, value), {}, {
      timeValue: event.target.value
    })),
    value: value.timeValue || ''
  }), showValidation && showTimeError(value.timeValue)))) : isValidISO(value) ? formatOutput(constructTimestamp(value)) : '');
};
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path];
  return linkTo ? core.jsx(components.CellLink, linkTo, formatOutput(value)) : core.jsx(components.CellContainer, null, formatOutput(value));
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: {
      dateValue: '',
      timeValue: ''
    },
    deserialize: data => {
      const value = data[config.path];

      if (value) {
        return deconstructTimestamp(value);
      }

      return {
        dateValue: '',
        timeValue: ''
      };
    },
    serialize: ({
      dateValue,
      timeValue
    }) => {
      if (dateValue && timeValue && isValidISO({
        dateValue,
        timeValue
      })) {
        let formattedDate = constructTimestamp({
          dateValue,
          timeValue
        });
        return {
          [config.path]: formattedDate
        };
      }

      return {
        [config.path]: null
      };
    },

    validate({
      dateValue,
      timeValue
    }) {
      if (!dateValue && !timeValue) return true;
      if (!dateValue) return false;
      if (!timeValue) return false;
      return isValidISO({
        dateValue,
        timeValue
      });
    }

  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/punk6/Desktop/Projects/react-shop outfit/backend/node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @keystone-next/admin-ui/context */ "@keystone-next/admin-ui/context");
/* harmony import */ var _keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
/* harmony import */ var _keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
/* harmony import */ var _keystone_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/mongoId/views */ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/text/views */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/password/views */ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/timestamp/views */ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_7__);








const adminConfig = {};
const fieldViews = {
  view1283456e: _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__,
  viewe830720f: _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__,
  viewe0a1055d: _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__,
  view8858657d: _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_7__
};
const lazyMetadataQuery = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition',
    operation: 'query',
    selectionSet: {
      kind: 'SelectionSet',
      selections: [{
        kind: 'Field',
        name: {
          kind: 'Name',
          value: 'keystone',
          loc: {
            start: 22,
            end: 30
          }
        },
        arguments: [],
        directives: [],
        selectionSet: {
          kind: 'SelectionSet',
          selections: [{
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'adminMeta',
              loc: {
                start: 39,
                end: 48
              }
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'lists',
                  loc: {
                    start: 59,
                    end: 64
                  }
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [{
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'key',
                      loc: {
                        start: 77,
                        end: 80
                      }
                    },
                    arguments: [],
                    directives: [],
                    loc: {
                      start: 77,
                      end: 80
                    }
                  }, {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'isHidden',
                      loc: {
                        start: 91,
                        end: 99
                      }
                    },
                    arguments: [],
                    directives: [],
                    loc: {
                      start: 91,
                      end: 99
                    }
                  }, {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'fields',
                      loc: {
                        start: 110,
                        end: 116
                      }
                    },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: 'SelectionSet',
                      selections: [{
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'path',
                          loc: {
                            start: 131,
                            end: 135
                          }
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 131,
                          end: 135
                        }
                      }, {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'createView',
                          loc: {
                            start: 148,
                            end: 158
                          }
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'fieldMode',
                              loc: {
                                start: 175,
                                end: 184
                              }
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 175,
                              end: 184
                            }
                          }],
                          loc: {
                            start: 159,
                            end: 198
                          }
                        },
                        loc: {
                          start: 148,
                          end: 198
                        }
                      }],
                      loc: {
                        start: 117,
                        end: 210
                      }
                    },
                    loc: {
                      start: 110,
                      end: 210
                    }
                  }],
                  loc: {
                    start: 65,
                    end: 220
                  }
                },
                loc: {
                  start: 59,
                  end: 220
                }
              }],
              loc: {
                start: 49,
                end: 228
              }
            },
            loc: {
              start: 39,
              end: 228
            }
          }],
          loc: {
            start: 31,
            end: 234
          }
        },
        loc: {
          start: 22,
          end: 234
        }
      }, {
        kind: 'Field',
        name: {
          kind: 'Name',
          value: 'authenticatedItem'
        },
        selectionSet: {
          kind: 'SelectionSet',
          selections: [{
            kind: 'InlineFragment',
            typeCondition: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User'
              }
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id'
                }
              }, {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name'
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
function App(_ref) {
  let {
    Component,
    pageProps
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__["Core"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__["KeystoneProvider"], {
    adminConfig: adminConfig,
    adminMetaHash: "1ovjx77",
    fieldViews: fieldViews,
    lazyMetadataQuery: lazyMetadataQuery
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__["ErrorBoundary"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, pageProps))));
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@keystone-next/admin-ui/components":
/*!*****************************************************!*\
  !*** external "@keystone-next/admin-ui/components" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/components");

/***/ }),

/***/ "@keystone-next/admin-ui/context":
/*!**************************************************!*\
  !*** external "@keystone-next/admin-ui/context" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/context");

/***/ }),

/***/ "@keystone-ui/button":
/*!**************************************!*\
  !*** external "@keystone-ui/button" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/button");

/***/ }),

/***/ "@keystone-ui/core":
/*!************************************!*\
  !*** external "@keystone-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/core");

/***/ }),

/***/ "@keystone-ui/fields":
/*!**************************************!*\
  !*** external "@keystone-ui/fields" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/fields");

/***/ }),

/***/ "@keystone-ui/icons/icons/EyeIcon":
/*!***************************************************!*\
  !*** external "@keystone-ui/icons/icons/EyeIcon" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/EyeIcon");

/***/ }),

/***/ "@keystone-ui/icons/icons/EyeOffIcon":
/*!******************************************************!*\
  !*** external "@keystone-ui/icons/icons/EyeOffIcon" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/EyeOffIcon");

/***/ }),

/***/ "@keystone-ui/icons/icons/XIcon":
/*!*************************************************!*\
  !*** external "@keystone-ui/icons/icons/XIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/XIcon");

/***/ }),

/***/ "@keystone-ui/segmented-control":
/*!*************************************************!*\
  !*** external "@keystone-ui/segmented-control" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/segmented-control");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3B1bms2L0Rlc2t0b3AvUHJvamVjdHMvcmVhY3Qtc2hvcCBvdXRmaXQvYmFja2VuZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvcHVuazYvRGVza3RvcC9Qcm9qZWN0cy9yZWFjdC1zaG9wIG91dGZpdC9iYWNrZW5kL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDIuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3B1bms2L0Rlc2t0b3AvUHJvamVjdHMvcmVhY3Qtc2hvcCBvdXRmaXQvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL21vbmdvSWQvdmlld3MvZGlzdC9maWVsZHMuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvcHVuazYvRGVza3RvcC9Qcm9qZWN0cy9yZWFjdC1zaG9wIG91dGZpdC9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvbW9uZ29JZC92aWV3cy9kaXN0L2ZpZWxkcy5janMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3B1bms2L0Rlc2t0b3AvUHJvamVjdHMvcmVhY3Qtc2hvcCBvdXRmaXQvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3Bhc3N3b3JkL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3B1bms2L0Rlc2t0b3AvUHJvamVjdHMvcmVhY3Qtc2hvcCBvdXRmaXQvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3Bhc3N3b3JkL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvcHVuazYvRGVza3RvcC9Qcm9qZWN0cy9yZWFjdC1zaG9wIG91dGZpdC9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdGV4dC92aWV3cy9kaXN0L2ZpZWxkcy5janMuZGV2LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9wdW5rNi9EZXNrdG9wL1Byb2plY3RzL3JlYWN0LXNob3Agb3V0Zml0L2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy90ZXh0L3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvcHVuazYvRGVza3RvcC9Qcm9qZWN0cy9yZWFjdC1zaG9wIG91dGZpdC9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdGltZXN0YW1wL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3B1bms2L0Rlc2t0b3AvUHJvamVjdHMvcmVhY3Qtc2hvcCBvdXRmaXQvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3RpbWVzdGFtcC92aWV3cy9kaXN0L2ZpZWxkcy5janMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29udGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9maWVsZHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvRXllSWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9pY29ucy9pY29ucy9FeWVPZmZJY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL2ljb25zL2ljb25zL1hJY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL3NlZ21lbnRlZC1jb250cm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImFkbWluQ29uZmlnIiwiZmllbGRWaWV3cyIsInZpZXcxMjgzNDU2ZSIsInZpZXdlODMwNzIwZiIsInZpZXdlMGExMDU1ZCIsInZpZXc4ODU4NjU3ZCIsImxhenlNZXRhZGF0YVF1ZXJ5Iiwia2luZCIsImRlZmluaXRpb25zIiwib3BlcmF0aW9uIiwic2VsZWN0aW9uU2V0Iiwic2VsZWN0aW9ucyIsIm5hbWUiLCJ2YWx1ZSIsImxvYyIsInN0YXJ0IiwiZW5kIiwiYXJndW1lbnRzIiwiZGlyZWN0aXZlcyIsInR5cGVDb25kaXRpb24iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5LmpzXCIpO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkMiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcbnZhciB0eXBlc190ZXh0X3ZpZXdzX2Rpc3RfZmllbGRzID0gcmVxdWlyZSgnLi4vLi4vLi4vdGV4dC92aWV3cy9kaXN0L2ZpZWxkcy5janMuZGV2LmpzJyk7XG5yZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJyk7XG5cbi8qIEBqc3gganN4ICovXG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgIGdyYXBocWxTZWxlY3Rpb246IGNvbmZpZy5wYXRoLFxuICAgIGRlZmF1bHRWYWx1ZTogJycsXG5cbiAgICBkZXNlcmlhbGl6ZShpdGVtKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGl0ZW1bY29uZmlnLnBhdGhdO1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6ICcnO1xuICAgIH0sXG5cbiAgICBzZXJpYWxpemUodmFsdWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtjb25maWcucGF0aF06IHZhbHVlXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBmaWx0ZXI6IHtcbiAgICAgIEZpbHRlcihwcm9wcykge1xuICAgICAgICByZXR1cm4gY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xuICAgICAgICAgIG9uQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlLFxuICAgICAgICAgIGF1dG9Gb2N1czogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIGdyYXBocWwoe1xuICAgICAgICB0eXBlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlICdpcyc6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgW2NvbmZpZy5wYXRoXTogdmFsdWVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ25vdCc6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgW2Ake2NvbmZpZy5wYXRofV9ub3RgXTogdmFsdWVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ2luJzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBbYCR7Y29uZmlnLnBhdGh9X2luYF06IHZhbHVlLnNwbGl0KCcsJykubWFwKHZhbHVlID0+IHZhbHVlLnRyaW0oKSlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ25vdF9pbic6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgW2Ake2NvbmZpZy5wYXRofV9ub3RfaW5gXTogdmFsdWUuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gdmFsdWUudHJpbSgpKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfSxcblxuICAgICAgTGFiZWwoe1xuICAgICAgICBsYWJlbCxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pIHtcbiAgICAgICAgbGV0IHJlbmRlcmVkVmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICBpZiAoWydpbicsICdub3RfaW4nXS5pbmNsdWRlcyh0eXBlKSkge1xuICAgICAgICAgIHJlbmRlcmVkVmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiB2YWx1ZS50cmltKCkpLmpvaW4oJywgJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7bGFiZWwudG9Mb3dlckNhc2UoKX06ICR7cmVuZGVyZWRWYWx1ZX1gO1xuICAgICAgfSxcblxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgaXM6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIGV4YWN0bHknLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbm90OiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBub3QnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgaW46IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIG9uZSBvZicsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBub3RfaW46IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIG5vdCBvbmUgb2YnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuQ2FyZFZhbHVlID0gdHlwZXNfdGV4dF92aWV3c19kaXN0X2ZpZWxkcy5DYXJkVmFsdWU7XG5leHBvcnRzLkNlbGwgPSB0eXBlc190ZXh0X3ZpZXdzX2Rpc3RfZmllbGRzLkNlbGw7XG5leHBvcnRzLkZpZWxkID0gdHlwZXNfdGV4dF92aWV3c19kaXN0X2ZpZWxkcy5GaWVsZDtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMuZGV2LmpzXCIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgX29iamVjdFNwcmVhZCA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMicpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBjb21wb25lbnRzID0gcmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50cycpO1xudmFyIGJ1dHRvbiA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9idXR0b24nKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XG52YXIgRXllSWNvbiA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9FeWVJY29uJyk7XG52YXIgRXllT2ZmSWNvbiA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9FeWVPZmZJY29uJyk7XG52YXIgWEljb24gPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvWEljb24nKTtcbnZhciBzZWdtZW50ZWRDb250cm9sID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL3NlZ21lbnRlZC1jb250cm9sJyk7XG5cbmNvbnN0IEZpZWxkID0gKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgZm9yY2VWYWxpZGF0aW9uLFxuICBhdXRvRm9jdXNcbn0pID0+IHtcbiAgY29uc3QgW3Nob3dJbnB1dFZhbHVlLCBzZXRTaG93SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b3VjaGVkRmlyc3RJbnB1dCwgc2V0VG91Y2hlZEZpcnN0SW5wdXRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG91Y2hlZFNlY29uZElucHV0LCBzZXRUb3VjaGVkU2Vjb25kSW5wdXRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzaG91bGRTaG93VmFsaWRhdGlvbiA9IGZvcmNlVmFsaWRhdGlvbiB8fCB0b3VjaGVkRmlyc3RJbnB1dCAmJiB0b3VjaGVkU2Vjb25kSW5wdXQ7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBzaG91bGRTaG93VmFsaWRhdGlvbiAmJiB2YWx1ZS5raW5kID09PSAnZWRpdGluZycgPyB2YWx1ZS52YWx1ZSA9PT0gdmFsdWUuY29uZmlybSA/IHZhbHVlLnZhbHVlLmxlbmd0aCA+PSBmaWVsZC5taW5MZW5ndGggPyB1bmRlZmluZWQgOiBgVGhlIHBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgJHtmaWVsZC5taW5MZW5ndGh9IGNoYXJhY3RlcnMgbG9uZ2AgOiAnVGhlIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2gnIDogdW5kZWZpbmVkO1xuICBjb25zdCBpbnB1dFR5cGUgPSBzaG93SW5wdXRWYWx1ZSA/ICd0ZXh0JyA6ICdwYXNzd29yZCc7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIG9uQ2hhbmdlID09PSB1bmRlZmluZWQgPyB2YWx1ZS5pc1NldCA/ICdQYXNzd29yZCBpcyBzZXQnIDogJ1Bhc3N3b3JkIGlzIG5vdCBzZXQnIDogdmFsdWUua2luZCA9PT0gJ2luaXRpYWwnID8gY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAga2luZDogJ2VkaXRpbmcnLFxuICAgICAgICBjb25maXJtOiAnJyxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBpc1NldDogdmFsdWUuaXNTZXRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgdmFsdWUuaXNTZXQgPyAnQ2hhbmdlIFBhc3N3b3JkJyA6ICdTZXQgUGFzc3dvcmQnKSA6IGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBnYXA6IFwic21hbGxcIlxuICB9LCBjb3JlLmpzeChcImRpdlwiLCB7XG4gICAgY3NzOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9XG4gIH0sIGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcbiAgICBhdXRvRm9jdXM6IHRydWUsXG4gICAgaW52YWxpZDogdmFsaWRhdGlvbiAhPT0gdW5kZWZpbmVkLFxuICAgIHR5cGU6IGlucHV0VHlwZSxcbiAgICB2YWx1ZTogdmFsdWUudmFsdWUsXG4gICAgcGxhY2Vob2xkZXI6IFwiTmV3IFBhc3N3b3JkXCIsXG4gICAgb25DaGFuZ2U6IGV2ZW50ID0+IHtcbiAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9KSk7XG4gICAgfSxcbiAgICBvbkJsdXI6ICgpID0+IHtcbiAgICAgIHNldFRvdWNoZWRGaXJzdElucHV0KHRydWUpO1xuICAgIH1cbiAgfSksIGNvcmUuanN4KFNwYWNlciwgbnVsbCksIGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcbiAgICBpbnZhbGlkOiB2YWxpZGF0aW9uICE9PSB1bmRlZmluZWQsXG4gICAgdHlwZTogaW5wdXRUeXBlLFxuICAgIHZhbHVlOiB2YWx1ZS5jb25maXJtLFxuICAgIHBsYWNlaG9sZGVyOiBcIkNvbmZpcm0gUGFzc3dvcmRcIixcbiAgICBvbkNoYW5nZTogZXZlbnQgPT4ge1xuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgIGNvbmZpcm06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSkpO1xuICAgIH0sXG4gICAgb25CbHVyOiAoKSA9PiB7XG4gICAgICBzZXRUb3VjaGVkU2Vjb25kSW5wdXQodHJ1ZSk7XG4gICAgfVxuICB9KSwgY29yZS5qc3goU3BhY2VyLCBudWxsKSwgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIHNldFNob3dJbnB1dFZhbHVlKCFzaG93SW5wdXRWYWx1ZSk7XG4gICAgfVxuICB9LCBjb3JlLmpzeChjb3JlLlZpc3VhbGx5SGlkZGVuLCBudWxsLCBzaG93SW5wdXRWYWx1ZSA/ICdIaWRlIFRleHQnIDogJ1Nob3cgVGV4dCcpLCBzaG93SW5wdXRWYWx1ZSA/IGNvcmUuanN4KEV5ZU9mZkljb24uRXllT2ZmSWNvbiwgbnVsbCkgOiBjb3JlLmpzeChFeWVJY29uLkV5ZUljb24sIG51bGwpKSwgY29yZS5qc3goU3BhY2VyLCBudWxsKSwgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAga2luZDogJ2luaXRpYWwnLFxuICAgICAgICBpc1NldDogdmFsdWUuaXNTZXRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgY29yZS5qc3goY29yZS5WaXN1YWxseUhpZGRlbiwgbnVsbCwgXCJDYW5jZWxcIiksIGNvcmUuanN4KFhJY29uLlhJY29uLCBudWxsKSkpLCB2YWxpZGF0aW9uICYmIGNvcmUuanN4KGNvcmUuVGV4dCwge1xuICAgIGNvbG9yOiBcInJlZDYwMFwiLFxuICAgIHNpemU6IFwic21hbGxcIlxuICB9LCB2YWxpZGF0aW9uKSkpO1xufTtcbmNvbnN0IENlbGwgPSAoe1xuICBpdGVtLFxuICBmaWVsZFxufSkgPT4ge1xuICByZXR1cm4gY29yZS5qc3goY29tcG9uZW50cy5DZWxsQ29udGFpbmVyLCBudWxsLCBpdGVtW2Ake2ZpZWxkLnBhdGh9X2lzX3NldGBdID8gJ0lzIHNldCcgOiAnSXMgbm90IHNldCcpO1xufTtcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGl0ZW1bYCR7ZmllbGQucGF0aH1faXNfc2V0YF0gPyAnSXMgc2V0JyA6ICdJcyBub3Qgc2V0Jyk7XG59O1xuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBgJHtjb25maWcucGF0aH1faXNfc2V0YCxcbiAgICBtaW5MZW5ndGg6IGNvbmZpZy5maWVsZE1ldGEubWluTGVuZ3RoLFxuICAgIGRlZmF1bHRWYWx1ZToge1xuICAgICAga2luZDogJ2luaXRpYWwnLFxuICAgICAgaXNTZXQ6IG51bGxcbiAgICB9LFxuXG4gICAgdmFsaWRhdGUoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5raW5kID09PSAnaW5pdGlhbCcgfHwgc3RhdGUudmFsdWUgPT09IHN0YXRlLmNvbmZpcm0gJiYgc3RhdGUudmFsdWUubGVuZ3RoID49IGNvbmZpZy5maWVsZE1ldGEubWluTGVuZ3RoO1xuICAgIH0sXG5cbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiAoe1xuICAgICAga2luZDogJ2luaXRpYWwnLFxuICAgICAgaXNTZXQ6IGRhdGFbYCR7Y29uZmlnLnBhdGh9X2lzX3NldGBdXG4gICAgfSksXG4gICAgc2VyaWFsaXplOiB2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUua2luZCA9PT0gJ2luaXRpYWwnKSByZXR1cm4ge307XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbY29uZmlnLnBhdGhdOiB2YWx1ZS52YWx1ZVxuICAgICAgfTtcbiAgICB9LFxuICAgIGZpbHRlcjoge1xuICAgICAgRmlsdGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBjb3JlLmpzeChzZWdtZW50ZWRDb250cm9sLlNlZ21lbnRlZENvbnRyb2wsIHtcbiAgICAgICAgICBzZWxlY3RlZEluZGV4OiBOdW1iZXIocHJvcHMudmFsdWUpLFxuICAgICAgICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZSghIXZhbHVlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlZ21lbnRzOiBbJ0lzIE5vdCBTZXQnLCAnSXMgU2V0J11cbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBncmFwaHFsOiAoe1xuICAgICAgICB0eXBlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtgJHtjb25maWcucGF0aH1fJHt0eXBlfWBdOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgTGFiZWwoe1xuICAgICAgICB2YWx1ZVxuICAgICAgfSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPyAnaXMgc2V0JyA6ICdpcyBub3Qgc2V0JztcbiAgICAgIH0sXG5cbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIGlzX3NldDoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgU2V0JyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IFNwYWNlciA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHNwYWNpbmdcbiAgfSA9IGNvcmUudXNlVGhlbWUoKTtcbiAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIHtcbiAgICBjc3M6IHtcbiAgICAgIHdpZHRoOiBzcGFjaW5nLnNtYWxsLFxuICAgICAgZmxleFNocmluazogMFxuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLmRldi5qc1wiKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNvbXBvbmVudHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xuXG4vKiBAanN4IGpzeCAqL1xuY29uc3QgRmllbGQgPSAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIG9uQ2hhbmdlLFxuICBhdXRvRm9jdXNcbn0pID0+IGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgb25DaGFuZ2UgPyBmaWVsZC5kaXNwbGF5TW9kZSA9PT0gJ3RleHRhcmVhJyA/IGNvcmUuanN4KGZpZWxkcy5UZXh0QXJlYSwge1xuICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgb25DaGFuZ2U6IGV2ZW50ID0+IG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSksXG4gIHZhbHVlOiB2YWx1ZVxufSkgOiBjb3JlLmpzeChmaWVsZHMuVGV4dElucHV0LCB7XG4gIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICBvbkNoYW5nZTogZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKSxcbiAgdmFsdWU6IHZhbHVlXG59KSA6IHZhbHVlKTtcbmNvbnN0IENlbGwgPSAoe1xuICBpdGVtLFxuICBmaWVsZCxcbiAgbGlua1RvXG59KSA9PiB7XG4gIGxldCB2YWx1ZSA9IGl0ZW1bZmllbGQucGF0aF0gKyAnJztcbiAgcmV0dXJuIGxpbmtUbyA/IGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbExpbmssIGxpbmtUbywgdmFsdWUpIDogY29yZS5qc3goY29tcG9uZW50cy5DZWxsQ29udGFpbmVyLCBudWxsLCB2YWx1ZSk7XG59O1xuQ2VsbC5zdXBwb3J0c0xpbmtUbyA9IHRydWU7XG5jb25zdCBDYXJkVmFsdWUgPSAoe1xuICBpdGVtLFxuICBmaWVsZFxufSkgPT4ge1xuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBpdGVtW2ZpZWxkLnBhdGhdKTtcbn07XG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgIGdyYXBocWxTZWxlY3Rpb246IGNvbmZpZy5wYXRoLFxuICAgIGRlZmF1bHRWYWx1ZTogJycsXG4gICAgZGlzcGxheU1vZGU6IGNvbmZpZy5maWVsZE1ldGEuZGlzcGxheU1vZGUsXG4gICAgZGVzZXJpYWxpemU6IGRhdGEgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBkYXRhW2NvbmZpZy5wYXRoXTtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiAnJztcbiAgICB9LFxuICAgIHNlcmlhbGl6ZTogdmFsdWUgPT4gKHtcbiAgICAgIFtjb25maWcucGF0aF06IHZhbHVlXG4gICAgfSksXG4gICAgZmlsdGVyOiB7XG4gICAgICBGaWx0ZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcbiAgICAgICAgICBvbkNoYW5nZTogZXZlbnQgPT4ge1xuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSxcbiAgICAgICAgICBhdXRvRm9jdXM6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBncmFwaHFsOiAoe1xuICAgICAgICB0eXBlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSB0eXBlID09PSAnaXNfaScgPyBgJHtjb25maWcucGF0aH1faWAgOiBgJHtjb25maWcucGF0aH1fJHt0eXBlfWA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2tleV06IHZhbHVlXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICBMYWJlbCh7XG4gICAgICAgIGxhYmVsLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkge1xuICAgICAgICByZXR1cm4gYCR7bGFiZWwudG9Mb3dlckNhc2UoKX06IFwiJHt2YWx1ZX1cImA7XG4gICAgICB9LFxuXG4gICAgICB0eXBlczoge1xuICAgICAgICBjb250YWluc19pOiB7XG4gICAgICAgICAgbGFiZWw6ICdDb250YWlucycsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBub3RfY29udGFpbnNfaToge1xuICAgICAgICAgIGxhYmVsOiAnRG9lcyBub3QgY29udGFpbicsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBpc19pOiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBleGFjdGx5JyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdF9pOiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBub3QgZXhhY3RseScsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBzdGFydHNfd2l0aF9pOiB7XG4gICAgICAgICAgbGFiZWw6ICdTdGFydHMgd2l0aCcsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBub3Rfc3RhcnRzX3dpdGhfaToge1xuICAgICAgICAgIGxhYmVsOiAnRG9lcyBub3Qgc3RhcnQgd2l0aCcsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBlbmRzX3dpdGhfaToge1xuICAgICAgICAgIGxhYmVsOiAnRW5kcyB3aXRoJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdF9lbmRzX3dpdGhfaToge1xuICAgICAgICAgIGxhYmVsOiAnRG9lcyBub3QgZW5kIHdpdGgnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuQ2FyZFZhbHVlID0gQ2FyZFZhbHVlO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMuZGV2LmpzXCIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgX29iamVjdFNwcmVhZCA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMicpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBkYXRlRm5zID0gcmVxdWlyZSgnZGF0ZS1mbnMnKTtcbnZhciBjb21wb25lbnRzID0gcmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50cycpO1xudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcblxuY29uc3QgZ2V0VGltZSA9IHRpbWVWYWx1ZSA9PiB7XG4gIGlmICghdGltZVZhbHVlKSByZXR1cm4gWzAsIDBdO1xuICByZXR1cm4gdGltZVZhbHVlLnNwbGl0KCc6JykubWFwKG4gPT4gTnVtYmVyKG4pKTtcbn07XG5cbmZ1bmN0aW9uIGlzVmFsaWREYXRlKGRhdGUpIHtcbiAgaWYgKCFkYXRlKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBCb29sZWFuKGRhdGVGbnMucGFyc2VJU08oZGF0ZSkudG9JU09TdHJpbmcoKSk7XG59XG5mdW5jdGlvbiBpc1ZhbGlkVGltZSh0aW1lKSB7XG4gIGlmICghdGltZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBkYXRlRm5zLmlzVmFsaWQoZGF0ZUZucy5wYXJzZSh0aW1lLCAnSEg6bW0nLCBuZXcgRGF0ZSgpKSk7XG59XG5mdW5jdGlvbiBpc1ZhbGlkSVNPKHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgLy8gdG9JU09TdHJpbmcgY29udmVydHMgb3VyIHN0cmluZyBpbnRvIHp1bHUgdGltZVxuICAgIC8vIGluc3RlYWQgb2YgY2hlY2tpbmcgZm9yIHRoZSB0aW1lc3RhbXAgdG8gYmUgc3BlY2lmaWNhbGx5IGluIHp1bHUgdGltZVxuICAgIC8vIHdlIHJlbGF4IHRoZSB2YWxpZGF0aW9uIGhlcmUgYSBsaXR0bGUsIHRvIGp1c3QgYmUgYSB2YWxpZCBJU08gc3RyaW5nLlxuICAgIHJldHVybiBCb29sZWFuKGRhdGVGbnMucGFyc2VJU08oY29uc3RydWN0VGltZXN0YW1wKHZhbHVlKSkudG9JU09TdHJpbmcoKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuZnVuY3Rpb24gY29uc3RydWN0VGltZXN0YW1wKHtcbiAgZGF0ZVZhbHVlLFxuICB0aW1lVmFsdWVcbn0pIHtcbiAgbGV0IGZvcm1hdHRlZERhdGUgPSBuZXcgRGF0ZShkYXRlVmFsdWUpO1xuICBjb25zdCBbaG91cnMsIG1pbnV0ZXNdID0gZ2V0VGltZSh0aW1lVmFsdWUpO1xuICBmb3JtYXR0ZWREYXRlLnNldEhvdXJzKGhvdXJzKTtcbiAgZm9ybWF0dGVkRGF0ZS5zZXRNaW51dGVzKG1pbnV0ZXMpO1xuICByZXR1cm4gZGF0ZUZucy5mb3JtYXRJU08oZm9ybWF0dGVkRGF0ZSk7XG59XG5mdW5jdGlvbiBkZWNvbnN0cnVjdFRpbWVzdGFtcCh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGRhdGVWYWx1ZTogdmFsdWUsXG4gICAgdGltZVZhbHVlOiByZXNvbHZlSW5pdGlhbFRpbWVWYWx1ZSh2YWx1ZSlcbiAgfTtcbn1cbmZ1bmN0aW9uIGZvcm1hdE91dHB1dCh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSByZXR1cm4gJyc7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gIHJldHVybiBgJHtkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpfSAke2RhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9YDtcbn1cbmZ1bmN0aW9uIHJlc29sdmVJbml0aWFsVGltZVZhbHVlKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgY29uc3QgZGF0ZSA9IHZhbHVlIHx8IGRlZmF1bHRWYWx1ZTtcbiAgaWYgKCFkYXRlKSByZXR1cm4gJyc7XG4gIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHtcbiAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgaG91cjEyOiBmYWxzZVxuICB9KTtcbn1cblxuY29uc3QgVGltZVBpY2tlciA9ICh7XG4gIGF1dG9Gb2N1cyxcbiAgb25CbHVyLFxuICBkaXNhYmxlZCxcbiAgb25DaGFuZ2UsXG4gIGZvcm1hdCA9ICcyNGhyJyxcbiAgdmFsdWVcbn0pID0+IHtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICBtYXhMZW5ndGg6IGZvcm1hdCA9PT0gJzI0aHInID8gNSA6IDcsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICBvbkJsdXI6IG9uQmx1cixcbiAgICBwbGFjZWhvbGRlcjogZm9ybWF0ID09PSAnMjRocicgPyAnMDA6MDAnIDogJzAwOjAwYW0nLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9KTtcbn07XG5cbmNvbnN0IEZpZWxkID0gKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgZm9yY2VWYWxpZGF0aW9uXG59KSA9PiB7XG4gIGNvbnN0IFt0b3VjaGVkRmlyc3RJbnB1dCwgc2V0VG91Y2hlZEZpcnN0SW5wdXRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG91Y2hlZFNlY29uZElucHV0LCBzZXRUb3VjaGVkU2Vjb25kSW5wdXRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzaG93VmFsaWRhdGlvbiA9IHRvdWNoZWRGaXJzdElucHV0ICYmIHRvdWNoZWRTZWNvbmRJbnB1dCB8fCBmb3JjZVZhbGlkYXRpb247XG5cbiAgY29uc3Qgc2hvd0RhdGVFcnJvciA9IGRhdGVWYWx1ZSA9PiB7XG4gICAgaWYgKCFkYXRlVmFsdWUpIHtcbiAgICAgIHJldHVybiBjb3JlLmpzeChcImRpdlwiLCB7XG4gICAgICAgIGNzczoge1xuICAgICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgICB9XG4gICAgICB9LCBcIlBsZWFzZSBzZWxlY3QgYSBkYXRlIHZhbHVlLlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIWlzVmFsaWREYXRlKGRhdGVWYWx1ZSkgJiYgY29yZS5qc3goXCJkaXZcIiwge1xuICAgICAgY3NzOiB7XG4gICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgfVxuICAgIH0sIFwiSW5jb3JyZWN0IGRhdGUgdmFsdWVcIik7XG4gIH07XG5cbiAgY29uc3Qgc2hvd1RpbWVFcnJvciA9IHRpbWVWYWx1ZSA9PiB7XG4gICAgaWYgKCF0aW1lVmFsdWUpIHtcbiAgICAgIHJldHVybiBjb3JlLmpzeChcImRpdlwiLCB7XG4gICAgICAgIGNzczoge1xuICAgICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgICB9XG4gICAgICB9LCBcIlBsZWFzZSBzZWxlY3QgYSB0aW1lIHZhbHVlLlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIWlzVmFsaWRUaW1lKHRpbWVWYWx1ZSkgJiYgY29yZS5qc3goXCJkaXZcIiwge1xuICAgICAgY3NzOiB7XG4gICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgfVxuICAgIH0sIFwiVGltZSBtdXN0IGJlIGluIHRoZSBmb3JtIEhIOm1tXCIpO1xuICB9O1xuXG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIG9uQ2hhbmdlID8gY29yZS5qc3goY29yZS5TdGFjaywgbnVsbCwgY29yZS5qc3goY29yZS5JbmxpbmUsIHtcbiAgICBnYXA6IFwic21hbGxcIlxuICB9LCBjb3JlLmpzeChjb3JlLlN0YWNrLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRGF0ZVBpY2tlciwge1xuICAgIG9uVXBkYXRlOiBkYXRlID0+IHtcbiAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICBkYXRlVmFsdWU6IGRhdGUgfHwgJydcbiAgICAgIH0pKTtcbiAgICB9LFxuICAgIG9uQ2xlYXI6ICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICBkYXRlVmFsdWU6ICcnXG4gICAgICB9KSk7XG4gICAgfSxcbiAgICBvbkJsdXI6ICgpID0+IHNldFRvdWNoZWRGaXJzdElucHV0KHRydWUpLFxuICAgIHZhbHVlOiB2YWx1ZS5kYXRlVmFsdWVcbiAgfSksIHNob3dWYWxpZGF0aW9uICYmIHNob3dEYXRlRXJyb3IodmFsdWUuZGF0ZVZhbHVlKSksIGNvcmUuanN4KGNvcmUuU3RhY2ssIG51bGwsIGNvcmUuanN4KFRpbWVQaWNrZXIsIHtcbiAgICBvbkJsdXI6ICgpID0+IHNldFRvdWNoZWRTZWNvbmRJbnB1dCh0cnVlKSxcbiAgICBkaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcbiAgICBmb3JtYXQ6IFwiMjRoclwiLFxuICAgIG9uQ2hhbmdlOiBldmVudCA9PiBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgIHRpbWVWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSkpLFxuICAgIHZhbHVlOiB2YWx1ZS50aW1lVmFsdWUgfHwgJydcbiAgfSksIHNob3dWYWxpZGF0aW9uICYmIHNob3dUaW1lRXJyb3IodmFsdWUudGltZVZhbHVlKSkpKSA6IGlzVmFsaWRJU08odmFsdWUpID8gZm9ybWF0T3V0cHV0KGNvbnN0cnVjdFRpbWVzdGFtcCh2YWx1ZSkpIDogJycpO1xufTtcbmNvbnN0IENlbGwgPSAoe1xuICBpdGVtLFxuICBmaWVsZCxcbiAgbGlua1RvXG59KSA9PiB7XG4gIGxldCB2YWx1ZSA9IGl0ZW1bZmllbGQucGF0aF07XG4gIHJldHVybiBsaW5rVG8gPyBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxMaW5rLCBsaW5rVG8sIGZvcm1hdE91dHB1dCh2YWx1ZSkpIDogY29yZS5qc3goY29tcG9uZW50cy5DZWxsQ29udGFpbmVyLCBudWxsLCBmb3JtYXRPdXRwdXQodmFsdWUpKTtcbn07XG5DZWxsLnN1cHBvcnRzTGlua1RvID0gdHJ1ZTtcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGl0ZW1bZmllbGQucGF0aF0pO1xufTtcbmNvbnN0IGNvbnRyb2xsZXIgPSBjb25maWcgPT4ge1xuICByZXR1cm4ge1xuICAgIHBhdGg6IGNvbmZpZy5wYXRoLFxuICAgIGxhYmVsOiBjb25maWcubGFiZWwsXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogY29uZmlnLnBhdGgsXG4gICAgZGVmYXVsdFZhbHVlOiB7XG4gICAgICBkYXRlVmFsdWU6ICcnLFxuICAgICAgdGltZVZhbHVlOiAnJ1xuICAgIH0sXG4gICAgZGVzZXJpYWxpemU6IGRhdGEgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBkYXRhW2NvbmZpZy5wYXRoXTtcblxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBkZWNvbnN0cnVjdFRpbWVzdGFtcCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGVWYWx1ZTogJycsXG4gICAgICAgIHRpbWVWYWx1ZTogJydcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXJpYWxpemU6ICh7XG4gICAgICBkYXRlVmFsdWUsXG4gICAgICB0aW1lVmFsdWVcbiAgICB9KSA9PiB7XG4gICAgICBpZiAoZGF0ZVZhbHVlICYmIHRpbWVWYWx1ZSAmJiBpc1ZhbGlkSVNPKHtcbiAgICAgICAgZGF0ZVZhbHVlLFxuICAgICAgICB0aW1lVmFsdWVcbiAgICAgIH0pKSB7XG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gY29uc3RydWN0VGltZXN0YW1wKHtcbiAgICAgICAgICBkYXRlVmFsdWUsXG4gICAgICAgICAgdGltZVZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtjb25maWcucGF0aF06IGZvcm1hdHRlZERhdGVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW2NvbmZpZy5wYXRoXTogbnVsbFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgdmFsaWRhdGUoe1xuICAgICAgZGF0ZVZhbHVlLFxuICAgICAgdGltZVZhbHVlXG4gICAgfSkge1xuICAgICAgaWYgKCFkYXRlVmFsdWUgJiYgIXRpbWVWYWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgICBpZiAoIWRhdGVWYWx1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKCF0aW1lVmFsdWUpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBpc1ZhbGlkSVNPKHtcbiAgICAgICAgZGF0ZVZhbHVlLFxuICAgICAgICB0aW1lVmFsdWVcbiAgICAgIH0pO1xuICAgIH1cblxuICB9O1xufTtcblxuZXhwb3J0cy5DYXJkVmFsdWUgPSBDYXJkVmFsdWU7XG5leHBvcnRzLkNlbGwgPSBDZWxsO1xuZXhwb3J0cy5GaWVsZCA9IEZpZWxkO1xuZXhwb3J0cy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5kZXYuanNcIik7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBLZXlzdG9uZVByb3ZpZGVyIH0gZnJvbSAnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29udGV4dCc7XG5pbXBvcnQgeyBFcnJvckJvdW5kYXJ5IH0gZnJvbSAnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb3JlIH0gZnJvbSAnQGtleXN0b25lLXVpL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyB2aWV3MTI4MzQ1NmUgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9tb25nb0lkL3ZpZXdzJztcbmltcG9ydCAqIGFzIHZpZXdlODMwNzIwZiBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3RleHQvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlld2UwYTEwNTVkIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvcGFzc3dvcmQvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlldzg4NTg2NTdkIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdGltZXN0YW1wL3ZpZXdzJztcblxuY29uc3QgYWRtaW5Db25maWcgPSB7fTtcblxuY29uc3QgZmllbGRWaWV3cyA9IHsgdmlldzEyODM0NTZlLCB2aWV3ZTgzMDcyMGYsIHZpZXdlMGExMDU1ZCwgdmlldzg4NTg2NTdkIH07XG5cbmNvbnN0IGxhenlNZXRhZGF0YVF1ZXJ5ID0ge1xuICBraW5kOiAnRG9jdW1lbnQnLFxuICBkZWZpbml0aW9uczogW1xuICAgIHtcbiAgICAgIGtpbmQ6ICdPcGVyYXRpb25EZWZpbml0aW9uJyxcbiAgICAgIG9wZXJhdGlvbjogJ3F1ZXJ5JyxcbiAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgdmFsdWU6ICdrZXlzdG9uZScsXG4gICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMjIsIGVuZDogMzAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnYWRtaW5NZXRhJyxcbiAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAzOSwgZW5kOiA0OCB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdsaXN0cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNTksIGVuZDogNjQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAna2V5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA3NywgZW5kOiA4MCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNzcsIGVuZDogODAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdpc0hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogOTEsIGVuZDogOTkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDkxLCBlbmQ6IDk5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnZmllbGRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxMTAsIGVuZDogMTE2IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3BhdGgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDEzMSwgZW5kOiAxMzUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDEzMSwgZW5kOiAxMzUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdjcmVhdGVWaWV3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxNDgsIGVuZDogMTU4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZpZWxkTW9kZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTc1LCBlbmQ6IDE4NCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTc1LCBlbmQ6IDE4NCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTU5LCBlbmQ6IDE5OCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTQ4LCBlbmQ6IDE5OCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTE3LCBlbmQ6IDIxMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTEwLCBlbmQ6IDIxMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNjUsIGVuZDogMjIwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA1OSwgZW5kOiAyMjAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDQ5LCBlbmQ6IDIyOCB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMzksIGVuZDogMjI4IH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAzMSwgZW5kOiAyMzQgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDIyLCBlbmQ6IDIzNCB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgIG5hbWU6IHsga2luZDogJ05hbWUnLCB2YWx1ZTogJ2F1dGhlbnRpY2F0ZWRJdGVtJyB9LFxuICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2luZDogJ0lubGluZUZyYWdtZW50JyxcbiAgICAgICAgICAgICAgICAgIHR5cGVDb25kaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWVkVHlwZScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHsga2luZDogJ05hbWUnLCB2YWx1ZTogJ1VzZXInIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgeyBraW5kOiAnRmllbGQnLCBuYW1lOiB7IGtpbmQ6ICdOYW1lJywgdmFsdWU6ICdpZCcgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsga2luZDogJ0ZpZWxkJywgbmFtZTogeyBraW5kOiAnTmFtZScsIHZhbHVlOiAnbmFtZScgfSB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxDb3JlPlxuICAgICAgPEtleXN0b25lUHJvdmlkZXJcbiAgICAgICAgYWRtaW5Db25maWc9e2FkbWluQ29uZmlnfVxuICAgICAgICBhZG1pbk1ldGFIYXNoPVwiMW92ang3N1wiXG4gICAgICAgIGZpZWxkVmlld3M9e2ZpZWxkVmlld3N9XG4gICAgICAgIGxhenlNZXRhZGF0YVF1ZXJ5PXtsYXp5TWV0YWRhdGFRdWVyeX1cbiAgICAgID5cbiAgICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgICA8L0tleXN0b25lUHJvdmlkZXI+XG4gICAgPC9Db3JlPlxuICApO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb250ZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9idXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL2ZpZWxkc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvRXllSWNvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvRXllT2ZmSWNvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvWEljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL3NlZ21lbnRlZC1jb250cm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=