'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PlayToggle = require('./PlayToggle');

var _PlayToggle2 = _interopRequireDefault(_PlayToggle);

var _VolumeMenuButton = require('./VolumeMenuButton');

var _VolumeMenuButton2 = _interopRequireDefault(_VolumeMenuButton);

var _ProgressControl = require('./ProgressControl');

var _ProgressControl2 = _interopRequireDefault(_ProgressControl);

var _FullscreenToggle = require('./FullscreenToggle');

var _FullscreenToggle2 = _interopRequireDefault(_FullscreenToggle);

var _SettingToggle = require('./SettingToggle');

var _SettingToggle2 = _interopRequireDefault(_SettingToggle);

var _CurrentTimeDisplay = require('../time-controls/CurrentTimeDisplay');

var _CurrentTimeDisplay2 = _interopRequireDefault(_CurrentTimeDisplay);

var _DurationDisplay = require('../time-controls/DurationDisplay');

var _DurationDisplay2 = _interopRequireDefault(_DurationDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ControlBar = function ControlBar(props) {

  var children = [_react2.default.createElement(_PlayToggle2.default, _extends({ key: 'toggle-play' }, props)), _react2.default.createElement(_VolumeMenuButton2.default, _extends({ key: 'volume-menu-button' }, props)), _react2.default.createElement(_CurrentTimeDisplay2.default, { key: 'current-time-display', player: props.player }), _react2.default.createElement(_ProgressControl2.default, _extends({ key: 'progress-control' }, props)), _react2.default.createElement(_DurationDisplay2.default, { key: 'duration-display', player: props.player }), _react2.default.createElement(_SettingToggle2.default, _extends({ key: 'setting-popup-toggle' }, props)), _react2.default.createElement(_FullscreenToggle2.default, _extends({ key: 'full-screen-toggle' }, props))];
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('control-bar', 'control-bar-auto-hide') },
    children
  );
};
exports.default = ControlBar;