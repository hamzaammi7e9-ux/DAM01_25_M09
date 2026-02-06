class FiguraGeometrica {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
}


class Rectangulo extends FiguraGeometrica {
    base;
    altura;

    constructor(nombre, base, altura) {
        super(nombre); 
        this.base = base;     
        this.altura = altura;
    }

    calcularArea() {
        return `Area de ${this.nombre} = ${this.base * this.altura} m2`
    }
}

class Triangulo extends FiguraGeometrica {
    base;
    altura;

    constructor(nombre, base, altura) {
        super(nombre); 
        this.base = base;   
        this.altura = altura; 
    }

    calcularArea() {
        return (`Area de ${this.nombre} = ${(this.base * this.altura) / 2} m2`)
    }
}


class Circulo extends FiguraGeometrica {
    radio;

    constructor(nombre, radio) {
        super(nombre); 
        this.radio = radio;    
    }
    calcularArea() {
        return (`Area de ${this.nombre} = ${Math.pow(this.radio,2) * Math.PI} m2`)
    }
}


let Rectangulo1 = new Rectangulo('rectangulo1', 50, 20)
let Circulo1 = new Circulo('Circulo1', 4)
let Triangulo1 = new Triangulo('Triangulo1', 20, 10)

console.log(Rectangulo1.calcularArea())
console.log(Circulo1.calcularArea())
console.log(Triangulo1.calcularArea())