import axios from "axios";

const getTodos = async () => {
    return await axios.get('/api/todos');
}

const addTodo = async (data) => {
    return await axios.post('/api/todos', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const updateTodo = async (id, data) => {
    return await axios.put('/api/todos/' + id, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const deleteTodo = async (id) => {
    return await axios.delete('/api/todos/' + id);
}

const todosAPI = { getTodos, addTodo, updateTodo, deleteTodo };
export default todosAPI;