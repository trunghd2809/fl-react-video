import React from 'react'
import classNames from 'classnames'
import PlaySpeed from './PlaySpeed'
import ToggleSubVi from './ToggleSubVi'

export default class SettingsPopup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false,
    }
    this.toggleSetting = this.toggleSetting.bind(this)
  }

  toggleSetting () {
    this.setState((prevState) => ({active: !prevState.active}))
  }

  render () {
    const children = [
      <PlaySpeed className='' key='change-video-speed' {...this.props} />,
      <div className="big-setting-button" />,
      <ToggleSubVi key='toggleSubVi' {...this.props} />,
    ]
    return (
      <div
        className={classNames({
          'video-setting-popup-active': this.state.active,
        }, 'video-settings-popup')}>
        {children}
      </div>
    )
  }
}
