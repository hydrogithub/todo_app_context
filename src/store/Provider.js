import { useReducer } from "react";
import Context from "./Context";
import rootReducer, { initialState } from "./rootReducer";

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Provider;
