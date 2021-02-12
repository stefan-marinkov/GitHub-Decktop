import {createEl, selectEl} from './create.js'

// SELECT  ELEMENTS FOR LIST

const input = selectEl('input')
const addBtn = selectEl('.addItm')
const ulList = selectEl('.ulList')
let checkedItem = selectEl('.checked')


// CREATE LIST

addBtn.addEventListener('click', addItems)

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
    check.textContent = 'Ok'
    dlt.textContent = 'X'
    
    divLi.appendChild(li)
    divLi.appendChild(check)
    divLi.appendChild(dlt)

    ulList.appendChild(divLi)
    // RESTART VALUE
    input.value = ''
    // TOGGLE CHECK AND DELETE BUTTON
        check.addEventListener( 'click', () => {
            li.classList.toggle('active')
            check.classList.toggle('active')
            localStorage.setItem('checked',JSON.stringify(input.value))
        })
        dlt.addEventListener('click', () => {
            divLi.style.display = 'none'
        })
}

// LOCAL STORAGE



