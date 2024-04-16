import { createSlice } from "@reduxjs/toolkit";

const song = createSlice({
  name: "song",
  initialState: {
    id: 0,
    albumno: "",
    title: "",
    artist: "",
    albumimage: "",
    language: "",
  },
  reducers: {
    setSongSlice: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { setSongSlice } = song.actions;
export default song.reducer;
