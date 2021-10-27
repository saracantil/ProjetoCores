const listaCores = ['green', '#FA67CD', '#777ABC',]

var button = document.getElementById('botao_cor')
var input = document.getElementById('input_cor')
var span = document.getElementById ('texto_cor')

function quandoClicar (){
    //alert(input.value)
    var cor = input.value

    if (input.value) {
        // Tiver algo escrito (verdadeiro)
    } else {
        // se eu não tiver nada escrito (falso)
    }
 
    

    

    document.body.style.backgroundColor = cor
    span.textContent = cor

    // FORMAS PARA ESCREVER UMA COR
    // cor em inglês: red, green, blue, yellow
    // Hexadecimal: #8B008B, #FFFFFF
    // rgb (139,0,29)
    
}
button.addEventListener('click', quandoClicar)
