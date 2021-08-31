/* 
   ----------------------inicio archivo calculadora.js------------------------------
    Hector Rosendo Galvan Rivas
    id estudiante:221968633
    Fundamentos de programaciòn
    Actividad 4 Calculadora 

*/

//funcion suma
function suma (num_dos,num_uno){
    var num_dos = parseFloat(document.getElementById("num_dos").value);
    var num_uno = parseFloat(document.getElementById("num_uno").value);
    total = num_uno + num_dos;

    document.getElementById("el_resultado").innerHTML = total.toFixed(2);
   
}

//resta
function resta(num_dos,num_uno){
    var num_dos = parseFloat(document.getElementById("num_dos").value);
    var num_uno = parseFloat(document.getElementById("num_uno").value);
    total_resta =  num_uno - num_dos
    document.getElementById("el_resultado").innerHTML = total_resta.toFixed(2);

}

//multiplicacion
function multi(num_dos,num_uno){
    var num_dos = parseFloat(document.getElementById("num_dos").value);
    var num_uno = parseFloat(document.getElementById("num_uno").value);
    total_multi =  num_uno * num_dos
    document.getElementById("el_resultado").innerHTML = total_multi.toFixed(2);

}

//divicion
function divi(num_dos,num_uno){
    var num_dos = parseFloat(document.getElementById("num_dos").value);
    var num_uno = parseFloat(document.getElementById("num_uno").value);
    total_div =  num_uno / num_dos
    document.getElementById("el_resultado").innerHTML = total_div.toFixed(2);

}

//exponente
function expo(num_dos,num_uno){
    var num_dos = parseFloat(document.getElementById("num_dos").value);
    var num_uno = parseFloat(document.getElementById("num_uno").value);
    var base = 1;
        for(i = 1;i<=num_dos;i++){
            base = base * num_uno; 
         }
    total_div = base
    document.getElementById("el_resultado").innerHTML = total_div.toFixed(2);

}


//funcion limpiar
function limpiar(){
    document.getElementsByTagName("miformulario").reset();
}



// --------------------------------final del archivo calculadora.js---------------------------------------