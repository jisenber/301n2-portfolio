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

function preview () {
  $('#messagePreview').empty();
  messages.context = {
    fullName: $('#userName').val(),
    email: $('#userEmail').val(),
    comment: $('#userComment').val()
  };
  var input = $('#previewScript').html();  //template script grabbed
  var previewTemplate = Handlebars.compile(input); // template is compiled
  previewContext = previewTemplate(messages.context);
  $('#messagePreview').append(previewContext);
  var messageJSON = JSON.stringify(messages.contact);
};

$('#previewButton').on('click', preview);

//Below is the way to preview things without handlebars using fewer lines of code
  // $('#messagePreview').empty();
  // messages.contact = {
  //   fullName: $('#userName').val(),
  //   email: $('#userEmail').val(),
  //   comment: $('#userComment').val()
  // };
  // $('#messagePreview').append('<br>' + messages.contact.fullName + '<br>' + messages.contact.email + '<br>' + messages.contact.comment);
  // var messageJSON = JSON.stringify(messages.contact);
//});

$('#submitButton').on('click', function () {
  var ref = new Firebase("https://popping-heat-3312.firebaseio.com/");
  ref.push(messages.context);
});

function sendToJSON(data) {
  var $newData = JSON.stringify(data);
  console.log($newData);
} 
  //This is what I did to send my data to a JSON file. Sent it to the console
  //then got it in the console and copied and pasted it. ow resourceful!
