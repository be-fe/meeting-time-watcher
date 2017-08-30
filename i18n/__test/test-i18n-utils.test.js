var lazy = require('lazy-assert');
var i18n = require('../i18n-utils')();

describe('Test the i18n utils', function () {
    before(function() {
        lazy.setLocation(__filename);
    });

    it('Should process the arguments correctly', function () {
        lazy.peek('1-arguments', {
            'no arg': _i('timeLeft'),

            'one arg 123': _i('timeLeft', 123),
            'one arg "hello"': _i('timeLeft', 'hello'),
            'one arg null': _i('timeLeft', null),
            'one arg undefined': _i('timeLeft', undefined),

            'two args 123, "123"': _i('timeLeft', 123),
            'two args undefined true': _i('timeLeft', true)
        });
    });

    it('Should handle escaped cases', function () {
        lazy.peek('2-escaped', {
            '_i(testKey, ...)': _i(_i.testKey, 'arg#1', 'arg#2', 'arg#3')
        });
    });

    it('Should use the correct language set correctly', function () {

    });

    it('Should provide some error feedback', function () {

    });
});