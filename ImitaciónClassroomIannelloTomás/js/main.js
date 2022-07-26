const open = document.getElementById("btn-menu");
const close = document.getElementById("btn-home");
const lateral = document.getElementById("lateral");
const main = document.getElementById("main");
const ayuda = document.getElementById("btn-ayuda");
const nav = document.getElementById("nav");

open.addEventListener("click", () => {
    lateral.classList.add("desplegar")
    main.classList.add("intangible")
    nav.classList.add("intangible")
    ayuda.classList.add("mover-BtnAyuda")
})

close.addEventListener("click", () => {
    lateral.classList.remove("desplegar")
    main.classList.remove("intangible")
    nav.classList.remove("intangible")
    ayuda.classList.remove("mover-BtnAyuda")
})