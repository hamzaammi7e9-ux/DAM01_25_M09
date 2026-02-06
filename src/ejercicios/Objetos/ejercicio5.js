const coche = {
    marca:"Toyota",
    modelo:"Corolla",
    año:2020,
    encendido:false,
    arrancar : function() {
       this.encendido = true
       return 'Motor arrancado.'
    },
    apagar : function() {
       this.encendido = false
       return 'Motor apagado'
    },
    kilometraje:0,
    recorrer : function(km){
        this.kilometraje+=km
    }
}

coche.arrancar()
coche.apagar()
console.log(`Coche arrancado?: ${coche.encendido}`)

coche.recorrer(100)
console.log(`Kilometraje: ${coche.kilometraje}km`)




