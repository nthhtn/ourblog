module.exports = (sequelize, DataTypes) => {

	const Post = sequelize.define('Post', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		title: DataTypes.STRING,
		content: DataTypes.STRING
	});

	Post.associate = (models) => {
		models.Post.belongsTo(models.User, {
			foreignKey: 'AuthorId',
			onDelete: 'CASCADE'
		});
	};

	Post.associate = (models) => {
		models.Post.belongsTo(models.Category, {
			onDelete: 'CASCADE'
		});
	};

	return Post;

};
