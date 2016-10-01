import React from 'react'
import throttle from 'lodash.throttle'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Footer from '../components/Footer'
import SidebarColophon from '../components/SidebarColophon'

import SpecimenSawarabi from '../specimens/Sawarabi'
import SpecimenMPlus from '../specimens/MPlus'
import SpecimenRoundedMPlus from '../specimens/RoundedMPlus'
import SpecimenHannari from '../specimens/Hannari'
import SpecimenKokoro from '../specimens/Kokoro'
import SpecimenNikukyu from '../specimens/Nikukyu'
import SpecimenNotoSansJapanese from '../specimens/NotoSansJapanese'

class Index extends React.Component {
  constructor () {
    super()

    this.state = {
      sidebar: true, // Default to true for mobile-first prerender
      active: 'mplus',
      backgroundColor: 'blue',
      viewport: {
        width: 1024, // TODO Change
        height: 768
      }
    }

    // If window is less than medium breakpoint, this.setState({ sidebar: true })

    this.onClickSpecimen = this.onClickSpecimen.bind(this)

    this.getViewportWidth = () => {
      if (window && document) {
        // Via http://stackoverflow.com/a/11744120/864799
        return {
          width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
      }
    }

    this.setViewportWidth = () => {
      var viewport = this.getViewportWidth()
      this.setState({
        viewport: viewport,
        sidebar: (viewport.width > this.props.sidebarMaxWidth) ? true : false
      })
    }

    this.handleResize = () => {
      return throttle(this.setViewportWidth, 500)
    }

  }

  componentDidMount () {
    const self = this
    self.setViewportWidth()
    window.addEventListener('resize', self.handleResize(), false)
  }

  componentWillUnmount () {
    const self = this
    window.removeEventListener('resize', self.handleResize(), false)
  }

  onClickSpecimen (e, f) {
    const self = this
    var el = e.target || false

    // TODO Do this a better way, maybe with refs?
    // TODO more possible contextual touch targets
    // console.log(self.state.viewport.width, self.props.sidebarMaxWidth)
    if (self.state.viewport.width < self.props.sidebarMaxWidth) {
      if ((self.state.sidebar === true) || (el && el.classList.contains('js-sidebar'))) {
        self.setState({
          sidebar: !self.state.sidebar
        })
      }
    }
  }

  handleSpecimenWaypoint (font, color, e) {
    const self = this

    // console.log('[waypoint]', e)
    if (e && e.currentPosition === 'inside') {
      self.setState({
        active: font,
        backgroundColor: color
      })
    }
  }

  render () {
    const self = this
    const data = self.props.data

    // TODO Switch to map like in footer
    // Not sure how to use imported React elements with this pattern yet

    return (
      <div style={{ height: 100 + '%' }} onClick={ self.onClickSpecimen }>
        <Header { ...self.props } />
        <SidebarColophon { ...self.props } font={ self.state.active } show={ self.state.sidebar } backgroundColor={ self.state.backgroundColor }>

          <div className={ 'clearfix animate-bg bg-' + self.state.backgroundColor }>

          <div className="clearfix" id="mplus">
            <Waypoint onPositionChange={self.handleSpecimenWaypoint.bind(self, 'mplus', 'blue')} />
            <SpecimenMPlus { ...self.props } />
          </div>

          <div className="clearfix" id="roundedmplus">
            <Waypoint onPositionChange={self.handleSpecimenWaypoint.bind(self, 'roundedmplus', 'aqua')} />
            <SpecimenRoundedMPlus { ...self.props } />
          </div>

          <div className="clearfix" id="hannari">
            <Waypoint onPositionChange={self.handleSpecimenWaypoint.bind(self, 'hannari', 'red')} />
            <SpecimenHannari { ...self.props } />
          </div>

          <div className="clearfix" id="kokoro">
            <Waypoint onPositionChange={self.handleSpecimenWaypoint.bind(self, 'kokoro', 'green')} />
            <SpecimenKokoro { ...self.props } />
          </div>

          <div className="clearfix" id="sawarabigothic">
            <Waypoint onPositionChange={self.handleSpecimenWaypoint.bind(self, 'sawarabigothic', 'gray')} />
            <SpecimenSawarabi { ...self.props } />
          </div>

          <div className="clearfix" id="sawarabimincho">
            <Waypoint onPositionChange={self.handleSpecimenWaypoint.bind(self, 'sawarabimincho', 'gray')} />
            <SpecimenSawarabi { ...self.props } />
          </div>

          <div className="clearfix" id="sawarabi">
            <Waypoint onPositionChange={self.handleSpecimenWaypoint.bind(self, 'sawarabi', 'gray')} />
            <SpecimenSawarabi { ...self.props } />
          </div>

          <div className="clearfix" id="nikukyu">
            <Waypoint onPositionChange={self.handleSpecimenWaypoint.bind(self, 'nikukyu', 'olive')} />
            <SpecimenNikukyu { ...self.props } />
          </div>

          <div className="clearfix" id="notosansjapanese">
            <Waypoint onPositionChange={self.handleSpecimenWaypoint.bind(self, 'notosansjapanese', 'fuchsia')} />
            <SpecimenNotoSansJapanese { ...self.props } />
          </div>

          <div className="clearfix">
            <Waypoint onPositionChange={self.handleSpecimenWaypoint.bind(self, 'notosansjapanese', 'gray')} />
            <Footer { ...self.props } />
          </div>

          </div>

        </SidebarColophon>
      </div>
    )
  }
}

Index.defaultProps = {
  // $breakpoint-md
  sidebarMaxWidth: 800
}

export default Index
