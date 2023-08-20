const Todo = require('../models/Todo.model');

const getTodos = async (req, res) => {
    const todos = await Todo.find({});
    res.send(todos);
}

const getTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) return res.status(404).send({ message: "Todo doesn't exist." });
        res.send(todo);
    } catch (e) {
        res.status(500).send({ message: "Something went wrong." });
    }
}

const addTodo = async (req, res) => {
    try {
        const todo = new Todo({ title: req.body.title });
        res.send({ message: "Todo added successfully.", todo: await todo.save() });
    } catch (e) {
        if (e.name == 'ValidationError') {
            return res.status(400).send({ message: e.errors.title.message });
        }
        res.status(500).send({ message: "Something went wrong." });
    }
}

const updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, { $set: { title: req.body.title, isDone: req.body.isDone } }, { new: true, runValidators: true });
        if (!todo) return res.status(404).send({ message: "Todo doesn't exist." });
        res.send({ message: "Todo updated successfully.", todo: todo });
    } catch (e) {
        if (e.name == 'ValidationError') {
            return res.status(400).send({ message: e.errors.title.message });
        }
        res.status(500).send({ message: "Something went wrong." });
    }
}

const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) return res.status(404).send({ message: "Todo doesn't exist." });
        res.send({ message: "Todo deleted successfully.", todo: todo });
    } catch (e) {
        res.status(500).send({ message: "Something went wrong." });
    }
}

module.exports = { getTodos, getTodo, addTodo, updateTodo, deleteTodo };