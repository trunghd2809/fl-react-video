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

var _Manager = require('../Manager');

var _Manager2 = _interopRequireDefault(_Manager);

var _Video = require('./Video');

var _Video2 = _interopRequireDefault(_Video);

var _HLSSource = require('./HLSSource');

var _HLSSource2 = _interopRequireDefault(_HLSSource);

var _ControlBar = require('./control-bar/ControlBar');

var _ControlBar2 = _interopRequireDefault(_ControlBar);

var _browser = require('../utils/browser');

var browser = _interopRequireWildcard(_browser);

var _utils = require('../utils');

var _fullscreen = require('../utils/fullscreen');

var _fullscreen2 = _interopRequireDefault(_fullscreen);

var _Shortcut = require('./Shortcut');

var _Shortcut2 = _interopRequireDefault(_Shortcut);

var _LoadingSpinner = require('./LoadingSpinner');

var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);

var _BigPlayButton = require('./BigPlayButton');

var _BigPlayButton2 = _interopRequireDefault(_BigPlayButton);

var _Bezel = require('./Bezel');

var _Bezel2 = _interopRequireDefault(_Bezel);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import BigPlayButton from './BigPlayButton';
// import LoadingSpinner from './LoadingSpinner';
// import BigPlayButton from './BigPlayButton';

// import Bezel from './Bezel';
// import Shortcut from './Shortcut';


var propTypes = {
    children: _propTypes2.default.any,
    muted: _propTypes2.default.bool,
    playsInline: _propTypes2.default.bool,
    aspectRatio: _propTypes2.default.string,
    className: _propTypes2.default.string,
    videoId: _propTypes2.default.string,
    startTime: _propTypes2.default.number,
    loop: _propTypes2.default.bool,
    autoPlay: _propTypes2.default.bool,
    src: _propTypes2.default.string,
    poster: _propTypes2.default.string,
    preload: _propTypes2.default.oneOf(['auto', 'metadata', 'none']),

    onLoadStart: _propTypes2.default.func,
    onWaiting: _propTypes2.default.func,
    onCanPlay: _propTypes2.default.func,
    onCanPlayThrough: _propTypes2.default.func,
    onPlaying: _propTypes2.default.func,
    onEnded: _propTypes2.default.func,
    onSeeking: _propTypes2.default.func,
    onSeeked: _propTypes2.default.func,
    onPlay: _propTypes2.default.func,
    onPause: _propTypes2.default.func,
    onProgress: _propTypes2.default.func,
    onDurationChange: _propTypes2.default.func,
    onError: _propTypes2.default.func,
    onSuspend: _propTypes2.default.func,
    onAbort: _propTypes2.default.func,
    onEmptied: _propTypes2.default.func,
    onStalled: _propTypes2.default.func,
    onLoadedMetadata: _propTypes2.default.func,
    onLoadedData: _propTypes2.default.func,
    onTimeUpdate: _propTypes2.default.func,
    onRateChange: _propTypes2.default.func,
    onVolumeChange: _propTypes2.default.func,

    store: _propTypes2.default.object
};
var defaultProps = {
    HLS: false
};

var Player = function (_Component) {
    _inherits(Player, _Component);

    function Player(props) {
        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));

        _this.controlsHideTimer = null;
        _this.video = null; // the Video component
        _this.manager = new _Manager2.default(props.store);
        _this.actions = _this.manager.getActions();
        _this.manager.subscribeToPlayerStateChange(_this.handleStateChange.bind(_this));

        _this.handleResize = _this.handleResize.bind(_this);
        _this.getChildren = _this.getChildren.bind(_this);
        _this.handleMouseMove = (0, _utils.throttle)(_this.handleMouseMove.bind(_this), 250);
        _this.handleMouseDown = _this.handleMouseDown.bind(_this);
        _this.startControlsTimer = _this.startControlsTimer.bind(_this);
        _this.handleFullScreenChange = _this.handleFullScreenChange.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.handleFocus = _this.handleFocus.bind(_this);
        _this.handleBlur = _this.handleBlur.bind(_this);
        return _this;
    }

    _createClass(Player, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.handleResize();
            window.addEventListener('resize', this.handleResize);
            _fullscreen2.default.addEventListener(this.handleFullScreenChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // Remove event listener
            window.removeEventListener('resize', this.handleResize);
            _fullscreen2.default.removeEventListener(this.handleFullScreenChange);
            if (this.controlsHideTimer) {
                window.clearTimeout(this.controlsHideTimer);
            }
        }
    }, {
        key: 'getChildren',
        value: function getChildren(props) {
            var _this2 = this;

            //necessary props
            var nps = { actions: props.actions, player: props.player
                // check hsl src based on
            };var video = props.HLS ? _react2.default.createElement(
                _Video2.default,
                _extends({
                    ref: function ref(c) {
                        _this2.video = c;
                        _this2.manager.video = _this2.video;
                    },
                    key: 'video'
                }, props),
                _react2.default.createElement(_HLSSource2.default, {
                    isVideoChild: true,
                    src: props.src
                })
            ) : _react2.default.createElement(_Video2.default, _extends({
                ref: function ref(c) {
                    _this2.video = c;
                    _this2.manager.video = _this2.video;
                },
                key: 'video'
            }, props));

            return [video, _react2.default.createElement(_ControlBar2.default, _extends({ key: 'control-bar'
            }, nps, { toggleSetting: props.toggleSetting, rootElement: this.manager.rootElement })), _react2.default.createElement(_Shortcut2.default, _extends({ key: 'short-cut'
            }, nps)), _react2.default.createElement(_LoadingSpinner2.default, { key: 'loading-spinner', player: props.player }), _react2.default.createElement(_Bezel2.default, { key: 'bezel', manager: props.manager })];
        }
    }, {
        key: 'getState',
        value: function getState() {
            return this.manager.getState();
        }

        // get playback rate

    }, {
        key: 'play',


        // play the video
        value: function play() {
            this.video.play();
        }

        // pause the video

    }, {
        key: 'pause',
        value: function pause() {
            this.video.pause();
        }

        // Change the video source and re-load the video:

    }, {
        key: 'load',
        value: function load() {
            this.video.load();
        }

        // Add a new text track to the video

    }, {
        key: 'addTextTrack',
        value: function addTextTrack() {
            var _video;

            (_video = this.video).addTextTrack.apply(_video, arguments);
        }

        // Check if your browser can play different types of video:

    }, {
        key: 'canPlayType',
        value: function canPlayType() {
            var _video2;

            (_video2 = this.video).canPlayType.apply(_video2, arguments);
        }

        // seek video by time

    }, {
        key: 'seek',
        value: function seek(time) {
            this.video.seek(time);
        }

        // jump forward x seconds

    }, {
        key: 'forward',
        value: function forward(seconds) {
            this.video.forward(seconds);
        }

        // jump back x seconds

    }, {
        key: 'replay',
        value: function replay(seconds) {
            this.video.replay(seconds);
        }

        // enter or exist full screen

    }, {
        key: 'toggleFullscreen',
        value: function toggleFullscreen() {
            this.video.toggleFullscreen();
        }

        // subscribe to player state change

    }, {
        key: 'subscribeToStateChange',
        value: function subscribeToStateChange(listener) {
            return this.manager.subscribeToPlayerStateChange(listener);
        }

        // player resize

    }, {
        key: 'handleResize',
        value: function handleResize() {}
    }, {
        key: 'handleFullScreenChange',
        value: function handleFullScreenChange() {
            this.actions.handleFullscreenChange(_fullscreen2.default.isFullscreen);
        }
    }, {
        key: 'handleMouseDown',
        value: function handleMouseDown() {
            this.startControlsTimer();
        }
    }, {
        key: 'handleMouseMove',
        value: function handleMouseMove() {
            this.startControlsTimer();
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown() {
            this.startControlsTimer();
        }
    }, {
        key: 'startControlsTimer',
        value: function startControlsTimer() {
            var _this3 = this;

            this.actions.userActivate(true);
            clearTimeout(this.controlsHideTimer);
            this.controlsHideTimer = setTimeout(function () {
                _this3.actions.userActivate(false);
            }, 3000);
        }
    }, {
        key: 'handleStateChange',
        value: function handleStateChange(state, prevState) {
            if (state.isFullscreen !== prevState.isFullscreen) {
                this.handleResize();
            }
            this.forceUpdate(); // re-render
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus() {
            this.actions.activate(true);
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur() {
            this.actions.activate(false);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _manager$getState = this.manager.getState(),
                player = _manager$getState.player;

            var paused = player.paused,
                hasStarted = player.hasStarted,
                waiting = player.waiting,
                seeking = player.seeking,
                isFullscreen = player.isFullscreen,
                userActivity = player.userActivity,
                readyState = player.readyState;

            var props = _extends({}, this.props, {
                player: player,
                src: this.props.src,
                actions: this.actions,
                manager: this.manager,
                store: this.manager.store,
                video: this.video ? this.video.video : null
            });
            var children = this.getChildren(props);

            return _react2.default.createElement(
                'div',
                {
                    className: (0, _classnames2.default)({
                        'video-has-started': hasStarted,
                        'video-paused': paused,
                        'video-playing': !paused,
                        'video-waiting': waiting,
                        'video-seeking': seeking,
                        'video-fullscreen': isFullscreen,
                        'video-user-inactive': !userActivity,
                        'video-user-active': userActivity,
                        'video-workinghover': !browser.IS_IOS,
                        'video-not-ready': readyState < 2
                    }, 'ekiio-video-player', this.props.className),
                    ref: function ref(c) {
                        _this4.manager.rootElement = c;
                    },
                    onTouchStart: this.handleMouseDown,
                    onMouseDown: this.handleMouseDown,
                    onMouseMove: this.handleMouseMove,
                    onKeyDown: this.handleKeyDown,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    tabIndex: '-1'
                },
                _react2.default.Children.map(this.props.children, function (child) {
                    return _react2.default.cloneElement(child, {
                        player: player,
                        actions: _this4.actions
                    });
                }),
                children
            );
        }
    }, {
        key: 'playbackRate',
        get: function get() {
            return this.video.playbackRate;
        }

        // set playback rate
        // speed of video
        ,
        set: function set(rate) {
            this.video.playbackRate = rate;
        }
    }, {
        key: 'muted',
        get: function get() {
            return this.video.muted;
        },
        set: function set(val) {
            this.video.muted = val;
        }
    }, {
        key: 'volume',
        get: function get() {
            return this.video.volume;
        },
        set: function set(val) {
            this.video.volume = val;
        }

        // video width

    }, {
        key: 'videoWidth',
        get: function get() {
            return this.video.videoWidth;
        }

        // video height

    }, {
        key: 'videoHeight',
        get: function get() {
            return this.video.videoHeight;
        }
    }]);

    return Player;
}(_react.Component);

exports.default = Player;


Player.contextTypes = { store: _propTypes2.default.object };
Player.propTypes = propTypes;
Player.defaultProps = defaultProps;
Player.displayName = 'Player';