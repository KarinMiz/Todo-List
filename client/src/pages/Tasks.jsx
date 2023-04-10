import axios from "axios";
import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Task from "../components/Task";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filterVal, setfilterVal] = useState(0);
  
  const apiUrl = "http://localhost:3001/tasks";

  const removeTask = async (id) => {
    await axios.put(`${apiUrl}/finishTask/${id}`);
    setTasks([...tasks].filter((task) => task.task_id !== id));
  };

  const fetchAllTasks = async () => {
    try {
      const res = await axios.get(apiUrl);

      if (filterVal > 0) {
        setTasks(res.data.filter((task) => +task.category_id === +filterVal));
      } else {
        setTasks(res.data);
      }

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllTasks();

    // if (filterVal !== 0) {
    //   setTask([...tasks].filter((task) => task.category_id === filterVal));
    // }
  }, [filterVal]);

  const onFilterValueSelected = (filterValue) => {
    setfilterVal(filterValue);
  };

  return (
    <div>
      <h1>Current Tasks:</h1>
      <Filter filterValueSelected={onFilterValueSelected} />
      {tasks.length > 0 ? (
        <div className="tasks">
          {tasks
            .sort((t1, t2) => (t1.deadline > t2.deadline ? 1 : -1))
            .map((task) => (
              <Task
                id={task.task_id}
                title={task.title}
                category={task.category_id}
                description={task.description}
                deadline={task.deadline}
                isdone={task.isdone}
                action={() => removeTask(task.task_id)}
              />
            ))}
        </div>
      ) : (
        <div>No Tasks</div>
      )}
    </div>
  );
};

export default Tasks;
