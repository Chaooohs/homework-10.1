

$(document).ready(function() {
  $('.burger-btn').click(function(event){
    $('.burger-btn,.nav').toggleClass('active');
    $('body').toggleClass('lock');
    
    $('#input').show();
    $('#nav').prepend($('#input'));
    
    
    $('#logo').prependTo('#nav');
    $('#about').clone().appendTo('#nav');
    $('#contact').clone().appendTo('#nav');
    $('#partner').clone().appendTo('#nav');
  });
});