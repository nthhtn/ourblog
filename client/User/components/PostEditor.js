import React, { Component } from 'react';
import { createPost } from '../actions/Post';

var self;

class CreatePost extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		self = this;
	}

	componentDidMount() {
		jQuery(function () { One.helpers(['summernote']); });
	}

	async createPost() {
		const id = Date.now();
		const newpost = Object.assign({}, {
			title: `Posted at ${id}`,
			content: `This is a post created at ${id}`,
			categoryId: 1
		});
		await self.props.dispatch(createPost(newpost));
		self.props.changeMode('view');
	}

	render() {
		return (
			<main id="main-container">
				<div className="bg-body-light">
					<div className="content content-full">
						<div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
							<h1 className="flex-sm-fill h3 my-2">Viết bài</h1>
						</div>
					</div>
				</div>
				<div className="content">
					<div className="block">
						<div className="block-content block-content-full">
							<div className="js-summernote"></div>
							<button type="button" className="btn btn-primary mr-1 mb-3" style={{ marginTop: '15px' }} onClick={() => self.createPost()}>
								<i className="fa fa-plus-square mr-1"></i> Đăng bài
							</button>
							<button type="button" className="btn btn-secondary mr-1 mb-3" style={{ marginTop: '15px' }} onClick={() => self.props.changeMode('view')}>
								<i className="fa fa-stop-circle mr-1"></i> Hủy
							</button>
						</div>
					</div>
				</div>
			</main>
		);
	}

}

export default CreatePost;
