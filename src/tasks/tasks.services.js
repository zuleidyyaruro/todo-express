const {getAllTasks} = require('./tasks.controller');

const allUsers = async (req, res) => {

    const data = getAllTasks();

    res.status(200).json({
        status: "success",
        response: data
    })

}

module.exports = {allUsers};