import axios from 'axios';

const apiUrl = "http://localhost:3001/categories";

export function getCategories(){
    return axios.get(apiUrl);
}

export async function getCategory(id){
    const res = await axios.get(`${apiUrl}/${id}`);
    // console.log(res.data)
    // const getData = await res.json();
    return res.data;
}

