"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _effects = require("redux-saga/effects");

var _songsState = require("./songsState");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(workGetSongsFetch),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(songsSaga);

var url = "http://jsonplaceholder.typicode.com/users/1/albums";

function workGetSongsFetch() {
  var songs, formattedSongs, formattedSongsShortened;
  return regeneratorRuntime.wrap(function workGetSongsFetch$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.call)(function () {
            return fetch(url);
          });

        case 2:
          songs = _context.sent;
          _context.next = 5;
          return songs.json();

        case 5:
          formattedSongs = _context.sent;
          formattedSongsShortened = formattedSongs.slice(0, 10);
          _context.next = 9;
          return (0, _effects.put)((0, _songsState.getSongsSuccess)(formattedSongsShortened));

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function songsSaga() {
  return regeneratorRuntime.wrap(function songsSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)("songs/getSongsFetch", workGetSongsFetch);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
} // function* createSong(action) {
//   try {
//     const response = yield call(axios.post, "url", action.payload); // Corrected: use 'url' variable
//     yield put(addSong(response.data));
//   } catch (error) {
//     console.error("Error creating song:", error);
//   }
// }
// // Rest of your functions...
// function* songsSaga() {
//   yield takeLatest("songs/fetchSongs", fetchSongs);
//   yield takeLatest("songs/createSong", createSong);
//   yield takeLatest("songs/updateSong", updateSongAsy);
//   yield takeLatest("songs/deleteSong", deleteSongAsync);
//}


var _default = songsSaga;
exports["default"] = _default;