
const path = require('path');
const should = require('should');
const webpack = require('webpack');

const pathLoader = path.resolve(__dirname, '../index.js');
const pathBasicTest = path.resolve(__dirname, './basic/style.css');

describe('font-family-unescape-loader', () => {
    it('should be loaded correctly', (done) => {
        webpack({
            entry: `${pathLoader}!css-loader!${pathBasicTest}`,
            output: {
                path: path.join(__dirname, 'output'),
            },
        }, (err, stat) => {
            done();
        });
    });
});
