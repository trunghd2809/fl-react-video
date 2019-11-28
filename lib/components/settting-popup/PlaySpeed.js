'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlaySpeed = function (_React$Component) {
  _inherits(PlaySpeed, _React$Component);

  function PlaySpeed() {
    _classCallCheck(this, PlaySpeed);

    return _possibleConstructorReturn(this, (PlaySpeed.__proto__ || Object.getPrototypeOf(PlaySpeed)).call(this));
  }

  _createClass(PlaySpeed, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.player.playbackRate !== this.props.player.playbackRate;
    }
  }, {
    key: 'setPlayerSpeed',
    value: function setPlayerSpeed(rate) {
      this.props.actions.changeRate(rate);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          ' ',
          this.props.player.playbackRate
        ),
        _react2.default.createElement(
          'div',
          { onClick: function onClick() {
              return _this2.setPlayerSpeed(0.5);
            } },
          ' 0.5'
        ),
        _react2.default.createElement(
          'div',
          { onClick: function onClick() {
              return _this2.setPlayerSpeed(1);
            } },
          '> 1'
        ),
        _react2.default.createElement(
          'div',
          { onClick: function onClick() {
              return _this2.setPlayerSpeed(1.5);
            } },
          '> 1.5'
        ),
        _react2.default.createElement(
          'div',
          { onClick: function onClick() {
              return _this2.setPlayerSpeed(2);
            } },
          '> 2'
        ),
        _react2.default.createElement(
          'div',
          { onClick: function onClick() {
              return _this2.setPlayerSpeed(2.5);
            } },
          '> 2.5'
        )
      );
    }
  }]);

  return PlaySpeed;
}(_react2.default.Component);

exports.default = PlaySpeed;