import PropTypes from 'prop-types'
import React from 'react'
import { formatTime } from '../../utils'

function MouseTimeDisplay ({duration, mouseTime, text}) {
  if (!mouseTime.time) {
    return null
  }

  const time = text || formatTime(mouseTime.time, duration)

  return (
    <span
      className='video-mouse-time-display video-control'
      style={{
        left: `${mouseTime.position}px`,
      }}
    >
      {time}
    </span>
  )
}

MouseTimeDisplay.propTypes = {
  duration: PropTypes.number,
  mouseTime: PropTypes.object,
}
MouseTimeDisplay.displayName = 'MouseTimeDisplay'

export default MouseTimeDisplay
