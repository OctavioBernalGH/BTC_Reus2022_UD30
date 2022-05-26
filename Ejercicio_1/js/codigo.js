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
