import React from 'react';
import ReactDOM from 'react-dom';
import ChatApp from './ChatApp.jsx';
//import $ from 'jquery';
// require('./jquery.200');
// window.jQuery = $;
// require('./jquery.signalr.113');

//require('ms-signalr-client');
//import 'ms-signalr-client';

 var api = "chaturang-server.azurewebsites.net";
 // var api = "localhost:34778";

// var connection = $.hubConnection('http://' + settings.api);
{/*var chathub = connection.createHubProxy("ChatHub");*/}

{/*connection.start()*/}
//     .done(function (data) {
//         console.log('Now connected, connection ID=' + connection.id);
//     })
//     .fail(function (err) {
//         console.error('Could not connect. ' + err);
//     });

//var config = require('config');

ReactDOM.render(<ChatApp apiUrl={api}/>, document.getElementById('react-container'));