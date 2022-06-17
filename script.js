const label = document.querySelector('#gameplay')
const body = document.querySelector('body')
const bg = document.querySelector('.td')
const toDo = document.querySelector('.addT')
const click = document.querySelector('.add')
const addtask = document.querySelector('.add_Task')
const input = document.querySelector('.addtext')
const task = document.querySelector('.addtask')
const ul = document.querySelector('.ul')
// const button = document.querySelector('.listItems')
// const list = document.querySelector('.list')






chores = []

function callbackfunc() {
    body.classList.toggle('dark')
    bg.classList.toggle('grey')
    toDo.classList.toggle('pue')
    click.classList.toggle('bluegray')
    addtask.classList.toggle('bluegray')
    input.classList.toggle('bluegray')
    ul.classList.toggle('pue')
    
    
}
label.addEventListener('click',callbackfunc)




const addListItems = () => {
    const inputValue = input.value
    const text = '⨉'
    const workDone = '✔'
    if(inputValue ==""){
        this.alert("No task is added")
    }
    else{
        if(chores.includes(inputValue)){
            window.alert("Task already recorded")
        }
        else{
        chores.push(inputValue)
        console.log(chores)
       const element1 = document.createElement('p')
       const wrap = document.createElement('div')
        element1.classList.add('list')
       const TextNode = document.createTextNode(inputValue)
        element1.appendChild(TextNode)
        wrap.appendChild(element1)
        
        wrap.classList.add('ul')
        const element2 = document.createElement('button')
        const element3 = document.createElement('button')
       const buttontext = document.createTextNode(text)
       const done = document.createTextNode(workDone)
        element2.classList.add('listItems')
        element3.classList.add('tick')
        element2.appendChild(buttontext)
        element3.appendChild(done)
        wrap.appendChild(element3)
        wrap.appendChild(element2)
        task.appendChild(wrap)
        input.value = ""
        element2.addEventListener('click',() => {
            wrap.parentNode.removeChild(wrap)
           const content = element1.innerHTML
            console.log(content)
           const index = chores.indexOf(element1.innerHTML)
            chores.splice(index,index+1)
            console.log(chores)
            
        })
        element3.addEventListener('click',() => {
           const completedTasks =element1.innerHTML
            element1.innerHTML = completedTasks +" "+ "(Finished)"
            element3.parentNode.removeChild(element3)
            
    })
    }}
}
click.addEventListener('click',addListItems)


