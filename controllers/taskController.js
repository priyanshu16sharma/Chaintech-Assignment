const Task = require('../models/task');

//this route is for creating new tasks. It checks for title, creates the task only if title is present (Validation as per assignment).
exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate, category } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    const task = await Task.create({ title, description, dueDate, category });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// fetches all the tasks present in database
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//fetches a particular task based on id.
//takes task id as param
exports.getTaskById = async (req, res)=>{
    try{
        const {id} = req.params;
        const task = await Task.findById(id);
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.status(200).json(task)
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

//takes task id as param
//marks the task as complete (true boolean value)
exports.completeTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    if (task.isCompleted) return res.status(400).json({ error: 'Task is already completed' });

    task.isCompleted = true;
    await task.save();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//updates a task
//takes id as param
//all the associated fields as body
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, dueDate, category } = req.body;

    if (!title) return res.status(400).json({ error: 'Title is required' });
    const task = await Task.findByIdAndUpdate(
      id,
      { title, description, dueDate, category },
      { new: true, runValidators: true }
    );

    if (!task) return res.status(404).json({ error: 'Task not found' });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//deletes a task
//takes id as param
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    if (!task) return res.status(404).json({ error: 'Task not found' });

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
