/*Vacuna*/
let edad=Number(prompt('Ingresa Tu edad Porfavor'));
let sexo;
let embarazada;
let mesNac;
let semGes;
let zona;
let permitir;
if (edad>=18)
{
   permitir=1; 
   zona=prompt('¿Vives en Zona Fronteriza (S/N)');
   mesNac=Number(prompt('¿Mes de Nacimiento (1 a 12)')); 
   sexo=prompt('Ingresa tu Sexo (F/M)');
   if(sexo=='F')
   embarazada=prompt('¿Estas embarazada? (S/N)');   
   if(embarazada=='S')
   {
   semGes=Number(prompt('Cuantos Semanas de gestacion tienes (en numero porfavor)'));
   if(semGes>9)   
   {
   console.log('Felicidades Puedes vacunarte ya que tienes mas de 9 semanas de Gestion');          
   }
   else{
   console.log('No puedes Vacunarte');         
   permitir=0;
   }   
   }
   if(zona=='S' && permitir==1)
   {
   console.log('Felicidades Puedes vacunarte ya que Vives en la zona fronteriza');       
   }
   else
   {    
    if((edad>=30 || (edad>=29 && mesNac>=7)) && permitir==1)
    console.log('Felicidades Puedes vacunarte ya que cumples 30 años o mas este año');
    else
    console.log('No puedes Vacunarte');
   }

}
else
{
   console.log('No puedes Vacunarte');
}