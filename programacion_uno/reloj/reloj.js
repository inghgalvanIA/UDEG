//inicio archivo reloj.js

/*
Actividad 2 - Intervalos de actualización de la pantalla
Héctor Rosendo Galván Rivas
id estudiante:221968633 
Fundamentos de programaciòn

*/

(function(){
    var actualizarHora = function(){
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();

         var pHoras = document.getElementById('horas'),
             pAMPM = document.getElementById('ampm'),
             pMinutos = document.getElementById('minutos'),
             pSegundos = document.getElementById('segundos'),
             pDiaSemana = document.getElementById('diaSemana'),
             pDia = document.getElementById('dia'),
             pMes = document.getElementById('mes'),
             pYear = document.getElementById('year'); 

        //dia de la semana
        var semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
        pDiaSemana.textContent = semana[diaSemana];

        //numero de dia
        pDia.textContent = dia;

        //mes
        var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
        pMes.textContent = meses[mes]

        //año
        pYear.textContent = year;

        //reloj

        if(horas >= 12){
            horas = horas - 12;
            ampm = "PM"
        } else {
            ampm ="AM"
        };

        if (horas == 0){
            horas = 12;
        };

        //horas
        pHoras.textContent = horas;

        //minutos
        if(minutos < 10){ minutos = "0" + minutos}
        pMinutos.textContent = minutos;

        //segundos
        if(segundos < 10){ segundos = "0" + segundos}
        pSegundos.textContent = segundos;

        //AMPM
        pAMPM.textContent = ampm;
    
    };


    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);
}())

//final de archivo relog.js