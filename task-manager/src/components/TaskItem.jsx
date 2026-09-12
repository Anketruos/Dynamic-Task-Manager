function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>

      <div className="task-main">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        <div>
          <p className="task-text">
            {task.text}
          </p>

          <span className={`priority ${task.priority}`}>
            {task.priority}
          </span>
        </div>
      </div>

      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>

    </div>
  );
}

export default TaskItem;