import { Task } from "../../@types/@types";
import { Item } from "./components/Item";
import styles from "./styles.module.scss";

interface ListProps {
  tasks: Task[];
  handleSelectTask: (id: string) => void;
}

export function List({ tasks, handleSelectTask }: ListProps) {
  return (
    <aside className={styles.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map(task => (
          <Item key={task.id} task={task} handleSelectTask={handleSelectTask} />
        ))}
      </ul>
    </aside>
  );
}
