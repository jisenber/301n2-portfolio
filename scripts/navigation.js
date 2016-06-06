$('section#about, section#experience, section#projects').hide();
$('.nav').on('click', function(e) {
  e.preventDefault();
  console.log($(this).data('index'));
  var $whereToGo = $(this).data('index');
  $('section#' + $whereToGo).siblings().hide();
  $('section#' + $whereToGo).show();
});
