
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function () {
    console.log('Lister called');
});

emitter.emit('messageLogged');

