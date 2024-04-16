import { createSlice } from "@reduxjs/toolkit";

const songs = createSlice({
  name: "songs",
  initialState: [
    {
      id: 0,
      albumno: "",
      title: "",
      artist: "",
      albumimage: "",
      language: "",
    },
  ],
  reducers: {
    getSongsSlice: (state, action) => {
      state = action.payload;
      console.log(action.payload);
      return state;
    },
    addSongSlice: (state, action) => {
      state.push(action.payload);
      return state;
    },
    editSongSlice: (state, action) => {
      state = state.map((i) =>
        i.id == action.payload.id ? action.payload : i
      );
      //console.log("EDDDDDDDDDDDDD");
      return state;
    },
    deleteSongSlice: (state, action) => {
      state = state.filter((i) => i.id !== action.payload);
      return state;
    },
  },
});
export const { getSongsSlice, addSongSlice, editSongSlice, deleteSongSlice } =
  songs.actions;
export default songs.reducer;
