import { useEffect, useState } from "react";
import todosAPI from '../api/todos';
import notification from "../lib/notification";
import Todo from "./Todo";

function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await todosAPI.getTodos();
                setTodos(response.data);
            } catch (e) {
                notification.error(e.response.data.message);
            }
        })()
    }, []);

    const deleteTodo = async (id) => {
        try {
            const response = await todosAPI.deleteTodo(id);
            setTodos(todos.filter(todo => todo._id != response.data.todo._id));
            notification.success(response.data.message);
        } catch (e) {
            notification.error(e.response.data.message);
        }
    }

    const handleAddTodoFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await todosAPI.addTodo({ title: e.target.title.value });
            setTodos([...todos, response.data.todo]);
            e.target.title.value = '';
            notification.success(response.data.message);
        } catch (e) {
            notification.error(e.response.data.message);
        }
    }

    return (
        <div className="px-4">
            <ul>
                {todos.map(todo => <Todo key={todo._id} todo={todo} deleteTodo={deleteTodo} />)}
                <form onSubmit={handleAddTodoFormSubmit} className="py-2 flex gap-4 justify-between items-center">
                    <input className="outline-none border-b-2 pb-2 grow" type="text" name="title" placeholder="Enter title" />
                    <button type="submit" className="rounded px-2 py-1 mb-2 hover:bg-black hover:text-white">Add Todo</button>
                </form>
            </ul>
        </div>
    )
}

export default Todos