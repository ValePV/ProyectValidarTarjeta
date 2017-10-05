function isValidCard(card){
 do {
   var card = prompt("Ingrese el número de la tarjeta");
  card.split("").reverse();
 } while (!card)
 
   var pares=[]
   var sum = 0
  // busca los números en las posiciones impares, sumarlos a card
  for(i=0; i<card.length;i++){
    if(i%2==0){
      sum+=card[i]
    }else{
      // si no son pares que los coloque y los multiplique por dos
      pares.push(card[i]*2);
    }
  }
  //recorrer los numeros pares, si estos son menores que 10 que los sume
  for (var j=0; j< pares.length;j++){
    if(pares[j]<10){
      sum +=pares[j];
      // si no lo son :
    }else{
      // variable para transformar los pares en string
      var temp=pares[j]+("");
      // variable para separa los numeros que son mayores de 10
      var separ=temp.split("");
      //buscar en la variable y se suma a variable separ
      for(var r=0; r<separ.length;r++){
        sum+=parseInt(separ[r])
      }
    }
    // retornar si, si el resultado del modulos de 10 es 0 y no si es lo contrario.
  } return (sum %10===0 ? "Sí": "No")
}

 console.log(isValidCard())