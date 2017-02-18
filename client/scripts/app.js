// YOUR CODE HERE:
var app = {
  init: function() {
    $('.username').on('click', app.handleUsernameClick);
    // $('#send').on('click', app.handleSubmit);
    $('#send .submit').on('click', app.handleSubmit);
    console.log('initialized');
  },
  send: function(message) {
    debugger;
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },
  fetch: function(url) {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: url,
      type: 'GET',
      // data: JSON.stringify(message),
      // contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message received');
        console.log(data);

        for (var i = 0; i < data.results.length; i++) {
          app.renderMessage(data.results[i]);
        }

      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to receive message', data);
      }
    });
  },
  clearMessages: function() {
    $('#chats').empty();
  },
  renderMessage: function(message) {
    // $('#chats').append($('<div class="username">', message.text));
    $('#chats').append($('<div class="container"></div>'));
    $('.container').append($('<div class="username">' + message.username + ':</div>'));
    $('.container').append($('<div class="message">' + message.text + '</div>'));
  },
  renderRoom: function(room) {
    // var roomName = message.
    $('#roomSelect').append($('<option>', {
      value: room,
      text: room
    }));
  },
  handleUsernameClick: function() {
  },
  handleSubmit: function(event) {
    // e.preventDefault();
    debugger;
    var message = ($('#message')[0].value);

  }
};


app.init();
app.fetch('http://parse.sfm6.hackreactor.com/chatterbox/classes/messages');
//window.setInterval();
