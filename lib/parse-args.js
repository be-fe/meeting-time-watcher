var packageJson = require('../package.json');

module.exports = {
    init: function (argv) {
        return program.version(packageJson.version)
            .option('-d, --overdue-interval', 'The interval that the reminder occurs after overdue. (Integer, in minutes)')
            .option('-l, --lang', 'The language to use (cn | en)')
    }
};