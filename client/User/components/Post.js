import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createPost, listPost } from '../actions/Post';

var self;

class Post extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		self = this;
	}

	createPost() {
		const id = Date.now();
		const newpost = Object.assign({}, {
			title: `Posted at ${id}`,
			content: `This is a post created at ${id}`,
			categoryId: 1,
			authorId: 'c179b4c7-f7cf-4600-be18-da83f3d28b77'
		});
		self.props.dispatch(createPost(newpost));
	}

	render() {
		return (
			<main id="main-container">
				<div className="bg-body-light">
					<div className="content content-full">
						<div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
							<h1 className="flex-sm-fill h3 my-2">Danh sách bài viết</h1>
						</div>
					</div>
				</div>
				<div className="content">
					<div className="block">
						<div className="block-content">
							<button type="button" className="btn btn-success mr-1 mb-3" onClick={this.createPost.bind(this)}>
								<i className="fa fa-fw fa-plus mr-1"></i> Viết bài
							</button>
							<div className="table-responsive">
								<table className="table table-bordered table-striped table-vcenter">
									<thead>
										<tr>
											<th className="text-center" style={{ width: '5%' }}>#</th>
											<th style={{ width: '20%' }}>Title</th>
											<th style={{ width: '40%' }}>Content</th>
											<th style={{ width: '10%' }}>Category</th>
											<th className="text-center" style={{ width: '20%' }}><i className="far fa-user"></i></th>
											<th className="text-center" style={{ width: '15%' }}>Actions</th>
										</tr>
									</thead>
									<tbody>
										{this.props.post.listPost.map((post) =>
											<PostItem key={post.id} title={post.title} content={post.content} category={post.category} author={post.author} />
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}

}

class PostItem extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<tr>
				<td className="text-center">{this.props.id}</td>
				<td className="font-w600 font-size-sm">{this.props.title}</td>
				<td className="font-size-sm">{this.props.content}</td>
				<td>{this.props.category}</td>
				<td className="text-center">{this.props.author}</td>
				<td className="text-center">
					<div className="btn-group">
						<button type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title="" data-original-title="Edit">
							<i className="fa fa-fw fa-pencil-alt"></i>
						</button>
						<button type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title="" data-original-title="Delete">
							<i className="fa fa-fw fa-times"></i>
						</button>
					</div>
				</td>
			</tr>
		);
	}

}

export default Post;
