"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setSongSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var song = (0, _toolkit.createSlice)({
  name: "song",
  initialState: {
    id: 0,
    albumno: "",
    title: "",
    artist: "",
    albumimage: "",
    language: ""
  },
  reducers: {
    setSongSlice: function setSongSlice(state, action) {
      state = action.payload;
      return state;
    }
  }
});
var setSongSlice = song.actions.setSongSlice;
exports.setSongSlice = setSongSlice;
var _default = song.reducer;
exports["default"] = _default;