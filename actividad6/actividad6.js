/*1 Concatena los siguientes arreglos:
var animals=['eagle','parrot','monkey','boar','lion']
var comingSoonAnimals=['panter','dragon','turtle']*/
var animals=['eagle','parrot','monkey','boar','lion'];
var comingSoonAnimals=['panter','dragon','turtle'];

var zoologico=animals.concat(comingSoonAnimals);
console.log(zoologico);

//1 Acomoda el arreglo de menor a mayor: var arr=[4,6,1,0,8,2,45,11,5,33,50,101]
var arr=[4,6,1,0,8,2,45,11,5,33,50,101];
arr.sort(function (a,b){return a-b});
console.log(arr);

//2 Agrega un nuevo animal('cow');
var animals=['eagle','parrot','monkey','boar','lion'];
var comingSoonAnimals=['panter','dragon','turtle'];

var zoologico=animals.concat(comingSoonAnimals);
zoologico.push('cow');
console.log(zoologico);

//3 Retira el elemento 'eagle' del arreglo animals
var animals=['eagle','parrot','monkey','boar','lion'];
animals.shift();
console.log(animals);

//4 Encuentra el index del animal 'parrot'
var animals=['eagle','parrot','monkey','boar','lion'];
animals.indexOf('parrot');









