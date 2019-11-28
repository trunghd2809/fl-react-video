import React from 'react'

export default class PlaySpeed extends React.Component {
  constructor () {
    super()
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.player.playbackRate !== this.props.player.playbackRate
  }

  setPlayerSpeed (rate) {
    this.props.actions.changeRate(rate)
  }

  render () {
    return (
      <div>
        <div> {this.props.player.playbackRate}</div>
        <div onClick={() => this.setPlayerSpeed(0.5)}> 0.5</div>
        <div onClick={() => this.setPlayerSpeed(1)}>> 1</div>
        <div onClick={() => this.setPlayerSpeed(1.5)}>> 1.5</div>
        <div onClick={() => this.setPlayerSpeed(2)}>> 2</div>
        <div onClick={() => this.setPlayerSpeed(2.5)}>> 2.5</div>
      </div>
    )
  }
}
