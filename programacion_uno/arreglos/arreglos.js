/*
Héctor Rosendo Galván Rivas
30/Agosto/2021
Actividad1- Arreglos
id estudiante:221968633 
Fundamentos de programaciòn

*/ 

let miArreglo = [101,102,103,104,105,106]
let arregloFinal = []

console.log("El arreglo original  es:" + miArreglo)

console.log("sumando 5 a todos los valores de nuestro arreglo")

for(let i = 0;i < miArreglo.length;i++){
    valor = miArreglo[i] + 5
    arregloFinal.push(valor)
    console.log("El elemento  " + i + " = " + valor)
}

console.log("El nuervo arreglo es :" + arregloFinal)