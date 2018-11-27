import React, { Component } from 'react';
import logo1 from '../logo.svg'
/**
 * ComponentName
 */
export class Loading extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <img className='load' src={logo1} />
    )
  }

}

export default Loading;
