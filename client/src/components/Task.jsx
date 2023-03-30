import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";
import axios from "axios";

const TaskDetails = (props) => {
  const [isShown, setIsShown] = useState(false);
  const apiUrl = "http://localhost:3001/tasks";
  const setStatus = async (id) => {
    try {
      const res = await axios.put(`${apiUrl}/finishTask/${id}`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Task's Details:</h1>
      <div className="task" >

        {isShown ? <div><div className="d-flex">Title : {props.title}</div>
        <div className="d-flex">Choose Category :{props.category}</div>
        <div className="d-flex">Description : {props.description}</div>
        <div className="d-flex">Deadline : {props.deadline}</div></div>
            : null}

        <Checkbox
          checked={props.isdone}
          onChange={() => setStatus(props.task_id)}
        />
      </div>
    </div>
  );
};

export default TaskDetails;
