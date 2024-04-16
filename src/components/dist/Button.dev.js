"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteButton = exports.CreateButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: gray;\n  border: none;\n  color: white;\n  padding: 16px 120px;\n  text-decoration: none;\n  margin: 10px 10px;\n  margin-bottom: 5px;\n  cursor: pointer;\n  border-radius: 4px;\n  justify-content: center;\n  &:hover {\n    background-color: red;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: gray;\n  border: none;\n  color: white;\n  padding: 16px 12px;\n  text-decoration: none;\n  cursor: pointer;\n  border-radius: 4px;\n  justify-content: center;\n  align-self: flex-end;\n  &:hover {\n    background-color: #45a049;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CreateButton = _styledComponents["default"].button(_templateObject());

exports.CreateButton = CreateButton;

var DeleteButton = _styledComponents["default"].button(_templateObject2());

exports.DeleteButton = DeleteButton;