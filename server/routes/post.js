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
			const result = await Post.findAll({ order: [['createdAt', 'DESC']], raw: true });
			return res.json({ success: true, result });
		});

	router.route('/:id')
		.put(async (req, res) => {
			const { id } = req.params;
			try {
				await Post.update(req.body, { where: { id } });
				const result = await Post.findAll({ where: { id } }, { raw: true });
				return res.json({ success: true, result: result[0] });
			} catch (error) {
				return res.json({ success: true, error: error.message });
			}
		})
		.delete(async (req, res) => {
			const { id } = req.params;
			const result = await Post.destroy({ where: { id } }, { raw: true })
			console.log(result);
			return res.json({ success: true });
		});

	app.use('/api/posts', router);

};
