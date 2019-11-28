import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  player: PropTypes.object,
}

export default class LoadingSpinner extends React.Component {

  render () {
    let player = this.props.player
    if (player.error) {
      return null
    }
    return (
      <div
        className='video-loading-spinner'>
        <div />
        <div />
      </div>
    )
  }
}

LoadingSpinner.propTypes = propTypes
LoadingSpinner.displayName = ' LoadingSpinner'
