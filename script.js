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

    const deelteButton = document.createElement('button')
    const editButton = document.createElement('button')

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
    editButton.addEventListener('click' || 'keydown', () => {
        containerNewBlocks.style.display ='flex'
        container.style.display = 'none'
        containerbtn.style.display = 'none'

        const newInput = document.createElement('input')
        const cancelButton = document.createElement('button')
        const newButton = document.createElement('button')
        newInput.placeholder = "Редактируйте..."

        newInput.classList.add('new-input')
        cancelButton.classList.add('cancel-button')
        newButton.classList.add('new-button')

        newTask.appendChild(newInput)
        newTask.appendChild(cancelButton)
        newTask.appendChild(newButton)
        cancelButton.addEventListener('click',() => {
            render()
        })
        newButton.addEventListener('click', () =>{
            if(tasks.includes(newInput.value) !== true){
                newInput.value.trim() == '' ? alert('Введите текст!') :
                tasks.splice(indexTask, 1, newInput.value)
                render()
            } else{
                alert('У вас уже есть эта задача!')
            }
        })
        if(newButton){
            editButton.remove()
            deelteButton.remove()
        }

        containerNewBlocks.appendChild(newInput)
        containerNewBlocks.appendChild(cancelButton)
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
    if(tasks.includes(inputTask.value) !== true){
        inputTask.value.trim() == '' ? alert("Вы ничего не ввели") :
        tasks.push(inputTask.value)
        inputTask.value =''
        render()
    } else{
        alert('У вас уже есть эта задача!')
    }
}

function deleteTask(indexTask){
    tasks.splice(indexTask, 1)
    render()
}

addButton.addEventListener('click', addTask)
