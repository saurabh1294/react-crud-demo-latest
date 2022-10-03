const tasks: Task[] = [
    {title: 'Fix typo', done: false, id: 'task_0'},
    {title: 'Upload new logo', done: true, id: 'task_1'},
    {title: 'Add login button ', done: false, id: 'task_2'},
    {title: 'Write tests', done: false, id: 'task_3'},
    {title: 'Deploy to production', done: false, id: 'task_4'},
];

/*
 * This file mocks a database by storing some data in memory. 
 * Just pretend the data comes from Postgres if you wish :)
 */

export async function fetchTasks() {
    return [...tasks];
}

export async function setTaskDone(taskId: string, done: boolean) {
    const task = tasks.find(t => t.id === taskId);

    if (!task)
        throw Error(`No task with ID ${taskId}`);

    task.done = done;
    return task;
}

export async function addTask(title: string) {
    const task = {
        title,
        done: false,
        id: `task_${tasks.length}`,
    };
    tasks.push(task);
    return task;
}

export async function deleteTask(taskId: string) {
    const index = tasks.findIndex(task => task.id === taskId)
    tasks.splice(index, 1)
}