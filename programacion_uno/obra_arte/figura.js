//inicio archivo figura.js

/*
Actividad 3 - Animando con JavaScript
Héctor Rosendo Galván Rivas
id estudiante:221968633 
Fundamentos de programaciòn

*/


function animacion(){
  var ani = function(){
    canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

//ctx.arc(x, y, radio, angulo inicial, angulo final, contrario a las manecillas)
ctx.fillStyle="yellow";
ctx.strokeStyle="blue";

for (var i = 0; i <= 2; i = i + 0.2) {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.arc(190 * i - 10 ,150,15,0, Math.PI * i, false);
  // document.write("Angulo final " + Math.PI * i + "<br>");
  ctx.stroke();
  ctx.fill();
}
  }

  ani();
  var intervalo = setInterval(actualizarHora, 1000);
}

animacion();