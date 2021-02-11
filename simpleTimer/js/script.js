import {createEl, selectEl} from './create.js'

const wrap = selectEl('.wrap')
const burger = selectEl('.burger')

// !toggle with burger

burger.addEventListener('click', () => { 
    wrap.classList.toggle('active')
    burger.classList.toggle('toggle')
})

// CLOCK PARTS

const start = createEl('button', 'btn')
const input = createEl('input')
input.setAttribute('value', '')
input.setAttribute('placeholder', 'Insert Number')
const clock = createEl('div', 'clock')


wrap.appendChild(start)
wrap.appendChild(input)
wrap.appendChild(clock)
start.textContent = 'START'


start.addEventListener('click', () => {
    
    start.style.visibility = 'hidden'
    const rest = createEl('button', 'rest')
    rest.textContent = 'RESET'
    
    wrap.appendChild(rest)
    let time = input.value * 60
    setInterval(startTimer, 1000)

function startTimer() {

    let minute = Math.floor( time / 60)
    let secund = time % 60

    minute = minute<10 ? `0${minute}` : minute
    secund = secund<10 ? `0${secund}` : secund

    

    if( time >= 0) {
        time --
        clock.innerHTML = `<p>${minute}</p><p>:</p><p>${secund}</p>`
        input.style.display = 'none'
    } 
        rest.addEventListener('click', () => {
            location.reload()
        })
    }
    
startTimer()
})