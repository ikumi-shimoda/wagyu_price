 $(function(){
    $('a[href^="#"]:not(.no-smooth)').click(function() {
      var speed = 800;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - 15;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });