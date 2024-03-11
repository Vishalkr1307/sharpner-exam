const path = require("path");
const User = require("../module/user");
const Task = require("../module/task");
const rootPath = require("../util/rootpath");

const addUser = async (req, res) => {
    try {
        const task = await Task.findByPk(req.body.taskId);
        if (!task) {
            return res.status(404).send("Task not found");
        }
        if (task.seat <= 0) {
            return res.status(404).send("Seat is not available");
        }

        await task.decrement("seat", { by: 1 });
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            taskId: req.body.taskId
        });

        // Associate user with task
        

        
        return res.status(200).send("User created");

    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal server error");
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findAll();
        console.log(user);

    } catch (err) {
        return res.status(404).send("Bad request");
    }
};

module.exports = { addUser, getUser };
