const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:JT52L8MI2X77QIlg@cluster0.alqyusn.mongodb.net/todo-app");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}