"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph = exports.SpanName = exports.rightabout = exports.Contactcon = exports.IMG = exports.IMGcon = exports.leftabout = exports.Aboutcon = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  margin: 2rem 0;\n  line-height: 2rem;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: medium;\n  &:hover {\n    padding: 10px;\n    border-radius: 8px;\n    cursor: default;\n    transform: translateY(-5px);\n    border: 3px solid green;\n    box-shadow: 1px 4px 15px rgba(0, 0, 0, 0.32);\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: green;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  justify-content: center;\n  padding-right: 8rem;\n  h1 {\n    font-size: 3rem;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n\n  h2 {\n    color: green;\n    justify-content: center;\n  }\n  h3 {\n    font-size: medium;\n    font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n      \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n    margin-right: 20px;\n    justify-self: center;\n    @media screen and (max-width: 660px) {\n      font-size: small;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 120px;\n  height: auto;\n  border-radius: 50%;\n  object-fit: cover;\n\n  transition: all 0.4s ease-in-out;\n  filter: grayscale(100%);\n  &:hover {\n    filter: grayscale(0);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: auto;\n  width: 100%;\n  margin-top: 40px;\n  text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (max-width: 660px) {\n    height: 25%;\n    width: auto;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin-left: 70px;\n  margin-right: 70px;\n  margin-top: 70px;\n  @media screen and (max-width: 660px) {\n    grid-template-columns: 1fr;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Aboutcon = _styledComponents["default"].div(_templateObject());

exports.Aboutcon = Aboutcon;

var leftabout = _styledComponents["default"].div(_templateObject2());

exports.leftabout = leftabout;

var IMGcon = _styledComponents["default"].div(_templateObject3());

exports.IMGcon = IMGcon;

var IMG = _styledComponents["default"].img(_templateObject4());

exports.IMG = IMG;

var Contactcon = _styledComponents["default"].div(_templateObject5());

exports.Contactcon = Contactcon;

var rightabout = _styledComponents["default"].div(_templateObject6());

exports.rightabout = rightabout;

var SpanName = _styledComponents["default"].span(_templateObject7());

exports.SpanName = SpanName;

var Paragraph = _styledComponents["default"].p(_templateObject8());

exports.Paragraph = Paragraph;