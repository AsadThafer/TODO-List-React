import "./TasksToggle.css";
import { statuses } from "../../Constants.js";

function TasksToggle({ onStatusChange, status }) {
  const handleStatusChange = (event) => {
    onStatusChange(event.target.value);
  };

  return (
    <div className="TasksToggle">
      <label className="Statusinfo" htmlFor="status">
        Filter by Status :{" "}
      </label>
      <select
        className="StatusSelect"
        value={status}
        onChange={handleStatusChange}
      >
        <option value="">All</option>
        <option value={statuses.ToDoStatus}>{statuses.ToDoStatus}</option>
        <option value={statuses.DoneStatus}>{statuses.DoneStatus}</option>
      </select>
    </div>
  );
}

export default TasksToggle;
