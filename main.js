$(window).scroll(function(){
  if ($(window).scrollTop() >= 45) {
      $('.nav-fixed').addClass('fixed-header');
  }
  else {
      $('.nav-fixed').removeClass('fixed-header');
  }
});

$(window).on("load",function() {
  $('.heroSectionPadding').css('paddingTop', $('header').outerHeight());
});

$(window).resize(function(){
  $('.heroSectionPadding').css('paddingTop', $('header').outerHeight());
});

document.querySelector('.smalldesc').addEventListener('click', function() {
  document.querySelector('.smalldesc').classList.toggle('expand');
});