const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    completedStatus:{
        type: Boolean,
        required:true
    }
});

module.exports = mongoose.module('Tasks', taskSchema);