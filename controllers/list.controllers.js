const db = require('../models');
const crudControllers = require('../utils/crud');

const controllers = crudControllers(db.List);



controllers.getTodos = async (req, res) => {
  const list = await db.List.findAll({ where: { id: req.params.id } });
  const todos = await list.getTodos();
  res.json(todos);
};
controllers.getAllByCreator = async (req, res) => {
  const lists = await db.List.findAll({ where: { creator_id: req.auth.user.id } });
  // const todos = await list.getTodos();
  res.json(lists);
};
controllers.addTodo = async (req, res) => {
  const { text, is_complete } = req.body;
  const list = await db.List.findAll({ where: { id: req.params.id } });
  const result = await list.createTodo({ text, is_complete });
  res.json(result);
};

module.exports = controllers;
