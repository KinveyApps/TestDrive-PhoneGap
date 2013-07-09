// Wrap in an [IIFE](http://benalman.com/news/2010/11/immediately-invoked-function-expression/).
(function() {
  // Ping the Kinvey service when the button is clicked.
  var button = document.getElementById('ping');
  button.addEventListener('click', function() {
    var promise = Kinvey.ping();
    promise.then(function(response) {
      alert('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
    }, function(error) {
      alert('Kinvey Ping Failed. Response: ' + error.description);
    });
  }, false);
}());