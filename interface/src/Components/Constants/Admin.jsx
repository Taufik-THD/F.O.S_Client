import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formAddAdmin, getAdminData } from '../../store/action'
import Loading from '../Loading'

class Admin extends Component {

  componentDidMount () {
    this.props.getAdminData()
  }

  render () {
    if (this.props.Admin != null) {
      return (
        <div>
          <div className='container'>
            <br/>
            <a onClick={ () => this.props.addNew() } className='btn btn-block'>Add new Admin</a>
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
                this.props.Admin && this.props.Admin.map(data => {
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
    } else {
      return(
        <div>
          <Loading/>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    Admin: state.allAdmin
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addNew: (payload) => dispatch(formAddAdmin()),
    getAdminData: (payload) => dispatch(getAdminData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
