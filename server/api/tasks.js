const runQuery = require("./helpers/runQuery");
const {
  getAllTasksQuery,
  addTaskQuery,
  getTaskQuery,
} = require("../queries/tasks");

const getAllTasks = async () => {
  return await runQuery(getAllTasksQuery);
};

const addTask = async (values) => {
  return await runQuery(addTaskQuery, [
    values[0],
    values[1],
    values[2],
    values[3],
    values[4],
  ]);
};

const getTask = async (id) => {
  return await runQuery(getTaskQuery, [id]);
};

module.exports = { getAllTasks, addTask, getTask };