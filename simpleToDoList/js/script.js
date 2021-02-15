import {createEl, selectEl} from './create.js'

// SELECT  ELEMENTS FOR LIST

const input = selectEl('input')
const addBtn = selectEl('.addItm')
const ulList = selectEl('.ulList')
const filterOption = selectEl('.option')
let checkedItem = selectEl('.checked')
let dltItem = selectEl('.deleted')

// CREATE LIST

addBtn.addEventListener('click', addItems)
ulList.addEventListener('click', dltCheck)
filterOption.addEventListener( 'click', filterList)

// FUNCTION  CREATE DIV WITH ITEMS WITH CHECK AND DELETE
function addItems(e) {
    e.preventDefault()
    // CREATE ELEMENTS FOR LIST 
    const divLi = createEl('div', 'divLi')
    const li = createEl('li', 'item')
    const check = createEl('button', 'check')
    const dlt = createEl('button', 'dlt')
    // IN CASE VALUE IS EMPTY STRING
    if( input.value === '') {
        divLi.style.display = 'none'
    }
    // HTML - TEXT CONTENT
    li.textContent = input.value
    check.innerHTML = `<i class="fas fa-tasks"></i>`
    dlt.innerHTML = `<i class="far fa-trash-alt"></i>`
    
    divLi.appendChild(li)
    divLi.appendChild(check)
    divLi.appendChild(dlt)

    ulList.appendChild(divLi)

    // RESTART VALUE
    input.value = ''
        
}

function dltCheck(e) {
    let item = e.target
    
    // delete 
    if( item.classList[0] === 'dlt') {
        const parent = item.parentElement;
        parent.classList.add('fall')
        parent.addEventListener('transitionend', ()=> {

            parent.remove()
        })
    }

    // check
    if( item.classList[0] === 'check') {
         const sibling = item.previousSibling;
         const parent = item.parentElement;
         sibling.classList.toggle('active')
         item.classList.toggle('complete')
         parent.classList.toggle('completed')
    }
}

// FILTER LIST

function filterList(e) {
    const todos = ulList.childNodes

    todos.forEach( function(item){
    console.log(item)

        switch(e.target.value) {
            case 'all':
                item.style.display = 'flex'
                break;
            case 'completed':
                if( item.classList.contains('completed')) {
                    item.style.display = 'flex'
                } else {
                    item.style.display = 'none'
                }
                break;
            case 'uncompleted':
                if( !item.classList.contains('completed')) {
                    item.style.display = 'flex'
                } else {
                    item.style.display = 'none'
                }
                break;
        }      
})
}
