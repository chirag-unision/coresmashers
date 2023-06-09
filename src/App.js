import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './Home.style.css';
import Login from './components/Login';
import Home from './components/Homepage';
import Clng from './components/Challenge'

export default class App extends Component {
  constructor(props) {
    super(props);
    const host= window.location.hostname;
    this.api= {
      signup_api: `http://${host}:80/php/signup.php`,
      signin_api: `http://${host}:80/php/engine_r.php`
    }
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={()=> <Login api={this.api} />} />
            <Route path="/Home" component={()=> <Home />} />
            <Route path="/ChallangeLive" component={()=> <Clng />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

