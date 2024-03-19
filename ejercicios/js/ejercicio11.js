/*11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)*/

let numero = prompt("Ingrese un numero");
let separador = 0;

if (isNaN(numero) || numero === null  || numero==='') {
  document.write("Ingrese nuevamente un numero");
} else {
  numero = Number(numero);
  if (
    numero % 10 === 0 ||
    numero % 10 === 1 ||
    numero % 10 === 2 ||
    numero % 10 === 3 ||
    numero % 10 === 4 ||
    numero % 10 === 5 ||
    numero % 10 === 6 ||
    numero % 10 === 7 ||
    numero % 10 === 8 ||
    numero % 10 === 9
  ) {
    if (
      numero % 7 !== 0 &&
      numero % 2 !== 0 &&
      numero % 3 !== 0 &&
      numero % 5 !== 0
    ) {
      document.write(
        numero + " no es divisible ni por 2, ni por 3, ni por 5, ni por 7"
      );
    } else {
      document.write(numero + " es divisible por: ");
      if (numero % 2 === 0) {
        document.write("2");
        separador++;
      }
      if (numero % 3 === 0) {
        if (separador > 0) {
          document.write(", ");
        }
        document.write("3");
        separador++;
      }
      if (numero % 5 === 0) {
        if (separador > 0) {
          document.write(", ");
        }
        document.write("5");
        separador++;
      }
      if (numero % 7 === 0) {
        if (separador > 0) {
          document.write(", ");
        }
        document.write("7");
        separador++;
      }
    }
  } else {
    document.write(numero + " no presenta divisores");
  }
}
