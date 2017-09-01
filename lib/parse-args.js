var packageJson = require('../package.json');

module.exports = {
    init: function (argv) {
        var program = require('commander');

        program.version(packageJson.version)
            .option('-d, --duration [duration]', 'The duration of the meeting. (Integer, in minutes, default: 8)', parseInt)
            .option('-o, --overdue-interval [overdueInterval]', 'The interval that the reminder occurs after overdue. (Integer, in minutes, default: 2)', parseInt)
            .option('-l, --lang [lang]', 'The language to use (cn | en, default: cn)')
            .parse(argv);

        // console.log('@@d', program.overdueInterval, program.duration, process.argv);

        return program;
    }
};