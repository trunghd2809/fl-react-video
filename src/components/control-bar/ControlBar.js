import React from 'react'
import classNames from 'classnames'

import PlayToggle from './PlayToggle'
import VolumeMenuButton from './VolumeMenuButton'
import ProgressControl from './ProgressControl'
import FullscreenToggle from './FullscreenToggle'
import SettingToggle from './SettingToggle'
import CurrentTimeDisplay from '../time-controls/CurrentTimeDisplay'
import DurationDisplay from '../time-controls/DurationDisplay'

const ControlBar = (props) => {

  const children = [
    <PlayToggle key='toggle-play' {...props} />,
    <VolumeMenuButton key='volume-menu-button' {...props} />,
    <CurrentTimeDisplay key='current-time-display' player={props.player} />,
    <ProgressControl key='progress-control' {...props} />,
    <DurationDisplay key='duration-display' player={props.player} />,
    <SettingToggle key='setting-popup-toggle' {...props} />,
    <FullscreenToggle key='full-screen-toggle' {...props} />,
  ]
  return (
    <div className={classNames('control-bar', 'control-bar-auto-hide')}>
      {children}
    </div>
  )

}
export default ControlBar
