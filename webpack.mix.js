let mix = require('laravel-mix');
mix.js('js/app.js', 'js/script.js').css('css/app.css', 'css/style.css')
.options({
    processCssUrls: false
});
mix.webpackConfig({
    target: ['web', 'es5'],
    resolve: {
        modules: ['node_modules']
    }
})