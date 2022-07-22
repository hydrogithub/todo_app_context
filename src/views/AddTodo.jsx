import React, { useState } from "react";
import { useStore } from "../store";
import { addTodo } from "../store/actions";
import { v4 as uuid } from "uuid";

const AddTodo = () => {
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("Medium");

  const [state, dispatch] = useStore();

  const handleSubmit = () => {
    dispatch(
      addTodo({
        id: uuid(),
        name: newTask,
        completed: false,
        priority: priority,
      })
    );
    setNewTask("");
    setPriority("Medium");
  };
  return (
    <div className="form__field search_group">
      <div className="search">
        <label htmlFor="task">Thêm công việc</label>
        <input
          type="text"
          name="search"
          id="task"
          placeholder="Công việc muốn thêm..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <select
          className={
            priority === "High"
              ? "select__priority priority--High"
              : priority === "Medium"
              ? "select__priority priority--Medium"
              : "select__priority priority--Low"
          }
          name="selectPriority"
          id="selectPriority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div className="btn" onClick={handleSubmit}>
        Thêm
      </div>
    </div>
  );
};

export default AddTodo;
