import { Schema, model } from 'mongoose';

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		unique: true
	},
	salt: {
		type: String,
		required: true
	},
	fullName: {
		type: String,
		required: true
	}
});

export default model('User', userSchema);
