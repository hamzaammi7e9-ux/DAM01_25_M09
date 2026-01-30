
const usuarios = [
    {
        nombre: "Ana",
        edad: 23,
        email: "ana@gmail.com",
        saludar: function () {
            return `Hola me llamo ${this.nombre}`
        }
    },
    {
        nombre: "Diego",
        edad: 29,
        email: "diego@gmail.com",
        saludar: function () {
            return `Hola me llamo ${this.nombre}`
        }
    },
    {
        nombre: "Kevin",
        edad: 20,
        email: "kevin@hotmail.com",
        saludar: function () {
            return `Hola me llamo ${this.nombre}`
        }
    }
]


usuarios.push({
    nombre: "Juan",
    edad: 25,
    email: "juan@email.com",
    saludar: function(){
        return `Hola me llamo ${this.nombre}`
    }
})



function mostrarUsuarios(usuarios){
    for(i in usuarios){
        console.log(`
            Nombre: ${usuarios[i].nombre},
            Edad: ${usuarios[i].edad},
            Email: ${usuarios[i].email}`)
    }
}


mostrarUsuarios(usuarios)