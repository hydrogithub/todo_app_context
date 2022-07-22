const initialState = {
  filters: {
    search: "",
    status: "ALL",
    priority: [],
  },
  todoList: [
    { id: 0, name: "Learn Redux", completed: true, priority: "High" },
    {
      id: 1,
      name: "Learn Redux-toolkit",
      completed: false,
      priority: "Medium",
    },
    { id: 2, name: "Learn Redux-persist", completed: false, priority: "Low" },
    { id: 3, name: "Learn ABC", completed: false, priority: "Low" },
    { id: 4, name: "Learn XYZ", completed: false, priority: "Low" },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "todoList/toggleTodoList":
      const newTodoList = state.todoList;
      const filnalList = newTodoList.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });

      return {
        ...state,
        todoList: [...filnalList],
      };
    case "filters/searchFilterChange":
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };
    case "filters/statusFilterChange":
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };
    default:
      return state;
  }
};

export { initialState };
export default rootReducer;
