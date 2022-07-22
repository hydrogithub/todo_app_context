import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Filter from "./Filter";
import { useStore } from "../store";
import { statusFilterChange, toggleTodoList } from "../store/actions";

const statusList = [
  { name: "ALL", display: "Tất cả" },
  { name: "Completed", display: "Đã hoàn thành" },
  { name: "Todo", display: "Chưa hoàn thành" },
];

const Layout = () => {
  const [filterStatus, setFilterStatus] = useState("ALL");

  const [state, dispatch] = useStore();
  const todoList = state.todoList.filter((todo) => {
    if (state.filters.status === "ALL") {
      console.log("run if");
      return todo.name
        .toLowerCase()
        .includes(state.filters.search.toLowerCase());
    } else {
      console.log("run else");
      return (
        todo.name.toLowerCase().includes(state.filters.search.toLowerCase()) &&
        (state.filters.status === "Completed"
          ? todo.completed
          : !todo.completed)
      );
    }
  });

  const toggleTodo = (id) => {
    dispatch(toggleTodoList(id));
  };

  return (
    <div className="container">
      <div className="main">
        <div className="top">
          <h1>TODO APP DEMO</h1>
          <form>
            <Filter />

            <div className="form__field status_group">
              <label>Lọc theo trạng thái</label>
              <div className="status_content">
                {statusList.map((item, index) => (
                  <div className="status" key={index}>
                    <input
                      type="radio"
                      name="status"
                      id={item.name}
                      value={item.name}
                      checked={item.name === filterStatus}
                      onChange={(e) => {
                        setFilterStatus(e.target.value);
                        dispatch(statusFilterChange(e.target.value));
                      }}
                    />
                    <label htmlFor={item.name}>{item.display}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="list__task">
              {todoList.length === 0 ? (
                <h3 className="text-center">Không có công việc nào</h3>
              ) : (
                todoList.map((item) => (
                  <div className="task" key={item.id}>
                    <div className="content">
                      <input
                        type="checkbox"
                        id={item.id}
                        defaultChecked={item.completed}
                        onClick={() => toggleTodo(item.id)}
                      />
                      <label
                        className={item.completed ? "strike" : ""}
                        htmlFor={item.id}
                      >
                        {item.name}
                      </label>
                    </div>
                    <div className={"priority priority--" + item.priority}>
                      {item.priority}
                    </div>
                  </div>
                ))
              )}
            </div>
          </form>
        </div>
        <div className="bottom">
          <AddTodo />
        </div>
      </div>
    </div>
  );
};

export default Layout;
