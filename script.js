var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
// All elements to be transparent until full load
$('body').css('opacity', 0);
$(window).load(function() {
  $('body').css('opacity', 1);
});
//Mobile specific setting
if (mobile) {
  $('#group1 img').css('left', '30%');
  $('#group1 img').css('transform', '-30%');
    //adjust font sizes
    //adjust logo positioning
    //size of each layer group
  }
