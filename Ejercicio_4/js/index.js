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