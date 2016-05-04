var input  = PUBNUB.$("message");
var send   = PUBNUB.$("send");
var output = PUBNUB.$("output");
var pubnub = PUBNUB({
  publish_key   : "pub-c-140e6d65-1f00-49fd-9c55-2c6df9d26236"
, subscribe_key : "sub-c-1ff30074-116b-11e6-996b-0619f8945a4f"
});

pubnub.subscribe({ channel : "my_channel", message : receiver });

function receiver(message) {
  output.innerHTML += "<br>" + message;
}

PUBNUB.bind( "mousedown", send, function() {
  var message = input.value;
  input.value = "";
  pubnub.publish({ channel: "my_channel", message : message });
});