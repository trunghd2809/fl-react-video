'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangeSubVi = exports.CurrentTime = exports.TogglePlay = exports.Video = exports.Player = undefined;

var _Player = require('./components/Player');

var _Player2 = _interopRequireDefault(_Player);

var _Video = require('./components/Video');

var _Video2 = _interopRequireDefault(_Video);

var _PlayToggle = require('./components/control-bar/PlayToggle');

var _PlayToggle2 = _interopRequireDefault(_PlayToggle);

var _CurrentTimeDisplay = require('./components/time-controls/CurrentTimeDisplay');

var _CurrentTimeDisplay2 = _interopRequireDefault(_CurrentTimeDisplay);

var _ToggleSubVi = require('./components/settting-popup/ToggleSubVi');

var _ToggleSubVi2 = _interopRequireDefault(_ToggleSubVi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Player = _Player2.default;
exports.Video = _Video2.default;
exports.TogglePlay = _PlayToggle2.default;
exports.CurrentTime = _CurrentTimeDisplay2.default;
exports.ChangeSubVi = _ToggleSubVi2.default;