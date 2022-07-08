/*1 Construye un codigo bajo las siguientes reglas:
-Itera arreglo = [1,4,6,10,22,55,46,2,5,0], utilizando un ciclo for
-Imprime en consola los valores que sean mayores a 3
*/
let arreglo=[1,4,6,10,22,55,46,2,5,0];
for(let i=0;i<arreglo.length;i++)
{
    if(arreglo[i]>3)
    console.log(`${i+1} - ${arreglo[i]}`);
}

/*1 Construye un codigo bajo las siguientes reglas
-Declara un arreglo vacio. Con un ciclo while que se ejecute 5 veces,agrega los elementos
al array*/
let i=0;
let bandasMetal=[];
while(i<5)
{
    bandasMetal[i]=prompt('Escribe una banda metal');
    i++;  
}
console.log(bandasMetal);

/*Por medio del ciclo for iterar el array arreglo = [1,4,6,10,22,55,46,2,5,0] 
e imprimir cada uno de los elementos de manera ordenada*/
let arreglo1=[1,4,6,10,22,55,46,2,5,0];
arreglo1.sort(function (a,b){return a-b});
for(let i=0;i<arreglo1.length;i++)
{    
    console.log(`${i+1} - ${arreglo1[i]}`);
}
