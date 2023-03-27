const runQuery = require("./helpers/runQuery");
const {
    getAllCategoriesQuery,
    getCategoryQuery
} = require("../queries/categories");

const getAllCategories = async () => {
  return await runQuery(getAllCategoriesQuery);
};

const getCategory = async (id) => {
  return await runQuery(getCategoryQuery, [id]);
};

module.exports = {getAllCategories,getCategory};
