const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

const toggleTodoList = (id) => {
  return {
    type: "todoList/toggleTodoList",
    payload: id,
  };
};

const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export { addTodo, toggleTodoList, searchFilterChange, statusFilterChange };
