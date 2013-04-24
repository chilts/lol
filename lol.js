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

function lol() {
    var i = parseInt(Math.random()*length, 10);
    return exclamations[i];
};

lol.middleware = function(req, res, next) {
    res.set('X-LOL', lol());
    next();
};

module.exports = lol;
