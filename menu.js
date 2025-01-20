function abrirMenu() {
    document.getElementById("menuMobile").classList.add("abrir-menu");
    document.getElementById("overlayMenu").style.display = "block";
}

function fecharMenu() {
    document.getElementById("menuMobile").classList.remove("abrir-menu");
    document.getElementById("overlayMenu").style.display = "none";
}
