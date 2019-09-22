import { sha512HashPassword } from './password';

module.exports = async (connection) => {

	const { User, Category } = connection.models;
	const { salt, password } = sha512HashPassword('123456789');
	const defaultUser = Object.assign({}, {
		email: 'thehien115@gmail.com',
		username: 'hien.nguyen',
		salt, password
	});
	const defaultCategories = [
		Object.assign({}, { name: 'food', displayName: 'food' }),
		Object.assign({}, { name: 'travel', displayName: 'travel' }),
		Object.assign({}, { name: 'romance', displayName: 'romance' })
	];
	const listUser = await User.findAll();
	if (listUser.length === 0) { await User.create(defaultUser); }
	const listCategory = await Category.findAll();
	if (listCategory.length === 0) { await Category.bulkCreate(defaultCategories); }

};
