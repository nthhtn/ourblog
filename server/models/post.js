module.exports = (sequelize, DataTypes) => {

	const Post = sequelize.define('Post', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		title: DataTypes.STRING,
		content: DataTypes.STRING
	});

	Post.associate = (models) => {
		models.Post.belongsTo(models.User, {
			foreignKey: 'authorId',
			onDelete: 'CASCADE'
		});
	};

	Post.associate = (models) => {
		models.Post.belongsTo(models.Category, {
			foreignKey: 'categoryId',
			onDelete: 'CASCADE'
		});
	};

	return Post;

};
