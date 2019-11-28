import React from 'react'

export default class SettingToggle extends React.PureComponent {
  render () {
    return (
      <button
        className="ekiio-video-icon ekiio-video-icon-setting video-control tool-tip"
        onClick={this.props.toggleSetting} >
        <div className='tool-tip-text top-center'>Tuỳ chỉnh</div>
      </button>

    )
  }
}
