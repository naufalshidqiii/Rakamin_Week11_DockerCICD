const { Todo } = require("../models");

class TodoController {
	static findAll = async (req, res, next) => {
		try {
			const data = await Todo.findAll({
				where: {
					status: "NOT DONE",
				},
			});
			res.status(200).json(data);
		} catch (err) {
			next(err);
		}
	};

	static findOne = async (req, res, next) => {
		const { id } = req.params;

		try {
			const data = await Todo.findOne({
				where: {
					id,
				},
			});

			if (data) {
				//console.log(data);
				res.status(200).json(data);
			} else {
				throw { name: "ErrorNotFound" };
			}
		} catch (err) {
			next(err);
		}
	};

	static createOne = async (req, res, next) => {
		try {
			const { title, details, status } = req.body;

			const data = await Todo.create({
				title,
				details,
				status,
			});

			res.status(201).json(data);
		} catch (err) {
			next(err);
		}
	};

	static updateOne = async (req, res, next) => {
		try {
			const { id } = req.params;

			const data = await Todo.update(
				{
					status: "DONE",
				},
				{
					where: {
						id,
					},
				}
			);

			if (data[0] === 1) {
				res.status(200).json({
					message: "Task DONE",
				});
			} else {
				throw { name: "ErrorNotFound" };
			}
		} catch (err) {
			next(err);
		}
	};
}

module.exports = TodoController;
