'use strict';
const events = require('./events.js');

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

events.on('create', delivered);
events.on('create', inTransit);
