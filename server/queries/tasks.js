
const getAllTasksQuery = "SELECT * FROM tasks WHERE (isDone=FALSE) AND (deadline>=NOW()) ";

const addTaskQuery = "INSERT INTO tasks(title,category_id,description, isdone, deadline) VALUES ($1, $2, $3, $4, $5)";

const getTaskQuery = "SELECT * FROM tasks WHERE task_id = $1"

const getHistoryTasksQuery = "SELECT * FROM tasks WHERE (isDone=TRUE) OR (deadline<NOW()) ";

module.exports = {
    getAllTasksQuery, 
    addTaskQuery,
    getTaskQuery,
    getHistoryTasksQuery
}


