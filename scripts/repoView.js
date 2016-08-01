(function() {
  function placeDataonScreen(data) {
    data.forEach(function(ele) {
      repoInfo.all.push(ele);
    });
    var truncatedRepos = repoInfo.populateRepos();
    truncatedRepos.forEach(function(ele) {
      if (ele.fork === false) {
        $('#repoList').append(ele.name + '<br>' + '<br>');
      };
    });
  };

  repoInfo.getRepos(placeDataonScreen);

})(window);
