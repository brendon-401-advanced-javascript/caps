'use strict';
const faker = require('faker');
const events = require('../events');

let direction = ['left', 'right', 'straight'];
let newDirection =  direction[Math.floor(Math.random()*direction.length)];
let address = faker.address.streetAddress();

function gps(payload) {
    let badGPS = direction[Math.floor(Math.random()*direction.length)];
    console.log(badGPS);
    console.log(payload.Location);
}


events.on('direction', gps);

events.emit('direction', { Address: address, Location: newDirection});