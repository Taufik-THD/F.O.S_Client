import React, { Component } from 'react'
import Done from './Constants/DoneBtn'
import { updateAdmin } from '../store/action'
import { connect } from 'react-redux'
import axios from 'axios'

class addNewAdmin extends Component {

  constructor (props) {
    super (props)
    this.state = {
      username: '',
      email: '',
      password: '',
      confirm: ''
    }

    this.handleUsername = this.handleUsername.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleUsername (event) {
    this.setState({ username: event.target.value })
  }

  handleEmail (event) {
    this.setState({ email: event.target.value })
  }

  handlePassword (event) {
    this.setState({ password: event.target.value })
  }

  handleConfirm (event) {
    if (this.state.password == event.target.value) {
      this.setState({ confirm: true })
    } else {
      this.setState({ confirm: false })
    }
  }

  handleSubmit (event) {

    const newAdmin = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    axios({
      method: 'post',
      url: 'http://localhost:3000/admin',
      data: newAdmin
    }).then(({data}) => {
      this.props.updateAdmin(data.data);

      this.setState({ username: '' })
      this.setState({ email: '' })
      this.setState({ password: '' })
      this.setState({ confirm: '' })
    }).catch(err => {
      console.log(err);
    })

  }

  render () {
    return (
      <form style={{ margin: '3% 0 0 3%'}} className='s10'>
        <div className='col s10'>
          <h3> <b>___</b> </h3>
          <h3><b>Add new Admin</b></h3>
        </div>
        <div className='input-field col s11'>
          <input id="username" type="text" className="validate" value={ this.state.username } onChange={ this.handleUsername }/>
          <label htmlFor="username">Admin Name</label>
        </div>
        <div className='input-field col s11'>
          <input id="email" type="email" className="validate" value={ this.state.email } onChange={ this.handleEmail }/>
          <label htmlFor="email">Email</label>
        </div>
        <div className='input-field col s11'>
          <input id="password" type="password" className="validate" value={ this.state.password } onChange={ this.handlePassword }/>
          <label htmlFor="password">Password</label>
        </div>
        <div className='input-field col s11'>
          <input id="confirm" type="password" className="validate" onChange={ this.handleConfirm }/>
          <label htmlFor="confirm">Confirm Password</label>
        </div>
        <div className="col s11">
          <Done/>
          <a className="btn" style={{width:'48%', margin: '1% 1% 0% 1%'}} onClick={ () => this.handleSubmit() }>Submit</a>
        </div>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateAdmin: (payload) => dispatch(updateAdmin(payload))
  }
}

export default connect(null, mapDispatchToProps)(addNewAdmin);
