import React from "react";

export default function TaskList({ tasks, onUpdatetask, onDeletetask }) {
  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.completed === false ? (
              <>
                {task.title} | {task.description} | {task.dueDate} |
                {task.priority}
                <button onClick={() => onUpdatetask(task, true)}>
                  Concluir
                </button>
                <button onClick={() => onDeletetask(task)}>Excluir</button>
              </>
            ) : (
              <>
                <s>
                  {task.title} | {task.description} | {task.dueDate} |
                  {task.priority}
                </s>
                <button onClick={() => onUpdatetask(task, false)}>
                  Não concluir
                </button>
                <button onClick={() => onDeletetask(task, true)}>
                  Excluir
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
