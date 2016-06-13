var messages= {};

$('section#about, section#experience, section#projects, section#contact').hide();
$('.nav').on('click', function(e) {
  e.preventDefault();
  $('section').not(this).hide();
  var $whereToGo = $(this).data('index');
  $('section#' + $whereToGo).show();
});

$('#menuIcon').on('click', function() {
  $('#navBar').toggle();
  $('.headshot').toggle();
});

$(window).resize(function() {
  if (window.innerWidth > 640) {
    $('#navBar').show();
  } else {
    $('#navBar').hide();
  };
});

$('#navBar').on('click', function() {
  if (window.innerWidth < 640) {
    $('#navBar').hide();
  }
});

$('#previewButton').on('click', function () {
  $('#messagePreview').empty();
  messages.contact = {
    fullName: $('#userName').val(),
    email: $('#userEmail').val(),
    comment: $('#userComment').val()
  };
  $('#messagePreview').append('<br>' + messages.contact.fullName + '<br>' + messages.contact.email + '<br>' + messages.contact.comment);
  var messageJSON = JSON.stringify(messages.contact);
  console.log(messageJSON);
});

 $('#submitButton').on('click', function () {
   var ref = new Firebase("https://popping-heat-3312.firebaseio.com/");
   ref.push(messages.contact);
 });
