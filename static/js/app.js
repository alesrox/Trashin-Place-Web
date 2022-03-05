window.addEventListener("resize", changeText);
changeText()

function changeText() {
    var width = document.documentElement.clientWidth;

    if (width < 550) {
        document.getElementById("text-lg").style.display = 'none';
        document.getElementById("text-sm").style.display = 'block';
    } else {
        document.getElementById("text-lg").style.display = 'block';
        document.getElementById("text-sm").style.display = 'none';
    }

    if (width >= 992 && width <= 1199) {
        document.getElementById("responsive-title").style.display = 'block';
    } else {
        document.getElementById("responsive-title").style.display = 'none';
    }
}

function warning() {
    alert("Lo sentimos mucho, la aplicación aún esta en proceso de desarrollo.\nPodrás descargarla próximamente. ^^");
    document.getElementById("btn-app").innerHTML = 'Próximamente';
}