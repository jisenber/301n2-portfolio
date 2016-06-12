$('section#about, section#experience, section#projects').hide();
$('.nav').on('click', function(e) {
  e.preventDefault();
  $('section').not(this).hide();
  var $whereToGo = $(this).data('index');
  $('section#' + $whereToGo).show();
});


$('#menuIcon').on('click', function() {
  $('#navBar').toggle();
});

$(window).resize(function() {
  if (window.innerWidth > 640) {
    $('#navBar').show();
  } else {
    $('#navBar').hide();
  };
});

/*
$("#menuIcon").on('mouseenter', function() {
  $('nav li').addClass("showNav");
  $('nav li').removeClass("hideNav");

});

$("#menuIcon, nav").on('mouseleave', function() {
  $('nav li').addClass("hideNav");
  $('nav li').removeClass("showNav");

});
*/


// if (window.innerWidth < 640) {
//     $('nav li').hide();
//     $('.navContainer').on('mouseenter', function () {
//       $('nav li').show();
//     });
//     $('.navContainer').on('mouseleave', function () {
//       $('nav li').hide();
//     });
//   };



/*
$('nav').hover(function() {
  $('nav li').toggle();
});
*/
