var argsReader = require('./argsReader');

var src_url = argsReader.get('src_url');
var dst_file = argsReader.get('dst_file', 'output.json');

console.log('reading from', src_url, 'writing to', dst_file);

phantom.exit();
