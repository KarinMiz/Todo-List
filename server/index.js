const express = require('express');
const taskRoutes = require("./routes/tasks")
const db = require('./db')
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors());

app.use("/api/tasks", taskRoutes);

app.get("/", (req,res)=>{
    res.json("backend!!!")
})

app.get("/tasks", (req, res)=>{
    console.log("get request !!!");
    const q = "SELECT * FROM tasks"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data)
    })
})

app.post("/tasks",(req,res)=>{
    const q = "INSERT INTO tasks (`id`,`title`,`status`) VALUES (?)"
    const values = 
        [
            req.body.id,
            req.body.title,
            req.body.status
        ]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
            return res.json("New task has been created successfully")
    })
})

app.delete("/tasks/:id",(req,res)=>{
    const taskId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?"
    db.query(q,[taskId], (err, data)=>{
        if(err) return res.json(err)
            return res.json("New task has been deleted successfully")
    })
})

// const port = process.env.PORT || 8080;
const port = process.env.PORT || 3001;
app.listen(port,() => console.log(`Listening on port ${port}...`));