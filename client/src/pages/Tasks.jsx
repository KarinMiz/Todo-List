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
        const res = await axios.get(apiUrl);
        console.log(res.data);
        setTasks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllTasks();
  }, [Task]);

  // const removeTask = async (id) => {
  //   var newState = [...tasks]; // make a separate copy of the array
  //   var index = newState.find(id)
  //   if (index !== -1) {
  //     array.splice(index, 1);
  //     this.setState({people: array});
  //   }
  // };

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
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
