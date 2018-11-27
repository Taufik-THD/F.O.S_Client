import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cancelAll } from '../../store/action'

class Done extends Component {
  render () {
    return (
      <a onClick={() => this.props.cancel() } className="btn" style={{width:'48%', margin: '1% 1% 0% 1%'}} >Done</a>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    cancel: (payload) => dispatch(cancelAll())
  }
}

export default connect(null, mapDispatchToProps)(Done);
