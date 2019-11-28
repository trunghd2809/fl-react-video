'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    actions: _propTypes2.default.object,
    player: _propTypes2.default.object
};

var PlayToggle = function (_React$Component) {
    _inherits(PlayToggle, _React$Component);

    function PlayToggle(props) {
        _classCallCheck(this, PlayToggle);

        return _possibleConstructorReturn(this, (PlayToggle.__proto__ || Object.getPrototypeOf(PlayToggle)).call(this, props));
    }

    _createClass(PlayToggle, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.player.paused !== this.props.player.paused;
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            var _props = this.props,
                actions = _props.actions,
                player = _props.player;

            if (player.paused) {
                actions.play();
            } else {
                actions.pause();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'button',
                { className: (0, _classnames2.default)({
                        'video-play-toggle-button': true,
                        'video-paused': this.props.player.paused
                    }, 'video-control', 'tool-tip'),
                    onClick: function onClick() {
                        return _this2.handleClick();
                    },
                    tabIndex: 0 },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'tool-tip-text top-center' },
                    this.props.player.paused ? 'Phát' : 'Dừng'
                )
            );
        }
    }]);

    return PlayToggle;
}(_react2.default.Component);

exports.default = PlayToggle;