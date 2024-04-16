import { put, call, takeEvery } from "redux-saga/effects";
//import { setSongs, addSong, updateSong, deleteSong } from "./songsSlice";
import { getSongsSuccess, getSongsFetch } from "./songsState";
const url = "http://jsonplaceholder.typicode.com/users/1/albums";
function* workGetSongsFetch() {
  const songs = yield call(() => fetch(url));
  const formattedSongs = yield songs.json();
  const formattedSongsShortened = formattedSongs.slice(0, 10);
  yield put(getSongsSuccess(formattedSongsShortened));
  // Additional code logic here
}

function* songsSaga() {
  yield takeEvery("songs/getSongsFetch", workGetSongsFetch);
}

// function* createSong(action) {
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

export default songsSaga;
