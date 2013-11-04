var argsReader = require('./argsReader');

var src_url = argsReader.get('src-url');
var dst_file = argsReader.get('dst-file', 'output.json');
var webpage = require('webpage');
var fs = require('fs');

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

        
        trs.forEach(function(tr, index) {

            var numChildren = tr.childElementCount;
            var childrenPermissions = {};

            console.log(index, numChildren);

            if(numChildren === 6) {
                childrenPermissions = parseCertified(tr);
            } else if(numChildren === 7) {
                childrenPermissions = parseHostedAndPrivileged(tr);
            }

            if(Object.keys(childrenPermissions).length > 0) {
                permissions.push(childrenPermissions);
            }

        });


        return permissions;

        //

        function parseCertified(tr) {
            
            var children = tr.querySelectorAll('td');
            var out = {};

            if(children.length) {
                out.name = parsePermissionName(children[0]);
                out.apiName = parseApiName(children[1]);
                out.apiURL = parseApiURL(children[1]);
                // we're skipping the api description
                out.appType = parseAppType(children[3]);
                // skipping 'access' property column (col 4)
                out.platforms = parseAppPlatforms(children[5]);
            }
            

            return out;

        }

        function parseHostedAndPrivileged(tr) {

            var children = tr.querySelectorAll('td');
            var out = {};

            if(children.length) {
                out.name = parsePermissionName(children[0]);
                out.apiName = parseApiName(children[1]);
                out.apiURL = parseApiURL(children[1]);
                // we're skipping the api description (2)
                out.appType = parseAppType(children[3]);
                // skipping 'access' property and 'default granted' columns (4, 5)
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
            } else {
                var txt = td.innerHTML.trim();
                if(txt.length) {
                    return txt;
                }
            }
            return 'unknown';
        }

        function parseApiURL(td) {
            var node = td.querySelector('a');
            if(node) {
                return node.href;
            }
            return null;
        }

        function parseAppType(td) {
            return td.innerHTML;
        }

        function parseAppPlatforms(td) {
            var txt = td.textContent;
            return txt.split(',').map(function(p) { return p.trim(); });
        }

    });


    addAndroidPermissions(permissions);

    permissions.forEach(function(p, i) {
        console.log(i, JSON.stringify(p, null, 4));
    });

    fs.write(dst_file, JSON.stringify(permissions, null, 4));

    phantom.exit();

});


// "Augment" the array of permissions with the name of the equivalent permission in Android, if it exists
function addAndroidPermissions(permissions) {
    //var androidPermissions = require('./androidPermissions');
}
