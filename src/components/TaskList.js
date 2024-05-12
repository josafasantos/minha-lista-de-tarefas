import React from "react";

export default function TaskList({ tasks, onUpdatetask }) {
  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.completed === false ? (
              <>
                {task.title}
                <button onClick={() => onUpdatetask(task, true)}>
                  Concluir
                </button>
              </>
            ) : (
              <>
                <s>{task.title}</s>
                <button onClick={() => onUpdatetask(task, false)}>
                  Não concluir
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
