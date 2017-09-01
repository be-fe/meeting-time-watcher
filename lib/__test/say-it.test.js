var lazy = require('lazy-assert');

var sayIt = require('../say-it');
var parse = require('../parse-args');

var options = function (argv) {
    delete require.cache[require.resolve('commander')];
    argv = ['node', 'command'].concat(argv);
    return sayIt.options(parse.init(argv));
};

/* global before, beforeEach, after, afterEach */
describe('Test say it : core program', function () {
    before(function () {
        lazy.setLocation(__filename);
    });

    beforeEach(function () {
    });
    after(function () {
    });
    afterEach(function () {
    });

    it('Should parse the options', function () {
        lazy.peek('1-parse-options', {
            '01 command -l en': options(['-l', 'en']),
            '02 command -d 10': options(['-d', '10']),
            '03 command -o 5': options(['-o', '5']),
            '04 command -l qq -o 3': options(['-l', 'qq', '-o', '3']),
            '05 command -l en -d 20': options(['-d', '20', '-l', 'en']),
            '06 command -o 5 -d 30 -l 123': options(['-o', '5', '-d', '30', '-l', '123']),
        });
    });

    it('Should get error from wrong-typed args', function() {
        lazy.peek('1-parse-options', {
            '01 command -d abc': options(['-d', 'abc']),
            '02 command -o null': options(['-o', 'null']),
            '03 command -d 123abc -o null': options(['-d', '123abc', '-o', 'null']),
        });
    });
});