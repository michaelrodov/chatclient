import React from 'react';
import ReactDOM from 'react-dom';
import ChatApp from './ChatApp.jsx';
//import $ from 'jquery';
require('./jquery.200');
window.jQuery = $;
require('./jquery.signalr.113');

//require('ms-signalr-client');
//import 'ms-signalr-client';


var server = "localhost:34778";

var connection = $.hubConnection('http://' + server);
{/*var chathub = connection.createHubProxy("ChatHub");*/}

{/*connection.start()*/}
//     .done(function (data) {
//         console.log('Now connected, connection ID=' + connection.id);
//     })
//     .fail(function (err) {
//         console.error('Could not connect. ' + err);
//     });

ReactDOM.render(<ChatApp apiUrl={server} connection={connection}/>, document.getElementById('react-container'));