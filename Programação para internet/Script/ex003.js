let num = document.getElementById('numero')

function descubra() {
    const valor1 = parseInt(num.value);
    let n = Math.floor(Math.random() * 100) + 1;
    
    if (valor1 > 0 && valor1 < 101) {
        if (n === valor1){
            window.alert(` ${n} é igual ${valor1}, VOCÊ É SHOW PAPAI!!! `)

        } else if (n > valor1) {
            window.alert(` ${n} é maior que ${valor1}, tente novamente! `)

        } else if (n < valor1 ) {
            window.alert(` ${n} é menor que ${valor1}, tente novamente! `)

    } 

    }  
}