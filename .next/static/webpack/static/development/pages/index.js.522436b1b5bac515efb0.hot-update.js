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
var correctAnswer = ["A", "C", "B", "B", "D"];
function Index() {
  function get_scores(answers) {
    var result = [];

    for (var i = 0; i < answers.length; i++) {
      result.push(__jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "Answer for problem ", i + 1, " was ", answers[i]));
    }

    return result;
  }

  return __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Name is ", name), get_scores(answers));
}

/***/ })

})
//# sourceMappingURL=index.js.522436b1b5bac515efb0.hot-update.js.map