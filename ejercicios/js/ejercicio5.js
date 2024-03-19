/*5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
*/

let primerNumero = prompt("Ingrese un numero");

if (isNaN(primerNumero) || primerNumero === null || primerNumero === "") {
  document.write("Ingrese nuevamente un numero");
} else {
  primerNumero = Number(primerNumero);
  let segundoNumero = prompt("Ingrese otro número");
  if (isNaN(segundoNumero) || segundoNumero === null || segundoNumero === "") {
    document.write("Ingrese nuevamente un numero");
  } else {
    segundoNumero = Number(segundoNumero);
    document.write(
      "La suma de ambos numeros es: " + (primerNumero + segundoNumero)
    );
  }
}
