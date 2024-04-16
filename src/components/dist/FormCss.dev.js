"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header1 = exports.ButtCon = exports.SubmitButton = exports.DeleteButton = exports.InputFields = exports.SubFields = exports.Fields = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-size: 25px;\n  margin: 20px;\n  color: #333;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-weight: bold;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0;\n  justify-content: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background-color: blue;\n  color: #fff;\n  background-color: gray;\n  border: none;\n  padding: 5px;\n  margin: 5px;\n  border-radius: 4px;\n  width: 60px;\n  height: 35px;\n  cursor: pointer;\n  &:hover {\n    background-color: blue;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background-color: gray;\n  color: #fff;\n  border: none;\n  padding: 5px;\n  cursor: pointer;\n  margin: 5px;\n  border-radius: 4px;\n  width: 60px;\n  height: 35px;\n  &:hover {\n    background-color: red;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Fields = _styledComponents["default"].div(_templateObject());

exports.Fields = Fields;

var SubFields = _styledComponents["default"].div(_templateObject2());

exports.SubFields = SubFields;

var InputFields = _styledComponents["default"].div(_templateObject3());

exports.InputFields = InputFields;

var DeleteButton = _styledComponents["default"].button(_templateObject4());

exports.DeleteButton = DeleteButton;

var SubmitButton = _styledComponents["default"].button(_templateObject5());

exports.SubmitButton = SubmitButton;

var ButtCon = _styledComponents["default"].div(_templateObject6());

exports.ButtCon = ButtCon;

var Header1 = _styledComponents["default"].div(_templateObject7());

exports.Header1 = Header1;