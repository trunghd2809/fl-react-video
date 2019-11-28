import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
}
export default class PlayToggle extends React.Component {
  constructor (props) {
    super(props)
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.player.paused !== this.props.player.paused
  }

  handleClick () {
    const {actions, player} = this.props
    if (player.paused) {
      actions.play()
    } else {
      actions.pause()
    }
  }

  render () {
    return (
      <button className={classNames({
        'video-play-toggle-button': true,
        'video-paused': this.props.player.paused,
      },'video-control')}
              onClick={() => this.handleClick()} />
    )
  }
}
