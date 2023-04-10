import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = (props) => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [isDone, setIsDone] = useState();
  const [description, setDescription] = useState();
  const [deadline, setDeadline] = useState();

  
  const [categories, setCategories] = useState([]);
  const getTask = async ()=>{
    const res = await fetch(`http://localhost:3001/tasks/${id}`);
    const getData = await res.json();
    setTitle(getData[0].title);
    setCategory(getData[0].category_id)
    setDescription(getData[0].description)
    setIsDone(getData[0].isdone)
    setDeadline(getData[0].deadline)
  }
  const getcategories = async ()=>{
    const res = await fetch("http://localhost:3001/categories");
    const getData = await res.json();
    setCategories(getData);
  }
  useEffect(()=>{
    getTask();
    getcategories();
  },[])

  const navigate = useNavigate();

  const apiUrl = "http://localhost:3001/tasks/updateTask";

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



  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const body = {
        title: title,
        category_id: category,
        description: description,
        isdone: isDone,
        deadline: deadline,
      }
      await axios.put(`${apiUrl}/${id}`, body);
      
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
          defaultValue={title}
          onChange={handleChangeTitle}
          name="title"
        />
      </div>
      <div className="d-flex">
          Choose Category :
          <select value={category} onChange={handleChangeCategory} >
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
          defaultValue={description}
          onChange={handleChangeDescription}
          name="title"
        />
      </div>
      <div className="d-flex">
        Deadline : 
        <input
          type="datetime-local"
          defaultValue={deadline ? deadline.slice(0, -1) : ""}
          onChange={handleChangeDeadline}
          name="title"
        />
      </div>

      <button onClick={handleClick}>Save Changes</button>
    </div>
  );
};

export default Edit;
