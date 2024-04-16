import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import songsReducer from "./features/slice/songs";
import songReducer from "./features/slice/song";
import { rootSaga } from "./features/saga/index";
import modalReducer from "./features/slice/modalSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    song: songReducer,

    songs: songsReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
