$(document).ready(() => {

    $('.menu').mouseenter(function(){
      $('.nav-menu').show();
    });
  
    $('.nav-menu').mouseleave(function(){
      $(this).hide();
    });
  
    $('.btn').hover(function(){
      $(this).addClass('btn-hover');
    },function(){
      $(this).removeClass('btn-hover');
    });
  
    $('.postText').focus();
  
    $('.postText').keyup(function(){
      var remaining = 140 - $(this).val().length;
      $('.characters').html(remaining);
      (remaining <= 0) ? $('.wordcount').addClass('red'):$('.wordcount').removeClass('red');
    });
  }); 
  