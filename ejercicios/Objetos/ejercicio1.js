const tvSamsung = {
    nombre:"TV Samsung 42”",
    categoria:"Doe",
    unidades:4,
    precio:345.95,
    getImporte : function() {
       return this.unidades*this.precio
    }
}

console.log(tvSamsung.getImporte())

console.log(JSON.stringify(tvSamsung))
