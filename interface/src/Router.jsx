import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Menu from './Views/Menu'
import Home from './Views/Home'

class Router extends Component {

  render(){
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={ Home }></Route>
          <Route path='/menu' component={ Menu }></Route>
        </div>
      </BrowserRouter>
    )

  }

}

export default Router
