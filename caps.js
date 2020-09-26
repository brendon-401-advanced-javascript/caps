'use strict';

const faker = require('faker');

const Events = require('events');

const events = new Events(); 


function pickup(payload) {
    console.log('EVENT:',payload);
}

function inTransit(payload) {
    setTimeout(() => {
        if(payload.event == 'Pickup') {
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

// vendor
events.on('create', pickup);
// driver
events.on('create', inTransit);
// driver
events.on('create', delivered);
    


setInterval(() => {
    let storeNum = faker.phone.phoneNumber();
    let orderNum = faker.random.uuid();
    let customerName = faker.name.findName();
    let customerAddress = faker.address.streetAddress();
    events.emit('create', { event:'Pickup', time: Date(Date.now), payload: { store: storeNum, orderID: orderNum, customer: customerName, address: customerAddress }});
}, 5000);  

