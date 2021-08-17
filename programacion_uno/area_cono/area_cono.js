/* 
    Hector Rosendo Galvan Rivas
    Fundamentos de programaciòn
    Actividad 2 Funciones 

*/
var altura = 4;
var radio = 3;
var generatriz;

function cono (altura,radio, generatriz){
    //obtener la generatriz
    suma = altura**2 + radio**2
    generatriz = Math.sqrt(suma)
    console.log("la generatriz es:");
    console.log(generatriz + " cm");
    //obtener el area lateral
    area_lateral = 3.1416 * (generatriz * radio)
    console.log("el area lateral del cono es:")
    console.log(area_lateral +  " cm**2")
    //obtener el ara de la base
    area_base = 3.1416 * (radio**2)
    console.log("el area base del cono es:")
    console.log(area_base +  " cm**2")
    //obtener el area total
    //At = Alateral + Abase
    area_total = area_lateral + area_base
    console.log("el area total del cono es:")
    console.log(area_total +  " cm**2")
    
}

cono(altura,radio,generatriz);