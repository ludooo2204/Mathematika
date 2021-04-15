export  const nbrDigitToMultiplication=(choixNbrDigit1,choixNbrDigit2,setnombre1Array,setnombre2Array)=>{
    const nombre1 = Math.round(Math.random() * Math.pow(10, choixNbrDigit1));
    const nombre2 = Math.round(Math.random() * Math.pow(10, choixNbrDigit2));
    console.log('nbr1 ', nombre1, ' & nbr 2 ', nombre2);
    let nombre1Array = nombre1.toString().split('');
    let nombre2Array = nombre2.toString().split('');

    const nbrChiffre1 = nombre1Array.length;
    const nbrChiffre2 = nombre2Array.length;
    const diff = Math.abs(nbrChiffre2 - nbrChiffre1);

    for (let i = 0; i < diff; i++) {
      nombre2Array.unshift('');
    }

    nombre2Array.unshift('X');
    nombre1Array.unshift('');
    setnombre1Array(nombre1Array);
    setnombre2Array(nombre2Array);
console.log("func")
    return {nombre1Array:nombre1Array,nombre2Array:nombre2Array}
  }