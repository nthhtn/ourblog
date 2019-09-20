module.exports = (sequelize, DataTypes) => {

	const User = sequelize.define('User', {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4
		},
		email: DataTypes.STRING,
		username: DataTypes.STRING,
		password: DataTypes.STRING,
		lastPost: DataTypes.DATE
	});

	User.associate = (models) => {
		models.User.hasMany(models.Post, { foreignKey: 'AuthorId' });
	};

	return User;

};
