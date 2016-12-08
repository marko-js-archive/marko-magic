var path = require('path');
var isProduction = (process.env.NODE_ENV === 'production');

/*
Allow requiring *.marko files
*/
require('marko/node-require').install();
require('marko/compiler/config').meta = true;

/*
Enable res.marko
*/
require('marko/express');

/*
Browser Refresh
*/
require('marko/browser-refresh').enable();
require('lasso/browser-refresh').enable('*.marko *.css *.less *.styl *.scss *.sass *.png *.jpeg *.jpg *.gif *.webp *.svg');

/*
Lasso
*/
require('lasso').configure({
    plugins: [
        require('lasso-marko') // Auto compile Marko template files
    ],

    // Directory where generated JS and CSS bundles are written
    outputDir: path.join(process.cwd(), './static'),

    // URL prefix for static assets
    urlPrefix: '/static',

    // Only bundle up JS and CSS files in production builds
    bundlingEnabled: isProduction,

    // Only minify JS and CSS files in production builds
    minify: isProduction,

    // Only fingerprint JS and CSS files in production builds
    fingerprintsEnabled: isProduction
});
