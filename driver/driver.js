'use strict';
const events = require('../events.js');

const io = require('socket.io-client');


let serverHost = 'http://localhost:5000';

const hostConnection = io.connect(serverHost);

function inTransit(payload) {
    setTimeout(() => {
        if(payload.event == 'New Pickup') {
            payload.event = 'In Transit';
                hostConnection.emit('pickup',payload );
        }

    },1000);
}

function delivered(payload) {
    setTimeout(() => {
        if(payload.event == 'In Transit') {
            payload.event = 'Delivered';
            hostConnection.emit('delivered', payload);
        }
    },3000);
}

hostConnection.on('create', inTransit);
hostConnection.on('pickup', delivered);
