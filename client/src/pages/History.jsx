import { Card, Checkbox } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getTask } from "../services/taskServices";
import "../style.css";
import "../components/Task.css";
import Task from "../components/Task";

const History = () => {
  const [tasks, setTasks] = useState([]);

  const apiUrl = "http://localhost:3001/tasks";

  const reAddTask = async (id) => {
    const res = await axios.put(`${apiUrl}/restoreTask/${id}`);
    getTask(id);
  };

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const res = await axios.get(`${apiUrl}/history`);
        setTasks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllTasks();
  }, [tasks]);

  return (
    <div>
      <h1>History Tasks</h1>
      <div className="tasks">
        {tasks.map((task) => (
          <Task
            id={task.task_id}
            title={task.title}
            category={task.category}
            description={task.description}
            deadline={task.deadline}
            isdone={task.isdone}
            action={reAddTask}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
