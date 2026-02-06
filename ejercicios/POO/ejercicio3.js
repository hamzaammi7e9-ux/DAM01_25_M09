class Personaje {
    nombre;
    nivel;
    puntosDeVida;

    constructor(nombre, nivel, puntosDeVida){
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }


    atacar(){
        console.log(`${this.nombre} ha Atacado.`)

    }

    toString(){
        console.log(`Personaje -> nombre='${this.nombre}', nivel='${this.nivel}', Puntos de vida='${this.puntosDeVida}'`)
    }
}


class Guerrero extends Personaje{
    fuerza;

    constructor(nombre, nivel, puntosDeVida, fuerza){
        super(nombre, nivel, puntosDeVida)
        this.fuerza = fuerza;
    }



    golpeEspada(){

    }

}

class Mago extends Personaje{
    mana;


    constructor(nombre, nivel, puntosDeVida, mana){
        super(nombre, nivel, puntosDeVida)
        this.mana = mana;
    }

    lanzarHechizo(){

    }
}


const Personajes = [
    new Guerrero("Jose", 10, 150, 80),
    new Mago("Payo", 20, 80, 200),
    new Guerrero("Luis", 12, 160, 85),
    new Mago("Merlin", 18, 90, 180)
];

const PersonajesSorted = Personajes.sort((a,b) => b.nivel - a.nivel);


Personajes.forEach( (personaje) => {
    personaje.atacar();
    personaje.toString();
}

)
