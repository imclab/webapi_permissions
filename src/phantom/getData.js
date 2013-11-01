var argsReader = require('./argsReader');

var src_url = argsReader.get('src_url');
var dst_file = argsReader.get('dst_file', 'output.json');
var webpage = require('webpage');

console.log('reading from', src_url, 'writing to', dst_file);

var page = webpage.create();

page.onConsoleMessage = function(msg) {
    console.log("CONSOLE>", msg);
};

page.open(src_url, function(status) {

    if(status !== 'success') {
        console.log('There is something amiss with this site', success);
        phantom.exit();
    }

    var permissions = page.evaluate(function() {

        var trs = document.querySelectorAll('table tr');
        var permissions = [];
        
        if(trs.length > 0) {
            trs = Array.prototype.slice.call(trs);
        }

        console.log(trs);

        trs.forEach(function(tr, index) {
            var numChildren = tr.childElementCount;

            console.log(index, numChildren);

            if(numChildren === 6) {
                permissions.push(parseCertified(tr));
            } else if(numChildren === 7) {
                permissions.push(parseHostedAndPrivileged(tr));
            }


        });

        function parseCertified(tr) {
            return {};
        }

        function parseHostedAndPrivileged(tr) {
            return {};
        }

        return permissions;
    });

    console.log(permissions.length);

    phantom.exit();

});

