import React, { Component } from 'react'
import Form from '../Components/Login-Register'

class Home extends Component {
  render () {
    return (
      <div className = ''>
        <div className='row'>
          <div className='col s6'>
            <img className='Image' src={'http://www.youthblooddrive.com/wp-content/uploads/2016/05/healthy-diet.png'}></img>
          </div>
          <div className='col s6'>
            <Form/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
