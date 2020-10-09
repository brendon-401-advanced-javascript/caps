'use strict';
const io = require('socket.io-client');

let serverHost = 'http://localhost:5000';

const hostConnection = io.connect(serverHost);
