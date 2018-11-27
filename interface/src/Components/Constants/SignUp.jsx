import React, { Component } from 'react'
import { loginForm } from '../../store/action'
import { connect } from 'react-redux'

class SignUp extends Component {
  render () {
    return (
      <form style={{ marginTop: '10%'}}>
        <div className='col s10'>
          <h3><b>Sign Up</b></h3>
        </div>
        <div className='input-field col s10'>
          <input id="username" type="text" className="validate" />
          <label htmlFor="username">Username</label>
        </div>
        <div className='input-field col s10'>
          <input id="email" type="email" className="validate" />
          <label htmlFor="email">Email</label>
        </div>
        <div className='input-field col s10'>
          <input id="password" type="password" className="validate" />
          <label htmlFor="password">Password</label>
        </div>
        <div className='input-field col s10'>
          <input id="confirm" type="password" className="validate" />
          <label htmlFor="confirm">Confirm Password</label>
        </div>
        <div className='col s10'>
          <a className='btn btn-block right amber amber accent-3' style={{marginTop: '5%', marginBottom: '2%', width: '100%'}}>Sign In</a>
          <label>Already have an Account?, Sign In <a style={{ cursor: 'pointer' }} onClick={ () => this.props.register() }><u>here</u></a> </label>
        </div>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    register: () => dispatch(loginForm())
  }
}

export default connect(null, mapDispatchToProps)(SignUp);
