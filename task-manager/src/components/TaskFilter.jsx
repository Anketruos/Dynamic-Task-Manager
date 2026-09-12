function TaskFilter({ currentFilter, onFilterChange }) {
  return (
    <div className="filters">
      <button
        className={currentFilter === "all" ? "active" : ""}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>

      <button
        className={currentFilter === "completed" ? "active" : ""}
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </button>

      <button
        className={currentFilter === "active" ? "active" : ""}
        onClick={() => onFilterChange("active")}
      >
        Not Completed
      </button>
    </div>
  );
}

export default TaskFilter;