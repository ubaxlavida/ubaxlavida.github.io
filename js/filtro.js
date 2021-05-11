$(document).ready(function(){
  $("#filtro > li").click(function(){
    $("#filtro > li").removeClass('filtro_activo');
    $(this).addClass('filtro_activo');
    var tag = $(this).text();
    tag = tag.toLowerCase();

    if (tag != "mostrar todo") {

    $(":not(.tags:contains('"+tag+"'))" ).parent(".card").hide();
    $(".tags:contains('"+tag+"')" ).parent(".card").show();

  } else {
    $(".card").show();
   } 
  });
});