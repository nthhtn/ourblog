import React, { Component } from 'react';
import { createPost, updatePost } from '../actions/Post';

var self;

class PostEditor extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		self = this;
	}

	componentDidMount() {
		jQuery(() => {
			One.helpers(['summernote']);
			$('#summernote').summernote('code', self.props.postContent);
		});
	}

	async createPost() {
		const id = Date.now();
		const newpost = Object.assign({}, {
			title: `Posted at ${id}`,
			content: `This is a post created at ${id}`,
			categoryId: 1
		});
		await self.props.dispatch(createPost(newpost));
		self.props.changeMode('view', { id: null, title: '', content: '', category: null });
	}

	async updatePost() {
		const id = self.props.postId;
		const content = `${self.props.postContent}\n and updated at ${Date.now()}`;
		await self.props.dispatch(updatePost(id, { content }));
		self.props.changeMode('view', { id: null, title: '', content: '', category: null });
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
							<button type="button" className="btn btn-primary mr-1 mb-3"
								onClick={this.props.editorMode === 'add' ? this.createPost : this.updatePost}>
								<i className="fa fa-plus-square mr-1"></i> Đăng bài
							</button>
							<button type="button" className="btn btn-secondary mr-1 mb-3" onClick={() => this.props.changeMode('view')}>
								<i className="fa fa-stop-circle mr-1"></i> Hủy
							</button>
							<div className="js-summernote" id="summernote"></div>
						</div>
					</div>
				</div>
			</main>
		);
	}

}

export default PostEditor;
