const wrapper = require('./wrapper');
const shell = require('shelljs');

function getClipboard() {
    const args = arguments;
    const command = 'pbpaste';

    shell.exec(command, function(err, stdout, stderr) {
        if (err) throw err;
        wrapper.getRes(args)(stdout);
    });
}

module.exports = wrapper.setPromise(getClipboard);
