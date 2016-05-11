myApp.controller('msgCtrl', function($scope, $rootScope, geoService) {

	// var output = document.querySelector('#output'),
	// input = document.querySelector('#input'),
	// button = document.querySelector('#button'),
	// avatar = document.querySelector('#avatar'),
	// presence = document.querySelector('#presence');
	// var channel;
	// // $scope.channel = geoService.channel;
	// // var channel = geoService.getChannel();
	
	// $scope.$on('channelSwitch', function(event,data) {
     // // you could inspect the data to see if what you care about changed, or just update your own scope
		// $scope.channel = data;
		// var channel = $scope.channel;
	// });	

	// // if (channel === undefined) {
		// // $scope.channel = 'north';
	// // }

	// // Assign a random avatar in random color
	// avatar.className = 'face-' + ((Math.random() * 13 + 1) >>> 0) + ' color-' + ((Math.random() * 10 + 1) >>> 0);

	// var p = PUBNUB.init({
		// subscribe_key: 'sub-c-792334ce-11d0-11e6-b406-02ee2ddab7fe',
		// publish_key: 'pub-c-60fc3e1b-22a6-42b0-86c7-ea2e89337753'
	// });

	// p.subscribe({
		// channel: channel,
		// callback: function(m) {
		  // output.innerHTML = '<p><i class="' + m.avatar + '"></i><span>' + m.text.replace(/[<>]/ig, '') + '</span></p>' + output.innerHTML;
	// },
	// presence: function(m) {
		// if (m.occupancy > 1) {
			// presence.textContent = m.occupancy + ' people online';
		// } else {
			// presence.textContent = 'Nobody else is online';
		// }
	// }
	// });

	// p.bind('keyup', input, function(e) {
		// (e.keyCode || e.charCode) === 13 && publish()
	// });

	// p.bind('click', button, publish);
  
	// // p.unsubscribe({
		// // channel : 'my_channel',
	// // });

  // function publish() {
    // p.publish({
      // channel: channel,
      // message: {
        // avatar: avatar.className,
        // text: input.value
      // },
      // x: (input.value = '')
    // });
  // }

});