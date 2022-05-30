
/* Se introduce un número por prompt */
var numero = 0;
numero = prompt('Introduce un número por pantalla:')

/* Se crea una función para comprobar si es par o impar */
function esParEsImpar(numero){
    /* Mediante el módulo del número introducido entre dos se identifica si es par o no */
    if ((numero % 2) == 0){
        alert(`El número ${numero} es par.`)
    } else{
        alert(`El número ${numero} es impar.`)
    }
}

/* Se ejecuta la función */
esParEsImpar(numero);