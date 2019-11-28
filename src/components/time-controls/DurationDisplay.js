import PropTypes from 'prop-types'
import React from 'react'

import { formatTime } from '../../utils'

const propTypes = {
  player: PropTypes.object,
}

function DurationDisplay ({player: {duration}}) {
  const formattedTime = formatTime(duration)
  return (
    <span
      className="video-duration-display">
      {formattedTime}
    </span>
  )
}

DurationDisplay.propTypes = propTypes
DurationDisplay.displayName = 'DurationDisplay'

export default DurationDisplay
