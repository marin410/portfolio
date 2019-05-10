
$(window).load(function(){
	$(".loader-bg").fadeOut(1800);
    $("#loading").fadeOut(1800);
　　　$(".main-contents").fadeIn(6000);
});

//ページトップへ

$(function() {
      $('a#pageTop').on('click', function(){
            $('html,body').animate({
                  scrollTop: 0
            }, 'swing');
            return false;
            });
});

//var target = document.getElementById("about");
//target.scrollIntoView({
//  behavior: "smooth"
//  }
//);



 jQuery(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});