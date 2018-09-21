const argv = require('yargs').argv;
const shell = require("shelljs");
const wrapper = require("./wrapper");


function getUrl() {
    const args = arguments;
    const url = wrapper.getData(args);
    const prefix = argv.prefix ? argv.prefix : [];
    const postfix = url.split('/').slice(-2).join('/');
    const command = ['open', prefix+postfix].join(' ');

    shell.exec(command, function (err, stdout, stderr) {
        if (err) throw err;
        wrapper.getRes(args)(stdout);
    });
}

module.exports = wrapper.setPromise(getUrl);