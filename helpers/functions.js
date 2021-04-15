export  const nbrDigitToMultiplication=(choixNbrDigit1,choixNbrDigit2,setnombre1Array,setnombre2Array,setnbrLigneResultat)=>{
    let nombre1 = Math.round(Math.random() * Math.pow(10, choixNbrDigit1));
    let nombre2 = Math.round(Math.random() * Math.pow(10, choixNbrDigit2));
    while (nombre1< Math.pow(10, choixNbrDigit1-1)){
      console.log("nombre1 pas bon ! ",nombre1)
      nombre1 = Math.round(Math.random() * Math.pow(10, choixNbrDigit1))
      console.log(nombre1)
    } 
    while (nombre2< Math.pow(10, choixNbrDigit2-1)){
      console.log("nombre2 pas bon ! ",nombre2)
      nombre2 = Math.round(Math.random() * Math.pow(10, choixNbrDigit2))
    } 
    console.log('nbr1 ', nombre1, ' & nbr 2 ', nombre2);
    const resultat = nombre1*nombre2
    let nombre1Array = nombre1.toString().split('');
    let nombre2Array = nombre2.toString().split('');
    let resultatArray = resultat.toString().split('');

    const nbrChiffre1 = nombre1Array.length;
    const nbrChiffre2 = nombre2Array.length;
    const nbrChiffreResultat = resultatArray.length;
    console.log("resultatArray",resultatArray)
    console.log("resultat",resultat)
    console.log("nbrChiffreResultat",nbrChiffreResultat)
    console.log("nbrChiffre1",nbrChiffre1)
    console.log("nbrChiffre2",nbrChiffre2)
    const diff = Math.abs(nbrChiffreResultat - nbrChiffre1);
console.log("diff",diff)
    for (let i = 0; i < diff+1; i++) {
      nombre2Array.unshift('');
   
    }
    for (let i = 0; i < diff; i++) {
      nombre1Array.unshift('');
   
    }

    nombre2Array.unshift('X');
  
    setnombre1Array(nombre1Array);
    setnombre2Array(nombre2Array);
    setnbrLigneResultat(nbrChiffre2)
console.log("func",nbrChiffre2)
console.log("et la ?",nombre1Array,nombre2Array)
    return {nombre1Array:nombre1Array,nombre2Array:nombre2Array,nbrLigneResultat:nbrChiffre2}
  }