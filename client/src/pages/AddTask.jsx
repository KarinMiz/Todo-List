import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import categoryColors from "../services/categorieServices";

const AddTask = () => {
  const currentDate = new Date().toISOString().slice(0, 16);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getcategories = async () => {
      const res = await fetch("http://localhost:3001/categories");
      const getData = await res.json();
      setCategories(getData);
    };
    getcategories();
  }, []);

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
    if (title && category && description && deadline) {
      e.preventDefault();
      try {
        const body = {
          title: title,
          category_id: category,
          isdone: "false",
          description: description,
          deadline: deadline,
        };
        await axios.post(apiUrl, body);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="form">
      <h1>Add New Task</h1>
      <div className="d-flex">
        Title :
        <input
          type="text"
          placeholder="title"
          onChange={handleChangeTitle}
          name="title"
          required
        />
      </div>
      <div className="d-flex">
        Choose Category :
        <select onChange={handleChangeCategory}>
          <option value={null}>Select Category</option>
          {categories.map((getcate) => (
            <option
              value={getcate.category_id}
              style={{
                background:
                  categoryColors[getcate.category_id % categoryColors.length],
              }}
            >
              {getcate.category_title}
            </option>
          ))}
        </select>
      </div>
      <div className="d-flex">
        Description :
        <input
          type="text"
          placeholder="description"
          onChange={handleChangeDescription}
          name="title"
          required
        />
      </div>
      <div className="d-flex">
        Deadline :
        <input
          type="datetime-local"
          placeholder="deadline"
          min={currentDate}
          onChange={handleChangeDeadline}
          name="title"
          required
        />
      </div>

      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddTask;
