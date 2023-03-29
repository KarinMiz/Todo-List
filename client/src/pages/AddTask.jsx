import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    category_id: "",
    description: "",
    isdone: "0",
    deadline: ""
  });

  const [category, setCategory] = useState([]);
  useEffect(()=>{
    const getcategory = async ()=>{
      const res = await fetch("http://localhost:3001/categories");
      const getData = await res.json();
      setCategory(getData);
      console.log(getData);
    }
    getcategory();
  },[])

  const navigate = useNavigate();

  const apiUrl = "http://localhost:3001/tasks/addTask";

  const handleChange = (e) => {
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(apiUrl, task);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(task);

  return (
    <div className="form">
      <h1>Add New Task</h1>
      <div className="d-flex">
      Title : 
        <input
          type="text"
          placeholder="title"
          onChange={handleChange}
          name="title"
        />
      </div>
      <div className="d-flex">
          Choose Category :
          <select>
            {
              category.map((getcate)=>(
                <option value={getcate.category_title}>{getcate.category_title}</option>
              ))
            }
          </select>
      </div>
      <div className="d-flex">
        Deadline : 
        <input
          type="text"
          placeholder="deadline"
          onChange={handleChange}
          name="title"
        />
      </div>

      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddTask;
