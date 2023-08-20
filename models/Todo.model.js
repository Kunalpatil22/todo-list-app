const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: [1, 'Title cannot be empty.'],
        maxLength: [64, 'Title length is limited to 64 characters.'],
        required: [true, 'Title is required.']
    },
    isDone: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Todo', todoSchema, 'todos');