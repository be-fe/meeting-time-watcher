module.exports = function (lang) {
    lang = lang || 'zh_CN';

    var langMap = require('./lang/' + lang);

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
};