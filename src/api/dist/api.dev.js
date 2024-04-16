"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUserByIdAPI = exports.updateUserAPI = exports.createUserAPI = exports.getUserByIdAPI = exports.getUsersAPI = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_axios["default"].defaults.baseURL = "http://localhost:8000";

var getUsersAPI = function getUsersAPI() {
  return regeneratorRuntime.async(function getUsersAPI$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _axios["default"].get("/songs"));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getUsersAPI = getUsersAPI;

var getUserByIdAPI = function getUserByIdAPI(id) {
  return regeneratorRuntime.async(function getUserByIdAPI$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", _axios["default"].get("/songs/".concat(id)));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getUserByIdAPI = getUserByIdAPI;

var createUserAPI = function createUserAPI(user) {
  return regeneratorRuntime.async(function createUserAPI$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", _axios["default"].post("/songs", user));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.createUserAPI = createUserAPI;

var updateUserAPI = function updateUserAPI(song) {
  return regeneratorRuntime.async(function updateUserAPI$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", _axios["default"].put("/song/".concat(song.id), song));

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.updateUserAPI = updateUserAPI;

var deleteUserByIdAPI = function deleteUserByIdAPI(id) {
  return regeneratorRuntime.async(function deleteUserByIdAPI$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", _axios["default"]["delete"]("/songs/".concat(id)));

        case 1:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.deleteUserByIdAPI = deleteUserByIdAPI;