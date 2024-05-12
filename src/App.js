import React, { useState } from "react";
import TaskService from "./services/TaskService.js";
import TaskList from "./components/TaskList.js";
import AddTaskForm from "./components/AddTaskForm.js";

const taskService = new TaskService();

function App() {
  const [tasks, setTasks] = useState(taskService.getAllTasks());

  const handleAddTask = (newTask) => {
    // Adiciona a nova tarefa usando o serviço de tarefas
    taskService.addTask(newTask);
    setTasks([...taskService.getAllTasks()]);
  };

  return (
    <div className="App">
      <h1>Minha lista de tarefas</h1>
      <TaskList tasks={tasks} />
      <AddTaskForm onAddTask={handleAddTask} />
    </div>
  );
}

export default App;
