const articleDate = document.getElementById("date")
const articleHours = document.getElementById("hours")

const week = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

setInterval(() => {
    let date = new Date()

    articleDate.innerHTML = `<p class="text-center">${week[date.getDay()]} ${date.getDate()} de ${
    month[date.getMonth()]} del ${date.getFullYear()}</p>`

    let minutes = date.getMinutes()
    let second = date.getSeconds()
    let hours = date.getHours()

    if (hours < 10) hours = "0" + hours
    
    if (minutes < 10) minutes = "0" + minutes

    if (second < 10) second = "0" + second

    articleHours.innerHTML = `<p class="text-center">${hours}:${minutes}:${second}</p>`

}, 1000)