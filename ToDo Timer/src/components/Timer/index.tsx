import { useState, useEffect } from "react";
import { Task } from "../../@types/@types";
import { Button } from "../Button";
import { Clock } from "./components/Clock";
import styles from "./styles.module.scss";
import { timeForSeconds } from "../../utils/date";

interface TimerProps {
  selectedTask: Task;
  finalizeTask: () => void;
}

export function Timer({ selectedTask, finalizeTask }: TimerProps) {
  const [time, setTime] = useState(0);

  function regressiva(time = 0) {
    if (time > 0) {
      setTime(time - 1);
      setTimeout(() => {
        regressiva(time - 1);
      }, 1000);
    } else {
      finalizeTask();
    }
  }

  useEffect(() => {
    if (selectedTask.time) {
      const timeInSeconds = timeForSeconds(selectedTask.time);
      setTime(timeInSeconds);
    }
  }, [selectedTask.time]);

  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={styles.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressiva(time)}>Começar</Button>
    </div>
  );
}
