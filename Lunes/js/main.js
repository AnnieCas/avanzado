/*alert("Si funciona Js");
document.write("Podemos mostrar algo");
console.log("Hola");

document.getElementById("texto").innerHTML="Este es el segundo texto"*/
/*
variables
var x, y, z;

x=5;
y= 6.3;
z=x+y;
x = number();
alert(z);*/

/*function tuNombreCompleto(nombre, apellido){
  var nombreCompleto = nombre + " " + apellido;

  return nombreCompleto;

}

var alumno = tuNombreCompleto("Jessica", "Alatorre")

alert(alumno);*/

/*var miPrimerObjeto = {nombre:"Annie",apellido:"Cas"}

alert(miPrimerObjeto.nombre)*/

/*var persona = "Annie";
var otraPersona = persona;

persona= "Anniee"

document.write(persona);
document.write(otraPersona);*/

/*var persona = {nombre:"Annie"};
var otraPersona2 =persona;

persona.nombre ="Anniee";

document.write(persona.nombre);
document.write(otraPersona2.nombre)*/
/*

var fruta = {
  nombre : "mango",
  color:"amarillo",
  dulce:"8",

  queDulceSoy:function(){
    alert("Soy muy dulce")
  }
}

fruta.queDulceSoy();
alert("Retardo");
document.getElementById("primero").innerHTML+="Annie Cas";
document.getElementById("botonconclick").onclick=function(){
  document.getElementById("aparecertexto").innerHTML="Este era un texto fantasma";

  document.getElementById("aparecertexto").style.cssText="color:white; background-color: red";
}


var nombre="primero";
document.getElementById("priboton").onclick=function(){
    document.getElementById(nombre).innerHTML ="Si resulto";
}
*/

document.getElementById("priboton").onclick=function(){
  var valor = document.getElementById("miInput").value;

  document.getElementById("vacio").innerHTML = valor; 
}
