"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainBody = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 100vh;\n  width: 100vw;\n  background-color: hsl(218, 35%, 18%);\n  background-color: #532075;\n  opacity: 1;\n  border-radius: 30px;\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var mainBody = _styledComponents["default"].div(_templateObject());

exports.mainBody = mainBody;