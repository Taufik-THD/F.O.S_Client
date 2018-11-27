import React, { Component } from 'react'
import Foods from './Constants/Foods'
import Admin from './Constants/Admin'
import Chef from './Constants/Chef'
import { connect } from 'react-redux'

class Lists extends Component {
  render () {

    let screen = <Foods/>

    if (this.props.foods == true) {
      screen = <Foods/>
    } else if (this.props.admins == true ) {
      screen = <Admin/>
    } else if (this.props.chefs == true) {
      screen = <Chef/>
    }

    return (
      <div>
        { screen }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    foods: state.screenFoods,
    admins: state.screenAdmins,
    chefs: state.screenChefs
  }
}

export default connect(mapStateToProps, null)(Lists);
