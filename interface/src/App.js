import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, connect } from 'react-redux'
import store from './store/index'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    );
  }
}

export default App;
