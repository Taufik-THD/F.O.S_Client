import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerForm, login } from '../../store/action'
import { Link } from 'react-router-dom'

class SignIn extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail (event) {
    this.setState({ email: event.target.value })
  }

  handlePassword (event) {
    this.setState({ password: event.target.value })
  }

  handleSubmit (event) {

    const adminData = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.submitLogin(adminData)
  }

  render () {
    return (
      <form style={{ marginTop: '20%'}}>
        <div className='col s10'>
          <h3><b>Sign In</b></h3>
        </div>
        <div className='input-field col s10'>
          <input id="email" type="email" value={ this.state.email } onChange={ this.handleEmail } className="validate" />
          <label htmlFor="email">Email</label>
        </div>
        <div className='input-field col s10'>
          <input id="password" type="password" value={ this.state.password } onChange={ this.handlePassword } className="validate" />
          <label htmlFor="password">Password</label>
        </div>
        <div className='col s10'>
          <Link to='/menu' onClick={ () => this.handleSubmit() }  className='btn btn-block right amber amber accent-3' style={{marginTop: '5%', marginBottom: '2%', width: '100%'}}>Sign In</Link>
          <label>For create a new Account, Sign Up <a style={{ cursor: 'pointer' }} onClick={ () => this.props.register() } ><u>here</u></a> </label>
        </div>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    register: () => dispatch(registerForm()),
    submitLogin: (payload) => dispatch(login(payload))
  }
}

export default connect(null, mapDispatchToProps)(SignIn);
