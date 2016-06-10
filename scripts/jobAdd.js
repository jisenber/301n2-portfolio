var employments = [];

function employment (job) {
  this.position = job.position;
  this.institution = job.institution;
  this.boss = job.boss;
  this.website = job.website;
  this.role = job.role;
}

employment.prototype.toHtml = function() {
  var source = $('#jobAddScript').html();  //template script grabbed
  var jobTemplate = Handlebars.compile(source); // template is compiled
  var compiledJobs = jobTemplate(this);
  return compiledJobs;
};

jobData.forEach(function(ele) {
  employments.push(new employment(ele));
});

employments.forEach(function(a){
  $('#jobList').append(a.toHtml());
});
