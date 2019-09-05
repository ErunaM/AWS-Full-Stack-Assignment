import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NavigationBar from './NavBar';
import Graph from './Graph';
import Home from './home';

import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
	render() {
		return (
      <div>

          <NavigationBar />
          <BrowserRouter className="container">
						<Route exact path="/graph" component={Graph}/>
						<Route exact path="/" component={Home}/>
						

				</BrowserRouter>
      </div>
		);
	}
}

export default connect(null, actions)(App);
