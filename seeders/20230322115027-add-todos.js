"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert(
			"Todos",
			[
				{
					title: "Homework Rakamin",
					details: "Week 11 CI/CD",
					status: "DONE",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: "Nyuci Piring",
					details: "250 Piring Kotor Kondangan",
					status: "DONE",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: "Nyapu Halaman",
					details: "1 Hektare Halaman Tetangga",
					status: "NOT DONE",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete("Todos", null, {});
	},
};
