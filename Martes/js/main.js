/*if(jQuery) {
  alert("yes")
}


 $(".circulo").click(function(){
   alert("soy el circulo")
 });

 $("#cuadrado").click(function(){
   alert("Soy un cuadrado")
 });

 $("div").click(function(){
   alert("soy un div");
 });

 $("p").click(function(){
   alert("soy un parrafo");
 });

$(".circulo").click(function(){
$("p").html("Texto reemplazado");
});

$(".circulo").click(function(){
$("iframe").attr("src","http://www.jornada.unam.mx/ultimas");

});



$(".circulo").dblclick(function(){
$("iframe").attr("src","http://www.eluniversal.com.mx/");
});

var contador = 0;
$("circulo").click(function()) {

}

$("button").click(function(){
  $(".circulo").css({'width':'300px',
'height':'300px'});
});

$("button").click(function(){
  $(".circulo").addClass("circulo2");
});

$("button").click(function(){
  $(".circulo").hide();
});
$("button").click(function(){
  $(".circulo").fadeOut(10000);
});*/

$(".circulo").click(function(){
  $(this).animate({
    width:"300px",
    height:"300px"
  },4000);
});
