import { useState } from "react";
import { Task } from "../@types/@types";
import { Form } from "../components/Form";
import { List } from "../components/List";
import { Timer } from "../components/Timer";

import styles from "./global.module.scss";
import "./reset.scss";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task>({} as Task);

  const handleAddTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const handleSelectTask = (id: string) => {
    const task = tasks.find(task => task.id === id);
    if (task) {
      setSelectedTask(task);
      setTasks(state =>
        state.map(taskMap => ({
          ...taskMap,
          selected: taskMap.id === id,
        })),
      );
    }
  };

  const finalizeTasks = () => {
    if (selectedTask.id) {
      setSelectedTask({} as Task);
      setTasks(state =>
        state.map(task => {
          if (task.id === selectedTask.id) {
            return {
              ...task,
              selected: false,
              done: true,
            };
          }
          return task;
        }),
      );
    }
  };

  return (
    <main className={styles.AppStyle}>
      <Form handleAddTask={handleAddTask} />
      <List tasks={tasks} handleSelectTask={handleSelectTask} />
      <Timer selectedTask={selectedTask} finalizeTask={finalizeTasks} />
    </main>
  );
}

export default App;
