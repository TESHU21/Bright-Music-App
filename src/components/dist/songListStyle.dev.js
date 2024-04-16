"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtCon = exports.EditButton = exports.DeleteButton = exports.Language = exports.IMG = exports.IMGcon = exports.Artist = exports.Album = exports.Title = exports.SongCont = exports.SongsCont = exports.Header2 = exports.CreateButton = exports.Header1 = exports.SongsContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0;\n  justify-content: center;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  background-color: blue;\n  color: #fff;\n  background-color: gray;\n  border: none;\n  padding: 5px;\n  margin: 5px;\n  width: 50px;\n  height: 25px;\n  cursor: pointer;\n  &:hover {\n    background-color: blue;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  background-color: gray;\n  color: #fff;\n  border: none;\n  padding: 5px;\n  cursor: pointer;\n  margin: 5px;\n  width: 50px;\n  height: 25px;\n  &:hover {\n    background-color: red;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  font-size: 10px;\n  text-align: center;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 100%;\n  height: 150px;\n  margin-bottom: 0;\n  align-items: center;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 200px;\n  position: relative;\n  height: auto;\n  justify-content: center;\n  text-align: center;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  font-size: 12px;\n  text-align: center;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  margin: 5px;\n  font-size: 10px;\n  text-align: center;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  max-height: 19px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n\n  white-space: nowrap;\n  display: block;\n  text-align: center;\n\n  &:hover {\n    overflow: visible;\n    white-space: normal;\n    max-height: 50px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  border: 3px solid #ccc;\n  padding: 10px;\n  height: auto;\n  width: auto;\n  border-radius: 8px;\n  position: relative;\n  justify-content: flex-start;\n  flex: 1 1 calc(25%);\n  flex-grow: 0;\n  max-width: 200px;\n  max-height: auto;\n\n  &:hover {\n    cursor: default;\n    transform: translateY(-5px);\n    border: 2px solid green;\n    box-shadow: 1px 4px 15px rgba(0, 0, 0, 0.32);\n  }\n\n  // Border Closed\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin: 5px;\n  justify-content: center;\n  align-items: center;\n\n  // Border Closed\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  align-self: flex-start;\n  flex-wrap: nowrap;\n  font-size: 35px;\n  font-family: \"Lato\", sans-serif;\n  font-style: italic;\n  font-weight: bold; /* Apply bold */\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: gray;\n  border: none;\n  color: white;\n  padding: 8px 4px;\n  text-decoration: none;\n  cursor: pointer;\n  align-items: center;\n  border-radius: 4px;\n  align-self: flex-end;\n\n  margin-left: 70px;\n\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  &:hover {\n    background-color: #45a049;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: auto;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  &:hover {\n    cursor: default;\n    transform: translateY(-5px);\n    border: 2px solid green;\n    box-shadow: 1px 4px 15px rgba(0, 0, 0, 0.32);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SongsContainer = _styledComponents["default"].div(_templateObject());

exports.SongsContainer = SongsContainer;

var Header1 = _styledComponents["default"].div(_templateObject2());

exports.Header1 = Header1;

var CreateButton = _styledComponents["default"].button(_templateObject3());

exports.CreateButton = CreateButton;

var Header2 = _styledComponents["default"].h2(_templateObject4());

exports.Header2 = Header2;

var SongsCont = _styledComponents["default"].div(_templateObject5());

exports.SongsCont = SongsCont;

var SongCont = _styledComponents["default"].div(_templateObject6());

exports.SongCont = SongCont;

var Title = _styledComponents["default"].h3(_templateObject7());

exports.Title = Title;

var Album = _styledComponents["default"].p(_templateObject8());

exports.Album = Album;

var Artist = _styledComponents["default"].h3(_templateObject9());

exports.Artist = Artist;

var IMGcon = _styledComponents["default"].div(_templateObject10());

exports.IMGcon = IMGcon;

var IMG = _styledComponents["default"].img(_templateObject11());

exports.IMG = IMG;

var Language = _styledComponents["default"].p(_templateObject12());

exports.Language = Language;

var DeleteButton = _styledComponents["default"].button(_templateObject13());

exports.DeleteButton = DeleteButton;

var EditButton = _styledComponents["default"].button(_templateObject14());

exports.EditButton = EditButton;

var ButtCon = _styledComponents["default"].div(_templateObject15());

exports.ButtCon = ButtCon;