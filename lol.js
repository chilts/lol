var exclamations = [
    'lol',
    'rofl',
    'wtf',
    'OMG',
    'OMGWTFBBQ',
    'O RLY?',
    'YA RLY!',
    '<3',
    'wut!',
    'hipster',
];
var length = exclamations.length;

module.exports = function lol() {
    var i = parseInt(Math.random()*length, 10);
    return exclamations[i];
};
