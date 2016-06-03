var employments = [];

function employment (job) {

  this.position = job.position;
  this.institution = job.institution;
  this.boss = job.boss;
  this.website = job.website;
  this.role = job.role;
}

employment.prototype.toHtml = function() {
  var $newJob = $('div.template').clone();

  $newJob.find('.position').html('<b>Position:</b> ' + this.position);
  $newJob.find('.institution').html('<b>Institution:</b> ' + this.institution);
  $newJob.find('.boss').html('<b>Boss:</b> ' + this.boss);
  $newJob.find('.website').html('<b>Website:</b> ' + this.website);
  $newJob.find('.role').html('<b>Role:</b> ' + this.role);

  $newJob.append('<hr>');

  $newJob.removeClass('template');
  return $newJob;
};

jobData.forEach(function(ele) {
  employments.push(new employment(ele));
});

employments.forEach(function(a){
  $('#jobList').append(a.toHtml());
});
