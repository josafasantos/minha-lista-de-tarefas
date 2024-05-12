import React, { useState } from "react";

export default function AddTaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
      priority: priority,
      dueDate: dueDate,
      category: category,
      completed: false,
    };

    onAddTask(newTask);

    setTitle("");
    setDescription("");
    setPriority("");
    setDueDate("");
    setCategory("");
  };

  const handlePrioridade = (e) => {
    setPriority(e.target.value);
  };

  const prioridades = ["Alta", "Média", "Baixo"];

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <label>
        Selecione uma prioridade:
        <select value={priority} onChange={handlePrioridade}>
          <option value="">Selecione...</option>
          {prioridades.map((opcao, index) => (
            <option key={index} value={opcao}>
              {opcao}
            </option>
          ))}
        </select>
      </label>
      <br />
      <br />
      <label>
        Escolha uma data:
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </label>
      <br />
      <br />
      <input
        type="text"
        placeholder="Digite a categoria da tarefa"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}
