import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  poster: PropTypes.string,
  player: PropTypes.object,
  actions: PropTypes.object,
}

class BigPlayButton extends React.Component {
  shouldComponentUpdate (nextProps) {
    return nextProps.player.hasStarted !== this.props.player.hasStarted
  }

  render () {
    const {player, actions} = this.props
    if (player.hasStarted) {
      return null
    }
    return (
      <button
        className="video-big-play-button video-control"
        onClick={() => {
          if (player.paused) {
            actions.play()
          }
        }}
      />
    )
  }
}

BigPlayButton.propTypes = propTypes
BigPlayButton.displayName = 'BigPlayButton'

export default BigPlayButton
