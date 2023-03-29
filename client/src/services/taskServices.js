import axios from 'axios';

const apiUrl = "http://localhost:3001/tasks";

export function getTasks(){
    return axios.get(apiUrl);
}

export function getHistory(){
    return axios.post(`${apiUrl}/history`);
}

export function addTask(task){
    return axios.post(`${apiUrl}/addTask`, task);
}

export function updateStatus(task){
    return axios.post(`${apiUrl}/updateStatus/${id}`);
}

export function getTask(id, task){
    return axios.get(`${apiUrl}/${id}`);
}
