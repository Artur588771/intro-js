/* Creauna funcion recursiva para multiplicar dos numeros esperando dichos parametros*/
function multiply(num1,num2){    
    if(num2 === undefined || num2 === null || num2===''){
        num2=prompt('Dame otro numero porfavor');
        multiply(num1,num2);
    }else
    return console.log(num1*num2);        
    }
multiply(8,5);

/*Crea una funcion para calcular la sucesion fibonacci*/
function fibonacci(n) {
    if (n <= 1) return n;

    return fibonacci(n-1) + fibonacci(n-2);
}

for(let i=0;i<8;i++){
    console.log(fibonacci(i));
}