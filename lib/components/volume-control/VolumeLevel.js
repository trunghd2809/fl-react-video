'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  percentage: _propTypes2.default.string,
  vertical: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

var defaultProps = {
  percentage: '100%',
  vertical: false
};

function VolumeLevel(_ref) {
  var percentage = _ref.percentage;

  return _react2.default.createElement('div', {
    className: 'video-volume-level video-control',
    style: { width: '' + percentage } });
}

VolumeLevel.defaultProps = defaultProps;
VolumeLevel.propTypes = propTypes;
VolumeLevel.displayName = 'VolumeLevel';
exports.default = VolumeLevel;