const router = require('express').Router();
const listControllers = require('../../controllers/list.controllers.js');
const  auth = require ('../../utils/auth')

router
  .route('/')
  .get(auth.required,listControllers.getAllByCreator)
  .post(listControllers.create);

router
  .route('/:id')
  .get(listControllers.getOne)
  .put(listControllers.updateOne)
  .delete(listControllers.deleteOne);

router
  .route('/:id/todos')
  .get(listControllers.getTodos)
  .post(listControllers.addTodo);

module.exports = router;
