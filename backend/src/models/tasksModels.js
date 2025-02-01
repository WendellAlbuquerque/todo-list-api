const connection = require('./connection');
const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    /* [    tasks] means it is getting the array await connection.execute('SELECT * FROM tasks');
    and saving it in a const called tasks */
    return tasks;
};
const createTask = async(task) => {
    const {title} = task;
    const dateUTC = new Date(Date.now()).toUTCString();
    const query = 'INSERT INTO tasks(title, status, created_at) values(?,?,?)';
    const [createdTask] = await connection.execute(query, [title,'pendente',dateUTC]);
    return {insertId: createdTask.insertId};
};

const deleteTask = async(id) => {
    const [removedTask] = await connection.execute("DELETE FROM tasks where id = ?", [id]);
    return removedTask;
};

const updateTask = async (id, task) => {
    const {title, status} = task;
    const query = "UPDATE tasks SET title = ?, status = ? WHERE id = ?";
    const [updatedTask] = await connection.execute(query, [title, status, id]);
    return updatedTask;
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};