"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _effects = require("redux-saga/effects");

var _songs = require("../slice/songs");

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(workGetSongsFetch),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(createSong),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(updateSongAsync),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(deleteSongAsync),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(songsSaga);

var url = "http://localhost:5000/songs";

function workGetSongsFetch() {
  var songs, formattedSongs, formattedSongsShortened;
  return regeneratorRuntime.wrap(function workGetSongsFetch$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)(fetch, "http://localhost:5000/songs");

        case 3:
          songs = _context.sent;
          _context.next = 6;
          return songs.json();

        case 6:
          formattedSongs = _context.sent;
          formattedSongsShortened = formattedSongs.slice(0, 10);
          _context.next = 10;
          return (0, _effects.put)((0, _songs.getSongsSuccess)(formattedSongsShortened));

        case 10:
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error("Error getting songs:", _context.t0); // Handle error if needed

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 12]]);
}

function createSong(action) {
  var response, newSong;
  return regeneratorRuntime.wrap(function createSong$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _effects.call)(fetch, "http://localhost:5000/songs", {
            method: "POST",
            body: JSON.stringify(action.payload),
            headers: {
              "Content-Type": "application/json"
            }
          });

        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return response.json();

        case 6:
          newSong = _context2.sent;
          _context2.next = 9;
          return (0, _effects.put)((0, _songs.addSong)(newSong));

        case 9:
          _context2.next = 14;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.error("Error creating song:", _context2.t0); // Handle error if needed

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 11]]);
}

function updateSongAsync(action) {
  var _action$payload, id, updatedSong, response, updatedSongData;

  return regeneratorRuntime.wrap(function updateSongAsync$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _action$payload = action.payload, id = _action$payload.id, updatedSong = _objectWithoutProperties(_action$payload, ["id"]);
          _context3.next = 4;
          return (0, _effects.call)(fetch, "http://localhost:5000/songs/".concat(id), {
            method: "PUT",
            body: JSON.stringify(updatedSong),
            headers: {
              "Content-Type": "application/json"
            }
          });

        case 4:
          response = _context3.sent;
          _context3.next = 7;
          return response.json();

        case 7:
          updatedSongData = _context3.sent;
          _context3.next = 10;
          return (0, _effects.put)((0, _songs.updateSong)(updatedSongData));

        case 10:
          _context3.next = 15;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          console.error("Error updating song:", _context3.t0); // Handle error if needed

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 12]]);
}

function deleteSongAsync(action, id) {
  return regeneratorRuntime.wrap(function deleteSongAsync$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _effects.call)(fetch, "http://localhost:5000/songs/".concat(action.id), {
            method: "DELETE"
          });

        case 3:
          _context4.next = 5;
          return (0, _effects.put)((0, _songs.deleteSong)(action.id));

        case 5:
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.error("Error deleting song:", _context4.t0); // Handle error if needed

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 7]]);
}

function songsSaga() {
  return regeneratorRuntime.wrap(function songsSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.takeEvery)(_songs.getSongsFetch.type, workGetSongsFetch);

        case 2:
          _context5.next = 4;
          return (0, _effects.takeEvery)("songs/createSong", createSong);

        case 4:
          _context5.next = 6;
          return (0, _effects.takeEvery)("songs/updateSong", updateSongAsync);

        case 6:
          _context5.next = 8;
          return (0, _effects.takeEvery)("songs/deleteSong", deleteSongAsync);

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

var _default = songsSaga;
exports["default"] = _default;