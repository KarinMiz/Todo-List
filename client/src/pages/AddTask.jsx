import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddTask = () => {
    const [task, setTask] = useState({
        id: "",
        title: "",
        status: "0"
    });

    const navigate = useNavigate()

    const apiUrl = "http://localhost:3001/tasks";

    const handleChange = (e) => {
        setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleClick = async e => {
        e.preventDefault();
        try {
            await axios.post(apiUrl, task);
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    console.log(task);

    return (
        <div className='form'>
            <h1>Add New Task</h1>
            <input 
                type="text" 
                placeholder='enter new task' 
                onChange={handleChange} 
                name="title" 
            />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default AddTask;