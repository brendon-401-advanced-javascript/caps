'use strict';

const io = require('socket.io')(5000);

io.on('connection', (socket) => {
    console.log(socket.id, 'is connected');
    socket.on('create', (payload) => {
        console.log('new Pickup', payload);
        io.emit('create', payload);
    });
    socket.on('pickup', (payload) => {
        console.log('In Transit I.D#', payload.payload.order_ID);
        io.emit('pickup', payload); 
    });

    socket.on('delivered', (payload) => {
        console.log('Package', payload.payload.order_ID, 'was Delivered');
    });
});


   

