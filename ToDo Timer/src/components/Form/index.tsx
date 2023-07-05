import { v4 as uuidv4 } from "uuid";
import { FormEvent, useCallback, useState } from "react";
import { Button } from "../Button";
import styles from "./styles.module.scss";
import { Task } from "../../@types/@types";

interface FormProps {
  handleAddTask: (task: Task) => void;
}

export function Form({ handleAddTask }: FormProps) {
  const [title, setTitle] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      handleAddTask({
        id: uuidv4(),
        title,
        time,
        done: false,
        selected: false,
      });
      setTitle("");
      setTime("");
    },
    [handleAddTask, time, title],
  );

  return (
    <form onSubmit={handleSubmit} className={styles.novaTarefa}>
      <div className={styles.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step={1}
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
          value={time}
          onChange={e => setTime(e.target.value)}
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}
