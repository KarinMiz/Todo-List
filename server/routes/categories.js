const express = require('express');
const router =  express.Router();


router.get("/", async (req,res)=>{
    // try{
    //     const task = await new Task(req.body).save();
    //     res.send(task);
    // }catch(error){
    //     res.send(error);
    // }
    res.send("hello categories")
})


module.exports = router;