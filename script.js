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
  $('#group1 img').css('width', '1em;');
  $('#group1 h1').css('font-size', '1.5em');
  $('#group1 h2').css('font-size', '1em');
  $('#group1 h3').css('font-size', '.75em');
  $('#group2').css('height', '500px');
  $('#group3').css('height', '400px');
  $('#group4').css('height', '400px');
  $('#group5').css('height', '400px');
  $('#group6').css('height', '600px');
  $('#group7').css('height', '400px');
  $('#group7 img').css('left', '30%');
  $('#group7 img').css('transform', '-30%');
    //adjust font sizes
    //adjust logo positioning
    //size of each layer group
  }
