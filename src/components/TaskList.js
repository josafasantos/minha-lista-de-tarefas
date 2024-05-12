import React, { useState } from "react";

export default function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
  const [editedTaskId, setEditedTaskId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedPriority, setEditedPriority] = useState("");
  const [editedDueDate, setEditedDueDate] = useState("");
  const [editedCategory, setEditedCategory] = useState("");
  const prioridades = ["Alta", "Média", "Baixo"];

  const handleEdit = (task) => {
    setEditedTaskId(task.id);
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setEditedPriority(task.priority);
    setEditedDueDate(task.dueDate);
    setEditedCategory(task.category);
  };

  const handleSave = () => {
    const updatedTask = {
      id: editedTaskId,
      title: editedTitle,
      description: editedDescription,
      priority: editedPriority,
      dueDate: editedDueDate,
      category: editedCategory,
      completed: tasks.find((task) => task.id === editedTaskId).completed,
    };

    onUpdateTask(updatedTask);
    setEditedTaskId(null);
  };
  //Filtrar e ordenar
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("none");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sort === "none") return 0;
    if (sort === "dueDate") return new Date(a.dueDate) - new Date(b.dueDate);
    if (sort === "priority") {
      const priorityOrder = ["Alta", "Média", "Baixo"];
      return (
        priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
      );
    }
    if (sort === "alphabetical") return a.title.localeCompare(b.title);
  });

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <div>
        <label>
          Filtrar por:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Todas</option>
            <option value="completed">Concluídas</option>
            <option value="pending">Pendentes</option>
          </select>
        </label>
        <label>
          Ordenar por:
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="none">Nenhum</option>
            <option value="dueDate">Data de Vencimento</option>
            <option value="priority">Prioridade</option>
            <option value="alphabetical">Alfabética</option>
          </select>
        </label>
      </div>
      <ul>
        {sortedTasks.map((task) => (
          <li key={task.id}>
            {editedTaskId === task.id ? (
              <div>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <input
                  type="text"
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                />
                <select
                  value={editedPriority}
                  onChange={(e) => setEditedPriority(e.target.value)}
                >
                  {prioridades.map((opcao, index) => (
                    <option key={index} value={opcao}>
                      {opcao}
                    </option>
                  ))}
                </select>
                <input
                  type="date"
                  value={editedDueDate}
                  onChange={(e) => setEditedDueDate(e.target.value)}
                />
                <input
                  type="text"
                  value={editedCategory}
                  onChange={(e) => setEditedCategory(e.target.value)}
                />
                <button onClick={handleSave}>Salvar</button>
              </div>
            ) : (
              <div>
                {task.completed ? (
                  <s>
                    {task.title} | {task.description} | {task.priority} |
                    {task.dueDate} | {task.category}
                  </s>
                ) : (
                  <>
                    {task.title} | {task.description} |{task.priority} |
                    {task.dueDate} | {task.category}
                  </>
                )}
                <button onClick={() => handleEdit(task)}>Editar</button>
                <button onClick={() => onUpdateTask(task, !task.completed)}>
                  {task.completed ? "Não concluir" : "Concluir"}
                </button>
                <button onClick={() => onDeleteTask(task)}>Excluir</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
