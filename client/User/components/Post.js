import React, { Component } from 'react';
import { listPost } from '../actions/Post';
import PostEditor from './PostEditor';

class PostTable extends Component {

	constructor(props) {
		super(props);
		this.state = {};
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
							<button type="button" className="btn btn-success mr-1 mb-3" onClick={() => this.props.changeMode('add')}>
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
											<PostItem editPost={this.props.changeMode} key={post.id} title={post.title} content={post.content}
												category={post.category} author={post.author} {...this.props} />
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

	editPost(){
		this.props.changeMode('edit');
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
						<button onClick={() => this.editPost()}
							type="button" className="btn btn-sm btn-primary js-tooltip-enabled" data-toggle="tooltip" title="" data-original-title="Edit">
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

class Post extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mode: 'view',
			data: null
		};
		this.changeMode = this.changeMode.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(listPost());
	}

	changeMode(mode) {
		this.setState({ mode });
	}

	render() {
		return this.state.mode === 'view' ?
			(<PostTable changeMode={this.changeMode} {...this.props} />) : (<PostEditor changeMode={this.changeMode} {...this.props} />);
	}

}

export default Post;
