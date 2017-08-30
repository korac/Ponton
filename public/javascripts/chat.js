/**
 * Created by kristijankorac on 30/08/2017.
 */
var socket = io.connect('http://localhost:3000');

$(document).on('click', '.new-message-container .send-button', function() {
  emitMessage();
});

socket.on('chat', function (data) {
  console.log(data.sender +': ' + data.message);
});

$('.new-message-container .send-button').keypress(function(e) {
  var key = e.which;
  if (key === 13) {
    emitMessage();
  }
});

function emitMessage() {
  var new_message = $('.new-message-container input').val();
  socket.emit('chat', { sender: 'Kox', message: new_message });
}