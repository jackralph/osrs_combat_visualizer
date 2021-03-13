const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .copy('resources/js/utils', 'public/js/utils')
    .sass('resources/sass/app.scss', 'public/css');
    
mix.js('resources/js/CV.jsx', 'public/js/CV.js')
    .js('resources/js/components/CombatVisualizer.jsx', 'public/js/components')
    .react()