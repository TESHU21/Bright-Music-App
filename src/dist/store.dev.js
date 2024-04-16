"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _songs = _interopRequireDefault(require("./features/slice/songs"));

var _song = _interopRequireDefault(require("./features/slice/song"));

var _index = require("./features/saga/index");

var _modalSlice = _interopRequireDefault(require("./features/slice/modalSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sagaMiddleware = (0, _reduxSaga["default"])();
var store = (0, _toolkit.configureStore)({
  reducer: {
    song: _song["default"],
    songs: _songs["default"],
    modal: _modalSlice["default"]
  },
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      thunk: false
    }).concat(sagaMiddleware);
  }
});
sagaMiddleware.run(_index.rootSaga);
var _default = store;
exports["default"] = _default;