import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (text, priority) => {
    const newTask = {
      id: Date.now(),
      text: text,
      priority: priority,
      completed: false
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  const clearCompleted = () => {
    setTasks(
      tasks.filter((task) => !task.completed)
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    }

    if (filter === "active") {
      return !task.completed;
    }

    return true;
  });

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  const remainingCount = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <div className="app">
      <div className="container">

        <header className="header">
          <p className="eyebrow">MY PRODUCTIVITY</p>
          <h1>Dynamic Task Manager</h1>
          <p>Keep track of what you need to get done.</p>
        </header>

        <TaskForm onAddTask={addTask} />

        <div className="stats">
          <div className="stat">
            <span>Total Tasks</span>
            <strong>{tasks.length}</strong>
          </div>

          <div className="stat">
            <span>Completed</span>
            <strong>{completedCount}</strong>
          </div>

          <div className="stat">
            <span>Remaining</span>
            <strong>{remainingCount}</strong>
          </div>
        </div>

        <TaskFilter
          currentFilter={filter}
          onFilterChange={setFilter}
        />

        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />

        {completedCount > 0 && (
          <button
            className="clear-button"
            onClick={clearCompleted}
          >
            Clear Completed
          </button>
        )}

      </div>
    </div>
  );
}

export default App;