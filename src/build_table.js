var spawn = require('child_process').spawn;

var url = 'https://developer.mozilla.org/en-US/Apps/Developing/App_permissions';
var dstFile = '../dist/permissions.json';

run('phantomjs', [
        'phantom/getData.js',
        '--src-url=' + url,
        '--dst-file=' + dstFile
], function() {
    console.log('done!');
});

function run(command, args, endCallback) {
    
    if(!args) {
        args = [];
    }

    var spawned = spawn(command, args);

    spawned.stdout.on('data', function(data) {
        console.log('OUT> ' + data);
    });
    
    spawned.stderr.on('data', function(data) {
        console.log('ERR> ' + data);
    });

    spawned.on('exit', endCallback);

}


