import React from "react";

export default function TaskList({ tasks }) {
  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.title}</li>;
        })}
      </ul>
    </div>
  );
}
