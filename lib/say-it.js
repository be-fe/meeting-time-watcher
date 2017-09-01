var sp = require('shell-promise');

var sayIt = {
    init: function (program) {

    },
    options: function (program) {
        var opts = {
            duration: program.duration,
            lang: program.lang,
            overdueInterval: program.overdueInterval,

            errors: [],
            warnings: []
        };

        if (typeof opts.duration === 'undefined') {
            opts.duration = 8
        }

        if (typeof opts.overdueInterval === 'undefined') {
            opts.overdueInterval = 2;
        }

        opts.lang = opts.lang || 'cn';

        if (isNaN(opts.duration)) {
            opts.errors.push('Duration cannot be parsed as an integer');
        }

        if (isNaN(opts.overdueInterval)) {
            opts.errors.push('Overdue interval cannot be parsed as an integer');
        }

        if (!(opts.lang in {'cn': 1, 'en': 1})) {
            opts.warnings.push('Lang is not set correctly, `cn` is used be default');
            opts.lang = 'cn';
        }

        return opts;
    }
};

module.exports = sayIt;