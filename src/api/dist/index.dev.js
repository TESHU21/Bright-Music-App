"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSongByIdAPI = exports.updateSongAPI = exports.createSongAPI = exports.getSongByIdAPI = exports.getSongsAPI = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_axios["default"].defaults.baseURL = "http://localhost:8000";

var getSongsAPI = function getSongsAPI() {
  return regeneratorRuntime.async(function getSongsAPI$(_context) {
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

exports.getSongsAPI = getSongsAPI;

var getSongByIdAPI = function getSongByIdAPI(id) {
  return regeneratorRuntime.async(function getSongByIdAPI$(_context2) {
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

exports.getSongByIdAPI = getSongByIdAPI;

var createSongAPI = function createSongAPI(song) {
  return regeneratorRuntime.async(function createSongAPI$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", _axios["default"].post("/songs", song));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.createSongAPI = createSongAPI;

var updateSongAPI = function updateSongAPI(song) {
  return regeneratorRuntime.async(function updateSongAPI$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", _axios["default"].put("/songs/".concat(song.id), song));

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.updateSongAPI = updateSongAPI;

var deleteSongByIdAPI = function deleteSongByIdAPI(id) {
  return regeneratorRuntime.async(function deleteSongByIdAPI$(_context5) {
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

exports.deleteSongByIdAPI = deleteSongByIdAPI;