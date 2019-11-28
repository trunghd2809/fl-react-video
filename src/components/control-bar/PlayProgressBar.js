import PropTypes from 'prop-types'
import React from 'react'
import { formatTime } from '../../utils'

const propTypes = {
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  percentage: PropTypes.string,
  className: PropTypes.string,
}

// Shows play progress
export default function PlayProgressBar ({currentTime, duration, percentage}) {
  return (
    <div data-current-time={formatTime(currentTime, duration)}
         className='video-play-progress video-slider-bar'
         style={{
           width: percentage,
         }} />

  )
}

PlayProgressBar.propTypes = propTypes
PlayProgressBar.displayName = 'PlayProgressBar'
