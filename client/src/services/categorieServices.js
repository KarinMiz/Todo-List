import axios from 'axios';

const apiUrl = "http://localhost:3001/categories";
const categoryColors = ["#6F69AC", "#95DAC1", "#FFEBA1", "#FD6F96", "#E99497", "#F3C583", "#B3E283"];

export function getCategories(){
    return axios.get(apiUrl);
}

export async function getCategory(id){
    const res = await axios.get(`${apiUrl}/${id}`);
    return res.data;
}

export default categoryColors;