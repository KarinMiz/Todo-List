const express = require("express");
const router = express.Router();
const { getAllCategories,getCategory } = require("../api/categories");

router.get("/", async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.send(categories.rows);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const category = await getCategory(id);
    res.send(category.rows);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
