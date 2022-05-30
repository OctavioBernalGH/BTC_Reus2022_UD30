
/* Se define la variable numeroIntroducido para calcular su factorial */
var numeroIntroducido = prompt('Introduce un número para calcular su factorial: ');

/* Se muestra una alerta indicando que se calculará el factorial */
alert(`Se calculará el factorial de ${numeroIntroducido}!`)

/* Mediante un bucle for se calcula el factorial del número introducido */
for (let i = numeroIntroducido - 1; i > 1; i--) {
        numeroIntroducido = numeroIntroducido * i;
}

/* Con el alert indicamos el factorial */
alert(`El factorial es: ${numeroIntroducido}`)

