const tasks = [];

const getAllTasksController = () => {
    return tasks;
}

const getTaskByIdController = (id) => {

    const filterTask = tasks.filter(task => task.id === id);
    return filterTask[0];

}

const postTaskController = (taskObj) => {

    let newTask = {};

    if (tasks.length === 0) {
        newTask = {
            id: 1, title: taskObj.title.trim(), description: taskObj.description.trim(), isCompleted: false
        }
        tasks.push(newTask);
    } else {
        newTask = {
            id: tasks[tasks.length - 1].id + 1,
            title: taskObj.title.trim(),
            description: taskObj.description.trim(),
            isCompleted: false
        }
        tasks.push(newTask);
    }

    return newTask;

}

const deleteTaskController = (id) => {

    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
        return 'error';
    } else {
        tasks.splice(index, 1);
        return tasks;
    }

}

const updateTaskController = (id, taskObj) => {

    const index = tasks.findIndex(task => task.id === id);
    const filterTask = tasks.filter(task => task.id === id);

    if (index === -1) {
        return 'id_not_found'
    } else {

        if (filterTask[0].title !== taskObj.title || filterTask[0].description !== taskObj.description) {
            return "title_description_cant_modified"
        } else {
            tasks[index] = {
                id,
                ...taskObj
            }

            return tasks;
        }


    }
    
}

module.exports = {
    getAllTasksController, getTaskByIdController, postTaskController, deleteTaskController, updateTaskController
}