

$(window).load(function(){
    $('.preloader').fadeOut(1000);    
});

$(function(){

  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#gallery').parallax("100%", 0.3);
    $('#menu').parallax("100%", 0.2);
    $('#team').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);

  }
  initParallax();

  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

  $('#gallery a').nivoLightbox({
        effect: 'fadeScale',
    });

});

