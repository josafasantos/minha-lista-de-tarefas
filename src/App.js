import React, { useEffect, useState } from "react";
import TaskService from "./services/TaskService.js";
import TaskList from "./components/TaskList.js";
import AddTaskForm from "./components/AddTaskForm.js";

const taskService = new TaskService();

function App() {
  const [tasks, setTasks] = useState(taskService.getAllTasks());
  const [updateList, setupdateList] = useState(0);

  const handleAddTask = (newTask) => {
    // Adiciona a nova tarefa usando o serviço de tarefas
    setupdateList(updateList + 1);
    taskService.addTask(newTask);
  };

  useEffect(() => {
    let newTasks = taskService.getAllTasks();
    setTasks(newTasks);
  }, [updateList]);

  return (
    <div className="App">
      <h1>Minha lista de tarefas</h1>
      <TaskList tasks={tasks} />
      <AddTaskForm onAddTask={handleAddTask} />
    </div>
  );
}

export default App;
