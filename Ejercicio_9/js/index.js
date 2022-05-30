
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