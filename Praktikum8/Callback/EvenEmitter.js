// import events module
var events = require('events');

// create an EventEmitter object
var EventEmitter = new events.EventEmitter();

// create an event handler as follows 
var connectHandler = function connected() {
    console.log('connection successful.');

    // fire the data_received event 
    EventEmitter.emit('data_received');
}

// bind the data_received event with the  anonymous function
EventEmitter.on('data_received', function() {
    console.log('data received successful.');
});

// fire the connection event 
EventEmitter.emit('connection');

console.log("Program Ended.");