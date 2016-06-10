$('section#about, section#experience, section#projects').hide();
$('.nav').on('click', function(e) {
  e.preventDefault();
  $('section').not(this).hide();
  var $whereToGo = $(this).data('index');
  $('section#' + $whereToGo).show();
});

('#facebook', '#github').off();

/*
$('#navMenu').on('click', function() {
  $('li.nav').fadeIn(400);
  $(this).hide();
});
*/
