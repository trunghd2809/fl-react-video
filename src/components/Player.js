import PropTypes from 'prop-types'
import React, {Component} from 'react'
import classNames from 'classnames'

import Manager from '../Manager'
// import BigPlayButton from './BigPlayButton';
// import LoadingSpinner from './LoadingSpinner';
// import BigPlayButton from './BigPlayButton';
import Video from './Video'
import HLSSource from './HLSSource'
// import Bezel from './Bezel';
// import Shortcut from './Shortcut';
import ControlBar from './control-bar/ControlBar'
import * as browser from '../utils/browser'
import {throttle} from '../utils'
import fullscreen from '../utils/fullscreen'
import Shortcut from './Shortcut'
import LoadingSpinner from './LoadingSpinner'
import BigPlayButton from './BigPlayButton'
import Bezel from './Bezel'

const propTypes = {
    children: PropTypes.any,
    muted: PropTypes.bool,
    playsInline: PropTypes.bool,
    aspectRatio: PropTypes.string,
    className: PropTypes.string,
    videoId: PropTypes.string,
    startTime: PropTypes.number,
    loop: PropTypes.bool,
    autoPlay: PropTypes.bool,
    src: PropTypes.string,
    poster: PropTypes.string,
    preload: PropTypes.oneOf(['auto', 'metadata', 'none']),

    onLoadStart: PropTypes.func,
    onWaiting: PropTypes.func,
    onCanPlay: PropTypes.func,
    onCanPlayThrough: PropTypes.func,
    onPlaying: PropTypes.func,
    onEnded: PropTypes.func,
    onSeeking: PropTypes.func,
    onSeeked: PropTypes.func,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onProgress: PropTypes.func,
    onDurationChange: PropTypes.func,
    onError: PropTypes.func,
    onSuspend: PropTypes.func,
    onAbort: PropTypes.func,
    onEmptied: PropTypes.func,
    onStalled: PropTypes.func,
    onLoadedMetadata: PropTypes.func,
    onLoadedData: PropTypes.func,
    onTimeUpdate: PropTypes.func,
    onRateChange: PropTypes.func,
    onVolumeChange: PropTypes.func,

    store: PropTypes.object,
}
const defaultProps = {
    HLS: false
}

export default class Player extends Component {

    constructor(props) {
        super(props)
        this.controlsHideTimer = null
        this.video = null // the Video component
        this.manager = new Manager(props.store)
        this.actions = this.manager.getActions()
        this.manager.subscribeToPlayerStateChange(
            this.handleStateChange.bind(this))

        this.handleResize = this.handleResize.bind(this)
        this.getChildren = this.getChildren.bind(this)
        this.handleMouseMove = throttle(this.handleMouseMove.bind(this), 250)
        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.startControlsTimer = this.startControlsTimer.bind(this)
        this.handleFullScreenChange = this.handleFullScreenChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    componentDidMount() {
        this.handleResize()
        window.addEventListener('resize', this.handleResize)
        fullscreen.addEventListener(this.handleFullScreenChange)
    }

    componentWillUnmount() {
        // Remove event listener
        window.removeEventListener('resize', this.handleResize)
        fullscreen.removeEventListener(this.handleFullScreenChange)
        if (this.controlsHideTimer) {
            window.clearTimeout(this.controlsHideTimer)
        }
    }

    getChildren(props) {
        //necessary props
        let nps = {actions: props.actions, player: props.player}
        // check hsl src based on
        let video = props.HLS ? <Video
            ref={(c) => {
                this.video = c
                this.manager.video = this.video
            }}
            key="video"
            {...props}>
            <HLSSource
                isVideoChild
                src={props.src}
            />

        </Video> : <Video
            ref={(c) => {
                this.video = c
                this.manager.video = this.video
            }}
            key="video"
            {...props} />

        return [
            video,
            <ControlBar key="control-bar"
                        {...nps} toggleSetting={props.toggleSetting} rootElement={this.manager.rootElement}/>,
            <Shortcut key="short-cut"
                      {...nps} />,
            <LoadingSpinner key='loading-spinner' player={props.player}/>,
            <Bezel key='bezel' manager={props.manager}/>,
        ]

    }

    getState() {
        return this.manager.getState()
    }

    // get playback rate
    get playbackRate() {
        return this.video.playbackRate
    }

    // set playback rate
    // speed of video
    set playbackRate(rate) {
        this.video.playbackRate = rate
    }

    get muted() {
        return this.video.muted
    }

    set muted(val) {
        this.video.muted = val
    }

    get volume() {
        return this.video.volume
    }

    set volume(val) {
        this.video.volume = val
    }

    // video width
    get videoWidth() {
        return this.video.videoWidth
    }

    // video height
    get videoHeight() {
        return this.video.videoHeight
    }

    // play the video
    play() {
        this.video.play()
    }

    // pause the video
    pause() {
        this.video.pause()
    }

    // Change the video source and re-load the video:
    load() {
        this.video.load()
    }

    // Add a new text track to the video
    addTextTrack(...args) {
        this.video.addTextTrack(...args)
    }

    // Check if your browser can play different types of video:
    canPlayType(...args) {
        this.video.canPlayType(...args)
    }

    // seek video by time
    seek(time) {
        this.video.seek(time)
    }

    // jump forward x seconds
    forward(seconds) {
        this.video.forward(seconds)
    }

    // jump back x seconds
    replay(seconds) {
        this.video.replay(seconds)
    }

    // enter or exist full screen
    toggleFullscreen() {
        this.video.toggleFullscreen()
    }

    // subscribe to player state change
    subscribeToStateChange(listener) {
        return this.manager.subscribeToPlayerStateChange(listener)
    }

    // player resize
    handleResize() {
    }

    handleFullScreenChange() {
        this.actions.handleFullscreenChange(fullscreen.isFullscreen)
    }

    handleMouseDown() {
        this.startControlsTimer()
    }

    handleMouseMove() {
        this.startControlsTimer()
    }

    handleKeyDown() {
        this.startControlsTimer()
    }

    startControlsTimer() {
        this.actions.userActivate(true)
        clearTimeout(this.controlsHideTimer)
        this.controlsHideTimer = setTimeout(() => {
            this.actions.userActivate(false)
        }, 3000)
    }

    handleStateChange(state, prevState) {
        if (state.isFullscreen !== prevState.isFullscreen) {
            this.handleResize()
        }
        this.forceUpdate() // re-render
    }

    handleFocus() {
        this.actions.activate(true)
    }

    handleBlur() {
        this.actions.activate(false)
    }

    render() {
        const {player} = this.manager.getState()
        const {paused, hasStarted, waiting, seeking, isFullscreen, userActivity, readyState} = player
        const props = {
            ...this.props,
            player,
            src: this.props.src,
            actions: this.actions,
            manager: this.manager,
            store: this.manager.store,
            video: this.video ? this.video.video : null,
        }
        const children = this.getChildren(props)

        return (
            <div
                className={classNames({
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
                }, 'ekiio-video-player', this.props.className)}
                ref={(c) => {
                    this.manager.rootElement = c
                }}
                onTouchStart={this.handleMouseDown}
                onMouseDown={this.handleMouseDown}
                onMouseMove={this.handleMouseMove}
                onKeyDown={this.handleKeyDown}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                tabIndex="-1"
            >
                {React.Children.map(this.props.children,
                    child => React.cloneElement(child, {
                        player: player,
                        actions: this.actions,
                    }),
                )}
                {children}
            </div>
        )
    }
}

Player.contextTypes = {store: PropTypes.object}
Player.propTypes = propTypes
Player.defaultProps = defaultProps
Player.displayName = 'Player'
