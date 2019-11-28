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

var propTypes = {
  player: _propTypes2.default.object
};

function DurationDisplay(_ref) {
  var duration = _ref.player.duration;

  var formattedTime = (0, _utils.formatTime)(duration);
  return _react2.default.createElement(
    'span',
    {
      className: 'video-duration-display' },
    formattedTime
  );
}

DurationDisplay.propTypes = propTypes;
DurationDisplay.displayName = 'DurationDisplay';

exports.default = DurationDisplay;