import "./TasksToggle.css";

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
        <option value="TO-DO">TO-DO</option>
        <option value="DONE">DONE</option>
      </select>
    </div>
  );
}

export default TasksToggle;
