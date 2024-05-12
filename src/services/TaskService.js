// src/services/TaskServices.js

class TaskService {
  constructor() {
    this.tasks = [];
  }

  //Método para adicionar uma nova tarefa
  addTask(task) {
    this.tasks.push(task);
  }

  // Método para listar todas as tarefas
  getAllTasks() {
    return this.tasks;
  }

  //Método para atualizar uma tarefa existente
  updateTask(id, task) {
    const index = this.tasks.findIndex((task) => task.id === id);

    if (index !== -1) {
      this.tasks[index] = task;
    }
  }

  //Método para excluir uma tarefa
  deleteTask(id) {
    const index = this.tasks.findIndex((task) => task.id === id);

    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
export default TaskService;
