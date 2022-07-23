//1 Capturar Variables
const formBusqueda = document.querySelector('#form-busqueda');
const inputsearch = document.querySelector('#inputsearch');
const inputMetal = document.querySelector('#inputMetal');
const inputPunk = document.querySelector('#inputPunk');
const inputHard = document.querySelector('#inputHard');
const inputRar = document.querySelector('#inputRar');
const inputAll = document.querySelector('#inputAll');

//2. Crear el evento para mostar informacion cuando se cargue la pagina
document.addEventListener('DOMContentLoaded',() => {
    mostrarHTMl(bandas);
})

//3. Crear funcion que recorre el array de objetos y muestra bel html
function mostrarHTMl(bandas){

    limpiarHTML();

    bandas.forEach(banda => {
        const {nombre,genero,imagen} = banda;                
        const cardBanda=document.createElement('div');
        cardBanda.classList.add('col','mb-3');
        cardBanda.innerHTML=`
        <div class="card">
        <img src="${imagen}" class="img-fluid object-fit">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">${genero}</p>
        </div>
      </div>`;
      boxbandas.appendChild(cardBanda);
        //console.log(cardBanda);
    });
}

//4. Crear el evento de envio del formulario. Aqui se hace el filtro
formBusqueda.addEventListener('submit', (e) =>{
    e.preventDefault();

    datosBusqueda.search = inputsearch.value;   
    datosBusqueda.punk = '';
    datosBusqueda.metal = '';           
    datosBusqueda.hardRock = '';
    datosBusqueda.Rockandroll = '';
    console.log(datosBusqueda);                   
    formBusqueda.reset();
    filtrarBandas();
       
    
})

inputMetal.addEventListener('click', () => {
    datosBusqueda.metal = 'Metal';    
    datosBusqueda.punk = '';
    datosBusqueda.hardRock = '';
    datosBusqueda.Rockandroll = '';
    datosBusqueda.search = '';       
    filtrarBandas();
    console.log(datosBusqueda);
})
inputPunk.addEventListener('click', () => {
    datosBusqueda.punk = 'Punk';
    datosBusqueda.metal = '';           
    datosBusqueda.hardRock = '';
    datosBusqueda.Rockandroll = '';  
    datosBusqueda.search = '';        
    filtrarBandas();
    console.log(datosBusqueda);
})
inputHard.addEventListener('click', () => {
    datosBusqueda.hardRock = 'HardRock';
    datosBusqueda.metal = '';       
    datosBusqueda.punk = '';    
    datosBusqueda.Rockandroll = '';   
    datosBusqueda.search = '';       
    filtrarBandas();
    console.log(datosBusqueda);
})
inputRar.addEventListener('click', () => {
    datosBusqueda.Rockandroll = 'Rock-and-roll';   
    datosBusqueda.metal = '';       
    datosBusqueda.punk = '';
    datosBusqueda.hardRock = '';
    datosBusqueda.search = '';       
    filtrarBandas();    
    console.log(datosBusqueda);
})

inputAll.addEventListener('click', () => {
    mostrarHTMl(bandas);
    /*datosBusqueda.Rockandroll = 'Rock-and-roll';   
    datosBusqueda.metal = 'Metal';       
    datosBusqueda.punk = '';
    datosBusqueda.hardRock = '';
    filtrarBandas();    
    console.log(datosBusqueda);*/
})

//5
const datosBusqueda = {
    search:'',
    metal:'',
    punk:'',
    hardRock:'',
    Rockandroll:''
};

//6. Crear una funcion para crear Campeones
function filtrarBandas(){
    const resultado = bandas.filter( filtrarSearch).filter( filtrarMetal ).filter( filtrarPunk ).filter( filtrarHard ).filter( filtrarRAR );
    
    console.log(resultado);

    if(resultado.length){
        mostrarHTMl(resultado);
    }else{
        sinResultado();
    }

    //Trabajar cuando se envie el formulario y no hayan opciones seleccionadas
    //Object.values(); obitnes los valores del objeto
    const hayResultado = Object.values(datosBusqueda).filter(e => e)
    if(hayResultado.length){
        mostrarHTMl(resultado);
        if(boxbandas.parentElement.lastChild.classList.contains('bg-danger')){
            boxbandas.parentElement.lastChild.remove();
        }
    }else{
        sinResultado();
    }
    
}

//8. Generar funciones que se van a enviar al filtrer
function filtrarSearch(banda){
    const {search} = datosBusqueda;
    console.log(search);    
    if(search){
    return banda.nombre == search;
    }   
    return bandas;
}
function filtrarMetal(banda){
    const {metal} = datosBusqueda;    
    if(metal){
    return banda.genero == metal;
    }   
    return bandas;
}
function filtrarPunk(banda){
    const {punk} = datosBusqueda;    
    if(punk){
    return banda.genero == punk;
    }   
    return bandas;
}
function filtrarHard(banda){
    const {hardRock} = datosBusqueda;    
    if(hardRock){
    return banda.genero == hardRock;
    }   
    return bandas;
}
function filtrarRAR(banda){
    const {Rockandroll} = datosBusqueda;    
    if(Rockandroll){
    return banda.genero == Rockandroll;
    }   
    return bandas;
}
function limpiarHTML(){
    while(boxbandas.firstChild){
        boxbandas.firstChild.remove();
    }
}
function sinResultado(){
    limpiarHTML();
    const sinResultado = document.createElement('div');
    sinResultado.classList.add('bg-danger','text-white','border-danger','p-4','text-center');
    sinResultado.textContent='No hay Resultados';

    boxbandas.parentElement.appendChild(sinResultado);
}