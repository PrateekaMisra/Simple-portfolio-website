(function($){ 
  var typed= new Typed('span.txt-rotate',{
    strings:["I'm a Web Developer", "I'm a Wordpress Developer", "I'm a Graphic Designer"],
    typespeed: 100,
    backspeed:100,
    fadeout:false,
    smartBackspace: true,
    loop: true
  });
})(jQuery);

$(document).ready(function(){
  $('.projects-wrapper').isotope({
    filter:'*',
    layoutMode:'masonry'
  });

  $('.list-filter a').click(function(){
    var selector= $(this).attr('data-filter');
    $('.list-filter a').removeClass('active');
    $(this).addClass('active');
    $('.projects-wrapper').isotope({
      filter: selector
    });
    return false;
  });

  $('.popup-image').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    gallery: {
      enabled:true,
      navigateByImgClick:true 
    }
  });

});