//inicio archivo lista.js

/*
Actividad 3 - Iterando a través de colecciones
Héctor Rosendo Galván Rivas
id estudiante:221968633 
Fundamentos de programaciòn

*/

//lista original
let lista_compras = ["Leche", "huevos", "pan", "yogurt", "frijoles", "pollo", "café", "arroz"];

document.write(" La lista original es: ")
document.write("<ul>");
for(i=0;i < lista_compras.length;i++){
    
    document.write("<li>" + lista_compras[i] + "</li>")
    
}
document.write("</ul>");
document.write("<br>");

console.log("la lista origina es: " + lista_compras)


//lista reversa
let lista_reverso = lista_compras.reverse();

document.write("lista en reversa  es: ");
document.write("<ul>");
for(ii=0;ii < lista_reverso.length;ii++){
    document.write("<li>" + lista_reverso[ii] + "</li>")
}

document.write("</ul>");
document.write("<br>");

console.log("la lista en reverso es: " + lista_reverso)

//sustituir elementos de la lista
let lista_sustituyendo = lista_reverso.reverse();

//sustituir leche
var sustituir_leche = lista_sustituyendo.splice(0,1,"Leche descremada")

//sustituir cafe
var sustituir_cafe = lista_sustituyendo.splice(6,1,"café descafeinado")

document.write("la lista sustituyendo  es: ");
document.write("<ul>");
for(iii=0;iii < lista_sustituyendo.length;iii++){
    document.write("<li>" + lista_sustituyendo[iii] + "</li>")
}

document.write("</ul>");
document.write("<br>");

console.log("la lista despues de sustiituir:" + lista_sustituyendo)

//termino de archivo lista.js