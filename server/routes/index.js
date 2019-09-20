import express from 'express';
import path from 'path';

const router = express.Router();

// router.route('/dashboard')
// 	.get((req, res) => {
// 		res.sendFile(path.resolve(`${__dirname}/../views/user.html`));
// 	});

// router.route('/')
// 	.get((req, res) => {
// 		res.redirect('/dashboard');
// 	});

router.route('*')
	.get((req, res) => {
		res.sendFile(path.resolve(`${__dirname}/../views/user.html`));
	});

module.exports = router;
