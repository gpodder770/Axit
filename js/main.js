//Tab content
$(document).ready(function(){

  // Features Section
  $('#content-one').show();
  $('#content-two').hide();
  $('#content-three').hide();

  $('#tab-one').click(function(){
    $('#tab-one').addClass('active');
    $('#tab-two').removeClass('active');
    $('#tab-three').removeClass('active');

    $('#content-one').show();
    $('#content-two').hide();
    $('#content-three').hide();
  })

  $('#tab-two').click(function(){
    $('#tab-one').removeClass('active');
    $('#tab-two').addClass('active');
    $('#tab-three').removeClass('active');

    $('#content-one').hide();
    $('#content-two').show();
    $('#content-three').hide();
  })

  $('#tab-three').click(function(){
    $('#tab-one').removeClass('active');
    $('#tab-two').removeClass('active');
    $('#tab-three').addClass('active');

    $('#content-one').hide();
    $('#content-two').hide();
    $('#content-three').show();
  })



  // Pricing Section
  $('#popularity-1').hide();
  $('#popularity-2').hide();
  $('#popularity-3').hide();

  $('.option-1').hover(function(){
    $('.option-1').css("margin-top", "-46px");
    $('#popularity-1').show();
    $('.option-2').css("margin-top", "0px");
    $('#popularity-2').hide();
    $('.option-3').css("margin-top", "0px");
    $('#popularity-3').hide();
  })

  $('.option-2').hover(function(){
        $('.option-1').css("margin-top", "0px");
    $('#popularity-1').hide();
        $('.option-2').css("margin-top", "-46px");
    $('#popularity-2').show();
        $('.option-3').css("margin-top", "0px");
    $('#popularity-3').hide();
  })

  $('.option-3').hover(function(){
        $('.option-1').css("margin-top", "0px");
    $('#popularity-1').hide();
        $('.option-2').css("margin-top", "0px");
    $('#popularity-2').hide();
        $('.option-3').css("margin-top", "-46px");
    $('#popularity-3').show();
  })

  // Review Section






});
