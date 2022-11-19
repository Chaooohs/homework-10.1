

$(document).ready(function () {
  $('.mob-button').click(function (event) {
    $('.mob-button, .mob-logo, .mob-input, .mob-nav, .nav').toggleClass('active');

    $('body').toggleClass('lock');

    if ($('.mob-btn-img').attr('src') == 'img/button/close.svg')
      $('.mob-btn-img').attr('src', 'img/burger.svg').toggleClass('asd');
    else
      $('.mob-btn-img').attr('src', 'img/button/close.svg').toggleClass('asd');

    // $('.mob-input').show();
    // $('.nav').show();

    $('.nav').appendTo('.mob-nav');
  });
});


$(document).ready(function () {
  $("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top - 270;
    $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 500);
    return false;
  });
});