let menuOpener = document.querySelector("#menu-opener");
let menu = document.querySelector("#menu");

menuOpener.addEventListener("click", () => {
    menu.classList.toggle("shown")
    menu.classList.toggle("hidden")
})
