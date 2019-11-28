'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _VolumeBar = require('../volume-control/VolumeBar');

var _VolumeBar2 = _interopRequireDefault(_VolumeBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    player: _propTypes2.default.object,
    actions: _propTypes2.default.object,
    className: _propTypes2.default.string
};

var VolumeMenuButton = function (_Component) {
    _inherits(VolumeMenuButton, _Component);

    function VolumeMenuButton(props, context) {
        _classCallCheck(this, VolumeMenuButton);

        var _this = _possibleConstructorReturn(this, (VolumeMenuButton.__proto__ || Object.getPrototypeOf(VolumeMenuButton)).call(this, props, context));

        _this.state = {
            active: false
        };

        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleFocus = _this.handleFocus.bind(_this);
        _this.handleBlur = _this.handleBlur.bind(_this);
        return _this;
    }

    _createClass(VolumeMenuButton, [{
        key: 'handleClick',
        value: function handleClick() {
            var _props = this.props,
                player = _props.player,
                actions = _props.actions;

            actions.mute(!player.muted);
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus() {
            this.setState({
                active: true
            });
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur() {
            this.setState({
                active: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var player = this.props.player;

            var level = this.volumeLevel;
            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)({
                        'video-vol-slider-active': this.state.active
                    }, 'video-volume-menu') },
                _react2.default.createElement(
                    'button',
                    {
                        className: (0, _classnames2.default)({
                            'video-vol-muted': player.muted,
                            'video-vol-0': level === 0 && !player.muted,
                            'video-vol-1': level === 1,
                            'video-vol-2': level === 2,
                            'video-vol-3': level === 3
                        }, 'video-volume-button video-control', 'tool-tip') // add this video control class for prevent parent element get key-pressed event
                        , onClick: this.handleClick,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur },
                    _react2.default.createElement(
                        'div',
                        { className: 'tool-tip-text top-center' },
                        '\xC2m lu\u1EE3ng'
                    )
                ),
                _react2.default.createElement(_VolumeBar2.default, _extends({ onFocus: this.handleFocus,
                    onBlur: this.handleBlur
                }, this.props))
            );
        }
    }, {
        key: 'volumeLevel',
        get: function get() {
            var _props$player = this.props.player,
                volume = _props$player.volume,
                muted = _props$player.muted;

            var level = 3;
            if (volume === 0 || muted) {
                level = 0;
            } else if (volume < 0.33) {
                level = 1;
            } else if (volume < 0.67) {
                level = 2;
            }
            return level;
        }
    }]);

    return VolumeMenuButton;
}(_react.Component);

VolumeMenuButton.propTypes = propTypes;
VolumeMenuButton.displayName = 'VolumeMenuButton';
exports.default = VolumeMenuButton;