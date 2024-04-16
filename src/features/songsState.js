import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   songs: [],
//   isLoading: false,
//   error: null,
// };

export const songsSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
    isLoading: false,
  },
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = true;
    },
    getSongsSuccess: (state, action) => {
      state.songs = action.payload;
      state.isLoading = false;
    },
    getSongssFailure: (state) => {
      state.isLoading = false;
    },
  },
  //   setSongs: (state, action) => {
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
export const { getSongsFetch, getSongsSuccess, getSongsFailure } =
  songsSlice.actions;
//export const { setSongs, addSong, updateSong, deleteSong } = songsSlice.actions;

export default songsSlice.reducer;
