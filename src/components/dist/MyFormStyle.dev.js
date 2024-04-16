"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubForm1 = exports.Form = exports.Input = exports.Label = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  background-color: lightblue;\n  border-radius: 6px;\n  margin: 20px;\n  width: 40%;\n  position: fixed;\n  z-index: 1;\n  bottom: 20px;\n  right: 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 8px;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 8px;\n  font-weight: bold;\n  font-size: 14px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = _styledComponents["default"].label(_templateObject());

exports.Label = Label;

var Input = _styledComponents["default"].input(_templateObject2());

exports.Input = Input;

var Form = _styledComponents["default"].div(_templateObject3());

exports.Form = Form;

var SubForm1 = _styledComponents["default"].div(_templateObject4());

exports.SubForm1 = SubForm1;