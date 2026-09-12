import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim() === "") {
      return;
    }

    onAddTask(text.trim(), priority);

    setText("");
    setPriority("medium");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What do you need to do?"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <select
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;