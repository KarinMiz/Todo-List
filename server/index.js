const express = require('express');
const taskRoutes = require("./routes/tasks")
const categoriesRoutes = require("./routes/categories")
const db = require('./db')
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors());

app.use("/tasks", taskRoutes);
app.use("/categories", categoriesRoutes);

app.get("/", (req,res)=>{
    res.json("backend!!!")
})



const port = process.env.PORT || 3001;
app.listen(port,() => console.log(`Listening on port ${port}...`));