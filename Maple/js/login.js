  $(function(){
  $('.login_menu_btn').click(function(){
    $('.login_form').show();
    $('html,body').css('overflow','hidden').css('height','100%');
  });
  $('#close').click(function(){
    $('.login_form').hide();
    $('html,body').css('overflow','auto').css('height','auto');
  });
})
