import React, { Component } from 'react';

class ArticleItem extends Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div className="col-md-12">
				<div className="blog-entry ftco-animate">
					<a href="#" className="img" style={{ backgroundImage: 'url("/assets/explore/images/image_1.jpg")' }}></a>
					<div className="text pt-2 mt-5">
						<h3 className="mb-4"><a href="#">Hawaii known as the Big Island</a></h3>
						<p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
						<div className="author mb-4 d-flex align-items-center">
							<a href="#" className="img" style={{ backgroundImage: 'url("/assets/explore/images/person_1.jpg")' }}></a>
							<div className="ml-3 info">
								<h3><a href="#">Dave Lewis</a>, <span>October 04, 2018</span></h3>
							</div>
						</div>
						<div className="meta-wrap d-md-flex align-items-center">
							<div className="half">
								<p><a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Continue Reading</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

class Sidebar extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="col-lg-4 sidebar ftco-animate">
				<div className="sidebar-box">
					<form action="#" className="search-form">
						<div className="form-group">
							<span className="icon icon-search"></span>
							<input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
						</div>
					</form>
				</div>
				<div className="sidebar-box ftco-animate">
					<h3>Categories</h3>
					<ul className="categories">
						<li><a href="#">Africa <span>(6)</span></a></li>
						<li><a href="#">Asia <span>(8)</span></a></li>
						<li><a href="#">Australia <span>(2)</span></a></li>
						<li><a href="#">Europe <span>(2)</span></a></li>
						<li><a href="#">North America <span>(7)</span></a></li>
						<li><a href="#">South America <span>(5)</span></a></li>
					</ul>
				</div>
				<div className="sidebar-box ftco-animate">
					<h3>Popular Articles</h3>
					<div className="block-21 mb-4 d-flex">
						<a className="blog-img mr-4" style={{ backgroundImage: 'url("/assets/explore/images/image_1.jpg")' }}></a>
						<div className="text">
							<h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
							<div className="meta">
								<div><a href="#"><span className="icon-calendar"></span> Oct. 04, 2018</a></div>
								<div><a href="#"><span className="icon-person"></span> Dave Lewis</a></div>
								<div><a href="#"><span className="icon-chat"></span> 19</a></div>
							</div>
						</div>
					</div>
					<div className="block-21 mb-4 d-flex">
						<a className="blog-img mr-4" style={{ backgroundImage: 'url("/assets/explore/images/image_2.jpg")' }}></a>
						<div className="text">
							<h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
							<div className="meta">
								<div><a href="#"><span className="icon-calendar"></span> Oct. 04, 2018</a></div>
								<div><a href="#"><span className="icon-person"></span> Dave Lewis</a></div>
								<div><a href="#"><span className="icon-chat"></span> 19</a></div>
							</div>
						</div>
					</div>
					<div className="block-21 mb-4 d-flex">
						<a className="blog-img mr-4" style={{ backgroundImage: 'url("/assets/explore/images/image_3.jpg")' }}></a>
						<div className="text">
							<h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
							<div className="meta">
								<div><a href="#"><span className="icon-calendar"></span> Oct. 04, 2018</a></div>
								<div><a href="#"><span className="icon-person"></span> Dave Lewis</a></div>
								<div><a href="#"><span className="icon-chat"></span> 19</a></div>
							</div>
						</div>
					</div>
				</div>
				<div className="sidebar-box ftco-animate">
					<h3>Tag Cloud</h3>
					<ul className="tagcloud">
						<a href="#" className="tag-cloud-link">dish</a>
						<a href="#" className="tag-cloud-link">menu</a>
						<a href="#" className="tag-cloud-link">food</a>
						<a href="#" className="tag-cloud-link">sweet</a>
						<a href="#" className="tag-cloud-link">tasty</a>
						<a href="#" className="tag-cloud-link">delicious</a>
						<a href="#" className="tag-cloud-link">desserts</a>
						<a href="#" className="tag-cloud-link">drinks</a>
					</ul>
				</div>
			</div>
		);
	}

}

export default class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<section className="ftco-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="row">
								{[1, 2, 3, 4, 5].map((item) => <ArticleItem key={item} />)}
							</div>
							<div className="row mt-5">
								<div className="col text-center">
									<div className="block-27">
										<ul>
											<li><a href="#">&lt;</a></li>
											<li className="active"><span>1</span></li>
											<li><a href="#">2</a></li>
											<li><a href="#">3</a></li>
											<li><a href="#">4</a></li>
											<li><a href="#">5</a></li>
											<li><a href="#">&gt;</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<Sidebar />
					</div>
				</div>
			</section>
		);
	}

}
