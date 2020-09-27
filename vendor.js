const events = require('./events.js');

function pickup(payload) {
    console.log('EVENT:',payload);
}

events.on('create', pickup);

