import React, { Component } from 'react'
import Sidenav from '../Components/SideNav'
import Lists from '../Components/Lists'
import AddNewAdmin from '../Components/AddNewAdmin'
import AddNewChef from '../Components/AddNewChef'
import AddNewMenu from '../Components/AddNewMenu'
import { connect } from 'react-redux'
import { listScreen } from '../store/action'
import Loading from '../Components/Loading'

class Menu extends Component {

  componentDidMount () {
    this.props.listMenu
  }

  render () {
    let screen = <Lists/>
    if (this.props.addChef == true) {
      screen = <AddNewChef/>
    } else if (this.props.addAdmin == true) {
      screen = <AddNewAdmin/>
    } else if (this.props.addMenu == true) {
      screen = <AddNewMenu/>
    } else {
      screen = <Lists/>
    }

    return (
      <div className='row'>
        <div className='col s3' >
          <Sidenav/>
        </div>
        <div className='col s9' >
          { screen }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    addChef: state.addChefForm,
    addAdmin: state.addAdminForm,
    addMenu: state.addMenuForm
  }
}

function mapDispatchToProps(dispatch) {
  return {
    listMenu: (payload) => dispatch(listScreen())
  }
}

export default connect(mapStateToProps, null)(Menu);
