import PropTypes from 'prop-types'
import React from 'react'

import { formatTime } from '../../utils'

const propTypes = {
  player: PropTypes.object,
}

function CurrentTimeDisplay ({player: {currentTime, duration}}) {
  const formattedTime = formatTime(currentTime, duration)
  return (
    <span
      className='video-current-time'>
      {formattedTime}
    </span>
  )
}

CurrentTimeDisplay.propTypes = propTypes
CurrentTimeDisplay.displayName = 'CurrentTimeDisplay'

export default CurrentTimeDisplay
