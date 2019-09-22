import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import Post from './Post';
import CreatePost from './CreatePost';

class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		console.log(this.props);
	}

	render() {
		return (
			<Switch>
				<Route exact path='/dashboard' component={Home} />
				<Route path='/dashboard/posts/create' component={CreatePost} />
				<Route path='/dashboard/posts' render={() => (<Post {...this.props} />)} />
			</Switch>
		);
	}

}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(Main);
