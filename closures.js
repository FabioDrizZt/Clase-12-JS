function crearContador(nro = 0) {
  const nombres = ["Gaby", "Hector", "Cecilia", "Nico"];
  let contador = nro;
  function incrementa() {
    console.log(nombres[contador % nombres.length]);
    contador++;
  }
  function decrementa() {
    if (contador > 0) contador--;
    console.log(nombres[contador]);
  }
  return { incrementa, decrementa };
}

console.log("Contador A");
const contadorA = crearContador();
contadorA.incrementa();
contadorA.incrementa();
contadorA.incrementa();
contadorA.incrementa();
contadorA.incrementa();
contadorA.incrementa();
contadorA.incrementa();
contadorA.incrementa();
