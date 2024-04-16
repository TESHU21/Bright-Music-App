"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getSongsFailure = exports.getSongsSuccess = exports.getSongsFetch = exports.songsSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

// const initialState = {
//   songs: [],
//   isLoading: false,
//   error: null,
// };
var songsSlice = (0, _toolkit.createSlice)({
  name: "songs",
  initialState: {
    songs: [],
    isLoading: false
  },
  reducers: {
    getSongsFetch: function getSongsFetch(state) {
      state.isLoading = true;
    },
    getSongsSuccess: function getSongsSuccess(state, action) {
      state.songs = action.payload;
      state.isLoading = false;
    },
    getSongssFailure: function getSongssFailure(state) {
      state.isLoading = false;
    }
  } //   setSongs: (state, action) => {
  //     return action.payload;
  //   },
  // addSong: (state, action) => {
  //   state.songs.push(action.payload);
  // },
  // updateSong: (state, action) => {
  //   const { id, ...updatedSong } = action.payload;
  //   const index = state.songs.findIndex((song) => song.id === id);
  //   if (index !== -1) {
  //     state.songs[index] = { ...state.songs[index], ...updatedSong };
  //   }
  // },
  // deleteSong: (state, action) => {
  //   return state.songs.filter((song) => song.id !== action.payload);
  // },
  // extraReducers: {},

});
exports.songsSlice = songsSlice;
var _songsSlice$actions = songsSlice.actions,
    getSongsFetch = _songsSlice$actions.getSongsFetch,
    getSongsSuccess = _songsSlice$actions.getSongsSuccess,
    getSongsFailure = _songsSlice$actions.getSongsFailure; //export const { setSongs, addSong, updateSong, deleteSong } = songsSlice.actions;

exports.getSongsFailure = getSongsFailure;
exports.getSongsSuccess = getSongsSuccess;
exports.getSongsFetch = getSongsFetch;
var _default = songsSlice.reducer;
exports["default"] = _default;