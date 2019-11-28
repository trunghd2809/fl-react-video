import PropTypes from 'prop-types'
import React, {Component} from 'react'
import classNames from 'classnames'

const propTypes = {
    actions: PropTypes.object,
    player: PropTypes.object,
}

export default class FullscreenToggle extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.player.isFullscreen !== this.props.player.isFullscreen
    }

    constructor(props, context) {
        super(props, context)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const {player, actions} = this.props
        actions.toggleFullscreen(player)
    }

    render() {
        const {player} = this.props
        return (
            <button
                className={classNames({
                        'ekiio-video-icon-fullscreen-exit': player.isFullscreen,
                        'ekiio-video-icon-fullscreen': !player.isFullscreen,
                    },
                    'video-fullscreen-control video-control ekiio-video-icon', 'tool-tip')}
                ref={
                    (c) => {
                        this.button = c
                    }
                }
                tabIndex="0"
                onClick={this.handleClick}>
                <div
                    className='tool-tip-text top-left'>{this.props.player.isFullscreen ? 'Thoát chế độ toàn màn hình' : 'Toàn màn hình'}</div>
            </button>
        )
    }
}

FullscreenToggle.propTypes = propTypes
FullscreenToggle.displayName = 'FullscreenToggle'
