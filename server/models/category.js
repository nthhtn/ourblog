module.exports = (sequelize, DataTypes) => {

	const Category = sequelize.define('Category', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		displayName: DataTypes.STRING
	});

	Category.associate = (models) => {
		models.Category.hasMany(models.Post, { foreignKey: 'categoryId' });
	};

	return Category;

};
