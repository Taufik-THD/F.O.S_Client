import React from 'react'
import { connect } from 'react-redux'
import { logout, listScreenFoods, listScreenAdmins, listScreenChefs } from '../store/action'
import { NavLink } from 'react-router-dom'

class Sidenav extends React.Component {
  render () {
    return (
      <div className='col' >
        <ul className="sidenav sidenav-fixed teal">
          <li className='center white'>
            <img src="https://k21academy.com/wp-content/uploads/2016/08/weblogic_top_banner_small_ed2.png" style={{ width: '80%', margin: '5%' }}/>
            <h5> <b>Administrator Page</b> </h5>
            <br/>
          </li>
          <li>
            <br/>
            <a style={{ cursor:'pointer' }} onClick={ () => this.props.foodList() }>
              <i className="material-icons">restaurant_menu</i>
              <b>Food lists</b>
            </a>
            <a style={{ cursor:'pointer' }} onClick={ () => this.props.adminList() }>
              <i className="material-icons">account_circle</i>
              <b>Administrator lists</b>
            </a>
            <a style={{ cursor:'pointer' }} onClick={ () => this.props.chefList() }>
              <i className="material-icons">people</i>
              <b>Chef lists</b>
            </a>
            <NavLink to='/' style={{ cursor:'pointer' }} onClick={ () => this.props.logout() }>
              <i className="material-icons">lock</i>
              <b>Logout</b>
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return{
    foodList: () => dispatch(listScreenFoods()),
    adminList: () => dispatch(listScreenAdmins()),
    chefList: () => dispatch(listScreenChefs()),
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(Sidenav);
