import { leerSuperheroes, agregarSuperheroes } from "./util.mjs";

const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt'

//Agregar nuevos superheroes

agregarSuperheroes(archivoOriginal, archivoNuevos)

//Leer y mostrar la lista de superheroes ordenada

const superheroes = leerSuperheroes('./superheroes.txt')
console.log(`Superheroes ordenados`);
console.log(superheroes);

