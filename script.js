$(function() {
  $(window).on('load', function() {
    $('.loader').delay(1500).fadeOut(800);
    $('.loader-bg').delay(1000).fadeOut(700);
  });
  setTimeout(function() {
    $('.loader-bg').fadeOut(500);
  }, 5000);
});