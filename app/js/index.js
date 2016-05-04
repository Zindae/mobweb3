var input  = PUBNUB.$("message");
var send   = PUBNUB.$("send");
var output = PUBNUB.$("output");
var pubnub = PUBNUB({
  publish_key   : "pub-c-60fc3e1b-22a6-42b0-86c7-ea2e89337753"
, subscribe_key : "sub-c-792334ce-11d0-11e6-b406-02ee2ddab7fe"
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