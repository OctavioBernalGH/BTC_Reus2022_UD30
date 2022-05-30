<table>
<tr>
<td width="100px"><img src="https://user-images.githubusercontent.com/103035621/170134842-3dabf88b-7ea3-4e45-b8b6-d4f5b87887d2.png" alt=""/></td>
<td width="1000px"> <h2> JAVASCRIPT + HTML EJERCICIOS UNIDAD 30 </h2> </td>

</tr>
</table>

[![HTML](https://img.shields.io/badge/HTML5-BackEnd-important)]()
[![CSS](https://img.shields.io/badge/CSS-Styles-informational)]()
[![GitHub](https://img.shields.io/badge/GitHub-Repository-lightgrey)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-Logical-success)]()

El siguiente conjunto de ejercicios ha sido realizado por:
[ Octavio Bernal](https://github.com/OctavioBernalGH)

<b>Ejercicio: 1</b> Se modifica el script facilitado en clase, el resultado tras la modificación será el siguiente:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 1</title>
  </head>
  <body>
    <p class="parrafo"></p>
  </body>
  <!-- Se ejecuta un script enlazado con src -->
  <script src="/Ejercicio_1/js/codigo.js"></script>
</html>
```

El siguiente fragmento de código será el generado en el javascript.

```js
// Se muestran mensajes por consola.
console.log('Hola Mundo!');
console.log('Soy el primer script');
// Se obtiene el párrafo por ID.
let campoParrafo = document.getElementsByClassName('parrafo');
// Se observa que al haber solo un párrafo es la posición 0.
console.log(campoParrafo);
// Se setea un valor en el párrafo.
campoParrafo[0].innerHTML = "Soy el primer párrafo";
// Se muestra un pop-up de alerta.
alert('Por favor active el soporte para javascript');
```

<b>Ejercicio: 2</b> Se modifica el ejercicio anterior para mostrar un mensaje al usuario generada en una variable llamada mensaje.

```js
// Se muestran mensajes por consola.
console.log('Hola Mundo!');
console.log('Soy el primer script');
// Se obtiene el párrafo por ID.
let campoParrafo = document.getElementsByClassName('parrafo');
// Se observa que al haber solo un párrafo es la posición 0.
console.log(campoParrafo);
// Se setea un valor en el párrafo.
campoParrafo[0].innerHTML = "Soy el primer párrafo";
// Se crea un mensaje en una variable.
let mensaje = "Por favor actualice su navegador para soportar javascript.";
// Se muestra un pop-up de alerta.
alert(mensaje);
// Se crea mensaje mediante comilla abierta para incluir carácteres especiales.
let mensaje2 = `Hola Mundo!\nQué fácil es incluir 'comillas simples'\ny "comillas dobles"`;
// Se muestra el mensaje anterior mediante pop-up.
alert(mensaje2);
```

<b>Ejercicio: 3</b> Crear un array llamado meses y que almacene el nombre de los doce meses del año. Se mostrará por pantalla dichos nombres mediante la función console.log().

```js
// Se crea un array de meses
let mesesAño = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 
'junio', 'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'];

// Se muestran los valores mediante el método toString.
console.log(mesesAño.toString());
```

<b>Ejercicio: 4</b> A partir del siguiente array (var valores = [true, 5, false, "hola", "adios", 2]; Se deberá determinar cual de los números es mayor que el otro, comprobar los valores boleanos y cambiar su valor y realizar las cinco operaciones matemáticas con los números:

```js
var valores = [true, 5, false, "hola", "adios",2];
console.log(valores);

// Se extraen los valores numéricos puesto todos están en formato String.
var valoresNumericos = [valores[1], valores[5]];
console.log(valoresNumericos);

// Comparamos dos números
if(valoresNumericos[0]> valoresNumericos[1]) {
    console.log(`El número ${valoresNumericos[0]} es más grande que ${valoresNumericos[1]}`);
}

// Mediante un bucle for comprobamos si hay un boleano en un arreglo y lo cambiamos de valor.
for (let index = 0; index < valores.length; index++) {
    if(valores[index] == true || valores[index] == false){
        let boleano = valores[index];
        console.log(`El valor es ${boleano}`);
        if(boleano == true){
            boleano = false;
            console.log('Se ha convertido a ' + boleano);
        } else if(boleano == false) {
            boleano = true;
            console.log('Se ha convertido a ' + boleano);
        }
    }
}

let suma = 0; resta = 0; division = 0; multiplicacion = 0;
suma            = valoresNumericos[0] + valoresNumericos[1];
resta           = valoresNumericos[0] - valoresNumericos[1];
division        = valoresNumericos[0] / valoresNumericos[1];
multiplicacion  = valoresNumericos[0] * valoresNumericos[1];
modulo          = valoresNumericos[0] % valoresNumericos[1];

console.log(`Operaciones entre ${valoresNumericos[0]} y ${valoresNumericos[1]}
            Suma = ${suma}
            Resta = ${resta}
            Dividir = ${division}
            Multiplicación = ${multiplicacion}
            Módulo = ${modulo}`);
```

<b>Ejercicio: 5</b> Completar las condiones IF del ejercicio propuesto, a continuación se muestra el resultado.

```js
var numero1 = 5;
var numero2 = 5;

if(numero1<numero2){
    console.log("numero 1 no es mayor que numero2");
}

if(numero2 > 0){
    console.log("numero 2 es positivo");
}

if(numero1 < 0 && numero1 != 0){
    console.log("numero 1 es negativo o distinto que cero");
}

if((numero1+1)){
    console.log("Incrementar en 1 unidad el valor de numero 1 no lo hace mayor o igual que numero 2")
}
```

<b>Ejercicio: 6</b> El usuario introducirá por prompt el número de su DNI, si el número está fuera del rango mostrará un mensaje informando de eso, a continuación pedirá introducir la letra del DNI y el programa calculará la letra.

```js
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
```

<b>Ejercicio: 7</b> Calculadora de factoriales, el usuario introducirá un número y se generará su factorial.

```js
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
```

<b>Ejercicio: 8</b> El usuario introducirá un número por prompt y se comprobará si és par o impar.

```js
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
```

<b>Ejercicio: 9</b> El usuario introducirá una cadena y el programa indicará si la cadena está en mayúsculas, minúsculas o contiene ambas. Para ello se generará el siguiente código:

```js

/* Se introduce por pantalla la cadena */
var cadena = prompt('Introduce una cadena de texto:')
var mayusculas = 0;
var minusculas = 0;

/* Función para comprobar el tipo de letra */
function comprobarTipoLetra(cadena){
    /* Se recorre la cadena */
    for(let i = 0; i < cadena.length; i++){
        /* Se verifica si la letra en la posición del índice es mayúsculas*/
        if(cadena.charAt(i) == cadena.charAt(i).toUpperCase()){
            mayusculas++;
            console.log("Mayusculas " + mayusculas);
        /* Se verifica si la letra en la posición del índice es minúsculas */
        } else if (cadena.charAt(i) == cadena.charAt(i).toLowerCase()){
            minusculas++;
            console.log("Minusculas " + minusculas);
        }
    }

    /* Se verificará si la cadena está en mayúsculas, minúsculas o contendrá ambas.*/
    if ((mayusculas > 0) && (minusculas == 0)){
        alert(`La cadena introducida está en mayusculas.`);
        console.log('es mayus');
    } else if((mayusculas == 0) && (minusculas > 0)){
        alert(`La cadena introducida está en minúsculas`);
        console.log('es minus');
    } else if((mayusculas > 0) && (minusculas > 0)){
        alert(`La cadena contiene letras en mayúsculas y minúsculas.`);
        console.log('contiene ambas');
    }
}

/* Se llama a la función */
comprobarTipoLetra(cadena);
```

<b>Ejercicio: 10</b> El usuario introducirá una cadena y el programa determinará si es un palíndromo o no, para realizar esta verificación se creará una variable nueva y mediante un bucle se invertirá el valor de la primera cadena. A continuación un condicionante if validará si ambas cadenas son iguales (palíndromo) o no:

```js

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
```
