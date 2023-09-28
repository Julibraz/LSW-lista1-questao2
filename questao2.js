document.getElementById('botaoCalcular').addEventListener('click', function() {
    const base = parseFloat(document.getElementById('baseInput').value);
    const expoente = parseFloat(document.getElementById('expoenteInput').value);
    const resultado = calcularPotencia(base, expoente);
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
});

const calcularPotencia = (base, expoente) => Math.pow(base, expoente);
