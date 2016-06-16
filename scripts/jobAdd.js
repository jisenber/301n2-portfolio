jobConstructor = {};

function employment (job) {
  this.position = job.position;
  this.institution = job.institution;
  this.boss = job.boss;
  this.website = job.website;
  this.role = job.role;
}

employment.all = [];

employment.prototype.toHtml = function() {
  var source = $('#jobAddScript').html();  //template script grabbed
  var jobTemplate = Handlebars.compile(source); // template is compiled
  var compiledJobs = jobTemplate(this);
  return compiledJobs;
};

employment.loadAll = function(rawData) {
  rawData.forEach(function(ele) {
    employment.all.push(new employment(ele));
  });
};

employment.extractAll = function(rawData) {
  if (localStorage.rawData) {
    employment.loadAll(rawData);
    jobConstructor.renderJobPage();
  } else {
    $.getJSON('data/jobData.json', function(data) {
      employment.loadAll(data);
      var stringData = JSON.stringify(data);
      localStorage.setItem('jobs', stringData);
      jobConstructor.renderJobPage();
    });
  };
};

jobConstructor.renderJobPage = function() {
  employment.all.forEach(function(a){
    $('#jobList').append(a.toHtml());
  });
};
