/* 
    Hector Rosendo Galvan Rivas
    id estudiante:221968633 
    Fundamentos de programaciòn
    Actividad 2 Funciones 
    referencias:
    https://www.youtube.com/watch?v=iWnLNGNh49o&t=108s
    https://www.youtube.com/watch?v=Cal94N065cA

*/

//ingresamos daots por medio de variables
 var altura = 4;
 var radio = 3;

//funcion
function cono (altura,radio){

    //obtener la generatriz
    //raiz cuadrada(altura**2 + radio**2)
    suma = altura**2 + radio**2
    generatriz = Math.sqrt(suma)
    console.log("la generatriz es:");
    console.log(generatriz + " cm");
    //obtener el area lateral
    //Alateral = pi * (g*r)
    area_lateral = 3.1416 * (generatriz * radio)
    console.log("el area lateral del cono es:")
    console.log(area_lateral +  " cm**2")
    //obtener el ara de la base
    //Abase = pi * radio**2
    area_base = 3.1416 * (radio**2)
    console.log("el area base del cono es:")
    console.log(area_base +  " cm**2")
    //obtener el area total
    //At = Alateral + Abase
    area_total = area_lateral + area_base
    console.log("el area total del cono es:")
    console.log(area_total.toFixed(2) +  " cm**2")
    //obtener el volumne
    //v = (Abase * Altura)/3
    volumen = (area_base * altura)/3
    console.log("el volumen del cono es:")
    console.log(volumen.toFixed(2) +  " cm**2")
}


//mandar llamar a la funcion
cono(altura,radio);