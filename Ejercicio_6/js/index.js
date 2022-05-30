/* Se introducen las letras en un arreglo */
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

/* Se le pide al usuario que introduzca el dni */
var dni = prompt('Introduce el número de tu DNI:');

/* Se muestra por consola el valor introducido */
console.log(dni);

/* Se valida el número introducido */
if (dni>0 && dni<99999999){
    /* El usuario introducirá la letra */
    var introduceLetra = prompt('Introduce la letra del DNI')

    /* Se realiza el módulo del número de dni entre las letras */
    var resultado = dni%23;
    
    /* La letra del dni será el resultado del módulo sobre las letras */
    var letraDNI = letras[resultado]
    
    /* Se muestra el dni con letra */
    console.log("El dni calculado es: " + dni + letraDNI)

    /* Se valida con el del usuario */
    if(introduceLetra == letraDNI){
        console.log('La letra introducida es igual a la calculada.')
    }
}
else{
    /* Si el dni introducido es incorrecto aparecerá el siguiente error */
    alert('El dni introducido no es valido')
}

