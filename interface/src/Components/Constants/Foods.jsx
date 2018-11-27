import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formAddMenu, setMenu } from '../../store/action'
import Loading from '../Loading'
import axios from 'axios'

class Foods extends Component {

  componentDidMount () {
    this.props.getMenu()
  }

  deleteItem (id) {
    axios({
      method: 'delete',
      url: `http://localhost:3000/menu/${id}`,
      params: id
    }).then(({data}) => {
      this.props.getMenu()
    }).catch(err => {
      console.log(err);
    })
  }

  render () {
    if (this.props.items != null) {
      return (
        <div className="row">
          <div className='container'>
            <br/>
            <a className='btn btn-block' onClick={ () => this.props.addMenuForm() }>Add new Menu</a>
            <br/>
          </div>
          <hr/>
          {
            this.props.items && this.props.items.map((data) => {
              return(
                <div className="col s4" key={data.id}>
                  <div className="card">
                    <div className="card-image">
                      <img src={ data.image } style={{ height: '180px' }}/>
                    </div>
                    <div className="card-content">
                      <p style={{ fontSize: '20px'}}><b>{data.description}</b></p>
                      <p>Rp. { data.price.toLocaleString() },-</p>
                    </div>
                    <div className="card-action center">
                      <a className='btn' style={{ margin: '2%', width: '40%' }}>Edit</a>
                      <a className='btn' style={{ margin: '2%', width: '40%' }} onClick={ () => this.deleteItem(data.id) }>Remove</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
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
    items: state.allMenu
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addMenuForm: (payload) => dispatch(formAddMenu(payload)),
    getMenu: (payload) => dispatch(setMenu(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Foods);
