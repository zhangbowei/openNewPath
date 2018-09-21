const getUrl = require("./getUrl");
const getClipboard = require("./getClipboard");

const stepArr = [getClipboard, getUrl];
const runStep = function(iterator) {
    if (iterator === stepArr.length) return;
    return (data) => stepArr[iterator](data).then(runStep(++iterator));
}

const openNewPath = function() {
    return runStep(0)().catch( (err) => console.log(err));
}

module.exports = openNewPath;