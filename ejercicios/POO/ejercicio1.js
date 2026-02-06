class TarjetaCredito {
    numero_tarjeta;
    fecha_caducidad;
    #cvv;
    titular;
    fondos;
    nombre_banco;
    anulada;
    #pin;


    constructor(){
        this.numero_tarjeta = '409321895'
        this.fecha_caducidad = '04/2029'
        this.#cvv = 691
        this.titular = 'Pablo Hernandez'
        this.fondos = 0
        this.nombre_banco = 'ImaginBank'
        this.anulada = false
        this.#pin = '0000'
    }

    activar(){
        if(this.anulada!=false){
            this.anulada = false
            console.log('Tarjeta activada.')
        }
        else console.log('La tarjeta ya esta activada.')
    }

    anular(){
        if(this.anulada!=true){
            this.anulada = true
        }
        else console.log('La tarjeta ya esta anulada.')
    }

    pagar(precio){
        if(this.fondos>=precio){
            console.log(`${this.fondos}€ - ${precio}€`)
            this.fondos=-precio
            console.log(`Se ha pagado el importe con la tarjeta. Fondos restantes: ${this.fondos}`)
        }
        else console.log(`Fondos insuficientes -> Fondos = ${tarjeta.fondos}€, Precio =${precio}€`)
    }

    cambiarPin(pin_nuevo){
        this.pin = pin_nuevo
        console.log('Se ha cambiado el pin de la tarjeta.')
    }
   
}

let tarjeta1 = new TarjetaCredito('123456789', '12/25', 123, 'Carlos Ruiz', 1500, 'BBVA', false, 2921);
let tarjeta2 = new TarjetaCredito('987654321', '05/28', 456, 'Ana Gomez', 50, 'Santander', true, 7123);
let tarjeta3 = new TarjetaCredito('112233445', '01/30', 789, 'Luis M.', 5000, 'CaixaBank', false, 2091);




