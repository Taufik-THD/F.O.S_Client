import React, { Component } from 'react'
import { formAddChef, getChefData } from '../../store/action'
import { connect } from 'react-redux'

class Chef extends Component {

  componentDidMount () {
    this.props.getChefData()
  }

  render () {
    return (
      <div>
        <div className='container'>
          <br/>
          <a onClick={ () => this.props.addNew() } className='btn btn-block'>Add new Chef</a>
          <br/>
        </div>
        <hr/>
        <table className="striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.Chef && this.props.Chef.map(data => {
                return (
                  <tr key={ data.id }>
                    <td>{ data.username }</td>
                    <td>{ data.email }</td>
                    <td className='right' style={{ cursor: 'pointer' }}>
                      <div className='col s6' >
                        <i className="material-icons">edit</i>
                      </div>
                      <div className='col s6' >
                        <i className="material-icons">delete</i>
                      </div>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    Chef: state.allChef
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNew: (payload) => dispatch(formAddChef()),
    getChefData: (payload) => dispatch(getChefData(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chef);
