'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MouseTimeDisplay(_ref) {
  var duration = _ref.duration,
      mouseTime = _ref.mouseTime,
      text = _ref.text;

  if (!mouseTime.time) {
    return null;
  }

  var time = text || (0, _utils.formatTime)(mouseTime.time, duration);

  return _react2.default.createElement(
    'span',
    {
      className: 'video-mouse-time-display video-control',
      style: {
        left: mouseTime.position + 'px'
      }
    },
    time
  );
}

MouseTimeDisplay.propTypes = {
  duration: _propTypes2.default.number,
  mouseTime: _propTypes2.default.object
};
MouseTimeDisplay.displayName = 'MouseTimeDisplay';

exports.default = MouseTimeDisplay;