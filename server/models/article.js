import { Schema, model } from 'mongoose';

const articleSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	coverImg: {
		type: String
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: String,
		default: Date.now
	},
	authorId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	categoryId: {
		type: Schema.Types.ObjectId,
		ref: 'Category'
	}
});

export default model('Article', articleSchema);
