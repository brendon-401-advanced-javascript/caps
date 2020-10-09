const events = require('./events.js');
const faker = require('faker');

function pickup(payload) {
    console.log('EVENT:',payload);
}

setInterval(() => {
    let stores = ['World of Wonders', 'Ivars Chowder House', 'Red Robin', 'Code Fellows'];
    let storeName = stores[Math.floor(Math.random()*stores.length)]
    let store_Num = faker.phone.phoneNumber();
    let orderNum = faker.random.uuid();
    let customerName = faker.name.findName();
    let customerAddress = faker.address.streetAddress();
    events.emit('create', { event:'Pickup', time: Date(Date.now), payload: { store: store_Num, store_Name: storeName, order_ID: orderNum, customer: customerName, address: customerAddress }});
}, 7000);  


events.on('create', pickup);

