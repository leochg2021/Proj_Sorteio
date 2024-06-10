function generateNumber(){

    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)

    const numeroSorteado = Math.floor(Math.random() * (max - min + 1) + min);
    // The maximum is inclusive and the minimum is inclusive

    document.getElementById('resultado').textContent = numeroSorteado;
}