const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/todoController.js");

router.get("/todo", TodoController.findAll);
router.get("/todo/:id", TodoController.findOne);
router.post("/todo", TodoController.createOne);
router.delete("/todo/:id", TodoController.updateOne);

module.exports = router;
