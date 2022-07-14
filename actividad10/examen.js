//Problema 1
/*Crea una función para encontrar la diferencia de edad entre el miembro mas viejo 
y el más jóven de la familia. Retorna como resultado un objeto indicando las edades 
de cada miembro, y la diferencia de edad.*/
const Family = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];
function getEdad(arr){
    const edades = Family.map((objeto) => objeto.age);
    edades.sort(function (a,b){return a-b});
    let dife=(edades[edades.length-1])-edades[0];    
    Family.push({oldest:edades[0],youngest:edades[edades.length-1], 'age-difference':dife});
    return Family;      
}
console.log(getEdad(Family));
//### Problema 2
/*Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos.*/
const numbers = [ 1, -4, 12, 0, -3, 29, -150];
const positivos = numbers.filter(numero => numero>=0);
function sumarNumeros(arr){
  let suma=0;
  positivos.forEach((item) => {suma+=item; });
  return suma;
}
console.log(sumarNumeros(positivos));

//### Problema 3

//Cuente las ocurrencias de distintos elementos en la matriz 2D dada. La entrada dada es una matriz, cuyos elementos son matrices de cadenas. El resultado es un objeto cuyos nombres de propiedad son los valores de las matrices y su valor es el número de sus ocurrencias.

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];
function calc(arr,letra){
  let conta=0;
  arr.forEach((item) => {    
    item.forEach((item) => {
    if(item == letra){      
      conta++;
    } 
    })
  });
  return conta;
}
console.log(calc(input,'a'));
console.log(calc(input,'b'));
console.log(calc(input,'c'));
console.log(calc(input,'d'));
console.log(calc(input,'f'));
console.log(calc(input,'f'));

//### Problema 4

//Escriba una función de JavaScript que tomará una serie de números almacenados

//y encontrará el segundo número más bajos y segundos más altos, respectivamente

//del siguiente arreglo:  *`const arr = [3,4,6,1,5,2,9,10,23,12]`*

const arr = [3,4,6,1,5,2,9,10,23,12];
function buscarNumero(arreglo){  
  arr.sort(function (a,b){return a-b});
  console.log('El segundo numero mas bajo es '+arreglo[1]);  
  console.log('El segundo numero mas alto es '+arreglo[(arr.length)-2]);
}
console.log(buscarNumero(arr));
