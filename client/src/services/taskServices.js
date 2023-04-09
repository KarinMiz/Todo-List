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

export function restoreTask(id){
    return axios.put(`${apiUrl}/restoreTask/${id}`);
}

export function finishTask(id){
    return axios.put(`${apiUrl}/finishTask/${id}`);
}

export function getTask(id){
    return axios.get(`${apiUrl}/${id}`);
}
