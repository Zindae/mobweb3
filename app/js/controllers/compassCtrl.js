myApp.controller('compassCtrl', function($scope, $rootScope, $element, $window, PubNub, geoService) {

// Lyssnar på mobilrotation
	window.addEventListener("deviceorientation", handleOrientation, true);
	
	var p = PUBNUB.init({
		subscribe_key: 'sub-c-792334ce-11d0-11e6-b406-02ee2ddab7fe',
		publish_key: 'pub-c-60fc3e1b-22a6-42b0-86c7-ea2e89337753'
	});
	
	var west = 'west';
	var north = 'north';
	var south = 'south';
	var east = 'east';
	
	$scope.test = geoService.channel;
		
	// var output = document.querySelector('#output'),
	// input = document.querySelector('#input'),
	// button = document.querySelector('#button'),
	// avatar = document.querySelector('#avatar'),
	// presence = document.querySelector('#presence');
	var channel = $scope.test;
	
	// avatar.className = 'face-' + ((Math.random() * 13 + 1) >>> 0) + ' color-' + ((Math.random() * 10 + 1) >>> 0);
	
	// $rootScope så alla barn kan få tillgång till värdet
	function handleOrientation(event) {
		$rootScope.$apply(function (){
			$rootScope.alpha = event.alpha;
			if ($rootScope.alpha === null) {
				$rootScope.alpha = 1;
				$scope.test = geoService.channelSwitch(north);
			}
			console.log($rootScope.alpha);
		});
	};
	 

	  
	// Alpha är rotation av telefonen runt Z-axel
	// använder $watch för att $rootScope är "utanför" Angular.



	$scope.$watch('alpha', function(newValue){
		$scope.orientation = $rootScope.alpha;
		if ($scope.orientation > 225 && $scope.orientation < 310) {
			$scope.test = geoService.channelSwitch(west);
			
			p.unsubscribe({
				channel : north,
				channel : east,
				channel : south,
			});
			
			p.history({
				channel : west,
				callback : function(m){
					// console.log(JSON.stringify(m))
					// output.innerHTML = '<p><i class="' + m.avatar + '"></i><span>' + m.text.replace(/[<>]/ig, '') + '</span></p>' + output.innerHTML;
					$scope.history = m[0];
				},
				count : 5, // 100 is the default
				reverse : false // false is the default
			});

			p.subscribe({
				channel: west,
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
		}
		
		
		else if ($scope.orientation > 135 && $scope.orientation < 224) {
			$scope.test = geoService.channelSwitch(north);
						
			p.unsubscribe({
				channel : west,
				channel : east,
				channel : south,
			});
			
			p.subscribe({
				channel: north,
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
			p.history({
				channel : north,
				callback : function(m){
					// console.log(JSON.stringify(m))
					// output.innerHTML = '<p><i class="' + m.avatar + '"></i><span>' + m.text.replace(/[<>]/ig, '') + '</span></p>' + output.innerHTML;
					$scope.history = m[0];
				},
				count : 5, // 100 is the default
				reverse : false // false is the default
			});
		}
		else if ($scope.orientation > 45 && $scope.orientation < 135) {
			$scope.test = geoService.channelSwitch(east);
						
			p.unsubscribe({
				channel : north,
				channel : west,
				channel : south,
			});
			
			p.history({
				channel : east,
				callback : function(m){
					// console.log(JSON.stringify(m))
					// output.innerHTML = '<p><i class="' + m.avatar + '"></i><span>' + m.text.replace(/[<>]/ig, '') + '</span></p>' + output.innerHTML;
					$scope.history = m[0];
				},
				count : 5, // 100 is the default
				reverse : false // false is the default
				
			});
			p.subscribe({
				channel: east,
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
			

		}
		else {
			$scope.test = geoService.channelSwitch(south);
								
			p.unsubscribe({
				channel : north,
				channel : west,
				channel : east,
			});
					
			p.subscribe({
				channel: north,
				callback: function(m) {
				  $scope.output = m.text;
			},
			
			presence: function(m) {
				if (m.occupancy > 1) {
					presence.textContent = m.occupancy + ' people online';
				} else {
					presence.textContent = 'Nobody else is online';
				}
			},

			});
	
		}
	
	
	// p.publish({
	  // channel: north,
	  // message: {
		// avatar: avatar.className,
		// text: $scope.newMessage
	  // },
	  // x: (input.value = '')
	  
	// });
			


		// }
	// });
	
  // $scope.publish = function() {
	  // console.log($scope.newMessage);
    // p.publish({
      // channel: north,
      // message: {
        // avatar: avatar.className,
        // text: $scope.newMessage,
		
      // },
      // x: ($scope.newMessage = '')
    // });
  // }	
	// $scope.publish = function() {
	  // console.log(geoService.channel, $scope.newMessage);
	  // PubNub.ngPublish({
		// channel: geoService.channel,
		// message: $scope.newMessage,
		// callback : function(m){
			// console.log('m', m)
		// }
	  // });

	// };	

	

	
	// $scope.channel = geoService.channel;
	// var channel = geoService.getChannel();
	
	// $scope.$on('channelSwitch', function(event,data) {
     // // you could inspect the data to see if what you care about changed, or just update your own scope
		// $scope.channel = data;
		// var channel = $scope.channel;
	// });	

	// if (channel === undefined) {
		// $scope.channel = 'north';
	// }

	// Assign a random avatar in random color




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

	// p.bind('click', button, $scope.publish);
  
	// p.unsubscribe({
		// channel : 'my_channel',
	// });

	// console.log(lmao)a;

		
		
	// var options = {
	  // enableHighAccuracy: true,
	  // timeout: 5000,
	  // maximumAge: 0
	// };

	// function success(pos) {
	  // var crd = pos.coords;

	  // console.log('Your current position is:');
	  // console.log('Latitude : ' + crd.latitude);
	  // console.log('Longitude: ' + crd.longitude);
	  // console.log('More or less ' + crd.accuracy + ' meters.');
	// };

	// function error(err) {
	  // console.warn('ERROR(' + err.code + '): ' + err.message);
	// };

	// navigator.geolocation.getCurrentPosition(success, error, options);

	});

 });