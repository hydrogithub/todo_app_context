import React, { useState } from "react";
import { ReactComponent as Search } from "../assets/search.svg";
import { useStore } from "../store";
import { searchFilterChange } from "../store/actions";
// import { searchFilterChange } from "../redux/actions";

const Filter = () => {
  const [searchTask, setSearchTask] = useState("");
  const [state, dispatch] = useStore();

  return (
    <div className="form__field search_group">
      <div className="search">
        <label htmlFor="search">Tìm kiếm</label>
        <input
          type="text"
          name="search"
          id="search"
          value={searchTask}
          onChange={(e) => {
            setSearchTask(e.target.value);
            dispatch(searchFilterChange(e.target.value));
          }}
          placeholder="Công việc cần tìm..."
        />
      </div>
      <div className="btn">
        <Search />
      </div>
    </div>
  );
};

export default Filter;
