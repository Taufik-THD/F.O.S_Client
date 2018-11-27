import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateMenu } from '../store/action'
import Done from './Constants/DoneBtn'
import axios from 'axios'

class AddMenu extends Component {

  constructor (props) {
    super (props)
    this.state = {
      description: '',
      image: '',
      price: '',
      duration: ''
    }

    this.handleDuration = this.handleDuration.bind(this)
    this.handlePrice = this.handlePrice.bind(this)
    this.handleDescription = this.handleDescription.bind(this)
    this.handleImage = this.handleImage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.filename = this.filename.bind(this)

  }

  handleDuration (event) {
    this.setState({ duration: event.target.value })
  }

  handlePrice (event) {
    this.setState({ price: event.target.value })
  }

  handleDescription (event) {
    this.setState({ description: event.target.value })
  }

  handleImage (event) {
    this.setState({ image: event.target.value })
  }

  filename (event) {
    this.setState({ image: event.target.files[0] })
  }

  handleSubmit (event) {

    let formData = new FormData()

    formData.append('file', this.state.image)
    formData.append('duration', this.state.duration)
    formData.append('price', this.state.price)
    formData.append('description', this.state.description)

    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    const url = 'http://localhost:3000/menu'

    axios.post(url, formData, config)
      .then(({data}) => {
        this.props.updateItems(data.data);

        this.setState({ duration: '' })
        this.setState({ price: '' })
        this.setState({ description: '' })
        this.setState({ image: '' })
      })
      .catch(error => {
          console.log(error);
      });

  }

  render () {
    return (
      <div className="s10">
        <div style={{ marginLeft: '4%' }}>
          <h3> <b>___</b> </h3>
          <h3><b>Add New Menu</b></h3>
        </div>
        <form className="col s11" style={{ margin: '3% 0 0 3%' }}>
          <div className="row">
            <div className="input-field col s12">
              <input id="description" type="text" value={ this.state.description } onChange={ this.handleDescription } className="validate" />
              <label htmlFor="description">Description</label>
            </div>
            <div className="input-field col s6">
              <input id="price" type="text" value={ this.state.price } onChange={ this.handlePrice } className="validate" />
              <label htmlFor="price">Food Price</label>
            </div>
            <div className="input-field col s6">
              <textarea id="duration" value={ this.state.duration } onChange={ this.handleDuration } className="materialize-textarea"></textarea>
              <label htmlFor="duration">Duration</label>
            </div>
            <div className="input-field col s12">
              <div className="file-field input-field">
                <div className="btn">
                  <span>Image</span>
                  <input type="file" onChange={ this.filename } />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" value={ this.state.image } />
                </div>
              </div>
            </div>
            <div className="col s12">
              <Done/>
              <a className="btn" style={{width:'48%', margin: '1% 1% 0% 1%'}} onClick={ () => this.handleSubmit() }>Submit</a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateItems: (payload) => dispatch(updateMenu(payload))
  }
}

export default connect(null, mapDispatchToProps)(AddMenu);
