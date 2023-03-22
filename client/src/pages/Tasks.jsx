import { Checkbox } from '@material-ui/core';
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, {useEffect, useState } from 'react';

const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const apiUrl = "http://localhost:3001/tasks";

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

    const handleDelete = async (id) =>{
        try {
            await axios.delete(`${apiUrl}/${id}`)
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>My TODO List</h1>
            <div className="tasks">
                {tasks.map(task => (
                    <div className="task" key={task.id}>
                        <Checkbox/>
                        <h2>{task.title}</h2>  
                        <button className="delete" onClick={()=>handleDelete(task.id)}>Delete</button>
                    </div>
                ))}
            </div>
            <button>
                <Link to="/add">Add new task</Link>
            </button>
        </div>
    )
}




export default Tasks;



// import {
//     addTask, 
//     getTasks, 
//     updateTask, 
//     deleteTask
// } from './services/taskServices';

// class Tasks extends Component{
//     state = {tasks:[],currentTask:""}

//     async componentDidMount(){
//         try {
//            const {data} = await getTasks();
//            this.setState({tasks: data});
//         } catch (error) {
//             console.log(error);     
//         }
//     }
//     handleChange = ({currentTarget: input}) => {
//         this.setState({currentTask: input.value})
//     }

//     handleSubmit = async (e) => {
//         e.preventDefault();
//         const originalTasks = this.state.tasks;
//         try {
//             const {data} = await addTask ({task: this.state.currentTask});
//             const tasks = originalTasks;
//             tasks.push(data);
//             this.setState({tasks, currentTask: ""})
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     handleUpdate = async (currentTask) =>{
//         const originalTasks = this.state.tasks;
//         try {
//             const tasks = [...originalTasks];
//             const index = tasks.findIndex((task)=> task._id === currentTask);
//             tasks[index] = {...tasks[index]}
//             tasks[index].completed = !tasks[index].completed;
//             this.setState({tasks});
//             await updateTask(currentTask, {completed: tasks[index].completed});
//         } catch (error) {
//             this.setState({tasks: originalTasks});
//             console.log(error);
//         }
//     }

//     handleDelete = async (currentTask) => {
//         const originalTasks = this.state.tasks;
//         try {
//             const tasks = originalTasks.filter(
//                 (task) => task._id !== currentTask
//             );
//             this.setState({tasks});
//             await deleteTask(currentTask);
//         } catch (error) {
//             this.setState({task: originalTasks});
//             console.log(error);
//         }
//     }
// }

// export default Tasks;