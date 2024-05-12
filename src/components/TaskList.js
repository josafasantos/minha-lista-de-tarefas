import React, { useState } from "react";

export default function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
  const [editedTaskId, setEditedTaskId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedPriority, setEditedPriority] = useState("");
  const [editedDueDate, setEditedDueDate] = useState("");
  const prioridades = ["Alta", "Média", "Baixo"];

  const handleEdit = (task) => {
    setEditedTaskId(task.id);
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setEditedPriority(task.priority);
    setEditedDueDate(task.dueDate);
  };

  const handleSave = () => {
    const updatedTask = {
      id: editedTaskId,
      title: editedTitle,
      description: editedDescription,
      priority: editedPriority,
      dueDate: editedDueDate,
      completed: tasks.find((task) => task.id === editedTaskId).completed,
    };

    onUpdateTask(updatedTask);
    setEditedTaskId(null);
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map((task) => (
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
                <button onClick={handleSave}>Salvar</button>
              </div>
            ) : (
              <div>
                {task.completed ? (
                  <s>
                    {task.title} | {task.description} | {task.priority} |
                    {task.dueDate}
                  </s>
                ) : (
                  <>
                    {task.title} | {task.description} |{task.priority} |
                    {task.dueDate}
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
