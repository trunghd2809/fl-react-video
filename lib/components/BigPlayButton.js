'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  poster: _propTypes2.default.string,
  player: _propTypes2.default.object,
  actions: _propTypes2.default.object
};

var BigPlayButton = function (_React$Component) {
  _inherits(BigPlayButton, _React$Component);

  function BigPlayButton() {
    _classCallCheck(this, BigPlayButton);

    return _possibleConstructorReturn(this, (BigPlayButton.__proto__ || Object.getPrototypeOf(BigPlayButton)).apply(this, arguments));
  }

  _createClass(BigPlayButton, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.player.hasStarted !== this.props.player.hasStarted;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          player = _props.player,
          actions = _props.actions;

      if (player.hasStarted) {
        return null;
      }
      return _react2.default.createElement('button', {
        className: 'video-big-play-button video-control',
        onClick: function onClick() {
          if (player.paused) {
            actions.play();
          }
        }
      });
    }
  }]);

  return BigPlayButton;
}(_react2.default.Component);

BigPlayButton.propTypes = propTypes;
BigPlayButton.displayName = 'BigPlayButton';

exports.default = BigPlayButton;