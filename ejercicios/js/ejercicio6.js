/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
*/

let primerNumero = prompt("Ingrese un numero");
if (primerNumero === null || primerNumero === "" || isNaN(primerNumero)) {
  document.write("Por favor, ingrese los numeros nuevamente");
} else {
    primerNumero = Number(primerNumero);
  let segundoNumero = prompt("Ingrese otro numero");
  if (segundoNumero === null || segundoNumero === "" || isNaN(segundoNumero)) {
    document.write("Por favor, ingrese los numeros nuevamente");
  } else {
    segundoNumero = Number(segundoNumero);
    if (primerNumero > segundoNumero) {
      document.write(primerNumero + " es el numero mas grande");
    } else if (segundoNumero > primerNumero) {
      document.write(segundoNumero + " es el numero mas grande");
    } 
  }
}
