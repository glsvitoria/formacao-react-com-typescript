import { Task } from "../../../../@types/@types";
import styles from "./styles.module.scss";

interface ItemProps {
  task: Task;
  handleSelectTask: (id: string) => void;
}

export function Item({ task, handleSelectTask }: ItemProps) {
  const { time, title } = task;
  return (
    <li
      key={task.id}
      className={`${styles.item} ${
        task.selected ? styles.itemSelecionado : ""
      } ${task.done ? styles.itemCompletado : ""}`}
      onClick={() => {
        !task.done && handleSelectTask(task.id);
      }}
    >
      <h3>{title}</h3>
      <span>{time}</span>
      {task.done && (
        <span
          className={styles.concluido}
          aria-label="tarefa completada"
        ></span>
      )}
    </li>
  );
}
