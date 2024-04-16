"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.deleteSongSlice = exports.editSongSlice = exports.addSongSlice = exports.getSongsSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var songs = (0, _toolkit.createSlice)({
  name: "songs",
  initialState: [{
    id: 0,
    albumno: "",
    title: "",
    artist: "",
    albumimage: "",
    language: ""
  }],
  reducers: {
    getSongsSlice: function getSongsSlice(state, action) {
      state = action.payload;
      console.log(action.payload);
      return state;
    },
    addSongSlice: function addSongSlice(state, action) {
      state.push(action.payload);
      return state;
    },
    editSongSlice: function editSongSlice(state, action) {
      state = state.map(function (i) {
        return i.id == action.payload.id ? action.payload : i;
      }); //console.log("EDDDDDDDDDDDDD");

      return state;
    },
    deleteSongSlice: function deleteSongSlice(state, action) {
      state = state.filter(function (i) {
        return i.id !== action.payload;
      });
      return state;
    }
  }
});
var _songs$actions = songs.actions,
    getSongsSlice = _songs$actions.getSongsSlice,
    addSongSlice = _songs$actions.addSongSlice,
    editSongSlice = _songs$actions.editSongSlice,
    deleteSongSlice = _songs$actions.deleteSongSlice;
exports.deleteSongSlice = deleteSongSlice;
exports.editSongSlice = editSongSlice;
exports.addSongSlice = addSongSlice;
exports.getSongsSlice = getSongsSlice;
var _default = songs.reducer;
exports["default"] = _default;