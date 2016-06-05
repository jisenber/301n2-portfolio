$('section#about').hide();
$('.nav').on('click'/*delegates the click to the link element*/, function(e) {
  e.preventDefault();
  console.log($(this).data('index'));
  $('section#employment').hide();
  var $whereToGo = $(this).data('index');
  $('section#' + $whereToGo).show();
});
