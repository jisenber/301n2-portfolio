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

  $newJob.find('.position').html('Position: ' + this.position);
  $newJob.find('.institution').html('Institution: ' + this.institution);
  $newJob.find('.boss').html('Boss: ' + this.boss);
  $newJob.find('.website').html('Website: ' + this.website);
  $newJob.find('.role').html('Role: ' + this.role);

  $newJob.append('<hr>');

  $newJob.removeClass('template');
  return $newJob;
};

jobData.forEach(function(ele) {
  employments.push(new employment(ele));
});

employments.forEach(function(a){
  $('#jobList').append(a.toHtml())
});
