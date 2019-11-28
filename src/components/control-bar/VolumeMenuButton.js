import PropTypes from 'prop-types'
import React, {Component} from 'react'
import classNames from 'classnames'
import VolumeBar from '../volume-control/VolumeBar'

const propTypes = {
    player: PropTypes.object,
    actions: PropTypes.object,
    className: PropTypes.string,
}

class VolumeMenuButton extends Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
            active: false,
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    handleClick() {
        const {player, actions} = this.props
        actions.mute(!player.muted)
    }

    handleFocus() {
        this.setState({
            active: true,
        })
    }

    handleBlur() {
        this.setState({
            active: false,
        })
    }

    get volumeLevel() {
        const {player: {volume, muted}} = this.props
        let level = 3
        if (volume === 0 || muted) {
            level = 0
        } else if (volume < 0.33) {
            level = 1
        } else if (volume < 0.67) {
            level = 2
        }
        return level
    }

    render() {
        const {player} = this.props
        const level = this.volumeLevel
        return (
            <div className={classNames({
                'video-vol-slider-active': this.state.active,
            }, 'video-volume-menu')}>
                <button
                    className={classNames({
                            'video-vol-muted': player.muted,
                            'video-vol-0': level === 0 && !player.muted,
                            'video-vol-1': level === 1,
                            'video-vol-2': level === 2,
                            'video-vol-3': level === 3,
                        },
                        'video-volume-button video-control', 'tool-tip')} // add this video control class for prevent parent element get key-pressed event
                    onClick={this.handleClick}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}>
          <div className='tool-tip-text top-center'>Âm luợng</div>
                </button>
                <VolumeBar onFocus={this.handleFocus}
                           onBlur={this.handleBlur}
                           {...this.props} />
            </div>
        )
    }
}

VolumeMenuButton.propTypes = propTypes
VolumeMenuButton.displayName = 'VolumeMenuButton'
export default VolumeMenuButton
