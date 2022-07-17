let datos=document.getElementById('datos');
let primerdato=true;
let operacion='';

function resetear(reset){    
    datos.textContent=reset;
    primerdato=true;    
}

function recibirValores(num){       
    console.log(datos.textContent);         
    if(datos.textContent==0 && primerdato==true)
    datos.textContent=num;
    else{    
    primerdato=false;
    datos.textContent+=num;
    }        
    return operacion=datos.textContent;        
}

function resultado(){    
    let resolver=0;    
    resolver=eval(operacion);
    datos.textContent=resolver;
}
