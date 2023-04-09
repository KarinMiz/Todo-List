import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style.css";
import "../components/Task.css";
import Task from "../components/Task";

const History = () => {
  const [tasks, setTasks] = useState([]);

  const apiUrl = "http://localhost:3001/tasks";

  const reAddTask = async (id) => {
    await axios.put(`${apiUrl}/restoreTask/${id}`);
    setTasks([...tasks].filter((task) => task.task_id !== id));
  };

  const fetchAllTasks = async () => {
    try {
      const res = await axios.get(`${apiUrl}/history`);
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <div>
      <h1>History Tasks</h1>
      <div className="tasks">
        {tasks
        .sort((t1 , t2)=> t1.deadline > t2.deadline ? 1 : -1)
        .map((task) => (
          <Task
            id={task.task_id}
            title={task.title}
            category={task.category_id}
            description={task.description}
            deadline={task.deadline}
            isdone={task.isdone}
            action={() => reAddTask(task.task_id)}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
