//inicio archivo Estacionamiento.js

/*

Héctor Rosendo Galván Rivas
id estudiante:221968633 
Fundamentos de programaciòn
actividad integradora - Gestion integradora

*/

//inciso uno
let estacionamiento = [];

estacionamiento.push("red","white","blue","yellow","green");

console.log(estacionamiento)

document.write("1) EL estacionamiento es ")
document.write("<ul>");
for(i=0;i < estacionamiento.length;i++){
    
    document.write(`<li style="color: ${estacionamiento[i]};">${i} carro ${estacionamiento[i]} </li> `)
    
}
document.write("</ul>");
document.write("<br>");

document.write(`el estacionamiento cuenta con ${estacionamiento.length} carros`);
document.write("<br>");
document.write("<br>");

//inciso dos

estacionamiento_dos = [...estacionamiento,"white"];
console.log(estacionamiento_dos)

document.write("2) EL estacionamiento es ")
document.write("<ul>");
for(i=0;i < estacionamiento_dos.length;i++){
    
    document.write(`<li style="color: ${estacionamiento_dos[i]};">${i} carro ${estacionamiento_dos[i]} </li> `)
    
}
document.write("</ul>");
document.write("<br>");

document.write(`el estacionamiento cuenta con ${estacionamiento_dos.length} carros`);
document.write("<br>");
document.write("<br>");

//inciso tres
estacionamiento_tres = [...estacionamiento_dos]
estacionamiento_tres.splice(2,1,"black");
estacionamiento_tres.shift();

document.write("3) EL estacionamiento es ")
document.write("<ul>");
for(i=0;i < estacionamiento_tres.length;i++){
    
    document.write(`<li style="color: ${estacionamiento_tres[i]};">${i} carro ${estacionamiento_tres[i]} </li> `)
    
}
document.write("</ul>");
document.write("<br>");

document.write(`el estacionamiento cuenta con ${estacionamiento_tres.length} carros`);
document.write("<br>");
document.write("<br>");

//inciso cuatro
estacionamiento_cuatro = [...estacionamiento_tres]
estacionamiento_cuatro.pop();

document.write("4) EL estacionamiento es ")
document.write("<ul>");
for(i=0;i < estacionamiento_cuatro.length;i++){
    
    document.write(`<li style="color: ${estacionamiento_cuatro[i]};">${i} carro ${estacionamiento_cuatro[i]} </li> `)
    
}
document.write("</ul>");
document.write("<br>");

document.write(`el estacionamiento cuenta con ${estacionamiento_cuatro.length} carros`);
document.write("<br>");
document.write("<br>");

//inciso 5

posicion_amarrillo = estacionamiento_cuatro.indexOf("yellow");
document.write(`5) El vehículo Amarillo se encuentra en la posición  ${posicion_amarrillo}`)


//Final archivo Estacionamiento.js