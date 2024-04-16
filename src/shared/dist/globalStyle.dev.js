"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(92%);\n  height: calc(99%);\n  overflow: auto;\n  background-color: hsl(324, 33%, 97%);\n  /* background-color:white; */\n  border-radius: 30px;\n  /* background-color: #ede5f0; */\n  opacity: 1;\n  background-image: repeating-radial-gradient(\n      circle at center left,\n      transparent 0,\n      white 100px\n    ),\n    repeating-linear-gradient(white, #f8f4f6);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PageContainer = _styledComponents["default"].div(_templateObject());

exports.PageContainer = PageContainer;