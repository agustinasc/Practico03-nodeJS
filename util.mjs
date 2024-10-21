import fs from 'fs';

//Clase para representar a un superheroe
class Superheroe {
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo) {
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo
    }
}

//Funcion para leer y ordenar los superheroes

export function leerSuperheroes(ruta){
    const datos = fs.readFileSync(ruta,  'utf8');
    const superheroesArray = JSON.parse(datos);

    //Convertir a instancias de superheroe
    
    const superheroes = superheroesArray.map(
        hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    )
    //Ordenar por nombre de superheroe
    
    superheroes.sort((a,b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));
    return superheroes
}

//Nueva funcion para agregar superheroes

export function agregarSuperheroes(rutaOriginal, rutaNuevos) {
    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8');
    const datosNuevos = fs.readFileSync(rutaNuevos, 'utf8');

    const superHeroesOriginales = JSON.parse(datosOriginales);
    const nuevosSuperHeroes = JSON.parse(datosNuevos);

    //Convertir los nuevos superheroes a instancias de Superheroe

    const instanciasNuevos = nuevosSuperHeroes.map(
        hero => new Superheroe(
            hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );

    ///Combinar listas

    const listaActualizada = [...superHeroesOriginales, ...instanciasNuevos];

    //Guardar la lista actualizada

    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2), 'utf8');

    console.log('Lista de superheroes actualizada con exito');
    
}

