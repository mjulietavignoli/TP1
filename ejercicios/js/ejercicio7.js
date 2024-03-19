/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.*/

let primerNumero = prompt("Ingrese un numero");
if (primerNumero === null  || primerNumero==='') {
  document.write("Por favor, ingrese los numeros nuevamente");
} else {
  primerNumero = Number(primerNumero);
  if (isNaN(primerNumero)) {
    document.write("Por favor, ingrese los numeros nuevamente");
  } else {
    let segundoNumero = prompt("Ingrese otro numero");
    if (segundoNumero === null || segundoNumero==='') {
      document.write("Por favor, ingrese los numeros nuevamente");
    } else {
      segundoNumero = Number(segundoNumero);
      if (isNaN(segundoNumero)) {
        document.write("Por favor, ingrese los numeros nuevamente");
      } else {
        let tercerNumero = prompt("Ingrese otro numero");
        if (tercerNumero === null || tercerNumero==='') {
          document.write("Por favor, ingrese los numeros nuevamente");
        } else {
          tercerNumero = Number(tercerNumero);
          if (isNaN(tercerNumero)) {
            document.write("Por favor, ingrese los numeros nuevamente");
          } else {
            if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
              document.write("El numero mas grande es " + primerNumero);
            } else if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
              document.write("El numero mas grande es " + segundoNumero);
            } else if (tercerNumero > primerNumero && tercerNumero > segundoNumero) {
              document.write("El numero mas grande es " + tercerNumero);
            }
          }
        }
      }
    }
  }
}
