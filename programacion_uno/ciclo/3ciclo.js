/* 
    Hector Rosendo Galvan Rivas
    id estudiante:221968633 
    Fundamentos de programaciòn
    Actividad 4 Ciclos 
 

*/


contador = 0
iteracion = 0

function sumatoria(contador,iteracion){
    while(contador<=100){
        iteracion = iteracion + 1
        contador = contador + iteracion
        if(contador<=100){
            console.log("iteracion "+ iteracion + "=" + contador)
        }
        else{
            console.log("la siguiente iteracion es mayor a 100")
        }
        
    }     
}

sumatoria(contador,iteracion)