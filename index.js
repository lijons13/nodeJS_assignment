const fs = require('fs');
const os = require('os');
const http = require('http');


const data = 'Node.js is a JavaScript-based platform that is mainly used to create I/O-intensive web applications such as chat apps, multimedia streaming sites, etc. It is built on Google Chrome’s V8 JavaScript engine. A web application is software that runs on a server and is rendered by a client browser that accesses all of the application’s resources through the internet. ';
// fs.writeFile('nodejs_architecture.txt', data, (err, data) => {
//     if (!err) {
//         console.log("Data written to file");
//     }
// })

fs.writeFileSync('nodejs_architecture.txt', data);


// fs.readFile('nodejs_architecture.txt', (err, data) => {
//     if (err) {
//         console.log('ERROR>', err);
//     }
//     else {
//         console.log(data.toString());
//     }
// })
const readAndPrintData = fs.readFileSync('nodejs_architecture.txt');
console.log('DATA1>>', readAndPrintData.toString())

const data2 = '\nVPS servers offer base capabilities and environment to integrate Node.js apps with developer tools and APIs. Hostinger’s VPS gives you more control and flexibility over your hosting environment and offers you much more than what you are paying for. It has template build for Node.js – Ubuntu 22.04 with Node.js. This makes it super easy and swift to start. It also comes with OpenLiteSpeed server. Besides, they also offer CloudPanel template which allows Node.js applications creation, making it easier to start and manage Node.js apps. With a slick, easy-to-use interface, you can figure everything out quickly even with no experience with VPS.0';


// fs.appendFile('nodejs_architecture.txt', data2, (err) => {
//     if (err) {
//         console.log('ERROR>', err);
//     }
//     else {
//         console.log('Data2 appended successfully');
//         // console.log('DATA>>', data)
//     }
// })

fs.appendFileSync('nodejs_architecture.txt', data2);
const newData = fs.readFileSync('nodejs_architecture.txt');
console.log('DATA2>>>>>', newData.toString())

// deletion of file 

// fs.unlink('nodejs_architecture.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('file deleted successfully');
//     }
// })
fs.unlinkSync('nodejs_architecture.txt')
console.log('\nfile deleted')

// challenge 5\
console.log('Operating system name:', os.type());
console.log('OS release:', os.release());

// creating server

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('<h1>I AM Happy to Learn Full Stack Web Development From PW Skills</h1>')
    }
})
server.listen(3005)

// 
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();
// const subscribeMessage = (channelName) => {
//     console.log(`Thanks for Subscribing to ${channelName}`)
// }
// eventEmitter.addListener('subscribe', subscribeMessage);
// eventEmitter.emit('subscribe', 'college wallah')
// // 

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
const subscribeMessage = (channelName) => {
    console.log(`Thanks for subscribing ${channelName}`)
};
eventEmitter.addListener('subscribe', subscribeMessage);

eventEmitter.emit('subscribe', 'Physical Wallah')

// eventEmitter.removeListener('subscribe', subscribeMessage);
// eventEmitter.emit('subscribe', 'PhW')
console.log(`The default maximum number of event listners are : ${eventEmitter.getMaxListeners()}`)
eventEmitter.setMaxListeners(5);
console.log(`The updated maximum number of event listners are :${eventEmitter.getMaxListeners()}`)