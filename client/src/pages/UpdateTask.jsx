import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateTask = (props) => {

  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    const getcategories = async ()=>{
      const res = await fetch("http://localhost:3001/categories");
      const getData = await res.json();
      setCategories(getData);
      console.log(getData);
    }
    getcategories();
  },[])

  const navigate = useNavigate();

  const apiUrl = "http://localhost:3001/tasks/addTask";

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangeDeadline = (e) => {
    setDeadline(e.target.value);
  };

  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [deadline, setDeadline] = useState();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const body = {
        title: title,
        category_id: category,
        isdone: "false",
        description: description,
        deadline: deadline
      }
      await axios.post(apiUrl, body);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Update Task before re-add</h1>
      <div className="d-flex">
      Title : 
        <input
          type="text"
          value={props.title}
          onChange={handleChangeTitle}
          name="title"
        />
      </div>
      <div className="d-flex">
          Choose Category :
          <select onChange={handleChangeCategory}>
            {
              categories.map((getcate)=>(
                <option value={getcate.category_id}>{getcate.category_title}</option>
              ))
            }
          </select>
      </div>
      <div className="d-flex">
        Description : 
        <input
          type="text"
          value={props.description}
          onChange={handleChangeDescription}
          name="title"
        />
      </div>
      <div className="d-flex">
        Deadline : 
        <input
          type="datetime-local"
          value={props.deadline}
          onChange={handleChangeDeadline}
          name="title"
        />
      </div>

      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default UpdateTask;
