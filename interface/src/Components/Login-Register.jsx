import React, { Component } from 'react'
import SignIn from './Constants/SignIn'
import SignUp from './Constants/SignUp'
import { connect } from 'react-redux'
import { loginForm, registerForm } from '../store/action'

class Login extends Component {

  componentDidMount () {
    this.props.login()
  }

  render () {
    if (this.props.register) {
      return (
        <div className='Home'>
          <div className='row'>
            <SignUp/>
          </div>
        </div>
      )
    } else {
      return (
        <div className='Home'>
          <div className='row'>
            <SignIn/>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    register: state.formRegister
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(loginForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
