(function() {
jobConstructor = {};
ProjectConstructor = {};

function Employment (job) {
  this.position = job.position;
  this.institution = job.institution;
  this.boss = job.boss;
  this.website = job.website;
  this.role = job.role;
}

function Projects (task) {
  this.projectName = task.projectName;
  this.language = task.language;
  this.image = task.image;
  this.hours = task.hours;
  this.description = task.description;
};

Projects.all = [];
Employment.all = [];

Employment.prototype.toHtml = function() {
  var source = $('#jobAddScript').html();  //template script grabbed
  var jobTemplate = Handlebars.compile(source); // template is compiled
  var compiledJobs = jobTemplate(this);
  return compiledJobs;
};

Employment.loadAll = function(rawData) {
  rawData.forEach(function(ele) {
    Employment.all.push(new Employment(ele));
  });
};

Employment.extractAll = function(data) {
  if (localStorage.jobs) {
    Employment.loadAll(JSON.parse(localStorage.jobs));
    jobConstructor.renderJobPage();
  } else {
    $.getJSON('data/jobData.json', function(data) {
      Employment.loadAll(data);
      var stringData = JSON.stringify(data);
      localStorage.setItem('jobs', stringData);
      jobConstructor.renderJobPage();
    });
  };
};

jobConstructor.renderJobPage = function() {
  Employment.all.forEach(function(a){
    $('#jobList').append(a.toHtml() + "<hr class = 'breakUp' align='left'</hr>");
  });
};

var projNames = Projects.all.map(function(a) {
return a.projectName
});

 Projects.loadEm = function(rawData) {
   rawData.forEach(function(ele) {
     Projects.all.push(new Projects(ele));
   });
   projNames = Projects.all.map(function(a) {
   return a.projectName
   });
   projNames.forEach(function(proj) {
     $('#projectList').append("<a href=''><span class = 'projInstance'>" + proj + '</span></a>' + '<br><br>').addClass('projects')
   });
 };

 Projects.hoursWorked = function() {
   return Projects.all.reduce(function(a,b) {
     return a + b.hours;
   }, 0);
 };

Projects.getProjDetails = function() {
  return Projects.all.map(function(a) {
    return {
      title: a.projectName,
      language: a.language,
      description: a.description,
      hours: a.hours
    };
  });
};

//This isnt the most user-friendly way to display the details of my projects,
//but I will clean it up soon and make it better. This was just to make sure that
//I can make the functionality work... and it does!
Projects.getData = function(callback) {
  $.getJSON('data/projects.json', function (data) {
    callback(data);
    $('#projFooter').append('<br>Jacob has worked ' + '<b>' + Projects.hoursWorked() + ' </b>hours on projects!')
      $('.projInstance').on('click', function(e) {
         e.preventDefault();
          Projects.getProjDetails().forEach(function(instance, i){
              if (Projects.getProjDetails()[i].title === e.target.textContent) {
                console.log(Projects.getProjDetails()[i]);
                var projInput = $('#projDetails').html();
                var compileProjInput = Handlebars.compile(projInput)
                $('#projFooter').append(compileProjInput(Projects.getProjDetails()[i])) //Megan is a genius!!!!
              }
          })
      });
  });
}

Employment.extractAll();
Projects.getData(Projects.loadEm);
})(window);
