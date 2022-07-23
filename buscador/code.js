//1. Capturar Variables
const formBusqueda = document.querySelector('#form-busqueda');
const inputName = document.querySelector('#inputName');
const inputDifi = document.querySelector('#inputDifi');
const inputRol = document.querySelector('#inputRol');
const boxcampeones = document.querySelector('#box-campeones');

//5. Generar un objeto con la seleccion de busqueda del usuario
const datosBusqueda = {
    nombre:'',
    dificultad:'',
    rol:''
};

//2. Crear el evento para mostar informacion cuando se cargue la pagina
document.addEventListener('DOMContentLoaded',() => {
    mostrarHTMl(campeones);
})

//3. Crear funcion que recorre el array de objetos y muestra bel html
function mostrarHTMl(campeones){

    limpiarHTML();

    campeones.forEach(campeon => {
        const {nombre,dificultad,rol,nickname,descripcion,imagen} = campeon;
        
        const cardCampeon=document.createElement('div');
        cardCampeon.classList.add('col','mb-3');
        cardCampeon.innerHTML=`
        <div class="card bg-secondary flex-row">
        <div class="w-50">
            <img src="${imagen}" class="img-fluid object-fit" alt="">
        </div>
        <div class="card-body w-50">
            <h2 class="card-title">${nombre}</h2>
            <p>${nickname}</p>
            <p>${rol}</p>
            <P>${dificultad}</P>
            <p>${descripcion}</p>
        </div>
    </div>`;
        boxcampeones.appendChild(cardCampeon);
        //console.log(cardCampeon);
    });
}

//4. Crear el evento de envio del formulario. Aqui se hace el filtro
formBusqueda.addEventListener('submit', (e) =>{
    e.preventDefault();

    datosBusqueda.nombre = inputName.value;
    datosBusqueda.dificultad =inputDifi.value;
    datosBusqueda.rol = inputRol.value;

    formBusqueda.reset();
    filtrarCampeones();

    
    
})

//6. Crear una funcion para crear Campeones
function filtrarCampeones(){
    const resultado = campeones.filter( filtrarNombre).filter( filtrarDifi ).filter( filtrarRol );
    
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
       /* if(boxcampeones.parentElement.lastChild.classList.contains('bg-danger')){
            boxcampeones.parentElement.lastChild.remove();
        }*/
    }else{
        sinResultado();
    }
    
}

//8. Generar funciones que se van a enviar al filtrer
function filtrarNombre(campeon){
    const {nombre} = datosBusqueda;    
    if(nombre){
    return campeon.nombre == nombre;
    }   
    return campeones;
}

function filtrarDifi(campeon){    
    const {dificultad} = datosBusqueda;    
    if(dificultad){
    return campeon.dificultad == dificultad;
    }   
    return campeones;
}

function filtrarRol(campeon){
    const {rol} = datosBusqueda;    
    if(rol){
    return campeon.rol == rol;
    }   
    return campeones;
}

//9. Generar una funcion limpiar. Luego agregar a mostrarHTML()
function limpiarHTML(){
    while(boxcampeones.firstChild){
        boxcampeones.firstChild.remove();
    }
}

//10. Funcion que muestra mensaje de sin resultados
function sinResultado(){
    limpiarHTML();
    const sinResultado = document.createElement('div');
    sinResultado.classList.add('bg-danger','text-white','border-danger','p-4','text-center');
    sinResultado.textContent='No hay Resultados';

    boxcampeones.parentElement.appendChild(sinResultado);
}