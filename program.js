const program = require('commander');

program
    .option('-f, --force', 'Force shutdown')

module.exports = program;