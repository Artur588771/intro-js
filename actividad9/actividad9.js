//1
const input = [1,2,3,4,5];
const cuadre = input.map((dato) => Math.pow(dato,2));
console.log(cuadre);
//2
const arreglo = [12,46,32,64];
let mean = arreglo.reduce((a,b) => {return (a + b)})/arreglo.length;
console.log(mean);
arreglo.sort(function (a,b){return a-b});
let mediana=0;
mediana=((arreglo.length/2)-1);
console.log(arreglo[mediana]);

//3
const caclFactorial = (num) => 
{
  let factorial=1;
  for(let i=num; i>0; i--){
      factorial*=i;
  }
  return factorial;  
}
console.log(caclFactorial(6));