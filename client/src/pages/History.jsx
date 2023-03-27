import { Checkbox } from '@material-ui/core';
import axios from 'axios';
import React, {useEffect, useState } from 'react';

const History = () => {
    const [tasks, setTasks] = useState([])
    const apiUrl = "http://localhost:3001/tasks/history";

    useEffect(() => {
        const fetchAllTasks = async () => {
            try {
                const res = await axios.get(apiUrl);
                setTasks(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllTasks();
    }, [])

    return (
        <div>
            <h1>My TODO List</h1>
            <div className="tasks">
                {tasks.map(task => (
                    <div className="task" key={task.id}>
                        <Checkbox/>
                        <h2>{task.title}</h2>  
                    </div>
                ))}
            </div>
        </div>
    )
}

export default History;