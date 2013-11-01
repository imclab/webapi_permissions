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
            var children = tr.querySelectorAll('td');
            var out = {};

            if(children.length) {
                out.name = parsePermissionName(children[0]);
                out.apiName = parseApiName(children[1]);
                out.apiURL = parseApiURL(children[1]);
                // we're skipping the api description
                out.appType = parseAppType(children[3]);
                // skipping 'access' property and 'default granted' columns
                out.platforms = parseAppPlatforms(children[6]);
            }
            

            return out;
        }

        function parsePermissionName(td) {
            var value = td.querySelector('code');
            if(value) {
                return value.innerHTML;
            }
            return 'unParsable';
        }

        function parseApiName(td) {
            var node = td.querySelector('a');
            if(node) {
                return node.innerHTML;
            }
            return 'unknown';
        }

        function parseApiURL(td) {
            var node = td.querySelector('a');
            if(node) {
                return node.href;
            }
            return 'unknown';
        }

        function parseAppType(td) {
            return td.innerHTML;
        }

        function parseAppPlatforms(td) {
            var txt = td.textContent;
            return txt.split(',').map(function(p) { return p.trim(); });
        }

        return permissions;
    });

    console.log(permissions.length, 'permissions gathered');

    permissions.forEach(function(p, i) {
        console.log(i, JSON.stringify(p, null, 4));
    });

    phantom.exit();

});

