const inputTask = document.querySelector('#text-task')
const addButton = document.querySelector('#add-button')
const mainDiv = document.querySelector('.main')


const tasks = []

function render(){
    mainDiv.innerHTML = ''
    tasks.forEach((task, indexTask) => {
    const newTask = document.createElement('div')
    const editButton = document.createElement('button')
    var deelteButton = document.createElement('button')
    editButton.classList.add('confirmb')
    editButton.addEventListener('click', () => {
        const newInput = document.createElement('input')
        const newButton = document.createElement('button')
        newInput.classList.add('new-input')
        newButton.classList.add('new-button')
        newTask.appendChild(newButton)
        newTask.appendChild(newInput)
        newButton.addEventListener('click', () =>{
            tasks.splice(indexTask, 1, newInput.value)
            console.log(newInput.value)
            render()
        })
    })
    deelteButton.classList.add('deleteb')
    deelteButton.addEventListener('click', () => {
        deleteTask(indexTask)
    })
    newTask.classList.add('block')
    newTask.textContent = task
    newTask.appendChild(deelteButton)
    newTask.appendChild(editButton)
    mainDiv.appendChild(newTask)
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
// function editTask(indexTask){
    
// }

addButton.addEventListener('click', addTask)

