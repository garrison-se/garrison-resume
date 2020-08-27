const postcssImport = require('postcss-import');
const postcssCustomMedia = require('postcss-custom-media');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssFocusVisible = require('postcss-focus-visible');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

function config() {
	var plugins = [
    postcssImport( { path: "src/style" } ),
    postcssCustomMedia(),
    postcssFocusVisible( { preserve: false } ),
    autoprefixer()
  ];

  if (process.env.NODE_ENV !== 'development') {
    plugins.push(
      postcssCustomProperties(),
      cssnano({
        discardDuplicates: false,
      })
    )
  }

	return { plugins }
}

module.exports = config;
