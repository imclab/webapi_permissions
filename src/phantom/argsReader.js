var args = require('system').args;

function valueOf(token) {
    var parts = token.split('=');
    parts.shift();
    return parts.join('=');
}

function getArg(key) {
    var regexp = new RegExp('^--' + key + '=');
    var value;

    args.forEach(function(arg, i) {
       if(regexp.test(arg)) {
           value = valueOf(arg);
       }
    });

    return value;
}

module.exports = {
    get: getArg
};

