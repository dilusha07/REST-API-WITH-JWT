const express = require("express");
const Tasks = require("../model/taskModel");

const router = express.Router();

//Create Task
router.post('/tasks/create', (req, res)=>{
    let newTask = new Tasks(req.body);

    newTask.save((err) =>{
        if(err){
            return res.status(400).json({ 
                error: err
            });
        }
        return res.status(200).json({
            success: "Task create successfully"
        });     
    });
});

//get all tasks
router.get('/tasks', (req,res) =>{
    Tasks.find().exec((err, task)=>{
      if(err){
        return res.status(400).json({
            error: err
        })
      }
      return res.status(200).json({
        success:true,
        existingPosts: task
      })
    });
});

//get task by id
router.get('/tasks/:id', (req,res) =>{
    Tasks.findById(req.params.id).exec((err, task)=>{
      if(err){
        return res.status(400).json({
            error: err
        })
      }
      return res.status(200).json({
        success:true,
        existingPosts: task
      })
    });
});

//update tasks
router.put("/tasks/update/:id", (req,res)=>{
    Tasks.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,task)=>{
            if(err){
                return res.status(400).bodyParser.json({
                    error:err
                })
            }
            return res.status(200).json({
                success:"updated successfully"
            })
        })
})

//Delete
router.delete('/tasks/delete/:id', (req,res)=>{
    Tasks.findByIdAndRemove(req.param.id).exec((err, deletedTask)=>{
        if(err){
            return res.status(400).json({
                message:"Delete unscessful", err
            });
        }
        return res.json({
            message:"Delete sucessfull", deletedTask
        })
    })
});

module.exports = router;