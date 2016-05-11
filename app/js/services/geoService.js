myApp.factory('geoService', function ($rootScope) {
	
	this.channel = '';
	
	if (this.channel === '') {
		this.channel = 'north';
	}
	
	this.channelSwitch = function (or) {
		this.channel = or;
		$rootScope.$broadcast('channelSwitch', or);
		return this.channel;
	}
	
	this.getChannel = function() {
		return this.channel;
	}
	
	return this;
});