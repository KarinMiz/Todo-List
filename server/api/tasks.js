const runQuery = require("./helpers/runQuery")
const { getAllTasksQuery, 
    addTaskQuery,
    getTaskQuery } = require("../queries/tasks");

const getAllTasks = async () => {
    return await runQuery(getAllTasksQuery);
}

const addTask = async (id) => {
    return await runQuery(addTaskQuery, [title, category_id, description, isdone, deadline])
}

const getTask = async (id) => {
    return await runQuery(getTaskQuery, [id])
}

module.exports = 
{ getAllTasks,
    addTask, 
    getTask };
