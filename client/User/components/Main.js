import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Post from './Post';
import CreatePost from './CreatePost';

class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Switch>
				<Route path='/dashboard' component={Home} />
				<Route path='/posts/create' component={CreatePost} />
				<Route path='/posts' component={Post} {...this.props} />
			</Switch>
		);
	}

}

export default Main;