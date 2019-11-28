'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hls = require('hls.js');

var _hls2 = _interopRequireDefault(_hls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HLSSource = function (_Component) {
    _inherits(HLSSource, _Component);

    function HLSSource(props, context) {
        _classCallCheck(this, HLSSource);

        var _this = _possibleConstructorReturn(this, (HLSSource.__proto__ || Object.getPrototypeOf(HLSSource)).call(this, props, context));

        _this.hls = new _hls2.default();
        return _this;
    }

    _createClass(HLSSource, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // `src` is the property get from this component
            // `video` is the property insert from `Video` component
            // `video` is the html5 video element
            var _props = this.props,
                src = _props.src,
                video = _props.video;
            // load hls video source base on hls.js

            if (_hls2.default.isSupported()) {
                this.hls.loadSource(src);
                this.hls.attachMedia(video);
                this.hls.on(_hls2.default.Events.MANIFEST_PARSED, function () {
                    video.play();
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // destroy hls video source
            if (this.hls) {
                this.hls.destroy();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
            // return (
            //     <source
            //         src={this.props.src}
            //         type={this.props.type || 'application/x-mpegURL'}
            //     />
            // );
        }
    }]);

    return HLSSource;
}(_react.Component);

exports.default = HLSSource;