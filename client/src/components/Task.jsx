import React, { useState, useEffect } from "react";
import { Card, Checkbox } from "@material-ui/core";
import categoryColors, { getCategory } from "../services/categorieServices";
import "./Task.css";

const Task = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [remainingTime, setRemainingTime] = useState(null);
  
  const calculateRemainingTime = () => {
    const now = new Date();
    const deadline = new Date(props.deadline);
    const diff = deadline - now;
    const remaining = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
    setRemainingTime(remaining);
  };

  const deadline = new Date(props.deadline);
  const formattedDate = deadline.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
  const formattedTime = deadline.toLocaleTimeString("en-GB", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedDeadline = `Deadline: ${formattedDate.replace(
    /\//g,
    "."
  )} ${formattedTime}`;

  const apiUrl = "http://localhost:3000/edit";
  const setStatus = async (id) => {
    try {
      props.action();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditTask = async () => {
    try {
      window.location.replace(`${apiUrl}?id=${props.id}`);
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
    calculateRemainingTime();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      calculateRemainingTime();
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="form-task">
      <Card
        style={
          props.isdone
            ? { backgroundColor: "white", color: "black" }
            : new Date(props.deadline) > new Date()
            ? {
                backgroundColor:
                  categoryColors[props.category % categoryColors.length],
                color: "black",
              }
            : { backgroundColor: "crimson", color: "black" }
        }
      >
        <div className="taskline-task">
          <div>
            <Checkbox
              className="cb"
              checked={props.isdone}
              onChange={() => setStatus(props.id)}
              disabled={new Date(props.deadline) > new Date() ? false : true}
            />
          </div>
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
          {remainingTime != null &&
            new Date(props.deadline) > new Date() &&
            !props.isdone && (
              <div className="left-time">
                Left Time - 
                {remainingTime.days > 0 && ` ${remainingTime.days}d:`}
                {remainingTime.hours > 0 && `${remainingTime.hours}h:`}
                {remainingTime.minutes > 0 &&`${remainingTime.minutes}m:`}
                {remainingTime.seconds > 0 &&`${remainingTime.seconds}s`}
                {remainingTime.days === 0 &&
                  remainingTime.hours === 0 &&
                  remainingTime.minutes === 0 &&
                  `${remainingTime.seconds}s`}
              </div>
            )}
        </div>
        {isShown ? (
          <div className="taskDetails-task">
            <div className="taskField">Category : {categoryName}</div>
            <div className="taskField">Description : {props.description}</div>
            <div className="taskField">{formattedDeadline}</div>
          </div>
        ) : null}
        <button className="edit-btn" onClick={handleEditTask}>
          Edit
        </button>
      </Card>
    </div>
  );
};

export default Task;
