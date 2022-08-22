function Sim() {
    var back = document.getElementById("body");
    var text = document.getElementById("text").innerHTML = '<3';
    back.setAttribute("style", "background-color: red; transition: 3s;");
    text.setAttribute("style", "transition: 3s; transform: scale(3.4);");
}

function Nao() {
    var back = document.getElementById("body");
    back.setAttribute("style", "background-image: url(https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2019/01/O-Exorcista.jpg); background-repeat: no-repeat; height: 100%; background-size: cover; z-index: 2;");
}