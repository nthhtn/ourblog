import React, { Component } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RouteComponentProps } from 'react-router';
import ReactHtmlParser from 'react-html-parser';

import { getArticleByTitle } from '../actions/article';

export default class ArticleDetails extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: this.props.match.params.title
		};
	}

	async componentDidMount() {
		await this.props.dispatch(getArticleByTitle(this.state.title));
	}

	render() {
		const { current } = this.props.article;
		return (
			<section className="ftco-section ftco-degree-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 ftco-animate fadeInUp ftco-animated">
							<h2 className="mb-3 font-weight-bold">{current?.title}</h2>
							{current && <p><img src={current.coverImg} alt="" className="img-fluid" /></p>}
							{ReactHtmlParser(current?.content)}
							<div className="tag-widget post-tag-container mb-5 mt-5">
								<div className="tagcloud">
									<a href="#" className="tag-cloud-link">Life</a>
									<a href="#" className="tag-cloud-link">Sport</a>
									<a href="#" className="tag-cloud-link">Tech</a>
									<a href="#" className="tag-cloud-link">Travel</a>
								</div>
							</div>
							<div className="about-author d-flex p-4 bg-light">
								<div className="bio mr-5">
									<img src="/assets/explore/images/person_1.jpg" alt="Image placeholder" className="img-fluid mb-4" />
								</div>
								<div className="desc">
									<h3>George Washington</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

}