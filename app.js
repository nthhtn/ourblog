import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import webpack from 'webpack';
import db from './server/models';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/assets', express.static(`${__dirname}/static`));

app.use(morgan('dev'));

import config from './webpack.config';
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

require('./server/routes')(app);

const syncOptions = {};
// const syncOptions = { force: true };
db.sequelize.sync(syncOptions).then(async (connection) => {
	await (require('./server/lib/db_init')(connection));
	console.log('Database setup complete...');
	app.listen(3000, () => console.log('Our Blog is listening on port 3000...'));
});
