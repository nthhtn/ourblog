import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreatePost extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		jQuery(function () { One.helpers(['summernote']); });
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
							<button type="button" className="btn btn-primary mr-1 mb-3" style={{ marginTop: '15px' }}>
								<i className="fa fa-plus-square mr-1"></i> Đăng bài
							</button>
							<Link to='/posts'>
								<button type="button" className="btn btn-secondary mr-1 mb-3" style={{ marginTop: '15px' }}>
									<i className="fa fa-stop-circle mr-1"></i> Hủy
								</button>
							</Link>
						</div>
					</div>
				</div>
			</main>
		);
	}

}

export default CreatePost;
