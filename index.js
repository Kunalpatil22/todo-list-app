const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const todosRoutes = require('./routes/todos.routes');

const { port, mongodb_uri } = config;

const app = express();

mongoose.connect(mongodb_uri).then(() => {
    console.log("Database connection established.");
}).catch((err) => {
    console.error('Unable to connect database: ', err);
    process.exit(1);
});

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/todos', todosRoutes);

app.listen(port, () => {
    console.log(`Server started.`);
})