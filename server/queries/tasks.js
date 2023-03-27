
const getAllTasksQuery = "SELECT * FROM tasks";

const addTaskQuery = "INSERT INTO tasks(title,category_id,description, isdone, deadline) VALUES ($1, $2, $3, $4, $5)";

const getTaskQuery = "SELECT * FROM tasks WHERE task_id = $1"

module.exports = {
    getAllTasksQuery, 
    addTaskQuery,
    getTaskQuery,
}


