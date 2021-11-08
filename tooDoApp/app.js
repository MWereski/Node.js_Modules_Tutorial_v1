
const colors = require('colors');
const fs = require('fs');
const handleCommand = require('./handleCommand')
const parseArgs = require('minimist');

const command = parseArgs(process.argv.slice(2, 3));
delete command._;

handleCommand(command)