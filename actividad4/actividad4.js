/*Ejercicio 2 
Usando While crear un programa que pregunte al usuario un numero. 
Mostar los numeros que son multiplos de 5 desde 1 hasta el numero introducido
 por el usuario
*/
let numero;
numero=Number(prompt('Teclea por favor un numero'));
let i=1;
let resto;
while(i<=numero)
{
    resto=i%5;    
    if(resto==0)    
    console.log(i);    
    i++; 
}

/*Ejercicio 3 Crea el mismo problema 1, ahora usando Do while*/
let num;
num=Number(prompt('Teclea por favor un numero'));
let x=1;
let residuo;
do
{
    residuo=x%5;    
    if(residuo==0)    
    console.log(x);    
    x++; 
}while(x<=num);

/*Ejercicio 4 Usando for, crea un programa que impirma en consola los numeros impares
del 1 al 50*/
let a;
for(a=1;a<=50;a++)
{
    if(a % 2)
    console.log(a);
}

/*Ejercicio 5 Haciendo uso de for loop, imprimir una lista de numeros del 1 al 100
y excluir un rango de 10 numeros, el inicio y el fin del rango los determinara el usuario*/
let inicio;
let fin;
let y;
inicio=Number(prompt('Teclea el numero de inicio del rango a excluir (menor a 100)'));
if(inicio<=91)
{
for(y=1;y<=100;y++)
{
    if (y >= inicio && y<=inicio+9) { continue; }
    console.log(y);
}
}
else{alert('Porfavor ingresa un numero menor o igual a 91 para excluir 10 numeros');}
