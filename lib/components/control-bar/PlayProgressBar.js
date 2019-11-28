'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PlayProgressBar;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  currentTime: _propTypes2.default.number,
  duration: _propTypes2.default.number,
  percentage: _propTypes2.default.string,
  className: _propTypes2.default.string

  // Shows play progress
};function PlayProgressBar(_ref) {
  var currentTime = _ref.currentTime,
      duration = _ref.duration,
      percentage = _ref.percentage;

  return _react2.default.createElement('div', { 'data-current-time': (0, _utils.formatTime)(currentTime, duration),
    className: 'video-play-progress video-slider-bar',
    style: {
      width: percentage
    } });
}

PlayProgressBar.propTypes = propTypes;
PlayProgressBar.displayName = 'PlayProgressBar';