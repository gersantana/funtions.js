
/*TIENE EL COLOR GREEN COMO PREDETERMINADO, SI NO SE LE PASA UN COLOR AL LLAMAR A LA FUNCION SE CARGARA EL COLOR VERDER AL HACER CLICK*/

function pintar(elemento, color = "green") {
    elemento.style.backgroundColor = color
    elemento.style.textDecoration = "underline";
    elemento.style.borderRadius = "20px"
}
const divHello = document.getElementById("ele1")
divHello.addEventListener("click", () => {
    pintar(divHello, "yellow")
});