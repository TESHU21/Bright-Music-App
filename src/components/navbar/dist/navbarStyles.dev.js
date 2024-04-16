"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileImg = exports.NavContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n  border-radius: 20px;\n  margin-top: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100px;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavContainer = _styledComponents["default"].div(_templateObject());

exports.NavContainer = NavContainer;

var ProfileImg = _styledComponents["default"].div(_templateObject2());

exports.ProfileImg = ProfileImg;