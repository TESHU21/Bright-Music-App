"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _songsState = _interopRequireDefault(require("./songsState"));

var _songsSaga = _interopRequireDefault(require("./songsSaga"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sagaMiddleware = (0, _reduxSaga["default"])();
var store = (0, _toolkit.configureStore)({
  reducer: {
    songs: _songsState["default"]
  },
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(sagaMiddleware);
  }
});
sagaMiddleware.run(_songsSaga["default"]);
var _default = store;
exports["default"] = _default;