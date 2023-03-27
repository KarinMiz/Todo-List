
const getAllCategoriesQuery = "SELECT * FROM categories";

const getCategoryQuery = "SELECT * FROM categories WHERE category_id = $1"


module.exports = {
    getAllCategoriesQuery,
    getCategoryQuery
}
