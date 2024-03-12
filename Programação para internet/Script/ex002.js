
const ano = document.getElementById('ano');


function calculado_idade () {
    
    const idade = parseInt(ano.value);
    const age = 2024 - idade;
    
    alert(`sua idade é: ${age}`);
}
