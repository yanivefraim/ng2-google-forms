module.exports = {
 injectChanges: false,
 ui: false,
 port: 8080,
 notify: false,
 logLevel: 'silent',
 files: ['./**/*.{html,htm,css,js}'],
 watchOptions: {
   ignored: 'node_modules'
 },
 server: {
   baseDir: ['./', './app', './dist']
 }
};
