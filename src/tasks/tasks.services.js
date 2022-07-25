const {
    getAllTasksController,
    getTaskByIdController,
    postTaskController,
    deleteTaskController,
    updateTaskController
} = require('./tasks.controller');

const getAllTasksService = async (req, res) => {

    const data = getAllTasksController();

    res.status(200).json({
        status: "success",
        response: data
    });

}

const getTaskByIdService = async (req, res) => {

    const id = parseInt(req.params.id);

    if (id) {

        const data = getTaskByIdController(id);

        if (data) {

            res.status(200).json({
                status: "success",
                response: {
                    data
                }
            });

        } else {

            res.status(404).json({
                status: "error",
                message: "Id not found"
            });

        }

    } else {

        res.status(400).json({
            status: "error",
            message: "The Id is not a number"
        });

    }

}

const postTaskService = async (req, res) => {

    const data = req.body;

    if (data.title.trim().length > 0 && data.description.trim().length > 0) {

        const newUser = postTaskController(data);

        res.status(201).json({
            status: "success",
            response: {
                newUser
            }
        });

    } else {

        res.status(400).json({
            status: "error",
            message: "The title and description can't be empty"
        });

    }

}

const deleteTaskService = async (req, res) => {

    const id = parseInt(req.params.id);

    if (id) {

        const data = deleteTaskController(id)

        if (data === 'error') {

            res.status(404).json({
                status: "error",
                message: "ID not found"
            });

        } else {

            res.status(200).json();

        }

    } else {
        res.status(400).json({
            status: "error",
            message: "the ID is not a number"
        });
    }

}

const updateTaskService = async (req, res) => {

    const id = parseInt(req.params.id);
    const data = req.body;

    if (id) {

        const userUpdated = updateTaskController(id, data);

        if (userUpdated === 'id_not_found') {

            res.status(404).json({
                status: "error",
                message: "ID not found"
            });

        } else if (userUpdated === "title_description_cant_modified") {

            res.status(404).json({
                status: "error",
                message: "Title and description cant be modified"
            });

        } else {

            res.status(200).json();

        }

    } else {

        res.status(400).json({
            status: "error",
            message: "the ID is not a number"
        });

    }

}

module.exports = {
    getAllTasksService,
    getTaskByIdService,
    postTaskService,
    deleteTaskService,
    updateTaskService
};