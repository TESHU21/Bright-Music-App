"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSongsSaga = getSongsSaga;
exports.getSongByIdSaga = getSongByIdSaga;
exports.createSongSaga = createSongSaga;
exports.updateSongSaga = updateSongSaga;
exports.deleteSongByIdSaga = deleteSongByIdSaga;
exports.watchUsersAsync = watchUsersAsync;

var _api = require("../../api");

var _song = require("../slice/song");

var _songs = require("../slice/songs");

var _type = require("../type");

var _effects = require("redux-saga/effects");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(getSongsSaga),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(getSongByIdSaga),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(createSongSaga),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(updateSongSaga),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(deleteSongByIdSaga),
    _marked6 =
/*#__PURE__*/
regeneratorRuntime.mark(watchUsersAsync);

function getSongsSaga() {
  var songs;
  return regeneratorRuntime.wrap(function getSongsSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _api.getSongsAPI)();

        case 2:
          songs = _context.sent;
          _context.next = 5;
          return (0, _effects.put)((0, _songs.getSongsSlice)(songs.data));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function getSongByIdSaga(action) {
  return regeneratorRuntime.wrap(function getSongByIdSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _api.getSongByIdAPI)(action.id);

        case 2:
          _context2.next = 4;
          return (0, _effects.put)((0, _song.setSongSlice)(action.id));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function createSongSaga(action) {
  return regeneratorRuntime.wrap(function createSongSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _api.createSongAPI)(action.song);

        case 2:
          _context3.next = 4;
          return (0, _effects.put)((0, _songs.addSongSlice)(action.song));

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function updateSongSaga(action) {
  return regeneratorRuntime.wrap(function updateSongSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _api.updateSongAPI)(action.song);

        case 2:
          _context4.next = 4;
          return (0, _effects.put)((0, _songs.editSongSlice)(action.song));

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function deleteSongByIdSaga(action) {
  return regeneratorRuntime.wrap(function deleteSongByIdSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _api.deleteSongByIdAPI)(action.id);

        case 2:
          _context5.next = 4;
          return (0, _effects.put)((0, _songs.deleteSongSlice)(action.id));

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function watchUsersAsync() {
  return regeneratorRuntime.wrap(function watchUsersAsync$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.takeEvery)(_type.GET_SONGS, getSongsSaga);

        case 2:
          _context6.next = 4;
          return (0, _effects.takeEvery)(_type.GET_SONG_BY_ID, getSongByIdSaga);

        case 4:
          _context6.next = 6;
          return (0, _effects.takeEvery)(_type.CREATE_SONG, createSongSaga);

        case 6:
          _context6.next = 8;
          return (0, _effects.takeEvery)(_type.UPDATE_SONG_BY_ID, updateSongSaga);

        case 8:
          _context6.next = 10;
          return (0, _effects.takeEvery)(_type.DELETE_SONG_BY_ID, deleteSongByIdSaga);

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}