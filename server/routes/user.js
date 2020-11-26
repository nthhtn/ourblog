import express from 'express';

module.exports = (app) => {

	let router = express.Router();

	router.route('/me')
		.get(async (req, res) => {
			try {
				const { _id, username, email, fullName } = req.user;
				return res.json({ success: true, result: { _id, username, email, fullName } });
			} catch (error) {
				return res.status(400).json({ success: false, error: error.message });
			}
		});

	app.use('/api/users', router);

};
