

$('#nav').prepend($('#input'));

$(document).ready(function() {
  $('.burger-btn').click(function(event){
    $('.burger-btn,.nav').toggleClass('active');
    $('body').toggleClass('lock');
    
    $('#about').clone().appendTo('#nav');
    $('#contact').clone().appendTo('#nav');
    $('#partner').clone().appendTo('#nav');
  });
});