import React, { useState } from "react";

export default function TaskList({ tasks }) {
  const [listTask] = useState(tasks);

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {listTask.map((task) => {
          return <li key={task.id}>{task.title}</li>;
        })}
      </ul>
    </div>
  );
}
