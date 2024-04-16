"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IMG = exports.IMGcon = exports.HomeText = exports.HomeCont = exports.Header1 = exports.pagecontainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 10px;\n  height: 360px;\n  width: auto;\n  background-color: none;\n  position: relative;\n  right: 30px;\n  @media (max-width: 660px) {\n    height: 200px;\n    width: auto;\n    text-align: center;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n  height: auto;\n  @media (max-width: 660px) {\n    text-align: center;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 40px;\n  position: relative;\n  margin-top: 150px;\n\n  width: 80%;\n  line-height: 2.4;\n  font-weight: 400;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: 20px;\n  @media (max-width: 600px) {\n    margin-top: 10px;\n    line-height: 1.5;\n    margin-left: 0;\n    font-size: 16px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 30px;\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-gap: 10px;\n  @media screen and (max-width: 660px) {\n    grid-template-columns: 1fr;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  font-size: 3.4rem;\n  color: green;\n  margin-top: 40px;\n  margin-bottom: 50px;\n  @media screen and (max-width: 660px) {\n    margin-bottom: 5px;\n    font-size: 20px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(92%);\n  height: calc(99%);\n  overflow: auto;\n  background-color: hsl(319, 59%, 90%);\n  border-radius: 30px;\n  background-color: #ede5f0;\n  opacity: 1;\n  background-image: repeating-radial-gradient(\n      circle at center left,\n      transparent 0,\n      white 100px\n    ),\n    repeating-linear-gradient(#f7f9fb55, #f8f4f6);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var pagecontainer = _styledComponents["default"].div(_templateObject());

exports.pagecontainer = pagecontainer;

var Header1 = _styledComponents["default"].h2(_templateObject2());

exports.Header1 = Header1;

var HomeCont = _styledComponents["default"].div(_templateObject3());

exports.HomeCont = HomeCont;

var HomeText = _styledComponents["default"].p(_templateObject4());

exports.HomeText = HomeText;

var IMGcon = _styledComponents["default"].div(_templateObject5());

exports.IMGcon = IMGcon;

var IMG = _styledComponents["default"].img(_templateObject6());

exports.IMG = IMG;