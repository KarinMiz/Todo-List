import { Checkbox, styled } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style.css";

const History = () => {
  const [tasks, setTasks] = useState([]);
  const apiUrl = "http://localhost:3001/tasks/history";

  const handleChange = async (id) => {
      try {
          const res = await axios.put(`${apiUrl}/restoreTask/${id}`);
          console.log(res);
      } catch (err) {
          console.log(err);
      }
  };

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const res = await axios.get(apiUrl);
        setTasks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllTasks();
  }, [handleChange]);

  return (
    <div>
      <h1>History Tasks</h1>
      <div className="tasks">
        {tasks.map((task) => (
          <div className={(task.isdone)&&(task.deadline <= Date())? "task" : "pass"} key={task.task_id}>
            <Checkbox checked={task.isdone} onChange={() => handleChange(task.task_id)} />
            <h2>{task.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
