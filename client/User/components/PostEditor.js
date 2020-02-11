import React, { Component } from 'react';
import { createPost, updatePost } from '../actions/Post';

var self;

export default class PostEditor extends Component {

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
		const title = $('#input-title').val().trim();
		const content = $('#summernote').summernote('code');
		const newpost = Object.assign({}, {
			title, content,
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
							<h1 className="flex-sm-fill h3 my-2">Write a new blog post</h1>
						</div>
					</div>
				</div>
				<div className="content">
					<div className="block">
						<div className="block-content block-content-full">
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label htmlFor="input-title">Blog title</label>
										<input type="text" className="form-control" id="input-title" placeholder="Title" />
									</div>
									<div className="js-summernote" id="summernote"></div>
									<div className="row" style={{ margin: 0 }}>
										<div className="form-group col-md-6" style={{ paddingLeft: 0 }}>
											<label>Category</label>
											<select className="custom-select">
												<option value="0">Please select</option>
												<option value="1">Option #1</option>
												<option value="2">Option #2</option>
												<option value="3">Option #3</option>
											</select>
										</div>
										<div className="form-group col-md-6">
											<label className="d-block" htmlFor="input-image">Cover image</label>
											<input type="file" id="input-image" />
										</div>
									</div>
								</div>
								<div className="col-md-6">
								</div>
							</div>

							<button type="button" className="btn btn-primary mr-1 mb-3"
								onClick={this.props.editorMode === 'add' ? this.createPost : this.updatePost}>
								<i className="fa fa-plus-square mr-1"></i> Submit
							</button>
							<button type="button" className="btn btn-secondary mr-1 mb-3" onClick={() => this.props.changeMode('view')}>
								<i className="fa fa-stop-circle mr-1"></i> Cancel
							</button>
						</div>
					</div>
				</div>
			</main>
		);
	}

}
