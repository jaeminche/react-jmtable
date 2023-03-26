module.exports = {
  content: ['./src/**/*.js', './public/index.html'],
  css: ['./src/lib/index.css'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
};
