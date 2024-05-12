// src/services/TaskServices.js

const key = "@tasks";

class TaskService {
  constructor() {
    this.tasks = localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : [];
  }

  //Método para adicionar uma nova tarefa
  addTask(task) {
    this.tasks.push(task);
    localStorage.setItem(key, JSON.stringify(this.tasks));
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
      localStorage.setItem(key, JSON.stringify(this.tasks));
    }
  }

  //Método para excluir uma tarefa
  deleteTask(id, promptConfirmation = true) {
    if (promptConfirmation) {
      const confirmation = window.confirm(
        "Tem certeza que deseja excluir esta tarefa?"
      );
      if (!confirmation) return; // Se o usuário cancelar, sai da função sem excluir a tarefa
    }

    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      localStorage.setItem(key, JSON.stringify(this.tasks));
    }
  }
}
export default TaskService;
