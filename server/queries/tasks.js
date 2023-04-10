
const getAllTasksQuery = "SELECT * FROM tasks WHERE (isDone=FALSE) AND (deadline>=NOW()) ";

const addTaskQuery = "INSERT INTO tasks(title,category_id,description, isdone, deadline) VALUES ($1, $2, $3, $4, $5)";

const updateTaskQuery = "UPDATE tasks SET title=$1, category_id=$2, description=$3, isdone=$4, deadline=$5 WHERE task_id=$6";

const getTaskQuery = "SELECT * FROM tasks WHERE task_id = $1"

const getHistoryTasksQuery = "SELECT * FROM tasks WHERE (isdone=TRUE) OR (deadline<NOW()) ";

const finishTaskQuery = "UPDATE tasks SET isdone = true WHERE task_id = $1";

const restoreTaskQuery = "UPDATE tasks SET isdone = false WHERE task_id = $1";

module.exports = {
    getAllTasksQuery, 
    addTaskQuery,
    getTaskQuery,
    getHistoryTasksQuery,
    finishTaskQuery,
    restoreTaskQuery,
    updateTaskQuery
}


