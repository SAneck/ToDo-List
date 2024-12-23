const inputTask = document.querySelector('#text-task')
const addButton = document.querySelector('#add-button')
const mainDiv = document.querySelector('.main')


const tasks = []

function render(){
    mainDiv.innerHTML = ''
    tasks.forEach((task, indexTask) => {
    const addTask = document.createElement('div')
    const editButton = document.createElement('button')
    var deelteButton = document.createElement('button')
    editButton.classList.add('confirmb')
    editButton.addEventListener('click', () => {
        editTask(indexTask)
    })
    deelteButton.classList.add('deleteb')
    deelteButton.addEventListener('click', () => {
        deleteTask(indexTask)
    })
    addTask.classList.add('block')
    addTask.textContent = task
    addTask.appendChild(deelteButton)
    addTask.appendChild(editButton)
    mainDiv.appendChild(addTask)
})
}

function addTask(){
    inputTask.value == '' ? alert("Вы ничего не ввели") :
    tasks.push(inputTask.value)
    console.log(inputTask.value)
    inputTask.value =''
    render()
}

function deleteTask(indexTask){
    tasks.splice(indexTask, 1)
    render()
}
function editTask(indexTask){
    let newValue = prompt('Введите нвоое значение', tasks[indexTask])
    tasks[indexTask] = newValue
    render()
}

addButton.addEventListener('click', addTask)
