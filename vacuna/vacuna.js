let fechaNac;
let fechaActual=new Date();
let yearDif;
let mesDif;
let diaDif;
let zona;
let sexo;
let embarazada;
let semGest;
fechaNac=prompt('Teclea tu fecha de Nacimiento (DD/MM/AAAA)');
yearDif=Number(fechaActual.getFullYear())-Number(fechaNac.substring(6,10));
mesDif=Number(fechaNac.substring(3,5))-((Number(fechaActual.getMonth()))+1);
diaDif=Number(fechaNac.substring(0,2))-(Number(fechaActual.getDate()));
if((yearDif>18) || (yearDif==18 && mesDif<=0 && diaDif<=0))
{
    zona=prompt('¿Resides en Zona fronteriza? (S/N)');

    sexo=prompt('¿Cual es tu sexo? (F/M)');
    if(sexo=='F')
    {
        embarazada=prompt('¿Estas embarazada?(S/N)');
        if(embarazada=='S')
        {
        semGest=prompt('¿Tienes mas de 9 semanas de gestacion? S/N)');
        if(semGest=='S')
        {
        console.log('Puedes Vacunarte ya que estas embarazada y 9+SG');
        }
        }
    }
    if((yearDif>=30 && sexo=='M') || (yearDif>=30 && sexo=='F' && embarazada=='N') || (yearDif>=30 && sexo=='F' && embarazada=='S' && semGest=='S') )
    {
        console.log('Puedes Vacunarte ya que cumples 30 años o mas este año');
    }
    else if((zona=='S' && sexo=='M') || (zona=='S' && sexo=='F' && embarazada=='N') || (zona=='S' && sexo=='F' && embarazada=='S' && semGest=='S') )
    {
        console.log('Puedes Vacunarte ya que eres mayor de 18 y resides en zona fronteriza');
    }
    else{
        console.log('No puedes Vacunarte');
    }

}
else{
    console.log('No puedes Vacunarte porque eres menor de edad');
}