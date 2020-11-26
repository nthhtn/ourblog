require('dotenv');
import { connect } from "mongoose";

const connectDB = async () => {
	try {
		const mongoURI = 'mongodb://localhost/ourblog_ts';
		const options = {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		};
		await connect(mongoURI, options);
		console.log("MongoDB Connected...");
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

export default connectDB;
