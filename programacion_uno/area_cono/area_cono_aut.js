/* 
    Hector Rosendo Galvan Rivas
    Fundamentos de programaciòn
    Actividad 2 Funciones 

*/
// var altura = 4;
// var radio = 3;
// var generatriz;

function cono (altura,radio, generatriz){
    var altura = parseInt(document.getElementById("altura").value);
    var radio = parseInt(document.getElementById("radio").value);
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
    //volumen
    volumen = (area_base * altura)/3
    console.log("el volumen del cono es:")
    console.log(volumen.toFixed(2) +  " cm**2")
    //alert(area_total + "cm**2")
    document.getElementById("el_resultado_area").innerHTML = area_total.toFixed(2) + "cm**2";
    document.getElementById("el_resultado_volumen").innerHTML = volumen.toFixed(2) + "cm**2";
}

function limpiar(){
    document.getElementsByTagName("miformulario").reset();
}

cono(altura,radio,generatriz);