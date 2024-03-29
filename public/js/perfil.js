// OBJETIVO: mostrar alerta caso o campode nome
// seja abandonado sem ser preenchido

// 1- Representar/Capturar o campo "nome" p o mundo JS
// document.getElementById
// document.querySelector("#seletor .de css")
// document.querySelectorAll("#seletor .de css")
let inputNome = document.getElementById("nome");

// 2- Associar uma ação a ser realizada ao evento 
//          "deixou o campo"
inputNome.addEventListener('blur', verificaSeCampoDigitado);

// 3- Definir a ação (função) que será executada...
function verificaSeCampoDigitado() {
    if(inputNome.value == ''){
        alert("Preencha o campo, preguiçoso(a)");
    }
}

//let div = document.createElement("div");
//div.innerHTML = "Texto adicionado dinamicamente...";
//document.body.appendChild(div);