import {createEl, selectEl} from './create.js'

const body = selectEl('body')
const div = createEl('div', 'wrap')
const input = createEl('input')
input.setAttribute('placeholder', 'mm / dd / yy')
const remainingTimeTo = createEl('div', 'flex')

body.appendChild(div)
div.innerHTML = `<h2 class='title'>It is Just a Simple Countdown Clock</h2>
<label class='para'>Input Date and press Enter</label>`
div.appendChild(input)
div.appendChild(remainingTimeTo)

setInterval(toMeetTheApocalypse, 1000)
function toMeetTheApocalypse() {
    const nowDate = new Date().getTime()
    const deadline = new Date(input.value || '05.29.2021.').getTime()
    const remainingTime = deadline - nowDate

    let secund = Math.floor((remainingTime / 1000) % 60) 
    let minute = Math.floor(remainingTime / (1000 * 60) % 60) 
    let hours = Math.floor(remainingTime / (1000 * 60 * 60) % 24) 
    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24)) 

    secund = secund < 10 ? `0${secund}` : secund;
    minute = minute < 10 ? `0${minute}` : minute;
    hours = hours < 10 ? `0${hours}` : hours;
    days = days < 10 ? `0${days}` : days;

    remainingTimeTo.innerHTML = 
    `<div class='clock'>Days: <br>${days}</div>
    <div class='clock'>Hours: <br>${hours}</div>
    <div class='clock'>Minutes: <br>${minute}</div>
    <div class='clock'>Seconds: <br>${secund}</div>`
}
toMeetTheApocalypse()

