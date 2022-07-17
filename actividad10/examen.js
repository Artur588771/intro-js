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
console.log(calc(input,'g'));

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

//### Problema 5:

//De la siguiente estructura de datos, contesta las siguientes preguntas creando 
//un programa para cada una.
let info = [
    {
        nombre: "Diego",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 100
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 70
            },
            {
                nombreMateria: "ciencias",
                calificacion: 55
            }
        ]
    },
    {
        nombre: "Jorge",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 60
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 65
            },
            {
                nombreMateria: "ciencias",
                calificacion: 80
            }
        ]
    }
]
//1. Retorna en un array las calificaciones de todos los estudiantes.
function calif(arr){
  let calificaciones=[];
  arr.forEach(item => {        
    item.materias.forEach(materias => {        
    calificaciones.push(materias.calificacion);
    })  
});    
 return calificaciones;
}
console.log(calif(info));

//2. Retorna el promedio de cada uno de los alumnos, 
//devolviendo un arreglo con objetos como esto: 
/*
```jsx
[
  { 
    "Jorge": {
      "promedio": 8.6
    }
  },
  {
    "Alumno": {
      "promedio": 5.5
    }
  },
  {
    "Alumno": {
      "promedio": 5.5
    }
  }
]*/
let promedio=[];
function calPromedio(arr){  
  let sumarCalif=0;
  let incre=0;
  let calProm=0;
  arr.forEach(item => {        
    item.materias.forEach(materias => {        
      sumarCalif+=materias.calificacion;
      incre++;
    })
    calProm=sumarCalif/incre;
    promedio.push({[item.nombre] : {'promedio' : calProm}});    
    sumarCalif=0;
    incre=0;
});      
 return promedio;
}
console.log(calPromedio(info));
//1. Retorna la calificación mas baja
//2. Retorna la calificación mas alta
let boleta=[];
function calBoleta(arr){    
  arr.forEach(item => {               
    item.materias.forEach(materias => {        
    boleta.push(materias.calificacion); 
    })  
});      
 return (`La calificiacion mas Alta es ${Math.max(...boleta)}
 La calificiacion mas Baja es ${Math.min(...boleta)}`);
}
console.log(calBoleta(info));

//### Problema 6

//Dadas dos matrices de enteros, encuentra qué elementos faltan 
//en la segunda matriz de la primera matriz.

matriz = [7,2,5,3,5,3]

br = [7,2,5,4,6,3,5,3]
//Los números que faltan en arr son `[4,6]`
let comparar=br.filter(numero => matriz.indexOf(numero) == -1);
console.log(comparar);

//### Problema 7

//**Objetos-Recursividad:**

//Dada la siguiente estructura de datos, encuentra la cantidad de veces 
//que está la propiedad `id`
const root2 = {
  id: '123',
  child: [{id: '234',child: [{test: {id: 2}}]}],
  child2: [{id: '345',child3: {id: '534'}}]
};
let contador=0;
function contarId(arr) {
  let arrProp = Object.getOwnPropertyNames(arr);  
  arrProp.forEach(propiedad => {
  if(propiedad == 'id'){
    contador++;
  }
  else
   contarId(arr[`${propiedad}`])})

  return contador;
}
console.log(contarId(root2));