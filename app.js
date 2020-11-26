import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import webpack from 'webpack';
import passport from 'passport';
import { connect } from 'mongoose';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
	secret: 'ourblog_ts',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
	console.log('serialize');
	return done(null, user);
});

passport.deserializeUser((user, done) => {
	console.log('deserialize');
	return done(null, user);
});

app.use('/assets', express.static(`${__dirname}/static`));

app.use(morgan('dev'));

import config from './webpack.config';
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

const mongoURI = 'mongodb://localhost/ourblog_ts';
const options = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
};
connect(mongoURI, options).then(() => {
	console.log('MongoDB Connected...');

	require('./server/routes')(app);

	app.listen(5000, () => console.log(`Server started on port 5000`));
});
