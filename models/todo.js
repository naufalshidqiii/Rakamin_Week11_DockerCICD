"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Todo extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Todo.init(
		{
			title: { type: DataTypes.STRING, allowNull: false },
			details: { type: DataTypes.STRING, allowNull: false },
			status: { type: DataTypes.STRING, allowNull: false },
		},
		{
			sequelize,
			modelName: "Todo",
		}
	);
	return Todo;
};
