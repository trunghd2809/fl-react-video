import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  percentage: PropTypes.string,
  vertical: PropTypes.bool,
  className: PropTypes.string,
}

const defaultProps = {
  percentage: '100%',
  vertical: false,
}

function VolumeLevel ({percentage}) {
  return (
    <div
      className='video-volume-level video-control'
      style={{width: `${percentage}`}}>
    </div>
  )
}

VolumeLevel.defaultProps = defaultProps
VolumeLevel.propTypes = propTypes
VolumeLevel.displayName = 'VolumeLevel'
export default VolumeLevel
