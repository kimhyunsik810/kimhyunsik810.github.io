$(document).ready(function (){
  for(var i = 1; i < 7; i++ )
  {
    $("#list" + i).css({marginLeft: "-=500px"});
    $("#list" + i).animate({marginLeft: "+=500px"}, 500 + (100 * i));
  }
});
