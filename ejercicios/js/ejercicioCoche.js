//Ejercicio 1
function saludar(nombre, saludo = "Hola") {
    return `${saludo}, ${nombre}`;
}

console.log(saludar("Ana"));                   
console.log(saludar("Carlos", "Buenos días")); 
console.log(saludar("María", "Qué tal"));      

//Ejercicio 2
    function calcular(num1, num2, operacion) {
    let resultado = 0
        if (operacion === "suma") {
            resultado = num1 + num2;
        } 
        else if (operacion === "resta") {
            resultado = num1 - num2;
        } 
        else if (operacion === "multiplicacion") {
            resultado = num1 * num2;
        } 
        else if (operacion === "division") {
            resultado = num1 / num2;
        }
        return resultado
    }

    console.log(calcular(1, 2, "suma"))
    console.log(calcular(4, 2, "resta"))
    console.log(calcular(3, 5, "multiplicacion"))
    console.log(calcular(20, 4, "division"))