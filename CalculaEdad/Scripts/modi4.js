//*************************Calular año nacimiento**************************

// BOTONES
const botonCalcularEdd= document.querySelector(".botonCalularEdad");
botonCalcularEdd.addEventListener("click",calcularEdad);
const botonReset= document.querySelector(".botonReset");
botonReset.addEventListener("click",borrarTodo);

// VARIABLES GLOBALES
let diaDeHoy = new Date();

// FUNCION CALCULAR EDAD
function calcularEdad() {
  let anoNacimiento = document.getElementById("edadCampo").value;  
  let resultadoEnAno = diaDeHoy.getFullYear() - anoNacimiento; 
  document.getElementById("resultado").innerHTML += "<p> Tu edad es: "+ resultadoEnAno +"</p>"; 
  document.getElementById("myformulario").reset();
}

// FUNCION RESETEAR TODO
function borrarTodo() {
  document.getElementById("resultado").innerHTML = "<p>" + "</p>";
  document.getElementById("myformulario").reset();
}