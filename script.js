const iptTask = document.querySelector("#iptTask")
iptTask.addEventListener('change', (event) => addTask(new Task(event.target.value)))

const btnAdd = document.querySelector("#btnAdd")
btnAdd.addEventListener('click', () => addTask(new Task(iptTask.value)))

const ulTasks = document.querySelector("#ulTasks")

export class Task {
    id
    name

    constructor(name) {
        this.name = name
        this.id = crypto.randomUUID()
    }
}

function addTask(task) {
    console.log('task', task)
    const taskNode = document.createElement('li')
    taskNode.textContent = task.name
    ulTasks.appendChild(taskNode)
}

