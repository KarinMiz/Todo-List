import axios from 'axios';

const apiUrl = "http://localhost:3001/categories";
const categoryColors = ["yellow", "blue", "green", "orange", "purple", "gray", "teal"];

export function getCategories(){
    return axios.get(apiUrl);
}

export async function getCategory(id){
    const res = await axios.get(`${apiUrl}/${id}`);
    return res.data;
}

export default categoryColors;