const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// yargs.version('1.0.0')




//create add command
yargs.command({
    command: 'add',
    describe: 'to add note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
       notes.addNote(argv.title,argv.body)
    } 
})


//create remove command
yargs.command({
    command: 'remove',
    describe: 'to remove note',
    handler: function() {
        console.log('removing a note')
    }
})


//create read command
yargs.command({
    command: 'read',
    describe: 'to read a note',
    handler: function(){
        console.log('reading a note')
    }
})

//create a list command
yargs.command({
    command: 'list',
    describe: 'to list notes',
    handler: function(){
        console.log('lsiting a note')
    }
})
yargs.parse()