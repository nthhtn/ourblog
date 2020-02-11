import path from 'path';

module.exports = (app) => {

	require('./post')(app);

	app.route('/dashboard/*')
		.get((req, res) => {
			res.sendFile(path.resolve(`${__dirname}/../views/user.html`));
		})

	app.route('*')
		.get((req, res) => {
			res.sendFile(path.resolve(`${__dirname}/../views/guest.html`));
		});

};
