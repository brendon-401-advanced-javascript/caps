'use strict';

const io = require('socket.io')(5000);

io.on('connection', (socket) => {
    console.log(socket.id, 'is connected');
    socket.on('create', (payload) => {
        console.log('new Pickup', payload);
    });
});


// require('./vendor/vendor.js');
// require('./driver/driver.js');
   

