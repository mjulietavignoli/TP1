/*8.- Escribe un programa que pida un número y diga si es divisible por 2 */

let numero = prompt("Ingrese un numero");

if (isNaN(numero) || numero === null || numero === "") {
  document.write("Ingrese nuevamente un numero");
} else {
  numero = Number(numero);
  if (numero % 2 === 0) {
    document.write(numero + " es divisible por 2");
  } else {
    document.write(numero + " no es divisible por 2");
  }
}
