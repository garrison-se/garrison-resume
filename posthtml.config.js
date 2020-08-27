const config = {
  plugins: {
    "posthtml-minifier": {
      collapseWhitespace: "true",
      collapseInlineTagWhitespace: "true",
      minifyCSS: "true",
      processConditionalComment: "true",
      removeComments: "true"
    }
  }
}

module.exports = config;
