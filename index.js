
var program = require('./lib/parse-args').init(process.argv);
require('./lib/say-it').init(program);