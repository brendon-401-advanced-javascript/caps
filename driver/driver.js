'use strict';
const events = require('../events.js');

const io = require('socket.io-client');


let serverHost = 'http://localhost:5000';

const hostConnection = io.connect(serverHost);

function inTransit(payload) {
    setTimeout(() => {
        if(payload.event == 'Pickup') {
            setTimeout(() => {
                console.log('Picking Up Order#:', payload.payload.order_ID);
            },1000)
            payload.event = 'In Transit';
                console.log('EVENT:',payload );
        }

    },1000);
}

function delivered(payload) {
    setTimeout(() => {
        if(payload.event == 'In Transit') {
            payload.event = 'Delivered';
            console.log('EVENT:', payload);
        }
    },3000)
}

// events.on('create', delivered);
hostConnection.on('create', inTransit);
