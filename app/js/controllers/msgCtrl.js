myApp.controller('msgCtrl', function($scope, geoService) {

 var output = document.querySelector('#output'),
    input = document.querySelector('#input'),
    button = document.querySelector('#button'),
    avatar = document.querySelector('#avatar'),
    presence = document.querySelector('#presence');
	
	$scope.channel = geoService.channel;
	
	$scope.changeChannel = function () {
		$scope.channel = geoService.channel;
		console.log('msg', $scope.channel);
	}
  

  
  // Assign a random avatar in random color
  avatar.className = 'face-' + ((Math.random() * 13 + 1) >>> 0) + ' color-' + ((Math.random() * 10 + 1) >>> 0);

  var p = PUBNUB.init({
    subscribe_key: 'sub-c-792334ce-11d0-11e6-b406-02ee2ddab7fe',
    publish_key: 'pub-c-60fc3e1b-22a6-42b0-86c7-ea2e89337753'
  });

  p.subscribe({
    channel: $scope.channel,
    callback: function(m) {
      output.innerHTML = '<p><i class="' + m.avatar + '"></i><span>' + m.text.replace(/[<>]/ig, '') + '</span></p>' + output.innerHTML;
    },
    presence: function(m) {
      if (m.occupancy > 1) {
        presence.textContent = m.occupancy + ' people online';
      } else {
        presence.textContent = 'Nobody else is online';
      }
    }
  });

  p.bind('keyup', input, function(e) {
    (e.keyCode || e.charCode) === 13 && publish()
  });

  p.bind('click', button, publish);

  function publish() {
    p.publish({
      channel: $scope.channel,
      message: {
        avatar: avatar.className,
        text: input.value
      },
      x: (input.value = '')
    });
  }

});