

$(document).ready(function() {
  $('.mob-button').click(function(event){
    $('.mob-button, .mob-logo, .mob-input, .mob-nav, .nav').toggleClass('active');
    $('body').toggleClass('lock');
    
    // $('.mob-input').show();
    // $('.nav').show();
    
    $('.nav').appendTo('.mob-nav');
    
    // $('.from').afterTo('.nav-list');
    // $('#contact').clone().appendTo('.nav-list');
    // $('#partner').clone().appendTo('.nav-list');
  });
});