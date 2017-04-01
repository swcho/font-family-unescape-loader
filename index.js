
const RE_FONT_FAMILY = /font-family\s*:\s*([^;\n]+)[;\n]/g;
const RE_FONT_NAMES = /(?:(?:'|(?:\\"))?([(?:\\\\)\w\d ]+)(?:'|(?:\\"))?(,\s*)?)/g;
const RE_DOUBLE_COUTE = /\\"/g;
const RE_SPACE = /[ ]+/g;
const RE_UNICODE = /\\\\([\d\w]{4})/g;
module.exports = function(source) {
    console.log('font-family-unescape-loader');
    console.log(source);
    source = source.replace(RE_FONT_FAMILY, (str, fontNames) => {
        const strFontNames = fontNames.replace(RE_DOUBLE_COUTE, "'").replace(RE_FONT_NAMES, (match, fontName, sep) => {
            return `'${fontName.replace(RE_SPACE, ' ').replace(RE_UNICODE, (m, unicode) => String.fromCharCode(parseInt(unicode, 16)))}'${sep || ''}`;
        });
        return `font-family: ${strFontNames};`;
    });
    console.log(source);
    return source;
}