import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import ArticleView from './Article';

class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Switch>
			<Route exact path='/dashboard/articles' render={() => (<ArticleView {...this.props} />)} />
			<Route path='/dashboard' component={Home} />
			<Route path='/dashboard/*' component={Home} />
			</Switch>
		);
	}

}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(Main);
