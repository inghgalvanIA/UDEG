/* 
   ----------------------- inicio archivo js con nombre pizzeria.js-----------------------------

    Hector Rosendo Galvan Rivas
    Fundamentos de programaciòn
    Actividad 2 Funciones 

*/

var desc
var pizza_
var costo_pizza = 0;
var por_desc = 0;
var resultado = 0;

function pizza (pizza_,desc){
    var desc = (document.getElementById("descuento").value);
    var pizza_ = (document.getElementById("pizza_").value);
  
//pizza a
    if (pizza_ == "A"){
        var costo_pizza = 10;
        if (desc == "cupon1"){
            por_desc = (costo_pizza / 100) * 10
            resultado = costo_pizza - por_desc
            console.log(resultado)
        }
        else if(desc == "cupon2"){
            por_desc = (costo_pizza / 100) * 20
            resultado = costo_pizza - por_desc
            console.log(resultado)
        }
        else{
            alert("No ingreso un cupon valido")
            console.log("No hay cupon de descuento")
            resultado = costo_pizza
            console.log(resultado)
        }
    }
    //pizza B
    else if(pizza_ == "B"){
        var costo_pizza = 15;
        if (desc == "cupon1"){
            por_desc = (costo_pizza / 100) * 10
            resultado = costo_pizza - por_desc
            console.log(resultado)
        }
        else if(desc == "cupon2"){
            por_desc = (costo_pizza / 100) * 20
            resultado = costo_pizza - por_desc
            console.log(resultado)

        }
        else{
            alert("No ingreso un cupon valido")
            console.log("No hay cupon de descuento")
            resultado = costo_pizza
            console.log(resultado)
            
        }
    }
    //pizza c
    else  if(pizza_ == "C"){
        var costo_pizza = 20;
        if (desc == "cupon1"){
            por_desc = (costo_pizza / 100) * 10
            resultado = costo_pizza - por_desc
            console.log(resultado)
        }
        else if(desc == "cupon2"){
            por_desc = (costo_pizza / 100) * 20
            resultado = costo_pizza - por_desc
            console.log(resultado)

        }
        else{
            alert("No ingreso un cupon valido")
            console.log("No hay cupon de descuento")
            resultado = costo_pizza
            console.log(resultado)
        }
    }

    else{
        resultado = "No ha seleccionado ninguna pizza valida"
    }


    //alert(area_total + "cm**2")
    document.getElementById("el_resultado_pizza").innerHTML = resultado + " pesos";
    
}

function limpiar(){
    document.getElementsByTagName("miformulario").reset();
}

pizza(pizza_,desc);


// -----------------------------------final de archivo js ----------------------------------------

