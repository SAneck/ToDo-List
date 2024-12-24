const inputTask = document.querySelector('#text-task')
const addButton = document.querySelector('#add-button')
const mainDiv = document.querySelector('.main')


const tasks = []

function render(){
    mainDiv.innerHTML = ''
    tasks.forEach((task, indexTask) => {

    const newTask = document.createElement('div')
    const container = document.createElement('div')
    const containerbtn = document.createElement('div')
    const containerNewBlocks = document.createElement('div')

    const editButton = document.createElement('button')
    const deelteButton = document.createElement('button')
    editButton.textContent = 'Edit'
    deelteButton.textContent = 'Del'

    newTask.classList.add('block')
    container.classList.add('con')
    containerbtn.classList.add('con2')
    containerNewBlocks.classList.add('con-newbl')

    newTask.appendChild(container)
    newTask.appendChild(containerbtn)
    newTask.appendChild(containerNewBlocks)

    container.textContent = task
    containerbtn.appendChild(deelteButton)
    containerbtn.appendChild(editButton)   

    editButton.classList.add('confirmb')
    editButton.addEventListener('click', () => {

        const newInput = document.createElement('input')
        const newButton = document.createElement('button')
        newButton.textContent = 'Ent'

        newInput.classList.add('new-input')
        newButton.classList.add('new-button')

        newTask.appendChild(newInput)
        newTask.appendChild(newButton)

        newButton.addEventListener('click', () =>{
            
            newInput.value == '' ? alert('Введите текст!') :
            tasks.splice(indexTask, 1, newInput.value)
            render()
        })
        if(newButton){
            editButton.remove()
            deelteButton.remove()
        }

        containerNewBlocks.appendChild(newInput)
        containerNewBlocks.appendChild(newButton)

    })

    deelteButton.classList.add('deleteb')
    deelteButton.addEventListener('click', () => {
        deleteTask(indexTask)
    })


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

