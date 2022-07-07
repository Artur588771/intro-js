/*Ejercicio 1*/
let nombre;
let edad;

nombre=prompt('Ingresa tu nombre por favor');
edad=Number(prompt('Ingresa tu edad por favor'));

if(edad>=18)
{
console.log('Puedes ingresar a la discoteca');
}
else{
    console.log('No Puedes ingresar a la discoteca');
   }
if(edad>=18 && (nombre=='MARIO' || nombre=='CARLOS'))
{
console.log('Bienvenido a VIP');
}
/*Ejercicio 2*/
let jugador1;
let jugador2;

jugador1=prompt('Elige Piedra,Papel o tijera');
jugador2=prompt('Elige Piedra,Papel o tijera');

if(jugador1=='PIEDRA')
{
    switch(jugador2) {
        case 'PIEDRA':
            console.log('Empate');
          break;
        case 'PAPEL':
            console.log('Ganador jugador 2');
          break;
          case 'TIJERA':
            console.log('Ganador jugador 1');  
        default:
          // code block
      }
}
if(jugador1=='PAPEL')
{
    switch(jugador2) {
        case 'PIEDRA':
            console.log('Ganador jugador 1');
          break;
        case 'PAPEL':
            console.log('Empate');
          break;
          case 'TIJERA':
            console.log('Ganador jugador 2');  
        default:
          // code block
      }
}
if(jugador1=='TIJERA')
{
    switch(jugador2) {
        case 'PIEDRA':
            console.log('Ganador jugador 2');
          break;
        case 'PAPEL':
            console.log('Ganador jugador 1');
          break;
          case 'TIJERA':
            console.log('Empate');  
        default:
          // code block
      }
}

/*Ejercicio 3*/
let numero;
numero=Number(prompt('Ingresa un numero'));

if(numero % 2)
console.log('No divisible entre 2');
else
console.log('Divisible entre 2');

/*Ejercicio 4*/
let numero;
numero=Number(prompt('Ingresa un numero'));

if(numero % 2)
alert('Es impar');
else
alert('Es par');

/*Ejercicio 5*/
let numero;
numero=Number(prompt('Ingresa un numero'));

if(numero==1000)
alert('Ganaste un Premio');
else
alert(numero +' ' 'Lo sentimos sigue participando');

/*Ejercicio 6*/
let numero1;
let numero2;
numero1=Number(prompt('Ingresa el primer numero'));
numero2=Number(prompt('Ingresa el segundo numero'));
if(numero1<numero2)
alert('El menor es numero1');
else
alert('El menor es numero2');

/*Ejercicio 7*/
let numero1;
let numero2;
let numero3;
let mayor;
numero1=Number(prompt('Ingresa el primer numero'));
numero2=Number(prompt('Ingresa el segundo numero'));
numero3=Number(prompt('Ingresa el tercer numero'));
mayor=Math.max(numero1,numero2,numero3);
if(numero1==numero2 && numero1==numero3)
alert('Son iguales');
else
alert('El numero mayor es '+ mayor);

