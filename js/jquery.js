

$(document).ready(function () {

  
  //* скрол при переходе между # заглушками

  $("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top - 270; // растояние к верху экрана
    $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 500);
    // время
    return false;
  });


  //* перенос блока nav при break-point 993px

  $(window).on('load resize',
    function () {
      if ($(window).width() < 993) {
        $('.nav').appendTo('.mob-nav');
      }
      else {
        $('.nav').prependTo('.content');
      }
    });


  //* открытие меню при нажатии на бургер

  $('.mob-button').click(function (event) {
    $('.mob-button, .mob-logo, .mob-input, .mob-nav, .nav').toggleClass('active');

    // включает класс lock на body для отключения скрола во время открытия меню бургер    
    $('body').toggleClass('lock');

    // меняет изо бургер на крестик и обратно
    if ($('.mob-btn-img').attr('src') == 'img/button/close.svg')
      $('.mob-btn-img').attr('src', 'img/button/burger.svg').toggleClass('asd');
    else
      $('.mob-btn-img').attr('src', 'img/button/close.svg').toggleClass('asd');

    // включает блок
    // $('.mob-input').show();
    // $('.nav').show();

    //переносит меню nav последним в меню бургер
    $('.nav').appendTo('.mob-nav');

  });
})
