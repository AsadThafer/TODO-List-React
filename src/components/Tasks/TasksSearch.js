import "./TasksSearch.css";
import React, { useState } from "react";

function TasksSearch({ onSearchTermChange, searchTerm }) {
  const handleSearchTermChange = (event) => {
    onSearchTermChange(event.target.value);
  };

  return (
    <div className="TasksSearch">
      <label className="Searchinfo" htmlFor="search">
        Search for a task :{" "}
      </label>
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Search for a task"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </div>
  );
}

export default TasksSearch;
