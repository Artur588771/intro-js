/*1 Crea una funcion que recibe dos parametros(una oracion y la palabra a buscar). Retornar
true o flase en caso de que una oracion contenga una palabra dada, es decir,  si yo mando 
"Hola Mundo" y mando la palabra buscar "perro" me debe retornar un false, en cambio
 si yo mando mundo debe retornar true*/

 function buscarPalabra(oracion,palabra)
 {
   let buscar;   
   buscar=oracion.indexOf(palabra);   
   if (buscar>=0)return true;
   else return false;
 }

 buscarPalabra("Hola Mundo","perro");

 /*2 Mediante una funcion, y dando un arreglo de enteros const numbers =[1,2,3,4,10,11], 
 encuentra la suma de sus elementos*/

 function sumar(numbers)
 {     
   let suma=0;      
   for(let i=0;i<numbers.length;i++)
   {
     suma+=numbers[i];     
   }
   return suma;    
 }
const numbers=[1,2,3,4,10,11];
sumar(numbers);

/*3 Desarrolla un metodo para identicar si una palabraes un palindromo*/
function palindromo(palabra)
{
    let invertir="";
    for(let i=palabra.length-1;i>=0;i--)
    {
      invertir+=palabra[i];     
    }     
  if(palabra==invertir) return console.log('palindromo');
  else return console.log('No es palindromo');
}
palindromo("madam");
palindromo("computadora");

/*4 Crea un programa en donde cuentes el numero de ocurrencias que existen de una letra en
una cadena. Considera la cadena de texto y la letra a buscar como los parametros*/
function ocurrencias(cadena,letra)
{
   let arreglo=[]; 
   arreglo=cadena.split('');
   let repeticion=0;      
   if(arreglo.indexOf(letra)>=0) 
   {    
    for(let i=0;i<arreglo.length;i++)
    {
        if (arreglo[i]==letra)
        {
            repeticion++;
        }        
    }
    return repeticion;
   }   
   else return console.log('No se encuentra la letra');
}
ocurrencias("celular","l");

/*5 Escribe un metodo que retorne el elemento mayor del 
arreglo dado arr=[45,56,32,98,1000,5,23]*/
function mayor(arr)
{    
    arr.sort(function (a,b){return a-b});
    return arr[arr.length-1];

}

const arr=[45,56,32,98,1000,5,23];
mayor(arr);

/*6  Crea un programa el cual sirva para convertir temperaturas. De Celcius a Faranheit
 y viceversa. Utiliza las expresiones matematicas para la conversion, Que dicho programa
 recibe como argumentos las temperaturas y regresa el resultado imprimiendo en pantalla 
 la conversion*/
function conversion(temperatura,medida)
{
    let Faranheit;
    let Celcius;
    if(medida=='C') 
    {
     Faranheit=(temperatura*1.8)+32;   
     return console.log('La temperatura en Faranheit es '+Faranheit);
    }else{
        Celcius=(temperatura-32)/1.8;
        return console.log('La temperatura en Celcius es '+Celcius);
    }
    
}
conversion(28,"F");

