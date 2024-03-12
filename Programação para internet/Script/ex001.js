const n1 = document.getElementById('numero1')
const n2 = document.getElementById('numero2')
let valor = document.getElementById('valor')

function soma() {
    var valor1 = parseInt(n1.value);
    var valor2 = parseInt(n2.value);
    
    document.getElementById('id').innerHTML = valor1 + valor2
    
}

function subtracao () {
    var valor1 = parseInt(n1.value);
    var valor2 = parseInt(n2.value);
    
    document.getElementById('id').innerHTML = valor1 - valor2
}

function divisao () {
    var valor1 = parseInt(n1.value);
    var valor2 = parseInt(n2.value);
    
    document.getElementById('id').innerHTML = valor1 / valor2
}

function mult () {
    var valor1 = parseInt(n1.value);
    var valor2 = parseInt(n2.value);
    
    document.getElementById('id').innerHTML = valor1 * valor2
}
