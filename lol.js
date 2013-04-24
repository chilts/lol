var exclamations = [
    'lol',
    'rofl',
    'wtf',
];
var length = exclamations.length;

module.exports = function lol() {
    var i = parseInt(Math.random()*length, 10);
    return exclamations[i];
};
