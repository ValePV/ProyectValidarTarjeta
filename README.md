# Validación de Tarjetas

#### Para poder establecer si el numero de tarjeta es validos

+ Primero Solicitamos el numero de la tarjeta 
 *La pregunta saldrá hasta que se ingrese alguna cifra

+ La función recorre el número de la tarjeta
+ Separa los números 
 - Los números en las posiciones pares se multiplican por dos
 - Los números en las posiciones impares se suman al resultado de los numeros pares, si el resultado de la multiplicación da un numero mayor que 10, estos se suman 
   por separado
+ La suma de estos numeros debe ser divisible de 10
