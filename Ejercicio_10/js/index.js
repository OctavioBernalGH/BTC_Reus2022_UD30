
/* Se introduce una cadena por pantalla */
var cadena = prompt('Introduce una cadena palíndroma.');
/* Variable para almacenar la cadena invertida para posterior comparación */
var cadenaInversa = "";

/* Se comprueba si la cadena introducida es palíndroma */
function esPalindromo(cadena){
    
    /* Se da la vuelta a la cadena */
    for (var i = cadena.length - 1; i >= 0; i--) { 
        cadenaInversa += cadena[i]; 
    }
    /* Route tracing */
    console.log(cadena);
    console.log(cadenaInversa);

    /* Si son iguales son palíndromas.*/
    if (cadena == cadenaInversa){
        alert(`La cadena es palíndroma.`);
    } else{
        alert(`La cadena introducida no es palíndroma.`)
    }
}

/* Se llama la función de calcular si es palíndromo o no */
esPalindromo(cadena)