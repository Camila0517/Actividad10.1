class ConvertidorDivisas {

    constructor(monto, moneda) {
        this.monto = monto;
        this.moneda = moneda;

        this.tasas = {
            USD: 0.054,
            EUR: 0.050,
            CAD: 0.073,
            JPY: 7.85
        };
        
        this.simbolos = {
            USD: "$",
            EUR: "€",
            CAD: "$",
            JPY: "¥"
        };
    }

    calcularConversion() {
        const tasa = this.tasas[this.moneda];
        const resultado = this.monto * tasa;
        
        return resultado.toLocaleString('es-MX', {
            style: 'currency',
            currency: this.moneda 
        });
    }

    resumen() {
        const totalConvertido = this.calcularConversion();
        const simbolo = this.simbolos[this.moneda];

        return `Equivale a: <br>
                <h2>${simbolo} ${totalConvertido}</h2>`;
    }
}


document.getElementById('formaConvertidor').addEventListener("submit", function(e) {
    
    e.preventDefault(); 

    const montoInput = parseFloat(document.getElementById('cantidad').value);
    const monedaInput = document.getElementById('moneda').value;
    const miConvertidor = new ConvertidorDivisas(montoInput, monedaInput);
    document.getElementById('resultado').innerHTML = miConvertidor.resumen();
});