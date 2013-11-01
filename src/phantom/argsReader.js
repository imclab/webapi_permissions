var args = require('system').args;

function valueOf(token) {
    var parts = token.split('=');
    parts.shift();
    return parts.join('=');
}

function getArg(key, defaultValue) {
    var regexp = new RegExp('^--' + key + '=');
    var value = defaultValue;

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

