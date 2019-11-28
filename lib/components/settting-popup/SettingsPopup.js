'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PlaySpeed = require('./PlaySpeed');

var _PlaySpeed2 = _interopRequireDefault(_PlaySpeed);

var _ToggleSubVi = require('./ToggleSubVi');

var _ToggleSubVi2 = _interopRequireDefault(_ToggleSubVi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SettingsPopup = function (_React$Component) {
  _inherits(SettingsPopup, _React$Component);

  function SettingsPopup(props) {
    _classCallCheck(this, SettingsPopup);

    var _this = _possibleConstructorReturn(this, (SettingsPopup.__proto__ || Object.getPrototypeOf(SettingsPopup)).call(this, props));

    _this.state = {
      active: false
    };
    _this.toggleSetting = _this.toggleSetting.bind(_this);
    return _this;
  }

  _createClass(SettingsPopup, [{
    key: 'toggleSetting',
    value: function toggleSetting() {
      this.setState(function (prevState) {
        return { active: !prevState.active };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = [_react2.default.createElement(_PlaySpeed2.default, _extends({ className: '', key: 'change-video-speed' }, this.props)), _react2.default.createElement('div', { className: 'big-setting-button' }), _react2.default.createElement(_ToggleSubVi2.default, _extends({ key: 'toggleSubVi' }, this.props))];
      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)({
            'video-setting-popup-active': this.state.active
          }, 'video-settings-popup') },
        children
      );
    }
  }]);

  return SettingsPopup;
}(_react2.default.Component);

exports.default = SettingsPopup;