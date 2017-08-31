module.exports = {
    init: function (lang) {
        lang = lang || 'cn';
        var langMap;

        try {
            langMap = require('./lang/' + lang);
        }
        catch (ex) {
            langMap = require('./lang/' + (lang = 'cn'));
        }

        global._i = function (key /*, ...args */) {
            var raw = langMap[key];
            var args = arguments;

            if (!raw) {
                return 'Unresolved key : ' + key;
            }
            else {
                return raw.replace(/(^|.)?\$\{(\d+)\}/g, function (match, prefix, index) {
                    if (prefix === '\\') {
                        return match;
                    }
                    else {
                        return (prefix || '') + (args[index] || '');
                    }
                });
            }
        };
    }
};