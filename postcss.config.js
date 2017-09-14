const browsers = [
  'last 3 Chrome major versions',
  'last 2 iOS major versions',
  'last 2 Firefox major versions',
  'Android >= 5.0',
  'last 1 QQAndroid major versions'
];

module.exports = ({ file, options, env }) => ({
  parser: file.extname === '.sss' ? 'sugarss' : false,
  plugins: {
    'postcss-import': { root: file.dirname },
    'postcss-nested': true,
    'postcss-cssnext': {
      browsers: browsers,
      features: {
        rem: false
      }
    },
    'cssnano': env === 'production'
  }
});
