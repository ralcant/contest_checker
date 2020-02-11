module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_student_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/student_box */ "./static/student_box.js");
var _jsxFileName = "C:\\Users\\raul-\\MIT\\contest_checker\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//import 'react'

class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.correct_answer = ["A", "C", "D", "B", "D"], this.state = {
      answers: new Map()
    };
    this.add_info = this.add_info.bind(this);
    this.generate_students = this.generate_students.bind(this);
  }

  componentDidMount() {
    this.add_info("Raul", ["A", "C", "", "B", "A"]);
    this.add_info("Angie", ["B", "C", "D", "B", "A"]);
    this.add_info("Joder", ["A", "C", "", "E", "A"]);
    this.add_info("Ang", ["B", "C", "A", "B", "A"]);
  }

  generate_students() {
    let result = [];
    console.log(this.state.answers);

    for (let student of this.state.answers) {
      console.log(student);

      let student_component = __jsx(_static_student_box__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: student,
        answers: this.state.answers.get(student),
        correct_answer: this.correct_answer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      });

      result.push(student_component);
    }

    ;
    return result;
  }

  add_info(name, answers) {
    let answer_so_far = this.state.answers;
    answer_so_far.set(name, answers);
    this.setState({
      answers: answer_so_far
    }, () => {
      console.log("updated! " + name + " " + this.state.answers[name]);
    });
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, this.generate_students());
  }

}

/***/ }),

/***/ "./static/student_box.js":
/*!*******************************!*\
  !*** ./static/student_box.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Student_box; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\raul-\\MIT\\contest_checker\\static\\student_box.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//import 'react'
let correct_answer_score = 10;
let incorrect_answer_score = -2;
let blank_answer_score = 0;
class Student_box extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.get_scores = this.get_scores.bind(this);
    this.get_question_score = this.get_question_score.bind(this);
    this.get_total_score = this.get_total_score.bind(this);
  }

  get_scores(answers) {
    let result = [];

    for (let i = 0; i < answers.length; i++) {
      result.push(__jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Answer for problem ", i + 1, " was ", answers[i]));
    }

    return result;
  }

  get_question_score(answer, correct_answer) {
    if (answer == correct_answer) {
      return correct_answer_score;
    } else if (answer == "") {
      return blank_answer_score;
    } else {
      return incorrect_answer_score;
    }
  }

  get_total_score(answers) {
    let score = 0;

    for (let i = 0; i < answers.length; i++) {
      let add_score = this.get_question_score(answers[i], this.props.correct_answer[i]);
      score += add_score;
    }

    return score;
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("ol", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Name is ", this.props.name), this.get_scores(this.props.answers)), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, " The score is ", this.get_total_score(this.props.answers)));
  }

}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\raul-\MIT\contest_checker\pages\index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map