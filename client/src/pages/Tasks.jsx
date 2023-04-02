import { Checkbox } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Task from "../components/Task";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const apiUrl = "http://localhost:3001/tasks";

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const res = await axios.get(apiUrl);;
        setTasks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllTasks();
  }, [tasks]);

  const removeTask = async (id) => {
    const apiUrl = "http://localhost:3001/tasks";
    const res = await axios.put(`${apiUrl}/finishTask/${id}`);
    tasks.filter((task) => task.id !== id) 
  };

  return (
    <div>
      <h1>Current Tasks:</h1>
      <div className="tasks">
        {tasks.map((task) => (
          <Task
            id={task.task_id}
            title={task.title}
            category={task.category}
            description={task.description}
            deadline={task.deadline}
            isdone={task.isdone}
            action={removeTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
