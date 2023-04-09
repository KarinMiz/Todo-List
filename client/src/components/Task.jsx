import React, {useState, useEffect} from "react";
import {Card, Checkbox} from "@material-ui/core";
import categoryColors, {getCategory} from "../services/categorieServices";
import Edit from "../pages/Edit";
import "./Task.css";

const Task = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const apiUrl = "http://localhost:3001/tasks";
  const setStatus = async (id) => {
    try {
      props.action();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditTask = async () => {
    try {
      // const history = useHistory();
      // history.push(`/edit/${props.category}`);
      window.location.replace(`http://localhost:3000/edit?id=${props.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllCategories = async () => {
    try {
      const res = await getCategory(props.category);
      setCategoryName(res[0].category_title);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="form">
      <Card
        style={{
          backgroundColor:
            categoryColors[props.category % categoryColors.length],
        }}
      >
        <div className="taskline">
          <Checkbox
            className="cb"
            checked={props.isdone}
            onChange={() => setStatus(props.id)}
            disabled={new Date(props.deadline) > new Date() ? false : true}
          />

          <span
            className={
              !props.isdone && new Date(props.deadline) < new Date()
                ? "pass"
                : "task"
            }
            onClick={() => setIsShown(!isShown)}
          >
            {props.title}
          </span>
        </div>
        {isShown ? (
          <div className="taskDetails">
            <div className="taskField">Category : {categoryName}</div>
            <div className="taskField">Description : {props.description}</div>
            <div className="taskField">Deadline : {props.deadline}</div>
          </div>
        ) : null}
        <button
          className="edit-btn"
          onClick={handleEditTask}
        >
          Edit
        </button>
      </Card>
    </div>
  );
};

export default Task;
