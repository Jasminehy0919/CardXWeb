$(".download-button").hover(function() {
  $(".title-QR").addClass("shake_effect");
  setTimeout(function(){
    $(".title-QR").removeClass("shake_effect");
  },500)
});








//
//
// var vh = $(window).height(),
//     vw = $(window).width(),
//     triggerPoint = $('.trigger').offset().top;
//
// var firstStop = 0,
//     endStop = 0;
//
// var colors = ['#ff0', '#f0f', '#0ff'];
//
// $(window).scroll(function()
// {
//   var scrollPos = $(document).scrollTop();
//
//   if(scrollPos < triggerPoint)
//   {
//     firstStop = scrollPos / vh * 75;
//     endStop = 100 - (scrollPos / vh * 75);
//
//     $('.container-test').css({
//       'background': 'linear-gradient(135deg, ' + colors[1] + ' ' + firstStop + '%, ' + colors[0] + ' ' + firstStop + '%, ' + colors[0] + ' ' + endStop + '%, ' + colors[1] + ' ' + endStop + '%)'
//     });
//   }
//   else
//   {
//     endStop = (scrollPos - triggerPoint) / vh * 75;
//     firstStop = 100 - (scrollPos - triggerPoint) / vh * 75;
//
//     $('.container-test').css({
//       'background': 'linear-gradient(225deg, ' + colors[1] + ' ' + firstStop + '%, ' + colors[2] + ' ' + firstStop + '%, ' + colors[2] + ' ' + endStop + '%, ' + colors[1] + ' ' + endStop + '%)'
//     });
//   }
//
// });



$(document).scroll(function(){
   if ($(document).scrollTop() > 320 ) {
     $('.main').addClass('active');
     $('.reveal-main').addClass('activetwo');
   }

  else {
    $('.main').removeClass('active');
         $('.reveal-main').removeClass('activetwo');
  }

});
