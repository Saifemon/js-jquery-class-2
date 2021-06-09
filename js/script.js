

$(document).ready(function(){

  /* //alert message
   $('.btn').click(function(){
   	alert("Welcome to SSB-332");
   });*/
   $('.bt').dblclick(function(){
   	alert("Why you click the button double?");
   });

   //hide show content
   $('#hide').click(function(){
   	$('.message').hide("slow");
   });
   //show content
   $('#show').click(function(){
   	$('.message').show(3000);
   });
   $('#toggle').click(function(){
   	$('.message').toggle();
   });

   //fadein fadeout content
   $('#fadeout').click(function(){
   	$('.messages').fadeOut(3000);
   });
   $('#fadein').click(function(){
   	$('.messages').fadeIn(3000);
   });
   $('#toggles').click(function(){
   	$('.messages').fadeToggle(3000);
   });
   $('#fadeto').click(function(){
   	$('.messages').fadeTo(1000,.5);
   });

   //slide show
   $('.header').click(function(){
   	$('.content').slideToggle(1000);
   });

});