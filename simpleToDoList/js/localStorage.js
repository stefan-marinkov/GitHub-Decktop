import {createEl, selectEl} from './create.js'
import {ulList} from './script.js'

// LOCAL GET
export function getItems() {
    let items;
    if(localStorage.getItem('items') === null) {
        items = []
    } else {
        items = JSON.parse(localStorage.getItem('items'))
    }
    items.forEach( item => {
                // CREATE ELEMENTS FOR LIST 
            const divLi = createEl('div', 'divLi')
            const li = createEl('li', 'item')
            const check = createEl('button', 'check')
            const dlt = createEl('button', 'dlt')

            // HTML - TEXT CONTENT
            li.textContent = item
            check.innerHTML = `<i class="fas fa-tasks"></i>`
            dlt.innerHTML = `<i class="far fa-trash-alt"></i>`
            
            divLi.appendChild(li)
            divLi.appendChild(check)
            divLi.appendChild(dlt)

            ulList.appendChild(divLi)
            })
}

// LOCAL SET

export function saveToLocal(item) {
    let items;
    if(localStorage.getItem('items') === null) {
        items = []
    } else {
        items = JSON.parse(localStorage.getItem('items'))
    }
    items.push(item)
    localStorage.setItem('items', JSON.stringify(items))
}



// REMOVE LOCAL
export function removeLocal(item) {
    let items;
    if(localStorage.getItem('items') === null) {
        items = []
    } else {
        items = JSON.parse(localStorage.getItem('items'))
    }
    const itemIndex = item.children[0].innerText
    items.splice(items.indexOf(itemIndex), 1)
    localStorage.setItem('items', JSON.stringify(items))
}