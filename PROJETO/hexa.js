const listaCores = ['green','#FA67CD','#777ABC','rgb(200,45,0)']

var button = document.getElementById('botao')


function numeroRandomico(){
    return Math.floor(Math.random() * listaCores.length)
}

function quandoClicar(){
    
    document.body.style.backgroundColor= cor
    span.textContent = cor

}
button.addEventListener('click',quandoClicar)
