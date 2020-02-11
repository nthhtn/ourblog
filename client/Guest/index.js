import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Main from './components/Main';
import store from './store';

const rootComponent = (
	<Provider store={store}>
		<BrowserRouter>
			<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
				<div className="container">
					<a className="navbar-brand" href="index.html">Silly thing</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="oi oi-menu"></span> Menu</button>
					<div className="collapse navbar-collapse" id="ftco-nav">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item"><a href="contact.html" className="nav-link">Home</a></li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Our diary</a>
								<div className="dropdown-menu" aria-labelledby="dropdown04">
									<a className="dropdown-item" href="post-right-sidebar.html">Silly things</a>
									<a className="dropdown-item" href="post-left-sidebar.html">Silly love</a>
									<a className="dropdown-item" href="post-no-sidebar.html">Silly trips</a>
								</div>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Self story</a>
								<div className="dropdown-menu" aria-labelledby="dropdown04">
									<a className="dropdown-item" href="destination.html">Silly Gf</a>
									<a className="dropdown-item" href="tag.html">Silly Bf</a>
								</div>
							</li>
							<li className="nav-item"><a href="contact.html" className="nav-link">About Us</a></li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="hero-wrap js-fullheight" style={{ backgroundImage: 'url("/assets/explore/images/bg_3.jpg")' }} data-stellar-background-ratio="0.5">
				<div className="overlay"></div>
				<div className="container">
					<div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
						<div className="col-md-9 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
							<h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Two silly person</h1>
							<p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Some silly things, many silly moments, with one silly love</p>
						</div>
					</div>
				</div>
			</div>
			<Main />
			<footer className="ftco-footer ftco-bg-dark ftco-section">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<p>Copyright &copy; All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
						</div>
					</div>
				</div>
			</footer>
		</BrowserRouter>
	</Provider>
);

render(rootComponent, document.getElementById('root'));
