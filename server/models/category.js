module.exports = (sequelize, DataTypes) => {

	const Category = sequelize.define('Category', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		name: DataTypes.STRING
	});

	Category.associate = (models) => {
		models.Category.hasMany(models.Post, { foreignKey: 'CategoryId' });
	};

	return Category;

};
