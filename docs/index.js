import React from 'react'
import {render} from 'react-dom'
import {Player} from '../src/index'
import '../src/styles/scss/ekiio-video-react.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            enableViSub: false,
            settingActive: false,
            isFullscreen: false,
            isHSL: false
        }
        this.player = React.createRef()
        this.toggleSetting = this.toggleSetting.bind(this)
    }

    toggleSubVi() {
        let currentTime = this.refs.player.getState().player.currentTime
        this.setState(prevState => ({enableViSub: !prevState.enableViSub}),
            () => this.refs.player.seek(currentTime))
    }

    toggleSetting() {
        // this.setState(prevState => ({isHSL: !prevState.isHSL}))
        this.setState(prevState => ({settingActive: !prevState.settingActive}))
        this.setState(prevState => ({enableViSub: !prevState.enableViSub}))
    }

    componentDidMount() {

    }

    render() {
        const src = {
            en: 'https://lh3.googleusercontent.com/1GFAmwUDGuH8bO-SQiYbvhV2jX_HSjce3s2Tn96Z_9n0gblSOa_vi0Sxk9GbJnZokXvp2lAHuzA=m22',
            vi: 'https://lh3.googleusercontent.com/1GFAmwUDGuH8bO-SQiYbvhV2jX_HSjce3s2Tn96Z_9n0gblSOa_vi0Sxk9GbJnZokXvp2lAHuzA=m22',
        }
        return (
            <div style={{width: 700, height: 394, position: 'relative'}}>
                <Player ref={this.player}
                        src={this.state.enableViSub ? src.vi : src.en}
                        poster="https://cdn.benkitv.com/byousoku-5-centimeter-5-centimeters-per-second-dCrKtp/images/poster.jpg"
                        muted={true}
                        HLS={this.state.isHSL}
                        toggleSetting={this.toggleSetting}>
                    <div/>
                </Player>
            </div>
        )
    }
}

render(<App/>, document.getElementById('root'))
