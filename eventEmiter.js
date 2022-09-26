const EventEmitter = require('events');
const customEmiter = new EventEmitter();

customEmiter.on('click', function(){
    console.log('Click Event called');
});

customEmiter.on('doubleclick', function(){
    console.log('DoubleClick Event called');
});


customEmiter.emit('click');
customEmiter.emit('doubleclick');

