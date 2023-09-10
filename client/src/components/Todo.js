import { useState } from "react";
import todosAPI from "../api/todos";
import notification from "../lib/notification";

function Todo({ todo, deleteTodo }) {
  const [_todo, setTodo] = useState(todo);
  const [editMode, setEditMode] = useState(false);

  const handleIsDoneCheckboxChange = async () => {
    try {
      const response = await todosAPI.updateTodo(_todo._id, {
        title: _todo.title,
        isDone: !_todo.isDone,
      });
      setTodo(response.data.todo);
      setEditMode(false);
      notification.success(response.data.message);
    } catch (e) {
      notification.error(e.response.data.message);
    }
  };

  const handleEditTodoFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await todosAPI.updateTodo(_todo._id, {
        title: e.target.title.value,
        isDone: _todo.isDone,
      });
      setTodo({
        _id: response.data.todo._id,
        title: response.data.todo.title,
        isDone: response.data.todo.isDone,
      });
      setEditMode(false);
      notification.success(response.data.message);
    } catch (e) {
      notification.error(e.response.data.message);
    }
  };

  return editMode ? (
    <form
      onSubmit={handleEditTodoFormSubmit}
      className="py-2 flex gap-4 border-b-2 justify-between items-center"
    >
      <input
        className="outline-none grow"
        type="text"
        name="title"
        placeholder="Enter title"
        defaultValue={_todo.title}
      />
      <div className="flex">
        <button
          type="submit"
          className="rounded py-1 px-2 hover:bg-black hover:text-white"
        >
          Save
        </button>
        <button
          type="button"
          className="rounded py-1 px-2 text-rose-600 hover:bg-rose-600 hover:text-white"
          onClick={() => setEditMode(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  ) : (
    <li
      className="py-2 border-b-2 flex justify-between items-center"
      key={_todo._id}
    >
      <label className="flex gap-2" htmlFor={_todo.id}>
        <input
          type="checkbox"
          id={_todo.id}
          defaultChecked={_todo.isDone}
          onChange={handleIsDoneCheckboxChange}
        />
        <span className={_todo.isDone ? "line-through" : ""}>
          {_todo.title}
        </span>
      </label>
      <div className="flex">
        <button
          className="rounded py-1 px-2 hover:bg-black hover:text-white"
          onClick={() => setEditMode(true)}
        >
          Edit
        </button>
        <button
          className="rounded py-1 px-2 text-rose-600 hover:bg-rose-600 hover:text-white"
          onClick={() => deleteTodo(_todo._id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Todo;
