import React, { useState } from "react";
import { Card, Checkbox } from "@material-ui/core";
import axios from "axios";
import "./Task.css";

const Task = (props) => {
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
      <Card>
        <div className="taskline">
          <Checkbox
            className="cb"
            checked={props.isdone}
            onChange={() => setStatus(props.task_id)}
          />

          <span onClick={() => setIsShown(!isShown)}>
            {props.title}   
          </span>
        </div>
        {isShown ? (
          <div className="taskDetails">
            <div className="taskField">Category :{props.category}</div>
            <div className="taskField">Description : {props.description}</div>
            <div className="taskField">Deadline : {props.deadline}</div>
          </div>
        ) : null}
      </Card>
    </div>
  );
};

export default Task;
