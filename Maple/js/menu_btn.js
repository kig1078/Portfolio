$(function(){
  $('.glo_nav').mousedown(function(){
    $('.swiper-container').css('visibility','hidden');
  })
  $('.list_menu_btn').click(function(){
    $('.header').css('left','0');
    $('.close_btn').css('visibility','visible');
  });
  $('.close_btn').click(function(){
    $('.header').css('left','-100%');
    $('.swiper-container').css('visibility','visible');
    $('.container').css('background','rgba(255,239,222,0.5)');
    $('.items_content').css('visibility','hidden');
    $('.clothes_category').css('visibility','hidden');
    $('.close_btn').css('visibility','hidden');
  });
})
