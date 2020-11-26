import express from 'express';
import multer from 'multer';
import path from 'path';

import Article from '../models/article';

const folder = `${__dirname}/../../../static/uploads`;

module.exports = (app) => {

	let router = express.Router();

	router.route('/')
		.post(
			multer({
				storage: multer.diskStorage({
					destination: path.resolve(folder, 'img/cover'),
					filename: (req, file, callback) => {
						const imageId = mongoose.Types.ObjectId();
						const nameArr = file.originalname.split('.');
						const ext = nameArr[nameArr.length - 1];
						return callback(null, `${imageId}.${ext}`);
					}
				})
			}).single('file'),
			async (req, res) => {
				const { title, content } = req.body;
				const fields = { title, content, coverImg: `/assets/uploads/img/cover/${req.file.filename}` };
				const article = new Article(fields);
				await article.save();
				return res.json({ success: true, result: article });
			})
		.get(async (req, res) => {
			const result = await Article.find({}).exec();
			return res.json({ success: true, result });
		});

	router.route('/title/:title')
		.get(async (req, res) => {
			const article = await Article.findOne({ title: req.params.title });
			return res.json({ success: true, result: article });
		})

	app.use('/api/articles', router);

};
