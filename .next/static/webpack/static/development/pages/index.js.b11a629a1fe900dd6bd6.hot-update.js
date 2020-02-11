webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\raul-\\MIT\\contest_checker\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
var name = "Raul Alcantara";
var answers = ["A", "B", "C", "B", "A"];
var correct_answer = ["A", "C", "", "B", "D"];
var correct_answer_score = 10;
var incorrect_answer_score = -2;
var blank_answer_score = 0;
function Index() {
  function get_scores(answers) {
    var result = [];

    for (var i = 0; i < answers.length; i++) {
      result.push(__jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Answer for problem ", i + 1, " was ", answers[i]));
    }

    return result;
  }

  function get_question_score(answer, correct_answer) {
    if (answer == correct_answer) {
      return correct_answer_score;
    } else if (answer == "") {
      return blank_answer_score;
    } else {
      return incorrect_answer_score;
    }
  }

  function get_total_score(answers) {
    var score = 0;

    for (var i = 0; i < answers.length; i++) {
      var add_score = get_question_score(answers[i]);
      score += add_score;
    }

    return score;
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Name is ", name), get_scores(answers)), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, " The score is ", get_total_score(answers)));
}

/***/ })

})
//# sourceMappingURL=index.js.b11a629a1fe900dd6bd6.hot-update.js.map