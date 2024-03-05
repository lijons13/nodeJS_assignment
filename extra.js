const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const geek1 = (msg) => {
    console.log(`geek1 ${msg}`);
}
const geek2 = (msg) => {
    console.log(`geek2 ${msg}`);
}
const geek3 = (msg) => {
    console.log(`geek3 ${msg}`);
}

eventEmitter.on('events', geek1)
eventEmitter.on('events', geek2)
eventEmitter.on('events', geek3)

eventEmitter.removeListener('events', geek1)
eventEmitter.emit('events', 'hello from kannan')








