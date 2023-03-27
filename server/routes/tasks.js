const express = require("express");
const router = express.Router();
const { getAllTasks, addTask, getTask } = require("../api/tasks");

router.get("/", async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.send(tasks.rows);
  } catch (error) {
    res.send(error);
  }
});

router.post("/addTask", async (req, res) => {
  try {
    const values = [req.body.id, req.body.title, req.body.status];
    const add = await addTask(values);
    res.send(add.rows);
    console.log("New task has been created successfully");
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const tasks = await getTask(id);
    res.send(tasks.rows);
  } catch (error) {
    res.send(error);
  }
});

// const app =  express();

// router.get("/test", addTask)

// router.post("/", async (req,res)=>{
//     try{
//         const task = await new Task(req.body).save();
//         res.send(task);
//     }catch(error){
//         res.send(error);
//     }
// })

// router.get("/", async(req,res)=>{
//     console.log("here")
//     try {
//         const task = await Task.find();
//         res.send(task);
//     } catch (error) {
//         res.send(error);
//     }
// })

// router.put("/:id",async (req,res) => {
//     try {
//         const task = await Task.findOneAndUpdate(
//             {_id: req.params.id},
//             req.body
//         )
//         res.send(task)
//     } catch (error) {
//         res.send(error)
//     }
// })

// router.delete("/:id", async (req, res) =>{
//     try {
//         const task = await Task.findByIdAndDelete(req.params.id);
//         res.send(task);
//     } catch (error) {
//         res.send(error);
//     }
// })

module.exports = router;
