var label = document.querySelector('#gameplay')
var body = document.querySelector('body')
var bg = document.querySelector('.td')
var toDo = document.querySelector('.addT')
var click = document.querySelector('.add')
var addtask = document.querySelector('.add_Task')
var input = document.querySelector('.addtext')
var task = document.querySelector('.addtask')
var ul = document.querySelector('.ul')
var button = document.querySelector('.listItems')
var list = document.querySelector('.list')






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




const addListItems = (event) => {
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
        var element1 = document.createElement('p')
        var wrap = document.createElement('div')
        element1.classList.add('list')
        var TextNode = document.createTextNode(inputValue)
        element1.appendChild(TextNode)
        wrap.appendChild(element1)
        
        wrap.classList.add('ul')
        var element2 = document.createElement('button')
        var element3 = document.createElement('button')
        var buttontext = document.createTextNode(text)
        var done = document.createTextNode(workDone)
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
            var content = element1.innerHTML
            console.log(content)
            var index = chores.indexOf(element1.innerHTML)
            chores.splice(index,index+1)
            console.log(chores)
            
        })
        element3.addEventListener('click',() => {
            var completedTasks =element1.innerHTML
            element1.innerHTML = completedTasks +" "+ "(Finished)"
            element3.parentNode.removeChild(element3)
            
    })
    }}
}
click.addEventListener('click',addListItems)


