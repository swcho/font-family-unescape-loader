# font-family-unescape-loader

Unicode Font Family Name Unescaping

Webpack css-loader escape unicode string on "font-family" as described below issue.

https://github.com/webpack-contrib/css-loader/issues/317

And my genius PM is complaining it and want to show as it is.

If you have the same situation. Use this loader...

Just place font-family-unescape-loader right before css-loader

## before

style.css
```css
.korean {
    font-family: '한글 SS 한글';
}
```

```
require('css-loader!./style.css');
```

output
```
.korean {
    font-family: '\D55C\AE00   SS \D55C\AE00';
}
```

## after

```
require('font-family-unescape-loader!css-loader!./style.css');
```
