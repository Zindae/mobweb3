myApp.controller('compassCtrl', function($scope, geoService) {

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  // var absolute = event.absolute;
  var alpha    = event.alpha;
  // var beta     = event.beta;
  // var gamma    = event.gamma;

  
  // Alpha är rotation av telefonen runt Z-axel
  $('#output').append(alpha);
}
	
	$scope.setChannel = function (event) {
		geoService.channel = event.target.id;
		// console.log(geoService.channel);
	}
	
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);

});