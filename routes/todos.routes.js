const express = require('express');
const todosControllers = require('../controllers/todos.controllers');

const router = express.Router();

router.get('/', todosControllers.getTodos);
router.get('/:id', todosControllers.getTodo);
router.post('/', todosControllers.addTodo);
router.put('/:id', todosControllers.updateTodo);
router.delete('/:id', todosControllers.deleteTodo);

module.exports = router;