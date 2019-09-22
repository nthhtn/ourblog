import express from 'express';
import { Post } from '../models';

module.exports = (app) => {

	let router = express.Router();

	router.route('/')
		.post(async (req, res) => {
			const result = await Post.create(req.body);
			return res.json({ success: true, result });
		})
		.get(async (req, res) => {
			const result = await Post.findAll({});
			return res.json({ success: true, result });
		});

	app.use('/api/posts', router);

};
