
// EJERCICIO 1 

const BLUE_BOX = document.getElementById("blueBox")
const RED_BOX = document.getElementById("redBox")
const GREEN_BOX = document.getElementById("greenBox")
const YELLOW_BOX = document.getElementById("yellowBox")

const PINTAR = (elemento, color) => {
    elemento.style.backgroundColor = color
}

BLUE_BOX.addEventListener("click", () => {
    PINTAR(BLUE_BOX, "black")
})

RED_BOX.addEventListener("click", () => {
    PINTAR(RED_BOX, "black")
})

GREEN_BOX.addEventListener("click", () => {
    PINTAR(GREEN_BOX, "black")
})

YELLOW_BOX.addEventListener("click", () => {
    PINTAR(YELLOW_BOX, "black")
})


// EJERCICIO 2
const DEFAULT_COLOR = "white"
const DIV_KEY = document.getElementById("key")
const MENSAJE = document.getElementById("mesage")
const PINK = "pink"
const ORANGE = "orange"
const GREEN = "green"

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        DIV_KEY.style.backgroundColor = PINK
        MENSAJE.textContent = 'Presionaste la letra ' + event.key + ' el cuadro ahora  "ROSA".'
    } else if (event.key === 's' || event.key === 'S') {
        DIV_KEY.style.backgroundColor = ORANGE
        MENSAJE.textContent = 'Presionaste la letra ' + event.key + ' el cuadro ahora es "ORANGE".'
    } else if (event.key === 'd' || event.key === 'D') {
        DIV_KEY.style.backgroundColor = GREEN
        MENSAJE.textContent = 'Presionaste la letra ' + event.key + ' el cuadro ahora es "VERDE".'
    }else {
        DIV_KEY.style.backgroundColor = DEFAULT_COLOR
        MENSAJE.textContent = 'Presiona las TECLAS correspondientes.'
    }
})



// EJERCICIO 3
const YELLOW = "yellow"
const BLUE = "blue"
const BROWN = "BROWN"
const MENSAJE_2 = document.getElementById("mesage2")
const DIV_KEY1 = document.getElementById("key1")

document.addEventListener('keydown', function (event) {
    if (event.key === 'q' || event.key === 'Q') {
        DIV_KEY1.classList.add("style_key1")
        DIV_KEY1.style.backgroundColor = YELLOW
        MENSAJE_2.textContent = 'Presionaste la letra ' + event.key + ' el cuadro ahora  "AMARILLO".'
    } else if (event.key === 'w' || event.key === 'W') {
        DIV_KEY1.style.backgroundColor = BLUE
        MENSAJE_2.textContent = 'Presionaste la letra ' + event.key + ' el cuadro ahora es "AZUL".'
        DIV_KEY1.classList.add("style_key1");
    } else if (event.key === 'e' || event.key === 'E') {
        DIV_KEY1.style.backgroundColor = BROWN
        MENSAJE_2.textContent = 'Presionaste la letra ' + event.key + ' el cuadro ahora es "MARRON".'
        DIV_KEY1.classList.add("style_key1");
    }else {
        MENSAJE_2.textContent = 'Preciona las TECLAS correspondientes'
        DIV_KEY1.classList.remove("style_key1")
    }
})
